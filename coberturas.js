// Importar la lista de Pokémon con sus tipos
import { pokemones } from "./pokedex.js";
// 📌 Datos de los tipos y sus relaciones
const tiposData = {
    ninguno: {
        debilidades: [],
        resistencias: [],
        inmunidades: [],
    },
    Normal: {
        debilidades: ["Lucha"],
        resistencias: [],
        inmunidades: ["Fantasma"]
    },
    Fuego: {
        debilidades: ["Agua", "Roca", "Tierra"],
        resistencias: ["Fuego", "Planta", "Hielo", "Acero", "Bicho"],
        inmunidades: []
    },
    Agua: {
        debilidades: ["Planta", "Eléctrico"],
        resistencias: ["Agua", "Fuego", "Hielo", "Acero"],
        inmunidades: []
    },
    Planta: {
        debilidades: ["Fuego", "Volador", "Hielo", "Veneno", "Bicho"],
        resistencias: ["Agua", "Eléctrico", "Tierra"],
        inmunidades: []
    },
    Electrico: {
        debilidades: ["Tierra"],
        resistencias: ["Eléctrico", "Acero", "Volador"],
        inmunidades: []
    },
    Hielo: {
        debilidades: ["Fuego", "Lucha", "Roca", "Acero"],
        resistencias: ["Hielo"],
        inmunidades: []
    },
    Lucha: {
        debilidades: ["Volador", "Psíquico"],
        resistencias: ["Bicho", "Siniestro", "Roca"],
        inmunidades: []
    },
    Veneno: {
        debilidades: ["Tierra", "Psíquico"],
        resistencias: ["Planta", "Lucha", "Veneno", "Bicho"],
        inmunidades: []
    },
    Tierra: {
        debilidades: ["Agua", "Planta", "Hielo"],
        resistencias: ["Roca", "Veneno"],
        inmunidades: ["Eléctrico"]
    },
    Volador: {
        debilidades: ["Eléctrico", "Hielo", "Roca"],
        resistencias: ["Lucha", "Bicho", "Planta"],
        inmunidades: ["Tierra"]
    },
    Psíquico: {
        debilidades: ["Bicho", "Fantasma", "Siniestro"],
        resistencias: ["Lucha", "Psíquico"],
        inmunidades: []
    },
    Bicho: {
        debilidades: ["Fuego", "Volador", "Roca"],
        resistencias: ["Planta", "Lucha", "Tierra"],
        inmunidades: []
    },
    Roca: {
        debilidades: ["Agua", "Planta", "Lucha", "Tierra", "Acero"],
        resistencias: ["Fuego", "Volador", "Normal", "Veneno"],
        inmunidades: []
    },
    Fantasma: {
        debilidades: ["Fantasma", "Siniestro"],
        resistencias: ["Veneno", "Bicho"],
        inmunidades: ["Normal", "Lucha"]
    },
    Dragón: {
        debilidades: ["Hielo", "Dragón"],
        resistencias: ["Agua", "Fuego", "Planta", "Eléctrico"],
        inmunidades: []
    },
    Siniestro: {
        debilidades: ["Lucha", "Bicho"],
        resistencias: ["Fantasma", "Siniestro"],
        inmunidades: ["Psíquico"]
    },
    Acero: {
        debilidades: ["Fuego", "Lucha", "Tierra"],
        resistencias: [
            "Normal", "Planta", "Hielo", "Volador", "Psíquico",
            "Bicho", "Roca", "Dragón", "Acero"
        ],
        inmunidades: ["Veneno"]
    }
}

function calcularInteracciones(tipos) {
    let debilidades = {};
    let resistencias = {};
    let inmunidades = {};

    console.log("Calculando interacciones para tipos:", tipos); // Depuración

    tipos.forEach(tipo => {
        if (tiposData[tipo]) {
            tiposData[tipo].debilidades.forEach(d => {
                debilidades[d] = (debilidades[d] || 0) + 1;
            });
            tiposData[tipo].resistencias.forEach(r => {
                resistencias[r] = (resistencias[r] || 0) + 1;
            });
            tiposData[tipo].inmunidades.forEach(i => {
                inmunidades[i] = true; // Guardamos las inmunidades
            });
        } else {
            console.warn(`El tipo "${tipo}" no existe en la base de datos.`);
        }
    });

    // 📌 Eliminar las debilidades que están en inmunidades
    Object.keys(inmunidades).forEach(tipo => {
        if (debilidades[tipo]) {
            delete debilidades[tipo];
        }
    });

    console.log("Resultado de interacciones:", { debilidades, resistencias, inmunidades }); // Depuración

    return { debilidades, resistencias, inmunidades };
}

export { calcularInteracciones };
