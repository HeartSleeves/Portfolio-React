import React from "react";
//TODO style nav buttons
import "../styles/Header.css";

function Header({ currentPage, handlePageChange }) {
  return (
    <header>
      <h1>Ivy Lovegood: Junior Developer</h1>
      <h2>Your new favorite person</h2>
      <nav>
        <h3 class="navbutton"><a
          href="#bio"
          onClick={() => handlePageChange('Bio')}
          className={currentPage === 'Bio' ? 'nav-link active' : 'nav-link'}
        >About me</a></h3>
        <h3 class="navbutton"><a
          href="#Portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >Portfolio</a></h3>
        <h3 class="navbutton"><a
          href="#Contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >Contact</a></h3>
        <h3 class="navbutton"><a
          href="#Resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >Resume</a></h3>
      </nav>
    </header>
  );
}


export default Header;
