function updateMap() {
    console.log("Updating map with realtime data")
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            // console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                cases = element.infected;
                if (cases>255){
                    color = "rgb(200, 0, 0)";
                }
                else if(cases>300){
                    color = "rgb(281, 0, 0)";
                }
                else if(cases>500){
                    color = "rgb(350, 0, 0)";
                }
                else if(cases>1000)
                {
                    color = "rgb(400, 0, 0)";
                }

                else{
                    color = `rgb(${cases}, 0, 0)`;
                }
                // Mark on the map
                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                }).setLngLat([longitude, latitude])
                .addTo(map); 
                
            });
        })
}

let interval = 20000;
setInterval( updateMap, interval); 