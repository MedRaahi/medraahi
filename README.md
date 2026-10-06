# MedRaahi

A responsive, student-led medical education resource website for MBBS abroad and FMGE preparation.

## Files
- `index.html` — page structure and main content
- `style.css` — responsive styling, layout, and animations
- `resources.js` — study resource catalogue and links
- `script.js` — search functionality, category filters, mobile menu, and scroll animations

## Contact & Contributions
To suggest study materials, report broken links, or contribute notes, reach out at:
**fmgecracker2035@gmail.com**

## Preview Locally
Open `index.html` in any modern web browser. Internet access is required to load Google Fonts; otherwise, the site runs on standard HTML, CSS, and plain JavaScript.

## How to Add or Update Resources
Edit `resources.js` and add or modify items inside the `window.MEDRAAHI_RESOURCES` array:

```js
{
  title: "Your Resource Title",
  category: "Notes", // Categories: Notes, Books & PDFs, or FMGE
  subject: "Anatomy",
  description: "A short summary of what this resource covers.",
  icon: "📘",
  url: "[https://your-google-drive-or-pdf-link.com](https://your-google-drive-or-pdf-link.com)",
  status: "Available"
}
