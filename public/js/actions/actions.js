/* =========================================================================
 *
 * Actions.js
 *    Defines all app actions (for reflux)
 *
 * ========================================================================= */
// External dependencies
//--------------------------------------
import Reflux from 'reflux';
import logger from 'bragi-browser';
import {fromJS, Map, List} from 'immutable';

// Internal dependencies
//--------------------------------------
import WebAPIUtils from '../utils/WebAPIUtils';

// ====================================
//
// Setup actions
//
// ====================================
var Actions = Reflux.createActions({
    // fetching gist is an async data call
    'fetchGist': {asyncResult: true}
});

// ------------------------------------
//
// Setup async action handlers
//
// ------------------------------------
Actions.fetchGist.listen(function(gistId) {
    logger.log('actions:fetchGist', 'called : ' + gistId);

    // fetch gists, which returns a promise. this.completed and this.failed
    // are setup for us automatically since we set `asyncResult:true` for this
    // action
    WebAPIUtils.fetchGist(gistId).then(this.completed).catch(this.failed);
});

export default Actions;