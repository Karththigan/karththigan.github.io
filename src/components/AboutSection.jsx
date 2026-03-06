import React from 'react';

export default function AboutSection() {
  return (
    <div id="about_scroll" className="main">
      <div className="container">
        <div className="row">
          <div className="col-md-6 left" id="about_left">
            <h2 className="page-title text-center">About me</h2>
            <p className="info">
              I am currently a Data Engineering Intern at <a className="special-link" href="https://www.wattpad.com/">Wattpad</a>
            </p>
            <p className="info">
              I'm also in my final year of my Bachelor's in Materials Engineering and Bioengineering at the University of Toronto
              <a href="/courses/" style={{ fontSize: 'x-small' }}>(see what courses I've taken)</a>
            </p>
            <p className="info">
              Outside of work, I like to play piano, bake, and read
            </p>
          </div>
          <div className="col-md-6 text-center right index_right">
            <img
              className="img-responsive img-rabbit-me"
              src="/assets/images/about.jpg"
              style={{ display: 'block', marginBottom: '40%', marginTop: '10%', marginLeft: 'auto', marginRight: 'auto', width: '70%', height: '100%', objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}