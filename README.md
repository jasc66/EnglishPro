# EnglishPro — Next.js 14

Sitio web para clases de inglés profesional en Costa Rica. Construido con **Next.js 14 App Router**.

## Inicio rápido

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev
# → http://localhost:3000

# Build de producción
npm run build
npm start
```

## Estructura del proyecto

```
├── app/
│   ├── layout.jsx       # Root layout + fuentes Google
│   ├── page.jsx         # Página principal (composición)
│   └── globals.css      # Estilos globales con CSS variables
│
├── components/
│   ├── Navbar.jsx       # Navegación sticky + menú móvil
│   ├── Hero.jsx         # Hero con estadísticas y tarjetas
│   ├── TrustBar.jsx     # Barra de credenciales
│   ├── Sectors.jsx      # Sectores especializados
│   ├── HowItWorks.jsx   # Metodología 4 pasos
│   ├── About.jsx        # Perfil del profesor
│   ├── Testimonials.jsx # Testimonios de alumnos
│   ├── Pricing.jsx      # Planes (en ₡ colones)
│   ├── FAQ.jsx          # Preguntas frecuentes (acordeón)
│   ├── Contact.jsx      # Formulario de contacto
│   ├── Footer.jsx       # Footer con links
│   └── AnimateOnScroll.jsx # Observer para animaciones
```

## Personalización

- **Precios** → `components/Pricing.jsx` (array `plans`)
- **Sectores** → `components/Sectors.jsx` (array `sectors`)
- **Testimonios** → `components/Testimonials.jsx`
- **Colores** → `app/globals.css` (variables CSS en `:root`)
- **SEO** → `app/layout.jsx` (objeto `metadata`)

## Conectar el formulario

El componente `Contact.jsx` tiene un `TODO` marcado donde puedes conectar la API:

```js
// Opción 1: API Route de Next.js
const res = await fetch('/api/contact', {
  method: 'POST',
  body: JSON.stringify(formData),
});

// Opción 2: Formspree (sin backend)
const res = await fetch('https://formspree.io/f/TU_ID', {
  method: 'POST',
  body: new FormData(e.target),
});
```

## Deploy sugerido

- **Vercel** (recomendado, gratis): `vercel deploy`
- **Netlify**: `npm run build` → carpeta `out`
# EnglishPro
