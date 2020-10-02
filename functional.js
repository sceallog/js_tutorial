let cities = ["Kyoto", "Osaka", "Kita Kyushu", "Higashi Osaka"]

// Returns a URL-friendly version of a string.
let urlify = (string) => {
  return string.toLowerCase().split(/\s+/).join("-")
}

let imperativeUrls = (elements) => {
  let url = []
  elements.forEach((element) => {
    url.push(urlify(element))
  })
  return url
}
console.log(imperativeUrls(cities))

let functionalUrls = (elements) => {
  return elements.map((element) => urlify(element))
}
console.log(functionalUrls(cities))

// Returns an array of URLs of the form https://example.com/<urlifiev form>
let cityUrls = (cities) => {
  return cities.map((city) => `https://example.com/${urlify(city)}`)
}
console.log(cityUrls(cities))

// Returns only those cities that have one word in their name.
let imperativeSingles = (elements) => {
  let singles = []
  elements.forEach((element) => {
    if (element.split(/\s+/).length === 1) {
      singles.push(element)
    }
  })
  return singles
}
console.log(imperativeSingles(cities))

let functionalSingles = (elements) => {
  return elements.filter((element) => element.split(/\s+/).length === 1)
}
console.log(functionalSingles(cities))

let returnDakotas = (elements) => {
  return elements.filter((element) => element.includes("Dakota"))
}

let returnDakotasAgain = (elements) => {
  return elements.filter((element) => element.split(/\s+/).length === 2)
}

console.log(
  returnDakotas(["North Dakota", "South Dakota", "Kansas", "Nebraska"])
)
console.log(returnDakotasAgain(cities))

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// sum: imperative solution

let imperativeSum = (elements) => {
  let total = 0

  elements.forEach((n) => {
    total += n
  })
  return total
}
console.log(imperativeSum(numbers))

// sum: functional solution

let functionalSum = (elements) => {
  return elements.reduce((total, n) => {
    return (total += n)
  })
}
console.log(functionalSum(numbers))

// lengths: imperative solution

let imperativeLengths = (elements) => {
  let lengths = {}
  elements.forEach((element) => {
    lengths[element] = element.length
  })
  return lengths
}
console.log(imperativeLengths(cities))

// lengths: functional solution

let functionalLengths = (elements) => {
  return elements.reduce((lengths, element) => {
    lengths[element] = element.length
    return lengths
  }, {})
}
console.log(functionalLengths(cities))

// returns the product of all elements in an array

let multiplier = (array) => {
  return array.reduce((product, n) => {
    return (product *= n)
  })
}
console.log(multiplier(numbers))
