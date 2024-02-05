import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const email = form.querySelector("input[name='email']");
const message = form.querySelector("textarea[name='message']");

const localStorageKey = 'feedback-form-state';

const saveToStorage = throttle(() => {
  const messageContent = {
    email: email.value.trim(),
    message: message.value.trim(),
  };
  localStorage.setItem(localStorageKey, JSON.stringify(messageContent));
}, 500);

const checkFormInputs = () => {
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

  if (!emailValue || !messageValue) {
    alert('Proszę wypełnić oba pola formularza!');
    return false;
  }

  return true;
};

form.addEventListener('input', saveToStorage);

const storedMessage = () => {
  const stored = localStorage.getItem(localStorageKey);
  if (stored) {
    try {
      const messageContent = JSON.parse(stored);
      email.value = messageContent.email;
      message.value = messageContent.message;
    } catch (error) {
      console.log(error.message);
    }
  }
};

storedMessage();

form.addEventListener('submit', event => {
  event.preventDefault();

  if (checkFormInputs()) {
    const messageContent = {
      email: email.value.trim(),
      message: message.value.trim(),
    };
    console.log('Email, Message:', messageContent);

    localStorage.removeItem(localStorageKey);
    form.reset();
  }
});
