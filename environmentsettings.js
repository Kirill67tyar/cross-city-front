const GlobalSettings = {

    development: {
        siteEnvironment: 'dev',
        apiBaseUrl: 'http://localhost:3000/',
        googleTagManagerKey: 'GTM-52ZXN5JJ',
        googleTagManagerEnabled: true,
        googleTagManagerDebug: true,
    },

    staging: {
        siteEnvironment: 'test',
        apiBaseUrl: 'http://localhost:3000/',
        googleTagManagerKey: 'GTM-52ZXN5JJ',
        googleTagManagerEnabled: true,
        googleTagManagerDebug: true,
    },

    production: {
        siteEnvironment: 'prod',
        apiBaseUrl: 'https://www.cross-city-taxi.ru/',
        googleTagManagerKey: 'GTM-52ZXN5JJ',
        googleTagManagerEnabled: true,
        googleTagManagerDebug: false,
    },
}

export {
    GlobalSettings
}