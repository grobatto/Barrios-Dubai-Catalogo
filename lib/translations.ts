export type Language = 'en' | 'es' | 'pt' | 'zh' | 'ar' | 'hi';

export interface Translations {
  [key: string]: {
    [key in Language]: string;
  };
}

export const translations: Translations = {
  // Navigation
  navigation: {
    en: 'Navigation',
    es: 'Navegación',
    pt: 'Navegação',
    zh: '导航',
    ar: 'الملاحة',
    hi: 'नेविगेशन',
  },
  home: {
    en: 'Home',
    es: 'Inicio',
    pt: 'Início',
    zh: '首页',
    ar: 'الرئيسية',
    hi: 'होम',
  },
  catalog: {
    en: 'Catalog',
    es: 'Catálogo',
    pt: 'Catálogo',
    zh: '目录',
    ar: 'الكتالوج',
    hi: 'कैटलॉग',
  },
  contact: {
    en: 'Contact',
    es: 'Contacto',
    pt: 'Contato',
    zh: '联系',
    ar: 'اتصل',
    hi: 'संपर्क',
  },
  about: {
    en: 'About',
    es: 'Acerca de',
    pt: 'Sobre',
    zh: '关于',
    ar: 'عن',
    hi: 'के बारे में',
  },

  // Language
  selectLanguage: {
    en: 'Select Language',
    es: 'Seleccionar Idioma',
    pt: 'Selecionar Idioma',
    zh: '选择语言',
    ar: 'اختر اللغة',
    hi: 'भाषा चुनें',
  },
  english: {
    en: 'English',
    es: 'Inglés',
    pt: 'Inglês',
    zh: '英文',
    ar: 'الإنجليزية',
    hi: 'अंग्रेजी',
  },
  spanish: {
    en: 'Spanish',
    es: 'Español',
    pt: 'Espanhol',
    zh: '西班牙语',
    ar: 'الإسبانية',
    hi: 'स्पेनिश',
  },
  portuguese: {
    en: 'Portuguese',
    es: 'Portugués',
    pt: 'Português',
    zh: '葡萄牙语',
    ar: 'البرتغالية',
    hi: 'पुर्तगाली',
  },
  chinese: {
    en: 'Chinese',
    es: 'Chino',
    pt: 'Chinês',
    zh: '中文',
    ar: 'الصينية',
    hi: 'चीनी',
  },
  arabic: {
    en: 'Arabic',
    es: 'Árabe',
    pt: 'Árabe',
    zh: '阿拉伯语',
    ar: 'العربية',
    hi: 'अरबी',
  },
  hindi: {
    en: 'Hindi',
    es: 'Hindi',
    pt: 'Hindi',
    zh: '印地语',
    ar: 'اللغة الهندية',
    hi: 'हिंदी',
  },

  // Categories
  allProducts: {
    en: 'All Products',
    es: 'Todos los Productos',
    pt: 'Todos os Produtos',
    zh: '所有产品',
    ar: 'جميع المنتجات',
    hi: 'सभी उत्पाद',
  },
  cavity: {
    en: 'Cavity',
    es: 'Cavidad',
    pt: 'Cavidade',
    zh: '空洞',
    ar: 'تجويف',
    hi: 'गुहा',
  },
  geodes: {
    en: 'Geodes',
    es: 'Geodas',
    pt: 'Geodos',
    zh: '晶洞',
    ar: 'جيود',
    hi: 'जिओड्स',
  },
  shapes: {
    en: 'Shapes',
    es: 'Formas',
    pt: 'Formas',
    zh: '形状',
    ar: 'أشكال',
    hi: 'आकार',
  },
  jewelryBox: {
    en: 'Jewelry Box',
    es: 'Caja de Joyas',
    pt: 'Caixa de Joias',
    zh: '珠宝盒',
    ar: 'صندوق المجوهرات',
    hi: 'गहने बॉक्स',
  },
  amethyst: {
    en: 'Amethyst',
    es: 'Amatista',
    pt: 'Ametista',
    zh: '紫晶',
    ar: 'الجمشت',
    hi: 'नीलम',
  },
  hearts: {
    en: 'Hearts',
    es: 'Corazones',
    pt: 'Corações',
    zh: '心形',
    ar: 'قلوب',
    hi: 'दिल',
  },
  agates: {
    en: 'Agates',
    es: 'Ágatas',
    pt: 'Ágatas',
    zh: '玛瑙',
    ar: 'العقيق',
    hi: 'मेनहीर',
  },
  freeforms: {
    en: 'Freeforms',
    es: 'Formas Libres',
    pt: 'Formas Livres',
    zh: '自由形式',
    ar: 'أشكال حرة',
    hi: 'मुक्त रूप',
  },
  others: {
    en: 'Others',
    es: 'Otros',
    pt: 'Outros',
    zh: '其他',
    ar: 'آخرون',
    hi: 'अन्य',
  },

  // Sections
  uruguaySection: {
    en: 'Uruguay Collection',
    es: 'Colección Uruguay',
    pt: 'Coleção Uruguai',
    zh: '乌拉圭收藏',
    ar: 'مجموعة الأوروغواي',
    hi: 'उरुग्वे संग्रह',
  },
  gradesSection: {
    en: 'Grand Collection',
    es: 'Gran Colección',
    pt: 'Grande Coleção',
    zh: '大型收藏',
    ar: 'المجموعة الكبرى',
    hi: 'ग्रैंड संग्रह',
  },
  museumMasterpieces: {
    en: 'Museum Masterpieces',
    es: 'Obras Maestras del Museo',
    pt: 'Obras-Primas do Museu',
    zh: '博物馆杰作',
    ar: 'روائع المتحف',
    hi: 'संग्रहालय मास्टरपीस',
  },

  // Product attributes
  dimensions: {
    en: 'Dimensions',
    es: 'Dimensiones',
    pt: 'Dimensões',
    zh: '尺寸',
    ar: 'الأبعاد',
    hi: 'आयाम',
  },
  size: {
    en: 'Size',
    es: 'Tamaño',
    pt: 'Tamanho',
    zh: '大小',
    ar: 'الحجم',
    hi: 'आकार',
  },
  small: {
    en: 'Small',
    es: 'Pequeño',
    pt: 'Pequeno',
    zh: '小',
    ar: 'صغير',
    hi: 'छोटा',
  },
  medium: {
    en: 'Medium',
    es: 'Mediano',
    pt: 'Médio',
    zh: '中等',
    ar: 'متوسط',
    hi: 'मध्यम',
  },
  large: {
    en: 'Large',
    es: 'Grande',
    pt: 'Grande',
    zh: '大',
    ar: 'كبير',
    hi: 'बड़ा',
  },
  origin: {
    en: 'Origin',
    es: 'Origen',
    pt: 'Origem',
    zh: '原产地',
    ar: 'الأصل',
    hi: 'उत्पत्ति',
  },

  // Buttons and CTAs
  inquireNow: {
    en: 'Inquire Now',
    es: 'Consultar Ahora',
    pt: 'Consultar Agora',
    zh: '立即咨询',
    ar: 'استفسر الآن',
    hi: 'अभी पूछताछ करें',
  },
  contactUs: {
    en: 'Contact Us',
    es: 'Contáctenos',
    pt: 'Entre em contato',
    zh: '联系我们',
    ar: 'اتصل بنا',
    hi: 'हमसे संपर्क करें',
  },
  viewMore: {
    en: 'View More',
    es: 'Ver Más',
    pt: 'Ver Mais',
    zh: '查看更多',
    ar: 'عرض المزيد',
    hi: 'और देखें',
  },
  viewGallery: {
    en: 'View Gallery',
    es: 'Ver Galería',
    pt: 'Ver Galeria',
    zh: '查看库',
    ar: 'عرض المعرض',
    hi: 'गैलरी देखें',
  },

  // Disclaimer and messages
  productDisclaimer: {
    en: 'These are referential images. For purchasing or consulting product availability, please contact us through WhatsApp or our main website.',
    es: 'Estas son imágenes de referencia. Para comprar o consultar la disponibilidad de productos, contáctenos a través de WhatsApp o nuestro sitio web principal.',
    pt: 'Estas são imagens de referência. Para comprar ou consultar a disponibilidade de produtos, entre em contato através do WhatsApp ou nosso site principal.',
    zh: '这些是参考图像。如需购买或咨询产品可用性,请通过WhatsApp或我们的主网站与我们联系。',
    ar: 'هذه صور مرجعية. للشراء أو الاستفسار عن توفر المنتج، يرجى التواصل معنا عبر WhatsApp أو موقعنا الرئيسي.',
    hi: 'ये संदर्भ छवियां हैं। खरीदारी के लिए या उत्पाद उपलब्धता के बारे में पूछताछ के लिए, कृपया हमारे WhatsApp या मुख्य वेबसाइट के माध्यम से हमसे संपर्क करें।',
  },
  naturalUniqueness: {
    en: 'Each amethyst and agate is a unique creation of nature. Colors, formations, and characteristics vary naturally from piece to piece, making every stone one-of-a-kind.',
    es: 'Cada amatista y ágata es una creación única de la naturaleza. Los colores, formaciones y características varían naturalmente de una pieza a otra, haciendo que cada piedra sea única.',
    pt: 'Cada ametista e ágata é uma criação única da natureza. As cores, formações e características variam naturalmente de peça para peça, tornando cada pedra única.',
    zh: '每个紫晶和玛瑙都是大自然的独特创造。颜色、形成和特征从一件变化到另一件自然变化，使每块石头都是独一无二的。',
    ar: 'كل عقيق وعقيق هو خلق فريد من نوعه من الطبيعة. تختلف الألوان والتشكيلات والخصائص بشكل طبيعي من قطعة إلى أخرى، مما يجعل كل حجر فريدًا من نوعه.',
    hi: 'प्रत्येक अमेथिस्ट और मेनहीर प्रकृति की एक अद्वितीय रचना है। रंग, संरचनाएं और विशेषताएं प्राकृतिक रूप से एक टुकड़े से दूसरे में भिन्न होती हैं, जिससे हर पत्थर अद्वितीय हो जाता है।',
  },

  // Footer
  footer: {
    en: 'Footer',
    es: 'Pie de Página',
    pt: 'Rodapé',
    zh: '页脚',
    ar: 'التذييل',
    hi: 'पाद लेख',
  },
  allRightsReserved: {
    en: 'All rights reserved',
    es: 'Todos los derechos reservados',
    pt: 'Todos os direitos reservados',
    zh: '版权所有',
    ar: 'جميع الحقوق محفوظة',
    hi: 'सर्वाधिकार सुरक्षित',
  },

  // Common
  loading: {
    en: 'Loading...',
    es: 'Cargando...',
    pt: 'Carregando...',
    zh: '加载中...',
    ar: 'جاري التحميل...',
    hi: 'लोड हो रहा है...',
  },
  error: {
    en: 'Error',
    es: 'Error',
    pt: 'Erro',
    zh: '错误',
    ar: 'خطأ',
    hi: 'त्रुटि',
  },
  noProducts: {
    en: 'No products found',
    es: 'No se encontraron productos',
    pt: 'Nenhum produto encontrado',
    zh: '未找到产品',
    ar: 'لم يتم العثور على منتجات',
    hi: 'कोई उत्पाद नहीं मिला',
  },
};

export const t = (key: string, language: Language): string => {
  if (!translations[key]) {
    console.warn(`Translation key not found: ${key}`);
    return key;
  }
  return translations[key][language] || translations[key].en || key;
};

export const isRTL = (language: Language): boolean => {
  return language === 'ar';
};

export const languages: { code: Language; name: string; flag: string; rtl: boolean }[] = [
  { code: 'en', name: 'English', flag: '🇺🇸', rtl: false },
  { code: 'es', name: 'Español', flag: '🇪🇸', rtl: false },
  { code: 'pt', name: 'Português', flag: '🇧🇷', rtl: false },
  { code: 'zh', name: '中文', flag: '🇨🇳', rtl: false },
  { code: 'ar', name: 'العربية', flag: '🇸🇦', rtl: true },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳', rtl: false },
];
