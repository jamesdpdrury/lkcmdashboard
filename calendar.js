
        // Listen for messages from the iframe
        window.addEventListener('message', function(event) {
          var data = event.data;
      
         // Check if the data is of expected type/format
         if (typeof data === 'object' && data !== null) {
            // Update the content of the divs with the received data
            document.getElementById("updated").innerHTML = "Last updated: " + (data.updated || '');
            document.getElementById("stage_name").innerHTML = (data.stage_name || '');
            document.getElementById("stage_years").innerHTML = "<div>Years Employed</div><div>" + (data.stage_years || '0') + "</div>";
            document.getElementById("stage_renewal").innerHTML = "<div>Days until renewal</div><div>" + (data.stage_renewal || '0') + "</div>";
            document.getElementById("stage_accrued").innerHTML = "<div>Days accrued</div><div>" + (data.stage_accrued || '0') + "</div>";
            document.getElementById("stage_taken").innerHTML = "<div>Taken</div><div>" + (data.stage_taken || '0') + "</div>";
            document.getElementById("stage_booked").innerHTML = "<div>Booked</div><div>" + (data.stage_booked || '0') + "</div>";
            document.getElementById("stage_remaining").innerHTML = "<div>Remaining</div><div>" + (data.stage_remaining || '0') + "</div>";
            document.getElementById("dsm_name").innerHTML = (data.dsm_name || '');
            document.getElementById("dsm_years").innerHTML = "<div>Years Employed</div><div>" + (data.dsm_years || '0') + "</div>";
            document.getElementById("dsm_renewal").innerHTML = "<div>Days until renewal</div><div>" + (data.dsm_renewal || '0') + "</div>";
            document.getElementById("dsm_accrued").innerHTML = "<div>Days accrued</div><div>" + (data.dsm_accrued || '0') + "</div>";
            document.getElementById("dsm_taken").innerHTML = "<div>Taken</div><div>" + (data.dsm_taken || '0') + "</div>";
            document.getElementById("dsm_booked").innerHTML = "<div>Booked</div><div>" + (data.dsm_booked || '0') + "</div>";
            document.getElementById("dsm_remaining").innerHTML = "<div>Remaining</div><div>" + (data.dsm_remaining || '0') + "</div>";
            document.getElementById("tech_name").innerHTML = (data.tech_name || '');
            document.getElementById("tech_years").innerHTML = "<div>Years Employed</div><div>" + (data.tech_years || '0') + "</div>";
            document.getElementById("tech_renewal").innerHTML = "<div>Days until renewal</div><div>" + (data.tech_renewal || '0') + "</div>";
            document.getElementById("tech_accrued").innerHTML = "<div>Days accrued</div><div>" + (data.tech_accrued || '0') + "</div>";
            document.getElementById("tech_taken").innerHTML = "<div>Taken</div><div>" + (data.tech_taken || '0') + "</div>";
            document.getElementById("tech_booked").innerHTML = "<div>Booked</div><div>" + (data.tech_booked || '0') + "</div>";
            document.getElementById("tech_remaining").innerHTML = "<div>Remaining</div><div>" + (data.tech_remaining || '0') + "</div>";
            document.getElementById("asm_name").innerHTML = (data.asm_name || '');
            document.getElementById("asm_years").innerHTML = "<div>Years Employed</div><div>" + (data.asm_years || '0') + "</div>";
            document.getElementById("asm_renewal").innerHTML = "<div>Days until renewal</div><div>" + (data.asm_renewal || '0') + "</div>";
            document.getElementById("asm_accrued").innerHTML = "<div>Days accrued</div><div>" + (data.asm_accrued || '0') + "</div>";
            document.getElementById("asm_taken").innerHTML = "<div>Taken</div><div>" + (data.asm_taken || '0') + "</div>";
            document.getElementById("asm_booked").innerHTML = "<div>Booked</div><div>" + (data.asm_booked || '0') + "</div>";
            document.getElementById("asm_remaining").innerHTML = "<div>Remaining</div><div>" + (data.asm_remaining || '0') + "</div>";
            document.getElementById("book1_name").innerHTML = (data.book1_name || '');
            document.getElementById("book1_years").innerHTML = "<div>Years Employed</div><div>" + (data.book1_years || '0') + "</div>";
            document.getElementById("book1_renewal").innerHTML = "<div>Days until renewal</div><div>" + (data.book1_renewal || '0') + "</div>";
            document.getElementById("book1_accrued").innerHTML = "<div>Days accrued</div><div>" + (data.book1_accrued || '0') + "</div>";
            document.getElementById("book1_taken").innerHTML = "<div>Taken</div><div>" + (data.book1_taken || '0') + "</div>";
            document.getElementById("book1_booked").innerHTML = "<div>Booked</div><div>" + (data.book1_booked || '0') + "</div>";
            document.getElementById("book1_remaining").innerHTML = "<div>Remaining</div><div>" + (data.book1_remaining || '0') + "</div>";
            document.getElementById("book2_name").innerHTML = (data.book2_name || '');
            document.getElementById("book2_years").innerHTML = "<div>Years Employed</div><div>" + (data.book2_years || '0') + "</div>";
            document.getElementById("book2_renewal").innerHTML = "<div>Days until renewal</div><div>" + (data.book2_renewal || '0') + "</div>";
            document.getElementById("book2_accrued").innerHTML = "<div>Days accrued</div><div>" + (data.book2_accrued || '0') + "</div>";
            document.getElementById("book2_taken").innerHTML = "<div>Taken</div><div>" + (data.book2_taken || '0') + "</div>";
            document.getElementById("book2_booked").innerHTML = "<div>Booked</div><div>" + (data.book2_booked || '0') + "</div>";
            document.getElementById("book2_remaining").innerHTML = "<div>Remaining</div><div>" + (data.book2_remaining || '0') + "</div>";
            document.getElementById("book3_name").innerHTML = (data.book3_name || '');
            document.getElementById("book3_years").innerHTML = "<div>Years Employed</div><div>" + (data.book3_years || '0') + "</div>";
            document.getElementById("book3_renewal").innerHTML = "<div>Days until renewal</div><div>" + (data.book3_renewal || '0') + "</div>";
            document.getElementById("book3_accrued").innerHTML = "<div>Days accrued</div><div>" + (data.book3_accrued || '0') + "</div>";
            document.getElementById("book3_taken").innerHTML = "<div>Taken</div><div>" + (data.book3_taken || '0') + "</div>";
            document.getElementById("book3_booked").innerHTML = "<div>Booked</div><div>" + (data.book3_booked || '0') + "</div>";
            document.getElementById("book3_remaining").innerHTML = "<div>Remaining</div><div>" + (data.book3_remaining || '0') + "</div>";
            
          }
        });
  
        document.getElementById('backButton').addEventListener('click', () => {
            window.history.back();
        });

        