# Design QA

## Evidence

- Source visual truth path: `qa/source-design.png`
- Homepage implementation screenshot path: `qa/implementation-home-desktop.png`
- CSS subpage implementation screenshot path: `qa/implementation-desktop.png`
- Full-page implementation path: `qa/implementation-full-page.png`
- Homepage side-by-side comparison: `qa/design-comparison-home.png`
- Focused learning-flow comparison: `qa/design-comparison-focused.png`
- Mobile evidence: `qa/implementation-home-mobile.png`, `qa/implementation-mobile.png`, and `qa/implementation-mobile-games.png`
- Favicon evidence: `qa/implementation-favicons.png` and `qa/implementation-favicons-mobile.png`
- Language-category evidence: `qa/language-categories-desktop.png` and `qa/language-categories-mobile.png`
- State: homepage at `/`; CSS Diner selected at `/css-spil`; desktop and mobile dark terminal theme.
- Browser viewport request: 1536 × 1058 CSS px. Browser capture: 1521 × 1048 px at device scale 1.
- Source pixels: 1487 × 1058. Implementation pixels: 1521 × 1048. Images were compared proportionally without density resampling.
- Mobile frame: 390 × 844 CSS px inside the browser; document width 375 px after scrollbar reservation and no horizontal overflow.

## Findings

- No actionable P0, P1, or P2 findings remain.
- Information architecture: the activity welcome page is now the homepage, and the existing learning tool is available at `/css-spil`. Both routes share a clear two-item navigation.
- Fonts and typography: JetBrains Mono matches the source's terminal character. Headings, body copy, and small system labels maintain a clear hierarchy and remain readable at desktop and mobile sizes.
- Spacing and layout rhythm: The implementation intentionally removes the source's dense boot log and exercise grid. This follows the later audience constraint for 7th–8th grade students and preserves one primary action at a time. The remaining spacing, square borders, and single-column progression match the selected simple direction.
- Colors and visual tokens: Black, phosphor green, amber, and dim-green borders match the source. Contrast is high, and visible keyboard focus uses amber.
- Image quality and asset fidelity: The raster assets are official site favicons used as compact identifiers. The source's decorative ASCII computer was intentionally omitted to reduce visual load; no placeholder asset was substituted.
- Game identity assets: all nine entries use locally stored official favicons. Coding Fantasy's two games share its official site icon. Each icon is shown in a consistent 32 px shell on desktop and 28 px shell on mobile without stretching or broken-image states.
- Copy and content: Six CSS games, two JavaScript games, and one Python/JavaScript game are present with short Danish explanations, relevant concepts, level information, and destination URLs.
- Responsiveness: At 390 × 844, game content stacks vertically, language filters become full-width controls, the single Python entry spans the selector width, and no horizontal overflow occurs.
- Accessibility: Semantic headings, labelled navigation, visible focus states, reduced-motion handling, and descriptive external-link labels are present.

## Primary interactions tested

- Hero link scrolls to the game selector.
- Homepage primary actions and navigation open `/css-spil` successfully.
- The external course-overview URL and telephone link match the supplied information.
- Selecting Flexbox Defense updates the heading, explanation, code, and destination URL.
- “Næste spil” advances from Flexbox Defense to Flexbox Froggy.
- All four game buttons render and remain selectable in the mobile frame.
- All four official favicon assets load successfully (`naturalWidth > 0`) and remain visible in the 390 × 844 game selector.
- Category switching was tested for CSS `[01/06]`, JavaScript `[01/02]`, and Python `[01/01]` on desktop and mobile.
- Selecting Code.org Game Lab updates its heading and the JavaScript counter to `[02/02]`; Python opens CodeCombat as its sole entry.
- All four newly downloaded favicon files are present locally alongside the existing assets.
- Console checked: no application-origin errors or warnings. Browser-extension-only warnings were ignored.

## Full-view comparison evidence

`qa/design-comparison-home.png` confirms that the new homepage keeps the selected terminal palette, monospace hierarchy, inverted primary action, square geometry, and spacious single-path composition. Lower density is an intentional response to the student audience.

## Focused region comparison evidence

`qa/design-comparison-focused.png` compares the source learning path with the implemented game selector. It confirms that the implementation retains the source's numbered progression and lesson/action relationship while presenting only one explanation at a time.

## Comparison history

- Initial comparison found no P0/P1/P2 mismatch after accounting for the explicit low-information-density requirement.
- No visual fixes were required after the comparison.
- Extension pass: the homepage and `/css-spil` route were rendered, navigation was tested, the 390 × 844 homepage frame was checked for overflow, and the updated comparison found no P0/P1/P2 issues.
- Favicon pass: all four downloaded source assets were verified in desktop and mobile browser renders; no layout or console regressions were found.
- Language expansion pass: five games were added behind three simple category filters, and all category states were interaction-tested on desktop and mobile.

## Follow-up polish

- P3: Self-host JetBrains Mono if the final deployment must work without access to Google Fonts.

## Final result

final result: passed
