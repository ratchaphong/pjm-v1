export function withSEO(title, description, keywords) {
  document.title = title;
  const meta = document.getElementsByTagName("meta");
  Object.values(meta).forEach((tag) => {
    if (tag.name === "description") {
      tag.content = description;
    }
    if (tag.name === "keywords") {
      tag.content = keywords;
    }
  });
}
