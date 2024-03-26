<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\RequestEquipment;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RequestEquipmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        return Inertia::render('Request/Equipment',[
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $obj = User::with(["position_ids","depart_ids","companies_ids"])->find($request->user()->id);
        return Inertia::render('Request/AddEquipment',[
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
            'obj' => $obj,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(RequestEquipment $requestEquipment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(RequestEquipment $requestEquipment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, RequestEquipment $requestEquipment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(RequestEquipment $requestEquipment)
    {
        //
    }
}
