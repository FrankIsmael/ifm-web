import { shared } from './cv-shared';
import type { CvData } from './cv-data';

// Spanish content. Typed as CvData so a key missing here fails the build.
export const cvDataEs: CvData = {
  ...shared,
  tagline: 'Ingeniero full stack · Proyectos por contrato y tiempo completo',
  location: 'Ciudad de México, México',
  meta: {
    title: 'Ingeniero Full Stack · Por contrato y tiempo completo',
    description:
      'Ingeniero full stack en Ciudad de México, disponible para proyectos por contrato y puestos de tiempo completo. React, Next.js, NestJS, PostgreSQL y AWS.',
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
      city: 'Ciudad de México.',
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
    'Desarrollo aplicaciones web en producción, APIs e infraestructura en AWS desde Ciudad de México, para proyectos por contrato y equipos de tiempo completo.',
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
        'Remoto desde Ciudad de México, en inglés y español.',
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
};
