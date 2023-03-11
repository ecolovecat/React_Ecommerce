<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ProductList;
use Illuminate\Http\Request;

class ProductListController extends Controller
{
    //
    public function productListByRemark(Request $request) {
        $remark = $request->remark;
        $productlist = ProductList::where('remark', $remark)->get();

        return $productlist;
    }

    public function productListByCategory(Request $request) {
        $category = $request->category;
        $productlist = ProductList::where('category', $category)->get();

        return $productlist;
    }

    public function productListBySubCategory(Request $request) {
        $category = $request->category;
        $sub_category = $request->subcategory;
        $product_list = ProductList::where('category', $category)->where('subcategory', $sub_category)->get();

        return $product_list;

    }
}
