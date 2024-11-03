import {ConfigContext} from "@expo/config"

export default ({config}: ConfigContext) => {
    config.extra = {
        ...config.extra,
        APP_NAME: process.env.APP_NAME,
        API_KEY: process.env.API_KEY,
    }
    return config;
};