<?php

require_once "Controller.php";
require_once "Repository/CustomerRepositery.php";

class CustomerController extends Controller{

    private CustomerRepositery $customers;

    public function __construct() {
        $this->customers = new CustomerRepositery();
    }

    protected function processGetRequest(HttpRequest $request){
        $customer_id = $request->getParam("id");
        if($customer_id){
            return $this->customers->findCustomerProduct($customer_id);
        }
        $customer = $request->getParam("customer");
        if($customer=="all"){
            return $this->customers->findAllCustomers();
        }
}}

?>