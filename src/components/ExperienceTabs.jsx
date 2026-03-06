import React, { useState } from 'react';

export default function ExperienceTabs() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div id="work_scroll" className="main">
      <div className="container">
        <div className="row">
          <div className="col-md-12" id="work_right">
            <h2 className="page-title text-center">Experience</h2>
            <div id="experience">
              <div className="tab-container">
                <div className="tabs">
                  <button className="tab-button" onClick={() => setActiveIndex(0)}>Wattpad</button>
                  <button className="tab-button" onClick={() => setActiveIndex(1)}>Princess Margaret Research Tower</button>
                  <button className="tab-button" onClick={() => setActiveIndex(2)}>University Health Network</button>
                  <button className="tab-button" onClick={() => setActiveIndex(3)}>University of Toronto</button>
                </div>
                <div className={`tab-panel${activeIndex === 0 ? ' active' : ''}`}>
                  <div className="tab-content">
                    <div className="job-title">Data Engineering Intern</div>
                    <div className="job-company">Wattpad</div>
                    <div className="job-duration">September 2023 - Present</div>
                    <ul className="job-description">
                      <li>Created a data pipeline using Apache Airflow, Spark, AWS DMS and Luigi to collect and process ad performance data for 10 000+ and growing users daily, providing critical data for business metrics</li>
                      <li>Orchestrating the migration from legacy event driven system to new eventing platform by creating events with Protocol Buffers and developing integration tests</li>
                      <li>Proactively developing and resolving daily errors in critical data pipelines using Python and communicating downstream impacts with stakeholders.</li>
                      <li>Collaborating with senior engineers and product management following best practices for the full development cycle, including code reviews, build processes, and testing</li>
                    </ul>
                  </div>
                </div>
                <div className={`tab-panel${activeIndex === 1 ? ' active' : ''}`}>
                  <div className="tab-content">
                    <div className="job-title">Undergraduate Research Assitant</div>
                    <div className="job-company">Princess Margaret Cancer Research Tower: Hoffman Lab</div>
                    <div className="job-duration">May 2023 - August 2023</div>
                    <ul className="job-description">
                      <li>Researched distortions in single-cell RNA-seq data caused by dimensionality reduction techniques such as PCA, t-SNE, and UMAP through collaboration with senior lab members</li>
                      <li>Developed metrics and Python scripts to highlight distortions and bias in data visualization tools, and presented findings to senior lab members</li>
                    </ul>
                  </div>
                </div>
                <div className={`tab-panel${activeIndex === 2 ? ' active' : ''}`}>
                  <div className="tab-content">
                    <div className="job-title">Data Developer</div>
                    <div className="job-company">University Health Network</div>
                    <div className="job-duration">September 2022 - March 2023</div>
                    <ul className="job-description">
                      <li>Assisted in the development of software for clinical data management and data integration using Stata</li>
                      <li>Debugged automated reporting tools related to patient enrollment as clinical studies expanded across hospital sites</li>
                      <li>Liaised with other developers to improve the quality of patient-reported data for use in automated periodic status reports</li>
                    </ul>
                  </div>
                </div>
                <div className={`tab-panel${activeIndex === 3 ? ' active' : ''}`}>
                  <div className="tab-content">
                    <div className="job-title">Educational Technology Assistant</div>
                    <div className="job-company">University of Toronto: Educational Technology Office</div>
                    <div className="job-duration">May 2022 - August 2022</div>
                    <ul className="job-description">
                      <li>Created a JavaScript program that generates personalized certificates for online courses, eliminating manual creation, and created presentations to train senior staff on its implementation</li>
                      <li>Evaluated features of new learning software and presented feedback by conducting presentations that summarize findings to panels of educators to improve user experience</li>
                      <li>Optimized office workflows by updating internal technical documentation and providing meeting notes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}