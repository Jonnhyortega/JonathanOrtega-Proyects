module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'plugin:react/recommended',
      'standard',
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      // Aquí puedes agregar reglas personalizadas
      'no-console': 'off', // Desactiva la regla que prohíbe el uso de console.log
    },
  };
  