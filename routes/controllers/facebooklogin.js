const puppeteer = require('puppeteer');
const readConfig =  require('jsonfile').readFileSync;
const express = require('express');
const router = express.Router();
const fs = require('fs');
const core = require('../models/functions');


//Load Config File & Facebook Config
try {
    var config = readConfig(process.argv[2] || "config.json");
    var facebookconfig = readConfig("facebookConfig.json");
} catch (e) {
    console.log("[error] " + new Date().toGMTString() + " : Server Config Not Found.");
    return process.exit(-1);
}

router.post('/',(req,res)=>{
check = req.body.check;
if(check=='true'){
    console.log(req.body);
    const sleep = async (ms) => {
        return new Promise((res, rej) => {
          setTimeout(() => {
            res();
          }, ms)
        });
      }
      const ID = {
        login: '#email',
        pass: '#pass'
      };
      
      (async () => {
        const browser = await puppeteer.launch({
          headless: false,
          args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        const page = await browser.newPage();
        let login = async () => {
          // login
          await page.goto('https://facebook.com', {
            waitUntil: 'networkidle2'
          });
          await page.waitForSelector(ID.login);
          console.log(config.facebook.user);
          console.log(ID.login);
          await page.type(ID.login, config.facebook.user);
      
          await page.type(ID.pass, config.facebook.pass);
          await sleep(500);
          await page.click("#loginbutton")
          if(page.url().includes('login')){
            core.apilog('facebook', 0, '/facebookapi', Date.now(), req.body.user);
            console.log("login failed");
          }
          else {
            core.apilog('facebook', 1, '/facebookapi', Date.now(), req.body.user);  
            console.log("login successful");}
          await page.waitForNavigation();
        }
        await login();
      })();
}
else if (check=='false'){
    content = `{ "facebook": { "user": "${req.body.user}", "pass": "${req.body.pass}" } }`;
    try {
        fs.writeFileSync('facebookConfig.json', content, 'utf-8');
      } catch(err) {
        // An error occurred
        console.error(err);
      }
      console.log(facebookconfig);
    const sleep = async (ms) => {
        return new Promise((res, rej) => {
          setTimeout(() => {
            res();
          }, ms)
        });
      }
      const ID = {
        login: '#email',
        pass: '#pass'
      };
      
      (async () => {
        const browser = await puppeteer.launch({
          headless: false,
          args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        const page = await browser.newPage();
        let login = async () => {
          // login
          await page.goto('https://facebook.com', {
            waitUntil: 'networkidle2'
          });
          await page.waitForSelector(ID.login);
          console.log(req.body.user);
          console.log(ID.login);
          await page.type(ID.login, req.body.user);
      
          await page.type(ID.pass, req.body.pass);
          await sleep(500);
          await page.click("#loginbutton")
          if(page.url().includes('login')){
            core.apilog('facebook', 0, '/facebookapi', Date.now(), req.body.user);
            console.log("login failed");
          }
          else {
            core.apilog('facebook', 1, '/facebookapi', Date.now(), req.body.user);  
            console.log("login successful");}
          await page.waitForNavigation();
        }
        await login();
      })();
}

});

module.exports = router;