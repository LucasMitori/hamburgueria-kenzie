import { Header } from "./header.jsx";
import logo from "../../assets/logo/Burguer-kenzie.svg";
import { Search } from "./SearchSpace.jsx";
import { Navigation } from "./Navigation.jsx";

const HeaderSpace = ({ setFilteredProducts }) => {
  return (
    <Header>
      <Navigation>
        <img src={logo} alt="Burguer Kenzie Logo" />
        <Search>
          <input
            type="text"
            placeholder="Digitar Pesquisa"
            onChange={(e) => setFilteredProducts(e.target.value)}
          ></input>
          <button type="button">Pesquisar</button>
        </Search>
      </Navigation>
    </Header>
  );
};

export default HeaderSpace;
