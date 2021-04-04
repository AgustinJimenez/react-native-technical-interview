/* eslint-disable require-await */
const wait = async (ms: number = 1000) => new Promise(res => setTimeout(res, ms));

export default wait;
