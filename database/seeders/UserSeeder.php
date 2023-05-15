<?php

namespace Database\Seeders;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            [
                'first_name' => 'Admin',
                'email' => 'admin@test.local',
                'email_verified_at' => Carbon::now(),
                'password' => 'admin@test.local',
                'role' => 'admin'
            ],
            [
                'first_name' => 'Admin User',
                'email' => 'adminuser@test.local',
                'email_verified_at' => Carbon::now(),
                'password' => 'adminuser@test.local',
                'role' => 'admin-user'
            ],
            [
                'first_name' => 'User',
                'email' => 'user@test.local',
                'email_verified_at' => Carbon::now(),
                'password' => 'user@test.local',
                'role' => 'user'
            ],
        ];

        foreach ($users as $key => $user) {
            $u = User::updateOrCreate([
                'first_name' => $user['first_name'],
                'email' => $user['email'],
                'email_verified_at' => $user['email_verified_at'],
                'password' => bcrypt($user['password'])
            ]);

            $u->assignRole($user['role']);
        }
    }
}
