// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://github.com/owid/covid-19-data/blob/master/public/data/vaccinations/vaccinations.json', true)

request.onload = function () {
  // Begin accessing JSON data here
}

// Send request
request.send()

// Access data
var data = JSON.parse(this.response)
