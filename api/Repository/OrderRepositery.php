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