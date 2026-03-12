# ICIG Service Desk

Internes Service-Desk-Tool für das ICIG Wuppertal, gebaut mit React und TypeScript.

## Features

- Tickets anzeigen
- Tickets filtern (nach Status und Suchbegriff)
- Neues Ticket anlegen
- Ticket-Status aktualisieren

## Projektstruktur

- `src/app/` — App-Rahmen und Layout
- `src/features/tickets/` — Ticket-UI-Komponenten
- `src/hooks/` — State-Logik via Custom Hook
- `src/services/` — Datenzugriff-Schicht
- `src/types/` — TypeScript-Typen und Konstanten

## Projekt starten

```bash
npm install
npm run dev
```

- Development Server: `npm run dev`
- Production Build: `npm run build`
- Linting: `npm run lint`
