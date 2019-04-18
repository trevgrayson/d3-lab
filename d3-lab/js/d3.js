//begin script when window loads
window.onload = setMap();

//set up choropleth map
function setMap(){
    //use Promise.all to parallelize asynchronous data loading
    var promises = [];
    promises.push(d3.csv("data/GermanyShareofGDP.csv")); //load attributes from csv
    promises.push(d3.json("data/DEU_adm1.json")); //load background spatial data
    // promises.push(d3.json("data/FranceRegions.topojson")); //load choropleth spatial data
    Promise.all(promises).then(callback);

    function callback(data){
        csvData = data[0];
        europe = data[1];
        // france = data[2];
            console.log(csvData);
            console.log(europe);
            console.log(test);
            // console.log(france);
        };
}