
const fs = require('fs');

const commonLogos = [
  "/logo/beefree.png", "/logo/elastic.png", "/logo/meta.png", 
  "/logo/netflix.png", "/logo/slack.png", "/logo/airbnb.png",
  "/logo/disney.png", "/logo/samsung.png", "/logo/nvidia.png"
];

const formalName = (id) => id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

// Domain-Specific Hero and Capabilities Mapping
const categoryContent = {
  // --- SERVICE CATEGORIES ---
  "ai": {
    tag: "Artificial Intelligence & ML",
    title: "Enterprise-Grade AI & Machine Learning Infrastructure",
    subtitle: "Scaling Intelligence with Predictive Modeling and Generative AI",
    description: "Harness the power of cutting-edge neural networks and large language models (LLMs) to transform your organizational intelligence. We build secure, high-performance AI pipelines that transition from R&D to production-grade deployment, ensuring your algorithms deliver measurable ROI and competitive advantage in a data-driven world.",
    solutions: [
      { title: "Generative AI & LLM Deployment", description: "Design and implement secure, private LLM environments for internal knowledge management and automated content generation.", features: ["Custom fine-tuning with proprietary data", "Retrieval-Augmented Generation (RAG)", "Secure prompt engineering protocols", "High-throughput inference optimization", "Ethical AI safety and bias monitoring"] },
      { title: "Predictive Analytics & Forecasting", description: "Utilize deep learning to identify patterns and predict future outcomes across sales, inventory, and user behavior.", features: ["Real-time churn and risk prediction", "Time-series demand forecasting", "Dynamic pricing optimization models", "Behavioral segmentation at scale", "Automated anomaly and fraud detection"] }
    ]
  },
  "devops": {
    tag: "DevOps & Cloud Engineering",
    title: "Scalable Cloud Architecture and Zero-Downtime Infrastructure",
    subtitle: "Automating Deployments with Infrastructure as Code and Observability",
    description: "Modernize your software delivery lifecycle with robust CI/CD pipelines and highly resilient cloud architectures. We specialize in Kubernetes orchestration, automated scaling, and end-to-end security integration (DevSecOps) to ensure your applications are always available, secure, and ready to meet global demand.",
    solutions: [
      { title: "Kubernetes & Container Orchestration", description: "Master the complexity of microservices with automated scaling, service mesh, and self-healing infrastructure.", features: ["High-availability cluster management", "Automated rollbacks and canary deployments", "Service mesh (Istio/Linkerd) integration", "Multi-cloud and hybrid-cloud support", "Resource cost optimization and tagging"] },
      { title: "Infrastructure as Code (IaC)", description: "Manage your entire cloud environment through version-controlled code for repeatability and security.", features: ["Terraform and CloudFormation templates", "Automated security policy enforcement", "Immutable infrastructure workflows", "State management and drift detection", "Secure secret and credential isolation"] }
    ]
  },
  "design": {
    tag: "Product Design & UX",
    title: "Human-Centric Design Systems for Next-Gen Digital Products",
    subtitle: "Creating Intuitive User Experiences with Atomic Design and Prototyping",
    description: "Bridge the gap between technology and users with sophisticated UI/UX design that prioritizes clarity, conversion, and brand resonance. We build comprehensive atomic design systems and high-fidelity prototypes that ensure consistency across all touchpoints while delivering delightful interactions that users love.",
    solutions: [
      { title: "Atomic Design Systems", description: "Create a scalable visual language with modular components that speed up development and ensure brand consistency.", features: ["Reusable UI component libraries", "Comprehensive style guides (Typography/Color)", "Design-to-code automated handoff", "Accessibility (WCAG) compliance", "Multi-theme and dark-mode support"] },
      { title: "High-Fidelity Prototyping", description: "Validate ideas quickly with interactive prototypes that simulate the final product experience for user testing and stakeholder buy-in.", features: ["Interactive user journey flows", "Micro-animation and motion design", "Rapid usability testing and feedback", "User-centric information architecture", "Performance-optimized design assets"] }
    ]
  },
  "engineering": {
    tag: "Custom Software Engineering",
    title: "High-Performance Product Engineering for Global Enterprise",
    subtitle: "Building Resilient Backend Architectures and Modern Frontend Ecosystems",
    description: "Scale your digital capabilities with robust, full-stack engineering expertise. We specialize in high-concurrency Node.js/Go backends, responsive React/Next.js frontends, and cloud-native architectures that are built for security, scalability, and long-term maintainability in competitive markets.",
    solutions: [
      { title: "Modern Web Ecosystems", description: "Build lightning-fast, SEO-optimized web applications using the latest frontend frameworks and server-side rendering.", features: ["Next.js and React performance tuning", "Server-Side Rendering (SSR) & SSG", "Progressive Web App (PWA) development", "Web vitals and core optimization", "Edge-compute and CDN layer integration"] },
      { title: "High-Concurrency Backend", description: "Design resilient API layers and microservices that can handle millions of requests with low latency and total consistency.", features: ["Distributed system architecture", "Real-time WebSocket and event-sourcing", "Postgres/NoSQL database optimization", "Secure OAuth2/OIDC authentication", "GraphQL and RESTful API design"] }
    ]
  },
  // --- INDUSTRY CATEGORIES ---
  "fintech": {
    tag: "Finance & Regulated",
    title: "AI-Driven FinTech Solutions for Secure Scalability",
    subtitle: "Modernizing Financial Services with Intelligent Automation",
    description: "Navigate the complexities of modern finance with AI-powered infrastructure. From automated risk assessment to real-time fraud prevention, we help financial institutions build secure, compliant, and highly efficient digital ecosystems that drive customer trust and operational growth. Our approach ensures that every AI initiative contributes directly to your bottom line while fostering a culture of continuous innovation."
  }
};

const getCategoryMapping = (id) => {
  // Mapping logic to find the best content block
  if (id.includes('ai') || id.includes('nlp') || id.includes('ml-ops') || id.includes('predictive')) return categoryContent.ai;
  if (id.includes('devops') || id.includes('cloud') || id.includes('infrastructure')) return categoryContent.devops;
  if (id.includes('design') || id.includes('ux') || id.includes('user-research') || id.includes('prototype')) return categoryContent.design;
  if (id.includes('engineering') || id.includes('dev') || id.includes('frontend') || id.includes('backend')) return categoryContent.engineering;
  if (id === 'fintech') return categoryContent.fintech;
  return null;
};

const generateEntry = (id, type, template, categoryOverride = null) => {
  const mapping = categoryOverride || getCategoryMapping(id) || {
    tag: formalName(id),
    title: `AI-Driven ${formalName(id)} for Modern Enterprise`,
    subtitle: `Standardizing ${formalName(id)} with Intelligent Automation and AI`,
    description: `Scale your ${formalName(id).toLowerCase()} capabilities with a robust, AI-powered infrastructure that aligns with your strategic goals. We help you identify high-impact use cases, automate repetitive workflows, and build systems that are fundamentally secure, scalable, and audit-ready.`
  };

  return {
    hero: {
      tag: mapping.tag,
      title: mapping.title,
      subtitle: mapping.subtitle,
      description: mapping.description
    },
    clientLogos: {
      text: `Trusted by Fortune 500 companies and global ${mapping.tag} innovators`,
      highlight: "500",
      logos: commonLogos
    },
    industrySolutions: {
      heading: `Our ${mapping.tag} AI Capabilities`,
      description: `We build automation that is secure, scalable, and perfectly aligned with ${mapping.tag} industry standards.`,
      services: (mapping.solutions && mapping.solutions.length > 0) ? mapping.solutions : [
        { title: `Automated ${formalName(id)} Logic`, description: "Utilize state-of-the-art AI to optimize your workflows for maximum efficiency and security.", features: ["Process optimization", "Predictive modeling", "Secure integration", "Compliance monitoring", "Scalable scaling", "Audit trails"] }
      ]
    },
    consultingServices: {
      heading: `AI Strategy Consulting for ${mapping.tag}`,
      description: "We evaluate workflows and design strategies aligned with your goals for long-term success.",
      services: template.consultingServices.services.map(s => ({
        ...s,
        title: s.title.replace('AI Strategy', mapping.tag),
        description: s.description.replace('AI Strategy', mapping.tag)
      }))
    },
    automationCTA: template.automationCTA,
    industryCTA: {
      title: `Automate What Slows Your ${mapping.tag} Business Down`,
      description: `Remove manual work and scale your ${mapping.tag} operations with custom AI workflows.`,
      buttonText: "Schedule a Security Audit",
      href: "/contact-us"
    },
    whyChooseUs: {
      title: `Why Choose Our ${mapping.tag} Solutions`,
      description: [
        `Generic vendors cannot deliver reliable ${mapping.tag} solutions. You need a team that understands industry-specific compliance and data flow nuances.`,
        `We combine deep software engineering with cutting-edge AI research to deliver solutions that are fundamentally secure.`
      ],
      features: template.whyChooseUs.features.map(f => f.slice(0, 100)),
      logos: commonLogos
    },
    statsSection: {
      title: "Scale Operations Without Extra Headcount",
      subtitle: `Automate tasks so your team can focus on ${mapping.tag} growth.`,
      buttonText: "See the Impact",
      href: "/case-studies",
      stats: template.statsSection.stats
    },
    industries: template.industries,
    techImpact: {
      title: `Technology Stack for ${mapping.tag} Automation`,
      description: `We use a robust, modern, and high-performance tech stack.`,
      stackDescription: template.techImpact.stackDescription.replace('FinTech', mapping.tag)
    },
    processTimeline: {
      title: `Our Proven ${mapping.tag} Delivery Process`,
      description: "Our structured delivery cycle ensures security and zero-downtime migrations.",
      steps: template.processTimeline.steps
    },
    hiringModels: template.hiringModels,
    guideSection: template.guideSection,
    faqs: {
      heading: "Frequently Asked Questions",
      subheading: `Answers to common queries about our ${mapping.tag} services.`,
      questions: [
        { question: `How do you ensure data security?`, answer: "We use end-to-end encryption and private VPC environments." },
        { question: `Can you integrate with legacy systems?`, answer: "Yes, we specialize in building secure API wrappers." }
      ]
    }
  };
};

const industData = JSON.parse(fs.readFileSync('./src/data/industries/industries.json', 'utf8'));
const fintechTemplate = industData.fintech;

// Industries
Object.keys(industData).forEach(key => {
  if (key === 'fintech') return;
  industData[key] = generateEntry(key, 'industry', fintechTemplate);
});
fs.writeFileSync('./src/data/industries/industries.json', JSON.stringify(industData, null, 6));

// Services
const services = JSON.parse(fs.readFileSync('./src/data/services/services.json', 'utf8'));
Object.keys(services).forEach(key => {
  services[key] = generateEntry(key, 'service', fintechTemplate);
});
fs.writeFileSync('./src/data/services/services.json', JSON.stringify(services, null, 6));

// Solutions
const solutions = JSON.parse(fs.readFileSync('./src/data/solutions/solution.json', 'utf8'));
Object.keys(solutions).forEach(key => {
  solutions[key] = generateEntry(key, 'solution', fintechTemplate);
});
fs.writeFileSync('./src/data/solutions/solution.json', JSON.stringify(solutions, null, 6));

console.log('High-Fidelity Data Generation Complete!');
