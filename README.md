# Farhat Savings Center - Landing Page

A professional, modern, and SEO-optimized one-page landing website for "Farhat Savings Center" - a grocery store located in Al-Zahira, Damascus, Syria.

## 🌟 Features

### Core Features
- **Bilingual Support**: Full Arabic and English language support with RTL layout
- **Dark/Light Mode**: Theme switching with dark mode as default
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Complete SEO implementation with structured data
- **Modern UI**: Beautiful, professional design with smooth animations

### Technical Features
- **Next.js 14+**: Built with App Router for optimal performance
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for styling
- **next-themes**: Theme management with system preference detection
- **Lucide React**: Beautiful, customizable icons
- **Image Optimization**: Next.js Image component for optimized images

### SEO Features
- **Structured Data**: JSON-LD schema for Local Business
- **Meta Tags**: Complete meta tag implementation
- **Open Graph**: Social media optimization
- **Semantic HTML**: Proper HTML5 structure
- **Performance**: Optimized for Core Web Vitals

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd farhat-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
farhat-project/
├── app/
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── layout.tsx           # Root layout with metadata and theme provider
│   └── page.tsx             # Main landing page component
├── components/
│   ├── LanguageSwitcher.tsx # Language toggle component
│   ├── Navbar.tsx           # Navigation bar with logo and menu
│   ├── ThemeProvider.tsx    # Theme context provider
│   └── ThemeSwitcher.tsx    # Dark/light mode toggle
├── lib/
│   └── translations.ts      # Translation utilities
├── locales/
│   ├── en.json             # English translations
│   └── ar.json             # Arabic translations
├── public/                 # Static assets
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── next.config.js          # Next.js configuration
└── tsconfig.json           # TypeScript configuration
```

## 🌍 Internationalization

The website supports both English and Arabic languages:

- **English**: Default language with LTR layout
- **Arabic**: Full RTL support with Arabic font family

### Adding New Languages

1. Create a new translation file in `locales/`
2. Add the locale to the `next.config.js` i18n configuration
3. Update the `LanguageSwitcher` component

## 🎨 Theming

The website uses a sophisticated theming system:

- **Dark Mode**: Default theme with modern dark colors
- **Light Mode**: Clean light theme for better readability
- **System Preference**: Automatically detects user's system preference
- **Smooth Transitions**: Elegant theme switching animations

## 📱 Responsive Design

The website is fully responsive across all devices:

- **Mobile**: Optimized for smartphones (320px+)
- **Tablet**: Tablet-friendly layouts (768px+)
- **Desktop**: Full desktop experience (1024px+)

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: {
    // Your primary color palette
  },
  secondary: {
    // Your secondary color palette
  }
}
```

### Content
Update the translation files in `locales/` to modify content:

- `en.json` - English content
- `ar.json` - Arabic content

### Styling
Modify `app/globals.css` for custom styles and components.

## 📊 SEO Implementation

### Structured Data
The website includes comprehensive JSON-LD structured data for:
- Local Business schema
- Grocery Store classification
- Contact information
- Operating hours
- Payment methods

### Meta Tags
- Dynamic title and description
- Open Graph tags for social sharing
- Twitter Card optimization
- Canonical URLs
- Language alternates

## 🚀 Performance

- **Image Optimization**: Automatic image optimization with Next.js
- **Code Splitting**: Automatic code splitting for optimal loading
- **Lazy Loading**: Images and components load as needed
- **Minification**: Production builds are fully optimized

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support or questions, please contact:
- **Email**: info@farhat-savings-center.com
- **Phone**: +963-11-1234567
- **Address**: Al-Zahira, Damascus, Syria

---

Built with ❤️ using Next.js, Tailwind CSS, and TypeScript 