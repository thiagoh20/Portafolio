
const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');

// Ajusta el tamaño del canvas al tamaño de la ventana
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

// Genera las estrellas iniciales
for (let i = 0; i < 200; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2,
    opacity: Math.random(),
    fade: Math.random() * 0.02
  });
}

// Animación de las estrellas
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach(star => {
    star.opacity += star.fade;
    if (star.opacity <= 0 || star.opacity >= 1) {
      star.fade = -star.fade; // Invertir dirección
    }
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(128, 128, 128, ${star.opacity})`; // Estrellas en gris
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

animate();

// Ajustar el tamaño del canvas al redimensionar la ventana
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  stars = [];
  for (let i = 0; i < 200; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2,
      opacity: Math.random(),
      fade: Math.random() * 0.02
    });
  }
});
