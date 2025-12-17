# Davron Rustamov - PR Manager Portfolio

A modern, professional portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, minimalist, and professional UI/UX
- **Dark Mode**: Full support for light and dark themes
- **Responsive**: Mobile-first design that works on all devices
- **Animations**: Smooth transitions and micro-interactions with Framer Motion
- **SEO Optimized**: Built-in SEO best practices
- **Content Management**: Admin panel for easy content updates
- **Accessible**: ARIA-friendly and keyboard navigation support

## 🛠️ Tech Stack

- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **shadcn/ui** (UI components)
- **Lucide Icons**
- **next-themes** (dark mode)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd davron-bro
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
davron-bro/
├── app/
│   ├── admin/          # Admin panel for content management
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/
│   ├── sections/       # Page sections (Hero, About, etc.)
│   ├── ui/             # Reusable UI components
│   ├── footer.tsx
│   ├── header.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── data/
│   └── portfolio.json  # Portfolio content data
├── lib/
│   ├── data.ts         # Data fetching utilities
│   ├── types.ts        # TypeScript types
│   └── utils.ts        # Utility functions
└── public/              # Static assets
```

## 🎨 Customization

### Content Management

1. **Via Admin Panel**: Navigate to `/admin` and use the password-protected admin panel to edit content.

2. **Via JSON File**: Edit `data/portfolio.json` directly to update content.

### Styling

- Colors and themes are defined in `app/globals.css`
- Tailwind configuration is in `tailwind.config.ts`
- Component styles use Tailwind utility classes

### Adding New Sections

1. Create a new component in `components/sections/`
2. Import and add it to `app/page.tsx`
3. Add navigation link in `components/header.tsx`

## 🔐 Admin Panel

Access the admin panel at `/admin`. Default password: `admin123`

**Note**: In production, change the admin password and use environment variables for security.

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy automatically

### Other Platforms

Build the project:
```bash
npm run build
npm start
```

## 📝 License

This project is private and proprietary.

## 👤 Author

**Davron Rustamov**
- PR Manager
- Portfolio: [Your Domain]

---

Built with ❤️ using Next.js

