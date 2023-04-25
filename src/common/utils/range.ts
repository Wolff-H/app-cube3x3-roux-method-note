function* range(start: number, stop?: number, step: number = 1)
{
    if(stop === undefined)
    {
        stop = start
        start = 0
    }

    for(let i = start; step > 0 ? i < stop : i > stop; i += step)
    {
        yield i
    }
}

function rangeArray(stop: number): number[]
function rangeArray(start: number, stop: number): number[]
function rangeArray(start: number, stop: number, step: number): number[]
function rangeArray(start: number, stop?: number, step: number = 1): number[]
{
    const range_array: number[] = []

    for(const i of range(start, stop, step))
    {
        range_array.push(i)
    }

    return range_array
}



export default range

export
{
    range,
    rangeArray,
}