export default function(){
  const forestAudio = new Audio('../audio/Floresta.wav')
const coffeeAudio = new Audio('../audio/Cafeteria.wav')
const rainAudio = new Audio('../audio/Chuva.wav')
const fireAudio = new Audio('../audio/Lareira.wav')

forestAudio.loop = true
coffeeAudio.loop = true
rainAudio.loop = true
fireAudio.loop = true


let forestVolume = document.getElementById("forestVolume");
forestVolume.addEventListener("change", function (e) {
  forestAudio.volume = e.currentTarget.value / 100;
});

let rainVolume = document.getElementById("rainVolume");
rainVolume.addEventListener("change", function (e) {
  rainAudio.volume = e.currentTarget.value / 100;
});

let coffeeVolume = document.getElementById("coffeeVolume");
coffeeVolume.addEventListener("change", function (e) {
  coffeeAudio.volume = e.currentTarget.value / 100;
});

let fireplaceVolume = document.getElementById("fireplaceVolume");
fireplaceVolume.addEventListener("change", function (e) {
  fireAudio.volume = e.currentTarget.value / 100;
});


  return {
    forestAudio, 
    coffeeAudio,
    rainAudio,
    fireAudio,
  }
}