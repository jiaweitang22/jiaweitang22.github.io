export const projects = [
  {
    title: "Image Warping and Mosaicing",
    course: "CS 180",
    tags: ["Homographies", "Panoramas"],
    img: "/projects/proj4.webp",
    desc: "Recovering homographies from point correspondences, rectifying images, and warping and blending photos into panoramic mosaics.",
    url: "https://jiaweitang22.github.io/cs180-proj4/",
  },
  {
    title: "Fun with Flow Models",
    course: "CS 180",
    tags: ["Generative models"],
    img: "/projects/proj3.webp",
    desc: "Exploring the power of flow models for image generation.",
    url: "https://jiaweitang22.github.io/cs180-proj3/",
  },
  {
    title: "Fun with Filters and Frequencies",
    course: "CS 180",
    tags: ["Filtering", "Blending"],
    img: "/projects/proj2.png",
    desc: "Convolutions, hybrid images, and multiresolution blending.",
    url: "https://jiaweitang22.github.io/cs180-proj2/",
  },
  {
    title: "Images of the Russian Empire",
    course: "CS 180",
    tags: ["Alignment", "Image pyramids"],
    img: "/projects/proj1.jpg",
    desc: "Colorizing the Prokudin-Gorskii photo collection by aligning glass-plate negatives with exhaustive search and image pyramids.",
    url: "https://jiaweitang22.github.io/cs180-proj1/",
  },
  {
    title: "Becoming Friends with Your Camera",
    course: "CS 180",
    tags: ["Photography"],
    img: "/projects/proj0.jpg",
    desc: "An exploration of perspective, focal length, and the dolly zoom.",
    url: "https://jiaweitang22.github.io/cs180-proj0/",
  },
  {
    title: "Secure File Sharing System",
    course: "CS 161",
    tags: ["Cryptography", "Security", "Go"],
    img: "/projects/cs161-proj2.svg",
    desc: "A Go client library for storing, sharing and revoking access to files on a server assumed to be malicious.",
    url: "/projects/secure-file-sharing",
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
  Cryptography: "blue",
  Security: "red",
  Go: "gray",
};

export function tagColor(tag: string) {
  return TAG_COLORS[tag] ?? "gray";
}
