jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.64111111
});

var typed = new Typed('.herotext',{
    strings:["We are good students", "We are great students"],
    backSpeed: 40,
    typeSpeed: 70,
    loop: true,
    shuffle: true,
    showCursor: false
  });

  document.getElementById('sosmed-ig').onclick = function () {
      window.open("https://instagram.com/mipan.smanega", "_blank")
  }

  //development
  const kocak = document.getElementById('jadwal').innerHTML
  for (let h = 0; h < 7; h++) {
      
  document.getElementById('jadwal').innerHTML += kocak;

  }