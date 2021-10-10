const inputRef = document.querySelector('#validation-input');
const onInputBlur = () => {
  event.currentTarget.value.length === 6
    ? (inputRef.className = 'valid')
    : (inputRef.className = 'invalid');
};

inputRef.addEventListener('blur', onInputBlur);
