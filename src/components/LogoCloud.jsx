const brands = ["Lumina", "StackForge", "Northwind", "Vertex", "Quanta", "Helix"];

export default function LogoCloud() {
    return (
        <section className="container-x py-10 border-y border-white/5">
            <p className="text-center text-xs uppercase tracking-[0.2em] text-muted">
                Trusted by fast-growing teams
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
                {brands.map((brand) => (
                    <span key={brand} className="font-poppins font-bold text-xl text-white/40 hover:text-white/70 transition-colors">
                        {brand}
                    </span>
                ))}
            </div>
        </section>
    );
}
