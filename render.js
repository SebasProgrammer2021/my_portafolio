export const renderSkills = (skillsData, language) => {
  return skillsData.map(skill => `
    <div class="skillContainer">
      <h3 class="skillName">${skill.skillName[language]}</h3>
      <div class="starsRatingContainer">
        ${Array.from({ length: 5 }, (_, i) => `
          <span class="fa fa-star ${i < skill.skillCalification ? 'starChecked' : ''}"></span>
        `).join('')}
      </div>
    </div>
  `).join('');
};

export const renderProjects = (projectsData, language, translations) => {
  return projectsData.map(project => `
    <div class="projectContainer">
      <h3 class="projectTitlle">${project.projectTitle[language]}</h3>
      <div class="projectDescriptionContainer">
        <p>${project.projectDescription[language]}</p>
        <span class="usedTechTitle">${translations[language].technologies}</span>
        <p>${project.projectTechnologies}</p>
        <a class="projectDescriptionButton" href="${project.projectLinkWeb}" target="_blank" rel="noopener noreferrer">
          ${translations[language].seeProject}
        </a>
      </div>
    </div>
  `).join('');
};