function mean(array) {
    const sum = array.reduce((acc, val) => acc + val, 0); 
    return (sum / array.length).toFixed(2); 

}

module.exports = mean