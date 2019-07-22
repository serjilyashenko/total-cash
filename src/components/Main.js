import React from 'react';
import { useAuth0 } from '../react-auth0-wrapper';
import Loading from './Loading';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  bigAvatar: {
    margin: 10,
    width: 160,
    height: 160,
  },
});

const Profile = () => {
  const { loading, user } = useAuth0();
  const classes = useStyles();

  if (loading || !user) {
    return <Loading />;
  }

  return (
    <>
      <Grid container justify="center" alignItems="center">
        <Avatar alt="Profile" src={'https://media.tenor.com/images/82517b1fbf01e0db1c2636319e2c6965/tenor.gif'} className={classes.bigAvatar} />
      </Grid>
    </>
  );
};

export default Profile;
