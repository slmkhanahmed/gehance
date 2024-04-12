import React from 'react'

import'./content.css'
import { Box, FormControl, TextInput } from '@primer/react'
export default function ContentApp() {


  return (
    <div>
      <Box as="form">
    <FormControl>
      <FormControl.Label>Default label</FormControl.Label>
      <TextInput />
    </FormControl>
  </Box>
    </div>
  )
}
