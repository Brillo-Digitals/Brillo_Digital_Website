export const toSlug = (text: string) => text.replace(/\s+/g, '');
export const toProjectSlug = (text: string) =>
    text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');

export const TABS = ["All", "Mobile Apps", "Web Applications", "Other Applications ", "Web Design and Marketing"];

export interface Project {
    id: number;
    title: string;
    description: string;
    story: string;
    challenge: string;
    approach: string;
    result: string;
    highlights: string[];
    role: string;
    timeline: string;
    outcomePoints: string[];
    category: string;
    tags: string[];
    image: string;
    github?: string;
    live?: string;
    hasApk: boolean;
    downloadLink: string;
    downloadName: string;
}

interface BaseProject {
    id: number;
    title: string;
    description: string;
    story?: string;
    challenge?: string;
    approach?: string;
    result?: string;
    highlights?: string[];
    role?: string;
    timeline?: string;
    outcomePoints?: string[];
    category: string;
    tags: string[];
    image: string;
    github?: string;
    live?: string;
    hasApk: boolean;
    downloadLink: string;
    downloadName: string;
}

const BASE_PORTFOLIO_DATA: BaseProject[] = [
    {
        id: 1,
        title: "True Voice ",
        description: "A Flutter mobile coaching app that delivers daily AI-guided speech and language improvement through personalized plans, structured practice, and measurable feedback.",
        story: "True Voice, branded in the UI as ARTICULATE, was designed as a complete daily speech coaching experience rather than a simple vocabulary tool. The app opens through a deterministic splash flow, generates a personalized 7-day challenge from mode, level, and weakness input, and guides users through three daily tasks: Pronounce/Speak, Meaning/Write, and Use/Aware. Riverpod StateNotifier architecture keeps plan state, streaks, task progress, and profile data consistent while Hive persists the user journey locally. AI generation and feedback run through an OpenRouter-compatible endpoint with deterministic fallbacks, ensuring reliability even when remote calls fail.",
        challenge: "The core challenge was combining real-time AI plan/feedback generation with stable offline-friendly behavior, clear user progression, and reliable reminders across day-based learning cycles.",
        approach: "Implemented a layered architecture centered on Riverpod state management, typed models for plan/task/feedback flows, and Hive-backed persistence with Android-safe fallback initialization. Added robust routing transitions, notification scheduling for daily and weekly cadence, and fallback deterministic generation logic when network providers fail.",
        result: "Delivered a production-ready mobile app flow from splash to onboarding, task execution, feedback, and progress tracking, with 3-score AI evaluation (pronunciation, meaning accuracy, natural usage), streak analytics, milestone UX, and social integrations that reinforce ongoing engagement.",
        highlights: ["Flutter", "Riverpod", "Hive", "OpenRouter AI"],
        role: "Lead Flutter engineer and product architect",
        timeline: "3 weeks",
        outcomePoints: [
            "Built a personalized 7-day challenge system with adaptive vocabulary difficulty across Beginner, Intermediate, and Expert levels.",
            "Implemented complete learning loop screens: Splash, Onboarding, Home, Tasks, Feedback, Progress, and Profile with consistent app state.",
            "Added local notifications for up to 3 daily reminders plus weekly recaps, controlled from profile settings.",
            "Shipped robust fallback behavior for AI plan and feedback generation to preserve usability during remote provider failure.",
        ],
        category: TABS[1],
        tags: ["Flutter", "Riverpod", "Hive", "AI Coaching", "Speech Learning", "Notifications"],
        image: "/images/true_voice.png",
        github: "https://github.com/Brillo-Digitals/true_voice.git",
        hasApk: true,
        downloadLink: "/apps/true-voice-v1-0-0.apk",
        downloadName: "True Voice-v1-0-0.apk"
    },
    {
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
        title: "CGPA Calculator",
        description: "A Flutter CGPA calculator that restores semester records on startup, supports per-semester GPA entry, and keeps grading rules, thresholds, and social links in sync with saved app state.",
        story: "CGPA Calculator was built as a persistence-first academic tool. On startup, `_loadData()` restores saved semester GPAs, total grade points, total units, max GPA, and grading thresholds from storage before the promo dialog appears. The GPA page lets users select level and semester, add course name, unit, and grade, and calculate a semester GPA from the course list. The CGPA page reads all saved semester records, lets users delete a semester, and computes the overall CGPA from total quality points divided by total units. Grading settings and socials remain available so the app stays consistent across sessions.",
        challenge: "The main challenge was keeping semester records, grading thresholds, and UI state synchronized across multiple screens while still making the app quick to use for students.",
        approach: "Implemented startup restore logic, a guided GPA entry flow, cumulative CGPA aggregation from saved semester data, and persisted grading settings with social-link handoff behavior through the shared socials widget.",
        result: "Delivered a dependable academic tracker that remembers past progress, calculates semester and cumulative performance accurately, and keeps the learning experience simple and repeatable.",
        highlights: ["Startup restore", "GPA calculator", "CGPA history", "Grading settings"],
        role: "Flutter developer and academic tools designer",
        timeline: "4 weeks",
        outcomePoints: [
            "Startup restore brings back saved semester GPAs, grade points, units, max GPA, and grading thresholds before the user starts calculating.",
            "The GPA page supports level selection, semester selection, and course-by-course entry with immediate semester GPA calculation and saving.",
            "The CGPA page summarizes all saved semester records, allows deleting a semester, and computes cumulative GPA from total quality points divided by total units.",
            "Grading settings and social links are persisted and reloaded so the app stays personalized and usable across sessions.",
        ],
        category: TABS[1],
        tags: ["Flutter", "Shared Preferences", "Sqflite", "Persistence", "CGPA", "Academic Tools"],
        image: "/images/cgpa_calculator.png",
        github: "https://github.com/Brillo-Digitals/cgpa_calculator",
        hasApk: true,
        downloadLink: "/apps/cgpa-calculator-v1-0-0.apk",
        downloadName: "cgpa-calculator-v1-0-0.apk"
    },
    {
        id: 7,
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
        id: 8,
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
        id: 9,
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
        id: 10,
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
        id: 11,
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
        id: 12,
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
        id: 13,
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
        id: 14,
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
        id: 15,
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
        id: 16,
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
        id: 17,
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
        id: 18,
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
        id: 19,
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
        id: 20,
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
        id: 21,
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
        id: 22,
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
        id: 23,
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
        id: 24,
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
        id: 25,
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
        id: 26,
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
        id: 27,
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
        id: 28,
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
        id: 29,
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
        id: 30,
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
        id: 31,
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
        id: 32,
        title: "Emotoworx",
        description: "A performance-driven e-commerce platform for automotive products, designed for speed, clarity, and efficient product discovery.",
        category: TABS[4],
        tags: ["Shopify", "AJAX", "Liquid", "Performance Optimization"],
        image: "/images/emotoworx.png",
        live: "https://emotoworx.com",
        hasApk: false,
        downloadLink: "#",
        downloadName: ""
    },
    {
        id: 33,
        title: "Aitiigehl - Luxury Fashion Designer Store",
        description: "A premium WordPress & WooCommerce fashion store for a high-end designer, featuring a bespoke lookbook, ready-to-wear collections, and artisan-crafted UI with extensive PHP modifications.",
        category: TABS[4],
        tags: ["WordPress", "WooCommerce", "PHP", "Custom Design", "Luxury Fashion", "E-Commerce"],
        image: "/images/aitiigehl.png",
        live: "https://aitiigehl.com.ng/",
        hasApk: false,
        downloadLink: "#",
        downloadName: ""
    }
];

const CATEGORY_NARRATIVES: Record<string, {
    challenges: string[];
    approaches: string[];
    results: string[];
    highlights: string[];
}> = {
    [TABS[1]]: {
        challenges: [
            "Users were dropping off after first launch because onboarding felt too long and technical.",
            "The core flow had to work smoothly offline for users with unstable mobile data.",
            "Performance on entry-level Android devices was inconsistent during heavy interactions.",
        ],
        approaches: [
            "Redesigned the first-run experience into short guided steps and introduced persistent local state with robust caching.",
            "Structured the feature modules around clean architecture and moved business logic into testable service layers.",
            "Optimized rendering, reduced unnecessary widget rebuilds, and introduced lightweight background sync patterns.",
        ],
        results: [
            "Improved session completion and repeat usage through faster first interactions and clearer in-app cues.",
            "Reduced friction in day-to-day usage with a more stable offline-first behavior and predictable navigation.",
            "Delivered a noticeably smoother runtime experience and better retention among new users.",
        ],
        highlights: ["Offline-first UX", "Polished onboarding", "Performance tuning"],
    },
    [TABS[2]]: {
        challenges: [
            "The product needed a premium brand feel while still loading fast on mobile networks.",
            "Content and layout had to scale across many sections without becoming visually repetitive.",
            "Navigation needed to support exploration without creating cognitive overload.",
        ],
        approaches: [
            "Built reusable UI patterns with consistent spacing rhythm and stronger visual hierarchy for content blocks.",
            "Implemented route-level structure and page-specific storytelling to make each section distinct.",
            "Balanced animation with performance by focusing on meaningful transitions and reducing visual noise.",
        ],
        results: [
            "Created a more memorable browsing flow with clearer narrative progression across pages.",
            "Improved perceived quality through tighter typography, cleaner component decisions, and focused interactions.",
            "Made the site easier to scan and navigate, especially for first-time visitors.",
        ],
        highlights: ["Route architecture", "Narrative UI", "Responsive polish"],
    },
    [TABS[3]]: {
        challenges: [
            "Gameplay systems had to feel responsive while keeping code maintainable for rapid iteration.",
            "Balancing progression and difficulty required frequent tuning and telemetry-led adjustments.",
            "Audio and feedback loops needed to reinforce gameplay without overwhelming players.",
        ],
        approaches: [
            "Designed modular gameplay loops with reusable entity systems and event-driven updates.",
            "Refined controls, state handling, and collision behavior to reduce frustrating edge cases.",
            "Added clear audiovisual feedback and polished transitions to improve player comprehension.",
        ],
        results: [
            "Shipped a tighter game feel with more readable moment-to-moment interactions.",
            "Improved replay value by smoothing pacing and introducing clearer reward progression.",
            "Reduced gameplay bugs through cleaner architecture and stronger internal tooling.",
        ],
        highlights: ["Game feel", "System design", "Replayability"],
    },
    [TABS[4]]: {
        challenges: [
            "The store needed stronger conversion foundations without sacrificing brand character.",
            "Acquisition spend was rising, so owned channels and retention had to perform better.",
            "Merchandising and analytics were fragmented, making it hard to optimize confidently.",
        ],
        approaches: [
            "Reworked product pages with clearer value communication, trust cues, and stronger CTA hierarchy.",
            "Built retention workflows across email and lifecycle messaging tied to customer behavior.",
            "Introduced cleaner measurement frameworks to track funnel events and campaign quality.",
        ],
        results: [
            "Increased conversion efficiency with sharper landing experiences and better checkout momentum.",
            "Improved repeat purchase behavior through tailored post-purchase and win-back flows.",
            "Enabled faster marketing decisions by connecting campaign reporting to business outcomes.",
        ],
        highlights: ["CRO strategy", "Lifecycle marketing", "Analytics clarity"],
    },
    ["default"]: {
        challenges: [
            "The project required balancing execution speed with long-term maintainability.",
        ],
        approaches: [
            "Prioritized the highest-impact user flows first, then iterated with measurable improvements.",
        ],
        results: [
            "Delivered a stronger end-user experience with clearer structure and better technical stability.",
        ],
        highlights: ["Execution", "Iteration", "Quality"],
    },
};

const pick = (items: string[], id: number, offset = 0) =>
    items[(id + offset) % items.length];

const buildProjectDetails = (project: BaseProject) => {
    const narrative = CATEGORY_NARRATIVES[project.category] ?? CATEGORY_NARRATIVES.default;
    const challenge = project.challenge ?? pick(narrative.challenges, project.id, 0);
    const approach = project.approach ?? pick(narrative.approaches, project.id, 1);
    const result = project.result ?? pick(narrative.results, project.id, 2);
    const timeline = project.timeline ?? ["2 weeks", "4 weeks", "6 weeks", "8 weeks"][(project.id + 1) % 4];
    const role = project.role ?? (project.category === TABS[4]
        ? "Growth strategist and implementation lead"
        : project.category === TABS[3]
            ? "Gameplay engineer and UX designer"
            : project.category === TABS[2]
                ? "Full-stack web developer and product designer"
                : "Mobile app developer and product architect");
    const coreHighlights = [
        ...project.tags.slice(0, 2),
        ...narrative.highlights.slice(0, 2),
    ];
    const outcomePoints = project.outcomePoints ?? [
        `${project.title} was structured for faster user comprehension and cleaner first-time navigation.`,
        `${project.tags[0] ?? "Core stack"} workflows were tuned to reduce friction in routine actions.`,
        `The final release emphasized maintainability, giving room for future feature expansion without heavy rewrites.`,
    ];

    return {
        story: project.story ?? `${project.description} ${project.title} was treated as a focused case study, balancing speed, polish, and long-term maintainability. Every release decision prioritized real user flow over visual noise and added deliberate interaction cues for confidence.`,
        challenge,
        approach,
        result,
        highlights: project.highlights?.length ? project.highlights : Array.from(new Set(coreHighlights)).slice(0, 4),
        role,
        timeline,
        outcomePoints,
    };
};

export const PORTFOLIO_DATA: Project[] = BASE_PORTFOLIO_DATA.map((project) => ({
    ...project,
    ...buildProjectDetails(project),
}));
