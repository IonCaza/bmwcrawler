const axios = require('axios');

const url = 'https://www.bmwusa.com/api/inventory/vehicle/'
vehicle = ''

axios.get(url + 'WBSJF0C07LB449045', 
{
})
.then((response) => {
    vehicle = response.data;
    
    console.log(vehicle);


}, (error) => {
    console.log(error);
});