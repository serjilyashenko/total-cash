import React from 'react';
import { Link } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Face from '@material-ui/icons/Face';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export default function Navigation() {
  const [value, setValue] = React.useState('recents');

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <BottomNavigation value={value} onChange={handleChange}>
      <BottomNavigationAction component={Link} to="/" label="Favorites" value="favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
      <BottomNavigationAction component={Link} to="/profile" label="Profile" value="profile" icon={<Face />} />
    </BottomNavigation>
  );
}
