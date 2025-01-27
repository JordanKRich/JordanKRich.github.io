import React, { useEffect } from 'react';
import '../styles/style_about.css';
import family from '../components/images/IMG_0078.JPG';
import SO from '../components/images/IMG_0063.JPG';
import Resume from '../components/images/Jordans Offical Resume.pdf';
import miniresume from '../components/images/Official_Resume.png';
import Cats from '../components/images/2BF01F52-EBCC-45CA-8312-5D5B2FC26723.JPG';
import Buddy from '../components/images/11BD2BEC-EDF2-47A2-A302-C162B2615E59.JPG';
import Callie from '../components/images/B678C537-4637-433E-9EBC-05AB9F6264AC.JPG';
import Gameday from '../components/images/D1D970BB-B179-45C4-8A49-8E6B7765EDA6.JPG';
import GamedayGA from '../components/images/IMG_2083.jpg';
import Fielday from '../components/images/IMG_3940.JPG';
import FirstHouse from '../components/images/IMG_8733.JPEG';
import Cats2 from '../components/images/IMG_8762.jpg';
function About() {
  useEffect(() => {
    let slideIndex = 0;
    const slides = document.getElementsByClassName('slide-image');

    function showSlides() {
      if (!slides || slides.length === 0) return;
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex - 1].style.display = 'block';
      setTimeout(showSlides, 3000);
    }
    showSlides();

    const viewResumeButton = document.querySelector('.view-resume');
    const overlay = document.querySelector('.overlay');
    const resumeOverlayContainer = document.querySelector('.resume-overlay-container');
    const closeButton = document.querySelector('.close-button');

    if (viewResumeButton && overlay && resumeOverlayContainer && closeButton) {
      viewResumeButton.addEventListener('click', () => {
        overlay.style.display = 'flex'; 
        resumeOverlayContainer.innerHTML = `
        <iframe 
          src="${Resume}" 
          style="width: 90%; height: 80vh; border: none;"
        ></iframe>
        <a 
          href="${Resume}" 
          download 
          style="
            margin-top: 10px;
            background-color: #007bff; 
            color: #fff; 
            padding: 8px 12px; 
            text-decoration: none;
            border-radius: 5px;"
        >
          Download PDF
        </a>
      `;      
      });

      closeButton.addEventListener('click', () => {
        overlay.style.display = 'none';
        resumeOverlayContainer.innerHTML = '';
      });
    }

    return () => {
      if (viewResumeButton) {
        viewResumeButton.removeEventListener('click', () => {});
      }
      if (closeButton) {
        closeButton.removeEventListener('click', () => {});
      }
    };
  }, []);

  return (
    <div className="about">
      <div className="main-content">
        <div className="container">
          <div className="row">
            {/* Card-1: Resume */}
            <div className="col">
              <div className="card-1">
               <img src={miniresume} className="mini-resume" alt="Resume" />
                <div className="card-body-resume">
                  <h5 className="card-title">Resume</h5>
                  <p className="card-text">Click to see my resume</p>
                  <button className="btn btn-primary view-resume">
                    View
                  </button>
                </div>
              </div>
            </div>
            {/* Overlay for PDF Resume */}
            <div className="overlay">
              <div className="overlay-content">
                <span className="close-button">&times;</span>
                <div className="resume-overlay-container"></div>
              </div>
            </div>
            {/* Card-2: GitHub */}
            <div className="col">
              <div className="card-2">
                <a
                  href="https://github.com/JordanKRich?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                    className="card-img-top-github"
                    alt="GitHub Logo"
                  />
                </a>
                <div className="card-body-github">
                  <h5 className="card-title">Github</h5>
                  <p className="card-text">Click to see my public repositories</p>
                  <a
                    href="https://github.com/JordanKRich?tab=repositories"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            {/* Card-3: LinkedIn */}
            <div className="col">
              <div className="card-3">
                <a
                  href="https://www.linkedin.com/in/jordan-richardson-9630011b1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                    className="card-img-top-linkedin"
                    alt="Linkedin Logo"
                  />
                </a>
                <div className="card-body-linkedin">
                  <h5 className="card-title">LinkedIn</h5>
                  <p className="card-text">Click to see my LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/jordan-richardson-9630011b1"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            {/* Card-4: Skydiving Video */}
            <div className="col">
              <div className="card-4">
                <iframe
                  width="100%"
                  height="250"
                  src="https://www.youtube.com/embed/dHkTrdVR_2E"
                  frameBorder="0"
                  allowFullScreen
                  title="Skydiving video"
                ></iframe>
                <div className="card-body">
                  <p className="card-text-skydiving">Click to see my skydiving video</p>
                </div>
              </div>
            </div>
            {/* Card-5: Slideshow */}
            <div className="col">
              <div className="card-5">
                <div className="slideshow-container">
                  <div className="mySlides">
                  <div className="mySlides">
                    <img src={family} className="slide-image" alt="slide1" /></div>
                  </div>
                  <div className="mySlides">
                    <img src={SO} className="slide-image" alt="slide2"/>
                  </div>
                  <div className="mySlides">
                    <img src={Cats} className="slide-image" alt="slide3"/>
                  </div>
                  <div className="mySlides">
                    <img src={Buddy} className="slide-image" alt="slide4"/>
                  </div>
                  <div className="mySlides">
                    <img src={Callie} className="slide-image" alt="slide5"/>
                  </div>
                  <div className="mySlides">
                    <img src={Gameday} className="slide-image" alt="slide6"/>
                  </div>
                  <div className="mySlides">
                    <img src={GamedayGA} className="slide-image" alt="slide7"/>
                  </div>
                  <div className="mySlides">
                    <img src={Fielday} className="slide-image" alt="slide8"/>
                  </div>
                  <div className="mySlides">
                    <img src={FirstHouse} className="slide-image" alt="slide9"/>
                  </div>
                  <div className="mySlides">
                    <img src={Cats2} className="slide-image" alt="slide10"/>
                  </div>
                </div>
                <p className="card-text-photos">Photos</p>
              </div>
            </div>
            {/* Card-6: Completed Projects */}
            <div className="col">
              <div className="card-6">
                <div className="card-body-completed-projects">
                  <h5 className="card-title">Completed Projects</h5>
                  <ul>
                    <li>Real-time stock display</li>
                    <li>TSP Solver with Genetic Algorithms &amp; Wisdom of Crowds</li>
                    <li>First Person Shooter in Unity</li>
                    <li>Student ID swiping application for UofL</li>
                    <li>Smart Dice (IoT) to read dice output to Discord</li>
                    <li>Personal Website for skill advertisement</li>
                    <li>Web Scraping light novels into personal DB</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Card-7: Languages Ranked */}
            <div className="col">
              <div className="card-7">
                <div className="card-body-languages">
                  <h5 className="card-title">Languages Ranked</h5>
                  <ul>
                    <li>Python</li>
                    <li>PERN Stack</li>
                    <li>Javascript</li>
                    <li>Html &amp; CSS</li>
                    <li>SQL</li>
                    <li>C++</li>
                    <li>Kotlin</li>
                    <li>C#</li>
                    <li>Rust</li>
                    <li>Java</li>
                    <li>Swift</li>
                    <li>Go</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Card-8: Background */}
            <div className="col">
              <div className="card-8">
                <div className="card-body-background">
                  <h5 className="card-title">My Background-Computer Science</h5>
                  <p className="card-text">
                    I have completed one internship as a Data Science Intern at Traqline specializing in Python and SQL.
                  </p>
                  <p className="card-text">
                    We rewrote an antiquated process in Python using SQL wrappers,
                    verifying our data against previous data to an exact standard.
                  </p>
                  <p className="card-text">
                    I completed another internship in a Help Desk role at Steel Technologies, expanding my basic computer skills and buisness communication. I am now full time as a Software Engineer!
                  </p>
                </div>
              </div>
            </div>
            {/* Card-9: Current Projects */}
            <div className="col">
              <div className="card-9">
                <div className="card-body-current-projects">
                  <h5 className="card-title">Current Projects</h5>
                  <ul>
                    <li>RAG Fusion large document chatbot</li>
                    <li>Locally host DeepSeek on home computer</li>
                    <li>Train my own story writing chatbot</li>
                    <li>Build an IOS Idle Game</li>
                    <li>Further networking skills, possibly through certification</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
