<?php

namespace App\Dal;

use App\Model\Product;

// Define the class for handling product storage using direct MySQL queries
class ProductDb extends Product
{
    private $conn;

    public function __construct($conn)
    {
        parent::__construct();
        $this->conn = $conn;
    }
    // public function __construct($conn) {
    //     $this->conn = $conn;
    // }

    // Save the product to the database using direct MySQL queries
    public function save($name, $type, $price)
    {
        $sql = "INSERT INTO products (name, description, price) VALUES (:name, :description, :price)";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(':name', $this->name);
        $stmt->bindValue(':description', $this->type);
        $stmt->bindValue(':price', $this->price);
        $stmt->execute();
        $this->id = $this->conn->lastInsertId();
        return $this;
    }

    // Delete the product from the database using direct MySQL queries
    public function delete()
    {
        $sql = "DELETE FROM products WHERE id = :id";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(':id', $this->id);
        $stmt->execute();
        return $this;

    }

    public function getAll()
    {
        $sql = "SELECT * FROM products";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute();
        return $stmt->fetchAll();

    }

    public function getById($id)
    {
        $sql = "SELECT * FROM products WHERE id = :id";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(':id', $id);
        $stmt->execute();
        return $stmt->fetch();
    }
}
?>