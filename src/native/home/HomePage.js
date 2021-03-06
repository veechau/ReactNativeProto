// @flow
import * as themes from '../themes';
import React from 'react';
import { Platform, ScrollView } from 'react-native';
import {
  Box,
  Button,
  SwitchTheme,
  Text,
  ToggleBaseline,
} from '../../common/components';

// // An example how to style existing component.
// const StyledSlider = (props) => (
//   <Box as={Slider} {...props} />
// );
// <StyledSlider
//   maximumValue={3}
//   height={2}
// />

const HomePage = () => (
  <ScrollView>
    <Box
      paddingHorizontal={1}
      paddingTop={2}
    >
      <Text align="center" size={3}>
        Welcome to Este
      </Text>
      <Box marginVertical={1}>
        {Platform.OS === 'ios' ?
          <Text align="center">
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu.
          </Text>
        :
          <Text align="center">
            Double tap R on your keyboard to reload,{'\n'}
            Shake or press menu button for dev menu.
          </Text>
        }
      </Box>
      <Button bold color="primary">
        Text Button
      </Button>
      <Box marginBottom={1}>
        <Button primary>
          Primary
        </Button>
        <Button success>
          Success
        </Button>
      </Box>
      <SwitchTheme themes={themes} />
      <ToggleBaseline />
    </Box>
  </ScrollView>
);

export default HomePage;
