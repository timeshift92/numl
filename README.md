# <img src="https://github.com/tenphi/nude/blob/master/images/logo.png?raw=true" alt="NUDE Elements" width="891">

Framework and Design System based on Custom Elements and runtime CSS generation.

[![Gitter](https://badges.gitter.im/tenphi/numl.svg)](https://gitter.im/tenphi/numl?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

**ALPHA VERSION, UNDER RAPID DEVELOPMENT, API is subject to change**

**NuML** is: 

* Customizable **Design System** for any project and scale
* Accessible production-ready **Prototyping Solution**
* Handy **UI library** for your favorite framework
* Powerful **CSS/JS-Framework** with CSS generation, inheritance and more
* Markup **Methodology** that is enjoyable to follow
* All-in-one **Language** to describe interfaces that look and work great

And also... it's **just a single js-file** that you can include into your website to start doing magic:

* **No** build step needed (*don't wait! create!*)
* **No** dependencies included
* **No** config needed (*your markup is your config*)
* **No** scripting to activate
* **No** confusing classes to style
* **No** frustration in usage

With **NuML** you can: 

* Create virtually **any interface** you want
* Make your interface **accessible** without fighting IDs and specifications
* Create your own element or a whole **Design System** with ease
* Add **responsiveness** with effort so little you've never seen before
* **Copy-paste** your markup from project to project, regardless of the framework used
* Add **Dark** and **High-contrast** modes to your NUDE-powered site effortlessly
* Be calm for technical debt in markup code
* **Enjoy** while doing what you love

[Learn more](https://numl.design/)

## FAQ

**Q: There are many CSS-Frameworks out there. Why is NUDE different?**

**A:** CSS-Frameworks solve problems related to styling while NUDE tend to solve many others related to interface creation like accessibility, color generation, style/logic sharing and context awareness. It's just more complex and ambitious. 

**Q: Why should I use NUDE instead of popular CSS-framework like Tailwind?**

**A:** Popular CSS-frameworks tend to decide what you need and provide tools that limit the power of CSS. Unlike them, NUDE unleashes the power of CSS by making it dynamic and parameterizable without the need to use a preprocessor.

**Q: Why should I use NUDE instead of writing CSS from the scratch?**

**A:** CSS is complex but the modern web is not possible without it. Instead of replacing CSS, NUDE simplifies every aspect of CSS development by providing handy abstractions for responsiveness, theming, complex selectors, etc. It provides reasonable defaults leaving you with ability to change them if you need it. It greatly reduces amount of work that needed to be done not only for developers but for designers too!

**Q: Why should I use NUDE instead of using CSS-in-JS approach?**

**A:** CSS-in-JS really simplifies some aspects of writing CSS. But it's still CSS. It's like you move your problems from one file to another. NUDE solves many problems by itself, providing you API to solve many others without stuffing your JS files. In fact, it greatly reduces them by providing useful declarations in markup. 

**Q: I am a web designer. How can NUDE help me?**

**A:** Many web designers learn CSS frameworks these days. So it’s a good choice to try. NUDE is much more flexible and easy to learn than other powerful alternatives. For example it do a lot of color magic by generating and adapting them for various purposes. Also it can help you to learn more about modern best practices and accessibility features of the web which we think is very important. 

**Q: How can I use NUDE with older browsers?**

**A:** NUDE substantially depends on Custom Elements and Custom Properties. The CE can be easily polyfilled back to IE11 but CP can’t. While NUDE methodology don’t strictly require CP, they makes NUDE implementation much easier and faster in performance. See details in the related [ISSUE](https://github.com/tenphi/nude/issues/2).

**Q: Is NUDE SEO-friendly?**

**A:** NUDE’s focus is to provide a language for creating accessible and beautiful interfaces. SEO is a completely different task that often contradicts to best practices and accessibility. We believe such task can be achieved separately by using preprocessors and other technics without touching NUDE philosophy.

**Q: Is NUDE production-ready?**

**A:** It's NOT despite the fact it's widely used in production by the Author of NUDE. And he is working hard to make it production-ready for everyone as soon as possible but without community support it will be a long run. So give it a try, leave some feedback, post issues and tell friends to support our project!

## Usage
Add `numl.js` to your page and initialize it.

```html
<script src="https://cdn.jsdelivr.net/npm/numl/dist/numl.js"></script>
```

And that's all! Now your application is **NUDE-ready**!

Try to write some HTML and build awesome interfaces.

Nude Elements are also available via npm.
```bash
$ npm install numl --save
```

Import the module to your application:
```javascript
import 'numl';
```

## Sites that use **NUDE Elements** 

* **[NuML Landing Page](https://numl.design)**
* **[Sellerscale](https://sellerscale.com)** – [Project Screenshot Light](https://github.com/tenphi/nude/blob/master/images/example-app-light.png?raw=true) | [Project Screenshot Dark](https://github.com/tenphi/nude/blob/master/images/example-app-dark.png?raw=true) | [Project Screenshot Light Contrast](https://github.com/tenphi/nude/blob/master/images/example-app-light-contrast.png?raw=true) | [Project Screenshot Dark Contrast](https://github.com/tenphi/nude/blob/master/images/example-app-dark-contrast.png?raw=true)

## Development status (v1)

Current status of development is [HERE](https://github.com/tenphi/nude/projects/1).

And here is our [Telegram Chat](https://tele.click/numldesign). (Ask your questions here!)

### Browser Support

Based on [caniuse.com](caniuse.com). Real-world support table will be presented after production-release.

* Microsoft Edge 16-18 (Partial support with [@webcomponents/custom-elements polyfill](https://github.com/webcomponents/polyfills/tree/master/packages/custom-elements), 5kb)
* Microsoft Edge 76+
* Google Chrome 67+
* Mozilla Firefox 63+
* Apple Safari 10.1+
* Apple iOS Safari 10.3+
* Google Android 67+

## Build

`npm run build` builds the library to `dist`, generating four files:

* `dist/numl.js` - IIFE-module with auto initialization. Elements' CSS included. (Exports global `Nude` object)
* `dist/numl.dev.js` - Same as above but with helpful warnings and without minification. (Exports global `Nude` object)
* `dist/numl.module.js` - ES-module. Tree-shaking-friendly bundle. Elements' CSS included.
* `dist/numl.module.dev.js` - Same as above but with helpful warnings and without minification.

`npm run dev` builds the library, then keeps rebuilding it whenever the source files change.

## Local playground

Run `npm run play` to view test page with few examples.

## Roadmap

* New useful elements
* Showcase with examples
* More documentation

## Changelog

### v0.10

#### New features
* Full rework of attribute parsing. More features, more stable and much faster.
* Rework of RadioGroup mechanics (migration to Context system). Elements involved: 
    * **[nu-radiogroup](https://numl.design/reference/elements/nu-radiogroup)**
    * **[nu-activeelement](https://numl.design/reference/elements/nu-activeelement)**
    * **[nu-radio](https://numl.design/reference/elements/nu-radio)**
    * **[nu-tablist](https://numl.design/reference/elements/nu-tablist)**
    * **[nu-tab](https://numl.design/reference/elements/nu-tab)**
    * **[nu-btngroup](https://numl.design/reference/elements/nu-btngroup)**
* Automatic **calc** insertion.
* New **color()** function for some style attributes.
* Custom states for **nu-** modifiers and **role** attribute.
* New parent selectors: `root`, `any`, `host`. Usage: `opacity="^host :hover[1] 0"`.
* Add **Behavior System**.
* **nu-tablist** now supports direction change.
* Add **Active** mixin for active elements.
* Add **Direction** mixin for elements that have direction.
* Add **Orient** mixin for elements that have orientation.
* Add **Fixate** mixin for elements that can be fixed via **[drop]** attribute.

#### Breaking changes
* New simplified syntax for state declaration: `0 #btn:pressed[1] #btn:hover[1]` -> `^#btn :pressed[1] :hover[1] 0`.
* Built-in custom units changes: 
	* **br** -> **r**
	* **bw** -> **b**
	* **x** is equal **var(--nu-indent)** now
* Remove custom properties declarations from **[nu-theme](https://numl.design/reference/elements/nu-theme)** decorator! Use brand new **[nu-props](https://numl.design/reference/elements/nu-props)** decorator.
* Theme type **toned** renamed to **tone**.
* **nu-triangle**: remove direction attribute, use **rotate** instead.

#### New elements
* **[nu-props](https://numl.design/reference/elements/nu-props)** - new decorator to declare custom properties.
* **[nu-radiogroup](https://numl.design/reference/elements/nu-radiogroup)** - radio group.
* **[nu-radio](https://numl.design/reference/elements/nu-radio)** - radio button.
* **[nu-progressbar](https://numl.design/reference/elements/nu-progressbar)** - To show progress of a process.
* **[nu-slider](https://numl.design/reference/elements/nu-slider)** and **[nu-rail](https://numl.design/reference/elements/nu-rail)** – To create sliders.
* **[nu-markdown](https://numl.design/reference/elements/nu-markdown)** and **[nu-md](https://numl.design/reference/elements/nu-md)** - To convert markdown markup. EXPERIMENTAL.

#### New attributes & modifiers
* **[scale](https://numl.design/reference/attributes/scale)** with **flip**, **flip-x** and **flip-y** modifiers.
* **[rotate](https://numl.design/reference/attributes/rotate)** - to rotate element.
* **[move](https://numl.design/reference/attributes/move)** - to move element (via `transform:translate(...)`).
* **[show](https://numl.design/reference/attributes/show)** - to conditionally show elements. Hide them by default.
* **[hoverable](https://numl.design/reference/attributes/hoverable)** - to activate hover effect on background for active elements.
* **[focusable](https://numl.design/reference/attributes/focusable)** - to activate focus effect on active elements. 
* **[toggle](https://numl.design/reference/attributes/toggle)** - to activate toggle effect on active elements.
* **[expand](https://numl.design/reference/attributes/expand)** - to increase active region.
* **[drop](https://numl.design/reference/attributes/drop)** - to statically fix element position based on parent element (using `position: fixed`).
* **[place](https://numl.design/reference/attributes/place)** now support sticky positioning with distance: `[place="sticky top 3"]`.
* **[t](https://numl.design/reference/attributes/t)** - for responsive labels.
* **[shadow](https://numl.design/reference/attributes/shadow)** - support for native CSS shadows with NUDE shortcuts.

#### Minor and internal changes
* Refactoring for table elements.
* **[nu-img](https://numl.design/reference/elements/nu-img)** new simplified API with **fit** attribute.
* **[hide](https://numl.design/reference/attributes/hide)** attribute is no longer hide element if no value provided.
* **[nu-checkbox](https://numl.design/reference/elements/nu-checkbox)** - style fixes.
* **[nu-mark](https://numl.design/reference/elements/nu-mark)** – minor style fixes and **[theme]** support.
* **[nu-line](https://numl.design/reference/elements/nu-line)** - refactoring. Migrate to **Orient Behavior** and NUDE attribute declarations.
* **[nu-tab](https://numl.design/reference/elements/nu-tab)** - add active region.
* **[nu-tooltip](https://numl.design/reference/elements/nu-tooltip)** - fix styling to better fill space while allowing wrapping.
* **inline** attribute is no longer required for accurate positioning of inline elements like **[nu-icon](https://numl.design/reference/elements/nu-icon)**.
* Tables style rework.
* Active elements style rework.
* Migrate element styles to NUDE attribute definitions.
* Migrate attribute implementations to parseAttr() method.
* New color parsing implementation.
* Add ability to set context values before element is connected.
* New styling for hoverable effect based on `box-shadow`.

#### Bug fixes
* Fix conflict between transform attributes.
* Fix **special-text-color** for swap theme variant in high contrast mode.

[Full issues list](https://github.com/tenphi/nude/milestone/3?closed=1)

### v0.9

#### New features

* New **Variable system**.
* Rework of **Responsive system** to fix all known issues and add support for **Variable system**. Performance is improved.

#### Bug fixes

* **Responsive system**: nested responsive contexts works incorrect.

### v0.8

#### New features

* Full rework of **Theme System**. Full theme calculation from single hue param. WCAG contrast ratio compliance. Much better **Dark scheme** and **High contrast** support. Ability to tweak every theme with modifiers.
* Improved support for Svelte.
* Links native behavior.
* Magic **diff** color.

#### Breaking changes

* **theme**, **color**, **fill** attributes now works completely different.
* **[nu-theme](https://numl.design/reference/elements/nu-theme)** has new awesome API.
* **[nu-triangle](https://numl.design/reference/elements/nu-triangle)**: **[dir]** -> **[set]**.
* **[nu-style](https://numl.design/reference/elements/nu-style)** renamed to **nu-attrs** for a more accurate understanding.
* **nu-scroll** removed. (legacy element)

#### New elements
* **nu-numinput** - Input for numeric values.
* **nu-mark** - Highlight part of the text.
* **nu-code** - Code snippets!

#### New attributes
* **[scrollbar](https://numl.design/reference/attributes/scrollbar)** - To control over scroll bar styling.

#### Bug fixes
* Unable to change border width of **nu-switch**.
* Flex doubles gap in Firefox.
* Fix **[nu-switch](https://numl.design/reference/elements/nu-switch)** styles.
* Fix flash of non-styled content for responsive elements.

### v0.7

#### Breaking changes
* **mod** attribute is replaced with **text** attribute and move all non-text-related modifiers to other attributes. Now it’s not possible to specify text size with **text** attribute. Use **size** attribute instead.
* **hidden** attribute is renamed to **hide**.
* **events** attribute is renamed to **interactive** and change its API.
* **cell** attribute replaced with **fill** value for **place** attribute.
*  **background** attribute is renamed to **fill**.

#### New elements
* New base inline element **nu-el**.
* New **nu-rowheader** element for tables.
* New **nu-checkbox** element.
* New **nu-label** element.
* New **nu-style** element to declare attributes with their values in context to cast them into elements within that context. It’s a handy alternative to CSS classes. You can dynamically change attributes to affect related elements.
* New **nu-popup** and **nu-popupmenu** elements with accessibility features and intuitive mechanics.

#### New attributes & modifiers
* Dynamic **display** attribute. How you can change it depending on responsive points or state.
* Added wrapped **flex** support with two-dimension gap. Just use **flow** attribute with **wrap** modifier. (Polyfill has restrictions)
* New attribute **overflow**.
* New **image** attribute for background image declaration.
* New modifiers for **radius** attribute: **round** and **ellipse**.
* Direction modifiers for **padding** and **space** attributes.
* New **color** attribute modifiers: **fill**, **minor fill**, **special fill**, **swap**, **minor swap**, **special swap**. They currently don’t affect shadow intensity; New color shotcuts presented;
* Added new **:prev** and **:next** shortcuts for accessibility link attributes.

#### Minor and internal changes
* Added context system to access element's context provided by parent elements and register hooks for context change. It’s very important feature that drastically simplifies implementation of widgets and internal systems.
* Full rework of **gap** and **flow** attributes to better support dynamic **display** attribute.
* Attribute **gap** support for all block elements. It add needed margins to all children except the last one.
* Simplified event mechanics for widgets.
* **CSS Mixins** to share styles between attributes and optimize style applying. It's under-the-hood improvement that speeds up elements’ rendering and fixes several bugs. It almost completely fulfills NUDE’s promise to apply styles only when they are needed.
* Static css inheritance reworked. API was simplified.
* Added cleaning system to remove CSS that can’t be used again.
* Add auto id static getter **nuId**. If specified element will automatically receive **id**. So you can link the most of the elements without explicitly defining **id** in some cases.
* Multiple fixes to various element styles.

#### Bug fixes
* Responsive system fix to support attributes that generates nothing for some values.

## Contribution

There is no contribution guideline just yet but we would love to hear any feedback from you. Feel free to leave a note at [tenphi@gmail.com](mailto:tenphi@gmail.com?subject=NUDE%20Feeback).

## License

[MIT](LICENSE)
