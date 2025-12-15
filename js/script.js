const stageText = document.getElementById("stageText");
const heartsEl = document.getElementById("hearts");
const photoEl = document.getElementById("photo");
const music = document.getElementById("bg-music");
const tapEl = document.getElementById("tap");

// ===== CÁC GIAI ĐOẠN HIỂN THỊ =====
const stages = [
  { text: "3", time: 1000, bg: "bg-countdown", class: "text" },
  { text: "2", time: 1000, bg: "bg-countdown", class: "text" },
  { text: "1", time: 1000, bg: "bg-countdown", class: "text" },

  {
    text: "Happy Birthday to You 🎉",
    time: 1500,
    bg: "bg-birthday",
    music: true,
    hearts: true,
    class: "text"
  },

  {
    text: "Chúc bạn luôn mạnh khỏe, nhiều niềm vui và thành công trong cuộc sống 💖",
    time: 3000,
    class: "final-text"
  },

  {
    text: "Mong rằng mọi điều tốt đẹp nhất sẽ đến với bạn trong tuổi mới ✨",
    time: 3200,
    class: "final-text"
  }
];

let step = 0;
let started = false;

// ===== CLICK MỞ QUÀ =====
tapEl.addEventListener("click", () => {
  if (started) return;
  started = true;

  tapEl.style.display = "none";
  document.body.className = "bg-countdown";

  nextStage();
}, { once: true });

// ===== CHUYỂN STAGE MƯỢT =====
function nextStage() {
  if (step >= stages.length) {
    showFinal();
    return;
  }

  const current = stages[step];

  // Ẩn nhẹ stage trước
  stageText.classList.add("hidden");

  // Khoảng đệm giúp mượt
  setTimeout(() => {

    if (current.bg) {
      document.body.className = current.bg;
    }

    stageText.className = current.class;
    stageText.textContent = current.text;
    stageText.classList.remove("hidden");

    if (current.music) music.play();
    if (current.hearts) showHearts();

    // Giữ trên màn hình
    setTimeout(() => {
      step++;
      nextStage();
    }, current.time);

  }, 300);
}

// ===== TIM BAY =====
function showHearts() {
  heartsEl.classList.remove("hidden");

  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (2 + Math.random() * 3) + "s";
    heartsEl.appendChild(heart);
  }
}

// ===== ẢNH + CHỮ CUỐI =====
function showFinal() {
  stageText.classList.add("hidden");
  photoEl.classList.remove("hidden");
}
