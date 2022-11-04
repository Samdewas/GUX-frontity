const settings = {
  "name": "ux",
  "state": {
    "frontity": {
      "url": "https://www.edivaldobrito.com.br/",
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
          "url": "https://www.edivaldobrito.com.br/",
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
    "@frontity/wp-comments",

    {
      name: "@frontity/google-analytics",
      state: {
        googleAnalytics: {
          trackingId: "UA-138709497-1",
        },
      },
    },
    {
      name: "@frontity/google-tag-manager-analytics",
      state: {
        googleTagManagerAnalytics: {
          containerId: "G-D44D3408K9",
        },
      },
    },

  ]
};

export default settings;
