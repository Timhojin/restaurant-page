import image from "./restaurant.jpg";
import { rmPrevious } from "./rmPrevious";
import "./css/home.css";

export function HomePage() {
  rmPrevious();

  const content = document.getElementById("content");
  content.style.backgroundImage = `url(${image})`;
  content.className = "home-page";

  const gap = document.createElement("div");
  gap.className = "gap";
  content.appendChild(gap);

  const textContainer = document.createElement("div");
  textContainer.className = "text-container";
  content.appendChild(textContainer);

  const heading = document.createElement("h1");
  heading.textContent = "Welcome to our restaurant!";

  const paragraph = document.createElement("p");
  paragraph.textContent = "We serve the best food in town!";

  textContainer.appendChild(heading);
  textContainer.appendChild(paragraph);
}
