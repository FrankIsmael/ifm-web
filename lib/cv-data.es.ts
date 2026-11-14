import { shared } from './cv-shared';
import type { CvData } from './cv-data';

// Spanish content. Typed as CvData so a key missing here fails the build.
export const cvDataEs: CvData = {
  ...shared,
  tagline: 'Ingeniero full stack · Proyectos por contrato y tiempo completo',
  location: 'México',
  meta: {
    title: 'Ingeniero Full Stack · Por contrato y tiempo completo',
    description:
      'Ingeniero full stack en México, disponible para proyectos por contrato y puestos de tiempo completo. React, Next.js, NestJS, PostgreSQL y AWS.',
    ogLocale: 'es_MX',
    ogFooter: 'Por contrato y tiempo completo · Next.js · AWS',
  },
  ui: {
    skipLink: 'Saltar al contenido',
    technologies: 'Tecnologías',
    nav: {
      about: 'Sobre mí',
      workWithMe: 'Trabaja conmigo',
      experience: 'Experiencia',
      work: 'Proyectos',
      robbie: 'Robbie',
      contact: 'Hablemos',
      menu: 'Menú',
      close: 'Cerrar',
      openNav: 'Abrir navegación',
      closeNav: 'Cerrar navegación',
      mainNav: 'Navegación principal',
      home: 'Ismael Francisco, inicio',
      switchLabel: 'English',
      switchAria: 'View this site in English',
    },
    hero: {
      cta: 'Ver los proyectos',
      portraitAlt: 'Ismael sonriendo frente a su laptop',
    },
    about: {
      label: 'Un poco sobre mí',
      title: 'Me gusta entender cómo funcionan las cosas.',
      toolkit: 'Mis herramientas de todos los días',
      languages: 'Idiomas',
    },
    experience: {
      label: 'Experiencia',
      title: 'Dónde he trabajado.',
      readCv: 'Ver mi CV',
      glance: 'Experiencia en resumen',
      current: 'Actualmente aquí',
      education: 'Educación',
      certifications: 'Certificaciones',
      issued: 'emitida en',
    },
    projects: {
      label: 'Trabajo seleccionado',
      title: 'Proyectos en los que he trabajado.',
      contribution: 'Mi contribución',
      visit: 'Visitar proyecto',
      privateNote: 'Producto privado de un cliente',
      metrics: 'Mejoras medidas',
    },
    contact: {
      label: '¿Qué sigue?',
      projectInquiry: 'Consulta sobre un proyecto',
      roleInquiry: 'Consulta sobre una vacante',
      downloadCv: 'Descargar CV',
    },
    footer: {
      robbie: 'Robbie',
      privacy: 'Privacidad',
      terms: 'Términos',
      agents: 'Información para agentes de IA',
      top: 'Volver arriba',
    },
    chat: {
      title: 'Pregúntale a mi agente',
      dialog: 'Chatea con mi agente',
      openFull: 'Abrir la app completa',
      close: 'Cerrar chat',
    },
  },
  headline: 'Llevo productos web a producción.',
  headlineAccent: 'De la API a AWS.',
  availability: 'Disponible para proyectos por contrato y tiempo completo',
  subheadline:
    'Desarrollo aplicaciones web en producción, APIs e infraestructura en AWS desde México, para proyectos por contrato y equipos de tiempo completo.',
  summary:
    'Llevo productos en React, Next.js y NestJS a producción en AWS: búsqueda, pagos, mapas y la infraestructura que los mantiene funcionando. Entre mi trabajo reciente: reducir la búsqueda de un marketplace de 382 consultas a la base de datos a 12.',
  aboutExtra:
    'Mi camino empezó en la ingeniería mecatrónica en el IPN. Esa curiosidad por saber cómo funcionan las cosas sigue marcando mi forma de construir: entender el sistema completo, cuidar los detalles y hacer algo útil.',
  currentFocus:
    'Últimamente exploro agentes de IA e incorporo flujos de trabajo asistidos por IA a mi desarrollo diario con Claude Code y Cursor.',
  ctaHeadline: '¿Te interesa que',
  ctaAccent: 'trabajemos juntos?',
  ctaSubtext:
    'Estoy disponible para proyectos por contrato y puestos de tiempo completo. Cuéntame sobre el producto que necesitas lanzar o la vacante que quieres cubrir.',
  experienceAside:
    'Disponible para proyectos por contrato y puestos de tiempo completo.',
  workAside:
    'Proyectos por contrato en marketplaces, pagos y AWS, además de algunos proyectos personales.',
  workWithMe: {
    label: 'Trabaja conmigo',
    title: 'Producto de principio a fin.',
    aside: 'El mismo stack que uso hoy en productos de clientes.',
  },
  services: [
    {
      title: 'Desarrollo de producto full stack',
      description:
        'Experiencias públicas, de proveedores y de administración en Next.js y React: formularios, dashboards, mapas y carga de archivos multimedia.',
    },
    {
      title: 'APIs y datos',
      description:
        'APIs en NestJS con Prisma, autenticación, tareas programadas, y modelado y migraciones en PostgreSQL.',
    },
    {
      title: 'Configuración y operación en AWS',
      description:
        'Amplify, Elastic Beanstalk, RDS y S3 para frontends, APIs y archivos: configuración y administración continua.',
    },
    {
      title: 'Agentes de IA y automatización con WhatsApp',
      description:
        'Agentes de IA que trabajan por WhatsApp sobre la plataforma oficial de WhatsApp Business: respuestas a clientes, actualización de catálogo y preguntas sobre tus datos.',
      href: '/robbie',
    },
    {
      title: 'Pagos',
      description:
        'Compras con Stripe y flujos de contratación integrados en apps de Next.js con persistencia en PostgreSQL.',
    },
  ],
  engagements: [
    {
      title: 'Por contrato / freelance',
      points: [
        'Trabajo de producto con alcance definido en Next.js, NestJS y PostgreSQL.',
        'Configuración de AWS e infraestructura para apps que necesitan salir a producción.',
        'Optimización de rendimiento en búsqueda, mapas y flujos de pago.',
      ],
    },
    {
      title: 'Puestos de tiempo completo',
      points: [
        'Puestos full stack, frontend o backend con equipos distribuidos.',
        'Trabajo práctico desde el primer endpoint hasta el despliegue.',
        'Remoto desde México, en inglés y español.',
      ],
    },
  ],
  processSteps: [
    {
      title: 'Descubrir',
      description:
        'Hablamos del producto, de los usuarios y de qué significa que esté terminado.',
    },
    {
      title: 'Definir',
      description:
        'Propongo un alcance claro, el stack y cómo sabremos que quedó en producción.',
    },
    {
      title: 'Construir',
      description:
        'Implemento en la app, la API y la infraestructura, con avances que puedes seguir.',
    },
    {
      title: 'Lanzar',
      description:
        'Desplegamos, medimos y dejamos el sistema en un estado que tu equipo puede seguir operando.',
    },
  ],
  trustSignals: [
    { value: '6+', label: 'años en software' },
    { value: '3', label: 'empresas' },
    { value: '2', label: 'certificaciones de AWS' },
  ],
  languages: ['Español (nativo)', 'Inglés (profesional)'],
  experience: [
    {
      company: 'ZirconTech',
      initials: 'Z',
      role: 'Desarrollador Full Stack',
      location: 'Uruguay · Remoto',
      period: 'Nov 2021 — Actualidad',
      current: true,
      summary: 'Del primer endpoint de la API al despliegue en producción.',
      description: [
        'Desarrollo funcionalidades en las experiencias públicas, de proveedores y de administración con Next.js, React y TypeScript, incluyendo formularios, dashboards, mapas y carga de archivos multimedia.',
        'Desarrollo APIs en NestJS con Prisma, autenticación, tareas programadas, y modelado y migraciones de bases de datos PostgreSQL.',
        'Lideré la configuración de AWS y la administración continua de la infraestructura de Repose y Scene Hunters, mientras contribuía en todo el stack.',
        'Reduje las consultas de búsqueda de Repose de 382 a 12 y el tamaño de la respuesta en cerca de 55% en benchmarks.',
      ],
      tech: ['Next.js', 'NestJS', 'PostgreSQL', 'AWS'],
    },
    {
      company: 'iVoy',
      initials: 'iv',
      role: 'Desarrollador Frontend',
      location: 'Ciudad de México',
      period: 'Sep 2019 — Ago 2021',
      current: false,
      summary: 'Ayudar a las personas a seguir su entrega, paso a paso.',
      description: [
        'Desarrollé experiencias en React para rastreo de paquetes, confirmación de identidad, ayuda y actualización de direcciones.',
        'Conecté queries y subscriptions de GraphQL con Apollo para mostrar el estado y la ubicación de las entregas casi en tiempo real.',
        'Desarrollé mapas interactivos y flujos de direcciones con Leaflet, además de componentes reutilizables y operaciones de GraphQL tipadas.',
      ],
      tech: ['React', 'TypeScript', 'GraphQL', 'Leaflet'],
    },
    {
      company: 'Accenture México',
      initials: '>',
      role: 'Desarrollador Backend',
      location: 'Ciudad de México',
      period: 'Jun 2018 — Ene 2019',
      current: false,
      summary: 'Una base en ingeniería backend y sistemas empresariales.',
      description: [
        'Desarrollé servicios backend con Java y Spring Framework, contribuyendo a integraciones de sistemas empresariales y al desarrollo de servicios.',
      ],
      tech: ['Java', 'Spring', 'SQL'],
    },
  ],
  education: [
    {
      school: 'Instituto Politécnico Nacional',
      degree: 'Ingeniería Mecatrónica · UPIITA',
      period: '2011 — 2018',
    },
  ],
  certifications: [
    {
      title: 'Solutions Architect — Associate',
      issuer: 'AWS',
      issued: 'mar 2025',
    },
    { title: 'Cloud Practitioner', issuer: 'AWS', issued: 'ene 2025' },
  ],
  projects: [
    {
      id: 'repose',
      name: 'Repose',
      tag: 'Full stack / Marketplace',
      status: 'Trabajo para cliente',
      description: 'Un marketplace de servicios funerarios.',
      detail:
        'Un marketplace de servicios funerarios con tres apps de Next.js para familias, proveedores y administradores, respaldadas por una API compartida en NestJS y una base de datos PostgreSQL.',
      role: 'Ingeniero full stack · Lideré la configuración y administración de AWS',
      team: '5 ingenieros: 2 de backend, 2 de frontend y yo en todo el stack.',
      impact: [
        { value: '~55% menor', label: 'Tamaño de la respuesta de búsqueda' },
        { value: '382 → 12', label: 'Consultas a la base de datos por búsqueda' },
        {
          value: '58 → 4',
          label: 'Commits de React por cada ~2 segundos de arrastre del mapa',
        },
      ],
      solution: [
        'Trabajé en las tres apps de Next.js y en la API de NestJS: búsqueda de proveedores, flujos de contratación y pagos con Stripe.',
        'Lideré la configuración y administración de AWS: Amplify para los frontends, Elastic Beanstalk para la API, RDS para PostgreSQL y S3 para archivos.',
        'Eliminé datos de reseñas y geocodificación que no se usaban en las respuestas de búsqueda y corregí consultas N+1 a la base de datos.',
        'Reduje las actualizaciones de React provocadas por el mapa y estabilicé las props de las tarjetas para que las tarjetas de proveedores que permanecían visibles no se volvieran a renderizar durante el arrastre medido.',
      ],
      tech: ['Next.js', 'NestJS', 'PostgreSQL', 'Stripe', 'AWS'],
      url: '',
      note: '',
    },
    {
      id: 'scene-hunters',
      name: 'Scene Hunters',
      tag: 'Full stack / Entretenimiento',
      status: 'Trabajo para cliente',
      description: 'Una escena. Dos películas. ¿Puedes nombrarlas?',
      detail:
        'Un juego de adivinar películas a partir de escenas generadas con IA, con sistema de puntuación, tabla de los 20 mejores, pagos y un espacio de administración.',
      role: 'Ingeniero full stack · Lideré la configuración y administración de AWS',
      team: '2 ingenieros: yo en todo el stack y 1 ingeniero de frontend.',
      solution: [
        'Desarrollé la aplicación de Next.js: lógica del juego, puntuación, tabla de los 20 mejores y administración de contenido.',
        'Integré compras con Stripe, persistencia en PostgreSQL y correo transaccional.',
        'Lideré la configuración de AWS y la administración continua de la infraestructura, junto con el desarrollo full stack.',
      ],
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'AWS'],
      url: 'https://scenehunters.com',
      note: '',
    },
    {
      id: 'acp-agent',
      name: 'ACP Agent',
      tag: 'IA / Proyecto personal',
      status: 'En desarrollo',
      description: 'Un agente de IA con su propio espacio de trabajo.',
      detail:
        'Una interfaz web para un agente que corre en una microVM remota. Sigue su trabajo en tiempo real, retoma conversaciones y previsualiza o edita en tu navegador los artefactos que genera.',
      solution: [
        'Conversaciones en streaming con actividad de herramientas visible y selección de modelo.',
        'Integración con WhatsApp: vincula tu cuenta e interactúa con el agente en grupos seleccionados, compartiendo el contexto de la conversación con el chat web.',
        'Un espacio de artefactos para editar y descargar código, documentos y apps HTML, con vista previa de documentos y HTML, y ediciones guardadas localmente en tu navegador.',
        'Interfaces en inglés y español, además de un demo público con límites de uso para invitados.',
      ],
      tech: ['React Router', 'TypeScript', 'Node.js', 'ACP', 'WebSocket / SSE'],
      url: 'https://acp-agent.ismaelfrancisco.tech/',
      note: 'Un proyecto en curso construido sobre la base del taller Sistemas Agénticos, con goose como agente de IA.',
    },
  ],
  pages: {
    learnMore: 'Ver más',
    robbie: {
      metaTitle: 'Robbie · Agente de IA en WhatsApp para tiendas',
      metaDescription:
        'Robbie es un agente de IA en WhatsApp para tiendas pequeñas: atiende a tus clientes, mantiene tu catálogo al día y responde preguntas sobre tus ventas, en la plataforma oficial de WhatsApp Business.',
      label: 'Producto',
      title: 'Robbie, un agente de IA en WhatsApp para tiendas.',
      intro:
        'Robbie trabaja donde ya están tus clientes. Funciona sobre la plataforma oficial de WhatsApp Business (Cloud API) y lo desarrolla y opera {legalName}, ingeniero de software en México.',
      capabilitiesTitle: 'Qué hace Robbie',
      capabilities: [
        {
          title: 'Atiende a tus clientes',
          description:
            'Responde preguntas de productos, precios y disponibilidad en tu número de WhatsApp, usando tu catálogo como fuente, y te pasa la conversación cuando hace falta una persona.',
        },
        {
          title: 'Administra tu catálogo desde el chat',
          description:
            'Agrega o actualiza productos enviando un mensaje y una foto. Los cambios aparecen en tu tienda o sitio de catálogo.',
        },
        {
          title: 'Responde preguntas sobre tus ventas',
          description:
            'Pregunta en lenguaje natural —qué se vendió más este mes, qué productos se están acabando— y obtén la respuesta a partir de tus propios datos.',
        },
      ],
      stepsTitle: 'Cómo empezar',
      steps: [
        {
          title: 'Conecta',
          description:
            'Conectas tu cuenta de WhatsApp Business con el registro integrado (Embedded Signup) de Meta. Tu número, tu cuenta y tus datos siguen siendo tuyos.',
        },
        {
          title: 'Configura',
          description:
            'Cargamos tu catálogo, horarios y tono, y acordamos qué responde Robbie y cuándo te pasa la conversación.',
        },
        {
          title: 'Arranca',
          description:
            'Robbie empieza a responder en tu número. Las plantillas de mensajes y los cargos por conversación se administran en tu propia cuenta de WhatsApp Business.',
        },
      ],
      builtTitle: 'Cómo está hecho',
      built:
        'Robbie es un agente personalizado construido sobre goose, un runtime de agentes de código abierto, y corre en un entorno aislado en la nube. Yo desarrollé la interfaz web, la capa de streaming en tiempo real y la integración con WhatsApp. Prueba la versión web:',
      dataNote: 'Cómo se manejan los datos de clientes y los mensajes de WhatsApp:',
      ctaTitle: '¿Quieres a Robbie en tu negocio?',
      ctaText: 'Cuéntame de tu tienda y de cómo te contactan tus clientes hoy.',
      ctaSubject: 'Robbie para mi negocio',
    },
    privacy: {
      metaTitle: 'Aviso de privacidad',
      metaDescription:
        'Cómo Ismael Francisco Moreno recaba, usa y protege datos personales en este sitio y en servicios de WhatsApp como Robbie.',
      label: 'Legal',
      title: 'Aviso de privacidad',
      updatedLabel: 'Última actualización',
      updated: '13 de noviembre de 2026',
      intro:
        'Este aviso explica cómo se tratan los datos personales en ismaelfrancisco.tech y en los servicios de software que presto, incluido Robbie, un agente de IA en WhatsApp para negocios. Se emite conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).',
      sections: [
        {
          heading: '1. Responsable',
          blocks: [
            {
              p: '{legalName}, persona física que presta servicios de consultoría en computación en México, con domicilio en {address}. Contacto: {email}.',
            },
          ],
        },
        {
          heading: '2. Dos roles',
          blocks: [
            {
              list: [
                'Visitantes del sitio y posibles clientes: soy responsable de los datos descritos en la sección 3.',
                'Servicios de WhatsApp para negocios: cuando un negocio usa Robbie, ese negocio es responsable de los datos de sus clientes y yo los trato solo por su cuenta y conforme a sus instrucciones, como se describe en la sección 4.',
              ],
            },
          ],
        },
        {
          heading: '3. Sitio web y contacto directo',
          blocks: [
            { p: 'Datos que se recaban:' },
            {
              list: [
                'Lo que me envías por correo: tu nombre, correo, empresa y el contenido de tu mensaje.',
                'Datos de uso recabados por Vercel Analytics y Google Analytics: páginas visitadas, ubicación aproximada a partir de tu dirección IP, tipo de dispositivo y navegador.',
                'Los mensajes que envías al asistente de chat de este sitio, usados para responderte.',
              ],
            },
            {
              p: 'Finalidades: responder consultas, preparar propuestas y contratos, y entender cómo se usa el sitio. No vendo datos personales ni los uso para publicidad.',
            },
          ],
        },
        {
          heading: '4. Datos de WhatsApp tratados para negocios clientes',
          blocks: [
            {
              p: 'Cuando un negocio conecta su cuenta de WhatsApp Business a Robbie mediante la plataforma de WhatsApp Business, se pueden tratar los siguientes datos:',
            },
            {
              list: [
                'Números de teléfono y nombres de perfil de WhatsApp de los clientes del negocio.',
                'Contenido de los mensajes, incluidos textos, imágenes, audios y documentos.',
                'Metadatos de los mensajes, como fecha, hora y estado de entrega.',
                'Identificadores de la cuenta de WhatsApp Business del negocio, plantillas de mensajes y datos de catálogo o productos.',
              ],
            },
            {
              p: 'Estos datos se usan solo para prestar el servicio que el negocio solicitó: recibir y responder mensajes, administrar su catálogo y generar reportes para ese negocio. No se usan para entrenar modelos de IA, no se venden y no se comparten con otros clientes.',
            },
            {
              p: 'El negocio es responsable de obtener el consentimiento (opt-in) de sus clientes para recibir mensajes de WhatsApp y de informarles sobre este tratamiento.',
            },
          ],
        },
        {
          heading: '5. Proveedores de servicio',
          blocks: [
            { p: 'Los datos se tratan con estos proveedores, solo en la medida necesaria para operar los servicios:' },
            {
              list: [
                'Meta Platforms (plataforma de WhatsApp Business): envío y recepción de mensajes de WhatsApp.',
                'Anthropic (modelos Claude Haiku, Sonnet y Opus): generación de las respuestas del agente en conversaciones de WhatsApp de clientes. Conforme a los términos comerciales de Anthropic, estos datos no se usan para entrenar sus modelos.',
                'InstaBox (instabox.sh): máquinas virtuales aisladas en la nube (microVMs) donde corre el agente.',
                'EasyBits (easybits.cloud, México): almacenamiento de archivos y entornos sandbox que usa el agente.',
                'Vercel y Google: alojamiento y analítica del sitio web.',
                'DeepSeek (Hangzhou DeepSeek Artificial Intelligence Co., Ltd., China): puede usarse solo para el asistente de demostración pública de este sitio. Los datos de WhatsApp de clientes nunca se envían a DeepSeek.',
              ],
            },
            {
              p: 'Algunos de estos proveedores se encuentran fuera de México. Las transferencias se realizan solo en la medida necesaria para prestar los servicios.',
            },
          ],
        },
        {
          heading: '6. Conservación y seguridad',
          blocks: [
            {
              p: 'Los correos de consulta se conservan mientras sea necesario para atender la conversación y cualquier contrato que resulte. Los datos de WhatsApp se conservan mientras el negocio use el servicio y se eliminan dentro de los 30 días siguientes a que el negocio se desconecte o solicite su eliminación, salvo que la ley exija otra cosa. El acceso está restringido, las credenciales se guardan de forma segura y los datos viajan por conexiones cifradas.',
            },
          ],
        },
        {
          id: 'data-deletion',
          heading: '7. Tus derechos y eliminación de datos',
          blocks: [
            {
              p: 'Puedes ejercer tus derechos de acceso, rectificación, cancelación u oposición (derechos ARCO), o revocar tu consentimiento, escribiendo a {email} con tu nombre, el número de teléfono o correo involucrado y tu solicitud. Responderé dentro de 20 días hábiles.',
            },
            {
              p: 'Si eres cliente de un negocio que usa Robbie, también puedes contactar directamente a ese negocio. Para eliminar datos de conversaciones de WhatsApp, envía la solicitud a {email}; se eliminarán dentro de 30 días y recibirás una confirmación.',
            },
          ],
        },
        {
          heading: '8. Cambios',
          blocks: [
            { p: 'Los cambios a este aviso se publican en esta página con una nueva fecha de “Última actualización”.' },
          ],
        },
      ],
    },
    terms: {
      metaTitle: 'Términos del servicio',
      metaDescription:
        'Términos de los servicios de software y del agente de IA en WhatsApp (Robbie) que presta Ismael Francisco Moreno.',
      label: 'Legal',
      title: 'Términos del servicio',
      updatedLabel: 'Última actualización',
      updated: '13 de noviembre de 2026',
      intro:
        'Estos términos aplican a los servicios de software que {legalName} (“yo”) presta a negocios (“tú”), incluido Robbie, un agente de IA en WhatsApp. Una propuesta o contrato firmado para un proyecto específico prevalece en lo que difiera.',
      sections: [
        {
          heading: '1. Servicios',
          blocks: [
            {
              p: 'Presto servicios de desarrollo de software, consultoría y agentes de IA. Robbie se conecta a tu cuenta de WhatsApp Business mediante la plataforma oficial de WhatsApp Business para atender a tus clientes, administrar tu catálogo y darte reportes de tus datos, según lo acordado para tu cuenta.',
            },
          ],
        },
        {
          heading: '2. Tu cuenta de WhatsApp',
          blocks: [
            {
              list: [
                'Conectas tu propia cuenta de WhatsApp Business y tu número, y siguen siendo tuyos. Puedes desconectar a Robbie en cualquier momento.',
                'Debes cumplir los Términos del servicio de WhatsApp Business y las Políticas de WhatsApp Business y Comercio, incluido obtener el consentimiento (opt-in) de tus clientes antes de enviarles mensajes.',
                'Los cargos de conversaciones y plantillas de WhatsApp los cobra Meta al método de pago de tu cuenta de WhatsApp Business, por separado de mis honorarios.',
              ],
            },
          ],
        },
        {
          heading: '3. Uso aceptable',
          blocks: [
            {
              p: 'No puedes usar los servicios para enviar spam, contenido ilícito o mensajes a personas que no aceptaron recibirlos, ni para vender productos prohibidos por las políticas de WhatsApp. Puedo suspender el servicio si se usa en contra de estos términos o de las políticas de Meta.',
            },
          ],
        },
        {
          heading: '4. Respuestas generadas por IA',
          blocks: [
            {
              p: 'Robbie genera respuestas automáticamente a partir de tu información y puede equivocarse. Eres responsable de la información de tu negocio que proporcionas y de revisar cómo el agente representa a tu negocio; los temas delicados deben pasarse a una persona.',
            },
          ],
        },
        {
          heading: '5. Honorarios',
          blocks: [
            {
              p: 'Los honorarios, el alcance y las condiciones de pago se establecen en la propuesta o contrato de cada proyecto. Las facturas (CFDI) se emiten conforme a las reglas fiscales mexicanas.',
            },
          ],
        },
        {
          heading: '6. Datos',
          blocks: [
            {
              p: 'Los datos personales se tratan conforme al Aviso de privacidad. Tus datos son tuyos; a solicitud o al terminar el servicio, se te devuelven o se eliminan.',
            },
          ],
        },
        {
          heading: '7. Responsabilidad',
          blocks: [
            {
              p: 'Los servicios se prestan con cuidado razonable, pero sin garantía de operación ininterrumpida, incluidas fallas de WhatsApp u otras plataformas de terceros. En la medida que la ley lo permita, mi responsabilidad total se limita a los honorarios que pagaste en los tres meses anteriores al reclamo.',
            },
          ],
        },
        {
          heading: '8. Ley aplicable y contacto',
          blocks: [
            { p: 'Estos términos se rigen por las leyes de México. Dudas: {email}, {address}.' },
          ],
        },
      ],
    },
  },
};
