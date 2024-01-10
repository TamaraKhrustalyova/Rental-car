export const CreatePrice = (maxPrice) => {
  const price = [];
  for (let i = 0; i <= maxPrice; i += 10) {
    if (i !== 0) {
      const arrItm = { value: i, label: i };
      price.push(arrItm);
    } else {
      const  arrItm = { value: 0, label: 'All' };
      price.push(arrItm);
   }
  }
  return price;
};