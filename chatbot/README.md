# AI Chatbot Widget - React Component

Embedded React component for the AI chatbot on Pedro Díaz's portfolio website.

## Features

- **React standalone** - No build process required
- **API integration** - Connected to cv-chatbot-api (Google Gemini)
- **Health check** - Hides automatically if the API is unavailable
- **Lead capture** - Captures contact info via Gemini function calling + Google Sheets
- **Multilingual** - Synced with the EN/ES switcher on the portfolio
- **Responsive** - Adapted for mobile and desktop
- **Tailwind CSS** - Consistent styling with the portfolio
- **Conversation history** - Maintains context of the last 5 interactions
- **Smooth animations** - Transitions and visual effects

## Structure

```
chatbot/
├── ChatbotWidget.jsx    # Main React component
└── README.md            # This file
```

## How it works

### 1. React via CDN

The `index.html` loads React from CDN (no npm required):

```html
<!-- React and ReactDOM from CDN -->
<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>

<!-- Babel Standalone for JSX -->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

<!-- AI Chatbot Widget -->
<script type="text/babel" src="chatbot/ChatbotWidget.jsx"></script>
```

### 2. Auto-mount

The widget mounts automatically on page load:

```javascript
const mountChatbot = () => {
  const container = document.createElement('div');
  container.id = 'chatbot-root';
  document.body.appendChild(container);

  const root = ReactDOM.createRoot(container);
  root.render(<ChatbotWidget />);
};
```

### 3. Health check and visibility

On mount, the widget sends a GET request to `/api/health`. If the API doesn't respond, the widget hides entirely to avoid showing broken functionality.

### 4. Portfolio integration

- **Multilingual**: Syncs automatically with the portfolio's `#langSwitch`
- **Styling**: Uses Tailwind CSS like the rest of the portfolio
- **Position**: Fixed bottom-right, doesn't interfere with content

## Configuration

### Change endpoints

Edit `ChatbotWidget.jsx`:

```javascript
const ChatbotWidget = ({
  apiEndpoint = 'https://cv-chatbot-api.vercel.app/api/chat',
  healthEndpoint = 'https://cv-chatbot-api.vercel.app/api/health',
}) => {
  // ...
};
```

### Change widget position

In `ChatbotWidget.jsx`, modify the container class:

```javascript
// Bottom right (default)
<div className="fixed bottom-5 right-5 z-[9999]">

// Bottom left
<div className="fixed bottom-5 left-5 z-[9999]">
```

### Customize colors

Look for the Tailwind gradients in the component:

```javascript
// Main button
bg-gradient-to-br from-blue-900 to-blue-600

// Header
bg-gradient-to-r from-blue-900 to-blue-700

// User messages
bg-gradient-to-r from-blue-600 to-blue-500
```

## Local testing

```bash
cd ~/cv
python3 -m http.server 8000
```

Open: http://localhost:8000

## Deployment

The widget works automatically on GitHub Pages. Just commit and push:

```bash
git add chatbot/
git add index.html
git commit -m "feat: update chatbot widget"
git push origin gh-pages
```

## Component details

### State (useState)

- `isOpen` - Widget open/closed
- `messages` - Array of messages (user/bot)
- `inputValue` - Text input value
- `isLoading` - Loading state during API call
- `language` - Current language (en/es)

### Effects (useEffect)

1. **Health check** - Verifies API availability on mount
2. **Language detection** - Syncs with portfolio switcher
3. **Welcome message** - Updates when language changes
4. **Auto-scroll** - Scrolls to latest message
5. **Focus input** - Focuses input when widget opens

### Main functions

- `sendMessage()` - Sends message to the API
- `handleKeyDown()` - Handles Enter to send
- `translations` - Object with EN/ES texts

## API usage example

The widget sends requests to the API:

```javascript
POST https://cv-chatbot-api.vercel.app/api/chat

Body:
{
  "message": "What are Pedro's main skills?",
  "conversationHistory": [
    { "role": "user", "content": "..." },
    { "role": "assistant", "content": "..." }
  ]
}

Response:
{
  "success": true,
  "response": "Pedro Díaz is a Senior Full-Stack Developer...",
  "timestamp": "2026-01-30T..."
}
```

## Troubleshooting

### Widget doesn't appear

1. Check that the API responds: `curl https://cv-chatbot-api.vercel.app/api/health`
2. Check that React scripts are loading in DevTools > Console
3. Check that the JSX file loads correctly in DevTools > Network

### CORS error with the API

The API accepts requests from these origins (configured in `cv-chatbot-api/lib/cors.js`):

```javascript
const ALLOWED_ORIGINS = [
  'https://josepedrodiaz.com',
  'https://www.josepedrodiaz.com',
];
```

If you're using a different domain, add it to the list in the API repo.

### Language doesn't switch

Verify that the IDs match:

```javascript
// Portfolio must have:
<input type="checkbox" id="langSwitch">

// Widget looks for:
document.getElementById('langSwitch')
```

## References

- [React Documentation](https://react.dev/)
- [Babel Standalone](https://babeljs.io/docs/babel-standalone)
- [Tailwind CSS](https://tailwindcss.com/)
- [cv-chatbot-api](https://github.com/josepedrodiaz/cv-chatbot-api)

## Author

**Pedro Díaz**
- Portfolio: [josepedrodiaz.com](https://josepedrodiaz.com)
- GitHub: [@josepedrodiaz](https://github.com/josepedrodiaz)
