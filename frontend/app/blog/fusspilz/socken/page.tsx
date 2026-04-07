import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Die richtigen Socken gegen Fußpilz: Material & Pflege | PediZone.de',
  description: 'Baumwolle oder Synthetik? Wie oft wechseln? Die richtige Socken-Wahl kann Fußpilz vorbeugen und die Heilung beschleunigen.',
  alternates: {
    canonical: 'https://pedizone.de/blog/fusspilz/socken',
  },
}

export default function SockenArtikel() {
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
            <li className="text-medical-600">Socken</li>
          </ol>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-medical-800 mb-4">
          Die richtigen Socken gegen Fußpilz
        </h1>
        
        <div className="flex items-center gap-4 text-sm text-medical-600 mb-8">
          <span>📅 6. April 2026</span>
          <span>•</span>
          <span>🕒 6 Min. Lesezeit</span>
        </div>

        <div className="relative h-64 sm:h-96 w-full mb-8 rounded-xl overflow-hidden">
          <Image 
            src="/images/blog/socken-1.webp"
            alt="Verschiedene Sockentypen für Fußgesundheit"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-medical max-w-none">
          <p className="text-lg text-medical-700 leading-relaxed mb-6">
            Sie tragen sie täglich, waschen sie wöchentlich, denken kaum darüber nach. Dabei verbringen Ihre Füße 8-12 Stunden pro Tag in Socken. Bei Fußpilz wird die Wahl plötzlich relevant. <strong>Baumwolle oder Synthetik? Täglich wechseln oder geht auch länger?</strong> Die Antworten sind komplexer, als Sie denken.
          </p>

          <h2 className="text-2xl font-bold text-medical-800 mt-8 mb-4">Baumwolle vs. Synthetik: Der Mythos bröckelt</h2>

          <p className="mb-4">
            Jahrzehntelang hieß es: "100% Baumwolle ist am besten für die Füße." Das stimmt – aber nur zur Hälfte. <strong>Baumwolle saugt Schweiß auf</strong>, hält ihn aber auch fest. Resultat: feuchte Socken, die stundenlang an den Füßen kleben. Genau das Milieu, das Pilze lieben.
          </p>

          <h3 className="text-xl font-semibold text-medical-800 mt-6 mb-3">Was moderne Forschung zeigt</h3>
          
          <p className="mb-4">
            <strong>Mischgewebe mit Synthetik-Anteil</strong> (z.B. 70% Baumwolle, 30% Polyester) transportiert Feuchtigkeit nach außen – "Moisture-Wicking". Bei Sportlern schneiden diese Socken besser ab als reine Baumwolle.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6 rounded-r-lg">
            <h3 className="font-semibold text-medical-800 mb-3">Material-Vergleich:</h3>
            <ul className="space-y-3 text-medical-700 text-sm">
              <li>🔵 <strong>100% Baumwolle:</strong> Komfortabel, aber problematisch wenn feucht. Für normalen Alltag OK, nicht für Sport.</li>
              <li>🔵 <strong>Baumwoll-Mix (70/30):</strong> Beste Kombination für die meisten. Komfort + Feuchtigkeitstransport.</li>
              <li>🔵 <strong>Merino-Wolle:</strong> Natürlich antimikrobiell, temperaturregulierend. Teurer, aber sehr gut bei Fußpilz-Neigung.</li>
              <li>🔵 <strong>Funktionssynthetik:</strong> Trocknet schnell, ideal für Sport. Manchen zu "künstlich" im Gefühl.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-medical-800 mt-8 mb-4">Silber & Kupfer: Marketing oder wirksam?</h2>

          <p className="mb-4">
            Socken mit <strong>Silberfäden oder Kupferionen</strong> versprechen antimikrobielle Wirkung. Was ist dran?
          </p>

          <p className="mb-4">
            <strong>Silber:</strong> Wirkt tatsächlich gegen Bakterien (die Geruch verursachen). Gegen Pilze? Die Datenlage ist dünn. Leichte Effekte nachweisbar, aber keine Wunderwaffe. Nach 20-30 Wäschen lässt die Wirkung nach.
          </p>

          <p className="mb-4">
            <strong>Kupfer:</strong> Ähnlich wie Silber. Antimikrobielle Eigenschaften vorhanden, aber die Wirkung nimmt mit jedem Waschgang ab.
          </p>

          <p className="mb-4">
            <strong>Fazit:</strong> Nice-to-have, kein Must-have. Wenn der Preis stimmt, spricht nichts dagegen. Erwarten Sie aber keine Heilung – Silbersocken ersetzen keine <Link href="/blog/fusspilz/creme" className="text-primary-600 hover:underline">antimykotische Behandlung</Link>.
          </p>

          <div className="relative h-64 w-full my-8 rounded-xl overflow-hidden">
            <Image 
              src="/images/blog/socken-2.webp"
              alt="Socken richtig waschen bei Fußpilz"
              fill
              className="object-cover"
            />
          </div>

          <h2 className="text-2xl font-bold text-medical-800 mt-8 mb-4">Wechsel-Frequenz: Die ehrliche Antwort</h2>

          <p className="mb-4">
            Standard-Empfehlung: <strong>Täglich wechseln</strong>. Das ist richtig – aber Kontext fehlt oft.
          </p>

          <div className="bg-green-50 p-6 my-6 rounded-xl border border-green-200">
            <h3 className="font-semibold text-medical-800 mb-3">Differenzierte Wechsel-Regel:</h3>
            <ul className="space-y-3 text-medical-700 text-sm">
              <li>✓ <strong>Bei aktivem Fußpilz:</strong> Täglich – keine Ausnahmen. Nach Sport sofort wechseln.</li>
              <li>✓ <strong>Nach intensivem Sport:</strong> Sofort neue Socken anziehen, nicht erst abends. Schweißnasse Socken = Pilz-Inkubator.</li>
              <li>✓ <strong>Normaler Alltag (ohne Fußpilz):</strong> Täglich ideal. Realistisch: Wenn Füße trocken blieben, ist ein Tag länger kein Drama.</li>
              <li>✓ <strong>Im Winter:</strong> Wichtiger als im Sommer, da geschlossene Schuhe + Heizungsluft mehr Schweiß bedeuten.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-medical-800 mt-8 mb-4">Waschen: 60°C sind Pflicht bei Fußpilz</h2>

          <p className="mb-4">
            Hier wird es kritisch: <strong>Pilzsporen überleben 40°C-Wäsche problemlos.</strong> Bei aktivem Fußpilz müssen Socken bei <strong>mindestens 60°C</strong> gewaschen werden.
          </p>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-6 rounded-r-lg">
            <h3 className="font-semibold text-medical-800 mb-3">Wasch-Protokoll bei Fußpilz:</h3>
            <ol className="space-y-2 text-medical-700 list-decimal list-inside text-sm">
              <li><strong>60°C Kochwäsche:</strong> Nur so werden Sporen zuverlässig abgetötet</li>
              <li><strong>Hygienespüler hinzufügen:</strong> Z.B. Sagrotan Wäsche-Hygienespüler als Extra-Sicherheit</li>
              <li><strong>Vollwaschmittel statt Colorwaschmittel:</strong> Bleichmittel wirkt antimikrobiell</li>
              <li><strong>Sofort trocknen:</strong> Feuchte Wäsche in der Maschine lassen = Sporen überleben</li>
              <li><strong>Trockner nutzen (falls vorhanden):</strong> Hohe Hitze tötet zusätzlich ab</li>
            </ol>
          </div>

          <p className="mb-4">
            <strong>Problem:</strong> Nicht alle Socken vertragen 60°C. Funktionssocken, Wolle, feine Materialien gehen kaputt. <strong>Lösung:</strong> Für die Behandlungsphase (4-6 Wochen) günstige Baumwoll-Socken kaufen, die 60°C vertragen. Nach Heilung zurück zu Lieblingssocken.
          </p>

          <h2 className="text-2xl font-bold text-medical-800 mt-8 mb-4">Passform: Zu eng ist gefährlich</h2>

          <p className="mb-4">
            Zu enge Socken quetschen Zehen zusammen. Das schafft feucht-warme Nischen zwischen den Zehen – ideal für Pilze.
          </p>

          <ul className="list-disc list-inside space-y-2 mb-4 text-medical-700 text-sm">
            <li>Keine einschnürenden Bündchen (Durchblutung!)</li>
            <li>Zehenkuppen haben Platz (nicht zu kurz)</li>
            <li>Nahtlose Zehenbox oder flache Nähte (weniger Reibung = weniger Hautverletzungen)</li>
          </ul>

          <h2 className="text-2xl font-bold text-medical-800 mt-8 mb-4">Häufige Fragen zu Socken</h2>

          <div className="space-y-4 my-6">
            <details className="group bg-white p-6 rounded-xl shadow-sm border border-medical-100">
              <summary className="font-semibold text-medical-800 cursor-pointer flex justify-between items-center text-sm">
                Kann ich alte Socken nach Fußpilz weiter tragen?
                <svg className="w-5 h-5 text-medical-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-medical-600 text-sm">
                Ja, wenn Sie sie mindestens 2x bei 60°C gewaschen haben. Socken, die nur bei 40°C gewaschen wurden, können noch Sporen enthalten. Im Zweifel: Socken aus der Infektionsphase entsorgen – kostet weniger als Neuinfektion.
              </p>
            </details>

            <details className="group bg-white p-6 rounded-xl shadow-sm border border-medical-100">
              <summary className="font-semibold text-medical-800 cursor-pointer flex justify-between items-center text-sm">
                Helfen Kompressionssocken bei Fußpilz?
                <svg className="w-5 h-5 text-medical-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-medical-600 text-sm">
                Neutral. Sie verbessern Durchblutung, was theoretisch hilft. Aber: oft eng und können Feuchtigkeit stauen. Bei Fußpilz weder hilfreich noch schädlich. Material und Waschbarkeit sind wichtiger als der Kompressionseffekt.
              </p>
            </details>

            <details className="group bg-white p-6 rounded-xl shadow-sm border border-medical-100">
              <summary className="font-semibold text-medical-800 cursor-pointer flex justify-between items-center text-sm">
                Sind teure Marken-Socken wirklich besser?
                <svg className="w-5 h-5 text-medical-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-medical-600 text-sm">
                Für Fußpilz-Prävention? Nicht zwingend. Günstige Baumwoll-Mix-Socken (60°C waschbar) reichen aus. Teure Marken bieten besseren Komfort, Haltbarkeit und Feuchtigkeitsmanagement – das hilft indirekt. Aber ein 20€-Paar heilt Fußpilz nicht besser als 5€-Socken mit richtiger Hygiene.
              </p>
            </details>
          </div>

          <h2 className="text-2xl font-bold text-medical-800 mt-8 mb-4">Fazit: Socken sind Teil des Gesamtkonzepts</h2>

          <p className="mb-4">
            Die perfekte Anti-Fußpilz-Socke existiert nicht. Aber die <strong>richtige Kombination aus Material, Wechselfrequenz und Waschhygiene</strong> macht einen Unterschied. Baumwoll-Synthetik-Mix, täglich wechseln bei Fußpilz, 60°C-Wäsche – das sind die Basics.
          </p>

          <p className="mb-4">
            Socken allein verhindern oder heilen Fußpilz nicht. Sie sind ein Baustein neben <Link href="/blog/fusspilz/dusche" className="text-primary-600 hover:underline">Dusch-Hygiene</Link>, passender <Link href="/blog/fusspilz/creme" className="text-primary-600 hover:underline">Behandlung</Link> und <Link href="/wissen/fusspilz/vorbeugung" className="text-primary-600 hover:underline">Prävention</Link>. Wer alle Bereiche abdeckt, hat die besten Chancen.
          </p>

          <div className="mt-12 p-6 bg-primary-50 rounded-xl border border-primary-100">
            <h3 className="font-semibold text-medical-800 mb-3">Weiterführende Artikel</h3>
            <div className="space-y-2 text-sm">
              <Link href="/blog/fusspilz/dusche" className="block text-primary-600 hover:underline">
                → Fußpilz in der Dusche vermeiden
              </Link>
              <Link href="/blog/fusspilz/wie-lange" className="block text-primary-600 hover:underline">
                → Wie lange dauert Fußpilz?
              </Link>
              <Link href="/blog/fusspilz/ansteckend" className="block text-primary-600 hover:underline">
                → Wie ansteckend ist Fußpilz?
              </Link>
            </div>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mt-8 rounded-r-lg">
            <p className="text-medical-700 text-sm">
              <strong>Medizinischer Hinweis:</strong> Socken-Hygiene ersetzt keine medizinische Behandlung. Bei anhaltendem Fußpilz konsultieren Sie einen Dermatologen.
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}
