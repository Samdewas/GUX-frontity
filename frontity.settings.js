const settings = {
  "name": "ux",
  "state": {
    "frontity": {
      "url": "https://www.graphicux.com/",
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
              "/category/fonts/"
            ],
            [
              "Add-Ons",
              "/category/add-ons/"
            ],
            [
              "Templates",
              "/category/templates/"
            ],
            [
              "Graphics",
              "/category/graphics/"
            ],
            [
              "Themes",
              "/category/themes/"
            ],
            [
              "Stock Image",
              "/category/stock-image"
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
          "url": "https://www.graphicux.com/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/head-tags"

  ]
};

export default settings;
