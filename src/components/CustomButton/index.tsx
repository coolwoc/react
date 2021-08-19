import React from 'react';
import { Trans } from 'react-i18next';
import Button from '@material-ui/core/Button';
import { IButton } from './IButton';

const CustomButton = (props: IButton) => {
  const { i18nKey, handleClickEvent } = props;
  return (
    <Button variant='outlined' color='primary' onClick={handleClickEvent}>
      <Trans i18nKey={i18nKey}>{i18nKey}</Trans>
    </Button>
  );
};

export default CustomButton;
