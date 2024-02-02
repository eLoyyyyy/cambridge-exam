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

const useRecommendation = (score: number) => {
    const chooseRecommendation = (score) => {
        switch (true) {
            case score > 0 && score <= 40:
                return 'B2 First, C1 Advanced'
            case score > 40 && score <= 80:
                return 'B2 First for Schools'
            case score > 80 && score <= 100:
                return 'B1 Preliminary for Schools, A2 Key for Schools'
        }
    }

    return chooseRecommendation(score)
}

export {
    useGetQuestions,
    useRecommendation
}