export const updateContent = (translations, language) => {
  console.log(translations);
  console.log(language);
  document.querySelector('.welcome h1').textContent = translations[language].welcome;
  document.querySelector('.aboutMe h2').textContent = translations[language].aboutMe;
  document.querySelector('#skills h2').textContent = translations[language].skills;
  document.querySelector('#projects h2').textContent = translations[language].projects;
  document.querySelector('.contactMe h2').textContent = translations[language].contact;
  document.querySelector('label[for="name"]').textContent = translations[language].name;
  document.querySelector('label[for="email"]').textContent = translations[language].email;
  document.querySelector('label[for="message"]').textContent = translations[language].message;
  document.querySelector('#socialNetworks h2').textContent = translations[language].socialMedia;
};