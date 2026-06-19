import LogoWhite from "../images/logo-white.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const columns = [
    { title: "Product", links: ["Features", "Pricing", "Integrations", "Changelog"] },
    { title: "Company", links: ["About", "Careers", "Blog", "Contact"] },
    { title: "Resources", links: ["Docs", "Community", "Support", "Status"] },
];

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-night-soft">
            <div className="container-x py-16">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
                    {/* brand + newsletter */}
                    <div className="col-span-2">
                        <img className="w-32" src={LogoWhite} alt="Huddle logo" />
                        <p className="mt-5 max-w-xs text-sm text-muted leading-relaxed">
                            The all-in-one platform to build, grow, and moderate communities your fans will love.
                        </p>
                        <form className="mt-6 flex max-w-sm gap-2" onSubmit={(e) => e.preventDefault()}>
                            <label htmlFor="footer-email" className="sr-only">Email address</label>
                            <input
                                id="footer-email"
                                type="email"
                                required
                                placeholder="Enter your email"
                                className="flex-1 rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand placeholder:text-muted"
                            />
                            <button type="submit" className="rounded-lg bg-brand-gradient px-5 py-2.5 text-sm font-semibold shadow-glow hover:-translate-y-0.5 transition-transform">
                                Subscribe
                            </button>
                        </form>
                    </div>

                    {/* link columns */}
                    {columns.map((column) => (
                        <div key={column.title}>
                            <h3 className="font-poppins font-semibold text-sm">{column.title}</h3>
                            <ul className="mt-4 space-y-3">
                                {column.links.map((link) => (
                                    <li key={link}>
                                        <a href="#top" className="text-sm text-muted hover:text-white transition-colors">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted">&copy; {new Date().getFullYear()} Huddle. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <a href="/" aria-label="Facebook" className="text-muted hover:text-white transition-colors"><FacebookIcon /></a>
                        <a href="/" aria-label="Instagram" className="text-muted hover:text-white transition-colors"><InstagramIcon /></a>
                        <a href="/" aria-label="Twitter" className="text-muted hover:text-white transition-colors"><TwitterIcon /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
