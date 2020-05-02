const axios = require('axios');

// Search For
radius = 3500
zip = 48331
yearStart = 2019
yearEnd = 2019
minPrice = 75000
maxPrice = 105000

// Export this stuff
exportFromVehicle = 
    ['name', 
    'vin', 
    'totalMsrp', 
    'dealer.businessName', 
    'dealer.phone', 
    'dealer.url']
    
const url = 'https://www.bmwusa.com/api/inventory/filter/search/'
vehicles = ''

axios.post(url + zip + '?page=1&resultsPerPage=500&sortBy=PRICE&sortOrder=ASC', 
{
    //selectedSeries: ["M"],
    //selectedModels: ["M5"],
    selectedMinPrice: minPrice,
    selectedMinPrice: maxPrice,
    selectedLocatorRange: radius,
    selectedMinModelYear: yearStart,
    selectedMaxModelYear: yearEnd,
    selectedModelYears: [yearStart]
})
.then((response) => {
    vehicles = response.data;
    pipedHeaders = ''
    exportFromVehicle.forEach(element => pipedHeaders += element + '|')
    console.log(pipedHeaders)
    for (let step = 0; step < vehicles.totalVehicleCount; step++) {
        x = vehicles.vehicles[step];
        u = exportFromVehicle.map(exportFunk)

        function exportFunk(value, index, array) {        
            return pathIndex(x, value)
        }
        function multiIndex(obj,is) {
            return is.length ? multiIndex(obj[is[0]],is.slice(1)) : obj
        }
        function pathIndex(obj,is) {
            return multiIndex(obj,is.split('.'))
        }
        pipedResults = ''
        u.forEach(element => pipedResults += element + '|')
        console.log(pipedResults)
    }
    console.log('Total number of vehicles|' + vehicles.totalVehicleCount);

}, (error) => {
    console.log(error);
});