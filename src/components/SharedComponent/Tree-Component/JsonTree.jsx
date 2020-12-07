/**
 * Created by harish on 03/01/17.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import store from '../../../redux/store/store';
import CONSTANTS from 'constants';
import {
  MuiIcon,
  MuiButtonTransparent
} from '../../../shared/material-components/index';
import './JsonTree.scss';

/** import actions */
import {
  setSelectedZone,
  setZoneTreeChild
} from '../../../redux/actions/zones/zones.actions';


class JsonTree extends Component {
  constructor(props) {
    super(props);
  }

  setSelectedZone(zoneUuid) {
    store.dispatch(setSelectedZone(zoneUuid));
  }

  handleCollapse(){
    store.dispatch(setZoneTreeChild());
  }


  render() {
    let components = this.props.components;
    // let selectedZone = this.props.selectedZone ? this.props.selectedZone : {};
    return (
      <React.Fragment>
        {(components.length > CONSTANTS.ZERO) ?
          <ul className={classes.gridList}>
            {components.map((zone, index) =>
              <li key={index}>
                  <div>
                    <MuiButtonTransparent
                      onClick={this.handleCollapse.bind(this)}
                    >
                      <MuiIcon>arrow_right</MuiIcon>
                    </MuiButtonTransparent>
                    {/* <a onClick={this.setSelectedZone.bind(this, zone.uuid)}
                       className={'name ' + (zone.uuid === selectedZone.uuid ? 'active-link' : '')}>{zone.name}</a> */}
                  </div>
                {zone.childComponents.length !== CONSTANTS.ZERO && this.props.showChild ?
                  <JsonTree components={zone.childComponents} selectedZone={selectedZone}>
                  </JsonTree> : ''
                }
              </li>
            )}
          </ul> : ''}
      </React.Fragment>
    );
  }
}

JsonTree.propTypes = {
  // components: PropTypes.array,
  // selectedZone: PropTypes.object,
  // showChild: PropTypes.any
};

export default JsonTree;
