import { testimonials } from "../data";

export default function Testimonials() {
    return (
        <section id="testimonials" className="container-x py-20 sm:py-28 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-cyan">Loved by teams</span>
                <h2 className="font-poppins font-bold text-3xl sm:text-5xl mt-4">
                    Communities thrive on Huddle
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
                {testimonials.map((item) => (
                    <figure key={item.name} className="glass rounded-2xl p-8 shadow-glass flex flex-col">
                        <div className="text-brand-fuchsia text-5xl font-poppins leading-none">&ldquo;</div>
                        <blockquote className="text-white/90 leading-relaxed -mt-2">{item.quote}</blockquote>
                        <figcaption className="flex items-center gap-4 mt-8 pt-6 border-t border-white/10">
                            <div className="w-11 h-11 rounded-full bg-brand-gradient flex items-center justify-center font-semibold text-sm">
                                {item.initials}
                            </div>
                            <div>
                                <div className="font-semibold">{item.name}</div>
                                <div className="text-sm text-muted">{item.role}</div>
                            </div>
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
}
