const sans = require('rgb-hsv');
const papyrus = require('hex-to-rgb');
const chara = require("prompt-sync")();

var ashnunguna = chara('HEX: ')
var uguro = papyrus(ashnunguna)
console.log(ashnunguna + ': ' + sans.apply(null, uguro));
