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
            document.getElementById("line3").innerHTML = (convertNewlinesToBreaks(data.line3 || ''));
            document.getElementById("line4").innerHTML = (convertNewlinesToBreaks(data.line4 || ''));
            document.getElementById("line5").innerHTML = (convertNewlinesToBreaks(data.line5 || ''));
            document.getElementById("line6").innerHTML = (convertNewlinesToBreaks(data.line6 || ''));
            document.getElementById("line7").innerHTML = (convertNewlinesToBreaks(data.line7 || ''));
            document.getElementById("line8").innerHTML = (convertNewlinesToBreaks(data.line8 || ''));
            document.getElementById("line9").innerHTML = (convertNewlinesToBreaks(data.line9 || ''));
            document.getElementById("line10").innerHTML = (convertNewlinesToBreaks(data.line10 || ''));
            document.getElementById("line11").innerHTML = (convertNewlinesToBreaks(data.line11 || ''));
            document.getElementById("line12").innerHTML = (convertNewlinesToBreaks(data.line12 || ''));
            document.getElementById("line13").innerHTML = (convertNewlinesToBreaks(data.line13 || ''));
            document.getElementById("line14").innerHTML = (convertNewlinesToBreaks(data.line14 || ''));
            document.getElementById("line15").innerHTML = (convertNewlinesToBreaks(data.line15 || ''));
            document.getElementById("line16").innerHTML = (convertNewlinesToBreaks(data.line16 || ''));
            document.getElementById("line17").innerHTML = (convertNewlinesToBreaks(data.line17 || ''));
            document.getElementById("line18").innerHTML = (convertNewlinesToBreaks(data.line18 || ''));
            document.getElementById("line19").innerHTML = (convertNewlinesToBreaks(data.line19 || ''));
            document.getElementById("line20").innerHTML = (convertNewlinesToBreaks(data.line20 || ''));
            document.getElementById("line21").innerHTML = (convertNewlinesToBreaks(data.line21 || ''));
            document.getElementById("line22").innerHTML = (convertNewlinesToBreaks(data.line22 || ''));
            document.getElementById("line23").innerHTML = (convertNewlinesToBreaks(data.line23 || ''));
            document.getElementById("line24").innerHTML = (convertNewlinesToBreaks(data.line24 || ''));
            document.getElementById("line25").innerHTML = (convertNewlinesToBreaks(data.line25 || ''));
            document.getElementById("line26").innerHTML = (convertNewlinesToBreaks(data.line26 || ''));
            document.getElementById("line27").innerHTML = (convertNewlinesToBreaks(data.line27 || ''));
            document.getElementById("line28").innerHTML = (convertNewlinesToBreaks(data.line28 || ''));
            document.getElementById("line29").innerHTML = (convertNewlinesToBreaks(data.line29 || ''));
            document.getElementById("line30").innerHTML = (convertNewlinesToBreaks(data.line30 || ''));
            document.getElementById("line31").innerHTML = (convertNewlinesToBreaks(data.line31 || ''));
            document.getElementById("line32").innerHTML = (convertNewlinesToBreaks(data.line32 || ''));
            document.getElementById("line33").innerHTML = (convertNewlinesToBreaks(data.line33 || ''));
            document.getElementById("line34").innerHTML = (convertNewlinesToBreaks(data.line34 || ''));
            document.getElementById("line35").innerHTML = (convertNewlinesToBreaks(data.line35 || ''));
            document.getElementById("line36").innerHTML = (convertNewlinesToBreaks(data.line36 || ''));
            document.getElementById("line37").innerHTML = (convertNewlinesToBreaks(data.line37 || ''));
            document.getElementById("line38").innerHTML = (convertNewlinesToBreaks(data.line38 || ''));
            document.getElementById("line39").innerHTML = (convertNewlinesToBreaks(data.line39 || ''));
            document.getElementById("line40").innerHTML = (convertNewlinesToBreaks(data.line40 || ''));
            document.getElementById("line41").innerHTML = (convertNewlinesToBreaks(data.line41 || ''));
            document.getElementById("line42").innerHTML = (convertNewlinesToBreaks(data.line42 || ''));
            document.getElementById("line43").innerHTML = (convertNewlinesToBreaks(data.line43 || ''));
            document.getElementById("line44").innerHTML = (convertNewlinesToBreaks(data.line44 || ''));
            document.getElementById("line45").innerHTML = (convertNewlinesToBreaks(data.line45 || ''));
            document.getElementById("line46").innerHTML = (convertNewlinesToBreaks(data.line46 || ''));
            document.getElementById("line47").innerHTML = (convertNewlinesToBreaks(data.line47 || ''));
            document.getElementById("line48").innerHTML = (convertNewlinesToBreaks(data.line48 || ''));
            document.getElementById("line49").innerHTML = (convertNewlinesToBreaks(data.line49 || ''));
            document.getElementById("line50").innerHTML = (convertNewlinesToBreaks(data.line50 || ''));
            document.getElementById("line51").innerHTML = (convertNewlinesToBreaks(data.line51 || ''));
            document.getElementById("line52").innerHTML = (convertNewlinesToBreaks(data.line52 || ''));
            document.getElementById("line53").innerHTML = (convertNewlinesToBreaks(data.line53 || ''));
            document.getElementById("line54").innerHTML = (convertNewlinesToBreaks(data.line54 || ''));
            document.getElementById("line55").innerHTML = (convertNewlinesToBreaks(data.line55 || ''));
            document.getElementById("line56").innerHTML = (convertNewlinesToBreaks(data.line56 || ''));
            document.getElementById("line57").innerHTML = (convertNewlinesToBreaks(data.line57 || ''));
            document.getElementById("line58").innerHTML = (convertNewlinesToBreaks(data.line58 || ''));
            document.getElementById("line59").innerHTML = (convertNewlinesToBreaks(data.line59 || ''));
            document.getElementById("line60").innerHTML = (convertNewlinesToBreaks(data.line60 || ''));
          }
        });
  
        document.getElementById('backButton').addEventListener('click', () => {
            window.history.back();
        });

        document.getElementById('copyTextButton').addEventListener('click', () => {
            // Get the text content of the div with class "coveringtext"
            const coveringTextDiv = document.querySelector('.coveringtext');
            const textToCopy = coveringTextDiv ? coveringTextDiv.innerText || coveringTextDiv.textContent : '';
        
            if (textToCopy) {
                // Create a temporary textarea element
                const tempTextArea = document.createElement('textarea');
                tempTextArea.value = textToCopy;
        
                // Add the textarea to the document
                document.body.appendChild(tempTextArea);
        
                // Select and copy the text
                tempTextArea.select();
                document.execCommand('copy');
        
                // Remove the textarea from the document
                document.body.removeChild(tempTextArea);
        
                // Notify the user
                alert('The covering text has been copied to your phones clipboard!');
            } else {
                // Notify the user if there's no text to copy
                alert('No covering text found to copy!');
            }
        });

        document.getElementById('backButton').addEventListener('click', () => {
          window.history.back();
      });