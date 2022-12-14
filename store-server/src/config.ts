const isProd = process.env.NODE_EV == 'production'
let appConfig = {
    isProd,
    clearDataBeforeLodingFixture: isProd ? false : true,
    dbConnectionInfo: {
        host: '127.0.01',
        port: 3306,
        user: 'root',
        password: 'secret',
        database: 'store'
    }
}
export default appConfig;