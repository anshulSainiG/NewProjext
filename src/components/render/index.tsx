import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import React from 'react';
type Item = {
  id: string;
  image: any;
  heading: string;
  description: string;
};
type Props = {
  item: Item;
};

const Render: React.FC<Props> = ({item}) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textHeading}>
        <Text style={styles.heading}>{item.heading}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};
export default Render;
