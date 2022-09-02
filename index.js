const puppeteer = require('puppeteer');



// got the home page
async function Home(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
   try {
         await page.goto(url, {
            waitUntil: 'networkidle2',
          });
         await page.screenshot({path: `screenshot/home.png`});
         //login
                try {
                    await page.goto(`${url}/login`, {
                        waitUntil: 'networkidle2',
                      })
                    await page.screenshot({path: `screenshot/login.png`});
                } catch (error) {
                    console.log('an error occured',error)
                    await browser.close();
                } 
        
   } catch (error) {
        console.log('an error occured',error)
        await browser.close();
   }
   
  
    
}
 Home('https://twitter.com/','home')