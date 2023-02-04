import { verbs } from "./verbs.js"
import { nouns } from "./nouns.js"

const verb = document.getElementById("verb")
const noun = document.getElementById("noun")
const saveTextBtn = document.getElementById("saveTextBtn")
const casualText = document.getElementById("casualText")
const getTextBtn = document.getElementById("getTextBtn")

renderText()

function renderText(){
    let randomVerbIndex = Math.floor(Math.random() * verbs.length)
    verb.textContent = verbs[randomVerbIndex]
    let randomNounIndex = Math.floor(Math.random() * nouns.length)
    noun.textContent = nouns[randomNounIndex]
}


let savedTextArray = []

saveTextBtn.addEventListener("click", function(){
    console.log(casualText.textContent)
    savedTextArray.push(casualText.textContent)
    console.log(savedTextArray)
})

getTextBtn.addEventListener("click", renderText)