import React from "react";

const ProductRow = ({ data, color, nameStyle, priceStyle }) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <tr key={index}>
            <td
              className={nameStyle}
              style={{ color: `${item.stocked ? "blue" : color}` }}>
              {item.name}
            </td>
            <td
              className={priceStyle}
              style={{ color: `${item.stocked ? "blue" : color}` }}>
              {item.price}
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default ProductRow;
