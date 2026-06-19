export default function CtaBand() {
    return (
        <section className="container-x py-20 sm:py-28">
            <div className="relative overflow-hidden rounded-3xl bg-brand-gradient px-8 py-16 sm:py-20 text-center shadow-glow">
                <div className="pointer-events-none absolute -top-24 -left-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-24 -right-20 w-80 h-80 rounded-full bg-black/10 blur-3xl" />
                <div className="relative z-10 max-w-2xl mx-auto">
                    <h2 className="font-poppins font-extrabold text-3xl sm:text-5xl">
                        Ready to build your community?
                    </h2>
                    <p className="mt-5 text-white/80 sm:text-lg">
                        Join thousands of teams creating genuine connections with their audience. Get started in minutes.
                    </p>
                    <a
                        href="#pricing"
                        className="inline-block mt-9 rounded-full bg-white px-9 py-4 font-semibold text-night hover:-translate-y-0.5 transition-transform duration-300"
                    >
                        Get Started For Free
                    </a>
                </div>
            </div>
        </section>
    );
}
