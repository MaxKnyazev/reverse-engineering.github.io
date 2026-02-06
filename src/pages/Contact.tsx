import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Телефон',
      details: ['+7 (908) 136-77-33'],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['info@reverse-engineering.pro'],
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Адрес',
      details: ['г. Воронеж, ул. Свободы, д. 31, помещ. 6/1', '394018, Воронежская область, Россия'],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Режим работы',
      details: ['Пн-Пт: 9:00 - 19:00', 'Сб-Вс: 10:00 - 16:00'],
    },
  ];

  const offices = [
    {
      city: 'Воронеж',
      address: 'ул. Свободы, д. 31, помещ. 6/1',
      phone: '+7 (908) 136-77-33',
      isMain: true,
    },
  ];

  return (
    <div className="pt-32 pb-20 bg-[#F8F9FA]">
      {/* Hero */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[#212121] mb-4">Контакты</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Свяжитесь с нами удобным способом. Мы всегда рады ответить на ваши вопросы
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 bg-[#D32F2F] bg-opacity-10 rounded-lg flex items-center justify-center text-[#D32F2F] mb-4">
                  {info.icon}
                </div>
                <h3 className="text-[#212121] mb-3">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-600 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h2 className="text-[#212121] mb-6">Напишите нам</h2>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-[#212121] mb-2">
                        Имя <span className="text-[#D32F2F]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent"
                        placeholder="Ваше имя"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-[#212121] mb-2">
                        Телефон <span className="text-[#D32F2F]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-[#212121] mb-2">
                      Email <span className="text-[#D32F2F]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-[#212121] mb-2">Тема обращения</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent"
                    >
                      <option value="">Выберите тему</option>
                      <option value="services">Вопрос об услугах</option>
                      <option value="equipment">Покупка оборудования</option>
                      <option value="partnership">Сотрудничество</option>
                      <option value="other">Другое</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-[#212121] mb-2">
                      Сообщение <span className="text-[#D32F2F]">*</span>
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent resize-none"
                      placeholder="Опишите ваш вопрос или запрос..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-[#D32F2F] text-white rounded-lg hover:bg-[#B71C1C] transition-all hover:shadow-lg"
                  >
                    Отправить сообщение
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[#212121] mb-2">Спасибо!</h3>
                  <p className="text-gray-600">Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.</p>
                </div>
              )}
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200">
              <div className="aspect-square bg-gray-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Карта офиса</p>
                  <p className="text-sm text-gray-400 mt-2">
                    г. Воронеж, ул. Свободы, д. 31, помещ. 6/1<br />
                    394018, Воронежская область, Россия
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-[#212121] mb-12">Наши офисы</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div
                key={index}
                className={`rounded-xl p-8 border-2 ${
                  office.isMain
                    ? 'border-[#D32F2F] bg-red-50'
                    : 'border-gray-200 bg-white'
                }`}
              >
                {office.isMain && (
                  <div className="inline-block px-3 py-1 bg-[#D32F2F] text-white text-xs rounded-full mb-4">
                    Головной офис
                  </div>
                )}
                <h3 className="text-[#212121] mb-4">{office.city}</h3>
                <div className="space-y-3 text-gray-600 text-sm">
                  <div className="flex items-start gap-2">
                    <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="flex-shrink-0" />
                    <span>{office.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}