import { Project } from '../types';
import controlExtrasImg from '../assets/images/controlext-rrhh-img.png';
import bebidasImg from '../assets/images/bebidas.png';
import extraTimeImg from '../assets/images/ExtraTimeimg.png';
import puntoBocadoImg from '../assets/images/pbocadoimg.png';
import perrosGatosImg from '../assets/images/perrosygatosimg.png';

export const projects: Project[] = [
  {
    id: "control-extras",
    number: "01",
    title: "ControlExtras",
    category: "Sistema RR. HH. & Auditoría",
    role: "Análisis Funcional & Frontend",
    impact: "Ahorro del 85% de tiempo en auditoría y liquidación mensual.",
    description: "Plataforma web para procesar planillas biométricas y automatizar el cálculo exacto de jornadas y horas extras a partir de archivos Excel.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "SheetJS"],
    url: "https://control-extras.vercel.app/",
    image: controlExtrasImg,
    highlights: [
      "Lectura y análisis de Excel en cliente (SheetJS) con total privacidad de datos",
      "Validación de jornadas de 9h y reglas de tolerancia para recargos exactos"
    ],
    accentColor: "#2563eb"
  },
    {
    id: "bebidas-express",
    number: "02",
    title: "Bebidas Express",
    category: "E-commerce & Gestión de Pedidos",
    role: "Arquitectura & Full-Stack",
    impact: "Digitalización del proceso de venta y gestión de pedidos.",
    description: "Plataforma web de e-commerce para la venta de bebidas, con catálogo de productos, carrito de compras, gestión de stock y pedidos directos por WhatsApp.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Firebase", "Cloudinary"],
    url: "https://bebidas-liard.vercel.app/",
    image: bebidasImg,
    highlights: [
      "Catálogo de bebidas organizado por categorías con precios y disponibilidad",
      "Carrito de compras con cálculo automático del total y generación de pedidos por WhatsApp",
      "Panel administrativo para gestionar productos, precios y stock"
    ],
    accentColor: "#2563eb"
  },
  {
    id: "extratime",
    number: "03",
    title: "ExtraTime",
    category: "Control Horario & Turnos",
    role: "Arquitectura & Full-Stack",
    impact: "Centralización digital en tiempo real sin planillas en papel.",
    description: "Aplicación para el seguimiento y fiscalización de turnos y horas extras en tiempo real con panel administrativo en la nube.",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS", "Vite"],
    url: "https://extratime-demo.vercel.app/",
    image: extraTimeImg,
    highlights: [
      "Cálculo en vivo de turnos rotativos, límites legales y horas acumuladas",
      "Persistencia cloud y autenticación multiusuario con Firebase"
    ],
    accentColor: "#0f766e"
  },
  {
    id: "menu-p-bocado",
    number: "04",
    title: "Menú P Bocado",
    category: "Menú Digital Gastronómico",
    role: "Diseño UI/UX & Frontend",
    impact: "Digitalización 100% de la carta con acceso QR sin esperas.",
    description: "Carta digital interactiva para comensales en salón gastronómico, optimizada para carga inmediata desde cualquier smartphone.",
    technologies: ["TypeScript", "React", "Tailwind CSS", "Vite"],
    url: "https://menu-p-bocado.vercel.app/",
    image: puntoBocadoImg,
    highlights: [
      "Navegación ultra-ligera y filtrado instantáneo por platos y promociones",
      "Panel para actualización ágil de disponibilidad y precios en segundos"
    ],
    accentColor: "#ea580c"
  },
  {
    id: "como-perros-y-gatos",
    number: "05",
    title: "Perros y Gatos",
    category: "Plataforma ONG & Adopción",
    role: "Análisis Funcional & Web",
    impact: "Canal centralizado de adopciones y rescates comunitarios.",
    description: "Portal comunitario para la protectora de animales de Armstrong que conecta mascotas rescatadas con adoptantes responsables.",
    technologies: ["JavaScript", "React", "Tailwind CSS", "Vite"],
    url: "https://www.comoperrosygatosarmstrong.com/",
    image: perrosGatosImg,
    highlights: [
      "Catálogo público de adopciones con fichas de salud y fotos de rescatados",
      "Panel de gestión privado para coordinación de campañas y eventos"
    ],
    accentColor: "#d97706"
  }
];

