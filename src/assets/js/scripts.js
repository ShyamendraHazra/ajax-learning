let button1 = document.getElementById("fetch-button1");
let button2 = document.getElementById("fetch-button2");
let resetButton = document.getElementById("reset");
let dataDiv = document.getElementById("fetched");

button1.addEventListener("click", loadData);
button2.addEventListener("click", loadMultipleData);
resetButton.addEventListener("click", handleReset);

let xhr = new XMLHttpRequest();

function loadData(){
    
    xhr.open('GET', 'user.json', true);

    xhr.onload = function() {
        
        
        if(this.status == 200) {
            
            let responseHtml = "";
            let userData = JSON.parse(this.responseText);

            // fech single user data
        
            responseHtml += `<div class="user-data">
                                    <h2>Welcome Back ${userData.user}</h2>
                                    <hr/>
                                    <div class="display-table">
                                        <div id="left" class="display-column">
                                            <div class="item-left"><h3>Name </h3></div>
                                            <div class="item-left"><h3>Date </h3></div>
                                        </div>
                                        <div id="middle" class="display-column">
                                            <div class="item-middle"><h3>:</h3></div>
                                            <div class="item-middle"><h3>:</h3></div>
                                        </div>
                                        <div id="right" class="display-column">
                                            <div class="item-right"><h3> ${userData.name}</h3></div>
                                            <div class="item-right"><h3> ${userData.date}</h3></div>
                                        </div>
                                    </div>
                                    </div>`;     
         
            dataDiv.innerHTML = responseHtml;
        }
    }
    xhr.send();
}


function loadMultipleData(){
    
    xhr.open('GET', 'userArray.json', true);

    xhr.onload = function() {
        
        
        
        if(this.status == 200) {
            
            let responseHtml = "";
            userData = JSON.parse(this.responseText);

            // fech multiple user data
            
            for (i in userData)
            {
                responseHtml += `<div class="user-data">
                                            <h2>Welcome Back ${userData[i].user}</h2>
                                            <hr/>
                                            <div class="display-table">
                                                <div id="left" class="display-column">
                                                    <div class="item-left"><h3>Name </h3></div>
                                                    <div class="item-left"><h3>Date </h3></div>
                                                </div>
                                                <div id="middle" class="display-column">
                                                    <div class="item-middle"><h3>:</h3></div>
                                                    <div class="item-middle"><h3>:</h3></div>
                                                </div>
                                                <div id="right" class="display-column">
                                                    <div class="item-right"><h3> ${userData[i].name}</h3></div>
                                                    <div class="item-right"><h3> ${userData[i].date}</h3></div>
                                                </div>
                                            </div>
                                        </div>`;
            }
            dataDiv.innerHTML = responseHtml;
        }
    }
    xhr.send();
}

function handleReset() {

    dataDiv.innerHTML = "";
}

