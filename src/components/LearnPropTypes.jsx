import PropTypes from 'prop-types';

const LearnPropTypes = ({ children }) => {
  return <div>{children}</div>;
};

LearnPropTypes.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),
};

export default LearnPropTypes;
