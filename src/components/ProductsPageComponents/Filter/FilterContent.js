import styled from "styled-components";
import { useFilterContext } from "../../../contexts/filter-context";
import { formatPrice, getUniqueValue } from "../../../utils/helpers";
import { AiOutlineCheck } from "react-icons/ai";
const FilterContent = () => {
  const {
    filters: {
      price,
      min_price,
      max_price,
      color,
      company,
      category,
      shipping,
    },
    all_products,
    updateFilters,
    clearFilters,
  } = useFilterContext();
  console.log(max_price);
  const categories = getUniqueValue(all_products, "category");
  const companies = getUniqueValue(all_products, "company");
  const colors = getUniqueValue(all_products, "colors");
  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()} className="filter-form">
          <div className="form-control">
            <input
              type="text"
              name="text"
              className="search-input"
              placeholder="Search"
              onChange={updateFilters}
            />
          </div>
          <div className="form-control">
            <h5>Category</h5>
            <div className="category">
              {categories.map((cItem, index) => {
                return (
                  <button
                    key={index}
                    name="category"
                    type="button"
                    onClick={updateFilters}
                  >
                    {cItem}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="form-control">
            <h5>Company</h5>
            <select
              className="company"
              name="company"
              value={company}
              onChange={updateFilters}
            >
              {companies.map((cItem, index) => {
                return <option key={index}>{cItem}</option>;
              })}
            </select>
          </div>
          <div className="form-control">
            <h5>Colors</h5>
            <div className="colors">
              {colors.map((cItem, index) => {
                if (cItem === "all") {
                  return (
                    <button
                      onClick={updateFilters}
                      name="color"
                      className="color-all"
                      data-color="all"
                    >
                      All
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    style={{ background: cItem }}
                    name="color"
                    data-color={cItem}
                    className="color-btn"
                    onClick={updateFilters}
                  >
                    {color === cItem ? (
                      <AiOutlineCheck className="pickedColorTick" size={10} />
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="form-control price">
            <h5>Price</h5>
            <p>{formatPrice(price)}</p>
            <input
              value={price}
              type="range"
              name="price"
              min={min_price}
              max={max_price}
              onChange={updateFilters}
              className="input-price"
            />
          </div>
          <div className="form-control shipping">
            <label htmlFor="shipping">Free shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              onChange={updateFilters}
              checked={shipping}
            />
          </div>
          <button className="clearBtn btn" onClick={clearFilters}>
            Clear Filters
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .content {
    margin-bottom: 2rem;
  }
  .form-control {
    margin-bottom: 1.2rem;
  }
  .search-input {
    background-color: var(--clr-grey-10);
    border-color: transparent;
    border-radius: 1rem;
    width: 70%;
    height: 2rem;
    padding-left: 5%;
  }
  .category {
    button {
      display: block;
      margin: 0.25em 0;
      padding: 0.25rem 0;
      text-transform: capitalize;
      background: transparent;
      border: none;
      border-bottom: 1px solid transparent;
      letter-spacing: var(--spacing);
      color: var(--clr-grey-5);
      cursor: pointer;
    }
  }
  .company {
    background-color: var(--clr-grey-10);
    border-color: transparent;
  }
  .colors {
    display: flex;
    justify-content: left;
    align-items: center;
    .color-all {
      background-color: transparent;
      border-color: transparent;
      margin-right: 0.3rem;
      border-bottom: 1px solid transparent;
      letter-spacing: var(--spacing);
      color: var(--clr-grey-5);
      cursor: pointer;
    }
    .color-btn {
      border-radius: 50%;
      border: none;
      height: 17px;
      width: 17px;
      margin-right: 0.3rem;
      opacity: 0.5;
      align-items: center;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      .pickedColorTick {
        color: white;
      }
    }
  }
  .price {
    p {
      margin-bottom: 0.5rem;
    }
    .input-price {
      position: relative;
    }
  }

  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clearBtn {
    background-color: #840b0b;
    color: white;
    font-size: 0.8rem;
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;
export default FilterContent;
