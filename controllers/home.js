module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs");
  },
  getSetup: (req, res) => {
    res.render("setup.ejs")
  }
};
