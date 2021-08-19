import { Box, makeStyles } from '@material-ui/core';
import CustomButton from '../CustomButton';
import { ICount } from './ICount';
import './index.scss';

const style = makeStyles({
  intro: {
    fontSize: '100px',
    margin: '0px',
    padding: '0px',
  },
});

const Counter = (props: ICount) => {
  const classes = style();
  const { onIncrement, onDecrement, onReset, value } = props;
  return (
    <>
      <Box display='flex' justifyContent='center'>
        <p className={classes.intro}>{value}</p>
      </Box>
      <Box display='flex' justifyContent='center'>
        <Box mr={2} display='inline'>
          <CustomButton i18nKey='counter.increment' handleClickEvent={onIncrement} />
        </Box>
        <Box mr={2} display='inline'>
          <CustomButton i18nKey='counter.reset' handleClickEvent={onReset} />
        </Box>
        <Box display='inline'>
          <CustomButton i18nKey='counter.decrement' handleClickEvent={onDecrement} />
        </Box>
      </Box>
    </>
  );
};

export default Counter;
