// Get modal elements
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeModal = document.querySelector('.close');

// Open modal
loginBtn.addEventListener('click', () => {
  loginModal.style.display = 'flex';
});

// Close modal
closeModal.addEventListener('click', () => {
  loginModal.style.display = 'none';
});

// Close modal when clicking outside of it
window.addEventListener('click', (e) => {
  if (e.target === loginModal) {
    loginModal.style.display = 'none';
  }
});
