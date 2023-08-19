import * as React from 'react';
import { List } from 'react-native-paper';

const CategoryDisplayItem = ( props ) => (
  <List.Item
    title={props.title}
    description={props.description}
    left={props => <List.Icon {...props} icon={props.icon} />}
  />
);

export default CategoryDisplayItem;