/**
 * @params {number} the old factor of the previous day
 * @params {number} the quality of review
 */

function calcFactor(oldFac, quality) {
    return oldFac + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
}

/**
 * @params {object} the data of the reviewed item
 * @params {number} a number between 0~5 representing the quality of review. 0 is the worse while 5 is the best.
 */
export default function (itemData, quality) {
    let oldFac = itemData.factor
    let dayList = itemData.dayList
    let newFac
    
    if(oldFac == null) {
        oldFac = 2.5
    }
    
    if(dayList == null || dayList.length === 0) {
        dayList = [1, 6]
    }
    
    if(quality == null || quality < 0 || quality > 5) {
        quality = 0
    }
    
    if(quality < 3) {
        newFac = oldFac
        dayList = dayList.slice()
    } else {
        newFac = calcFactor(oldFac, quality)
        
        if(newFac < 1.3) {
            newFac = 1.3
        }
        
        let latestDay = dayList[dayList.length -1]
        dayList = dayList.concat([Math.round(latestDay * newFac)])
    }
    
    return {
        factor: newFac,
        dayList,
        isRepeatAgain: quality < 4
    }
}