type Make10<T extends any[]> = [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T]

type toTuple<T extends number | string, R extends any[] = []> =
    `${T}` extends `${R['length']}` ? R : toTuple<T, [...R, 0]>

type ToNumber1<T extends string, Res extends any[] = []> =
    `${T}` extends `${infer L}${infer R}`
    ? ToNumber1<R, [...Make10<Res>, ...toTuple<L>]>
    : Res['length']

// type BIN = 0|1
// type a = ToNumber<`${BIN}`>

