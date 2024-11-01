import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from '@chakra-ui/react'
import { BsChevronBarDown } from 'react-icons/bs';

interface Props {
    onSelectedSortOrder: (sortOrder: string) => void;
     sortOrder: string;
}

export const SortSelector = ({sortOrder, onSelectedSortOrder} : Props) => {

    const sortOrders = [
        { value: "relevance", label: "Relevance" },
        { value: "-added", label: "Date Added" },
        { value: "name", label: "Name" },
        { value: "-released", label: "Release Date" },
        { value: "-metacritic", label: "Popularity" },
        { value: "-rating", label: "Average Rating" }
    ]
    
    const currentSortOrder = sortOrders.find((order) => order.value === sortOrder);

    return (
        <>
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronBarDown/>}>Order by {currentSortOrder?.label || 'Relevance'}</MenuButton>
            <MenuList>
            {sortOrders.map((order) => (
                <MenuItem key={order.value} onClick={() => 
                    onSelectedSortOrder(order.value)} value={order.value}>{order.label}</MenuItem>
            ))}
            </MenuList>
            </Menu>
        </>
    )
}
