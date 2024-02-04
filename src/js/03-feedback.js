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
  localStorage.removeItem(localStorageKey);
  form.reset();
});
