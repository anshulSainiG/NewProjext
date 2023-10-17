import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {styles} from './styles';
import ExpandableListItem from '../expandable_list_item';

type Item = {
  id: string;
  title: string;
  content: string;
};

type Props = {
  data: Item[];
};

const ExpandableList = ({data}: Props) => {
  const renderItem = ({item}: {item: Item}) => {
    return <ExpandableListItem item={item} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>FAQ</Text>
      <View style={styles.innerView}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default ExpandableList;
