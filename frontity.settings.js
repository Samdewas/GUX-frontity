const settings = {
  "name": "ux",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/twentytwenty-theme",
      "state": {
        "theme": {
          "menu": [
            // [
            //   "Home",
            //   "/"
            // ],
            [
              "Fonts",
              "/category/nature/"
            ],
            [
              "Add-Ons",
              "/category/travel/"
            ],
            [
              "Templates",
              "/tag/japan/"
            ],
            [
              "Graphics",
              "/about-us/"
            ],
            [
              "Themes",
              "/about-us/"
            ],
            [
              "Stock Image",
              "/about-us/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://befonts.com/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
