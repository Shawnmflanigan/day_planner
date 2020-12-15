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

console.log(localStorage.getItem('8:00'));
       
//retrieve data when page is refreshed
$('#eight').val(localStorage.getItem('8:00'));
$('#nine').val(localStorage.getItem('9:00'));
$('#ten').val(localStorage.getItem('10:00'));
$('#eleven').val(localStorage.getItem('11:00'));
$('#twelve').val(localStorage.getItem('12:00'));
$('#one').val(localStorage.getItem('1:00'));
$('#two').val(localStorage.getItem('2:00'));
$('#three').val(localStorage.getItem('3:00'));
$('#four').val(localStorage.getItem('4:00'));
$('#five').val(localStorage.getItem('5:00'));






