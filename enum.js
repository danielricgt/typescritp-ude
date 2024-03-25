"use strict";
var role;
(function (role) {
    role[role["estudiante"] = 0] = "estudiante";
    role[role["profesor"] = 1] = "profesor";
})(role || (role = {}));
;
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
//# sourceMappingURL=enum.js.map