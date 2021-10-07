import React from "react";
import ProductCategoryRow from "../components/ProductCategoryRow";
import ProductRow from "../components/ProductRow ";

const ProductTable = ({ name, price, filtredProduct }) => {
  const sports = filtredProduct.filter(
    (item) => item.category === "Sporting Goods"
  );
  const Electronic = filtredProduct.filter(
    (item) => item.category === "Electronics"
  );

  return (
    <div className="Product__table ">
      <div className="content__heading">
        <div>{name}</div>
        <div>{price}</div>
      </div>
      <table>
        <tbody>
          {sports.length > 0 ? (
            <ProductCategoryRow heading="Sporting Goods" />
          ) : null}
          <ProductRow
            data={sports}
            color="red"
            inStock={false}
            priceStyle="price"
            nameStyle="name"
          />
          {Electronic.length > 0 ? (
            <ProductCategoryRow heading="Electronics" />
          ) : null}
          <ProductRow
            data={Electronic}
            color="red"
            inStock={false}
            priceStyle="price"
            nameStyle="name"
          />
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
