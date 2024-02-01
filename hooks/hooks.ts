import { useQuery } from "react-query"

const useGetQuestions = () => {
    const fetchQuestions = async () => {
        const result = await fetch('/api/questions', {
            method: 'GET'
        })
            .then(res => res.json())

        return result
    }

    return useQuery(['fetch-questions'], () => fetchQuestions())
}

export {
    useGetQuestions,
}