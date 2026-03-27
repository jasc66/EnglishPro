const t = {
  es: {
    nav: {
      links: [
        { href: '#sectors', label: 'Sectores' },
        { href: '#how', label: 'Metodología' },
        { href: '#about', label: 'Sobre mí' },
        { href: '#testimonials', label: 'Testimonios' },
        { href: '#pricing', label: 'Precios' },
        { href: '#faq', label: 'FAQ' },
      ],
      cta: 'Clase Gratis →',
    },

    hero: {
      tag: '★ Profesor nativo · Inglés especializado por sector',
      title: ['Aprende inglés de un', 'hablante nativo'],
      desc: 'Jean Pierre Schmidt Calvo, profesor nativo de inglés, te enseña el vocabulario, el acento y las situaciones reales de tu sector: medicina, tecnología, finanzas, derecho y más. El inglés auténtico que solo un nativo puede enseñar.',
      btnPrimary: '🎯 Clase Diagnóstico Gratis',
      btnSecondary: 'Ver sectores →',
      stats: [
        { num: '500+', label: 'Profesionales formados' },
        { num: '17', label: 'Sectores especializados' },
        { num: '98%', label: 'Tasa de satisfacción' },
      ],
      cards: [
        { label: 'Sector activo ahora', icon: '🏥', title: 'Profesional de Salud' },
        { label: 'Enfoque personalizado', icon: '💻', title: 'Desarrollador de Software' },
        { label: 'Nivel avanzado', icon: '⚖️', title: 'Profesional Legal' },
        { label: 'Conversación ejecutiva', icon: '📈', title: 'Director Financiero' },
      ],
    },

    trust: [
      { icon: '🌍', text: 'Profesor nativo de inglés' },
      { icon: '🎓', text: 'Certificado Cambridge CELTA' },
      { icon: '🌐', text: 'Clases online o presencial' },
      { icon: '⏱', text: 'Horarios flexibles' },
      { icon: '🔒', text: 'Sin permanencia mínima' },
    ],

    sectors: {
      tag: 'Sectores',
      title: 'Inglés adaptado a tu profesión',
      subtitle: 'Cada sector tiene su propio lenguaje. Aprende el vocabulario, las expresiones y los contextos específicos de tu campo laboral.',
      items: [
        {
          icon: '🏥', name: 'Salud & Medicina',
          desc: 'Médicos, enfermeros y fisioterapeutas que atienden pacientes internacionales, escriben informes o asisten a congresos.',
          topics: ['Historia clínica', 'Diagnóstico', 'Comunicación con pacientes', 'Investigación'],
        },
        {
          icon: '💻', name: 'Tecnología & IT',
          desc: 'Desarrolladores, PMs y analistas que trabajan en equipos remotos globales o presentan proyectos en inglés.',
          topics: ['Stand-ups', 'Code review', 'Documentación', 'Pitch técnico'],
        },
        {
          icon: '📊', name: 'Finanzas & Banca',
          desc: 'Analistas y directivos que negocian con clientes internacionales, leen reportes y asisten a conferencias.',
          topics: ['Reportes financieros', 'Negociación', 'Due diligence', 'Earnings calls'],
        },
        {
          icon: '⚖️', name: 'Legal & Compliance',
          desc: 'Abogados que redactan contratos, corresponden con firmas internacionales o aparecen en procedimientos.',
          topics: ['Contratos', 'Litigación', 'Correspondencia legal', 'Compliance'],
        },
        {
          icon: '🏗️', name: 'Ingeniería & Arquitectura',
          desc: 'Ingenieros y arquitectos que trabajan en proyectos internacionales, licitaciones o equipos multiculturales.',
          topics: ['Especificaciones técnicas', 'BIM / AutoCAD', 'Reuniones de proyecto', 'Safety reports'],
        },
        {
          icon: '🎯', name: 'Marketing & Ventas',
          desc: 'Marketers y comerciales que crean contenido global, presentan campañas o negocian con partners extranjeros.',
          topics: ['Copywriting', 'Presentaciones', 'Negociación', 'Email marketing'],
        },
        {
          icon: '🌿', name: 'Reforestación & Conservación',
          desc: 'Biólogos, gestores de proyectos ambientales y ONGs que trabajan con donantes, voluntarios y socios internacionales en Costa Rica.',
          topics: ['Grant writing', 'Informes ambientales', 'Negociación con donantes', 'Presentaciones internacionales'],
        },
        {
          icon: '🏡', name: 'Bienes Raíces',
          desc: 'Agentes y desarrolladores inmobiliarios que atienden compradores extranjeros, redactan contratos y cierran transacciones en inglés.',
          topics: ['Visitas y showings', 'Contratos de compra-venta', 'Due diligence', 'Atención al cliente extranjero'],
        },
        {
          icon: '💰', name: 'Inversiones & Finanzas',
          desc: 'Asesores financieros y gestores de fondos que captan inversores extranjeros, presentan portafolios y estructuran negocios internacionales.',
          topics: ['Pitch a inversores', 'Term sheets', 'Reportes de rendimiento', 'Networking internacional'],
        },
        {
          icon: '✈️', name: 'Turismo & Hospitalidad',
          desc: 'Guías, hoteleros y operadores turísticos que atienden visitantes angloparlantes y gestionan reservas o alianzas internacionales.',
          topics: ['Atención al turista', 'Reservas y cancelaciones', 'Tours en inglés', 'Reseñas y TripAdvisor'],
        },
        {
          icon: '🗺️', name: 'Relocation & Servicios al Expat',
          desc: 'Abogados de migración, consultores y agencias que acompañan a extranjeros en su proceso de residencia, compra de propiedad y establecimiento en Costa Rica.',
          topics: ['Residencia y visas', 'Trámites legales', 'Búsqueda de vivienda', 'Integración cultural'],
        },
        {
          icon: '🇨🇷', name: 'Español para Extranjeros',
          desc: 'Clases de español para expatriados, turistas de larga estadía e inversores que viven o trabajan en Costa Rica y necesitan comunicarse con confianza en su día a día.',
          topics: ['Español cotidiano', 'Español de negocios', 'Trámites y gestiones', 'Cultura costarricense'],
        },
      ],
    },

    how: {
      tag: 'Metodología',
      title: '¿Cómo funciona?',
      subtitle: 'Un proceso pensado para que progreses rápido sin perder tiempo en lo que ya sabes o en lo que no necesitas.',
      steps: [
        { icon: '🔍', title: 'Diagnóstico gratuito', desc: 'Evaluamos tu nivel actual y tus objetivos profesionales concretos en una sesión de 30 minutos.' },
        { icon: '📐', title: 'Plan personalizado', desc: 'Diseñamos un programa a medida con el vocabulario, situaciones y habilidades de tu sector.' },
        { icon: '🎯', title: 'Clases prácticas', desc: 'Simulaciones reales de tu entorno laboral: reuniones, correos, presentaciones y negociaciones.' },
        { icon: '📈', title: 'Seguimiento continuo', desc: 'Informes de progreso mensuales y ajuste del plan según tu evolución y nuevas necesidades.' },
      ],
    },

    about: {
      tag: 'Sobre el profesor',
      title: ['Jean Pierre Schmidt Calvo,', 'hablante nativo de inglés'],
      desc: 'Como hablante nativo de inglés con más de 10 años formando profesionales en Costa Rica, te enseño el inglés real que se usa en tu sector: el acento, el ritmo, las expresiones idiomáticas y la confianza que solo un nativo puede transmitir.',
      credentials: [
        'Hablante nativo de inglés',
        '10+ años formando profesionales en Costa Rica',
        'Experiencia con empresas multinacionales',
        'Especialización en 17 sectores profesionales',
        'Metodología comunicativa 100% en inglés',
      ],
      badge: '⭐ 4.9 / 5.0 · 500+ alumnos',
      floating1: '🎓 Cambridge CELTA',
      floating2: '🌍 Nativo de inglés',
      cta: 'Reservar clase diagnóstico →',
      linkedin: 'Ver perfil en LinkedIn →',
    },

    testimonials: {
      tag: 'Testimonios',
      title: 'Lo que dicen los profesionales',
      subtitle: 'Historias reales de personas en Costa Rica que ya hablan el inglés de su sector con confianza.',
      items: [
        {
          featured: true, stars: '★★★★★',
          text: '"En seis meses pasé de evitar reuniones con clientes angloparlantes a liderar presentaciones para inversores internacionales. El enfoque en mi sector marcó toda la diferencia. No perdí tiempo con gramática básica: cada clase era relevante para mi trabajo del día siguiente."',
          name: 'Carlos Mendoza', role: 'CFO · Empresa Fintech, San José',
          avatarBg: 'rgba(245,158,11,.2)', avatarEmoji: '👨‍💼',
        },
        {
          stars: '★★★★★',
          text: '"Como médica necesitaba comunicarme con colegas en congresos internacionales y con pacientes extranjeros. Las clases con vocabulario clínico específico me dieron la confianza que necesitaba en pocos meses."',
          name: 'Dra. Ana Ruiz', role: 'Médica Especialista · CCSS, Heredia',
          avatarBg: '#ECFDF5', avatarEmoji: '👩‍⚕️',
        },
        {
          stars: '★★★★★',
          text: '"Trabajo en un equipo 100% remoto con compañeros en UK y EEUU. Ahora me expreso con fluidez en los daily stand-ups y code reviews. Fue un antes y un después para mi carrera como desarrollador."',
          name: 'Luis Torres', role: 'Senior Dev · Startup tecnológica, Alajuela',
          avatarBg: '#EFF6FF', avatarEmoji: '👨‍💻',
        },
        {
          stars: '★★★★★',
          text: '"Necesitaba redactar contratos y negociar con firmas internacionales. El programa de inglés legal fue exactamente lo que necesitaba: preciso, práctico y aplicado desde el primer día."',
          name: 'Marta Sanz', role: 'Abogada Socia · Despacho internacional, San José',
          avatarBg: '#FEF3C7', avatarEmoji: '👩‍⚖️',
        },
      ],
    },

    pricing: {
      tag: 'Precios',
      title: 'Planes transparentes',
      subtitle: 'Sin permanencia, sin letra pequeña. Elige el plan que mejor se adapta a tu ritmo y objetivos. Precios en colones costarricenses.',
      popular: 'Más popular',
      plans: [
        {
          tier: 'Básico', name: 'Enfoque', price: '₡25.000', period: '/ clase',
          desc: 'Ideal para empezar o practicar puntualmente. Clases individuales a demanda sin compromiso.',
          popular: false,
          features: [
            { text: '1 clase semanal (60 min)', active: true },
            { text: 'Material especializado de sector', active: true },
            { text: 'Acceso a recursos digitales', active: true },
            { text: 'Grabación de la sesión', active: true },
            { text: 'Plan de estudios personalizado', active: false },
            { text: 'Seguimiento mensual de progreso', active: false },
            { text: 'Soporte por WhatsApp', active: false },
          ],
          btnStyle: 'btn-plan btn-plan-outline', btnText: 'Empezar ahora',
        },
        {
          tier: 'Profesional', name: 'Intensivo', price: '₡95.000', period: '/ mes',
          desc: 'El plan estrella para profesionales con objetivos claros y tiempo limitado. Máxima eficiencia.',
          popular: true,
          features: [
            { text: '2 clases semanales (60 min c/u)', active: true },
            { text: 'Plan de estudios personalizado', active: true },
            { text: 'Material especializado de sector', active: true },
            { text: 'Grabación de todas las sesiones', active: true },
            { text: 'Informe mensual de progreso', active: true },
            { text: 'Soporte por WhatsApp (L-V)', active: true },
            { text: 'Preparación para certificaciones', active: true },
          ],
          btnStyle: 'btn-plan btn-plan-primary', btnText: 'Reservar ahora',
        },
        {
          tier: 'Empresa', name: 'Corporate', price: '₡235.000', period: '/ mes',
          desc: 'Para equipos y departamentos. Clases grupales o individuales con informe de empresa.',
          popular: false,
          features: [
            { text: 'Hasta 5 personas por grupo', active: true },
            { text: 'Curriculum adaptado al equipo', active: true },
            { text: '3 sesiones semanales', active: true },
            { text: 'Informe corporativo mensual', active: true },
            { text: 'Simulaciones de situaciones reales', active: true },
            { text: 'Soporte prioritario', active: true },
            { text: 'Factura para empresa', active: true },
          ],
          btnStyle: 'btn-plan btn-plan-outline', btnText: 'Solicitar propuesta',
        },
      ],
    },

    faq: {
      tag: 'FAQ',
      title: 'Preguntas frecuentes',
      subtitle: 'Todo lo que necesitas saber antes de empezar.',
      items: [
        {
          q: '¿Qué nivel de inglés necesito para empezar?',
          a: 'Trabajamos con profesionales desde nivel B1 en adelante. Durante la clase diagnóstica gratuita evaluamos tu nivel real y diseñamos el programa a partir de ahí.',
        },
        {
          q: '¿Las clases son online o presenciales?',
          a: 'Ofrezco ambas modalidades. Las clases online se realizan por Zoom o Google Meet con pizarra interactiva. Las clases presenciales están disponibles en San José.',
        },
        {
          q: '¿Cuánto tiempo tarda en verse resultados?',
          a: 'Con 2 clases semanales, la mayoría de alumnos notan mejora significativa en 2-3 meses. En el plan personalizado siempre fijamos hitos medibles.',
        },
        {
          q: '¿Puedo cambiar de plan o cancelar cuando quiera?',
          a: 'Sí, completamente. No existe permanencia mínima. Puedes cambiar de plan o cancelar con un aviso de 7 días.',
        },
        {
          q: '¿Preparas para certificaciones como TOEFL, IELTS o Cambridge?',
          a: 'Sí. Preparo para Cambridge B2 First, C1 Advanced, C2 Proficiency, IELTS Academic y General, y TOEFL iBT.',
        },
        {
          q: '¿Ofrecen clases para empresas o grupos?',
          a: 'Sí. El plan Corporate está diseñado para departamentos o equipos de hasta 5 personas. Para grupos más grandes, contáctame directamente.',
        },
      ],
    },

    contact: {
      title: ['Reserva tu clase diagnóstico', 'gratuita'],
      desc: 'En 30 minutos evaluamos tu nivel, entendemos tus objetivos y te presentamos un plan concreto. Sin compromiso, sin venta agresiva.',
      perks: [
        { icon: '🎯', title: 'Diagnóstico real de nivel', desc: 'No un test genérico, sino una evaluación contextualizada a tu sector.' },
        { icon: '📋', title: 'Plan de acción inmediato', desc: 'Saldrás con objetivos claros y un camino definido, lo contrates o no.' },
        { icon: '⏱', title: '30 minutos, sin presión', desc: 'Sesión informal por videollamada. Sin formularios eternos.' },
      ],
      directTitle: 'Contacto directo',
      formTitle: 'Reserva tu sesión gratuita',
      formSubtitle: 'Completa el formulario y se abrirá WhatsApp con tu consulta lista para enviar.',
      labels: {
        nombre: 'Nombre *', email: 'Email *', sector: 'Tu sector *',
        nivel: 'Nivel aproximado *', objetivo: '¿Cuál es tu objetivo principal? *',
      },
      placeholders: {
        nombre: 'Tu nombre', email: 'tu@email.com',
        sector: 'Selecciona tu sector', nivel: 'Selecciona tu nivel',
        objetivo: 'Ej: Necesito hablar inglés con fluidez en reuniones con clientes internacionales…',
      },
      sectors: ['Salud & Medicina', 'Tecnología & IT', 'Finanzas & Banca', 'Legal & Compliance', 'Ingeniería & Arquitectura', 'Marketing & Ventas', 'Educación', 'Recursos Humanos', 'Otro'],
      levels: ['B1 – Intermedio', 'B2 – Intermedio-Alto', 'C1 – Avanzado', 'C2 – Casi nativo', 'No sé mi nivel'],
      btnWhatsapp: '📲 Enviar por WhatsApp',
      btnEmail: '✉️ Enviar por Email',
      waGreeting: 'Hola Jean Pierre, me interesa una clase diagnóstico gratuita. Estos son mis datos:%0A%0A',
      waName: '👤 *Nombre:*', waEmail: '✉️ *Email:*', waSector: '🏢 *Sector:*',
      waNivel: '📊 *Nivel:*', waObj: '🎯 *Objetivo:*',
      emailSubject: 'Consulta clase diagnóstico gratuita',
      emailGreeting: 'Hola Jean Pierre, me interesa una clase diagnóstico gratuita. Estos son mis datos:\n\n',
    },

    footer: {
      desc: 'Inglés especializado para profesionales en Costa Rica que quieren comunicarse con confianza en su sector.',
      cols: [
        {
          title: 'Sectores',
          links: [
            { label: 'Salud & Medicina', href: '#sectors' },
            { label: 'Tecnología', href: '#sectors' },
            { label: 'Finanzas', href: '#sectors' },
            { label: 'Legal', href: '#sectors' },
            { label: 'Ingeniería', href: '#sectors' },
          ],
        },
        {
          title: 'Servicios',
          links: [
            { label: 'Clases individuales', href: '#pricing' },
            { label: 'Plan Intensivo', href: '#pricing' },
            { label: 'Plan Corporativo', href: '#pricing' },
            { label: 'Metodología', href: '#how' },
            { label: 'Clase gratuita', href: '#contact' },
          ],
        },
        {
          title: 'Contacto',
          links: [
            { label: 'jean_pierre_schmidt_calvo@hotmail.com', href: 'mailto:jean_pierre_schmidt_calvo@hotmail.com' },
            { label: '+506 6012-0806 · WhatsApp', href: 'https://wa.me/50660120806' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jean-pierre-s-0094a034/' },
            { label: 'Instagram', href: '#' },
          ],
        },
      ],
      copy: 'EnglishPro Costa Rica · Todos los derechos reservados',
    },

    floatingCta: '✨ Clase gratis',
  },

  en: {
    nav: {
      links: [
        { href: '#sectors', label: 'Sectors' },
        { href: '#how', label: 'Methodology' },
        { href: '#about', label: 'About me' },
        { href: '#testimonials', label: 'Testimonials' },
        { href: '#pricing', label: 'Pricing' },
        { href: '#faq', label: 'FAQ' },
      ],
      cta: 'Free Class →',
    },

    hero: {
      tag: '★ Native speaker · Industry-specific English',
      title: ['Learn English from a', 'native speaker'],
      desc: 'Jean Pierre Schmidt Calvo, a native English speaker, teaches you the vocabulary, accent and real-world situations of your industry: medicine, technology, finance, law and more. Authentic English that only a native can teach.',
      btnPrimary: '🎯 Free Diagnostic Class',
      btnSecondary: 'View sectors →',
      stats: [
        { num: '500+', label: 'Professionals trained' },
        { num: '17', label: 'Specialized sectors' },
        { num: '98%', label: 'Satisfaction rate' },
      ],
      cards: [
        { label: 'Currently active sector', icon: '🏥', title: 'Healthcare Professional' },
        { label: 'Personalized approach', icon: '💻', title: 'Software Developer' },
        { label: 'Advanced level', icon: '⚖️', title: 'Legal Professional' },
        { label: 'Executive conversation', icon: '📈', title: 'Financial Director' },
      ],
    },

    trust: [
      { icon: '🌍', text: 'Native English teacher' },
      { icon: '🎓', text: 'Cambridge CELTA certified' },
      { icon: '🌐', text: 'Online or in-person classes' },
      { icon: '⏱', text: 'Flexible schedule' },
      { icon: '🔒', text: 'No minimum commitment' },
    ],

    sectors: {
      tag: 'Sectors',
      title: 'English tailored to your profession',
      subtitle: 'Every sector has its own language. Learn the vocabulary, expressions and specific contexts of your professional field.',
      items: [
        {
          icon: '🏥', name: 'Health & Medicine',
          desc: 'Doctors, nurses and physiotherapists who treat international patients, write reports or attend conferences.',
          topics: ['Clinical history', 'Diagnosis', 'Patient communication', 'Research'],
        },
        {
          icon: '💻', name: 'Technology & IT',
          desc: 'Developers, PMs and analysts working in global remote teams or presenting projects in English.',
          topics: ['Stand-ups', 'Code review', 'Documentation', 'Technical pitch'],
        },
        {
          icon: '📊', name: 'Finance & Banking',
          desc: 'Analysts and executives who negotiate with international clients, read reports and attend conferences.',
          topics: ['Financial reports', 'Negotiation', 'Due diligence', 'Earnings calls'],
        },
        {
          icon: '⚖️', name: 'Legal & Compliance',
          desc: 'Lawyers who draft contracts, correspond with international firms or appear in proceedings.',
          topics: ['Contracts', 'Litigation', 'Legal correspondence', 'Compliance'],
        },
        {
          icon: '🏗️', name: 'Engineering & Architecture',
          desc: 'Engineers and architects working on international projects, tenders or multicultural teams.',
          topics: ['Technical specifications', 'BIM / AutoCAD', 'Project meetings', 'Safety reports'],
        },
        {
          icon: '🎯', name: 'Marketing & Sales',
          desc: 'Marketers and sales professionals who create global content, present campaigns or negotiate with foreign partners.',
          topics: ['Copywriting', 'Presentations', 'Negotiation', 'Email marketing'],
        },
        {
          icon: '🌿', name: 'Reforestation & Conservation',
          desc: 'Biologists, environmental project managers and NGOs working with international donors, volunteers and partners in Costa Rica.',
          topics: ['Grant writing', 'Environmental reports', 'Donor negotiation', 'International presentations'],
        },
        {
          icon: '🏡', name: 'Real Estate',
          desc: 'Agents and developers who serve foreign buyers, draft contracts and close transactions in English.',
          topics: ['Property showings', 'Purchase agreements', 'Due diligence', 'Foreign client service'],
        },
        {
          icon: '💰', name: 'Investment & Finance',
          desc: 'Financial advisors and fund managers who attract foreign investors, present portfolios and structure international deals.',
          topics: ['Investor pitch', 'Term sheets', 'Performance reports', 'International networking'],
        },
        {
          icon: '✈️', name: 'Tourism & Hospitality',
          desc: 'Guides, hoteliers and tour operators who serve English-speaking visitors and manage international bookings or partnerships.',
          topics: ['Guest service', 'Bookings & cancellations', 'English-language tours', 'Reviews & TripAdvisor'],
        },
        {
          icon: '🗺️', name: 'Relocation & Expat Services',
          desc: 'Immigration lawyers, consultants and agencies who guide foreigners through residency, property purchase and settling in Costa Rica.',
          topics: ['Residency & visas', 'Legal procedures', 'Housing search', 'Cultural integration'],
        },
        {
          icon: '🇨🇷', name: 'Spanish for Foreigners',
          desc: 'Spanish classes for expats, long-stay visitors and investors living or working in Costa Rica who need to communicate with confidence in daily life.',
          topics: ['Everyday Spanish', 'Business Spanish', 'Errands & paperwork', 'Costa Rican culture'],
        },
      ],
    },

    how: {
      tag: 'Methodology',
      title: 'How does it work?',
      subtitle: 'A process designed for rapid progress — no time wasted on what you already know or what you don\'t need.',
      steps: [
        { icon: '🔍', title: 'Free diagnostic', desc: 'We assess your current level and concrete professional goals in a 30-minute session.' },
        { icon: '📐', title: 'Personalized plan', desc: 'We design a tailored program with the vocabulary, situations and skills of your sector.' },
        { icon: '🎯', title: 'Practical classes', desc: 'Real simulations of your work environment: meetings, emails, presentations and negotiations.' },
        { icon: '📈', title: 'Ongoing tracking', desc: 'Monthly progress reports and plan adjustments based on your growth and new needs.' },
      ],
    },

    about: {
      tag: 'About the teacher',
      title: ['Jean Pierre Schmidt Calvo,', 'native English speaker'],
      desc: 'As a native English speaker with over 10 years training professionals in Costa Rica, I teach you the real English used in your sector: the accent, rhythm, idiomatic expressions and the confidence only a native can convey.',
      credentials: [
        'Native English speaker',
        '10+ years training professionals in Costa Rica',
        'Experience with multinational companies',
        'Specialization in 17 professional sectors',
        '100% communicative methodology in English',
      ],
      badge: '⭐ 4.9 / 5.0 · 500+ students',
      floating1: '🎓 Cambridge CELTA',
      floating2: '🌍 Native speaker',
      cta: 'Book diagnostic class →',
      linkedin: 'View LinkedIn profile →',
    },

    testimonials: {
      tag: 'Testimonials',
      title: 'What professionals say',
      subtitle: 'Real stories from people in Costa Rica who already speak the English of their sector with confidence.',
      items: [
        {
          featured: true, stars: '★★★★★',
          text: '"In six months I went from avoiding meetings with English-speaking clients to leading presentations for international investors. The sector-specific focus made all the difference. No time wasted on basic grammar — every class was relevant to the next day\'s work."',
          name: 'Carlos Mendoza', role: 'CFO · Fintech Company, San José',
          avatarBg: 'rgba(245,158,11,.2)', avatarEmoji: '👨‍💼',
        },
        {
          stars: '★★★★★',
          text: '"As a doctor I needed to communicate with colleagues at international conferences and with foreign patients. Classes with specific clinical vocabulary gave me the confidence I needed in just a few months."',
          name: 'Dr. Ana Ruiz', role: 'Specialist Physician · CCSS, Heredia',
          avatarBg: '#ECFDF5', avatarEmoji: '👩‍⚕️',
        },
        {
          stars: '★★★★★',
          text: '"I work in a 100% remote team with colleagues in the UK and US. Now I express myself fluently in daily stand-ups and code reviews. It was a turning point in my career as a developer."',
          name: 'Luis Torres', role: 'Senior Dev · Tech Startup, Alajuela',
          avatarBg: '#EFF6FF', avatarEmoji: '👨‍💻',
        },
        {
          stars: '★★★★★',
          text: '"I needed to draft contracts and negotiate with international firms. The legal English program was exactly what I needed: precise, practical and applied from day one."',
          name: 'Marta Sanz', role: 'Partner Attorney · International Firm, San José',
          avatarBg: '#FEF3C7', avatarEmoji: '👩‍⚖️',
        },
      ],
    },

    pricing: {
      tag: 'Pricing',
      title: 'Transparent plans',
      subtitle: 'No lock-in, no fine print. Choose the plan that best fits your pace and goals. Prices in Costa Rican colones.',
      popular: 'Most popular',
      plans: [
        {
          tier: 'Basic', name: 'Focus', price: '₡25.000', period: '/ class',
          desc: 'Ideal for getting started or occasional practice. On-demand individual classes with no commitment.',
          popular: false,
          features: [
            { text: '1 class per week (60 min)', active: true },
            { text: 'Sector-specialized material', active: true },
            { text: 'Access to digital resources', active: true },
            { text: 'Session recording', active: true },
            { text: 'Personalized study plan', active: false },
            { text: 'Monthly progress tracking', active: false },
            { text: 'WhatsApp support', active: false },
          ],
          btnStyle: 'btn-plan btn-plan-outline', btnText: 'Get started',
        },
        {
          tier: 'Professional', name: 'Intensive', price: '₡95.000', period: '/ month',
          desc: 'The flagship plan for professionals with clear goals and limited time. Maximum efficiency.',
          popular: true,
          features: [
            { text: '2 classes per week (60 min each)', active: true },
            { text: 'Personalized study plan', active: true },
            { text: 'Sector-specialized material', active: true },
            { text: 'Recording of all sessions', active: true },
            { text: 'Monthly progress report', active: true },
            { text: 'WhatsApp support (Mon–Fri)', active: true },
            { text: 'Certification preparation', active: true },
          ],
          btnStyle: 'btn-plan btn-plan-primary', btnText: 'Book now',
        },
        {
          tier: 'Business', name: 'Corporate', price: '₡235.000', period: '/ month',
          desc: 'For teams and departments. Group or individual classes with a corporate report.',
          popular: false,
          features: [
            { text: 'Up to 5 people per group', active: true },
            { text: 'Team-tailored curriculum', active: true },
            { text: '3 sessions per week', active: true },
            { text: 'Monthly corporate report', active: true },
            { text: 'Real-scenario simulations', active: true },
            { text: 'Priority support', active: true },
            { text: 'Company invoice', active: true },
          ],
          btnStyle: 'btn-plan btn-plan-outline', btnText: 'Request proposal',
        },
      ],
    },

    faq: {
      tag: 'FAQ',
      title: 'Frequently asked questions',
      subtitle: 'Everything you need to know before getting started.',
      items: [
        {
          q: 'What level of English do I need to start?',
          a: 'We work with professionals from B1 level upwards. During the free diagnostic class we assess your real level and design the program from there.',
        },
        {
          q: 'Are classes online or in-person?',
          a: 'Both options are available. Online classes are held via Zoom or Google Meet with an interactive whiteboard. In-person classes are available in San José.',
        },
        {
          q: 'How long does it take to see results?',
          a: 'With 2 classes per week, most students notice significant improvement within 2–3 months. The personalized plan always sets measurable milestones.',
        },
        {
          q: 'Can I change my plan or cancel at any time?',
          a: 'Yes, absolutely. There is no minimum commitment. You can change plans or cancel with 7 days\' notice.',
        },
        {
          q: 'Do you prepare for certifications like TOEFL, IELTS or Cambridge?',
          a: 'Yes. I prepare for Cambridge B2 First, C1 Advanced, C2 Proficiency, IELTS Academic and General, and TOEFL iBT.',
        },
        {
          q: 'Do you offer classes for companies or groups?',
          a: 'Yes. The Corporate plan is designed for departments or teams of up to 5 people. For larger groups, contact me directly.',
        },
      ],
    },

    contact: {
      title: ['Book your free', 'diagnostic class'],
      desc: 'In 30 minutes we assess your level, understand your goals and present a concrete plan. No commitment, no hard sell.',
      perks: [
        { icon: '🎯', title: 'Real level assessment', desc: 'Not a generic test — a contextual evaluation specific to your sector.' },
        { icon: '📋', title: 'Immediate action plan', desc: 'You\'ll leave with clear goals and a defined path, whether you hire or not.' },
        { icon: '⏱', title: '30 minutes, no pressure', desc: 'Informal video call session. No endless forms.' },
      ],
      directTitle: 'Direct contact',
      formTitle: 'Book your free session',
      formSubtitle: 'Fill in the form and WhatsApp will open with your message ready to send.',
      labels: {
        nombre: 'Name *', email: 'Email *', sector: 'Your sector *',
        nivel: 'Approximate level *', objetivo: 'What is your main goal? *',
      },
      placeholders: {
        nombre: 'Your name', email: 'you@email.com',
        sector: 'Select your sector', nivel: 'Select your level',
        objetivo: 'E.g. I need to speak English fluently in meetings with international clients…',
      },
      sectors: ['Health & Medicine', 'Technology & IT', 'Finance & Banking', 'Legal & Compliance', 'Engineering & Architecture', 'Marketing & Sales', 'Education', 'Human Resources', 'Other'],
      levels: ['B1 – Intermediate', 'B2 – Upper-Intermediate', 'C1 – Advanced', 'C2 – Near-native', 'I don\'t know my level'],
      btnWhatsapp: '📲 Send via WhatsApp',
      btnEmail: '✉️ Send via Email',
      waGreeting: 'Hi Jean Pierre, I\'m interested in a free diagnostic class. Here are my details:%0A%0A',
      waName: '👤 *Name:*', waEmail: '✉️ *Email:*', waSector: '🏢 *Sector:*',
      waNivel: '📊 *Level:*', waObj: '🎯 *Goal:*',
      emailSubject: 'Free diagnostic class inquiry',
      emailGreeting: 'Hi Jean Pierre, I\'m interested in a free diagnostic class. Here are my details:\n\n',
    },

    footer: {
      desc: 'Specialized English for professionals in Costa Rica who want to communicate with confidence in their sector.',
      cols: [
        {
          title: 'Sectors',
          links: [
            { label: 'Health & Medicine', href: '#sectors' },
            { label: 'Technology', href: '#sectors' },
            { label: 'Finance', href: '#sectors' },
            { label: 'Legal', href: '#sectors' },
            { label: 'Engineering', href: '#sectors' },
          ],
        },
        {
          title: 'Services',
          links: [
            { label: 'Individual classes', href: '#pricing' },
            { label: 'Intensive plan', href: '#pricing' },
            { label: 'Corporate plan', href: '#pricing' },
            { label: 'Methodology', href: '#how' },
            { label: 'Free class', href: '#contact' },
          ],
        },
        {
          title: 'Contact',
          links: [
            { label: 'jean_pierre_schmidt_calvo@hotmail.com', href: 'mailto:jean_pierre_schmidt_calvo@hotmail.com' },
            { label: '+506 6012-0806 · WhatsApp', href: 'https://wa.me/50660120806' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jean-pierre-s-0094a034/' },
            { label: 'Instagram', href: '#' },
          ],
        },
      ],
      copy: 'EnglishPro Costa Rica · All rights reserved',
    },

    floatingCta: '✨ Free class',
  },
};

export default t;
