     Dev build
npm init ---> test commamd jest(got package.json)
Parcel-> webpack >Vite  > Bundler imp(package/dependency)
npm install -D parcel(got package-lock.json and node_modules)
npx parcel index.html(excute package) -->(got dist folder and parcel-cache folder)
npm install react
npm install react-dom(import and give type="module")

Production build:
npx parcel build index.html (Remember in package.json remove main:index.js)
-------------------------------------------------------------------------------------------
To support older browsers:In package.json add this:
"browserslist:[
    "last 2 versions"
]
-------------------------------------------------------------------------------------
.gitignore
/node-modules(can be regenerated because we have package.json and package-lock.json .Can ignore)
/dist
.parcel-cache(dist and cache folder can be regenerated bu doing npx parcel index.html or 
npm parcel build index.html.  We can ignore )



