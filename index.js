
const fetchPortafolioData = async () => {
  try {
    const response = await fetch('data.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al cargar los datos:', error);
    return [];
  }
}

const renderSkills = (skillsData) => {
  let html = '';
  skillsData.forEach((skill) => {
    html += `<div class="skillContainer">
      <h3 class="skillName">${skill.skillName}</h3>
      <div class="starsRatingContainer">`;

    for (let i = 0; i < 5; i++) {
      html += `<span class="fa fa-star ${i < skill.skillCalification ? 'starChecked' : ''}"></span>`;
    }

    html += `</div></div>`;
  });
  return html;
}

const renderProjects = (projectsData) => {
  let html = '';
  projectsData.forEach((project) => {
    html += `
    <div class="projectContainer">
    <h3 class="projectTitlle">${project.projectTitle}</h3>
    <div class="projectDescriptionContainer">
      <p>
      ${project.projectDescription}
      </p>

      <span class="usedTechTitle">Tecnologias empleadas</span>
      <p>
      ${project.projectTechnologies}
      </p>
      <a class="projectDescriptionButton" href="${project.projectLinkWeb}" target="_blank" rel="noopener noreferrer">See project</a>
    </div>
  </div>`;
    html += `</div></div>`;

  });
  return html;
}



window.onload = async () => {
  const data = await fetchPortafolioData();
  const contenedorHabilidades = document.getElementById("skillsContainer");
  const projectsContainer = document.getElementsByClassName("projectsContainer")[0];
  contenedorHabilidades.innerHTML = renderSkills(data.skillsData);
  projectsContainer.innerHTML = renderProjects(data.projectsData);
};

