import { useEffect, useState } from "react";
import "./HeaderForm.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";

function HeaderForm() {
  // Store states
  const products = useSelector(
    (state: RootState) => state.productStore.products,
  );
  const categories = useSelector(
    (state: RootState) => state.categoryStore.categories,
  );

  // Component states
  const [filteredProductList, setFilteredProductList] = useState(products);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProductCategoryId, setFilteredProductCategoryId] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [resultLength, setResultLength] = useState(0);

  // Handle functions
  const handleChangeInputValue = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchTerm(event.currentTarget.value);
  };

  const handleChangeSelectedCategory = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const currentValue = event.currentTarget.value.toLowerCase();
    const findedCategory = categories.find(
      (category) => category.title.toLowerCase() === currentValue,
    );
    if (findedCategory) return setFilteredProductCategoryId(findedCategory.id);
    return setFilteredProductCategoryId(0);
  };

  const handleCloseDialog = (
    event: React.FocusEvent<HTMLInputElement, Element>,
  ) => {
    if (event.relatedTarget?.className === "form-result-search--finded") {
      return setTimeout(() => setOpenDialog(false), 100, 0);
    }
    return setOpenDialog(false);
  };

  // Effects
  useEffect(() => {
    const categoryFilter = () => {
      if (filteredProductCategoryId === 0) {
        return setFilteredProductList(products);
      }
      const filteredCategory = products.filter(
        (product) => product.categoryId === filteredProductCategoryId,
      );
      return setFilteredProductList(filteredCategory);
    };

    categoryFilter();
  }, [filteredProductCategoryId, products]);

  useEffect(() => {
    setResultLength(
      filteredProductList.filter((product) =>
        product.title.includes(searchTerm),
      ).length,
    );
  }, [searchTerm, filteredProductList]);

  //* JSX
  return (
    <form className="form">
      <select
        className="form-select"
        name="category-filter"
        id="category-filter"
        onChange={handleChangeSelectedCategory}
      >
        <option className="form-select--default-option" value="">
          Toutes nos categories &#9662;
        </option>
        {categories.map((category) => (
          <option key={category.id} value={category.title}>
            {category.title}
          </option>
        ))}
      </select>
      <div className="form-input-container">
        <input
          className="form-input"
          type="text"
          placeholder="Rechercher Omazon"
          value={searchTerm}
          onChange={handleChangeInputValue}
          onFocus={() => setOpenDialog(true)}
          onBlur={handleCloseDialog}
        />
        <dialog className="form-result-search" open={openDialog}>
          {resultLength > 0 ? (
            filteredProductList.map(
              (product) =>
                product.title.includes(searchTerm) && (
                  <Link
                    to={`/product/${product.id}`}
                    key={product.id}
                    className="form-result-search--finded"
                  >
                    {product.title}
                  </Link>
                ),
            )
          ) : (
            <p>Pas de resultat</p>
          )}
        </dialog>
      </div>
      <button className="form-button" type="button">
        <img src="/Omazon/icons/search.svg" alt="" />
      </button>
    </form>
  );
}

export default HeaderForm;
