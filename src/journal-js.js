
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
  var teaser = [];
  var body = this.body.split(".");
  var firstSentence = body[0];
  var wordCount = firstSentence.split(" ");
  var count = 0;

  wordCount.forEach(function(each) {
    if (count < 8) {
      teaser.push(each);
      count = count + 1;
    }
  });
  return teaser.join(" ").concat("...");
};
