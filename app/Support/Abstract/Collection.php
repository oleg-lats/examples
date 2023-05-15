<?php

namespace App\Support\Abstract;

use App\Support\Dto\DTO;
use App\Support\Dto\StandardSerializer;
use ArrayAccess;
use ArrayIterator;
use Countable;
use IteratorAggregate;

abstract class Collection extends DTO implements IteratorAggregate, ArrayAccess, Countable
{
    protected array $_items = [];

    protected $ofType;

    public function __construct(array $items = [], array $meta = [])
    {
        $this->_items = iterator_to_array($this->autoCastList($this->ofType, $items, null, []));
        parent::__construct($meta);
    }

    /**
     * @return ArrayIterator
     */
    public function getIterator()
    {
        return new ArrayIterator($this->_items);
    }

    /**
     * @return array
     */
    public function all()
    {
        return $this->_items;
    }

    public function jsonSerialize($serializer = StandardSerializer::class):array
    {
        return $this->toArray($serializer);
    }

    /**
     * @param string $serializer
     * @return array
     */
    public function toArray(string $serializer = StandardSerializer::class)
    {
        return array_map(function ($item) use ($serializer) {
            if ($item instanceof DTO) {
                return $item->jsonSerialize($serializer);
            }

            if (is_object($item) && method_exists($item, 'toArray')) {
                return $item->toArray();
            }
            return $item;
        }, $this->_items);
    }

    public function offsetExists($offset)
    {
        return array_key_exists($offset, $this->_items);
    }

    public function offsetGet($offset)
    {
        return $this->_items[$offset];
    }

    public function offsetSet($offset, $value)
    {
        $this->_items[$offset] = $value;
    }

    public function offsetUnset($offset)
    {
        unset($this->_items[$offset]);
    }

    public function count()
    {
        return count($this->_items);
    }

    public function first()
    {
        return $this->_items[0];
    }

    public function last()
    {
        return array_reverse($this->_items)[0];
    }

    public function pipeInto(string $class)
    {
        return new $class($this->_items);
    }
}
