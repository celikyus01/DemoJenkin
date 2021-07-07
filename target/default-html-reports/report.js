$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Authentication login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "name": "M3-4392_Verify Login failure scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on Login Screen",
  "keyword": "Given "
});
formatter.step({
  "name": "Enter Username \u0027\u003cValidUsername\u003e\u0027 and Password \u0027\u003cInvalidPassword\u003e\u0027",
  "keyword": "Then "
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "name": "Verify Inline error message for Username field \u0027Incorrect Username\u0027 displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "Verify Inline error message for Password field \u0027Incorrect Password\u0027 displayed",
  "keyword": "And "
});
formatter.step({
  "name": "Enter Username \u0027\u003cInvalidUsername\u003e\u0027 and Password \u0027\u003cValidPassword\u003e\u0027",
  "keyword": "Then "
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "name": "Verify Inline error message for Username field \u0027Incorrect Username\u0027 displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "Verify Inline error message for Password field \u0027Incorrect Password\u0027 displayed",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "ValidUsername",
        "InvalidPassword",
        "InvalidUsername",
        "ValidPassword"
      ]
    },
    {
      "cells": [
        "Swathi.priya",
        "Vashvika",
        "Swathi",
        "Vashvika14@"
      ]
    }
  ]
});
formatter.scenario({
  "name": "M3-4392_Verify Login failure scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on Login Screen",
  "keyword": "Given "
});
formatter.match({
  "location": "com.app.stepdefinitions.LoginStepDefs.i_am_on_Login_Screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Username \u0027Swathi.priya\u0027 and Password \u0027Vashvika\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "com.app.stepdefinitions.LoginStepDefs.enter_Username_and_Password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "com.app.stepdefinitions.LoginStepDefs.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Inline error message for Username field \u0027Incorrect Username\u0027 displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.app.stepdefinitions.LoginStepDefs.verify_Inline_error_message_for_Username_field_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Inline error message for Password field \u0027Incorrect Password\u0027 displayed",
  "keyword": "And "
});
formatter.match({
  "location": "com.app.stepdefinitions.LoginStepDefs.verify_Inline_error_message_for_Password_field_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Username \u0027Swathi\u0027 and Password \u0027Vashvika14@\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "com.app.stepdefinitions.LoginStepDefs.enter_Username_and_Password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "com.app.stepdefinitions.LoginStepDefs.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Inline error message for Username field \u0027Incorrect Username\u0027 displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.app.stepdefinitions.LoginStepDefs.verify_Inline_error_message_for_Username_field_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Inline error message for Password field \u0027Incorrect Password\u0027 displayed",
  "keyword": "And "
});
formatter.match({
  "location": "com.app.stepdefinitions.LoginStepDefs.verify_Inline_error_message_for_Password_field_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Succesful Login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login_succesful"
    }
  ]
});
formatter.step({
  "name": "I am on Login Screen",
  "keyword": "Given "
});
formatter.step({
  "name": "Enter Username \"\u003cValidUsername\u003e\" and Password \"\u003cValidPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "name": "Verify page title as \"Dashboard\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "ValidUsername",
        "ValidPassword"
      ]
    },
    {
      "cells": [
        "yusuf_inspector",
        "Adana001@"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Succesful Login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@login_succesful"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on Login Screen",
  "keyword": "Given "
});
formatter.match({
  "location": "com.app.stepdefinitions.LoginStepDefs.i_am_on_Login_Screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Username \"yusuf_inspector\" and Password \"Adana001@\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.app.stepdefinitions.LoginStepDefs.enter_Username_and_Password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "com.app.stepdefinitions.LoginStepDefs.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify page title as \"Dashboard\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.app.stepdefinitions.LoginStepDefs.verifyPageTitleAs(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: !! NOTE: Title was expected to be Dashboard, but found expected:\u003c[Dashboard]\u003e but was:\u003c[]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat com.app.stepdefinitions.LoginStepDefs.verifyPageTitleAs(LoginStepDefs.java:48)\n\tat ✽.Verify page title as \"Dashboard\"(file:///Users/Yusuf.Celik/IdeaProjects/DemoJenkin/src/test/resources/features/Login.feature:23)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/LoginParallelDemo.feature");
formatter.feature({
  "name": "Authentication login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "name": "M3-4392_Verify Login failure scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on Login Screen",
  "keyword": "Given "
});
formatter.step({
  "name": "Enter Username \u0027\u003cValidUsername\u003e\u0027 and Password \u0027\u003cInvalidPassword\u003e\u0027",
  "keyword": "Then "
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "name": "Verify Inline error message for Username field \u0027Incorrect Username\u0027 displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "Verify Inline error message for Password field \u0027Incorrect Password\u0027 displayed",
  "keyword": "And "
});
formatter.step({
  "name": "Enter Username \u0027\u003cInvalidUsername\u003e\u0027 and Password \u0027\u003cValidPassword\u003e\u0027",
  "keyword": "Then "
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "name": "Verify Inline error message for Username field \u0027Incorrect Username\u0027 displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "Verify Inline error message for Password field \u0027Incorrect Password\u0027 displayed",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "ValidUsername",
        "InvalidPassword",
        "InvalidUsername",
        "ValidPassword"
      ]
    },
    {
      "cells": [
        "Swathi.priya",
        "Vashvika",
        "Swathi",
        "Vashvika14@"
      ]
    }
  ]
});
formatter.scenario({
  "name": "M3-4392_Verify Login failure scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on Login Screen",
  "keyword": "Given "
});
formatter.match({
  "location": "com.app.stepdefinitions.LoginStepDefs.i_am_on_Login_Screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Username \u0027Swathi.priya\u0027 and Password \u0027Vashvika\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "com.app.stepdefinitions.LoginStepDefs.enter_Username_and_Password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "com.app.stepdefinitions.LoginStepDefs.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Inline error message for Username field \u0027Incorrect Username\u0027 displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.app.stepdefinitions.LoginStepDefs.verify_Inline_error_message_for_Username_field_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Inline error message for Password field \u0027Incorrect Password\u0027 displayed",
  "keyword": "And "
});
formatter.match({
  "location": "com.app.stepdefinitions.LoginStepDefs.verify_Inline_error_message_for_Password_field_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Username \u0027Swathi\u0027 and Password \u0027Vashvika14@\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "com.app.stepdefinitions.LoginStepDefs.enter_Username_and_Password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "com.app.stepdefinitions.LoginStepDefs.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Inline error message for Username field \u0027Incorrect Username\u0027 displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.app.stepdefinitions.LoginStepDefs.verify_Inline_error_message_for_Username_field_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Inline error message for Password field \u0027Incorrect Password\u0027 displayed",
  "keyword": "And "
});
formatter.match({
  "location": "com.app.stepdefinitions.LoginStepDefs.verify_Inline_error_message_for_Password_field_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Succesful Login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login_succesful"
    }
  ]
});
formatter.step({
  "name": "I am on Login Screen",
  "keyword": "Given "
});
formatter.step({
  "name": "Enter Username \"\u003cValidUsername\u003e\" and Password \"\u003cValidPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "name": "Verify page title as \"Dashboard\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "ValidUsername",
        "ValidPassword"
      ]
    },
    {
      "cells": [
        "yusuf_inspector",
        "Adana001@"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Succesful Login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@login_succesful"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on Login Screen",
  "keyword": "Given "
});
formatter.match({
  "location": "com.app.stepdefinitions.LoginStepDefs.i_am_on_Login_Screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Username \"yusuf_inspector\" and Password \"Adana001@\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.app.stepdefinitions.LoginStepDefs.enter_Username_and_Password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "com.app.stepdefinitions.LoginStepDefs.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify page title as \"Dashboard\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.app.stepdefinitions.LoginStepDefs.verifyPageTitleAs(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: !! NOTE: Title was expected to be Dashboard, but found expected:\u003c[Dashboard]\u003e but was:\u003c[]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat com.app.stepdefinitions.LoginStepDefs.verifyPageTitleAs(LoginStepDefs.java:48)\n\tat ✽.Verify page title as \"Dashboard\"(file:///Users/Yusuf.Celik/IdeaProjects/DemoJenkin/src/test/resources/features/LoginParallelDemo.feature:23)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/LoginParallelDemo2.feature");
formatter.feature({
  "name": "Authentication login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "name": "M3-4392_Verify Login failure scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on Login Screen",
  "keyword": "Given "
});
formatter.step({
  "name": "Enter Username \u0027\u003cValidUsername\u003e\u0027 and Password \u0027\u003cInvalidPassword\u003e\u0027",
  "keyword": "Then "
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "name": "Verify Inline error message for Username field \u0027Incorrect Username\u0027 displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "Verify Inline error message for Password field \u0027Incorrect Password\u0027 displayed",
  "keyword": "And "
});
formatter.step({
  "name": "Enter Username \u0027\u003cInvalidUsername\u003e\u0027 and Password \u0027\u003cValidPassword\u003e\u0027",
  "keyword": "Then "
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "name": "Verify Inline error message for Username field \u0027Incorrect Username\u0027 displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "Verify Inline error message for Password field \u0027Incorrect Password\u0027 displayed",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "ValidUsername",
        "InvalidPassword",
        "InvalidUsername",
        "ValidPassword"
      ]
    },
    {
      "cells": [
        "Swathi.priya",
        "Vashvika",
        "Swathi",
        "Vashvika14@"
      ]
    }
  ]
});
formatter.scenario({
  "name": "M3-4392_Verify Login failure scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on Login Screen",
  "keyword": "Given "
});
formatter.match({
  "location": "com.app.stepdefinitions.LoginStepDefs.i_am_on_Login_Screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Username \u0027Swathi.priya\u0027 and Password \u0027Vashvika\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "com.app.stepdefinitions.LoginStepDefs.enter_Username_and_Password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "com.app.stepdefinitions.LoginStepDefs.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Inline error message for Username field \u0027Incorrect Username\u0027 displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.app.stepdefinitions.LoginStepDefs.verify_Inline_error_message_for_Username_field_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Inline error message for Password field \u0027Incorrect Password\u0027 displayed",
  "keyword": "And "
});
formatter.match({
  "location": "com.app.stepdefinitions.LoginStepDefs.verify_Inline_error_message_for_Password_field_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Username \u0027Swathi\u0027 and Password \u0027Vashvika14@\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "com.app.stepdefinitions.LoginStepDefs.enter_Username_and_Password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "com.app.stepdefinitions.LoginStepDefs.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Inline error message for Username field \u0027Incorrect Username\u0027 displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.app.stepdefinitions.LoginStepDefs.verify_Inline_error_message_for_Username_field_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Inline error message for Password field \u0027Incorrect Password\u0027 displayed",
  "keyword": "And "
});
formatter.match({
  "location": "com.app.stepdefinitions.LoginStepDefs.verify_Inline_error_message_for_Password_field_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Succesful Login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login_succesful"
    }
  ]
});
formatter.step({
  "name": "I am on Login Screen",
  "keyword": "Given "
});
formatter.step({
  "name": "Enter Username \"\u003cValidUsername\u003e\" and Password \"\u003cValidPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "name": "Verify page title as \"Dashboard\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "ValidUsername",
        "ValidPassword"
      ]
    },
    {
      "cells": [
        "yusuf_inspector",
        "Adana001@"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Succesful Login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@login_succesful"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on Login Screen",
  "keyword": "Given "
});
formatter.match({
  "location": "com.app.stepdefinitions.LoginStepDefs.i_am_on_Login_Screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Username \"yusuf_inspector\" and Password \"Adana001@\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.app.stepdefinitions.LoginStepDefs.enter_Username_and_Password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "com.app.stepdefinitions.LoginStepDefs.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify page title as \"Dashboard\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.app.stepdefinitions.LoginStepDefs.verifyPageTitleAs(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: !! NOTE: Title was expected to be Dashboard, but found expected:\u003c[Dashboard]\u003e but was:\u003c[]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat com.app.stepdefinitions.LoginStepDefs.verifyPageTitleAs(LoginStepDefs.java:48)\n\tat ✽.Verify page title as \"Dashboard\"(file:///Users/Yusuf.Celik/IdeaProjects/DemoJenkin/src/test/resources/features/LoginParallelDemo2.feature:23)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png", "screenshot");
formatter.after({
  "status": "passed"
});
});