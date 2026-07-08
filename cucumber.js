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
            "progress-bar",
            "html:Report/cucumber-html/cucumber-report.html",
            "json:Report/cucumber-json/report.json",
            "rerun:rerun/rerun.txt"
]

    }
};