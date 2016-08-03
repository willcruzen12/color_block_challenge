var color1 = 0;
var color2 = 1;
var color3 = 2;
var color4 = 3;
var colorNumArray = [color1, color2, color3, color4];

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
};

var correctColor = randomNumber(colorNumArray[0], colorNumArray[3]);

$('div').on('click', function(event) {
  console.log('works');

});
