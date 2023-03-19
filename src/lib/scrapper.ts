import { CreatineScrapTypes, ScrapWebsiteDefinition } from "@/env/env.types.js";
import * as cheerio from "cheerio";

interface CreatinesAvailability {
  [key: string]: {
    name: string;
    isAvailable: boolean;
  };
}

function scrapUrl(url: string) {
  const $ = cheerio.load(url);
  const html = $.html();

  return html;
}

function isCreatineAvailable(url: string, searchFor: RegExp[]) {
  const html = scrapUrl(url);

  const isAvailable = searchFor.every((regex) => regex.test(html));

  return isAvailable;
}

function getCreatinesAvailabilityByWebsite(
  websiteDefs: ScrapWebsiteDefinition
) {
  const availabilities = {} as CreatinesAvailability;
  const { baseUrl, creatines } = websiteDefs;

  Object.entries(creatines).forEach(([key, creatine]) => {
    const url = `${baseUrl}${creatine.url}`;
    const isAvailable = isCreatineAvailable(url, creatine.searchFor);

    availabilities[key] = {
      name: creatine.name,
      isAvailable,
    };
  });

  return availabilities;
}
