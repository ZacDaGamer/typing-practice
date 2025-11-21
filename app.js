let words = [];
let index = 0;
let startTime = null;

const wordList = document.getElementById("wordList");
const startBtn = document.getElementById("startBtn");
const wordsDiv = document.getElementById("words");
const input = document.getElementById("input");
const wpmDiv = document.getElementById("wpm");

startBtn.onclick = () => {
  words = wordList.value.trim().split(/\s+/);
  if (words.length === 0) return;

  index = 0;
  startTime = null;
  input.disabled = false;
  input.value = "";
  input.focus();
  wpmDiv.textContent = "";
  showWord();
};

function showWord() {
  wordsDiv.textContent = words[index];
}

input.addEventListener("input", () => {
  if (!startTime) startTime = Date.now();

  if (input.value.trim() === words[index]) {
    index++;
    input.value = "";
    if (index < words.length) {
      showWord();
    } else {
      finish();
    }
  }
});

function finish() {
  input.disabled = true;

  const elapsed = (Date.now() - startTime) / 1000; // seconds
  const wpm = Math.round((words.length / elapsed) * 60);

  wpmDiv.textContent = `WPM: ${wpm}`;
}
