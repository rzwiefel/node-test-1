#!/usr/bin/env node

var argv = process.argv.slice(2);

console.log('Hello!');
require('../app')(argv[0]);
