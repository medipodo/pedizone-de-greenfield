import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fußpilz Ratgeber - Alles über Tinea pedis | PediZone.de',
  description: 'Umfassender Ratgeber zu Fußpilz: Symptome, Behandlung, Ursachen und Vorbeugung. Medizinisch fundierte Informationen zu Tinea pedis.',
  alternates: {
    canonical: 'https://pedizone.de/wissen/fusspilz',
  },
}

export default function FusspilzPage() {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🦠</div>
          <h1 className="text-4xl font-bold text-medical-800 mb-4">Fußpilz</h1>
          <p className="text-lg text-medical-600 max-w-2xl mx-auto">
            Tinea pedis ist eine der häufigsten Pilzinfektionen. Erfahren Sie alles über Ursachen, Symptome, Behandlung und Vorbeugung.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          <Link href="/wissen/fusspilz/was-ist-fusspilz" className="group bg-white border-2 border-medical-100 rounded-xl hover:border-primary-400 hover:shadow-xl transition-all overflow-hidden">
            <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-medical-50 to-primary-50">
              <Image 
                src="https://images.unsplash.com/photo-1573717006464-2933e14c2fae?w=600&h=400&fit=crop" 
                alt="Was ist Fußpilz"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 text-5xl">❓</div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-medical-800 mb-2 group-hover:text-primary-600 transition-colors">Was ist Fußpilz?</h2>
              <p className="text-medical-600 text-sm">Grundlegende Informationen über Fußpilz und Tinea pedis</p>
            </div>
          </Link>

          <Link href="/wissen/fusspilz/ursachen" className="group bg-white border-2 border-medical-100 rounded-xl hover:border-primary-400 hover:shadow-xl transition-all overflow-hidden">
            <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-medical-50 to-primary-50">
              <Image 
                src="https://images.unsplash.com/photo-1738778151587-032287ae9f90?w=600&h=400&fit=crop" 
                alt="Ursachen von Fußpilz"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 text-5xl">🔍</div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-medical-800 mb-2 group-hover:text-primary-600 transition-colors">Ursachen</h2>
              <p className="text-medical-600 text-sm">Wie entsteht Fußpilz und welche Faktoren begünstigen die Infektion?</p>
            </div>
          </Link>

          <Link href="/wissen/fusspilz/symptome" className="group bg-white border-2 border-medical-100 rounded-xl hover:border-primary-400 hover:shadow-xl transition-all overflow-hidden">
            <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-medical-50 to-primary-50">
              <Image 
                src="https://images.unsplash.com/photo-1633526543913-d30e3c230d1f?w=600&h=400&fit=crop" 
                alt="Symptome von Fußpilz"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 text-5xl">⚠️</div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-medical-800 mb-2 group-hover:text-primary-600 transition-colors">Symptome</h2>
              <p className="text-medical-600 text-sm">Typische Anzeichen und Symptome einer Fußpilzinfektion erkennen</p>
            </div>
          </Link>

          <Link href="/wissen/fusspilz/ansteckung" className="group bg-white border-2 border-medical-100 rounded-xl hover:border-primary-400 hover:shadow-xl transition-all overflow-hidden">
            <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-medical-50 to-primary-50">
              <Image 
                src="https://images.unsplash.com/photo-1664452060177-2bfd33127e3f?w=600&h=400&fit=crop" 
                alt="Ansteckung mit Fußpilz"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 text-5xl">🔄</div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-medical-800 mb-2 group-hover:text-primary-600 transition-colors">Ansteckung</h2>
              <p className="text-medical-600 text-sm">Wie wird Fußpilz übertragen und wer ist gefährdet?</p>
            </div>
          </Link>

          <Link href="/wissen/fusspilz/arten" className="group bg-white border-2 border-medical-100 rounded-xl hover:border-primary-400 hover:shadow-xl transition-all overflow-hidden">
            <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-medical-50 to-primary-50">
              <Image 
                src="https://images.unsplash.com/photo-1758654859934-2a03792260a0?w=600&h=400&fit=crop" 
                alt="Arten von Fußpilz"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 text-5xl">📋</div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-medical-800 mb-2 group-hover:text-primary-600 transition-colors">Arten</h2>
              <p className="text-medical-600 text-sm">Verschiedene Formen und Typen von Fußpilz</p>
            </div>
          </Link>
          
          <Link href="/wissen/fusspilz/behandlung" className="group bg-white border-2 border-medical-100 rounded-xl hover:border-primary-400 hover:shadow-xl transition-all overflow-hidden">
            <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-medical-50 to-primary-50">
              <Image 
                src="https://customer-assets.emergentagent.com/job_haut-info-de/artifacts/anf5ni25_Ads%C4%B1z%20tasar%C4%B1m%20%2821%29.webp" 
                alt="Behandlung von Fußpilz"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 text-5xl">💊</div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-medical-800 mb-2 group-hover:text-primary-600 transition-colors">Behandlung</h2>
              <p className="text-medical-600 text-sm">Wirksame Therapiemöglichkeiten und Medikamente</p>
            </div>
          </Link>

          <Link href="/wissen/fusspilz/vorbeugung" className="group bg-white border-2 border-medical-100 rounded-xl hover:border-primary-400 hover:shadow-xl transition-all overflow-hidden">
            <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-medical-50 to-primary-50">
              <Image 
                src="https://images.unsplash.com/photo-1775210603429-dc1197f5a1e7?w=600&h=400&fit=crop" 
                alt="Vorbeugung von Fußpilz"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 text-5xl">🛡️</div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-medical-800 mb-2 group-hover:text-primary-600 transition-colors">Vorbeugung</h2>
              <p className="text-medical-600 text-sm">So schützen Sie sich effektiv vor Fußpilz</p>
            </div>
          </Link>
        </div>

        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mt-12 rounded-r-lg">
          <p className="text-medical-700 text-sm">
            <strong>Wichtiger Hinweis:</strong> Die Inhalte ersetzen keine ärztliche Beratung. Bei anhaltenden oder schweren Beschwerden konsultieren Sie bitte einen Arzt oder Dermatologen.
          </p>
        </div>
      </div>
    </div>
  )
}
