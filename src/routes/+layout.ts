import type { MetaTagsProps } from "svelte-meta-tags"

export const prerender = true

export const load = ({ url }) => {
  const baseMetaTags = {
    titleTemplate: "%s | European Market",
    description:
      "European Market — Delicious & Nutritious Products From 25+ Different Countries. European grocery store in Chattanooga, TN since 1999.",
    canonical: new URL(url.pathname, "https://europeanmarketus.com").href,
    openGraph: {
      type: "website",
      url: new URL(url.pathname, "https://europeanmarketus.com").href,
      locale: "en_US",
      siteName: "European Market",
      images: [
        {
          url: "https://ik.imagekit.io/esf/images/min/european-meats.jpg?tr=w-1200,h-630",
          alt: "European Market - Delicious European Meats and Products",
          width: 1200,
          height: 630,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      cardType: "summary_large_image" as const,
    },
    additionalRobotsProps: {
      noarchive: false,
      notranslate: false,
      noimageindex: false,
      maxSnippet: -1,
      maxImagePreview: "large" as const,
      maxVideoPreview: -1,
    },
  } satisfies MetaTagsProps

  return { baseMetaTags }
}
