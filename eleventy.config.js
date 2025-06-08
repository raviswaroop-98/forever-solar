export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"_includes/custom.css": "css/custom.css"});
  eleventyConfig.addPassthroughCopy({"node_modules/bootstrap/dist/css/bootstrap.css": "css/bootstrap.css"});
  eleventyConfig.addPassthroughCopy({"node_modules/bootstrap/dist/js/bootstrap.bundle.js":"js/bootstrap.bundle.js"});
  eleventyConfig.addPassthroughCopy({"_includes/custom.js": "js/custom.js"});
  eleventyConfig.addPassthroughCopy("img");
};