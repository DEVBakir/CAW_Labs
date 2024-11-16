const setOne = (arr) => {
    return arr.filter((value, index, self) => self.indexOf(value) === index);
  };
 console.log(setOne([4, 5, 5, 2, 2, 4, 3, 1, 5, 2]));

  



 
 const getRidOf = (tab, ...vals) => {
    return tab.filter(item => !vals.includes(item));
};
console.log(getRidOf(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 'b', 'e', 'x'));

  