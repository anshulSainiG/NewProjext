import React from 'react';
import Expandable from '../../components/tutorial';
import {data1} from '../../data/data';
import {View} from 'react-native';

const Onboarding = () => {
  return (
    <View>
      <Expandable data={data1} />
    </View>
  );
};
export default Onboarding;
