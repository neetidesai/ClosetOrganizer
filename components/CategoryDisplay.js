import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import CategoryDisplayItem from './CategoryDisplayItem';
import CategoryDisplaySubmenu from './CategoryDisplaySubmenu';
import DropDownPicker from "react-native-dropdown-picker";
import AppStyles from '../styles/AppStyles';

const CategoryDisplay = ( {navigation, title, items, zIndex} ) => {
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
        // style={AppStyles.categorizeDropdown}
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
        zIndex={zIndex}
        zIndexInverse={1000}
      />
      )} 

function renderItems(items) {
    
  const listItems = []
  
  for (idx in items) {
    console.log(idx)
    console.log(items[idx])

    for (sublistIdx in items[idx]) {
      if (sublistIdx == 0) {
        listItems.push({label: items[idx][sublistIdx], value: items[idx][sublistIdx]})

      } else {
        listItems.push({label: items[idx][sublistIdx], value: items[idx][sublistIdx], parent: items[idx][0]})
      }
    }  
  }

  return listItems
  
};

export default CategoryDisplay;