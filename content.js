export const updateContent = (translations, language) => {
  document.querySelector('.welcome h1').textContent = translations[language].welcome;
  document.querySelector('.aboutMe h2').textContent = translations[language].aboutMe;
  document.querySelector('#skills h2').textContent = translations[language].skills;
  document.querySelector('#projects h2').textContent = translations[language].projects;
  document.querySelector('.contactMe h2').textContent = translations[language].contact;
  document.querySelector('label[for="name"]').textContent = translations[language].name;
  document.querySelector('label[for="email"]').textContent = translations[language].email;
  document.querySelector('label[for="message"]').textContent = translations[language].message;
  document.querySelector('#socialNetworks h2').textContent = translations[language].socialMedia;
  document.querySelector('.buttonSendContainer button .button-text').textContent = translations[language].buttonSendForm;
  document.querySelector('.aboutMe_mainDescription').textContent = translations[language].aboutMe_mainDescription;
  document.querySelector('.aboutMeProfileDescription__quote').textContent = translations[language].aboutMeProfileDescription__quote;
  document.querySelector('#welcome').textContent = translations[language]["welcomeLink"];
  document.querySelector('#aboutMe').textContent = translations[language]["aboutMeLink"];
  document.querySelector('#skills').textContent = translations[language]["skillsLink"];
  document.querySelector('#projects').textContent = translations[language]["projectsLink"];
  document.querySelector('#contactForm').textContent = translations[language]["contactFormLink"];
  document.querySelector('.myName').textContent = translations[language]["myName"];
  document.querySelector('.myRole').textContent = translations[language]["myRole"];
};