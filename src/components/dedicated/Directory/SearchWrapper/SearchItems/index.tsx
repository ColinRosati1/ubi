import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import styles from './SearchItems.module.scss';
import { ActionType, Ubi } from 'store/actions';
import { sortLogic } from './sortLogic';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(5),
  },
}));

const averageIncome = (from: number, to: number | undefined): number => {
  if (to === undefined) {
    return from;
  }
  return from + to / 2;
};

const SearchItems: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const ubi: Ubi[] = useSelector(state => state.ubiList);
  let filtered: Ubi[] = [];

  const handleChange = (event: React.ChangeEvent<{ value: undefined }>): void => {
    filtered = sortLogic(event.target.value, ubi);
    dispatch({ type: ActionType.ubiFilter, payload: filtered });
  };

  return (
    <div className={styles.wrapper}>
      <FormControl className={classes.formControl}>
        <InputLabel>Sort</InputLabel>
        <Select native onChange={handleChange}>
          <option aria-label="None" value="" />
          <option value={'Location'}>Location</option>
          <option value={'Length'}>Length</option>
          <option value={'Income'}>Income</option>
          <option value={'Active'}>Active</option>
        </Select>
      </FormControl>
      <Button variant="outlined" style={{ marginTop: '1rem' }}>
        Search
      </Button>
    </div>
  );
};

export default SearchItems;
