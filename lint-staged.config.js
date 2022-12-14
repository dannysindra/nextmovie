module.exports = {
  // Lint then format TypeScript and JavaScript files
  '**/*.(js)': (filenames) => [`yarn prettier --write ${filenames.join(' ')}`],

  // Format MarkDown and JSON
  '**/*.(md|json)': (filenames) =>
    `yarn prettier --write ${filenames.join(' ')}`,
}
