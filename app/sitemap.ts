import { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://playtoskyproductions.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about/", "/careers/", "/contact/", "/location/"].map((chemin) => ({
    url: `${baseUrl}${chemin || "/"}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: chemin ? 0.5 : 1,
  }));
}
