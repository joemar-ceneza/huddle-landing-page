import ResponsiveWebsite from "../images/screen-mockups.svg";

export default function Hero() {
    return (
        <section id="top" className="relative overflow-hidden">
            {/* glow backdrop */}
            <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[820px] h-[820px] rounded-full bg-brand-indigo/20 blur-3xl" />
            <div className="pointer-events-none absolute top-20 -right-40 w-[480px] h-[480px] rounded-full bg-brand-fuchsia/20 blur-3xl" />

            <div className="container-x relative z-10 pt-20 pb-24 sm:pt-28 text-center animate-fade-up">
                <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs sm:text-sm text-muted">
                    <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                    Now with real-time threads &amp; analytics
                </span>
                <h1 className="font-poppins font-extrabold text-4xl sm:text-6xl lg:text-7xl leading-[1.05] mt-8 max-w-4xl mx-auto">
                    Build the community
                    <br />
                    your fans will <span className="text-gradient">love</span>
                </h1>
                <p className="max-w-xl mx-auto mt-6 text-muted sm:text-lg leading-relaxed">
                    Huddle re-imagines the way we build communities. Create genuine connections with your
                    users through real-time, threaded conversation — all in one place.
                </p>
                <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="#pricing" className="w-full sm:w-auto rounded-full bg-brand-gradient px-8 py-4 font-semibold text-white shadow-glow hover:-translate-y-0.5 transition-transform duration-300">
                        Get Started Free
                    </a>
                    <a href="#features" className="w-full sm:w-auto rounded-full glass px-8 py-4 font-semibold text-white hover:bg-white/10 transition-colors duration-300">
                        See how it works
                    </a>
                </div>
                <p className="mt-5 text-xs text-muted">No credit card required · Free forever for small communities</p>

                {/* mockup in glass frame */}
                <div className="relative mt-16 sm:mt-20 max-w-4xl mx-auto">
                    <div className="absolute inset-0 -z-10 bg-brand-gradient opacity-20 blur-2xl rounded-[2rem]" />
                    <div className="glass rounded-3xl p-4 sm:p-6 shadow-glass">
                        <img className="w-full rounded-2xl" src={ResponsiveWebsite} alt="Huddle app shown on desktop and mobile" />
                    </div>
                </div>
            </div>
        </section>
    );
}
