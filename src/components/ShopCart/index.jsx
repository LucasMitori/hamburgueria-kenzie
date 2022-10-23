import { SectionShopCart } from "./sectionShopCart";
import { ShopCart } from "./ShopCart";
import { ShopCartTitle } from "./ShopCartTitle";
import { ShopCartCards } from "./ShopCartCards";
import { ShopCartTotal } from "./ShopCartTotal";
import { CartProducts } from "./CartProducts";
import { CartProductImg } from "./CartProductImg";
import { CartProductInfo } from "./CartProductInfo";
import { CartProductInputs } from "./CartProductInputs";

const ShopCartSpace = ({
  currentSale,
  cartTotal,
  setCartTotal,
  setCurrentSale,
}) => {
  console.log(currentSale);

  function removeOnCart(element) {
    const filterCard = currentSale.filter(
      (product) => product.id !== element.id
    );
    setCurrentSale(filterCard);
    setCartTotal(cartTotal - element.price);
  }

  function removeAll() {
    const filterCard = currentSale.filter((product) => product.id === "");
    setCurrentSale(filterCard);
    setCartTotal(0);
  }

  return (
    <SectionShopCart>
      <ShopCart>
        <ShopCartTitle>
          <h1>Carrinho de compras</h1>
        </ShopCartTitle>

        {currentSale.length > 0 ? (
          <ShopCartCards>
            {currentSale.map((element) => {
              return (
                <CartProducts key={element.id}>
                  <CartProductImg>
                    <img src={element.img} alt={element.name} />
                  </CartProductImg>
                  <CartProductInfo>
                    <h2>{element.name}</h2>
                    <h3>{element.category}</h3>
                  </CartProductInfo>
                  <CartProductInputs>
                    <button onClick={() => removeOnCart(element)}>
                      Remover
                    </button>
                    <span>X{}</span>
                  </CartProductInputs>
                </CartProducts>
              );
            })}
          </ShopCartCards>
        ) : (
          <ShopCartCards>
            <h2>Sua sacola está vazia</h2>
            <h4>Adicione itens</h4>
          </ShopCartCards>
        )}

        <ShopCartTotal>
          <h2>Total</h2>
          <span>R$ {cartTotal.toFixed(2)}</span>
        </ShopCartTotal>

        <button type="button" onClick={() => removeAll()}>
          Remover todos
        </button>
      </ShopCart>
    </SectionShopCart>
  );
};

export default ShopCartSpace;
