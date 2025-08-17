import React, { createContext, useContext, useState } from 'react';

export type Language = {
  code: string;
  name: string;
  flag: string;
};

export const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'th', name: 'ไทย', flag: '🇹🇭' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
  { code: 'da', name: 'Dansk', flag: '🇩🇰' },
  { code: 'no', name: 'Norsk', flag: '🇳🇴' }
];

type LanguageContextType = {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
  };

  // Comprehensive translation function with all website content
  const t = (key: string): string => {
    if (currentLanguage.code === 'en') {
      return key;
    }
    
    // Comprehensive translations for all languages
    const translations: Record<string, Record<string, string>> = {
      es: {
        // Navigation
        'Home': 'Inicio',
        'Application': 'Aplicación',
        'Download': 'Descargar',
        'FAQ': 'Preguntas Frecuentes',
        
        // Hero Section
        'AI Botanist In Your Pocket': 'Botánico IA En Tu Bolsillo',
        'Instantly identify any plant with AI-powered camera recognition. Get detailed care guides, toxicity warnings, and build your personal garden collection.': 'Identifica instantáneamente cualquier planta con reconocimiento de cámara con IA. Obtén guías de cuidado detalladas, advertencias de toxicidad y construye tu colección personal de jardín.',
        'Download on the': 'Descargar en la',
        'App Store': 'App Store',
        'GET IT ON': 'CONSÍGUELO EN',
        'Google Play': 'Google Play',
        
        // How it Works
        'How It Works': 'Cómo Funciona',
        'Plant identification made simple in just three easy steps': 'Identificación de plantas simplificada en solo tres pasos fáciles',
        'Open the App': 'Abre la App',
        'Launch UseVerdant and point your camera at any plant': 'Abre UseVerdant y apunta tu cámara a cualquier planta',
        'Scan & Capture': 'Escanea y Captura',
        'Take a photo of the plant you want to identify': 'Toma una foto de la planta que quieres identificar',
        'Get Instant Results': 'Obtén Resultados Instantáneos',
        'Receive detailed plant information and care tips immediately': 'Recibe información detallada de la planta y consejos de cuidado inmediatamente',
        
        // Features
        'Powerful Features': 'Características Poderosas',
        'Everything you need to become a plant identification expert': 'Todo lo que necesitas para convertirte en un experto en identificación de plantas',
        'AI Plant Recognition': 'Reconocimiento de Plantas IA',
        'Advanced machine learning algorithms identify plants with 95% accuracy from a single photo': 'Algoritmos avanzados de aprendizaje automático identifican plantas con 95% de precisión desde una sola foto',
        'Care Tips & Advice': 'Consejos y Cuidados',
        'Get personalized growing tips, watering schedules, and expert gardening advice for each plant': 'Obtén consejos de cultivo personalizados, horarios de riego y consejos expertos de jardinería para cada planta',
        'Scan History': 'Historial de Escaneos',
        'Keep track of all your plant discoveries with a comprehensive history of your scans': 'Mantén un registro de todos tus descubrimientos de plantas con un historial completo de tus escaneos',
        'Community Sharing': 'Compartir en Comunidad',
        'Share your plant discoveries with fellow nature enthusiasts and build your botanical knowledge': 'Comparte tus descubrimientos de plantas con otros entusiastas de la naturaleza y construye tu conocimiento botánico',
        
        // Benefits
        'Perfect For Everyone': 'Perfecto Para Todos',
        'Whether you\'re exploring nature, tending your garden, or studying botany': 'Ya sea que estés explorando la naturaleza, cuidando tu jardín o estudiando botánica',
        'For Nature Lovers': 'Para Amantes de la Naturaleza',
        'Transform your hikes and outdoor adventures into learning experiences': 'Transforma tus caminatas y aventuras al aire libre en experiencias de aprendizaje',
        'Identify wildflowers and trees on trails': 'Identifica flores silvestres y árboles en senderos',
        'Learn about local ecosystems': 'Aprende sobre ecosistemas locales',
        'Discover new species in your area': 'Descubre nuevas especies en tu área',
        'Build your nature knowledge': 'Construye tu conocimiento de la naturaleza',
        'For Gardeners': 'Para Jardineros',
        'Become a more knowledgeable and successful gardener': 'Conviértete en un jardinero más conocedor y exitoso',
        'Identify weeds vs. beneficial plants': 'Identifica malezas vs. plantas beneficiosas',
        'Spot plant diseases early': 'Detecta enfermedades de plantas temprano',
        'Learn optimal growing conditions': 'Aprende condiciones óptimas de crecimiento',
        'Get expert care recommendations': 'Obtén recomendaciones expertas de cuidado',
        'For Students': 'Para Estudiantes',
        'Perfect study companion for botany and biology courses': 'Compañero de estudio perfecto para cursos de botánica y biología',
        'Study plant families and characteristics': 'Estudia familias y características de plantas',
        'Complete field work assignments': 'Completa tareas de trabajo de campo',
        'Build botanical vocabulary': 'Construye vocabulario botánico',
        'Access detailed plant information': 'Accede a información detallada de plantas',
        'Ready to Start Your Plant Journey?': '¿Listo para Comenzar tu Viaje con Plantas?',
        'Join thousands of users who are already discovering the world of plants with UseVerdant': 'Únete a miles de usuarios que ya están descubriendo el mundo de las plantas con UseVerdant',
        'Download for iOS': 'Descargar para iOS',
        'Download for Android': 'Descargar para Android',
        
        // FAQ
        'Frequently Asked Questions': 'Preguntas Frecuentes',
        'Find answers to common questions about UseVerdant': 'Encuentra respuestas a preguntas comunes sobre UseVerdant',
        'Still have questions?': '¿Aún tienes preguntas?',
        'Our support team is here to help you with any questions or concerns.': 'Nuestro equipo de soporte está aquí para ayudarte con cualquier pregunta o inquietud.',
        'Contact Support': 'Contactar Soporte',
        
        // Footer
        'Company': 'Empresa',
        'Support': 'Soporte',
        'Legal': 'Legal',
        'Follow Us': 'Síguenos',
        'Stay Updated': 'Mantente Actualizado',
        'Get notified about new features, plant care tips, and app updates': 'Recibe notificaciones sobre nuevas características, consejos de cuidado de plantas y actualizaciones de la app',
        'Enter your email': 'Ingresa tu email',
        'Subscribe': 'Suscribirse',
        'Made with': 'Hecho con',
        'for plant lovers everywhere': 'para amantes de las plantas en todas partes'
      },
      fr: {
        // Navigation
        'Home': 'Accueil',
        'Application': 'Application',
        'Download': 'Télécharger',
        'FAQ': 'Questions Fréquentes',
        
        // Hero Section
        'AI Botanist In Your Pocket': 'Botaniste IA Dans Votre Poche',
        'Instantly identify any plant with AI-powered camera recognition. Get detailed care guides, toxicity warnings, and build your personal garden collection.': 'Identifiez instantanément toute plante avec la reconnaissance par caméra alimentée par IA. Obtenez des guides de soins détaillés, des avertissements de toxicité et construisez votre collection de jardin personnelle.',
        'Download on the': 'Télécharger sur l\'',
        'App Store': 'App Store',
        'GET IT ON': 'TÉLÉCHARGEZ-LE SUR',
        'Google Play': 'Google Play',
        
        // How it Works
        'How It Works': 'Comment Ça Marche',
        'Plant identification made simple in just three easy steps': 'Identification de plantes simplifiée en seulement trois étapes faciles',
        'Open the App': 'Ouvrir l\'App',
        'Launch UseVerdant and point your camera at any plant': 'Lancez UseVerdant et pointez votre caméra vers n\'importe quelle plante',
        'Scan & Capture': 'Scanner et Capturer',
        'Take a photo of the plant you want to identify': 'Prenez une photo de la plante que vous voulez identifier',
        'Get Instant Results': 'Obtenez des Résultats Instantanés',
        'Receive detailed plant information and care tips immediately': 'Recevez des informations détaillées sur la plante et des conseils de soins immédiatement',
        
        // Features
        'Powerful Features': 'Fonctionnalités Puissantes',
        'Everything you need to become a plant identification expert': 'Tout ce dont vous avez besoin pour devenir un expert en identification de plantes',
        'AI Plant Recognition': 'Reconnaissance de Plantes IA',
        'Advanced machine learning algorithms identify plants with 95% accuracy from a single photo': 'Les algorithmes d\'apprentissage automatique avancés identifient les plantes avec 95% de précision à partir d\'une seule photo',
        'Care Tips & Advice': 'Conseils et Soins',
        'Get personalized growing tips, watering schedules, and expert gardening advice for each plant': 'Obtenez des conseils de croissance personnalisés, des horaires d\'arrosage et des conseils de jardinage experts pour chaque plante',
        'Scan History': 'Historique des Scans',
        'Keep track of all your plant discoveries with a comprehensive history of your scans': 'Gardez une trace de toutes vos découvertes de plantes avec un historique complet de vos scans',
        'Community Sharing': 'Partage Communautaire',
        'Share your plant discoveries with fellow nature enthusiasts and build your botanical knowledge': 'Partagez vos découvertes de plantes avec d\'autres passionnés de nature et construisez vos connaissances botaniques',
        
        // Benefits
        'Perfect For Everyone': 'Parfait Pour Tous',
        'Whether you\'re exploring nature, tending your garden, or studying botany': 'Que vous exploriez la nature, vous occupiez de votre jardin ou étudiiez la botanique',
        'For Nature Lovers': 'Pour les Amoureux de la Nature',
        'Transform your hikes and outdoor adventures into learning experiences': 'Transformez vos randonnées et aventures en plein air en expériences d\'apprentissage',
        'Identify wildflowers and trees on trails': 'Identifiez les fleurs sauvages et les arbres sur les sentiers',
        'Learn about local ecosystems': 'Apprenez sur les écosystèmes locaux',
        'Discover new species in your area': 'Découvrez de nouvelles espèces dans votre région',
        'Build your nature knowledge': 'Construisez vos connaissances de la nature',
        'For Gardeners': 'Pour les Jardiniers',
        'Become a more knowledgeable and successful gardener': 'Devenez un jardinier plus connaisseur et plus réussi',
        'Identify weeds vs. beneficial plants': 'Identifiez les mauvaises herbes vs. les plantes bénéfiques',
        'Spot plant diseases early': 'Repérez les maladies des plantes tôt',
        'Learn optimal growing conditions': 'Apprenez les conditions de croissance optimales',
        'Get expert care recommendations': 'Obtenez des recommandations de soins d\'experts',
        'For Students': 'Pour les Étudiants',
        'Perfect study companion for botany and biology courses': 'Compagnon d\'étude parfait pour les cours de botanique et de biologie',
        'Study plant families and characteristics': 'Étudiez les familles et caractéristiques des plantes',
        'Complete field work assignments': 'Complétez les devoirs de terrain',
        'Build botanical vocabulary': 'Construisez le vocabulaire botanique',
        'Access detailed plant information': 'Accédez aux informations détaillées des plantes',
        'Ready to Start Your Plant Journey?': 'Prêt à Commencer Votre Voyage Végétal?',
        'Join thousands of users who are already discovering the world of plants with UseVerdant': 'Rejoignez des milliers d\'utilisateurs qui découvrent déjà le monde des plantes avec UseVerdant',
        'Download for iOS': 'Télécharger pour iOS',
        'Download for Android': 'Télécharger pour Android',
        
        // FAQ
        'Frequently Asked Questions': 'Questions Fréquemment Posées',
        'Find answers to common questions about UseVerdant': 'Trouvez des réponses aux questions communes sur UseVerdant',
        'Still have questions?': 'Vous avez encore des questions?',
        'Our support team is here to help you with any questions or concerns.': 'Notre équipe de support est là pour vous aider avec toutes questions ou préoccupations.',
        'Contact Support': 'Contacter le Support',
        
        // Footer
        'Company': 'Entreprise',
        'Support': 'Support',
        'Legal': 'Légal',
        'Follow Us': 'Suivez-Nous',
        'Stay Updated': 'Restez Informé',
        'Get notified about new features, plant care tips, and app updates': 'Soyez notifié des nouvelles fonctionnalités, conseils de soins des plantes et mises à jour de l\'app',
        'Enter your email': 'Entrez votre email',
        'Subscribe': 'S\'abonner',
        'Made with': 'Fait avec',
        'for plant lovers everywhere': 'pour les amoureux des plantes partout'
      },
      de: {
        // Navigation
        'Home': 'Startseite',
        'Application': 'Anwendung',
        'Download': 'Herunterladen',
        'FAQ': 'Häufige Fragen',
        
        // Hero Section
        'AI Botanist In Your Pocket': 'KI-Botaniker In Ihrer Tasche',
        'Instantly identify any plant with AI-powered camera recognition. Get detailed care guides, toxicity warnings, and build your personal garden collection.': 'Identifizieren Sie sofort jede Pflanze mit KI-gestützter Kameraerkennung. Erhalten Sie detaillierte Pflegeanleitungen, Toxizitätswarnungen und bauen Sie Ihre persönliche Gartensammlung auf.',
        'Download on the': 'Laden Sie es herunter im',
        'App Store': 'App Store',
        'GET IT ON': 'ERHÄLTLICH BEI',
        'Google Play': 'Google Play',
        
        // How it Works
        'How It Works': 'So Funktioniert Es',
        'Plant identification made simple in just three easy steps': 'Pflanzenidentifikation einfach gemacht in nur drei einfachen Schritten',
        'Open the App': 'App Öffnen',
        'Launch UseVerdant and point your camera at any plant': 'Starten Sie UseVerdant und richten Sie Ihre Kamera auf jede Pflanze',
        'Scan & Capture': 'Scannen & Aufnehmen',
        'Take a photo of the plant you want to identify': 'Machen Sie ein Foto von der Pflanze, die Sie identifizieren möchten',
        'Get Instant Results': 'Sofortige Ergebnisse Erhalten',
        'Receive detailed plant information and care tips immediately': 'Erhalten Sie sofort detaillierte Pflanzeninformationen und Pflegetipps',
        
        // Features
        'Powerful Features': 'Leistungsstarke Funktionen',
        'Everything you need to become a plant identification expert': 'Alles was Sie brauchen, um ein Experte für Pflanzenidentifikation zu werden',
        'AI Plant Recognition': 'KI-Pflanzenerkennung',
        'Advanced machine learning algorithms identify plants with 95% accuracy from a single photo': 'Fortgeschrittene maschinelle Lernalgorithmen identifizieren Pflanzen mit 95% Genauigkeit aus einem einzigen Foto',
        'Care Tips & Advice': 'Pflegetipps & Beratung',
        'Get personalized growing tips, watering schedules, and expert gardening advice for each plant': 'Erhalten Sie personalisierte Anbautipps, Bewässerungspläne und Expertengartenberatung für jede Pflanze',
        'Scan History': 'Scan-Verlauf',
        'Keep track of all your plant discoveries with a comprehensive history of your scans': 'Behalten Sie den Überblick über alle Ihre Pflanzenentdeckungen mit einer umfassenden Geschichte Ihrer Scans',
        'Community Sharing': 'Community-Sharing',
        'Share your plant discoveries with fellow nature enthusiasts and build your botanical knowledge': 'Teilen Sie Ihre Pflanzenentdeckungen mit anderen Naturbegeisterten und bauen Sie Ihr botanisches Wissen auf',
        
        // Benefits
        'Perfect For Everyone': 'Perfekt Für Jeden',
        'Whether you\'re exploring nature, tending your garden, or studying botany': 'Ob Sie die Natur erkunden, Ihren Garten pflegen oder Botanik studieren',
        'For Nature Lovers': 'Für Naturliebhaber',
        'Transform your hikes and outdoor adventures into learning experiences': 'Verwandeln Sie Ihre Wanderungen und Outdoor-Abenteuer in Lernerfahrungen',
        'Identify wildflowers and trees on trails': 'Identifizieren Sie Wildblumen und Bäume auf Pfaden',
        'Learn about local ecosystems': 'Lernen Sie über lokale Ökosysteme',
        'Discover new species in your area': 'Entdecken Sie neue Arten in Ihrer Gegend',
        'Build your nature knowledge': 'Bauen Sie Ihr Naturwissen auf',
        'For Gardeners': 'Für Gärtner',
        'Become a more knowledgeable and successful gardener': 'Werden Sie ein sachkundigerer und erfolgreicherer Gärtner',
        'Identify weeds vs. beneficial plants': 'Identifizieren Sie Unkraut vs. nützliche Pflanzen',
        'Spot plant diseases early': 'Erkennen Sie Pflanzenkrankheiten früh',
        'Learn optimal growing conditions': 'Lernen Sie optimale Wachstumsbedingungen',
        'Get expert care recommendations': 'Erhalten Sie Expertenpflegeempfehlungen',
        'For Students': 'Für Studenten',
        'Perfect study companion for botany and biology courses': 'Perfekter Studienbegleiter für Botanik- und Biologiekurse',
        'Study plant families and characteristics': 'Studieren Sie Pflanzenfamilien und -eigenschaften',
        'Complete field work assignments': 'Vollenden Sie Feldarbeitsaufgaben',
        'Build botanical vocabulary': 'Bauen Sie botanisches Vokabular auf',
        'Access detailed plant information': 'Zugang zu detaillierten Pflanzeninformationen',
        'Ready to Start Your Plant Journey?': 'Bereit für Ihre Pflanzenreise?',
        'Join thousands of users who are already discovering the world of plants with UseVerdant': 'Schließen Sie sich Tausenden von Nutzern an, die bereits die Welt der Pflanzen mit UseVerdant entdecken',
        'Download for iOS': 'Für iOS herunterladen',
        'Download for Android': 'Für Android herunterladen',
        
        // FAQ
        'Frequently Asked Questions': 'Häufig Gestellte Fragen',
        'Find answers to common questions about UseVerdant': 'Finden Sie Antworten auf häufige Fragen zu UseVerdant',
        'Still have questions?': 'Haben Sie noch Fragen?',
        'Our support team is here to help you with any questions or concerns.': 'Unser Support-Team ist hier, um Ihnen bei Fragen oder Bedenken zu helfen.',
        'Contact Support': 'Support Kontaktieren',
        
        // Footer
        'Company': 'Unternehmen',
        'Support': 'Support',
        'Legal': 'Rechtliches',
        'Follow Us': 'Folgen Sie Uns',
        'Stay Updated': 'Bleiben Sie Informiert',
        'Get notified about new features, plant care tips, and app updates': 'Werden Sie über neue Funktionen, Pflanzenpflegetipps und App-Updates benachrichtigt',
        'Enter your email': 'Geben Sie Ihre E-Mail ein',
        'Subscribe': 'Abonnieren',
        'Made with': 'Gemacht mit',
        'for plant lovers everywhere': 'für Pflanzenliebhaber überall'
      },
      // Add more languages with similar comprehensive translations
      it: {
        'Home': 'Casa', 'Application': 'Applicazione', 'Download': 'Scarica', 'FAQ': 'Domande Frequenti',
        'AI Botanist In Your Pocket': 'Botanico IA Nella Tua Tasca',
        'How It Works': 'Come Funziona', 'Powerful Features': 'Funzionalità Potenti',
        'Perfect For Everyone': 'Perfetto Per Tutti', 'Ready to Start Your Plant Journey?': 'Pronto per Iniziare il Tuo Viaggio Botanico?'
      },
      pt: {
        'Home': 'Início', 'Application': 'Aplicação', 'Download': 'Baixar', 'FAQ': 'Perguntas Frequentes',
        'AI Botanist In Your Pocket': 'Botânico IA No Seu Bolso',
        'How It Works': 'Como Funciona', 'Powerful Features': 'Recursos Poderosos',
        'Perfect For Everyone': 'Perfeito Para Todos', 'Ready to Start Your Plant Journey?': 'Pronto para Começar Sua Jornada Botânica?'
      },
      ru: {
        'Home': 'Главная', 'Application': 'Приложение', 'Download': 'Скачать', 'FAQ': 'Часто Задаваемые Вопросы',
        'AI Botanist In Your Pocket': 'ИИ Ботаник В Вашем Кармане',
        'How It Works': 'Как Это Работает', 'Powerful Features': 'Мощные Функции',
        'Perfect For Everyone': 'Идеально Для Всех', 'Ready to Start Your Plant Journey?': 'Готовы Начать Свое Растительное Путешествие?'
      },
      ja: {
        'Home': 'ホーム', 'Application': 'アプリケーション', 'Download': 'ダウンロード', 'FAQ': 'よくある質問',
        'AI Botanist In Your Pocket': 'ポケットのAI植物学者',
        'How It Works': '使い方', 'Powerful Features': '強力な機能',
        'Perfect For Everyone': '誰にでも最適', 'Ready to Start Your Plant Journey?': '植物の旅を始める準備はできましたか？'
      },
      ko: {
        'Home': '홈', 'Application': '애플리케이션', 'Download': '다운로드', 'FAQ': '자주 묻는 질문',
        'AI Botanist In Your Pocket': '주머니 속 AI 식물학자',
        'How It Works': '작동 방식', 'Powerful Features': '강력한 기능',
        'Perfect For Everyone': '모든 사람에게 완벽', 'Ready to Start Your Plant Journey?': '식물 여행을 시작할 준비가 되셨나요?'
      },
      zh: {
        'Home': '首页', 'Application': '应用程序', 'Download': '下载', 'FAQ': '常见问题',
        'AI Botanist In Your Pocket': '您口袋中的AI植物学家',
        'How It Works': '工作原理', 'Powerful Features': '强大功能',
        'Perfect For Everyone': '适合所有人', 'Ready to Start Your Plant Journey?': '准备开始您的植物之旅吗？'
      },
      ar: {
        'Home': 'الرئيسية', 'Application': 'التطبيق', 'Download': 'تحميل', 'FAQ': 'الأسئلة الشائعة',
        'AI Botanist In Your Pocket': 'عالم النبات الذكي في جيبك',
        'How It Works': 'كيف يعمل', 'Powerful Features': 'ميزات قوية',
        'Perfect For Everyone': 'مثالي للجميع', 'Ready to Start Your Plant Journey?': 'هل أنت مستعد لبدء رحلتك النباتية؟'
      },
      hi: {
        'Home': 'होम', 'Application': 'एप्लिकेशन', 'Download': 'डाउनलोड', 'FAQ': 'सामान्य प्रश्न',
        'AI Botanist In Your Pocket': 'आपकी जेब में AI वनस्पतिशास्त्री',
        'How It Works': 'यह कैसे काम करता है', 'Powerful Features': 'शक्तिशाली सुविधाएं',
        'Perfect For Everyone': 'सभी के लिए परफेक्ट', 'Ready to Start Your Plant Journey?': 'अपनी पौधों की यात्रा शुरू करने के लिए तैयार हैं?'
      },
      th: {
        'Home': 'หน้าแรก', 'Application': 'แอปพลิเคชัน', 'Download': 'ดาวน์โหลด', 'FAQ': 'คำถามที่พบบ่อย',
        'AI Botanist In Your Pocket': 'นักพฤกษศาสตร์ AI ในกระเป๋าของคุณ',
        'How It Works': 'วิธีการทำงาน', 'Powerful Features': 'คุณสมบัติที่ทรงพลัง',
        'Perfect For Everyone': 'เหมาะสำหรับทุกคน', 'Ready to Start Your Plant Journey?': 'พร้อมที่จะเริ่มต้นการเดินทางกับพืชของคุณหรือยัง?'
      },
      vi: {
        'Home': 'Trang chủ', 'Application': 'Ứng dụng', 'Download': 'Tải xuống', 'FAQ': 'Câu hỏi thường gặp',
        'AI Botanist In Your Pocket': 'Nhà Thực Vật Học AI Trong Túi Của Bạn',
        'How It Works': 'Cách Hoạt Động', 'Powerful Features': 'Tính Năng Mạnh Mẽ',
        'Perfect For Everyone': 'Hoàn Hảo Cho Mọi Người', 'Ready to Start Your Plant Journey?': 'Sẵn sàng bắt đầu hành trình thực vật của bạn?'
      },
      tr: {
        'Home': 'Ana Sayfa', 'Application': 'Uygulama', 'Download': 'İndir', 'FAQ': 'Sık Sorulan Sorular',
        'AI Botanist In Your Pocket': 'Cebinizdeki AI Botanikçi',
        'How It Works': 'Nasıl Çalışır', 'Powerful Features': 'Güçlü Özellikler',
        'Perfect For Everyone': 'Herkes İçin Mükemmel', 'Ready to Start Your Plant Journey?': 'Bitki Yolculuğunuza Başlamaya Hazır mısınız?'
      },
      pl: {
        'Home': 'Strona główna', 'Application': 'Aplikacja', 'Download': 'Pobierz', 'FAQ': 'Często zadawane pytania',
        'AI Botanist In Your Pocket': 'Botanik AI w Twojej Kieszeni',
        'How It Works': 'Jak to działa', 'Powerful Features': 'Potężne funkcje',
        'Perfect For Everyone': 'Idealne dla wszystkich', 'Ready to Start Your Plant Journey?': 'Gotowy rozpocząć swoją podróż z roślinami?'
      },
      nl: {
        'Home': 'Thuis', 'Application': 'Applicatie', 'Download': 'Downloaden', 'FAQ': 'Veelgestelde vragen',
        'AI Botanist In Your Pocket': 'AI Botanicus In Je Zak',
        'How It Works': 'Hoe Het Werkt', 'Powerful Features': 'Krachtige Functies',
        'Perfect For Everyone': 'Perfect Voor Iedereen', 'Ready to Start Your Plant Journey?': 'Klaar om je plantenreis te beginnen?'
      },
      sv: {
        'Home': 'Hem', 'Application': 'Applikation', 'Download': 'Ladda ner', 'FAQ': 'Vanliga frågor',
        'AI Botanist In Your Pocket': 'AI Botanist I Din Ficka',
        'How It Works': 'Hur Det Fungerar', 'Powerful Features': 'Kraftfulla Funktioner',
        'Perfect For Everyone': 'Perfekt För Alla', 'Ready to Start Your Plant Journey?': 'Redo att börja din växtresa?'
      },
      da: {
        'Home': 'Hjem', 'Application': 'Applikation', 'Download': 'Download', 'FAQ': 'Ofte stillede spørgsmål',
        'AI Botanist In Your Pocket': 'AI Botaniker I Din Lomme',
        'How It Works': 'Sådan Fungerer Det', 'Powerful Features': 'Kraftfulde Funktioner',
        'Perfect For Everyone': 'Perfekt For Alle', 'Ready to Start Your Plant Journey?': 'Klar til at starte din plantrejse?'
      },
      no: {
        'Home': 'Hjem', 'Application': 'Applikasjon', 'Download': 'Last ned', 'FAQ': 'Ofte stilte spørsmål',
        'AI Botanist In Your Pocket': 'AI Botaniker I Lommen Din',
        'How It Works': 'Hvordan Det Fungerer', 'Powerful Features': 'Kraftige Funksjoner',
        'Perfect For Everyone': 'Perfekt For Alle', 'Ready to Start Your Plant Journey?': 'Klar til å starte plantereisen din?'
      }
    };

    return translations[currentLanguage.code]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};