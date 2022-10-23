import { BurguerList } from "./BurgueList.jsx";
import { BurguerCard } from "./BurguerCard.jsx";
import { BurguerImage } from "./BurguerImage.jsx";
import { ProductInformation } from "./ProductInformation.jsx";
import { SectionProducts } from "./sectionProduct.jsx";
import { ToastError } from "../../components/Toast/toast";

const ProductSpace = ({
  products,
  filteredProducts,
  currentSale,
  setCurrentSale,
  cartTotal,
  setCartTotal,
}) => {
  //console.log(products);
  //console.log(filteredProducts);

  const filteredItens = products.filter((element, index, array) => {
    return element.name.toLowerCase().trim().includes(filteredProducts);
  });

  function addOnCart(element) {
    currentSale.forEach((x) => {
      if (x.id === element.id) {
        ToastError("não é possivel adicionar o mesmo item no carrinho");
        let indice = currentSale.indexOf(x);
        currentSale.splice(indice, 1);
      }
    });
    setCurrentSale([...currentSale, element]);
    setCartTotal(cartTotal + element.price);
  }

  return (
    <SectionProducts>
      <BurguerList>
        {filteredItens.map((element) => (
          <BurguerCard key={element.id}>
            <BurguerImage>
              <img src={element.img} alt={element.name} />
            </BurguerImage>

            <ProductInformation>
              <h2>{element.name}</h2>
              <cite>{element.category}</cite>

              <h3>R$ {element.price}</h3>

              <button onClick={() => addOnCart(element)}> Adicionar </button>
            </ProductInformation>
          </BurguerCard>
        ))}
      </BurguerList>
    </SectionProducts>
  );
};

export default ProductSpace;
