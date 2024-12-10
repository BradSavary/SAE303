<?php

class Product implements JsonSerializable {
   
    protected $id;
    private $product_name;
    private $category;
    private $price;
    private $quantity;
    private $stock;

    public function __construct($id) {
        $this->id = $id;
    }

    public function getId() {
        return $this->id;
    }

    public function jsonSerialize(): mixed {
        return [
            'id' => $this->id,
            "product_name" => $this->product_name,
            "category" => $this->category,
            "price" => $this->price,
            "quantity" => $this->quantity,
            "stock" => $this->stock
        ];
    }

    public function getproductname() {
        return $this->product_name;
    }


    public function setproductname($product_name):self {
        $this->product_name = $product_name;
        return $this;
    }


    public function setid($id):self {
        $this->id = $id;
        return $this;
    }

    public function getprice() {
        return $this->price;
    }

    public function setprice($price):self {
        $this->price = $price;
        return $this;
    }

    public function getquantity() {
        return $this->quantity;
    }

    public function setquantity($quantity):self {
        $this->quantity = $quantity;
        return $this;
    }

    public function getstock() {
        return $this->stock;
    }

    public function setstock($stock):self {
        $this->stock = $stock;
        return $this;
    }
}