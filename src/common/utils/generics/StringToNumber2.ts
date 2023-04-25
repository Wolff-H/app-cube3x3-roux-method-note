type ToNumber<S extends string, A extends any[] = []> = `${A['length']}` extends S ? A['length'] : ToNumber<S, [1, ...A]>

// type a = ToNumber<`${0|1}`>