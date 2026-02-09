import { useState, useMemo } from "react"

const usePagination = ({
    total,
    pageSize = 10,
    initialPage = 1,
}) => {
    const [page, setPage] = useState(initialPage)

    const totalPages = Math.ceil(total / pageSize)

    const range = useMemo(() => {
        const start = (page - 1) * pageSize
        const end = Math.min(start + pageSize, total)

        return { start, end }
    }, [page, pageSize, total])

    return {
        page,
        setPage,
        pageSize,
        totalPages,
        range,
    }
}

export default usePagination
