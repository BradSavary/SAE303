<?php
require_once "Repository/EntityRepository.php";
require_once "Class/Product.php";


class ProductRepositery extends EntityRepository {

    public function __construct() {
        parent::__construct();
    }

    public function findMostSoldProduct(){
        $sql = $this->cnx->prepare("SELECT p.product_name, SUM(oi.quantity) AS total_sales
            FROM OrderItems oi
            JOIN Orders o ON oi.order_id = o.id
            JOIN Products p ON oi.product_id = p.id
            WHERE o.order_date >= DATE_SUB(CURDATE(), INTERVAL 2 MONTH)
            GROUP BY oi.product_id, p.product_name
            ORDER BY total_sales DESC
			LIMIT 3");
            
            $sql->execute();
            $answer = $sql->fetchAll(PDO::FETCH_OBJ);
            return $answer;
    }

    public function findLessStockProduct(){
        $sql = $this->cnx->prepare("  SELECT 
        id,
        product_name,
        stock
        FROM 
        Products
        ORDER BY 
        stock ASC
        LIMIT 10;");
            
            $sql->execute();
            $answer = $sql->fetchAll(PDO::FETCH_OBJ);
            return $answer;
    }

    public function findSalesEvolution($product_id){
        $sql = $this->cnx->prepare("SELECT 
        DATE_FORMAT(o.order_date, '%Y-%m') AS month, 
        p.product_name,
        SUM(oi.quantity) AS sales_volume 
        FROM Orders o 
        JOIN OrderItems oi ON o.id = oi.order_id 
        JOIN Products p ON oi.product_id = p.id
        WHERE oi.product_id = :product_id
        AND o.order_date >= DATE_SUB(CURDATE(), INTERVAL 12 MONTH)
        GROUP BY month, p.product_name 
        ORDER BY month;");
    $sql->bindParam(':product_id', $product_id, PDO::PARAM_INT);
    $sql->execute();
    $answer = $sql->fetchAll(PDO::FETCH_OBJ);
    return $answer;
    }

    public function findProductByName(){
        $sql = $this->cnx->prepare("SELECT 
        p.product_name, id
        FROM Products p");
        $sql->execute();
        $answer = $sql->fetchAll(PDO::FETCH_OBJ);
        return $answer;
    }

    public function findProduct(){
        $sql = $this->cnx->prepare("SELECT id,product_name,category FROM Products");
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