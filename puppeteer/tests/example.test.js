const puppeteer = require('puppeteer')

describe('My Fist Puppeteer Test', () => {
    it('should launch the browser', async function () {
        const browser = await puppeteer.launch({ 
            headless: false, 
            executablePath: '/usr/bin/chromium-browser', 
            slowMo: 50, 
            devtools: true })
        const page = await browser.newPage()
        await page.goto('https://devexpress.github.io/testcafe/example')
        await page.type('#developer-name', 'Mike', {delay: 2000})
    
    })
})