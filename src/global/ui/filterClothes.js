export default  function clothesFilter(arr,category, filterArr) {
    arr.map((item) => {
        if(item.category === category) {
            filterArr.push(item)
        }
    })
}