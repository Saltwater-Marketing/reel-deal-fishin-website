// Search engines may only index the real domain on a production deploy.
// Netlify previews (*.netlify.app, deploy previews, branch deploys) get noindex
// so the test site never competes with www.reeldealfishin.com.
const url = process.env.URL || "";
const context = process.env.CONTEXT || "local";
export default {
  year: new Date().getFullYear(),
  indexable: context === "production" && url.includes("reeldealfishin.com"),
};
