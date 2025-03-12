// 1️⃣ Definir la interfaz con todas las propiedades como string
export interface Experiencia {
    logo: any;
    posicion: string;
    empresa: string;
    fecha: string;
    locacion: string;
    tecnologias: string;
  }
  
  // 2️⃣ Definir y exportar la colección de experiencias con el tipo `Experiencia[]`
  export const experiencias: Experiencia[] = [
    {
      posicion: "Diseñadora UX/UI",
      empresa: "IntechMom",
      fecha: "2023 - 2023",
      locacion: "Remoto",
      tecnologias: "Design Thinking, Figma",
      logo: require("@/assets/images/intechMom.png"), // TypeScript puede lanzar advertencias aquí
    },
    {
        posicion: "Diseñadora UX/UI",
        empresa: "IntechMom",
        fecha: "2023 - 2023",
        locacion: "Remoto",
        tecnologias: "Design Thinking, Figma",
        logo: require("@/assets/images/intechMom.png"), // TypeScript puede lanzar advertencias aquí
      },
      {
        posicion: "Diseñadora UX/UI",
        empresa: "IntechMom",
        fecha: "2023 - 2023",
        locacion: "Remoto",
        tecnologias: "Design Thinking, Figma",
        logo: require("@/assets/images/intechMom.png"), // TypeScript puede lanzar advertencias aquí
      },
      {
        posicion: "Diseñadora UX/UI",
        empresa: "IntechMom",
        fecha: "2023 - 2023",
        locacion: "Remoto",
        tecnologias: "Design Thinking, Figma",
        logo: require("@/assets/images/intechMom.png"), // TypeScript puede lanzar advertencias aquí
      },
      {
        posicion: "Diseñadora UX/UI",
        empresa: "IntechMom",
        fecha: "2023 - 2023",
        locacion: "Remoto",
        tecnologias: "Design Thinking, Figma",
        logo: require("@/assets/images/intechMom.png"), // TypeScript puede lanzar advertencias aquí
      },
    
  ];
  