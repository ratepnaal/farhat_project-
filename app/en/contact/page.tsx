'use client'

import { Navbar } from '@/components/Navbar'
import { getTranslations, getDirection, type Locale } from '@/lib/translations'
import { useState } from 'react'

export default function ContactArPage() {
  const locale: Locale = 'en'
  const t = getTranslations(locale)
  const dir = getDirection(locale)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [fullName, setFullName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `Name : ${fullName}%0A Subject : ${subject}%0A Message :  ${message}`
    window.open(`https://wa.me/963945712929?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <div dir={dir}>
      <Navbar locale={locale} />
      <main className="container-custom py-20">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact About Us </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gradient text-center">Send Us a Message </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Enter Full Name ..."
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Enter Subject of Message ..."
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"
                  placeholder="Enter Your Message Here ......"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center"
              >
               Send Message 
              </button>
            </form>
          </div>
          {/* Map Section */}
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold mb-8 text-gradient text-center">Our Location </h2>
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden w-full max-w-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.699041718742!2d36.29976849999999!3d33.4831855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e0e418e45565%3A0x4c76126448d1d910!2z2KzYp9mF2Lkg2KfZhNmF2KfYrNiv!5e0!3m2!1sar!2snl!4v1751833340716!5m2!1sar!2snl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 