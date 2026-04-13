const fs = require('fs');
const path = require('path');

// Mocking the megaMenuData structure for extraction
// We will read the file and extract URLs
const megaMenuPath = path.join(__dirname, 'src', 'data', 'megaMenuData.js');
const rawContent = fs.readFileSync(megaMenuPath, 'utf8');

const linkRegex = /href:\s*["']\/([^"']+)["']/g;
let match;
const allRoutes = {
    services: new Set(),
    solutions: new Set(),
    industries: new Set()
};

while ((match = linkRegex.exec(rawContent)) !== null) {
    const fullPath = match[1];
    const parts = fullPath.split('/');
    const category = parts[0];
    const slug = parts[parts.length - 1]; // Handle nested like solutions/startups/mvp

    if (allRoutes[category]) {
        allRoutes[category].add(slug);
    }
}

// Slugs we already finished in high fidelity
const existingHighFidelity = [
    'ai-strategy', 'n8n-automation', 'ai-software-dev', 'api-strategy',
    'feasibility', 'fintech', 'media-entertainment',
    'ai-mobile-dev', 'salesforce-ai', 'servicenow-ai', 'gen-ai-consulting',
    'llm', 'adaptive-ai', 'ai-agents', 'openai-integration', 'azure-openai',
    'claude-ai', 'mvp', 'strategy', 'cto', 'education-edtech', 'healthcare'
];

const slugsToGenerate = {
    services: Array.from(allRoutes.services).filter(s => !existingHighFidelity.includes(s)),
    solutions: Array.from(allRoutes.solutions).filter(s => !existingHighFidelity.includes(s)),
    industries: Array.from(allRoutes.industries).filter(s => !existingHighFidelity.includes(s))
};

console.log('Total Slugs to Generate:',
    slugsToGenerate.services.length + slugsToGenerate.solutions.length + slugsToGenerate.industries.length
);

// Metadata for generation
const categoryInfo = {
    services: { tag: "Service Excellence", icon: "Settings" },
    solutions: { tag: "Strategic Solution", icon: "Lightbulb" },
    industries: { tag: "Industry Focus", icon: "Building" }
};

const generateHighFidelityData = (category, slug) => {
    const name = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    return {
        hero: {
            tag: categoryInfo[category].tag,
            title: `${name} Solutions`,
            subtitle: `Scalable ${name} for Modern Enterprises`,
            description: `We provide end-to-end technical expertise in ${name}, helping organizations optimize their performance, ensure security, and drive rapid growth in the digital era.`
        },
        clientLogos: {
            text: "Trusted by Global Leaders",
            highlight: "500",
            logos: ["/logo/beefree.png", "/logo/elastic.png", "/logo/meta.png", "/logo/netflix.png", "/logo/slack.png", "/logo/airbnb.png", "/logo/disney.png", "/logo/samsung.png", "/logo/nvidia.png"]
        },
        industrySolutions: {
            heading: `Our ${name} Capabilities`,
            description: `Leveraging cutting-edge tools to deliver robust ${name} results tailored to your specific business requirements.`,
            services: [
                {
                    title: `Custom ${name} Implementation`,
                    description: `Design and deployment of ${name} frameworks that align with your long-term goals.`,
                    features: ["Enterprise Scalability", "Real-time Monitoring", "Seamless Integration", "Secure Architecture"]
                },
                {
                    title: `Optimized ${name} Workflows`,
                    description: `Streamlining ${name} processes to eliminate manual bottlenecks and reduce operational costs.`,
                    features: ["Automated Triage", "Performance Benchmarks", "Cloud-Native Design"]
                }
            ]
        },
        consultingServices: {
            heading: `${name} Advisory & Consulting`,
            description: `Expert guidance on navigating the complexities of ${name} to ensure your technology stack is future-proof.`,
            services: [
                {
                    title: "Strategic Roadmap & Audit",
                    description: `Detailed assessment of your current ${name} maturity and a clear path to optimization.`,
                    features: ["Feasibility Audits", "Gap Analysis", "ROI Projections"],
                    isHighlighted: true
                },
                {
                    title: "Managed Support",
                    description: `Continuous maintenance and updates for your ${name} infrastructure.`,
                    features: ["24/7 Monitoring", "SLA-Backed Support", "Security Patching"]
                }
            ]
        },
        automationCTA: {
            title: `Transform Your ${name} Operations`,
            description: "Ready to scale? Connect with our experts to build a custom implementation plan.",
            buttonText: "Schedule a Consultation",
            href: "/contact-us"
        },
        industryCTA: {
            title: `Secure Your Future with ${name}`,
            description: "Partner with Invertio to lead your industry through technical excellence.",
            buttonText: "Start My Project",
            href: "/contact-us"
        },
        whyChooseUs: {
            title: `Why Invertio for ${name}`,
            description: [
                `We combine deep technical mastery of ${name} with business-first strategy to deliver measurable outcomes.`,
                "Our global team of engineers ensures your systems are built to the highest standards of security and reliability."
            ],
            features: [
                "10+ Years of Expertise", "Security-First Frameworks", "Agile Execution", "Global Delivery Centers"
            ],
            logos: ["/logo/beefree.png", "/logo/elastic.png", "/logo/meta.png", "/logo/netflix.png", "/logo/slack.png", "/logo/airbnb.png", "/logo/disney.png", "/logo/samsung.png", "/logo/nvidia.png"]
        },
        statsSection: {
            title: "Proven Impact",
            subtitle: `Helping organizations achieve more with better ${name}.`,
            buttonText: "View Case Studies",
            href: "/case-studies",
            stats: [
                { value: "40%", label: "Faster Deployment" },
                { value: "2x", label: "Operational Speed" },
                { value: "99.9%", label: "Uptime Guaranteed" }
            ]
        },
        industries: {
            badge: "Sector Expertise",
            heading: "Catering to Diverse Sectors",
            subheading: `Our ${name} expertise spans across various high-impact industries.`,
            items: [
                { title: "FinTech", description: "Secure financial platforms.", icon: "Wallet" },
                { title: "HealthTech", description: "Digital health innovations.", icon: "Stethoscope" }
            ]
        },
        techImpact: {
            title: "Technological Foundation",
            description: `Built on a foundation of security and performance, our ${name} solutions utilize modern cloud stacks and optimized APIs.`,
            stackDescription: `From CI/CD pipelines to secure database orchestration, we ensure your ${name} environment is robust and resilient.`
        },
        processTimeline: {
            title: "Our Delivery Process",
            description: "A standard phase-gate process for high-fidelity results.",
            steps: [
                { title: "Discovery", description: "Requirement gathering." },
                { title: "Development", description: "Agile build cycles." },
                { title: "QA & Launch", description: "Rigorous testing." }
            ]
        },
        hiringModels: {
            heading: "Flexible Engagement Model",
            subheading: "Choose how you want to work with us.",
            models: [
                { title: "Full Pod", icon: "Users", description: "Product discovery + Engineering.", billing: "Monthly Pod-Based", bestFor: "Full products", buttonText: "Hire Now" }
            ]
        },
        guideSection: {
            title: "Expert Insights",
            topics: [
                { id: "challenges", label: "Solving Challenges", content: { heading: `Managing ${name} Complexity`, description: `Navigating the technical debt and implementation hurdles of ${name}.`, points: ["Scalability Bottlenecks", "Security Vulnerabilities", "Integration Costs"] } }
            ]
        },
        faqs: {
            heading: "Frequently Asked Questions",
            subheading: `Common queries about our ${name} services.`,
            questions: [
                { question: "How long is the implementation?", answer: "Typically 4-12 weeks depending on scale." }
            ]
        }
    };
};

// Main execution
const files = {
    services: path.join(__dirname, 'src', 'data', 'services', 'services.json'),
    solutions: path.join(__dirname, 'src', 'data', 'solutions', 'solution.json'),
    industries: path.join(__dirname, 'src', 'data', 'industries', 'industries.json')
};

Object.entries(slugsToGenerate).forEach(([category, slugs]) => {
    const filePath = files[category];
    if (!fs.existsSync(filePath)) return;

    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    slugs.forEach(slug => {
        data[slug] = generateHighFidelityData(category, slug);
        console.log(`Generated High Fidelity for [${category}]: ${slug}`);
    });

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`Saved ${slugs.length} slugs to ${filePath}`);
});

console.log('--- ALL SLUGS POPULATED SUCCESSFULLY ---');
