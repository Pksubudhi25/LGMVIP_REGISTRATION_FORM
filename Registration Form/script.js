const registrationForm = document.getElementById('registrationForm');
const registrationDataContainer = document.getElementById('registrationData');

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  displayRegistrationData(name, email, password);
  registrationForm.reset();
});

function displayRegistrationData(name, email, password) {
  const dataDiv = document.createElement('div');
  dataDiv.innerHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Password:</strong> ${password}</p>
  `;
  registrationDataContainer.innerHTML = '';
  registrationDataContainer.appendChild(dataDiv);
}
