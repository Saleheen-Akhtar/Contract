from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto("https://www.mersi-architecture.com/")
    page.wait_for_timeout(5000)
    page.screenshot(path="mersi.png", full_page=False)
    browser.close()
