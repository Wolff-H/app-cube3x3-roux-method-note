// 1. 语言基础、框架 //
import { createApp } from "vue"
import InlineSVG from "vue-inline-svg"
import { createPinia } from "pinia"
import dayjs from "dayjs"
import "dayjs/locale/zh-cn"
import dayjs_plugin_weekday from "dayjs/plugin/weekday"
import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

// 2. 类库 //

// 3. 逻辑 //
import App from "./App.vue"
import router from "@/router"
import { useAuthios } from "./common/authios"
import { namespaced_session_storage, namespaced_local_storage } from "./common/namespaced-storage"
import { getEnvironment } from "@/config/environment"
import { remoteTestScripts } from "@/api"

// 4. 工具 //
import { install as installGetAssetUrl } from "@/common/utils/getAssetUrl"

// 5. 样式 //
import "@/assets/stylesheets/overall/index.styl"
import "@/assets/stylesheets/element-plus-customized/index.scss"
import "@icon-park/vue-next/styles/index.css"



// 设置 dayjs //
dayjs.extend(dayjs_plugin_weekday)
dayjs.locale('zh-cn')

// authios //
useAuthios({
    auth_header:
    {
        getter()
        {
            return namespaced_local_storage.getItem('user_token') || ''
        },
    },
    url_prefix()
    {
        return getEnvironment().base_url
    },
    response_classifier:
    {
        isSuccess(response)
        {
            return (typeof response === 'object' && 'if_succeeded' in response)
        },
        isFailure(response)
        {
            return (typeof response === 'object' && 'if_failed' in response)
        },
        isError(response)
        {
            return typeof response === 'string'
        },
    },
    response_hooks:
    [
        {
            name: 'notifyResponseFailure',
            processor: ({ data }) => 
            {
                if(typeof data !== 'string' && 'if_failed' in data)
                {
                    // warning 请求失败
                }
            },
        },
        {
            name: 'notifyResponseError',
            processor: ({ data }) => 
            {
                if(typeof data === 'string')
                {
                    // danger 请求出错
                }
            },
        },
    ],
})

// 设置 全局变量 //
window['namespaced_session_storage'] = namespaced_session_storage
window['namespaced_local_storage'] = namespaced_local_storage
window['remoteTestScripts'] = remoteTestScripts

const app = createApp(App)

// 设置 app 实例 //
app
    .component("inline-svg", InlineSVG)
    .use(createPinia())
    .use(router)
    .use(installGetAssetUrl)
    .use(ElementPlus)
    .mount('body')
