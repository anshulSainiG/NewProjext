import {ScrollView, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';

const Second = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>About Us</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.description}>
            Lorem ipsum is the filler text that typically demonstrates the font
            and style of a text in a document or visual demonstration. It serves
            as a place holder indicating where the text will be in the final
            iteration. Originally from Latin, Lorem ipsum has no intelligible
            meaning. It is simply a display of letters to be viewed as a sample
            with given graphical elements in a file. "Lipsum" a (portmanteau of
            lorem and ipsum) generators are commonly used to form generic text
            in a file. The words are adequately like normal text to demonstrate
            a font, without distracting the reader with its content. It has been
            used by printers as placeholder text since the 16th century. Richard
            McClintock discovered the origins of the words Lorem Ipsum back in
            1982, who published his findings in 1994 in a letter to the editor
            of Before & After magazine who wrongly claimed that the passage had
            no meaning. In fact, it originates from a treatise on the theory of
            ethics written by Cicero in 45 BC: "de Finibus Bonorum et Malorum"
            font, without distracting the reader with its content. It has been
            used by printers as placeholder text since the 16th century. Richard
            McClintock discovered the origins of the words Lorem Ipsum back in
            1982, who published his findings in 1994 in a letter to the editor
            of Before & After magazine who wrongly claimed that the passage had
            no meaning. In fact, it originates from a treatise on the theory of
            ethics written by Cicero in 45 BC: "de Finibus Bonorum et Malorum"
            (The Extremes of Good and Evil). 1982, who published his findings in
            1994 in a letter to the editor of Before & After magazine who
            wrongly claimed that the passage had no meaning. Lorem ipsum is the
            filler text that typically demonstrates the font and style of a text
            in a document or visual demonstration. It serves as a place holder
            indicating where the text will be in the final iteration. Originally
            from Latin, Lorem ipsum has no intelligible meaning. It is simply a
            display of letters to be viewed as a sample with given graphical
            elements in a file. "Lipsum" a (portmanteau of lorem and ipsum)
            generators are commonly used to form generic text in a file. The
            words are adequately like normal text to demonstrate a font, without
            distracting the reader with its content. It has been used by
            printers as placeholder text since the 16th century. Richard
            McClintock discovered the origins of the words Lorem Ipsum back in
            1982, who published his findings in 1994 in a letter to the editor
            of Before & After magazine who wrongly claimed that the passage had
            no meaning. In fact, it originates from a treatise on the theory of
            ethics written by Cicero in 45 BC: "de Finibus Bonorum et Malorum"
            font, without distracting the reader with its content. It has been
            used by printers as placeholder text since the 16th century. Richard
            McClintock discovered the origins of the words Lorem Ipsum back in
            1982, who published his findings in 1994 in a letter to the editor
            of Before & After magazine who wrongly claimed that the passage had
            no meaning. In fact, it originates from a treatise on the theory of
            ethics written by Cicero in 45 BC: "de Finibus Bonorum et Malorum"
            (The Extremes of Good and Evil). 1982, who published his findings in
            1994 in a letter to the editor of Before & After magazine who
            wrongly claimed that the passage had no meaning. 1994 in a letter to
            the editor of Before & After magazine who wrongly claimed that the
            passage had no meaning.
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};
export default Second;
