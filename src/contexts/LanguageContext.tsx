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

  const t = (key: string): string => {
    if (currentLanguage.code === 'en') {
      return key;
    }
    
    const translations: Record<string, Record<string, string>> = {
      es: {
        'Home': 'Inicio', 'Application': 'Aplicación', 'Download': 'Descargar', 'FAQ': 'Preguntas Frecuentes',
        'AI Botanist In Your Pocket': 'Botánico IA En Tu Bolsillo',
        'Instantly identify any plant with AI-powered camera recognition. Get detailed care guides, toxicity warnings, and build your personal garden collection.': 'Identifica instantáneamente cualquier planta con reconocimiento de cámara con IA. Obtén guías de cuidado detalladas, advertencias de toxicidad y construye tu colección personal de jardín.',
        'How It Works': 'Cómo Funciona', 'Powerful Features': 'Características Poderosas', 'Perfect For Everyone': 'Perfecto Para Todos',
        'Ready to Start Your Plant Journey?': '¿Listo para Comenzar tu Viaje con Plantas?', 'Frequently Asked Questions': 'Preguntas Frecuentes'
      },
      fr: {
        'Home': 'Accueil', 'Application': 'Application', 'Download': 'Télécharger', 'FAQ': 'Questions Fréquentes',
        'AI Botanist In Your Pocket': 'Botaniste IA Dans Votre Poche',
        'Instantly identify any plant with AI-powered camera recognition. Get detailed care guides, toxicity warnings, and build your personal garden collection.': 'Identifiez instantanément toute plante avec la reconnaissance par caméra alimentée par IA. Obtenez des guides de soins détaillés, des avertissements de toxicité et construisez votre collection de jardin personnelle.',
        'How It Works': 'Comment Ça Marche', 'Powerful Features': 'Fonctionnalités Puissantes', 'Perfect For Everyone': 'Parfait Pour Tous',
        'Ready to Start Your Plant Journey?': 'Prêt à Commencer Votre Voyage Végétal?', 'Frequently Asked Questions': 'Questions Fréquemment Posées'
      },
      de: {
        'Home': 'Startseite', 'Application': 'Anwendung', 'Download': 'Herunterladen', 'FAQ': 'Häufige Fragen',
        'AI Botanist In Your Pocket': 'KI-Botaniker In Ihrer Tasche',
        'Instantly identify any plant with AI-powered camera recognition. Get detailed care guides, toxicity warnings, and build your personal garden collection.': 'Identifizieren Sie sofort jede Pflanze mit KI-gestützter Kameraerkennung. Erhalten Sie detaillierte Pflegeanleitungen, Toxizitätswarnungen und bauen Sie Ihre persönliche Gartensammlung auf.',
        'How It Works': 'So Funktioniert Es', 'Powerful Features': 'Leistungsstarke Funktionen', 'Perfect For Everyone': 'Perfekt Für Jeden',
        'Ready to Start Your Plant Journey?': 'Bereit, Ihre Pflanzenreise Zu Beginnen?', 'Frequently Asked Questions': 'Häufig Gestellte Fragen'
      },
      it: {
        'Home': 'Casa', 'Application': 'Applicazione', 'Download': 'Scarica', 'FAQ': 'Domande Frequenti',
        'AI Botanist In Your Pocket': 'Botanico IA Nella Tua Tasca',
        'Instantly identify any plant with AI-powered camera recognition. Get detailed care guides, toxicity warnings, and build your personal garden collection.': 'Identifica istantaneamente qualsiasi pianta con riconoscimento della fotocamera alimentato da IA. Ottieni guide di cura dettagliate, avvertimenti di tossicità e costruisci la tua collezione di giardino personale.',
        'How It Works': 'Come Funziona', 'Powerful Features': 'Caratteristiche Potenti', 'Perfect For Everyone': 'Perfetto Per Tutti',
        'Ready to Start Your Plant Journey?': 'Pronto Ad Iniziare Il Tuo Viaggio Vegetale?', 'Frequently Asked Questions': 'Domande Frequenti'
      },
      pt: {
        'Home': 'Início', 'Application': 'Aplicação', 'Download': 'Baixar', 'FAQ': 'Perguntas Frequentes',
        'AI Botanist In Your Pocket': 'Botânico IA No Seu Bolso',
        'Instantly identify any plant with AI-powered camera recognition. Get detailed care guides, toxicity warnings, and build your personal garden collection.': 'Identifique instantaneamente qualquer planta com reconhecimento de câmera alimentado por IA. Obtenha guias de cuidados detalhados, avisos de toxicidade e construa sua coleção pessoal de jardim.',
        'How It Works': 'Como Funciona', 'Powerful Features': 'Recursos Poderosos', 'Perfect For Everyone': 'Perfeito Para Todos',
        'Ready to Start Your Plant Journey?': 'Pronto Para Começar Sua Jornada Das Plantas?', 'Frequently Asked Questions': 'Perguntas Frequentes'
      },
      ru: {
        'Home': 'Главная', 'Application': 'Приложение', 'Download': 'Скачать', 'FAQ': 'Часто Задаваемые Вопросы',
        'AI Botanist In Your Pocket': 'ИИ Ботаник В Вашем Кармане',
        'Instantly identify any plant with AI-powered camera recognition. Get detailed care guides, toxicity warnings, and build your personal garden collection.': 'Мгновенно определяйте любое растение с помощью распознавания камеры на основе ИИ. Получайте подробные руководства по уходу, предупреждения о токсичности и создавайте свою личную коллекцию сада.',
        'How It Works': 'Как Это Работает', 'Powerful Features': 'Мощные Функции', 'Perfect For Everyone': 'Идеально Для Всех',
        'Ready to Start Your Plant Journey?': 'Готовы Начать Свое Растительное Путешествие?', 'Frequently Asked Questions': 'Часто Задаваемые Вопросы'
      },
      ja: {
        'Home': 'ホーム', 'Application': 'アプリケーション', 'Download': 'ダウンロード', 'FAQ': 'よくある質問',
        'AI Botanist In Your Pocket': 'ポケットの中のAI植物学者',
        'Instantly identify any plant with AI-powered camera recognition. Get detailed care guides, toxicity warnings, and build your personal garden collection.': 'AI搭載のカメラ認識で任意の植物を瞬時に識別します。詳細なケアガイド、毒性警告を取得し、個人の庭園コレクションを構築します。',
        'How It Works': '使い方', 'Powerful Features': '強力な機能', 'Perfect For Everyone': 'みんなにぴったり',
        'Ready to Start Your Plant Journey?': '植物の旅を始める準備はできましたか？', 'Frequently Asked Questions': 'よくある質問'
      },
      ko: {
        'Home': '홈', 'Application': '애플리케이션', 'Download': '다운로드', 'FAQ': '자주 묻는 질문',
        'AI Botanist In Your Pocket': '주머니 속의 AI 식물학자',
        'Instantly identify any plant with AI-powered camera recognition. Get detailed care guides, toxicity warnings, and build your personal garden collection.': 'AI 기반 카메라 인식으로 모든 식물을 즉시 식별하세요. 상세한 관리 가이드, 독성 경고를 받고 개인 정원 컬렉션을 구축하세요.',
        'How It Works': '작동 방식', 'Powerful Features': '강력한 기능', 'Perfect For Everyone': '모든 사람에게 완벽',
        'Ready to Start Your Plant Journey?': '식물 여행을 시작할 준비가 되셨나요?', 'Frequently Asked Questions': '자주 묻는 질문'
      },
      zh: {
        'Home': '首页', 'Application': '应用程序', 'Download': '下载', 'FAQ': '常见问题',
        'AI Botanist In Your Pocket': '口袋里的AI植物学家',
        'Instantly identify any plant with AI-powered camera recognition. Get detailed care guides, toxicity warnings, and build your personal garden collection.': '使用AI驱动的摄像头识别即时识别任何植物。获取详细的护理指南、毒性警告并建立您的个人花园收藏。',
        'How It Works': '工作原理', 'Powerful Features': '强大功能', 'Perfect For Everyone': '适合所有人',
        'Ready to Start Your Plant Journey?': '准备开始您的植物之旅吗？', 'Frequently Asked Questions': '常见问题'
      },
      ar: {
        'Home': 'الرئيسية', 'Application': 'التطبيق', 'Download': 'تحميل', 'FAQ': 'الأسئلة الشائعة',
        'AI Botanist In Your Pocket': 'عالم النبات بالذكاء الاصطناعي في جيبك',
        'Instantly identify any plant with AI-powered camera recognition. Get detailed care guides, toxicity warnings, and build your personal garden collection.': 'تحديد أي نبات على الفور بواسطة التعرف على الكاميرا المدعومة بالذكاء الاصطناعي. احصل على أدلة رعاية مفصلة وتحذيرات السمية وقم ببناء مجموعة حديقتك الشخصية.',
        'How It Works': 'كيف يعمل', 'Powerful Features': 'ميزات قوية', 'Perfect For Everyone': 'مثالي للجميع',
        'Ready to Start Your Plant Journey?': 'مستعد لبدء رحلة النباتات؟', 'Frequently Asked Questions': 'الأسئلة الشائعة'
      },
      hi: {
        'Home': 'होम', 'Application': 'एप्लिकेशन', 'Download': 'डाउनलोड', 'FAQ': 'अक्सर पूछे जाने वाले प्रश्न',
        'AI Botanist In Your Pocket': 'आपकी जेब में AI वनस्पति विज्ञानी',
        'Instantly identify any plant with AI-powered camera recognition. Get detailed care guides, toxicity warnings, and build your personal garden collection.': 'AI-संचालित कैमरा पहचान के साथ तुरंत किसी भी पौधे की पहचान करें। विस्तृत देखभाल गाइड, विषाक्तता चेतावनी प्राप्त करें और अपना व्यक्तिगत बगीचा संग्रह बनाएं।',
        'How It Works': 'यह कैसे काम करता है', 'Powerful Features': 'शक्तिशाली विशेषताएं', 'Perfect For Everyone': 'सभी के लिए बिल्कुल सही',
        'Ready to Start Your Plant Journey?': 'अपनी पौधों की यात्रा शुरू करने के लिए तैयार?', 'Frequently Asked Questions': 'अक्सर पूछे जाने वाले प्रश्न'
      },
      th: {
        'Home': 'หน้าแรก', 'Application': 'แอปพลิเคชัน', 'Download': 'ดาวน์โหลด', 'FAQ': 'คำถามที่พบบ่อย',
        'AI Botanist In Your Pocket': 'นักพฤกษศาสตร์ AI ในกระเป๋าของคุณ',
        'Instantly identify any plant with AI-powered camera recognition. Get detailed care guides, toxicity warnings, and build your personal garden collection.': 'ระบุพืชใดๆ ได้ทันทีด้วยการรู้จำกล้องที่ขับเคลื่อนด้วย AI รับคู่มือการดูแลโดยละเอียด คำเตือนความเป็นพิษ และสร้างคอลเลกชันสวนส่วนตัวของคุณ',
        'How It Works': 'วิธีการทำงาน', 'Powerful Features': 'คุณสมบัติที่ทรงพลัง', 'Perfect For Everyone': 'เหมาะสำหรับทุกคน',
        'Ready to Start Your Plant Journey?': 'พร้อมที่จะเริ่มต้นการเดินทางกับพืชแล้วหรือยัง?', 'Frequently Asked Questions': 'คำถามที่พบบ่อย'
      },
      vi: {
        'Home': 'Trang chủ', 'Application': 'Ứng dụng', 'Download': 'Tải xuống', 'FAQ': 'Câu hỏi thường gặp',
        'AI Botanist In Your Pocket': 'Nhà thực vật học AI trong túi của bạn',
        'Instantly identify any plant with AI-powered camera recognition. Get detailed care guides, toxicity warnings, and build your personal garden collection.': 'Nhận dạng ngay lập tức bất kỳ cây nào với nhận dạng camera được hỗ trợ bởi AI. Nhận hướng dẫn chăm sóc chi tiết, cảnh báo độc tính và xây dựng bộ sưu tập vườn cá nhân của bạn.',
        'How It Works': 'Cách thức hoạt động', 'Powerful Features': 'Tính năng mạnh mẽ', 'Perfect For Everyone': 'Hoàn hảo cho mọi người',
        'Ready to Start Your Plant Journey?': 'Sẵn sàng bắt đầu hành trình thực vật của bạn?', 'Frequently Asked Questions': 'Câu hỏi thường gặp'
      },
      tr: {
        'Home': 'Ana Sayfa', 'Application': 'Uygulama', 'Download': 'İndir', 'FAQ': 'Sık Sorulan Sorular',
        'AI Botanist In Your Pocket': 'Cebinizdeki AI Botanikçi',
        'Instantly identify any plant with AI-powered camera recognition. Get detailed care guides, toxicity warnings, and build your personal garden collection.': 'AI destekli kamera tanıma ile herhangi bir bitkiyi anında tanımlayın. Ayrıntılı bakım kılavuzları, toksisite uyarıları alın ve kişisel bahçe koleksiyonunuzu oluşturun.',
        'How It Works': 'Nasıl Çalışır', 'Powerful Features': 'Güçlü Özellikler', 'Perfect For Everyone': 'Herkes İçin Mükemmel',
        'Ready to Start Your Plant Journey?': 'Bitki Yolculuğunuza Başlamaya Hazır mısınız?', 'Frequently Asked Questions': 'Sık Sorulan Sorular'
      },
      pl: {
        'Home': 'Strona główna', 'Application': 'Aplikacja', 'Download': 'Pobierz', 'FAQ': 'Często zadawane pytania',
        'AI Botanist In Your Pocket': 'Botanik AI w Twojej kieszeni',
        'Instantly identify any plant with AI-powered camera recognition. Get detailed care guides, toxicity warnings, and build your personal garden collection.': 'Natychmiast identyfikuj każdą roślinę dzięki rozpoznawaniu kamery zasilanej przez AI. Otrzymaj szczegółowe przewodniki pielęgnacji, ostrzeżenia o toksyczności i zbuduj swoją osobistą kolekcję ogrodową.',
        'How It Works': 'Jak to działa', 'Powerful Features': 'Potężne funkcje', 'Perfect For Everyone': 'Idealne dla wszystkich',
        'Ready to Start Your Plant Journey?': 'Gotowy, aby rozpocząć swoją podróż z roślinami?', 'Frequently Asked Questions': 'Często zadawane pytania'
      },
      nl: {
        'Home': 'Thuis', 'Application': 'Applicatie', 'Download': 'Downloaden', 'FAQ': 'Veelgestelde vragen',
        'AI Botanist In Your Pocket': 'AI Botanicus in je zak',
        'Instantly identify any plant with AI-powered camera recognition. Get detailed care guides, toxicity warnings, and build your personal garden collection.': 'Identificeer direct elke plant met AI-aangedreven cameraherkenning. Krijg gedetailleerde verzorgingsgidsen, toxiciteitswaarschuwingen en bouw je persoonlijke tuincollectie op.',
        'How It Works': 'Hoe het werkt', 'Powerful Features': 'Krachtige functies', 'Perfect For Everyone': 'Perfect voor iedereen',
        'Ready to Start Your Plant Journey?': 'Klaar om je plantenreis te beginnen?', 'Frequently Asked Questions': 'Veelgestelde vragen'
      },
      sv: {
        'Home': 'Hem', 'Application': 'Applikation', 'Download': 'Ladda ner', 'FAQ': 'Vanliga frågor',
        'AI Botanist In Your Pocket': 'AI Botaniker i din ficka',
        'Instantly identify any plant with AI-powered camera recognition. Get detailed care guides, toxicity warnings, and build your personal garden collection.': 'Identifiera omedelbart vilken växt som helst med AI-driven kameraigenkänning. Få detaljerade vårdguider, toxicitetsvarningar och bygg din personliga trädgårdssamling.',
        'How It Works': 'Hur det fungerar', 'Powerful Features': 'Kraftfulla funktioner', 'Perfect For Everyone': 'Perfekt för alla',
        'Ready to Start Your Plant Journey?': 'Redo att börja din växtresa?', 'Frequently Asked Questions': 'Vanliga frågor'
      },
      da: {
        'Home': 'Hjem', 'Application': 'Applikation', 'Download': 'Download', 'FAQ': 'Ofte stillede spørgsmål',
        'AI Botanist In Your Pocket': 'AI Botaniker i din lomme',
        'Instantly identify any plant with AI-powered camera recognition. Get detailed care guides, toxicity warnings, and build your personal garden collection.': 'Identificer øjeblikkeligt enhver plante med AI-drevet kameragenkendelse. Få detaljerede plejeguider, toksicitetsadvarsler og byg din personlige havesamling.',
        'How It Works': 'Sådan fungerer det', 'Powerful Features': 'Kraftfulde funktioner', 'Perfect For Everyone': 'Perfekt til alle',
        'Ready to Start Your Plant Journey?': 'Klar til at starte din planterejse?', 'Frequently Asked Questions': 'Ofte stillede spørgsmål'
      },
      no: {
        'Home': 'Hjem', 'Application': 'Applikasjon', 'Download': 'Last ned', 'FAQ': 'Ofte stilte spørsmål',
        'AI Botanist In Your Pocket': 'AI Botaniker i lommen din',
        'Instantly identify any plant with AI-powered camera recognition. Get detailed care guides, toxicity warnings, and build your personal garden collection.': 'Identifiser øyeblikkelig hvilken som helst plante med AI-drevet kameragjenkjenning. Få detaljerte stelleguider, toksisitetsadvarsler og bygg din personlige hagesamling.',
        'How It Works': 'Slik fungerer det', 'Powerful Features': 'Kraftige funksjoner', 'Perfect For Everyone': 'Perfekt for alle',
        'Ready to Start Your Plant Journey?': 'Klar til å starte planteveien din?', 'Frequently Asked Questions': 'Ofte stilte spørsmål'
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