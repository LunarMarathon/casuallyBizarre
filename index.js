import { verbs } from "./verbs.js"

const verb = document.getElementById("verb")

let randomIndex = Math.floor(Math.random() * verbs.length)
verb.textContent = verbs[randomIndex]