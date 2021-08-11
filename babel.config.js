module.exports = function(api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
              "module-resolver",
              {
                "root": ["./"],
                "alias": {
                  "@assetBeranda": "./assets/images/beranda",
                  "@screens": "./src/screens",
                }
              },
            ],
        ],
    };
};
