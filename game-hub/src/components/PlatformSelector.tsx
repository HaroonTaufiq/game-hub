import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from '@chakra-ui/react'
import { Platform } from '../hooks/useGames';
import { usePlatform } from '../hooks/usePlatform';
import { BsChevronBarDown } from 'react-icons/bs';

interface Props {
    setSelectedPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}

export const PlatformSelector = ({ selectedPlatform, setSelectedPlatform }: Props) => {
    const { data, error, isLoading } = usePlatform();

    if (isLoading) {
        return <Spinner/ >;
    }

    if (error) return null; 
    
    return (
        <>
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronBarDown/>}>{selectedPlatform?.name || "Platform"}</MenuButton>
            <MenuList>
            {data?.map((platform) => (
                     <MenuItem key={platform.id} onClick={() => setSelectedPlatform(platform)} value={platform.id}>{platform.name}</MenuItem>
                ))}
            </MenuList>
            </Menu>
        </>
    )
}
