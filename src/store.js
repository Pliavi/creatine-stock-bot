/**
 * @typedef {import('./validators').CreatineInfo} CreatineInfo
 */

const fs = require("fs");

const DB_FILENAME = "../data/availability.json";
const ENCODING = "utf-8";
const ERROR_CALLBACK = (err) => err && console.log(err);

/**
 * @param {CreatineInfo[]} availability
 */
function storeAvailabilities(availability) {
  const json = JSON.stringify(availability);

  fs.writeFile(DB_FILENAME, json, ENCODING, ERROR_CALLBACK);
}

/**
 * @returns {CreatineInfo[]}
 */
function retrieveAvailabilities() {
  const obj = JSON.parse(fs.readFileSync(DB_FILENAME, ENCODING));

  return obj;
}

module.exports = {
  storeAvailabilities,
  retrieveAvailabilities,
};
