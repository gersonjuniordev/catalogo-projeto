import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FunnelIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const trucks = [
  {
    id: 1,
    name: 'Volvo FH 540',
    brand: 'Volvo',
    year: 2022,
    kilometers: 0,
    price: 'R$ 650.000',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Novo',
    description: 'Caminhão Volvo FH 540 6x4, motor de 540cv, câmbio I-Shift, freios ABS, ar condicionado, vidros e travas elétricas.',
  },
  {
    id: 2,
    name: 'Scania R450',
    brand: 'Scania',
    year: 2021,
    kilometers: 45000,
    price: 'R$ 580.000',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Seminovo',
    description: 'Scania R450 6x2, motor de 450cv, câmbio Opticruise, freios ABS, ar condicionado, vidros e travas elétricas.',
  },
  {
    id: 3,
    name: 'Mercedes-Benz Actros 2651',
    brand: 'Mercedes-Benz',
    year: 2023,
    kilometers: 0,
    price: 'R$ 620.000',
    image: 'https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Novo',
    description: 'Mercedes-Benz Actros 2651 6x4, motor de 510cv, câmbio PowerShift, freios ABS, ar condicionado.',
  },
  // Adicione mais caminhões conforme necessário
]

const brands = ['Todas', 'Volvo', 'Scania', 'Mercedes-Benz']
const categories = ['Todas', 'Novo', 'Seminovo']
const sortOptions = [
  { name: 'Mais Recentes', value: 'recent' },
  { name: 'Preço: Menor para Maior', value: 'price-asc' },
  { name: 'Preço: Maior para Menor', value: 'price-desc' },
  { name: 'Quilometragem: Menor para Maior', value: 'km-asc' },
]

export default function Catalog() {
  const [selectedBrand, setSelectedBrand] = useState('Todas')
  const [selectedCategory, setSelectedCategory] = useState('Todas')
  const [selectedSort, setSelectedSort] = useState('recent')
  const [searchTerm, setSearchTerm] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const filteredTrucks = trucks
    .filter((truck) => {
      const matchesBrand = selectedBrand === 'Todas' || truck.brand === selectedBrand
      const matchesCategory = selectedCategory === 'Todas' || truck.category === selectedCategory
      const matchesSearch = truck.name.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesBrand && matchesCategory && matchesSearch
    })
    .sort((a, b) => {
      switch (selectedSort) {
        case 'price-asc':
          return parseInt(a.price.replace(/\D/g, '')) - parseInt(b.price.replace(/\D/g, ''))
        case 'price-desc':
          return parseInt(b.price.replace(/\D/g, '')) - parseInt(a.price.replace(/\D/g, ''))
        case 'km-asc':
          return a.kilometers - b.kilometers
        default:
          return b.year - a.year
      }
    })

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white">
        <div className="relative isolate">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Catálogo de Caminhões
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Encontre o caminhão perfeito para suas necessidades entre nossa seleção premium de veículos.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="relative rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full rounded-md border-0 py-3 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                placeholder="Buscar caminhões..."
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="inline-flex items-center gap-x-2 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              onClick={() => setShowFilters(!showFilters)}
            >
              <FunnelIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
              Filtros
            </button>
            <select
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
              className="rounded-md border-0 py-2.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Expanded filters */}
        {showFilters && (
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Marca
              </label>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="block w-full rounded-md border-0 py-2.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
              >
                {brands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Categoria
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="block w-full rounded-md border-0 py-2.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Results */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {filteredTrucks.map((truck) => (
            <div key={truck.id} className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-lg bg-gray-200">
                <img
                  src={truck.image}
                  alt={truck.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity duration-200"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{truck.name}</h3>
                  <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                    {truck.category}
                  </span>
                </div>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-600">Marca: {truck.brand}</p>
                  <p className="text-gray-600">Ano: {truck.year}</p>
                  <p className="text-gray-600">
                    Quilometragem: {truck.kilometers.toLocaleString()} km
                  </p>
                  <p className="text-primary font-semibold text-2xl">{truck.price}</p>
                  <p className="text-gray-500 line-clamp-2 text-sm">{truck.description}</p>
                </div>
                <Link
                  to={`/catalogo/${truck.id}`}
                  className="block w-full text-center bg-primary hover:bg-primary/90 text-white px-4 py-2.5 rounded-md font-medium transition-colors duration-200"
                >
                  Ver Detalhes
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredTrucks.length === 0 && (
          <div className="text-center py-16">
            <h3 className="mt-2 text-lg font-semibold text-gray-900">Nenhum caminhão encontrado</h3>
            <p className="mt-1 text-gray-500">
              Tente ajustar seus filtros ou termos de busca para encontrar o que procura.
            </p>
          </div>
        )}
      </div>
    </div>
  )
} 