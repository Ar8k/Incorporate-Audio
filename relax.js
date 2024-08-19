//function that activates when the start button is clicked, will be used to play the sound
function start()
{
//creating a new sound object with my sound that I chose
mySound = new sound("birds-singing-calm-river-nature-ambient-sound-127411.mp3");
//play the sound
mySound.play();
//disable the start button once its clicked so it cant be clicked again, this is called event driven programming
document.getElementById("start").disabled = true;
//enable the stop button so it can be clicked to stop the sound
document.getElementById("stop").disabled = false;
}
//function to create a new sound object
function sound(src)
{
    //creates a new audio element
this.sound = document.createElement("audio");
//set the source of the created audio element
this.sound.src = src;
//to play the sound
this.play = function() {this.sound.play();}
}
//function to stop playing the sound, this function gets activated once the stop button is pressed
function stop()
{
    //enables the start button so the user can start it again
document.getElementById("start").disabled = false;
//disables the stop button so the user cant keep clicking it, creates a better feel
document.getElementById("stop").disabled = true;
//once the person clicks stop, the page refreashes, this is how the sound gets stopped in the first place
window.location.reload();
}