import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { click } from '../../redux/clicker';

import styles from './style.scss';

function mapStateToProps(state) {
  return {
    clicker: state.clicker,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ click }, dispatch);
}

/* decorate our component to make it redux state aware using react-redux */
@connect(mapStateToProps, mapDispatchToProps)
export default class Clicker extends React.Component {
  static defaultProps = {
    clicker: 0,
  }

  static propTypes = {
    clicker: React.PropTypes.number.isRequired, // mapped by mapStateToProps
    click: React.PropTypes.func.isRequired, // mapped by mapDispatchToProps
  }

  render() {
    return (
      <div className={styles.main}>
        <div>Counter: { this.props.clicker }</div>
        <button onClick={() => this.props.click(1)}>
          +1
        </button>
        <button onClick={() => this.props.click(-1)}>
          -1
        </button>
      </div>
    );
  }
}
