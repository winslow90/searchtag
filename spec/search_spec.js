/**
 * Created by superman90 on 6/30/16.
 */
describe('search module test', function(){

    var rawStrEle = element(by.model('rawSearchStr'));
    var quesBtn = element(by.css('[ng-click="searchbtnclick()"]'));
    var resultEle = element.all(by.repeater("str in searchResult"));

    beforeEach(function() {
        browser.get('http://localhost:63342/northwester_jun_30/index.html');
    });

    it('expect rawStr Ele closed first', function(){
        rawStrEle.getSize().then(function(size){
            expect(size.width).toBeLessThan(10);
        });
    });

    it('expect rawStr Ele opened after click on the ques btn', function(){
        quesBtn.click();
        rawStrEle.getSize().then(function(size){
            expect(size.width).toBeGreaterThan(10);
        });
    });

    it('expect result to after enter something', function(){
        rawStrEle.sendKeys("a e i o u");
        expect(resultEle.count()).toBeGreaterThan(1);
        expect(resultEle.count()).toEqual(26);
    })


});