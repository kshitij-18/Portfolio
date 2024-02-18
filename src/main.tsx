import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Layout from './pages/layout.tsx'
import IntroSection from './pages/IntroSection.tsx'
import ExperienceSection from './pages/ExperienceSection.tsx'
import Divider from './components/Divider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App>
      <Layout>
        <IntroSection />
        <Divider text='Experience' />
        <ExperienceSection />
      </Layout>
    </App>
  </React.StrictMode>,
)
