<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleAndPermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Permission::create(['name' => 'view-users']);
        Permission::create(['name' => 'create-users']);
        Permission::create(['name' => 'edit-users']);
        Permission::create(['name' => 'delete-users']);

        Permission::create(['name' => 'view-snp']);
        Permission::create(['name' => 'import-snp']);

        $adminRole = Role::create(['name' => 'admin']);
        $adminUserRole = Role::create(['name' => 'admin-user']);
        $user = Role::create(['name' => 'user']);

        $adminRole->givePermissionTo([
            'view-users',
            'create-users',
            'edit-users',
            'delete-users',
            'view-snp',
            'import-snp',
        ]);

        $adminUserRole->givePermissionTo([
            'view-users',
            'create-users',
            'edit-users',
            'delete-users',
            'view-snp',
            'import-snp',
        ]);
    }
}
