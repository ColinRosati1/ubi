import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import styles from './SearchItems.module.scss';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(5),
  },
}));

const SearchItems: FC = () => {
  const classes = useStyles();
  const [filter, setFilter] = React.useState('EventTarget');
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    console.log(filter);
    setFilter(event.target.value as string);
  };

  return (
    <div className={styles.wrapper}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Sort</InputLabel>
        <Select
          native
          onChange={handleChange}
          inputProps={{
            name: 'Sort',
            id: 'age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={'Location'}>Location</option>
          <option value={'Length'}>Length</option>
          <option value={'Income'}>Income</option>
        </Select>
      </FormControl>
      <Button variant="outlined" style={{ marginTop: '1rem' }}>
        Search
      </Button>
    </div>
  );
};

export default SearchItems;
