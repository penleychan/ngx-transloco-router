export const availableLangs = ['en', 'fr'];

export const loader = (importer) => {
  return availableLangs.reduce((acc, lang) => {
    acc[lang] = () => {
      console.log("Importing via inline loader.");
      return importer(lang);
    };
    return acc;
  }, {});

}
