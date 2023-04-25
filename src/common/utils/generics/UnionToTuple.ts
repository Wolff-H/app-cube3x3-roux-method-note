type UnionToIntersection<Union> =
    (Union extends any ? (k: Union) => void : never) extends ((k: infer I) => void) ? I : never

type LastOf<T> =
    UnionToIntersection<
        T extends any ?
            () => T
            :
            never
    > extends () => (infer R) ?
        R
        :
        never

type Push<T extends any[], V> = [...T, V];

type UnionToTuple<
    T,
    L = LastOf<T>,
    N = [T] extends [never] ? true : false,
> =
    true extends N ?
        []
        :
        Push<
            UnionToTuple<
                Exclude<T, L>
            >,
            L
        >

export default UnionToTuple

// const obj =
// {
//     a: 'aa',
//     b: 'bb',
//     c: 'cc',
// }

// type t = UnionToTuple<keyof typeof obj>