export const fallbackLng = "en";
export const languages = ["en", "es"];
export const cookieName = "language";
export const defaultNS = "translation";

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
