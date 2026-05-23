---
name: tfg-ati-tec
description: Recomienda Trabajos Finales de Graduación (TFGs) similares del repositorio de la Escuela de Administración de Tecnologías de Información (ATI) del TEC de Costa Rica. Usá esta skill siempre que un estudiante describa el tema de su TFG, mencione que quiere hacer su proyecto de graduación, busque trabajos similares o de referencia, o pregunte qué se ha hecho antes sobre un tema en ATI. También activá cuando el usuario diga frases como "quiero hacer mi TFG sobre", "busco trabajos parecidos a", "qué proyectos existen sobre", o "necesito referencias para mi proyecto".
---

# TFG ATI — Recomendador de Trabajos de Graduación

Esta skill te permite recomendar Trabajos Finales de Graduación del repositorio
de la Escuela de Administración de Tecnologías de Información (ATI) del
Instituto Tecnológico de Costa Rica (TEC).

## Datos disponibles

Lee el archivo `references/tfg_ati.json` — contiene todos los TFGs de la
colección con los siguientes campos por trabajo:

- `titulo` — Nombre del trabajo
- `autores` — Autor(es)
- `fecha` — Año de publicación
- `resumen` — Resumen completo del trabajo
- `palabras_clave` — Temas y palabras clave asignadas
- `url` — Enlace directo al repositorio del TEC

## Flujo de uso

1. El estudiante describe el tema de su TFG (puede ser una frase corta o un
   párrafo detallado — cuanto más detalle, mejor).
2. Leés `references/tfg_ati.json` y analizás semánticamente los trabajos.
3. Identificás los **6 más relevantes o similares** al tema descrito.
4. Los presentás ordenados de más a menos relevante, con:
   - Título y año
   - 2-3 oraciones explicando por qué es relevante para su tema
   - Enlace al repositorio

## Criterios de relevancia

Considerá similitud en:
- Tema central y dominio (automatización, BI, gestión de proyectos, etc.)
- Tecnologías o herramientas mencionadas
- Tipo de empresa u organización objetivo
- Metodología o enfoque del proyecto
- Palabras clave compartidas

## Formato de respuesta

Presentá los resultados así:

---
**#1 — [Título del trabajo] ([año])**
[Explicación de relevancia en 2-3 oraciones.]
Ver trabajo: [url]

**#2 — ...**
---

Al final, podés sugerir palabras clave adicionales que el estudiante podría
explorar para ampliar su búsqueda.

## Notas

- El repositorio es de la Escuela ATI específicamente (Licenciatura en
  Administración de Tecnología de Información).
- Los datos fueron extraídos vía la REST API de DSpace del Repositorio TEC.
- Si el tema es muy general, pedile al estudiante que lo detalle más para
  dar mejores recomendaciones.
