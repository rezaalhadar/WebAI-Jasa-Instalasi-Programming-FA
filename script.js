// Back to top button
window.addEventListener('scroll', function() {
  const backToTop = document.getElementById('back-to-top');
  if (window.pageYOffset > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

// Real-time validation
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const inputs = form.querySelectorAll('input, select, textarea');

  inputs.forEach(input => {
    input.addEventListener('blur', function() {
      validateField(this);
    });
    input.addEventListener('input', function() {
      if (this.classList.contains('is-invalid')) {
        validateField(this);
      }
    });
  });

  // Phone number formatting and validation
  const phoneInput = document.getElementById('phone');
  phoneInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    // Allow display with 0 prefix for user familiarity
    if (value.startsWith('62')) {
      // If starts with 62, convert to 0 prefix
      value = '0' + value.substring(2);
    }
    // Limit to 12 digits (0 + 11 digits) for Indonesian mobile numbers
    if (value.length > 12) {
      value = value.substring(0, 12);
    }
    // Ensure it starts with 0 if not empty
    if (value.length > 0 && !value.startsWith('0')) {
      value = '0' + value;
    }
    e.target.value = value;
    validateField(e.target);
  });
});

// Validate individual field
function validateField(field) {
  const value = field.value.trim();
  let isValid = true;
  let message = '';

  switch (field.id) {
    case 'name':
      if (!value) {
        isValid = false;
        message = 'Nama lengkap diperlukan.';
      } else if (value.length < 2) {
        isValid = false;
        message = 'Nama harus minimal 2 karakter.';
      }
      break;
    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) {
        isValid = false;
        message = 'Alamat email diperlukan.';
      } else if (!emailRegex.test(value)) {
        isValid = false;
        message = 'Format email tidak valid.';
      }
      break;
    case 'phone':
      // For display, accept numbers starting with 0 followed by 8-11 digits
      const displayPhoneRegex = /^0\d{8,11}$/;
      if (!value) {
        isValid = false;
        message = 'Nomor telepon diperlukan untuk WhatsApp.';
      } else if (!displayPhoneRegex.test(value)) {
        isValid = false;
        message = 'Masukkan nomor telepon dengan awalan 0 (contoh: 081234567890).';
      }
      break;
    case 'service':
      if (!value) {
        isValid = false;
        message = 'Pilih jenis layanan.';
      }
      break;
    case 'message':
      if (!value) {
        isValid = false;
        message = 'Pesan diperlukan.';
      } else if (value.length < 10) {
        isValid = false;
        message = 'Pesan harus minimal 10 karakter.';
      }
      break;
  }

  field.classList.toggle('is-invalid', !isValid);
  field.classList.toggle('is-valid', isValid && value);

  const feedback = field.parentNode.querySelector('.invalid-feedback') || field.parentNode.parentNode.querySelector('.invalid-feedback');
  if (feedback) {
    feedback.textContent = message;
  }

  return isValid;
}

// Send to WhatsApp
function sendToWhatsApp() {
  const form = document.querySelector('form');
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;

  // Validate all fields
  const inputs = form.querySelectorAll('input, select, textarea');
  let allValid = true;
  inputs.forEach(input => {
    if (!validateField(input)) {
      allValid = false;
    }
  });

  if (!allValid) {
    form.classList.add('was-validated');
    return false;
  }

  // Show loading state
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Mengirim...';

  try {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    let phone = document.getElementById('phone').value.trim();
    // Format phone for WhatsApp (convert 0 prefix to +62)
    if (phone && phone.startsWith('0')) {
      phone = '+62' + phone.substring(1);
    }
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value.trim();

    const text = `Halo, saya ${name}. Email: ${email}. Telepon: ${phone}. Layanan: ${service}. Pesan: ${message}`;
    const encodedText = encodeURIComponent(text);
    const url = `https://wa.me/6281234567890?text=${encodedText}`;

    // Check if WhatsApp can be opened
    const whatsappWindow = window.open(url, '_blank');
    if (!whatsappWindow) {
      throw new Error('Popup blocker mungkin mencegah pembukaan WhatsApp.');
    }

    // Success feedback
    showMessage('Pesan berhasil dikirim ke WhatsApp!', 'success');

    // Reset form
    form.reset();
    form.classList.remove('was-validated');
    inputs.forEach(input => {
      input.classList.remove('is-valid', 'is-invalid');
    });

  } catch (error) {
    showMessage('Gagal mengirim pesan. ' + error.message, 'error');
  } finally {
    // Reset button
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
  }

  return false;
}

// Show message function
function showMessage(message, type) {
  // Remove existing message
  const existingMessage = document.querySelector('.alert-message');
  if (existingMessage) {
    existingMessage.remove();
  }

  // Create new message
  const alertDiv = document.createElement('div');
  alertDiv.className = `alert alert-${type === 'success' ? 'success' : 'danger'} alert-dismissible fade show alert-message`;
  alertDiv.innerHTML = `
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  `;

  // Insert after form
  const form = document.querySelector('form');
  form.parentNode.insertBefore(alertDiv, form.nextSibling);

  // Auto dismiss after 5 seconds
  setTimeout(() => {
    if (alertDiv.parentNode) {
      alertDiv.remove();
    }
  }, 5000);
}