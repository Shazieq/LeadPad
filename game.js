// Initialize game data
const prefixCards = ['un-', 're-', 'dis-', 'pre-', 'mis-', 'over-', 'under-', 'anti-', 'inter-', 'trans-', 'sub-', 'hyper-'];
const rootCards = ['happy', 'play', 'form', 'act', 'port', 'bio', 'graph', 'struct', 'sense', 'spect', 'cycle', 'logic', 'press', 'therm', 'move'];
const suffixCards = ['-ness', '-ing', '-ed', '-er', '-ly', '-able', '-less', '-ful', '-ion', '-ment', '-ity', '-ize', '-ous', '-al', '-ist'];
const wildcardCards = ['Wildcard', 'Double Points', 'Block Opponent', 'Swap Cards', 'Extra Time', 'Steal Card'];

let score = 0;

// Function to draw a random card
function drawCard() {
  const categories = [prefixCards, rootCards, suffixCards, wildcardCards];
  const category = categories[Math.floor(Math.random() * categories.length)];
  const card = category[Math.floor(Math.random() * category.length)];
  alert(`You drew: ${card}`);
}

// Function to submit a word
function submitWord() {
  const word = prompt("Enter the word you formed:");
  const validWords = ['unhappy', 'reform', 'mispress', 'understand']; // Add more valid words here
  if (validWords.includes(word)) {
    score += 10; // Add points for a valid word
    document.getElementById('score').innerText = `Score: ${score}`;
    alert(`Word accepted: ${word}`);
  } else {
    alert(`Invalid word: ${word}`);
  }
}
