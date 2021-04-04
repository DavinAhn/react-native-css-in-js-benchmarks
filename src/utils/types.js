import PropTypes from 'prop-types';

export const TablePropTypes = PropTypes.arrayOf(
  PropTypes.arrayOf(PropTypes.string).isRequired,
);
