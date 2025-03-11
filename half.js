function convertNewlinesToBreaks(text) {
          return text.replace(/\n/g, '<br>');
        }
      
        // Listen for messages from the iframe
        window.addEventListener('message', function(event) {
          var data = event.data;
      
         // Check if the data is of expected type/format
         if (typeof data === 'object' && data !== null) {
            // Update the content of the divs with the received data
            document.getElementById("line1").innerHTML = (convertNewlinesToBreaks(data.line1 || ''));
            document.getElementById("line2").innerHTML = (convertNewlinesToBreaks(data.line2 || ''));
            document.getElementById("principal1").innerHTML = (convertNewlinesToBreaks(data.principal1 || ''));
            document.getElementById("principal2").innerHTML = (convertNewlinesToBreaks(data.principal2 || ''));
            document.getElementById("principal3").innerHTML = (convertNewlinesToBreaks(data.principal3 || ''));
            document.getElementById("principal4").innerHTML = (convertNewlinesToBreaks(data.principal4 || ''));
            document.getElementById("principal5").innerHTML = (convertNewlinesToBreaks(data.principal5 || ''));
            document.getElementById("principal6").innerHTML = (convertNewlinesToBreaks(data.principal6 || ''));
            document.getElementById("principal7").innerHTML = (convertNewlinesToBreaks(data.principal7 || ''));
            document.getElementById("principal8").innerHTML = (convertNewlinesToBreaks(data.principal8 || ''));
            document.getElementById("principal9").innerHTML = (convertNewlinesToBreaks(data.principal9 || ''));
            document.getElementById("principal10").innerHTML = (convertNewlinesToBreaks(data.principal10 || ''));
            document.getElementById("principal11").innerHTML = (convertNewlinesToBreaks(data.principal11 || ''));
            document.getElementById("principal12").innerHTML = (convertNewlinesToBreaks(data.principal12 || ''));
            document.getElementById("ensemble1").innerHTML = (convertNewlinesToBreaks(data.ensemble1 || ''));
            document.getElementById("ensemble2").innerHTML = (convertNewlinesToBreaks(data.ensemble2 || ''));
            document.getElementById("ensemble3").innerHTML = (convertNewlinesToBreaks(data.ensemble3 || ''));
            document.getElementById("ensemble4").innerHTML = (convertNewlinesToBreaks(data.ensemble4 || ''));
            document.getElementById("ensemble5").innerHTML = (convertNewlinesToBreaks(data.ensemble5 || ''));
            document.getElementById("ensemble6").innerHTML = (convertNewlinesToBreaks(data.ensemble6 || ''));
            document.getElementById("ensemble7").innerHTML = (convertNewlinesToBreaks(data.ensemble7 || ''));
            document.getElementById("ensemble8").innerHTML = (convertNewlinesToBreaks(data.ensemble8 || ''));
            document.getElementById("ensemble9").innerHTML = (convertNewlinesToBreaks(data.ensemble9 || ''));
            document.getElementById("ensemble10").innerHTML = (convertNewlinesToBreaks(data.ensemble10 || ''));
            document.getElementById("ensemble11").innerHTML = (convertNewlinesToBreaks(data.ensemble11 || ''));
            document.getElementById("ensemble12").innerHTML = (convertNewlinesToBreaks(data.ensemble12 || ''));
            document.getElementById("ensemble13").innerHTML = (convertNewlinesToBreaks(data.ensemble13 || ''));
            document.getElementById("ensemble14").innerHTML = (convertNewlinesToBreaks(data.ensemble14 || ''));
            document.getElementById("ensemble15").innerHTML = (convertNewlinesToBreaks(data.ensemble15 || ''));
            document.getElementById("ensemble16").innerHTML = (convertNewlinesToBreaks(data.ensemble16 || ''));
            document.getElementById("ensemble17").innerHTML = (convertNewlinesToBreaks(data.ensemble17 || ''));
            document.getElementById("ensemble18").innerHTML = (convertNewlinesToBreaks(data.ensemble18 || ''));
            document.getElementById("ensemble19").innerHTML = (convertNewlinesToBreaks(data.ensemble19 || ''));
            document.getElementById("ensemble20").innerHTML = (convertNewlinesToBreaks(data.ensemble20 || ''));
            document.getElementById("ensemble21").innerHTML = (convertNewlinesToBreaks(data.ensemble21 || ''));
            document.getElementById("ensemble22").innerHTML = (convertNewlinesToBreaks(data.ensemble22 || ''));
            document.getElementById("walkingcovers").innerHTML = (convertNewlinesToBreaks(data.walkingcovers || ''));
            document.getElementById("dancers").innerHTML = (convertNewlinesToBreaks(data.dancers || ''));
            document.getElementById("singers").innerHTML = (convertNewlinesToBreaks(data.singers || ''));
            document.getElementById("cubs").innerHTML = (convertNewlinesToBreaks(data.cubs || ''));
            document.getElementById("conductor").innerHTML = (convertNewlinesToBreaks(data.conductor || ''));
            document.getElementById("notes").innerHTML = (convertNewlinesToBreaks(data.notes || ''));
            document.getElementById("end").innerHTML = (convertNewlinesToBreaks(data.end || ''));
          }
        });
  
        document.getElementById('backButton').addEventListener('click', () => {
            window.history.back();
        });