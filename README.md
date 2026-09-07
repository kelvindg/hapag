# Hapag ni Kuya Kelvin

> *ˈhɑː·pag* · noun, Tagalog — **the table set for a meal**

A loving study of the full Filipino table — **savory classics and beloved sweets**, each kept in two forms: the traditional *Noon* (then) and the modern *Ngayon* (now).

Built from scratch as a static site (no frameworks), publishable anywhere static files are served.

## The idea

Every dish here lives twice, side by side:

- **Noon · Traditional** — the recipe a *lola* would recognize: adobo simmered low, sinigang sharpened with real tamarind, leche flan set in a bain-marie.
- **Ngayon · Modern** — the reinvention that made it famous again: adobo fried rice, kare-kare tacos, ube cheesecake, the minimalist halo-halo.

Each recipe includes full ingredients, a numbered method, notes, and a source link back to the trusted Filipino kitchen it was researched from.

## The collection

Powered by a two-dimensional filter — **Dish** (Savory / Dessert) × **Noon at Ngayon** (Traditional / Modern). Filter counts compute live from the recipe data, so they stay accurate as the set grows.

## Stack

- Plain **HTML / CSS / JavaScript** — no build step, no dependencies
- **Fraunces** (display serif) + **Plus Jakarta Sans** (body) via Google Fonts
- Custom imagery in a cohesive *ube purple × warm cream × gold* palette
- Responsive, keyboard-accessible, `prefers-reduced-motion` aware

## Structure

```
hapag/
├── index.html          # single page (all sections)
├── css/
│   └── style.css       # design system + layout
├── js/
│   └── main.js         # recipe data + interactions
└── images/             # optimized WebP + favicon
```

## Add a recipe

Recipes live in the `RECIPES` array in `js/main.js`. Dessert recipes need no `kind` field (they default to *Dessert*); savory recipes set `kind: "Savory"`. The `dish` field is the dish family name; the `type` field is `"Traditional"` or `"Modern"`.

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

Publishable on **GitHub Pages**, Netlify, Vercel, or any static host — point it at the repo root.

---

Recipes researched from trusted Filipino kitchens (Kawaling Pinoy, Panlasang Pinoy, and others — sources linked in each recipe). Custom imagery, not AI-scraped stock.