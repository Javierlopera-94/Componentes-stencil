// babel.config.js
module.exports = {
    presets: [
        [
            ['@babel/preset-env',
                {
                    targets: {
                        node: '12.14.1',
                    },
                },
            ],
            '@babel/preset-typescript'
        ],
    ],
};