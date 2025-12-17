# Quick Setup Guide

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Admin Panel Access

1. Navigate to `/admin`
2. Enter password: `admin123`
3. Edit your portfolio content
4. Click "Save Changes"

**Important**: Change the admin password in production by modifying `app/admin/page.tsx` or using environment variables.

## Building for Production

```bash
npm run build
npm start
```

## Customization

### Change Colors
Edit `app/globals.css` to modify the color scheme.

### Update Content
- Use the admin panel at `/admin`
- Or edit `data/portfolio.json` directly

### Add Profile Photo
1. Add your photo to `public/` folder
2. Update `data/portfolio.json` with the correct path:
   ```json
   "photo": "/your-photo.jpg"
   ```

## Troubleshooting

### Port Already in Use
If port 3000 is busy, Next.js will automatically use the next available port.

### Build Errors
Make sure all dependencies are installed:
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
Run type checking:
```bash
npx tsc --noEmit
```

## Next Steps

1. Replace placeholder content with your actual information
2. Add your profile photo
3. Customize colors and styling
4. Deploy to Vercel, Netlify, or your preferred hosting platform


