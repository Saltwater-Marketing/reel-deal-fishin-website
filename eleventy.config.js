import fs from "node:fs";
const sizes = JSON.parse(fs.readFileSync("src/_data/imgsizes.json", "utf8"));
export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });

  // Clean URL for a page: "/inshore.html" -> "/inshore", "/index.html" -> "/"
  eleventyConfig.addFilter("cleanUrl", (url) => {
    if (!url) return "/";
    return url.replace(/index\.html$/, "").replace(/\.html$/, "");
  });

  eleventyConfig.addFilter("dateDisplay", (d) =>
    new Date(d).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" })
  );
  eleventyConfig.addFilter("dateIso", (d) => new Date(d).toISOString().slice(0, 10));
  eleventyConfig.addFilter("head", (arr, n) => arr.slice(0, n));
  eleventyConfig.addFilter("json", (v) => JSON.stringify(v));

  // Reviews: pick by id list (keeps the given order) or by trip key
  eleventyConfig.addFilter("reviewsByIds", (quotes, ids) =>
    (ids || []).map((id) => quotes.find((q) => q.id === id)).filter(Boolean)
  );
  eleventyConfig.addFilter("reviewsByTrip", (quotes, trip, n) =>
    quotes.filter((q) => q.trip === trip).slice(0, n || 99)
  );

  // Phones get the 800px copy of each large photo (src/images/NAME-800.webp, made by scripts/make-image-variants.py)
  eleventyConfig.addTransform("responsive-images", function (content) {
    if (!(this.page.outputPath || "").endsWith(".html")) return content;
    return content.replace(/<img\b([^>]*?)\bsrc="\/images\/([a-z0-9-]+)\.webp"([^>]*)>/g, (tag, pre, name, post) => {
      if (/srcset=/.test(tag) || name.endsWith("-800") || !fs.existsSync(`src/images/${name}-800.webp`)) return tag;
      const w = (sizes[name] || [])[0];
      if (!w) return tag;
      const sz = /hero__img/.test(tag) ? "100vw" : "(max-width: 900px) 100vw, 600px";
      return `<img${pre}src="/images/${name}.webp" srcset="/images/${name}-800.webp 800w, /images/${name}.webp ${w}w" sizes="${sz}"${post}>`;
    });
  });

  eleventyConfig.addCollection("reports", (api) =>
    api.getFilteredByGlob("src/fishing-reports/*.md").sort((a, b) => b.date - a.date)
  );

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
