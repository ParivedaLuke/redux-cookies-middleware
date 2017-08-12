import jsCookie from 'js-cookie';

const getCookie = name => jsCookie.getJSON(name);

const setCookie = (name, value, expiry = 365) => {
    jsCookie.set(name, value, { expires: expiry, path: '/' });
};

export { getCookie };
export default setCookie;
