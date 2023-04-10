export const isDev = process.env.NODE_ENV === "development";
const devServerAddress = "http://localhost:3001/api/";
const prodServerAddress = "https://api.react-native.svg-icons.miłosznowaczyk.name/api/";
export const serverAddress = isDev ? devServerAddress : prodServerAddress ;
