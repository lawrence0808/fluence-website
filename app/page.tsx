"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");

  const [touched, setTouched] = useState({
    name: false,
    email: false,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const nameError = touched.name && name.trim().length === 0;
  const emailError =
    touched.email && (email.trim().length === 0 || !emailIsValid);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setTouched({
      name: true,
      email: true,
    });

    setSubmitError("");

    if (name.trim().length === 0 || !emailIsValid) {
      return;
    }

    setLoading(true);

    const { error } = await supabase.from("early_access").insert({
      name: name.trim(),
      email: email.trim(),
      reason: reason.trim() || null,
    });

    setLoading(false);

    if (error) {
      console.error(error);
      setSubmitError("Die Anmeldung konnte nicht gespeichert werden.");
      return;
    }

    setSuccess(true);
    setName("");
    setEmail("");
    setReason("");
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f5f1] text-black">
      <nav className="fixed left-0 top-0 z-50 w-full bg-[#f7f5f1]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-6 md:py-5">
          <p className="text-xs font-medium tracking-[0.3em] text-black/65 md:text-sm md:tracking-[0.35em]">
            FLUENCE
          </p>

          <div className="flex items-center gap-2 md:gap-3">
            <a
              href="mailto:fluence26@outlook.de"
              className="rounded-full border border-black/10 bg-white/40 px-4 py-2 text-xs font-medium text-black/60 backdrop-blur transition hover:bg-white md:px-5 md:py-2.5 md:text-sm"
            >
              Kontakt
            </a>

            <a
              href="#early-access"
              className="rounded-full bg-black px-4 py-2 text-xs font-medium text-white transition hover:bg-black/85 md:px-5 md:py-2.5 md:text-sm"
            >
              Early Access
            </a>
          </div>
        </div>
      </nav>

      <section className="relative flex min-h-screen items-center overflow-hidden px-5 pb-12 pt-24 md:px-6 md:pb-0 md:pt-20">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-[1fr_0.85fr] md:gap-10">
          <div className="relative z-10 text-left">
            <p className="mb-5 max-w-full text-xs tracking-[0.22em] text-black/40 md:mb-6 md:text-sm md:tracking-[0.3em]">
              SPRACHE. WIRKUNG. BEWUSSTSEIN.
            </p>

            <h1 className="max-w-full text-[4rem] font-semibold leading-[1.02] tracking-[-0.075em] md:max-w-3xl md:text-8xl md:leading-[0.92] md:tracking-[-0.065em]">
              <span className="block md:inline">Sprache</span>{" "}
              <span className="block md:inline">formt Wirkung.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-7 text-black/55 md:mt-8 md:text-xl md:leading-8">
              Die Art, wie wir sprechen, beeinflusst, wie wir verstanden,
              wahrgenommen und erinnert werden.
            </p>

            <p className="mt-4 max-w-xl text-lg leading-7 text-black/55 md:text-xl md:leading-8">
              Fluence macht diese Wirkung sichtbar und hilft dir, sie bewusst zu
              entwickeln.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 md:mt-10 md:gap-4">
              <a
                href="#early-access"
                className="rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white shadow-[0_18px_45px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:bg-black/85 md:px-7 md:py-4 md:text-base"
              >
                Tester werden
              </a>

              <a
                href="#details"
                className="rounded-full border border-black/10 bg-white/45 px-6 py-3.5 text-sm font-medium text-black/70 backdrop-blur transition hover:bg-white md:px-7 md:py-4 md:text-base"
              >
                Mehr erfahren
              </a>
            </div>
          </div>

          <div className="relative flex min-h-[330px] w-full items-center justify-center overflow-hidden md:min-h-[520px]">
            <div className="absolute h-[300px] w-[300px] rounded-full bg-white/70 blur-3xl md:h-[520px] md:w-[520px]" />
            <div className="absolute h-[220px] w-[220px] rounded-full bg-black/5 blur-3xl md:h-[360px] md:w-[360px]" />

            <div className="relative z-10 w-full max-w-[430px] rounded-[2.2rem] border border-black/5 bg-white/45 p-7 shadow-[0_35px_90px_rgba(0,0,0,0.08)] backdrop-blur md:rounded-[3rem] md:p-9">
              <div className="space-y-7">
                <div>
                  <p className="text-xs font-medium tracking-[0.24em] text-black/35">
                    TÄGLICH
                  </p>
                  <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-black md:text-3xl">
                    5 Übungen.
                  </p>
                  <p className="mt-2 leading-7 text-black/50">
                    Kurze Sessions für Klarheit, Ausdruck und Wirkung.
                  </p>
                </div>

                <div className="h-px w-full bg-black/6" />

                <div>
                  <p className="text-xs font-medium tracking-[0.24em] text-black/35">
                    SICHTBAR
                  </p>
                  <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-black md:text-3xl">
                    Dein Sprachprofil.
                  </p>
                  <p className="mt-2 leading-7 text-black/50">
                    Erkenne, wo du stark wirkst und wo Entwicklung möglich ist.
                  </p>
                </div>

                <div className="h-px w-full bg-black/6" />

                <div>
                  <p className="text-xs font-medium tracking-[0.24em] text-black/35">
                    FRÜH
                  </p>
                  <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-black md:text-3xl">
                    Early Access.
                  </p>
                  <p className="mt-2 leading-7 text-black/50">
                    Werde Teil der ersten Testphase von Fluence.
                  </p>
                </div>
              </div>

              <p className="mt-10 text-right text-xs font-medium tracking-[0.28em] text-black/30">
                FLUENCE
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="details"
        className="px-5 pt-20 pb-14 md:px-6 md:pt-24 md:pb-16"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-xs tracking-[0.26em] text-black/35 md:text-sm md:tracking-[0.3em]">
            WARUM SPRACHE WICHTIG IST
          </p>

          <h2 className="max-w-5xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] md:text-7xl md:leading-tight md:tracking-[-0.04em]">
            Jeder Mensch kommuniziert. Die wenigsten wissen, wie sie dabei
            wirken.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-7 text-black/55 md:mt-8 md:text-xl md:leading-8">
            Sprache entscheidet nicht nur darüber, was wir sagen. Sie
            beeinflusst, ob Gedanken klar ankommen, ob Argumente tragen und wie
            souverän wir in Situationen wahrgenommen werden.
          </p>

          <div className="mt-10 grid gap-4 md:mt-16 md:grid-cols-3 md:gap-6">
            <div className="rounded-[1.6rem] border border-black/5 bg-white/55 p-6 shadow-[0_25px_70px_rgba(0,0,0,0.05)] md:rounded-[2rem] md:p-8">
              <p className="text-xl font-semibold md:text-2xl">Wahrnehmung</p>
              <p className="mt-3 leading-7 text-black/55 md:mt-4">
                Verstehe, wie deine Sprache wirkt — klar, unsicher, präzise,
                hart, überzeugend oder ausweichend.
              </p>
            </div>

            <div className="rounded-[1.6rem] border border-black/5 bg-white/55 p-6 shadow-[0_25px_70px_rgba(0,0,0,0.05)] md:rounded-[2rem] md:p-8">
              <p className="text-xl font-semibold md:text-2xl">Entwicklung</p>
              <p className="mt-3 leading-7 text-black/55 md:mt-4">
                Erkenne deine stärksten und schwächsten Bereiche: Klarheit,
                Präzision, Argumentation, Ton und Wirkung.
              </p>
            </div>

            <div className="rounded-[1.6rem] border border-black/5 bg-white/55 p-6 shadow-[0_25px_70px_rgba(0,0,0,0.05)] md:rounded-[2rem] md:p-8">
              <p className="text-xl font-semibold md:text-2xl">Gewohnheit</p>
              <p className="mt-3 leading-7 text-black/55 md:mt-4">
                Eine kurze tägliche Session. Wenige Minuten. Langfristige
                Veränderung durch bewusstes Training.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pt-8 pb-16 md:px-6 md:pt-14 md:pb-20">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-black/5 bg-white/45 p-7 shadow-[0_25px_80px_rgba(0,0,0,0.05)] md:rounded-[3rem] md:p-14">
          <p className="mb-5 text-xs tracking-[0.26em] text-black/35 md:text-sm md:tracking-[0.3em]">
            KEIN SPRACHKURS
          </p>

          <h2 className="max-w-4xl text-4xl font-semibold leading-[1.03] tracking-[-0.05em] md:text-6xl md:tracking-[-0.045em]">
            Keine Vokabeln. Keine Grammatik. Sondern Training für Ausdruck,
            Klarheit und Wirkung.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-7 text-black/55 md:text-xl md:leading-8">
            Fluence richtet sich an Menschen, die ihre Gedanken bewusster
            formulieren wollen — in Gesprächen, Nachrichten, Bewerbungen,
            Diskussionen und alltäglichen Situationen.
          </p>
        </div>
      </section>

      <section id="early-access" className="px-5 pt-10 pb-14 md:px-6 md:pb-20">
        <div className="mx-auto grid max-w-6xl gap-7 rounded-[2rem] bg-black p-6 text-white shadow-[0_35px_100px_rgba(0,0,0,0.22)] md:grid-cols-2 md:gap-10 md:rounded-[3rem] md:p-14 md:shadow-[0_45px_140px_rgba(0,0,0,0.25)]">
          {success ? (
            <div className="flex min-h-[260px] flex-col items-center justify-center text-center md:col-span-2 md:min-h-[360px]">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-400/15 text-4xl text-emerald-300 ring-1 ring-emerald-300/25">
                ✓
              </div>

              <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                Erfolgreich
              </h2>

              <p className="mt-5 max-w-md text-sm leading-6 text-white/50 md:text-base md:leading-7">
                Deine Registrierung wurde gespeichert.
              </p>
            </div>
          ) : (
            <>
              <div>
                <p className="mb-5 text-xs tracking-[0.26em] text-white/40 md:text-sm md:tracking-[0.3em]">
                  EARLY ACCESS
                </p>

                <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.05em] md:text-5xl md:leading-tight md:tracking-[-0.04em]">
                  Werde Teil der ersten Testphase.
                </h2>

                <p className="mt-5 max-w-md leading-7 text-white/55 md:mt-6">
                  Trag dich ein, wenn du Fluence früh nutzen, Feedback geben und
                  die Entwicklung der App mitprägen willst.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={() =>
                      setTouched((prev) => ({ ...prev, name: true }))
                    }
                    className={`w-full rounded-2xl border px-5 py-4 text-white outline-none transition placeholder:text-white/35 ${
                      nameError
                        ? "border-red-400/80 bg-red-500/10 focus:border-red-300"
                        : "border-white/10 bg-white/10 focus:border-white/30"
                    }`}
                  />
                  {nameError && (
                    <p className="mt-2 text-sm text-red-300">
                      Bitte gib deinen Namen ein.
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="E-Mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() =>
                      setTouched((prev) => ({ ...prev, email: true }))
                    }
                    className={`w-full rounded-2xl border px-5 py-4 text-white outline-none transition placeholder:text-white/35 ${
                      emailError
                        ? "border-red-400/80 bg-red-500/10 focus:border-red-300"
                        : "border-white/10 bg-white/10 focus:border-white/30"
                    }`}
                  />
                  {emailError && (
                    <p className="mt-2 text-sm text-red-300">
                      Bitte gib eine gültige E-Mail-Adresse ein.
                    </p>
                  )}
                </div>

                <textarea
                  placeholder="Warum interessiert dich Fluence? (optional)"
                  rows={1}
                  maxLength={90}
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="h-[58px] w-full resize-none overflow-y-auto rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none transition placeholder:text-white/35 focus:border-white/30"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-2xl bg-white px-5 py-4 font-medium text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Wird gespeichert..." : "Als Tester registrieren"}
                </button>

                {submitError && (
                  <p className="text-sm text-red-300">{submitError}</p>
                )}
              </form>
            </>
          )}
        </div>
      </section>

      <footer className="px-5 pt-4 pb-8 md:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-black/5 pt-8 text-sm text-black/35 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Fluence</p>
          <a href="mailto:fluence26@outlook.de">fluence26@outlook.de</a>
        </div>
      </footer>
    </main>
  );
}
