import GrowTogether from "./images/illustration-grow-together.svg";
import FlowingConversation from "./images/illustration-flowing-conversation.svg";
import YourUsers from "./images/illustration-your-users.svg";

export const features = [
    {
        image: GrowTogether,
        title: "Grow Together",
        text: "Generate meaningful discussions with your audience and build a strong, loyal community around your product.",
    },
    {
        image: FlowingConversation,
        title: "Flowing Conversations",
        text: "You wouldn't paginate a conversation in real life. Our threads use just-in-time loading for a natural flow.",
    },
    {
        image: YourUsers,
        title: "Your Users",
        text: "Integrate Huddle with your app's auth in minutes. Once signed in, your users can start chatting immediately.",
    },
];

export const testimonials = [
    {
        quote: "Huddle transformed how our players connect. Engagement is up 240% since we switched, and our team finally feels in the loop.",
        name: "Maya Patel",
        role: "Head of Community, Lumina",
        initials: "MP",
    },
    {
        quote: "We replaced three tools with Huddle. Threads, real-time chat, and analytics in one place — onboarding was effortless.",
        name: "Diego Alvarez",
        role: "Founder, StackForge",
        initials: "DA",
    },
    {
        quote: "The just-in-time threads are a game changer. Conversations feel alive, and moderation has never been simpler for us.",
        name: "Sara Lindqvist",
        role: "Product Lead, Northwind",
        initials: "SL",
    },
];

export const pricing = [
    {
        name: "Starter",
        price: "$0",
        cadence: "/mo",
        description: "For small communities just getting started.",
        features: ["Up to 500 members", "Unlimited threads", "Basic analytics", "Community support"],
        featured: false,
        cta: "Start Free",
    },
    {
        name: "Pro",
        price: "$29",
        cadence: "/mo",
        description: "For growing communities that need more power.",
        features: ["Up to 25,000 members", "Real-time chat", "Advanced analytics", "Custom roles & moderation", "Priority support"],
        featured: true,
        cta: "Get Started",
    },
    {
        name: "Enterprise",
        price: "Custom",
        cadence: "",
        description: "For organizations with advanced needs.",
        features: ["Unlimited members", "SSO & SCIM", "Dedicated success manager", "99.99% uptime SLA", "Custom integrations"],
        featured: false,
        cta: "Contact Sales",
    },
];

export const faqs = [
    {
        question: "How long does it take to set up Huddle?",
        answer: "Most teams are live in under 15 minutes. Drop in our SDK, connect your existing authentication, and your community is ready to go.",
    },
    {
        question: "Can I migrate from another platform?",
        answer: "Yes. We provide import tools for the most popular community platforms, plus a guided migration for Pro and Enterprise plans.",
    },
    {
        question: "Is there a free plan?",
        answer: "Absolutely. The Starter plan is free forever for communities up to 500 members, with no credit card required.",
    },
    {
        question: "How does Huddle handle moderation?",
        answer: "You get custom roles, automated keyword filters, and a real-time moderation queue. Enterprise plans add dedicated tooling and SLAs.",
    },
];
