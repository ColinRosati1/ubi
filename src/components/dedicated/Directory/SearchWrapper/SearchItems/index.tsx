import React, { FC, MouseEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styles from './SearchItems.module.scss';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SearchItems: FC = () => {
  const classes = useStyles();
  // const [age, setAge] = React.useState('EventTarget');

  const handleChange = (event: MouseEvent) => {
    console.log(event.currentTarget);
    event.preventDefault();
    // setAge(event.currentTarget);
  };

  return (
    <div className={styles.wrapper}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={'Sort'}
          type={'visible'}
          onClick={handleChange}
        >
          <MenuItem value={'Location'}>Location</MenuItem>
          <MenuItem value={'Length'}>Length</MenuItem>
          <MenuItem value={'Income'}>Income</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SearchItems;
