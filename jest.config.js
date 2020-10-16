const path = require("path")

module.exports = {
    "testEnvironment": "node",
    "collectCoverage": true,
    "moduleFileExtensions": ["js", "json", "ts"],
    "roots": ["src"],
    "testRegex": ".spec.ts$",
    "coverageDirectory": "../coverage",
    "moduleDirectories": ["node_modules", "src", __dirname],
    "clearMocks": true,
    "transform": {
      "^.+\\.(t|j)s$": "ts-jest"
    },
    "collectCoverageFrom": [
      "**/*.{js,jsx,ts,tsx}",
      "!**/*.entity.ts",
      "!**/*.dto.ts",
      "!**/*.module.ts"
    ]
  }