function convertNewlinesToBreaks(text) {
          return text.replace(/\n/g, '<br>');
        }
      
        // Listen for messages from the iframe
        window.addEventListener('message', function(event) {
          var data = event.data;
      
         // Check if the data is of expected type/format
         if (typeof data === 'object' && data !== null) {
            // Update the content of the divs with the received data
            document.getElementById("line1").innerHTML = (convertNewlinesToBreaks(data.dailyOffs || ''));
            
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
                alert('The daily offs text has been copied to your phones clipboard!');
            } else {
                // Notify the user if there's no text to copy
                alert('No daily offs text found to copy!');
            }
        });

        document.getElementById('backButton').addEventListener('click', () => {
          window.history.back();
      });