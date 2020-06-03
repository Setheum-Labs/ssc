// SPDX-License-Identifier: MIT

import React, { useCallback } from 'react';
import styled from 'styled-components';

import { Button, ButtonRow } from '../../components';
import { usePairs } from '../../hooks';
import Balance from './Balance';
import Transactions from './Transactions';

interface Props {
  className?: string;
}

function Account ({ className }: Props): React.ReactElement<Props> | null {
  const { pair } = usePairs();

  const _onRequest = useCallback(
    (): void => {
      window.location.hash = '/request';
    },
    []
  );

  const _onSend = useCallback(
    (): void => {
      window.location.hash = '/send';
    },
    []
  );

  if (!pair) {
    return null;
  }

  const address = pair.address;

  return (
    <div className={className}>
      <ButtonRow>
        <Button
          label='Send'
          onClick={_onSend}
        />
        <Button
          label='Request'
          onClick={_onRequest}
        />
      </ButtonRow>
      <Balance address={address} />
      <Transactions address={address} />
    </div>
  );
}

export default styled(Account)``;