import React, { Fragment, useContext } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import RootContext from '../../context';

const Alert = (props) => {

  const { state, dispatch } = useContext(RootContext);

  return (
    <Fragment>
      {state.alert && state.alert.length > 0 && state.alert.map(alert => (
        <div key={alert.id} className={`alert alert-${alert.alertType}`}>
          { alert.msg}
        </div>
      ))}
    </Fragment>
  )
}

// Alert.propTypes = {
//   alerts: PropTypes.array.isRequired
// }

// const mapStateToProps = state => ({
//   alerts: state.alert
// });

export default Alert;