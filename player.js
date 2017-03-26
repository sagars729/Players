var button = document.getElementById("btn");
var data = document.getElementById("search");

button.addEventListener("click", find);


function find() {
  //alert("CLICKED")

  var name = data.value || "";
  //alert(name);
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
              if(data.rows == null) alert("Error, Player Not Found In Database");
              document.getElementById("1").innerHTML = "Name: " + data.rows[0].data[0];
              document.getElementById("2").innerHTML = "Team: " + data.rows[0].data[1];
              document.getElementById("3").innerHTML = "Age: " + data.rows[0].data[2];
              document.getElementById("4").innerHTML = "Games Played: " + data.rows[0].data[3];
              document.getElementById("5").innerHTML = "Field Goals Made: " + data.rows[0].data[5];
              document.getElementById("6").innerHTML = "Field Goals Attempted: " + data.rows[0].data[6];
              document.getElementById("7").innerHTML = "Field Goal Percentage: " + data.rows[0].data[7];
              document.getElementById("8").innerHTML = "2 Pointer Frequency: " + data.rows[0].data[9];
              document.getElementById("9").innerHTML = "2 Pointers Made: " + data.rows[0].data[10];
              document.getElementById("10").innerHTML = "2 Pointers Attempted: " + data.rows[0].data[11];

              document.getElementById("11").innerHTML = "2 Pointer Percentage: " + data.rows[0].data[12];
              document.getElementById("12").innerHTML = "3 Pointer Frequency: " + data.rows[0].data[13];
              document.getElementById("13").innerHTML = "3 Pointers Made: " + data.rows[0].data[14];
              document.getElementById("14").innerHTML = "3 Pointers Attempted: " + data.rows[0].data[15];
              document.getElementById("15").innerHTML = "3 Pointer Percentage: " + data.rows[0].data[16];
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

