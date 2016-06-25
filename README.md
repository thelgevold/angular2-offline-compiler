# OfflineCompiler

To compile and launch the server run this:

./node_modules/.bin/ngc -p ./src && ng build && gulp bundle && node server.js


Note: There is currently a minor npm version bug in the compiler-cli

I had to manually hack the versions to get it to work:

Should be fixed in rc4, but see this bug for details: https://github.com/angular/angular/issues/9540


