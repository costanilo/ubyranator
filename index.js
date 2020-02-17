const sufix = [
    "jara",
    "ci",
    "news",
    "neves",
    "sson",
    "cleyson",
    "nino",
    "jersey",
    "cledson",
    "man",
    "cley",
    "silver",
    "jason",
    "sync",
    "boy",
    "tan"
];

exports.ubyraname = function () {
    return `Ubyra${sufix[Math.floor(Math.random() * sufix.length)]}`;
}