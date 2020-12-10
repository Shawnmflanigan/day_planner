// write function to print current day at top of screen

let today = moment ();
let displayToday = document.getElementById('currentDay');
displayToday.innerHTML = today.format('dddd, MMMM Do, YYYY');

// write function to tell what time it is using moment.js
function compareTime() {
    let currentTime = moment().hour();
    $('.time-block').each(function(){
        let newTime = $(this).children('.hour').attr('id');
        if (newTime < currentTime) {
            $(this).addClass('past');
        }
        else if (newTime == currentTime) {
            $(this).addClass('present') 
            $(this).removeClass('past')
        }
        else {
            $(this).addClass('future')
            $(this).removeClass('past')
            $(this).removeClass('present');
        }

    }) 
    console.log(currentTime)
}
compareTime ();
setInterval (compareTime, 100000);

    
    //if current time is past present or future change class to access css styling
    //write function to allow input into data class
    //write function for save button
        //print text when save button is clicked
        //store in local storage
        //retrieve data when page is refreshed