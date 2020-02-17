const sufix = ["jara", "ci", "news", "neves", "son", "cleyson", "nino", "jersey", "cledson", "man", "cley", "silver", "jason", "sync", "boy"];

exports.ubyraname = function () {
    return `Ubyra${sufix.sort(function() {return 0.5 - Math.random()})[0]}`;
}