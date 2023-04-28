import { alpha, createTheme, darken } from '@mui/material';
import '@mui/lab/themeAugmentation';

const themeColors = {
  primary: '#F54746',
  secondary: '#FFF0ED',
  gold: '#FFB01D',
  success: '#57CA22',
  warning: '#FFA319',
  error: '#FF1943',
  info: '#33C2FF',
  gray: '#B2BEB5',
  black: '#000000',
  white: '#ffffff',
  trueWhite: '#DCDCE4'
};

const colors = {
  layout: {
    general: {
      bodyBg: themeColors.secondary
    },
  },
  alpha: {
    white: {
      5: alpha(themeColors.white, 0.02),
      10: alpha(themeColors.white, 0.1),
      30: alpha(themeColors.white, 0.3),
      50: alpha(themeColors.white, 0.5),
      70: alpha(themeColors.white, 0.7),
      100: themeColors.white
    },
    trueWhite: {
      5: alpha(themeColors.trueWhite, 0.02),
      10: alpha(themeColors.trueWhite, 0.1),
      30: alpha(themeColors.trueWhite, 0.3),
      50: alpha(themeColors.trueWhite, 0.5),
      70: alpha(themeColors.trueWhite, 0.7),
      100: themeColors.trueWhite
    },
    gray: {
      5: alpha(themeColors.gray, 0.02),
      10: alpha(themeColors.gray, 0.1),
      30: alpha(themeColors.gray, 0.3),
      50: alpha(themeColors.gray, 0.5),
      70: alpha(themeColors.gray, 0.7),
      100: themeColors.gray
    },
    black: {
      5: alpha(themeColors.black, 0.02),
      10: alpha(themeColors.black, 0.1),
      30: alpha(themeColors.black, 0.3),
      50: alpha(themeColors.black, 0.5),
      70: alpha(themeColors.black, 0.7),
      100: themeColors.black
    }
  },
  secondary: {
    lighter: alpha(themeColors.secondary, 0.85),
    light: alpha(themeColors.secondary, 0.85),
    main: themeColors.secondary,
    dark: darken(themeColors.secondary, 0.2)
  },
  primary: {
    lighter: alpha(themeColors.primary, 0.85),
    light: alpha(themeColors.primary, 0.3),
    main: themeColors.primary,
    dark: darken(themeColors.primary, 0.2)
  },
  gold: {
    lighter: alpha(themeColors.gold, 0.85),
    light: alpha(themeColors.gold, 0.3),
    main: themeColors.gold,
    dark: darken(themeColors.gold, 0.2)
  },
  success: {
    lighter: alpha(themeColors.success, 0.85),
    light: alpha(themeColors.success, 0.3),
    main: themeColors.success,
    dark: darken(themeColors.success, 0.2)
  },
  warning: {
    lighter: alpha(themeColors.warning, 0.85),
    light: alpha(themeColors.warning, 0.3),
    main: themeColors.warning,
    dark: darken(themeColors.warning, 0.2)
  },
  error: {
    lighter: alpha(themeColors.error, 0.85),
    light: alpha(themeColors.error, 0.3),
    main: themeColors.error,
    dark: darken(themeColors.error, 0.2)
  },
  info: {
    lighter: alpha(themeColors.info, 0.85),
    light: alpha(themeColors.info, 0.3),
    main: themeColors.info,
    dark: darken(themeColors.info, 0.2)
  }
};

const DarkSpacesTheme = createTheme({
  spacing: 4,
  palette: {
    common: {
      black: colors.alpha.black[100],
      white: colors.alpha.white[100],
      gray: colors.alpha.gray[100],
      trueWhite: colors.alpha.trueWhite[100],
      blackFn: (code) => colors.alpha.black[code],
      whiteFn: (code) => colors.alpha.white[code],
      grayFn: (code) => colors.alpha.gray[code],
      trueWhiteFn: (code) => colors.alpha.trueWhite[code]
    },
    trueWhite: {
      light: colors.alpha.trueWhite[30],
      main: colors.alpha.trueWhite[100],
      dark: colors.alpha.trueWhite[100]
    },
    white: colors.alpha.white[100],
    primary: {
      light: colors.primary.light,
      main: colors.primary.main,
      dark: colors.primary.dark
    },
    secondary: {
      light: colors.secondary.light,
      main: colors.secondary.main,
      dark: colors.secondary.dark
    },
    gold: {
      light: colors.gold.light,
      main: colors.gold.main,
      dark: colors.gold.dark
    },
    error: {
      light: colors.error.light,
      main: colors.error.main,
      dark: colors.error.dark,
      contrastText: themeColors.trueWhite
    },
    success: {
      light: colors.success.light,
      main: colors.success.main,
      dark: colors.success.dark,
      contrastText: themeColors.trueWhite
    },
    info: {
      light: colors.info.light,
      main: colors.info.main,
      dark: colors.info.dark,
      contrastText: themeColors.trueWhite
    },
    warning: {
      light: colors.warning.light,
      main: colors.warning.main,
      dark: colors.warning.dark,
      contrastText: themeColors.trueWhite
    },
    text: {
      primary: colors.primary.main,
      secondary: colors.primary.dark,
      disabled: colors.alpha.gray[50]
    },
    background: {
      paper: colors.alpha.white[100],
      default: colors.layout.general.bodyBg
    },
    action: {
      active: colors.alpha.gray[100],
      hover: colors.primary.lighter,
      hoverOpacity: 0.1,
      selected: colors.alpha.gray[10],
      selectedOpacity: 0.1,
      disabled: colors.alpha.gray[50],
      disabledBackground: colors.alpha.gray[5],
      disabledOpacity: 0.38,
      focus: colors.alpha.gray[10],
      focusOpacity: 0.05,
      activatedOpacity: 0.12
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1840
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true
      },
      styleOverrides: {
        root: {
          fontWeight: 'bold',
          textTransform: 'none',
          paddingLeft: 16,
          paddingRight: 16,
          
          '.MuiSvgIcon-root': {
            transition: 'all .2s'
          }
        },
        endIcon: {
          marginRight: -8
        },
        sizeSmall: {
          padding: '6px 16px',
          lineHeight: 1.5
        },
        sizeMedium: {
          padding: '8px 20px'
        },
        sizeLarge: {
          padding: '11px 24px'
        },
        textSizeSmall: {
          padding: '7px 12px'
        },
        textSizeMedium: {
          padding: '9px 16px'
        },
        textSizeLarge: {
          padding: '12px 16px'
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          margin: 0
        }
      }
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '& .MuiTouchRipple-root': {
            opacity: 0.3
          }
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          background: colors.alpha.gray[10],
          border: 0,
          height: 1
        },
        vertical: {
          height: 'auto',
          width: 1,

          '&.MuiDivider-flexItem.MuiDivider-fullWidth': {
            height: 'auto'
          },
          '&.MuiDivider-absolute.MuiDivider-fullWidth': {
            height: '100%'
          }
        },
        withChildren: {
          '&:before, &:after': {
            border: 0
          }
        },
        wrapper: {
          background: colors.alpha.white[100],
          fontWeight: 'bold',
          height: 24,
          lineHeight: '24px',
          marginTop: -12,
          color: 'inherit',
          textTransform: 'uppercase'
        }
      }
    },
    MuiLink: {
      defaultProps: {
        underline: 'hover'
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: alpha(colors.alpha.gray['100'], 0.95),
          padding: '8px 16px',
          fontSize: 13
        },
        arrow: {
          color: alpha(colors.alpha.gray['100'], 0.95)
        }
      }
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'div',
          h4: 'div',
          h5: 'div',
          h6: 'div',
          subtitle1: 'div',
          subtitle2: 'div',
          subtitle3: 'div',
          body1: 'div',
          body2: 'div'
        }
      },
      styleOverrides: {
        gutterBottom: {
          marginBottom: 4
        },
        paragraph: {
          fontSize: 17,
          lineHeight: 1.7
        }
      }
    }
  },
  shape: {
    borderRadius: 8
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: 35
    },
    h2: {
      fontWeight: 700,
      fontSize: 30
    },
    h3: {
      fontWeight: 700,
      fontSize: 25,
      lineHeight: 1.4,
    },
    h4: {
      fontWeight: 700,
      fontSize: 22
    },
    h5: {
      fontWeight: 700,
      fontSize: 18
    },
    h6: {
      fontWeight: 700,
      fontSize: 16,
    },
    body1: {
      fontWeight: 500,
      fontSize: 14
    },
    body2: {
      fontWeight: 500,
      fontSize: 12
    },
    button: {
      fontWeight: 500
    },
    caption: {
      fontSize: 13,
      textTransform: 'uppercase',
    },
    title1: {
      fontSize: 20,
      fontWeight: 500
    },
    title2: {
      fontSize: 16,
      fontWeight: 500
    },
    subtitle1: {
      fontSize: 14,
    },
    subtitle2: {
      fontSize: 12,
    },
    subtitle3: {
      fontSize: 10,
    }
  },
});

export default DarkSpacesTheme
