import { App } from "vue"

export default function getAssetUrl(path: string)
{
    return new URL(path, import.meta.url).href
}

export type GetAssetUrl = typeof getAssetUrl

export function install(app: App<Element>)
{
    app.config.globalProperties['getAssetUrl'] = getAssetUrl
}