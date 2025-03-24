import { HomePage } from "./HomePage.js";
import { Menu } from "./Menu.js";
import { About } from "./About.js";
import "./styles.css";

HomePage();
document.getElementById("home").addEventListener("click", () => HomePage());
document.getElementById("menu").addEventListener("click", () => Menu());
document.getElementById("about").addEventListener("click", () => About());
