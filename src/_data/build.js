// Search engines may only index the real domain on a production deploy.
// Netlify previews (*.netlify.app, deploy previews, branch deploys) get noindex
// so the test site never competes with www.reeldealfishin.com.
const url = process.env.URL || "";
const context = process.env.CONTEXT || "local";
export default {
  year: new Date().getFullYear(),
  indexable: context === "production" && url.includes("reeldealfishin.com"),
  // Address used in link previews (og:url, og:image). On the real domain this is
  // empty so the site URL is used; on the netlify.app preview it's the preview
  // address, so a texted preview link opens the preview, not the old Wix site.
  previewOrigin: context === "production" && url.includes("reeldealfishin.com") ? "" : url,
  // Changes on every build so browsers fetch the new stylesheet after each deploy
  version: Date.now().toString(36),
};
