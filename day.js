// Returns the day of the week for the given date.
let dayName = (date) => {
  const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]
  return daysOfTheWeek[date.getDay()]
}

// Returns a greeting for the given date.
let greeting = (date) => {
  return `Hello, world! Happy ${dayName(date)}!`
}
