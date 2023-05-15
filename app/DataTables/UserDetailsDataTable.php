<?php

namespace App\DataTables;

use App\Models\UserFile;
use Illuminate\Database\Eloquent\Builder as QueryBuilder;
use Yajra\DataTables\EloquentDataTable;
use Yajra\DataTables\Html\Builder as HtmlBuilder;
use Yajra\DataTables\Html\Column;
use Yajra\DataTables\Services\DataTable;

class UserDetailsDataTable extends DataTable
{
    /**
     * Build the DataTable class.
     *
     * @param QueryBuilder $query Results from query() method.
     */
    public function dataTable(QueryBuilder $query): EloquentDataTable
    {
        return (new EloquentDataTable($query))
            ->addColumn('action', function (UserFile $userFile) {
                return '<a
                href="' . route('user.view-file', ['user' => $userFile->user_id, 'user_file' => $userFile->id]) . '"
                ><i class="bi bi-file-earmark-text-fill" title="Open File Details"></i></a>
                <a
                href="' . route('user.view-report', ['user' => $userFile->user_id, 'user_file' => $userFile->id]) . '"
                ><i class="bi bi-file-person-fill" title="Open Report"></i></a>
                ';
            })
            ->editColumn('created_at', function (UserFile $userFile) {
                return ($userFile->created_at) ?
                    $userFile->created_at->format('M d, Y, g:i A')
                    : '';
            });
//            ->setRowId('id');
    }

    /**
     * Get the query source of dataTable.
     */
    public function query(UserFile $model): QueryBuilder
    {
        return $model->newQuery()
            ->where('user_id', $this->id);
    }

    /**
     * Optional method if you want to use the html builder.
     */
    public function html(): HtmlBuilder
    {
        return $this->builder()
            ->setTableId('userdetails-table')
            ->columns($this->getColumns())
            ->minifiedAjax()
            ->dom('frtip')
            ->selectStyleSingle()
            ->orderBy(1);
    }

    /**
     * Get the dataTable columns definition.
     */
    public function getColumns(): array
    {
        return [
            Column::computed('action')
                ->width(60)
                ->addClass('text-center')
                ->addClass('example-table-header'),
//            Column::make('id'),
            Column::make('name')
//                ->addClass('text-center')
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
        return 'UserDetails_' . date('YmdHis');
    }
}
