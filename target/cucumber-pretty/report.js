$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("bmiCalculator.feature");
formatter.feature({
  "line": 2,
  "name": "Calculate BMI of a person",
  "description": "",
  "id": "calculate-bmi-of-a-person",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "BMI calculation",
  "description": "",
  "id": "calculate-bmi-of-a-person;bmi-calculation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Age height and weight of person home page available",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "enter \u003cage\u003e and \u003cheight\u003e and \u003cweight\u003e and click calculate button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "person\u0027s BMI displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "calculate-bmi-of-a-person;bmi-calculation;",
  "rows": [
    {
      "cells": [
        "age",
        "height",
        "weight"
      ],
      "line": 10,
      "id": "calculate-bmi-of-a-person;bmi-calculation;;1"
    },
    {
      "cells": [
        "10",
        "127",
        "40"
      ],
      "line": 11,
      "id": "calculate-bmi-of-a-person;bmi-calculation;;2"
    },
    {
      "cells": [
        "30",
        "156",
        "70"
      ],
      "line": 12,
      "id": "calculate-bmi-of-a-person;bmi-calculation;;3"
    },
    {
      "cells": [
        "25",
        "152",
        "55"
      ],
      "line": 13,
      "id": "calculate-bmi-of-a-person;bmi-calculation;;4"
    },
    {
      "cells": [
        "20",
        "160",
        "45"
      ],
      "line": 14,
      "id": "calculate-bmi-of-a-person;bmi-calculation;;5"
    },
    {
      "cells": [
        "35",
        "160",
        "70"
      ],
      "line": 15,
      "id": "calculate-bmi-of-a-person;bmi-calculation;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "BMI calculation",
  "description": "",
  "id": "calculate-bmi-of-a-person;bmi-calculation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Age height and weight of person home page available",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "enter 10 and 127 and 40 and click calculate button",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "person\u0027s BMI displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Definition.age_height_and_weight_of_person_home_page_available()"
});
formatter.result({
  "duration": 31336408900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 6
    },
    {
      "val": "127",
      "offset": 13
    },
    {
      "val": "40",
      "offset": 21
    }
  ],
  "location": "Definition.enter_and_and_and_click_calculate_button(String,String,String)"
});
formatter.result({
  "duration": 6366511100,
  "status": "passed"
});
formatter.match({
  "location": "Definition.person_s_BMI_displayed()"
});
formatter.result({
  "duration": 3511377700,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "BMI calculation",
  "description": "",
  "id": "calculate-bmi-of-a-person;bmi-calculation;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Age height and weight of person home page available",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "enter 30 and 156 and 70 and click calculate button",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "person\u0027s BMI displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Definition.age_height_and_weight_of_person_home_page_available()"
});
formatter.result({
  "duration": 26391757000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 6
    },
    {
      "val": "156",
      "offset": 13
    },
    {
      "val": "70",
      "offset": 21
    }
  ],
  "location": "Definition.enter_and_and_and_click_calculate_button(String,String,String)"
});
formatter.result({
  "duration": 4499229800,
  "status": "passed"
});
formatter.match({
  "location": "Definition.person_s_BMI_displayed()"
});
formatter.result({
  "duration": 3438997000,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "BMI calculation",
  "description": "",
  "id": "calculate-bmi-of-a-person;bmi-calculation;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Age height and weight of person home page available",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "enter 25 and 152 and 55 and click calculate button",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "person\u0027s BMI displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Definition.age_height_and_weight_of_person_home_page_available()"
});
formatter.result({
  "duration": 25076538700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 6
    },
    {
      "val": "152",
      "offset": 13
    },
    {
      "val": "55",
      "offset": 21
    }
  ],
  "location": "Definition.enter_and_and_and_click_calculate_button(String,String,String)"
});
formatter.result({
  "duration": 7227108900,
  "status": "passed"
});
formatter.match({
  "location": "Definition.person_s_BMI_displayed()"
});
formatter.result({
  "duration": 3742941600,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "BMI calculation",
  "description": "",
  "id": "calculate-bmi-of-a-person;bmi-calculation;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Age height and weight of person home page available",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "enter 20 and 160 and 45 and click calculate button",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "person\u0027s BMI displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Definition.age_height_and_weight_of_person_home_page_available()"
});
formatter.result({
  "duration": 17339464600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 6
    },
    {
      "val": "160",
      "offset": 13
    },
    {
      "val": "45",
      "offset": 21
    }
  ],
  "location": "Definition.enter_and_and_and_click_calculate_button(String,String,String)"
});
formatter.result({
  "duration": 4255444800,
  "status": "passed"
});
formatter.match({
  "location": "Definition.person_s_BMI_displayed()"
});
formatter.result({
  "duration": 3360404600,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "BMI calculation",
  "description": "",
  "id": "calculate-bmi-of-a-person;bmi-calculation;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Age height and weight of person home page available",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "enter 35 and 160 and 70 and click calculate button",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "person\u0027s BMI displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Definition.age_height_and_weight_of_person_home_page_available()"
});
formatter.result({
  "duration": 19595964200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 6
    },
    {
      "val": "160",
      "offset": 13
    },
    {
      "val": "70",
      "offset": 21
    }
  ],
  "location": "Definition.enter_and_and_and_click_calculate_button(String,String,String)"
});
formatter.result({
  "duration": 3072788500,
  "status": "passed"
});
formatter.match({
  "location": "Definition.person_s_BMI_displayed()"
});
formatter.result({
  "duration": 3612765400,
  "status": "passed"
});
});