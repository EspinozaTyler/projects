

function rollDice() {
	return Math.floor(Math.random() * 6) + 1;
}

function play(){
	var Bet = Number(document.forms["lucky"]["bet"].value);
	var bank = Bet;
	var maxwin = 0;
	var Dieone;
	var Dietwo;
	var dicetotal;
	var roll = 0;
	var rollcount = 0;

	if(bank<=0){
		alert("To play you must place a bet above $0");
		
	}
	else{
		while(bank > 0){
			Dieone = rollDice();
			Dietwo = rollDice();
			dicetotal = Dieone + Dietwo;
			roll++;
			if(dicetotal != 7){
				bank--;
				console.log("lost");
			}
			else{
				bank =bank + 4;
				if(bank > maxwin){
					maxwin += (bank-maxwin);
					rollcount = roll;
				}
				console.log("win");
			}
		}
	}

	document.getElementById("results").style.display = "block";
	document.getElementById("submitButton").innerText = "Play Again!";
	document.getElementById("start").innerText = "$"+Bet.toFixed(2);
	document.getElementById("rollsNum").innerText = roll;
	document.getElementById("max").innerText = "$"+maxwin.toFixed(2);
	document.getElementById("rollsAtMax").innerText = rollcount;
	document.getElementById("bet").value = "$0.00";
	
	return false;
}
