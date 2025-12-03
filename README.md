# TailwindJCINK Theme

A modern, responsive JCINK forum theme built with Tailwind CSS. This theme provides a clean, customizable foundation for your JCINK forum with dark mode support, mobile responsiveness, and modular components.

## Features

- **Tailwind CSS Play CDN** - JIT compilation directly in the browser (no build step needed!)
- **Dark Mode** - Automatic and toggle-based dark mode support
- **Responsive Design** - Mobile-first approach
- **Modular Templates** - Easy to customize individual components
- **CSS Variables** - Quick theme customization
- **Modern UI** - Clean cards, badges, buttons, and typography

## Quick Start (Recommended: Play CDN)

The templates use the **Tailwind Play CDN** which provides JIT (Just-In-Time) compilation directly in the browser. This means:

- No build step required
- Use any Tailwind class directly in your templates
- Instant updates when you edit
- Perfect for JCINK hosting

---

## JCINK Installation Guide

### Step 1: Create a New Skin (Recommended)

1. Log into your JCINK Admin CP (ACP)
2. Go to **Skins & Templates** → **Manage Skin Sets**
3. Under **Create New Skin Set**, select a skin to base it on from the dropdown
   - **Brand new boards:** Select "IP.Board" or whichever default skin is available
4. Click **Create new Skin Set**
5. Your new skin will appear in the **Current Skins Used by Members** list

> **Note for brand new JCINK boards:** If you prefer to edit the default skin directly instead of creating a new one, you can skip this step and edit the existing "IP.Board" skin in Steps 2-3. However, creating a new skin is recommended so you have a backup.

### Step 2: Install the Board Wrapper

This is the most important template - it contains the Tailwind CDN and all configuration.

1. In **Manage Skin Sets**, find your new skin in the list
2. Click the **Board Wrapper** link under your skin's title (next to "Edit:")
3. **Select all** the existing code and **delete it**
4. Copy the entire contents of `templates/board-wrapper.html` from this repo
5. Paste it into the text area
6. Click **Update**

### Step 3: Install the Stylesheet

The stylesheet provides all component classes and is loaded via the `<% CSS %>` tag in the Board Wrapper.

1. In **Manage Skin Sets**, click the **Stylesheet** link under your skin
2. **Select all** the existing CSS and **delete it**
3. Copy the entire contents of `templates/stylesheet.css` from this repo
4. Paste it into the text area
5. Click **Update**

**Important:** The stylesheet contains all the component classes (`.forum-card`, `.category-row`, `.post`, etc.) that the HTML templates reference. Without it, your forum will not display correctly.

### Step 4: Set Up HTML Templates

1. Go to **Skins & Templates** → **HTML Templates**

**Option A: Import via XML file (Easiest)**

Use the provided XML file to import the complete skin including all templates:

1. Go to **Skins & Templates** → **Manage Skin Sets**
2. At the bottom, find **"Import a complete skin set"**
3. Click **Browse** and select `templates/tailwindjcink-skin.xml`
4. Click **Import Skin Set**
5. The skin will be created with CSS, Board Wrapper, and all HTML templates
6. **Skip to Step 6!**

> **Note:** If HTML templates don't import (known issue on some older JCINK boards), use Option B or C below to install them manually.

**Option B: Manual setup for brand new boards**

If you see "There are currently no existing Custom HTML Template sets", you need to create one first:

1. Under **Create a new HTML Template Set**:
   - **Base new template set on...**: Select "New Blank Template Set" from the dropdown
   - **Name for new template set...**: Enter a name (e.g., "TailwindJCINK")
   - **Allocate this template set to skin...**: Select the skin you created in Step 1 (or your default skin)
2. Click **Create a new HTML Template Set**
3. You'll be taken to a page with expandable template categories (Board Index Templates, Topic List Templates, etc.)
4. Continue to Step 5 to install templates manually

**Option C: Manual setup for existing boards**

1. You'll see a list of existing template sets
2. Click on the template set name associated with your skin to edit it
3. You'll see expandable template categories
4. Continue to Step 5 to install templates manually

### Step 5: Install All HTML Templates

Install each template by clicking on its name, deleting existing code, pasting the new code, and clicking **Update**.

**Board Stats:**
- Click **Board Stats** → Paste `templates/board-stats.html`

**Category Headers:**
- Click **Category Headers** → Paste `templates/category-row.html`

**Forum Row:**
- Click **Forum Row** → Paste `templates/forum-row.html`

**Main Profile:**
- Click **Main Profile** → Paste `templates/profile.html`

**Member List Headers:**
- Click **Member List Headers** → Paste `templates/member-list-headers.html`

**Member List Row:**
- Click **Member List Row** → Paste `templates/member-list-row.html`

**Mini Profile:**
- Click **Mini Profile** → Paste `templates/mini-profile.html`

**Post Row:**
- Click **Post Row** → Paste `templates/post-display.html`

**Redirect Row:**
- Click **Redirect Row** → Paste `templates/redirect-row.html`

**Subforum Headers:**
- Click **Subforum Headers** → Paste `templates/subforum-headers.html`

**Topic List Headers:**
- Click **Topic List Headers** → Paste `templates/topic-list.html`

**Topic Row:**
- Click **Topic Row** → Paste `templates/topic-row.html`

### Step 6: Set as Default (Optional)

1. Go to **Skins & Templates** → **Manage Skin Sets**
2. Find your new Tailwind skin
3. Click **Set as Default** to make it the default for all visitors

### Template Reference

| Template File | JCINK Template Name |
|---------------|---------------------|
| `tailwindjcink-skin.xml` | Manage Skin Sets → Import (Complete skin with all templates) |
| `stylesheet.css` | Manage Skin Sets → Stylesheet |
| `board-wrapper.html` | Manage Skin Sets → Board Wrapper |
| `board-stats.html` | Board Stats |
| `category-row.html` | Category Headers |
| `forum-row.html` | Forum Row |
| `member-list-headers.html` | Member List Headers |
| `member-list-row.html` | Member List Row |
| `mini-profile.html` | Mini Profile |
| `post-display.html` | Post Row |
| `profile.html` | Main Profile |
| `redirect-row.html` | Redirect Row |
| `subforum-headers.html` | Subforum Headers |
| `topic-list.html` | Topic List Headers |
| `topic-row.html` | Topic Row |

---

### Using Any Tailwind Class

With the Play CDN, you can use ANY Tailwind utility class directly in your HTML:

```html
<div class="bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-2xl shadow-xl">
  <h1 class="text-4xl font-black text-white tracking-tight">Hello!</h1>
</div>
```

## Alternative: Pre-compiled CSS

If you prefer pre-compiled CSS (smaller file size, no CDN dependency):

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
npm install
npm run build
```

### Deploying Pre-compiled CSS

1. **Upload the CSS:**
   - Go to ACP > Skins & Templates > CSS
   - Replace with contents of `dist/theme.css` (or `dist/theme.min.css`)

2. **Update HTML Templates:**
   - Remove the `<script src="https://cdn.tailwindcss.com">` and config from the board wrapper
   - Replace templates as described above

### Template Files

| File | JCINK Location |
|------|----------------|
| `board-wrapper.html` | HTML Templates > Board Wrapper |
| `category-row.html` | Board Index Templates > Category Row |
| `forum-row.html` | Board Index Templates > Forum Row |
| `topic-list.html` | Topic List Templates > Topic List Wrapper |
| `topic-row.html` | Topic List Templates > Topic Row |
| `topic-view.html` | Topic View Templates > Topic View Wrapper |
| `post-display.html` | Topic View Templates > Post Row |
| `mini-profile.html` | Topic View Templates > Mini Profile |
| `profile.html` | Profile Templates > Profile |

## Customization

### Quick Theme Colors

Edit the CSS variables at the top of `templates/stylesheet.css`:

```css
:root {
  --forum-bg: #f1f5f9;        /* Page background */
  --forum-surface: #ffffff;    /* Card backgrounds */
  --forum-border: #e2e8f0;     /* Border color */
  --forum-text: #1e293b;       /* Main text */
  --forum-muted: #64748b;      /* Secondary text */
  --forum-accent: #0ea5e9;     /* Links & accents */
}
```

After editing, re-paste the updated CSS into your JCINK Stylesheet.

### Tailwind Configuration

Modify `tailwind.config.js` to customize:

- Colors palette
- Typography
- Spacing
- Shadows
- Animations

### Dark Mode

Dark mode is enabled by adding the `dark` class to the `<html>` element. The theme includes:

- Automatic detection of system preference
- Toggle button in the header
- LocalStorage persistence

## Project Structure

```
TailwindJCINK/
├── templates/
│   ├── tailwindjcink-skin.xml    # XML import (CSS + Wrapper only)
│   ├── stylesheet.css            # Main CSS
│   ├── board-wrapper.html        # Page wrapper with Tailwind CDN
│   ├── board-stats.html          # Board statistics display
│   ├── category-row.html         # Category headers
│   ├── forum-row.html            # Forum row
│   ├── member-list-headers.html  # Member list page header
│   ├── member-list-row.html      # Individual member row
│   ├── mini-profile.html         # Post sidebar mini profile
│   ├── post-display.html         # Post row
│   ├── profile.html              # Main profile page
│   ├── redirect-row.html         # Redirect forum row
│   ├── subforum-headers.html     # Subforum links
│   ├── topic-list.html           # Topic list headers
│   └── topic-row.html            # Topic row
├── src/
│   └── css/
│       └── main.css              # Tailwind source (for pre-compiled builds)
├── dist/
│   └── theme.css                 # Compiled CSS (generated by npm run build)
├── tailwind.config.js            # Tailwind configuration
├── package.json                  # Node.js dependencies
└── README.md
```

## CSS Components

The theme includes these pre-built components:

### Layout
- `.forum-container` - Main content wrapper
- `.forum-card` - Card/panel component
- `.forum-nav` - Navigation bar

### Forum Elements
- `.category-row` - Category/forum row
- `.topic-row` - Topic row styling
- `.post` - Post container
- `.mini-profile` - User profile sidebar

### UI Components
- `.btn`, `.btn-primary`, `.btn-secondary` - Buttons
- `.alert`, `.alert-info`, `.alert-warning` - Alerts
- `.tag`, `.group-badge` - Labels and badges
- `.pagination` - Page navigation
- `.dropdown` - Dropdown menus

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Scripts

| Command | Description |
|---------|-------------|
| `npm run build` | Build CSS for production |
| `npm run build:min` | Build minified CSS |
| `npm run watch` | Watch for changes and rebuild |
| `npm run dev` | Alias for watch |

## Tips for JCINK

1. **JCINK Variables**: The templates use JCINK variables like `<% BOARD %>`, `<!-- |forum_id| -->`, etc. Don't remove these - they're replaced with actual content by JCINK.

2. **Testing**: Always test on a development skin before deploying to your live forum.

3. **Backup**: Always backup your existing templates before making changes. You can export your current skin from Manage Skin Sets.

4. **Customizing Colors**: Edit the CSS variables at the top of `stylesheet.css` and re-paste into your JCINK Stylesheet.

5. **Adding Custom Components**: Add new CSS classes to your Stylesheet. Tailwind utility classes can be used directly in any HTML template.

## Troubleshooting

### Theme not loading correctly?

- Make sure you installed **both** the Stylesheet and Board Wrapper
- Check that the Tailwind CDN script is loading (look for errors in browser console)
- Verify your skin is selected as default or you're viewing it via the skin switcher

### Styles look broken?

- The Stylesheet must be installed - it contains all the component classes
- The Board Wrapper must be installed - it contains the Tailwind CDN
- Make sure you're using the skin you installed the templates on
- Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)

### Variables showing as text?

- JCINK variables like `<% BOARD %>` should be replaced automatically
- If you see them as plain text, the template may have syntax errors
- Re-copy the template from the original file

## License

MIT License - Feel free to use and modify for your JCINK forum.

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.
