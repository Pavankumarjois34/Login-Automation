import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/LoginPage.js';

// Given steps

Given('the user is on the login screen', async () => {
    await LoginPage.openLoginScreen();
});

Given('the user logs out', async () => {
    await LoginPage.logout();
});

// When steps

When(/^the user logs in with username "([^"]*)" and password "([^"]*)"$/, async (username, password) => {
    await LoginPage.login(username, password);
});

When(/^the user clicks the login button without entering any credentials$/, async () => {
    await LoginPage.clearFields();
    await LoginPage.loginButton.click();
});

When(/^the user clicks the login button$/, async () => {
    await LoginPage.loginButton.click();
});

// Then steps

Then(/^the user should be logged in successfully$/, async () => {
    await expect(LoginPage.productsScreen).toBeDisplayed({
        message: 'Expected Products screen to be visible after login',
        timeout: 10000
    });
});

Then(/^the products screen should be displayed$/, async () => {
    await expect(LoginPage.productsScreen).toBeDisplayed();
});

Then(/^an error message should be displayed$/, async () => {
    await expect(LoginPage.errorMessage).toBeDisplayed();
});


Then(/^the error message should contain "([^"]*)"$/, async (expectedText) => {
    const actualError = await LoginPage.getErrorMessageText();
    expect(actualError).toContain(expectedText);
});

Then(/^the username field error message should be "([^"]*)"$/, async (expectedErrorText) => {
    const actualError = await LoginPage.getUsernameErrorMessageText();
    expect(actualError).toContain(expectedErrorText);
});

Then(/^the password field error message should be "([^"]*)"$/, async (expectedErrorText) => {
    const actualError = await LoginPage.getPasswordErrorMessageText();
    expect(actualError).toContain(expectedErrorText);
});

Then(/^ the user logs out$/, async () => {
    await LoginPage.logout();
});
