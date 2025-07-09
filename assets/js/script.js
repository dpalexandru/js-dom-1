// definisco gli elementi da utilizzare 
const foto = document.getElementById('lampadina');
const button = document.getElementById('accendiSpegni');

// aggiungo funzione a EvenListner
button.addEventListener('click', () => {
  // aggiungo if per gestire accendi/spegni

  if (foto.src.includes("/assets/img/white_lamp.png")){
    foto.src = '/assets/img/yellow_lamp.png';
    button.textContent = 'Spegni';
  } else {
    foto.src = '/assets/img/white_lamp.png';
    button.textContent = 'Accendi';
  }
});





