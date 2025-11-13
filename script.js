// Back to top button
window.addEventListener('scroll', function() {
  const backToTop = document.getElementById('back-to-top');
  if (window.pageYOffset > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

// Send to WhatsApp
function sendToWhatsApp() {
  const form = document.querySelector('form');
  if (!form.checkValidity()) {
    form.classList.add('was-validated');
    return false;
  }
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value;
  const text = `Halo, saya ${name}. Email: ${email}. Telepon: ${phone}. Layanan: ${service}. Pesan: ${message}`;
  const encodedText = encodeURIComponent(text);
  const url = `https://wa.me/6281234567890?text=${encodedText}`;
  window.open(url, '_blank');
  form.reset();
  form.classList.remove('was-validated');
  return false;
}