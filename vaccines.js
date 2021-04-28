// Will get JSON from the url that's passed - will do it after page has loaded
// Whenever the document is ready, we use a callback function to call the data - callback function gets called when something completes - in this case when the document is ready is whenever the DOM is ready

var settings = {
    "url": "https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json",
    "method": "GET",
    "timeout": 0,
};

n = new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate() - 1;
var todayDate = document.getElementById("todayDate").innerHTML = m + "/" + d + "/" + y;


$.ajax(settings).done(function (response) {
    const USA = JSON.parse(response).find((data) => data.country === 'United States');
    const peopleVaccinated = USA.data.find((d) => d.date === '2021-04-07').people_vaccinated;
    document.getElementById("admin").innerHTML = peopleVaccinated;
});

//converting total number to number with commas
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//total USA vaccines distributed as of yesterday 
$.ajax(settings).done(function (response) {
    const USA = JSON.parse(response).find((data) => data.country === 'United States');
    const peopleVaccinated = USA.data.find((d) => d.date === '2021-04-27').people_vaccinated;
    document.getElementById("usa").innerHTML = numberWithCommas(peopleVaccinated);
});
