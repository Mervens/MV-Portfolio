
function linkClick(input) { /* Function receives 1 string argument for conditional check */
    var input = input; 

    if (input == "horiseon") {
        window.open("https://mervens.github.io/Horiseon-Solutions-Code-Refactor//");
    } else if (input == "run-buddy") {
        window.open("https://mervens.github.io/Run-Buddy-2.0/");
    } else if (input == 'password-generator') {
        window.open("https://mervens.github.io/Password-Generator-C3/");
    } else if (input == 'web-api-code-quiz') {
        window.open("https://mervens.github.io/Coding-Quiz//");
    }  else if (input == 'work-day-scheduler') {
        window.open("https://mervens.github.io/Week-Scheduler/");
    } else if (input == 'flightaway') {
        window.open("https://jaymaverick.github.io/Project1/");
    } else {
        return true;
    }
};
