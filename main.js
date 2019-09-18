var footballs = 0;

function footballClick(number){
    footballs = footballs + number;
    document.getElementById("footballs").innerHTML = footballs;
};

var balon = 0;

function buyBalon(){
    var balonCost = Math.floor(15 * Math.pow(1.15,balon));     //works out the cost of this cursor
    if(footballs >= balonCost){                                   //checks that the player can afford the cursor
        balon = balon + 1;                                   //increases number of cursors
    	footballs = footballs - balonCost;                          //removes the cookies spent
        document.getElementById('balon').innerHTML = balon;  //updates the number of cursors for the user
        document.getElementById('footballs').innerHTML = footballs;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(15 * Math.pow(1.15,balon));       //works out the cost of the next cursor
    document.getElementById('balonCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){
	
	footballClick(cursors);
	
}, 5000);
