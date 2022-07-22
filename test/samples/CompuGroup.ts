describe('CompuGroupMedical Step1', () => {
    it('navigate to the url of the application, click on the "doctor search" button', async () => {
        browser.url("https://demo.clickdoc.de/cd-de/")                  //go to URL
        await browser.pause(2000)
        await browser.maximizeWindow()                                  //maximize the browser window
        await browser.pause(2000)

        await  $('.agree-consent').click()                              //accept the cookies
        await browser.pause(2000)

        await  $('=Arztsuche').click()                                  //click on "Arztsuche"
        await browser.pause(2000)

    });

});

describe('CompuGroupMedical Step2', () => {
    it('insert the searchterm in the "searchtearm" inputfield, click on the "search" button', async () => {

        await $('#search-query-typeahead').setValue("Peter Test")       //insert "Peter Test"

        await browser.pause(2000)

        await browser.keys("\uE007");                                   //press ENTER to start the search
        await browser.pause(5000)
    });

});