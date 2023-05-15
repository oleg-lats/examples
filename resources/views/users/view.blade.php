<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Details: ').$user->fullName }}
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
                                User Details
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <small>First Name:</small>
                                    <h5>{{ $user->first_name}}</h5>
                                </li>
                                <li class="list-group-item">
                                    <small>Last Name:</small>
                                    <h5>{{ $user->last_name ?? '-'}}</h5>
                                </li>
                                <li class="list-group-item">
                                    <small>Email:</small>
                                    <h5>{{ $user->email ?? '-'}}</h5>
                                </li>
                                <li class="list-group-item">
                                    <small>Phone:</small>
                                    <h5>{{ $user->phone ?? '-'}}</h5>
                                </li>
                                <li class="list-group-item">
                                    <small>Uploaded files:</small>
                                    <h5>{{ $user->files()->count() }}</h5>
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
                            <a class="btn btn-primary m-3" href="{{ route('users.index') }}"
                               role="button">&laquo; Back to User list</a>
                            <div class="container pb-4">
                                <div class="card">
                                    <div class="card-header text-left">Uploaded Files</div>
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
