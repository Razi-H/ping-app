npm i react-modal-sheet motion @splidejs/react

add "types": "./dist/types/index.d.ts" to exports package in node_module folder for @splidejs/react
-->
"exports": {
    ".": {
      "require": "./dist/js/react-splide.cjs.js",
      "import": "./dist/js/react-splide.esm.js",
      "default": "./dist/js/react-splide.esm.js",
      "types": "./dist/types/index.d.ts"
    },
