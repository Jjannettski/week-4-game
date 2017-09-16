//Global Variables

var randomHealth;
var wins = 0;
var losses = 0;
var damage = 0;

$(document).ready(function(){

//Generates Bosses' Health

function generate(){
	randomHealth = Math.floor(Math.random() * ((120-19)+1) + 19);
	$("#total-health").html("Boss Health:" + " " + randomHealth);

};

generate();

//Creates a power number and assigns it to each weapon

function valueCreate (){

	$("#rpg").attr("data-points", Math.floor((Math.random() * 12) + 1))
	$("#ak74").attr("data-points", Math.floor((Math.random() * 12) + 1))
	$("#sniper").attr("data-points", Math.floor((Math.random() * 12) + 1))
	$("#bow").attr("data-points",Math.floor((Math.random() * 12) + 1))

}

valueCreate();

//Updates the counter

$(".weapon").on("click", function counter(){

	var points = ($(this).attr("data-points"))
	points = parseInt(points);
	damage += points;
	$("#yourScore").html("Damage Dealt:" + " " + damage);

if (damage == randomHealth){
	alert("You Win!");
	wins++;
	$("#wins").html("Wins:" + " " + wins);
	generate();
	valueCreate();
	damage = 0;
	$("#yourScore").html("Damage Dealt:" + " " + damage);

} 
else if (damage > randomHealth){
	alert("You Lose!");
	losses++;
	$("#losses").html("Loses:" + " " + losses);
	generate();
	valueCreate();
	damage = 0;
	$("#yourScore").html("Damage Dealt:" + " " + damage);
}


})


// Compares the counter to see if your "damage" matches the bosses' health
//updates the win or loss column appropriately




})