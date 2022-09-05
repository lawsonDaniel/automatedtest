import  puppeteer  from "puppeteer";
import  cheerio  from "cheerio";
import  cronJob  from "cron";


const url = 'https://www.klasshour.com/';

async function configureBrowser() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    return page;
    await browser.close()
}

async function Login(page) {
    await page.reload();
    page.type('input', 'Hello',{delay: 100})
   await page.screenshot({path: 'example.png'});
    

}

async function test(){
    let page = await configureBrowser();
    await Login(page)
}
test()