
import React from 'react'
import {
    List,
    ListItem,
    ListIcon
} from '@chakra-ui/react';

import { NavLink } from 'react-router-dom';
import { CalendarIcon, AddIcon, AtSignIcon} from '@chakra-ui/icons';


export default class Sidebar extends React.Component {
  render() {
    return (
      <List color='white' fontSize='1.2em' spacing={4}>
        <ListItem>
            <NavLink to='/'>
                <ListIcon as={CalendarIcon} color='white'/>
                Cakes Menu
            </NavLink>
        </ListItem>
        <ListItem>
            <NavLink to='/create'>
                <ListIcon as={AddIcon} color='white'/>
                New Menu
            </NavLink>
        </ListItem>
        <ListItem>
            <NavLink to='/profile'>
            <   ListIcon as={AtSignIcon} color='white'/>
                Profile
            </NavLink>
        </ListItem>
      </List>
    )
  }
}
