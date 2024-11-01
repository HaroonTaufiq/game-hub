import useData from "./useData";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

export const useGenres = () => {
    const { data, error, isLoading } = useData<Genre>("/genres");

    return { data, error, isLoading };
}