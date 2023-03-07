export const genratorXApiUrls = (projectName) => {
    const pathObj = {
        createApplication: `createApp`,
        downloadApplication: `downloadGenX/${projectName}`
    }
    return pathObj
}
