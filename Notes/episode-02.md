# package.json is configuration for npm (npm init)

# npm i -D parcel (parcel is bundler)

# ~2.8.1 (it will update patch version automatically)

# ^2.8.1 (it will update minor/patch version automatically)

# node_modules is database of dependency

# npm is used to install / uninstall package. npx is package executer that is used to directly execute javascript packages.

# npm i react react-dom (install react)

# npx parcel index.html

# parcel
    - dev build
    - local server
    - HMR -> hot module replacement
    - File watching algorithm (written in c++)
    - caching faster build
    - Image optimization
    - Minification of files for production
    - Bundling
    - compress of files
    - consistent hashing
    - code splitting
    - differential bundling (support older browsers)
    - diagnostic
    - error handling
    - https
    - tree shaking (remove unused code)
    - different dev and prod bundles

# prod build - npx parcel build index.html

# in package.json

 "browserslist": [
    "last 2 versions"
  ]


