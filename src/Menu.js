import pastaS from "./pasta.jpg";
import steakS from "./steak.jpg";
import lasagnaS from "./lasagna.jpg";
import { rmPrevious } from "./rmPrevious";
import "./css/menu.css";

export function Menu() {
  rmPrevious();

  const content = document.getElementById("content");
  content.className = "menu-page";

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

  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");
  div1.className = "divs";
  div2.className = "divs";
  div3.className = "divs";

  content.appendChild(div1);
  content.appendChild(div2);
  content.appendChild(div3);
  div1.appendChild(pastaH3);
  div1.appendChild(pasta);
  div2.appendChild(steakH3);
  div2.appendChild(steak);
  div3.appendChild(lasagnaH3);
  div3.appendChild(lasagna);
}
