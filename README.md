# Smart Estate Kenya - Public Frontend

The public-facing website for Smart Estate Kenya real estate platform.

## 🏠 Features

- Property listings and search functionality
- Agent profiles and contact information
- Detailed property views with image galleries
- Inquiry forms and lead generation
- Responsive design for all devices
- Modern UI with Tailwind CSS

## 🚀 Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Deployment**: Vercel

## 🌐 Live Demo

- **Production**: [Will be available after deployment]
- **Local Development**: http://localhost:3000

## ⚙️ Environment Variables

Configure these in your Vercel dashboard:

```env
NEXT_PUBLIC_API_URL=https://your-backend-api-url.com
```

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📦 Deployment to Vercel

### Automatic Deployment (Recommended)

1. **Connect Repository**: 
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import this repository: `https://github.com/Majorstanwachira5/frontend-real-estate`

2. **Configure Settings**:
   - Framework Preset: Next.js
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

3. **Set Environment Variables**:
   ```
   NEXT_PUBLIC_API_URL = https://your-backend-api-url.com
   ```

4. **Deploy**: Click "Deploy" - automatic deployments on every push to main

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

## 🔗 Related Repositories

- **Backend API**: [smart-estate-kenya](https://github.com/Majorstanwachira5/smart-estate-kenya)
- **Agency Dashboard**: [Agent-real-estate](https://github.com/Majorstanwachira5/Agent-real-estate)
- **Admin Dashboard**: [admin-real-estate](https://github.com/Majorstanwachira5/admin-real-estate)

## 📱 Port Configuration

- **Public Frontend**: Port 3000
- **Agency Frontend**: Port 8080  
- **Admin Frontend**: Port 8081
- **Backend API**: Port 5000

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
