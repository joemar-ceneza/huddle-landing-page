import CheckIcon from "@mui/icons-material/Check";
import { pricing } from "../data";

export default function Pricing() {
    return (
        <section id="pricing" className="container-x py-20 sm:py-28 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-cyan">Pricing</span>
                <h2 className="font-poppins font-bold text-3xl sm:text-5xl mt-4">
                    Simple, transparent plans
                </h2>
                <p className="text-muted mt-5 sm:text-lg">Start free, upgrade as your community grows. No hidden fees.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 items-stretch">
                {pricing.map((plan) => (
                    <div
                        key={plan.name}
                        className={`relative rounded-2xl p-8 flex flex-col ${
                            plan.featured
                                ? "bg-brand/10 border-2 border-brand/60 shadow-glow md:-translate-y-3 backdrop-blur-sm"
                                : "glass shadow-glass"
                        }`}
                    >
                        {plan.featured && (
                            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-gradient px-4 py-1 text-xs font-semibold">
                                Most Popular
                            </span>
                        )}
                        <h3 className="font-poppins font-bold text-xl">{plan.name}</h3>
                        <p className="text-muted text-sm mt-2 min-h-[40px]">{plan.description}</p>
                        <div className="mt-5 flex items-end gap-1">
                            <span className="font-poppins font-extrabold text-4xl">{plan.price}</span>
                            <span className="text-muted mb-1">{plan.cadence}</span>
                        </div>
                        <ul className="mt-7 space-y-3 flex-1">
                            {plan.features.map((feature) => (
                                <li key={feature} className="flex items-center gap-3 text-sm text-white/90">
                                    <CheckIcon className="text-brand-cyan" fontSize="small" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <a
                            href="#top"
                            className={`mt-8 rounded-full px-6 py-3 text-center font-semibold transition-all duration-300 ${
                                plan.featured
                                    ? "bg-brand-gradient text-white shadow-glow hover:-translate-y-0.5"
                                    : "glass text-white hover:bg-white/10"
                            }`}
                        >
                            {plan.cta}
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
