let i = 0;
let n = 0;
let y = 0;
let msg = "Git e Github";
let message = "Formação Desenvolvedor Moderno";
let prof = "Profº Nelio Alves";

typing();
typi();
text();

function typing() {
  if (i < msg.length) {
    document.getElementById("text1").innerHTML += msg.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}

function typi() {
  if (n < message.length) {
    document.getElementById("text2").innerHTML += message.charAt(n);
    n++;
    setTimeout(typi, 160);
  }
}

function text() {
  if (y < prof.length) {
    document.getElementById("text3").innerHTML += prof.charAt(y);
    y++;
    setTimeout(text, 220);
  }
}
