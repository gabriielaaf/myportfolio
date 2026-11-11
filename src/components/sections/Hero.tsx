function Hero() {
    return (
        <section className="flex flex-1 items-center px-8 md:px-16">
            <div className="max-w-5xl">
                <h1 className="font-display text-[64px] font-semibold leading-[0.95] tracking-[-0.045em] md:text-[88px]">
                    Gabriela
                    <br />
                    Felgueiras
                </h1>

                <p className="mt-6 font-sans text-base font-normal leading-relaxed text-[var(--muted)] md:text-lg">
                    Informatics and Computing Engineering Student @ FEUP
                </p>

                <p className="mt-4 font-sans text-sm font-medium tracking-wide text-[var(--accent)] md:text-base">
                    Porto, Portugal
                </p>
            </div>
        </section>
    );
}

export default Hero;