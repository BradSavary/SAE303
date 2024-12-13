<?php

require_once "Controller.php";
require_once "Repository/ProductRepositery.php";

class ProductController extends Controller{

    private ProductRepositery $products;

    public function __construct() {
        $this->products = new ProductRepositery();
    }

    protected function processGetRequest(HttpRequest $request){
        $product_id = $request->getParam("salesevolution");
        if($product_id){
            return $this->products->findSalesEvolution($product_id);
        }

        $param = $request->getParam("product");
        if($param == "mostsold"){
            return $this->products->findMostSoldProduct();
        }
        else if($param == "lessstock"){
            return $this->products->findLessStockProduct();
        }
        else if ($param == "name"){
            return $this->products->findProductByName();
        }
        else if ($param == "product"){
            return $this->products->findProduct();
        }
}}

?>