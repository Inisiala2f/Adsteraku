// Mendefinisikan daftar situs dalam variabel array
var situs = [
  "https://asiafilm.org/4/d0d188da2017ef9ee01fb562798d386a",
  "https://asiafilm.org/4/6729f99d594d33885cec1eb3981e92ac",
  "https://asiafilm.org/4/7f0434e3ed63cbba143ee2860b19fd5a"
];

// Memilih satu situs secara acak
var acak = Math.floor(Math.random() * situs.length);
var situsTerpilih = situs[acak];

// Membuka situs terpilih
window.location.href = situsTerpilih;
