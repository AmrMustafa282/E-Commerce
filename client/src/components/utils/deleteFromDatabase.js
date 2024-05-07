import fetchFromDatabase from "./fetchFromDatabase";
import saveToDatabase from "./saveToDatabase";

const deleteFromDatabase = (key, index) => {
  const products = fetchFromDatabase(key);
  products.splice(index, 1);
  saveToDatabase(key, products);
};
export default deleteFromDatabase;
