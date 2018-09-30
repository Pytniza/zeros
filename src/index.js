module.exports = function getZerosCount(number) {
  var z = 0, a = 5;
  while (number > a){
    z += Math.floor(number / a);
    a *= 5;
  }
    return z;
}
