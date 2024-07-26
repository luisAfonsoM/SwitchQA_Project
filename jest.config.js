module.exports = {
    transform: {
      '^.+\\.ts?$': 'ts-jest'
    },
    testEnvironment: 'node',
    testRegex: './src/.*\\.(test|spec)?\\.(ts|tsx)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    roots: [
      "<rootDir>/src"
    ],
    collectCoverageFrom: [
      "src/api_test/**/*.{ts,js}",
      "!**/node_modules/**"
    ],
  };