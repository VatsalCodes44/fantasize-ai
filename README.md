# Fantasize AI
![Landing](https://raw.githubusercontent.com/VatsalCodes44/fantasize-ai/refs/heads/main/apps/web/public/landing.png)

> AI-powered image and video generation platform built with modern web technologies

### Live link:  https://fantasize-ai.vatsalmahajan.in

## 🎯 Overview

Fantasize AI is a comprehensive AI-powered content generation platform that enables users to create stunning images and videos using cutting-edge AI models. The platform provides an intuitive interface for generating content, managing face models, purchasing token packs, and organizing generated media.

### Key Capabilities

- **AI Image Generation** - Powered by Fal AI API
- **AI Video Generation** - Powered by Veo 3
- **Face Model Training** - Custom face model creation and management
- **Token-based System** - Credit-based consumption model
- **Secure Payments** - Razorpay integration for pack purchases
- **Email Notifications** - Automated order confirmations

## ✨ Features

### User Features

#### Image Section
- **Generate Tab**
  - AI-powered image generation with customizable prompts
  - Multiple style and parameter controls
  - Real-time generation status
  ![Generate Tab](https://raw.githubusercontent.com/VatsalCodes44/fantasize-ai/refs/heads/main/apps/web/public/generateTab.png)
  
- **Face-Model Tab**
  - Upload and train custom face models
  - Manage multiple face models
  - Use trained models in generations
  ![Face-Model](https://raw.githubusercontent.com/VatsalCodes44/fantasize-ai/refs/heads/main/apps/web/public/face-model.png)
  
- **Packs Tab**
  - Purchase token packs via Razorpay
  - Multiple pricing tiers
  - Instant credit top-up
  ![Landing](https://raw.githubusercontent.com/VatsalCodes44/fantasize-ai/refs/heads/main/apps/web/public/packs.png)
  
- **Images Tab**
  - Gallery view of all generated images
  - Download and share functionality
  - Organized by creation date
  ![Landing]( https://raw.githubusercontent.com/VatsalCodes44/fantasize-ai/refs/heads/main/apps/web/public/images.png)

#### Video Section (Sidebar Navigation)
- **Generate Video**
  - Text-to-video generation using Veo 3
  - Customizable video parameters
  - Progress tracking
  ![Venerate Video](https://raw.githubusercontent.com/VatsalCodes44/fantasize-ai/refs/heads/main/apps/web/public/generateVideo.png)
- **Videos Gallery**
  - View all generated videos
  - Download and playback controls
  - Cloud storage with presigned URLs

### Platform Features

- **Token System**
  - Real-time token balance tracking
  - Per-generation token consumption
  - Token purchase history
  
- **User Authentication**
  - Secure authentication via Clerk
  - Social login support
  - User profile management
  
- **Email Notifications**
  - Order confirmation emails via Nodemailer
  - Generation completion alerts
  - Account activity notifications

## 🛠 Tech Stack

### Frontend
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn/ui, ActernityUi, MagicUi

### Backend
- **Runtime:** Node.js
- **API Routes:** Next.js API Routes
- **Database ORM:** Prisma
- **Database:** PostgreSQL
- **Authentication:** Clerk
- **File Storage:** AWS S3 (Presigned URLs)

### AI Services
- **Image Generation:** Fal AI API
- **Video Generation:** Veo 3 API

### Payment & Communication
- **Payment Gateway:** Razorpay
- **Email Service:** Nodemailer

### DevOps
- **Monorepo:** Turborepo
- **CI/CD:** GitHub Actions
- **Deployment:**  AWS
- **File Storage:**  S3
- **Version Control:** Git & GitHub


## 🏗 Architecture
```
┌────────────────────────────────────────────────────────────────────────────┐
│                      Frontend (Next.js App Router)                         │
│                                                                            │
│  ┌──────────┐    ┌─────────────────────────────────────┐     ┌─────────┐   │
│  │ Landing  │    │          Dashboard                  │     │ Pricing │   │
│  │   Page   │───▶│  ┌───────────┐    ┌─────────────┐  │ ◀───│  Page   │   │
│  │          │    │  │  Images   │    │   Videos    │   │     │         │   │
│  │ Features │    │  │ (4 Tabs)  │    │  (Sidebar)  │   │     │  Token  │   │
│  │ Pricing  │    │  │           │    │             │   │     │  Packs  │   │
│  │ Auth     │    │  │ Generate  │    │  Generate   │   │     │         │   │
│  └──────────┘    │  │ Models    │    │  Gallery    │   │     └─────────┘   │
│                  │  │ Packs     │    └─────────────┘   │                   │
│                  │  │ Gallery   │                      │                   │
│                  │  └───────────┘                      │                   │
│                  └─────────────────────────────────────┘                   │
└────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌───────────────────────────────────────────────────────────────────────┐
│                        API Layer (/api/v1)                            │
│                                                                       │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐   │
│  │    Auth     │  │     AI      │  │   Payment   │  │   Storage   │   │
│  │             │  │             │  │             │  │             │   │
│  │ Middleware  │  │ Generate    │  │ Razorpay    │  │ Presigned   │   │
│  │ Webhooks    │  │ Training    │  │ Orders      │  │ URLs        │   │
│  │             │  │ Video Gen   │  │ Verify      │  │ Uploads     │   │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘   │
│                                                                       │
│  ┌─────────────┐  ┌─────────────┐                                     │
│  │    Bulk     │  │    Pack     │                                     │
│  │             │  │             │                                     │
│  │ Images      │  │ Management  │                                     │
│  │ Videos      │  │ Bulk Ops    │                                     │
│  └─────────────┘  └─────────────┘                                     │
└───────────────────────────────────────────────────────────────────────┘
                                      │
                  ┌───────────────────┼───────────────────┐
                  ▼                   ▼                   ▼
      ┌───────────────────┐ ┌───────────────────┐ ┌───────────────────┐
      │      Clerk        │ │   Prisma + DB     │ │ External Services │
      │   Authentication  │ │   (PostgreSQL)    │ │                   │
      │                   │ │                   │ │                   │
      │ • User Management │ │ • Users           │ │ • Fal AI          │
      │ • Sessions        │ │ • Tokens          │ │   (Images)        │
      │ • Webhooks        │ │ • Orders          │ │                   │
      │ • Social Auth     │ │ • Images          │ │ • Google Veo 3    │
      │                   │ │ • Videos          │ │   (Videos)        │
      │                   │ │ • FaceModels      │ │                   │
      │                   │ │ • Packs           │ │ • Razorpay        │
      │                   │ │                   │ │   (Payments)      │
      │                   │ │                   │ │                   │
      │                   │ │                   │ │ • AWS S3          │
      │                   │ │                   │ │   (File Storage)  │
      │                   │ │                   │ │                   │
      │                   │ │                   │ │ • Nodemailer      │
      │                   │ │                   │ │   (Emails)        │
      └───────────────────┘ └───────────────────┘ └───────────────────┘
```

### Data Flow

1. **User Authentication**: Clerk handles sign-up/sign-in → Creates user in PostgreSQL
2. **Token Purchase**: User buys tokens → Razorpay processes payment → Webhook updates database
3. **Image Generation**: User submits prompt → API calls Fal AI → Stores in S3 → Returns presigned URL
4. **Face Model Training**: User uploads images → Training API → Fal AI creates LoRA model → Stores model ID
5. **Video Generation**: User submits prompt → API calls Veo 3 → Processes video → Stores in S3
6. **Email Notifications**: Order completed → Nodemailer sends receipt → User receives confirmation

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm
- PostgreSQL database
- Accounts for:
  - Clerk (Authentication)
  - Fal AI (Image Generation)
  - Veo 3 (Video Generation)
  - Razorpay (Payments)
  - AWS S3 (Storage)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/fantasize-ai.git
cd fantasize-ai
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
# Edit .env with your credentials
```

4. **Set up the database**
```bash
cd packages/db

# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev

# Seed the database (optional)
npx prisma db seed
```

5. **Run the development server**
```bash
cd apps/web

npm run dev
```

6. **Open the application**
```
http://localhost:3000
```

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

```bash
# Database
DATABASE_URL=""

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/dashboard
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/dashboard

# AI Services
FAL_KEY=

# AWS S3
accessKeyId=
secretAccessKey=
bucket=
AWS_REGION=us-east-1
endpoint=https://s3.us-east-1.amazonaws.com

# Razorpay
NEXT_PUBLIC_RAZORPAY_KEY_ID=
RazorpaySecret=
razorpayWebhookSecret=

# Email (Nodemailer)
EMAIL_USER=
EMAIL_PASS=
```

## 📁 Project Structure

```
fantasize-ai/
├── apps/
│   └── web/                          # Next.js application with App Router
│       ├── app/                      # Next.js App Router
│       │   ├── page.tsx              # Landing page
│       │   ├── layout.tsx            # Root layout
│       │   ├── config.ts             # App configuration
│       │   ├── sign-in/              # Clerk authentication (sign-in)
│       │   ├── sign-up/              # Clerk authentication (sign-up)
│       │   ├── pricing/              # Pricing & token packages page
│       │   ├── dashboard/            # Protected dashboard with image/video sections
│       │   └── api/v1/               # API routes (AI generation, payments, S3, bulk operations)
│       ├── components/               # React components
│       │   ├── ui/                   # Shadcn UI components (button, card, dialog, etc.)
│       │   ├── manualComponents/     # Custom feature components (GenerateImage, Videos, Packs)
│       │   └── magicui/              # Magic UI effects (animations, gradients, hover effects)
│       ├── lib/                      # Utility functions
│       ├── models/                   # TypeScript type definitions
│       ├── hooks/                    # Custom React hooks
│       ├── public/                   # Static assets (logos, images, videos)
│       ├── middleware.ts             # Clerk authentication middleware
│       ├── next.config.js            # Next.js configuration
│       ├── tailwind.config.ts        # Tailwind CSS configuration
│       ├── Dockerfile                # Docker container setup
│       └── package.json
│
├── packages/                         # Turborepo shared packages
│   ├── db/                           # Prisma database package (schema, migrations, client)
│   ├── ui/                           # Shared UI components library
│   ├── typescript-config/            # Shared TypeScript configurations
│   ├── eslint-config/                # Shared ESLint rules
│   └── common/                       # Common utilities and types
│
├── .github/workflows/                # CI/CD pipelines (build, test, deploy)
├── turbo.json                        # Turborepo configuration
├── package.json                      # Root workspace dependencies
└── README.md                         # Project documentation
```





## 💰  Pricing

### Token Usage
| Feature | Cost | Details |
|---------|------|---------|
| 🖼️ Image Generation | 1 Token | 720p/1080p quality |
| 🤖 Face Model Training | 20 Tokens | Custom LoRA model |
| 🎞️ Video (No Audio) | 8 Tokens | 720p/1080p quality |
| 🎬 Video (With Audio) | 10 Tokens | 720p/1080p quality |

### Pricing Plans
| Plan | Price | Tokens | Discount | Best For |
|------|-------|--------|----------|----------|
| **Starter 🟢** | ₹100 | 5 | - | First-time users |
| **Value 🔵** | ~~₹300~~ ₹250 | 14 | 17% | Casual creators |
| **Pro 🟣** | ~~₹650~~ ₹500 | 30 | 23% | Regular users + model training |
| **Ultimate 🟡** | ~~₹1400~~ ₹1000 | 62 | 29% | Professionals & heavy users |



## 🔒 Security

- **Authentication:** Clerk handles all user authentication and session management
- **API Security:** All API routes are protected with Clerk middleware
- **Payment Security:** Razorpay handles all payment processing
- **Data Encryption:** All sensitive data is encrypted at rest
- **Webhook Verification:** All webhooks are verified using signatures


## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style

- Follow the existing code style
- Run `npm run lint` before committing
- Write meaningful commit messages
- Add tests for new features

## 📞 Support

For support, email support@fantasize-ai.com.

---

Made with ❤️ by VatsalCodes44
