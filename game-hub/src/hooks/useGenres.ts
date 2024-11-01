// import useData from "./useData";
import genres from "../data/genres";
export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

// when getting data from the API
// export const useGenres = () => {
//     const { data, error, isLoading } = useData<Genre>("/genres");

//     return { data, error, isLoading };
// }

// when getting data from the mock data
const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;