---
name: Pete Knows AI
description: One signed letter on a pale warm page, set in the look four live products share.
colors:
  page: "oklch(0.975 0.008 95)"
  ink: "oklch(0.2 0.01 95)"
  soft: "oklch(0.2 0.01 95 / .75)"
  quiet: "oklch(0.2 0.01 95 / .62)"
  rule: "oklch(0.2 0.01 95 / .14)"
  mark: "oklch(0.92 0.07 150)"
  ink-hover: "oklch(0.34 0.01 95)"
  on-ink: "#fff"
typography:
  display:
    fontFamily: "Roboto Slab, Georgia, serif"
    fontSize: "clamp(44px, 6.9vw, 88px)"
    fontWeight: 300
    lineHeight: 1.08
    letterSpacing: "-.02em"
  body:
    fontFamily: "Roboto Slab, Georgia, serif"
    fontSize: "23px"
    fontWeight: 300
    lineHeight: 1.5
  signature:
    fontFamily: "Roboto Slab, Georgia, serif"
    fontSize: "46px"
    fontWeight: 300
    lineHeight: 1
  title:
    fontFamily: "Roboto Slab, Georgia, serif"
    fontSize: "22px"
    fontWeight: 400
    lineHeight: 1.25
  caption:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.4
  list:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "15.5px"
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
  label-small:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  mark: "3px"
  button: "6px"
  round: "50%"
spacing:
  gutter: "72px"
  gutter-mid: "40px"
  gutter-phone: "20px"
  paragraph: "22px"
  paragraph-phone: "18px"
  column-gap: "30px"
  row-pad: "10px"
  row-gap: "22px"
components:
  bar:
    typography: "{typography.label}"
    textColor: "{colors.ink}"
    height: "76px"
  button-resume:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "9px 16px"
  button-resume-hover:
    backgroundColor: "{colors.ink-hover}"
  text-link:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
  highlight:
    backgroundColor: "{colors.mark}"
    textColor: "{colors.ink}"
    rounded: "{rounded.mark}"
  letter-column:
    typography: "{typography.body}"
    textColor: "{colors.ink}"
    width: "790px"
  portrait-inline:
    rounded: "{rounded.round}"
    size: "1.114em"
  product-link:
    typography: "{typography.title}"
    textColor: "{colors.ink}"
    size: "84px"
  product-caption:
    typography: "{typography.caption}"
    textColor: "{colors.soft}"
    width: "15em"
  history-row:
    typography: "{typography.list}"
    textColor: "{colors.ink}"
    padding: "10px 0"
    width: "1010px"
  foot:
    typography: "{typography.label-small}"
    textColor: "{colors.ink}"
    padding: "22px 0 26px"
---

# Design System: Pete Knows AI

Recorded on 2026-11-17 from the shipped `index.html` and `src/site.css`. The locked storyboard is `specs/designs/2026-11-17-site-redo.html`. Where this file and the stylesheet disagree, the stylesheet is right and this file is stale.

## Overview

**Creative North Star: "The Signed Letter"**

The whole site is one letter from one person. It opens with a greeting, makes its claim in a single large headline, keeps talking in plain paragraphs, and ends with a signature. Nothing on the page is a section: there is one heading, no subheadings, no cards, no boxes and no panels. When the letter needs to show something, it stops for a moment, shows it as a plain row or a plain list, and picks the sentence back up.

The look is the one Pete's four live products share: a pale warm page, near-black warm ink, Roboto Slab Light for what the letter says, Archivo for the small working text around it, and one soft green that behaves like a highlighter pen. The page is quiet and airy on a laptop, with a wide left-aligned column and generous room to the right. Nothing is centered.

The page is still. The only thing that moves is a product character when the visitor points at it or tabs to it, and under reduced motion it does not move either.

**Key Characteristics:**
- One left-aligned letter column (790px) inside a wide page (1280px), never centered text.
- One heading on the whole page. Sentences in the letter introduce what follows.
- Two typefaces with fixed jobs: the slab speaks, the sans labels.
- One accent, used as a highlighter behind a phrase.
- One filled button. Every other action is an underlined link.
- Lines are 1px hairlines at 14 percent ink. There are no boxes.
- The only pictures are the painted portrait, round, and each product's own character.

## Colors

A warm near-white, a warm near-black, three transparencies of that black, and one soft green. All values are OKLCH and share hue 95 except the green.

### Primary
- **Highlighter Green** (`mark`): the background of a highlighted phrase in the running letter, and the background of selected text. It appears behind two phrases on the page. Ink on it measures 14.6 to 1.

### Neutral
- **Warm Paper** (`page`): the page background, edge to edge. The browser theme color `#f8f7f1` is its hex twin.
- **Warm Ink** (`ink`): all primary text, all link text, the focus outline and the fill of the one button. 16.9 to 1 on the page.
- **Soft Ink** (`soft`, ink at 75 percent): the one-line description under each product name. 7.7 to 1 on the page.
- **Quiet Ink** (`quiet`, ink at 62 percent): years and job titles in the history list, and the copyright line. 4.9 to 1 on the page, which clears 4.5 at its 14px to 15.5px sizes. Do not go lighter.
- **Hairline** (`rule`, ink at 14 percent): the 1px lines of the history list and the line above the foot. Never text.
- **Lifted Ink** (`ink-hover`): the button fill on hover, and nothing else.
- **White** (`on-ink`): the button's text, and nothing else.

`ink-hover` and `on-ink` are written as literal values in the button's rules. The other six are custom properties on `:root`.

### Named Rules
**The Highlighter Rule.** The green goes behind a phrase of running text, the way a pen would, and behind selected text. It is never a button fill, a border, a link color, an icon color or a background for a block. Two phrases on a page is the observed dose.

**The One Ink Rule.** There is one text hue. Emphasis comes from weight or from the three transparencies, never from a second color. Links are ink with an underline, not a link color.

## Typography

**Display Font:** Roboto Slab (with Georgia, serif), variable, shipped from `@fontsource-variable/roboto-slab`
**Body Font:** Roboto Slab Light for the letter; Archivo (with system-ui, sans-serif) for everything around it, variable, shipped from `@fontsource-variable/archivo`

**Character:** A light slab serif at reading size gives the letter a typed, personal voice without looking like a typewriter. Archivo is the plain, slightly wide sans that keeps the bar, the list and the captions out of the letter's way.

### Hierarchy
- **Display** (Roboto Slab 300, `clamp(44px, 6.9vw, 88px)`, line-height 1.08, tracking -0.02em): the one headline. It reaches 88px at a viewport of about 1276px and up, and scales down below that. On a phone the line-height is 1.1 and the forced line break is dropped.
- **Body** (Roboto Slab 300, 23px, line-height 1.5): every paragraph of the letter, at most 790px wide, with `text-wrap: pretty`. The greeting above the headline is the same face and size at line-height 1.3. On a phone both are 18.5px.
- **Signature** (Roboto Slab 300, 46px, line-height 1): the name that signs the letter, once, with 38px of room above and below. 38px on a phone.
- **Title** (Roboto Slab 400, 22px, line-height 1.25): a product name. Regular weight, not Light, so the name holds at a small size. 19px on a phone.
- **Caption** (Archivo 400, 15px, line-height 1.4, Soft Ink): the line under a product name, at most 15em wide with `text-wrap: balance`. 14px on a phone, with no width cap.
- **List** (Archivo 400, 15.5px, line-height 1.45): a history row. The company name is 700; years and titles are Quiet Ink. 15px on a phone.
- **Label** (Archivo 400, 15px): the links in the bar. The site name is 700 at 16px; the button text is 600.
- **Label small** (Archivo 400, 14px): the foot.

### Named Rules
**The Two Voices Rule.** Roboto Slab is for what the letter says and for the names of the things it shows. Archivo is for the bar, the history list, captions and the foot. Slab never sets a list row or a caption; Archivo never sets a paragraph of the letter.

**The Light Slab Rule.** The slab is weight 300 everywhere except product names, which are 400. There is no bold slab. Bold (700) belongs to Archivo, for the site name and company names.

**The One Heading Rule.** The page has one `h1` and no other heading at any level. A new part of the page is announced by a sentence in the letter, ending in a period or a colon, not by a heading or a label above it.

## Layout

The page is a single container: at most 1280px wide, centered in the window, with 72px of side padding. Everything inside it is left-aligned to the same edge. Three widths nest inside: paragraphs stop at 790px, the history list at 1010px, and the bar, the product row and the foot run the full width.

Top to bottom: the bar (76px tall, site name left, two links and the button right, 30px apart); the greeting, 26px below; the headline, 8px below that; then letter columns alternating with the two displays, the product row and the history list. The foot closes the page under a hairline.

Vertical rhythm is set by the paragraph: 22px between paragraphs, 30px before the first paragraph of a column. The product row has 12px above and 48px below; the history list 2px above and 38px below. Observed gaps cluster on 22px and 30px.

The product row is a four-column grid with a 30px gap. The history row is a four-column grid: years (7.2em), company (6.6em), what happened (the remaining width), title (its own width), with a 22px column gap and 10px above and below.

Responsive changes, all `max-width`:
- **1100px and below:** side padding drops to 40px.
- **1000px and below:** products go two by two. The job title in a history row moves under the description, in the same column.
- **640px and below:** side padding is 20px and the bar is 64px tall. The bar keeps only the site name and the button; the two text links are hidden there and remain at the end of the letter. The portrait leaves the headline and sits at 46px, round, at the start of the greeting. The headline loses its forced break and wraps on its own. Products stack one per row, each with a 62px character to the left of its name and caption, 14px apart. A history row becomes company and years on one line with the description under them; the job title is visually hidden and still read aloud by a screen reader.

## Elevation & Depth

The system is flat. Nothing casts a shadow, nothing overlaps, and there is no tonal layering: the page is one surface in one color. Separation comes from white space and from hairlines.

The stylesheet has one `box-shadow`, and it is not depth: the highlight extends 4px past its phrase on each side with two solid, unblurred, same-color shadows and `box-decoration-break: clone`, so the green hangs past the words on every line it wraps to without pushing the comma or period after it away.

### Named Rules
**The Flat Page Rule.** No shadows for depth, no raised surfaces, no layered backgrounds. If something needs to stand apart, give it space or a hairline.

## Shapes

Corners are barely rounded and there are few of them, because there are few shapes at all. The highlight and the focus outline round at 3px. The button rounds at 6px. The portrait is a circle, cropped from the painted picture with the face held at `object-position: 50% 16%`. Product characters are unframed artwork at 84px with no circle, tile or border behind them.

The only borders are 1px hairlines in the `rule` color: one above every history row, one closing the list, and one above the foot. They run horizontally and never close into a box.

The focus indicator is a 2px solid ink outline, offset 3px, on anything focusable.

### Named Rules
**The Open Line Rule.** A line separates rows or closes the page. It never surrounds anything. No element has a border on more than one side.

## Components

### The bar
- **Style:** a single row, 76px tall, no background and no line under it. The site name is Archivo 700 at 16px; it is text, not a link and not a logo.
- **Links:** Archivo 15px, ink, underlined with a 4px offset. On hover the underline thickens to 2.5px.
- **Phone:** 64px tall; only the site name and the button remain.

### Buttons
There is one, and it is the link to the resume.
- **Shape:** softly squared (6px radius), padding 9px by 16px.
- **Primary:** Warm Ink fill, white Archivo 600 text at 15px, no underline, no border.
- **Hover / Focus:** the fill lifts to `ink-hover` with no transition. Focus shows the standard ink outline, 3px clear of the button.
- **Secondary / Ghost:** none. A second action is a text link.

### Text links
- **Style:** ink, underlined, underline offset 4px. Inside the letter the underline is 1.5px thick.
- **Hover:** the underline thickens to 2.5px. No color change, no transition.

### Highlight
- **Style:** a `mark` element with the green background, inherited ink, 3px corners, hanging 4px past the phrase on each side on every wrapped line.
- **Use:** a phrase inside a sentence of the letter. Not a whole sentence, not a heading, not a label.

### Portrait
- **Style:** the painted portrait as a circle set inline in the headline after its first line, 1.114 times the headline's font size (98px at full size), dropped 0.205em below the baseline with 6px either side.
- **Phone:** removed from the headline; a 46px circle starts the greeting line instead.
- **Reading aloud:** both carry an empty `alt`. The greeting next to them already says who it is.

### Product link
The signature component: a character that turns out to be a live product.
- **Structure:** the whole item is one link. A character (84px, nudged 6px left so its artwork lines up with the text edge), then the product name in the Title style, then one caption line in Soft Ink.
- **Rest:** no underline, no border, no background.
- **Hover / Focus:** the name gains a 1.5px underline, and the character lifts 3px and tips 3 degrees left over 0.18s on `cubic-bezier(.16, 1, .3, 1)`. Under reduced motion the character stays put and only the underline appears.
- **Phone:** the character is 62px and sits to the left of the name and caption.
- **Reading aloud:** the character has an empty `alt`; the name and caption are the link's label.

### History row
- **Style:** one grid row per job under a hairline: years in Quiet Ink, company in Archivo 700, what happened in ink with `text-wrap: pretty`, title in Quiet Ink at the right.
- **States:** none. Rows are not links.
- **Narrower:** see Layout. The title is never dropped from the markup.

### The foot
- **Style:** a hairline, then a row of underlined Archivo 14px links 26px apart, with the copyright line in Quiet Ink pushed to the right. It wraps when it runs out of room.

## Do's and Don'ts

### Do:
- **Do** write a new part of the page as more of the letter: a sentence that leads in, then the thing itself, at the same left edge.
- **Do** keep paragraphs at 790px or less and in Roboto Slab 300 at 23px (18.5px on a phone).
- **Do** use the green only behind a phrase of running text, with the 4px hang and `box-decoration-break: clone`.
- **Do** make every action after the resume button an ink text link with a 4px underline offset that thickens to 2.5px on hover.
- **Do** separate rows with a 1px `rule` hairline and blocks with space.
- **Do** keep the 2px ink focus outline at a 3px offset on everything focusable.
- **Do** wrap any new movement in `prefers-reduced-motion: no-preference`, and trigger it only from hover or focus.
- **Do** load fonts and pictures from this site only.

### Don't:
- **Don't** add a second heading, a section label or a small caption above a block. The page has one `h1`.
- **Don't** put content in a card, a box, a panel or a tinted band.
- **Don't** add a second filled button or an outlined one.
- **Don't** use the green as a fill, border, link color or icon color.
- **Don't** add a shadow for depth, a gradient or a second background color.
- **Don't** set text lighter than Quiet Ink (ink at 62 percent).
- **Don't** center text or a column.
- **Don't** animate anything on load or on scroll.
- **Don't** add a picture that is not the painted portrait or a product's own character.
