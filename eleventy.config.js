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

  eleventyConfig.addCollection("reports", (api) =>
    api.getFilteredByGlob("src/fishing-reports/*.md").sort((a, b) => b.date - a.date)
  );

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
