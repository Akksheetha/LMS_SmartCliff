module.exports={
    default:{
        "formatOptions":{
            "snippetInterface":"async-await"
        },
        requireModule:[
            "ts-node/register"
        ],

        require:[
            "src/test/StepDefinitions/**/*.ts",
            "src/test/Hooks/**/*.ts",
            "src/test/support/**/*.ts",
           
        ],

        

        paths:[
            "src/test/Features/**/*.feature",
        ],

        publishQuiet:true,
        dryRun:false,  //false for real automation

        format: [
            "progress",
            "html:Report/cucumber-html/cucumber-report.html",
            "json:Report/cucumber-json/report.json",
            "allure-cucumberjs/reporter:Report/allure-report/allure-results",
            "rerun:rerun/rerun.txt"
]

    }
};
