# MedRaahi

A responsive, student-led medical education resource website for MBBS abroad and FMGE preparation.

## Files
- `index.html` — page structure and content
- `style.css` — responsive styling, animation and layout
- `resources.js` — resource catalogue
- `script.js` — search, category filters, mobile menu and scroll reveal

## Preview locally
Open `index.html` in a modern browser. Internet access is needed for the Google Fonts stylesheet; the website otherwise uses plain HTML, CSS and JavaScript.

## Add a resource
Edit `resources.js` and add an object to `window.MEDRAAHI_RESOURCES`:
```js
{
  title: "Your resource title",
  category: "Notes", // Notes, Books & PDFs, or FMGE
  subject: "Anatomy",
  description: "A short description",
  icon: "📘",
  url: "https://your-public-file-link.example/resource.pdf",
  status: "Available"
}
```
Use public links to files you have permission to distribute. Do not upload copyrighted books or paid material without permission. For large PDFs, link to a file-hosting service rather than committing the PDF into the Git repository.

## Publish free with GitHub Pages
1. Create a new **public** GitHub repository named `medraahi` (or another name).
2. Upload `index.html`, `style.css`, `resources.js`, `script.js`, and this README to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. After GitHub finishes deploying, your site will be available at `https://YOUR-USERNAME.github.io/medraahi/`.

If you name the repository `YOUR-USERNAME.github.io`, the URL can instead be `https://YOUR-USERNAME.github.io/`.

## Important
This is a static website starter. The resource cards and search work in the browser, but there is no private admin panel, user login, or direct public upload form yet. To add or update resources, edit `resources.js` and publish the change. Use only materials you have the right to share.
