# Eva Tsatsi - Portfolio Website

> An authentic, learner-focused portfolio showcasing my continuous growth as an aspiring Software Engineer in Cohort 2026.

## 🎯 About This Portfolio

This is my personal portfolio website built to showcase my learning journey from frontend fundamentals to full-stack development. Rather than claiming expertise, I'm honest about my learning process and the challenges I've overcome with each project.

**Key Features:**
- 📱 **Mobile-First Responsive Design** - Built with Bootstrap 5 for proven responsive patterns
- 👩‍💻 **8 Featured Projects** - Organized by category (Frontend, Backend, Full-Stack, Data)
- 🎓 **Learning Highlights** - Each project includes key learnings and technologies used
- 🎨 **Professional Design** - Clean, modern interface with expandable project details
- 📸 **Personal Touch** - Includes my professional photo and authentic story

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI framework
- **Bootstrap 5** - Responsive grid and components
- **TypeScript** - Type safety
- **Vite** - Fast build tool

### Build & Deployment
- **Vite** - Development server and bundler
- **ESBuild** - Server bundling
- **Vercel** - Hosting and deployment

## 📂 Project Structure

```
eva-tsatsi-portfolio/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.tsx          # Main portfolio page
│   │   ├── components/           # Reusable UI components
│   │   ├── App.tsx               # Route configuration
│   │   └── index.css             # Global styles
│   ├── index.html                # HTML entry point
│   └── public/                   # Static assets
├── server/
│   └── index.ts                  # Express server
├── package.json                  # Dependencies
└── README.md                      # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- pnpm (or npm/yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/Evesprogram/EvaTsatsi.git
cd EvaTsatsi

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
pnpm run build
```

### Preview Production Build

```bash
pnpm run preview
```

## 📊 My Projects

### Full-Stack Projects
- **College LMS Application** - C#, .NET Core MVC, SQL Server
- **College Application Portal** - C#, Visual Studio, Data Migration

### Backend Projects
- **Teller Application** - SQL database design, transaction handling
- **Student Application Form** - Form validation, backend connectivity

### Frontend Projects
- **Weather Dashboard** - Async/Await, Fetch API, real-time updates
- **To-Do List Application** - DOM manipulation, JavaScript fundamentals
- **Pine Zoo Application** - API integration, responsive design

### Data & Analytics
- **PowerBI Dashboard** - Data cleaning, DCF analysis, visualization

## 🎓 Learning Journey

Each project represents a learning milestone:

1. **Frontend Fundamentals** - Started with HTML, CSS, JavaScript basics
2. **Backend & Databases** - Learned SQL, APIs, and server-side logic
3. **Full-Stack Development** - Explored C#, .NET Core, and enterprise architecture
4. **Data Analysis** - Developed skills in PowerBI and financial analysis

I'm continuously learning and improving with every project!

## 🌐 Deployment

### Deploy to Vercel

1. **Push to GitHub** (already done!)
2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import this GitHub repository
   - Vercel auto-detects React/Vite settings
   - Click "Deploy"

3. **Your live URL**: `https://eva-tsatsi-portfolio.vercel.app` (or custom domain)

### Environment Variables

No environment variables needed for this static portfolio. All data is hardcoded in the component.

## 📝 Customization

### Update Contact Information

Edit `client/src/pages/Home.tsx`:

```tsx
<a href="mailto:your@email.com" className="btn btn-success btn-lg">
  <Mail className="me-2" size={20} />
  Send Email
</a>
```

### Add New Projects

Add to the `projects` array in `client/src/pages/Home.tsx`:

```tsx
{
  id: "9",
  title: "Your Project Title",
  description: "What you built...",
  learnings: ["What you learned..."],
  category: "Frontend",
  technologies: ["Tech1", "Tech2"],
}
```

### Update Skills

Modify the skills array in the Skills section of `Home.tsx`.

## 🎨 Design Decisions

- **Bootstrap 5** - Demonstrates responsive design mastery with proven patterns
- **Mobile-First** - All layouts start mobile and scale up (col-12 → col-md-6 → col-lg-4)
- **Authentic Tone** - Emphasizes learning and growth, not false expertise
- **Expandable Projects** - "What I Learned" sections reveal depth without overwhelming

## 📱 Responsive Breakpoints

- **Mobile**: < 576px (single column)
- **Tablet**: 576px - 992px (2 columns)
- **Desktop**: > 992px (3 columns)

## 🔧 Available Scripts

```bash
pnpm run dev      # Start development server
pnpm run build    # Build for production
pnpm run preview  # Preview production build
pnpm run check    # TypeScript type checking
pnpm run format   # Format code with Prettier
```

## 📚 Resources Used

- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.3/)
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Vercel Deployment Guide](https://vercel.com/docs)

## 🤝 Contributing

This is a personal portfolio, but feedback is always welcome! Feel free to:
- Report issues
- Suggest improvements
- Share constructive feedback

## 📞 Contact

- **Email**: [Add your email]
- **GitHub**: [github.com/Evesprogram](https://github.com/Evesprogram)
- **LinkedIn**: [Add your LinkedIn]

## 📄 License

© 2026 Eva Tsatsi. All rights reserved.

---

**Last Updated**: April 29, 2026  
**Version**: 2.0.0 (Bootstrap Responsive Rebuild)  
**Status**: Ready for Vercel Deployment ✅
