import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Globe, BookOpen, Mic, Palette, Users, Mail } from 'lucide-react'
import heroImageOrange from './assets/hero-image-orange.png'
import './App.css'

function App() {
  const [language, setLanguage] = useState('zh')

  const translations = {
    zh: {
      title: 'AI儿童绘本',
      subtitle: '让故事更精彩',
      heroTitle: '用AI创造属于孩子的奇妙故事',
      heroSubtitle: '让每个孩子都能拥有专属的绘本故事，激发想象力，培养阅读兴趣',
      storyGallery: '精美故事绘本展示',
      storyGalleryDesc: '浏览我们精心制作的儿童绘本作品',
      createStory: '创作故事绘本',
      createStoryDesc: '开始创作属于你的独特故事',
      coreFeatures: '三大核心功能',
      aiWrite: 'AI帮你写',
      aiWriteDesc: '智能创作引人入胜的故事情节',
      aiDraw: 'AI为你画',
      aiDrawDesc: '生成精美的插画和角色形象',
      aiVoice: 'AI为你配音',
      aiVoiceDesc: '专业的语音朗读，让故事更生动',
      contactUs: '联系我们',
      contactDesc: '有任何问题或建议，欢迎与我们联系',
      getStarted: '开始体验'
    },
    en: {
      title: 'AI Children\'s Storybooks',
      subtitle: 'Making Stories More Wonderful',
      heroTitle: 'Create Magical Stories for Children with AI',
      heroSubtitle: 'Give every child their own personalized storybook to spark imagination and foster reading interest',
      storyGallery: 'Beautiful Story Gallery',
      storyGalleryDesc: 'Browse our carefully crafted children\'s storybook collection',
      createStory: 'Create Your Story',
      createStoryDesc: 'Start creating your unique story',
      coreFeatures: 'Three Core Features',
      aiWrite: 'AI Writes for You',
      aiWriteDesc: 'Intelligently create engaging storylines',
      aiDraw: 'AI Draws for You',
      aiDrawDesc: 'Generate beautiful illustrations and characters',
      aiVoice: 'AI Voices for You',
      aiVoiceDesc: 'Professional voice narration brings stories to life',
      contactUs: 'Contact Us',
      contactDesc: 'Have questions or suggestions? Feel free to reach out',
      getStarted: 'Get Started'
    },
    es: {
      title: 'Cuentos Infantiles con IA',
      subtitle: 'Haciendo las Historias Más Maravillosas',
      heroTitle: 'Crea Historias Mágicas para Niños con IA',
      heroSubtitle: 'Dale a cada niño su propio libro de cuentos personalizado para despertar la imaginación y fomentar el interés por la lectura',
      storyGallery: 'Galería de Hermosas Historias',
      storyGalleryDesc: 'Explora nuestra colección de libros infantiles cuidadosamente elaborados',
      createStory: 'Crea Tu Historia',
      createStoryDesc: 'Comienza a crear tu historia única',
      coreFeatures: 'Tres Características Principales',
      aiWrite: 'IA Escribe por Ti',
      aiWriteDesc: 'Crea inteligentemente tramas cautivadoras',
      aiDraw: 'IA Dibuja por Ti',
      aiDrawDesc: 'Genera hermosas ilustraciones y personajes',
      aiVoice: 'IA Narra por Ti',
      aiVoiceDesc: 'Narración profesional que da vida a las historias',
      contactUs: 'Contáctanos',
      contactDesc: '¿Tienes preguntas o sugerencias? No dudes en contactarnos',
      getStarted: 'Comenzar'
    }
  }

  const t = translations[language]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100">
      {/* Header */}
      <header className="relative bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">{t.title}</h1>
              <p className="text-sm text-gray-600">{t.subtitle}</p>
            </div>
          </div>
          
          {/* Language Selector */}
          <div className="flex items-center space-x-2">
            <Globe className="w-4 h-4 text-gray-600" />
            <select 
              value={language} 
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-white border border-gray-200 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
            >
              <option value="zh">中文</option>
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                  {t.heroTitle}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t.heroSubtitle}
                </p>
              </div>
              
              {/* Main Action Buttons */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Button 
                  onClick={() => window.open('https://7d2a2de2.rosie-forest-adventure-2025.pages.dev', '_blank')}
                  className="h-16 bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-center">
                    <BookOpen className="w-6 h-6 mx-auto mb-1" />
                    <div className="font-semibold">{t.storyGallery}</div>
                    <div className="text-xs opacity-90">{t.storyGalleryDesc}</div>
                  </div>
                </Button>
                
                <Button 
                  onClick={() => window.open('https://suna-1.learnwise.app/dashboard', '_blank')}
                  className="h-16 bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-center">
                    <Palette className="w-6 h-6 mx-auto mb-1" />
                    <div className="font-semibold">{t.createStory}</div>
                    <div className="text-xs opacity-90">{t.createStoryDesc}</div>
                  </div>
                </Button>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src={heroImageOrange} 
                  alt="Cute animals reading storybooks" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-300 rounded-full animate-bounce opacity-80"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-yellow-300 rounded-full animate-pulse opacity-80"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              {t.coreFeatures}
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* AI Writing */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">{t.aiWrite}</h4>
              <p className="text-gray-600 leading-relaxed">{t.aiWriteDesc}</p>
            </div>
            
            {/* AI Drawing */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">{t.aiDraw}</h4>
              <p className="text-gray-600 leading-relaxed">{t.aiDrawDesc}</p>
            </div>
            
            {/* AI Voice */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mic className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">{t.aiVoice}</h4>
              <p className="text-gray-600 leading-relaxed">{t.aiVoiceDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-orange-100 to-yellow-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-8">
              <Mail className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              {t.contactUs}
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              {t.contactDesc}
            </p>
            <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-3 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Users className="w-5 h-5 mr-2" />
              {t.contactUs}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-xl font-bold">{t.title}</h4>
            </div>
            <p className="text-gray-400 mb-6">{t.subtitle}</p>
            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-500 text-sm">
                © 2025 AI儿童绘本. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

