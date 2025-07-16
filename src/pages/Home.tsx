import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import Button from '../components/Button'
import SectionContainer from '../components/SectionContainer'
import PageTransition from '../components/PageTransition'
import profileImage from '../assets/me.jpg'

export default function Home() {
  const { t } = useTranslation()

  return (
    <PageTransition>
      <SectionContainer className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-effect p-12 floating-animation"
          >
            <motion.div
              className="flex flex-col items-center mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
            >
              <div className="relative mb-6">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-violet-500 shadow-2xl shadow-violet-500/30">
                  <img 
                    src={profileImage} 
                    alt="Thimoté Fétu" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 opacity-20 blur-xl"></div>
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-6xl md:text-8xl font-black tracking-tight text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {t('home.greeting')} <span className="neon-text text-shadow">Thimoté Fétu</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('home.role')}
            </motion.p>
            
            <motion.div 
              className="flex gap-6 justify-center flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/projects">
                <Button size="lg" className="glow-effect card-hover">{t('home.cta.work')}</Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="glass-effect card-hover">{t('home.cta.contact')}</Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </SectionContainer>

      <SectionContainer className="py-20">
        <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
          <motion.div 
            className="glass-effect p-8 card-hover"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {t('home.about.title')}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                {t('home.about.description')}
              </p>
              <Link to="/about">
                <Button variant="secondary" className="glass-effect card-hover">{t('home.about.button')}</Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="glass-effect p-8 card-hover"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {t('home.projects.title')}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                {t('home.projects.description')}
              </p>
              <Link to="/projects">
                <Button variant="secondary" className="glass-effect card-hover">{t('home.projects.button')}</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </SectionContainer>
    </PageTransition>
  )
}