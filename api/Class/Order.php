<?php

class Order implements JsonSerializable {
   
    private $id;
    private $customer_id;
    private $order_date;
    private $order_status;
    private $weight;
    private $shipping_cost;

    public function __construct($id) {
        $this->id = $id;
    }

    public function getId() {
        return $this->id;
    }

    public function jsonSerialize(): mixed {
        return [
            'id' => $this->id,
            "customer_id" => $this->customer_id,
            "order_date" => $this->order_date,
            "order_status" => $this->order_status,
            "weight" => $this->weight,
            "shipping_cost" => $this->shipping_cost
        ];
    }
    public function getcustomerid() {
        return $this->customer_id;
    }

    public function getorderdate() {
        return $this->order_date;
    }

    public function getorderstatus() {
        return $this->order_status;
    }

    public function getweight() {
        return $this->weight;
    }

    public function getshippingcost() {
        return $this->shipping_cost;
    }
}