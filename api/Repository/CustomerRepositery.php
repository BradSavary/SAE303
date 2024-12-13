<?php

require_once "Repository/EntityRepository.php";

class CustomerRepositery extends EntityRepository {

    public function __construct() {
        parent::__construct();
    }

    public function findCustomerProduct($customer_id){
        $sql = $this->cnx->prepare("SELECT p.category, 
            CASE 
            WHEN (SELECT COUNT(*) FROM Products p2 WHERE SUBSTRING_INDEX(p2.product_name, ' ', 1) = SUBSTRING_INDEX(p.product_name, ' ', 1)) > 1 
            THEN p.product_name 
            ELSE SUBSTRING_INDEX(p.product_name, ' ', 1) 
            END as product_name, 
            SUM(oi.quantity) as total_quantity
            FROM Customers c
            JOIN Orders o ON c.id = o.customer_id
            JOIN OrderItems oi ON o.id = oi.order_id
            JOIN Products p ON oi.product_id = p.id
            WHERE c.id = :customer_id
            GROUP BY p.category, product_name
            ORDER BY p.category, product_name");
        $sql->bindParam(":customer_id", $customer_id);
        $sql->execute();
        $answer = $sql->fetchAll(PDO::FETCH_OBJ);
        return $answer;
    }

    public function findAllCustomers(){
        $sql = $this->cnx->prepare("SELECT email, id FROM Customers");
        $sql->execute();
        $answer = $sql->fetchAll(PDO::FETCH_OBJ);
        return $answer;
    }

    public function find($empty){

    }
    public function findAll(){

    }
    public function save($empty){

    }

    public function delete($empty){

    }
    public function update($empty){

    }
}

?>