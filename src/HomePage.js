import image from "./restaurant.jpg";
import { rmPrevious } from "./rmPrevious";

export function HomePage() {
  rmPrevious();

  const content = document.getElementById("content");
  content.style.backgroundImage = `url(${image})`;

  const heading = document.createElement("h1");
  heading.textContent = "Welcome to our restaurant!";

  const paragraph = document.createElement("p");
  paragraph.textContent = "We serve the best food in town!";

  content.appendChild(heading);
  content.appendChild(paragraph);
}
