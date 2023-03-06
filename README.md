# CSS Layouts

March 2023

This repository contains a minimal boilerplate required to get started with Vite + React + Tailwind. This was created with:

```
yarn create vite
yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Add to tailwind.config.cjs

```
content: ["./src/**/*.{html,css,tsx}"],
```

Add to index.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

