import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 1280, "height": 800})
        await page.goto("https://www.bricknbolt.com/ce/home-construction-in-bangalore", wait_until="networkidle")
        await page.screenshot(path="bricknbolt_1.png", full_page=True)
        await browser.close()

asyncio.run(main())
