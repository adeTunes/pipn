import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Child Safety Standards | PiPn",
  description:
    "PiPn's commitment to child safety and our standards against child sexual abuse and exploitation (CSAE).",
};

export default function SafetyStandardsPage() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className="absolute top-0 right-0 p-8 w-[1000px] h-[1000px] opacity-[0.03] pointer-events-none -z-10">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-white fill-current"
        >
          <path d="M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20 font-sans">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
            Child Safety Standards
          </h1>
          <p className="text-xl text-gray-400 font-medium">
            Our unwavering commitment to protecting children on PiPn.
          </p>
        </div>

        <div className="space-y-12">
          <section className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 text-sm">
                01
              </span>
              Zero Tolerance Policy
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                PiPn has a strict, zero-tolerance policy against the sharing,
                promotion, or distribution of Child Sexual Abuse Material (CSAM)
                and any form of child sexual abuse and exploitation (CSAE).
              </p>
              <p>
                We do not allow any content that sexualizes minors, endangers
                children, or facilitates the exploitation of young people. This
                applies to all areas of our platform, including public posts,
                community rooms, Direct Messages, and user profiles.
              </p>
            </div>
          </section>

          <section className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 text-sm">
                02
              </span>
              User Reporting and Action
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                We provide our community with the tools to actively maintain a
                safe environment. Users can report any content or behavior that
                violates these child safety standards directly within the app
                using our dedicated reporting flows.
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-4 marker:text-teal-500">
                <li>
                  Immediate review of all reports flagged for child safety
                  concerns.
                </li>
                <li>
                  Permanent suspension of accounts found violating our CSAE
                  policies.
                </li>
                <li>Preservation of evidence as required by law.</li>
              </ul>
            </div>
          </section>

          <section className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 text-sm">
                03
              </span>
              Cooperation with Authorities
            </h2>
            <p className="text-gray-300 leading-relaxed">
              PiPn complies with all relevant child safety laws. When we become
              aware of CSAM on our platform, we report it to the National Center
              for Missing & Exploited Children (NCMEC) and cooperate fully with
              law enforcement agencies globally to assist in the investigation
              and prosecution of offenders.
            </p>
          </section>

          <section className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 text-sm">
                04
              </span>
              Contact Information
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have questions about our child safety practices,
              compliance, or need to report an urgent matter regarding child
              exploitation, please contact our designated safety team
              immediately.
            </p>
            <div className="inline-flex items-center gap-2 bg-black/50 border border-white/10 px-4 py-3 rounded-lg">
              <span className="text-gray-400">Email:</span>
              <a
                href="mailto:info@pipn.app"
                className="text-teal-400 hover:text-teal-300 font-medium"
              >
                info@pipn.app
              </a>
            </div>
          </section>

          <div className="pt-8 text-center text-gray-500 text-sm">
            <p>Last Updated: February 2026</p>
            <p className="mt-2">PiPn - Trader Social Network</p>
          </div>
        </div>
      </div>
    </div>
  );
}
