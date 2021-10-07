import { useState } from "react";
import ProductTable from "../components/ProductTable ";
import SearchBar from "../components/SearchBar";
import data from "../data";
const FilterableProductTable = () => {
  const [filtredProduct, setFiltredProduct] = useState(data);
  const [search, setIsSearch] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const onSearch = (value) => {
    setFiltredProduct(
      filtredProduct.filter((item) => item.category.toLowerCase().match(value))
    );
    if (value === "") {
      setFiltredProduct(data);
      setIsChecked(false);
    }
  };
  const onChangeHandler = (e) => {
    const { name, value, checked } = e.target;
    if (name === "search") {
      setIsSearch(value);
      onSearch(value);
    }
    if (name === "checkbox") {
      setIsChecked(checked);
      if (checked) {
        setFiltredProduct(
          filtredProduct.filter((item) => item.stocked === true)
        );
      } else {
        setFiltredProduct(data);
      }
    }
  };
  return (
    <div className="main">
      <SearchBar
        search={search}
        isChecked={isChecked}
        onChangeHandler={onChangeHandler}
      />

      {filtredProduct.length > 0 ? (
        <ProductTable
          name="Name"
          price="Price"
          filtredProduct={filtredProduct}
        />
      ) : (
        <div className="not__found">
          <p>Not Found</p>
        </div>
      )}
    </div>
  );
};

export default FilterableProductTable;
