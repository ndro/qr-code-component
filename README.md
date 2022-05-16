# Frontend Mentor - QR code component solution with Vue 3 and Tailwind CSS

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### Screenshot

![Desktop Preview](./screenshots/desktop.png)
![Mobile Preview](./screenshots/mobile.png)

### Links

- Solution URL: [github](https://github.com/ndro/qr-code-component)
- Live Site URL: [QR Code Component](https://ndro.github.io/qr-code-component/)

## My process

### Built with

- Semantic HTML5 markup
- [Vue Js](https://vuejs.org/) - JS library
- [Tailwind CSS](https://tailwindcss.com/) - For styles
- [Vite](https://vitejs.dev/) - Build Tool

### What I learned

Tailwind CSS come with much default value that we can use in the project. But customization in tailwind is easy. Custom as global variable or locally.

This is example for global value, we can add in the config:

```js
tailwind.config.js

theme: {
  fontFamily: { // override existing value
    sans: ['Outfit', 'sans-serif']
  },
  extend: { // add another value
    fontSize:{
      'base': '15px'
    },
    colors: {
      'light-gray' : 'hsl(212, 45%, 89%)',
      'grayish-blue' : 'hsl(220, 15%, 55%)',
      'dark-blue' : 'hsl(218, 44%, 22%)',
    }
  },
}
```
or implement locally
```html
<p class="text-[15px] text-[hsl(218, 44%, 22%)]">
  This page content
</p>
```


## Author

- Frontend Mentor - [@ndro](https://www.frontendmentor.io/profile/ndro)
- Twitter - [@ndroTB](https://www.twitter.com/ndroTB)
