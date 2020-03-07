/* global it */
/* global describe */
var chai = require('chai')
var sm2 = require('../dist.js').default

chai.should()

describe("Test supermemo2 algorithm implementation.", function() {
    it('When quality is less than 3, factor shouldn\'t be changed.' , function() {
        var ret = sm2(1, 19, 1.7)

        ret.factor.should.equal(1.7)
    })
    it('When quality is less than 3, schedule should be reset to 1.' , function() {
        var ret = sm2(1, 19, 1.7)
        
        ret.schedule.should.equal(1)
    })
    it('When factor is less than 1.3, let it be 1.3.', function() {
        var ret = sm2(4, 20, 1.3)
        
        ret.factor.should.equal(1.3)
    })
    it('When quality is less than 4, should mark the item as the one that should repeat again.', function() {
        var ret = sm2(3, 18, 1.5)
        
        ret.isRepeatAgain.should.equal(true)
    })
})