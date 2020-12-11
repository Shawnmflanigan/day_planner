// write function to print current day at top of screen

let today = moment ();
let displayToday = document.getElementById('currentDay');
displayToday.innerHTML = today.format('dddd, MMMM Do, YYYY');

// write function to tell what time it is using moment.js
function compareTime() {
    let currentTime = moment().hour();
    $('.time-block').each(function(){
        let newTime = $(this).children('.hour').attr('id');
//if current time is past present or future change class to access css styling        
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

// Run compareTime Function
compareTime ();
// Refresh compareTime Function every 10 minutes
setInterval (compareTime, 100000);

// save button 
$('.saveBtn').on('click', function() {
    var value = $(this).prev('.data').val();
    
    var time = $(this).siblings('.hour' ).text();
//store in local storage
    
   localStorage.setItem(time, value);

})


        //store in local storage
        //retrieve data when page is refreshed