import pastaS from "./pasta.jpg";
import steakS from "./steak.jpg";
import lasagnaS from "./lasagna.jpg";
import { rmPrevious } from "./rmPrevious";

export function Menu() {
  rmPrevious();

  const content = document.getElementById("content");

  const heading = document.createElement("h1");
  heading.textContent = "Menu";

  const pastaH3 = document.createElement("h3");
  const steakH3 = document.createElement("h3");
  const lasagnaH3 = document.createElement("h3");
  pastaH3.textContent = "Pasta";
  steakH3.textContent = "Steak";
  lasagnaH3.textContent = "Lasagna";

  const pasta = document.createElement("img");
  const steak = document.createElement("img");
  const lasagna = document.createElement("img");
  pasta.src = pastaS;
  steak.src = steakS;
  lasagna.src = lasagnaS;

  content.appendChild(heading);
  content.appendChild(pastaH3);
  content.appendChild(pasta);
  content.appendChild(steakH3);
  content.appendChild(steak);
  content.appendChild(lasagnaH3);
  content.appendChild(lasagna);
}
