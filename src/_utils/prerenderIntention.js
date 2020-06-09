const handleLinkIntention = (linkElement) => {
  if (
    linkElement.tagName !== "A" ||
    linkElement.href === "undefined" ||
    linkElement.href === window.location.href
  )
    return;

  const link = document.createElement("link");
  link.rel = "prerender";
  link.href = linkElement.href;
  document.head.appendChild(link);
};

export const prerenderIntention = () => {
  [...document.getElementsByClassName("prerender-intention")].forEach((link) =>
    handleLinkIntention(link)
  );
};
