window.addEventListener('resize', function(event){
    // Adjust your game's size here
});



function changeColor(button) {
    button.style.backgroundColor = "red";
    setTimeout(function(){
        button.style.backgroundColor = "";
    }, 100);
}
