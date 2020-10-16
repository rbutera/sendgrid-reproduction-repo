module.exports = {
    "testEnvironment": "node",
    "collectCoverage": true,
    "moduleFileExtensions": ["js", "json", "ts"],
    "roots": ["src"],
    "testRegex": ".spec.ts$",
    "coverageDirectory": "../coverage",
    "moduleDirectories": ["node_modules", "src"],
    "clearMocks": true,
    "transform": {
      "^.+\\.(t|j)s$": "ts-jest"
    },
    // "moduleNameMapper": {
    //   "src/(.*)": "<rootDir>/src/$1"
    // },
    "collectCoverageFrom": [
      "**/*.{js,jsx,ts,tsx}",
      "!**/*.entity.ts",
      "!**/*.dto.ts",
      "!**/*.module.ts"
    ]
  }