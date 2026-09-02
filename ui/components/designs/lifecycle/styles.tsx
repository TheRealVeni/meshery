import { Box, List, ListItem, ListItemText, ListSubheader } from '@sistent/sistent';
import { alpha, styled } from '@/theme';

export const ValidationErrorListItem = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== 'clickable',
})(({ theme, clickable = true }) => ({
  gap: '0.5rem',
  backgroundColor: theme.palette.background.card,
  cursor: clickable ? 'pointer' : 'default',
  minWidth: 0,
  maxWidth: '100%',
  boxSizing: 'border-box',
  overflowWrap: 'anywhere',
  '&:hover': {
    backgroundColor: clickable
      ? alpha(theme.palette.warning.main, 0.25)
      : theme.palette.background.card,
  },
}));

export const DryRunErrorContainer = styled(ListItem)(({ theme }) => ({
  backgroundColor: theme.palette.background.card,
  cursor: 'pointer',
  minWidth: 0,
  maxWidth: '100%',
  boxSizing: 'border-box',
  overflowWrap: 'anywhere',
  '&:hover': {
    backgroundColor: alpha(theme.palette.error.dark, 0.25),
  },
}));

export const ComponentValidationListItem = styled(ListItem)(({ theme }) => ({
  gap: '0.5rem',
  backgroundColor: theme.palette.warning.main,
  minWidth: 0,
  maxWidth: '100%',
  boxSizing: 'border-box',
  overflowWrap: 'anywhere',
  '&:hover': {
    backgroundColor: theme.palette.warning.main,
  },
}));

export const ValidatedComponent = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.card,
  color: theme.palette.text.default,
  margin: '0.6rem 0',
  minWidth: 0,
  maxWidth: '100%',
  boxSizing: 'border-box',
  overflowWrap: 'anywhere',
}));

export const DryRunComponentStyled = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.card,
  color: theme.palette.text.default,
  marginBlock: '0.5rem',
  minWidth: 0,
  maxWidth: '100%',
  boxSizing: 'border-box',
  overflowWrap: 'anywhere',
  wordBreak: 'break-word',
}));

export const DryRunComponentLabel = styled(ListItem)(({ theme }) => ({
  backgroundColor: theme.palette.error.dark,
  gap: '0.5rem',
  color: 'white',
  minWidth: 0,
  maxWidth: '100%',
  boxSizing: 'border-box',
  overflowWrap: 'anywhere',
  '&:hover': {
    backgroundColor: theme.palette.error.dark,
  },
}));

export const ValidationResultsListWrapper = styled(List)({
  width: '100%',
  maxWidth: '100%',
  minWidth: 0,
  maxHeight: '18rem',
  overflowY: 'auto',
  overflowX: 'hidden',
  marginBottom: '0.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  boxSizing: 'border-box',
});

export const ValidationSubHeader = styled(ListSubheader)({
  marginTop: '1rem',
  display: 'flex',
  padding: 0,
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '100%',
  minWidth: 0,
  boxSizing: 'border-box',
});

export const DryRunRootListStyled = styled(List)({
  width: '100%',
  maxWidth: '100%',
  minWidth: 0,
  position: 'relative',
  marginBottom: '0.5rem',
  overflowX: 'auto',
  overflowY: 'visible',
  boxSizing: 'border-box',
});

export const DryRunSignleError = styled(ListItemText)(({ theme }) => ({
  paddingInline: theme.spacing(1),
  paddingBlock: theme.spacing(1),
  marginInline: theme.spacing(0.5),
  minWidth: 0,
  maxWidth: '100%',
  boxSizing: 'border-box',
  overflowWrap: 'anywhere',
  wordBreak: 'break-word',
}));
