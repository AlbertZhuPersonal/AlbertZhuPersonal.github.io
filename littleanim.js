var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<a class='anim' href='https://github.com/theGitHubDude' target='_blank'><span class='letter'>$&</span></a>");

anime.timeline({loop: true})
  .add({
  target: '.ml6',
  duration: 1850
})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
  opacity: 1,
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000000
  });