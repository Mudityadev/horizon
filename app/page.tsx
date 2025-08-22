"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState<'hindi' | 'english'>('english');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const content = {
    hindi: {
      hero: {
        title: "Horizon में आपका स्वागत है",
        subtitle: "प्रीमियम संपत्तियां + मुफ्त ₹50,000 सौर इंस्टॉलेशन। सीमित समय - अभी कॉल करें!",
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
        subtitle: "Premium properties + FREE ₹50,000 solar installation. Limited time offer - Call NOW!",
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
        copyright: "© 2025 Horizon. All rights reserved."
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
              <div className="hidden md:flex items-center space-x-3 ml-4 pl-4 border-l border-border">
                <div className="text-center">
                  <span className="text-sm font-semibold text-foreground">+91 7000 60 85 60</span>
                  <div className="flex items-center space-x-3 mt-1">
                    <a 
                      href="tel:+917000608560" 
                      className="flex items-center space-x-1 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>Call</span>
                    </a>
                    <a 
                      href="https://wa.me/917000608560" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-xs font-medium text-green-600 hover:text-green-700 transition-colors"
                    >
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
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
              
              {/* Social Media Links */}
              <div className="flex items-center space-x-3">
                <a 
                  href="https://www.facebook.com/people/Horizon-Infra-Energy/61579911230943/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                  title="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.youtube.com/channel/UCnFu02db7Iude_ASQsxBWKg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                  title="YouTube"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
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
                {/* Mobile Phone Number */}
                <div className="border-b border-border pb-4">
                  <p className="text-lg font-semibold text-foreground mb-3 text-center">+91 7000 60 85 60</p>
                  <div className="flex justify-center space-x-6">
                    <a 
                      href="tel:+917000608560" 
                      className="flex flex-col items-center space-y-1 text-primary hover:text-primary/80 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-sm font-medium">Call</span>
                    </a>
                    <a 
                      href="https://wa.me/917000608560" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center space-y-1 text-green-600 hover:text-green-700 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      <span className="text-sm font-medium">WhatsApp</span>
                    </a>
                  </div>
                </div>
                
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
                
                {/* Mobile Social Media Links */}
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-3">{currentContent.footer.connect}</p>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.facebook.com/people/Horizon-Infra-Energy/61579911230943/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                      title="Facebook"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://www.youtube.com/channel/UCnFu02db7Iude_ASQsxBWKg" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                      title="YouTube"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] animate-pulse"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-bounce"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-ping"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-40 left-10 w-4 h-4 bg-primary rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-60 right-20 w-3 h-3 bg-accent rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-8 animate-fade-in-up">
            <div className="relative group">
              <Image
                src="/logo.png"
                alt="Horizon Logo"
                width={120}
                height={120}
                className="mx-auto rounded-2xl shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                priority
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            {currentContent.hero.title.includes("Horizon") ? (
              <>
                {currentContent.hero.title.split("Horizon")[0]}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_200%] animate-gradient-x">
                  Horizon
                </span>
                {currentContent.hero.title.split("Horizon")[1]}
              </>
            ) : (
              <>
                {currentContent.hero.title.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_200%] animate-gradient-x">
                  {currentContent.hero.title.split(" ").slice(-1)[0]}
                </span>
              </>
            )}
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            {currentContent.hero.subtitle}
          </p>
          
          <div className="flex justify-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <a 
              href="tel:+917000608560" 
              className="group relative bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-2xl flex items-center justify-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <svg className="w-6 h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="relative z-10">Call Now +91 7000608560</span>
            </a>
          </div>
          
          <div className="text-center mt-4 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-accent">FREE:</span> 3 Site Visits worth ₹2000
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
              {currentContent.features.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              {currentContent.features.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group bg-background p-8 rounded-2xl border border-border hover:border-primary transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 transform relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{currentContent.features.feature1.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {currentContent.features.feature1.description}
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group bg-background p-8 rounded-2xl border border-border hover:border-primary transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 transform relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">{currentContent.features.feature2.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {currentContent.features.feature2.description}
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group bg-background p-8 rounded-2xl border border-border hover:border-primary transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 transform relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{currentContent.features.feature3.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {currentContent.features.feature3.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,191,36,0.1),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 animate-fade-in-up">
                <span className="inline-block transform group-hover:scale-110 transition-transform duration-300">500+</span>
              </div>
              <p className="text-muted-foreground font-medium">
                {language === 'hindi' ? 'संपत्तियां बेची गईं' : 'Properties Sold'}
              </p>
            </div>
            
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                <span className="inline-block transform group-hover:scale-110 transition-transform duration-300">1000+</span>
              </div>
              <p className="text-muted-foreground font-medium">
                {language === 'hindi' ? 'संतुष्ट ग्राहक' : 'Happy Clients'}
              </p>
            </div>
            
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <span className="inline-block transform group-hover:scale-110 transition-transform duration-300">50+</span>
              </div>
              <p className="text-muted-foreground font-medium">
                {language === 'hindi' ? 'सौर परियोजनाएं' : 'Solar Projects'}
              </p>
            </div>
            
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <span className="inline-block transform group-hover:scale-110 transition-transform duration-300">10+</span>
              </div>
              <p className="text-muted-foreground font-medium">
                {language === 'hindi' ? 'वर्षों का अनुभव' : 'Years Experience'}
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
              Free Consultation +91 7000 60 85 60
            </a>
            <button className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold py-3 px-8 rounded-lg transition-all duration-200">
              {currentContent.cta.contact}
            </button>
          </div>
          
          <div className="text-center mt-4">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-accent">FREE:</span> 3 Site Visits worth ₹2000
            </p>
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
                <li>
                  <a 
                    href="https://www.facebook.com/people/Horizon-Infra-Energy/61579911230943/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.youtube.com/channel/UCnFu02db7Iude_ASQsxBWKg" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    YouTube
                  </a>
                </li>
                <li>
                  <a href="mailto:hemantraghav91@gmail.com" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email
                  </a>
                </li>
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
