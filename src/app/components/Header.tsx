import React from 'react'

export const Header = () => {
  return (
    <header>
      <nav className="navbar flex justify-center">
        <ul className="navbarList flex gap-5">
          <li id="itemEnlace" className="navbarListItem">
            <a href="/" className="navbarListItemLink" id="inicio"
            >Inicio</a
            >
          </li>
          <li id="itemEnlace" className="navbarListItem">
            <a
              href="#welcome"
              className="navbarListItemLink"
              id="welcome"
            >Welcome</a
            >
          </li>
          <li id="itemEnlace" className="navbarListItem">
            <a
              href="#aboutMe"
              className="navbarListItemLink"
              id="aboutMe"
            >About me</a
            >
          </li>
          <li id="itemEnlace" className="navbarListItem">
            <a
              href="#skills"
              className="navbarListItemLink"
              id="skills"
            >Skills</a
            >
          </li>
          <li id="itemEnlace" className="navbarListItem">
            <a
              href="#projects"
              className="navbarListItemLink"
              id="projects"
            >Projects</a
            >
          </li>
          <li id="itemEnlace" className="navbarListItem">
            <a
              href="#contactMe"
              className="navbarListItemLink"
              id="contactForm"
            >Contact Form</a
            >
          </li>
        </ul>
        <select id="languageSelector">
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
      </nav>
    </header>
  )
}
