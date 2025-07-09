// definisco gli elementi da utilizzare 
const foto = document.getElementById('lampadina');
const button = document.getElementById('accendiSpegni');


console.log(foto.src);
console.log(button);

// aggiungo funzione a EvenListner
button.addEventListener('click', () => {
  foto.src = '/assets/img/yellow_lamp.png';
  button.textContent = 'Spegni';
});





