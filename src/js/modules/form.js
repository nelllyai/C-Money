const form = document.querySelector('form');

const getCurrentFieldset = () => form.querySelector('.registration__fieldset_active');

const getCurrentInputFields = () => getCurrentFieldset().querySelectorAll('input');

const getCurrentButton = () => getCurrentFieldset().querySelector('button');

const getNextFieldset = () => {
  const currentTab = +getCurrentFieldset().dataset.tab;
  console.log(getCurrentFieldset())
  return form.querySelector(`[data-tab='${currentTab + 1}']`);
}

form.addEventListener('input', () => {
  let toTurnOnButton = true;
  
  for (const input of getCurrentInputFields()) {
    if (!input.value) toTurnOnButton = false;
  }
  
  if (toTurnOnButton) {
    getCurrentButton().disabled = false;
  } else {
    getCurrentButton().disabled = true;
  }
});

form.addEventListener('click', event => {
  const target = event.target;

  if (!target.classList.contains('registration__next-button')) return;

  getNextFieldset().classList.add('registration__fieldset_active');
  getCurrentFieldset().classList.remove('registration__fieldset_active');
});

form.addEventListener('submit', event => {
  event.preventDefault();
});
