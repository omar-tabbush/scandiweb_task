import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import {
  deleteProducts,
  getProducts,
  selectErrorState,
  selectProductState,
  selectStatusState,
} from "../redux/slices/productSlice";

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector(selectProductState);
  const error = useSelector(selectErrorState);
  const status = useSelector(selectStatusState);

  const navigate = useNavigate();

  const [selectedSku, setSelectedSku] = React.useState([]);

  const addSku = (sku) => {
    setSelectedSku([...selectedSku, sku]);
  };
  const removeSku = (sku) => {
    setSelectedSku(selectedSku.filter((item) => item !== sku));
  };
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const massDelete = async () => {
    dispatch(deleteProducts(selectedSku));
  };
  let content;
  if (status === "loading") {
    content = <div>Loading...</div>;
  } else if (status === "failed") {
    content = <div>{error}</div>;
  } else if (status === "succeeded") {
    content = products?.map((product, key) => {
      return (
        <Card
          removeSku={removeSku}
          addSku={addSku}
          key={key}
          product={product}
        />
      );
    });
  }

  return (
    <>
      <div  className="top">
        <h1>Product List</h1>
        <div>
          <button
            type="button"
            onClick={() => {
              navigate("add");
            }}
          >
            ADD
          </button>
          <button
            type="button"
            className="danger"
            onClick={() => {
              massDelete().then(() => dispatch(getProducts()));
            }}
          >
            MASS DELETE
          </button>
        </div>
      </div>

      <div className="list">{content}</div>
    </>
  );
}
