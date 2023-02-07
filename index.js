import { verbs } from "./verbs.js"
import { nouns } from "./nouns.js"
import { adjectives } from "./adjectives.js"

const verb = document.getElementById("verb")
const noun = document.getElementById("noun")
const saveTextBtn = document.getElementById("saveTextBtn")
const casualText = document.getElementById("casualText")
const getTextBtn = document.getElementById("getTextBtn")
const adjective = document.getElementById("adjective")
const copiedTextAck = document.getElementById("copiedTextAck")

renderText()

function renderText(){
    copiedTextAck.style.display = "none"
    let randomVerbIndex = Math.floor(Math.random() * verbs.length)
    verb.textContent = verbs[randomVerbIndex]
    let randomNounIndex = Math.floor(Math.random() * nouns.length)
    noun.textContent = nouns[randomNounIndex]
    let randomAdjectiveIndex = Math.floor(Math.random() * adjectives.length)
    adjective.textContent = adjectives[randomAdjectiveIndex]
}


let savedTextArray = []

saveTextBtn.addEventListener("click", function(){
    console.log(casualText.textContent)
    savedTextArray.push(casualText.textContent)
    console.log(savedTextArray)
    navigator.clipboard.writeText(casualText.textContent);
    copiedTextAck.style.display = "block"
    copiedTextAck.textContent = "Your text has been casually copied. I casually dare you to share it"
})

getTextBtn.addEventListener("click", renderText)