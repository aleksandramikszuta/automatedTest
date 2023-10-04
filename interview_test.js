Feature('interview');

Scenario('Login and logout',  ({ I }) => {
    I.amOnPage('/')
    I.fillField("input[name='UserName']", 'non-empty')
    I.fillField("input[name='Password']", 'pwd')
    I.click('#login')
    I.see('Welcome, non-empty!')
    I.seeElement('//button[text()="Log Out"]')
    I.click('//button[text()="Log Out"]')
    I.see('User logged out')

});
Scenario('Invalid login',  ({ I }) => {
    I.amOnPage('/')
    I.click('#login')
    I.see('Invalid username/password')
});

