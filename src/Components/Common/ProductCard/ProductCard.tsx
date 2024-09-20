import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./ProductCard.scss";

import type { AppDispatch, RootState } from "@/store/store";
import actionAsyncPostToCart from "@/store/middlewares/thunkPostToCart";
import actionAsyncFetchCart from "@/store/middlewares/thunkFetchCarts";
import type IProduct from "@/@Types/product";
import type ITag from "@/@Types/tag";

interface ProductProps {
  product: IProduct;
  tag: ITag | null;
}

function Product({ product, tag }: ProductProps) {
  // Hooks :
  const dispatch: AppDispatch = useDispatch();

  // Store states:
  const userId = useSelector(
    (state: RootState) => state.appStore.login.user.id,
  );
  const isLogged = useSelector((state: RootState) => state.appStore.isLogged);
  const token = useSelector(
    (state: RootState) => state.appStore.login.user.accessToken,
  );

  // Variables :
  const pricePrimary = product.price.toString().split(".")[0];
  const priceDecimal = product.price.toString().split(".")[1];

  // Handle functions :
  const handleAddToCart = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    if (isLogged) {
      try {
        const resultAction = await dispatch(
          actionAsyncPostToCart({
            productId: product.id,
            userId: userId,
          }),
        );

        if (actionAsyncPostToCart.fulfilled.match(resultAction)) {
          dispatch(actionAsyncFetchCart({ token }));
        }
      } catch (error) {
        alert("Erreur d'ajout au panier");
      }
    }
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <div className="product-card-img">
          <div className="product-card-img--filter" />
          <img src={product.image} alt="" className="product-card-img--image" />
        </div>
        <div className="product-card--title">
          <p>{product.title}</p>
        </div>
        <div className="price-component">
          <p>
            {pricePrimary}
            {priceDecimal && priceDecimal.length !== 0 ? (
              <span className="decimal">
                ,{priceDecimal.length === 1 ? `${priceDecimal}0` : priceDecimal}
                €
              </span>
            ) : (
              <span className="decimal">,00€</span>
            )}
          </p>
        </div>
      </Link>
      <div className="product-card--button">
        <button
          className="button-add-cart"
          type="button"
          onClick={handleAddToCart}
        >
          Ajouter au panier
        </button>
      </div>

      <div className={tag ? "product-card--tag" : "hidden"}>
        {product.tagId === 1 ? (
          <p className={`tag-component ${tag?.type}`}>
            Choix <span>d'Omazon</span>
          </p>
        ) : (
          <p className={`tag-component ${tag?.type}`}>{tag?.text}</p>
        )}
      </div>
    </div>
  );
}

export default Product;
