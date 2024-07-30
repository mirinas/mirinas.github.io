module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/css');
    eleventyConfig.addPassthroughCopy('src/resources');
    eleventyConfig.addPassthroughCopy('favicon.ico');

    eleventyConfig.addWatchTarget('src/css');
    eleventyConfig.addWatchTarget('src/resources');

    return {
      dir: {
        input: 'src',
        includes: '_includes',
        output: 'docs'
      },
      templateFormats: ['md', 'njk', 'html'],
      markdownTemplateEngine: 'njk',
      htmlTemplateEngine: 'njk',
      dataTemplateEngine: 'njk'
    }
  };