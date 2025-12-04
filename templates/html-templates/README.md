# JCINK HTML Templates - Tailwind Styled

These templates replace JCINK's default table-based layouts with Tailwind CSS flexbox/grid layouts that are mobile-responsive.

## Installation

1. Go to **Admin CP → Skins & Templates → HTML Templates**
2. Select the skin you want to edit
3. Copy the content from each file into the corresponding template field
4. Save

## Templates Included

### Front Page (Board Index)

| File | JCINK Template Name | Description |
|------|---------------------|-------------|
| `category-list-header.html` | Category List Header | Category container with header |
| `forum-row.html` | Forum Row | Individual forum listing |
| `subforum-list-header.html` | Subforum List Header | Subforum container |

## Features

### Mobile-First Design
- **Desktop (md+)**: Grid layout with columns for icon, name, topics, replies, last post
- **Mobile**: Card-style layout with stacked content

### Responsive Breakpoints
Uses Tailwind's `md:` prefix (768px) for responsive switching:
- `hidden md:grid` - Desktop grid, hidden on mobile
- `md:hidden` - Mobile layout, hidden on desktop

### Custom Colors
Uses the forum color variables defined in the wrapper:
- `bg-forum-bg`, `bg-forum-surface`, `bg-forum-dark`
- `text-forum-text`, `text-forum-muted`, `text-forum-subtle`
- `text-forum-accent`, `hover:text-forum-accent-hover`
- `border-forum-border`

## Variables Reference

### Forum Row Variables
| Variable | Description |
|----------|-------------|
| `<!-- \|forum_id\| -->` | Forum ID number |
| `<!-- \|name_text\| -->` | Forum name (plain text) |
| `<!-- \|description\| -->` | Forum description |
| `<!-- \|img_new_post\| -->` | New post indicator |
| `<!-- \|topics\| -->` | Topic count |
| `<!-- \|replies\| -->` | Reply count |
| `<!-- \|last_post\| -->` | Last post date/time |
| `<!-- \|last_topic\| -->` | Last topic title |
| `<!-- \|last_poster\| -->` | Last poster name |
| `<!-- \|subforums\| -->` | Subforum list |
| `<!-- \|moderators\| -->` | Moderator list |

### Category Variables
| Variable | Description |
|----------|-------------|
| `<!-- \|cat_id\| -->` | Category ID |
| `<!-- \|cat_name\| -->` | Category name |
| `<!-- \|collapsed_style\| -->` | Style for collapsed state |
| `<!-- \|collapse_img\| -->` | Collapse/expand image |
