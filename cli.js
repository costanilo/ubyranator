#!/usr/bin/env node

say();

function say() {
    var module = require("./index");

    console.log(module.ubyraname());
}