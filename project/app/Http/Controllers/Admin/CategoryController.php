<?php

namespace App\Http\Controllers\Admin;


use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Subcategory;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    //
    public function allCategory() {
        $categories = Category::all();
        $categoryDetailsArray = [];

        foreach ($categories as $value) {
            $subcategory = Subcategory::where('category_name', $value['category_name'])->get();
            $item = [
              'category_name' => $value['category_name'],
              'category_image' => $value['category_image'],
              'sub_name' => $subcategory
            ];

            array_push($categoryDetailsArray, $item);
        }

        return $categoryDetailsArray;
    }
}
