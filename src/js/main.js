jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.2
});

var typed = new Typed('.herotext',{
    strings:["We are good students", "We are great students"],
    backSpeed: 80,
    typeSpeed: 80,
    loop: true,
    shuffle: true
  });

  document.getElementById('sosmed-ig').onclick = function () {
      window.open("https://instagram.com/mipan.smanega", "_blank")
  }