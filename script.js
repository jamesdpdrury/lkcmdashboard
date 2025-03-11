const webAppUrl = 'https://script.google.com/macros/s/AKfycbyTxNQX_oYRx0Axm-skz99yV7C0__OIsDzRoT7WkGRxRlmD_l-oisTfUgQrOv-haQSRbA/exec';

// Mapping of action names to user-friendly names
const actionNames = {
    'syncHolidaysFromCalendar': 'Sync Cast Holidays',
    'sendDailyOffsPDF': 'Email Daily Offs'
};

async function triggerAction(action) {
    const actionName = actionNames[action] || action;

    // Show the custom confirmation dialog
    const userConfirmed = await showConfirmationDialog(`Are you sure you want to ${actionName}?`);

    if (!userConfirmed) {
        console.log('Action was cancelled.');
        return; // If the user presses "No", don't trigger the action
    }

    // If confirmed, proceed with the fetch request
    const response = await fetch(webAppUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ action }),
    });

    const result = await response.json();
    console.log(result);
    alert(result.message || 'Action completed successfully!');
}

function showConfirmationDialog(message) {
    return new Promise((resolve) => {
        // Create the dialog elements
        const dialog = document.createElement('div');
        dialog.className = 'custom-dialog';

        const dialogMessage = document.createElement('p');
        dialogMessage.textContent = message;

        const buttonYes = document.createElement('button');
        buttonYes.textContent = 'Yes';
        buttonYes.onclick = () => {
            document.body.removeChild(dialog);
            resolve(true); // Resolve with "true" if Yes is clicked
        };

        const buttonNo = document.createElement('button');
        buttonNo.textContent = 'No';
        buttonNo.onclick = () => {
            document.body.removeChild(dialog);
            resolve(false); // Resolve with "false" if No is clicked
        };

        // Append elements to the dialog
        dialog.appendChild(dialogMessage);
        dialog.appendChild(buttonYes);
        dialog.appendChild(buttonNo);

        // Style the dialog
        dialog.style.position = 'fixed';
        dialog.style.top = '50%';
        dialog.style.left = '50%';
        dialog.style.transform = 'translate(-50%, -50%)';
        dialog.style.background = '#fff';
        dialog.style.padding = '20px';
        dialog.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)';
        dialog.style.borderRadius = '8px';
        dialog.style.zIndex = '1000';
        dialog.style.width = '80%';
        dialog.style.fontsize = '20px';

        buttonYes.style.margin = '0 0 10px';
        buttonNo.style.margin = '0 0 10px';

        // Add the dialog to the body
        document.body.appendChild(dialog);
    });
}


document.getElementById('syncHolidaysFromCalendar').addEventListener('click', () => triggerAction('syncHolidaysFromCalendar'));
document.getElementById('sendDailyOffsPDF').addEventListener('click', () => triggerAction('sendDailyOffsPDF'));


const correctPassword = "1975"; // Replace with your actual password

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

function checkPassword() {
  const input = document.getElementById("password").value;
  if (input === correctPassword) {
    setCookie("auth", "true", 30); // Remember for 30 days
    document.getElementById("password-popup").style.display = "none"; // Hide the pop-up
  } else {
    document.getElementById("error-message").style.display = "block";
  }
}

// Check if the user is already authenticated
if (getCookie("auth") === "true") {
  document.getElementById("password-popup").style.display = "none"; // Hide the pop-up if authenticated
}