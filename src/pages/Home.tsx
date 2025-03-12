import React from 'react'
import { Link } from 'react-router-dom'
import TruckCard from '../components/TruckCard'
import { TruckIcon, ShieldCheckIcon, ClockIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

const trucks = [
  {
    id: 1,
    title: 'Volvo FH 540',
    description: 'Caminhão Volvo FH 540 6x4, motor de 540cv, câmbio I-Shift, freios ABS, ar condicionado, vidros e travas elétricas.',
    price: 'R$ 650.000',
    year: '2022',
    imageUrl: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Scania R450',
    description: 'Scania R450 6x2, motor de 450cv, câmbio Opticruise, freios ABS, ar condicionado, vidros e travas elétricas.',
    price: 'R$ 580.000',
    year: '2021',
    imageUrl: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Mercedes-Benz Actros 2651',
    description: 'Mercedes-Benz Actros 2651 6x4, motor de 510cv, câmbio PowerShift, freios ABS, ar condicionado.',
    price: 'R$ 620.000',
    year: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
]

const features = [
  {
    name: 'Qualidade Garantida',
    description: 'Todos os nossos caminhões passam por rigorosas inspeções de qualidade',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Pronta Entrega',
    description: 'Disponibilidade imediata para a maioria dos modelos',
    icon: ClockIcon,
  },
  {
    name: 'Melhor Custo-Benefício',
    description: 'Preços competitivos e condições especiais de financiamento',
    icon: CurrencyDollarIcon,
  },
]

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 opacity-90" />
          <img
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Background"
            className="h-full w-full object-cover object-center opacity-20"
          />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Encontre o caminhão ideal para o seu negócio
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Oferecemos uma ampla seleção de caminhões de alta qualidade das melhores marcas do mercado.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/catalogo"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200"
              >
                Ver Catálogo Completo
              </Link>
              <Link
                to="/contato"
                className="text-sm font-semibold leading-6 text-white hover:text-gray-300 transition-colors duration-200"
              >
                Fale Conosco <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">Por que nos escolher?</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Excelência em Caminhões
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Oferecemos os melhores caminhões do mercado com garantia de qualidade e satisfação.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <feature.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Featured section */}
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Caminhões em Destaque</h2>
              <Link
                to="/catalogo"
                className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors duration-200"
              >
                Ver todos <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {trucks.map((truck) => (
                <TruckCard
                  key={truck.id}
                  imageUrl={truck.imageUrl}
                  title={truck.title}
                  description={truck.description}
                  price={truck.price}
                  year={truck.year}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="relative isolate overflow-hidden bg-gray-900">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Pronto para encontrar seu próximo caminhão?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Entre em contato conosco e descubra as melhores opções para o seu negócio.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contato"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200"
              >
                Fale Conosco
              </Link>
              <Link
                to="/catalogo"
                className="text-sm font-semibold leading-6 text-white hover:text-gray-300 transition-colors duration-200"
              >
                Ver Catálogo <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          aria-hidden="true"
        >
          <circle cx="512" cy="512" r="512" fill="url(#gradient)" fillOpacity="0.7" />
          <defs>
            <radialGradient id="gradient">
              <stop stopColor="#1E40AF" />
              <stop offset="1" stopColor="#1E40AF" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
} 