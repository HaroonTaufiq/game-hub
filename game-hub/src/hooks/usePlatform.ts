import useData from "./useData";
import { Platform } from "./useGames";

export const usePlatform = () => {
    const { data, error, isLoading } = useData<Platform>("/platforms/lists/parents");

    return { data, error, isLoading };
}