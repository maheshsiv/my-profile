import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Senior Developer Resume">
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="text--center margin-bottom--lg">
              <img 
                src="/img/profile.jpg" 
                alt="Profile" 
                style={{width: '200px', borderRadius: '50%'}}
              />
              <h1>Your Name</h1>
              <p className="hero__subtitle">Senior Full Stack Developer</p>
            </div>
            
            <section>
              <h2>About Me</h2>
              <p>
                Experienced senior developer with 8+ years in full-stack development,
                specializing in React, Node.js, and cloud architecture. Passionate about
                building scalable applications and mentoring junior developers.
              </p>
            </section>

            <section>
              <h2>Contact</h2>
              <ul>
                <li>📧 your.email@example.com</li>
                <li>📍 Your City, Country</li>
                <li>🔗 <a href="https://linkedin.com/in/yourprofile">LinkedIn</a></li>
                <li>🔗 <a href="https://github.com/yourusername">GitHub</a></li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}