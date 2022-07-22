const schedule = {
  "Senin": [
    "-----",
    "Bahasa Prancis",
    "Bahasa Prancis",
    "Agama",
    "Agama",
    "Agama",
    "Sejarah",
    "Sejarah",
    "Seni Budaya",
    "Seni Budaya"
    ],
"Selasa": [
  "Kimia",
  "Kimia",
  "Matematika (W)",
  "Matematika (W)",
  "Fisika",
  "Fisika",
  "Biologi", 
  "Biologi",
  "Matematika (P)",
  "Matematika (P)",
  ],
"Rabu": [
  "Matematika (W)",
  "Matematika (W)",
  "Bahasa Indonesia",
  "Bahasa Indonesia",
  "Ppkn",
  "Ppkn",
  "Bahasa Prancis",
  "Bahasa Prancis",
  "Kimia",
  "Kimia"
],
"Kamis": [
  "Bahasa Jawa",
  "Bahasa Jawa",
  "Fisika",
  "Fisika",
  "PKWU",
  "PKWU",
  "BK",
  "PJOK",
  "PJOK",
  "PJOK"
],
"Jumat": [
  "Matematika (P)",
  "Matematika (P)",
  "Biologi",
  "Biologi",
  "Bahasa Indonesia",
  "Bahasa Indonesia",
  "Bahasa Inggris",
  "Bahasa Inggris"
  
  ]

}

let jadwalInner = document.getElementById('jadwal').innerHTML;
document.getElementById('jadwal').innerHTML = null


let str = ""



for (let day in schedule) {
  str = ""
  
  for (let hrs = 0; hrs < schedule[day].length; hrs++ ) {
    str += `${schedule[day][hrs]} <br>`
    
    if (hrs == schedule[day].length - 1) {
      document.getElementById('jadwal').innerHTML += jadwalInner.replace('harii', day).replace('jdwll', str)
    }
  }
}

/**
for (let h = 0; h < schedule.senin.length; h++) {
  str += `${schedule.senin[h]} <br>`
  if (h == schedule.senin.length - 1) tmp += template.replace('hari', 'Senin').replace('jdwll', str).replace('hari', 'Senin')
  document.getElementById('jadwal').innerHTML = tmp
}

str = ""
for (let h = 0; h < schedule.selasa.length; h++) {
  str += `${schedule.selasa[h]} <br>`
  if (h == schedule.selasa.length - 1) tmp += template.replace('hari', 'Senin').replace('jdwll', str).replace('hari', 'Selasa')
  document.getElementById('jadwal').innerHTML = tmp
}


**/
