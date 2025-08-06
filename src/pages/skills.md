---
title: Skills
---

# Technical Skills

<div class="skills-container">

## Programming Languages
<div class="skill-category">
  <div class="skill-item">
    <div class="skill-name">Java</div>
    <div class="skill-bar">
      <div class="skill-level expert" data-level="95%"></div>
    </div>
    <span class="skill-years">13+ years</span>
  </div>
  <div class="skill-item">
    <div class="skill-name">JavaScript</div>
    <div class="skill-bar">
      <div class="skill-level proficient" data-level="80%"></div>
    </div>
    <span class="skill-years">8+ years</span>
  </div>
  <div class="skill-item">
    <div class="skill-name">SQL</div>
    <div class="skill-bar">
      <div class="skill-level expert" data-level="90%"></div>
    </div>
    <span class="skill-years">12+ years</span>
  </div>
  <div class="skill-item">
    <div class="skill-name">CQL</div>
    <div class="skill-bar">
      <div class="skill-level intermediate" data-level="70%"></div>
    </div>
    <span class="skill-years">3+ years</span>
  </div>
</div>

## Frameworks & Technologies
<div class="skill-category">
  <div class="skill-item">
    <div class="skill-name">Spring Framework</div>
    <div class="skill-bar">
      <div class="skill-level expert" data-level="95%"></div>
    </div>
    <span class="skill-years">10+ years</span>
  </div>
  <div class="skill-item">
    <div class="skill-name">Spring Boot</div>
    <div class="skill-bar">
      <div class="skill-level expert" data-level="90%"></div>
    </div>
    <span class="skill-years">8+ years</span>
  </div>
  <div class="skill-item">
    <div class="skill-name">Angular</div>
    <div class="skill-bar">
      <div class="skill-level proficient" data-level="85%"></div>
    </div>
    <span class="skill-years">6+ years</span>
  </div>
  <div class="skill-item">
    <div class="skill-name">React</div>
    <div class="skill-bar">
      <div class="skill-level proficient" data-level="75%"></div>
    </div>
    <span class="skill-years">2+ years</span>
  </div>
  <div class="skill-item">
    <div class="skill-name">Microservices</div>
    <div class="skill-bar">
      <div class="skill-level expert" data-level="95%"></div>
    </div>
    <span class="skill-years">8+ years</span>
  </div>
</div>

## Cloud & DevOps
<div class="skill-category">
  <div class="skill-item">
    <div class="skill-name">AWS</div>
    <div class="skill-bar">
      <div class="skill-level proficient" data-level="85%"></div>
    </div>
    <span class="skill-years">5+ years</span>
  </div>
  <div class="skill-item">
    <div class="skill-name">OpenShift</div>
    <div class="skill-bar">
      <div class="skill-level intermediate" data-level="70%"></div>
    </div>
    <span class="skill-years">3+ years</span>
  </div>
  <div class="skill-item">
    <div class="skill-name">Docker</div>
    <div class="skill-bar">
      <div class="skill-level proficient" data-level="80%"></div>
    </div>
    <span class="skill-years">4+ years</span>
  </div>
</div>

## Databases
<div class="skill-category">
  <div class="skill-item">
    <div class="skill-name">MySQL</div>
    <div class="skill-bar">
      <div class="skill-level expert" data-level="90%"></div>
    </div>
    <span class="skill-years">12+ years</span>
  </div>
  <div class="skill-item">
    <div class="skill-name">Oracle</div>
    <div class="skill-bar">
      <div class="skill-level proficient" data-level="80%"></div>
    </div>
    <span class="skill-years">8+ years</span>
  </div>
  <div class="skill-item">
    <div class="skill-name">Cassandra</div>
    <div class="skill-bar">
      <div class="skill-level proficient" data-level="75%"></div>
    </div>
    <span class="skill-years">4+ years</span>
  </div>
</div>

## Tools & Development
<div class="skill-category">
  <div class="skill-item">
    <div class="skill-name">IntelliJ IDEA</div>
    <div class="skill-bar">
      <div class="skill-level expert" data-level="95%"></div>
    </div>
  </div>
  <div class="skill-item">
    <div class="skill-name">Git</div>
    <div class="skill-bar">
      <div class="skill-level expert" data-level="90%"></div>
    </div>
  </div>
  <div class="skill-item">
    <div class="skill-name">Jira</div>
    <div class="skill-bar">
      <div class="skill-level proficient" data-level="85%"></div>
    </div>
  </div>
</div>

</div>

<style>
.skills-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.skill-category {
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-radius: 12px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  transition: transform 0.3s ease;
}

.skill-category:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.skill-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.75rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
}

.skill-item:hover {
  background: rgba(255, 255, 255, 1);
  transform: translateX(5px);
}

.skill-name {
  min-width: 180px;
  font-weight: 600;
  color: #2c3e50;
  font-size: 1rem;
}

.skill-bar {
  flex: 1;
  height: 12px;
  background: #ecf0f1;
  border-radius: 10px;
  margin: 0 1rem;
  overflow: hidden;
  position: relative;
}

.skill-level {
  height: 100%;
  border-radius: 10px;
  animation: fillBar 2s ease-out;
  position: relative;
  overflow: hidden;
}

.skill-level.expert {
  background: linear-gradient(90deg, #27ae60, #2ecc71);
  box-shadow: 0 2px 4px rgba(39, 174, 96, 0.3);
}

.skill-level.proficient {
  background: linear-gradient(90deg, #3498db, #5dade2);
  box-shadow: 0 2px 4px rgba(52, 152, 219, 0.3);
}

.skill-level.intermediate {
  background: linear-gradient(90deg, #f39c12, #f7dc6f);
  box-shadow: 0 2px 4px rgba(243, 156, 18, 0.3);
}

.skill-level::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  animation: shimmer 3s infinite;
}

.skill-years {
  min-width: 80px;
  font-size: 0.875rem;
  color: #7f8c8d;
  font-weight: 500;
  text-align: right;
}

@keyframes fillBar {
  from {
    width: 0%;
  }
  to {
    width: var(--skill-width, 0%);
  }
}

@keyframes shimmer {
  0% {
    left: -100%;
  }
  50% {
    left: 100%;
  }
  100% {
    left: 100%;
  }
}

/* Dark mode support */
[data-theme='dark'] .skill-category {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
}

[data-theme='dark'] .skill-item {
  background: rgba(52, 73, 94, 0.8);
}

[data-theme='dark'] .skill-item:hover {
  background: rgba(52, 73, 94, 1);
}

[data-theme='dark'] .skill-name {
  color: #ecf0f1;
}

[data-theme='dark'] .skill-bar {
  background: #34495e;
}

/* Responsive design */
@media (max-width: 768px) {
  .skill-item {
    flex-direction: column;
    align-items: stretch;
    text-align: center;
  }
  
  .skill-name {
    min-width: auto;
    margin-bottom: 0.5rem;
  }
  
  .skill-bar {
    margin: 0.5rem 0;
  }
  
  .skill-years {
    min-width: auto;
    text-align: center;
  }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const skillLevels = document.querySelectorAll('.skill-level');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const level = entry.target.getAttribute('data-level');
        entry.target.style.setProperty('--skill-width', level);
        entry.target.style.width = level;
      }
    });
  }, {
    threshold: 0.5
  });
  
  skillLevels.forEach(skill => {
    observer.observe(skill);
  });
});
</script>