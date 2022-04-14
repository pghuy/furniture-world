import styled from "styled-components";
import { BsList, BsGrid } from "react-icons/bs";
import { useFilterContext } from "../../../contexts/filter-context";
const SortMenu = () => {
  const {
    filtered_products: products,
    setListView,
    setGridView,
    grid_view,
    sort,
    updateSort,
  } = useFilterContext();

  return (
    <Wrapper displayMenu>
      <div className="gridLineSwitch">
        <button className={grid_view === true ? "active" : null}>
          <BsGrid size={20} onClick={setGridView} className="iconGridList" />
        </button>
        <button className={grid_view === false ? "active" : null}>
          <BsList size={20} onClick={setListView} className="iconGridList"/>
        </button>
      </div>
      <p className="somethingFound">{products.length} items found</p>
      <hr />
      <form className="sortForm">
        <label htmlFor="sort">Sort By</label>
        <select name="sort" id="sort" value={sort} onChange={updateSort}>
          <option value="price-lowest">Price (Lowest)</option>
          <option value="price-highest">Price (Highest)</option>
          <option value="nameAZ">Name (a-z)</option>
          <option value="nameZA">Name (z-a)</option>
        </select>
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 10% 20% 40% 30%;
  align-items: center;
  .gridLineSwitch {
    display: flex;
    gap: 1rem;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      border: 1px solid black;
      border-radius: 15%;
      padding: 5%;
    }
    .active {
      background-color: black;
      color: white;
      object-fit: cover;
    }
    button:active {
      background-color: black;
      color: white;
    }
  }
  .somethingFound {
    display: block;
    margin: 0;
  }
  .sortForm {
    justify-self: end;
    label {
      margin-right: 1rem;
    }
    select {
      background-color: transparent;
      border: 1px solid black;
    }
  }
  @media (max-width: 1024px) {
    grid-template-columns: 10% auto auto 30%;
    .somethingFound{
      margin-left: 2rem;
    }
    }
  
`;
export default SortMenu;
