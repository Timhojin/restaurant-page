export function rmPrevious() {
  const content = document.getElementById("content");
  if (content.hasChildNodes()) {
    content.innerHTML = "";
    content.style.backgroundImage = "none";
    content.className = "";
  }
}
