const projectData = {
  ba: [
    { name: "GemLUX SaaS Platform", description: "Client interactions, requirements gathering, cross-functional documentation." },
    { name: "Terezi Internship Project", description: "Timeline planning, requirement documentation, team coordination." }
  ],
  da: [
    { name: "Iron Deficiency Prediction", description: "Analyzed dietary data to predict iron deficiency risk." },
    { name: "Western Province Bus Route Mapping", description: "Cleaned and visualized transport datasets for route analysis." }
  ],
  ml: [
    { name: "Bus Arrival Time Prediction", description: "Trained models using GPS data for ETA predictions." },
    { name: "Smart Meal Tracker", description: "Used ML to predict nutrient gaps from logged meals." }
  ]
};

function openPopup(roleKey) {
  const content = document.getElementById('popup-inner');
  const roleTitle = { ba: "Business Analyst", da: "Data Analyst", ml: "Machine Learning Engineer" }[roleKey];
  const projects = projectData[roleKey];

  content.innerHTML = `<h3>${roleTitle} Projects</h3>`;
  projects.forEach(p => {
    content.innerHTML += `
      <div style="margin-bottom: 20px;">
        <h4>${p.name}</h4>
        <p>${p.description}</p>
      </div>
    `;
  });

  document.getElementById('popup').style.display = 'flex';
}

function closePopup(event) {
  if (
    event.target.classList.contains('popup-overlay') ||
    event.target.classList.contains('close-btn')
  ) {
    document.getElementById('popup').style.display = 'none';
  }
}
