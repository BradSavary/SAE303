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

    public function getprice() {
        return $this->price;
    }

    public function getquantity() {
        return $this->quantity;
    }

    public function getstock() {
        return $this->stock;
    }
}