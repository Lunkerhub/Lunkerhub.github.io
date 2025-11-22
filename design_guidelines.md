# Design Guidelines: AI Video Calling Platform

## Design Approach
**Selected Approach:** Design System - VS Code-inspired productivity interface
**Justification:** Utility-focused application requiring efficiency, information density, and familiar developer-friendly patterns. The VS Code aesthetic provides established conventions for file management, project organization, and workspace layouts.

**Key References:**
- VS Code interface patterns for layout structure
- Linear for clean typography and spacing
- Discord for video call interface elements

## Core Design Principles
1. **Functional Clarity:** Every UI element serves a clear purpose
2. **Spatial Efficiency:** Maximize workspace without clutter
3. **Familiar Patterns:** Leverage VS Code conventions for instant usability
4. **Contextual Hierarchy:** Clear distinction between navigation, content, and tools

## Typography System

**Font Families:**
- Primary Interface: Inter (400, 500, 600)
- Code/Monospace: JetBrains Mono (400, 500)

**Type Scale:**
- Large Headings: text-2xl font-semibold (project names, section headers)
- Medium Headings: text-lg font-medium (panel titles, modal headers)
- Body Text: text-sm font-normal (default interface text)
- Small Text: text-xs (metadata, timestamps, helper text)
- Code/Technical: text-sm font-mono (file names, paths, credentials)

## Layout System

**Spacing Primitives:** Use Tailwind units of 2, 4, 6, 8 for consistency
- Component padding: p-4
- Section spacing: gap-4, gap-6
- Panel margins: m-2, m-4
- Button padding: px-4 py-2
- Large containers: p-6, p-8

**Grid Structure:**
```
├── Sidebar (w-64): Navigation & file tree
├── Main Content (flex-1): Primary workspace
└── Right Panel (w-80): AI assistant/settings (collapsible)
```

**Responsive Behavior:**
- Desktop (lg+): Three-column layout
- Tablet (md): Collapse right panel, show toggle
- Mobile: Stack vertically, hamburger menu for sidebar

## Component Library

### 1. Authentication Flow

**Login/Register Selection Screen:**
- Centered card (max-w-md)
- Two prominent action buttons stacked (w-full, h-12)
- Telegram bot icon with explanatory text (text-sm)
- Spacing: gap-6 between elements

**Code Entry Interface:**
- Large centered input field (text-2xl font-mono, tracking-widest)
- 6-digit code format with visual separation
- Submit button below (w-full, h-12)
- Status messages below button (text-sm)

**Credentials Display:**
- Modal overlay with centered card
- Monospace display for login/password
- Copy-to-clipboard buttons next to each field
- Clear visual hierarchy with labels (text-xs uppercase tracking-wide)

### 2. Main Application Layout

**Sidebar (File Tree):**
- Header with user avatar and name (h-16, px-4)
- Repository list with icons (gap-2)
- Folder/file tree structure with indentation (pl-4 per level)
- Context menu on right-click
- Action buttons at bottom (h-12 each)

**Main Content Area:**
- Top bar with breadcrumb navigation (h-12, px-6)
- Tabbed interface for multiple projects (h-10 tabs)
- Content workspace (flex-1)
- Bottom status bar (h-8)

**Video Call Interface:**
- Grid layout for participants (grid-cols-2 lg:grid-cols-3)
- Local video preview (fixed bottom-right, w-48 h-36)
- Controls bar overlay (h-16, backdrop-blur)
- AI assistant panel toggle (right side)

### 3. AI Assistant Panel

**Layout:**
- Fixed width (w-80)
- Chat-style message list (flex flex-col gap-4)
- Input field at bottom (sticky)
- Suggested prompts as chips (flex flex-wrap gap-2)

**Message Components:**
- User messages: text-sm, max-w-xs, self-end
- AI responses: text-sm, max-w-xs, self-start
- Timestamps: text-xs
- Action buttons within messages (text-xs px-3 py-1)

### 4. Repository & Project Management

**Repository Card:**
- Grid layout (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Each card: aspect-square or fixed h-48
- Project name (text-lg font-semibold)
- Last modified (text-xs)
- Quick actions row (flex gap-2 at bottom)

**File Tree:**
- Hierarchical list with chevron icons
- File type icons (w-4 h-4)
- Text truncation for long names
- Hover states for selection

### 5. Navigation & Controls

**Top Navigation:**
- Logo/Brand (h-12 w-auto)
- Main actions (flex gap-4)
- User menu (right-aligned)
- Notification badge on icon

**Video Call Controls:**
- Icon buttons in row (gap-4)
- Consistent sizing (w-12 h-12 rounded-full)
- Icons centered (w-5 h-5)
- Tooltip on hover

**Action Buttons:**
- Primary: px-6 py-2.5, text-sm font-medium
- Secondary: px-4 py-2, text-sm
- Icon-only: p-2, rounded-md
- Destructive actions: distinct visual weight

### 6. Modals & Overlays

**Modal Structure:**
- Centered overlay (max-w-2xl)
- Header with title and close button (h-14, px-6)
- Content area (p-6, max-h-screen overflow-y-auto)
- Footer with actions (h-16, px-6, flex justify-end gap-3)

**Dropdown Menus:**
- Min-width w-48
- Item height h-9
- Padding px-3
- Dividers between sections

## Animations
**Minimal, Purpose-Driven:**
- Sidebar collapse/expand: 200ms ease
- Modal entrance: fade + scale, 150ms
- Dropdown appearance: 100ms ease-out
- NO scroll animations, parallax, or decorative motion

## Images
**Profile/Avatar Images:**
- User avatars: rounded-full, w-8 h-8 (sidebar), w-10 h-10 (settings)
- Video thumbnails: aspect-video, rounded-lg
- No hero images needed - this is a productivity application

**Icon System:**
- Use Heroicons (outline for navigation, solid for active states)
- Consistent sizing: w-5 h-5 for buttons, w-4 h-4 for inline icons

## Form Inputs
- Standard height: h-10
- Padding: px-4
- Border width: border
- Focus ring: ring-2 ring-offset-2
- Label spacing: gap-2 from input
- Helper text: text-xs mt-1

## Accessibility
- All interactive elements: min-height 44px (touch targets)
- Keyboard navigation with visible focus states
- ARIA labels for icon-only buttons
- Consistent tab order throughout interface
- Screen reader text for status updates