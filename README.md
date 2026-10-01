# Pelkan Delives - Kano Transit & Market Sourcing

A mobile-first, lightweight web application for localized transit and market sourcing across Kano, Nigeria.

## Features
- **Zero-App Architecture**: No downloads, no user registration, no password friction.
- **WhatsApp Routing Engine**: Automatically validates and formats customer orders into a structured dispatch request sent directly to **+234 701 764 1538** via WhatsApp (`https://wa.me/2347017641538`).
- **Hybrid Language Switcher**:
  - Supports **English**, **Hausa** (*Harshen Hausa*), **Igbo** (*Asụsụ Igbo*), **Yorùbá** (*Èdè Yorùbá*), and **Nigerian Pidgin**.
  - Built-in JSON dictionary engine translates the entire UI instantly into natural Nigerian Pidgin.
  - Google Translate integration provides seamless translation for Hausa, Igbo, and Yoruba.
- **Customer Support & Feedback**:
  - Dedicated section inviting complaints, suggestions, opinions, and inquiries.
  - Direct mailto link to `pelkanhaus@gmail.com` and WhatsApp support routing.
- **Comprehensive Kano State Dropdowns**:
  - **Markets**: Farm Center (GSM Market), Sabon Gari Market, Kantin Kwari Market, Kofar Wambai Market, Kurmi Market, Dawanau Market, Yankaba Market, Na'ibawa 'Yan Lemo, Singer Market, Kofar Ruwa Market, Sharada Market, Galadima Market.
  - **Universities & Higher Institutions**: BUK New Campus, BUK Old Campus, Yusuf Maitama Sule University, Kano State Polytechnic, KUST Wudil, Police Academy Wudil, MAAUN, Skyline University, Baba Ahmed University, FCE Kano, FCE Bichi, Sa'adatu Rimi University, Aminu Kano College, Kano State Hygiene, School of Health Tech, Audu Bako Agriculture, RMK CARS.
  - **Major Commercial Corridors & City Hubs**: Zoo Road, State Road, Zaria Road, Hadejia Road, Katsina Road, Maiduguri Road, Gidan Murtala, Gwammaja.
  - **All 44 Kano State LGAs**: Ajingi, Albasu, Bagwai, Bebeji, Bichi, Bunkure, Dala, Dambatta, Dawakin Kudu, Dawakin Tofa, Doguwa, Fagge, Gabasawa, Garko, Garun Mallam, Gaya, Gezawa, Gwale, Gwarzo, Kabo, Kano Municipal, Karaye, Kibiya, Kiru, Kumbotso, Kunchi, Kura, Madobi, Makoda, Minjibir, Nassarawa, Rano, Rimin Gado, Rogo, Shanono, Sumaila, Takai, Tarauni, Tofa, Tsanyawa, Tudun Wada, Ungogo, Warawa, Wudil.
  - **Catch-all**: "Other (Please type exact junction in details below)" option.
- **Service Toggle**:
  - 🛍️ *Buy & Source for Me* (Market Concierge).
  - 📦 *Pick Up & Deliver Package* (Direct Dispatch).
- **Live Local Rate Estimator**: Instant estimation in Naira (₦) based on typical Kano route pairs and pooled economy transit.

## Project Structure
- `index.html`: Semantic, responsive HTML5 layout with embedded Google Translate widget.
- `styles.css`: Pure vanilla CSS with mobile-first layout, local transit palette (deep red, dark grey/black, transit yellow, and white).
- `script.js`: Vanilla JavaScript handling validation, live preview, price calculation, and WhatsApp dispatch routing.

## Deployment Instructions

### Option 1: Netlify (Free Drag-and-Drop)
1. Go to [Netlify Drop](https://app.netlify.com/drop).
2. Drag and drop this folder (containing `index.html`, `styles.css`, and `script.js`).
3. Your site is live immediately with a free HTTPS URL and custom domain support!

### Option 2: GitHub Pages (Free)
1. Push the files to a GitHub repository.
2. In your repository settings, navigate to **Pages**.
3. Under **Build and deployment**, select **Deploy from a branch** and choose the `main` branch root (`/`).
4. Save and your site will be published at `https://<your-username>.github.io/<repo-name>/`.

### Option 3: Local Dev with Vite
```bash
npm run dev
# Or build static assets
npm run build
```
