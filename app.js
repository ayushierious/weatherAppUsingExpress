const express=require("express");

const app=express();
const https=require("https")

app.get("/", function(req,res){
  const url="https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid=3d30c21252df6aa40f72dfb395ec68ef&units=metric"
  https.get(url, function(response){
    console.log(response.StatusCode);
    response.on('data', function(data){
      console.log(data);
      const weatherData=JSON.parse(data);
      const temp=weatherData.main.temp
      const weatherDesc=weatherData.weather[0].description
      const icon=weatherData.weather[0].icon
    const imageURL=`http://openweathermap.org/img/wn/${icon}@2x.png`
res.write(`<p>The temp is ${temp}</p>`);
      res.write(`<img src=${imageURL}>`);
      res.send()
    })
  })
})











app.listen(3000, function(){
  console.log("Server is running on port 3000");
})
