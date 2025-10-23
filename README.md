# 🤖 Groq AI Chatbot

A modern, lightning-fast AI chatbot application built with React, TypeScript, Vite, and Groq's ultra-fast LLM API. Experience real-time AI conversations with beautiful UI and instant responses.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19.1.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)
![Vite](https://img.shields.io/badge/Vite-7.1.7-purple)

---

## 🎯 Overview

Groq AI Chatbot is a production-ready conversational AI application that leverages Groq's blazing-fast inference API to deliver real-time AI responses. Built with modern web technologies, it provides a seamless chat experience with a beautiful gradient UI and smooth animations.

---

## 🚀 Features

### Core Features

- **Lightning Fast Responses** - Powered by Groq's high-performance LLM inference
- **Real-time Chat Interface** - Smooth, responsive conversation flow
- **Context-Aware** - Maintains conversation history for intelligent responses
- **Beautiful UI** - Modern gradient design with Tailwind CSS
- **Instant Feedback** - Loading indicators and typing animations
- **Clear Chat** - Reset conversations with one click
- **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile

### Technical Features

- **TypeScript** - Full type safety and better developer experience
- **React Hooks** - Modern React patterns with custom hooks
- **Component-Based Architecture** - Reusable and maintainable code
- **Error Handling** - Comprehensive error management and user feedback
- **Secure API Key Management** - Environment variable configuration
- **Smooth Animations** - CSS transitions and keyframe animations
- **Optimized Build** - Fast production builds with Vite

---

## 🛠️ Technologies

### Frontend

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**

### UI & Icons

- **Lucide React**
- **Custom CSS Animations**

### AI & API

- **Groq API** - Ultra-fast LLM inference
- **Llama 3.3 70B** - State-of-the-art language model

---

## 📁 Project Structure

```
ai-chatbot/
├── node_modules/          # Dependencies
├── public/                # Static assets
│   └── vite.svg
├── src/                   # Source code
│   ├── components/        # React components
│   │   ├── ChatHeader.tsx       # Header with branding
│   │   ├── ChatMessage.tsx      # Individual message component
│   │   ├── ChatInput.tsx        # Input field and send button
│   │   └── LoadingIndicator.tsx # Typing animation
│   ├── hooks/             # Custom React hooks
│   │   └── useChat.ts           # Chat logic and state management
│   ├── services/          # API services
│   │   └── groq.ts              # Groq API integration
│   ├── types/             # TypeScript type definitions
│   │   └── index.ts             # Shared types and interfaces
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # React entry point
│   └── index.css          # Global styles and Tailwind
├── .env                   # Environment variables (create this)
├── .gitignore
├── index.html
├── package-lock.json
├── package.json           # Project dependencies
├── tsconfig.app.json
├── tsconfig.json          # TypeScript configuration
├── tsconfig.node.json     # TypeScript config for Node
├── vite.config.ts         # Vite configuration
└── README.md              # This file
```

---

## ✅ Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v20.19.2) - [Download here](https://nodejs.org/)
- **npm** (v11.5.2) - Comes with Node.js
- **Git** (optional) - For version control
- **Groq API Key** - [Get free API key](https://console.groq.com/)

Check your versions:

```bash
node --version
npm --version
```

---

## 📦 Installation

### Step 1: Clone or Download the Project

**Option A: Clone with Git**

```bash
git clone https://github.com/yehaniharshika/ai-chatbot.git
cd groq-ai-chatbot
```

**Option B: Download ZIP**

1. Download the project ZIP file
2. Extract to your desired location
3. Open terminal in project folder

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages:

- React and React DOM
- TypeScript and type definitions
- Vite and plugins
- Tailwind CSS and dependencies
- Lucide React icons

---

## ⚙️ Configuration

### Step 1: Get Your Groq API Key

1. **Visit Groq Console:** https://console.groq.com/
2. **Sign Up/Login:** Create a free account (no credit card required)
3. **Navigate to API Keys:** Click on "API Keys" in the sidebar
4. **Create New Key:**
   - Click "Create API Key"
   - Give it a name (e.g., "My Chatbot")
   - Copy the key (starts with `gsk_`)

### Step 2: Create Environment File

Create a file named `.env` in the project root:

```bash
# Create .env file
touch .env
```

Add your API key to `.env`:

```env
VITE_GROQ_API_KEY=gsk_your_actual_api_key_here
```

## 🔄 Running the Project

### Development Mode

Start the development server:

```bash
npm run dev
```

### Production Build

Create an optimized production build:

```bash
npm run build
```

## 💡 Usage

### Basic Usage

1. **Open the application** in your browser
2. **Type your message** in the input field at the bottom
3. **Press Enter** or click the send button
4. **Wait for AI response** (typically 1-2 seconds)
5. **Continue the conversation** - the AI remembers context!

### Keyboard Shortcuts

- **Enter** - Send message
- **Shift + Enter** - New line in message
- **Clear Button** - Reset entire conversation

---

## 🎓 Learning Resources

### React & TypeScript

- [React Official Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

### Tailwind CSS

- [Tailwind Documentation](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com/)

### Groq & AI

- [Groq Documentation](https://console.groq.com/docs)
- [LLM Guide](https://www.promptingguide.ai/)

---

## 🪪 License

© 2025 All Right Reserved Created By Yehani Harshika
This project is licensed under the [MIT](License.txt) license

---

If you find this project helpful, please consider giving it a star on GitHub!

---

**Made with ❤️ by Yehani Harshika**

**Powered by Groq AI • Built with React & TypeScript • Styled with Tailwind CSS**

