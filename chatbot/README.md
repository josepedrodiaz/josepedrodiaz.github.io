# AI Chatbot Widget - React Component

Embedded React component for the AI chatbot on Pedro Díaz's portfolio website.

## Features

- **Pre-compiled JSX** - Built with `@babel/cli`, no runtime transpilation
- **API integration** - Connected to cv-chatbot-api (Google Gemini)
- **Health check** - Hides automatically if the API is unavailable
- **Lead capture** - Captures contact info via Gemini function calling + Google Sheets
- **Multilingual** - Synced with the EN/ES switcher on the portfolio
- **Responsive** - Adapted for mobile and desktop
- **Inline styles** - Self-contained styling, no external CSS dependencies
- **Conversation history** - Maintains context across messages

## Structure

```
chatbot/
├── ChatbotWidget.jsx    # Source (JSX)
├── ChatbotWidget.js     # Compiled output (committed)
└── README.md            # This file
```

## How it works

### 1. React via CDN + Pre-compiled JSX

The `index.html` loads React from CDN and the pre-compiled widget:

```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<script src="chatbot/ChatbotWidget.js"></script>
```

No Babel Standalone — JSX is pre-compiled at build time via `npm run build:jsx`.

### 2. Build process

```bash
# Compile JSX only
npm run build:jsx

# Compile everything (Tailwind CSS + JSX)
npm run build
```

After editing `ChatbotWidget.jsx`, run `npm run build:jsx` and commit the updated `.js` file.

### 3. Health check and visibility

On mount, the widget sends a GET to `/api/health`. If the API doesn't respond, the widget hides entirely.

### 4. Portfolio integration

- **Multilingual**: Syncs with the portfolio's `#langSwitch` checkbox
- **Styling**: Uses inline JS styles (dark theme with violet accents)
- **Position**: Fixed bottom-right, doesn't interfere with content

## Configuration

### Change endpoints

Edit `ChatbotWidget.jsx` default props:

```javascript
const ChatbotWidget = ({
  apiEndpoint = window.__ENV__?.CHATBOT_API_URL || 'https://cv-chatbot-api.vercel.app/api/chat',
  healthEndpoint = window.__ENV__?.CHATBOT_HEALTH_URL || 'https://cv-chatbot-api.vercel.app/api/health',
}) => { ... };
```

Or override via `env.js` / `env.local.js` (see portfolio root).

## Local testing

```bash
cd ~/cv
python3 -m http.server 8000
```

Open: http://localhost:8000

Note: The API must allow localhost CORS for the widget to appear locally. In production, CORS only allows `josepedrodiaz.com`.

## Deployment

Compile, commit, and push:

```bash
npm run build
git add chatbot/ChatbotWidget.js
git commit -m "feat: update chatbot widget"
git push origin gh-pages
```

## CORS

The API accepts requests from (configured in `cv-chatbot-api/lib/cors.js`):

```javascript
const ALLOWED_ORIGINS = [
  'https://josepedrodiaz.com',
  'https://www.josepedrodiaz.com',
];
// localhost:8000 and localhost:3000 added in development only
```

## References

- [React Documentation](https://react.dev/)
- [cv-chatbot-api](https://github.com/josepedrodiaz/cv-chatbot-api)

## Author

**Pedro Díaz**
- Portfolio: [josepedrodiaz.com](https://josepedrodiaz.com)
- GitHub: [@josepedrodiaz](https://github.com/josepedrodiaz)
