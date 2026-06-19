import { features } from "../data";

export default function Features() {
    return (
        <section id="features" className="container-x py-20 sm:py-28 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-cyan">Why Huddle</span>
                <h2 className="font-poppins font-bold text-3xl sm:text-5xl mt-4">
                    Everything you need to <span className="text-gradient">connect</span>
                </h2>
                <p className="text-muted mt-5 sm:text-lg">
                    A complete toolkit to launch, grow, and moderate a thriving community — without stitching
                    together a dozen different tools.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
                {features.map((feature) => (
                    <div
                        key={feature.title}
                        className="group glass rounded-2xl p-8 shadow-glass hover:bg-white/[0.07] hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="h-44 flex items-center justify-center rounded-xl bg-white/5 mb-7 overflow-hidden">
                            <img className="h-28 group-hover:scale-105 transition-transform duration-500" src={feature.image} alt="" aria-hidden="true" />
                        </div>
                        <h3 className="font-poppins font-bold text-xl">{feature.title}</h3>
                        <p className="text-muted mt-3 leading-relaxed">{feature.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
