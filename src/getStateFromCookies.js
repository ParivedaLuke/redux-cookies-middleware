import { getCookie as getBrowserCookie } from './cookieApi';
import _get from 'lodash/get';
import _set from 'lodash/set';

/**
 * read browser cookie into state
 * @param {Object} preloaded state
 * @param {Object} paths
 * @param {Object} get Cookie implementation
 * @return {Object} new state
 **/
const getStateFromCookies = (
    preloadedState,
    paths,
    getCookie = getBrowserCookie
) => {
    Object.keys(paths).forEach(pathToState => {
        const pathConf = paths[pathToState];

        // read cookies
        let storedState = JSON.parse(getCookie(pathConf.name));
        if(pathConf.cookiePath) {
            storedState = _get(storedState, pathConf.cookiePath, '');
        }
        debugger;
        // get a slice of state path where to put cookie value
        if (storedState) {
            _set(preloadedState, pathToState, storedState);
        }
    });

    return preloadedState;
};

export default getStateFromCookies;
