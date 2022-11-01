const settings = {
  "name": "ux",
  "state": {
    "frontity": {
      "url": "https://graphicux.com/",
      "title": "Download Free Photoshop Action and All Ui/Ux resources - GraphicUX",
      "description": "Download Free Photoshop Action &amp; All Ui/Ux resources"
    }
  },
  "packages": [
    {
      "name": "@frontity/twentytwenty-theme",
      "state": {
        "theme": {
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
          "url": "https://graphicux.com/",
          "params": {
            "per_page": 12,
            "type": ["post", "page"],
          },
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/head-tags",
    "@frontity/wp-comments"

  ]
};

export default settings;
