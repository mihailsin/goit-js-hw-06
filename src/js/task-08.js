const form = document.querySelector('.login-form');
const onFormSubmit = () => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === '' || password.value === '') {
    alert('Error! Please, fill in all the fields and try again.');
  }
  const formData = new FormData(event.currentTarget);
  formData.forEach((email, password) => console.log(email, password));
  //   const mail = email.value;
  //   const pass = password.value;
  //   const formData = {
  //     mail,
  //     pass,
  //   };
  //   console.log(formData);
  event.currentTarget.reset();
};
form.addEventListener('submit', onFormSubmit);
