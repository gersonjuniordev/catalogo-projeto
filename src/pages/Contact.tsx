import React, { useState, FormEvent } from 'react'
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'

const contactInfo = [
  {
    name: 'Endereço',
    description: 'Av. Principal, 1000, São Paulo - SP',
    icon: MapPinIcon,
  },
  {
    name: 'Telefone',
    description: '(11) 1234-5678 / (11) 98765-4321',
    icon: PhoneIcon,
  },
  {
    name: 'Email',
    description: 'contato@ancoratransportes.com',
    icon: EnvelopeIcon,
  },
  {
    name: 'Horário de Funcionamento',
    description: 'Segunda à Sexta: 8h às 18h\nSábado: 8h às 12h',
    icon: ClockIcon,
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Aqui você pode implementar a lógica de envio do formulário
    console.log('Dados do formulário:', formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
    }, 3000)
  }

  return (
    <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 opacity-30 mix-blend-multiply">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Entre em Contato</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Estamos aqui para ajudar. Entre em contato conosco e descubra as melhores soluções para o seu negócio.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div>
            <h2 className="text-2xl font-bold text-secondary-800 mb-8">Informações de Contato</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {contactInfo.map((item) => (
                <div
                  key={item.name}
                  className="relative bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <item.icon className="h-6 w-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary-800">{item.name}</h3>
                      <p className="mt-2 text-secondary-600 whitespace-pre-line">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mapa */}
            <div className="mt-8 bg-white rounded-xl shadow-md p-4 aspect-video">
              <iframe
                title="Localização"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975774763454!2d-46.6522131!3d-23.5635609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQ4LjgiUyA0NsKwMzknMDguMCJX!5e0!3m2!1spt-BR!2sbr!4v1635959981000!5m2!1spt-BR!2sbr"
                className="w-full h-full rounded-lg"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-secondary-800 mb-8">Envie sua Mensagem</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="input-field"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="input-field"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="input-field"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-2">
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    className="input-field"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={6}
                  required
                  className="input-field resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2"
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Mensagem Enviada!</span>
                    </>
                  ) : (
                    'Enviar Mensagem'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
} 