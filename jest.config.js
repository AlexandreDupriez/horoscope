module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
      '^@routes/(.*)$': '<rootDir>/src/routes/$1',
      '^@controllers/(.*)$': '<rootDir>/src/controllers/$1',
      '^@services/(.*)$': '<rootDir>/src/services/$1',
      '^@constants/(.*)$': '<rootDir>/src/constants/$1',
      '^@errors/(.*)$': '<rootDir>/src/errors/$1',
    },
  };