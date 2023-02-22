<?php 
namespace App\Model;
use App\Model\Product;

abstract class DVD extends Product{
    protected $weight;

    // Getter method for retrieving the product weight
    public function getWeight() {
        return $this->weight;
    }

    // Setter method for setting the product weight
    public function setWeight($weight) {
        $this->weight = $weight;
    }

    public function __construct() {
    }

    // Abstract method for saving the product to the database
    abstract public function save();

    // Abstract method for deleting the product from the database
    abstract public function delete();
}
?>