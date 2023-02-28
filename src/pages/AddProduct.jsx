import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../redux/slices/productSlice";

export default function AddProduct() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(product));
    navigate(-1);
  };
  const [type, setType] = React.useState("0");
  const [product, setProduct] = React.useState({
    sku: "",
    type: "0",
    name: "",
    price: "",
    height: "",
    width: "",
    length: "",
    size: "",
    weight: "",
  });

  useEffect(() => {
    type == "DVD"
      ? setProduct({
          ...product,
          weight: "",
          length: "",
          width: "",
          height: "",
        })
      : type == "book"
      ? setProduct({
          ...product,
          length: "",
          width: "",
          height: "",
          size: "",
        })
      : type == "furniture"
      ? setProduct({ ...product, weight: "", size: "" })
      : "";
  }, [type]);

  return (
    <>
      <form onSubmit={handleSubmit} id="product_form" className="form">
        <div className="top">
          <h1>Product List</h1>
          <div>
            <button type="submit">save</button>
            <button
              type="button"
              onClick={() => {
                navigate(-1);
                setProduct({
                  sku: "",
                  name: "",
                  type: "",
                  price: "",
                  height: "",
                  width: "",
                  length: "",
                  size: "",
                  weight: "",
                });
              }}
            >
              cancel
            </button>
          </div>
        </div>
        <table className="table">
          <tbody>
            <tr>
              <th>
                <label htmlFor="sku">sku: </label>
              </th>
              <th>
                <input
                  required
                  onChange={(e) => {
                    setProduct({ ...product, [e.target.id]: e.target.value });
                  }}
                  type="text"
                  id="sku"
                  value={product?.sku}
                />
              </th>
            </tr>
            <tr>
              <th>
                <label htmlFor="name">name: </label>
              </th>
              <th>
                <input
                  required
                  onChange={(e) => {
                    setProduct({ ...product, [e.target.id]: e.target.value });
                  }}
                  type="text"
                  id="name"
                  value={product?.name}
                />
              </th>
            </tr>
            <tr>
              <th>
                <label htmlFor="price">price: </label>
              </th>
              <th>
                <input
                  required
                  onChange={(e) => {
                    setProduct({ ...product, [e.target.id]: e.target.value });
                  }}
                  type="text"
                  id="price"
                  value={product?.price}
                />
              </th>
            </tr>
            <tr>
              <th>
                <label htmlFor="attribute">type: </label>
              </th>
              <th>
                <select
                  id="productType"
                  onChange={(e) => {
                    setType(e.target.value);
                    setProduct({ ...product, type: e.target.value });
                  }}
                >
                  <option value="0">dvd</option>
                  <option value="2">furniture</option>
                  <option value="1">book</option>
                </select>
              </th>
            </tr>

            {type == "0" ? (
              <tr>
                <th>
                  <label htmlFor="size">size (MB): </label>
                </th>
                <th>
                  <input
                    required
                    onChange={(e) => {
                      setProduct({ ...product, [e.target.id]: e.target.value });
                    }}
                    type="number"
                    id="size"
                    value={product?.size}
                  />
                </th>
              </tr>
            ) : type == "2" ? (
              <>
                <tr>
                  <th>
                    <label htmlFor="attribute">height (CM): </label>
                  </th>
                  <th>
                    <input
                      required
                      onChange={(e) => {
                        setProduct({
                          ...product,
                          [e.target.id]: e.target.value,
                        });
                      }}
                      type="number"
                      id="height"
                      value={product?.height}
                    />
                  </th>
                </tr>
                <tr>
                  <th>
                    <label htmlFor="width">width (CM): </label>
                  </th>
                  <th>
                    <input
                      required
                      onChange={(e) => {
                        setProduct({
                          ...product,
                          [e.target.id]: e.target.value,
                        });
                      }}
                      type="number"
                      id="width"
                      value={product?.width}
                    />
                  </th>
                </tr>
                <tr>
                  <th>
                    <label htmlFor="length">length (CM): </label>
                  </th>
                  <th>
                    <input
                      required
                      onChange={(e) => {
                        setProduct({
                          ...product,
                          [e.target.id]: e.target.value,
                        });
                      }}
                      type="number"
                      id="length"
                      value={product?.length}
                    />
                  </th>
                </tr>
              </>
            ) : type == "1" ? (
              <tr>
                <th>
                  <label htmlFor="weight">weight (CM): </label>
                </th>
                <th>
                  <input
                    required
                    onChange={(e) => {
                      setProduct({
                        ...product,
                        [e.target.id]: e.target.value,
                      });
                    }}
                    type="number"
                    id="weight"
                    value={product?.weight}
                  />
                </th>
              </tr>
            ) : (
              ""
            )}
          </tbody>
        </table>
      </form>
    </>
  );
}
