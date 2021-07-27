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
const answerModal = document.getElementById("answerModal");

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
palindromeForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (palindromeInput.value === "") {
    answerModal.innerHTML = `<div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="answerModalLabel">No entered value</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">Please enter a word or a phrase</div>
            </div>
        </div>`;
  } else {
    const palindromeAnswer = isPalindrome(palindromeInput.value);
    // console.log(palindromeAnswer);
    answerModal.innerHTML = `<div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="answerModalLabel">${
                palindromeAnswer === true ? "Yaaaay! 😍😍😍" : "Awwwww! 😥😥😥"
              }</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">${
              palindromeAnswer === true
                ? `<strong>${palindromeInput.value.toUpperCase()}</strong> is a palindrome`
                : `<strong>${palindromeInput.value.toUpperCase()}</strong> is not a palindrome`
            }</div>
          </div>
        </div>`;
    palindromeInput.value = "";
  }
});

// handling anagram form
anagramForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (firstAnagramInput.value !== "" && secondAnagramInput.value !== "") {
    const anagramAnswer = isAnagram(
      firstAnagramInput.value.trim(),
      secondAnagramInput.value.trim()
    );
    // console.log(
    //   firstAnagramInput.value,
    //   secondAnagramInput.value,
    //   anagramAnswer
    // );
    answerModal.innerHTML = `<div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="answerModalLabel">${
                anagramAnswer === true ? "Yaaaay! 😍😍😍" : "Awwwww! 😥😥😥"
              }</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">${
              anagramAnswer === true
                ? `<strong>${firstAnagramInput.value.toUpperCase()}</strong> is an anagram of <strong>${secondAnagramInput.value.toUpperCase()}</strong>`
                : `<strong>${firstAnagramInput.value.toUpperCase()}</strong> is not an anagram of <strong>${secondAnagramInput.value.toUpperCase()}</strong>`
            }</div>
          </div>
        </div>`;
    firstAnagramInput.value = "";
    secondAnagramInput.value = "";
  } else {
    answerModal.innerHTML = `<div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="answerModalLabel">No entered value</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">Please enter a word in each field</div>
          </div>
        </div>`;
  }
});
