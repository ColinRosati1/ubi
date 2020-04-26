import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import classnames from 'classnames';

import styles from './SearchItems.module.scss';
import { ActionType } from 'store/actions';
import { sortLogic } from './sortLogic';
import { Ubi } from 'types';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
    '& :hover': {
      // borderBottom: '1px solid red',
    },
  },

  selector: {
    '& :after': {
      borderBottom: '1px solid red',
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(5),
  },
}));

const SearchItems: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const ubi: Ubi[] = useSelector(state => state.ubiList);
  const [direction, setDirection] = useState(false);
  let filtered: Ubi[] = [];

  const ascDes = direction ? 'Ascending' : 'Descending';

  const handleChange = (event: React.ChangeEvent<{ value: undefined }>): void => {
    setDirection(true);
    filtered = sortLogic(event.target.value, ubi, direction);
    dispatch({ type: ActionType.ubiFilter, payload: filtered });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.formWrapper}>
        <FormControl className={styles.formControl}>
          <InputLabel>Sort</InputLabel>
          <Select native onChange={handleChange} className={classes.selector}>
            <option aria-label="None" value="" />
            <option value={'Location'}>Location</option>
            <option value={'Length'}>Length</option>
            <option value={'Income'}>Income</option>
            <option value={'Active'}>Active</option>
          </Select>
        </FormControl>
        <Button variant="outlined" style={{ marginTop: 'calc(1rem - 5px)', marginLeft: '1rem' }}>
          {ascDes}
        </Button>
      </div>
      <p>Sort Universal Basic income</p>
    </div>
  );
};

export default SearchItems;
