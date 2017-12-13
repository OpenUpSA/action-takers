# Action Takers

## Generating PDFs

[`wkhtmltopdf`](https://github.com/wkhtmltopdf/wkhtmltopdf/), *Webkit required*

`wkhtmltopdf -g -T 2mm -B 2mm -L 2mm -R 2mm actiontakers.co.za/... --print-media-type output.pdf`

### PDFs for mobile

First, add `mobile-print` class to the `<section class="single-guide-page">` in `_layouts/guide.html`. 

`wkhtmltopdf -g --page-height ... --page-width 320px -L 2mm -R 2mm -T 2mm -B 2mm actiontakers.co.za/... --print-media-type output-mobile.pdf`