module.exports = {
    transform: {
      "^.+\\.js$": "babel-jest", // Use Babel to transform JavaScript files
    },
    transformIgnorePatterns: [
      // Allow Jest to transform `axios` (or other ES modules in `node_modules`)
      "/node_modules/(?!axios)/",
    ],
  };