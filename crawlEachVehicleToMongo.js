const axios = require('axios');

const url = 'https://www.bmwusa.com/api/inventory/vehicle/'
vehicle = ''

axios.get(url + 'WBSJF0C58KB447654', 
{
})
.then((response) => {
    vehicle = response.data;
    
    console.log(vehicle.options);


}, (error) => {
    console.log(error);
});