function getLocaleDate(
  dateString,
  locale = "en-IN",
  options = { year: "numeric", month: "2-digit", day: "2-digit" }
) {
  return new Date(dateString).toLocaleDateString(locale, options);
}

export default getLocaleDate;
