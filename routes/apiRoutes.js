var feelings = require("../data/feelings");
var responses = require("../data/responses");

module.exports = function(app) {
    app.get("/api/feelings", function(req, res) {
        res.json(feelings);
    })

    app.get("/api/responses", function(req, res) {
        res.json(responses);
    })

    app.post("/api/response", function(req, res) {
        responses.push(req.body);
        res.json(true);
    })
}