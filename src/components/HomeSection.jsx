import React, { forwardRef } from 'react';

const HomeSection = forwardRef(function HomeSection(props, ref) {
  return (
    <div id="index" ref={ref}>
      <div className="container main">
        <div className="row home" style={{ display: 'flex', justifyContent: '50vw', alignItems: 'center', height: '50vh' }}>
          <div className="col-md-6 text-center index_right" style={{ flex: 1 }}>
            <div className="logo typewriter">
              <h4 className="myname">Hi, I'm Karththigan</h4>
            </div>
            <p className="home-description">materials engineering x bioengineering x bioinformatics</p>
            <div className="btn-group-vertical">
              <a href="#about_scroll" className="btn btn-rabbit">About me</a>
              <a href="#work_scroll" className="btn btn-rabbit">Experience</a>
              <a href="#project_scroll" className="btn btn-rabbit">Projects</a>
            </div>
            <div className="social">
              <a href="mailto: karththigan.pushparaj@mail.utoronto.ca"><i className="fa fa-envelope" aria-hidden="true"></i></a>
              <a href="https://www.linkedin.com/in/karththigan/"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
              <a href="https://github.com/Karththigan"><i className="fa fa-github" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default HomeSection;