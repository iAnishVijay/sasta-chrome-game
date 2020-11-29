var character = document.getElementById("character");
var obstacle = document.getElementById("obstacle");
var score = 0;
function jump(){
    if(character.classList == "animate"){
        return;
    }
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    if(obstacleLeft < 60 && obstacleLeft > 0 && characterTop >= 230){
        obstacle.style.animation = "none";
        alert("Mar Gaya!   Score: " + Math.floor(score/300));
        score = 0;
        obstacle.style.animation = "slide 1.5s infinite linear";
    }
    else{
        score++;
        document.getElementById("scoreid").innerText = Math.floor(score/300);
    }
},5);
document.addEventListener("keydown", function(event){
    jump();
});
