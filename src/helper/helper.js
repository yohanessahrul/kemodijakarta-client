export function judulConvertToUrlParameter (string) {
  var result = '';
  for (var i=0; i < string.length; i++) {
    if (string[i] === ' ') {
      result += '-'
    } else if (string[i] === ',' || string[i] === '!' || string[i] === '(' || string[i] === ')') {
      result += ''
    } else {
      result += string[i]
    }
  }
  return result.toLowerCase()
}