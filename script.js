/**
 * Search item position in the ordered list
 *
 * @Search
 * @param {array} list - ordered list
 * @param {number} item - element to search in the list
 * @return {number} itemPosition - element position in the list.
 */

function binarySearch(list, item){
    let startList = 0
    let endList = list.length - 1

    for (; startList <= endList;){
        let midList = Math.floor((endList + startList)/2)
        let guess = list[midList]
        if (guess === item) {
            const itemPosition = midList
            return itemPosition
        } else if (guess > item) {
            endList = midList - 1
        } else {
            startList = midList + 1
        }
    }
    return (-1) // item not found
}

/**
 * Output Template of the function -> binarySearch()
 *
 * @OutputTemplate
 * @param {array} sT -> String Template
 * @param {array} list - ordered list from the function -> binarySearch()
 * @param {number} item - element to search in the list from the function -> binarySearch()
 * @param {number} itemPosition - element position in the list -> result of the function -> binarySearch()
 * @return {string} output - template output.
 */

function outputTemplate(sT = stringTemplate,
                        list= OrderedNumList,
                        item= itemForSearch,
                        itemPosition = itemPositionOutput){
    return `${sT[0]}
    ${sT[1]}
    ${sT[2]}${list}
    ${sT[3]}${item}
    ${sT[4]}
    ${sT[5]}
    ${sT[6]}${itemPosition}`
}

const OrderedNumList = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
const itemForSearch = 4
const itemPositionOutput = binarySearch(OrderedNumList, itemForSearch)
const stringTemplate = ["binarySearch function:\n",
    "parameters:",
    "ordered list -> ",
    "item for search -> ",
    "position of the first item in the list -> 0\n",
    "function result:",
    "item position in the ordered list -> "
]
const consoleOutput = outputTemplate()
console.log(consoleOutput)
