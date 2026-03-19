export const TABS = ["All", "Mobile Apps", "Web Applications", "Other Applications ", "Web Design and Marketing"];

export interface Project {
    id: number;
    title: string;
    description: string;
    category: string;
    tags: string[];
    image: string;
    github?: string;
    live?: string;
    hasApk: boolean;
    downloadLink: string;
    downloadName: string;
}

export const PORTFOLIO_DATA: Project[] = [
    {
        id: 1,
        title: "Rhythm - Habit Builder App",
        description: "A habit building app built with Flutter, featuring clean architecture and biometric authentication.",
        category: TABS[1],
        tags: ["Flutter", "Dart", "Share Preferences", "SQflite"],
        image: "/images/rhythm.png",
        github: "https://github.com/Brillo-Digitals/rhythm_habit_building_app",
        hasApk: true,
        downloadLink: "/apps/rhythm-v1-0-1.apk",
        downloadName: "Rhythm-v1-0-1.apk"
    },
    {
        id: 2,
        title: "MoneyKa Store",
        description: "A custom Shopify theme providing a high-converting, headless-like online shopping experience.",
        category: TABS[4],
        tags: ["Shopify", "Liquid", "Tailwind", "JavaScript"],
        image: "/images/moneykastore.jpg",
        live: "https://moneykastore.com",
        hasApk: false,
        downloadLink: "#",
        downloadName: ""
    },
    {
        id: 3,
        title: "Brillo Digitals Website",
        description: "This very portfolio — a custom React website with Framer Motion animations and a premium dark UI.",
        category: TABS[2],
        tags: ["React", "TypeScript", "TailwindCss", "Framer Motion"],
        image: "/images/brillo_digitals.png",
        live: "/",
        github: "https://github.com/Brillo-Digitals/Brillo_Digital_Website",
        hasApk: false,
        downloadLink: "#",
        downloadName: ""
    },
    {
        id: 4,
        title: "Forcastr - Weather Forecast App",
        description: "A cross-platform weather app with real-time forecasts, location detection and a clean Flutter interface.",
        category: TABS[1],
        tags: ["Flutter", "REST API", "Shared Preferences", "Provider"],
        image: "/images/forcastr.png",
        github: "#",
        hasApk: true,
        downloadLink: "/apps/forcastr-v1-0-1.apk",
        downloadName: "forcastr-v1-0-1.apk"
    },
    {
        id: 5,
        title: "CGPA Calculator",
        description: "A smart academic GPA tracking app with semester management and local persistence, built with Flutter.",
        category: TABS[1],
        tags: ["Flutter", "Dart", "Shared Preferences", "Provider"],
        image: "/images/cgpa_calculator.png",
        github: "https://github.com/Brillo-Digitals/cgpa_calculator",
        hasApk: true,
        downloadLink: "/apps/cgpa-calculator-v1-0-0.apk",
        downloadName: "cgpa-calculator-v1-0-0.apk"
    },
    {
        id: 6,
        title: "Warden Game - Simulator",
        description: "A narrative-driven cryo-facility escape simulation with branching storylines and a dark terminal aesthetic.",
        category: TABS[1],
        tags: ["Flutter", "Dart"],
        image: "/images/warden.png",
        github: "https://github.com/Brillo-Digitals/warden.git",
        hasApk: true,
        downloadLink: "/apps/warden-v1-0-1.apk",
        downloadName: "warden-v1-0-1.apk"
    },
    {
        id: 7,
        title: "World War Two",
        description: "A 2D action-packed Python game with custom physics, enemy AI, and dynamic level progression using Pygame.",
        category: TABS[3],
        tags: ["Python", "Pygame", "Game Development", "OOP"],
        image: "/images/ww2.png",
        live: "#",
        github: "#",
        hasApk: false,
        downloadLink: "#",
        downloadName: ""
    },
    {
        id: 8,
        title: "Todo App",
        description: "A clean, fast Flutter to-do app with offline storage via Hive, task priorities, and smooth animations.",
        category: TABS[1],
        tags: ["Flutter", "Dart", "Hive", "Provider"],
        image: "/images/to_do_app.png",
        github: "https://github.com/Brillo-Digitals/to_to_app",
        hasApk: true,
        downloadLink: "/apps/todo-app-v1-0-0.apk",
        downloadName: "todo-app-v1-0-0.apk"
    },
    {
        id: 9,
        title: "PulseLab Beat Maker",
        description: "An interactive beat-making desktop app with step sequencing, real-time playback, layered drum kits, and tempo control.",
        category: TABS[3],
        tags: ["Python", "Pygame", "Audio Processing", "Music Tech"],
        image: "/images/beat_maker.png",
        live: "#",
        github: "#",
        hasApk: false,
        downloadLink: "#",
        downloadName: ""
    },
    {
        id: 10,
        title: "Quizzler",
        description: "A brain-teaser quiz app with multiple categories, timed rounds, and score tracking, built with Flutter.",
        category: TABS[1],
        tags: ["Flutter", "Dart", "Provider"],
        image: "/images/quizler.png",
        github: "https://github.com/Brillo-Digitals/my_apps/releases/download/v1.0.0/quizzler-v-1-0-0.apk",
        hasApk: true,
        downloadLink: "/apps/quizzler-v1-0-0.apk",
        downloadName: "quizzler-v1-0-0.apk"
    },
    {
        id: 11,
        title: "KeyWave Piano",
        description: "A digital piano simulator with keyboard-to-note mapping, polyphonic playback, octave shifting, and key animations.",
        category: TABS[3],
        tags: ["Python", "Pygame", "Sound Engine", "Interactive App"],
        image: "/images/piano.png",
        live: "#",
        github: "#",
        hasApk: false,
        downloadLink: "#",
        downloadName: ""
    },
    {
        id: 12,
        title: "A4's Collection Website",
        description: "A React e-commerce storefront with product browsing, filtering, and a polished shopping experience.",
        category: TABS[2],
        tags: ["React", "TypeScript", "TailwindCss", "JavaScript"],
        image: "/images/a4scollection.png",
        live: "https://a4scollections.netlify.app/",
        github: "https://github.com/Brillo-Digitals/A4-s-Collections",
        hasApk: false,
        downloadLink: "#",
        downloadName: ""
    },
    {
        id: 13,
        title: "ECAP",
        description: "A full-stack Django web application for agricultural product purchase and expert consultation.",
        category: TABS[2],
        tags: ["Python", "Django", "PostgreSQL", "REST API"],
        image: "/images/ecap.png",
        github: "#",
        hasApk: false,
        downloadLink: "#",
        downloadName: ""
    },
    {
        id: 14,
        title: "Galaxy",
        description: "A cross-platform space shooter game with enemy waves, physics, and leaderboard tracking, built with Kivy.",
        category: TABS[3],
        tags: ["Python", "Kivy", "Mobile App", "Cross-Platform"],
        image: "/images/galaxy.png",
        github: "https://github.com/Brillo-Digitals/galaxy",
        hasApk: false,
        downloadLink: "#",
        downloadName: ""
    },
    {
        id: 15,
        title: "Tetris",
        description: "A Multiplayer Tetris game clone with smooth controls, line clearing, and increasing difficulty levels, built using Pygame.",
        category: TABS[3],
        tags: ["Python", "Pygame", "Multiplayer", "Sound Engine", "Interactive App", "Game Pad Support"],
        image: "/images/tetris.png",
        github: "https://github.com/Brillo-Digitals/tetris",
        hasApk: false,
        downloadLink: "#",
        downloadName: ""
    },
    {
        id: 100,
        title: "Shopify Sales",
        description: "A comprehensive Shopify store optimization project that boosted sales by 30% through SEO, Klaviyo email campaigns, and targeted social media marketing.",
        category: TABS[4],
        tags: ["Shopify Sales", "Klaviyo", "SEO", "Social Media Marketing", "Google Analytics", "Marketing"],
        image: "/images/shopify/1701768264266 (1).png",
        hasApk: false,
        downloadLink: "#",
        downloadName: ""
    },
    {
        id: 101,
        title: "Shopify Online Sales",
        description: "A Shopify store marketing project that boosted sales by 70% through SEO, Klaviyo email campaigns, and targeted social media marketing",
        category: TABS[4],
        tags: ["Shopify Sales", "Klaviyo", "SEO", "Social Media Marketing", "Google Analytics", "Marketing"],
        image: "/images/shopify/IMG-20231205-WA0070.jpg",
        hasApk: false,
        downloadLink: "#",
        downloadName: ""
    },
    {
        id: 102,
        title: "Shopify Conversion Boost",
        description: "A Shopify store optimization project that improved conversion rates by 45% using CRO strategies, improved product pages, and automated Klaviyo email flows.",
        category: TABS[4],
        tags: ["Shopify", "CRO", "Klaviyo", "Email Marketing", "UX Optimization", "Marketing"],
        image: "/images/shopify/1701768254695.png",
        hasApk: false,
        downloadLink: "#",
        downloadName: ""
    },
    {
        id: 103,
        title: "Fashion Store Shopify Growth",
        description: "A fashion Shopify store growth campaign that increased monthly revenue by 60% using Facebook ads, SEO optimization, and customer retention strategies.",
        category: TABS[4],
        tags: ["Shopify", "Facebook Ads", "SEO", "Ecommerce", "Conversion Optimization", "Marketing"],
        image: "/images/shopify/1701768310437.png",
        hasApk: false,
        downloadLink: "#",
        downloadName: ""
    },
    {
        id: 104,
        title: "Shopify Email Revenue System",
        description: "Developed a complete Klaviyo email automation system including abandoned cart, welcome flow, and post purchase campaigns that generated consistent repeat sales.",
        category: TABS[4],
        tags: ["Shopify", "Klaviyo", "Email Automation", "Ecommerce Marketing", "Retention"],
        image: "/images/shopify/1701768350423.png",
        hasApk: false,
        downloadLink: "#",
        downloadName: ""
    },
    {
        id: 105,
        title: "Shopify Store SEO Ranking",
        description: "An SEO optimization project that helped a Shopify store rank on the first page of Google for multiple product keywords, increasing organic traffic by 120%.",
        category: TABS[4],
        tags: ["Shopify", "SEO", "Google Search", "Organic Traffic", "Ecommerce"],
        image: "/images/shopify/1701768372762.png",
        hasApk: false,
        downloadLink: "#",
        downloadName: ""
    },
    {
        id: 106,
        title: "Shopify Product Launch Campaign",
        description: "Managed a Shopify product launch campaign using influencer marketing, email campaigns, and social media promotions that generated strong launch day sales.",
        category: TABS[4],
        tags: ["Shopify", "Product Launch", "Influencer Marketing", "Social Media", "Email Marketing"],
        image: "/images/shopify/1701768375489.png",
        hasApk: false,
        downloadLink: "#",
        downloadName: ""
    },
    {
        id: 107,
        title: "Shopify Retargeting Ads Strategy",
        description: "Implemented a retargeting ads strategy using Facebook and Instagram ads to recover abandoned carts and increase repeat purchases.",
        category: TABS[4],
        tags: ["Shopify", "Facebook Ads", "Instagram Ads", "Retargeting", "Ecommerce Marketing"],
        image: "/images/shopify/1701768414478.png",
        hasApk: false,
        downloadLink: "#",
        downloadName: ""
    },
    {
        id: 108,
        title: "Shopify Store Analytics Setup",
        description: "Configured Google Analytics and advanced tracking for a Shopify store to monitor customer behavior, sales funnels, and marketing performance.",
        category: TABS[4],
        tags: ["Shopify", "Google Analytics", "Data Tracking", "Marketing Insights", "Ecommerce"],
        image: "/images/shopify/1701768439580.png",
        hasApk: false,
        downloadLink: "#",
        downloadName: ""
    },
    {
        id: 9,
        title: "The Little Boathouse",
        description: "A clean and elegant Shopify store designed for a lifestyle and home décor brand, focused on storytelling and smooth shopping experience.",
        category: TABS[4],
        tags: ["Wix", "Custom Design", "Responsive Design", "SEO"],
        image: "/images/thelittleboathouse.png",
        live: "https://www.thelittleboathouse.com/",
        hasApk: false,
        downloadLink: "#",
        downloadName: ""
    },
    {
        id: 20,
        title: "Britestone",
        description: "A modern and structured website for a construction and stone supply company, optimized for showcasing products and generating leads.",
        category: TABS[4],
        tags: ["WordPress", "Elementor", "CSS", "SEO"],
        image: "/images/britestone.png",
        live: "https://www.britestone.ca/",
        hasApk: false,
        downloadLink: "#",
        downloadName: ""
    },
    {
        id: 21,
        title: "The Pote Studio",
        description: "A minimal and artistic e-commerce experience built for a creative studio, highlighting craftsmanship and visual storytelling.",
        category: TABS[4],
        tags: ["Wix", "Custom Design", "Responsive Design", "SEO"],
        image: "/images/thepotestudio.png",
        live: "https://thepotestudio.com/",
        hasApk: false,
        downloadLink: "#",
        downloadName: ""
    },
    {
        id: 22,
        title: "Vivan MN",
        description: "A sleek fashion-focused online store built to deliver a premium shopping experience with clean layouts and strong branding.",
        category: TABS[4],
        tags: ["Shopify", "Liquid", "CSS3", "JavaScript"],
        image: "/images/vivanmn.png",
        live: "https://vivanmn.com",
        hasApk: false,
        downloadLink: "#",
        downloadName: ""
    },
    {
        id: 23,
        title: "Oak Sleep",
        description: "A high-converting e-commerce store for a sleep and wellness brand, designed with trust-building elements and optimized product pages.",
        category: TABS[4],
        tags: ["Shopify", "Klaviyo", "JavaScript", "Conversion Optimization"],
        image: "/images/oaksleep.png",
        live: "https://www.oaksleep.com.au",
        hasApk: false,
        downloadLink: "#",
        downloadName: ""
    },
    {
        id: 24,
        title: "EarthChimp",
        description: "A vibrant and conversion-focused Shopify store for a sustainable nutrition brand, combining bold design with persuasive product storytelling.",
        category: TABS[4],
        tags: ["Shopify Plus", "Klaviyo", "ReCharge", "JavaScript"],
        image: "/images/earthchimp.png",
        live: "https://earthchimp.com",
        hasApk: false,
        downloadLink: "#",
        downloadName: ""
    },
    {
        id: 25,
        title: "Emotoworx",
        description: "A performance-driven e-commerce platform for automotive products, designed for speed, clarity, and efficient product discovery.",
        category: TABS[4],
        tags: ["Shopify", "AJAX", "Liquid", "Performance Optimization"],
        image: "/images/emotoworx.png",
        live: "https://emotoworx.com",
        hasApk: false,
        downloadLink: "#",
        downloadName: ""
    }
];
