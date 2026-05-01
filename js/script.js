// ===== THEME TOGGLE =====
const themeToggle = document.getElementById('theme-toggle');
const bodyElement = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light-mode';
bodyElement.classList.add(currentTheme);
updateThemeToggle();

themeToggle.addEventListener('click', function() {
    if (bodyElement.classList.contains('light-mode')) {
        bodyElement.classList.remove('light-mode');
        bodyElement.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    } else {
        bodyElement.classList.remove('dark-mode');
        bodyElement.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
    }
    updateThemeToggle();
});

function updateThemeToggle() {
    if (bodyElement.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️ Light';
    } else {
        themeToggle.textContent = '🌙 Dark';
    }
}

// ===== PROJECTS DATA =====
const projectsData = [
    {
        id: 1,
        title: "College Learning Management System",
        category: "backend",
        tech: ["ASP.NET Core MVC", "SQL"],
        description: "A web-based LMS where I learned about authentication, role-based access, and MVC architecture.",
        image: "assets/images/CollegeLMS.png"
    },
    {
        id: 2,
        title: "Student Management System",
        category: "desktop",
        tech: ["C#", "Windows Forms", "SQL"],
        description: "Desktop app with CRUD operations, search, and filtering. Helped me understand database integration.",
        image: "assets/images/Studentapp.png"
    },
    {
        id: 3,
        title: "College Management System",
        category: "desktop",
        tech: ["C#", "Windows Forms"],
        description: "Multi-form application for managing student and administrative data.",
        image: "assets/images/College-app.png"
    },
    {
        id: 4,
        title: "Teller Application",
        category: "desktop",
        tech: ["C#", "Windows Forms"],
        description: "Simulated banking transactions to practice transactional workflows.",
        image: "assets/images/Teller-App.png"
    },
    {
        id: 5,
        title: "Fleet Management Dashboard",
        category: "desktop",
        tech: ["C#", "Windows Forms", "SQL"],
        description: "Dashboard for fleet operations. Great learning experience with data visualization.",
        image: "assets/images/FleetManagement.png"
    },
    {
        id: 6,
        title: "Power BI Dashboard",
        category: "analytics",
        tech: ["Power BI", "Data Transformation"],
        description: "Worked on data cleaning and transformation for business insights.",
        image: "assets/images/PowerBI-Dashboard.png"
    },
    {
        id: 7,
        title: "Weather Dashboard",
        category: "web",
        tech: ["JavaScript", "HTML5", "CSS3"],
        description: "Real-time weather app using API integration and async/await. First web project!",
        image: "assets/images/weather-Dashboard.png"
    },
    {
        id: 8,
        title: "To-Do List Application",
        category: "web",
        tech: ["JavaScript", "DOM"],
        description: "Simple task manager with local storage. Great for learning DOM manipulation.",
        image: "assets/images/To-do-List.png"
    }
];

// ===== EXPERIENCE DATA =====
const experienceData = [
    {
        role: "Freelance Software Tester / QA",
        company: "Self-Employed",
        period: "2026 – Present",
        highlights: ["Executing test cases", "Identifying defects", "Learning QA best practices"]
    },
    {
        role: "Junior Software Developer (WIL)",
        company: "Foci Group",
        period: "Nov 2025 – Present",
        highlights: ["Supporting development", "Learning SDLC", "Team collaboration"]
    },
    {
        role: "Software Quality Assurer (Internship)",
        company: "Edian.io",
        period: "Nov 2022 – May 2023",
        highlights: ["Manual testing", "Defect documentation", "System validation"]
    }
];

// ===== RENDER PROJECTS =====
function renderProjects(filter = 'all') {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = '';

    const filteredProjects = filter === 'all' 
        ? projectsData 
        : projectsData.filter(p => p.category === filter);

    filteredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card fade-in';
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" onerror="this.src='https://via.placeholder.com/300x200?text=${encodeURIComponent(project.title)}'">
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// ===== RENDER EXPERIENCE =====
function renderExperience() {
    const timelineContainer = document.querySelector('.experience-timeline');
    timelineContainer.innerHTML = '';

    experienceData.forEach(exp => {
        const expItem = document.createElement('div');
        expItem.className = 'experience-item fade-in';
        expItem.innerHTML = `
            <div class="experience-item-header">
                <h3>${exp.role}</h3>
                <span class="experience-item-period">${exp.period}</span>
            </div>
            <p class="experience-item-company">${exp.company}</p>
            <ul class="experience-item-highlights">
                ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>
        `;
        timelineContainer.appendChild(expItem);
    });
}

// ===== PROJECT FILTERING =====
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Render filtered projects
        const filter = this.getAttribute('data-filter');
        renderProjects(filter);
    });
});

// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== ACTIVE NAV LINK ON SCROLL =====
window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', function() {
    renderProjects();
    renderExperience();
});

// ===== SMOOTH FADE IN ON SCROLL =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});
