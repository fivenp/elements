import React from 'react'
import Text from '@allthings/elements/atoms/Text'
import View from '@allthings/elements/atoms/View'
import Example from '../../components/Example'
import Notes from '../../components/Notes'

class TextStory extends React.Component {
  render() {
    return (
      <View>
        <Notes for={Text} />
        <Example>{`
          <Text>
            Text will be used for everywhere a text appears. The only exception
            is in molecules that already provide the text component for you.
          </Text>
        `}</Example>
        <h3>Auto Break Example</h3>
        <Example>{`
          <Text autoBreak={true}>
            Textwillbeusedforeverywhereatextappears.Theonlyexceptionisinmoleculesthatalreadyprovidethetextcomponentforyou.Textwillbeusedforeverywhereatextappears.Theonlyexceptionisinmoleculesthatalreadyprovidethetextcomponentforyou.
          </Text>
        `}</Example>
      </View>
    )
  }
}

export default TextStory
