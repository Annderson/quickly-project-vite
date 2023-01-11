/* eslint-disable import/no-anonymous-default-export */
/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  clearMocks: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  modulePaths: ['<rootDir>'],
  modulePathIgnorePatterns: [
    '<rootDir>/src/vite-env.d.ts',
    '<rootDir>/src/main.tsx',
    '<rootDir>/src/styles/styled.d.ts',
  ],
  moduleDirectories: ['node_modules', __dirname],
  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@styles/(.*)': '<rootDir>/src/styles/$1',
    '@locales/(.*)': '<rootDir>/src/locales/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
            decorators: true,
          },
          keepClassNames: true,
          transform: {
            legacyDecorator: true,
            decoratorMetadata: true,
            react: {
              runtime: 'automatic',
            },
          },
        },
        module: {
          type: 'es6',
          noInterop: false,
        },
      },
    ],
  },
}
