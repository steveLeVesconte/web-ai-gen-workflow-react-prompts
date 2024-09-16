# Design System Documentation
## CSS Reset
```
/* 
*   Kevin Powell
*   https://youtu.be/cCAtD_BAHNw 
*   
*   Steve LeVesconte removed 'dark mode'
*/

*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  font: inherit; /* Get rid of all font sizes and heights */
}


body {
  min-height: 100vh;
}

/* Media responsive */
img, picture, svg, video {
  display: block;
  max-width: 100%;
}

h1, h2, h3, h4, h5, h6 {
  text-wrap: balance;
}

p {
  max-width: 75ch;
  text-wrap: pretty; /* Prevents orphans on lines */
}

@media (prefers-reduced-motion: no-preference) {
  :has(:target) {
    scroll-behavior: smooth;
    scroll-padding-top: 3rem;
  }
}
```

## Spacing
- body: min-height: 100hv
- Standard paragraph margin: 0 0 1rem 0 (0px top, 0px right, 16px bottom, 0px left)
- Heading margin: 2rem 0 1rem 0 (32px top, 0px right, 16px bottom, 0px left)
- Image margin: 2rem 0 (32px top and bottom)
- List item margin: 0 0 0.5rem 0 (0px top, 0px right, 8px bottom, 0px left)
- blockquote margin: 2rem 0 (32px top and bottom)
- Section margin: 4rem 0 (64px top and bottom)

## Typography
### Font Family
- All text: apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif

### Font Sizes and Styles
#### Desktop Font Sizes and Styles
| Element | Font Size | Line Height | Font Weight | Other |
|---------|-----------|-------------|-------------|-------|
| Body Text | 18px | 28px | 400 | - |
| Body Text Links | 18px | 28px | 600 | text-decoration: underline |
| H1 | 48px | 56px | 700 | - |
| H2 | 40px | 48px | 700 | - |
| H3 | 28px | 36px | 600 | - |
| Byline | 14px | 20px | 400 | - |
| Image Labels | 14px | 20px | 400 | - |
| Footer Link | 16px | 24px | 400 | text-decoration: none |
| figcaption | 13px | 18.2px | 400 | text-align: center |

#### Mobile Font Sizes and Styles
| Element | Font Size | Line Height | Font Weight | Other |
|---------|-----------|-------------|-------------|-------|
| Body Text | 16px | 24px | 400 | - |
| Body Text Links | 16px | 24px | 600 | text-decoration: underline |
| H1 | 32px | 40px | 700 | - |
| H2 | 28px | 36px | 700 | - |
| H3 | 24px | 32px | 600 | - |
| figcaption | 10px | 13px | 400 | text-align: center |

## Color Scheme
| Element | Color |
|---------|-------|
| Default Text | #1f2937 |
| Body Text Links | #2563eb |
| H1 | #1f2937 |
| H2 | #1f2937 |
| H3 | #1f2937 |
| Reverse Text | #ffffff |
| Primary Accent | #3b82f6 |
| Secondary Accent | #10b981 |
| Footer Background | #111827 |
| Footer Link | rgba(255, 255, 255, 0.7) |
| Footer Text | rgba(255, 255, 255, 0.7) |
| body background | #f3f4f6 |
| figcaption | color: rgba(0, 0, 0, .5)|
| Byline | #6b7280 |
| blockquote | #1f2937 |

## Desktop Layout
### PageContainer
- display: flex
- flex-direction: column
- min-height: 100vh

### Header:
- Full viewport width
- Header Content Area:
  -- max-width: 1280px
  -- margin: 0 auto
  -- padding: 0 32px
  -- Contains:
    --- Brand Title on left (developer's name) (is link to home page)
    --- NavBar on right

### Main Content Aria
- border-radius: 8px
- background-color: #ffffff
- margin-top: 16px
- margin-bottom: 16px
- width: inherit
- max-width: 864px
- margin: 0 auto
- padding: 0 32px

### Footer:
- Full viewport width
- Footer Content Area:
  -- max-width: 1280px
  -- margin: 0 auto
  -- padding: 0 32px
  -- Content displayed horizontally in one row with appropriate spacing
  -- contains:
      --- copyright ( on left)
      --- Footer Links ( on right )
          ---- GitHub
          ---- LinkedIn

## Mobile Layout
- Main Content Area:
  -- margin: 0 16px
  -- padding: 16px
- NavBar:
  -- margin: 0 16px

## Desktop NavBar 
### Desktop Font Sizes and Styles
| Element | Font Size | Line Height | Font Weight | Other |
|---------|-----------|-------------|-------------|-------|
| NavBar Menu Link | 18px | 28px | 500 | text-decoration: none |
| Brand Title | 40px | 48px | 700 | text-decoration: none; display: flex; align-items: center; height: 100%; |

### Color Scheme
| Element | Color |
|---------|-------|
| NavBar Background | #111827 |
| NavBar Menu Link | #ffffff |
| NavBar Menu Link :active | Primary Accent |
| NavBar Menu Link :hover | Primary Accent |
| hamburger icon | Reverse Text |
| Brand Title | Reverse Text |
| Brand Title :hover | Primary Accent |

### Desktop Nav (> 768px):
- Centered in viewport
- width: 100%
- max-width: 1280px
- margin: 0 auto
- padding: 0 32px
- height: 100%  # Make the nav take full height of the header
- Display: flex
- align-items: center
- Justify-content: flex-end
- Desktop Nav ul
  -- list-style-type: none
  -- margin: 0
  -- padding: 0
  -- display: flex
  -- align-items: center
  -- height: 100%
- Desktop Nav li
  -- display: flex
  -- align-items: center
  -- height: 100%
- Desktop Nav a
  -- display: flex
  -- align-items: center
  -- height: 100%
  -- padding: 0 16px

## Mobile NavBar
### Mobile Font Sizes and Styles
| Element | Font Size | Line Height | Font Weight | Other |
|---------|-----------|-------------|-------------|-------|
| Vertical NavBar Menu Link | 24px | 36px | 500 | text-decoration: none |
| hamburger icon | 32px | 40px | 700 | - |

### Mobile Nav (≤ 768px):
- Hide Desktop Nav
- Display hamburger icon (≡) in top-right corner 
- Initially hide the following:
  -- Full-screen vertical menu
  -- (X) button for closing the full-screen-vertical-menu

### Hamburger Icon:
- Display: none (for Desktop)
- Display: block (for Mobile)
- Position: absolute
- Top: 16px
- Right: 16px
- z-index: 1001
  
### Full-Screen Vertical Menu:
- Initially hidden (display: none)
- When active:
  -- Position: fixed
  -- Top: 0
  -- Left: 0
  -- Width: 100%
  -- Height: 100vh
  -- Display: flex
  -- Flex-direction: column
  -- Justify-content: center
  -- Align-items: center
  -- list-style-type: none
  -- z-index: 1000
  -- Background-color: [NavBar Background Color]

### Close (X) Button:
- Position: absolute
- Top: 16px
- Right: 16px
- z-index: 1002
- Initially hidden (display: none)
- When full-screen menu is active:
  -- display: block

### JavaScript Functionality:
- On hamburger icon click:
  -- Show full-screen vertical menu
  -- Show Close (X) Button
  -- Hide hamburger icon
- On Close (X) Button click:
  -- Hide full-screen vertical menu
  -- Hide Close (X) Button
  -- Show hamburger icon (on mobile only)

## Components
### Article Image:
- figure:
  -- margin: 32px 0
  -- img:
     --- border-radius: 8px
     --- Box shadow: 0 4px 6px rgba(0, 0, 0, 0.1)
     --- transition: none
     --- height: auto
  -- figcaption:
    --- text-align: center
    --- margin-top: 8px

### Article Bulleted List
- list-style-position: inside
- padding-left: 32px

### blockquote
- background-color: #f9fafb
- border-radious: 8px
- padding: 1rem
- font-style: italic
- border-left: 4px solid
- margin: 32px 0 #1f2937

## Interactive Elements
### Buttons
- Primary Button:
  -- Background: Primary Accent
  -- Text Color: #ffffff
  -- Padding: 12px 24px
  -- Border Radius: 4px
  -- Hover State: Darken background by 10%
- Secondary Button:
  -- Border: 2px solid Primary Accent
  -- Text Color: Primary Accent
  -- Background: transparent
  -- Padding: 10px 22px
  -- Border Radius: 4px
  -- Hover State: Fill background with 10% opacity of primary color

### Form Elements
- Input Fields:
  -- Border: 1px solid #d1d5db
  -- Border Radius: 4px
  -- Padding: 8px 12px
  -- Focus State: 2px solid #3b82f6 border
- Checkboxes and Radio Buttons:
  -- Use custom styles to maintain consistency across browsers
  -- Ensure clear visual feedback for checked states

## Animation and Transitions
- Use consistent easing for all animations: cubic-bezier(0.4, 0, 0.2, 1)
- Standard duration for short animations: 200ms
- Hover transitions:
  -- Apply to all interactive elements
  -- Duration: 150ms
- Page transitions:
  -- Fade in new content: 300ms
- Loading animations:
  -- Use subtle, on-brand animations for loading states
  -- Avoid rapid or distracting movements

## Accessibility Guidelines
- Use semantic HTML5 elements
- Follow WCAG 2.1 guidelines (AA level)
- Ensure hamburger menu is keyboard accessible
- Use appropriate alt text for images
- Maintain sufficient color contrast ratios (minimum 4.5:1 for normal text, 3:1 for large text)
- Ensure all interactive elements have focus states

## Responsive Design
- Use media queries for responsive breakpoints
- Ensure all images are responsive (width: 100%; height: auto;)
- Collapse navigation into hamburger menu on mobile devices


