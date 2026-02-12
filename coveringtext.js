function convertNewlinesToBreaks(text) {
  return String(text).replace(/\n/g, "<br>");
}

// Only accept messages from this domain
const ALLOWED_ORIGIN = "https://script.google.com";

// Listen for messages from the iframe
window.addEventListener("message", function (event) {
  // Security + prevents random iOS/Safari messages wiping your content
  if (event.origin !== ALLOWED_ORIGIN) return;

  const data = event.data;

  // Must be an object
  if (typeof data !== "object" || data === null) return;

  // Must contain dailyOffs
  if (!("dailyOffs" in data)) return;

  // Prevent blank updates wiping the text
  if (!data.dailyOffs) return;

  document.getElementById("line1").innerHTML = convertNewlinesToBreaks(
    data.dailyOffs
  );
});

// Back button (only once)
document.getElementById("backButton").addEventListener("click", () => {
  window.history.back();
});

// Copy button
document.getElementById("copyTextButton").addEventListener("click", () => {
  const coveringTextDiv = document.querySelector(".coveringtext");
  const textToCopy = coveringTextDiv
    ? coveringTextDiv.innerText || coveringTextDiv.textContent
    : "";

  if (textToCopy) {
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = textToCopy;

    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);

    alert("The daily offs text has been copied to your phones clipboard!");
  } else {
    alert("No daily offs text found to copy!");
  }
});
