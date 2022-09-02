import  puppeteer  from "puppeteer";
import  cheerio  from "cheerio";
import  cronJob  from "cron";


async function browserConfiguration(){
    const url = 'https://twitter.com/'
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url)
    await page.screenshot({path: 'example.png'})
    return page
}

