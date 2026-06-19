import LogoWhite from "../images/logo-white.svg";

const links = [
    { label: "Features", href: "#features" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
];

export default function NavigationBar() {
    return (
        <nav className="sticky top-0 z-50 border-b border-white/10 bg-night/70 backdrop-blur-md">
            <div className="container-x flex items-center justify-between py-4">
                <a href="#top" className="flex items-center">
                    <img className="w-28 sm:w-32" src={LogoWhite} alt="Huddle logo" />
                </a>
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <a key={link.label} href={link.href} className="text-sm text-muted hover:text-white transition-colors">
                            {link.label}
                        </a>
                    ))}
                </div>
                <div className="flex items-center gap-3">
                    <a href="#top" className="hidden sm:inline text-sm text-muted hover:text-white transition-colors">
                        Sign in
                    </a>
                    <a
                        href="#pricing"
                        className="rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-glow hover:-translate-y-0.5 transition-transform duration-300"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </nav>
    );
}
