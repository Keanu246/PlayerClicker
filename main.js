var footballs = 0;

function footballClick(number){
    footballs = footballs + number;
    document.getElementById("footballs").innerHTML = footballs;
};

var balontelli = 0;

function buyBalon(){
    var balontelliCost = Math.floor(15 * Math.pow(1.15,balontelli));     //works out the cost of this cursor
    if(footballs >= balontelliCost){                                   //checks that the player can afford the cursor
        balontelli = balontelli + 1;                                   //increases number of cursors
    	footballs = footballs - balontelliCost;                          //removes the cookies spent
        document.getElementById('balontelli').innerHTML = balontelli;  //updates the number of cursors for the user
        document.getElementById('footballs').innerHTML = footballs;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(15 * Math.pow(1.15,balontelli));       //works out the cost of the next cursor
    document.getElementById('balontelliCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){
	
	footballClick(balontelli);
	
}, 5000);
