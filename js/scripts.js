function birthdate() {
  var year = parseInt(document.getElementById("yy").value);
  var month = parseInt(document.getElementById("mm").value);
  var day = parseInt(document.getElementById("dd").value);
  var a = (14 - month) / 12;
  var y = year - a;
  var m = month + 12 * a - 2;
  var d = Math.trunc((day + y + y / 4 - y / 100 + y / 400 + (31 * m) / 12) % 7);
  var male = document.getElementById("ml");
  var female = document.getElementById("fl");

  var namesMale = [
    "Monday: Kwadwo",

    "Tuesday: Kwabena",

    "Wednesday: Kwaku",

    "Thursday:  Yaw",

    "Friday: Kofi",

    "Saturday: Kwame",

    "Sunday: Kwasi"
  ];

  var namesFemale = [
    "Monday: Adwoa",

    "Tuesday: Abenaa",

    "Wednesday: Akua",

    "Thursday: Yaa",

    "Friday: Afua",

    "Saturday: Ama",

    "Sunday: Akosua"
  ];
  
  if (male.checked == true) {
    console.log("male");
    alert(namesMale[d]);
  } else if (female.checked == true) {
    console.log("female");
    alert(namesFemale[d]);
  }
  
}
