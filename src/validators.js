/**
 * @typedef {import("./scrapper").CreatineInfo} CreatineInfo
 *
 * @param {CreatineInfo} current
 * @param {CreatineInfo} older
 * @returns {CreatineInfo[]}
 */
function getAvailabilityChanges(current, older) {
  const changes = [];

  for (const [key, availability] of Object.entries(current)) {
    const isNewAdded = !Object(older).hasOwnProperty(key);
    const hasChanges = older[key]?.available !== availability.available;

    if (isNewAdded || hasChanges) {
      changes.push(availability);
    }
  }

  return changes;
}

module.exports = {
  getAvailabilityChanges,
};
