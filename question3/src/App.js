import React from 'react';
import './App.css';

function Header() {
  return (
    <header>
      <div>
        <p>TEERAPAT WATTANAMANONT</p>
        <p>Samutprakarn, 10540</p>
        <p> Mobile: +66 891220939 | Email: 64011655@kmitl.ac.th | GitHub: TRP64011655</p>
      </div>
    </header>
  );
}

function Education() {
  return (
    <section>
      <h2>Education</h2>
      <p><strong>King Mongkut's Institute of Technology Ladkrabang (2021 - Present)</strong></p>
      <ul>
        <li>Bachelor of Engineering Program in Software Engineering (International Program)</li>
      </ul>
    </section>
  );
}

function Skills() {
  return (
    <section>
      <h2>SKILLS</h2>
      <p><strong>Programming Languages & Frameworks</strong></p>
      <p>C, C++, Python, Java, HTML, CSS, JavaScript, NodeJS, Django, SQL</p>
    </section>
  );
}

function Others() {
  return (
    <section>
      <p><strong>Others</strong></p>
      <p>Microsoft Word, Microsoft Powerpoint, Google Docs, Google Slides, Canva, Figma</p>
    </section>
  );
}

function RelevantCoursework() {
  return (
    <section>
      <h2>RELEVANT COURSEWORK</h2>

      <p><strong>Flash Card Game</strong> (2021)</p>
      <ul>
        <li>TK GUI for flash card game driven by Python Language</li>
      </ul>

      <p><strong>SVG Chart Converter</strong> (2021)</p>
      <ul>
        <li>C programming application where user can input a text file that has data and convert them into graph and .svg format</li>
      </ul>

      <p><strong>Black Jack Game </strong> (2021)</p>
      <ul>
        <li>C programming text-based game</li>
      </ul>

      <p><strong>Parion Meeting Application</strong> (2022)</p>
      <ul>
        <li>By using Java and SQL, the application helps you find parties and your desired event. User can both create posts for the event or click join the event. </li>
      </ul>

      <p><strong>Busaba Hotel Management</strong> (2022)</p>
      <ul>
        <li>Using Python and QT to make a hotel room management system </li>
      </ul>

      <p><strong>Recipe Sharing Platform</strong> (2023)</p>
      <ul>
        <li>A website that was created from Javascript, ReactJS, HTML, CSS, Fast API, SQLite, and SQLAlchemy for users to post recipes online. </li>
      </ul>

      <p><strong>OfficeBot </strong> (2023)</p>
      <ul>
        <li>Designed and implemented a program that utilizes Python and Prolog, incorporating the A Star algorithm to efficiently navigate paths to specified destinations. Similar to automated bots in restaurants (Suki Teenoi, Sizzler, etc). </li>
      </ul>

    </section>
  );
}

function ExtracurricularActivities() {
  return (
    <section>
      <h2>EXTRACURRICULAR ACTIVITIES</h2>
      <p><strong>Internship at HINO Motors, Ltd. </strong> (November 2019 - December 2020)</p>
      <p>Gained valuable experience and insights into the organizational systems within an industrial setting. Additionally, developed a solid understanding of technical processes within the industrial factory environment</p>
    </section>
  );
}


function App() {
  return (
    <div className="App">
      <Header />
      <Education />
      <Skills />
      <Others />
      <RelevantCoursework />
      <ExtracurricularActivities />
    </div>
  );
}

export default App;
