export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f5f1] text-black">
      <nav className="fixed left-0 top-0 z-50 w-full bg-[#f7f5f1]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <p className="text-sm font-medium tracking-[0.35em] text-black/65">
            FLUENCE
          </p>

          <div className="flex items-center gap-3">
            <a
              href="mailto:fluence.26@outlook.de"
              className="hidden rounded-full border border-black/10 bg-white/40 px-5 py-2.5 text-sm font-medium text-black/60 backdrop-blur transition hover:bg-white md:block"
            >
              Kontakt
            </a>

            <a
              href="#early-access"
              className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black/85"
            >
              Early Access
            </a>
          </div>
        </div>
      </nav>

      <section className="relative flex min-h-screen items-center px-6 pt-12">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-6 md:grid-cols-[0.9fr_1.1fr]">
          <div className="relative z-10 -mt-6">
            <p className="mb-6 text-sm tracking-[0.3em] text-black/40">
              SPRACHE. STRUKTUR. WIRKUNG.
            </p>

            <h1 className="max-w-2xl text-6xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-8xl">
              Sprache, die wirkt.
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-8 text-black/55">
              Fluence ist eine neue App, die mit KI deine Sprache analysiert und
              dir zeigt, wie klar, präzise und überzeugend du wirklich
              kommunizierst.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#early-access"
                className="rounded-full bg-black px-7 py-4 text-base font-medium text-white shadow-[0_18px_45px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:bg-black/85"
              >
                Tester werden
              </a>

              <a
                href="#details"
                className="rounded-full border border-black/10 bg-white/45 px-7 py-4 text-base font-medium text-black/70 backdrop-blur transition hover:bg-white"
              >
                Mehr erfahren
              </a>
            </div>
          </div>

          <div className="relative flex min-h-[520px] items-center justify-center md:-mr-16">
            <div className="absolute h-[560px] w-[560px] rounded-full bg-white/70 blur-3xl" />
            <div className="absolute h-[390px] w-[390px] rounded-full bg-black/5 blur-3xl" />

            <img
              src="/vier.png"
              alt="Fluence Score"
              className="relative z-10 w-[640px] max-w-[135%] drop-shadow-[0_50px_80px_rgba(0,0,0,0.21)]"
            />
          </div>
        </div>
      </section>

      <section id="details" className="px-6 pt-24 pb-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-sm tracking-[0.3em] text-black/35">
            WERDE ELOQUENTER
          </p>

          <h2 className="max-w-5xl text-5xl font-semibold leading-tight tracking-[-0.04em] md:text-7xl">
            Eine App für Menschen, die besser sprechen, stärker argumentieren
            und bewusster wirken wollen.
          </h2>

          <p className="mt-8 max-w-3xl text-xl leading-8 text-black/55">
            Fluence bewertet nicht einfach nur Grammatik. Die App analysiert,
            wie du Gedanken strukturierst, Wörter wählst, Argumente aufbaust
            und beim Gegenüber ankommst.
          </p>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] border border-black/5 bg-white/55 p-8 shadow-[0_25px_70px_rgba(0,0,0,0.05)]">
              <p className="text-2xl font-semibold">Sprachprofil</p>
              <p className="mt-4 leading-7 text-black/55">
                Erhalte ein klares Profil deiner kommunikativen Wirkung:
                Struktur, Ausdruck und Überzeugungskraft.
              </p>
            </div>

            <div className="rounded-[2rem] border border-black/5 bg-white/55 p-8 shadow-[0_25px_70px_rgba(0,0,0,0.05)]">
              <p className="text-2xl font-semibold">KI-Analyse</p>
              <p className="mt-4 leading-7 text-black/55">
                Lass deine Antworten auswerten und erkenne, warum manche Sätze
                stark wirken und andere beliebig bleiben.
              </p>
            </div>

            <div className="rounded-[2rem] border border-black/5 bg-white/55 p-8 shadow-[0_25px_70px_rgba(0,0,0,0.05)]">
              <p className="text-2xl font-semibold">Training</p>
              <p className="mt-4 leading-7 text-black/55">
                Trainiere gezielt an deiner Sprache — für Alltag, Studium,
                Beruf, Diskussionen und Auftritte.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="early-access" className="px-20 py-15">
        <div className="mx-auto grid max-w-6xl gap-12 rounded-[3rem] bg-black p-8 text-white shadow-[0_45px_140px_rgba(0,0,0,0.25)] md:grid-cols-2 md:p-14">
          <div>
            <p className="mb-5 text-sm tracking-[0.3em] text-white/40">
              EARLY ACCESS
            </p>

            <h2 className="text-5xl font-semibold leading-tight tracking-[-0.04em]">
              Teste Fluence vor dem offiziellen Release.
            </h2>

            <p className="mt-6 max-w-md leading-7 text-white/55">
              Trag dich ein, wenn du die App früh nutzen, Feedback geben und die
              Entwicklung von Fluence mitprägen willst.
            </p>
          </div>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-white/35 focus:border-white/30"
            />

            <input
              type="email"
              placeholder="E-Mail"
              className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-white/35 focus:border-white/30"
            />

            <textarea
              placeholder="Warum willst du Fluence testen? Optional"
              rows={4}
              className="w-full resize-none rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-white/35 focus:border-white/30"
            />

            <button
              type="submit"
              className="w-full rounded-2xl bg-white px-5 py-4 font-medium text-black transition hover:bg-white/90"
            >
              Als Tester registrieren
            </button>

            <p className="text-xs leading-5 text-white/35">
              Das Formular verbinden wir danach mit Supabase.
            </p>
          </form>
        </div>
      </section>

      <footer className="px-6 py-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between border-t border-black/5 pt-8 text-sm text-black/35">
          <p>© 2026 Fluence</p>
          <a href="mailto:fluence.26@outlook.de">fluence.26@outlook.de</a>
        </div>
      </footer>
    </main>
  );
}