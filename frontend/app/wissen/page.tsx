import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wissen',
  description: 'Umfassende Wissensdatenbank rund um Fußgesundheit. Erfahren Sie alles über Fußpilz, Behandlung und Prävention.',
  alternates: {
    canonical: 'https://pedizone.de/wissen',
  },
}

export default function WissenPage() {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8">
          <ol className="flex items-center space-x-2">
            <li><Link href="/" className="text-primary-600 hover:underline">Startseite</Link></li>
            <li className="text-medical-400">/</li>
            <li className="text-medical-600">Wissen</li>
          </ol>
        </nav>

        <h1 className="text-4xl font-bold text-medical-800 mb-4">Wissen</h1>
        <p className="text-lg text-medical-600 mb-12">
          Entdecken Sie unsere umfangreiche Wissensdatenbank rund um Fußgesundheit.
        </p>

        {/* Topics Grid */}
        <div className="grid gap-6">
          <Link href="/wissen/fusspilz" className="group">
            <div className="p-8 bg-white border border-medical-100 rounded-xl hover:border-primary-200 hover:shadow-lg transition-all">
              <div className="flex items-start space-x-4">
                <span className="text-4xl">🦠</span>
                <div>
                  <h2 className="text-2xl font-semibold text-medical-800 group-hover:text-primary-600 transition-colors">
                    Fußpilz (Tinea pedis)
                  </h2>
                  <p className="text-medical-500 mt-2">
                    Umfassende Informationen über Fußpilz — von Ursachen und Symptomen bis zur Behandlung und Vorbeugung.
                  </p>
                  <span className="inline-block mt-4 text-sm text-primary-600 font-medium">
                    7 Artikel →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
