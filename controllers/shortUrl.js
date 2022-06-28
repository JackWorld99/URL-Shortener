const ShortUrl = require("../models/shortUrl");

exports.display = async (req, res) => {
  let T_Clicks = 0,
    sumArray = [];
  const shortUrls = await ShortUrl.find();
  const T_Links = await ShortUrl.count({});

  shortUrls.forEach((shortUrl) => {
    sumArray.push(shortUrl.clicks);
    T_Clicks = sumArray.reduce(function (a, b) {
      return a + b;
    });
  });

  res.render("index", {
    shortUrls: shortUrls,
    TotalLinks: T_Links,
    TotalClicks: T_Clicks,
  });
};

exports.addUrl = async (req, res) => {
  await ShortUrl.create({ full: req.body.fullUrl });
  res.redirect("/");
};

exports.updateClick = async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
  if (shortUrl == null) return res.sendStatus(404);
  shortUrl.clicks++;
  shortUrl.save();
  res.redirect(shortUrl.full);
};
