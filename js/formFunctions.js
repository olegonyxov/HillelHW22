function collectData() {
  const form = document.forms[0].elements;
  const firstName = form.firstName.value;
  const lastName = form.lastName.value;
  const dateOfBirth = form.dateOfBirth.value;
  const gender = form.gender.value;
  const userCity = form.userCity.value;
  const address = form.address.value;

  const user = {
    firstName,
    lastName,
    dateOfBirth,
    gender,
    userCity,
    address
  };

  return user;
}