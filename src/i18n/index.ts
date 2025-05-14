import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      meta: {
        title: "Professional Copywriting Courses | Expert Copywriting Training & Certification",
        description: "Transform your career with professional copywriting courses. Our industry-leading copywriting training and certification programs have helped 50,000+ writers launch successful careers."
      },
      nav: {
        home: "Home",
        courses: "Courses",
        blog: "Blog",
        contact: "Contact"
      },
      hero: {
        title: "Professional Copywriting Courses",
        subtitle: "Master the art of copywriting with expert-led training and certification",
        cta: {
          courses: "View Courses",
          start: "Start Learning"
        }
      },
      courses: {
        title: "Our Courses",
        categories: {
          all: "All Courses",
          foundation: "Foundation",
          marketing: "Marketing",
          beginner: "Beginner",
          web: "Web"
        }
      },
      blog: {
        title: "Copywriting Blog",
        readMore: "Read More",
        categories: {
          all: "All Posts",
          copywriting: "Copywriting",
          marketing: "Marketing",
          seo: "SEO"
        }
      },
      contact: {
        title: "Contact Us",
        form: {
          name: "Your Name",
          email: "Email Address",
          submit: "Get Started"
        }
      }
    }
  },
  zh: { // Mandarin Chinese
    translation: {
      meta: {
        title: "专业文案写作课程 | 专家文案培训与认证",
        description: "通过专业文案写作课程转变您的职业生涯。我们行业领先的文案培训和认证项目已帮助超过50,000名作家成功启动职业生涯。"
      },
      nav: {
        home: "首页",
        courses: "课程",
        blog: "博客",
        contact: "联系我们"
      },
      hero: {
        title: "专业文案写作课程",
        subtitle: "通过专家指导的培训和认证掌握文案写作艺术",
        cta: {
          courses: "查看课程",
          start: "开始学习"
        }
      },
      courses: {
        title: "我们的课程",
        categories: {
          all: "所有课程",
          foundation: "基础",
          marketing: "营销",
          beginner: "初学者",
          web: "网络"
        }
      },
      blog: {
        title: "文案写作博客",
        readMore: "阅读更多",
        categories: {
          all: "所有文章",
          copywriting: "文案写作",
          marketing: "营销",
          seo: "搜索引擎优化"
        }
      },
      contact: {
        title: "联系我们",
        form: {
          name: "您的姓名",
          email: "电子邮箱",
          submit: "开始"
        }
      }
    }
  },
  hi: { // Hindi
    translation: {
      meta: {
        title: "पेशेवर कॉपीराइटिंग कोर्स | विशेषज्ञ कॉपीराइटिंग प्रशिक्षण और प्रमाणन",
        description: "पेशेवर कॉपीराइटिंग कोर्स के साथ अपने करियर को बदलें। हमारे उद्योग-अग्रणी कॉपीराइटिंग प्रशिक्षण और प्रमाणन कार्यक्रमों ने 50,000+ लेखकों को सफल करियर शुरू करने में मदद की है।"
      },
      nav: {
        home: "होम",
        courses: "कोर्स",
        blog: "ब्लॉग",
        contact: "संपर्क"
      },
      hero: {
        title: "पेशेवर कॉपीराइटिंग कोर्स",
        subtitle: "विशेषज्ञ-नेतृत्व वाले प्रशिक्षण और प्रमाणन के साथ कॉपीराइटिंग की कला में महारत हासिल करें",
        cta: {
          courses: "कोर्स देखें",
          start: "सीखना शुरू करें"
        }
      },
      courses: {
        title: "हमारे कोर्स",
        categories: {
          all: "सभी कोर्स",
          foundation: "आधार",
          marketing: "मार्केटिंग",
          beginner: "शुरुआती",
          web: "वेब"
        }
      },
      blog: {
        title: "कॉपीराइटिंग ब्लॉग",
        readMore: "और पढ़ें",
        categories: {
          all: "सभी पोस्ट",
          copywriting: "कॉपीराइटिंग",
          marketing: "मार्केटिंग",
          seo: "एसईओ"
        }
      },
      contact: {
        title: "संपर्क करें",
        form: {
          name: "आपका नाम",
          email: "ईमेल पता",
          submit: "शुरू करें"
        }
      }
    }
  },
  es: { // Spanish
    translation: {
      meta: {
        title: "Cursos Profesionales de Copywriting | Formación y Certificación de Expertos",
        description: "Transforma tu carrera con cursos profesionales de copywriting. Nuestros programas de formación y certificación han ayudado a más de 50.000 escritores a lanzar carreras exitosas."
      },
      nav: {
        home: "Inicio",
        courses: "Cursos",
        blog: "Blog",
        contact: "Contacto"
      },
      hero: {
        title: "Cursos Profesionales de Copywriting",
        subtitle: "Domina el arte del copywriting con formación y certificación de expertos",
        cta: {
          courses: "Ver Cursos",
          start: "Empezar Ahora"
        }
      },
      courses: {
        title: "Nuestros Cursos",
        categories: {
          all: "Todos los Cursos",
          foundation: "Fundamentos",
          marketing: "Marketing",
          beginner: "Principiante",
          web: "Web"
        }
      },
      blog: {
        title: "Blog de Copywriting",
        readMore: "Leer Más",
        categories: {
          all: "Todas las Entradas",
          copywriting: "Copywriting",
          marketing: "Marketing",
          seo: "SEO"
        }
      },
      contact: {
        title: "Contáctanos",
        form: {
          name: "Tu Nombre",
          email: "Correo Electrónico",
          submit: "Comenzar"
        }
      }
    }
  },
  fr: { // French
    translation: {
      meta: {
        title: "Cours Professionnels de Copywriting | Formation et Certification d'Experts",
        description: "Transformez votre carrière avec des cours professionnels de copywriting. Nos programmes de formation et de certification ont aidé plus de 50.000 rédacteurs à lancer leur carrière."
      },
      nav: {
        home: "Accueil",
        courses: "Cours",
        blog: "Blog",
        contact: "Contact"
      },
      hero: {
        title: "Cours Professionnels de Copywriting",
        subtitle: "Maîtrisez l'art du copywriting avec une formation et une certification d'experts",
        cta: {
          courses: "Voir les Cours",
          start: "Commencer"
        }
      },
      courses: {
        title: "Nos Cours",
        categories: {
          all: "Tous les Cours",
          foundation: "Fondamentaux",
          marketing: "Marketing",
          beginner: "Débutant",
          web: "Web"
        }
      },
      blog: {
        title: "Blog Copywriting",
        readMore: "Lire la Suite",
        categories: {
          all: "Tous les Articles",
          copywriting: "Copywriting",
          marketing: "Marketing",
          seo: "SEO"
        }
      },
      contact: {
        title: "Contactez-nous",
        form: {
          name: "Votre Nom",
          email: "Adresse Email",
          submit: "Commencer"
        }
      }
    }
  },
  ar: { // Standard Arabic
    translation: {
      meta: {
        title: "دورات كتابة المحتوى الاحترافية | تدريب وشهادة خبراء",
        description: "حول مسارك المهني مع دورات كتابة المحتوى الاحترافية. ساعدت برامج التدريب والشهادات الرائدة في مجالنا أكثر من 50,000 كاتب في إطلاق مسيرتهم المهنية الناجحة."
      },
      nav: {
        home: "الرئيسية",
        courses: "الدورات",
        blog: "المدونة",
        contact: "اتصل بنا"
      },
      hero: {
        title: "دورات كتابة المحتوى الاحترافية",
        subtitle: "أتقن فن كتابة المحتوى مع تدريب وشهادة الخبراء",
        cta: {
          courses: "عرض الدورات",
          start: "ابدأ التعلم"
        }
      },
      courses: {
        title: "دوراتنا",
        categories: {
          all: "جميع الدورات",
          foundation: "الأساسيات",
          marketing: "التسويق",
          beginner: "المبتدئين",
          web: "الويب"
        }
      },
      blog: {
        title: "مدونة كتابة المحتوى",
        readMore: "اقرأ المزيد",
        categories: {
          all: "جميع المقالات",
          copywriting: "كتابة المحتوى",
          marketing: "التسويق",
          seo: "تحسين محركات البحث"
        }
      },
      contact: {
        title: "اتصل بنا",
        form: {
          name: "اسمك",
          email: "البريد الإلكتروني",
          submit: "ابدأ الآن"
        }
      }
    }
  },
  bn: { // Bengali
    translation: {
      meta: {
        title: "পেশাদার কপিরাইটিং কোর্স | বিশেষজ্ঞ কপিরাইটিং প্রশিক্ষণ ও সার্টিফিকেশন",
        description: "পেশাদার কপিরাইটিং কোর্সের মাধ্যমে আপনার ক্যারিয়ার পরিবর্তন করুন। আমাদের শিল্প-নেতৃস্থানীয় কপিরাইটিং প্রশিক্ষণ এবং সার্টিফিকেশন প্রোগ্রামগুলি 50,000+ লেখককে সফল ক্যারিয়ার শুরু করতে সাহায্য করেছে।"
      },
      nav: {
        home: "হোম",
        courses: "কোর্স",
        blog: "ব্লগ",
        contact: "যোগাযোগ"
      },
      hero: {
        title: "পেশাদার কপিরাইটিং কোর্স",
        subtitle: "বিশেষজ্ঞ-নেতৃত্বাধীন প্রশিক্ষণ এবং সার্টিফিকেশনের মাধ্যমে কপিরাইটিংয়ের শিল্প আয়ত্ত করুন",
        cta: {
          courses: "কোর্স দেখুন",
          start: "শেখা শুরু করুন"
        }
      },
      courses: {
        title: "আমাদের কোর্স",
        categories: {
          all: "সব কোর্স",
          foundation: "ভিত্তি",
          marketing: "মার্কেটিং",
          beginner: "নতুন",
          web: "ওয়েব"
        }
      },
      blog: {
        title: "কপিরাইটিং ব্লগ",
        readMore: "আরও পড়ুন",
        categories: {
          all: "সব পোস্ট",
          copywriting: "কপিরাইটিং",
          marketing: "মার্কেটিং",
          seo: "এসইও"
        }
      },
      contact: {
        title: "যোগাযোগ করুন",
        form: {
          name: "আপনার নাম",
          email: "ইমেইল ঠিকানা",
          submit: "শুরু করুন"
        }
      }
    }
  },
  pt: { // Portuguese
    translation: {
      meta: {
        title: "Cursos Profissionais de Copywriting | Treinamento e Certificação de Especialistas",
        description: "Transforme sua carreira com cursos profissionais de copywriting. Nossos programas de treinamento e certificação líderes do setor já ajudaram mais de 50.000 escritores a lançar carreiras de sucesso."
      },
      nav: {
        home: "Início",
        courses: "Cursos",
        blog: "Blog",
        contact: "Contato"
      },
      hero: {
        title: "Cursos Profissionais de Copywriting",
        subtitle: "Domine a arte do copywriting com treinamento e certificação especializada",
        cta: {
          courses: "Ver Cursos",
          start: "Começar Agora"
        }
      },
      courses: {
        title: "Nossos Cursos",
        categories: {
          all: "Todos os Cursos",
          foundation: "Fundamentos",
          marketing: "Marketing",
          beginner: "Iniciante",
          web: "Web"
        }
      },
      blog: {
        title: "Blog de Copywriting",
        readMore: "Ler Mais",
        categories: {
          all: "Todas as Postagens",
          copywriting: "Copywriting",
          marketing: "Marketing",
          seo: "SEO"
        }
      },
      contact: {
        title: "Contate-nos",
        form: {
          name: "Seu Nome",
          email: "Endereço de Email",
          submit: "Começar"
        }
      }
    }
  },
  ru: { // Russian
    translation: {
      meta: {
        title: "Профессиональные Курсы Копирайтинга | Экспертное Обучение и Сертификация",
        description: "Преобразите свою карьеру с помощью профессиональных курсов копирайтинга. Наши ведущие в отрасли программы обучения и сертификации помогли более чем 50 000 писателей начать успешную карьеру."
      },
      nav: {
        home: "Главная",
        courses: "Курсы",
        blog: "Блог",
        contact: "Контакты"
      },
      hero: {
        title: "Профессиональные Курсы Копирайтинга",
        subtitle: "Овладейте искусством копирайтинга с экспертным обучением и сертификацией",
        cta: {
          courses: "Смотреть Курсы",
          start: "Начать Обучение"
        }
      },
      courses: {
        title: "Наши Курсы",
        categories: {
          all: "Все Курсы",
          foundation: "Основы",
          marketing: "Маркетинг",
          beginner: "Начинающим",
          web: "Веб"
        }
      },
      blog: {
        title: "Блог о Копирайтинге",
        readMore: "Читать Далее",
        categories: {
          all: "Все Записи",
          copywriting: "Копирайтинг",
          marketing: "Маркетинг",
          seo: "SEO"
        }
      },
      contact: {
        title: "Свяжитесь с Нами",
        form: {
          name: "Ваше Имя",
          email: "Email Адрес",
          submit: "Начать"
        }
      }
    }
  },
  ur: { // Urdu
    translation: {
      meta: {
        title: "پیشہ ورانہ کاپی رائٹنگ کورسز | ماہر کاپی رائٹنگ تربیت اور سرٹیفکیشن",
        description: "پیشہ ورانہ کاپی رائٹنگ کورسز کے ساتھ اپنا کیریئر تبدیل کریں۔ ہماری صنعت کی سرکردہ کاپی رائٹنگ تربیت اور سرٹیفکیشن پروگرامز نے 50,000+ مصنفین کو کامیاب کیریئر شروع کرنے میں مدد کی ہے۔"
      },
      nav: {
        home: "ہوم",
        courses: "کورسز",
        blog: "بلاگ",
        contact: "رابطہ"
      },
      hero: {
        title: "پیشہ ورانہ کاپی رائٹنگ کورسز",
        subtitle: "ماہر کی قیادت میں تربیت اور سرٹیفکیشن کے ساتھ کاپی رائٹنگ کے فن میں مہارت حاصل کریں",
        cta: {
          courses: "کورسز دیکھیں",
          start: "سیکھنا شروع کریں"
        }
      },
      courses: {
        title: "ہمارے کورسز",
        categories: {
          all: "تمام کورسز",
          foundation: "بنیادی",
          marketing: "مارکیٹنگ",
          beginner: "نئے سیکھنے والے",
          web: "ویب"
        }
      },
      blog: {
        title: "کاپی رائٹنگ بلاگ",
        readMore: "مزید پڑھیں",
        categories: {
          all: "تمام پوسٹس",
          copywriting: "کاپی رائٹنگ",
          marketing: "مارکیٹنگ",
          seo: "ایس ای او"
        }
      },
      contact: {
        title: "رابطہ کریں",
        form: {
          name: "آپ کا نام",
          email: "ای میل ایڈریس",
          submit: "شروع کریں"
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    supportedLngs: ['en', 'zh', 'hi', 'es', 'fr', 'ar', 'bn', 'pt', 'ru', 'ur'],
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator'],
      caches: ['cookie', 'localStorage']
    }
  });

export default i18n;