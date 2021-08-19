import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import { Trans } from 'react-i18next';
import { ICustomSelect } from './ICustomSelect';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
  })
);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const CustomSelect = (props: ICustomSelect) => {
  const classes = useStyles();
  const { item, items, handleChange, i18nKey } = props;

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id='custom-label'>
        <Trans i18nKey={i18nKey}></Trans>
      </InputLabel>
      <Select
        labelId='custom-label'
        id='custom-select'
        value={item}
        onChange={handleChange}
        input={<Input />}
        MenuProps={MenuProps}
      >
        {items.map(itm => (
          <MenuItem key={itm} value={itm}>
            {itm}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
