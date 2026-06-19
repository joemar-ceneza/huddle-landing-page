import AnimatedNumbers from "react-animated-numbers";
import { useState } from "react";

const config = (number, index) => ({ mass: 1, tension: 230 * (index + 1), friction: 100 });

const items = [
    { value: 1403, suffix: "+", label: "Communities formed" },
    { value: 2773, suffix: "K", label: "Messages sent" },
    { value: 98, suffix: "%", label: "Customer satisfaction" },
];

export default function Stats() {
    const [stats] = useState(items);
    return (
        <section className="container-x py-20 sm:py-24">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {stats.map((stat) => (
                    <div key={stat.label} className="glass rounded-2xl px-8 py-10 text-center shadow-glass">
                        <div className="flex items-center justify-center font-poppins font-extrabold text-5xl sm:text-6xl text-white">
                            <AnimatedNumbers includeComma animateToNumber={stat.value} configs={config} />
                            <span className="text-brand-fuchsia">{stat.suffix}</span>
                        </div>
                        <p className="mt-3 text-muted">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
