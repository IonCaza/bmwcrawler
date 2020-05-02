const axios = require('axios');

// Search For
radius = 3500
zip = 48331
yearStart = 2019
yearEnd = 2019
minPrice = 75000
showOnlyDemo = 0

const url = 'https://www.bmwusa.com/api/inventory/filter/search/'
vehicles = ''

axios.post(url + zip + '?page=1&resultsPerPage=500&sortBy=PRICE&sortOrder=ASC', 
{
    //selectedSeries: ["M"],
   // selectedModels: ["M5"],
    selectedMinPrice: minPrice,
    selectedLocatorRange: radius,
    minModelYear: yearStart,
    maxModelYear: yearEnd,
    selectedMinModelYear: yearStart,
    selectedMaxModelYear: yearEnd,
    selectedModelYears: [yearStart]
})
.then((response) => {
    vehicles = response.data;
    democount = 0;
    console.log('Total number of vehicles: ' + vehicles.totalVehicleCount);
    for (let step = 0; step < vehicles.totalVehicleCount; step++) {
        if (vehicles.vehicles[step].demonstrator == true) {
            democount++;
            console.log(vehicles.vehicles[step].name + "|" + vehicles.vehicles[step].vin + "|" + vehicles.vehicles[step].totalMsrp);
        }else if (showOnlyDemo != 1) {
        console.log(vehicles.vehicles[step].name + "|" + vehicles.vehicles[step].vin + "|" + vehicles.vehicles[step].totalMsrp);
        }
    }
    console.log('Number of demos: ' + democount);

}, (error) => {
    console.log(error);
});