<?php


use Inertia\Inertia;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    // return view('welcome');
 
    return Inertia::render('Welcome' ,[
        'foo' => 'bar'
    ]);
 
 
 });
 Route::get('/about', function () {
    // return view('welcome');
 
    return Inertia::render('About' ,[
        'foo' => 'bar'
    ]);
 
 
 });
 Route::get('/contact', function () {
    // return view('welcome');
 
    return Inertia::render('Contact' ,[
        'foo' => 'bar'
    ]);
 
 
 });