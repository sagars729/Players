var PlayerName = document.getElementById("playerName");
var data = document.getElementById("information");


name = PlayerName.addEventListener("input", find);
function find() {
  var name = PlayerName.value || "";
  data.innerHTML = "Player Name is " + name;
}
//var authId = "5d77c057-85bc-47aa-b66b-a520488ab806";
////////////////
/*
var xhr = new XMLHttpRequest();
xhr.open("POST", "https://www.bigparser.com/APIServices/api/common/login", false);
xhr.setRequestHeader('Content-Type', 'application/json');

xhr.send();

alert(xhr.status);*/



//////////////////

var BigParserAccountEmail = "vkundetis@gmail.com"
var BigParserAccountPassword = "Eragon01"
var endpoint = "https://www.bigparser.com/APIServices/api/common/login/"
var options = {
        "emailId": BigParserAccountEmail,
        "password": BigParserAccountPassword,
        "loggedIn": false
}

var request = new XMLHttpRequest();
request.onreadystatechange= function () {
    if (request.readyState==4) {
        console.log(request.responseText);
    }
}
request.open("POST", endpoint, true);
request.setRequestHeader("Content-Type", "application/json");
request.setRequestHeader("Accept", "application/json");
request.send(JSON.stringify(options));
///////////////Start Changed Code
/*endpoint = "https://www.bigparser.com/APIServices/api/query/table"
options = {
    "gridId": "58d71d8c1984570570d3c551",
    "selectColumnsStoreName": [],
    "keywords": ["Westbrook"],
    "rowCount": 50,
    "tags": [],
    "viewId": null,
    "sortKeys": []
}
request.open("GET", endpoint, true);
request.setRequestHeader("Content-Type", "application/json");
request.setRequestHeader("Accept", "application/json");
request.setRequestHeader("authId", authId);
request.send(JSON.stringify(options));*/

///////////////End Changed Code


request.post(endpoint, options, function(error, response, body) {
                            console.log(body.authId)
                            endpoint = "https://www.bigparser.com/APIServices/api/query/table"
                            options = {
                                "gridId": "58d71d8c1984570570d3c551",
                                "selectColumnsStoreName": [],
                                "keywords": ["Westbrook"],
                                "rowCount": 50,
                                "tags": [],
                                "viewId": null,
                                "sortKeys": []
                            }

                            var headers = {
                                "Content-Type": "application/json",
                                "Accept": "application/json",
                                "authId": body.authId
                            };

                            request.post({
                                url: endpoint,
                                json: options,
                                headers: headers
                            }, function(e, r, body) {
                             
                                context.succeed(
                                    generateResponse(
                                    	console.log('Output is ${body.rows[0].data[1]} .')
                                    )
                                )
                            });
                        })
                      

/*
var xhr = new XMLHttpRequest();
xhr.open("POST", "https://www.bigparser.com/APIServices/api/common/login", false);
xhr.setRequestHeader('Content-Type', 'application/json');

xhr.send();

alert(xhr.status);








/*var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.bigparser.com", false);
xhr.send();*/
