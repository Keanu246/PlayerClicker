var footballs = 0;

function footballClick(number){
    footballs = footballs + number;
    document.getElementById("footballs").innerHTML = footballs;
};

var balontelli = 0;

function buyBalon(){
    var balonCost = Math.floor(15 * Math.pow(1.15,balontelli));     //works out the cost of this cursor
    if(footballs >= balonCost){                                   //checks that the player can afford the cursor
        balontelli = balontelli + 1;                                   //increases number of cursors
    	footballs = footballs - balonCost;                          //removes the cookies spent
        document.getElementById('balontelli').innerHTML = balontelli;  //updates the number of cursors for the user
        document.getElementById('footballs').innerHTML = footballs;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(15 * Math.pow(1.15,balontelli));       //works out the cost of the next cursor
    document.getElementById('balonCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

function balonFootballs(){
    var balonKicks = Math.floor(1 * Math.pow(1.08,balontelli));
    if(footballs >= balonKicks){
       footballs = footballs - balonKicks;
       document.getElementById('balonKicks').innerHTML = balonKicks;
       document.getElementById('balontelli').innerHTML = balontelli;
       document.getElementById('footballs').innerHTML = footballs;
    };
};

window.setInterval(function(){
	
	balonFootballs(balontelli);
	
}, 5000);
