// Adds 'reverse' to all strings.
String.prototype.reverse = function () {
  return Array.from(this).reverse().join("")
}

// Adds a 'blank' to all strings.
String.prototype.blank = function () {
  return !!this.match(/^\s*$/g)
}

// Returns the last element of an array.
Array.prototype.last = function () {
  return this.slice(-1)
}
// Defines a Phrase object.

function Phrase(content) {
  this.content = content

  // Returns content processed for palindrome testing.
  this.processor = function (string) {
    return string.toLowerCase()
  }

  this.processedContent = function processedContent() {
    return this.processor(this.content)
  }

  // Checks whether a string is a palindrome.
  this.palindrome = function palindrome() {
    if (this.processedContent() === this.processedContent().reverse()) {
      return `The word '${this.processedContent()}' is a palindrome.`
    } else {
      return `The word '${this.processedContent()}' is not a palindrome.`
    }
  }
  // Makes the phrase LOUDER.
  this.louder = function () {
    return this.content.toUpperCase()
  }
}
