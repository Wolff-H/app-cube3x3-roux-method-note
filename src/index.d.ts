interface Window
{
    [other_attributes: string]: any
}

declare const processResponse: import("@/common/authios").ProcessResponse
declare const constructResponse: import("@/common/authios").ConstructResponse
declare const namespaced_session_storage: import("@/common/namespaced-storage").NamespacedSessionStorage
declare const namespaced_local_storage: import("@/common/namespaced-storage").NamespacedLocalStorage

/**
 * 获取api的返回值类型。默认取成功值类型，传入第二个参数来规定取成功值或失败值类型。
 */
type ResponseData<F extends (...args: any) => any, R extends 'success'|'failure' = 'success'> =
    Awaited<ReturnType<F>> extends import("axios").AxiosResponse<infer T> ?
        Extract<T,
            R extends 'success' ?
                import("@/common/authios").ResponseSucceeded<any>
                :
                R extends 'failure' ?
                    import("@/common/authios").ResponseFailed<any>
                    :
                    never
        >["content"]
        :
        never

declare module "vue-inline-svg"
{
    function InlineSvgPlugin(Vue: any): void
    const InlineSvgComponent: any

    export
    {
        InlineSvgPlugin,
        InlineSvgComponent,
    }
    
    export default InlineSvgComponent
}

// declare module "unplugin-vue-macros/vite"