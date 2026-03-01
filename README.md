# Digitize — Project Structure

This repository contains a small marketing site. I reorganized assets into a standard structure:

- `index.html` — main entry (keeps Tailwind CDN include)
- `assets/css/style.css` — custom CSS overrides
- `assets/js/main.js` — site JavaScript (copy email + toast)

Next steps you might want:
- Add images to `assets/img/`

## Why no build step?

The Tailwind CDN is perfectly optimized for this single-page marketing site — it's fast, lightweight, and requires zero build complexity. We're keeping the agency site as a lightning-fast brochure. All the heavy-lifting build-step energy is reserved for the React ledger application where it's actually needed.
