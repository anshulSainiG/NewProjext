import React from 'react';
import {FlatList, Text} from 'react-native';
import {View} from 'react-native';

import Render from '../render';
import {styles} from './style';

type Item = {
  id: string;
  image: string;
  heading: string;
  description: string;
};

type Props = {
  data: Item[];
};

const Expandable: React.FC<Props> = ({data}) => {
  const renderItem = ({item}: {item: Item}) => {
    return <Render item={item} />;
  };

  return (
    <View style={styles.viewContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.mainHeading}>Tutorial</Text>
      </View>
      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default Expandable;
