/**
 * AI Chatbot Widget Component
 * React component for Pedro's portfolio chatbot
 * Integrates with cv-chatbot-api (Google Gemini)
 */

const {
  useState,
  useEffect,
  useRef
} = React;
const SparklesIcon = ({
  size = 16,
  color = 'currentColor'
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: color,
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("path", {
  d: "M10 2L11.1 6.9L16 8L11.1 9.1L10 14L8.9 9.1L4 8L8.9 6.9L10 2Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 10L18.7 12.3L21 13L18.7 13.7L18 16L17.3 13.7L15 13L17.3 12.3L18 10Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 17L15.5 18.5L17 19L15.5 19.5L15 21L14.5 19.5L13 19L14.5 18.5L15 17Z"
}));
const ChatbotWidget = ({
  apiEndpoint = window.__ENV__?.CHATBOT_API_URL || 'https://cv-chatbot-api.vercel.app/api/chat',
  healthEndpoint = window.__ENV__?.CHATBOT_HEALTH_URL || 'https://cv-chatbot-api.vercel.app/api/health'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const msgIdRef = useRef(0);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);
  const [language, setLanguage] = useState('en');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const translations = {
    en: {
      title: 'AI Assistant',
      subtitle: 'Powered by Google Gemini & Vercel',
      placeholder: 'Ask about my skills, experience...',
      send: 'Send',
      thinking: 'Thinking...',
      error: 'Sorry, something went wrong. Please try again.',
      welcome: "Hi! I'm Pedro's AI assistant. Ask me about his skills, experience, or projects!",
      closeAria: 'Close chat',
      openAria: 'Open chat',
      tooltip: 'Ask AI about my profile',
      minimize: 'Minimize'
    },
    es: {
      title: 'Asistente IA',
      subtitle: 'Powered by Google Gemini & Vercel',
      placeholder: 'Pregunta sobre mis habilidades, experiencia...',
      send: 'Enviar',
      thinking: 'Pensando...',
      error: 'Lo siento, algo salió mal. Intenta de nuevo.',
      welcome: '¡Hola! Soy el asistente IA de Pedro. ¡Pregúntame sobre sus habilidades, experiencia o proyectos!',
      closeAria: 'Cerrar chat',
      openAria: 'Abrir chat',
      tooltip: 'Pregúntale a la IA sobre mi perfil',
      minimize: 'Minimizar'
    }
  };
  const t = translations[language];

  // Styles object
  const styles = {
    container: {
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 9999,
      fontFamily: 'inherit'
    },
    toggleWrapper: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: '10px'
    },
    tooltip: {
      background: '#141416',
      border: '1px solid #27272a',
      borderRadius: '12px',
      padding: '8px 14px',
      color: '#d4d4d8',
      fontSize: '13px',
      fontWeight: '500',
      whiteSpace: 'nowrap',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
      animation: 'fadeIn 0.5s ease-out 1s both',
      display: 'flex',
      alignItems: 'center',
      gap: '6px'
    },
    tooltipSparkle: {
      color: '#a78bfa',
      flexShrink: 0
    },
    toggleBtn: {
      width: '64px',
      height: '64px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
      border: '2px solid rgba(167, 139, 250, 0.3)',
      cursor: 'pointer',
      boxShadow: '0 4px 24px rgba(124, 58, 237, 0.4)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '22px',
      transition: 'all 0.3s ease'
    },
    window: {
      width: '380px',
      maxWidth: 'calc(100vw - 40px)',
      height: '600px',
      maxHeight: 'calc(100vh - 100px)',
      background: '#09090b',
      borderRadius: '16px',
      border: '1px solid #27272a',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      animation: 'slideUp 0.3s ease-out'
    },
    header: {
      background: '#141416',
      color: '#fafafa',
      padding: '16px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #27272a'
    },
    titleWrapper: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    title: {
      fontSize: '16px',
      fontWeight: '700',
      margin: 0
    },
    subtitle: {
      fontSize: '11px',
      color: '#71717a',
      fontWeight: '400',
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      marginTop: '2px'
    },
    headerActions: {
      display: 'flex',
      gap: '8px'
    },
    headerBtn: {
      background: 'rgba(63, 63, 70, 0.5)',
      border: 'none',
      color: '#a1a1aa',
      width: '32px',
      height: '32px',
      borderRadius: '8px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.2s',
      fontSize: '16px'
    },
    messagesContainer: {
      flex: 1,
      overflowY: 'auto',
      padding: '20px',
      background: '#09090b',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    },
    message: {
      display: 'flex',
      gap: '10px',
      animation: 'fadeIn 0.3s ease-out'
    },
    messageUser: {
      flexDirection: 'row-reverse'
    },
    avatar: {
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '16px',
      flexShrink: 0
    },
    avatarBot: {
      background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)',
      color: 'white'
    },
    avatarUser: {
      background: '#27272a',
      color: '#a1a1aa'
    },
    messageContent: {
      maxWidth: '70%',
      padding: '12px 16px',
      borderRadius: '16px',
      lineHeight: '1.5',
      fontSize: '14px'
    },
    messageContentBot: {
      background: '#141416',
      color: '#d4d4d8',
      borderBottomLeftRadius: '4px',
      border: '1px solid #27272a'
    },
    messageContentUser: {
      background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
      color: 'white',
      borderBottomRightRadius: '4px'
    },
    typingIndicator: {
      display: 'flex',
      gap: '4px',
      padding: '4px 0'
    },
    typingDot: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      background: '#52525b',
      animation: 'typing 1.4s infinite'
    },
    inputArea: {
      padding: '16px 20px',
      background: '#141416',
      borderTop: '1px solid #27272a',
      display: 'flex',
      gap: '12px'
    },
    input: {
      flex: 1,
      border: '1px solid #27272a',
      borderRadius: '12px',
      padding: '12px 16px',
      fontSize: '14px',
      outline: 'none',
      transition: 'all 0.2s',
      fontFamily: 'inherit',
      backgroundColor: '#09090b',
      color: '#fafafa'
    },
    sendBtn: {
      background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
      border: 'none',
      color: 'white',
      width: '44px',
      height: '44px',
      borderRadius: '12px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.2s',
      fontSize: '18px'
    },
    sendBtnDisabled: {
      opacity: 0.5,
      cursor: 'not-allowed'
    }
  };

  // Detect language from portfolio switcher
  useEffect(() => {
    const detectLanguage = () => {
      const langSwitch = document.getElementById('langSwitch');
      if (langSwitch) {
        setLanguage(langSwitch.checked ? 'es' : 'en');
        const handleLanguageChange = e => {
          setLanguage(e.target.checked ? 'es' : 'en');
        };
        langSwitch.addEventListener('change', handleLanguageChange);
        return () => {
          langSwitch.removeEventListener('change', handleLanguageChange);
        };
      }
    };
    const cleanup = detectLanguage();
    return cleanup;
  }, []);

  // Health check: only show widget if API is available
  useEffect(() => {
    fetch(healthEndpoint, {
      method: 'GET'
    }).then(res => setIsAvailable(res.ok)).catch(() => setIsAvailable(false));
  }, []);

  // Initialize with welcome message on first mount
  useEffect(() => {
    msgIdRef.current += 1;
    setMessages([{
      id: msgIdRef.current,
      type: 'bot',
      content: t.welcome,
      timestamp: new Date()
    }]);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  }, [messages]);

  // Focus input when opening
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);
  const sendMessage = async () => {
    const message = inputValue.trim();
    if (!message || isLoading) return;

    // Add user message
    msgIdRef.current += 1;
    const userMessage = {
      id: msgIdRef.current,
      type: 'user',
      content: message,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    try {
      // Build conversation history for API
      const conversationHistory = messages.filter(msg => msg.type !== 'thinking').map(msg => ({
        role: msg.type === 'user' ? 'user' : 'assistant',
        content: msg.content
      }));
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: message,
          conversationHistory: conversationHistory.slice(-10)
        })
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.success && data.response) {
        msgIdRef.current += 1;
        const botMessage = {
          id: msgIdRef.current,
          type: 'bot',
          content: data.response,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('Chatbot error:', error);
      msgIdRef.current += 1;
      const errorMessage = {
        id: msgIdRef.current,
        type: 'bot',
        content: t.error,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  const handleKeyDown = e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };
  if (!isAvailable) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: styles.container
  }, !isOpen && /*#__PURE__*/React.createElement("div", {
    style: styles.toggleWrapper
  }, /*#__PURE__*/React.createElement("div", {
    style: styles.tooltip
  }, /*#__PURE__*/React.createElement("span", {
    style: styles.tooltipSparkle
  }, /*#__PURE__*/React.createElement(SparklesIcon, {
    size: 14,
    color: "#a78bfa"
  })), t.tooltip), /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsOpen(true),
    "aria-label": t.openAria,
    style: styles.toggleBtn,
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'scale(1.1)';
      e.currentTarget.style.boxShadow = '0 6px 32px rgba(124, 58, 237, 0.6)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.boxShadow = '0 4px 24px rgba(124, 58, 237, 0.4)';
    }
  }, /*#__PURE__*/React.createElement(SparklesIcon, {
    size: 26
  }))), isOpen && /*#__PURE__*/React.createElement("div", {
    style: styles.window
  }, /*#__PURE__*/React.createElement("div", {
    style: styles.header
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: styles.titleWrapper
  }, /*#__PURE__*/React.createElement(SparklesIcon, {
    size: 18,
    color: "#a78bfa"
  }), /*#__PURE__*/React.createElement("h3", {
    style: styles.title
  }, t.title)), /*#__PURE__*/React.createElement("div", {
    style: styles.subtitle
  }, t.subtitle)), /*#__PURE__*/React.createElement("div", {
    style: styles.headerActions
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsOpen(false),
    "aria-label": t.closeAria,
    style: styles.headerBtn,
    onMouseEnter: e => {
      e.currentTarget.style.background = 'rgba(63, 63, 70, 0.8)';
      e.currentTarget.style.color = '#fafafa';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'rgba(63, 63, 70, 0.5)';
      e.currentTarget.style.color = '#a1a1aa';
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times"
  })))), /*#__PURE__*/React.createElement("div", {
    style: styles.messagesContainer
  }, messages.map(msg => /*#__PURE__*/React.createElement("div", {
    key: msg.id,
    style: {
      ...styles.message,
      ...(msg.type === 'user' ? styles.messageUser : {})
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...styles.avatar,
      ...(msg.type === 'bot' ? styles.avatarBot : styles.avatarUser)
    }
  }, msg.type === 'bot' ? /*#__PURE__*/React.createElement(SparklesIcon, {
    size: 16
  }) : /*#__PURE__*/React.createElement("i", {
    className: "fas fa-user"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...styles.messageContent,
      ...(msg.type === 'bot' ? styles.messageContentBot : styles.messageContentUser)
    }
  }, msg.content))), isLoading && /*#__PURE__*/React.createElement("div", {
    style: styles.message
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...styles.avatar,
      ...styles.avatarBot
    }
  }, /*#__PURE__*/React.createElement(SparklesIcon, {
    size: 16
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...styles.messageContent,
      ...styles.messageContentBot,
      padding: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: styles.typingIndicator
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...styles.typingDot,
      animationDelay: '0ms'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...styles.typingDot,
      animationDelay: '150ms'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...styles.typingDot,
      animationDelay: '300ms'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    ref: messagesEndRef
  })), /*#__PURE__*/React.createElement("div", {
    style: styles.inputArea
  }, /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    type: "text",
    value: inputValue,
    onChange: e => setInputValue(e.target.value),
    onKeyDown: handleKeyDown,
    placeholder: t.placeholder,
    maxLength: 500,
    disabled: isLoading,
    style: {
      ...styles.input,
      ...(isLoading ? styles.sendBtnDisabled : {})
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = '#a78bfa';
      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(167, 139, 250, 0.1)';
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = '#27272a';
      e.currentTarget.style.boxShadow = 'none';
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: sendMessage,
    disabled: isLoading || !inputValue.trim(),
    "aria-label": t.send,
    style: {
      ...styles.sendBtn,
      ...(isLoading || !inputValue.trim() ? styles.sendBtnDisabled : {})
    },
    onMouseEnter: e => {
      if (!isLoading && inputValue.trim()) {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.4)';
      }
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.boxShadow = 'none';
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-paper-plane"
  })))));
};

// Inject custom animations
const injectStyles = () => {
  if (document.getElementById('chatbot-animations')) return;
  const style = document.createElement('style');
  style.id = 'chatbot-animations';
  style.textContent = `
    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes typing {
      0%, 60%, 100% {
        transform: translateY(0);
        opacity: 0.7;
      }
      30% {
        transform: translateY(-10px);
        opacity: 1;
      }
    }

    @media (max-width: 640px) {
      #chatbot-root > div {
        bottom: 10px !important;
        right: 10px !important;
        left: 10px !important;
      }
    }
  `;
  document.head.appendChild(style);
};

// Mount the component
const mountChatbot = () => {
  injectStyles();
  const container = document.createElement('div');
  container.id = 'chatbot-root';
  document.body.appendChild(container);
  const root = ReactDOM.createRoot(container);
  root.render(/*#__PURE__*/React.createElement(ChatbotWidget, null));
};

// Auto-mount when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountChatbot);
} else {
  mountChatbot();
}
