import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { BsSearch } from "react-icons/bs"
import { useRef } from "react"

interface Props {
    onSearch: (search: string) => void;
}

export const SearchInput = ({onSearch} : Props) => {
    const ref = useRef<HTMLInputElement>(null)

  return (
    <form  onChange={e => {
        e.preventDefault();
    if (ref.current) onSearch(ref.current.value)}
    }>
        <InputGroup>
        <InputLeftElement children={<BsSearch/>}/>
        <Input ref={ref} borderRadius={20} placeholder="Search for games" variant="filled" />
        </InputGroup>
    </form>
  )
}
