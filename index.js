import  puppeteer  from "puppeteer";
import  $  from "cheerio";
import  cronJob  from "cron";


const url = 'https://twitter.com/';

async function configureBrowser() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    return page;
    await browser.close()
}

async function Login(page) {
    await page.reload();
    let html = await page.evaluate(() => document.body.innerHTML);
    // console.log(html);
    let a = $('a',html).each((link)=>{
        return link.toString()
    })
console.log(a)
}

async function test(){
    let page = await configureBrowser();
    await Login(page)
}
 test()