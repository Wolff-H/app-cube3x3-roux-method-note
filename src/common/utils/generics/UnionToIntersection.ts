type UnionToIntersection<Union> =
    (Union extends any ? (arg: Union) => any : never) extends ((arg: infer I) => void) ? I : never