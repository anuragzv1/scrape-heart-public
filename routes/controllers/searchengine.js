const express = require('express');
router = express.Router();
const se_scraper = require('se-scraper');
const core = require('../models/functions');


router.post('/google', (req, res) => {
    var num_pages = req.body.pages;
    var keyword = req.body.keywords.split(',');
    (async () => {
        let scrape_job = {
            search_engine: 'google',
            keywords: keyword,
            num_pages: num_pages,
        };
        try {
            var results = await se_scraper.scrape({}, scrape_job);
        }
        catch (err) {
            if (err) {
                console.log(err);
                core.apilog('google', 0, req.originalUrl, Date.now(), req.body);
            }
        }
        core.apilog('google', 1, req.originalUrl, Date.now(), req.body);
        res.send(results).status(200);


    })();
});

router.post('/bing', (req, res) => {
    var num_pages = req.body.pages;
    var keyword = req.body.keywords.split(',');
    (async () => {
        let scrape_job = {
            search_engine: 'bing',
            keywords: keyword,
            num_pages: num_pages,
        };
        try {
            var results = await se_scraper.scrape({}, scrape_job);
        }
        catch (err) {
            if (err) {
                console.log(err);
                core.apilog('bing', 0, req.originalUrl, Date.now(), req.body);
            }
        }
        core.apilog('bing', 1, req.originalUrl, Date.now(), req.body);
        res.send(results).status(200);


    })();
});

router.post('/infospace', (req, res) => {
    var num_pages = req.body.pages;
    var keyword = req.body.keywords.split(',');
    (async () => {
        let scrape_job = {
            search_engine: 'infospace',
            keywords: keyword,
            num_pages: num_pages,
        };
        try {
            var results = await se_scraper.scrape({}, scrape_job);
        }
        catch (err) {
            if (err) {
                console.log(err);
                core.apilog('infospace', 0, req.originalUrl, Date.now(), req.body);
            }
        }
        core.apilog('infospace', 1, req.originalUrl, Date.now(), req.body);
        res.send(results).status(200);


    })();
});

router.post('/baidu', (req, res) => {
    var num_pages = req.body.pages;
    var keyword = req.body.keywords.split(',');
    (async () => {
        let scrape_job = {
            search_engine: 'baidu',
            keywords: keyword,
            num_pages: num_pages,
        };
        try {
            var results = await se_scraper.scrape({}, scrape_job);
        }
        catch (err) {
            if (err) {
                console.log(err);
                core.apilog('baidu', 0, req.originalUrl, Date.now(), req.body);
            }
        }
        core.apilog('baidu', 1, req.originalUrl, Date.now(), req.body);
        res.send(results).status(200);


    })();
});

router.post('/duckduckgo', (req, res) => {
    var num_pages = req.body.pages;
    var keyword = req.body.keywords.split(',');
    (async () => {
        let scrape_job = {
            search_engine: 'duckduckgo',
            keywords: keyword,
            num_pages: num_pages,
        };
        try {
            var results = await se_scraper.scrape({}, scrape_job);
        }
        catch (err) {
            if (err) {
                console.log(err);
                core.apilog('duckduckgo', 0, req.originalUrl, Date.now(), req.body);
            }
        }
        core.apilog('duckduckgo', 1, req.originalUrl, Date.now(), req.body);
        res.send(results).status(200);


    })();
});
router.get('/', (req, res) => {
    res.json({
        "Google": "/se/google",
        "Bing": "/se/bing",
        "Infospace": "/se/infospace",
        "Baidu": '/se/baidu',
        "DuckDuckGo": "/se/duckduckgo"
    });
});



module.exports = router;
