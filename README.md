# browser-screenshot.js
# Charles Smith II
# September 11, 2017
# Works Cited: https://tutorialzine.com/2017/08/automating-google-chrome-with-node-js

A NodeJS script to test some web responsive viewpoints.

Must have Node.JS and Puppeteer installed to use.

TO RUN:
  Type, "node [file-name].js wwww.example.com", and then press enter. The "http(s)://" part is alreday taken care of. If all goes well you should see this output.
  Starting...
  Capturing
  .
  .
  .
  .
  .
  .
  .
  .
  .
  Done.
Within the same directory that the script is run there will be 9 different files, one for each viewpoint of the requested page. So 1500, 1400, 1200, 1100, 992, 768, 600, 480, and 320px (my standard checks). 
