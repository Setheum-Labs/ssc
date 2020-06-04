// SPDX-License-Identifier: Apache-2

import React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
}

function UserAdd ({ className }: Props): React.ReactElement<Props> {
  return (
    <div className={className}>
      AddUser (TODO)
    </div>
  );
}

export default React.memo(styled(UserAdd)``);