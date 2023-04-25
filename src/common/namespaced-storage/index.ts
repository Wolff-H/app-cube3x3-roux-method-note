import namespaces from "@/config/namespaces"



function toAppNamespaced(string: string)
{
    return `${namespaces.APP}__${string}`
}

const namespaced_session_storage =
{
    getItem(key: string)
    {
        return sessionStorage.getItem(toAppNamespaced(key))
    },
    setItem(key: string, value: string)
    {
        return sessionStorage.setItem(toAppNamespaced(key), value)
    },
    removeItem(key: string)
    {
        return sessionStorage.removeItem(toAppNamespaced(key))
    },
}

const namespaced_local_storage =
{
    getItem(key: string)
    {
        return localStorage.getItem(toAppNamespaced(key))
    },
    setItem(key: string, value: string)
    {
        return localStorage.setItem(toAppNamespaced(key), value)
    },
    removeItem(key: string)
    {
        return localStorage.removeItem(toAppNamespaced(key))
    },
}

type NamespacedSessionStorage = typeof namespaced_session_storage
type NamespacedLocalStorage = typeof namespaced_local_storage



export default
{
    namespaced_session_storage,
    namespaced_local_storage,
}

export
{
    namespaced_session_storage,
    namespaced_local_storage,
    NamespacedSessionStorage,
    NamespacedLocalStorage,
}
