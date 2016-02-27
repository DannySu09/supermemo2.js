/**
 * @params {number} the old factor of the previous day
 * @params {number} the quality of review
 */

function calcFactor(oldFac, quality) {
    let newFac = oldFac + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
    return newFac < 1.3 ? 1.3 : newFac
}

/**
 * @params {object} the data of the reviewed item
 * @params {number} a number between 0~5 representing the quality of review. 0 is the worse while 5 is the best.
 */
export default function (itemData, quality) {
    let oldFac = itemData.factor
    let dayList = itemData.dayList
    let newFac
    
    if(quality < 3) {
        newFac = oldFac
    } else {
        newFac = calcFactor(oldFac, quality)
        
        if(newFac < 1.3) {
            newFac = 1.3
            dayList = dayList.slice()
        }
        
        let latestDay = dayList[dayList.length -1]
        dayList = dayList.concat([Math.round(latestDay * newFac)])
    }
    
    return {
        factor: newFac,
        dayList,
        nowRepeatAgain: quality < 4
    }
}