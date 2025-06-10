module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': '<rootDir>/styleMock.js',
  },
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
};
