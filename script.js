/* ============================================================
   MUSFIRA'S BIRTHDAY CARD — script.js
   ============================================================ */
(function () {
  "use strict";

  var scene    = document.getElementById("cardScene");
  var front    = document.getElementById("cardFront");
  var back     = document.getElementById("cardBack");
  var closeBtn = document.getElementById("closeBtn");
  var slides   = document.getElementById("duaSlides");
  var prevBtn  = document.getElementById("duaPrev");
  var nextBtn  = document.getElementById("duaNext");
  var dots     = document.querySelectorAll(".dua-dot");

  var currentDua = 0;
  var totalDuas  = dots.length; // 5

  /* ── Card flip ─────────────────────────────────────────── */
  function openCard() {
    scene.classList.add("is-open");
    scene.setAttribute("aria-pressed", "true");
    scene.setAttribute("aria-label", "Birthday card is open. Press Escape to close.");
    front.setAttribute("aria-hidden", "true");
    back.setAttribute("aria-hidden", "false");
    // Move focus inside after flip animation completes
    setTimeout(function () {
      var first = back.querySelector("button");
      if (first) first.focus({ preventScroll: true });
    }, 900);
  }

  function closeCard() {
    scene.classList.remove("is-open");
    scene.setAttribute("aria-pressed", "false");
    scene.setAttribute("aria-label", "Birthday card for Musfira. Press Enter or Space to open.");
    front.setAttribute("aria-hidden", "false");
    back.setAttribute("aria-hidden", "true");
    back.scrollTop = 0;
    scene.focus();
  }

  // Click front to open
  scene.addEventListener("click", function () {
    if (!scene.classList.contains("is-open")) openCard();
  });

  // Close button
  closeBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    closeCard();
  });

  // Keyboard: Enter / Space / Escape on card scene
  scene.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      scene.classList.contains("is-open") ? closeCard() : openCard();
    }
    if (e.key === "Escape" && scene.classList.contains("is-open")) {
      closeCard();
    }
  });

  // Prevent back-face clicks from bubbling to scene
  back.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  /* ── Dua Carousel ──────────────────────────────────────── */
  function goToDua(index) {
    if (index < 0)          index = totalDuas - 1;
    if (index >= totalDuas) index = 0;
    currentDua = index;
    slides.style.transform = "translateX(-" + (currentDua * 100) + "%)";

    // Update dots
    dots.forEach(function (dot, i) {
      var isActive = i === currentDua;
      dot.classList.toggle("active", isActive);
      dot.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    // Hide non-visible cards from screen readers
    var cards = slides.querySelectorAll(".dua-card");
    cards.forEach(function (card, i) {
      card.setAttribute("aria-hidden", i !== currentDua ? "true" : "false");
    });
  }

  prevBtn.addEventListener("click", function (e) { e.stopPropagation(); goToDua(currentDua - 1); });
  nextBtn.addEventListener("click", function (e) { e.stopPropagation(); goToDua(currentDua + 1); });

  dots.forEach(function (dot, i) {
    dot.addEventListener("click", function (e) { e.stopPropagation(); goToDua(i); });
  });

  /* Touch swipe on dua track */
  var track  = document.getElementById("duaTrack");
  var startX = 0;
  if (track) {
    track.addEventListener("touchstart", function (e) {
      startX = e.changedTouches[0].clientX;
    }, { passive: true });
    track.addEventListener("touchend", function (e) {
      var diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) {
        goToDua(diff > 0 ? currentDua + 1 : currentDua - 1);
      }
    }, { passive: true });
  }

  // Initialise carousel
  goToDua(0);

})();
