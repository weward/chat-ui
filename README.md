# nuxt-chat UI
A smart chat web app SaaS with subscription feature. Generates embeddable code for integration to any websites or web apps.
Made with Laravel and Vue (Nuxt). This repository houses the actual chat UI that the embeddable code uses.


The idea behind for using NUXT is not because it uses SSR but simply because it implements opinionated code and it is a breeze to jumpstart development with nuxt.
This app does not use SSR.

### System Design
- API backend for admin panel
- Nuxt-based frontend for admin panel
- Chat UI for the actual embeddable code. Detached from NUXT-based frontend for lower size.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
