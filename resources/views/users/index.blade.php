<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Manage Users') }}
        </h2>
    </x-slot>
    <div class="py-12 px-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">

                <div class="container pb-4 pt-4">
                    <div class="card">
                        <div class="card-header">Manage Users</div>
                        <div class="card-body">
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
</x-app-layout>
