# 🏗️ HFE-ALIJAJ — Website Zyrtar

Ky është website profesional i kompanisë **HFE-ALIJAJ**, e specializuar në shtrim pllakash, instalim ujësjellës dhe ngrohje qendrore në Pejë, Kosovë. Projekti është ndërtuar me **Next.js 16 App Router**, me animacione Framer Motion, dizajn të plotë responsive — optimizuar për mobile.

---

## 🛠️ Karakteristikat

- Faqe kryesore me hero animuar, seksion shërbimesh, portofol dhe kontakt
- 3 faqe shërbimesh të dedikuara: Keramikë, Ujësjellës, Ngrohje Qendrore
- Galeri projektesh me filtrim sipas kategorisë dhe lightbox
- Faqe kontakti me formular të integruar (API server-side me validim)
- Navbar me scroll-to-top dhe navigim universal (desktop + mobile)
- Animacione scroll-triggered me Framer Motion në të gjitha seksionet
- WhatsApp buton me bounce periodik për kontaktim të shpejtë
- Dizajn plotësisht responsive — i optimizuar për iPhone dhe ekrane të vogla
- Favicon dhe ikonë tab të personalizuar me logon e kompanisë
- SEO metadata e konfiguruar për çdo faqe

---

## 🧩 Teknologjitë e Përdorura

- **Next.js 16.2.2** — App Router, Server Components, API Routes
- **React 19.2.4** — UI library
- **TypeScript** — tip i fortë në të gjithë projektin
- **Tailwind CSS v4** — stilizim me `@theme` tokens në `globals.css`
- **Framer Motion 12** — animacione scroll-triggered dhe entrance
- **Lucide React** — ikonat
- **React Hook Form** — menaxhim i gjendjes së formularit

---

## 📁 Struktura e Projektit

```
app/
  layout.tsx              # Layout global: Navbar + Footer + WhatsApp + ScrollToTop
  page.tsx                # Faqja kryesore: Hero → Shërbime → Portofol → Kontakt
  api/contact/route.ts    # API endpoint POST — validim server-side
  services/               # Faqet e shërbimeve
    keramika/
    ujsjelles/
    nxemje-qendrore/
  contact/                # Faqja e dedikuar e kontaktit
  projects/               # Galeria e projekteve
components/               # Komponentët e përbashkëta (Navbar, Footer, Hero, etj.)
hooks/
  useAnimatedCounter.ts   # Animacion numeric në scroll
public/
  foto/                   # Fotografi projektesh
  keramika120-280/        # Fotografi pllaka speciale
  video/                  # Video projektesh
```

---

## 🚀 Fillimi i Projektit

```bash
git clone https://github.com/ElvirM1/HFE-Alijaj-Qeramike.git

cd HFE-Alijaj-Qeramike

git checkout develop

npm install

npm run dev
```

Hap [http://localhost:3000](http://localhost:3000) në shfletues.

---

## 🏗️ Build për Prodhim

```bash
npm run build

npm start
```

---

## 🌿 Struktura e Degëve (Branches)

| Dega      | Qëllimi                                                     |
| --------- | ----------------------------------------------------------- |
| `main`    | Dega e prodhimit — e pastër, merr kod vetëm me Pull Request |
| `develop` | Dega e zhvillimit — i gjithë kodi burimor është këtu        |

---

## 📞 Kontakt Biznesi

- 📍 Pejë, Kosovë
- 📱 049 617-818
- 💬 [WhatsApp](https://wa.me/38349617818)
- 🌐 Est. 2014
