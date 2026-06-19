import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { faqs } from "../data";

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggle = (index) => setOpenIndex((current) => (current === index ? -1 : index));

    return (
        <section id="faq" className="container-x py-20 sm:py-28 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-cyan">FAQ</span>
                <h2 className="font-poppins font-bold text-3xl sm:text-5xl mt-4">Questions, answered</h2>
            </div>

            <div className="max-w-3xl mx-auto mt-12 space-y-4">
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div key={faq.question} className="glass rounded-2xl overflow-hidden">
                            <button
                                type="button"
                                onClick={() => toggle(index)}
                                aria-expanded={isOpen}
                                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-semibold hover:bg-white/[0.03] transition-colors"
                            >
                                {faq.question}
                                <ExpandMoreIcon className={`shrink-0 text-brand-cyan transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                            </button>
                            <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                                <div className="overflow-hidden">
                                    <p className="px-6 pb-6 text-muted leading-relaxed">{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
