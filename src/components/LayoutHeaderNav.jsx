import React from 'react';

export default function LayoutHeaderNav({ isVisible }) {
  return (
    <div className={`navbar${isVisible ? ' is-visible' : ''}`} id="navbar">
      <a href="#index" className="btn btn-rabbit">Karththigan</a>
      <a href="#about_scroll" className="btn btn-rabbit">About</a>
      <a href="#work_scroll" className="btn btn-rabbit">Experience</a>
      <a href="#project_scroll" className="btn btn-rabbit">Projects</a>
      <a className="btn btn-rabbit" href="https://www.linkedin.com/in/karththigan/">
        <i className="fa fa-linkedin" aria-hidden="true"></i>
      </a>
      <a className="btn btn-rabbit" href="https://github.com/Karththigan">
        <i className="fa fa-github" aria-hidden="true"></i>
      </a>
    </div>
  );
}