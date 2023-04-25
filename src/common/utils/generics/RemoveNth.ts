/**
 * 从元组中删除第1项
 */
export type Remove1st<T extends unknown[]> = T extends [infer M1, ...infer MN] ? [...MN] : never

/**
 * 从元组中删除第2项
 */
export type Remove2nd<T extends unknown[]> = T extends [infer M1, infer M2, ...infer MN] ? [M1, ...MN] : never

/**
 * 从元组中删除第3项
 */
export type Remove3rd<T extends unknown[]> = T extends [infer M1, infer M2, infer M3, ...infer MN] ? [M1, M2, ...MN] : never

/**
 * 从元组中删除第4项
 */
export type Remove4th<T extends unknown[]> = T extends [infer M1, infer M2, infer M3, infer M4, ...infer MN] ? [M1, M2, M3, ...MN] : never

/**
 * 从元组中删除第5项
 */
export type Remove5th<T extends unknown[]> = T extends [infer M1, infer M2, infer M3, infer M4, infer M5, ...infer MN] ? [M1, M2, M3, M4, ...MN] : never

/**
 * 从元组中删除第6项
 */
export type Remove6th<T extends unknown[]> = T extends [infer M1, infer M2, infer M3, infer M4, infer M5, infer M6, ...infer MN] ? [M1, M2, M3, M4, M5, ...MN] : never

/**
 * 从元组中删除第7项
 */
export type Remove7th<T extends unknown[]> = T extends [infer M1, infer M2, infer M3, infer M4, infer M5, infer M6, infer M7, ...infer MN] ? [M1, M2, M3, M4, M5, M6, ...MN] : never
 
/**
 * 从元组中删除第8项
 */
export type Remove8th<T extends unknown[]> = T extends [infer M1, infer M2, infer M3, infer M4, infer M5, infer M6, infer M7, infer M8, ...infer MN] ? [M1, M2, M3, M4, M5, M6, M7, ...MN] : never
 
/**
 * 从元组中删除第9项
 */
export type Remove9th<T extends unknown[]> = T extends [infer M1, infer M2, infer M3, infer M4, infer M5, infer M6, infer M7, infer M8, infer M9, ...infer MN] ? [M1, M2, M3, M4, M5, M6, M7, M8, ...MN] : never
 
export default Remove1st