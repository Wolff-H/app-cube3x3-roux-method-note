export default function scrollIntoViewListened(element: HTMLElement, options?: ScrollIntoViewOptions)
{
    element.scrollIntoView(options)

    return {
        then(callback: () => any)
        {
            const intersection_observer = new IntersectionObserver((entries) => {
                const entry = entries[0]

                if (entry.isIntersecting)
                {
                    setTimeout(() => {
                        intersection_observer.unobserve(element)
                        callback()
                    });
                }
            })

            intersection_observer.observe(element)
        },
    }
}