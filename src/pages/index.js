import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Senior Software Developer Resume">
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="text--center margin-bottom--lg">
              <img 
                src="/img/profile.jpg" 
                alt="Profile" 
                style={{width: '200px', borderRadius: '50%'}}
              />
              <h1>Mahesh Kumar Sivakumarappa</h1>
              <p className="hero__subtitle">Senior Software Developer</p>
            </div>
            
            <section>
              <h2>About Me</h2>
              <p>
                To leverage my 13 years of client-facing and professional experience in IT sector, 
                where I can effectively contribute my skills as Software Professional, possessing 
                competent Technical Skills and update myself with current standards and trends.
              </p>
            </section>

            <section>
              <h2>Contact</h2>
              <ul>
                <li>📧 maheshsiv2008@gmail.com</li>
                <li>📞 +1 (470) 301-7074</li>
                <li>📍 Sandy Springs, GA 30328</li>
                <li>🔗 <a href="https://linkedin.com/in/maheshsiv">LinkedIn</a></li>
                <li>🔗 <a href="https://github.com/maheshsiv">GitHub</a></li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}