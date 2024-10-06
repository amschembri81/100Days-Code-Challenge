import React from 'react';

const withGreeting = (WrappedComponent) => {
  return (props) => {
    const getGreetingMessage = () => {
      const hours = new Date().getHours();
      if (hours < 12) return " ☀️ Good Morning! ☀️    ☀️ ¡Buenos días! ☀️ ";
      if (hours < 18) return " 🌤️ Good Afternoon! 🌤️    🌤️ ¡Buenas tardes! 🌤️ ";
      return " 🌜✨ Good Evening! ✨🌛    🌜✨ ¡Buenas noches! ✨🌛";
    };

    const greetingMessage = getGreetingMessage();

    return (
      <div>
        <WrappedComponent {...props} />
        <h2>{greetingMessage}</h2>
      </div>
    );
  };
};

export default withGreeting;