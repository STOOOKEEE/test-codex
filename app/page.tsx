export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 via-white to-zinc-100 text-zinc-900">
      <header className="sticky top-0 z-30 border-b border-zinc-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-indigo-500 via-sky-400 to-emerald-400 p-[2px]">
              <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-white font-bold text-indigo-600 shadow-inner shadow-indigo-100">
                XR
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-indigo-500">Hack For Good</p>
              <p className="font-semibold text-lg text-zinc-900">XRPL Builders</p>
            </div>
          </div>
          <nav className="grid w-full grid-cols-2 gap-3 sm:flex sm:w-auto sm:flex-wrap">
            {[
              { href: "#fonctionnalites", label: "Fonctionnalités" },
              { href: "#pourquoi", label: "Pourquoi XRPL ?" },
              { href: "#hack", label: "Pour un Hack For Good" },
              { href: "#contact", label: "Contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative flex items-center gap-2 rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-[0_12px_24px_-18px_rgba(0,0,0,0.2)] transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_20px_32px_-20px_rgba(79,70,229,0.45)]"
              >
                <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-50 via-sky-50 to-emerald-50 opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />
                <span className="relative font-semibold text-sm text-zinc-900">{link.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="relative mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-20 pt-12">
        <div className="blur-blob" />
        <div className="blur-blob delay-2" />

        <section className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white px-8 py-12 shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.12),transparent_35%),_radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.14),transparent_30%),_radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.12),transparent_40%)]" />
          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div className="space-y-6">
              <p className="inline-flex items-center rounded-full bg-indigo-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-600 shadow-sm">
                Hero • Animation Gradual Blur
              </p>
              <h1 className="text-4xl font-bold leading-tight text-zinc-900 sm:text-5xl">
                Construire des expériences XRPL en français, avec clarté, audace et impact.
              </h1>
              <p className="max-w-xl text-lg text-zinc-600">
                De la découverte aux smart contracts, nous orchestrons un parcours complet pour les builders qui veulent une Web3 utile, sobre et tournée vers le bien commun.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#fonctionnalites"
                  className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:translate-y-[-2px] hover:bg-indigo-500"
                >
                  Explorer la stack
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:border-indigo-200 hover:text-indigo-700"
                >
                  Discuter avec nous
                </a>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {["XRPL Sidechains", "Smart Contracts Hooks", "Onboarding Dev"].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-zinc-200 bg-white/80 px-4 py-3 text-sm font-semibold text-zinc-800 shadow-[0_8px_16px_-14px_rgba(0,0,0,0.25)] backdrop-blur"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative grid gap-4 rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-6 shadow-2xl">
              <div className="absolute inset-0 rounded-3xl border border-white/10" />
              <div className="relative grid gap-4 text-sm text-white">
                {[
                  {
                    title: "Latence ultra-basse",
                    text: "Chaque transaction XRPL est réglée en 3 à 5 secondes, offrant une UX quasi instantanée.",
                  },
                  {
                    title: "Coût minimal",
                    text: "Les frais en drops restent négligeables, ce qui rend les micro-dons et les incitations possibles.",
                  },
                  {
                    title: "Sécurité native",
                    text: "Le consensus sans minage protège le réseau et limite l'empreinte énergétique.",
                  },
                ].map((item) => (
                  <article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-inner shadow-black/30">
                    <p className="text-xs uppercase tracking-[0.18em] text-emerald-300">Card Nav</p>
                    <h3 className="mt-1 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-zinc-200">{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="fonctionnalites" className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-zinc-900 text-white flex items-center justify-center font-semibold">#</div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-indigo-500">Fonctionnalités</p>
              <h2 className="text-3xl font-bold text-zinc-900">Pixel Cards pour explorer la stack</h2>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Mint & Burn",
                text: "Créez des actifs numériques avec un contrôle total sur la liquidité et la gouvernance.",
              },
              {
                title: "Payment Channels",
                text: "Déverrouillez des paiements rapides pour les apps à fort volume et aux budgets serrés.",
              },
              {
                title: "Hooks & Smart Contracts",
                text: "Programmez des règles applicatives légères directement au niveau du ledger.",
              },
              {
                title: "Oracles",
                text: "Intégrez des flux de données off-chain sans sacrifier la sécurité ou la simplicité.",
              },
              {
                title: "NFTs responsables",
                text: "Construisez des identités et des preuves d’impact sans dégrader l’empreinte carbone.",
              },
              {
                title: "Interop",
                text: "Connectez XRPL aux autres chaînes via sidechains et ponts vérifiés.",
              },
            ].map((item, index) => (
              <article
                key={item.title}
                className="relative rounded-2xl border-2 border-black bg-white p-5 shadow-[6px_6px_0_#0f172a] transition hover:-translate-y-1 hover:shadow-[10px_10px_0_#312e81]"
              >
                <div className="absolute right-4 top-4 h-2 w-2 rounded-sm bg-zinc-900 shadow-[0_0_0_3px_#e5e7eb,0_0_0_5px_#111827]" />
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-600">Pixel Card {index + 1}</p>
                <h3 className="mt-2 text-xl font-bold text-zinc-900">{item.title}</h3>
                <p className="text-sm text-zinc-600">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="pourquoi" className="grid gap-8 rounded-3xl border border-zinc-200 bg-white p-8 shadow-lg lg:grid-cols-2">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-500">Pourquoi XRPL ?</p>
            <h2 className="text-3xl font-bold text-zinc-900">Des smart contracts sobres, sécurisés et auditables</h2>
            <p className="text-zinc-600">
              Les Hooks XRPL permettent d’ajouter des règles métier légères directement dans le ledger. Pas besoin d’EVM ou de machines virtuelles lourdes : chaque logique reste compacte, déterministe et plus simple à auditer. Résultat : moins de surface d’attaque, moins d’énergie consommée, plus de prévisibilité pour les utilisateurs finaux.
            </p>
            <p className="text-zinc-600">
              Nous fournissons des modèles de contrats courants (escrow, distribution d’aide, conformité KYC minimale) prêts à être intégrés, testés et observables avec des tableaux de bord temps réel.
            </p>
          </div>
          <div className="space-y-4 rounded-2xl bg-gradient-to-br from-indigo-50 via-sky-50 to-emerald-50 p-6">
            <div className="flex items-center justify-between rounded-xl bg-white px-4 py-3 shadow-sm">
              <p className="text-sm font-semibold text-zinc-800">Complexité réduite</p>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">-42%</span>
            </div>
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <p className="text-sm text-zinc-600">
                Moins de dépendances, moins de code à maintenir, plus de temps pour le design produit. Les composants que nous livrons sont compatibles avec les audits formels et la documentation XRPL en français.
              </p>
            </div>
            <div className="rounded-xl border border-dashed border-indigo-200 bg-white/80 p-4 text-sm text-zinc-700">
              <p className="font-semibold text-zinc-900">Gradual Blur x Ledger</p>
              <p>Une animation douce pour rappeler que la sécurité est invisible mais omniprésente.</p>
            </div>
          </div>
        </section>

        <section id="hack" className="grid gap-8 rounded-3xl border border-emerald-200 bg-emerald-50 p-8 shadow-lg lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Pour un Hack For Good</p>
            <h2 className="text-3xl font-bold text-emerald-950">Rendre la blockchain utile, tangible et inclusive</h2>
            <p className="text-emerald-900/80">
              Nous ciblons les cas d’usage à fort impact : distribution d’aides, traçabilité des dons, certification de compétences locales. XRPL permet de livrer ces projets sans frais prohibitifs et avec une UX accessible.
            </p>
            <p className="text-emerald-900/80">
              Les mentors et les designers facilitent la prise en main : maquettes prêtes à l’emploi, tutoriels vidéo, et checklists de sécurité pour chaque jalon.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Design System inclusif", "Ateliers live", "Suivi d’impact"].map((item) => (
                <span key={item} className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            <article className="rounded-2xl bg-white p-5 shadow-md">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">Complexité</p>
              <h3 className="mt-2 text-xl font-bold text-emerald-950">Réduire pour mieux livrer</h3>
              <p className="text-emerald-900/80">
                Nous priorisons la sobriété fonctionnelle : une seule source de vérité, des workflows courts, et des tests automatisés qui valident chaque transaction XRPL critique.
              </p>
            </article>
            <article className="rounded-2xl bg-zinc-900 p-5 shadow-md">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">Utilité</p>
              <h3 className="mt-2 text-xl font-bold text-white">Chaque feature doit servir l’utilisateur</h3>
              <p className="text-zinc-200">
                Un ledger rapide, des coûts négligeables et une équipe qui parle français : tout est là pour lancer des expériences concrètes, testées en conditions réelles.
              </p>
            </article>
          </div>
        </section>

        <section id="contact" className="grid gap-6 rounded-3xl border border-zinc-200 bg-white p-8 shadow-lg md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-500">Contact</p>
            <h2 className="text-3xl font-bold text-zinc-900">Parlons de votre prototype XRPL</h2>
            <p className="text-zinc-600">
              Vous voulez coder un MVP, tester un cas d’usage ou rejoindre la communauté ? Écrivez-nous et nous alignerons design, infra et accompagnement.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">Email</p>
                <p className="text-lg font-semibold text-zinc-900">hello@xrpl.builders</p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">Signal</p>
                <p className="text-lg font-semibold text-zinc-900">+33 7 00 00 00 00</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-zinc-500">
              <span className="rounded-full bg-emerald-50 px-3 py-1 font-semibold text-emerald-700">Réponse sous 24h</span>
              <span className="rounded-full bg-indigo-50 px-3 py-1 font-semibold text-indigo-700">Mentorat dev</span>
              <span className="rounded-full bg-sky-50 px-3 py-1 font-semibold text-sky-700">UX review</span>
            </div>
          </div>
          <form className="grid gap-4 rounded-2xl border border-dashed border-indigo-200 bg-indigo-50/60 p-6 shadow-inner shadow-indigo-100">
            <label className="grid gap-2 text-sm font-semibold text-zinc-800">
              Votre besoin
              <input
                type="text"
                placeholder="Prototype, audit, atelier..."
                className="rounded-xl border border-indigo-200 bg-white px-4 py-3 text-sm font-medium text-zinc-900 shadow-sm focus:border-indigo-400 focus:outline-none"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-zinc-800">
              Email
              <input
                type="email"
                placeholder="vous@exemple.com"
                className="rounded-xl border border-indigo-200 bg-white px-4 py-3 text-sm font-medium text-zinc-900 shadow-sm focus:border-indigo-400 focus:outline-none"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-zinc-800">
              Message
              <textarea
                placeholder="Détaillez vos objectifs, délais et équipes."
                className="min-h-[120px] rounded-xl border border-indigo-200 bg-white px-4 py-3 text-sm font-medium text-zinc-900 shadow-sm focus:border-indigo-400 focus:outline-none"
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-1 hover:bg-indigo-500"
            >
              Envoyer la demande
            </button>
          </form>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-white py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Logos en boucle</p>
          <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
            <div className="marquee flex items-center gap-6 text-sm font-semibold text-zinc-700">
              {[
                "XRPL",
                "Ripple",
                "Interledger",
                "Next.js",
                "TypeScript",
                "Tailwind",
                "Open Source",
                "Hack For Good",
              ].map((item) => (
                <span
                  key={item}
                  className="flex min-w-[160px] items-center justify-center rounded-xl border border-zinc-200 bg-white px-4 py-2 shadow-sm"
                >
                  {item}
                </span>
              ))}
              {[
                "XRPL",
                "Ripple",
                "Interledger",
                "Next.js",
                "TypeScript",
                "Tailwind",
                "Open Source",
                "Hack For Good",
              ].map((item) => (
                <span
                  key={`${item}-duplicate`}
                  className="flex min-w-[160px] items-center justify-center rounded-xl border border-zinc-200 bg-white px-4 py-2 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <p className="text-sm text-zinc-500">
            XRPL Builders • Prototypage, design produit et smart contracts responsables.
          </p>
        </div>
      </footer>

      <style jsx global>{`
        .blur-blob {
          position: absolute;
          inset: 0;
          margin: auto;
          width: 380px;
          height: 380px;
          border-radius: 9999px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.25), transparent 60%);
          filter: blur(90px);
          opacity: 0.7;
          animation: blurPulse 12s ease-in-out infinite;
          z-index: 0;
        }
        .blur-blob.delay-2 {
          animation-delay: 4s;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.23), transparent 60%);
          transform: translate(40%, -10%);
        }
        @keyframes blurPulse {
          0% {
            transform: translate(-20%, -10%) scale(1);
            opacity: 0.55;
          }
          50% {
            transform: translate(15%, 10%) scale(1.1);
            opacity: 0.8;
          }
          100% {
            transform: translate(-10%, -15%) scale(0.95);
            opacity: 0.6;
          }
        }
        .marquee {
          display: inline-flex;
          min-width: max-content;
          animation: marquee 24s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
