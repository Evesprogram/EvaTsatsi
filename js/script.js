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
        tech: ["ASP.NET Core MVC", "SQL", "C#", "Entity Framework"],
        description: "Built a web-based LMS to manage student enrollments and course materials. Implemented role-based access control, user authentication, and followed MVC architecture patterns. Learned database design with Entity Framework, user authentication flows, and web application security best practices.",
        image: "assets/images/CollegeLMS.png",
        github: "https://github.com/Evesprogram"
    },
    {
        id: 2,
        title: "Student Management System",
        category: "desktop",
        tech: ["C#", "Windows Forms", "SQL", "ADO.NET"],
        description: "Developed a desktop application for managing ~200+ student records with full CRUD operations. Implemented search, filtering, and data validation. Gained hands-on experience with database integration using ADO.NET, Windows Forms UI design, and SQL query optimization.",
        image: "assets/images/Studentapp.png",
        github: "https://github.com/Evesprogram"
    },
    {
        id: 3,
        title: "College Management System",
        category: "desktop",
        tech: ["C#", "Windows Forms", "SQL"],
        description: "Created a multi-form desktop application for managing college operations including student, staff, and administrative data. Focused on user interface design, form navigation patterns, and data consistency across multiple modules.",
        image: "assets/images/College-app.png",
        github: "https://github.com/Evesprogram"
    },
    {
        id: 4,
        title: "Teller Application",
        category: "desktop",
        tech: ["C#", "Windows Forms", "OOP"],
        description: "Built a banking simulation application to practice transactional workflows and financial calculations. Implemented account management, transaction logging, balance tracking, and error handling for edge cases. Strengthened OOP principles and business logic design.",
        image: "assets/images/Teller-App.png",
        github: "https://github.com/Evesprogram"
    },
    {
        id: 5,
        title: "Fleet Management Dashboard",
        category: "desktop",
        tech: ["C#", "Windows Forms", "SQL", "Data Visualization"],
        description: "Developed a dashboard for tracking fleet operations with real-time data visualization. Implemented data aggregation from SQL database and created interactive charts. Strengthened skills in data visualization, performance optimization, and complex UI layouts.",
        image: "assets/images/FleetManagement.png",
        github: "https://github.com/Evesprogram"
    },
    {
        id: 6,
        title: "Power BI Dashboard",
        category: "analytics",
        tech: ["Power BI", "Data Transformation", "DAX", "SQL"],
        description: "Designed and built interactive dashboards for business intelligence. Performed data cleaning, transformation, and created DAX measures for KPI tracking. Demonstrated ability to turn raw data into actionable business insights for stakeholders.",
        image: "assets/images/PowerBI-Dashboard.png",
        github: "#"
    },
    {
        id: 7,
        title: "Weather Dashboard",
        category: "web",
        tech: ["JavaScript", "HTML5", "CSS3", "REST API", "Async/Await"],
        description: "Built a responsive weather application that fetches real-time data from a weather API using async/await. Implemented dynamic UI updates and local storage for user preferences. My first web project that solidified JavaScript fundamentals and API integration.",
        image: "assets/images/weather-Dashboard.png",
        github: "https://github.com/Evesprogram"
    },
    {
        id: 8,
        title: "To-Do List Application",
        category: "web",
        tech: ["JavaScript", "DOM", "Local Storage", "HTML5"],
        description: "Created a task management app with add, edit, delete, and mark-complete functionality. Used DOM manipulation and browser local storage for data persistence. Excellent foundation for understanding JavaScript interactivity, event handling, and state management.",
        image: "assets/images/To-do-List.png",
        github: "https://github.com/Evesprogram"
    }
];

// ===== EXPERIENCE DATA =====
const experienceData = [
    {
        role: "Junior Software Developer (WIL)",
        company: "Foci Group",
        period: "Nov 2025 – Present",
        highlights: [
            "Collaborated with development team on feature implementation and bug fixes",
            "Participated in daily standups and sprint planning using Agile methodology",
            "Gained practical experience with SDLC, code reviews, and Git workflows"
        ]
    },
    {
        role: "Freelance Software Tester / QA",
        company: "Self-Employed",
        period: "2026 – Present",
        highlights: [
            "Executed ~50+ manual test cases across multiple projects",
            "Documented and logged defects in tracking systems with clear reproduction steps",
            "Performed regression testing and user acceptance testing (UAT)"
        ]
    },
    {
        role: "Software Quality Assurer (Internship)",
        company: "Edian.io",
        period: "Nov 2022 – May 2023",
        highlights: [
            "Conducted manual testing on web and mobile applications",
            "Created detailed defect reports and participated in defect triage meetings",
            "Performed system validation and compatibility testing across browsers"
        ]
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
        const githubLink = project.github !== '#' ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">View on GitHub</a>` : '';
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy" width="400" height="250" onerror="this.src='https://via.placeholder.com/400x250?text=${encodeURIComponent(project.title)}'">
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${githubLink}
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
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const toggler = document.querySelector('.navbar-toggler');
                toggler.click();
            }
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
