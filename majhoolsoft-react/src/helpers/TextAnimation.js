import anime from "animejs";
function TextAnimation(
  target,
  delay = 1_000,
  typeSpeed = 250,
  displayDuration = 5000
) {
  const element = document.querySelector(target);
  const lettersHtml = element.textContent.replace(
    /\S/g,
    '<span class="letter">$&</span>'
  );
  element.innerHTML = `<div class="letters">${lettersHtml}</div><span class="cursor"></span>`;
  element.style.display = "block";

  const letters = Array.from(element.querySelectorAll(".letter"));
  const TYPE_AFTER_MS = delay;
  const JUMP_AFTER_MS = typeSpeed;

  const blink = anime({
    targets: `${target} .cursor`,
    loop: true,
    duration: 750,
    opacity: [{ value: [1, 1] }, { value: [0, 0] }],
  });

  anime
    .timeline({ loop: false })
    .add(
      {
        targets: `${target} .cursor`,
        translateX: letters.map((letter, i) => ({
          value: letter.offsetLeft + letter.offsetWidth,
          duration: 1,
          delay: i === 0 ? 0 : JUMP_AFTER_MS,
        })),
      },
      TYPE_AFTER_MS
    )
    .add(
      {
        targets: `${target} .letter `,
        opacity: [0, 1],
        duration: 1,
        delay: anime.stagger(JUMP_AFTER_MS),
        changeBegin: () => {
          blink.reset();
          blink.pause();
        },
        changeComplete: () => {
          blink.restart();
        },
      },
      TYPE_AFTER_MS
    )
    .add(
      {
        targets: target,
        opacity: 0,
        duration: 5000,
        easing: "easeOutExpo",
      },
      displayDuration
    );
}
export default TextAnimation;
