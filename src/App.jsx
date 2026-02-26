import project1 from './assets/images/project1.jpg'
import project2 from './assets/images/project2.jpg'
import project3 from './assets/images/project3.jpg'

function App() {
  return (
    <div className="container">

      {/* Hero Section */}
      <section className="hero">
        <h1>Backend Engineer | SaaS & Payment Integrations</h1>
        <p>
          I help companies implement backend features, integrate payment systems,
          and ship SaaS functionality quickly and reliably.
        </p>
      </section>

      {/* Specializations */}
      <section className="specialties">
        <h2>Specializations</h2>
        <ul>
          <li><strong>Payment Integrations:</strong> Stripe & Flutterwave checkout, webhook handling, secure transactions</li>
          <li><strong>API Development:</strong> RESTful API creation, third-party integrations, internal service communication</li>
          <li><strong>Authentication & Authorization:</strong> Role-based access, JWT, secure login systems</li>
          <li><strong>Admin Dashboards:</strong> Backend-driven dashboards for managing users, subscriptions, and reports</li>
          <li><strong>Bug Fixing & Backend Refactor:</strong> Optimize code, fix issues, and improve maintainability</li>
          <li><strong>Performance & DevOps:</strong> Server optimization, deployment scripts, monitoring, scaling support</li>
          <li><strong>SaaS MVP Build:</strong> Rapid feature development including subscription lifecycle and invoicing logic</li>
        </ul>
      </section>

      {/* Featured Project */}
      <section className="project">
        <h2>Featured Project – SaaS Backend System</h2>
        <p>
          Built a SaaS backend handling subscriptions, payments, role-based access, and dashboards.
          Implemented payment verification with Stripe & Flutterwave, webhook handling, invoice tracking, and API integration.
        </p>
        <p><strong>Tech Stack:</strong> Node.js, Express, Prisma, PostgreSQL, REST APIs</p>

        <div className="project-images">
          <img src={project1} alt="Dashboard screenshot" className="project-img" />
          <img src={project2} alt="Subscription logic screenshot" className="project-img" />
          <img src={project3} alt="Payment flow screenshot" className="project-img" />
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack">
        <h2>Tech Stack</h2>
        <p>Node.js | Express | Prisma | PostgreSQL | REST APIs | JWT Authentication | Stripe & Flutterwave</p>
      </section>

      {/* Contact */}
      <section className="contact">
        <h2>Contact</h2>
        <p>Email: your@email.com</p>
        <p>GitHub: github.com/yourusername</p>
        <p>LinkedIn: linkedin.com/in/yourusername</p>
      </section>

    </div>
  )
}

export default App