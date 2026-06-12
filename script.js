const BLOG_POSTS = [
  {
    id: "my-journey",
    title: "Shaping the Future with Intelligence: My Journey in AI, Machine Learning, and Data Science",
    category: "Artificial Intelligence",
    date: "June 10, 2026",
    readTime: "8 min read",
    excerpt: "Explore my academic journey, technical toolkit, certifications, and project insights as a B.Tech Computer Science Engineering student specializing in AI & ML at REVA University.",
    content: `
      <p>Hello and welcome! I am <strong>Karishma R</strong>, an aspiring Artificial Intelligence and Machine Learning Engineer, future Data Scientist, and B.Tech Computer Science Engineering student at REVA University.</p>
      <p>I believe that technology is not just about writing syntax; it is about building systems that think, learn, and solve real-world problems. In an era where data is the new electricity, my goal is to design the grids that process it and the intelligent algorithms that make sense of it. This blog is my digital portfolio—a space where I share my academic achievements, engineering projects, and the technical insights I gain as I explore the vast frontiers of Computer Science.</p>
      <blockquote class="glass-panel"><p>"The best way to predict the future is to invent it." — Alan Kay</p></blockquote>
      <h3>1. About Me: The Intersection of Logic, Data, and Curiosity</h3>
      <p>From a young age, I have been fascinated by how computers can learn patterns. What started as simple curiosity about search engine algorithms quickly evolved into a dedicated passion for Artificial Intelligence (AI), Machine Learning (ML), and Data Science. To me, AI is the ultimate tool for problem-solving. We are surrounded by complex challenges—from optimizing healthcare administration to predicting climate trends. I am driven by the desire to build software that does not just run instructions, but actively learns from data to make processes more efficient, accessible, and accurate.</p>
      <p>As a student, I approach engineering with a double-edged methodology: rigorous academic discipline and relentless hands-on exploration. I believe that a strong theoretical understanding of mathematics (such as linear algebra and statistics) combined with direct coding practice is the key to mastering machine learning. My academic standing (Semester 1 Result: Above 80%) is a reflection of this commitment, representing not just high grades, but a deep-seated dedication to continuous learning and intellectual growth.</p>
      <h3>2. My Academic Journey: Building the Foundations</h3>
      <p>My formal engineering journey began at REVA University in Bangalore, where I am pursuing my B.Tech in Computer Science Engineering with a specialization in Artificial Intelligence and Machine Learning (2025–2029). Bangalore, often called the Silicon Valley of India, provides the perfect backdrop for my studies. The proximity to global tech leaders and cutting-edge startups keeps me constantly motivated.</p>
      <ul>
        <li><strong>Current Standing:</strong> Semester 1 Result: Above 80%</li>
        <li><strong>Specialization:</strong> Artificial Intelligence & Machine Learning</li>
        <li><strong>Expected Graduation:</strong> 2029</li>
      </ul>
      <p>For me, university is a testing ground. It is where I challenge myself to look beyond the syllabus. During my first semesters, I have focused on mastering programming fundamentals and understanding how computer hardware and software cooperate. I actively participate in database design workshops and peer programming sessions, which helps me develop teamwork skills alongside technical competencies.</p>
      <h3>3. My Technical Toolkit: Languages, Tools, and Areas of Interest</h3>
      <p>An engineer is only as strong as their foundation. Over the past year, I have built a structured toolkit designed to help me manipulate data, manage database systems, and design algorithms.</p>
      <ul>
        <li><strong>Programming Languages:</strong> Python (Advanced - my primary language for ML/scripting), C (Intermediate - memory management and structures), and Core Java (Basic - OOP principles).</li>
        <li><strong>Tools &amp; Technologies:</strong> SQL (clean database queries and schema designs) and NumPy (numerical matrices and high-performance array operations).</li>
        <li><strong>Areas of Interest:</strong> Artificial Intelligence, Machine Learning, Data Science, and Database Management Systems (DBMS).</li>
      </ul>
      <h3>4. Continuous Learning: IBM Data Science Certification</h3>
      <p>To bridge the gap between classroom theory and industry practice, I am currently enrolled in the IBM Data Science Professional Certificate Course via Coursera. This professional-level curriculum is helping me master the exact methodologies utilized by modern data science teams. Through this course, I am gaining hands-on expertise in Exploratory Data Analysis (EDA), Data Visualization using Matplotlib, and building Scikit-Learn prediction models. This structured certification ensures that my knowledge remains industry-relevant, giving me the confidence to handle raw, messy data and build robust models.</p>
      <h3>5. Featured Project: Hospital Management System (SQL &amp; Database Design)</h3>
      <p>To put my SQL database knowledge into practice, I designed and developed a comprehensive Hospital Management System database structure to optimize healthcare data organization. The focus of this project was implementing proper database relational schemas and data normalization strategies to eliminate redundancy and improve workflow efficiency. Key features include administrative management, doctor listings, patient records directory, pharmacy logs, billing logs, and laboratory testing details. By enforcing Third Normal Form (3NF) normalization rules across the schema, I successfully reduced database storage overlap, prevented key update anomalies, and allowed fast data retrieval.</p>
      <h3>6. Career Objectives &amp; Future Vision</h3>
      <p>As I progress through my engineering degree, my immediate career goal is to secure a hands-on internship in Artificial Intelligence, Machine Learning, or Data Science. I am looking to join a dynamic, collaborative team where I can apply my Python programming, SQL database design skills, and NumPy data manipulation knowledge to solve meaningful challenges. My long-term vision is to establish myself as a leading AI/ML Professional who designs systems that positively shape society. I approach every day with the belief that there is always a new library to learn, a database query to optimize, or an algorithm to understand.</p>
    `
  },
  {
    id: "data-cleaning",
    title: "Why Cleaning Data is 80% of Data Science: My Journey with NumPy & Python",
    category: "Data Science",
    date: "May 28, 2026",
    readTime: "5 min read",
    excerpt: "As an aspiring Data Scientist, I quickly realized that raw data is messy. Here is what I learned about data preprocessing using Python and NumPy, and why it is the most critical phase of any machine learning workflow.",
    content: `
      <p>When you start learning Artificial Intelligence and Data Science, the textbooks often paint a beautiful picture: you feed data into a state-of-the-art Neural Network, and it spits out highly accurate predictions. But in the real world, the story is very different. As the famous industry saying goes, <strong>"80% of data science is data cleaning, and the other 20% is complaining about data cleaning."</strong></p>
      
      <p>During my self-study and university labs, I dug deep into Python and NumPy. Here is my breakdown of why cleaning data is so crucial, and some techniques I use to preprocess data.</p>
      
      <h3>1. The Danger of "Garbage In, Garbage Out"</h3>
      <p>Machine learning models learn patterns from data. If your dataset contains duplicates, erroneous entries, missing values, or inconsistent scaling, the model will faithfully learn those errors. For example, if you are predicting housing prices and some data points have <code>NaN</code> values or outliers (like a house listed for $0), your model's gradient descent will diverge, or it will yield heavily biased weights.</p>
      
      <h3>2. Essential Data Preprocessing with NumPy</h3>
      <p>NumPy is the backbone of scientific computing in Python. It offers fast, vectorized array operations that are perfect for handling datasets. Here are key techniques I apply:</p>
      
      <h4>Handling Missing Values</h4>
      <p>Instead of deleting records with missing values (which can destroy valuable data), we can impute them (replace them with the mean, median, or mode). With NumPy, you can do this efficiently:</p>
      <pre><code>import numpy as np

# Sample dataset with missing values (represented as NaN)
data = np.array([1.2, 2.5, np.nan, 4.8, np.nan, 6.1])

# Calculate mean, ignoring NaNs
mean_val = np.nanmean(data)

# Replace NaNs with the calculated mean
data[np.isnan(data)] = mean_val
print(data) # [1.2, 2.5, 3.65, 4.8, 3.65, 6.1]</code></pre>
      
      <h4>Feature Scaling: Standardization & Normalization</h4>
      <p>Algorithms like neural networks and K-Means clustering are sensitive to the scale of features. If one feature ranges from 0 to 1 and another from 0 to 1,000,000, the latter will dominate. I use standardization (z-score normalization) to center data around 0 with a standard deviation of 1:</p>
      <pre><code># Standardization formula: (x - mean) / std_deviation
mean = np.mean(data_matrix, axis=0)
std = np.std(data_matrix, axis=0)

standardized_data = (data_matrix - mean) / std</code></pre>
      
      <h3>Conclusion</h3>
      <p>Understanding these preprocessing fundamentals has made me appreciate the analytical side of AI. Before jumping into complex deep learning frameworks, mastering data cleaning with NumPy and Python is the absolute superpower every aspiring Data Scientist needs.</p>
    `
  },
  {
    id: "database-normalization",
    title: "Demystifying Database Normalization in Hospital Management Systems",
    category: "Database Management",
    date: "June 04, 2026",
    readTime: "6 min read",
    excerpt: "From designing tables to enforcing constraints: a deep dive into database design and SQL schema structures for building secure, scalable, and efficient hospital database architectures.",
    content: `
      <p>In high-stakes environments like healthcare, data integrity isn't just a technical preference; it's a critical operational requirement. Redundant patient records, mixed-up doctor assignments, or conflicting billing files can lead to catastrophic medical errors.</p>
      
      <p>For my academic project—a <strong>Hospital Management System</strong>—I was tasked with designing the relational backend. Here is how I approached database design and table normalization using SQL to ensure a single, consistent version of truth.</p>
      
      <h3>1. The Goal: Reducing Redundancy and Anomaly Risks</h3>
      <p>Without proper schema design, a database suffers from three main types of anomalies:</p>
      <ul>
        <li><strong>Insert Anomaly:</strong> Being unable to add doctor details without assigning them a patient first.</li>
        <li><strong>Update Anomaly:</strong> Having to update a patient's address in ten different rows because they had multiple laboratory tests. If one row is missed, data becomes inconsistent.</li>
        <li><strong>Delete Anomaly:</strong> Deleting a patient's billing record and accidentally deleting their entire diagnostic history.</li>
      </ul>
      
      <h3>2. The Normalization Journey</h3>
      <p>Normalization organizes tables to minimize redundancy. Here is how I structured the schema:</p>
      
      <h4>First Normal Form (1NF): Atomicity</h4>
      <p>Each table cell must contain a single (atomic) value, and there must be no repeating groups. In my early draft, the <code>Patients</code> table had a <code>ContactNumbers</code> field containing multiple comma-separated values. I separated this into a dedicated <code>PatientContacts</code> table, ensuring unique primary keys.</p>
      
      <h4>Second Normal Form (2NF): Full Functional Dependency</h4>
      <p>The table must meet 1NF, and all non-key attributes must depend fully on the primary key (no partial dependencies). For example, in a composite key table mapping <code>PatientID</code> and <code>LabTestID</code>, the test price depends only on the <code>LabTestID</code>. Storing price in this junction table violates 2NF, so I split it into a distinct <code>LabServices</code> catalog table.</p>
      
      <h4>Third Normal Form (3NF): Eliminating Transitive Dependencies</h4>
      <p>The table must meet 2NF, and no non-key attribute should depend on another non-key attribute. In my <code>DoctorAssignments</code> table, doctor details (like email and specialization) depended on <code>DoctorID</code>, which was related to <code>AssignmentID</code>. To resolve this, I created a standalone <code>Doctors</code> table and referenced it via a foreign key (<code>DoctorID</code>).</p>
      
      <h3>3. SQL Implementation Snippet</h3>
      <p>Here is a snippet of my final normalized schema layout for Patient Records and Doctor Specialties:</p>
      <pre><code>CREATE TABLE Specialties (
    SpecialtyID INT PRIMARY KEY AUTO_INCREMENT,
    SpecialtyName VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE Doctors (
    DoctorID INT PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    SpecialtyID INT,
    Email VARCHAR(100) UNIQUE,
    FOREIGN KEY (SpecialtyID) REFERENCES Specialties(SpecialtyID)
);

CREATE TABLE Patients (
    PatientID INT PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    DateOfBirth DATE NOT NULL,
    Gender ENUM('M', 'F', 'Other') NOT NULL
);</code></pre>
      
      <h3>Conclusion</h3>
      <p>Applying normalized design patterns to the Hospital Management System made query executions significantly faster, eliminated data inconsistency risks, and allowed seamless updates to records without disrupting database integrity. It solidified my SQL foundations and database management principles.</p>
    `
  },
  {
    id: "future-of-ai",
    title: "The Future of AI: From Linear Algebra to Neural Networks",
    category: "Artificial Intelligence",
    date: "June 09, 2026",
    readTime: "7 min read",
    excerpt: "An introductory roadmap for computer science students exploring how algorithms learn. Understanding the mathematical foundation from basic vectors to deep learning structures.",
    content: `
      <p>Artificial Intelligence is often surrounded by a sense of mystery. People imagine sci-fi sentient machines, but the reality is much more grounded in logic, calculation, and mathematics. As a Computer Science Engineering student specializing in AI & ML, I've spent my first semesters studying the foundational machinery that powers today's generative models and intelligent systems.</p>
      
      <p>Here is my student-friendly guide to how artificial systems actually learn, tracing the path from high-school math to deep neural networks.</p>
      
      <h3>1. The Mathematical DNA: Linear Algebra and Calculus</h3>
      <p>At its heart, machine learning is about finding patterns in multi-dimensional space. To do this, models represent data as vectors (lists of numbers) and matrices (grids of numbers).</p>
      <ul>
        <li><strong>Linear Algebra:</strong> When a model takes an input (like an image), it flattens the pixels into a vector. It then performs matrix multiplication with "weights" (the model's parameters) to map inputs to predictions.</li>
        <li><strong>Calculus:</strong> Specifically, partial derivatives. Optimization algorithms like Gradient Descent use derivatives to figure out in which direction to adjust the weights to minimize prediction error.</li>
      </ul>
      
      <h3>2. The Building Block: The Artificial Perceptron</h3>
      <p>A neural network is composed of layers of artificial neurons. A single neuron (called a Perceptron) takes inputs, multiplies them by weights, sums them up, adds a bias, and passes the result through an activation function (like ReLU or Sigmoid) to determine if it should fire.</p>
      
      <blockquote class="glass-panel">
        <p>"A neural network is simply a mathematical function that maps inputs to outputs, optimized iteratively using calculus to fit the training data."</p>
      </blockquote>
      
      <h3>3. Why Neural Networks are Changing the World</h3>
      <p>Thanks to their multi-layered architecture (which is why it is called "Deep" Learning), networks can approximate any complex mathematical function. They can capture non-linear relationships that traditional algorithms fail to identify, enabling breakthroughs in speech recognition, computer vision, and large language models.</p>
      
      <h3>My Learning Path</h3>
      <p>My goal is to continue bridging the gap between theory and practical engineering. I'm focusing on building clean python scripts, understanding statistical distributions, and practicing database optimizations. Learning the fundamentals first ensures that when I deploy pre-trained models, I actually understand the underlying computations.</p>
    `
  }
];

// Document Elements
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initScrollProgress();
  initMobileMenu();
  initNeuralCanvas();
  initScrollReveals();
  initSkillBars();
  initBlogSection();
  initContactForm();
  initDashboardAnimation();
});

/* =========================================================================
   1. Theme System (Dark / Light Mode)
   ========================================================================= */
function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("theme") || "dark";
  
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);
  
  themeToggle.addEventListener("click", () => {
    const activeTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = activeTheme === "dark" ? "light" : "dark";
    
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  const themeToggle = document.getElementById("theme-toggle");
  if (theme === "light") {
    themeToggle.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.32 11.32l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;
  } else {
    themeToggle.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" fill="currentColor"/>
      </svg>
    `;
  }
}

/* =========================================================================
   2. Scroll Progress Bar & Sticky Header
   ========================================================================= */
function initScrollProgress() {
  const progressBar = document.getElementById("scroll-progress");
  const header = document.getElementById("header");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");
  
  window.addEventListener("scroll", () => {
    // Scroll progress bar
    const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (windowScroll / height) * 100;
    progressBar.style.width = scrolled + "%";
    
    // Sticky header
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
    
    // Scroll Spy (Active nav link)
    let currentSection = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= (sectionTop - 150)) {
        currentSection = section.getAttribute("id");
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  });
}

/* =========================================================================
   3. Mobile Menu Navigation Toggle
   ========================================================================= */
function initMobileMenu() {
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");
  const navItems = document.querySelectorAll(".nav-link");
  
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuBtn.classList.toggle("active");
  });
  
  // Close menu when clicking nav link
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuBtn.classList.remove("active");
    });
  });
}

/* =========================================================================
   4. Hero Canvas Neural Network Animation
   ========================================================================= */
function initNeuralCanvas() {
  const canvas = document.getElementById("hero-canvas");
  if (!canvas) return;
  
  const ctx = canvas.getContext("2d");
  let animationFrameId;
  
  // Fit canvas to container bounds
  function resizeCanvas() {
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }
  
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);
  
  // Node system variables
  const particles = [];
  const particleCount = 45;
  const connectionDistance = 110;
  
  // Mouse state
  const mouse = {
    x: null,
    y: null,
    radius: 130
  };
  
  canvas.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  
  canvas.addEventListener("mouseleave", () => {
    mouse.x = null;
    mouse.y = null;
  });
  
  // Particle Class
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.baseRadius = Math.random() * 2.5 + 1.5;
      this.radius = this.baseRadius;
      // Assign cyan, indigo or purple glowing colors
      const colors = ["#6366f1", "#a855f7", "#14b8a6"];
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }
    
    update() {
      // Re-bounce from wall boundaries
      if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
      if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
      
      this.x += this.vx;
      this.y += this.vy;
      
      // Mouse interaction (hover gravity glow effect)
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius) {
          // Micro gravitational drift towards mouse
          const force = (mouse.radius - distance) / mouse.radius;
          this.x -= (dx / distance) * force * 0.8;
          this.y -= (dy / distance) * force * 0.8;
          this.radius = this.baseRadius + force * 2.5;
        } else {
          if (this.radius > this.baseRadius) this.radius -= 0.1;
        }
      } else {
        if (this.radius > this.baseRadius) this.radius -= 0.1;
      }
    }
    
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      // Dynamic glowing shadow
      ctx.shadowBlur = this.radius * 2;
      ctx.shadowColor = this.color;
      ctx.fill();
      ctx.shadowBlur = 0; // Reset shadow for lines
    }
  }
  
  // Initialize particles
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }
  
  // Animation Loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update and draw particles
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    
    // Draw interconnecting synapse lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < connectionDistance) {
          // Calculate opacity based on proximity
          const alpha = (1 - (dist / connectionDistance)) * 0.22;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          
          // Get current theme styling
          const isLight = document.documentElement.getAttribute("data-theme") === "light";
          ctx.strokeStyle = isLight 
            ? `rgba(99, 102, 241, ${alpha * 0.7})` 
            : `rgba(168, 85, 247, ${alpha})`;
            
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
    
    animationFrameId = requestAnimationFrame(animate);
  }
  
  animate();
}

/* =========================================================================
   5. Scroll-triggered Reveal Animations
   ========================================================================= */
function initScrollReveals() {
  const revealElements = document.querySelectorAll(".reveal");
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        revealObserver.unobserve(entry.target); // Reveal once
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });
  
  revealElements.forEach(el => revealObserver.observe(el));
}

/* =========================================================================
   6. Skills Card Progress Indicators (Triggered on scroll entrance)
   ========================================================================= */
function initSkillBars() {
  const skillBarContainer = document.querySelector("#skills");
  const skillBars = document.querySelectorAll(".skill-bar-fill");
  
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        skillBars.forEach(bar => {
          const targetPercent = bar.getAttribute("data-percent");
          bar.style.width = targetPercent;
        });
        skillObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });
  
  if (skillBarContainer) {
    skillObserver.observe(skillBarContainer);
  }
}

/* =========================================================================
   7. Blog System (Filters, Modal Render, Read Time)
   ========================================================================= */
function initBlogSection() {
  const blogGrid = document.getElementById("blog-grid");
  const blogModal = document.getElementById("blog-modal");
  const filterButtons = document.querySelectorAll(".blog-filter-btn");
  
  if (!blogGrid || !blogModal) return;
  
  // Render initial blog list
  renderBlogList(BLOG_POSTS);
  
  // Blog tag filtering click handler
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      const filter = btn.getAttribute("data-filter");
      if (filter === "all") {
        renderBlogList(BLOG_POSTS);
      } else {
        const filtered = BLOG_POSTS.filter(post => post.category.toLowerCase().replace(" ", "-") === filter);
        renderBlogList(filtered);
      }
    });
  });
  
  // Render function
  function renderBlogList(posts) {
    blogGrid.innerHTML = "";
    
    if (posts.length === 0) {
      blogGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary);">No blog articles found in this category.</p>`;
      return;
    }
    
    posts.forEach(post => {
      const card = document.createElement("div");
      card.className = "blog-card glass-panel reveal";
      card.setAttribute("data-id", post.id);
      
      // Determine placeholder svg layout depending on topic
      let svgMarkup = "";
      if (post.category === "Data Science") {
        svgMarkup = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v5.75c0 .621-.504 1.125-1.125 1.125h-2.25A1.125 1.125 0 013 18.875v-5.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v10.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v14.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>`;
      } else if (post.category === "Database Management") {
        svgMarkup = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125S3.75 12.278 3.75 10m16.5 8.25v3.75m-16.5-3.75v3.75" /></svg>`;
      } else {
        svgMarkup = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 21l8.982-8.983m-8.982 3.887l8.982-8.983m0 0l-3.887 3.887m3.887-3.887l3.182 3.182m-6.364 0l-3.182-3.182M3 3h4.5M3 7.5h4.5M3 12h18M3 16.5h18" /></svg>`;
      }
      
      card.innerHTML = `
        <div class="blog-card-img">
          <div class="blog-card-img-placeholder"></div>
          ${svgMarkup}
        </div>
        <div class="blog-card-content">
          <div class="blog-card-meta">
            <span class="badge badge-primary">${post.category}</span>
            <span>${post.date}</span>
          </div>
          <h3 class="blog-card-title">${post.title}</h3>
          <p class="blog-card-excerpt">${post.excerpt}</p>
          <div class="blog-card-footer">
            <span class="blog-read-more">Read Full Story 
              <svg style="width: 14px; height: 14px; fill: none; stroke: currentColor; stroke-width: 2;" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </span>
            <span style="color: var(--text-muted); font-size: 0.8rem; font-family: var(--font-mono);">${post.readTime}</span>
          </div>
        </div>
      `;
      
      // Open modal on click
      card.addEventListener("click", () => openBlogModal(post));
      
      blogGrid.appendChild(card);
    });
    
    // Reinforce scroll triggers for newly rendered cards
    initScrollReveals();
  }
  
  // Close buttons and overlay close
  const closeBtn = document.getElementById("blog-modal-close");
  const overlay = document.getElementById("blog-modal-overlay");
  
  closeBtn.addEventListener("click", closeBlogModal);
  overlay.addEventListener("click", closeBlogModal);
  
  // Handle escape key
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeBlogModal();
  });
}

function openBlogModal(post) {
  const modal = document.getElementById("blog-modal");
  const modalContent = document.getElementById("blog-modal-dynamic-content");
  
  // Lock body scroll
  document.body.style.overflow = "hidden";
  
  modalContent.innerHTML = `
    <article class="blog-post">
      <header class="blog-post-header">
        <div class="blog-post-meta-top">
          <span class="badge badge-secondary">${post.category}</span>
          <span>•</span>
          <span>Published: ${post.date}</span>
          <span>•</span>
          <span>Reading time: ${post.readTime}</span>
        </div>
        <h1 class="blog-post-title">${post.title}</h1>
      </header>
      <div class="blog-post-body">
        ${post.content}
      </div>
    </article>
  `;
  
  modal.classList.add("active");
}

function closeBlogModal() {
  const modal = document.getElementById("blog-modal");
  modal.classList.remove("active");
  // Unlock scroll
  document.body.style.overflow = "";
}

/* =========================================================================
   8. Project Mock Dashboard Data Refresh & Interaction Simulation
   ========================================================================= */
function initDashboardAnimation() {
  const mockTableRows = document.querySelectorAll(".table-row-mock");
  const activeStat = document.querySelector(".stat-box-num[data-dynamic]");
  
  if (!activeStat) return;
  
  // Cycle numerical metric of simulated database load
  let count = 94.2;
  setInterval(() => {
    count += (Math.random() - 0.5) * 0.4;
    if (count > 99.8) count = 94.0;
    if (count < 89.0) count = 94.0;
    activeStat.textContent = count.toFixed(1) + "%";
  }, 3000);
  
  // Subtle row highlight loops
  let activeRow = 0;
  setInterval(() => {
    mockTableRows.forEach((row, i) => {
      row.style.background = (i === activeRow) 
        ? "rgba(99, 102, 241, 0.05)" 
        : "transparent";
    });
    activeRow = (activeRow + 1) % mockTableRows.length;
  }, 2000);
}

/* =========================================================================
   9. Contact Form Submissions Handling & Validation
   ========================================================================= */
function initContactForm() {
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");
  
  if (!contactForm) return;
  
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Inputs
    const name = document.getElementById("form-name").value.trim();
    const email = document.getElementById("form-email").value.trim();
    const message = document.getElementById("form-message").value.trim();
    
    // Clear status classes
    formStatus.className = "form-status";
    formStatus.style.display = "none";
    
    // Check validation
    if (!name || !email || !message) {
      showStatus("Please fill out all input fields.", "error");
      return;
    }
    
    if (!validateEmail(email)) {
      showStatus("Please enter a valid email address.", "error");
      return;
    }
    
    // Simulate API request submission
    showStatus("Sending message...", "");
    const submitBtn = contactForm.querySelector("button[type='submit']");
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = "Sending...";
    
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      
      showStatus("Thank you, Karishma will get back to you shortly!", "success");
      contactForm.reset();
    }, 1500);
  });
  
  function showStatus(text, type) {
    formStatus.textContent = text;
    formStatus.style.display = "block";
    if (type) {
      formStatus.classList.add(type);
    }
  }
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
}
