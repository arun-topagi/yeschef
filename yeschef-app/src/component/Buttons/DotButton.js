import React from 'react'
import PropTypes from 'prop-types'

// mui
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const DotButton =  ({ selected }) => {
  const theme = useTheme()
    return (
      <Box
        component={'div'}
        sx={[
          {
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            border: `1.5px solid ${theme.palette.primary.main}`,
            my: 1,
          },
          selected && { backgroundColor: theme.palette.primary.main, cursor: 'default', width: '14px',
          height: '14px', }
        ]}
      />
    );
  };

DotButton.prototype = {
  selected: PropTypes.bool.isRequired,
}

export default DotButton