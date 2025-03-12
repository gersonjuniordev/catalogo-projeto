import React from 'react'
import { Link } from 'react-router-dom'
import { TruckIcon, UserGroupIcon, BuildingOfficeIcon, CheckBadgeIcon } from '@heroicons/react/24/outline'

const stats = [
  { name: 'Anos no Mercado', value: '15+' },
  { name: 'Caminhões Vendidos', value: '1000+' },
  { name: 'Clientes Satisfeitos', value: '850+' },
  { name: 'Marcas Parceiras', value: '10+' },
]

const values = [
  {
    name: 'Qualidade',
    description: 'Trabalhamos apenas com os melhores caminhões e realizamos rigorosas inspeções de qualidade.',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Experiência',
    description: 'Nossa equipe possui ampla experiência no mercado de caminhões e transportes.',
    icon: UserGroupIcon,
  },
  {
    name: 'Compromisso',
    description: 'Comprometidos com a satisfação dos nossos clientes e com a excelência no atendimento.',
    icon: BuildingOfficeIcon,
  },
]

const team = [
  {
    name: 'João Silva',
    role: 'Diretor Comercial',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
  },
  {
    name: 'Maria Santos',
    role: 'Gerente de Vendas',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
  },
  {
    name: 'Pedro Oliveira',
    role: 'Consultor Técnico',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
  },
]

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Sobre a Ancora Transportes
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Somos especialistas no mercado de caminhões, oferecendo as melhores opções para o seu negócio desde 2008. 
              Nossa missão é proporcionar a melhor experiência na compra do seu caminhão.
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>

      {/* Stats section */}
      <div className="border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-primary sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Values section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">Nossos Valores</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              O que nos move
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Nossa empresa é guiada por valores sólidos que garantem a excelência em nossos serviços e a satisfação dos nossos clientes.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {values.map((value) => (
                <div key={value.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <value.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                    {value.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{value.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Team section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">Nossa Equipe</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Conheça quem faz acontecer
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Nossa equipe é formada por profissionais experientes e apaixonados pelo que fazem.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {team.map((person) => (
              <li key={person.name}>
                <img className="aspect-[3/3] w-full rounded-2xl object-cover" src={person.image} alt="" />
                <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{person.name}</h3>
                <p className="text-base leading-7 text-gray-600">{person.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA section */}
      <div className="relative isolate overflow-hidden bg-gray-900">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Pronto para encontrar seu caminhão ideal?
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