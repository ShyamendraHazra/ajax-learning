let button1 = document.getElementById("fetch-button1");
let button2 = document.getElementById("fetch-button2");
let button3 = document.getElementById("fetch-button3");
let resetButton = document.getElementById("reset");
let dataDiv = document.getElementById("fetched");
let fetchedDiv = document.getElementById("fetched");

button1.addEventListener("click", function() {
  handleClick(0);
});

button2.addEventListener("click", function() {
  handleClick(1);
});

button3.addEventListener("click", function() {
  handleClick(2);
});

resetButton.addEventListener("click", function() {
  handleClick(3);
});

function handleClick(type){
    
    let xhr = new XMLHttpRequest();
    
    type = parseInt(type);

    switch(type) {
        
        case 0:
            
            xhr.open('GET', 'json/user.json', true);
            xhr.onload = function() {
                if(this.status == 200) {                   
                    let responseHtml = "";
                    let userData = JSON.parse(this.responseText);
                    responseHtml += `<div class="user-data">
                                        <h3>Welcome Back ${userData.user}</h3>
                                        <hr/>
                                        <div class="display-row">
                                                <h3>Name </h3>
                                                <h3>:</h3>
                                                <h3> ${userData.name}</h3>
                                        </div>
                                        <div class="display-row">  
                                                <h3>Date </h3>
                                                <h3>:</h3>
                                                <h3> ${userData.date}</h3>
                                            </div>
                                        </div>
                                    </div>`;    
                
                    dataDiv.innerHTML = responseHtml;
                    fetchedDiv.style.justifyContent="flex-start";
                }
            }
            xhr.send();
            break;


        case 1:

            xhr.open('GET', 'json/userArray.json', true);
            xhr.onload = function() {       
                if(this.status == 200) {                   
                    let responseHtml = "";
                    let userData = JSON.parse(this.responseText);
                    for (i in userData)
                    {
                        responseHtml += `<div class="user-data">
                                            <h3>Welcome Back ${userData[i].user}</h3>
                                            <hr/>
                                            <div class="display-row">
                                                    <h3>Name </h3>
                                                    <h3>:</h3>
                                                    <h3> ${userData[i].name}</h3>
                                            </div>
                                            <div class="display-row">  
                                                    <h3>Date </h3>
                                                    <h3>:</h3>
                                                    <h3> ${userData[i].date}</h3>
                                                </div>
                                            </div>
                                        </div>`;
                    }
                    dataDiv.innerHTML = responseHtml;
                    fetchedDiv.style.justifyContent="flex-start";
                }
            }
            xhr.send();

            break;

        case 2:

            // dataDiv.innerHTML = `<h2>Db Data Comming Soon!</h2>`;
            // fetchedDiv.style.justifyContent="center";
            
            xhr.open('GET','php/fetch-db-data.php',true);
            xhr.onload = function() {
                if(this.status === 200) {
                    let responseHtml = "";
                    let userData = JSON.parse(this.responseText);
                    console.log(userData);
                    for (i in userData)
                    {
                        responseHtml += `<div class="user-data">
                                                    <h3>Welcome Back ${userData[i].user}</h3>
                                                    <hr/>
                                                    <div class="display-row">
                                                            <h3>Name </h3>
                                                            <h3>:</h3>
                                                            <h3> ${userData[i].name}</h3>
                                                    </div>
                                                    <div class="display-row">
                                                            <h3>DB sl_no </h3>
                                                            <h3>:</h3>
                                                            <h3> ${userData[i].sl_no}</h3>
                                                    </div>
                                                    <div class="display-row">  
                                                            <h3>Date </h3>
                                                            <h3>:</h3>
                                                            <h3> ${userData[i].date}</h3>
                                                        </div>
                                                    </div>
                                                </div>`;
                    }
                    dataDiv.innerHTML = responseHtml;
                    fetchedDiv.style.justifyContent="flex-start";
                   
                }
            } 
            xhr.send();
            break;

        
        case 3:

            dataDiv.innerHTML = "<h2>All data will be rendered here!</h2>";
            fetchedDiv.style.justifyContent="center";
            break;
        
        default:
            
            dataDiv.innerHTML = "Something went terribly wrong";
            console.log("This was never supposed to happen!!");
    }
       
}

