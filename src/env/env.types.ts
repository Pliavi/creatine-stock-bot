export interface CreatineScrapDefinition {
  name: string;
  url: string;
  searchFor: RegExp[];
}

export interface CreatineScrapTypes {
  [key: string]: CreatineScrapDefinition;
}

export interface ScrapWebsiteDefinition {
  name: string;
  baseUrl: string;
  creatines: CreatineScrapTypes;
}

export interface Env {
  urlsToScrape: ScrapWebsiteDefinition[];
}
