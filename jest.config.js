module.exports = {
    moduleFileExtensions: ["js", "jsx"],
    testMatch: ['**/*.test.js'],
    testEnvironment: "jsdom",
    moduleNameMapper: {
        '\\.(css|less|scss)$': 'identity-obj-proxy',
    },
    transform: {
        "^.+\\.jsx?$": "babel-jest"
    },
    // jest.config.js 或 package.json 的 jest 部分
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"]

};
