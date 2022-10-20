function myfunction(){
    fetch("/data.json")
    .then(response => response.json())
    .then(rsp => {
        // console.log(rsp.data)
        rsp.data.forEach(element => {
            let name = document.getElementById("place").value;
            if(element.name==name)
            {
                    document.getElementById("name").innerHTML = element.name;
                    document.getElementById("infected").innerHTML = element.infected;
                    document.getElementById("recovered").innerHTML = element.recovered;
                    document.getElementById("sick").innerHTML = element.sick;
                    document.getElementById("dead").innerHTML = element.dead;
                    if(element.infected>1000){
                        document.getElementById("zone").innerHTML = "Danger";  
                        document.getElementById("zone").style.color = "red"; 
                    }
                    else{
                        document.getElementById("zone").innerHTML = "Safe"; 
                        document.getElementById("zone").style.color = "green"; 
                    }
                    
                }
            });
        })
}

