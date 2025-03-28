import { rmPrevious } from "./rmPrevious";

export function About() {
  rmPrevious();

  const content = document.getElementById("content");
  content.className = "about-page";

  const heading = document.createElement("h1");
  heading.textContent = "About Us";

  const paragraph = document.createElement("p");
  paragraph.textContent =
    "Welcome to our Restaurant, a cozy spot where great food and warm hospitality come together. We take pride in serving fresh, locally sourced ingredients and homemade recipes that bring comfort to every bite. Whether you're here for a quick lunch, a family dinner, or a special celebration, our goal is to make you feel at home. Come in, take a seat, and enjoy a meal made with love. We can't wait to serve you!";

  content.appendChild(heading);
  content.appendChild(paragraph);
}
