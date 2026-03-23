# Black Bullet Performance – Next.js Implementation Plan

Convert 7 Stitch-designed screens into a production-ready Next.js (App Router) application with Tailwind CSS. The design features a dark automotive aesthetic with `#0e0e0e` backgrounds, `#ff8f73` primary accent, Space Grotesk + Manrope fonts, Material Symbols icons, glassmorphism panels, and zero border-radius.

---

## Proposed Changes

### Project Setup

#### [NEW] Next.js Project
- Initialize with `npx -y create-next-app@latest ./` (App Router, Tailwind, no src dir)
- Configure `tailwind.config.js` with the full design system color palette, custom font families (`headline`, `body`, `label`), and `borderRadius: { DEFAULT: '0px' }`
- Import Google Fonts (Space Grotesk, Manrope) and Material Symbols in `app/layout.js`
- Add custom CSS utilities: `.kinetic-gradient`, `.glass-panel`, `.carbon-pattern`

#### [NEW] `public/images/`
- Download all Stitch screenshot images (hero backgrounds, service cards, gallery items, blog headers, testimonial avatars) from the Google CDN URLs found in the HTML

---

### Shared Components

#### [NEW] `components/Navbar.jsx`
Fixed top navbar with glass effect (`bg-[#0e0e0e]/60 backdrop-blur-md`), BLACK BULLET branding, nav links (Home, Services, Gallery, Blog, Booking), Arabic toggle, WhatsApp chat icon, and "Book Now" gradient CTA button. Uses `next/link` for routing.

#### [NEW] `components/Footer.jsx`
4-column footer: branding + description, Engineering links, Connect links, Newsletter email input. Copyright bar at bottom. Black background with `#484847` link colors.

#### [NEW] `components/WhatsAppButton.jsx`
Fixed `bottom-8 right-8` green circle (`#25D366`) with WhatsApp SVG icon. `hover:scale-110` animation. Links to WhatsApp URL.

---

### Pages

#### [NEW] `app/page.js` (Home)
Assembles: `Hero`, `PillarsSection`, `BeforeAfterSlider`, services grid (using `ServiceCard` × 6), `TestimonialCard` × 3, map section.

#### [NEW] `components/Hero.jsx`
Full-viewport hero with grayscale background image, gradient overlays, massive headline ("THE KINETIC MONOLITH OF DUBAI PERFORMANCE"), and two CTA buttons (Book Now gradient + WhatsApp outline).

#### [NEW] `components/ServiceCard.jsx`
Reusable card: number watermark, Material Symbol icon, title, description, "Explore →" link. Used via `services.map()`.

#### [NEW] `components/BeforeAfterSlider.jsx`
Side-by-side before/after images with center divider line and drag handle circle (interactive via useState for slider position).

#### [NEW] `components/TestimonialCard.jsx`
Glass panel with 5 stars, italic quote, avatar initials, name, and "Verified Google Review" label.

---

#### [NEW] `app/services/page.js`
Hero with "Performance Solutions" title. 6 service image cards in 3-col grid with hover scale + reveal effects. ECU detail section (7/5 column split). Related services. CTA banner.

#### [NEW] `app/booking/page.js`
Multi-step booking form with left sidebar stepper (4 stages). Form fields: name, email, vehicle type selector (Supercar/Hyper/Custom), model input, service protocol selection (ECU Stage 2, Carbon Aero), date/time grid picker, and "INITIATE BOOKING" CTA. Uses `BookingForm.jsx`.

#### [NEW] `components/BookingForm.jsx`
Client component with `useState` for active step, form data, and selected date/time. Handles step navigation.

#### [NEW] `app/gallery/page.js`
Category filter buttons. Featured bento section (F8 Tributo build with stats cards). Masonry CSS grid (`GalleryGrid.jsx`) with hover overlays showing project names. CTA section.

#### [NEW] `components/GalleryGrid.jsx`
CSS Grid with `grid-auto-rows: 200px` and span classes for tall/wide/square items. Hover reveals title overlay.

#### [NEW] `app/blog/page.js`
Hero article header with full-width background image. Two-column layout: article body (rich text + callout card) + sidebar (categories, recent posts, newsletter). Related articles 3-col grid at bottom.

---

### Image Strategy
- Download ~30 images from Stitch CDN URLs to `public/images/`
- Use `next/image` with proper `width`, `height`, and `alt` attributes
- Apply `className` for object-cover, grayscale, opacity effects

---

## Verification Plan

### Automated Build Check
```bash
cd e:\AlLayal\BlackBullet
npm run build
```
Expect zero errors and successful static generation of all pages.

### Browser Visual Check
- Start dev server with `npm run dev`
- Open `http://localhost:3000` in browser
- Navigate through all 5 pages: Home, Services, Booking, Gallery, Blog
- Verify: dark theme renders, fonts load, images display, hover effects work, navigation links route correctly, WhatsApp FAB is visible on all pages

### Responsive Check
- Resize browser to mobile width (~375px)
- Verify navbar collapses, grids stack to single column, text scales properly
