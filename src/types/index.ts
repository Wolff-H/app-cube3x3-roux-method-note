/**
 * @description
 * 根层级的类型定义。
 */



export type ContentSchema =
{
    header:
    {
        title: string
    }
    body: Topic[]
}


export type Topic =
{
    topic: string
    topic_comment?: string
    content?: htmlstring
    analysis?: Analysis
    children?: Topic[]
}

export type Analysis =
{
    figure_config: FigureConfig
    algorithm_pattern: AlgorithmPatternPartition[]
}

export type FigureConfig = FigureConfig2D | FigureConfig2DCorners | FigureConfig3D

export type FigureConfig2D =
{
    type: '2d'
    schema:
    [
        // row_1:           ` ${TileCode}${TileCode}${TileCode} `,
        // row_2: `${TileCode}${TileCode}${TileCode}${TileCode}${TileCode}`,
        // row_3: `${TileCode}${TileCode}${TileCode}${TileCode}${TileCode}`,
        // row_4: `${TileCode}${TileCode}${TileCode}${TileCode}${TileCode}`,
        // row_5:           ` ${TileCode}${TileCode}${TileCode} `,
        row_1: ` ${string} `,
        row_2:  `${string}`,
        row_3:  `${string}`,
        row_4:  `${string}`,
        row_5: ` ${string} `,
    ]
}

export type FigureConfig2DCorners =
{
    type: '2d-corners'
    schema:
    [
        row_1: `${DONTCARE}${TileCode}${DONTCARE}${TileCode}${DONTCARE}`,
        row_2: `${TileCode}${TileCode}${DONTCARE}${TileCode}${TileCode}`,
        row_3: `${DONTCARE}${DONTCARE}${DONTCARE}${DONTCARE}${DONTCARE}`,
        row_4: `${TileCode}${TileCode}${DONTCARE}${TileCode}${TileCode}`,
        row_5: `${DONTCARE}${TileCode}${DONTCARE}${TileCode}${DONTCARE}`,
    ]
}

export type FigureConfig3D = never

export type AlgorithmPatternPartition =
{
    group: number
    name?: string
    order: number
    actions: string
}

export type DONTCARE = ' '
export type TileCode = 'W' | 'G' | 'R' | 'O' | 'B' | 'Y' | 'w' | 'g' | 'r' | 'o' | 'b' | 'y'
export type CubeActionBase = 'R' | 'U' | 'F' | 'L' | 'D' | 'B' | 'r' | 'u' | 'f' | 'l' | 'd' | 'b' | 'M' | 'E' | 'S' | 'X' | 'Y' | 'Z'
export type CubeActionTurn = '+' | '-' | '^'
export type CubeAction = `${CubeActionBase}${CubeActionTurn}`



export {
    // 
}