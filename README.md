# 📱 Swag Labs Appium Automation Suite

This repository contains a **mobile automation framework** for the **Swag Labs Demo App**, built using **WebdriverIO**, **Appium**, and **Cucumber**. The framework follows the **Page Object Model (POM)** design pattern for better maintainability and scalability, and uses **Allure** for rich and interactive test reporting.

---

## ✨ Key Features

- 📱 Android mobile automation using **Appium**
- 🧪 Test execution with **WebdriverIO**
- 🥒 BDD-style test cases using **Cucumber**
- 🧱 **Page Object Model (POM)** architecture
- 📊 **Allure Reports** for detailed test insights
- 📸 Automatic screenshot capture on failures

---

## 📋 Prerequisites

Before setting up the project, ensure the following software is installed and configured:

### 1. Node.js
- Version **18 or higher** is recommended
- Verify installation:
  ```bash
  node -v
  npm -v
  ```

### 2. Java Development Kit (JDK)
- Required for **Android Studio** and **Appium**
- Recommended: **JDK 11 or later**
- Verify installation:
  ```bash
  java -version
  ```

### 3. Android Studio
- Installed and configured
- Android SDK properly set up
- At least one Android Emulator created (e.g., **Pixel 6**, **Android 12**)

### 4. Appium Server
Install Appium globally:
```bash
npm install -g appium
```
Verify installation:
```bash
appium -v
```

### 5. UiAutomator2 Driver
Install the required Appium driver:
```bash
appium driver install uiautomator2
```

---

## 📂 Project Structure

```plaintext
├── apps/                   # Application binaries (.apk)
├── features/               # Gherkin feature files (BDD specs)
│   └── step-definitions/   # Step definitions (glue code)
├── pageobjects/            # Page Object Model classes (e.g., LoginPage.js)
├── screenshots/            # Screenshots captured on test failures
├── allure-results/         # Raw data generated for Allure reports
├── wdio.conf.js            # WebdriverIO configuration
└── package.json            # Project dependencies and scripts
```

---

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <project-root>
```

### 2. Install Project Dependencies

```bash
npm install
```

### 3. App Setup

- Create a folder named **`apps`** in the project root (if it does not already exist)
- Place the Swag Labs demo APK (e.g., `demo.apk`) inside the `apps` folder

```plaintext
apps/
 └── demo.apk
```

### 4. Configuration Check

Open `wdio.conf.js` and verify the following:

- `appium:deviceName` matches your running Android Emulator name
- `appium:platformVersion` matches the emulator OS version
- `appium:app` path correctly points to the APK inside the `apps` folder

---

## 🚀 Running the Tests

### 1. Start the Appium Server

Open a new terminal window and run:

```bash
appium
```

Keep this terminal running while executing tests.

### 2. Execute the Test Suite

Run all tests using the predefined npm script:

```bash
npm test
```

This will:
- Launch the Android emulator (if not already running)
- Install the app on the device
- Execute all Cucumber feature files

---

## 📊 Reports & Screenshots

### 📈 Allure Reports

The framework integrates **Allure Reporter** to provide rich, interactive test execution reports.

#### Generate Allure Report

```bash
npx allure generate allure-results --clean -o allure-report
```

#### Open Allure Report

```bash
npx allure open allure-report
```

The report includes:
- Test execution status
- Step-by-step logs
- Failure screenshots
- Execution timelines

---

### 📸 Failure Screenshots

- Screenshots are **automatically captured** when a test fails
- Saved in the **`/screenshots`** directory
- Linked directly in the Allure report for easy debugging

---

## ✅ Best Practices Followed

- Clear separation of **test logic** and **page interactions**
- Reusable and maintainable Page Objects
- BDD-style readable test scenarios
- Centralized configuration via `wdio.conf.js`

---

## 📌 Notes

- Ensure the Android Emulator is running before starting test execution
- Use stable emulator images for consistent results
- Clean `allure-results` before fresh test runs if needed

---


