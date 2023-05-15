<?php

namespace App\DataTables;

use App\Models\User;
use Illuminate\Database\Eloquent\Builder as QueryBuilder;
use Yajra\DataTables\EloquentDataTable;
use Yajra\DataTables\Html\Builder as HtmlBuilder;
use Yajra\DataTables\Html\Column;
use Yajra\DataTables\Services\DataTable;

class UsersDataTable extends DataTable
{

    /**
     * Build the DataTable class.
     *
     * @param QueryBuilder $query Results from query() method.
     */
    public function dataTable(QueryBuilder $query): EloquentDataTable
    {
        return (new EloquentDataTable($query))
            ->addColumn('action', function (User $user) {
                return '<a
                href="' . route('user.view', ['id' => $user->id]) . '"
                ><i class="bi bi-file-earmark-text-fill" title="Open User Details"></i></a>';
            })
            ->editColumn('status', function (User $user) {
                return ucfirst($user->status);
            })
            ->editColumn('created_at', function (User $user) {
                return ($user->created_at) ?
                    $user->created_at->format('M d, Y, g:i A')
                    : '';
            })
            ->setRowId('id');
    }

    /**
     * Get the query source of dataTable.
     */
    public function query(User $model): QueryBuilder
    {
        return $model->newQuery();
    }

    /**
     * Optional method if you want to use the html builder.
     */
    public function html(): HtmlBuilder
    {
        return $this->builder()
            ->setTableId('users-table')
            ->columns($this->getColumns())
            ->minifiedAjax()
            ->orderBy(1)
            ->selectStyleSingle()
            ->dom('frtip');
    }

    /**
     * Get the dataTable columns definition.
     */
    public function getColumns(): array
    {
        return [
            Column::computed('action')
                ->width(60)
                ->addClass('text-center example-table-header'),
            Column::make('id')
                ->addClass('text-center example-table-header'),
            Column::make('first_name')
                ->addClass('text-center example-table-header'),
            Column::make('last_name')
                ->addClass('text-center example-table-header'),
            Column::make('email')
                ->addClass('text-center example-table-header'),
            Column::make('status')
                ->addClass('text-center example-table-header'),
            Column::make('created_at')
                ->addClass('text-center example-table-header'),
        ];
    }

    /**
     * Get the filename for export.
     */
    protected function filename(): string
    {
        return 'Users_' . date('YmdHis');
    }
}
