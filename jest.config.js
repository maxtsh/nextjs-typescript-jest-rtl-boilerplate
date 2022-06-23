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
};
