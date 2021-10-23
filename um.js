const sans = require('rgb-hsv');
const papyrus = require('hex-to-rgb');
const chara = require("prompt-sync")();

var ashnunguna = chara('오늘은 헥스 코드 를! hsv로 변환할 거예요~ 헥스 코드 를! 입력하세요~')
var uguro = papyrus(ashnunguna)
console.log("얘! " + ashnunguna + '는! ' + sans.apply(null, uguro) + "란다!");
