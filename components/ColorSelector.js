import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import DropDownPicker from "react-native-dropdown-picker";

const ColorDisplay = ( {navigation, title, items} ) => {
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    const [itemOpen, setItemOpen] = React.useState(false);
    const [itemValue, setItemValue] = React.useState(null);
    const [item, setItem] = React.useState(renderItems(items));
    const onGenderOpen = React.useCallback(() => {
        setCompanyOpen(false);
      }, []);

return ( 
        <DropDownPicker
        // style={styles.dropdown}
        open={itemOpen}
        value={itemValue} //genderValue
        items={item}
        setOpen={setItemOpen}
        setValue={setItemValue}
        setItems={setItem}
        placeholder={title}
        // placeholderStyle={styles.placeholderStyles}
        onOpen={onGenderOpen}
        // onChangeValue={onChange}
        zIndex={3000}
        zIndexInverse={1000}
      />
      )} 

function renderItems(items) {
    
  const listItems = []
  
  for (idx in items) {

    listItems.push({label: items[idx], value: items[idx]}) 
  }

  return listItems
  
};

export default ColorDisplay;