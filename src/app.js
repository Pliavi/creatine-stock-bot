require("dotenv").config();
const { default: axios } = require("axios");
const { getAvailabilities } = require("./scrapper");
const { getAvailabilityChanges } = require("./validators");
const { storeAvailabilities, retrieveAvailabilities } = require("./store");

const BOT_URL = process.env.TELEGRAM_BOT_URL;
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const BOT_CHAT_ID = process.env.TELEGRAM_BOT_CHAT_ID;
const CHANNEL_URL = `${BOT_URL}${BOT_TOKEN}/sendMessage?chat_id=${BOT_CHAT_ID}&parse_mode=MarkdownV2&text=`;

const senderUrlGenerator = (name, url, available) => {
  const availableTemplate = `🚚💨 [Creatina ${name}](${url}) ficou *DISPONÍVEL* no estoque\\! 💪😎`;
  const unavailableTemplate = `💣💥 [Creatina ${name}](${url}) ficou *INDISPONÍVEL* no estoque\\.\\.\\. Mas estamos de olho\\! Novidades em breve\\! 👁‍🗨`;

  const template = available ? availableTemplate : unavailableTemplate;

  return CHANNEL_URL + template;
};

async function startBot() {
  const olderAvailability = retrieveAvailabilities();
  const currentAvailability = await getAvailabilities();

  const availabilityChanges = getAvailabilityChanges(
    currentAvailability,
    olderAvailability
  );

  if (Object.keys(availabilityChanges).length > 0) {
    storeAvailabilities(currentAvailability);

    for (const { available, name, url } of availabilityChanges) {
      await axios(senderUrlGenerator(name, url, available));
    }
  }
}

module.exports = { startBot };
