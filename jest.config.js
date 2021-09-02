module.exports = {
  preset: 'ts-jest',
  globals: {
      'ts-jest': {
          diagnostics: false,
      },
      SpreadsheetApp: {},
  },
  moduleNameMapper: {
      '^#/(.+)': '<rootDir>/src/$1'
  },
  moduleDirectories: [
      'node_modules',
  ],
  moduleFileExtensions: [
      'js',
      'json',
      'ts',
      'tsx',
  ],
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
