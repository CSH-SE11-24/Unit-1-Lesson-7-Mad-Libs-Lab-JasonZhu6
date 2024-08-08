// Console log a welcome message with instructions to mad libs
console.log(`Welcome to mad libs! You need to enter 4 words, and I will put them into a sentence. \n`)

let theme = prompt("Which theme do you want? We have NORMAL and WEIRD theme: ")
// Prompt the user to enter parts of speech for mad libs
// You should be asking for at least 4 words
let word1 = prompt("Enter a noun: ")

let word2 = prompt("Enter a plural noun (food): ")

let word3 = prompt("Enter an adjective: ")

let word4 = prompt("Enter a plural noun: ")

// Create an array that stores the values the user entered
let wordBank = []

wordBank.push(word1, word2, word3, word4)

// Console log the story with the array values passed into the blanks
// Make sure you are referencing the values of the array (rather than the user inputs themselves)
// You can use any type of string manipulation that feels more intuitive
if (theme == ("normal" || "NORMAL")) {
  console.log(`\n ${wordBank[0]} love[s] eating ${wordBank[1]}. It tastes so ${wordBank[2]} that ${wordBank[0]} think[s] ${wordBank[3]} should love it as well. `)
} else if (theme == ("weird" || "WEIRD")) {
  console.log(`\n ${wordBank[1]} love[s] eating ${wordBank[0]}. It tastes so ${wordBank[2]} that ${wordBank[1]} think[s] ${wordBank[3]} should love it as well. `)
}