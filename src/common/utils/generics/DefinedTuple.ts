/**
 * 获取确切元组（移除元组中的undefined）
 */
type DefinedTuple<T extends unknown[]> =
    T extends [] ?
        []
        :
        T extends [infer Prev, ...infer Rest] ?
            Prev extends undefined ?
                DefinedTuple<Rest>
                :
                [Prev, ...DefinedTuple<Rest>]
            :
            T

export default DefinedTuple