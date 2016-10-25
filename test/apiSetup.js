import GigwalkAPI from '../src';

const configVars = [
    'GIGWALK_API_SERVER_HOSTNAME',
    'GIGWALK_PLATFORM_ADMIN_TOKEN'
    // 'GIGWALK_SUPER_ADMIN_TOKEN',
    // 'GIGWALK_ADMIN_TOKEN',
    // 'GIGWALK_WORKER_TOKEN',
    // 'GIGWALK_OPERATOR_TOKEN',
    // 'GIGWALK_ANALYST_TOKEN',
    // 'GIGWALK_SELF_SERVICE_TOKEN'
];

configVars.forEach((key: string) => {
    if (!(key in process.env)) {
        throw new TypeError(`${key} not set`);
    }
});

const gigwalk = new GigwalkAPI({
    hostname: process.env.GIGWALK_API_SERVER_HOSTNAME
});

gigwalk.authenticate({
    token: process.env.GIGWALK_PLATFORM_ADMIN_TOKEN
});

global.gigwalk = gigwalk;
