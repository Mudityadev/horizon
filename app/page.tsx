"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState<'hindi' | 'english'>('hindi');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const content = {
    hindi: {
      hero: {
        title: "Horizon में आपका स्वागत है",
        subtitle: "रियल एस्टेट और नवीकरणीय ऊर्जा में आपका विश्वसनीय साथी। अपनी सपनों की संपत्ति खोजें और इसे टिकाऊ सौर समाधानों से सशक्त बनाएं।",
        bookNow: "अभी बुक करें",
        learnMore: "और जानें"
      },
      features: {
        title: "Horizon को क्यों चुनें?",
        subtitle: "हम व्यापक रियल एस्टेट समाधान और सौर ऊर्जा परियोजनाएं प्रदान करते हैं जिनमें अतुलनीय विशेषज्ञता और ग्राहक सेवा शामिल है।",
        feature1: {
          title: "प्रीमियम संपत्तियां",
          description: "प्रमुख स्थानों में भूखंडों, घरों और व्यावसायिक संपत्तियों का विशेष चयन जिनमें उत्कृष्ट निवेश क्षमता है।"
        },
        feature2: {
          title: "सौर समाधान",
          description: "आपकी संपत्ति को टिकाऊ तरीके से सशक्त बनाने के लिए पूर्ण सौर पैनल स्थापना और नवीकरणीय ऊर्जा परियोजनाएं।"
        },
        feature3: {
          title: "परियोजना प्रबंधन",
          description: "संपत्ति विकास से लेकर सौर स्थापना तक विशेषज्ञ मार्गदर्शन के साथ एंड-टू-एंड परियोजना निष्पादन।"
        }
      },
      about: {
        title: "Horizon के बारे में",
        description: "Horizon रियल एस्टेट और नवीकरणीय ऊर्जा समाधानों में विशेषज्ञता वाली एक प्रमुख डीलरशिप कंपनी है। हम ग्राहकों को उनकी सही संपत्ति खोजने में मदद करते हैं और इसे टिकाऊ सौर तकनीक से सशक्त बनाते हैं।",
        description2: "आवासीय भूखंडों और व्यावसायिक संपत्तियों से लेकर पूर्ण सौर स्थापना तक, हमारी अनुभवी टीम आपकी निवेश यात्रा के हर पहलू को पेशेवरता और देखभाल के साथ संभालती है।",
        button: "हमारी संपत्तियां देखें"
      },
      mission: {
        title: "हमारा मिशन",
        description: "रियल एस्टेट और सौर समाधानों के लिए सबसे विश्वसनीय डीलरशिप बनना, संपत्ति स्वामित्व और टिकाऊ ऊर्जा को सभी के लिए सुलभ बनाना।"
      },
      cta: {
        title: "अपनी सपनों की संपत्ति खोजने के लिए तैयार हैं?",
        description: "चाहे आप भूखंड, घर, व्यावसायिक संपत्ति, या सौर समाधान की तलाश कर रहे हों, हम आपको सही निवेश निर्णय लेने में मदद करने के लिए यहां हैं।",
        bookNow: "अभी बुक करें",
        contact: "संपर्क करें"
      },
      footer: {
        description: "रियल एस्टेट निवेश और सौर ऊर्जा समाधानों के लिए आपका विश्वसनीय साथी। हम संपत्ति स्वामित्व और टिकाऊ जीवन को सभी के लिए सुलभ बनाते हैं।",
        quickLinks: "त्वरित लिंक",
        connect: "जुड़ें",
        copyright: "© 2024 Horizon. सर्वाधिकार सुरक्षित।"
      },
      nav: {
        features: "विशेषताएं",
        about: "हमारे बारे में",
        contact: "संपर्क"
      }
    },
    english: {
      hero: {
        title: "Welcome to Horizon",
        subtitle: "Your trusted partner in real estate and renewable energy. Find your dream property and power it with sustainable solar solutions.",
        bookNow: "Book Now",
        learnMore: "Learn More"
      },
      features: {
        title: "Why Choose Horizon?",
        subtitle: "We offer comprehensive real estate solutions and solar energy projects with unmatched expertise and customer service.",
        feature1: {
          title: "Premium Properties",
          description: "Exclusive selection of plots, houses, and commercial properties in prime locations with excellent investment potential."
        },
        feature2: {
          title: "Solar Solutions",
          description: "Complete solar panel installations and renewable energy projects to power your property sustainably."
        },
        feature3: {
          title: "Project Management",
          description: "End-to-end project execution from property development to solar installation with expert guidance."
        }
      },
      about: {
        title: "About Horizon",
        description: "Horizon is a premier dealership company specializing in real estate and renewable energy solutions. We help customers find their perfect property and power it with sustainable solar technology.",
        description2: "From residential plots and commercial properties to complete solar installations, our experienced team handles every aspect of your investment journey with professionalism and care.",
        button: "View Our Properties"
      },
      mission: {
        title: "Our Mission",
        description: "To be the most trusted dealership for real estate and solar solutions, making property ownership and sustainable energy accessible to everyone."
      },
      cta: {
        title: "Ready to Find Your Dream Property?",
        description: "Whether you're looking for a plot, house, commercial property, or solar solutions, we're here to help you make the right investment decision.",
        bookNow: "Book Now",
        contact: "Contact Us"
      },
      footer: {
        description: "Your trusted partner for real estate investments and solar energy solutions. We make property ownership and sustainable living accessible to everyone.",
        quickLinks: "Quick Links",
        connect: "Connect",
        copyright: "© 2024 Horizon. All rights reserved."
      },
      nav: {
        features: "Features",
        about: "About",
        contact: "Contact"
      }
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="Horizon Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground">Horizon</span>
                <span className="text-xs text-muted-foreground">By Hemant Raghav</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-foreground hover:text-primary transition-colors">{currentContent.nav.features}</a>
              <a href="#gallery" className="text-foreground hover:text-primary transition-colors">
                {language === 'hindi' ? 'गैलरी' : 'Gallery'}
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">{currentContent.nav.about}</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">{currentContent.nav.contact}</a>
              <button 
                onClick={() => setLanguage(language === 'hindi' ? 'english' : 'hindi')}
                className="bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1 rounded-md text-sm font-medium transition-colors"
              >
                {language === 'hindi' ? 'English' : 'हिंदी'}
              </button>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-foreground"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-background border-t border-border">
              <div className="px-4 py-6 space-y-4">
                <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block text-foreground hover:text-primary transition-colors py-2">
                  {currentContent.nav.features}
                </a>
                <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="block text-foreground hover:text-primary transition-colors py-2">
                  {language === 'hindi' ? 'गैलरी' : 'Gallery'}
                </a>
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-foreground hover:text-primary transition-colors py-2">
                  {currentContent.nav.about}
                </a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-foreground hover:text-primary transition-colors py-2">
                  {currentContent.nav.contact}
                </a>
                <button 
                  onClick={() => setLanguage(language === 'hindi' ? 'english' : 'hindi')}
                  className="bg-primary/10 hover:bg-primary/20 text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors w-full text-left"
                >
                  {language === 'hindi' ? 'English' : 'हिंदी'}
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/logo.png"
              alt="Horizon Logo"
              width={120}
              height={120}
              className="mx-auto rounded-2xl shadow-2xl"
              priority
            />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {currentContent.hero.title.includes("Horizon") ? (
              <>
                {currentContent.hero.title.split("Horizon")[0]}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Horizon
                </span>
                {currentContent.hero.title.split("Horizon")[1]}
              </>
            ) : (
              <>
                {currentContent.hero.title.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {currentContent.hero.title.split(" ").slice(-1)[0]}
                </span>
              </>
            )}
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {currentContent.hero.subtitle}
          </p>
          <div className="flex justify-center">
            <a 
              href="tel:+917000608560" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {currentContent.hero.bookNow} +91 7000 60 85 60
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {currentContent.features.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {currentContent.features.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-background p-6 rounded-xl border border-border hover:border-primary transition-all duration-200 hover:shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{currentContent.features.feature1.title}</h3>
              <p className="text-muted-foreground">
                {currentContent.features.feature1.description}
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-background p-6 rounded-xl border border-border hover:border-primary transition-all duration-200 hover:shadow-lg">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{currentContent.features.feature2.title}</h3>
              <p className="text-muted-foreground">
                {currentContent.features.feature2.description}
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-background p-6 rounded-xl border border-border hover:border-primary transition-all duration-200 hover:shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{currentContent.features.feature3.title}</h3>
              <p className="text-muted-foreground">
                {currentContent.features.feature3.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {language === 'hindi' ? 'हमारी संपत्तियां और सौर परियोजनाएं' : 'Our Properties & Solar Projects'}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === 'hindi' 
                ? 'हमारी प्रीमियम संपत्तियों और सौर ऊर्जा परियोजनाओं की एक झलक देखें'
                : 'Take a look at our premium properties and solar energy projects'
              }
            </p>
          </div>
          
          {/* Estate Properties */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              {language === 'hindi' ? 'रियल एस्टेट संपत्तियां' : 'Real Estate Properties'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div key={num} className="group relative overflow-hidden rounded-xl border border-border hover:border-primary transition-all duration-200 hover:shadow-lg">
                  <Image
                    src={num === 6 ? `/estate/${num}.webp` : `/estate/${num}.jpg`}
                    alt={`Estate Property ${num}`}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="font-semibold text-lg">
                        {language === 'hindi' ? `संपत्ति ${num}` : `Property ${num}`}
                      </h4>
                      <p className="text-sm text-gray-200">
                        {language === 'hindi' ? 'उत्कृष्ट निवेश अवसर' : 'Excellent Investment Opportunity'}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solar Projects */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              {language === 'hindi' ? 'सौर ऊर्जा परियोजनाएं' : 'Solar Energy Projects'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="group relative overflow-hidden rounded-xl border border-border hover:border-primary transition-all duration-200 hover:shadow-lg">
                  <Image
                    src={num === 5 ? `/solar/${num}.avif` : `/solar/${num}.jpg`}
                    alt={`Solar Project ${num}`}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="font-semibold text-lg">
                        {language === 'hindi' ? `सौर परियोजना ${num}` : `Solar Project ${num}`}
                      </h4>
                      <p className="text-sm text-gray-200">
                        {language === 'hindi' ? 'टिकाऊ ऊर्जा समाधान' : 'Sustainable Energy Solutions'}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                {currentContent.about.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {currentContent.about.description}
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                {currentContent.about.description2}
              </p>
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-lg transition-all duration-200">
                {currentContent.about.button}
              </button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">{currentContent.mission.title}</h3>
                  <p className="text-muted-foreground">
                    {currentContent.mission.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            {currentContent.cta.title}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {currentContent.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+917000608560" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {currentContent.cta.bookNow} +91 7000 60 85 60
            </a>
            <button className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold py-3 px-8 rounded-lg transition-all duration-200">
              {currentContent.cta.contact}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/logo.png"
                  alt="Horizon Logo"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-foreground">Horizon</span>
                  <span className="text-xs text-muted-foreground">By Hemant Raghav</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                {currentContent.footer.description}
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">{currentContent.footer.quickLinks}</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors">{currentContent.nav.features}</a></li>
                <li><a href="#gallery" className="text-muted-foreground hover:text-primary transition-colors">
                  {language === 'hindi' ? 'गैलरी' : 'Gallery'}
                </a></li>
                <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">{currentContent.nav.about}</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">{currentContent.nav.contact}</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">{currentContent.footer.connect}</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Twitter</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Email</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground">
              {currentContent.footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
