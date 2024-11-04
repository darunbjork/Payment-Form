// Get references to input fields and display elements
const cardholderInput = document.getElementById('cardholder-name');
const cardNumberInput = document.getElementById('card-number');
const expDateInput = document.getElementById('exp-date');
const cvvInput = document.getElementById('cvv');

const displayCardNumber = document.getElementById('display-card-number');
const displayHolderName = document.getElementById('display-holder-name');
const displayExpiryDate = document.getElementById('display-expiry-date');

// Update display functions
cardholderInput.addEventListener('input', () => {
    displayHolderName.textContent = cardholderInput.value || 'John Galt';
});

cardNumberInput.addEventListener('input', () => {
    const formattedNumber = cardNumberInput.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
    displayCardNumber.textContent = formattedNumber || '#### #### #### ####';
});

expDateInput.addEventListener('input', () => {
    displayExpiryDate.textContent = expDateInput.value || 'MM/YY';
});

// Optional: Format card number and expiration date automatically
cardNumberInput.addEventListener('input', () => {
    cardNumberInput.value = cardNumberInput.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
});

expDateInput.addEventListener('input', () => {
    expDateInput.value = expDateInput.value.replace(/[^0-9\/]/g, '').replace(/^(\d\d)(\d)$/g, '$1/$2');
});

// Basic validation for demonstration
function validateForm() {
    const errorMessage = document.getElementById('error-message');
    if (!cardholderInput.value || !cardNumberInput.value || !expDateInput.value || !cvvInput.value) {
        errorMessage.textContent = 'Please fill in all fields.';
    } else {
        errorMessage.textContent = '';
        alert('Payment Successful!');
    }
}
