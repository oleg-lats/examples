<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Result file: ').$userFile->name }}
        </h2>
    </x-slot>

    <div class="container text-center">
        <div class="row">
            <div class="col col-3">
                <div class="py-12">
                    <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div class="container py-4 px-4">
                            <div class="card text-left">
                                <div class="card-header">
                                    File Details
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                        <small>File name:</small>
                                        <h5>{{ $userFile->name}}</h5>
                                    </li>
                                    <li class="list-group-item">
                                        <small>File slug:</small>
                                        <h5>{{ $userFile->slug}}</h5>
                                    </li>
                                    <li class="list-group-item">
                                        <small>File size:</small>
                                        <h5>{{ $userFile->size}}</h5>
                                    </li>
                                    <li class="list-group-item">
                                        <small>Type:</small>
                                        <h5>{{ $userFile->mime}}</h5>
                                    </li>
                                    <li class="list-group-item">
                                        <small>Status:</small>
                                        <h5>{{ ucfirst($userFile->status->value)}}</h5>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col col-9">
                <div class="py-12">
                    <div class="max-w-7xl mx-auto">
                        <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg text-left">
                            <div class="row">
                                <div class="col text-left">
                                    <a class="btn btn-primary m-3" href="{{ route('user.view', ['id'=>$user->id]) }}"
                                       role="button">&laquo; Back to File list</a></div>
                                <div class="col text-right">
                                    <a class="btn btn-success m-3" href="{{ route('user.report-regenerate', ['user'=>$user->id, 'user_file'=>$userFile->id]) }}"
                                       role="button"><i class="bi bi-arrow-clockwise"></i> Regenerate Reports</a></div>
                            </div>
                            <div class="container pb-4 pt-0 px-4">
                            @if (session()->has('success'))
                                <div class="alert alert-success">
                                    {{ session()->get('success') }}
                                </div>
                            @endif
                                <div class="card">
                                    <div class="card-header text-left">Reports</div>
                                    <div class="card-body">
                                        @if ($reports->count())
                                            @foreach($reports as $report)
                                                <h6>Report: <u>{{ $report->report_name }}</u></h6>
                                                @if ($report->details->count())
                                                    <table class="table table-striped text-center table-light table-bordered border-indigo-400">
                                                        <thead>
                                                        <tr class="table-primary">
                                                            <th class="example-table-header">NAME</th>
                                                            <th class="example-table-header">SNP ID</th>
                                                            <th class="example-table-header">Non-risk Allele</th>
                                                            <th class="example-table-header">Risk Allele</th>
                                                            <th class="example-table-header">Score</th>
                                                            <th class="example-table-header" colspan="7">Customer Alleles</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        @foreach($report->details as $details)
                                                            <tr>
                                                                <td>{{ $details->gene_name }}</td>
                                                                <td>{{ $details->rsid_number }}</td>
                                                                <td>{{ $details->non_risk_allele }}</td>
                                                                <td>{{ $details->risk_allele }}</td>
                                                                <td>{{ $details->score }}</td>
                                                                <td>{{ $details->user_genotype_major }}{{ $details->user_genotype_minor }}</td>
                                                                <td>{{ $details->user_genotype_major }}</td>
                                                                <td>{{ $details->user_genotype_major_result }}</td>
                                                                <td>{{ $details->user_genotype_minor }}</td>
                                                                <td>{{ $details->user_genotype_minor_result }}</td>
                                                                <td>{{ $details->user_score }}</td>
                                                            </tr>
                                                        @endforeach
                                                        </tbody>
                                                        <tfoot>
                                                        <tr>
                                                            <th colspan="5" class="text-right example-table-total">Total</th>
                                                            <th class="example-table-total-number">{{ $report->score_total }}</th>
                                                            <th colspan="6"
                                                                class="text-right example-table-total-number">{{ $report->user_score_total }}</th>
                                                        </tr>
                                                        <tr>
                                                            <th colspan="5" class="text-right example-table-total">Percentage</th>
                                                            <th class="example-table-total-number">{{ $report->percentage_total }}</th>
                                                            <th colspan="6"
                                                                class="text-right example-table-total-number">{{ number_format($report->user_percentage_total, 2) }}</th>
                                                        </tr>
                                                        </tfoot>

                                                    </table>
                                                    <br>
                                                @else

                                                    <h6>No data</h6>
                                                @endif
                                            @endforeach
                                        @endif
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</x-app-layout>
