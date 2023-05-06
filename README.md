# Gapstars_YC

# Clone and set up the repository
```
$ git clone https://github.com/YanushaCooray/Gapstars_YC.git
$ cd Gapstars_YC
$ npm install
```

### Running e2e specs
You can use one of following command to execute all the tests with headed mode.
```
npx playwright test
```
### To generate the HTML report

```
npx playwright show-report
```

### Notes

* All the test cases are running in Chromium , Firefox & Webkit browsers

* If you need to execute the test in headless mode , please follow the below given steps
```
   1- Open playwright.config.ts file
   2- Change the value as 'true' in line number 26  (ex :  headless : true )
```




