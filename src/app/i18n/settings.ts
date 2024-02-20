export const fallbackLng = "en";
export const languages = ["en", "es"];
export const cookieName = "i18next";
export const defaultNS = "translation";

export const languageNames: { [key: string]: string; } = ({
  en: "English",
  es: "Español"
});

export const getOptions = (lng = fallbackLng, ns = defaultNS) => {
  return ({
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  });
};
