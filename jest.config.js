/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
/**
 * @jest-environment jsdom
 */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.jest.json",
    },
  },
  setupFilesAfterEnv: ["./jest.setup.ts"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
