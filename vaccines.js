/*var url = 'https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json';

function setup(){
    noCanvas();
    loadJSON(url,gotData);
}

//needs an argument to fill the variable with the data
function gotData(data){
    var vaccineData = data.country[164];
    for (var i = 0; i<vaccineData.length; i++) {
        createElement('h1',vaccineData.total_vaccinations);
    }
}
println(data.country.total_vaccinations)*/

var settings = {
    "url": "https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json",
    "method": "GET",
    "timeout": 0,
};

$.ajax(settings).done(function (response) {
    const USA = JSON.parse(response).find((data) => data.country === 'United States');
    const peopleVaccinated = USA.data.find((d) => d.date === '2021-04-07').people_vaccinated;
    document.getElementById("admin").innerHTML = peopleVaccinated;
});
