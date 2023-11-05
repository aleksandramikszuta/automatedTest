Feature('interview');

Scenario('Login and logout',  ({ I, mainPage }) => {
    I.amOnPage('/')
    mainPage.login("not-empty", "pwd")
    I.see('Welcome, not-empty!')
    I.seeElement('//button[text()="Log Out"]')
    I.click('//button[text()="Log Out"]')
    I.see('User logged out')
});

Scenario('Invalid login',  ({ I }) => {
    I.amOnPage('/')
    I.click('#login')
    I.see('Invalid username/password')
});

