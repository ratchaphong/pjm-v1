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
    if (tag.getAttribute("property") === "og:title") {
      tag.content = title;
    }
    if (tag.getAttribute("property") === "og:description") {
      tag.content = description;
    }
    if (tag.name === "twitter:title") {
      tag.content = title;
    }
    if (tag.name === "twitter:description") {
      tag.content = description;
    }
  });
}

export const go2Top = () => {
  window && window.scrollTo({ top: 0, behavior: "smooth" });
};
