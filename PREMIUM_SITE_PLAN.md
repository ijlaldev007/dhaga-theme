# Premium Shopify Theme Plan (Dawn-Based)

This plan outlines the design direction, UX principles, feature set, technical approach, implementation roadmap, performance/accessibility standards, and measurement strategy to deliver a premium luxury experience on Shopify, inspired by houses like Prada, Louis Vuitton, and Gucci.

## 1) Brand & Experience Principles

- Luxury minimalism: High negative space, restrained color, bold typography, large imagery, and immaculate rhythm.
- Editorial storytelling: Product discovery wrapped in brand narrative; cinematic hero, lookbooks, and craftsmanship stories.
- Confidence cues: Premium photography, motion finesse, micro-interactions, and seamless flows build trust and desire.
- Performance with polish: Fast first paint, smooth animations, zero jank; speed amplifies premium perception.
- Accessibility as craft: WCAG 2.2 AA, inclusive design; elegance that works for everyone.

## 2) Information Architecture (Top-Level)

- Shop: New Arrivals, Women, Men, Leather Goods, Shoes, Ready-to-Wear, Jewelry, Gifts, Sale (toggle as needed)
- Explore: Campaign, Lookbook, Runway/Editorial, Craftsmanship/Materials, Journal/Stories, Press
- Services: Client Services, Sizing & Fit, Appointments, Repairs/Aftercare, Gifting
- Account: Sign in, Orders/Returns, Wishlist
- Utility: Store Locator, Country/Language, Currency, Search, Cart

## 3) Design System

- Typography: Variable font pair with luxurious contrast (e.g., high-contrast serif for headlines, grotesk sans for body). Scale: fluid type (clamp) with optical sizes.
- Color: Core neutral palette (near-white, deep black), one accent color; strong contrast ratios (≥ 4.5:1).
- Grid: 12-col fluid grid, 8px baseline. Generous vertical rhythm and responsive container queries.
- Imagery: Full-bleed hero, editorial photography, short-form video (cinematic, muted autoplay), AVIF/WebP fallbacks.
- Components: Buttons with subtle inset shadows, understated outlines; quiet forms; consistent radius and focus states.
- Motion: Low-friction easing (e.g., ease-out-quint), micro-delays on staggered reveals; respects `prefers-reduced-motion`.

Mapping to theme settings (`config/settings_schema.json`):
- Define type scales via `heading_scale`/`body_scale`; tune spacing via `spacing_sections`, grid via `spacing_grid_*`.
- Color schemes: Scheme-1 light, Scheme-3 dark “editorial”; use CSS custom props already generated in `layout/theme.liquid`.

## 4) Navigation & Header

- Global header: Sticky on scroll-up; minimal chrome; logo centered on mobile.
- Mega menu: Rich panels with category imagery, featured stories, “Shop the Look” thumbnails, and quick links.
- Quick search: Predictive search (products + collections + stories) with recent/trending queries and image thumbnails.
- Country/language: Inline selectors with geolocation hint and persistent preference.

Sections/snippets to add:
- `sections/header-mega-menu.liquid` (or extend existing `header.liquid` + `snippets/header-mega-menu.liquid`).
- `snippets/search-spotlight.liquid` for expanded search overlay.

## 5) Homepage (Editorial Commerce)

- Cinematic hero: Auto-playing muted video or cinemagraph, headline, and restrained CTA.
- Capsule highlights: 2–3 feature tiles (New collection, Leather icons, Gifts) with subtle hover parallax.
- Lookbook strip: Horizontal scroll of editorial looks; each look opens a “Shop the Look” overlay.
- Craftsmanship story: Scroll-telling section with image sequences, captions, and deep link to materials.
- Social proof: Press logos or curated IG/Reels with manual curation (avoid algorithm clutter).

Sections to add:
- `sections/hero-cinematic.liquid`
- `sections/feature-tiles.liquid`
- `sections/lookbook-strip.liquid`
- `sections/story-scroll.liquid`
- `sections/press-logos.liquid` and/or `sections/social-curation.liquid`

## 6) Product Discovery (Collections, Search, Merchandising)

- Collection page (PLP):
  - Clean grid with large imagery, hover alternate image, size chips, quick add.
  - Faceted filters (sticky) and in-grid applied filters; “Sort by” with saveable preference.
  - Campaign banners within grid, editorial blocks between rows.
  - Endless scroll or progressive pagination with accurate indexation (server-rendered links preserved).
- Search results:
  - Group by Products / Collections / Stories; zero-results with recovery suggestions.
  - Rich filter/sort; synonyms and stemming. Trending queries and recent history.

Sections/snippets:
- Enhance existing `sections/main-collection-product-grid.liquid` for editorial blocks and grid banners.
- `snippets/product-card-premium.liquid` to refine hover, size chips, and micro-interactions.

## 7) Product Detail Page (PDP)

- Gallery: Edge-to-edge images, video frames, swipe on mobile, pinch zoom; optional “filmstrip” layout.
- Content: Title, price, tax/shipping hints, swatches/variant buttons, availability, size guide inline.
- Shop the look: Curated complementary products; AI/Shopify recommendations secondary.
- Craftsmanship: Accordion tabs (Materials, Care, Sustainability) with imagery.
- Service layer: Pick up in store (if enabled), live chat/concierge, gifting/wrapping, monogram.
- Social/UGC: Curated editorial only (no noisy feeds); high-quality reviews if brand-appropriate.

Blocks/Features in `sections/main-product.liquid`:
- Size & fit: `snippets/size-fit-finder.liquid` linking to a `sections/size-fit-guide.liquid` overlay or page.
- Back-in-stock/waitlist: Subscription block when OOS.
- 3D & AR: Enable 3D model viewer, USDZ/GLB; careful fallbacks and light controls.
- Badging: Low inventory, preorder; understated and controlled.

## 8) Cart & Checkout UX

- Cart drawer: Minimalist; product thumb, size/color, line-note (gift message), delivery/pickup info, upsells.
- Cart page: Editor’s pick upsells, trust/service blocks, shipping/tax calculators.
- Checkout: Brand-safe assets (logo, color accents), legal and help links; Shop Pay express prominently.

Features:
- Free shipping threshold progress with tasteful meter.
- Gift wrap + personal message; schedule delivery date where relevant.
- Save cart/wishlist; email me my cart.

## 9) Content & Editorial

- Lookbooks: Grid and slideshow formats with hotspots, each linking to “Shop the Look.”
- Journal/Stories: Rich article template with longform typography, inline products, and pull quotes.
- Campaign landing: Hero, narrative sections, embedded video, and curated product modules.

Sections/Templates:
- `templates/page.lookbook.json` + `sections/lookbook.liquid`
- `templates/article.json` enhancements for premium typography and inline product cards.

## 10) Services & Clienteling

- Appointments: Book in-store/virtual consultations (Calendly/Hubspot or Shopify App).
- Store locator: Map with brand images, services per boutique.
- Concierge: WhatsApp/Chat with routing by region, available hours, and SLA expectations.
- Aftercare/Repairs: Form with case number tracking; PDFs for care guides.

Sections:
- `sections/appointments.liquid`, `sections/store-locator.liquid`, `sections/client-services.liquid`.

## 11) Personalization & CRM

- Recently viewed: Subtle module on PDP/PLP.
- Recommendations: Shopify Search & Discovery tuned by rules; elevate campaign categories.
- Email capture: Contextual signup (footer, exit-intent on Stories, post-purchase). Double opt-in and preference center.
- Loyalty/VIP (optional): Quiet presentation; VIP early-access to drops.

## 12) Internationalization & Compliance

- Multi-language and multi-currency; region-based catalogs/pricing if needed.
- Duty/tax clarity and incoterms messaging per country.
- Legal: Cookie consent, privacy, returns; EU/UK compliance options.

## 13) Performance & Accessibility Standards

- Targets: LCP ≤ 1.8s (3G fast), CLS ≤ 0.05, TBT ≤ 150ms on key pages.
- Images: AVIF/WebP with responsive `image_url` sizes; preload LCP hero.
- Fonts: Self-hosted WOFF2, variable fonts, `font-display: swap`, preconnect `fonts.shopifycdn.com` as needed.
- Scripts: Defer non-critical; guard design-mode scripts; avoid layout thrash.
- CSS: Critical path minimal; leverage Dawn CSS variables; avoid global overrides unless necessary.
- Accessibility: WCAG 2.2 AA, robust focus states, semantic headings, ARIA for live regions (cart, search), form labels, skip links.

## 14) Analytics, Tagging, and SEO

- Analytics: GA4 + Shopify analytics + Meta Pixel (Conversions API), TikTok/others if required.
- Events: Product impressions, PDP view, variant select, add to cart (source), cart open, begin checkout, purchase, search queries, filters/sorts, wishlist actions.
- SEO: JSON-LD for products, breadcrumbs, articles; curated collection copy; canonical control for filters; alt text policy.
- A/B Testing: Hypothesis backlog (hero formats, PLP card size chips, quick add vs full PDP); use lightweight testing approach.

## 15) Implementation Approach (Dawn)

- Sections-first: Build premium sections as modular, theme-editor friendly blocks.
- Respect Dawn tokens: Use `settings_schema` to power typography, spacing, and color; compute CSS custom props in `layout/theme.liquid`.
- Minimal JS: Vanilla ES modules placed in `assets/`, defer loaded, with defensive checks for design mode.
- Asset strategy: Keep component CSS in `assets/component-*.css`; add new `assets/section-*.css` for each custom section.
- Templates: Add JSON templates for campaign, lookbook, story; leverage `sections/*` for reusability.

Proposed new sections/snippets (backlog):
- Sections: `hero-cinematic`, `feature-tiles`, `lookbook-strip`, `lookbook`, `story-scroll`, `press-logos`, `social-curation`, `size-fit-guide`, `shop-the-look`, `appointments`, `store-locator`, `client-services`, `gifting`, `editorial-slideshow`, `collection-banner-premium`.
- Snippets: `product-card-premium`, `search-spotlight`, `size-fit-finder`, `usp-bar`, `free-shipping-progress`, `back-in-stock`, `monogram-options`.

## 16) Feature Backlog (Prioritized)

MVP (Launch):
- Cinematic hero, premium header/mega-menu, refined PLP card, enhanced PDP (size guide, craftsmanship tabs, shop the look), cart drawer with gifting.
- Predictive search overlay with trending/recent; collection grid editorial blocks.
- Lookbook page + strip on home; press logos; journal template.
- Performance baseline (LCP preloads, image formats), accessibility pass, analytics events.

Phase 2:
- Appointments + store locator; aftercare forms.
- Wishlist + saved cart; loyalty/VIP integrations.
- Shoppable video; A/B testing framework; personalization rules.

Phase 3:
- Clienteling portal (staff tools), private collections, appointment CRM sync.
- Advanced 3D/AR pipeline and material visualization.

## 17) Project Plan & Timeline (Illustrative)

- Week 1–2 Discovery: Brand audit, UX research, analytics review, KPIs, IA & wireframes, design system kickoff.
- Week 3–4 Visual Design: High-fidelity comps, motion prototypes, component specs, content briefs.
- Week 5–7 Build MVP: Sections, templates, PLP/PDP upgrades, search overlay, cart drawer, performance tuning.
- Week 8 QA/UAT: Cross-device/browsers, accessibility audit, analytics QA, SEO checks, content loading.
- Week 9 Launch: Code freeze, launch checklist, DNS/redirects, monitoring, rollback plan.
- Week 10+ Optimization: A/B tests, content cadence, international rollout, Phase 2 features.

## 18) Success Metrics

- Conversion rate, PDP add-to-cart rate, cart → checkout rate, average order value.
- LCP, CLS, TBT on home/PLP/PDP; image weight budgets per page type.
- Search success rate, filter use; engagement on lookbook/journal; email capture rate.
- Customer service contact rate (pre-/post-purchase), return reasons distribution.

## 19) Risks & Considerations

- Asset weight: Cinematic assets must be optimized; rely on short loops, muted subtleties.
- Regionalization: Catalog and pricing differences add complexity; plan content ops.
- Accessibility: Motion and contrast must be strictly controlled for compliance.
- App dependencies: Vet apps for performance; prefer native implementations when possible.

## 20) Next Steps

1) Approve IA and visual direction reference boards.
2) Prioritize MVP scope from the backlog above.
3) I’ll scaffold section stubs and CSS/JS placeholders for rapid iteration within this Dawn repo.
4) Begin high-fidelity design of header/mega menu, hero, PLP card, and PDP flows.

---

If you’d like, I can proceed by scaffolding the MVP custom sections and wiring a “Premium” home template so you can preview the direction in the theme editor.

## Appendix A — Premium Header, Mega Menu & Search (Luxury‑Inspired)

We will deliver functionally equivalent, luxury‑grade interactions and motion inspired by top maisons, while expressing a unique visual language for this brand (no reuse of proprietary assets).

### Goals
- Minimal chrome with high clarity and focus on content.
- Editorial mega menu with curated imagery and narrative entry points.
- Full‑screen “spotlight” search with image‑rich typeahead and keyboard navigation.
- Subtle, precise animations; respect `prefers-reduced-motion`.

### Desktop Header & Mega Menu
- Structure: Logo (left/center), primary nav, utilities (search, locale/language, account, wishlist, cart).
- Sticky behavior: Slims/hides on scroll‑down; reappears on scroll‑up.
- Triggers: Hover/focus on top‑level nav opens a mega panel; open delay ~120ms, close delay ~200ms for hover intent.
- Panel layout:
  - Left: Up to 4 link columns (heading + 6–10 links each).
  - Right: 1–2 large visuals (campaign/lookbook/craft) with CTA.
  - Optional: Small “shop the look” carousel (lazy loaded).
- Image preview on hover: Hovering a link updates a preview image area (via `data-preview-image` mapping).
- Animations:
  - Panel: opacity 0→1; translateY(-8px)→0; 200–260ms; `cubic-bezier(0.22,1,0.36,1)`.
  - Stagger links: 20–30ms increments across columns.
  - Underline micro‑interaction: scaleX 0→1 with transform‑origin following cursor.
  - Overlay scrim: alpha 0→0.5 in 200ms; click/ESC closes.
- Accessibility:
  - Triggers use `aria-haspopup="menu"` and toggle `aria-expanded`.
  - Panel `role="menu"`; keyboard reachability; ESC closes; focus returns to trigger.
  - Focus trap within panel; backdrop sets page inert.
- Performance: Lazy load panel images on first open; use GPU transforms; avoid layout thrash.

### Mobile Navigation
- Full‑screen overlay: Slide/fade from top; body scroll locked; large tappable rows.
- IA: Primary items expand as accordions or push a second level; include Back crumb.
- Search field pinned at top; autofocus when opened via search icon.
- Micro‑interactions: Chevron rotates 180°; rows slide with slight stagger (180–220ms).
- A11y: `role="dialog"`, `aria-modal="true"`, ESC/backdrop to close, focus trap.

### Search Overlay (Spotlight)
- Activation: Search icon click or keyboard `/` shortcut.
- Layout:
  - Top bar: Large input with clear button; optional tabs (Products / Collections / Stories).
  - Suggestions: Trending (curated), Recent (localStorage), live typeahead results.
  - Result cards: Thumbnail, title, price (for products), grouped with subtle dividers.
  - Footer: “View all results” link to full search page.
- Predictive integration:
  - Reuse/extend `sections/predictive-search.liquid` and `assets/predictive-search.js` or use JSON endpoint + client render.
  - Debounce ~150ms; abort in‑flight requests on new input; highlight matches with `<mark>`.
- Keyboard: Arrow keys move active result; Enter selects; ESC closes; optional Cmd/Ctrl+K secondary shortcut.
- Motion: Overlay fade/slide; list stagger 12–18ms; reduced‑motion disables translate.
- Accessibility: `role="dialog"`, labelled by heading; live region for counts; logical tab order.

### Motion Tokens
- Durations: 120ms, 200ms, 260ms, 320ms.
- Easing: ease‑out‑quint `cubic-bezier(0.22,1,0.36,1)`; standard `cubic-bezier(0.2,0,0,1)`.
- Staggers: 20–30ms between siblings; disabled for reduced motion.

### Theme Settings (Editor)
- Header layout: logo position, sticky behavior, color scheme, separators.
- Per‑menu item mega config:
  - Image/video pickers; featured collection/story link.
  - Up to 4 columns (title + link list selector or manual links).
  - Preview image mapping for link hover.
- Search overlay: enable trending/recents, curated terms, scope toggles.
- Mobile: accordion vs push‑panel, utility row toggle.

### Files To Add/Modify
- Sections:
  - `sections/header-premium.liquid` (new) or extend `sections/header.liquid` with a premium mega block.
- Snippets:
  - `snippets/header-mega-menu-premium.liquid`
  - `snippets/search-spotlight.liquid`
- Assets (CSS):
  - `assets/section-header-premium.css`
  - `assets/component-mega-menu-premium.css`
  - `assets/search-spotlight.css`
- Assets (JS):
  - `assets/header-premium.js`
  - `assets/search-spotlight.js`
- Config:
  - Extend `config/settings_schema.json` with header/search settings and image pickers.
  - Update `sections/header-group.json` to reference `header-premium` when enabled.

### Implementation Steps
1) Scaffold new section/snippets and empty CSS/JS; guard inclusion behind settings.
2) Build desktop mega: structure → styles → motion → a11y → performance.
3) Build mobile overlay nav: full‑screen dialog, accordions, keyboard + SR support.
4) Implement search overlay: integrate predictive; add trending/recents and tabs.
5) Optimize: lazy images, prefetch on hover, font loading; audit CLS.
6) A11y QA: Keyboard paths, focus traps, announcements, contrast.
7) Cross‑device QA: iOS/Android + major desktop browsers.

### Acceptance Criteria
- Desktop: Mega opens within 200–260ms, keyboard accessible, ESC/backdrop close, smooth transforms only.
- Mobile: Overlay opens/closes smoothly; accordions snappy; body scroll locked; focus managed.
- Search: Overlay fast; results update <300ms post‑keystroke (network allowing); keyboard selection works; ESC closes.
- Performance: No layout jank; images lazy; minimal main thread work.
- Accessibility: WCAG 2.2 AA for header, mega, and search flows.
