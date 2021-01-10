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

const sqrNumList = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
const itemForSearch = 81
const itemPosition = binarySearch(sqrNumList, itemForSearch)
const output = `binarySearch function:

parameters:
ordered list - ${sqrNumList}
item for search - ${itemForSearch}
position of the first item in the list = 0 

function result:
item position in the ordered list - ${itemPosition}`
console.log(output)
