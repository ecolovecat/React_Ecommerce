<?php

use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\VisitorController;
use App\Http\Controllers\Admin\SiteInfoController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ProductListController;
use App\Http\Controllers\Admin\SliderController;
use App\Http\Controllers\Admin\ProductDetailsController;
use App\Http\Controllers\Admin\NotificationController;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
// get visitor
Route::get('/getVisitor', [VisitorController::class, 'getVisitorDetails']);

//get page contact
Route::post('/postContact', [ContactController::class, 'postContactDetails']);


// site info route
Route::get('/allSiteInfo', [SiteInfoController::class, 'allSiteInfo']);

// All categories route
Route::get('/allCategories', [CategoryController::class, 'allCategory']);

// ProductList route
Route::get('/productlistByRemark/{remark}', [ProductListController::class, 'productListByRemark']);

Route::get('/productlistByCategory/{category}', [ProductListController::class, 'productListByCategory']);

Route::get('/productlistBySubCategory/{category}/{subcategory}', [ProductListController::class, 'productListBySubCategory']);

// Slider Route
Route::get('/allslider', [SliderController::class, 'allSlider']);

// Product detail route
Route::get('/productdetails/{id}', [ProductDetailsController::class, 'productDetails']);

// Notification route
Route::get('/notification', [NotificationController::class, 'notificationHistory']);

// Search
Route::get('/search/{key}', [ProductListController::class, 'productBySearch']);
