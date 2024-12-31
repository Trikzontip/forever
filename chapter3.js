document.addEventListener("DOMContentLoaded", () => {
    const dares = [
      "Sing a song!",
      "Dance for 1 minute!",
      "Act like a chicken!",
      "Tell a funny joke!",
      "Do 10 push-ups!",
      "Imitate your favorite celebrity!",
      "Call someone and confess your love!",
      "Eat a raw lemon slice!",
      "Do a silly walk across the room!",
      "Spin 5 times and walk straight!",
      "Pretend to be a robot!",
      "Try to lick your elbow!",
      "Make a silly face and hold it for 10 seconds!",
      "Say the alphabet backward!",
      "Do your best animal impression!"
    ];
  
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
      const dare = dares[index];
      card.dataset.dare = dare;
      card.querySelector(".card-back").textContent = dare;
    });
  });
  