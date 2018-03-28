module.exports = {
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js"
    ],
    "transform": {
        "^.+\\.(ts|tsx)$": "<rootDir>/preprocessor.js"
    },
    "testMatch": [
        "**/__tests__/*.(ts|tsx|js)"
    ]
}