Feature: Login functionality

  Background: User is on the login screen
    Given the user is on the login screen

  # POSITIVE TEST SCENARIOS

  Scenario: Successful login with valid credentials
    When the user logs in with username "standard_user" and password "secret_sauce"
    And the user clicks the login button
    And the user should be logged in successfully
    And the products screen should be displayed
    Then the user logs out
  
  # NEGATIVE TEST SCENARIOS

  Scenario: Login fails with invalid username
    When the user logs in with username "invalidusernmae" and password "incorrect password"
    And the user clicks the login button
    Then an error message should be displayed
    And the error message should contain "Username and password do not match any user in this service."

  Scenario: Login fails with incorrect password
    When the user logs in with username "standard_user" and password "wrongpassword"
    Then an error message should be displayed
    And the error message should contain "Username and password do not match any user in this service."

  Scenario: Login fails with empty email field
    When the user logs in with username "" and password "secret_sauce"
    And the user clicks the login button
    Then the username field error message should be "Username is required"

  Scenario: Login fails with empty password field
    When the user logs in with username "standard_user" and password ""
    And the user clicks the login button
    Then the password field error message should be "Password is required"

  Scenario: Login fails with both fields empty
    When the user clicks the login button without entering any credentials
    Then the username field error message should be "Username is required"
