import { Env } from "./env.types.js";

export const env: Env = {
  urlsToScrape: [
    {
      name: "Growth Supplements",
      baseUrl: "https://www.gsuplementos.com.br",
      creatines: {
        monohidrated: {
          name: "Monohidratada",
          url: "/creatina-monohidratada-250gr-growth-supplements-p985931",
          searchFor: [
            /<span.*>EM ESTOQUE\..*[\r\n]*.*<\/span>Envio imediato!<\/span>/,
          ],
        },
        creapure: {
          name: "Creapure",
          url: "/creatina-250g-creapure-growth-supplements-p985824",
          searchFor: [
            /<span.*>EM ESTOQUE\..*[\r\n]*.*<\/span>Envio imediato!<\/span>/,
          ],
        },
      },
    },
  ],
};
