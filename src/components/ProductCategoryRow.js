import React from "react";

const ProductCategoryRow = ({ heading, className }) => {
  return (
    <tr className={className}>
      <th>{heading}</th>
    </tr>
  );
};

export default ProductCategoryRow;
