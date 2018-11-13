// from data.js
var tableData = data;


// Get a reference to the table and table body
var tbody = d3.select('tbody')
data.forEach((sighting) => {
  // var row = tbody.append('tr')
  tbody.append('tr')
  Object.entries(sighting).forEach(([key, value]) => {
    var cell = tbody.append('td')
    cell.text(value)
  })
})

var submit = d3.select("#filter-btn")

submit.on("click", function () {
  d3.event.preventDefault()

  var inputElement = d3.select('#datetime')

  var inputValue = inputElement.property('value')

  var filteredData = data.filter(sighting => sighting.datetime === inputValue)
  console.log(filteredData)

  d3.select('tbody').selectAll('*').remove()

  filteredData.forEach((sighting) => {
    // var row = tbody.append('tr')
    tbody.append('tr')
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = tbody.append('td')
      cell.text(value)
    })
  })
})
