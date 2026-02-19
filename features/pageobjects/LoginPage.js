import { $, driver } from '@wdio/globals';

class LoginPage {

    get usernameField() { return $('~test-Username'); }
    get passwordField() { return $('~test-Password'); }
    get loginButton() { return $('~test-LOGIN'); }
    get errorMessage() { return $('//android.widget.TextView[@text="Username and password do not match any user in this service."]'); }
    get productsScreen() { return $('//android.widget.TextView[@text="PRODUCTS"]'); }
    get logoutButton() { return $('~test-LOGOUT'); }
    get menuButton() { return $('//android.view.ViewGroup[@content-desc="test-Menu"]/android.view.ViewGroup'); }
    get usernameErrorMessage() { return $('//android.widget.TextView[@text="Username is required"]'); }
    get passwordErrorMessage() { return $('//android.widget.TextView[@text="Password is required"]'); }

    async openLoginScreen() {
        try {
            await this.usernameField.waitForDisplayed({ timeout: 10000 });
            console.log(' Login screen ready');
        } catch (error) {
            console.error(`Error: Login screen navigation failed: ${error.message}`);
            throw error;
        }
    }

    async login(username, password) {
        try {
            await this.usernameField.waitForDisplayed();
            await this.usernameField.setValue(username);
            await this.passwordField.setValue(password);

        } catch (error) {
            console.error('Error during login execution:', error.message);
            throw error;
        }
    }

    async logout() {
        try {
            await this.menuButton.waitForDisplayed({ timeout: 10000 });
            await this.menuButton.click();
            await this.logoutButton.waitForDisplayed({ timeout: 10000 });
            await this.logoutButton.click();
        } catch (error) {
            console.error(`Error during logout: ${error.message}`);
            throw error;
        }
    }

    async getErrorMessageText() {
        return await this.errorMessage.getText();
    }

    async getUsernameErrorMessageText() {
        return await this.usernameErrorMessage.getText();
    }

    async getPasswordErrorMessageText() {
        return await this.passwordErrorMessage.getText();
    }

    async isProductsScreenDisplayed() {
        return await this.productsScreen.isDisplayed().catch(() => false);
    }

    async clearFields() {
        await this.usernameField.clearValue();
        await this.passwordField.clearValue();
    }
}

export default new LoginPage();
