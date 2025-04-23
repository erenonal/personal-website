import styles from "./resume.module.css";
import { Navigation } from "../components/nav";
import { Mail, Phone, MapPin, Linkedin, Globe, Github } from "lucide-react";
import DownloadButton from "@/util/downloadButton";

export default function Resume() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className={`${styles.resumeContainer} px-6`}>
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-200">Eren Önal</h1>
          <p className="text-xl text-gray-400">Frontend Developer</p>
        </header>
        <section className={`${styles.resumeContact}`}>
          <ul className="flex flex-wrap gap-6 text-lg">
            <li className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              <a href="mailto:onal.eren@hotmail.com">onal.eren@hotmail.com</a>
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              +90 536 454 16 16
            </li>
            <li className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              Ankara, Turkey
            </li>
            <li className="flex items-center">
              <Linkedin className="w-5 h-5 mr-2" />
              <a href="https://linkedin.com/in/erenonal">/erenonal</a>
            </li>
            <li className="flex items-center">
              <Github className="w-5 h-5 mr-2" />
              <a href="https://github.com/erenonal">/erenonal</a>
            </li>
            <li className="flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              <a href="/">erenonal.com</a>
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-3xl font-semibold text-gray-400">Education</h2>
          <div className="flex flex-row justify-start max-w-5xl">
            <div className="mb-6 mr-auto">
              <h3 className="text-2xl font-semibold text-gray-500">
                Kırıkkale University
              </h3>
              <p className="text-gray-600">
                MS in Computer Science (Present) - GPA: 3.64
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-500">
                Ankara Yıldırım Beyazıt University
              </h3>
              <p className="text-gray-600">
                BS in EE Engineering (2020) - GPA: 2.73
              </p>
            </div>
          </div>
        </section>
        <section className="mb-10">
          <h2 className="mb-2 text-3xl font-semibold text-gray-400">Skills</h2>
          <div className="flex flex-wrap gap-4">
            <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full">
              Vue 2 / Vue 3
            </span>
            <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full">
              React (Next.js)
            </span>
            <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full">
              TypeScript / JavaScript
            </span>
            <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full">
              Python
            </span>
            <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full">
              SQL / NoSQL
            </span>
            <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full">
              HTML5 / CSS3
            </span>
            <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full">
              Nuxt
            </span>
            <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full">
              Vite
            </span>
            <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full">
              Pinia / Vuex
            </span>
            <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full">
              Tailwind.css / Bootstrap
            </span>
            <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full">
              chart.js / highchart.js
            </span>
            <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full">
              Docker
            </span>
            <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full">
              GitHub / GitLab
            </span>
            <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full">
              Redis
            </span>
            <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full">
              FlaskAPI
            </span>
          </div>
        </section>
        <section className="pb-10">
          <h2 className="text-3xl font-semibold text-gray-400">
            Work Experience | +4 Years
          </h2>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-500">
              Frontend Developer <span className="text-sm">| Eva Commerce</span>
            </h3>
            <p className="text-gray-600">Aug 2024 – Present | San Diego, USA</p>
            <ul className="list-disc list-inside">
              <li>
                Migrated a large-scale Vue 2 app to Vue 3, transitioning from
                Vuex to Pinia and replacing Vuetify/Tailwind with custom SCSS.
                Maintained two active codebases for a smooth transition.
              </li>
              <li>
                Implemented Vite for faster builds, improved performance, and
                refactored legacy code.
              </li>
              <li>
                Developed real-time dashboards using Highcharts and WebSockets
                for live data updates, ensuring seamless analytics.
              </li>
              <li>
                Ensured secure authentication, preventing token-related issues
                during migration.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-500">
              Full Stack Developer <span className="text-sm">| Wisersense</span>
            </h3>
            <p className="text-gray-600">
              Feb 2024 – Aug 2024 | Ankara, Turkey
            </p>
            <ul className="list-disc list-inside">
              <li>Developed interactive front-end features using jQuery.</li>
              <li>
                Created dashboards for static, dynamic data visualization and
                generated reports using DevExpress.
              </li>
              <li>Developed backend solutions with .NET.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-500">
              Frontend Developer{" "}
              <span className="text-sm">| TRK Technology</span>
            </h3>
            <p className="text-gray-600">
              Feb 2022 – Feb 2024 | Ankara, Turkey
            </p>
            <p className="text-gray-600 mt-2">trk.space</p>
            <ul className="list-disc list-inside">
              <li>
                Led a team of seven members in developing a decision support
                dashboard project that visualizes real-time dynamic data.
              </li>
              <li>
                Developed the visual design and created a consumer-focused,
                customizable Vue.js SPA.
              </li>
              <li>
                Providing direct engagement and service to individual customers
                in a B2C environment, I also conduct product presentations.
              </li>
              <li>
                Migrated a project from Vue2 to Vue3 while further developing
                it.
              </li>
              <li>
                Utilized microservices, APIs, websockets, Redis for queue-cache
                structures.
              </li>
              <li>
                Developed statistical charts, timeseries charts, components for
                live and static data visualization.
              </li>
              <p className="text-gray-600 mt-2">trk.technology</p>

              <li>
                Designed site effectively for portfolio showcase with easy
                navigation.
              </li>
              <li>
                Ensured responsiveness across devices, adapting to screen sizes.
              </li>
              <li>Utilized semantic HTML5 tags for SEO and accessibility.</li>
              <li>
                Emphasized visuals to engage visitors and highlight offerings.
              </li>
              <li>Optimized loading times for enhanced performance.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-500">
              Software Developer
              <span className="text-sm"> | TRK Technology</span>
            </h3>
            <p className="text-gray-600">
              Aug 2021 – Feb 2022 | Ankara, Turkey
            </p>
            <p className="text-gray-600 mt-2">
              Consolidating Artificial Intelligence Gateway Service Integration
            </p>
            <ul className="list-disc list-inside">
              <li>
                Developed a Python gateway interface for backend microservices,
                each of which was Dockerized for enhanced portability and
                scalability.
              </li>
              <li>
                Implemented Redis cache and queue structures into the gateway
                system.
              </li>
              <li>Utilized ELK stack for logging purposes.</li>
            </ul>
            <p className="text-gray-600 mt-2">
              Time Series Prediction Model Development{" "}
            </p>
            <ul className="list-disc list-inside">
              <li>
                Utilized API and web sockets to efficiently scrape time series
                financial data from Binance.
              </li>
              <li>
                Engineered robust data normalization algorithms to preprocess
                the acquired data effectively.
              </li>
              <li>
                Developed several models incorporating LSTM, CNN, and SVM
                algorithms, enabling accurate prediction of candle movements and
                market trend.
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div className="fixed bottom-10 right-10">
        <DownloadButton />
      </div>
    </div>
  );
}
