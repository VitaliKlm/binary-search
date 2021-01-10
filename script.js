function binarySearch(list, item){
    let startList = 0
    let endList = list.length - 1

    for (; startList <= endList;){
        let midList = Math.floor((endList + startList)/2)
        let guess = list[midList]
        if (guess === item) {
            return midList
        } else if (guess > item) {
            endList = midList - 1
        } else {
            startList = midList + 1
        }
    }
    return("item not found")
}
