import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Select,
  Input,
} from "@chakra-ui/react"
import style from "../../styles/components/searchBox.module.scss"

export default function SearchBox({
  category,
  categoryChange,
  categoryOption,
  setKeyword,
  renderingData,
  PER_PAGE,
}) {
  // Keyword Filter

  const KeywordChange = (e) => {
    setKeyword(e.target.value)
  }

  return (
    <Box className={style.wrap}>
      <Text fontSize='lg' fontWeight='bold'>
        SEARCH
      </Text>
      <Text mb='2rem'>
        Category:&nbsp;{category}｜Display:&nbsp;
        {renderingData.length > PER_PAGE ? PER_PAGE : renderingData.length}/
        {renderingData.length}
      </Text>

      <FormControl mb='1rem'>
        <FormLabel>Category</FormLabel>
        <Select onChange={(e) => categoryChange(e)}>
          {categoryOption.map((val, i) => (
            <option value={i} key={i}>
              {val}
            </option>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Keyword</FormLabel>
        <Input placeholder='search-text' onChange={(e) => KeywordChange(e)} />
      </FormControl>
    </Box>
  )
}
