import useData from "./useData";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}


export const useGames = () => {
    const { data,error, isLoading } = useData<Game>("/games");

    return { data, error, isLoading };
}