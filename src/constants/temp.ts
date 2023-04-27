[
    {
        topic: 'Pi',
        content: `模式：顶面存在0个已翻仰的顶色块，四个顶色向内射出的射线构成一个顺90度旋转躺倒的 π 形。<br />该大类包含「右列」、「左列」、「正斜」、「反斜」、「双列」、「叉」共6个具体构型。`,
        children:
        [
            {
                topic: '右列',
                topic_comment: 'Pi-RightColumn',
                content: `顶角块呈「右列」模式。`,
                analysis:
                {
                    figure_config:
                    {
                        type: '2d-corners',
                        schema:
                        [
                            ' r*Y ',
                            'Yb*Ob',
                            '*****',
                            'Yg*Og',
                            ' r*Y ',
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
                content: `顶角块呈「左列」模式。`,
                analysis:
                {
                    figure_config:
                    {
                        type: '2d-corners',
                        schema:
                        [
                            ' r*Y ',
                            'YB*rg',
                            '*****',
                            'YB*og',
                            ' o*Y ',
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
                content: `顶角块呈「正斜」模式。`,
                analysis:
                {
                    figure_config:
                    {
                        type: '2d-corners',
                        schema:
                        [
                            ' g*Y ',
                            'Yr*Br',
                            '*****',
                            'YB*og',
                            ' o*Y ',
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
                content: `顶角块呈「反斜」模式。`,
                analysis:
                {
                    figure_config:
                    {
                        type: '2d-corners',
                        schema:
                        [
                            ' g*Y ',
                            'YR*go',
                            '*****',
                            'Yb*Rb',
                            ' o*Y ',
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
                content: `顶角块呈「叉」模式。`,
                analysis:
                {
                    figure_config:
                    {
                        type: '2d-corners',
                        schema:
                        [
                            ' b*Y ',
                            'YO*Rg',
                            '*****',
                            'YR*Og',
                            ' b*Y ',
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
                content: `顶角块呈「双列」模式。`,
                analysis:
                {
                    figure_config:
                    {
                        type: '2d-corners',
                        schema:
                        [
                            ' b*Y ',
                            'YO*Rg',
                            '*****',
                            'YO*Rb',
                            ' g*Y ',
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
        content: `模式：顶面存在2个已翻仰的顶色块位于前侧，剩余2个顶色位于后侧，朝向后侧。<br />该大类包含「正杠」、「反杠」、「前条」、「后条」、「双行」、「叉」共6个具体构型。`,
        children:
        [
            {
                topic: '正杠',
                topic_comment: 'U-ForwardSlash',
                content: `顶角块呈「正杠」模式。`,
                analysis:
                {
                    figure_config:
                    {
                        type: '2d-corners',
                        schema:
                        [
                            ' Y*Y ',
                            'rg*Ob',
                            '*****',
                            'gY*Yr',
                            ' O*b ',
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
                content: `顶角块呈「反杠」模式。`,
                analysis:
                {
                    figure_config:
                    {
                        type: '2d-corners',
                        schema:
                        [
                            ' Y*Y ',
                            'gO*br',
                            '*****',
                            'rY*Yb',
                            ' g*O ',
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
                content: `顶角块呈「前条」模式。`,
                analysis:
                {
                    figure_config:
                    {
                        type: '2d-corners',
                        schema:
                        [
                            ' Y*Y ',
                            'br*ob',
                            '*****',
                            'rY*Yo',
                            ' g*g ',
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
                content: `顶角块呈「后条」模式。`,
                analysis:
                {
                    figure_config:
                    {
                        type: '2d-corners',
                        schema:
                        [
                            ' Y*Y ',
                            'gO*Ob',
                            '*****',
                            'rY*Yr',
                            ' g*b ',
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
                content: `顶角块呈「双行」模式。`,
                analysis:
                {
                    figure_config:
                    {
                        type: '2d-corners',
                        schema:
                        [
                            ' Y*Y ',
                            'oB*Br',
                            '*****',
                            'rY*Yo',
                            ' G*G ',
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
                content: `顶角块呈「叉」模式。`,
                analysis:
                {
                    figure_config:
                    {
                        type: '2d-corners',
                        schema:
                        [
                            ' Y*Y ',
                            'bR*Ob',
                            '*****',
                            'gY*Yg',
                            ' O*R ',
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
        content: `模式：顶面存在2个已翻仰的顶色块位于前侧，剩余2个顶色位于后侧，朝向左右两侧。<br />该大类包含「左杠」、「右杠」、「双行」、「双竿」、「前行」、「后行」共6个具体构型。`,
        children:
        [
            {
                topic: '左竿',
                topic_comment: 'T-LeftPole',
                content: `顶角块呈「左竿」模式。`,
                analysis:
                {
                    figure_config:
                    {
                        type: '2d-corners',
                        schema:
                        [
                            ' b*r ',
                            'YO*gY',
                            '*****',
                            'gY*Yr',
                            ' O*b ',
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
                content: `顶角块呈「右竿」模式。`,
                analysis:
                {
                    figure_config:
                    {
                        type: '2d-corners',
                        schema:
                        [
                            ' o*b ',
                            'Yg*RY',
                            '*****',
                            'oY*Yg',
                            ' b*R ',
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
                content: `顶角块呈「双行」模式。`,
                analysis:
                {
                    figure_config:
                    {
                        type: '2d-corners',
                        schema:
                        [
                            ' g*b ',
                            'YR*RY',
                            '*****',
                            'gY*Yb',
                            ' O*O ',
                        ],
                    },
                    algorithm_pattern:
                    [
                        { group: 1, order: 1, actions: 'F+ R- F+ R-' },
                        { group: 2, order: 1, actions: 'R- U- R- U-' },
                        { group: 3, order: 2, actions: 'R+' },
                        { group: 4, order: 4, actions: 'U+' },
                        { group: 3, order: 2, actions: 'R-' },
                        { group: 6, order: 1, actions: 'F^' },
                    ],
                },
            },
            {
                topic: '双竿',
                topic_comment: 'T-Poles',
                content: `顶角块呈「双竿」模式。`,
                analysis:
                {
                    figure_config:
                    {
                        type: '2d-corners',
                        schema:
                        [
                            ' b*b ',
                            'YO*RY',
                            '*****',
                            'gY*Yg',
                            ' O*R ',
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
                content: `顶角块呈「前行」模式。`,
                analysis:
                {
                    figure_config:
                    {
                        type: '2d-corners',
                        schema:
                        [
                            ' g*g ',
                            'Yr*oY',
                            '*****',
                            'oY*Yr',
                            ' b*b ',
                        ],
                    },
                    algorithm_pattern:
                    [
                        { group: 1, order: 1, actions: 'r-' },
                        { group: 2, order: 2, actions: 'U+' },
                        { group: 1, order: 1, actions: 'r-' },
                        { group: 3, order: 2, actions: 'U^ R^' },
                        { group: 4, order: 2, actions: 'F+ R+ F- R+' },
                    ],
                },
            },
            {
                topic: '后行',
                topic_comment: 'T-BackRow',
                content: `顶角块呈「后行」模式。`,
                analysis:
                {
                    figure_config:
                    {
                        type: '2d-corners',
                        schema:
                        [
                            ' o*r ',
                            'YG*GY',
                            '*****',
                            'bY*Yb',
                            ' r*o ',
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
                content: `顶角块呈「」模式。`,
                analysis:
                {
                    figure_config:
                    {
                        type: '2d-corners',
                        schema:
                        [
                            ' Y*b ',
                            'rG*rY',
                            '*****',
                            'Yo*Yb',
                            ' G*o ',
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
                content: `顶角块呈「」模式。`,
                analysis:
                {
                    figure_config:
                    {
                        type: '2d-corners',
                        schema:
                        [
                            ' Y*o ',
                            'go*BY',
                            '*****',
                            'Yg*Yr',
                            ' r*B ',
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
                content: `顶角块呈「」模式。`,
                analysis:
                {
                    figure_config:
                    {
                        type: '2d-corners',
                        schema:
                        [
                            ' Y*b ',
                            'ob*RY',
                            '*****',
                            'Yg*Yo',
                            ' R*g ',
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
                content: `顶角块呈「」模式。`,
                analysis:
                {
                    figure_config:
                    {
                        type: '2d-corners',
                        schema:
                        [
                            ' Y*b ',
                            'rG*rY',
                            '*****',
                            'Yb*Yo',
                            ' o*G ',
                        ],
                    },
                    algorithm_pattern:
                    [
                        { group: 1, order: 1, actions: '' },
                        { group: 2, order: 2, actions: '' },
                        { group: 3, order: 3, actions: '' },
                        { group: 4, order: 4, actions: '' },
                        { group: 3, order: 3, actions: '' },
                        { group: 2, order: 2, actions: '' },
                        { group: 1, order: 1, actions: '' },
                    ],
                },
            },
            {
                topic: '双竿',
                topic_comment: 'S-Poles',
                content: `顶角块呈「」模式。`,
                analysis:
                {
                    figure_config:
                    {
                        type: '2d-corners',
                        schema:
                        [
                            ' Y*r ',
                            'oB*GY',
                            '*****',
                            'Yr*Yo',
                            ' B*G ',
                        ],
                    },
                    algorithm_pattern:
                    [
                        { group: 1, order: 1, actions: '' },
                        { group: 2, order: 2, actions: '' },
                        { group: 3, order: 3, actions: '' },
                        { group: 4, order: 4, actions: '' },
                        { group: 3, order: 3, actions: '' },
                        { group: 2, order: 2, actions: '' },
                        { group: 1, order: 1, actions: '' },
                    ],
                },
            },
            {
                topic: '叉',
                topic_comment: 'S-X',
                content: `顶角块呈「」模式。`,
                analysis:
                {
                    figure_config:
                    {
                        type: '2d-corners',
                        schema:
                        [
                            ' Y*o ',
                            'rG*BY',
                            '*****',
                            'Yr*Yo',
                            ' B*G ',
                        ],
                    },
                    algorithm_pattern:
                    [
                        { group: 1, order: 1, actions: '' },
                        { group: 2, order: 2, actions: '' },
                        { group: 3, order: 3, actions: '' },
                        { group: 4, order: 4, actions: '' },
                        { group: 3, order: 3, actions: '' },
                        { group: 2, order: 2, actions: '' },
                        { group: 1, order: 1, actions: '' },
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
                topic: '右竿',
                topic_comment: 'AS-RightPole',
                content: `顶角块呈「」模式。`,
                analysis:
                {
                    figure_config:
                    {
                        type: '2d-corners',
                        schema:
                        [
                            ' g*Y ',
                            'Yr*Br',
                            '*****',
                            'gY*oY',
                            ' o*B ',
                        ],
                    },
                    algorithm_pattern:
                    [
                        { group: 1, order: 1, actions: '' },
                        { group: 2, order: 2, actions: '' },
                        { group: 3, order: 3, actions: '' },
                        { group: 4, order: 4, actions: '' },
                        { group: 3, order: 3, actions: '' },
                        { group: 2, order: 2, actions: '' },
                        { group: 1, order: 1, actions: '' },
                    ],
                },
            },
            {
                topic: '左竿',
                topic_comment: 'AS-LeftPole',
                content: `顶角块呈「」模式。`,
                analysis:
                {
                    figure_config:
                    {
                        type: '2d-corners',
                        schema:
                        [
                            ' g*Y ',
                            'YR*go',
                            '*****',
                            'bY*oY',
                            ' R*b ',
                        ],
                    },
                    algorithm_pattern:
                    [
                        { group: 1, order: 1, actions: '' },
                        { group: 2, order: 2, actions: '' },
                        { group: 3, order: 3, actions: '' },
                        { group: 4, order: 4, actions: '' },
                        { group: 3, order: 3, actions: '' },
                        { group: 2, order: 2, actions: '' },
                        { group: 1, order: 1, actions: '' },
                    ],
                },
            },
            {
                topic: '正杠',
                topic_comment: 'AS-ForwardSlash',
                content: `顶角块呈「」模式。`,
                analysis:
                {
                    figure_config:
                    {
                        type: '2d-corners',
                        schema:
                        [
                            ' b*Y ',
                            'Yo*Go',
                            '*****',
                            'rY*bY',
                            ' G*r ',
                        ],
                    },
                    algorithm_pattern:
                    [
                        { group: 1, order: 1, actions: '' },
                        { group: 2, order: 2, actions: '' },
                        { group: 3, order: 3, actions: '' },
                        { group: 4, order: 4, actions: '' },
                        { group: 3, order: 3, actions: '' },
                        { group: 2, order: 2, actions: '' },
                        { group: 1, order: 1, actions: '' },
                    ],
                },
            },
            {
                topic: '逆杠',
                topic_comment: 'AS-BackSlash',
                content: `顶角块呈「」模式。`,
                analysis:
                {
                    figure_config:
                    {
                        type: '2d-corners',
                        schema:
                        [
                            ' b*Y ',
                            'YO*br',
                            '*****',
                            'rY*gY',
                            ' g*O ',
                        ],
                    },
                    algorithm_pattern:
                    [
                        { group: 1, order: 1, actions: '' },
                        { group: 2, order: 2, actions: '' },
                        { group: 3, order: 3, actions: '' },
                        { group: 4, order: 4, actions: '' },
                        { group: 3, order: 3, actions: '' },
                        { group: 2, order: 2, actions: '' },
                        { group: 1, order: 1, actions: '' },
                    ],
                },
            },
            {
                topic: '双竿',
                topic_comment: 'AS-Poles',
                content: `顶角块呈「」模式。`,
                analysis:
                {
                    figure_config:
                    {
                        type: '2d-corners',
                        schema:
                        [
                            ' b*Y ',
                            'YO*Rg',
                            '*****',
                            'gY*bY',
                            ' O*R ',
                        ],
                    },
                    algorithm_pattern:
                    [
                        { group: 1, order: 1, actions: '' },
                        { group: 2, order: 2, actions: '' },
                        { group: 3, order: 3, actions: '' },
                        { group: 4, order: 4, actions: '' },
                        { group: 3, order: 3, actions: '' },
                        { group: 2, order: 2, actions: '' },
                        { group: 1, order: 1, actions: '' },
                    ],
                },
            },
            {
                topic: '叉',
                topic_comment: 'AS-X',
                content: `顶角块呈「」模式。`,
                analysis:
                {
                    figure_config:
                    {
                        type: '2d-corners',
                        schema:
                        [
                            ' r*Y ',
                            'YB*Go',
                            '*****',
                            'rY*oY',
                            ' G*B ',
                        ],
                    },
                    algorithm_pattern:
                    [
                        { group: 1, order: 1, actions: '' },
                        { group: 2, order: 2, actions: '' },
                        { group: 3, order: 3, actions: '' },
                        { group: 4, order: 4, actions: '' },
                        { group: 3, order: 3, actions: '' },
                        { group: 2, order: 2, actions: '' },
                        { group: 1, order: 1, actions: '' },
                    ],
                },
            },
        ],
    },
]