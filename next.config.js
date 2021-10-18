const withSass = require('@zeit/next-sass');

module.exports = withSass({
    /* config options here */
});

module.exports = {
    reactStrictMode: true,
    experimental: {
        optimizeFonts: true,
    },
};
