const url = "https://raw.githubusercontent.com/bttmly/nba/master/data/teams.json";
const container = document.querySelector(".container");

async function callApi (){

    try {

        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    
        for (let i = 0; i < data.length; i++){
            let firstLetter = data[i].teamName[0]
                        
            if (firstLetter[0] === "C"){
                continue;
            }
            
            if (i ===15){
                break;
            }

            container.innerHTML += `
            <div class="card">
                Name: <strong>${data[i].teamName}</strong>
                <br>
                City: <strong>${data[i].location}</strong>
            </div>`;
        }

    }catch(error){
        container.innerHTML = `<div class="error">Something went wrong:  ${error}</div> `
    }

}

callApi();









