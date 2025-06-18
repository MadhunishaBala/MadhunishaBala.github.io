const projectData = {
  DA: {
    experience: "As a Data Analyst, I uncovered actionable insights from large datasets and visualized patterns to support decision-making.",
    projects: [
      { name: "Iron Deficiency Prediction", description: "Analyzed dietary data to predict iron deficiency risk." },
      { name: "Western Province Bus Route Mapping", description: "Cleaned and visualized transport datasets for route analysis." }
    ]
  },
  ML: {
    experience: "As an ML Engineer, I built predictive models that learned from real-world data and improved system intelligence.",
    projects: [
      { name: "Bus Arrival Time Prediction", description: "Trained models using GPS data for ETA predictions." },
      { name: "Smart Meal Tracker", description: "Used ML to predict nutrient gaps from logged meals." }
    ]
  },
  AI: {
    experience: "As an AI Engineer, I worked on integrating AI into real-life applications by combining NLP, computer vision, and machine learning.",
    projects: [
      { name: "Smart Assistant Prototype", description: "Developed a context-aware AI assistant using NLP." },
      { name: "Ethical AI Framework", description: "Researched bias detection methods and responsible AI practices." }
    ]
  },
  BA: {
    experience: "As a Business Analyst, I bridged gaps between clients and development teams, gathering requirements and shaping meaningful features.",
    projects: [
      { name: "GemLUX SaaS Platform", description: "Client interactions, requirements gathering, cross-functional documentation." },
      { name: "Terezi Internship Project", description: "Timeline planning, requirement documentation, team coordination." }
    ]
  },
  PM: {
    experience: "As a Project Manager, I led cross-functional teams, ensured timelines were met, and delivered client-centric solutions.",
    projects: [
      { name: "Capstone Project Oversight", description: "Led a multi-disciplinary team across planning and execution." },
      { name: "Workflow Optimization", description: "Streamlined internal task tracking and stakeholder reporting." }
    ]
  },
  SM: {
    experience: "As a SCRUM Master, I ensured agile best practices, facilitated ceremonies, and helped teams deliver value consistently.",
    projects: [
      { name: "Agile Sprint Facilitation", description: "Facilitated daily standups, sprint planning, retrospectives." },
      { name: "Team Health Monitoring", description: "Promoted velocity tracking and removed roadblocks." }
    ]
  },
  TR: {
    experience: "As a Teacher, I translated technical topics into digestible learning and helped students unlock their potential.",
    projects: [
      { name: "Guest Lecturer - AI in Daily Life", description: "Conducted a class session explaining AI with real-life use cases." },
      { name: "Peer Teaching Sessions", description: "Helped classmates with difficult modules and exam prep." }
    ]
  },
  TW: {
    experience: "As a Technical Writer, I crafted documentation, tutorials, and articles to communicate complex ideas clearly and efficiently.",
    projects: [
      { name: "Medium Blog - BA Journey", description: "Wrote about experiences and insights from being a student BA intern." },
      { name: "Project Documentation Guides", description: "Created templates and best practice guides for BA and QA roles." }
    ]
  }
};

function openPopup(roleKey) {
  const overlay = document.getElementById('popup-overlay');
  const exp = document.getElementById('role-experience');
  const proj = document.getElementById('role-projects');

  const role = projectData[roleKey];
  if (!role) return;

  exp.innerHTML = `<h3>Experience</h3><p>${role.experience}</p>`;

  proj.innerHTML = `<h3>Projects</h3>`;
  role.projects.forEach(p => {
    proj.innerHTML += `
      <div class="project-item">
        <h4>${p.name}</h4>
        <p>${p.description}</p>
      </div>
    `;
  });

  overlay.style.display = 'flex';
}

function closePopup(event) {
  if (
    event.target.classList.contains('popup-overlay') ||
    event.target.classList.contains('close-btn')
  ) {
    document.getElementById('popup-overlay').style.display = 'none';
  }
}


  const scriptURL = 'https://script.google.com/macros/s/AKfycbzmojSZJvq8YAOaLoYW9Rs68hqFUO8eR7OwYxMlIiedseTav_SMTUM8aZOORWx2320/exec';
  const form = document.forms['submit-to-google-sheet'];
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.style.color = 'green';
        msg.innerHTML = "Message sent successfully!";
        setTimeout(() => { msg.innerHTML = ""; }, 4000);
        form.reset();
      })
      .catch(error => {
        console.error('Error!', error.message);
        msg.style.color = 'red';
        msg.innerHTML = "Oops! Something went wrong. Please try again.";
      });
  });

const toggle = document.getElementById("darkModeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Optional: toggle dark-mode on other components
  document.querySelectorAll('.role-card').forEach(el => el.classList.toggle('dark-mode'));
  document.querySelector('.Navigation').classList.toggle('dark-mode');
  document.querySelectorAll('nav ul li a').forEach(el => el.classList.toggle('dark-mode'));
});
