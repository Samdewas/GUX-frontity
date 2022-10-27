import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import link from "@frontity/html2react/processors/link";

const twentyTwentyTheme = {
  name: "@frontity/twentytwenty-theme",
  roots: {
    /**
     *  In Frontity, any package can add React components to the site.
     *  We use roots for that, scoped to the `theme` namespace.
     */
    theme: Theme,
  },
  state: {
    /**
     * State is where the packages store their default settings and other
     * relevant state. It is scoped to the `theme` namespace.
     */
    theme: {
      colors: {
        gray: {
          base: "#6D6D6D",
          light: "#DCD7CA",
          lighter: "#F5EFE0",
        },
        primary: "#15BE77",
        headerBg: "#ffffff",
        footerBg: "#ffffff",
        bodyBg: "#f5efe0",
      },
      // Whether to show the search button in page header
      showSearchInHeader: true,
      // Menu links to display in the header
      menu: {
        "ID": 13,
        "name": "Main Menu",
        "slug": "main-menu",
        "description": "",
        "count": 42,
        "items": [
          {
            "id": 106561,
            "order": 1,
            "parent": 0,
            "title": "Fonts",
            "url": "https://graphicux.com/category/fonts/",
            "attr": "",
            "target": "",
            "classes": "",
            "xfn": "",
            "description": "Free Fonts The use of a great-looking font is the main part of making any kind of design look more professional. Of course, to reach the same degree of professionalism you don’t always have to use premium fonts. If you can’t afford to spend money on costly fonts to make your designs appear great then don’t panic. You can instantly download thousands of Free Fonts from here. Our range contains the best free script fonts, serif fonts, sans-serif fonts, decorative fonts and many more to fit every design project you’re working on. Go ahead, scroll down to download. All the fonts are free! You can download thousands of fonts for personal or commercial use all the fonts are perfect for your creative projects. We upload the latest premium fonts here every day, you can easily download from here.",
            "object_id": 3,
            "object": "category",
            "object_slug": null,
            "type": "taxonomy",
            "type_label": "Category",
            "children": [
              {
                "id": 106563,
                "order": 2,
                "parent": 106561,
                "title": "Basic",
                "url": "https://graphicux.com/category/fonts/basic/",
                "attr": "",
                "target": "",
                "classes": "",
                "xfn": "",
                "description": "",
                "object_id": 4183,
                "object": "category",
                "object_slug": "thubnail-197",
                "type": "taxonomy",
                "type_label": "Category",
                "children": [
                  {
                    "id": 106601,
                    "order": 3,
                    "parent": 106563,
                    "title": "Serif",
                    "url": "https://graphicux.com/category/fonts/serif/",
                    "attr": "",
                    "target": "",
                    "classes": "",
                    "xfn": "",
                    "description": "",
                    "object_id": 4382,
                    "object": "category",
                    "object_slug": null,
                    "type": "taxonomy",
                    "type_label": "Category"
                  },
                  {
                    "id": 106576,
                    "order": 4,
                    "parent": 106563,
                    "title": "Sans Serif",
                    "url": "https://graphicux.com/category/fonts/sans-serif/",
                    "attr": "",
                    "target": "",
                    "classes": "",
                    "xfn": "",
                    "description": "",
                    "object_id": 4062,
                    "object": "category",
                    "object_slug": "neoart-6-wet-watercolor-ps-action-free-download",
                    "type": "taxonomy",
                    "type_label": "Category"
                  },
                  {
                    "id": 106588,
                    "order": 5,
                    "parent": 106563,
                    "title": "Slab Serif",
                    "url": "https://graphicux.com/category/slab-serif/",
                    "attr": "",
                    "target": "",
                    "classes": "",
                    "xfn": "",
                    "description": "",
                    "object_id": 4533,
                    "object": "category",
                    "object_slug": null,
                    "type": "taxonomy",
                    "type_label": "Category"
                  }
                ]
              },
              {
                "id": 106577,
                "order": 6,
                "parent": 106561,
                "title": "Script",
                "url": "https://graphicux.com/category/fonts/script/",
                "attr": "",
                "target": "",
                "classes": "",
                "xfn": "",
                "description": "",
                "object_id": 5209,
                "object": "category",
                "object_slug": "image-preview-168",
                "type": "taxonomy",
                "type_label": "Category",
                "children": [
                  {
                    "id": 106566,
                    "order": 7,
                    "parent": 106577,
                    "title": "Brush",
                    "url": "https://graphicux.com/category/fonts/brush/",
                    "attr": "",
                    "target": "",
                    "classes": "",
                    "xfn": "",
                    "description": "",
                    "object_id": 4401,
                    "object": "category",
                    "object_slug": "preview-688",
                    "type": "taxonomy",
                    "type_label": "Category"
                  },
                  {
                    "id": 106567,
                    "order": 8,
                    "parent": 106577,
                    "title": "Calligraphy",
                    "url": "https://graphicux.com/category/fonts/caligraphy/",
                    "attr": "",
                    "target": "",
                    "classes": "",
                    "xfn": "",
                    "description": "",
                    "object_id": 4402,
                    "object": "category",
                    "object_slug": null,
                    "type": "taxonomy",
                    "type_label": "Category"
                  },
                  {
                    "id": 106568,
                    "order": 9,
                    "parent": 106577,
                    "title": "Comic",
                    "url": "https://graphicux.com/category/fonts/comic/",
                    "attr": "",
                    "target": "",
                    "classes": "",
                    "xfn": "",
                    "description": "",
                    "object_id": 4546,
                    "object": "category",
                    "object_slug": "bonnycastle-font-free",
                    "type": "taxonomy",
                    "type_label": "Category"
                  },
                  {
                    "id": 106572,
                    "order": 10,
                    "parent": 106577,
                    "title": "Handwritten",
                    "url": "https://graphicux.com/category/fonts/handwritten/",
                    "attr": "",
                    "target": "",
                    "classes": "",
                    "xfn": "",
                    "description": "",
                    "object_id": 4406,
                    "object": "category",
                    "object_slug": "preview-689",
                    "type": "taxonomy",
                    "type_label": "Category"
                  }
                ]
              },
              {
                "id": 106569,
                "order": 11,
                "parent": 106561,
                "title": "Display",
                "url": "https://graphicux.com/category/fonts/display/",
                "attr": "",
                "target": "",
                "classes": "",
                "xfn": "",
                "description": "",
                "object_id": 5208,
                "object": "category",
                "object_slug": "thubnail-copy-115",
                "type": "taxonomy",
                "type_label": "Category",
                "children": [
                  {
                    "id": 106562,
                    "order": 12,
                    "parent": 106569,
                    "title": "3D Fonts",
                    "url": "https://graphicux.com/category/fonts/3d-fonts/",
                    "attr": "",
                    "target": "",
                    "classes": "",
                    "xfn": "",
                    "description": "",
                    "object_id": 4543,
                    "object": "category",
                    "object_slug": "thumb-123",
                    "type": "taxonomy",
                    "type_label": "Category"
                  },
                  {
                    "id": 106570,
                    "order": 13,
                    "parent": 106569,
                    "title": "Gothic",
                    "url": "https://graphicux.com/category/fonts/gothic/",
                    "attr": "",
                    "target": "",
                    "classes": "",
                    "xfn": "",
                    "description": "",
                    "object_id": 4547,
                    "object": "category",
                    "object_slug": "thumb-124",
                    "type": "taxonomy",
                    "type_label": "Category"
                  },
                  {
                    "id": 106571,
                    "order": 14,
                    "parent": 106569,
                    "title": "Graffiti",
                    "url": "https://graphicux.com/category/fonts/graffiti/",
                    "attr": "",
                    "target": "",
                    "classes": "",
                    "xfn": "",
                    "description": "",
                    "object_id": 4548,
                    "object": "category",
                    "object_slug": "preview-722",
                    "type": "taxonomy",
                    "type_label": "Category"
                  },
                  {
                    "id": 106579,
                    "order": 15,
                    "parent": 106569,
                    "title": "Stencil Army",
                    "url": "https://graphicux.com/category/fonts/stencil-army/",
                    "attr": "",
                    "target": "",
                    "classes": "",
                    "xfn": "",
                    "description": "",
                    "object_id": 4551,
                    "object": "category",
                    "object_slug": "thumb-125",
                    "type": "taxonomy",
                    "type_label": "Category"
                  }
                ]
              },
              {
                "id": 106573,
                "order": 16,
                "parent": 106561,
                "title": "Misc",
                "url": "https://graphicux.com/category/fonts/misc/",
                "attr": "",
                "target": "",
                "classes": "",
                "xfn": "",
                "description": "",
                "object_id": 5210,
                "object": "category",
                "object_slug": null,
                "type": "taxonomy",
                "type_label": "Category",
                "children": [
                  {
                    "id": 106580,
                    "order": 17,
                    "parent": 106573,
                    "title": "Symbol",
                    "url": "https://graphicux.com/category/fonts/symbol/",
                    "attr": "",
                    "target": "",
                    "classes": "",
                    "xfn": "",
                    "description": "",
                    "object_id": 4552,
                    "object": "category",
                    "object_slug": "preview-723",
                    "type": "taxonomy",
                    "type_label": "Category"
                  },
                  {
                    "id": 106565,
                    "order": 18,
                    "parent": 106573,
                    "title": "Blackletter",
                    "url": "https://graphicux.com/category/fonts/blackletter/",
                    "attr": "",
                    "target": "",
                    "classes": "",
                    "xfn": "",
                    "description": "",
                    "object_id": 4545,
                    "object": "category",
                    "object_slug": null,
                    "type": "taxonomy",
                    "type_label": "Category"
                  },
                  {
                    "id": 106575,
                    "order": 19,
                    "parent": 106573,
                    "title": "Retro",
                    "url": "https://graphicux.com/category/fonts/retro/",
                    "attr": "",
                    "target": "",
                    "classes": "",
                    "xfn": "",
                    "description": "",
                    "object_id": 4550,
                    "object": "category",
                    "object_slug": "bonsay-brush-webfonts-fonts-free",
                    "type": "taxonomy",
                    "type_label": "Category"
                  },
                  {
                    "id": 106574,
                    "order": 20,
                    "parent": 106573,
                    "title": "Non Western",
                    "url": "https://graphicux.com/category/fonts/non-western/",
                    "attr": "",
                    "target": "",
                    "classes": "",
                    "xfn": "",
                    "description": "",
                    "object_id": 4549,
                    "object": "category",
                    "object_slug": null,
                    "type": "taxonomy",
                    "type_label": "Category"
                  },
                  {
                    "id": 106564,
                    "order": 21,
                    "parent": 106573,
                    "title": "Bitmap Pixel",
                    "url": "https://graphicux.com/category/fonts/bitmap-pixel/",
                    "attr": "",
                    "target": "",
                    "classes": "",
                    "xfn": "",
                    "description": "",
                    "object_id": 4544,
                    "object": "category",
                    "object_slug": "preview-721",
                    "type": "taxonomy",
                    "type_label": "Category"
                  }
                ]
              }
            ]
          },
          {
            "id": 106555,
            "order": 22,
            "parent": 0,
            "title": "Add-Ons",
            "url": "https://graphicux.com/category/add-ons/",
            "attr": "",
            "target": "",
            "classes": "",
            "xfn": "",
            "description": "",
            "object_id": 14,
            "object": "category",
            "object_slug": null,
            "type": "taxonomy",
            "type_label": "Category",
            "children": [
              {
                "id": 106560,
                "order": 23,
                "parent": 106555,
                "title": "Photoshop Action",
                "url": "https://graphicux.com/category/add-ons/photoshop-action/",
                "attr": "",
                "target": "",
                "classes": "",
                "xfn": "",
                "description": "Free Photoshop Action Download Photoshop actions can help you transform the pictures into masterpieces and save time throughout the editing process. They will help you achieve an elegant look too. Photoshop Actions is a complete collection of HDR effects actions, color correction, matte effects, winter effects, and many more. Photoshop action bundles speed up the time and deliver results quicker than what used to take hours. These will give your photos a sleek and trendy look. You can use these filters to create amazing outputs for photography. That’s the elegance of this bundle, which is also a must-have pack for the photographers. Download thousands of Premium Photoshop Action Add on for free with a high-speed direct link to a vast collection of visual effects that’s ideal for your project. All the Photoshop Action is Cs3 to CC2020 + compatible",
                "object_id": 15,
                "object": "category",
                "object_slug": null,
                "type": "taxonomy",
                "type_label": "Category"
              },
              {
                "id": 106559,
                "order": 24,
                "parent": 106555,
                "title": "Lightroom Preset",
                "url": "https://graphicux.com/category/add-ons/lightroom-preset/",
                "attr": "",
                "target": "",
                "classes": "",
                "xfn": "",
                "description": "",
                "object_id": 16,
                "object": "category",
                "object_slug": null,
                "type": "taxonomy",
                "type_label": "Category"
              },
              {
                "id": 106556,
                "order": 25,
                "parent": 106555,
                "title": "Brushes",
                "url": "https://graphicux.com/category/add-ons/brushes/",
                "attr": "",
                "target": "",
                "classes": "",
                "xfn": "",
                "description": "",
                "object_id": 17,
                "object": "category",
                "object_slug": null,
                "type": "taxonomy",
                "type_label": "Category"
              },
              {
                "id": 106558,
                "order": 26,
                "parent": 106555,
                "title": "Layer Styles",
                "url": "https://graphicux.com/category/add-ons/layer-styles/",
                "attr": "",
                "target": "",
                "classes": "",
                "xfn": "",
                "description": "",
                "object_id": 18,
                "object": "category",
                "object_slug": null,
                "type": "taxonomy",
                "type_label": "Category"
              }
            ]
          },
          {
            "id": 106591,
            "order": 27,
            "parent": 0,
            "title": "Templates",
            "url": "https://graphicux.com/category/templates/",
            "attr": "",
            "target": "",
            "classes": "",
            "xfn": "",
            "description": "",
            "object_id": 30,
            "object": "category",
            "object_slug": null,
            "type": "taxonomy",
            "type_label": "Category",
            "children": [
              {
                "id": 106592,
                "order": 28,
                "parent": 106591,
                "title": "Presentation",
                "url": "https://graphicux.com/category/templates/presentation/",
                "attr": "",
                "target": "",
                "classes": "",
                "xfn": "",
                "description": "",
                "object_id": 37,
                "object": "category",
                "object_slug": "watercolor-pro-painting-photoshop-action-free-download",
                "type": "taxonomy",
                "type_label": "Category"
              }
            ]
          },
          {
            "id": 106581,
            "order": 29,
            "parent": 0,
            "title": "Graphics",
            "url": "https://graphicux.com/category/graphics/",
            "attr": "",
            "target": "",
            "classes": "",
            "xfn": "",
            "description": "",
            "object_id": 4,
            "object": "category",
            "object_slug": null,
            "type": "taxonomy",
            "type_label": "Category",
            "children": [
              {
                "id": 106584,
                "order": 30,
                "parent": 106581,
                "title": "Mockups",
                "url": "https://graphicux.com/category/graphics/mockups/",
                "attr": "",
                "target": "",
                "classes": "",
                "xfn": "",
                "description": "",
                "object_id": 8,
                "object": "category",
                "object_slug": "home",
                "type": "taxonomy",
                "type_label": "Category"
              },
              {
                "id": 106557,
                "order": 31,
                "parent": 106581,
                "title": "Gradients",
                "url": "https://graphicux.com/category/add-ons/gradients/",
                "attr": "",
                "target": "",
                "classes": "",
                "xfn": "",
                "description": "",
                "object_id": 19,
                "object": "category",
                "object_slug": null,
                "type": "taxonomy",
                "type_label": "Category"
              },
              {
                "id": 106585,
                "order": 32,
                "parent": 106581,
                "title": "Patterns",
                "url": "https://graphicux.com/category/graphics/patterns/",
                "attr": "",
                "target": "",
                "classes": "",
                "xfn": "",
                "description": "",
                "object_id": 11,
                "object": "category",
                "object_slug": null,
                "type": "taxonomy",
                "type_label": "Category"
              }
            ]
          },
          {
            "id": 106593,
            "order": 33,
            "parent": 0,
            "title": "Themes",
            "url": "https://graphicux.com/category/themes/",
            "attr": "",
            "target": "",
            "classes": "",
            "xfn": "",
            "description": "",
            "object_id": 20,
            "object": "category",
            "object_slug": null,
            "type": "taxonomy",
            "type_label": "Category",
            "children": [
              {
                "id": 106599,
                "order": 34,
                "parent": 106593,
                "title": "WordPress",
                "url": "https://graphicux.com/category/themes/wordpress/",
                "attr": "",
                "target": "",
                "classes": "",
                "xfn": "",
                "description": "",
                "object_id": 21,
                "object": "category",
                "object_slug": null,
                "type": "taxonomy",
                "type_label": "Category"
              },
              {
                "id": 106597,
                "order": 35,
                "parent": 106593,
                "title": "Shopify",
                "url": "https://graphicux.com/category/themes/shopify/",
                "attr": "",
                "target": "",
                "classes": "",
                "xfn": "",
                "description": "",
                "object_id": 23,
                "object": "category",
                "object_slug": null,
                "type": "taxonomy",
                "type_label": "Category"
              },
              {
                "id": 106598,
                "order": 36,
                "parent": 106593,
                "title": "Woocommerce",
                "url": "https://graphicux.com/category/themes/woocommerce/",
                "attr": "",
                "target": "",
                "classes": "",
                "xfn": "",
                "description": "",
                "object_id": 25,
                "object": "category",
                "object_slug": null,
                "type": "taxonomy",
                "type_label": "Category"
              },
              {
                "id": 106595,
                "order": 37,
                "parent": 106593,
                "title": "Magento",
                "url": "https://graphicux.com/category/themes/magento/",
                "attr": "",
                "target": "",
                "classes": "",
                "xfn": "",
                "description": "",
                "object_id": 24,
                "object": "category",
                "object_slug": null,
                "type": "taxonomy",
                "type_label": "Category"
              },
              {
                "id": 106596,
                "order": 38,
                "parent": 106593,
                "title": "Plugins",
                "url": "https://graphicux.com/category/themes/plugins/",
                "attr": "",
                "target": "",
                "classes": "",
                "xfn": "",
                "description": "",
                "object_id": 29,
                "object": "category",
                "object_slug": null,
                "type": "taxonomy",
                "type_label": "Category"
              },
              {
                "id": 106594,
                "order": 39,
                "parent": 106593,
                "title": "HTML/CSS",
                "url": "https://graphicux.com/category/themes/html-css/",
                "attr": "",
                "target": "",
                "classes": "",
                "xfn": "",
                "description": "",
                "object_id": 22,
                "object": "category",
                "object_slug": null,
                "type": "taxonomy",
                "type_label": "Category"
              }
            ]
          },
          {
            "id": 106589,
            "order": 40,
            "parent": 0,
            "title": "Stock Image",
            "url": "https://graphicux.com/category/stock-image/",
            "attr": "",
            "target": "",
            "classes": "",
            "xfn": "",
            "description": "",
            "object_id": 2922,
            "object": "category",
            "object_slug": "preview-501",
            "type": "taxonomy",
            "type_label": "Category",
            "children": [
              {
                "id": 106590,
                "order": 41,
                "parent": 106589,
                "title": "PNG Images",
                "url": "https://graphicux.com/category/stock-image/png-images/",
                "attr": "",
                "target": "",
                "classes": "",
                "xfn": "",
                "description": "",
                "object_id": 2923,
                "object": "category",
                "object_slug": null,
                "type": "taxonomy",
                "type_label": "Category"
              }
            ]
          },
          {
            "id": 106603,
            "order": 42,
            "parent": 0,
            "title": "Contact us",
            "url": "https://graphicux.com/contact-us/",
            "attr": "",
            "target": "",
            "classes": "",
            "xfn": "",
            "description": "",
            "object_id": 4231,
            "object": "page",
            "object_slug": "contact-us",
            "type": "post_type",
            "type_label": "Page"
          }
        ],
        "meta": {
          "links": {
            "collection": "https://graphicux.com/wp-json/wp/v2/menus/",
            "self": "https://graphicux.com/wp-json/wp/v2/menus/13"
          }
        }
      },
      // State for the menu on mobile
      isMobileMenuOpen: false,
      // State for the search modal on mobile
      isSearchModalOpen: false,
      // Whether to show all post content or only excerpt (summary) in archive view
      showAllContentOnArchive: false,
      // Settings for the featured media (image or video)
      featuredMedia: {
        // Whether to show it on archive view
        showOnArchive: true,
        // Whether to show it on post
        showOnPost: true,
      },
      // Whether to auto-fetch links on a page. Values can be "no" | "all" | "in-view" | "hover"
      autoPrefetch: "hover",

      /**
       * At the moment, we only include the ascii characters of Inter font.
       * Values can be "us-ascii" | "latin" | "all".
       */
      fontSets: "all",
    },
  },

  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
  actions: {
    theme: {
      openMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = true;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      openSearchModal: ({ state }) => {
        state.theme.isSearchModalOpen = true;
      },
      closeSearchModal: ({ state }) => {
        state.theme.isSearchModalOpen = false;
      },
  }
  },
  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * and internal link inside the content HTML.
       * You can add your own processors too.
       */
      processors: [image, link],
    },
  },
};

export default twentyTwentyTheme;
