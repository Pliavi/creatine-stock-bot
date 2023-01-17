/**
 * @typedef {{name: string; available: boolean; url: string}} CreatineInfo
 */

const { default: axios } = require("axios");

const UNAVAILABLE_SEARCH_STRING = "AVISE-ME QUANDO CHEGAR";
const CREATINE_URLS = {
  comum:
    "https://www.gsuplementos.com.br/creatina-monohidratada-250gr-growth-supplements-p985931",
  creapure:
    "https://www.gsuplementos.com.br/creatina-250g-creapure-growth-supplements-p985824",
};

/**
 * @async
 * @param {string} url
 * @returns {Promise<string>}
 */
async function getPageHTML(url) {
  const response = await axios(url);
  const html = response.data;

  return html;
}

/**
 * @async
 * @returns {Promise<CreatineInfo[]>}
 */
async function getAvailabilities() {
  const creatineInfo = [];
  const creatineEntries = Object.entries(CREATINE_URLS);

  for (const [creatineName, url] of creatineEntries) {
    const html = await getPageHTML(url);
    const isAvailable = !html.includes(UNAVAILABLE_SEARCH_STRING);

    creatineInfo.push({
      name: creatineName,
      available: isAvailable,
      url: url,
    });
  }

  return creatineInfo;
}

module.exports = {
  getAvailabilities,
};
