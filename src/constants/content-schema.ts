import { ContentSchema } from "@/types"



const content_schema: ContentSchema =
{
    header:
    {
        title: '桥式教程笔记',
    },
    body:
    [
        {
            topic: '前置条件',
            content: `
                前置的一些条件与约定
            `.replace(/^    /gm, ''),
            children:
            [
                {
                    topic: '放置',
                    content: `我们约定，白色作底，绿色作前（因此左面为红，右面为橙，顶面为黄）。`,
                },
                {
                    topic: '名称及含义',
                    content: `
                        行（Row）：色块对，在同一水平面上，构成横向的直线。<br />
                        列（Column）：色块对，在同一水平面上，构成竖向的直线。<br />
                        斜（Oblique）：色块对，在同一水平面上，构成斜向的直线。<br />
                        条（Bar）：色块对，在上下水平面上，构成横向的直线。<br />
                        竿（Pole）：色块对，在上下水平面上，构成竖向的直线。<br />
                        杠（Slash）：色块对，在上下水平面上，构成斜向的直线。<br />
                    `.replace(/^    /gm, ''),
                },
                {
                    topic: '常用公式',
                    content: `待补。`,
                },
            ],
        },
        {
            topic: '构造左桥',
            content: `
                通过推理，在左侧做出 1*2*3 的还原色块构筑。
            `.replace(/^    /gm, ''),
        },
        {
            topic: '构造右桥',
            content: `
                通过推理，在右侧做出 1*2*3 的还原色块构筑。
            `.replace(/^    /gm, ''),
        },
        {
            topic: 'CMLL',
            content: `
                还原顶面角块色向及排列。
                <br />
                对以下情形分组讨论：
            `.replace(/^    /gm, ''),
            children:
            [
                {
                    topic: 'O',
                    content: `模式：顶面存在4个已翻仰的顶角块，顶色均位于前面与后面。<br />该大类包含「邻角」、「对角」共2个具体构型。`,
                    children:
                    [
                        {
                            topic: '邻角',
                            topic_comment: 'O-Adjacent',
                            id: 'CMLL_Case:O-Adjacent',
                            content: `交换右手侧的两个邻角。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d-corners',
                                    schema:
                                    [
                                        ' O G ',
                                        'BY YR',
                                        '     ',
                                        'BY YO',
                                        ' R G ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    { group: 1, order: 1, actions: 'R+ U+ R-' },
                                    { group: 2, order: 2, actions: 'F-' },
                                    { group: 1, order: 1, actions: 'R+ U+ R-' },
                                    { group: 3, order: 1, actions: 'U- R-' },
                                    { group: 4, order: 2, actions: 'F+ R^' },
                                    { group: 3, order: 1, actions: 'U- R-' },
                                ],
                            },
                        },
                        {
                            topic: '对角',
                            topic_comment: 'O-Diagonal',
                            id: 'CMLL_Case:O-Diagonal',
                            content: `交换对角（[SpeedCubeDB/O-Diagonal的第一条公式]以经过左上右下的直线为中轴，映射{ 靠左上的角与棱, 靠右下的角 }的侧面颜色到镜面位置）。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d-corners',
                                    schema:
                                    [
                                        ' G B ',
                                        'OY YO',
                                        '     ',
                                        'RY YR',
                                        ' G B ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    { group: 1, order: 1, actions: 'F+ R+ U- R-' },
                                    { group: 2, order: 2, actions: 'U-' },
                                    { group: 1, order: 1, actions: 'R+ U+ R- F-' },
                                    { group: 3, order: 1, actions: 'R+ U+' },
                                    { group: 4, order: 2, actions: 'R-' },
                                    { group: 3, order: 1, actions: 'U- R-' },
                                    { group: 5, order: 1, actions: 'F+' },
                                    { group: 6, order: 2, actions: 'R+' },
                                    { group: 5, order: 1, actions: 'F-' },
                                ],
                            },
                        },
                    ],
                },
                {
                    topic: 'H',
                    content: `模式：顶面存在0个已翻仰的顶角块，顶色均位于前面与后面。<br />该大类包含「双列」、「双行」、「单列」、「单行」共4个具体构型。`,
                    children:
                    [
                        {
                            topic: '双列',
                            topic_comment: 'H-Columns',
                            id: 'CMLL_Case:H-Columns',
                            content: `顶角块呈「双列」模式。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d-corners',
                                    schema:
                                    [
                                        ' Y Y ',
                                        'bR Ob',
                                        '     ',
                                        'gR Og',
                                        ' Y Y ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    // { group: 1, order: 1, actions: 'R+ U^ R- U-' },
                                    // { group: 2, order: 1, actions: 'R+ U+ R- U-' },
                                    // { group: 3, order: 2, actions: 'R+' },
                                    // { group: 4, order: 1, actions: 'U- R-' },
                                    { group: 1, order: 1, actions: 'R+' },
                                    { group: 2, order: 1, actions: 'U^ R- U-' },
                                    { group: 3, order: 1, actions: 'R+' },
                                    { group: 4, order: 1, actions: 'U+ R- U-' },
                                    { group: 5, order: 1, actions: 'R+' },
                                    { group: 6, order: 1, actions: 'U- R-' },
                                ],
                            },
                        },
                        {
                            topic: '双行',
                            topic_comment: 'H-Rows',
                            id: 'CMLL_Case:H-Rows',
                            content: `顶角块呈「双行」模式。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d-corners',
                                    schema:
                                    [
                                        ' Y Y ',
                                        'oB Br',
                                        '     ',
                                        'oG Gr',
                                        ' Y Y ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    { group: 1, order: 1, actions: 'F+' },
                                    { group: 2, order: 2, actions: 'R+ U+ R- U-' },
                                    { group: 3, order: 2, actions: 'R+ U+ R- U-' },
                                    { group: 4, order: 2, actions: 'R+ U+ R- U-' },
                                    { group: 1, order: 1, actions: 'F-' },
                                ],
                            },
                        },
                        {
                            topic: '单列',
                            topic_comment: 'H-Column',
                            id: 'CMLL_Case:H-Column',
                            content: `顶角块呈「单列」模式。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d-corners',
                                    schema:
                                    [
                                        ' Y Y ',
                                        'gO Br',
                                        '     ',
                                        'gR Bo',
                                        ' Y Y ',
                                    ],
                                },
                                algorithm_pattern: [
                                    { group: 1, order: 1, actions: 'R- F^ D+ R^' },
                                    { group: 2, order: 2, actions: 'U+' },
                                    { group: 1, order: 1, actions: 'R^ D- F^ R+' },
                                ],
                            },
                        },
                        {
                            topic: '单行',
                            topic_comment: 'H-Row',
                            id: 'CMLL_Case:H-Row',
                            content: `顶角块呈「单行」模式。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d-corners',
                                    schema:
                                    [
                                        ' Y Y ',
                                        'gO Ob',
                                        '     ',
                                        'rB Gr',
                                        ' Y Y ',
                                    ],
                                },
                                algorithm_pattern: [
                                    { group: 1, order: 1, actions: 'r+ U- r^ D- r+' },
                                    { group: 2, order: 2, actions: 'U-' },
                                    { group: 1, order: 1, actions: 'r- D+ r^ U+ r-' },
                                ],
                            },
                            // figure_schema: [
                            //     ' Y Y ',
                            //     'rG Br',
                            //     '     ',
                            //     'bO Og',
                            //     ' Y Y ',
                            // ],
                            // pattern: [
                            //     { group: 1, order: 1, actions: 'U^' },
                            //     { group: 2, order: 2, actions: 'r+ U-' },
                            //     { group: 3, order: 2, actions: 'r^' },
                            //     { group: 4, order: 3, actions: 'D- r+' },
                            //     { group: 5, order: 4, actions: 'U-' },
                            //     { group: 4, order: 3, actions: 'r- D+' },
                            //     { group: 3, order: 2, actions: 'r^' },
                            //     { group: 2, order: 2, actions: 'U+ r-' },
                            // ],
                            // 说明：实际使用的这个顶面模式是去掉了原教程第一步 U^ 动作的变形 //
                        },
                    ],
                },
                {
                    topic: 'Pi',
                    content: `模式：顶面存在0个已翻仰的顶角块，四个顶色向内射出的射线构成一个顺90度旋转躺倒的 π 形。<br />该大类包含「右列」、「左列」、「正斜」、「反斜」、「双列」、「叉」共6个具体构型。`,
                    children:
                    [
                        {
                            topic: '右列',
                            topic_comment: 'Pi-RightColumn',
                            id: 'CMLL_Case:Pi-RightColumn',
                            content: `顶角块呈「右列」模式。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d-corners',
                                    schema:
                                    [
                                        ' r Y ',
                                        'Yb Ob',
                                        '     ',
                                        'Yg Og',
                                        ' r Y ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    { group: 1, order: 1, actions: 'F+' },
                                    { group: 2, order: 2, actions: 'R+ U+ R- U-' },
                                    { group: 3, order: 2, actions: 'R+ U+ R- U-' },
                                    { group: 1, order: 1, actions: 'F-' },
                                ],
                            },
                        },
                        {
                            topic: '左列',
                            topic_comment: 'Pi-LeftColumn',
                            id: 'CMLL_Case:Pi-LeftColumn',
                            content: `顶角块呈「左列」模式。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d-corners',
                                    schema:
                                    [
                                        ' r Y ',
                                        'YB rg',
                                        '     ',
                                        'YB og',
                                        ' o Y ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    { group: 1, order: 1, actions: 'R-' },
                                    { group: 2, order: 2, actions: 'F- U- F+ U-' },
                                    { group: 3, order: 2, actions: 'R+ U+ R- U+' },
                                    { group: 1, order: 1, actions: 'R+' },
                                ],
                            },
                        },
                        {
                            topic: '正斜',
                            topic_comment: 'Pi-ForwardOblique',
                            id: 'CMLL_Case:Pi-ForwardOblique',
                            content: `顶角块呈「正斜」模式。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d-corners',
                                    schema:
                                    [
                                        ' g Y ',
                                        'Yr Br',
                                        '     ',
                                        'YB og',
                                        ' o Y ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    { group: 1, order: 1, actions: 'R+ U^' },
                                    { group: 2, order: 2, actions: 'R- U- R+ U+ R-' },
                                    { group: 1, order: 1, actions: 'U^ R-' },
                                    { group: 3, order: 1, actions: 'F+' },
                                    { group: 4, order: 2, actions: 'R' },
                                    { group: 3, order: 1, actions: 'F-' },
                                ],
                            },
                        },
                        {
                            topic: '反斜',
                            topic_comment: 'Pi-BackOblique',
                            id: 'CMLL_Case:Pi-BackOblique',
                            content: `顶角块呈「反斜」模式。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d-corners',
                                    schema:
                                    [
                                        ' g Y ',
                                        'YR go',
                                        '     ',
                                        'Yb Rb',
                                        ' o Y ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    { group: 1, order: 1, actions: 'U+' },
                                    { group: 2, order: 2, actions: 'F+' },
                                    { group: 3, order: 3, actions: 'R-' },
                                    { group: 2, order: 2, actions: 'F-' },
                                    { group: 4, order: 2, actions: 'R+ U^' },
                                    { group: 5, order: 3, actions: 'R+ U- R- U+ R+' },
                                    { group: 4, order: 2, actions: 'U^ R-' },
                                ],
                            },
                        },
                        {
                            topic: '叉',
                            topic_comment: 'Pi-X',
                            id: 'CMLL_Case:Pi-X',
                            content: `顶角块呈「叉」模式。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d-corners',
                                    schema:
                                    [
                                        ' b Y ',
                                        'YO Rg',
                                        '     ',
                                        'YR Og',
                                        ' b Y ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    { group: 1, order: 1, actions: 'R- F^ D+ R^' },
                                    { group: 2, order: 2, actions: 'U-' },
                                    { group: 1, order: 1, actions: 'R^ D- F^ R+' },
                                ],
                            },
                        },
                        {
                            topic: '双列',
                            topic_comment: 'Pi-Columns',
                            id: 'CMLL_Case:Pi-Columns',
                            content: `顶角块呈「双列」模式。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d-corners',
                                    schema:
                                    [
                                        ' b Y ',
                                        'YO Rg',
                                        '     ',
                                        'YO Rb',
                                        ' g Y ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    { group: 1, order: 1, actions: 'U-' },
                                    { group: 2, order: 2, actions: 'r+ U- r^ D- r+' },
                                    { group: 3, order: 3, actions: 'U+' },
                                    { group: 2, order: 2, actions: 'r- D+ r^ U+ r-' },
                                ],
                            },
                        },
                    ],
                },
                {
                    topic: 'U',
                    content: `模式：顶面存在2个已翻仰的顶角块位于前侧，剩余2个顶色位于后侧，朝向后侧。<br />该大类包含「正杠」、「反杠」、「前条」、「后条」、「双行」、「叉」共6个具体构型。`,
                    children:
                    [
                        {
                            topic: '正杠',
                            topic_comment: 'U-ForwardSlash',
                            id: 'CMLL_Case:U-ForwardSlash',
                            content: `顶角块呈「正杠」模式。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d-corners',
                                    schema:
                                    [
                                        ' Y Y ',
                                        'rg Ob',
                                        '     ',
                                        'gY Yr',
                                        ' O b ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    { group: 1, order: 1, actions: 'U^' },
                                    { group: 2, order: 2, actions: 'R^' },
                                    { group: 3, order: 3, actions: 'D+ R-' },
                                    { group: 4, order: 2, actions: 'U^' },
                                    { group: 3, order: 3, actions: 'R+ D-' },
                                    { group: 5, order: 2, actions: 'R- U^ R-' },
                                ],
                            },
                        },
                        {
                            topic: '反杠',
                            topic_comment: 'U-BackSlash',
                            id: 'CMLL_Case:U-BackSlash',
                            content: `顶角块呈「反杠」模式。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d-corners',
                                    schema:
                                    [
                                        ' Y Y ',
                                        'gO br',
                                        '     ',
                                        'rY Yb',
                                        ' g O ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    { group: 1, order: 1, actions: 'R^' },
                                    { group: 2, order: 2, actions: 'D- R+' },
                                    { group: 3, order: 1, actions: 'U^' },
                                    { group: 2, order: 2, actions: 'R- D+' },
                                    { group: 4, order: 2, actions: 'R+ U^ R+' },
                                ],
                            },
                        },
                        {
                            topic: '前条',
                            topic_comment: 'U-FrontBar',
                            id: 'CMLL_Case:U-FrontBar',
                            content: `顶角块呈「前条」模式。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d-corners',
                                    schema:
                                    [
                                        ' Y Y ',
                                        'br ob',
                                        '     ',
                                        'rY Yo',
                                        ' G G ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    { group: 1, order: 1, actions: 'R^' },
                                    { group: 2, order: 2, actions: 'F+ U- F+ U+' },
                                    { group: 3, order: 2, actions: 'F^ R^' },
                                    { group: 4, order: 2, actions: 'U- R- F+ R+' },
                                ],
                            },
                        },
                        {
                            topic: '后条',
                            topic_comment: 'U-BackBar',
                            id: 'CMLL_Case:U-BackBar',
                            content: `顶角块呈「后条」模式。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d-corners',
                                    schema:
                                    [
                                        ' Y Y ',
                                        'gO Ob',
                                        '     ',
                                        'rY Yr',
                                        ' g b ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    { group: 1, order: 1, actions: 'U-' },
                                    { group: 2, order: 1, actions: 'F+ R+ U+ R- U- F-' },
                                ],
                            },
                        },
                        {
                            topic: '双行',
                            topic_comment: 'U-Rows',
                            id: 'CMLL_Case:U-Rows',
                            content: `顶角块呈「双行」模式。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d-corners',
                                    schema:
                                    [
                                        ' Y Y ',
                                        'oB Br',
                                        '     ',
                                        'rY Yo',
                                        ' G G ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    { group: 1, order: 1, actions: 'F+' },
                                    { group: 2, order: 2, actions: 'U+' },
                                    { group: 3, order: 3, actions: 'R^ D+ R-' },
                                    { group: 4, order: 2, actions: 'U-' },
                                    { group: 3, order: 3, actions: 'R+ D- R^' },
                                    { group: 1, order: 1, actions: 'F-' },
                                ],
                            },
                        },
                        {
                            topic: '叉',
                            topic_comment: 'U-X',
                            id: 'CMLL_Case:U-X',
                            content: `顶角块呈「叉」模式。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d-corners',
                                    schema:
                                    [
                                        ' Y Y ',
                                        'bR Ob',
                                        '     ',
                                        'gY Yg',
                                        ' O R ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    { group: 1, order: 1, actions: 'r- U+ r- D- r+' },
                                    { group: 2, order: 2, actions: 'U+' },
                                    { group: 1, order: 1, actions: 'r- D+ r+ U- r+' },
                                ],
                            },
                        },
                    ],
                },
                {
                    topic: 'T',
                    content: `模式：顶面存在2个已翻仰的顶角块位于前侧，剩余2个顶色位于后侧，朝向左右两侧。<br />该大类包含「左杠」、「右杠」、「双行」、「双竿」、「前行」、「后行」共6个具体构型。`,
                    children:
                    [
                        {
                            topic: '左竿',
                            topic_comment: 'T-LeftPole',
                            id: 'CMLL_Case:T-LeftPole',
                            content: `顶角块呈「左竿」模式。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d-corners',
                                    schema:
                                    [
                                        ' b r ',
                                        'YO gY',
                                        '     ',
                                        'gY Yr',
                                        ' O b ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    { group: 1, order: 1, actions: 'U-' },
                                    { group: 2, order: 1, actions: 'R+ U+ R- U-' },
                                    { group: 3, order: 1, actions: 'R- F+ R+ F-' },
                                ],
                            },
                        },
                        {
                            topic: '右竿',
                            topic_comment: 'T-RightPole',
                            id: 'CMLL_Case:T-RightPole',
                            content: `顶角块呈「右竿」模式。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d-corners',
                                    schema:
                                    [
                                        ' o b ',
                                        'Yg RY',
                                        '     ',
                                        'oY Yg',
                                        ' b R ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    { group: 1, order: 1, actions: 'U+' },
                                    { group: 2, order: 1, actions: 'L- U- L+ U+' },
                                    { group: 3, order: 1, actions: 'L+ F- L- F+' },
                                ],
                            },
                        },
                        {
                            topic: '双行',
                            topic_comment: 'T-Rows',
                            id: 'CMLL_Case:T-Rows',
                            content: `顶角块呈「双行」模式。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d-corners',
                                    schema:
                                    [
                                        ' g b ',
                                        'YR RY',
                                        '     ',
                                        'gY Yb',
                                        ' O O ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    { group: 1, order: 1, actions: 'F+ R- F+ R-' },
                                    { group: 2, order: 1, actions: 'R- U- R- U-' },
                                    { group: 3, order: 2, actions: 'R+' },
                                    { group: 4, order: 3, actions: 'U+' },
                                    { group: 3, order: 2, actions: 'R-' },
                                    { group: 6, order: 1, actions: 'F^' },
                                ],
                            },
                        },
                        {
                            topic: '双竿',
                            topic_comment: 'T-Poles',
                            id: 'CMLL_Case:T-Poles',
                            content: `顶角块呈「双竿」模式。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d-corners',
                                    schema:
                                    [
                                        ' b b ',
                                        'YO RY',
                                        '     ',
                                        'gY Yg',
                                        ' O R ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    { group: 1, order: 1, actions: 'U^' },
                                    { group: 2, order: 2, actions: 'R- F+ R^ F+ R-' },
                                    { group: 3, order: 1, actions: 'U^' },
                                    { group: 2, order: 2, actions: 'R+ F- R^ F- R+' },
                                ],
                            },
                        },
                        {
                            topic: '前行',
                            topic_comment: 'T-FrontRow',
                            id: 'CMLL_Case:T-FrontRow',
                            content: `顶角块呈「前行」模式。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d-corners',
                                    schema:
                                    [
                                        ' g g ',
                                        'Yr oY',
                                        '     ',
                                        'oY Yr',
                                        ' b b ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    { group: 1, order: 1, actions: 'r-' },
                                    { group: 2, order: 2, actions: 'U+' },
                                    { group: 1, order: 1, actions: 'r+' },
                                    { group: 3, order: 2, actions: 'U^ R^' },
                                    { group: 4, order: 2, actions: 'F+ R+ F- R+' },
                                ],
                            },
                        },
                        {
                            topic: '后行',
                            topic_comment: 'T-BackRow',
                            id: 'CMLL_Case:T-BackRow',
                            content: `顶角块呈「后行」模式。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d-corners',
                                    schema:
                                    [
                                        ' o r ',
                                        'YG GY',
                                        '     ',
                                        'bY Yb',
                                        ' r o ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    { group: 1, order: 1, actions: 'r- D- r+' },
                                    { group: 2, order: 2, actions: 'U+' },
                                    { group: 1, order: 1, actions: 'r- D+ r+' },
                                    { group: 3, order: 2, actions: 'U- r+ U+ r-' },
                                ],
                            },
                        },
                    ],
                },
                {
                    topic: 'S',
                    content: `模式：。<br />该大类包含「」、「」、「」、「」、「」、「」共6个具体构型。`,
                    children:
                    [
                        {
                            topic: '左竿',
                            topic_comment: 'S-LeftPole',
                            id: 'CMLL_Case:S-LeftPole',
                            content: `顶角块呈「」模式。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d-corners',
                                    schema:
                                    [
                                        ' Y b ',
                                        'rG rY',
                                        '     ',
                                        'Yo Yb',
                                        ' G o ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    { group: 1, order: 1, actions: 'U+' },
                                    { group: 2, order: 1, actions: 'R+ U+ R- U+ R+ U+ U+ R-' },
                                ],
                            },
                        },
                        {
                            topic: '右竿',
                            topic_comment: 'S-RightPole',
                            id: 'CMLL_Case:S-RightPole',
                            content: `顶角块呈「」模式。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d-corners',
                                    schema:
                                    [
                                        ' Y o ',
                                        'go BY',
                                        '     ',
                                        'Yg Yr',
                                        ' r B ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    { group: 1, order: 1, actions: 'U-' },
                                    { group: 2, order: 2, actions: 'R+ U+ R- U+' },
                                    { group: 3, order: 1, actions: 'R- F+ R+ F-' },
                                    { group: 4, order: 2, actions: 'R+ U+ U+ R-' },
                                ],
                            },
                        },
                        {
                            topic: '正杠',
                            topic_comment: 'S-ForwardSlash',
                            id: 'CMLL_Case:S-ForwardSlash',
                            content: `顶角块呈「」模式。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d-corners',
                                    schema:
                                    [
                                        ' Y b ',
                                        'ob RY',
                                        '     ',
                                        'Yg Yo',
                                        ' R g ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    { group: 1, order: 1, actions: 'U+' },
                                    { group: 2, order: 2, actions: 'F+' },
                                    { group: 3, order: 3, actions: 'R-' },
                                    { group: 2, order: 2, actions: 'F-' },
                                    { group: 4, order: 1, actions: 'R+ U^' },
                                    { group: 5, order: 2, actions: 'R+' },
                                    { group: 6, order: 3, actions: 'U^' },
                                    { group: 5, order: 2, actions: 'R-' },
                                ],
                            },
                        },
                        {
                            topic: '逆杠',
                            topic_comment: 'S-BackSlash',
                            id: 'CMLL_Case:S-BackSlash',
                            content: `顶角块呈「」模式。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d-corners',
                                    schema:
                                    [
                                        ' Y b ',
                                        'rG rY',
                                        '     ',
                                        'Yb Yo',
                                        ' o G ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    { group: 1, order: 1, actions: 'U+ R+ U-' },
                                    { group: 2, order: 2, actions: 'L-' },
                                    { group: 1, order: 1, actions: 'U+ R- U-' },
                                    { group: 3, order: 2, actions: 'L+' },
                                ],
                            },
                        },
                        {
                            topic: '双竿',
                            topic_comment: 'S-Poles',
                            id: 'CMLL_Case:S-Poles',
                            content: `顶角块呈「」模式。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d-corners',
                                    schema:
                                    [
                                        ' Y r ',
                                        'oB GY',
                                        '     ',
                                        'Yr Yo',
                                        ' B G ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    { group: 1, order: 1, actions: 'F+ R-' },
                                    { group: 2, order: 2, actions: 'U^' },
                                    { group: 1, order: 1, actions: 'R+ F-' },
                                    { group: 3, order: 1, actions: 'R- F+' },
                                    { group: 4, order: 2, actions: 'U^' },
                                    { group: 3, order: 1, actions: 'F- R+' },
                                ],
                            },
                        },
                        {
                            topic: '叉',
                            topic_comment: 'S-X',
                            id: 'CMLL_Case:S-X',
                            content: `顶角块呈「」模式。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d-corners',
                                    schema:
                                    [
                                        ' Y o ',
                                        'rG BY',
                                        '     ',
                                        'Yr Yo',
                                        ' B G ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    { group: 1, order: 1, actions: 'U+' },
                                    { group: 2, order: 1, actions: 'L- U^ L+ U^' },
                                    { group: 3, order: 1, actions: 'L+ F- L- F+' },
                                ],
                            },
                        },
                    ],
                },
                {
                    topic: 'AS',
                    content: `模式：。<br />该大类包含「」、「」、「」、「」、「」、「」共6个具体构型。`,
                    children:
                    [
                        {
                            topic: '左竿',
                            topic_comment: 'AS-LeftPole',
                            id: 'CMLL_Case:AS-LeftPole',
                            content: `顶角块呈「」模式。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d-corners',
                                    schema:
                                    [
                                        ' g Y ',
                                        'YR go',
                                        '     ',
                                        'bY oY',
                                        ' R b ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    { group: 1, order: 1, actions: 'R- U-' },
                                    { group: 2, order: 2, actions: 'R+ U- R- U+' },
                                    { group: 3, order: 2, actions: 'R- F+ R+ F-' },
                                    { group: 1, order: 1, actions: 'U+ R+' },
                                ],
                            },
                        },
                        {
                            topic: '右竿',
                            topic_comment: 'AS-RightPole',
                            id: 'CMLL_Case:AS-RightPole',
                            content: `顶角块呈「」模式。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d-corners',
                                    schema:
                                    [
                                        ' g Y ',
                                        'Yr Br',
                                        '     ',
                                        'gY oY',
                                        ' o B ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    { group: 1, order: 1, actions: 'U+ R- U- R+' },
                                    { group: 2, order: 1, actions: 'U- R- U^ R+' },
                                ],
                            },
                        },
                        {
                            topic: '正杠',
                            topic_comment: 'AS-ForwardSlash',
                            id: 'CMLL_Case:AS-ForwardSlash',
                            content: `顶角块呈「」模式。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d-corners',
                                    schema:
                                    [
                                        ' b Y ',
                                        'Yo Go',
                                        '     ',
                                        'rY bY',
                                        ' G r ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    { group: 1, order: 1, actions: 'U- L- U+ R+' },
                                    { group: 2, order: 1, actions: 'U- L+ U+ R-' },
                                ],
                            },
                        },
                        {
                            topic: '逆杠',
                            topic_comment: 'AS-BackSlash',
                            id: 'CMLL_Case:AS-BackSlash',
                            content: `顶角块呈「」模式。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d-corners',
                                    schema:
                                    [
                                        ' b Y ',
                                        'YO br',
                                        '     ',
                                        'rY gY',
                                        ' g O ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    { group: 1, order: 1, actions: 'U-' },
                                    { group: 2, order: 1, actions: 'F- L+ F+ L-' },
                                    { group: 3, order: 1, actions: 'U^ L- U^ L+' },
                                ],
                            },
                        },
                        {
                            topic: '双竿',
                            topic_comment: 'AS-Poles',
                            id: 'CMLL_Case:AS-Poles',
                            content: `顶角块呈「」模式。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d-corners',
                                    schema:
                                    [
                                        ' b Y ',
                                        'YO Rg',
                                        '     ',
                                        'gY bY',
                                        ' O R ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    { group: 1, order: 1, actions: 'U-' },
                                    { group: 2, order: 1, actions: 'R- F+' },
                                    { group: 3, order: 2, actions: 'U^' },
                                    { group: 2, order: 1, actions: 'F- R+' },
                                    { group: 4, order: 1, actions: 'F+ R-' },
                                    { group: 5, order: 2, actions: 'U^' },
                                    { group: 4, order: 1, actions: 'R+ F-' },
                                ],
                            },
                        },
                        {
                            topic: '叉',
                            topic_comment: 'AS-X',
                            id: 'CMLL_Case:AS-X',
                            content: `顶角块呈「」模式。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d-corners',
                                    schema:
                                    [
                                        ' r Y ',
                                        'YB Go',
                                        '     ',
                                        'rY oY',
                                        ' G B ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    { group: 1, order: 1, actions: 'U-' },
                                    { group: 2, order: 1, actions: 'R+ U^' },
                                    { group: 3, order: 1, actions: 'R- U^' },
                                    { group: 4, order: 1, actions: 'R- F+ R+ F-' },
                                ],
                            },
                        },
                    ],
                },
                {
                    topic: 'L',
                    content: `模式：。<br />该大类包含「」、「」、「」、「」、「」、「」共6个具体构型。<br />我们约定，在顶面，由左上指向右下为主轴向量，由左向右为横轴向量，由上向下为竖轴向量。向量的正方向为首，负方向为尾。`,
                    children:
                    [
                        {
                            topic: '横叉',
                            topic_comment: 'L-Mirror',
                            id: 'CMLL_Case:L-Mirror',
                            content: `顶角块呈「」模式。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d-corners',
                                    schema:
                                    [
                                        ' G Y ',
                                        'oY oB',
                                        '     ',
                                        'Yr YG',
                                        ' B r ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    { group: 1, order: 1, actions: 'U^' },
                                    { group: 2, order: 2, actions: 'F+ R+ U- R-' },
                                    { group: 3, order: 1, actions: 'U-' },
                                    { group: 2, order: 2, actions: 'R+ U+ R- F-' },
                                ],
                            },
                        },
                        {
                            topic: '竖叉',
                            topic_comment: 'L-Inverse',
                            id: 'CMLL_Case:L-Inverse',
                            content: `顶角块呈「」模式。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d-corners',
                                    schema:
                                    [
                                        ' g Y ',
                                        'OY bR',
                                        '     ',
                                        'Yg Yb',
                                        ' R O ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    { group: 1, order: 1, actions: 'U^' },
                                    { group: 2, order: 1, actions: 'F+ R- F- R+' },
                                    { group: 3, order: 1, actions: 'U+ R+ U- R-' },
                                ],
                            },
                        },
                        {
                            topic: '尾夹',
                            topic_comment: 'L-Pure',
                            id: 'CMLL_Case:L-Pure',
                            content: `顶角块呈「」模式。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d-corners',
                                    schema:
                                    [
                                        ' B Y ',
                                        'RY oB',
                                        '     ',
                                        'Yg Yo',
                                        ' R g ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    { group: 1, order: 1, actions: 'R+ U^' },
                                    { group: 2, order: 1, actions: 'R- U- R+ U+' },
                                    { group: 3, order: 1, actions: 'R- U- R+ U+' },
                                    { group: 4, order: 1, actions: 'R- U- R+ U+' },
                                    { group: 5, order: 1, actions: 'U+ R+' },
                                ],
                            },
                        },
                        {
                            topic: '首叉',
                            topic_comment: 'L-Diagonal',
                            id: 'CMLL_Case:L-Diagonal',
                            content: `顶角块呈「」模式。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d-corners',
                                    schema:
                                    [
                                        ' o Y ',
                                        'bY bR',
                                        '     ',
                                        'Yo YG',
                                        ' G R ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    { group: 1, order: 1, actions: 'R- U- R+ U+' },
                                    { group: 2, order: 2, actions: 'R- F- R+ U+' },
                                    { group: 3, order: 3, actions: 'R-' },
                                    { group: 2, order: 2, actions: 'U- R- F+ R+' },
                                    { group: 3, order: 3, actions: 'R+' },
                                ],
                            },
                        },
                        {
                            topic: '横夹',
                            topic_comment: 'L-FrontCommutator',
                            id: 'CMLL_Case:L-FrontCommutator',
                            content: `顶角块呈「」模式。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d-corners',
                                    schema:
                                    [
                                        ' O Y ',
                                        'bY gO',
                                        '     ',
                                        'Yg YR',
                                        ' R b ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    { group: 1, order: 1, actions: 'U+' },
                                    { group: 2, order: 1, actions: 'U+ R+ U^ R+' },
                                    { group: 3, order: 2, actions: 'D+ R-' },
                                    { group: 4, order: 1, actions: 'U^' },
                                    { group: 3, order: 2, actions: 'R+ D-' },
                                    { group: 5, order: 1, actions: 'R^' },
                                ],
                            },
                        },
                        {
                            topic: '竖夹',
                            topic_comment: 'L-BackCommutator',
                            id: 'CMLL_Case:L-BackCommutator',
                            content: `顶角块呈「」模式。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d-corners',
                                    schema:
                                    [
                                        ' r Y ',
                                        'GY oB',
                                        '     ',
                                        'Yo Yr',
                                        ' G B ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    { group: 1, order: 1, actions: 'U+ R- U^ R-' },
                                    { group: 2, order: 2, actions: 'D- R+' },
                                    { group: 3, order: 1, actions: 'U^' },
                                    { group: 2, order: 2, actions: 'R- D+' },
                                    { group: 4, order: 1, actions: 'R^' },
                                ],
                            },
                        },
                    ],
                },
            ],
        },
        {
            topic: 'LSE（新手方法）',
            topic_comment: 'Last 6 Edges, 最后6棱',
            content: `
                这一步其实并不依赖具体公式，而是非常直觉性的。
                <br /><br />
                最原教旨的桥式法，是先还原所有中心块与棱块的色向，然后还原顶面左棱和顶面右棱，最后还原M层棱。
                <br /><br />
                对于新手，更容易（尽管并不效率）的方法是
                <br />
                    &emsp;&emsp;1、还原F、B中心块<br />
                    &emsp;&emsp;2、还原DF、DB棱块<br />
                    &emsp;&emsp;3、还原全部顶层色向<br />
                    &emsp;&emsp;4、还原全部顶层排列<br />
            `.replace(/^    /gm, ''),
            children:
            [
                {
                    topic: '还原F、B中心块',
                    content: '。。。',
                },
                {
                    topic: '还原DF、DB棱块',
                    content: `
                        通过 {M, M'} U* {M', M} 还原底层DF、DB棱块。
                    `.replace(/^    /gm, ''),
                },
                {
                    topic: '还原全部顶层色向',
                    content: `
                        如果顶面存在「一组邻棱已翻仰」或「一组对棱已翻仰」的情况，执行翻棱公式。
                        <br />
                        如果不存在这两种情形，执行任一翻棱公式以进入这二者可翻棱情形。
                    `.replace(/^    /gm, ''),
                    children:
                    [
                        {
                            topic: '存在一组邻棱色向正确',
                            content: `
                                将这组邻棱构成的角摆向左前方，执行公式。
                            `,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d',
                                    schema:
                                    [
                                        '     ',
                                        ' y y ',
                                        ' Y   ',
                                        ' yYy ',
                                        '     ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    { group: 1, order: 1, actions: 'M-' },
                                    { group: 2, order: 2, actions: 'U-' },
                                    { group: 3, order: 1, actions: 'M+' },
                                    { group: 4, order: 2, actions: 'U^' },
                                    { group: 3, order: 1, actions: 'M-' },
                                    { group: 5, order: 2, actions: 'U-' },
                                    { group: 1, order: 1, actions: 'M+' },
                                ],
                            },
                        },
                        {
                            topic: '存在一组对棱色向正确',
                            content: `
                                将这组对棱左右横置，执行公式。
                            `,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d',
                                    schema:
                                    [
                                        '     ',
                                        ' y y ',
                                        ' Y Y ',
                                        ' y y ',
                                        '     ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    { group: 1, order: 1, actions: 'R+' },
                                    { group: 2, order: 2, actions: 'U+ R- U-' },
                                    { group: 3, order: 1, actions: 'M-' },
                                    { group: 2, order: 2, actions: 'U+ R+ U-' },
                                    { group: 4, order: 1, actions: 'r-' },
                                ],
                            },
                        },
                    ],
                },
                {
                    topic: '还原全部顶层排列',
                    content: `
                        到这一步，顶层只会存在四种排列模式：「Ua」、「Ub」、「Z」、「H」，对应每种模式分别执行公式。
                    `.replace(/^    /gm, ''),
                    children:
                    [
                        {
                            topic: 'Ua',
                            content: `靠前侧的三棱逆时针交换。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d',
                                    schema:
                                    [
                                        '     ',
                                        ' YYY ',
                                        ' YYY ',
                                        ' YYY ',
                                        '     ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    { group: 1, order: 1, actions: 'M^' },
                                    { group: 2, order: 2, actions: 'U+' },
                                    { group: 3, order: 1, actions: 'M+' },
                                    { group: 4, order: 2, actions: 'U^' },
                                    { group: 3, order: 1, actions: 'M-' },
                                    { group: 5, order: 2, actions: 'U+' },
                                    { group: 1, order: 1, actions: 'M^' },
                                ],
                            },
                        },
                        {
                            topic: 'Ub',
                            content: `靠前侧的三棱顺时针交换。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d',
                                    schema:
                                    [
                                        '     ',
                                        ' YYY ',
                                        ' YYY ',
                                        ' YYY ',
                                        '     ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    { group: 1, order: 1, actions: 'M^' },
                                    { group: 2, order: 2, actions: 'U-' },
                                    { group: 3, order: 1, actions: 'M+' },
                                    { group: 4, order: 2, actions: 'U^' },
                                    { group: 3, order: 1, actions: 'M-' },
                                    { group: 5, order: 2, actions: 'U-' },
                                    { group: 1, order: 1, actions: 'M^' },
                                ],
                            },
                        },
                        {
                            topic: 'Z',
                            content: `左下、右上的两组对棱双双交换。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d',
                                    schema:
                                    [
                                        '     ',
                                        ' YYY ',
                                        ' YYY ',
                                        ' YYY ',
                                        '     ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    { group: 1, order: 1, actions: 'M^ U+' },
                                    { group: 2, order: 1, actions: 'M^ U+' },
                                    { group: 3, order: 2, actions: 'M- U^' },
                                    { group: 4, order: 1, actions: 'M^' },
                                    { group: 3, order: 2, actions: 'U^ M+' },
                                ],
                            },
                        },
                        {
                            topic: 'H',
                            content: `对棱交换。`,
                            analysis:
                            {
                                figure_config:
                                {
                                    type: '2d',
                                    schema:
                                    [
                                        '     ',
                                        ' YYY ',
                                        ' YYY ',
                                        ' YYY ',
                                        '     ',
                                    ],
                                },
                                algorithm_pattern:
                                [
                                    { group: 1, order: 1, actions: 'M^' },
                                    { group: 2, order: 2, actions: 'U-' },
                                    { group: 3, order: 1, actions: 'M^' },
                                    { group: 4, order: 2, actions: 'U^' },
                                    { group: 3, order: 1, actions: 'M^' },
                                    { group: 5, order: 2, actions: 'U-' },
                                    { group: 1, order: 1, actions: 'M^' },
                                ],
                            },
                        },
                    ],
                },
            ],
        },
    ],
}


export default content_schema