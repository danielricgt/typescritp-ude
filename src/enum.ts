
enum role {estudiante, profesor};

const personas = {
    nombre: "rodirgo",
    edad: 34,
    direccion: {
      calle: "calle 69",
      comuna: "alamos",
    },
    cursos: ["daniel", "galvan", 2022],
    role: role.profesor
  };

  console.log(personas);