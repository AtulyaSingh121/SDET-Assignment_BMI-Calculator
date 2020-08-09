package stepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Definition {
	
	WebDriver driver;
	
	@Given("^Age,height & weight of person available on home page $")
	public void age_height_and_weight_of_person_available_on_home_page_() throws InterruptedException{
	    // Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.gecko.driver","C:\\Users\\Automation\\GeckoDriver\\geckodriver-v0.26.0-win64\\geckodriver.exe");
		driver = new FirefoxDriver();
		driver.get("https://www.calculator.net/");
		driver.manage().window().maximize();
		Thread.sleep(3000);
		if(driver.getTitle()=="Calculator.net: Free Online Calculators - Math, Fitness, Finance, Science");
		System.out.println("Title matches");
		driver.findElement(By.linkText("BMI Calculator")).click(); 
	}

	@When("^Enter (\\d+) and (\\d+) and (\\d+) and click calculate button$")
	public void enter_and_and_and_click_calculate_button(String arg1, String arg2, String arg3) throws InterruptedException{
	    // Write code here that turns the phrase above into concrete actions
		Thread.sleep(2000);
		
		driver.findElement(By.id("cage")).clear();
		driver.findElement(By.id("cage")).sendKeys(arg1);
		
		driver.findElement(By.id("cheightmeter")).clear();
		driver.findElement(By.id("cheightmeter")).sendKeys(arg2);
		
		driver.findElement(By.id("ckg")).clear();
		driver.findElement(By.id("ckg")).sendKeys(arg3);
		
		driver.findElement(By.xpath("//input[@value='Calculate']")).click();
	    
	}

	@Then("^Persons BMI is displayed$")
	public void persons_BMI_is_displayed() throws InterruptedException{
	    // Write code here that turns the phrase above into concrete actions
		
		Thread.sleep(2000);
		System.out.println("BMI is " + driver.findElement(By.className("bigtext")).getText());
		driver.close();
	    
	}
}
