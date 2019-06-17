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
    var keyword = req.body.keywords.split(',');
    let config = {
        search_engine: 'bing',
        debug: req.body.debug,
        verbose: req.body.verbose,
        keywords: keyword,
        num_pages: req.body.pages,
    };
    function callback(err, response) {
        if (err) {
            console.error(err);
            core.apilog('bing', 0, req.originalUrl, Date.now(), req.body);
        }
        core.apilog('bing', 1, req.originalUrl, Date.now(), req.body);
        res.send(response).status(200);
    }

    se_scraper.scrape(config, callback);
});

router.post('/infospace', (req, res) => {
    var keyword = req.body.keywords.split(',');
    let config = {
        search_engine: 'infospace',
        debug: req.body.debug,
        verbose: req.body.verbose,
        keywords: keyword,
        num_pages: req.body.pages,
    };
    function callback(err, response) {
        if (err) {
            console.error(err)
            core.apilog('infospace', 0, req.originalUrl, Date.now(), req.body);
        }
        console.dir(response, { depth: null, colors: true });
        core.apilog('infospace', 1, req.originalUrl, Date.now(), req.body);
        res.send(response).status(200);
    }

    se_scraper.scrape(config, callback);
});

router.post('/baidu', (req, res) => {
    var keyword = req.body.keywords.split(',');
    let config = {
        search_engine: 'baidu',
        debug: req.body.debug,
        verbose: req.body.verbose,
        keywords: keyword,
        num_pages: req.body.pages,
    };
    function callback(err, response) {
        if (err) {
            console.error(err)
            core.apilog('baidu', 0, req.originalUrl, Date.now(), req.body);
        }
        console.dir(response, { depth: null, colors: true });
        core.apilog('baidu', 1, req.originalUrl, Date.now(), req.body);
        res.send(response).status(200);
    }

    se_scraper.scrape(config, callback);
});
router.post('/duckduckgo', (req, res) => {
    var keyword = req.body.keywords.split(',');
    let config = {
        search_engine: 'duckduckgo',
        debug: req.body.debug,
        verbose: req.body.verbose,
        keywords: keyword,
        num_pages: req.body.pages,
    };
    function callback(err, response) {
        if (err) { console.error(err) 
            core.apilog('duckduckgo',0,req.originalUrl,Date.now(),req.body);
        }
        core.apilog('duckduckgo',1,req.originalUrl,Date.now(),req.body);
        res.send(response).status(200);
    }

    se_scraper.scrape(config, callback);
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
