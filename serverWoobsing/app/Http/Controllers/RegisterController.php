<?php

namespace App\Http\Controllers;

// use App\model\register;
use App\Models\Register;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Register::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return Register::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\model\register  $register
     * @return \Illuminate\Http\Response
     */
    public function show(register $register)
    {
        return Register::find($register->id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\model\register  $register
     * @return \Illuminate\Http\Response
     */
    public function edit(register $register)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\model\register  $register
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, register $register)
    {
        $register = Register::findOrFail($register->id);
        $register->update($request->all());

        return $register;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\model\register  $register
     * @return \Illuminate\Http\Response
     */
    public function destroy(register $register)
    {
        $register = Register::findOrFail($register->id);
        $register -> delete();

        return 204;
    }
}
