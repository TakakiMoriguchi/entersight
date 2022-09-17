import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Select,
  Input
} from '@chakra-ui/react'
import style from '../../styles/components/searchBox.module.scss'
import { useState } from 'react'

export default function SearchBox() {
  // Category Filter
  const categoryOption: string[] = ['All', 'Design', 'Program(System)', 'Analysis', 'Photograph', 'Consultant', 'Others']
  const [category, setCategory] = useState<string[]>(['All'])
  const CategoryChange = (e) => {
    setCategory([categoryOption[e.target.value]])
  }
  // Keyword Filter
  const [keyword, setKeyword] = useState('')
  const KeywordChange = (e) => {
    console.log(e.target.value)
    setKeyword(e.target.value)
  }

  return (
    <Box className={style.wrap}>
      <Text
        fontSize='lg'
        fontWeight='bold'
      >
        SEARCH
      </Text>
      <Text mb='2rem'>
        Category:&nbsp;{category}｜Display:&nbsp;4/10
      </Text>

      <FormControl mb='1rem'>
        <FormLabel>Category</FormLabel>
        <Select onChange={e => CategoryChange(e)}>
          { categoryOption.map((val, i) => <option value={i} key={i}>{val}</option>) }
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Keyword</FormLabel>
        <Input
          placeholder='search-text'
          onChange={e => KeywordChange(e)}
        />
      </FormControl>

    </Box>
  )
}