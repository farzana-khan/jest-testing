const chunkArray = (arr, len) =>{
    //Init chunked arr
    const chunkedArr = [];

    //Loop thriugh arr
    arr.forEach(val => {
        //Get last element
        const last = chunkedArr[chunkedArr.length - 1];

        //Check if last and if last length is equal to mthe chunk len
        if (!last || last.length === len) {
            chunkedArr.push([val]);
        } else {
            last.push(val);
        }
    });
    return chunkedArr;
}

module.exports = chunkArray;