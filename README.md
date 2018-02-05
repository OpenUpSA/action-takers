# Action Takers

## Adding Content - Guides and Categories

### Add a new category
* Ensure the category is shown in the correct section on the landing page `index.html` - if it was shown to be 'in development', ensure you remove it from that section and add it to the 'guides by topic' section
* If a new guide for an existing category is added, increment the guide count to reflect the correct number
* If a new menu item is required, ensure you add it in `header.html`
* Create a new category listing page in the project root - e.g. `housing.html`

### Add a new guide and steps
* Add the new guide collection to `_config.yml`
 * Remember to restart your server to see any config changes made
* Add the new guide to the category list page
* Create the guide folder in the project root - e.g. `_risk-of-eviction`
* Create the guide steps in this folder - e.g. `1.md`
 * Note: pay careful attention to which guide step you are editing - it's easy to get confused with the names, so best double check the folder the file lives in
* Create the guide file in _guides - e.g. `risk-of-eviction.md`
 * Note: name this carefully - it must match the name of the collection in the config file
 * Pay careful attention to the frontmatter
  * short-title: used for whatsapp key word
  * title: Displayed on the site as a heading for the guide
  * description: Displayed on the site as a description for the guide
  * name: used to link the collection to the guide
  * category-link: used to link to categories and menu items. Is case sensitive
  * category:
* In the guide .md file, add a div of class `guide panel-group` and for each step add a div of class `panel single-step`
 * For each step, ensure the ids and steps are renamed to reflect the guide step - especially opening and closing of the steps
 * Ensure the loop count is incremented for each step

## Generating PDFs

[`wkhtmltopdf`](https://github.com/wkhtmltopdf/wkhtmltopdf/), *Webkit required*

`wkhtmltopdf -g -T 2mm -B 2mm -L 2mm -R 2mm actiontakers.co.za/... --print-media-type output.pdf`

There are two bash scripts in `/pdf`. Run them from that directory and they will generate the PDFs of the guides listed in those scripts. **Note:** The heights of the mobile PDFs may not be correct.

### PDFs for mobile

First, add `mobile-print` class to the `<section class="single-guide-page">` in `_layouts/guide.html`.

`wkhtmltopdf -g --page-height ... --page-width 320px -L 2mm -R 2mm -T 2mm -B 2mm actiontakers.co.za/... --print-media-type output-mobile.pdf`