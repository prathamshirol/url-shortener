const shortid = require("shortid");
const URL = require("../models/url");

async function generatenewshorturl(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });
  
  const shortId = shortid.generate(); // Correctly use the `generate()` method of shortid
  const newUrl = await URL.create({
    shortId: shortId,
    redirecturl: body.url,
    visithistory: [],
  });

  return res.json({ id: newUrl.shortId }); // Fix response to return the correct shortId
}

module.exports = {
  generatenewshorturl,
};
