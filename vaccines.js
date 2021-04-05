// Will get JSON from the url that's passed - will do it after page has loaded
// Whenever the document is ready, here's a function to call - function is called a callback function - function gets called when something completes - in this case when the document is ready is whenever the DOM is ready

$(document).ready(function () {
    $.getJSON('https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json', function(data) {
        console.log(data);
    })
})
