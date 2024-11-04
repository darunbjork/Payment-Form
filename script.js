function validateForm() {
  const cardholderName = document.getElementById('cardholder-name').value;
  const cardNumber = document.getElementById('card-number').value;
  const expDate = document.getElementById('exp-date').value;
  const cvv = document.getElementById('cvv').value;
  const errorMessage = document.getElementById('error-message');
  
  errorMessage.textContent = ''; // Reset error message

  if (!cardholderName || !cardNumber || !expDate || !cvv) {
      errorMessage.textContent = 'Please fill in all fields.';
      return;
  }

  if (!/^\d{4} \d{4} \d{4} \d{4}$/.test(cardNumber)) {
      errorMessage.textContent = 'Invalid card number format.';
      return;
  }

  if (!/^\d{2}\/\d{2}$/.test(expDate)) {
      errorMessage.textContent = 'Invalid date format.';
      return;
  }

  if (!/^\d{3}$/.test(cvv)) {
      errorMessage.textContent = 'Invalid CVV.';
      return;
  }

  alert('Payment Successful!');
}
