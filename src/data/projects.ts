export const projects = [
  {
    title: "Image Warping and Mosaicing",
    tags: ["Homographies", "Panoramas"],
    img: "/projects/proj4.webp",
    desc: "Recovering homographies from point correspondences, rectifying images, and warping and blending photos into panoramic mosaics.",
    url: "https://jiaweitang22.github.io/cs180-proj4/",
  },
  {
    title: "Fun with Flow Models",
    tags: ["Generative models"],
    img: "/projects/proj3.webp",
    desc: "Exploring the power of flow models for image generation.",
    url: "https://jiaweitang22.github.io/cs180-proj3/",
  },
  {
    title: "Fun with Filters and Frequencies",
    tags: ["Filtering", "Blending"],
    img: "/projects/proj2.png",
    desc: "Convolutions, hybrid images, and multiresolution blending.",
    url: "https://jiaweitang22.github.io/cs180-proj2/",
  },
  {
    title: "Images of the Russian Empire",
    tags: ["Alignment", "Image pyramids"],
    img: "/projects/proj1.jpg",
    desc: "Colorizing the Prokudin-Gorskii photo collection by aligning glass-plate negatives with exhaustive search and image pyramids.",
    url: "https://jiaweitang22.github.io/cs180-proj1/",
  },
  {
    title: "Becoming Friends with Your Camera",
    tags: ["Photography"],
    img: "/projects/proj0.jpg",
    desc: "An exploration of perspective, focal length, and the dolly zoom.",
    url: "https://jiaweitang22.github.io/cs180-proj0/",
  },
];

// Muted colors for tag pills
const TAG_COLORS: Record<string, string> = {
  Homographies: "blue",
  Panoramas: "green",
  "Generative models": "purple",
  Filtering: "orange",
  Blending: "pink",
  Alignment: "yellow",
  "Image pyramids": "brown",
  Photography: "red",
};

export function tagColor(tag: string) {
  return TAG_COLORS[tag] ?? "gray";
}
