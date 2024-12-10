<?php

require_once "Controller.php";
require_once "Repository/OrderRepositery.php";

class OrderController extends Controller{

    private OrderRepositery $orders;

    public function __construct() {
        $this->orders = new OrderRepositery();
    }

    protected function processGetRequest(HttpRequest $request){
        $orderstatus = $request->getParam("orderstatus");
        if($orderstatus){
            return $this->orders->findByOrderStatus($orderstatus);
        }

}}

?>