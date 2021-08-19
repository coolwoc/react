import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { IState } from './interfaces/IState';
import { incrementCount, decrementCount, resetCount } from './store/Actions';
import Counter from './components/Counter';
import CustomSelect from './components/CustomSelect';
import { Box, makeStyles } from '@material-ui/core';
import { useTranslation, Trans, I18nextProvider } from 'react-i18next';
import { Iprops } from './interfaces/IProps';
import './App.scss';

const style = makeStyles({
  heading: {
    fontSize: '20px',
    margin: '0px',
    padding: '0px',
  },
});

const App = (props: Iprops) => {
  const dispatch = useDispatch();
  const classes = style();

  const { count } = props;

  const [item, setItemCode] = useState('');
  const items = ['tr', 'es', 'en'];
  const { i18n } = useTranslation();

  const increment = () => {
    dispatch(incrementCount());
  };

  const decrement = () => {
    dispatch(decrementCount());
  };

  const reset = () => {
    dispatch(resetCount());
  };

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    let tempItem = event.target.value as string;
    setItemCode(tempItem);
    if (tempItem) {
      i18n.changeLanguage(tempItem);
    }
  };

  return (
    <I18nextProvider i18n={i18n}>
      <div className='app'>
        <Box display='flex' justifyContent='flex-end'>
          <CustomSelect
            handleChange={handleChange}
            item={item}
            items={items}
            i18nKey='intro.selectLabel'
          />
        </Box>
        <Box display='flex' justifyContent='center'>
          <h1 className={classes.heading}>
            <Trans i18nKey='intro.title'>title!</Trans>
          </h1>
        </Box>
        <Counter value={count} onIncrement={increment} onDecrement={decrement} onReset={reset} />
      </div>
    </I18nextProvider>
  );
};

const MapStateToProps = (state: any) => {
  return {
    count: state.count,
  };
};

export default connect<IState>(MapStateToProps)(App);
