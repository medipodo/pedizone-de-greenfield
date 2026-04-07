import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fußpilz erkennen: Bilder, Symptome & Unterscheidung | PediZone.de',
  description: 'Visueller Guide: Wie sieht Fußpilz aus? Verschiedene Typen, typische Symptome und was mit Fußpilz verwechselt werden kann.',
  alternates: {
    canonical: 'https://pedizone.de/blog/fusspilz/bilder',
  },
}

export default function BilderArtikel() {
  return (
    <article className="py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="text-sm mb-8">
          <ol className="flex items-center space-x-2 flex-wrap">
            <li><Link href="/" className="text-primary-600 hover:underline">Startseite</Link></li>
            <li className="text-medical-400">/</li>
            <li><Link href="/blog" className="text-primary-600 hover:underline">Blog</Link></li>
            <li className="text-medical-400">/</li>
            <li><Link href="/blog/fusspilz" className="text-primary-600 hover:underline">Fußpilz</Link></li>
            <li className="text-medical-400">/</li>
            <li className="text-medical-600">Bilder</li>
          </ol>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-medical-800 mb-4">
          Fußpilz erkennen: Bilder und Symptome
        </h1>
        
        <div className="flex items-center gap-4 text-sm text-medical-600 mb-8">
          <span>📅 6. April 2026</span>
          <span>•</span>
          <span>🕒 9 Min. Lesezeit</span>
        </div>

        <div className="relative h-64 sm:h-96 w-full mb-8 rounded-xl overflow-hidden">
          <Image 
            src="/images/blog/bilder-1.webp"
            alt="Fußpilz Symptome und Erkennung"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-medical max-w-none">
          <p className="text-lg text-medical-700 leading-relaxed mb-6">
            Ihre Füße jucken. Die Haut zwischen den Zehen ist weiß und schuppig. Ist das Fußpilz – oder doch etwas anderes? <strong>Visuelle Erkennung</strong> ist der erste Schritt zur richtigen Behandlung. Dieser Guide zeigt Ihnen, worauf Sie achten müssen.
          </p>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 my-6 rounded-r-lg">
            <p className="text-medical-700 text-sm">
              <strong>Wichtig:</strong> Dieser Artikel dient der Orientierung. Eine sichere Diagnose kann nur ein Arzt stellen. Bei Unsicherheit immer zum Dermatologen.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-medical-800 mt-8 mb-4">Die drei Haupttypen von Fußpilz</h2>

          <p className="mb-4">
            Fußpilz (Tinea pedis) tritt in verschiedenen Formen auf. Die häufigste: <strong>Interdigitaler Fußpilz</strong> (zwischen den Zehen). Dann gibt es <strong>Squamös-hyperkeratotischen Fußpilz</strong> (Sohlen und Seitenränder) und <strong>Vesikulös-dyshidrotischen Fußpilz</strong> (mit Bläschen). Schauen wir sie uns genauer an.
          </p>

          <h3 className="text-xl font-semibold text-medical-800 mt-6 mb-3">Typ 1: Interdigitaler Fußpilz (80% aller Fälle)</h3>
          
          <div className="bg-blue-50 p-6 my-6 rounded-xl border border-blue-200">
            <h4 className="font-semibold text-medical-800 mb-3">Typische Merkmale:</h4>
            <ul className="space-y-2 text-medical-700 text-sm">
              <li>📍 <strong>Wo:</strong> Zwischen den Zehen, meist zwischen 4. und 5. Zehe</li>
              <li>👁️ <strong>Aussehen:</strong> Weiße, aufgequollene Haut (mazeration). Schuppt sich ab. Darunter oft rötliche, nässende Haut.</li>
              <li>🔥 <strong>Gefühl:</strong> Starker Juckreiz, besonders nachts. Brennendes Gefühl. Manchmal Geruch.</li>
              <li>📈 <strong>Verlauf:</strong> Beginnt zwischen den Zehen, breitet sich langsam zur Fußsohle aus.</li>
            </ul>
          </div>

          <p className="mb-4">
            Dieser Typ ist am häufigsten, weil die Zehenzwischenräume feucht und warm sind – ideale Pilzbedingungen. Ohne Behandlung kann die Haut aufplatzen und kleine Risse bilden (Fissuren), die schmerzhaft sind und Eintrittspforte für Bakterien.
          </p>

          <h3 className="text-xl font-semibold text-medical-800 mt-6 mb-3">Typ 2: Squamös-hyperkeratotischer Fußpilz (Mokassin-Typ)</h3>

          <div className="bg-green-50 p-6 my-6 rounded-xl border border-green-200">
            <h4 className="font-semibold text-medical-800 mb-3">Typische Merkmale:</h4>
            <ul className="space-y-2 text-medical-700 text-sm">
              <li>📍 <strong>Wo:</strong> Fußsohlen, Fersen, Seitenränder – wie ein Mokassin-Schuh</li>
              <li>👁️ <strong>Aussehen:</strong> Trockene, verdickte Haut. Starke Schuppung. Oft gelblich oder bräunlich verfärbt.</li>
              <li>🔥 <strong>Gefühl:</strong> Weniger Juckreiz als Typ 1. Haut fühlt sich hart an, kann reißen.</li>
              <li>📈 <strong>Verlauf:</strong> Schleichend. Viele denken "trockene Haut" und cremen jahrelang, ohne Besserung.</li>
            </ul>
          </div>

          <p className="mb-4">
            Dieser Typ wird oft spät erkannt, weil er harmloser aussieht. Problem: Er ist hartnäckiger und braucht längere Behandlung (oft 6-8 Wochen). Zudem besteht hohes Risiko, dass er auf die Nägel übergeht.
          </p>

          <div className="relative h-64 w-full my-8 rounded-xl overflow-hidden">
            <Image 
              src="/images/blog/bilder-2.webp"
              alt="Verschiedene Fußpilz Typen"
              fill
              className="object-cover"
            />
          </div>

          <h3 className="text-xl font-semibold text-medical-800 mt-6 mb-3">Typ 3: Vesikulös-dyshidrotischer Fußpilz (selten)</h3>

          <div className="bg-purple-50 p-6 my-6 rounded-xl border border-purple-200">
            <h4 className="font-semibold text-medical-800 mb-3">Typische Merkmale:</h4>
            <ul className="space-y-2 text-medical-700 text-sm">
              <li>📍 <strong>Wo:</strong> Fußgewölbe, Fußkanten, manchmal Zehen</li>
              <li>👁️ <strong>Aussehen:</strong> Kleine, mit Flüssigkeit gefüllte Bläschen. Können zusammenfließen. Nach Platzen: nässende, rote Stellen.</li>
              <li>🔥 <strong>Gefühl:</strong> Starker Juckreiz, Spannung. Nach Aufplatzen: Brennen.</li>
              <li>📈 <strong>Verlauf:</strong> Oft schubweise. Kann mit anderen Typen kombiniert auftreten.</li>
            </ul>
          </div>

          <p className="mb-4">
            Dieser Typ wird häufig mit dyshidrotischem Ekzem (eine nicht-infektiöse Hauterkrankung) verwechselt. Wichtig: Wenn Bläschen auftreten, zum Arzt gehen. Selbstdiagnose ist hier schwierig.
          </p>

          <h2 className="text-2xl font-bold text-medical-800 mt-8 mb-4">Symptom-Checkliste: Habe ich Fußpilz?</h2>

          <p className="mb-4">
            Nicht jede Hautveränderung am Fuß ist Fußpilz. Aber wenn Sie <strong>mehrere</strong> dieser Punkte abhaken können, ist die Wahrscheinlichkeit hoch:
          </p>

          <div className="bg-yellow-50 p-6 my-6 rounded-xl border-2 border-yellow-300">
            <h3 className="font-semibold text-medical-800 mb-3">✓ Typische Fußpilz-Symptome:</h3>
            <ul className="space-y-2 text-medical-700 text-sm">
              <li>☐ Juckreiz zwischen den Zehen oder an der Fußsohle</li>
              <li>☐ Weiße, aufgequollene Haut zwischen den Zehen</li>
              <li>☐ Rötung und Schuppung</li>
              <li>☐ Brennendes Gefühl, besonders beim Gehen</li>
              <li>☐ Risse in der Haut (Fissuren), vor allem zwischen den Zehen</li>
              <li>☐ Unangenehmer Geruch trotz Hygiene</li>
              <li>☐ Verdickte, verhornete Hautstellen an den Sohlen</li>
              <li>☐ Kleine Bläschen (seltener)</li>
              <li>☐ Symptome verschlimmern sich in geschlossenen Schuhen</li>
            </ul>
          </div>

          <p className="mb-4">
            <strong>Je mehr Punkte zutreffen, desto wahrscheinlicher ist Fußpilz.</strong> Aber: Einige dieser Symptome können auch bei anderen Erkrankungen auftreten. Mehr dazu gleich.
          </p>

          <h2 className="text-2xl font-bold text-medical-800 mt-8 mb-4">Was wird oft mit Fußpilz verwechselt?</h2>

          <h3 className="text-xl font-semibold text-medical-800 mt-6 mb-3">Dyshidrotisches Ekzem</h3>
          <p className="mb-4">
            Auch hier: juckende Bläschen an Füßen (und Händen). <strong>Unterschied:</strong> Ekzem ist nicht ansteckend, oft stressbedingt, betrifft meist beide Füße symmetrisch. Fußpilz ist einseitig oder asymmetrisch.
          </p>

          <h3 className="text-xl font-semibold text-medical-800 mt-6 mb-3">Kontaktdermatitis</h3>
          <p className="mb-4">
            Allergische Reaktion auf Schuhmaterialien, Waschmittel etc. <strong>Unterschied:</strong> Tritt plötzlich auf nach Kontakt mit Auslöser. Hört auf, wenn Auslöser gemieden wird. Fußpilz entwickelt sich schleichend.
          </p>

          <h3 className="text-xl font-semibold text-medical-800 mt-6 mb-3">Psoriasis (Schuppenflechte)</h3>
          <p className="mb-4">
            Kann auch Füße betreffen. <strong>Unterschied:</strong> Psoriasis hat klar abgegrenzte, silbrig schuppende Plaques. Fußpilz hat unscharfe Ränder. Psoriasis juckt weniger.
          </p>

          <h3 className="text-xl font-semibold text-medical-800 mt-6 mb-3">Einfach trockene Haut</h3>
          <p className="mb-4">
            Besonders im Winter. <strong>Unterschied:</strong> Trockene Haut bessert sich mit Feuchtigkeitscreme. Fußpilz nicht. Trockene Haut juckt kaum.
          </p>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 my-6 rounded-r-lg">
            <h3 className="font-semibold text-medical-800 mb-3">🚨 Wann zum Arzt?</h3>
            <ul className="space-y-2 text-medical-700 text-sm">
              <li>• Sie sind unsicher, ob es Fußpilz ist</li>
              <li>• Selbstbehandlung nach 2 Wochen ohne Besserung</li>
              <li>• Starke Schmerzen oder offene Wunden</li>
              <li>• Verdacht auf Nagelpilz (verfärbte, verdickte Nägel)</li>
              <li>• Diabetes oder geschwächtes Immunsystem</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-medical-800 mt-8 mb-4">Selbsttest: So prüfen Sie zu Hause</h2>

          <p className="mb-4">
            Ein 100% sicherer Selbsttest existiert nicht. Aber Sie können die Wahrscheinlichkeit einschätzen:
          </p>

          <div className="bg-blue-50 p-6 my-6 rounded-xl border border-blue-200">
            <ol className="space-y-3 text-medical-700 list-decimal list-inside text-sm">
              <li><strong>Visuelle Inspektion:</strong> Schauen Sie genau zwischen alle Zehen. Weiße, feuchte Haut? Rötung? Schuppung?</li>
              <li><strong>Geruchstest:</strong> Pilzinfektionen riechen oft unangenehm, auch bei guter Hygiene.</li>
              <li><strong>Einseitigkeitstest:</strong> Ist nur ein Fuß betroffen? Das spricht für Pilz. Beide Füße symmetrisch = eher Ekzem.</li>
              <li><strong>Verlaufsbeobachtung:</strong> Wird es in geschlossenen Schuhen schlimmer? Typisch für Pilz.</li>
              <li><strong>Besserung nach Lüften:</strong> Bessert sich der Juckreiz, wenn Sie barfuß laufen? Deutet auf Pilz hin.</li>
            </ol>
          </div>

          <p className="mb-4">
            <strong>Goldstandard bleibt der Arzt:</strong> Ein Hautabstrich unter dem Mikroskop oder eine Pilzkultur gibt 100% Sicherheit. Dauert zwar 2-3 Wochen (Kultur), aber bei unklaren Fällen lohnt es sich.
          </p>

          <h2 className="text-2xl font-bold text-medical-800 mt-8 mb-4">Häufige Fragen zur Erkennung</h2>

          <div className="space-y-4 my-6">
            <details className="group bg-white p-6 rounded-xl shadow-sm border border-medical-100">
              <summary className="font-semibold text-medical-800 cursor-pointer flex justify-between items-center text-sm">
                Kann Fußpilz auch ohne Juckreiz auftreten?
                <svg className="w-5 h-5 text-medical-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-medical-600 text-sm">
                Ja. Besonders der Mokassin-Typ (an den Sohlen) juckt oft wenig oder gar nicht. Manche Menschen haben Fußpilz jahrelang ohne starken Juckreiz – erkennen es erst, wenn es auf die Nägel übergeht. Wenn Ihre Füße stark schuppen oder verhornt sind ohne erkennbaren Grund, lassen Sie es checken.
              </p>
            </details>

            <details className="group bg-white p-6 rounded-xl shadow-sm border border-medical-100">
              <summary className="font-semibold text-medical-800 cursor-pointer flex justify-between items-center text-sm">
                Ist Fußpilz immer zwischen den Zehen?
                <svg className="w-5 h-5 text-medical-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-medical-600 text-sm">
                Nein. Zwar beginnt er meist dort (feucht-warmes Milieu), aber er kann auch primär an Sohlen, Fersen oder Fußkanten auftreten. Manche Menschen haben Fußpilz nur an den Sohlen, nie zwischen den Zehen. Schauen Sie sich Ihren ganzen Fuß an, nicht nur die Zehenzwischenräume.
              </p>
            </details>

            <details className="group bg-white p-6 rounded-xl shadow-sm border border-medical-100">
              <summary className="font-semibold text-medical-800 cursor-pointer flex justify-between items-center text-sm">
                Sieht Fußpilz bei jedem Menschen gleich aus?
                <svg className="w-5 h-5 text-medical-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-medical-600 text-sm">
                Nein. Es gibt große individuelle Unterschiede. Bei Person A: starke Rötung und Nässen. Bei Person B: nur leichte Schuppung. Hauttyp, Pilzart und Immunsystem beeinflussen das Aussehen. Deshalb ist Selbstdiagnose anhand von Bildern allein schwierig. Im Zweifel: Arzt.
              </p>
            </details>
          </div>

          <h2 className="text-2xl font-bold text-medical-800 mt-8 mb-4">Fazit: Bilder helfen, ersetzen aber keinen Arzt</h2>

          <p className="mb-4">
            Dieser Guide gibt Ihnen Orientierung, um Fußpilz visuell einzuordnen. <strong>Typische Zeichen:</strong> Juckreiz, weiße/schuppige Haut zwischen Zehen, Rötung, unangenehmer Geruch. Wenn mehrere Symptome zutreffen, ist Fußpilz wahrscheinlich.
          </p>

          <p className="mb-4">
            <strong>Aber:</strong> Verwechslungen sind häufig. Ekzeme, Psoriasis, Allergien können ähnlich aussehen. Bei Unsicherheit oder ausbleibendem Erfolg nach 2 Wochen Selbstbehandlung: Dermatologen aufsuchen. Ein Hautabstrich bringt Klarheit und spart Ihnen Wochen falscher Behandlung.
          </p>

          <p className="mb-4">
            Wenn es Fußpilz ist: Konsequente <Link href="/blog/fusspilz/creme" className="text-primary-600 hover:underline">Behandlung mit antimykotischer Creme</Link>, <Link href="/blog/fusspilz/dusche" className="text-primary-600 hover:underline">richtige Hygiene</Link>, und <strong>Geduld</strong>. Mehr zur <Link href="/blog/fusspilz/wie-lange" className="text-primary-600 hover:underline">Behandlungsdauer hier</Link>.
          </p>

          <div className="mt-12 p-6 bg-primary-50 rounded-xl border border-primary-100">
            <h3 className="font-semibold text-medical-800 mb-3">Weiterführende Artikel</h3>
            <div className="space-y-2 text-sm">
              <Link href="/wissen/fusspilz/symptome" className="block text-primary-600 hover:underline">
                → Fußpilz Symptome: Kompletter Überblick
              </Link>
              <Link href="/blog/fusspilz/creme" className="block text-primary-600 hover:underline">
                → Die besten Fußpilz Cremes
              </Link>
              <Link href="/wissen/fusspilz/behandlung" className="block text-primary-600 hover:underline">
                → Fußpilz Behandlung: Leitfaden
              </Link>
            </div>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mt-8 rounded-r-lg">
            <p className="text-medical-700 text-sm">
              <strong>Medizinischer Hinweis:</strong> Dieser Artikel dient der Orientierung und ersetzt keine ärztliche Diagnose. Bei Hautveränderungen konsultieren Sie einen Dermatologen.
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}
