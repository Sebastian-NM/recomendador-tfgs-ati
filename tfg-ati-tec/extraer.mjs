// Script para actualizar los datos del repositorio TEC
// Correr con: node extraer.mjs
// Resultado: references/tfg_ati.json

import { writeFileSync, mkdirSync } from "fs";

const BASE = "https://repositoriotec.tec.ac.cr/rest";
const ATI_UUID = "35b3fd9c-57d2-4fbb-aef2-5bdb533e1015";

async function fetchAllItems() {
  const items = [];
  let offset = 0;
  const limit = 50;

  while (true) {
    console.log(`Descargando offset ${offset}...`);
    const r = await fetch(
      `${BASE}/collections/${ATI_UUID}/items?limit=${limit}&offset=${offset}&expand=metadata`,
      { headers: { Accept: "application/json" } }
    );
    const batch = await r.json();
    if (!Array.isArray(batch) || batch.length === 0) break;

    for (const item of batch) {
      const meta = item.metadata || [];
      const get = (key) =>
        meta.filter((m) => m.key === key).map((m) => m.value).join("; ");
      items.push({
        titulo: get("dc.title") || "",
        autores: get("dc.contributor.author") || "",
        fecha: get("dc.date.issued")?.slice(0, 4) || "",
        resumen: get("dc.description.abstract") || "",
        palabras_clave: get("dc.subject") || "",
        url: `https://repositoriotec.tec.ac.cr/handle/${item.handle}`,
      });
    }

    if (batch.length < limit) break;
    offset += limit;
  }

  return items;
}

console.log("Extrayendo TFGs del Repositorio TEC...\n");
const items = await fetchAllItems();
console.log(`\nTotal extraidos: ${items.length}`);

mkdirSync("references", { recursive: true });
writeFileSync(
  "references/tfg_ati.json",
  JSON.stringify(items, null, 2),
  "utf-8"
);
console.log("Guardado en: references/tfg_ati.json");
