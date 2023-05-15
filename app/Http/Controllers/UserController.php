<?php

namespace App\Http\Controllers;

use App\DataTables\UserFileDetailsDataTable;
use App\DataTables\UsersDataTable;
use App\Models\User;
use App\Models\UserFile;
use App\Models\UserReport;
use App\DataTables\UserDetailsDataTable;
use App\Services\GenerateReportService;

class UserController extends Controller
{

    private User $user;
    private UserFile $userFile;
    private UserReport $userReport;

    public function __construct(User $user, UserFile $userFile, UserReport $userReport)
    {
        $this->user = $user;
        $this->userFile = $userFile;
        $this->userReport = $userReport;
    }

    public function index(UsersDataTable $dataTable)
    {
        return $dataTable->render('users.index');
    }

    public function view($id, UserDetailsDataTable $dataTable)
    {
        $userData = $this->user->find($id);

        return $dataTable->with('id', $id)
            ->render('users.view', ['user' => $userData]);
    }

    public function viewFile($id, $file_id, UserFileDetailsDataTable $dataTable)
    {
        $userData = $this->user->find($id);
        $userFile = $this->userFile->find($file_id);

        return $dataTable->with('file_id', $file_id)
            ->render('users.view-file', [
                'user' => $userData,
                'userFile' => $userFile,
            ]);
    }

    public function viewReport(User $user, UserFile $userFile)
    {
        $reports = $this->userReport
            ->with([$this->userReport::RELATION_DETAILS])
            ->where('user_file_id', $userFile->id)
            ->get();

        return view('users.view-report',
            [
                'user' => $user,
                'userFile' => $userFile,
                'reports' => $reports
            ]);
    }

    public function regenerate(User $user, UserFile $userFile)
    {
        $service = new GenerateReportService($userFile);
        $service->generateReports();

        return redirect()
            ->route('user.view-report',
                ['user' => $user->id, 'user_file' => $userFile->id])
            ->with("success", "The reports has been regenerated successfully");
    }

}
