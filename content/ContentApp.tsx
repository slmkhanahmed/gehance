import React from 'react'

import'./content.css'
import { Box, FormControl, TextInput } from '@primer/react'
export default function ContentApp() {


  return (
    <div>
      <Box as="form">
    <FormControl>
      <FormControl.Label visuallyHidden>Default label</FormControl.Label>
      <TextInput />
    </FormControl>
  </Box>
    </div>
  )
}
//https://primer.style/react/storybook/?path=/story/components-actionmenu-features--single-select&globals=colorScheme:light
//https://primer.style/react/storybook/?path=/story/components-actionmenu-examples--custom-overlay-props&globals=colorScheme:light
//https://primer.style/react/storybook/?path=/story/components-anchoredoverlay--playground&globals=colorScheme:light
//https://primer.style/react/storybook/?path=/story/components-button--default&globals=colorScheme:light
//https://primer.style/react/storybook/?path=/story/components-filteredsearch--default&globals=colorScheme:light