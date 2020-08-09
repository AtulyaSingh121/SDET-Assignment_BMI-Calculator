
Feature: Calculate BMI of a person

  @Regression
  Scenario Outline: BMI calculation
    Given Age height and weight of person home page available
    When enter <age> and <height> and <weight> and click calculate button
    Then person's BMI displayed
    Examples: 
    |age|height|weight|
		|10|127|40|
		|30|156|70|
		|25|152|55|
		|20|160|45|
		|35|160|70|
    