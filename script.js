var character = document.getElementById("character");
var obstacle = document.getElementById("obstacle");
function jump(){
    if(character.classList == "animate"){
        return;
    }
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    if(obstacleLeft < 30 && obstacleLeft > 0 && characterTop >= 230){
        obstacle.style.animation = "none";
        alert("Game Over!");
        obstacle.style.animation = "slide 1.5s infinite linear";
    }
},10);
document.addEventListener("keydown", function(event){
    jump();
});