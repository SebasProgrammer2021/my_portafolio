import config from './config.js';

const fetchData = async (file) => {
  try {
    const response = await fetch(file);
    if (!response.ok) {
      throw new Error(`Error fetching ${file}: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null; // Retorna null en caso de error
  }
};

export const fetchPortafolioData = () => fetchData(config.dataFile);
export const loadTranslations = () => fetchData(config.translationsFile);