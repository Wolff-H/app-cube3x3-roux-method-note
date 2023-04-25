import authios from "@/common/authios"

/**********************************************************************************************************************/

export async function remoteTestScripts(script_name: string, data: any)
{
    return authios.post('remoteTestScripts', {
        script_name: script_name,
        data: data,
    }, {
        ban_hooks: ['notifyResponseFailure'],
    })
}