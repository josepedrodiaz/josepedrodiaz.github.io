/**
 * AI Chatbot Widget Component
 * React component for Pedro's portfolio chatbot
 * Integrates with cv-chatbot-api (Google Gemini)
 */

const { useState, useEffect, useRef } = React;

const ChatbotWidget = ({
  apiEndpoint = window.__ENV__?.CHATBOT_API_URL || 'https://cv-chatbot-api.vercel.app/api/chat',
  healthEndpoint = window.__ENV__?.CHATBOT_HEALTH_URL || 'https://cv-chatbot-api.vercel.app/api/health',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);
  const [language, setLanguage] = useState('en');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const translations = {
    en: {
      title: 'Ask me anything!',
      placeholder: 'Ask about my skills, experience...',
      send: 'Send',
      thinking: 'Thinking...',
      error: 'Sorry, something went wrong. Please try again.',
      welcome: "Hi! I'm Pedro's AI assistant. Ask me about his skills, experience, or projects!",
      closeAria: 'Close chat',
      openAria: 'Open chat',
      minimize: 'Minimize'
    },
    es: {
      title: '¡Pregúntame lo que quieras!',
      placeholder: 'Pregunta sobre mis habilidades, experiencia...',
      send: 'Enviar',
      thinking: 'Pensando...',
      error: 'Lo siento, algo salió mal. Intenta de nuevo.',
      welcome: '¡Hola! Soy el asistente IA de Pedro. ¡Pregúntame sobre sus habilidades, experiencia o proyectos!',
      closeAria: 'Cerrar chat',
      openAria: 'Abrir chat',
      minimize: 'Minimizar'
    }
  };

  const t = translations[language];

  // Styles object
  const styles = {
    container: {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: 9999,
      fontFamily: 'inherit'
    },
    toggleBtn: {
      width: '56px',
      height: '56px',
      borderRadius: '50%',
      background: '#141416',
      border: '1px solid #27272a',
      cursor: 'pointer',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#a78bfa',
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
    title: {
      fontSize: '18px',
      fontWeight: '700',
      margin: 0
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

        const handleLanguageChange = (e) => {
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
    fetch(healthEndpoint, { method: 'GET' })
      .then(res => setIsAvailable(res.ok))
      .catch(() => setIsAvailable(false));
  }, []);

  // Initialize with welcome message
  useEffect(() => {
    setMessages([
      {
        type: 'bot',
        content: t.welcome,
        timestamp: new Date()
      }
    ]);
  }, [language]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
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
    const userMessage = {
      type: 'user',
      content: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Build conversation history for API
      const conversationHistory = messages
        .filter(msg => msg.type !== 'thinking')
        .map(msg => ({
          role: msg.type === 'user' ? 'user' : 'assistant',
          content: msg.content
        }));

      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
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
        const botMessage = {
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
      const errorMessage = {
        type: 'bot',
        content: t.error,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!isAvailable) return null;

  return (
    <div style={styles.container}>
      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label={t.openAria}
          style={styles.toggleBtn}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.borderColor = '#a78bfa'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.borderColor = '#27272a'; }}
        >
          <i className="fas fa-comment"></i>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div style={styles.window}>
          {/* Header */}
          <div style={styles.header}>
            <h3 style={styles.title}>{t.title}</h3>
            <div style={styles.headerActions}>
              <button
                onClick={() => setIsOpen(false)}
                aria-label={t.minimize}
                style={styles.headerBtn}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(63, 63, 70, 0.8)'; e.currentTarget.style.color = '#fafafa'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(63, 63, 70, 0.5)'; e.currentTarget.style.color = '#a1a1aa'; }}
              >
                <i className="fas fa-minus"></i>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                aria-label={t.closeAria}
                style={styles.headerBtn}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(63, 63, 70, 0.8)'; e.currentTarget.style.color = '#fafafa'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(63, 63, 70, 0.5)'; e.currentTarget.style.color = '#a1a1aa'; }}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div style={styles.messagesContainer}>
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  ...styles.message,
                  ...(msg.type === 'user' ? styles.messageUser : {})
                }}
              >
                {/* Avatar */}
                <div style={{
                  ...styles.avatar,
                  ...(msg.type === 'bot' ? styles.avatarBot : styles.avatarUser)
                }}>
                  <i className={`fas ${msg.type === 'bot' ? 'fa-robot' : 'fa-user'}`}></i>
                </div>

                {/* Message Content */}
                <div style={{
                  ...styles.messageContent,
                  ...(msg.type === 'bot' ? styles.messageContentBot : styles.messageContentUser)
                }}>
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Thinking Indicator */}
            {isLoading && (
              <div style={styles.message}>
                <div style={styles.avatarBot}>
                  <i className="fas fa-robot"></i>
                </div>
                <div style={{...styles.messageContent, ...styles.messageContentBot, padding: '16px'}}>
                  <div style={styles.typingIndicator}>
                    <div style={{...styles.typingDot, animationDelay: '0ms'}}></div>
                    <div style={{...styles.typingDot, animationDelay: '150ms'}}></div>
                    <div style={{...styles.typingDot, animationDelay: '300ms'}}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div style={styles.inputArea}>
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={t.placeholder}
              maxLength={500}
              disabled={isLoading}
              style={{
                ...styles.input,
                ...(isLoading ? styles.sendBtnDisabled : {})
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#a78bfa';
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(167, 139, 250, 0.1)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = '#27272a';
                e.currentTarget.style.boxShadow = 'none';
              }}
            />
            <button
              onClick={sendMessage}
              disabled={isLoading || !inputValue.trim()}
              aria-label={t.send}
              style={{
                ...styles.sendBtn,
                ...(isLoading || !inputValue.trim() ? styles.sendBtnDisabled : {})
              }}
              onMouseEnter={(e) => {
                if (!isLoading && inputValue.trim()) {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
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
  root.render(<ChatbotWidget />);
};

// Auto-mount when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountChatbot);
} else {
  mountChatbot();
}
