import { fetchPortafolioData, loadTranslations } from './api.js';
import { renderSkills, renderProjects } from './render.js';
import { updateContent } from './content.js';

const init = async () => {
  try {
    const translations = await loadTranslations();
    const data = await fetchPortafolioData();

    if (translations && data) {
      const updateLanguage = (language) => {
        updateContent(translations, language);
        
        const skillsContainer = document.getElementById("skillsContainer");
        const projectsContainer = document.querySelector(".projectsContainer");
        
        if (skillsContainer && data.skillsData) {
          skillsContainer.innerHTML = renderSkills(data.skillsData, language);
        }
        
        if (projectsContainer && data.projectsData) {
          projectsContainer.innerHTML = renderProjects(data.projectsData, language, translations);
        }
      };

      // Establecer el valor del selector de idioma a 'en' (inglés)
      const languageSelector = document.getElementById('languageSelector');
      languageSelector.value = 'en';

      // Inicializar con el idioma inglés
      updateLanguage('en');

      // Añadir evento para cambio de idioma
      languageSelector.addEventListener('change', (e) => {
        updateLanguage(e.target.value);
      });
    } else {
      console.error('No se pudieron cargar los datos o las traducciones.');
    }
  } catch (error) {
    console.error('Error al inicializar la aplicación:', error);
  }
};

window.onload = init;