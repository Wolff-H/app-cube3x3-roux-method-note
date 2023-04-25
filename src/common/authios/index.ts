import axios, { AxiosRequestConfig, AxiosResponse } from "axios"



/** 成功/失败 情况下所返回的结果必须是一个对象 */
type ResponseSucceeded<T extends Record<string, any>/* = Record<string, never> */> =
{
    content: T
    // if_succeeded: true
    [other_key: string]: any
}

/** 成功/失败 情况下所返回的结果必须是一个对象 */
type ResponseFailed<T extends Record<string, any>/* = Record<string, never> */> =
{
    content: T
    // if_failed: true
    [other_key: string]: any
}

/** 错误 情况下所返回的结果是直接一个字串 */
type ResponseErrorString = string

/** ServerResponse 默认是一个含 content = {} 的成功/失败结果 */
type ServerResponse<
    ContentSucceeded extends Record<string, any> = any,
    ContentFailed extends Record<string, any> = any
> =
    ResponseSucceeded<ContentSucceeded> | ResponseFailed<ContentFailed> | ResponseErrorString

type AuthiosResponseHook =
{
    name: string
    processor: (response: AxiosResponse<ServerResponse>) => void
}

const authios_config: AuthiosConfig =
{
    auth_header:
    {
        name: 'Authorization',
        getter()
        {
            return ''
        },
    },
    url_prefix()
    {
        return ''
    },
    response_classifier:
    {
        isSuccess()
        {
            return true
        },
        isFailure()
        {
            return false
        },
        isError()
        {
            return false
        },
    },
    response_hooks: [],
}

type AuthiosConfig =
{
    auth_header:
    {
        name: string
        getter: () => string
    }
    url_prefix: () => string
    response_classifier:
    {
        isSuccess: (response: ServerResponse) => boolean
        isFailure: (response: ServerResponse) => boolean
        isError: (response: ServerResponse) => boolean
    }
    response_hooks: AuthiosResponseHook[]
}

type AuthiosConfigArg =
{
    /** 鉴权头。 */
    auth_header?:
    {
        name?: string
        getter?: () => string
    }
    /** 请求的 url 前缀。 */
    url_prefix?: () => string
    /** 响应结果分类器。用以确定响应状态类型的规则定义。 */
    response_classifier?:
    {
        isSuccess?: (response: ServerResponse) => boolean
        isFailure?: (response: ServerResponse) => boolean
        isError?: (response: ServerResponse) => boolean
    }
    /** 响应钩子。在响应被提交给用户处理器处理前执行的通用行为。 */
    response_hooks?: AuthiosResponseHook[]
}

/**
 * @param service_api_url 后端服务api的url（定位到应用的前缀路径已经配好了）
 * @param payload 提交的载荷
 * @param options 配置项
 */
async function post<
    ContentSucceeded extends Record<string, never> = Record<string, never>,
    ContentFailed extends Record<string, never> = Record<string, never>
>(
    service_api_url: string,
    payload?: any,
    options?:
    {
        config?: AxiosRequestConfig,
        ban_hooks?: string[],
    },
){
    const auth_header_config =
    {
        headers:
        {
            'Authorization': namespaced_local_storage.getItem('user_token'),
        },
    }

    return axios.post<ServerResponse<ContentSucceeded, ContentFailed>>(`${authios_config.url_prefix()}/${service_api_url}`, payload, Object.assign(auth_header_config, options?.config))
        .then(response => 
        {
            authios_config.response_hooks.forEach(hook => 
            {
                options?.ban_hooks?.includes(hook.name) || hook.processor(response)
            })
            return response
        })
}

/**
 * @param service_api_url 后端服务api的url（定位到应用的前缀路径已经配好了）
 * @param query 提交的查询
 * @param options 配置项
 */
async function get<
    ContentSucceeded extends Record<string, never> = Record<string, never>,
    ContentFailed extends Record<string, never> = Record<string, never>
>(
    service_api_url: string,
    query?: any,
    options?:
    {
        config?: AxiosRequestConfig,
        ban_hooks?: string[],
    },
){
    const auth_header_config =
    {
        headers:
        {
            'Authorization': namespaced_local_storage.getItem('user_token'),
        },
    }

    return axios.get<ServerResponse<ContentSucceeded, ContentFailed>>(`${authios_config.url_prefix()}/${service_api_url}`, Object.assign(auth_header_config, { params: query }, options?.config))
        .then(response => 
        {
            authios_config.response_hooks.forEach(hook => 
            {
                options?.ban_hooks?.includes(hook.name) || hook.processor(response)
            })
            return response
        })
}

function isErrorResponse<S extends Record<string, any>, F extends Record<string, any>>(response: ServerResponse<S, F>): response is ResponseErrorString
{
    // return typeof response === 'string'
    return authios_config.response_classifier.isError(response)
}

function isSuccessResponse<S extends Record<string, any>, F extends Record<string, any>>(response: ServerResponse<S, F>): response is ResponseSucceeded<S>
{
    // return typeof response !== 'string' && 'if_succeeded' in response
    return authios_config.response_classifier.isSuccess(response)
}

function isFailureResponse<S extends Record<string, any>, F extends Record<string, any>>(response: ServerResponse<S, F>): response is ResponseFailed<F>
{
    // return typeof response !== 'string' && 'if_failed' in response
    return authios_config.response_classifier.isFailure(response)
}

/**
 * 整洁的定义对请求响应的处理
 * @param response axios返回的响应报文中解构出的data
 * @returns 对应处理器的返回值
 */
function processResponse<T extends ServerResponse>(
    response: T,
    success_processor?: <T extends ResponseSucceeded<Record<string, any>>>(response: T) => any,
    failure_processor?: <T extends ResponseFailed<Record<string, any>>>(response: T) => any,
    error_processor?: <T extends ResponseErrorString>(error_string: T) => any,
){
    if(isErrorResponse(response) && typeof error_processor === 'function')
    {
        return error_processor(response)
    }
    else if(isFailureResponse(response) && typeof failure_processor === 'function')
    {
        return failure_processor(response)
    }
    else if(isSuccessResponse(response) && typeof success_processor === 'function')
    {
        return success_processor(response)
    }
}

type ProcessResponse = typeof processResponse

/**
 * 模拟构造服务端返回
 * @param content 内容
 * @param status 状态（成功或失败）
 * @param [delay=0] 延迟毫秒数
 * @returns 模拟的服务端返回
 */
function constructResponse<C extends Record<string, any>>(content?: C, status: 'succeeded'|'failed' = 'succeeded', delay = 0)
{
    const response: any =
    {
        content: content,
    }

    if(status === 'succeeded')
    {
        response['if_succeeded'] = true
    }
    else if(status === 'failed')
    {
        response['if_failed'] = true
    }

    return new Promise<AxiosResponse<ServerResponse<C>>>((resolve) => {
        setTimeout(() => {
            resolve(wrapAsAxiosResponse(response as ServerResponse<C>))
        }, delay)
    })
}

type ConstructResponse = typeof constructResponse

function wrapAsAxiosResponse<ServerResponse>(server_response: ServerResponse): AxiosResponse<ServerResponse>
{
    return {
        data: server_response,  // 由服务器提供的响应
        status: 200,            // 来自服务器响应的 HTTP 状态码
        statusText: 'OK',       // 来自服务器响应的 HTTP 状态信息
        headers: {},            // 服务器响应的头
        config: {} as any,      // 为请求提供的配置信息
        request: {},            // 是创建该响应的来源请求
    }
}

type AxiosServerResponse<C extends Record<string, any>> = AxiosResponse<ServerResponse<C>>

/**
 * 使用 authios。传入一个 config 以进行初始化设置。
 * @param response_classifier 响应分类器。用以确定响应状态类型的规则定义。
 * @param response_hooks 响应钩子。在响应被提交给用户处理器处理前执行的通用行为。
 */
function useAuthios(config?: AuthiosConfigArg)
{
    if(config)
    {
        // set auth_header //
        if(config.auth_header)
        {
            Object.assign(authios_config.auth_header, config.auth_header)
        }
    
        // set url_prefix //
        if(config.url_prefix)
        {
            authios_config.url_prefix = config?.url_prefix
        }
    
        // set response_classifier //
        Object.assign(authios_config.response_classifier, config.response_classifier)
    
        // set response_hooks //
        if(config.response_hooks)
        {
            authios_config.response_hooks = config.response_hooks
        }
    }

    window['processResponse'] = processResponse
    window['constructResponse'] = constructResponse
}



/**
 * 封装的 axios.get() 和 axios.post()，这两个方法会自动在请求头中加入用户token。
 */
export default
{
    post,
    get,
}

export
{
    ResponseSucceeded,
    ResponseFailed,
    ResponseErrorString,
    ServerResponse,
    processResponse,
    ProcessResponse,
    constructResponse,
    ConstructResponse,
    AxiosServerResponse,
    useAuthios,
}