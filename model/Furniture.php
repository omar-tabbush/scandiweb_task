<?php 
namespace App\Model;
use App\Model\Product;
abstract class Furniture extends Product{
    protected $height;
    protected $width;
    protected $length;

    // Getter method for retrieving the product height
    public function getHeight() {
        return $this->height;
    }
    public function getLength()
    {
        return $this->length;
    }
    public function getWidth()
    {
        return $this->width;
    }



    // Setter method for setting the product height
    public function setHeight($height) {
        $this->height = $height;
    }
    public function setLength($length)
    {
        $this->length = $length;
    }
    public function setWidth($width)
    {
        $this->width = $width;
    }
    public function __construct() {
    }

    // Abstract method for saving the product to the database
    abstract public function save();

    // Abstract method for deleting the product from the database
    abstract public function delete();
}
?>