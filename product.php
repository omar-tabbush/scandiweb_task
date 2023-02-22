<?php
use App\Dal\ProductDb;

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
$conn = "";
// Path: product.php
switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        if (isset($_GET['id'])) {
            // $product = new ProductDB();
            echo json_encode($product->getById($_GET['id']));
        } else {
            // $product = new ProductDB($db);
            echo json_encode($product->getAll());
        }
        break;
    case 'POST':
        $data = json_decode(file_get_contents("php://input"));

        $name = $data->name;
        $type = $data->description;
        $price = $data->price;

        $product = new ProductDB($name, $type, $price, $conn);

        $product->save();
        break;

    case 'DELETE':
        $product = new ProductDB('', '', '', $conn);
        $product->setId($_GET['id']);
        $product->delete();
        break;
}
?>