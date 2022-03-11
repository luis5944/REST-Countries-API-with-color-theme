import axios from "axios";

export const fetchAll = async () => {
  const { data } = await axios("https://restcountries.com/v2/all");
  return data;
};

// export const searchCountry = async (name) => {
//   const { data } = await axios(`https://restcountries.com/v3.1/name/${name}`);
//   return data;
// };
