type TKeys = readonly (string|number|symbol)[]
type TVals = readonly unknown[]
type TKV = { K: TKeys, V: TVals }    // 装包一个TKV其实只是为了在下面叠R时好看点

type R<KV extends TKV, Index extends number> = Record<KV['K'][Index], KV['V'][Index]>

/**
 * 合并两个元组类型（一个键元组，一个值元组）到一个对象类型。最多支持10个记录，超出丢失。
 * @param Keys 键元组
 * @param Val 值元组
 */
type KVTuplesToObject<Keys extends TKeys, Vals extends TVals, KV extends TKV = { K: Keys, V: Vals }> =
    & R<KV, 0>
    & R<KV, 1>
    & R<KV, 2>
    & R<KV, 3>
    & R<KV, 4>
    & R<KV, 5>
    & R<KV, 6>
    & R<KV, 7>
    & R<KV, 8>
    & R<KV, 9>

export default KVTuplesToObject
