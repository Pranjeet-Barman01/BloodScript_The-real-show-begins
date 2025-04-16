document.getElementById('summonBtn').addEventListener('click', startRitual);

function startRitual() {
  // Play scream sound before the jumpscare video starts
  const screamSound = new Audio('assets/sound/scream.mp3');
  screamSound.play();

  const jumpscare = document.createElement('video');
  jumpscare.src = 'assets/videos/jumpscare.mp4';
  jumpscare.autoplay = true;
  jumpscare.muted = false;
  jumpscare.playsInline = true;
  jumpscare.classList.add('fullscreen-video');
  jumpscare.onended = playAnalog;
  document.body.appendChild(jumpscare);
}

function playAnalog() {
  const jumpscare = document.querySelector('video');
  if (jumpscare) document.body.removeChild(jumpscare);

 

  const analog = document.createElement('video');
  analog.src = 'assets/videos/analog.mp4';
  analog.autoplay = true;
  analog.muted = false;
  analog.playsInline = true;
  analog.classList.add('fullscreen-video');
  analog.onended = showError;
  document.body.appendChild(analog);
}

function showError() {
  const analog = document.querySelector('video');
  if (analog) document.body.removeChild(analog);

  const overlay = document.createElement('div');
  overlay.classList.add('error-overlay');
  overlay.innerHTML = `
    <div>This page attracts evil power 😈</div>
    <div class="error-options">
      <button onclick="showRitual()">Proceed to Summon the Ritual</button>
      <button onclick="goBack()">Go Back and Die</button>
    </div>
  `;
  document.body.appendChild(overlay);
}

function showRitual() {
  document.querySelector('.error-overlay').remove();

  // Show curse loading animation
  const curseLoading = document.createElement('div');
  curseLoading.classList.add('curse-loading');
  curseLoading.textContent = 'Summoning the Curse...';
  document.body.appendChild(curseLoading);

  // Play another scream when ritual starts
  const ritualScream = new Audio('assets/sound/scream.mp3');
  ritualScream.play();

  setTimeout(() => {
    curseLoading.remove(); // Remove loading animation after 3 seconds

    const ritualContent = document.createElement('div');
    ritualContent.classList.add('ritual-content');
    ritualContent.innerHTML = `
      <h2>🔮 Blood Ritual of Shadows</h2>
      <p>Whisper the name of the forgotten. 🔥</p>
      <p>Draw a circle with the ashes of midnight...</p>
      <p>Step inside. Speak the final phrase: <em>"Et lux in tenebris"</em>.</p>
      <p>Let the void answer.</p>
    `;
    document.body.appendChild(ritualContent);
    ritualContent.style.display = 'block';
  }, 3000);
}

function goBack() {
  document.querySelector('.error-overlay').remove();

  const error = document.createElement('div');
  error.classList.add('error-overlay');
  error.innerHTML = `
    <div style="color: white; background: darkred; padding: 30px; border-radius: 10px;">
      <h2>⚠️ Windows Error</h2>
      <p>You are going to die. Be ready...</p>
      <p>Because you broke the rules of the ritual summon process.</p>
    </div>
  `;
  document.body.appendChild(error);

  // Play scream sound when user goes back
  const goBackScream = new Audio('assets/sound/scream.mp3');
  goBackScream.play();
}
