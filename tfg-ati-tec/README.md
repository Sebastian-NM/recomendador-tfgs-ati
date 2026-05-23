# tfg-ati-tec skill

Skill para Claude que recomienda Trabajos Finales de Graduación similares
del repositorio de la Escuela de ATI del TEC de Costa Rica.

## Instalación

1. Descargá o cloná este repositorio
2. Generá el archivo de datos (solo la primera vez):
   ```bash
   node extraer.mjs
   ```
   Esto crea `references/tfg_ati.json` con todos los trabajos del repositorio.

3. Copiá la carpeta `tfg-ati-tec/` a tu directorio de skills de Claude:
   - En Claude Code / Cowork: `/mnt/skills/user/tfg-ati-tec/`
   - O donde tengas configurado tu directorio de skills

## Estructura

```
tfg-ati-tec/
├── SKILL.md                  — Instrucciones para Claude
├── extraer.mjs               — Script para actualizar los datos
├── README.md                 — Este archivo
└── references/
    ├── README.md             — Documentación de los datos
    └── tfg_ati.json          — Datos de todos los TFGs (generado)
```

## Uso

Una vez instalada, Claude activa la skill automáticamente cuando un estudiante
describe el tema de su TFG o pide recomendaciones de trabajos similares.

Ejemplos de frases que activan la skill:
- "Quiero hacer mi TFG sobre automatización de procesos con RPA"
- "Buscame trabajos similares a inteligencia de negocios en bancos"
- "Qué proyectos existen sobre gestión de incidentes con ITIL"

## Actualizar datos

Para refrescar los datos con los trabajos más recientes del repositorio:

```bash
node extraer.mjs
```

## Fuente de datos

Repositorio Institucional del TEC — Escuela de ATI
https://repositoriotec.tec.ac.cr/handle/2238/10908
