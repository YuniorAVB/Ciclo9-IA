const path = require("path");
const pdfreader = require("pdfreader");
const { existsSync } = require("fs");

module.exports = async function ({ url, keysSearch }) {
  const PDF_TEMP = path.join(__dirname, "../", "public", "cv", url);

  let estadoKey = false;
  let rows = {};
  let textPdf = "";

  return new Promise((resolve, reject) => {
    if (!existsSync(PDF_TEMP)) {
      resolve({ state: true, key: estadoKey });
    }

    async function printRows() {
      await Object.keys(rows)
        .sort((y1, y2) => parseFloat(y1) - parseFloat(y2))
        .forEach((y) => {
          textPdf += (rows[y] || []).join("");
        });

      await keysSearch.forEach((key) => {
        if (textPdf.toLowerCase().search(key.toLowerCase()) !== -1) {
          estadoKey = true;
        }
      });

      resolve({ state: true, key: estadoKey });
    }

    new pdfreader.PdfReader().parseFileItems(PDF_TEMP, function (err, item) {
      if (!item || item.page) {
        printRows();
        rows = {};
      } else if (item.text) {
        (rows[item.y] = rows[item.y] || []).push(item.text);
      }
    });
  });
};
