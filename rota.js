// Listen for messages from the iframe
window.addEventListener('message', function(event) {
    var data = event.data;

 // Check if the data is of expected type/format
if (typeof data === 'object' && data !== null) {
    // Update the content of the divs with the received data

    document.getElementById("todayRota").innerHTML = (data.todayRota || '');
    document.getElementById("tomorrowRota").innerHTML = (data.tomorrowRota || '');
    document.getElementById("todayHolidays").innerHTML = (data.todayHolidays || '');
    document.getElementById("tomorrowHolidays").innerHTML = (data.tomorrowHolidays || '');


    
}
 
  });


document.getElementById('backButton').addEventListener('click', () => {
    window.history.back();
});

function getFormattedDate(date) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const day = daysOfWeek[date.getDay()];
    const month = months[date.getMonth()];
    const dateNumber = date.getDate();

    // Add suffix to date
    const suffix = (dateNumber % 10 === 1 && dateNumber !== 11) ? "st" :
                   (dateNumber % 10 === 2 && dateNumber !== 12) ? "nd" :
                   (dateNumber % 10 === 3 && dateNumber !== 13) ? "rd" : "th";

    return `${day} ${dateNumber}${suffix} ${month} ${date.getFullYear()}`;
}

// Get today's and tomorrow's dates
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);

// Insert formatted dates with prepended text in <span> tags
document.getElementById('todayDate').innerHTML = `<span>Today:</span><br>${getFormattedDate(today)}`;
document.getElementById('tomorrowDate').innerHTML = `<span>Tomorrow:</span><br>${getFormattedDate(tomorrow)}`;