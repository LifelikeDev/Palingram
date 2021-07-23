import { isAnagram } from "./anagram.js";
import { isPalindrome } from "./palindrome.js";

const choiceSelect = document.getElementById("choiceSelect");
const palindromeOption = document.querySelector(".palindromeOption");
const anagramOption = document.querySelector(".anagramOption");
const palindromeForm = document.getElementById("palindromeForm");
const anagramForm = document.getElementById("anagramForm");
const palindromeInput = document.getElementById("palindromeInput");
const firstAnagramInput = document.getElementById("firstAnagramInput");
const secondAnagramInput = document.getElementById("secondAnagramInput");

choiceSelect.addEventListener("change", () => {
  const selectedChoice = choiceSelect.selectedOptions[0].text;

  if (selectedChoice === "Palindrome") {
    palindromeOption.style.display = "block";
    anagramOption.style.display = "none";
  }
  if (selectedChoice === "Anagram") {
    anagramOption.style.display = "block";
    palindromeOption.style.display = "block";
  }

  console.log(selectedChoice);
});

palindromeForm.addEventListener("submit", () => {
  console.log(palindromeInput.value);
  palindromeInput.value = "";
});

anagramForm.addEventListener("submit", () => {
  if (firstAnagramInput.value !== "" && secondAnagramInput.value !== "") {
    console.log(firstAnagramInput.value, secondAnagramInput.value);
    firstAnagramInput.value = "";
    secondAnagramInput.value = "";
  } else {
    alert("You need to enter a word in each field");
  }
});

// console.log(isAnagram("door", "rodo"));
// console.log(isPalindrome("redivider"));
