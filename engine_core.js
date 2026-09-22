// ARALUNA: Arsip Pembunuhan Tak Terpecahkan
// Master Engine Core Logic (Audio, State, UI, Puzzles, Checkpoints, Saves, Case Library)

let currentLang = 'id';
let textSpeed = 22; // ms per char
let typingTimer = null;
let currentSaveModalMode = 'save'; // 'save' or 'load'

// 15-Minute Optional Pressure Timer
let isTimerEnabled = false;
let timerRemainingSeconds = 900;
let timerInterval = null;

// Puzzles State
let currentActivePuzzle = null;
let cipherShift = 0;
let safeEnteredCode = '';
let circuitDials = [1, 1, 1];

// Primary Game State
let gameState = {
  chapter: 1,
  currentNode: 'c1_start',
  currentScene: 'story', // 'story', 'hotspot', 'puzzle', 'ending'
  focus: 15,
  playerName: 'Detektif Arun',
  clues: [],
  deductions: [],
  flags: {},
  backlog: [],
  selectedSlotA: null,
  selectedSlotB: null
};

// ==========================================
// ADVANCED PROCEDURAL NOIR AUDIO ENGINE
// ==========================================
let audioCtx = null;
let isAudioMuted = false;
let masterVolume = 0.75;
let masterGainNode = null;
let rainGainNode = null;
let rainSourceNode = null;
let bgmTimer = null;
let thunderTimer = null;
let isAudioInitialized = false;

// 6 Melancholic Noir Jazz Chords (Fm9, Bbm7, Eb7, Abmaj7, Dbmaj7, C7alt)
const JAZZ_CHORDS = [
  [87.31, 130.81, 207.65, 311.13, 392.00],
  [58.27, 87.31, 138.59, 207.65, 261.63],
  [77.78, 116.54, 196.00, 277.18, 349.23],
  [51.91, 77.78, 130.81, 196.00, 233.08],
  [69.30, 103.83, 174.61, 261.63, 311.13],
  [65.41, 98.00, 164.81, 233.08, 311.13]
];
let currentChordIdx = 0;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
      masterGainNode = audioCtx.createGain();
      masterGainNode.gain.setValueAtTime(isAudioMuted ? 0 : masterVolume, audioCtx.currentTime);
      masterGainNode.connect(audioCtx.destination);
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function initAudioEngine() {
  if (isAudioInitialized) return;
  const ctx = getAudioContext();
  if (!ctx) return;
  isAudioInitialized = true;
  initProceduralRain();
  startNoirBgm();
  scheduleDistantThunder();
}

function initProceduralRain() {
  const ctx = getAudioContext();
  if (!ctx || rainSourceNode) return;

  const bufferSize = ctx.sampleRate * 2;
  const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const output = noiseBuffer.getChannelData(0);
  let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

  for (let i = 0; i < bufferSize; i++) {
    const white = Math.random() * 2 - 1;
    b0 = 0.99886 * b0 + white * 0.0555179;
    b1 = 0.99332 * b1 + white * 0.0750759;
    b2 = 0.96900 * b2 + white * 0.1538520;
    b3 = 0.86650 * b3 + white * 0.3104856;
    b4 = 0.55000 * b4 + white * 0.5329522;
    b5 = -0.7616 * b5 - white * 0.0168980;
    output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.038;
    b6 = white * 0.115926;
  }

  rainSourceNode = ctx.createBufferSource();
  rainSourceNode.buffer = noiseBuffer;
  rainSourceNode.loop = true;

  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 820;

  rainGainNode = ctx.createGain();
  rainGainNode.gain.value = isAudioMuted ? 0 : 0.18;

  rainSourceNode.connect(filter);
  filter.connect(rainGainNode);
  rainGainNode.connect(masterGainNode);
  rainSourceNode.start();
}

function playNextJazzChord() {
  if (isAudioMuted) return;
  const ctx = getAudioContext();
  if (!ctx || !masterGainNode) return;

  const chord = JAZZ_CHORDS[currentChordIdx];
  currentChordIdx = (currentChordIdx + 1) % JAZZ_CHORDS.length;

  const now = ctx.currentTime;
  const chordGain = ctx.createGain();
  chordGain.gain.setValueAtTime(0.0001, now);
  chordGain.gain.exponentialRampToValueAtTime(0.055, now + 1.2);
  chordGain.gain.exponentialRampToValueAtTime(0.0001, now + 4.9);

  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 720;

  chord.forEach((freq, idx) => {
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    osc1.type = 'triangle';
    osc2.type = 'sine';

    const detune = (Math.random() - 0.5) * 5;
    osc1.frequency.setValueAtTime(freq, now + idx * 0.035);
    osc2.frequency.setValueAtTime(freq + detune, now + idx * 0.035);

    osc1.connect(filter);
    osc2.connect(filter);

    osc1.start(now + idx * 0.035);
    osc2.start(now + idx * 0.035);
    osc1.stop(now + 5.0);
    osc2.stop(now + 5.0);
  });

  filter.connect(chordGain);
  chordGain.connect(masterGainNode);
}

function startNoirBgm() {
  if (bgmTimer) return;
  playNextJazzChord();
  bgmTimer = setInterval(playNextJazzChord, 4800);
}

function scheduleDistantThunder() {
  if (thunderTimer) clearTimeout(thunderTimer);
  const nextThunderDelay = 35000 + Math.random() * 30000;
  thunderTimer = setTimeout(() => {
    triggerDistantThunder();
    scheduleDistantThunder();
  }, nextThunderDelay);
}

function triggerDistantThunder() {
  if (isAudioMuted) return;
  const ctx = getAudioContext();
  if (!ctx || !masterGainNode) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  const filter = ctx.createBiquadFilter();

  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(55, now);
  osc.frequency.exponentialRampToValueAtTime(32, now + 2.8);

  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(140, now);
  filter.frequency.exponentialRampToValueAtTime(60, now + 3.0);

  gain.gain.setValueAtTime(0.001, now);
  gain.gain.exponentialRampToValueAtTime(0.08, now + 0.9);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.2);

  osc.connect(filter);
  filter.connect(gain);
  gain.connect(masterGainNode);

  osc.start(now);
  osc.stop(now + 3.3);
}

let dialogueVoiceStyle = localStorage.getItem('araluna_voice_style') || 'voice'; // 'voice', 'typewriter', 'none'

const CHARACTER_VOICE_PROFILES = {
  arun: {
    baseFreq: 140,
    wave: 'triangle',
    filterFreq: 520,
    q: 3.2,
    detuneRange: 16
  },
  vela: {
    baseFreq: 265,
    wave: 'triangle',
    filterFreq: 940,
    q: 2.8,
    detuneRange: 24
  },
  mira: {
    baseFreq: 385,
    wave: 'sine',
    filterFreq: 1220,
    q: 2.4,
    detuneRange: 32
  },
  brama: {
    baseFreq: 185,
    wave: 'sawtooth',
    filterFreq: 640,
    q: 3.6,
    detuneRange: 22
  },
  sena: {
    baseFreq: 235,
    wave: 'sine',
    filterFreq: 860,
    q: 3.2,
    detuneRange: 16
  },
  reyn: {
    baseFreq: 115,
    wave: 'triangle',
    filterFreq: 440,
    q: 4.2,
    detuneRange: 14
  },
  archivist: {
    baseFreq: 95,
    wave: 'sawtooth',
    filterFreq: 340,
    q: 4.6,
    detuneRange: 26
  }
};

function setDialogueVoiceStyle(style) {
  dialogueVoiceStyle = style;
  localStorage.setItem('araluna_voice_style', style);
  updateVoiceStyleButtons();
  if (style !== 'none') {
    playDialogueVoice('arun', 'A');
  }
  showToast(
    style === 'voice' 
      ? (currentLang === 'en' ? 'Voice Murmurs Active ("br-br-br")' : 'Suara Vokal Karakter Aktif ("br-br-br")')
      : style === 'typewriter'
      ? (currentLang === 'en' ? 'Noir Typewriter Audio Active' : 'Suara Mesin Tik Noir Aktif')
      : (currentLang === 'en' ? 'Dialogue Voice Muted' : 'Suara Dialog Dimatikan')
  );
}

function updateVoiceStyleButtons() {
  const buttons = document.querySelectorAll('#voice-options-row .settings-pill-btn');
  buttons.forEach(btn => {
    const style = btn.getAttribute('data-voice-style');
    btn.classList.toggle('active', style === dialogueVoiceStyle);
  });
}

function playDialogueVoice(speakerKey, char) {
  if (isAudioMuted || dialogueVoiceStyle === 'none') return;
  const ctx = getAudioContext();
  if (!ctx || !masterGainNode) return;
  const now = ctx.currentTime;

  const key = (speakerKey || '').toLowerCase().trim();
  const profile = CHARACTER_VOICE_PROFILES[key];

  if (dialogueVoiceStyle === 'voice' && profile) {
    // 1. CHARACTER VOCALIZATION ("br-br-br" Animalese / Ace Attorney / Undertale blip)
    const osc = ctx.createOscillator();
    const filter = ctx.createBiquadFilter();
    const gain = ctx.createGain();

    osc.type = profile.wave;

    // Pitch inflection per character letter
    const charCode = (char ? char.charCodeAt(0) : 65);
    const inflection = ((charCode % 7) - 3) * (profile.detuneRange / 3);
    const targetFreq = Math.max(60, profile.baseFreq + inflection);

    osc.frequency.setValueAtTime(targetFreq, now);

    // Formant filter (human vowel tract resonance)
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(profile.filterFreq, now);
    filter.Q.setValueAtTime(profile.q, now);

    // Punchy, pleasant acoustic envelope
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.16, now + 0.005);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.052);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(masterGainNode);

    osc.start(now);
    osc.stop(now + 0.058);
  } else {
    // 2. MECHANICAL NOIR TYPEWRITER STRIKE
    // Layer A: Crisp mechanical snap transient
    const snapOsc = ctx.createOscillator();
    const snapGain = ctx.createGain();
    snapOsc.type = 'triangle';
    snapOsc.frequency.setValueAtTime(1400 + Math.random() * 400, now);
    snapGain.gain.setValueAtTime(0.07, now);
    snapGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.022);
    snapOsc.connect(snapGain);
    snapGain.connect(masterGainNode);
    snapOsc.start(now);
    snapOsc.stop(now + 0.025);

    // Layer B: Metal lever body plonk
    const bodyOsc = ctx.createOscillator();
    const bodyGain = ctx.createGain();
    bodyOsc.type = 'sine';
    bodyOsc.frequency.setValueAtTime(440 + Math.random() * 80, now);
    bodyGain.gain.setValueAtTime(0.09, now);
    bodyGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.038);
    bodyOsc.connect(bodyGain);
    bodyGain.connect(masterGainNode);
    bodyOsc.start(now);
    bodyOsc.stop(now + 0.042);
  }
}

function playSound(type) {
  if (isAudioMuted) return;
  const ctx = getAudioContext();
  if (!ctx || !masterGainNode) return;

  const now = ctx.currentTime;

  if (type === 'type') {
    playDialogueVoice('narasi', 'A');
    return;
  } else if (type === 'chime') {
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);
      gain.gain.setValueAtTime(0.1, now + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 0.65);
      osc.connect(gain);
      gain.connect(masterGainNode);
      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.7);
    });
  } else if (type === 'sting') {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(130.81, now);
    osc.frequency.exponentialRampToValueAtTime(65.41, now + 0.45);
    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);
    osc.connect(gain);
    gain.connect(masterGainNode);
    osc.start(now);
    osc.stop(now + 0.55);
  } else if (type === 'heartbeat') {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(52, now);
    gain.gain.setValueAtTime(0.22, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);
    osc.connect(gain);
    gain.connect(masterGainNode);
    osc.start(now);
    osc.stop(now + 0.15);

    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(46, now + 0.16);
    gain2.gain.setValueAtTime(0.18, now + 0.16);
    gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.3);
    osc2.connect(gain2);
    gain2.connect(masterGainNode);
    osc2.start(now + 0.16);
    osc2.stop(now + 0.33);
  }
}

function setMasterVolume(val) {
  masterVolume = parseFloat(val);
  const ctx = getAudioContext();
  if (masterGainNode && ctx) {
    masterGainNode.gain.setValueAtTime(isAudioMuted ? 0 : masterVolume, ctx.currentTime);
  }
}

function toggleAudioEngine() {
  initAudioEngine();
  isAudioMuted = !isAudioMuted;
  const ctx = getAudioContext();
  if (masterGainNode && ctx) {
    masterGainNode.gain.setValueAtTime(isAudioMuted ? 0 : masterVolume, ctx.currentTime);
  }
  const icon = document.getElementById('audio-icon');
  if (icon) icon.textContent = isAudioMuted ? '🔇' : '🔊';
  showToast(isAudioMuted ? 'Audio Dimatikan' : 'Audio Diaktifkan');
}

function toggleAudio() {
  toggleAudioEngine();
}

// ==========================================
// OPTIONAL PRESSURE TIMER (15 MINUTES)
// ==========================================
function toggleTimerMode() {
  isTimerEnabled = !isTimerEnabled;
  const btn = document.getElementById('setting-timer-toggle-btn');
  const badge = document.getElementById('hud-timer-badge');
  if (btn) btn.textContent = isTimerEnabled ? 'AKTIF (15 Menit)' : 'NONAKTIF';
  if (badge) badge.style.display = isTimerEnabled ? 'flex' : 'none';

  if (isTimerEnabled) {
    startTimerCountdown();
    showToast('Mode Timer Aktif: 15 Menit');
  } else {
    clearInterval(timerInterval);
    timerInterval = null;
    showToast('Mode Timer Dimatikan');
  }
}

function startTimerCountdown() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (!isTimerEnabled) return;
    timerRemainingSeconds--;
    updateTimerDisplay();

    if (timerRemainingSeconds <= 180 && timerRemainingSeconds > 0) {
      if (timerRemainingSeconds % 2 === 0) playSound('heartbeat');
      const badge = document.getElementById('hud-timer-badge');
      if (badge) badge.classList.add('pulse-red');
    }

    if (timerRemainingSeconds <= 0) {
      clearInterval(timerInterval);
      showToast('WAKTU HABIS! Tersangka berhasil melarikan diri!');
      playSound('sting');
      goToStoryNode('end_2_unsolved');
    }
  }, 1000);
}

function updateTimerDisplay() {
  const disp = document.getElementById('timer-display');
  if (!disp) return;
  const m = Math.floor(timerRemainingSeconds / 60);
  const s = timerRemainingSeconds % 60;
  disp.textContent = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
}

// ==========================================
// TOAST & CHECKPOINTS (12 CHECKPOINTS)
// ==========================================
function showToast(message) {
  const toast = document.getElementById('game-toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toast.timeout);
  toast.timeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

function triggerCheckpoint(checkpointName) {
  const cpData = {
    name: checkpointName,
    chapter: gameState.chapter,
    nodeId: gameState.currentNode,
    clues: [...gameState.clues],
    deductions: [...gameState.deductions],
    focus: gameState.focus,
    flags: { ...gameState.flags },
    playerName: gameState.playerName,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
  };

  localStorage.setItem('araluna_latest_checkpoint', JSON.stringify(cpData));

  // Visual checkpoint banner notification
  const cpToast = document.getElementById('checkpoint-toast');
  if (cpToast) {
    const t = I18N[currentLang] || I18N['id'];
    cpToast.innerHTML = `<span>💾</span> <strong>${t.cpToastTitle}:</strong> ${checkpointName}`;
    cpToast.classList.add('show');
    clearTimeout(cpToast.timeout);
    cpToast.timeout = setTimeout(() => {
      cpToast.classList.remove('show');
    }, 3500);
  }

  // Trigger autosave alongside major checkpoint
  saveGameSlot('auto');
}

function loadLastCheckpoint() {
  const raw = localStorage.getItem('araluna_latest_checkpoint');
  if (!raw) {
    showToast(currentLang === 'en' ? 'No checkpoint recorded yet!' : 'Belum ada checkpoint tercatat!');
    return;
  }
  try {
    const cp = JSON.parse(raw);
    gameState.chapter = cp.chapter;
    gameState.currentNode = cp.nodeId;
    gameState.clues = [...cp.clues];
    gameState.deductions = [...cp.deductions];
    gameState.focus = cp.focus;
    gameState.flags = { ...cp.flags };
    gameState.playerName = cp.playerName;

    updateChapterNavigationUI();
    updateEvidenceInventory();
    renderDeductionTray();
    updateDeductionHistory();
    goToStoryNode(cp.nodeId);
    showToast(`Checkpoint Dimuat: ${cp.name}`);
    playSound('chime');
  } catch (err) {
    console.error('Error loading checkpoint:', err);
  }
}

// ==========================================
// STORY & DIALOGUE RENDERING ENGINE
// ==========================================
function goToStoryNode(nodeId, skipPushHistory = false) {
  const node = STORY_NODES[nodeId];
  if (!node) {
    console.error('Node not found:', nodeId);
    return;
  }

  if (!skipPushHistory && gameState.currentNode && gameState.currentNode !== nodeId) {
    if (!gameState.historyStack) gameState.historyStack = [];
    gameState.historyStack.push(gameState.currentNode);
    if (gameState.historyStack.length > 60) gameState.historyStack.shift();
  }

  gameState.currentNode = nodeId;
  gameState.chapter = node.chapter;

  if (node.triggerCheckpoint) {
    triggerCheckpoint(node.triggerCheckpoint);
  }
  if (node.awardClue && !gameState.clues.includes(node.awardClue)) {
    gameState.clues.push(node.awardClue);
    updateEvidenceInventory();
    renderDeductionTray();
    const clueObj = CLUES_DATA[node.awardClue];
    const cName = clueObj ? (clueObj.name[currentLang] || clueObj.name['id']) : node.awardClue;
    showToast(`Bukti Baru: ${cName}`);
    playSound('chime');
  }
  if (node.focusChange) {
    gameState.focus = Math.min(100, Math.max(0, gameState.focus + node.focusChange));
    updateFocusBar();
  }

  updateChapterNavigationUI();
  renderStoryNode(node);

  if (node.triggerPuzzle) {
    setTimeout(() => {
      openPuzzleModal(node.triggerPuzzle);
    }, 700);
  }
}

const CHAPTER_BG_MAP = {
  1: 'assets/bg_pier.jpg',
  2: 'assets/bg_precinct.jpg',
  3: 'assets/bg_archive.jpg',
  4: 'assets/bg_lighthouse.svg'
};

const CHAR_SVG_MAP = {
  'arun': 'assets/characters/arun.svg',
  'vela': 'assets/characters/vela.svg',
  'mira': 'assets/characters/mira.svg',
  'brama': 'assets/characters/brama.svg',
  'sena': 'assets/characters/sena.svg',
  'reyn': 'assets/characters/reyn.svg',
  'archivist': 'assets/characters/archivist.svg'
};

function updateSceneBackground(chapter, customBg) {
  const viewport = document.getElementById('scene-viewport');
  if (!viewport) return;
  const bg = customBg || CHAPTER_BG_MAP[chapter] || 'assets/bg_pier.jpg';
  viewport.style.backgroundImage = `url('${bg}')`;
}

function updateCharacterStage(speakerKey) {
  const charVisual = document.getElementById('character-visual');
  const avatarIcon = document.getElementById('speaker-avatar-icon');
  const key = (speakerKey || '').toLowerCase().trim();
  const svgPath = CHAR_SVG_MAP[key];

  if (charVisual) {
    if (svgPath) {
      charVisual.style.display = 'flex';
      charVisual.style.opacity = '0.94';
      charVisual.innerHTML = `<img src="${svgPath}" alt="${key}" class="character-portrait-img" />`;
      charVisual.classList.remove('fade-in');
      void charVisual.offsetWidth;
      charVisual.classList.add('fade-in');
    } else {
      charVisual.style.opacity = '0';
      setTimeout(() => {
        if (charVisual.style.opacity === '0') {
          charVisual.style.display = 'none';
        }
      }, 350);
    }
  }

  if (avatarIcon) {
    if (svgPath) {
      avatarIcon.innerHTML = `<img src="${svgPath}" alt="${key}" style="width:100%;height:100%;object-fit:cover;object-position:top center;" />`;
    } else {
      avatarIcon.innerHTML = `<span style="font-size:1.1rem;color:var(--gold);">⚖️</span>`;
    }
  }
}

function renderSidebarSuspects() {
  const container = document.getElementById('suspects-list-container');
  if (!container) return;
  container.innerHTML = '';

  const castKeys = ['vela', 'mira', 'brama', 'sena', 'reyn', 'archivist'];
  castKeys.forEach(k => {
    const s = SUSPECTS_DATA[k];
    if (!s) return;
    const svgPath = CHAR_SVG_MAP[k] || 'assets/characters/arun.svg';
    const roleText = s.role[currentLang] || s.role['id'];

    const item = document.createElement('div');
    item.className = 'suspect-item';
    item.onclick = () => interrogateSuspect(k);
    item.innerHTML = `
      <div class="suspect-avatar-mini">
        <img src="${svgPath}" alt="${s.name}" />
      </div>
      <div style="overflow:hidden;flex:1;">
        <div style="font-size:0.86rem;font-weight:600;color:#fff;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;">${s.name}</div>
        <div style="font-size:0.72rem;color:var(--gold-light);opacity:0.85;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;">${roleText}</div>
      </div>
    `;
    container.appendChild(item);
  });
}

function openSuspectDossier(suspectId) {
  interrogateSuspect(suspectId);
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function renderStoryNode(node, skipTyping = false) {
  const speakerEl = document.getElementById('speaker-name');
  const roleEl = document.getElementById('speaker-role');
  const textEl = document.getElementById('dialogue-text');
  const choiceContainer = document.getElementById('choice-container');

  const charInfo = SUSPECTS_DATA[node.speaker] || {
    name: node.speaker || "Narasi",
    role: { id: "Penyelidikan", en: "Observation", id_gaul: "Pengamatan" },
    avatar: "🕵️"
  };

  if (speakerEl) speakerEl.textContent = charInfo.name;
  if (roleEl) roleEl.textContent = charInfo.role[currentLang] || charInfo.role['id'];

  // 1. Update Chapter & Scene Background
  updateSceneBackground(gameState.chapter, node.background);

  // 2. Update Character Visual on Stage & Mini Avatar
  updateCharacterStage(node.speaker || node.charVisual);

  const rawText = node.text[currentLang] || node.text['id'];
  choiceContainer.innerHTML = '';

  const advanceChevron = ' <span class="renpy-advance-chevron">▼</span>';

  if (skipTyping || textSpeed === 0) {
    textEl.innerHTML = escapeHtml(rawText) + advanceChevron;
    renderChoices(node.choices);
    if (typeof checkAutoPlayNext === 'function') checkAutoPlayNext();
  } else {
    textEl.textContent = '';
    let charIdx = 0;
    clearInterval(typingTimer);
    clearTimeout(typingTimer);

    const speakerKey = (node.speaker || '').toLowerCase().trim();

    const typeNextChar = () => {
      if (charIdx < rawText.length) {
        const char = rawText.charAt(charIdx);
        textEl.textContent += char;
        charIdx++;

        let delay = textSpeed;
        if (char !== ' ' && char !== '\n' && charIdx % 2 === 0) {
          playDialogueVoice(speakerKey, char);
        }

        // Slight dramatic pause for punctuation
        if (char === '.' || char === '!' || char === '?') {
          delay += 140;
        } else if (char === ',' || char === ';' || char === ':') {
          delay += 70;
        }

        typingTimer = setTimeout(typeNextChar, delay);
      } else {
        textEl.innerHTML = escapeHtml(rawText) + advanceChevron;
        renderChoices(node.choices);
        if (typeof checkAutoPlayNext === 'function') checkAutoPlayNext();
      }
    };

    typeNextChar();
  }

  // Record to dialogue backlog
  gameState.backlog.push({
    speaker: charInfo.name,
    text: rawText
  });
}

function renderChoices(choices) {
  const choiceContainer = document.getElementById('choice-container');
  if (!choiceContainer) return;
  choiceContainer.innerHTML = '';
  if (!choices || choices.length === 0) return;

  choices.forEach((ch, idx) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.type = 'button';
    const indexStr = String(idx + 1).padStart(2, '0');
    const label = ch.text[currentLang] || ch.text['id'];

    btn.innerHTML = `
      <div class="choice-btn-inner">
        <span class="choice-index-tag">${indexStr}</span>
        <span class="choice-label-text">${escapeHtml(label)}</span>
        <span class="choice-arrow-icon">►</span>
      </div>
    `;
    btn.onmouseenter = () => playSound('type');
    btn.onclick = (e) => {
      e.stopPropagation();
      playSound('sting');
      goToStoryNode(ch.nextNode);
    };
    choiceContainer.appendChild(btn);
  });
}

function updateFocusBar() {
  const fill = document.getElementById('focus-bar-fill');
  const pct = document.getElementById('focus-percentage');
  if (fill) fill.style.width = `${gameState.focus}%`;
  if (pct) pct.textContent = `${gameState.focus}%`;
}

// ==========================================
// DEDUCTION BOARD (THE MIND PALACE)
// ==========================================
function renderDeductionTray() {
  const tray = document.getElementById('deduction-clue-tray');
  if (!tray) return;
  tray.innerHTML = '';

  gameState.clues.forEach(clueId => {
    const c = CLUES_DATA[clueId];
    if (!c) return;
    const name = c.name[currentLang] || c.name['id'];
    const pill = document.createElement('div');
    pill.className = 'tray-pill';
    if (gameState.selectedSlotA === clueId || gameState.selectedSlotB === clueId) {
      pill.classList.add('selected');
    }
    pill.innerHTML = `<span>${c.icon}</span> <span>${name}</span>`;
    pill.onclick = () => selectClueForDeduction(clueId);
    tray.appendChild(pill);
  });
}

function selectClueForDeduction(clueId) {
  if (gameState.selectedSlotA === clueId) {
    gameState.selectedSlotA = null;
  } else if (gameState.selectedSlotB === clueId) {
    gameState.selectedSlotB = null;
  } else if (!gameState.selectedSlotA) {
    gameState.selectedSlotA = clueId;
  } else if (!gameState.selectedSlotB) {
    gameState.selectedSlotB = clueId;
  } else {
    gameState.selectedSlotA = clueId;
  }
  updateDeductionSlotsUI();
  renderDeductionTray();
}

function updateDeductionSlotsUI() {
  const slotAEl = document.getElementById('slot-a-text');
  const slotBEl = document.getElementById('slot-b-text');

  if (slotAEl) {
    if (gameState.selectedSlotA) {
      const c = CLUES_DATA[gameState.selectedSlotA];
      slotAEl.textContent = c ? (c.name[currentLang] || c.name['id']) : gameState.selectedSlotA;
      slotAEl.style.color = 'var(--gold-light)';
    } else {
      slotAEl.textContent = currentLang === 'en' ? '[Drop First Clue]' : '[Pilih Petunjuk Pertama]';
      slotAEl.style.color = 'var(--text-muted)';
    }
  }

  if (slotBEl) {
    if (gameState.selectedSlotB) {
      const c = CLUES_DATA[gameState.selectedSlotB];
      slotBEl.textContent = c ? (c.name[currentLang] || c.name['id']) : gameState.selectedSlotB;
      slotBEl.style.color = 'var(--gold-light)';
    } else {
      slotBEl.textContent = currentLang === 'en' ? '[Drop Second Clue]' : '[Pilih Petunjuk Kedua]';
      slotBEl.style.color = 'var(--text-muted)';
    }
  }
}

function synthesizeDeductions() {
  const a = gameState.selectedSlotA;
  const b = gameState.selectedSlotB;

  if (!a || !b) {
    showToast(currentLang === 'en' ? 'Select 2 clues to synthesize!' : 'Pilih 2 petunjuk untuk disintesis!');
    return;
  }

  let matchedDeduction = null;
  for (const key in VALID_DEDUCTIONS) {
    const d = VALID_DEDUCTIONS[key];
    if ((d.clueA === a && d.clueB === b) || (d.clueA === b && d.clueB === a)) {
      matchedDeduction = d;
      break;
    }
  }

  if (matchedDeduction) {
    if (!gameState.deductions.includes(matchedDeduction.id)) {
      gameState.deductions.push(matchedDeduction.id);
      gameState.focus = Math.min(100, gameState.focus + 20);
      updateFocusBar();
      updateDeductionHistory();
      playSound('chime');
      showToast(currentLang === 'en' ? 'Deduction Synthesized!' : 'Deduksi Berhasil Ditarik!');
    } else {
      showToast(currentLang === 'en' ? 'Already deduced!' : 'Kesimpulan ini sudah pernah terbukti!');
    }
  } else {
    playSound('sting');
    triggerScreenShake();
    showToast(currentLang === 'en' ? 'No logical connection between these clues.' : 'Tidak ada hubungan logis antara kedua bukti ini.');
  }

  gameState.selectedSlotA = null;
  gameState.selectedSlotB = null;
  updateDeductionSlotsUI();
  renderDeductionTray();
}

function updateDeductionHistory() {
  const container = document.getElementById('deduction-history-list');
  const emptyEl = document.getElementById('txt-no-deductions');
  if (!container) return;

  if (gameState.deductions.length === 0) {
    if (emptyEl) emptyEl.style.display = 'block';
    container.innerHTML = '';
    return;
  }

  if (emptyEl) emptyEl.style.display = 'none';
  container.innerHTML = '';

  gameState.deductions.forEach(dId => {
    const d = VALID_DEDUCTIONS[dId];
    if (!d) return;
    const title = d.title[currentLang] || d.title['id'];
    const summary = d.summary[currentLang] || d.summary['id'];

    const item = document.createElement('div');
    item.className = 'deduction-history-item';
    item.innerHTML = `
      <div style="font-weight: 700; color: var(--gold); margin-bottom: 0.35rem; display: flex; align-items: center; gap: 0.5rem;">
        <span>${d.icon}</span> <span>${title}</span>
      </div>
      <div style="font-size: 0.85rem; color: var(--text-main); line-height: 1.5;">${summary}</div>
    `;
    container.appendChild(item);
  });
}

// ==========================================
// 3 INTERACTIVE PUZZLES
// ==========================================
function openPuzzleModal(puzzleId) {
  currentActivePuzzle = puzzleId;
  const modal = document.getElementById('puzzle-modal');
  const title = document.getElementById('puzzle-modal-title');
  const desc = document.getElementById('puzzle-modal-desc');
  const container = document.getElementById('puzzle-interactive-container');

  modal.classList.add('active');

  if (puzzleId === '1') {
    title.textContent = currentLang === 'en' ? 'PUZZLE 1: ZODIAC PALM CIPHER' : 'PUZZLE 1: SANDI ZODIAC TELAPAK TANGAN';
    desc.textContent = currentLang === 'en' ? 'Shift the Caesar dial until the encrypted keyword resolves.' : 'Geser roda substitusi Caesar hingga kata sandi terbaca sempurna.';
    renderPuzzle1UI(container);
  } else if (puzzleId === '2') {
    title.textContent = currentLang === 'en' ? 'PUZZLE 2: DANIEL\'S ARCHIVE SAFE' : 'PUZZLE 2: BRANKAS ARSIP DANIEL';
    desc.textContent = currentLang === 'en' ? 'Enter the 4-digit year code of the Setiabudi 13 surgical cold case.' : 'Masukkan 4 digit tahun awal mula kasus mutilasi Setiabudi 13.';
    renderPuzzle2UI(container);
  } else if (puzzleId === '3') {
    title.textContent = currentLang === 'en' ? 'PUZZLE 3: WHARF ACOUSTIC LOCK' : 'PUZZLE 3: KUNCI FREKUENSI DERMAGA';
    desc.textContent = currentLang === 'en' ? 'Tune the 3 acoustic frequency dials to match the harbor fog bells: 1 - 3 - 2.' : 'Setel 3 dial frekuensi akustik sesuai nada lonceng kabut pelabuhan: 1 - 3 - 2.';
    renderPuzzle3UI(container);
  }
}

function closePuzzleModal() {
  document.getElementById('puzzle-modal').classList.remove('active');
  currentActivePuzzle = null;
}

// Puzzle 1 UI
function renderPuzzle1UI(container) {
  const encrypted = "VHWDJDBD";
  const decoded = decodeCaesar(encrypted, cipherShift);

  container.innerHTML = `
    <div class="cipher-box">
      <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.5rem;">KATA SANDI TERENKRIPSI:</div>
      <div style="font-size: 2rem; font-weight: 700; letter-spacing: 6px; color: var(--gold);">${encrypted}</div>
    </div>
    <div class="cipher-slider-row">
      <button class="numpad-btn" style="padding: 0.5rem 1rem;" onclick="adjustCipherShift(-1)">◀</button>
      <div class="cipher-shift-val">ROT-${cipherShift}</div>
      <button class="numpad-btn" style="padding: 0.5rem 1rem;" onclick="adjustCipherShift(1)">▶</button>
    </div>
    <div style="text-align: center; margin: 1rem 0;">
      <div style="font-size: 0.8rem; color: var(--text-muted);">HASIL TERJEMAHAN:</div>
      <div style="font-size: 1.6rem; font-weight: 700; color: ${decoded === 'SETAGAYA' ? 'var(--green)' : 'var(--crimson-light)'}; letter-spacing: 4px;">${decoded}</div>
    </div>
    <div style="display: flex; justify-content: center; margin-top: 1.5rem;">
      <button class="slot-btn" style="background: var(--gold); color: #000; font-weight: 700; padding: 0.8rem 2rem;" onclick="submitPuzzle1()">
        ${currentLang === 'en' ? 'DECRYPT KEYWORD' : 'PECAHKAN SANDI'}
      </button>
    </div>
  `;
}

function adjustCipherShift(delta) {
  cipherShift = (cipherShift + delta + 26) % 26;
  playSound('type');
  renderPuzzle1UI(document.getElementById('puzzle-interactive-container'));
}

function decodeCaesar(str, shift) {
  return str.split('').map(c => {
    const code = c.charCodeAt(0);
    if (code >= 65 && code <= 90) {
      return String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);
    }
    return c;
  }).join('');
}

function submitPuzzle1() {
  const decoded = decodeCaesar("VHWDJDBD", cipherShift);
  if (decoded === 'SETAGAYA') {
    playSound('chime');
    showToast('Sandi Terpecahkan: SETAGAYA!');
    closePuzzleModal();
    goToStoryNode('c1_post_puzzle1');
  } else {
    playSound('sting');
    showToast('Sandi masih belum tepat. Terus geser roda pergeseran!');
  }
}

// Puzzle 2 UI
function renderPuzzle2UI(container) {
  const displayStr = safeEnteredCode.padEnd(4, '_').split('').join(' ');
  container.innerHTML = `
    <div class="safe-display-screen" style="text-align: center; font-size: 2.2rem; letter-spacing: 8px; font-family: monospace; padding: 1rem; border: 2px solid var(--border-gold); background: #070a10; color: #4ade80; margin-bottom: 1.5rem; border-radius: 6px;">
      ${displayStr}
    </div>
    <div class="numpad-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.6rem; max-width: 240px; margin: 0 auto;">
      <button class="numpad-btn" onclick="pressSafeDigit('1')">1</button>
      <button class="numpad-btn" onclick="pressSafeDigit('2')">2</button>
      <button class="numpad-btn" onclick="pressSafeDigit('3')">3</button>
      <button class="numpad-btn" onclick="pressSafeDigit('4')">4</button>
      <button class="numpad-btn" onclick="pressSafeDigit('5')">5</button>
      <button class="numpad-btn" onclick="pressSafeDigit('6')">6</button>
      <button class="numpad-btn" onclick="pressSafeDigit('7')">7</button>
      <button class="numpad-btn" onclick="pressSafeDigit('8')">8</button>
      <button class="numpad-btn" onclick="pressSafeDigit('9')">9</button>
      <button class="numpad-btn" style="color: var(--crimson);" onclick="clearSafeDigits()">C</button>
      <button class="numpad-btn" onclick="pressSafeDigit('0')">0</button>
      <button class="numpad-btn" style="color: var(--green);" onclick="submitPuzzle2()">➔</button>
    </div>
  `;
}

function pressSafeDigit(d) {
  if (safeEnteredCode.length < 4) {
    safeEnteredCode += d;
    playSound('type');
    renderPuzzle2UI(document.getElementById('puzzle-interactive-container'));
  }
}

function clearSafeDigits() {
  safeEnteredCode = '';
  playSound('type');
  renderPuzzle2UI(document.getElementById('puzzle-interactive-container'));
}

function submitPuzzle2() {
  if (safeEnteredCode === '1981') {
    playSound('chime');
    showToast('Brankas Terbuka: Tahun 1981 (Setiabudi 13)!');
    safeEnteredCode = '';
    closePuzzleModal();
    goToStoryNode('c3_safe_opened');
  } else {
    playSound('sting');
    triggerScreenShake();
    showToast('Kombinasi Salah! Periksa kliping koran Setiabudi 13.');
    safeEnteredCode = '';
    renderPuzzle2UI(document.getElementById('puzzle-interactive-container'));
  }
}

// Puzzle 3 UI
function renderPuzzle3UI(container) {
  container.innerHTML = `
    <div style="text-align: center; margin-bottom: 1.5rem;">
      <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">DIAL FREKUENSI GELOMBANG AKUSTIK</div>
      <div style="font-size: 1.8rem; font-weight: 700; color: var(--gold); letter-spacing: 6px;">
        ${circuitDials[0]} - ${circuitDials[1]} - ${circuitDials[2]}
      </div>
    </div>
    <div style="display: flex; justify-content: center; gap: 1.5rem; margin-bottom: 2rem;">
      ${[0, 1, 2].map(idx => `
        <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
          <button class="numpad-btn" style="padding: 0.5rem 1rem;" onclick="rotateCircuitDial(${idx}, 1)">▲</button>
          <div style="font-size: 1.8rem; font-weight: 700; color: #fff; width: 45px; height: 45px; display: flex; align-items: center; justify-content: center; border: 1px solid var(--border-gold); border-radius: 50%; background: #0c1017;">
            ${circuitDials[idx]}
          </div>
          <button class="numpad-btn" style="padding: 0.5rem 1rem;" onclick="rotateCircuitDial(${idx}, -1)">▼</button>
        </div>
      `).join('')}
    </div>
    <div style="display: flex; justify-content: center;">
      <button class="slot-btn" style="background: var(--gold); color: #000; font-weight: 700; padding: 0.8rem 2.5rem;" onclick="submitPuzzle3()">
        ${currentLang === 'en' ? 'UNLOCK CONTAINER' : 'BUKA KONTAINER'}
      </button>
    </div>
  `;
}

function rotateCircuitDial(dialIdx, delta) {
  circuitDials[dialIdx] = ((circuitDials[dialIdx] - 1 + delta + 5) % 5) + 1;
  playSound('type');
  renderPuzzle3UI(document.getElementById('puzzle-interactive-container'));
}

function submitPuzzle3() {
  if (circuitDials[0] === 1 && circuitDials[1] === 3 && circuitDials[2] === 2) {
    playSound('chime');
    showToast('Kunci Frekuensi Cocok! Kontainer Terbuka.');
    closePuzzleModal();
    goToStoryNode('c4_container_opened');
  } else {
    playSound('sting');
    triggerScreenShake();
    showToast('Frekuensi tidak selaras dengan lonceng kabut (1 - 3 - 2)!');
  }
}

// ==========================================
// SAVE / LOAD SYSTEM (5 SLOTS + 1 AUTOSAVE)
// ==========================================
function getSaves() {
  try {
    return JSON.parse(localStorage.getItem('araluna_saves') || '{}');
  } catch (e) {
    return {};
  }
}

function saveGameSlot(slotKey) {
  const saves = getSaves();
  const info = CHAPTER_INFO[gameState.chapter];
  const chapTitle = info ? (info.title[currentLang] || info.title['id']) : `Bab ${gameState.chapter}`;

  saves[slotKey] = {
    slot: slotKey,
    type: slotKey === 'auto' ? 'auto' : 'manual',
    chapter: gameState.chapter,
    nodeId: gameState.currentNode,
    chapterTitle: chapTitle,
    cluesCount: gameState.clues.length,
    clues: [...gameState.clues],
    deductions: [...gameState.deductions],
    focus: gameState.focus,
    flags: { ...gameState.flags },
    playerName: gameState.playerName,
    language: currentLang,
    timestamp: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };

  localStorage.setItem('araluna_saves', JSON.stringify(saves));
  showToast(slotKey === 'auto' ? 'Autosave Berhasil Disimpan' : `Kasus Disimpan di Slot ${slotKey}`);
  updateContinueButtonStatus();
}

function loadGameSlot(slotKey) {
  const saves = getSaves();
  const save = saves[slotKey];
  if (!save) {
    showToast('Slot kosong!');
    return;
  }

  gameState.chapter = save.chapter;
  gameState.currentNode = save.nodeId;
  gameState.clues = [...save.clues];
  gameState.deductions = [...save.deductions];
  gameState.focus = save.focus;
  gameState.flags = { ...save.flags };
  gameState.playerName = save.playerName;

  if (save.language && I18N[save.language]) {
    setLanguage(save.language);
  }

  updateChapterNavigationUI();
  updateEvidenceInventory();
  renderDeductionTray();
  updateDeductionHistory();

  document.getElementById('saveload-modal').classList.remove('active');
  document.getElementById('main-menu-screen').classList.add('hidden');

  goToStoryNode(save.nodeId);
  playSound('chime');
  showToast(`Kasus Dimuat dari Slot ${slotKey}`);
}

function deleteGameSlot(slotKey) {
  const saves = getSaves();
  delete saves[slotKey];
  localStorage.setItem('araluna_saves', JSON.stringify(saves));
  renderSaveSlotsModal(currentSaveModalMode);
  updateContinueButtonStatus();
  showToast(`Slot ${slotKey} Dihapus`);
}

function openSaveLoadModal(mode) {
  currentSaveModalMode = mode;
  const modal = document.getElementById('saveload-modal');
  const title = document.getElementById('saveload-modal-title');
  title.textContent = mode === 'save' ? 'SIMPAN KEMAJUAN KASUS' : 'MUAT BERKAS KASUS';
  renderSaveSlotsModal(mode);
  modal.classList.add('active');
}

function closeSaveLoadModal() {
  document.getElementById('saveload-modal').classList.remove('active');
}

function renderSaveSlotsModal(mode) {
  const container = document.getElementById('save-slots-list');
  if (!container) return;
  const saves = getSaves();
  container.innerHTML = '';

  // Slot keys: 'auto', '1', '2', '3', '4', '5'
  const slotKeys = ['auto', '1', '2', '3', '4', '5'];

  slotKeys.forEach(key => {
    const s = saves[key];
    const isAuto = key === 'auto';
    const card = document.createElement('div');
    card.className = 'slot-card';
    if (isAuto) card.classList.add('autosave-slot');

    if (s) {
      card.innerHTML = `
        <div>
          <div class="slot-title">${isAuto ? '⚡ AUTOSAVE (Otomatis)' : `SLOT ${key}`} — ${s.chapterTitle}</div>
          <div class="slot-meta">📅 ${s.timestamp} • 🔍 ${s.cluesCount} Bukti • 🧠 ${s.focus}% Fokus • 👤 ${s.playerName}</div>
        </div>
        <div class="slot-actions">
          ${mode === 'save' && !isAuto ? `<button class="slot-btn" onclick="saveGameSlot('${key}'); renderSaveSlotsModal('save');">💾 Timpa</button>` : ''}
          <button class="slot-btn" onclick="loadGameSlot('${key}')">📂 Muat</button>
          <button class="slot-btn" style="color: var(--crimson);" onclick="deleteGameSlot('${key}')">🗑️</button>
        </div>
      `;
    } else {
      card.innerHTML = `
        <div>
          <div class="slot-title">${isAuto ? '⚡ AUTOSAVE (Kosong)' : `SLOT ${key} — Kosong`}</div>
          <div class="slot-meta">Belum ada berkas tersimpan di slot ini.</div>
        </div>
        <div class="slot-actions">
          ${mode === 'save' && !isAuto ? `<button class="slot-btn" onclick="saveGameSlot('${key}'); renderSaveSlotsModal('save');">💾 Simpan</button>` : ''}
        </div>
      `;
    }
    container.appendChild(card);
  });
}

function updateContinueButtonStatus() {
  const saves = getSaves();
  const btn = document.getElementById('btn-continue-game');
  const sub = document.getElementById('btn-continue-sub');
  if (!btn) return;

  // Search for newest autosave or manual save
  let latest = saves['auto'];
  if (!latest) {
    for (let i = 1; i <= 5; i++) {
      if (saves[i]) {
        latest = saves[i];
        break;
      }
    }
  }

  if (latest) {
    btn.disabled = false;
    if (sub) sub.textContent = `${latest.chapterTitle} (${latest.timestamp})`;
  } else {
    btn.disabled = true;
    if (sub) sub.textContent = currentLang === 'en' ? 'No recent save' : 'Belum ada data simpanan';
  }
}

function loadLatestSaveOrContinue() {
  const saves = getSaves();
  if (saves['auto']) {
    loadGameSlot('auto');
  } else {
    for (let i = 1; i <= 5; i++) {
      if (saves[i]) {
        loadGameSlot(i);
        return;
      }
    }
  }
}

// ==========================================
// CASE LIBRARY (102 CASES FILTERING)
// ==========================================
let currentContinentFilter = 'all';
let currentStatusFilter = 'all';
let currentSearchQuery = '';

function setContinentFilter(region) {
  currentContinentFilter = region;
  document.querySelectorAll('#continent-pills .filter-pill').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('onclick').includes(`'${region}'`));
  });
  filterCases();
}

function setStatusFilter(stat) {
  currentStatusFilter = stat;
  document.querySelectorAll('#status-pills .filter-pill').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('onclick').includes(`'${stat}'`));
  });
  filterCases();
}

function filterCases() {
  const searchInput = document.getElementById('case-search');
  if (searchInput) currentSearchQuery = searchInput.value.toLowerCase().trim();
  renderCaseLibrary();
}

function renderCaseLibrary() {
  const container = document.getElementById('case-grid-container');
  const countEl = document.getElementById('visible-case-count');
  if (!container || !CASE_DATA) return;

  container.innerHTML = '';
  const filtered = CASE_DATA.filter(c => {
    // Continent filter
    if (currentContinentFilter !== 'all' && c.continent !== currentContinentFilter) return false;
    // Status filter
    if (currentStatusFilter !== 'all') {
      const st = (c.status || '').toLowerCase();
      if (currentStatusFilter === 'cold_case' && !st.includes('cold') && !st.includes('tak terpecahkan')) return false;
      if (currentStatusFilter === 'unsolved' && !st.includes('unsolved') && !st.includes('misteri')) return false;
      if (currentStatusFilter === 'controversial' && !st.includes('kontroversial')) return false;
    }
    // Search query
    if (currentSearchQuery) {
      const q = currentSearchQuery;
      const matchName = (c.name || '').toLowerCase().includes(q);
      const matchCountry = (c.country || '').toLowerCase().includes(q);
      const matchVictim = (c.victim || '').toLowerCase().includes(q);
      const matchSummary = (c.summary || '').toLowerCase().includes(q);
      const matchMechanic = (c.game_mechanic || '').toLowerCase().includes(q);
      if (!matchName && !matchCountry && !matchVictim && !matchSummary && !matchMechanic) return false;
    }
    return true;
  });

  if (countEl) countEl.textContent = filtered.length;

  filtered.forEach(c => {
    const card = document.createElement('div');
    card.className = 'case-card';
    card.onclick = () => openDossierModal(c);

    card.innerHTML = `
      <div class="case-card-header">
        <span class="case-id-badge">#${c.id}</span>
        <span class="case-year-tag">${c.year} • ${c.country}</span>
      </div>
      <div class="case-title">${c.name}</div>
      <div class="case-snippet">${c.summary}</div>
      <div class="case-footer">
        <span class="case-status-badge">${c.status}</span>
        <span style="font-size: 0.75rem; color: var(--gold);">Lihat Berkas ➔</span>
      </div>
    `;
    container.appendChild(card);
  });
}

function openDossierModal(c) {
  document.getElementById('modal-dossier-id').textContent = '#' + c.id;
  document.getElementById('modal-dossier-name').textContent = c.name;
  document.getElementById('modal-dossier-loc').textContent = `${c.year} • ${c.country}`;
  document.getElementById('modal-dossier-victim').textContent = c.victim;
  document.getElementById('modal-dossier-suspect').textContent = c.suspect || (currentLang === 'en' ? 'Unidentified / Anonymous' : 'Tidak Teridentifikasi / Anonim');
  document.getElementById('modal-dossier-status').textContent = c.status;
  document.getElementById('modal-dossier-continent').textContent = c.continent;
  document.getElementById('modal-dossier-summary').textContent = c.summary;
  document.getElementById('modal-dossier-mechanic').textContent = c.gameElement || c.game_mechanic || 'Analisis alibi dan deduksi barang bukti.';

  const stampEl = document.getElementById('modal-dossier-stamp');
  if (stampEl) stampEl.textContent = (c.status || 'COLD CASE').toUpperCase();

  const verEl = document.getElementById('modal-dossier-verification');
  if (verEl) {
    if (currentLang === 'en') {
      verEl.textContent = 'Source: Based on general knowledge & historical criminological records';
    } else if (currentLang === 'id_gaul') {
      verEl.textContent = 'Sumber Data: Berdasarkan pengetahuan umum & arsip kasus lama';
    } else {
      verEl.textContent = 'Sumber Data: Berdasarkan pengetahuan umum & catatan historis kriminologi';
    }
  }

  document.getElementById('dossier-modal').classList.add('active');
  playSound('type');
}

function closeDossierModal() {
  document.getElementById('dossier-modal').classList.remove('active');
}

// ==========================================
// HOTSPOTS & SIDEBAR SUSPECTS
// ==========================================
function toggleHotspots() {
  const overlay = document.getElementById('hotspots-overlay');
  const btn = document.getElementById('hotspot-toggle-btn');
  if (!overlay) return;

  const isShowing = overlay.classList.toggle('active');
  if (btn) btn.classList.toggle('active', isShowing);
}

function inspectHotspot(type) {
  const t = I18N[currentLang] || I18N['id'];
  let msg = '';
  if (type === 'desk') {
    msg = currentLang === 'en' ? 'Typewriter platen holds Daniel\'s unfinished exposé on the 20-year surgical syndicate.' : 'Mesin tik memuat draf naskah investigasi Daniel tentang sindikat bedah 20 tahun lalu.';
  } else if (type === 'teacup') {
    msg = currentLang === 'en' ? 'Cold coffee cup on the corner table smelling faintly of pharmaceutical chloral hydrate.' : 'Cangkir kopi dingin berbau samar obat bius klinis kloral hidrat.';
  } else if (type === 'fireplace') {
    msg = currentLang === 'en' ? 'Smoldering ashes and a black wax-sealed letter addressed to Detective Arun.' : 'Abu perapian yang masih hangat dan amplop bersegel lilin hitam untuk Detektif Arun.';
  } else if (type === 'door') {
    msg = currentLang === 'en' ? 'Heavy oak door was unlocked without forced entry marks. The spare key was stolen.' : 'Pintu jati tidak memiliki bekas congkelan. Kunci cadangan rumah telah dicuri sebelumnya.';
  } else if (type === 'clock') {
    msg = currentLang === 'en' ? 'Grandfather clock stopped precisely at 03:15 AM.' : 'Jam pendulum menara berhenti tepat pada pukul 03.15 pagi.';
  }
  showToast(msg);
  playSound('type');
}

function updateEvidenceInventory() {
  const list = document.getElementById('evidence-list-container');
  const badge = document.getElementById('clue-counter-badge');
  const empty = document.getElementById('txt-empty-clues');
  if (!list) return;

  if (badge) badge.textContent = `${gameState.clues.length}/8`;

  if (gameState.clues.length === 0) {
    if (empty) empty.style.display = 'block';
    list.innerHTML = '';
    return;
  }

  if (empty) empty.style.display = 'none';
  list.innerHTML = '';

  gameState.clues.forEach(cid => {
    const c = CLUES_DATA[cid];
    if (!c) return;
    const name = c.name[currentLang] || c.name['id'];
    const desc = c.desc[currentLang] || c.desc['id'];

    const el = document.createElement('div');
    el.className = 'evidence-item';
    el.innerHTML = `
      <div class="evidence-icon">${c.icon}</div>
      <div>
        <div style="font-size: 0.85rem; font-weight: 700; color: var(--gold-light);">${name}</div>
        <div style="font-size: 0.75rem; color: var(--text-muted); line-height: 1.4;">${desc}</div>
      </div>
    `;
    list.appendChild(el);
  });
}

function updateChapterNavigationUI() {
  const chap = gameState.chapter || 1;
  const info = CHAPTER_INFO[chap];
  const chapTitle = info ? (info.title[currentLang] || info.title['id']) : `Bab ${chap}`;
  const locTitle = info ? (info.location[currentLang] || info.location['id']) : '';

  const titleEl = document.getElementById('txt-chap-title');
  const locEl = document.getElementById('scene-location-tag');
  const lblEl = document.getElementById('cur-chap-label');

  if (titleEl) titleEl.textContent = chapTitle;
  if (locEl) locEl.textContent = locTitle;
  if (lblEl) lblEl.textContent = (currentLang === 'en' ? 'CHAPTER ' : 'BAB ') + chap;

  // Chapter buttons 1-4 active states
  [1, 2, 3, 4].forEach(i => {
    const b = document.getElementById(`btn-step-chap${i}`);
    if (b) {
      b.classList.toggle('active', i === chap);
      b.classList.toggle('passed', i < chap);
    }
  });
}

// ==========================================
// VIEWS & SETTINGS
// ==========================================
function switchView(viewName) {
  document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
  document.querySelectorAll('.nav-tab-btn').forEach(btn => btn.classList.remove('active'));

  if (viewName === 'game') {
    document.body.classList.add('in-gameplay');
    document.getElementById('view-game').classList.add('active');
    const navGame = document.getElementById('nav-btn-game');
    if (navGame) navGame.classList.add('active');
  } else {
    document.body.classList.remove('in-gameplay');
    if (viewName === 'library') {
      document.getElementById('view-library').classList.add('active');
      const navLib = document.getElementById('nav-btn-library');
      if (navLib) navLib.classList.add('active');
      renderCaseLibrary();
    } else if (viewName === 'deduction') {
      document.getElementById('view-deduction').classList.add('active');
      const navDed = document.getElementById('nav-btn-deduction');
      if (navDed) navDed.classList.add('active');
      renderDeductionTray();
      updateDeductionSlotsUI();
      updateDeductionHistory();
    }
  }
}

function openSettingsModal() {
  document.getElementById('settings-modal').classList.add('active');
}

function closeSettingsModal() {
  document.getElementById('settings-modal').classList.remove('active');
}

function openCreditsModal() {
  document.getElementById('credits-modal').classList.add('active');
}

function closeCreditsModal() {
  document.getElementById('credits-modal').classList.remove('active');
}

function openBacklogModal() {
  const container = document.getElementById('backlog-container');
  if (!container) return;
  container.innerHTML = '';

  gameState.backlog.forEach(item => {
    const d = document.createElement('div');
    d.innerHTML = `<strong style="color: var(--gold);">${item.speaker}:</strong> <span style="color: #e2e8f0;">${item.text}</span>`;
    container.appendChild(d);
  });

  document.getElementById('backlog-modal').classList.add('active');
}

function closeBacklogModal() {
  document.getElementById('backlog-modal').classList.remove('active');
}

function triggerScreenShake() {
  const card = document.getElementById('stage-card');
  if (!card) return;
  card.classList.remove('shake');
  void card.offsetWidth;
  card.classList.add('shake');
}

function resetAllGameData() {
  if (confirm(currentLang === 'en' ? 'Wipe all saves, checkpoints, and case progress?' : 'Hapus semua data simpanan, checkpoint, dan kemajuan kasus?')) {
    localStorage.removeItem('araluna_saves');
    localStorage.removeItem('araluna_latest_checkpoint');
    localStorage.removeItem('araluna_lang');
    location.reload();
  }
}

// ==========================================
// MULTI-LANGUAGE LIVE ENGINE
// ==========================================
function setLanguage(lang) {
  if (!I18N[lang]) return;
  currentLang = lang;
  localStorage.setItem('araluna_lang', lang);

  const buttons = document.querySelectorAll('#lang-options-row .settings-pill-btn');
  buttons.forEach(b => b.classList.remove('active'));
  if (lang === 'id') buttons[0]?.classList.add('active');
  if (lang === 'en') buttons[1]?.classList.add('active');
  if (lang === 'id_gaul') buttons[2]?.classList.add('active');

  applyLanguage();
}

function applyLanguage() {
  const t = I18N[currentLang] || I18N['id'];

  // UI Texts
  document.getElementById('ui-main-sub').textContent = t.mainSub;
  document.getElementById('btn-new-game').textContent = t.btnNewGame;
  document.getElementById('btn-continue').textContent = t.btnContinue;
  document.getElementById('btn-load-game').textContent = t.btnLoad;
  document.getElementById('btn-library').textContent = t.btnLibrary;
  document.getElementById('btn-settings').textContent = t.btnSettings;
  document.getElementById('btn-credits').textContent = t.btnCredits;
  document.getElementById('btn-reset').textContent = t.btnReset;

  document.getElementById('nav-txt-game').textContent = t.navGame;
  document.getElementById('nav-txt-library').textContent = t.navLibrary;
  document.getElementById('nav-txt-deduction').textContent = t.navDeduction;
  document.getElementById('nav-txt-log').textContent = t.navLog;
  document.getElementById('nav-txt-save').textContent = t.navSave;
  document.getElementById('hotspot-btn-txt').textContent = t.hotspotBtn;
  document.getElementById('ctrl-next').textContent = t.ctrlNext;
  const ctrlSkip = document.getElementById('ctrl-skip');
  if (ctrlSkip) ctrlSkip.textContent = t.ctrlSkip || 'Skip';
  const ctrlLog = document.getElementById('ctrl-log');
  if (ctrlLog) ctrlLog.textContent = t.ctrlLog || 'Log';
  const ctrlDossier = document.getElementById('ctrl-dossier');
  if (ctrlDossier) ctrlDossier.textContent = t.ctrlDossier || 'Dossier';
  const dossierBtn = document.getElementById('dossier-btn-txt');
  if (dossierBtn) dossierBtn.textContent = t.dossierBtnTxt || 'Berkas [D]';
  document.getElementById('ctrl-qsave').textContent = t.ctrlQSave;
  document.getElementById('ctrl-load').textContent = t.ctrlLoad;
  const ctrlCp = document.getElementById('ctrl-checkpoint');
  if (ctrlCp) ctrlCp.textContent = t.ctrlCheckpoint;

  document.getElementById('txt-focus-title').textContent = t.focusTitle;
  document.getElementById('txt-casebook-title').textContent = t.cluesTitle;
  const emptyCluesEl = document.getElementById('txt-empty-clues');
  if (emptyCluesEl) emptyCluesEl.textContent = t.emptyClues;
  document.getElementById('txt-suspects-title').textContent = t.suspectsTitle;

  document.getElementById('deduct-title').textContent = t.deductTitle;
  document.getElementById('deduct-sub').textContent = t.deductSub;
  document.getElementById('btn-synthesize').textContent = t.btnSynthesize;
  document.getElementById('txt-tray-title').textContent = t.trayTitle;
  document.getElementById('txt-history-title').textContent = t.historyTitle;

  document.getElementById('lib-title').textContent = t.libTitle;
  document.getElementById('lib-sub').textContent = t.libSub;
  document.getElementById('txt-showing').textContent = t.showing;
  document.getElementById('txt-of-total').textContent = t.ofTotal;
  document.getElementById('txt-card-click-hint').textContent = t.cardClickHint;
  document.getElementById('filter-reg-title').textContent = t.filterReg;
  document.getElementById('filter-stat-title').textContent = t.filterStat;

  updateTimerDisplay();
  updateChapterNavigationUI();
  updateEvidenceInventory();
  renderDeductionTray();
  updateDeductionHistory();
  renderCaseLibrary();
  renderSidebarSuspects();
  updateContinueButtonStatus();
  const lblVoice = document.getElementById('m-set-lbl-voice');
  if (lblVoice) lblVoice.textContent = t.lblVoiceStyle || 'GAYA SUARA BICARA KARAKTER (DIALOGUE VOCALIZATION):';
  updateVoiceStyleButtons();

  // Instant refresh of current dialogue without restart
  if (STORY_NODES[gameState.currentNode]) {
    renderStoryNode(STORY_NODES[gameState.currentNode], true);
  }
}


// ==========================================
// HTML5 FULLSCREEN API & IMMERSIVE DISPLAY
// ==========================================
function isFullscreenActive() {
  return !!(
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement
  );
}

function enterFullscreen() {
  const el = document.documentElement;
  try {
    if (!isFullscreenActive()) {
      if (el.requestFullscreen) {
        el.requestFullscreen().catch(() => {});
      } else if (el.webkitRequestFullscreen) {
        el.webkitRequestFullscreen();
      } else if (el.mozRequestFullScreen) {
        el.mozRequestFullScreen();
      } else if (el.msRequestFullscreen) {
        el.msRequestFullscreen();
      }
    }
  } catch (err) {
    // Graceful fallback
  }
}

function exitFullscreen() {
  try {
    if (isFullscreenActive()) {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  } catch (err) {
    // Graceful fallback
  }
}

function toggleFullscreen() {
  if (isFullscreenActive()) {
    exitFullscreen();
  } else {
    enterFullscreen();
  }
}

function updateFullscreenUI() {
  const isFs = isFullscreenActive();
  document.body.classList.toggle('is-fullscreen-mode', isFs);

  // Update Ren'Py quick bar button
  const quickBtn = document.getElementById('btn-quick-fullscreen');
  if (quickBtn) {
    const icon = quickBtn.querySelector('.fs-icon');
    const text = quickBtn.querySelector('.fs-text');
    if (icon) icon.textContent = isFs ? '🗗' : '⛶';
    if (text) text.textContent = isFs ? 'WINDOW' : 'FULL';
  }

  // Update floating button
  const floatBtn = document.getElementById('floating-fullscreen-btn');
  if (floatBtn) {
    const floatIcon = floatBtn.querySelector('.fs-float-icon');
    const floatText = floatBtn.querySelector('.fs-float-label');
    if (floatIcon) floatIcon.textContent = isFs ? '🗗' : '⛶';
    if (floatText) floatText.textContent = isFs ? 'WINDOW' : 'FULLSCREEN';
  }

  // Update main menu indicator
  const menuFsInd = document.getElementById('btn-menu-fs-indicator');
  if (menuFsInd) {
    menuFsInd.textContent = isFs ? 'ON' : 'OFF';
  }

  // Update settings modal toggle
  const settingsBtn = document.getElementById('btn-set-fullscreen-toggle');
  if (settingsBtn) {
    settingsBtn.textContent = isFs 
      ? (currentLang === 'en' ? '🗗 Exit Fullscreen (Windowed)' : '🗗 Keluar Fullscreen (Mode Jendela)')
      : (currentLang === 'en' ? '⛶ Enter Fullscreen [F]' : '⛶ Masuk Layar Penuh (Fullscreen) [F]');
    settingsBtn.classList.toggle('active', isFs);
  }
}

document.addEventListener('fullscreenchange', updateFullscreenUI);
document.addEventListener('webkitfullscreenchange', updateFullscreenUI);
document.addEventListener('mozfullscreenchange', updateFullscreenUI);
document.addEventListener('MSFullscreenChange', updateFullscreenUI);

// Start New Game
function startNewGame() {
  gameState = {
    chapter: 1,
    currentNode: 'c1_start',
    currentScene: 'story',
    focus: 15,
    playerName: 'Detektif Arun',
    clues: [],
    deductions: [],
    flags: {},
    backlog: [],
    selectedSlotA: null,
    selectedSlotB: null
  };

  initProceduralRain();
  document.getElementById('main-menu-screen').classList.add('hidden');
  switchView('game');
  enterFullscreen();
  updateChapterNavigationUI();
  updateEvidenceInventory();
  updateFocusBar();
  goToStoryNode('c1_start');
}

function interrogateSuspect(suspectId) {
  const s = SUSPECTS_DATA[suspectId];
  if (!s) return;
  const desc = s.desc[currentLang] || s.desc['id'];

  if (gameState.chapter === 2) {
    if (suspectId === 'mira') {
      goToStoryNode('c2_interrogate_mira');
      return;
    } else if (suspectId === 'brama') {
      goToStoryNode('c2_interrogate_brama');
      return;
    } else if (suspectId === 'sena') {
      goToStoryNode('c2_sena_toxicology');
      return;
    } else if (suspectId === 'reyn') {
      goToStoryNode('c2_confront_reyn');
      return;
    }
  }

  showToast(`${s.name}: ${desc}`);
  playSound('type');
}

// ==========================================
// COMPREHENSIVE CONTROLS, SHORTCUTS & CANVAS
// ==========================================
let isAutoPlay = false;
let autoPlayTimer = null;

function continueGame() {
  enterFullscreen();
  loadLatestSaveOrContinue();
}

function openCaseLibraryFromMenu() {
  document.getElementById('main-menu-screen').classList.add('hidden');
  switchView('library');
}

function confirmResetAllData() {
  resetAllGameData();
}

function returnToMainMenu() {
  document.body.classList.remove('in-gameplay');
  document.getElementById('main-menu-screen').classList.remove('hidden');
  updateContinueButtonStatus();
}

function toggleDossierDrawer(forceState) {
  const drawer = document.getElementById('sidebar-casebook');
  const backdrop = document.getElementById('dossier-backdrop');
  if (!drawer) return;

  const isOpen = drawer.classList.contains('drawer-open');
  const shouldOpen = forceState !== undefined ? forceState : !isOpen;

  if (shouldOpen) {
    drawer.classList.add('drawer-open');
    if (backdrop) backdrop.classList.add('active');
    playSound('type');
  } else {
    drawer.classList.remove('drawer-open');
    if (backdrop) backdrop.classList.remove('active');
  }
}


function rollbackDialogue() {
  if (!gameState.historyStack || gameState.historyStack.length === 0) {
    showToast(currentLang === 'en' ? 'At start of current scene.' : 'Sudah di awal adegan.');
    return;
  }
  const prevNodeId = gameState.historyStack.pop();
  playSound('type');
  goToStoryNode(prevNodeId, true);
}

function skipToNextChoice() {
  const node = STORY_NODES[gameState.currentNode];
  if (!node) return;
  if (!node.choices || node.choices.length === 0) return;

  if (node.choices.length === 1) {
    playSound('type');
    goToStoryNode(node.choices[0].nextNode, true);
  } else {
    showToast(currentLang === 'en' ? 'Choice required to proceed!' : 'Pilihan diperlukan untuk lanjut!');
    const container = document.getElementById('choice-container');
    if (container) {
      container.classList.add('shake');
      setTimeout(() => container.classList.remove('shake'), 400);
    }
  }
}

function advanceDialogue() {
  const textEl = document.getElementById('dialogue-text');
  const node = STORY_NODES[gameState.currentNode];
  if (!node) return;

  const rawText = node.text[currentLang] || node.text['id'];

  // If text is still typing, finish immediately
  const cleanCurrent = (textEl.textContent || '').replace('▼', '').trim();
  if (cleanCurrent.length < rawText.trim().length) {
    clearTimeout(typingTimer);
    clearInterval(typingTimer);
    textEl.innerHTML = escapeHtml(rawText) + ' <span class="renpy-advance-chevron">▼</span>';
    renderChoices(node.choices);
    if (typeof checkAutoPlayNext === 'function') checkAutoPlayNext();
    return;
  }

  // If already finished typing and exactly 1 choice exists, advance automatically
  if (node.choices && node.choices.length === 1) {
    playSound('sting');
    goToStoryNode(node.choices[0].nextNode);
  } else if (node.choices && node.choices.length > 1) {
    const container = document.getElementById('choice-container');
    if (container) {
      container.classList.add('shake');
      setTimeout(() => container.classList.remove('shake'), 400);
    }
  }
}

function toggleAutoPlay() {
  isAutoPlay = !isAutoPlay;
  const statusEl = document.getElementById('auto-status');
  if (statusEl) {
    statusEl.textContent = isAutoPlay ? (currentLang === 'en' ? 'ON' : 'Aktif') : (currentLang === 'en' ? 'OFF' : 'Mati');
    statusEl.style.color = isAutoPlay ? 'var(--green)' : 'var(--text-muted)';
  }
  showToast(isAutoPlay ? 'Auto-play Aktif' : 'Auto-play Dimatikan');

  if (isAutoPlay) {
    checkAutoPlayNext();
  } else {
    clearTimeout(autoPlayTimer);
  }
}

function checkAutoPlayNext() {
  if (!isAutoPlay) return;
  clearTimeout(autoPlayTimer);
  autoPlayTimer = setTimeout(() => {
    if (!isAutoPlay) return;
    const node = STORY_NODES[gameState.currentNode];
    if (node && node.choices && node.choices.length === 1) {
      goToStoryNode(node.choices[0].nextNode);
    }
  }, 2400);
}

function quickSaveGame() {
  saveGameSlot('1');
}

function switchChapter(targetChap) {
  if (targetChap <= gameState.chapter) {
    const chapNodes = {
      1: 'c1_start',
      2: 'c2_start',
      3: 'c3_start',
      4: 'c4_start'
    };
    if (chapNodes[targetChap]) {
      goToStoryNode(chapNodes[targetChap]);
      showToast(`Meninjau Bab ${targetChap}`);
    }
  } else {
    showToast(currentLang === 'en' ? 'Chapter locked. Advance the investigation first!' : 'Bab ini masih terkunci. Selesaikan bab sebelumnya!');
  }
}

function clearSlot(slot) {
  if (slot === 'a') {
    gameState.selectedSlotA = null;
  } else if (slot === 'b') {
    gameState.selectedSlotB = null;
  }
  updateDeductionSlotsUI();
  renderDeductionTray();
  playSound('type');
}

function synthesizeDeduction() {
  synthesizeDeductions();
}

function closeModalOnBackdrop(e) {
  if (e && e.target && e.target.classList.contains('modal-backdrop')) {
    e.target.classList.remove('active');
  }
}

function setTextSpeed(speedVal) {
  if (speedVal === 'slow') textSpeed = 42;
  else if (speedVal === 'fast') textSpeed = 8;
  else textSpeed = 22; // normal

  const btns = document.querySelectorAll('#text-speed-row .settings-pill-btn');
  btns.forEach(b => b.classList.remove('active'));
  if (speedVal === 'slow' && btns[0]) btns[0].classList.add('active');
  if (speedVal === 'normal' && btns[1]) btns[1].classList.add('active');
  if (speedVal === 'fast' && btns[2]) btns[2].classList.add('active');

  showToast(`Kecepatan Teks: ${speedVal.toUpperCase()}`);
}

// ==========================================
// DYNAMIC NOIR RAIN PARTICLE SYSTEM
// ==========================================
function initRainCanvas(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  function resize() {
    canvas.width = canvas.parentElement ? canvas.parentElement.clientWidth : window.innerWidth;
    canvas.height = canvas.parentElement ? canvas.parentElement.clientHeight : window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const dropCount = 60;
  const drops = [];
  for (let i = 0; i < dropCount; i++) {
    drops.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      len: 12 + Math.random() * 16,
      speed: 12 + Math.random() * 14,
      opacity: 0.15 + Math.random() * 0.25
    });
  }

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.35)';
    ctx.lineWidth = 1;

    for (let i = 0; i < drops.length; i++) {
      const d = drops[i];
      ctx.beginPath();
      ctx.moveTo(d.x, d.y);
      ctx.lineTo(d.x + 1.2, d.y + d.len);
      ctx.stroke();

      d.y += d.speed;
      d.x += 0.8;
      if (d.y > canvas.height) {
        d.y = -d.len;
        d.x = Math.random() * canvas.width;
      }
    }
    requestAnimationFrame(render);
  }
  render();
}

// Keyboard shortcuts for detective navigation & visual novel controls
window.addEventListener('keydown', (e) => {
  const activeModal = document.querySelector('.modal-backdrop.active');
  const drawer = document.getElementById('sidebar-casebook');
  const isDrawerOpen = drawer && drawer.classList.contains('drawer-open');
  const isInput = ['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName);

  if (e.code === 'Space') {
    if (!activeModal && !isInput) {
      e.preventDefault();
      advanceDialogue();
    }
  } else if (e.code === 'Escape') {
    if (activeModal) {
      document.querySelectorAll('.modal-backdrop.active').forEach(m => m.classList.remove('active'));
    }
    if (isDrawerOpen) {
      toggleDossierDrawer(false);
    }
  } else if ((e.code === 'ArrowLeft' || e.code === 'PageUp') && !isInput && !activeModal && !isDrawerOpen) {
    e.preventDefault();
    rollbackDialogue();
  } else if ((e.key === 'd' || e.key === 'D' || e.key === 'Tab') && !isInput && !activeModal) {
    e.preventDefault();
    toggleDossierDrawer();
  } else if ((e.key === 'f' || e.key === 'F' || e.key === 'F11') && !isInput && !activeModal) {
    e.preventDefault();
    toggleFullscreen();
  } else if ((e.key === 'l' || e.key === 'L') && !isInput && !activeModal) {
    openBacklogModal();
  } else if (e.key >= '1' && e.key <= '4' && !isInput && !activeModal) {
    const choices = document.querySelectorAll('#choice-container .choice-btn');
    const idx = parseInt(e.key) - 1;
    if (choices[idx]) {
      choices[idx].click();
    }
  }
});

// Initialize on DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('araluna_lang');
  if (savedLang && I18N[savedLang]) {
    currentLang = savedLang;
  }
  applyLanguage();
  renderSidebarSuspects();
  updateContinueButtonStatus();
  updateChapterNavigationUI();
  updateEvidenceInventory();
  renderCaseLibrary();
  initRainCanvas('menu-rain-canvas');
  initRainCanvas('rain-canvas');

  // Trigger procedural audio on first interaction (respects browser policy)
  const triggerAudio = () => {
    initAudioEngine();
    window.removeEventListener('click', triggerAudio);
    window.removeEventListener('keydown', triggerAudio);
    window.removeEventListener('touchstart', triggerAudio);
  };
  window.addEventListener('click', triggerAudio, { once: true });
  window.addEventListener('keydown', triggerAudio, { once: true });
  window.addEventListener('touchstart', triggerAudio, { once: true });
});


