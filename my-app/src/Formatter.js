
  module.exports = function format(stringToFormat) {
    if (stringToFormat) {
      return stringToFormat.charAt(0).toUpperCase() + stringToFormat.slice(1);
    } else {
      return stringToFormat; // if stringToFormat is not parseable just return it 
    }
  }
