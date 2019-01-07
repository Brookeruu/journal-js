// export function pingPong(goal) {
//   var output = [];
//   for (var i = 1; i <= goal; i++) {
//     if (i % 15 === 0) {
//       output.push("ping-pong");
//     } else if (i % 3 === 0) {
//       output.push("ping");
//     } else if (i % 5 === 0) {
//       output.push("pong");
//     } else  {
//       output.push(i);
//     }
//   }
//   return output;
// }
export function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function() {
  return this.body.split(" ").length;
};

Entry.prototype.vowelCount = function() {
  var body = this.body;
  var regex = /[aeiou]/gi;
  var vowels = body.match(regex);
  return vowels.length;
  // console.log(vowels);
};

Entry.prototype.consonantCount = function() {
  var body = this.body;
  var regex = /[qwrtypsdfghjklzxcvbnm]/gi;
  var consonants = body.match(regex);
  return consonants.length;
  // console.log(vowels);
};

Entry.prototype.getTitle = function() {
  return this.title;
};

Entry.prototype.getTeaser = function() {
  var body = this.body;

};
