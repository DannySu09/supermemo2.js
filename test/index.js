/* global it */
/* global describe */
var chai = require('chai')
var sm2 = require('./dist.js').default

chai.should()

function isDayListEqual(list1, list2) {
    if(list1.length !== list2.length) {
        return false
    } else {
        for(var i = 0, len = list1.length; i < len; i++) {
            if(list1[i] !== list2[i]) {
                return false
            }
        }
    }
    
    return true
}

describe("Test supermemo2 algorithm implementation.", function() {
    it('When quality is less than 3, dayList and factor both shouldn\'t be changed.' , function() {
        var itemData = {
            dayList: [1, 6, 8],
            factor: 2.231
        }
        var quality = 2
        var ret = sm2(itemData, quality)
        
        isDayListEqual(itemData.dayList, ret.dayList).should.equal(true)
        itemData.factor.should.equal(ret.factor)
    })
    it('When factor is less than 1.3, let it be 1.3.', function() {
        var itemData = {
            dayList: [1, 6, 11],
            factor: 1.3
        }
        var quality = 3
        var ret = sm2(itemData, quality)
        
        ret.factor.should.equal(1.3)
    })
    it('When quality is less than 4, should mark the item as the one that should repeat again.', function() {
        var itemData = {
            dayList: [1, 6, 11],
            factor: 1.8
        }
        var quality = 3
        var ret = sm2(itemData, quality)
        
        ret.isRepeatAgain.should.equal(true)
    })
})