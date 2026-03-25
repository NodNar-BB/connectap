// ============================================================
//  AnatomyConnect — Game Logic
// ============================================================

// ---------- State ----------
let currentSystem   = null;
let currentPuzzle   = null;
let selectedTiles   = [];
let solvedGroups    = [];
let mistakesLeft    = 4;
let boardTiles      = [];   // shuffled word order on board
let gameOver        = false;

// ---------- Seed-based daily selection ----------
function getDailySeed() {
  const d = new Date();
  return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
}

function seededRandom(seed) {
  // Simple mulberry32 PRNG
  let s = seed >>> 0;
  return function () {
    s = Math.imul(s ^ (s >>> 15), s | 1);
    s ^= s + Math.imul(s ^ (s >>> 7), s | 61);
    return ((s ^ (s >>> 14)) >>> 0) / 4294967296;
  };
}

function pickDailyPuzzle(systemId) {
  const pool = PUZZLE_DATA[systemId];
  const seed = getDailySeed() + systemId.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  const rng  = seededRandom(seed);
  const idx  = Math.floor(rng() * pool.length);
  return pool[idx];
}

function shuffleArray(arr, rng) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ---------- DOM helpers ----------
const $ = id => document.getElementById(id);

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $(id).classList.add('active');
}

function showToast(msg, duration = 1800) {
  const t = $('toast');
  t.textContent = msg;
  t.classList.remove('hidden');
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => t.classList.add('hidden'), duration);
}

// ---------- Build Splash ----------
function buildSplash() {
  const grid = $('system-grid');
  grid.innerHTML = '';
  SYSTEMS.forEach(sys => {
    const pool = PUZZLE_DATA[sys.id];
    const btn = document.createElement('button');
    btn.className = 'system-btn';
    btn.setAttribute('aria-label', `Play ${sys.name} puzzles`);
    btn.innerHTML = `
      <span class="system-icon">${sys.icon}</span>
      <span class="system-name">${sys.name}</span>
      <span class="system-count">${pool.length} puzzles</span>
    `;
    btn.addEventListener('click', () => startGame(sys.id));
    grid.appendChild(btn);
  });
}

// ---------- Start Game ----------
function startGame(systemId) {
  currentSystem  = systemId;
  currentPuzzle  = pickDailyPuzzle(systemId);
  selectedTiles  = [];
  solvedGroups   = [];
  mistakesLeft   = 4;
  gameOver       = false;

  const sysInfo = SYSTEMS.find(s => s.id === systemId);
  $('game-system-title').textContent = sysInfo ? `${sysInfo.icon} ${sysInfo.name}` : systemId;

  // Puzzle number within pool (1-based)
  const idx = PUZZLE_DATA[systemId].indexOf(currentPuzzle) + 1;
  $('game-puzzle-num').textContent = `Puzzle #${idx}`;

  // Build shuffled word list
  const allWords = currentPuzzle.groups.flatMap(g => g.words);
  const rng = seededRandom(getDailySeed() + 999);
  boardTiles = shuffleArray(allWords, rng);

  // Clear solved area
  $('solved-area').innerHTML = '';

  renderBoard();
  renderLives();
  showScreen('game-screen');
}

// ---------- Render Board ----------
function renderBoard() {
  const board = $('board');
  board.innerHTML = '';

  boardTiles.forEach((word, i) => {
    if (solvedGroups.flatMap(g => g.words).includes(word)) return;

    const tile = document.createElement('div');
    tile.className = 'tile pop-in';
    tile.textContent = word;
    tile.dataset.word = word;
    tile.tabIndex = 0;
    tile.setAttribute('role', 'gridcell');
    tile.style.animationDelay = `${i * 25}ms`;

    if (selectedTiles.includes(word)) tile.classList.add('selected');

    tile.addEventListener('click', () => toggleTile(word));
    tile.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleTile(word); } });

    board.appendChild(tile);
  });

  updateSubmitBtn();
}

// ---------- Toggle Tile ----------
function toggleTile(word) {
  if (gameOver) return;

  const idx = selectedTiles.indexOf(word);
  if (idx > -1) {
    selectedTiles.splice(idx, 1);
  } else {
    if (selectedTiles.length >= 4) {
      showToast('You can only select 4 tiles');
      return;
    }
    selectedTiles.push(word);
  }
  renderBoard();
}

// ---------- Submit ----------
function handleSubmit() {
  if (selectedTiles.length !== 4 || gameOver) return;

  // Find matching group
  const matchGroup = currentPuzzle.groups.find(g => {
    const correct = selectedTiles.every(w => g.words.includes(w))
                 && g.words.every(w => selectedTiles.includes(w));
    return correct;
  });

  if (matchGroup) {
    // Correct!
    solvedGroups.push(matchGroup);
    boardTiles = boardTiles.filter(w => !matchGroup.words.includes(w));
    selectedTiles = [];
    renderSolvedGroup(matchGroup);
    renderBoard();

    if (solvedGroups.length === currentPuzzle.groups.length) {
      setTimeout(() => showResult(true), 350);
    } else {
      showToast('Correct! 🎉');
    }
  } else {
    // Check if one away
    const oneAway = currentPuzzle.groups.some(g => {
      const matches = selectedTiles.filter(w => g.words.includes(w)).length;
      return matches === 3;
    });

    mistakesLeft--;
    renderLives();
    shakeTiles();

    if (oneAway) showToast('One away…', 2000);
    else showToast('Not quite — try again');

    selectedTiles = [];
    setTimeout(() => renderBoard(), 480);

    if (mistakesLeft <= 0) {
      setTimeout(() => showResult(false), 600);
    }
  }
}

// ---------- Shake Animation ----------
function shakeTiles() {
  const tiles = $('board').querySelectorAll('.tile.selected');
  tiles.forEach(t => {
    t.classList.add('wrong-shake');
    t.addEventListener('animationend', () => t.classList.remove('wrong-shake'), { once: true });
  });
}

// ---------- Render Solved Group ----------
function renderSolvedGroup(group) {
  const area = $('solved-area');
  const div  = document.createElement('div');
  div.className = `solved-group ${group.color}`;
  div.innerHTML = `
    <div class="solved-group-label">${difficultyLabel(group.color)}</div>
    <div class="solved-group-title">${group.title}</div>
    <div class="solved-group-words">${group.words.join(' · ')}</div>
  `;
  area.appendChild(div);
}

function difficultyLabel(color) {
  return { yellow: 'Straightforward', green: 'Moderate', blue: 'Challenging', purple: 'Expert' }[color] || color;
}

// ---------- Lives ----------
function renderLives() {
  const container = $('lives-dots');
  container.innerHTML = '';
  for (let i = 0; i < 4; i++) {
    const dot = document.createElement('div');
    dot.className = 'life-dot' + (i >= mistakesLeft ? ' lost' : '');
    container.appendChild(dot);
  }
}

// ---------- Submit button state ----------
function updateSubmitBtn() {
  $('submit-btn').disabled = selectedTiles.length !== 4;
}

// ---------- Show Result ----------
function showResult(won) {
  gameOver = true;

  $('result-icon').textContent = won ? '🎉' : '🫀';
  $('result-title').textContent = won ? 'Well done!' : 'Better luck next time';
  $('result-message').textContent = won
    ? `You solved today's ${SYSTEMS.find(s => s.id === currentSystem)?.name} puzzle with ${4 - mistakesLeft} mistake${4 - mistakesLeft === 1 ? '' : 's'}!`
    : 'Here is how the groups were arranged:';

  // Show all groups in result
  const rg = $('result-groups');
  rg.innerHTML = '';
  currentPuzzle.groups.forEach(g => {
    const row = document.createElement('div');
    row.className = 'result-group-row';
    row.innerHTML = `
      <div class="result-dot ${g.color}"></div>
      <div><strong>${g.title}</strong>: ${g.words.join(', ')}</div>
    `;
    rg.appendChild(row);
  });

  $('result-overlay').classList.remove('hidden');
}

// ---------- Shuffle ----------
function handleShuffle() {
  const remaining = boardTiles.filter(w => !solvedGroups.flatMap(g => g.words).includes(w));
  const rng = seededRandom(Date.now());
  boardTiles = [
    ...solvedGroups.flatMap(g => g.words),
    ...shuffleArray(remaining, rng)
  ];
  selectedTiles = [];
  renderBoard();
}

// ---------- Event Listeners ----------
document.addEventListener('DOMContentLoaded', () => {
  buildSplash();

  // Buttons
  $('back-btn').addEventListener('click', () => {
    showScreen('splash-screen');
    $('result-overlay').classList.add('hidden');
  });

  $('info-btn').addEventListener('click', () => {
    $('howto-overlay').classList.remove('hidden');
  });

  $('howto-close-btn').addEventListener('click', () => {
    $('howto-overlay').classList.add('hidden');
  });

  $('submit-btn').addEventListener('click', handleSubmit);
  $('shuffle-btn').addEventListener('click', handleShuffle);

  $('deselect-btn').addEventListener('click', () => {
    selectedTiles = [];
    renderBoard();
  });

  $('play-again-btn').addEventListener('click', () => {
    $('result-overlay').classList.add('hidden');
    // Pick a different puzzle from same system (random)
    const pool = PUZZLE_DATA[currentSystem];
    const current = currentPuzzle;
    let next = current;
    let attempts = 0;
    while (next === current && attempts < 20) {
      const rng = seededRandom(Date.now() + attempts);
      next = pool[Math.floor(rng() * pool.length)];
      attempts++;
    }
    currentPuzzle = next;
    selectedTiles  = [];
    solvedGroups   = [];
    mistakesLeft   = 4;
    gameOver       = false;

    const idx = PUZZLE_DATA[currentSystem].indexOf(currentPuzzle) + 1;
    $('game-puzzle-num').textContent = `Puzzle #${idx}`;

    const allWords = currentPuzzle.groups.flatMap(g => g.words);
    const rng2 = seededRandom(Date.now());
    boardTiles = shuffleArray(allWords, rng2);

    $('solved-area').innerHTML = '';
    renderBoard();
    renderLives();
  });

  $('change-system-btn').addEventListener('click', () => {
    $('result-overlay').classList.add('hidden');
    showScreen('splash-screen');
  });

  // Close overlays on backdrop click
  [$('result-overlay'), $('howto-overlay')].forEach(overlay => {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) overlay.classList.add('hidden');
    });
  });

  // Keyboard: Escape closes overlays
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      $('result-overlay').classList.add('hidden');
      $('howto-overlay').classList.add('hidden');
    }
  });
});
