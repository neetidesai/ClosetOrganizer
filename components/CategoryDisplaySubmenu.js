import * as React from 'react';
import { List } from 'react-native-paper';
import { View, Text, ScrollView } from 'react-native';
import AppStyles from '../styles/AppStyles';
import CategoryDisplayItem from './CategoryDisplayItem';

const CategoryDisplaySubmenu = ( title, id, items ) => {
    const [expanded, setExpanded] = React.useState(true);



  return (
        <DropDownPicker
        // style={styles.dropdown}
        open={genderOpen}
        value={genderValue} //genderValue
        items={gender}
        setOpen={setGenderOpen}
        setValue={setGenderValue}
        setItems={setGender}
        placeholder="Select Gender"
        // placeholderStyle={styles.placeholderStyles}
        onOpen={onGenderOpen}
        // onChangeValue={onChange}
        zIndex={3000}
        zIndexInverse={1000}
      />
      // <List.Accordion
      //   style={{width: 500}}
      //   title={title}
      //   id={id}>
      //   {items.map((item) => (
      //       <View>
      //           <List.Item
      //             title={item}
      //           />
      //       </View>))}
      // </List.Accordion>

      
  );
};

function renderItems(items) {
    
    const listItems = []
    
    for (itemName in {items}) {
        listItems.push(<List.Item title={itemName} />)
    }

    return listItems
    
};

export default CategoryDisplaySubmenu;