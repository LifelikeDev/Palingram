import { isAnagram } from "./anagram.js";
import { isPalindrome } from "./palindrome.js";

const choiceSelect = document.getElementById("choiceSelect");
const options = document.querySelectorAll("#choiceSelect option");
const palindromeOption = document.querySelector(".palindromeOption");
const anagramOption = document.querySelector(".anagramOption");
const palindromeForm = document.getElementById("palindromeForm");
const anagramForm = document.getElementById("anagramForm");
const palindromeInput = document.getElementById("palindromeInput");
const firstAnagramInput = document.getElementById("firstAnagramInput");
const secondAnagramInput = document.getElementById("secondAnagramInput");

window.addEventListener("load", () => {
  for (let i = 0; i < options.length; i++) {
    options[i].selected = options[i].defaultSelected;
  }
});

// displaying input fields when user selects a choice
choiceSelect.addEventListener("change", () => {
  const selectedChoice = choiceSelect.selectedOptions[0].text;

  if (selectedChoice === "Palindrome") {
    if (anagramOption.style.display === "block") {
      anagramOption.style.display = "none";
      palindromeOption.style.display = "block";
    } else {
      palindromeOption.style.display = "block";
    }
  } else if (selectedChoice === "Anagram") {
    if (palindromeOption.style.display === "block") {
      palindromeOption.style.display = "none";
      anagramOption.style.display = "block";
    } else {
      anagramOption.style.display = "block";
    }
  } else {
    palindromeOption.style.display = "none";
    anagramOption.style.display = "none";
  }

  console.log(selectedChoice);
});

// handling palindrome form
palindromeForm.addEventListener("submit", () => {
  if (palindromeInput.value === "") {
    alert("You need to enter a word or phrase");
  } else {
    console.log(palindromeInput.value);
    palindromeInput.value = "";
  }
});

// handling anagram form
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
