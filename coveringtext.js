function convertNewlinesToBreaks(text) {
    return String(text || '').replace(/\n/g, '<br>');
}

async function loadDailyOffs() {
    try {
        const response = await fetch(
            'https://script.google.com/macros/s/AKfycbyTxNQX_oYRx0Axm-skz99yV7C0__OIsDzRoT7WkGRxRlmD_l-oisTfUgQrOv-haQSRbA/exec'
        );

        const data = await response.json();

        document.getElementById('line1').innerHTML =
            convertNewlinesToBreaks(data.dailyOffs || '');

    } catch (error) {
        console.error('Failed to load daily offs text:', error);

        document.getElementById('line1').innerHTML =
            'Unable to load daily offs text';
    }
}

loadDailyOffs();

document.getElementById('backButton').addEventListener('click', () => {
    window.history.back();
});

document.getElementById('copyTextButton').addEventListener('click', () => {
    const coveringTextDiv = document.querySelector('.coveringtext');

    const textToCopy = coveringTextDiv
        ? coveringTextDiv.innerText || coveringTextDiv.textContent
        : '';

    if (textToCopy) {
        const tempTextArea = document.createElement('textarea');

        tempTextArea.value = textToCopy;
        document.body.appendChild(tempTextArea);

        tempTextArea.select();
        document.execCommand('copy');

        document.body.removeChild(tempTextArea);

        alert('The daily offs text has been copied to your phones clipboard!');
    } else {
        alert('No daily offs text found to copy!');
    }
});