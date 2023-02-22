<?php 
namespace App\Model;

abstract class Product {
    protected $id;
    protected $sku;
    protected $name;
    protected $price;

    // Constructor for setting product properties
    public function __construct() {
       
    }
    

    // Getter methods for retrieving product properties
    public function getId() {
        return $this->id;
    }

    public function getName() {
        return $this->name;
    }

   

    public function getPrice() {
        return $this->price;
    }

    // Setter methods for setting product properties
    public function setId($sku) {
        $this->id = $sku;
    }

    public function setName($name) {
        $this->name = $name;
    }

   

    public function setPrice($price) {
        $this->price = $price;
    }

    // Abstract method for saving the product to the database
    abstract public function save();

    // Abstract method for deleting the product from the database
    abstract public function delete();

    // Abstract method for retrieving all products from the database
    abstract public function getAll();

    // Abstract method for retrieving a product from the database by id
    abstract public function getById($id);
}

?>