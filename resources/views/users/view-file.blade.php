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
                            <a class="btn btn-primary m-3" href="{{ route('user.view', ['id'=>$user->id]) }}" role="button">&laquo; Back to File list</a>
                            <div class="container pb-4 pt-0">
                                <div class="card">
                                    <div class="card-header text-left">Results</div>
                                    <div class="card-body text-center">
                                        {{ $dataTable->table() }}
                                    </div>
                                </div>
                            </div>

                            @push('scripts')
                                {{ $dataTable->scripts(attributes: ['type' => 'module']) }}
                            @endpush

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</x-app-layout>
