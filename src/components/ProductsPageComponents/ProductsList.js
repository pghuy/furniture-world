import GridViewProducts from "./Sort/GridViewProducts";
import ListViewProducts from "./Sort/ListViewProducts";
import { useFilterContext } from "../../contexts/filter-context";

const ProductsList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();
  console.log(products);
  console.log(grid_view);
  if (grid_view !== true) {
    return <ListViewProducts products={products} />;
  }
  return <GridViewProducts products={products}>pro</GridViewProducts>;
};

export default ProductsList;
