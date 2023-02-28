import React, { useEffect } from "react";

export default function (props) {
  const { product } = props;
  const [isSelected, setIsSelected] = React.useState(false);

  useEffect(() => {
    !isSelected ? props.removeSku(product?.sku) : props.addSku(product?.sku);
  }, [isSelected]);

  return (
    <div className="card">
      <p> {product?.sku} </p>
      <p> {product?.name} </p>
      <p> {product?.price} </p>
      <p> {product?.attribute} </p>

      <input
        type="checkbox"
        name="select"
        id="select"
        onChange={() => {
          setIsSelected(!isSelected);
        }}
        checked={isSelected}
      />
    </div>
  );
}
