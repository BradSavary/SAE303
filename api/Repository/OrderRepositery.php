<?php

require_once "Repository/EntityRepository.php";
require_once "Class/Order.php";


class OrderRepositery extends EntityRepository {

    public function __construct() {
        parent::__construct();
    }

    public function findByOrderStatus($orderstatus){
        $sql = $this->cnx->prepare("SELECT COUNT(*) FROM Orders WHERE order_status = :orderstatus");
        $sql->bindParam(":orderstatus", $orderstatus);
        $sql->execute();
        $answer = $sql->fetch(PDO::FETCH_OBJ);
        return $answer;
    }

    public function findSalesPerMonth()
    {
        $sql = $this->cnx->prepare("SELECT 
    DATE_FORMAT(o.order_date, '%Y-%m') AS month,
    SUM(oi.quantity * p.price) AS total_sales FROM  OrderItems oi JOIN 
    Orders o ON oi.order_id = o.id
    JOIN Products p ON oi.product_id = p.id
    WHERE o.order_date >= DATE_SUB(CURDATE(), INTERVAL 6 MONTH)
    GROUP BY DATE_FORMAT(o.order_date, '%Y-%m')
    ORDER BY month ASC;");
        $sql->execute();
        $answer = $sql->fetchAll(PDO::FETCH_OBJ);
        return $answer;
    }

    public function findSalesPerMonthPerCategory()
    {
        $sql = $this->cnx->prepare("SELECT 
    DATE_FORMAT(o.order_date, '%Y-%m') AS month, 
    p.category, 
    SUM(oi.quantity * p.price) AS sales_amount FROM 
    Orders o JOIN OrderItems oi ON o.id = oi.order_id
    JOIN Products p ON oi.product_id = p.id WHERE o.order_date >= DATE_SUB(CURDATE(), INTERVAL 6 MONTH)
    GROUP BY month, p.category ORDER BY month, p.category;");
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