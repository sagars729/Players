var button = document.getElementById("btn");
var data = document.getElementById("search");

button.addEventListener("click", find);

function find() {
  alert("CLICKED")

  var name = data.value || "";
  alert(name);
  //data.innerHTML = "Player Name is " + name;
  var BigParserAccountEmail = "vkundetis@gmail.com"
  var BigParserAccountPassword = "Eragon01"
  var endpoint = "https://www.bigparser.com/APIServices/api/common/login"
  var options = JSON.stringify({
        "emailId": BigParserAccountEmail,
        "password": BigParserAccountPassword,
        "loggedIn": true
   })

   $.ajax({
    url: endpoint,
    headers: {
        'Accept':'application/json',
        'Content-Type':'application/json'
    },
    method: 'POST',
    dataType: 'json',
    data: options,
    success: function(data){
        endpoint = "https://www.bigparser.com/APIServices/api/query/table?endIndex=50&startIndex=0"
        options = JSON.stringify({
            "gridId": "58d71d8c1984570570d3c551",
            "selectColumnsStoreName": [],
            "keywords": [name],
            "rowCount": 50,
            "tags": [],
            "viewId": null,
            "sortKeys": []
        })

        headers = {
            'authId':data.authId,
            'Accept':'application/json',
            'Content-Type':'application/json'
        }

        $.ajax({
            url: endpoint,
            headers: headers,
            method: 'POST',
            dataType: 'json',
            data: options,
            success: function(data){
              //var PlayerName = /*console.log('succes: '+ */data.rows[0].data[0];//);
              document.getElementById("1").innerHTML = "Name: " + data.rows[0].data[0];
              document.getElementById("2").innerHTML = "Team: " + data.rows[0].data[1];
              document.getElementById("3").innerHTML = "Age: " + data.rows[0].data[2];
              document.getElementById("4").innerHTML = "Games Played: " + data.rows[0].data[3];
              document.getElementById("5").innerHTML = "Field Goals Made: " + data.rows[0].data[4];
              document.getElementById("6").innerHTML = "Field Goals Att: " + data.rows[0].data[5];
              document.getElementById("7").innerHTML = "Field Goal Percentage: " + data.rows[0].data[6];
              document.getElementById("8").innerHTML = "Field Goal Efficency: " + data.rows[0].data[7];
              document.getElementById("9").innerHTML = "2 pointer Field Goals Made: " + data.rows[0].data[8];
              document.getElementById("10").innerHTML = "2 pointer Field Goal Percentage: " + data.rows[0].data[9];
              document.getElementById("11").innerHTML = "3 pointer Field Goals Made: " + data.rows[0].data[10];
              document.getElementById("12").innerHTML = "3 pointer Field Goals Attempted: " + data.rows[0].data[11];
              document.getElementById("13").innerHTML = "3 pointer Field Goal Percentage: " + data.rows[0].data[12];
              /*var PlayerTeam = data.rows[0].data[1];
              var Age = data.rows[0].data[2];
              var GamesPlayed = data.rows[0].data[3];
              var FieldGoalsMade = data.rows[0].data[4];
              var FieldGoalsAtt = data.rows[0].data[5];
              var FieldGoalPerc = data.rows[0].data[6];
              var FieldGoalEff = data.rows[0].data[7];
              var FieldGoal2 = data.rows[0].data[8];
              var FieldGoal2Perc = data.rows[0].data[9];
              var FieldGoal3 = data.rows[0].data[10];
              var FieldGoal3Att = data.rows[0].data[11];
              var FieldGoal3Per = data.rows[0].data[12];*/
            }
        });
    }
    });
    //alert(name);
}



///////////////End Changed Code