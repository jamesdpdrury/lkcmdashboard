// Listen for messages from the iframe
window.addEventListener('message', function(event) {
    var data = event.data;

 // Check if the data is of expected type/format
if (typeof data === 'object' && data !== null) {
    // Update the content of the divs with the received data

    document.getElementById("updatedTick").innerHTML = 'Last cleared on ' + (data.resetTicksheet || '');
    document.getElementById("updatedEmailPDF").innerHTML = 'Last sent on ' + (data.emailTicksheet || '');
    document.getElementById("lapsedtime").innerHTML = 'Last reset <span class="' + (data.lapsedtimecolour || '') + '">' + (data.lapsedtime || '') + '</span> ago';


    
}
 
  });
  


   // Function to reload the iframe every 60 seconds
   function reloadIframe() {
    const iframe = document.getElementById('data-iframe');
    iframe.src = iframe.src; // This forces the iframe to reload
}
