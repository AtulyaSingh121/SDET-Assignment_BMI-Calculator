package Runners;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		features="Features", 
		glue="stepDefination",
		tags="@Regression",
		plugin={"pretty","html:target/cucumber-pretty"})
public class Runner {

}
