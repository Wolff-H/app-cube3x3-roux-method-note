/**
 * @description
 * 工程的环境相关配置定义。
 */



// environments //
const ENV_LOCAL =
{
    name: 'local',
    base_url: 'http://localhost:3000/path/to/project-name/v0/local',
} as const

const ENV_DEV =
{
    name: 'development',
    base_url: 'http://www.myserver.com/path/to/project-name/v0/dev',
} as const

const ENV_PROD =
{
    name: 'production',
    base_url: 'http://www.myserver.com/path/to/project-name/v0',
} as const

export function getEnvironment()
{
    // 这里的判断逻辑在实际中可能需要换成对 process.env.NODE_ENV 等环境变量的判断。环境变量在 package.json 中的 scripts 里设置 //
    if(location.host === 'localhost') return ENV_LOCAL
    if(location.host === 'dev.myserver.com') return ENV_DEV
    if(location.host === 'www.myserver.com') return ENV_PROD

    return ENV_DEV
}



export default getEnvironment