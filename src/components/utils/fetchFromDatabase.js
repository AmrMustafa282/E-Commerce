const fetchFromDatabase = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : false;
};
export default fetchFromDatabase;
