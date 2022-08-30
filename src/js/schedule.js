/**
 * schedule.js
 * 
 *  ------- Website Kelas ------
 * 
 * Name: website-mipa-satu
 * Author: Khuirul-Huda (@khuirul_huda)
 * Source Code: https://github.com/Khuirul-Huda/website-mipa-satu
 * 
 * ------------------------------
**/


const schedule = {
  "Senin": [
    "😃😃😃",
    "PJOK",
    "PJOK",
    "PJOK",
    "Bahasa Indonesia",
    "Bahasa Indonesia",
    "Sejarah",
    "Sejarah",
    "Bahasa Prancis",
    "Bahasa Prancis"
    ],
"Selasa": [
  "Kimia",
  "Kimia",
  "Fisika",
  "Fisika",
  "Matematika (W)",
  "Matematika (W)",
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
  "Kimia",
  "Kimia",
  "Seni Budaya",
  "Seni Budaya"
],
"Kamis": [
  "Bahasa Inggris",
  "Bahasa Inggris",
  "Biologi",
  "Biologi",
  "Bahasa Prancis",
  "Bahasa Prancis",
  "Agama",
  "BK",
  "PKWU",
  "PKWU"
],
"Jumat": [
  "Matematika (P)",
  "Matematika (P)",
  "Fisika",
  "Fisika",
  "Agama",
  "Agama",
  "Bahasa Jawa",
  "Bahasa Jawa"
  
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
