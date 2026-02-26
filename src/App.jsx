import project1 from './assets/images/project1.jpg'
import project2 from './assets/images/project2.jpg'
import project3 from './assets/images/project3.jpg'

function App() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-28 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
          Backend Engineer for SaaS & Payments
        </h1>

        <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
          I build scalable backend systems, subscription architectures,
          and secure payment integrations that power modern SaaS platforms.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="mailto:your@email.com"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-xl font-semibold shadow-lg"
          >
            Hire Me
          </a>

          <a
            href="https://github.com/yourusername"
            className="px-6 py-3 border border-slate-700 hover:border-blue-500 transition rounded-xl font-semibold"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Specializations */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Specializations
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {[
            "Payment Integrations (Stripe & Flutterwave)",
            "Subscription Systems & Billing Logic",
            "REST API Development & Third-Party Integrations",
            "Authentication & Role-Based Access Control",
            "Admin Dashboards & SaaS Infrastructure",
            "Backend Refactor & Performance Optimization",
            "SaaS MVP Backend Build & Deployment"
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 bg-slate-900 rounded-2xl border border-slate-800 hover:border-blue-500 transition"
            >
              <p className="text-slate-300">{item}</p>
            </div>
          ))}

        </div>
      </section>

      {/* Featured Project */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Featured SaaS Backend System
        </h2>

        <p className="text-slate-400 text-center max-w-3xl mx-auto">
          Designed and built a complete SaaS backend with subscription lifecycle
          management, secure payment verification, webhook processing,
          invoice tracking, and role-based authentication.
        </p>

        <p className="text-center mt-4 text-slate-500">
          Node.js · Express · Prisma · PostgreSQL · Stripe · Flutterwave
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[project1, project2, project3].map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Project Screenshot"
              className="rounded-2xl shadow-xl hover:scale-105 transition duration-300"
            />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>

        <div className="space-y-3 text-slate-400">
          <p>Email: your@email.com</p>
          <p>GitHub: github.com/yourusername</p>
          <p>LinkedIn: linkedin.com/in/yourusername</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 border-t border-slate-800 text-slate-500 text-sm">
        © {new Date().getFullYear()} Denis James. All rights reserved.
      </footer>

    </div>
  )
}

export default App