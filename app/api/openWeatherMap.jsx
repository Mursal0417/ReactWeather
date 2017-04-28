var axios = require('axios');

const OPEN_WHEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=e1b2009d451004390167c8d65804406d&units=metric';

module.exports = {
	getTemp:function(location){
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WHEATHER_MAP_URL}&q=${encodedLocation}`;
	
		return axios.get(requestUrl).then(function (res){
			if(res.data.cod && res.data.message){
				throw new Error(res.data.message)
			}else{
				return res.data.main.temp;
			}
		},function(res){
			throw new Error(res.data.message);
		});

	}
}