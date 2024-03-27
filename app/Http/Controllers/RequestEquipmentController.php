<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\ProblemType;
use App\Models\AssetType;
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
        $problem = ProblemType::where("is_active", true)->get();
        $asset = AssetType::where("is_active", true)->get();
        return Inertia::render('Request/AddEquipment',[
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
            "problem" => $problem,
            "asset" => $asset,
            'obj' => $obj,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $req)
    {
        ### Create a new Asset

        $dte = date('Y-m-d');
        $seq = RequestEquipment::where("request_date", $dte)->count()+1;
        $document_no = 'QF'. substr(date('Ym'),2) . sprintf("%04d",$seq);
        $reqEquip = new RequestEquipment();
        $reqEquip->document_no = $document_no;
        $reqEquip->request_date = $dte;
        $reqEquip->remark = "-";
        $reqEquip->spec_description = "-";
        $reqEquip->request_id = $req->user()->id;
        $reqEquip->status = 0;
        // approve_id
        $reqEquip->save();
        // return redirect()->back()->withInput($request->only('document_no'));
        return redirect()->route('request.equipment_show', ["id" => $reqEquip->id]);
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
