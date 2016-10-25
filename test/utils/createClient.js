import GigwalkAPI from '../../src';

export default function createClient() {
    return new GigwalkAPI({
        hostname: process.env.GIGWALK_API_SERVER_HOSTNAME
    });
}
