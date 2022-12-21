const tableBody = document.getElementById('table-body')

let flights = [
  {
  time:"14:03",
  destination:"BERLIN",
  flight:"BR 303",
  gate:"B 12",
  remarks:"ON TIME"
  },
  {
  time:"03:16",
  destination:"PERTH",
  flight:"PR 178",
  gate:"A 04",
  remarks:"DELAYED"
  },
  {
  time:"17:54",
  destination:"GHANA",
  flight:"GH 555",
  gate:"B 76",
  remarks:"ON TIME"
  },
  {
  time:"11:21",
  destination:"LONDON",
  flight:"LD 212",
  gate:"C 29",
  remarks:"DELAYED"
  },
  {
  time:"23:49",
  destination:"SYDNEY",
  flight:"SDY 061",
  gate:"A 48",
  remarks:"CANCELLED"
  },
  {
  time:"22:37",
  destination:"PARIS",
  flight:"FR 351",
  gate:"C 19",
  remarks:"CANCELLED"
  }
  
]

const destinations = ["PARIS","SYDNEY", "LONDON", "GHANA", "PERTH", "BERLIN"]
const remarks = ["ON TIME", "DELAYED", "CANCELLED"]
let hour = 22



function populateTable() {
for (const flight of flights) {
  const tableRow = document.createElement("tr")

  for(const flightDetail in flight) {
  const tableCell = document.createElement("td")
  
  const word = Array.from(flight[flightDetail])
  


  for(const [index, letter] of word.entries()) {
  const letterElement = document.createElement("div")

  setTimeout (() => {
  letterElement.classList.add('flip')
  letterElement.textContent = letter
  tableCell.append(letterElement)
  }, 100 * index)
  
}

  tableRow.append(tableCell)

}

tableBody.append(tableRow)

}
}
populateTable()


function generateRandomLetter() {

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return alphabet.charAt(Math.floor(Math.random() * alphabet.length))

}

function generateRandomNumber(maxNumber) {

  const numbers = "0123456789"
  if (maxNumber) {
    const newNumbers = numbers.slice(0, maxNumber)
    return newNumbers.charAt(Math.floor(Math.random() * newNumbers.length))
  }
  return numbers.charAt(Math.floor(Math.random() * numbers.length))

}

function generateTime() {
let displayHour = hour

if (hour < 24) {
  hour++
}
if (hour >= 24) {
  hour = 1 
  displayHour = hour
}
if (hour < 10) {
  displayHour = "0" + hour
}

return displayHour + ":" + generateRandomNumber(5) + generateRandomNumber()

}



function shuffleUp() {
  flights.shift()
  flights.push({
    time: generateTime(),
    destination: destinations[Math.floor(Math.random() * destinations.lengths)],
    flight: generateRandomLetter() + generateRandomLetter() + " " + generateRandomNumber()+ generateRandomNumber(),
    gate: generateRandomLetter() + " " + generateRandomNumber() + generateRandomNumber(),
    remarks: remarks[Math.floor(Math.random() * remarks.lengths)]

  })
tableBody.textContent = ""
populateTable()
}


setInterval(shuffleUp, 6000)