describe('Name of the group', () => {
    it('should behave...', async () => {
        browser.url("https://demo.clickdoc.de/cd-de/")                  //go to URL test123
        await browser.pause(2000)
        await browser.maximizeWindow()                                  //maximize the browser window
        await browser.pause(2000)

        await  $('.agree-consent').click()                              //accept the cookies
        await browser.pause(2000)

        await  $('=Arztsuche').click()                                  //click on "Arztsuche"
        await browser.pause(2000)

        await $('#search-query-typeahead').setValue("Peter Test")       //insert "Peter Test"

        await browser.pause(2000)

        await browser.keys("\uE007");                                   //press ENTER to start the search
        await browser.pause(20000)
    });

});