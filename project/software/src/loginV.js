export function ee(e)
{
    const pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[a-zA-Z]{2,}$"
    return e.match(pattern)
}