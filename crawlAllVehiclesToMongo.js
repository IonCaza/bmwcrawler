const axios = require('axios');

const url = 'https://www.bmwusa.com/api/inventory/filter/search/'
vehicles = ''

axios.post(url + '48331?page=1&resultsPerPage=24&sortBy=PRICE&sortOrder=ASC', 
{
    selectedSeries: ["M"],
    selectedModels: ["M5"],
    selectedLocatorRange: 150
})
.then((response) => {
    vehicles = response.data.vehicles;
    // iterate through vehicles and throw it in mongo
    
    console.log(vehicles[0].dealer);


}, (error) => {
    console.log(error);
});