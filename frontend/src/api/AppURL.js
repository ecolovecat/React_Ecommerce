const BaseURL = "http://127.0.0.1:8000/api"

const AppURL = {
    VisitorDetails: BaseURL + "/getVisitor",
    PostContact: BaseURL + "/postContact",
    AllSiteInfo: BaseURL + "/allSiteInfo",
    AllCategories: BaseURL + "/allCategories",
    AllSlider: BaseURL + "/allslider",
    NotificationHistory: BaseURL + "/notification",
    ProductListByRemark: function (Remark) {
        return BaseURL + "/productlistByRemark/" + Remark;
    },
    ProductListByCategory: function (category) {
        return BaseURL + "/productlistByCategory/" + category;
    },
    ProductListBySubCategory: function (category, subcategory) {
        return BaseURL + "/productlistBySubCategory/" + category + "/" + subcategory;
    },
    ProductDetails: function (code) {
        return BaseURL + "/productdetails/" + code;
    },
    ProductBySearch: function (searchbar){
        return BaseURL + "/search/" + searchbar;
    }
};

export default AppURL;
