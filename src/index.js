// Your JavaScript code here
alert("Hello, World!");



 class LoginAutomation {
    
    public void login() {
        System.setProperty("webdriver.chrome.driver", "path_to_chrome_driver");
        WebDriver driver = new ChromeDriver();

        // Configure the web browser
        driver.manage().window().maximize();

        // Navigate to the web URL
        driver.get("https://www.browserstack.com/users/sign_in");

        // Locate the Web Element
        WebElement username = driver.findElement(By.id("nome"));
        WebElement password = driver.findElement(By.id("senha"));
        WebElement login = driver.findElement(By.name("login"));

        // Perform Action on the Located Web Element
        username.sendKeys("email");
        password.sendKeys("senha");
        login.click(this.login);

        // Verify & Validate The Action
        String actualUrl = driver.getCurrentUrl();
        String expectedUrl = "https://www.browserstack.com/users/sign_in";
        Assert.assertEquals(actualUrl, expectedUrl);
    }
}