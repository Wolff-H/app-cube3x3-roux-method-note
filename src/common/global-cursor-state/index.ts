/**
 * 设置全局鼠标状态【笔记：这个功能在以后的版本中作为一个plugin单列出来】
 * @param cursor_state 鼠标状态：
 * - wait - 阻塞等待
 * - progress - 不阻塞等待
 * - ew-resize - 调整宽度
 * - ns-resize - 调整高度
 * - move - 移动（拖拽）磁贴
 */
function setGlobalCursorState(cursor_state: ''|'progress'|'wait'|'ew-resize'|'ns-resize'|'move' = '')
{
    // 清楚已设置的等待状态类名 //
    document.body.classList.remove(
        'o-cursor-progress',
        'o-cursor-wait',
        'o-cursor-ew-resize',
        'o-cursor-ns-resize',
        'o-cursor-move',
    )

    switch(cursor_state)
    {
        case 'progress':
            document.body.classList.add('o-cursor-progress')
            break
        case 'wait':
            document.body.classList.add('o-cursor-wait')
            break
        case 'ew-resize':
            document.body.classList.add('o-cursor-ew-resize')
            break
        case 'ns-resize':
            document.body.classList.add('o-cursor-ns-resize')
            break
        case 'move':
            document.body.classList.add('o-cursor-move')
            break
        default:
            break
    }
}

/**
 * 专门针对我写的draggable系列工具适配的hooks预设。【混入hooks功能还没写，视情况决定要不要写】
 * @param cursor_state 鼠标状态：
 * - wait - 阻塞等待
 * - progress - 不阻塞等待
 * - ew-resize - 调整宽度
 * - ns-resize - 调整高度
 * - move - 移动（拖拽）磁贴
 * @param hooks 混入的hooks对象。（setGlobalCursorState()将在用户的hook前调用）
 * @returns hooks配置对象
 */
function useGlobalCursorHooks(cursor_state: ''|'progress'|'wait'|'ew-resize'|'ns-resize'|'move' = '',
    hooks?: any
){
    switch(cursor_state)
    {
        case 'ew-resize':
            return {
                resizeStart: () => { setGlobalCursorState('ew-resize') },
                resizeEnd: () => { setGlobalCursorState() },
            }
        case 'ns-resize':
            return {
                resizeStart: () => { setGlobalCursorState('ns-resize') },
                resizeEnd: () => { setGlobalCursorState() },
            }
            
        default:
            return undefined
    }
}

export
{
    setGlobalCursorState,
    useGlobalCursorHooks,
}