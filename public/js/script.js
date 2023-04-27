const user = document.querySelector('.input_name');
const button = document.querySelector('.input_button');
const form = document.querySelector('.form');

const validaInput = ({ target }) => {
  if (target.value.length > 2 && target.value.length < 13) {
    console.log(name);
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', '');
  }
};

const handleSubmit = (e) => {
  e.preventDefault();

  localStorage.setItem('player', user.value);
  window.location = 'game.html';
};

user.addEventListener('input', validaInput);
form.addEventListener('submit', handleSubmit);

console.log('teste');
