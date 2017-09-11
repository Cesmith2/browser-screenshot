const puppeteer = require('puppeteer');
try {
	(async () => {
		// start puppeteer and open a new browser
		console.log("Starting...");
		const browser = await puppeteer.launch();
		const page = await browser.newPage();

		// an array of device viewpoints
		const viewpoints = [1500, 1400, 1200, 1100, 992, 768, 600, 480, 320];

		// go to URL
		let domain = process.argv[2];
		let url = `http:\/\/${domain}`;
		await page.goto(`${url}`); //('https://www.example.com');
		console.log("Capturing");
		for(let i=0; i<viewpoints.length; i++) {
			console.log(".");
			let vp = viewpoints[i];

			// heigh is irrelevant, (but we set it anyway)
			await page.setViewport({
				width: vp,
				height: 1000
			});

			// since we're screen shotting the whole page
			await page.screenshot({
				path: `${domain}-${vp}.png`,
				fullPage: true
			});
		}
		
		// close browser
		browser.close();
		console.log("Done.");
	})();
}
catch(error) {
	// done goofed
	process.stdout.write("We Done goofed!\n");
}
