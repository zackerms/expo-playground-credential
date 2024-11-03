import {ConfigContext} from "@expo/config"

export default ({config}: ConfigContext) => {
    config.extra = {
        ...config.extra,
        API_KEY: process.env.API_KEY,
    }
    return config;
};