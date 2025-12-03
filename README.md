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

### Deploying to JCINK

1. **Copy the Board Wrapper:**
   - Go to ACP > Skins & Templates > HTML Templates > Board Wrapper
   - Replace with contents of `templates/board-wrapper.html`
   - This includes the Tailwind CDN and all configuration

2. **Copy Other Templates:**
   - Go to ACP > Skins & Templates > HTML Templates
   - Replace each template with the corresponding file from the `templates/` folder

3. **That's it!** The Tailwind CDN handles everything automatically.

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

Edit the CSS variables in `src/css/main.css`:

```css
:root {
  --forum-bg: #f1f5f9;        /* Page background */
  --forum-surface: #ffffff;    /* Card backgrounds */
  --forum-border: #e2e8f0;     /* Border color */
  --forum-text: #1e293b;       /* Main text */
  --forum-text-muted: #64748b; /* Secondary text */
  --forum-accent: #0ea5e9;     /* Links & accents */
}
```

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
├── src/
│   ├── css/
│   │   └── main.css        # Main stylesheet with Tailwind directives
│   └── js/                  # JavaScript (if needed)
├── templates/
│   ├── board-wrapper.html   # Main page wrapper
│   ├── category-row.html    # Category container
│   ├── forum-row.html       # Individual forum row
│   ├── topic-list.html      # Topic listing page
│   ├── topic-row.html       # Individual topic row
│   ├── topic-view.html      # Topic/thread view page
│   ├── post-display.html    # Individual post display
│   ├── mini-profile.html    # Post sidebar profile
│   └── profile.html         # User profile page
├── dist/
│   └── theme.css            # Compiled CSS (generated)
├── tailwind.config.js       # Tailwind configuration
├── package.json             # Node.js dependencies
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

1. **JCINK Variables**: The templates use JCINK variables like `<%BOARD_NAME%>`, `<%FORUM_ROWS%>`, etc. Don't remove these - they're replaced with actual content by JCINK.

2. **CSS Hosting**: Consider hosting your compiled CSS on a CDN or external host for better performance.

3. **Testing**: Test on a development skin before deploying to your live forum.

4. **Backup**: Always backup your existing templates before making changes.

## License

MIT License - Feel free to use and modify for your JCINK forum.

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.
