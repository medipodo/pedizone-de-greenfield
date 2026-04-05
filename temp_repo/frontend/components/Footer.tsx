import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-medical-50 border-t border-medical-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🦶</span>
              <span className="text-lg font-semibold text-medical-800">
                Pedi<span className="text-primary-600">Zone</span>.de
              </span>
            </Link>
            <p className="text-sm text-medical-500">
              Ihr vertrauenswürdiger Ratgeber für Fußgesundheit in Deutschland.
            </p>
          </div>

          {/* Themen */}
          <div>
            <h3 className="text-sm font-semibold text-medical-800 uppercase tracking-wider mb-4">
              Themen
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/wissen" className="text-sm text-medical-500 hover:text-primary-600 transition-colors">
                  Wissen
                </Link>
              </li>
              <li>
                <Link href="/wissen/fusspilz" className="text-sm text-medical-500 hover:text-primary-600 transition-colors">
                  Fußpilz
                </Link>
              </li>
              <li>
                <Link href="/wissen/fusspilz/behandlung" className="text-sm text-medical-500 hover:text-primary-600 transition-colors">
                  Behandlung
                </Link>
              </li>
              <li>
                <Link href="/wissen/fusspilz/vorbeugung" className="text-sm text-medical-500 hover:text-primary-600 transition-colors">
                  Vorbeugung
                </Link>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="text-sm font-semibold text-medical-800 uppercase tracking-wider mb-4">
              Rechtliches
            </h3>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-medical-500">Impressum</span>
              </li>
              <li>
                <span className="text-sm text-medical-500">Datenschutz</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-medical-200">
          <p className="text-center text-xs text-medical-400">
            © {new Date().getFullYear()} PediZone.de — Alle Rechte vorbehalten.
          </p>
          <p className="text-center text-xs text-medical-400 mt-2">
            Die Informationen auf dieser Website ersetzen keine ärztliche Beratung.
          </p>
        </div>
      </div>
    </footer>
  )
}
