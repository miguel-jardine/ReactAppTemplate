var 
    React       = require("react"),
    ReactDOM    = require("react-dom"),

    {Route, Router, IndexRoute, hashHistory}    = require("react-router"),

    end_var_def = [];

// Load foundation
$(document).foundation();

// App CSS
require("style!css!sass!applicationStyles");

ReactDOM.render(
    <p>React App Template</p>,
    document.getElementById("app")
);
