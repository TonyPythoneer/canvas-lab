/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var react_dom_1 = __webpack_require__(2);
	var react_redux_1 = __webpack_require__(3);
	var App_1 = __webpack_require__(25);
	var configure_store_1 = __webpack_require__(32);
	var store = configure_store_1.default();
	var mainElement = document.getElementById('main');
	react_dom_1.render(React.createElement(react_redux_1.Provider, {store: store}, React.createElement(App_1.default, null)), mainElement);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.connect = exports.Provider = undefined;

	var _Provider = __webpack_require__(4);

	var _Provider2 = _interopRequireDefault(_Provider);

	var _connect = __webpack_require__(7);

	var _connect2 = _interopRequireDefault(_connect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports.Provider = _Provider2["default"];
	exports.connect = _connect2["default"];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = undefined;

	var _react = __webpack_require__(1);

	var _storeShape = __webpack_require__(5);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _warning = __webpack_require__(6);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	  didWarnAboutReceivingStore = true;

	  (0, _warning2["default"])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}

	var Provider = function (_Component) {
	  _inherits(Provider, _Component);

	  Provider.prototype.getChildContext = function getChildContext() {
	    return { store: this.store };
	  };

	  function Provider(props, context) {
	    _classCallCheck(this, Provider);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	    _this.store = props.store;
	    return _this;
	  }

	  Provider.prototype.render = function render() {
	    var children = this.props.children;

	    return _react.Children.only(children);
	  };

	  return Provider;
	}(_react.Component);

	exports["default"] = Provider;

	if (false) {
	  Provider.prototype.componentWillReceiveProps = function (nextProps) {
	    var store = this.store;
	    var nextStore = nextProps.store;

	    if (store !== nextStore) {
	      warnAboutReceivingStore();
	    }
	  };
	}

	Provider.propTypes = {
	  store: _storeShape2["default"].isRequired,
	  children: _react.PropTypes.element.isRequired
	};
	Provider.childContextTypes = {
	  store: _storeShape2["default"].isRequired
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	exports["default"] = _react.PropTypes.shape({
	  subscribe: _react.PropTypes.func.isRequired,
	  dispatch: _react.PropTypes.func.isRequired,
	  getState: _react.PropTypes.func.isRequired
	});

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that you can use this stack
	    // to find the callsite that caused this warning to fire.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.__esModule = true;
	exports["default"] = connect;

	var _react = __webpack_require__(1);

	var _storeShape = __webpack_require__(5);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _shallowEqual = __webpack_require__(8);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _wrapActionCreators = __webpack_require__(9);

	var _wrapActionCreators2 = _interopRequireDefault(_wrapActionCreators);

	var _warning = __webpack_require__(6);

	var _warning2 = _interopRequireDefault(_warning);

	var _isPlainObject = __webpack_require__(12);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _hoistNonReactStatics = __webpack_require__(23);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _invariant = __webpack_require__(24);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var defaultMapStateToProps = function defaultMapStateToProps(state) {
	  return {};
	}; // eslint-disable-line no-unused-vars
	var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
	  return { dispatch: dispatch };
	};
	var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
	  return _extends({}, parentProps, stateProps, dispatchProps);
	};

	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}

	var errorObject = { value: null };
	function tryCatch(fn, ctx) {
	  try {
	    return fn.apply(ctx);
	  } catch (e) {
	    errorObject.value = e;
	    return errorObject;
	  }
	}

	// Helps track hot reloading.
	var nextVersion = 0;

	function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	  var shouldSubscribe = Boolean(mapStateToProps);
	  var mapState = mapStateToProps || defaultMapStateToProps;

	  var mapDispatch = undefined;
	  if (typeof mapDispatchToProps === 'function') {
	    mapDispatch = mapDispatchToProps;
	  } else if (!mapDispatchToProps) {
	    mapDispatch = defaultMapDispatchToProps;
	  } else {
	    mapDispatch = (0, _wrapActionCreators2["default"])(mapDispatchToProps);
	  }

	  var finalMergeProps = mergeProps || defaultMergeProps;
	  var _options$pure = options.pure;
	  var pure = _options$pure === undefined ? true : _options$pure;
	  var _options$withRef = options.withRef;
	  var withRef = _options$withRef === undefined ? false : _options$withRef;

	  var checkMergedEquals = pure && finalMergeProps !== defaultMergeProps;

	  // Helps track hot reloading.
	  var version = nextVersion++;

	  return function wrapWithConnect(WrappedComponent) {
	    var connectDisplayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';

	    function checkStateShape(props, methodName) {
	      if (!(0, _isPlainObject2["default"])(props)) {
	        (0, _warning2["default"])(methodName + '() in ' + connectDisplayName + ' must return a plain object. ' + ('Instead received ' + props + '.'));
	      }
	    }

	    function computeMergedProps(stateProps, dispatchProps, parentProps) {
	      var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
	      if (false) {
	        checkStateShape(mergedProps, 'mergeProps');
	      }
	      return mergedProps;
	    }

	    var Connect = function (_Component) {
	      _inherits(Connect, _Component);

	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;
	      };

	      function Connect(props, context) {
	        _classCallCheck(this, Connect);

	        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	        _this.version = version;
	        _this.store = props.store || context.store;

	        (0, _invariant2["default"])(_this.store, 'Could not find "store" in either the context or ' + ('props of "' + connectDisplayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + connectDisplayName + '".'));

	        var storeState = _this.store.getState();
	        _this.state = { storeState: storeState };
	        _this.clearCache();
	        return _this;
	      }

	      Connect.prototype.computeStateProps = function computeStateProps(store, props) {
	        if (!this.finalMapStateToProps) {
	          return this.configureFinalMapState(store, props);
	        }

	        var state = store.getState();
	        var stateProps = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(state, props) : this.finalMapStateToProps(state);

	        if (false) {
	          checkStateShape(stateProps, 'mapStateToProps');
	        }
	        return stateProps;
	      };

	      Connect.prototype.configureFinalMapState = function configureFinalMapState(store, props) {
	        var mappedState = mapState(store.getState(), props);
	        var isFactory = typeof mappedState === 'function';

	        this.finalMapStateToProps = isFactory ? mappedState : mapState;
	        this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;

	        if (isFactory) {
	          return this.computeStateProps(store, props);
	        }

	        if (false) {
	          checkStateShape(mappedState, 'mapStateToProps');
	        }
	        return mappedState;
	      };

	      Connect.prototype.computeDispatchProps = function computeDispatchProps(store, props) {
	        if (!this.finalMapDispatchToProps) {
	          return this.configureFinalMapDispatch(store, props);
	        }

	        var dispatch = store.dispatch;

	        var dispatchProps = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(dispatch, props) : this.finalMapDispatchToProps(dispatch);

	        if (false) {
	          checkStateShape(dispatchProps, 'mapDispatchToProps');
	        }
	        return dispatchProps;
	      };

	      Connect.prototype.configureFinalMapDispatch = function configureFinalMapDispatch(store, props) {
	        var mappedDispatch = mapDispatch(store.dispatch, props);
	        var isFactory = typeof mappedDispatch === 'function';

	        this.finalMapDispatchToProps = isFactory ? mappedDispatch : mapDispatch;
	        this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;

	        if (isFactory) {
	          return this.computeDispatchProps(store, props);
	        }

	        if (false) {
	          checkStateShape(mappedDispatch, 'mapDispatchToProps');
	        }
	        return mappedDispatch;
	      };

	      Connect.prototype.updateStatePropsIfNeeded = function updateStatePropsIfNeeded() {
	        var nextStateProps = this.computeStateProps(this.store, this.props);
	        if (this.stateProps && (0, _shallowEqual2["default"])(nextStateProps, this.stateProps)) {
	          return false;
	        }

	        this.stateProps = nextStateProps;
	        return true;
	      };

	      Connect.prototype.updateDispatchPropsIfNeeded = function updateDispatchPropsIfNeeded() {
	        var nextDispatchProps = this.computeDispatchProps(this.store, this.props);
	        if (this.dispatchProps && (0, _shallowEqual2["default"])(nextDispatchProps, this.dispatchProps)) {
	          return false;
	        }

	        this.dispatchProps = nextDispatchProps;
	        return true;
	      };

	      Connect.prototype.updateMergedPropsIfNeeded = function updateMergedPropsIfNeeded() {
	        var nextMergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);
	        if (this.mergedProps && checkMergedEquals && (0, _shallowEqual2["default"])(nextMergedProps, this.mergedProps)) {
	          return false;
	        }

	        this.mergedProps = nextMergedProps;
	        return true;
	      };

	      Connect.prototype.isSubscribed = function isSubscribed() {
	        return typeof this.unsubscribe === 'function';
	      };

	      Connect.prototype.trySubscribe = function trySubscribe() {
	        if (shouldSubscribe && !this.unsubscribe) {
	          this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
	          this.handleChange();
	        }
	      };

	      Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
	        if (this.unsubscribe) {
	          this.unsubscribe();
	          this.unsubscribe = null;
	        }
	      };

	      Connect.prototype.componentDidMount = function componentDidMount() {
	        this.trySubscribe();
	      };

	      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (!pure || !(0, _shallowEqual2["default"])(nextProps, this.props)) {
	          this.haveOwnPropsChanged = true;
	        }
	      };

	      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.tryUnsubscribe();
	        this.clearCache();
	      };

	      Connect.prototype.clearCache = function clearCache() {
	        this.dispatchProps = null;
	        this.stateProps = null;
	        this.mergedProps = null;
	        this.haveOwnPropsChanged = true;
	        this.hasStoreStateChanged = true;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;
	        this.renderedElement = null;
	        this.finalMapDispatchToProps = null;
	        this.finalMapStateToProps = null;
	      };

	      Connect.prototype.handleChange = function handleChange() {
	        if (!this.unsubscribe) {
	          return;
	        }

	        var storeState = this.store.getState();
	        var prevStoreState = this.state.storeState;
	        if (pure && prevStoreState === storeState) {
	          return;
	        }

	        if (pure && !this.doStatePropsDependOnOwnProps) {
	          var haveStatePropsChanged = tryCatch(this.updateStatePropsIfNeeded, this);
	          if (!haveStatePropsChanged) {
	            return;
	          }
	          if (haveStatePropsChanged === errorObject) {
	            this.statePropsPrecalculationError = errorObject.value;
	          }
	          this.haveStatePropsBeenPrecalculated = true;
	        }

	        this.hasStoreStateChanged = true;
	        this.setState({ storeState: storeState });
	      };

	      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	        (0, _invariant2["default"])(withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');

	        return this.refs.wrappedInstance;
	      };

	      Connect.prototype.render = function render() {
	        var haveOwnPropsChanged = this.haveOwnPropsChanged;
	        var hasStoreStateChanged = this.hasStoreStateChanged;
	        var haveStatePropsBeenPrecalculated = this.haveStatePropsBeenPrecalculated;
	        var statePropsPrecalculationError = this.statePropsPrecalculationError;
	        var renderedElement = this.renderedElement;

	        this.haveOwnPropsChanged = false;
	        this.hasStoreStateChanged = false;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;

	        if (statePropsPrecalculationError) {
	          throw statePropsPrecalculationError;
	        }

	        var shouldUpdateStateProps = true;
	        var shouldUpdateDispatchProps = true;
	        if (pure && renderedElement) {
	          shouldUpdateStateProps = hasStoreStateChanged || haveOwnPropsChanged && this.doStatePropsDependOnOwnProps;
	          shouldUpdateDispatchProps = haveOwnPropsChanged && this.doDispatchPropsDependOnOwnProps;
	        }

	        var haveStatePropsChanged = false;
	        var haveDispatchPropsChanged = false;
	        if (haveStatePropsBeenPrecalculated) {
	          haveStatePropsChanged = true;
	        } else if (shouldUpdateStateProps) {
	          haveStatePropsChanged = this.updateStatePropsIfNeeded();
	        }
	        if (shouldUpdateDispatchProps) {
	          haveDispatchPropsChanged = this.updateDispatchPropsIfNeeded();
	        }

	        var haveMergedPropsChanged = true;
	        if (haveStatePropsChanged || haveDispatchPropsChanged || haveOwnPropsChanged) {
	          haveMergedPropsChanged = this.updateMergedPropsIfNeeded();
	        } else {
	          haveMergedPropsChanged = false;
	        }

	        if (!haveMergedPropsChanged && renderedElement) {
	          return renderedElement;
	        }

	        if (withRef) {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, _extends({}, this.mergedProps, {
	            ref: 'wrappedInstance'
	          }));
	        } else {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, this.mergedProps);
	        }

	        return this.renderedElement;
	      };

	      return Connect;
	    }(_react.Component);

	    Connect.displayName = connectDisplayName;
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.contextTypes = {
	      store: _storeShape2["default"]
	    };
	    Connect.propTypes = {
	      store: _storeShape2["default"]
	    };

	    if (false) {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        if (this.version === version) {
	          return;
	        }

	        // We are hot reloading!
	        this.version = version;
	        this.trySubscribe();
	        this.clearCache();
	      };
	    }

	    return (0, _hoistNonReactStatics2["default"])(Connect, WrappedComponent);
	  };
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = shallowEqual;
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = wrapActionCreators;

	var _redux = __webpack_require__(10);

	function wrapActionCreators(actionCreators) {
	  return function (dispatch) {
	    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
	  };
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

	var _createStore = __webpack_require__(11);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _combineReducers = __webpack_require__(18);

	var _combineReducers2 = _interopRequireDefault(_combineReducers);

	var _bindActionCreators = __webpack_require__(20);

	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

	var _applyMiddleware = __webpack_require__(21);

	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

	var _compose = __webpack_require__(22);

	var _compose2 = _interopRequireDefault(_compose);

	var _warning = __webpack_require__(19);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}

	if (false) {
	  (0, _warning2["default"])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}

	exports.createStore = _createStore2["default"];
	exports.combineReducers = _combineReducers2["default"];
	exports.bindActionCreators = _bindActionCreators2["default"];
	exports.applyMiddleware = _applyMiddleware2["default"];
	exports.compose = _compose2["default"];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports["default"] = createStore;

	var _isPlainObject = __webpack_require__(12);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _symbolObservable = __webpack_require__(16);

	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};

	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [initialState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, initialState, enhancer) {
	  var _ref2;

	  if (typeof initialState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = initialState;
	    initialState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(reducer, initialState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = initialState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }

	    var isSubscribed = true;

	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;

	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2["default"])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }

	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }

	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;

	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */

	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }

	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }

	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2["default"]] = function () {
	      return this;
	    }, _ref;
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2["default"]] = observable, _ref2;
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(13),
	    isHostObject = __webpack_require__(14),
	    isObjectLike = __webpack_require__(15);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object,
	 *  else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}

	module.exports = isPlainObject;


/***/ },
/* 13 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetPrototype = Object.getPrototypeOf;

	/**
	 * Gets the `[[Prototype]]` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {null|Object} Returns the `[[Prototype]]`.
	 */
	function getPrototype(value) {
	  return nativeGetPrototype(Object(value));
	}

	module.exports = getPrototype;


/***/ },
/* 14 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	module.exports = isHostObject;


/***/ },
/* 15 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global window */
	'use strict';

	module.exports = __webpack_require__(17)(global || window || this);

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function symbolObservablePonyfill(root) {
		var result;
		var Symbol = root.Symbol;

		if (typeof Symbol === 'function') {
			if (Symbol.observable) {
				result = Symbol.observable;
			} else {
				result = Symbol('observable');
				Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	};


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = combineReducers;

	var _createStore = __webpack_require__(11);

	var _isPlainObject = __webpack_require__(12);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _warning = __webpack_require__(19);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
	}

	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'initialState argument passed to createStore' : 'previous state received by the reducer';

	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }

	  if (!(0, _isPlainObject2["default"])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }

	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key);
	  });

	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}

	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];
	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);

	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }

	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];

	    if (sanityError) {
	      throw sanityError;
	    }

	    if (false) {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action);
	      if (warningMessage) {
	        (0, _warning2["default"])(warningMessage);
	      }
	    }

	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}

	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }

	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports["default"] = applyMiddleware;

	var _compose = __webpack_require__(22);

	var _compose2 = _interopRequireDefault(_compose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (createStore) {
	    return function (reducer, initialState, enhancer) {
	      var store = createStore(reducer, initialState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2["default"].apply(undefined, chain)(store.dispatch);

	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */

	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  } else {
	    var _ret = function () {
	      var last = funcs[funcs.length - 1];
	      var rest = funcs.slice(0, -1);
	      return {
	        v: function v() {
	          return rest.reduceRight(function (composed, f) {
	            return f(composed);
	          }, last.apply(undefined, arguments));
	        }
	      };
	    }();

	    if (typeof _ret === "object") return _ret.v;
	  }
	}

/***/ },
/* 23 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);
	        for (var i=0; i<keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]]) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {

	                }
	            }
	        }
	    }

	    return targetComponent;
	};


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (false) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var SideBar_1 = __webpack_require__(26);
	var chapter01_1 = __webpack_require__(28);
	var AppContainer = (function (_super) {
	    __extends(AppContainer, _super);
	    function AppContainer() {
	        _super.apply(this, arguments);
	    }
	    AppContainer.prototype.render = function () {
	        return (React.createElement("div", {className: "container"}, React.createElement(SideBar_1.default, null), React.createElement("div", {className: "main-page"}, React.createElement(chapter01_1.default, null))));
	    };
	    return AppContainer;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = AppContainer;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var side_bar_1 = __webpack_require__(27);
	var SideBarContainer = (function (_super) {
	    __extends(SideBarContainer, _super);
	    function SideBarContainer() {
	        _super.apply(this, arguments);
	    }
	    SideBarContainer.prototype.render = function () {
	        return (React.createElement(side_bar_1.default, null));
	    };
	    return SideBarContainer;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = SideBarContainer;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var SideBar = (function (_super) {
	    __extends(SideBar, _super);
	    function SideBar() {
	        _super.apply(this, arguments);
	    }
	    SideBar.prototype.render = function () {
	        return (React.createElement("nav", {className: "side-bar"}, React.createElement("ul", null, React.createElement("li", null, "test!"))));
	    };
	    return SideBar;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = SideBar;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var SimpleExampleDemo_1 = __webpack_require__(29);
	var WindowDemo_1 = __webpack_require__(31);
	var DemoList = (function (_super) {
	    __extends(DemoList, _super);
	    function DemoList() {
	        _super.apply(this, arguments);
	    }
	    DemoList.prototype.render = function () {
	        return (React.createElement("div", {className: "test"}, React.createElement(SimpleExampleDemo_1.default, null), React.createElement(WindowDemo_1.default, null)));
	    };
	    return DemoList;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = DemoList;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(1);
	var CanvasDemo_1 = __webpack_require__(30);
	var SimpleExampleDemo = (function (_super) {
	    __extends(SimpleExampleDemo, _super);
	    function SimpleExampleDemo() {
	        _super.apply(this, arguments);
	    }
	    SimpleExampleDemo.prototype.renderCanvas = function (canvas) {
	        var ctx = canvas.getContext("2d");
	        ctx.fillStyle = "rgb(200,0,0)";
	        ctx.fillRect(10, 10, 55, 50);
	        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
	        ctx.fillRect(30, 30, 55, 50);
	    };
	    SimpleExampleDemo.prototype.render = function () {
	        var attr = {
	            title: "BasicUsage",
	            renderCanvas: this.renderCanvas,
	            width: 150,
	            height: 150,
	        };
	        return React.createElement(CanvasDemo_1.default, __assign({}, attr));
	    };
	    return SimpleExampleDemo;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = SimpleExampleDemo;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var CanvasDemo = (function (_super) {
	    __extends(CanvasDemo, _super);
	    function CanvasDemo() {
	        _super.apply(this, arguments);
	    }
	    CanvasDemo.prototype.render = function () {
	        var _a = this.props, title = _a.title, width = _a.width, height = _a.height, renderCanvas = _a.renderCanvas;
	        return (React.createElement("div", {className: "demo"}, React.createElement("div", null, title), React.createElement("canvas", {ref: renderCanvas, width: width, height: height})));
	    };
	    return CanvasDemo;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = CanvasDemo;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(1);
	var CanvasDemo_1 = __webpack_require__(30);
	var WindowDemo = (function (_super) {
	    __extends(WindowDemo, _super);
	    function WindowDemo() {
	        _super.apply(this, arguments);
	    }
	    WindowDemo.prototype.renderCanvas = function (canvas) {
	        var ctx = canvas.getContext("2d");
	        ctx.fillStyle = "rgb(200,0,0)";
	        ctx.fillRect(10, 10, 55, 50);
	        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
	        ctx.fillRect(30, 30, 55, 50);
	    };
	    WindowDemo.prototype.render = function () {
	        var attr = {
	            title: "Window",
	            renderCanvas: this.renderCanvas,
	            width: 150,
	            height: 150,
	        };
	        return React.createElement(CanvasDemo_1.default, __assign({}, attr));
	    };
	    return WindowDemo;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = WindowDemo;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var redux_1 = __webpack_require__(10);
	var reducers_1 = __webpack_require__(33);
	var devTools = __webpack_require__(34);
	var enhancer = redux_1.compose(devTools());
	function configureStore(initialState) {
	    if (initialState === void 0) { initialState = undefined; }
	    var store = redux_1.createStore(reducers_1.default, initialState, enhancer);
	    return store;
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = configureStore;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var redux_1 = __webpack_require__(10);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = redux_1.combineReducers({});


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(35).default;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = devTools;

	var _jsan = __webpack_require__(36);

	var _socketclusterClient = __webpack_require__(41);

	var _socketclusterClient2 = _interopRequireDefault(_socketclusterClient);

	var _configureStore = __webpack_require__(66);

	var _configureStore2 = _interopRequireDefault(_configureStore);

	var _constants = __webpack_require__(133);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var monitorActions = [// To be skipped for relaying actions
	'TOGGLE_ACTION', 'SWEEP', 'IMPORT_STATE', 'SET_ACTIONS_ACTIVE'];

	var instanceId = void 0;
	var instanceName = void 0;
	var socketOptions = void 0;
	var socket = void 0;
	var channel = void 0;
	var store = {};
	var lastAction = void 0;
	var filters = void 0;
	var isExcess = void 0;
	var isMonitored = void 0;
	var started = void 0;
	var startOn = void 0;
	var stopOn = void 0;
	var sendOn = void 0;
	var sendTo = void 0;

	function isFiltered(action) {
	  if (!action || !action.action || !action.action.type) return false;
	  return filters.whitelist && !action.action.type.match(filters.whitelist.join('|')) || filters.blacklist && action.action.type.match(filters.blacklist.join('|'));
	}

	function relay(type, state, action, nextActionId) {
	  if (filters && isFiltered(action)) return;
	  var message = {
	    type: type,
	    id: socket.id,
	    name: instanceName
	  };
	  if (state) message.payload = (0, _jsan.stringify)(state);
	  if (action) {
	    message.action = (0, _jsan.stringify)(action);
	    message.isExcess = isExcess;
	  }
	  if (nextActionId) message.nextActionId = (0, _jsan.stringify)(nextActionId);
	  socket.emit(socket.id ? 'log' : 'log-noid', message);
	}

	function filterStagedActions(state) {
	  if (!filters) return state;

	  var filteredStagedActionIds = [];
	  var filteredComputedStates = [];

	  state.stagedActionIds.forEach(function (id, idx) {
	    if (!isFiltered(state.actionsById[id])) {
	      filteredStagedActionIds.push(id);
	      filteredComputedStates.push(state.computedStates[idx]);
	    }
	  });

	  return _extends({}, state, {
	    stagedActionIds: filteredStagedActionIds,
	    computedStates: filteredComputedStates
	  });
	}

	function handleMessages(message) {
	  if (message.type === 'IMPORT' || message.type === 'SYNC' && socket.id && message.id !== socket.id) {
	    store.liftedStore.dispatch({
	      type: 'IMPORT_STATE', nextLiftedState: (0, _jsan.parse)(message.state)
	    });
	  }if (message.type === 'UPDATE' || message.type === 'IMPORT' || message.type === 'START') {
	    relay('STATE', filterStagedActions(store.liftedStore.getState()));
	  }if (message.type === 'START') {
	    isMonitored = true;
	  } else if (message.type === 'STOP' || message.type === 'DISCONNECTED') {
	    isMonitored = false;
	    relay('STOP');
	  } else if (message.type === 'ACTION') {
	    store.dispatch(message.action);
	  } else if (message.type === 'DISPATCH') {
	    store.liftedStore.dispatch(message.action);
	  }
	}

	function str2array(str) {
	  return typeof str === 'string' ? [str] : str && str.length;
	}

	function init(options) {
	  instanceName = options.name;
	  if (options.filters) {
	    filters = options.filters;
	  }
	  if (options.port) {
	    socketOptions = {
	      port: options.port,
	      hostname: options.hostname || 'localhost',
	      secure: options.secure
	    };
	  } else socketOptions = _constants.defaultSocketOptions;

	  startOn = str2array(options.startOn);
	  stopOn = str2array(options.stopOn);
	  sendOn = str2array(options.sendOn);
	  if (sendOn) {
	    sendTo = options.sendTo || (socketOptions.secure ? 'https' : 'http') + '://' + socketOptions.hostname + ':' + socketOptions.port;
	    instanceId = options.id;
	  }
	}

	function start() {
	  if (started) return;
	  started = true;

	  socket = _socketclusterClient2.default.connect(socketOptions);
	  socket.on('error', function (err) {
	    console.warn(err);
	  });
	  socket.emit('login', 'master', function (err, channelName) {
	    if (err) {
	      console.warn(err);return;
	    }
	    channel = socket.subscribe(channelName);
	    channel.watch(handleMessages);
	    socket.on(channelName, handleMessages);
	  });
	  relay('STATE', store.liftedStore.getState());
	}

	function stop() {
	  started = false;
	  isMonitored = false;
	  if (channel) {
	    channel.unsubscribe();
	    channel.unwatch();
	  }
	  if (socket) {
	    socket.off();
	    socket.disconnect();
	  }
	}

	function send() {
	  if (!instanceId) instanceId = socket && socket.id || Math.random().toString(36).substr(2);
	  try {
	    fetch(sendTo, {
	      method: 'POST',
	      headers: {
	        'content-type': 'application/json'
	      },
	      body: JSON.stringify({
	        type: 'STATE',
	        id: instanceId,
	        name: instanceName,
	        payload: (0, _jsan.stringify)(filterStagedActions(store.liftedStore.getState()))
	      })
	    }).catch(function (err) {
	      console.warn(err);
	    });
	  } catch (err) {
	    console.warn(err);
	  }
	}

	function async(fn) {
	  setTimeout(fn, 0);
	}

	function monitorReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var action = arguments[1];

	  if (action.action) {
	    if (startOn && !started && startOn.indexOf(action.action.type) !== -1) async(start);else if (stopOn && started && stopOn.indexOf(action.action.type) !== -1) async(stop);else if (sendOn && !started && sendOn.indexOf(action.action.type) !== -1) async(send);
	  }
	  lastAction = action.type;
	  return state;
	}

	function handleChange(state, liftedState, maxAge) {
	  var nextActionId = liftedState.nextActionId;
	  var liftedAction = liftedState.actionsById[nextActionId - 1];
	  var action = liftedAction.action;
	  if (action.type === '@@INIT') {
	    relay('INIT', state, { timestamp: Date.now() });
	  } else if (monitorActions.indexOf(lastAction) === -1) {
	    if (lastAction === 'JUMP_TO_STATE') return;
	    relay('ACTION', state, liftedAction, nextActionId);
	    if (!isExcess && maxAge) isExcess = liftedState.stagedActionIds.length >= maxAge;
	  } else {
	    relay('STATE', filterStagedActions(liftedState));
	  }
	}

	function devTools() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  init(options);
	  var realtime = typeof options.realtime === 'undefined' ? ("production") === 'development' : options.realtime;
	  if (!realtime && !startOn) return function (f) {
	    return f;
	  };

	  var maxAge = options.maxAge || 30;
	  return function (next) {
	    return function (reducer, initialState) {
	      store = (0, _configureStore2.default)(next, monitorReducer, { maxAge: maxAge })(reducer, initialState);

	      if (realtime) start();
	      store.subscribe(function () {
	        if (isMonitored) handleChange(store.getState(), store.liftedStore.getState(), maxAge);
	      });
	      return store;
	    };
	  };
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(37);


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var cycle = __webpack_require__(38);

	exports.stringify = function stringify(value, replacer, space, _options) {

	  if (arguments.length < 4) {
	    try {
	      if (arguments.length === 1) {
	        return JSON.stringify(value);
	      } else {
	        return JSON.stringify.apply(JSON, arguments);
	      }
	    } catch (e) {}
	  }

	  var options = _options || false;
	  if (typeof options === 'boolean') {
	    options = {
	      'date': options,
	      'function': options,
	      'regex': options,
	      'undefined': options,
	      'error': options
	    }
	  }

	  var decycled = cycle.decycle(value, options, replacer);
	  if (arguments.length === 1) {
	    return JSON.stringify(decycled);
	  } else {
	    return JSON.stringify(decycled, replacer, space);
	  }

	}

	exports.parse = function parse(text, reviver) {
	  var needsRetrocycle = /"\$jsan"/.test(text);
	  var parsed;
	  if (arguments.length === 1) {
	    parsed = JSON.parse(text);
	  } else {
	    parsed = JSON.parse(text, reviver);
	  }
	  if (needsRetrocycle) {
	    parsed = cycle.retrocycle(parsed);
	  }
	  return parsed;
	}


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var pathGetter = __webpack_require__(39);
	var utils = __webpack_require__(40);

	// Based on https://github.com/douglascrockford/JSON-js/blob/master/cycle.js

	exports.decycle = function decycle(object, options, replacer) {
	  'use strict';

	  var objects = [],   // Keep a reference to each unique object or array
	      paths = [];     // Keep the path to each unique object or array

	  return (function derez(_value, path, key) {

	    // The derez recurses through the object, producing the deep copy.

	    var i,          // The loop counter
	      name,       // Property name
	      nu;         // The new object or array

	    // typeof null === 'object', so go on if this value is really an object but not
	    // one of the weird builtin objects.

	    var value = replacer ? replacer(key || '', _value) : _value;

	    if (options.date && value instanceof Date) {
	      return {$jsan: 'd' + value.getTime()};
	    }
	    if (options.regex && value instanceof RegExp) {
	      return {$jsan: 'r' + utils.getRegexFlags(value) + ',' + value.source};
	    }
	    if (options['function'] && typeof value === 'function') {
	      return {$jsan: 'f' + utils.stringifyFunction(value, options['function'])}
	    }
	    if (options['undefined'] && value === undefined) {
	      return {$jsan: 'u'}
	    }
	    if (options['error'] && value instanceof Error) {
	      return {$jsan: 'e' + value.message}
	    }

	    if (value && value.toJSON) {
	      return value.toJSON();
	    }

	    if (typeof value === 'object' && value !== null &&
	      !(value instanceof Boolean) &&
	      !(value instanceof Date)    &&
	      !(value instanceof Number)  &&
	      !(value instanceof RegExp)  &&
	      !(value instanceof String)  &&
	      !(value instanceof Error)) {

	        // If the value is an object or array, look to see if we have already
	        // encountered it. If so, return a $ref/path object. This is a hard way,
	        // linear search that will get slower as the number of unique objects grows.

	      for (i = 0; i < objects.length; i += 1) {
	          if (objects[i] === value) {
	              return {$jsan: paths[i]};
	          }
	      }

	      // Otherwise, accumulate the unique value and its path.

	      objects.push(value);
	      paths.push(path);

	      // If it is an array, replicate the array.

	      if (Object.prototype.toString.apply(value) === '[object Array]') {
	          nu = [];
	          for (i = 0; i < value.length; i += 1) {
	              nu[i] = derez(value[i], path + '[' + i + ']', i);
	          }
	      } else {

	        // If it is an object, replicate the object.

	        nu = {};
	        for (name in value) {
	          if (Object.prototype.hasOwnProperty.call(value, name)) {
	            var nextPath = /^\w+$/.test(name) ?
	              '.' + name :
	              '[' + JSON.stringify(name) + ']';
	            nu[name] = name === '$jsan' ? [derez(value[name], path + nextPath)] : derez(value[name], path + nextPath, name);
	          }
	        }
	      }
	      return nu;
	    }
	    return value;
	  }(object, '$'));
	};


	exports.retrocycle = function retrocycle($) {
	  'use strict';


	  (function rez(value) {

	    // The rez function walks recursively through the object looking for $jsan
	    // properties. When it finds one that has a value that is a path, then it
	    // replaces the $jsan object with a reference to the value that is found by
	    // the path.

	    var i, item, name, path;

	    if (value && typeof value === 'object') {
	      if (Object.prototype.toString.apply(value) === '[object Array]') {
	        for (i = 0; i < value.length; i += 1) {
	          item = value[i];
	          if (item && typeof item === 'object') {
	            if (item.$jsan) {
	              value[i] = utils.restore(item.$jsan, $);
	            } else {
	              rez(item);
	            }
	          }
	        }
	      } else {
	        for (name in value) {
	          if (name === '$jsan') {
	            value[name] = value[name][0];
	          }
	          if (typeof value[name] === 'object') {
	            item = value[name];
	            if (item && typeof item === 'object') {
	              if (item.$jsan) {
	                value[name] = utils.restore(item.$jsan, $);
	              } else {
	                rez(item);
	              }
	            }
	          }
	        }
	      }
	    }
	  }($));
	  return $;
	};


/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = pathGetter;

	function pathGetter(obj, path) {
	  if (path !== '$') {
	    var paths = getPaths(path);
	    for (var i = 0; i < paths.length; i++) {
	      path = paths[i].toString().replace(/\\"/g, '"');
	      obj = obj[path];
	    }
	  }
	  return obj;
	}

	function getPaths(pathString) {
	  var regex = /(?:\.(\w+))|(?:\[(\d+)\])|(?:\["((?:[^\\"]|\\.)*)"\])/g;
	  var matches = [];
	  var match;
	  while (match = regex.exec(pathString)) {
	    matches.push( match[1] || match[2] || match[3] );
	  }
	  return matches;
	}


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var pathGetter = __webpack_require__(39);

	exports.getRegexFlags = function getRegexFlags(regex) {
	  var flags = '';
	  if (regex.ignoreCase) flags += 'i';
	  if (regex.global) flags += 'g';
	  if (regex.multiline) flags += 'm';
	  return flags;
	};

	exports.stringifyFunction = function stringifyFunction(fn, customToString) {
	  if (typeof customToString === 'function') {
	    return customToString(fn);
	  }
	  var str = fn.toString();
	  var match = str.match(/^[^{]*{|^[^=]*=>/);
	  var start = match ? match[0] : '<function> ';
	  var end = str[str.length - 1] === '}' ? '}' : '';
	  return start.replace(/\r\n|\n/g, ' ').replace(/\s+/g, ' ') + ' /* ... */ ' + end;
	};

	exports.restore = function restore(obj, root) {
	  var type = obj[0];
	  var rest = obj.slice(1);
	  switch(type) {
	    case '$':
	      return pathGetter(root, obj);
	    case 'r':
	      var comma = rest.indexOf(',');
	      var flags = rest.slice(0, comma);
	      var source = rest.slice(comma + 1);
	      return RegExp(source, flags);
	    case 'd':
	      return new Date(+rest);
	    case 'f':
	      var fn = function() { throw new Error("can't run jsan parsed function") };
	      fn.toString = function() { return rest; };
	      return fn;
	    case 'u':
	      return undefined;
	    case 'e':
	      var error = new Error(rest);
	      error.stack = 'Stack is unavailable for jsan parsed errors';
	      return error;
	    default:
	      console.warn('unknown type', obj);
	      return obj;
	  }
	}


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var SCSocket = __webpack_require__(42);
	var SCSocketCreator = __webpack_require__(65);

	module.exports.SCSocketCreator = SCSocketCreator;
	module.exports.SCSocket = SCSocket;

	module.exports.SCEmitter = __webpack_require__(47).SCEmitter;

	module.exports.connect = function (options) {
	  return SCSocketCreator.connect(options);
	};

	module.exports.destroy = function (options) {
	  return SCSocketCreator.destroy(options);
	};

	module.exports.version = '4.3.17';


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, Buffer) {var SCEmitter = __webpack_require__(47).SCEmitter;
	var SCChannel = __webpack_require__(50).SCChannel;
	var Response = __webpack_require__(51).Response;
	var AuthEngine = __webpack_require__(54).AuthEngine;
	var SCTransport = __webpack_require__(55).SCTransport;
	var querystring = __webpack_require__(57);
	var LinkedList = __webpack_require__(61);
	var base64 = __webpack_require__(63);

	var scErrors = __webpack_require__(52);
	var InvalidArgumentsError = scErrors.InvalidArgumentsError;
	var InvalidMessageError = scErrors.InvalidMessageError;
	var SocketProtocolError = scErrors.SocketProtocolError;
	var TimeoutError = scErrors.TimeoutError;

	var isBrowser = typeof window != 'undefined';


	var SCSocket = function (opts) {
	  var self = this;

	  SCEmitter.call(this);

	  this.id = null;
	  this.state = this.CLOSED;
	  this.authState = this.PENDING;
	  this.signedAuthToken = null;
	  this.authToken = null;
	  this.pendingReconnect = false;
	  this.pendingReconnectTimeout = null;
	  this.pendingConnectCallback = false;

	  this.connectTimeout = opts.connectTimeout;
	  this.ackTimeout = opts.ackTimeout;
	  this.channelPrefix = opts.channelPrefix || null;

	  // pingTimeout will be ackTimeout at the start, but it will
	  // be updated with values provided by the 'connect' event
	  this.pingTimeout = this.ackTimeout;

	  var maxTimeout = Math.pow(2, 31) - 1;

	  var verifyDuration = function (propertyName) {
	    if (self[propertyName] > maxTimeout) {
	      throw new InvalidArgumentsError('The ' + propertyName +
	        ' value provided exceeded the maximum amount allowed');
	    }
	  };

	  verifyDuration('connectTimeout');
	  verifyDuration('ackTimeout');
	  verifyDuration('pingTimeout');

	  this._localEvents = {
	    'connect': 1,
	    'connectAbort': 1,
	    'disconnect': 1,
	    'message': 1,
	    'error': 1,
	    'raw': 1,
	    'fail': 1,
	    'kickOut': 1,
	    'subscribe': 1,
	    'unsubscribe': 1,
	    'subscribeStateChange': 1,
	    'authStateChange': 1,
	    'authenticate': 1,
	    'deauthenticate': 1,
	    'removeAuthToken': 1,
	    'subscribeRequest': 1
	  };

	  this.connectAttempts = 0;

	  this._emitBuffer = new LinkedList();
	  this._channels = {};

	  this.options = opts;

	  this._cid = 1;

	  this.options.callIdGenerator = function () {
	    return self._callIdGenerator();
	  };

	  if (this.options.autoReconnect) {
	    if (this.options.autoReconnectOptions == null) {
	      this.options.autoReconnectOptions = {};
	    }

	    // Add properties to the this.options.autoReconnectOptions object.
	    // We assign the reference to a reconnectOptions variable to avoid repetition.
	    var reconnectOptions = this.options.autoReconnectOptions;
	    if (reconnectOptions.initialDelay == null) {
	      reconnectOptions.initialDelay = 10000;
	    }
	    if (reconnectOptions.randomness == null) {
	      reconnectOptions.randomness = 10000;
	    }
	    if (reconnectOptions.multiplier == null) {
	      reconnectOptions.multiplier = 1.5;
	    }
	    if (reconnectOptions.maxDelay == null) {
	      reconnectOptions.maxDelay = 60000;
	    }
	  }

	  if (this.options.subscriptionRetryOptions == null) {
	    this.options.subscriptionRetryOptions = {};
	  }

	  if (this.options.authEngine) {
	    this.auth = this.options.authEngine;
	  } else {
	    this.auth = new AuthEngine();
	  }

	  this.options.path = this.options.path.replace(/\/$/, '') + '/';

	  this.options.query = opts.query || {};
	  if (typeof this.options.query == 'string') {
	    this.options.query = querystring.parse(this.options.query);
	  }

	  this.connect();

	  this._channelEmitter = new SCEmitter();

	  if (isBrowser) {
	    var unloadHandler = function () {
	      self.disconnect();
	    };

	    if (global.attachEvent) {
	      global.attachEvent('onunload', unloadHandler);
	    } else if (global.addEventListener) {
	      global.addEventListener('beforeunload', unloadHandler, false);
	    }
	  }
	};

	SCSocket.prototype = Object.create(SCEmitter.prototype);

	SCSocket.CONNECTING = SCSocket.prototype.CONNECTING = SCTransport.prototype.CONNECTING;
	SCSocket.OPEN = SCSocket.prototype.OPEN = SCTransport.prototype.OPEN;
	SCSocket.CLOSED = SCSocket.prototype.CLOSED = SCTransport.prototype.CLOSED;

	SCSocket.AUTHENTICATED = SCSocket.prototype.AUTHENTICATED = 'authenticated';
	SCSocket.UNAUTHENTICATED = SCSocket.prototype.UNAUTHENTICATED = 'unauthenticated';
	SCSocket.PENDING = SCSocket.prototype.PENDING = 'pending';

	SCSocket.ignoreStatuses = scErrors.socketProtocolIgnoreStatuses;
	SCSocket.errorStatuses = scErrors.socketProtocolErrorStatuses;

	SCSocket.prototype._privateEventHandlerMap = {
	  '#publish': function (data) {
	    var undecoratedChannelName = this._undecorateChannelName(data.channel);
	    var isSubscribed = this.isSubscribed(undecoratedChannelName, true);

	    if (isSubscribed) {
	      this._channelEmitter.emit(undecoratedChannelName, data.data);
	    }
	  },
	  '#kickOut': function (data) {
	    var undecoratedChannelName = this._undecorateChannelName(data.channel);
	    var channel = this._channels[undecoratedChannelName];
	    if (channel) {
	      SCEmitter.prototype.emit.call(this, 'kickOut', data.message, undecoratedChannelName);
	      channel.emit('kickOut', data.message, undecoratedChannelName);
	      this._triggerChannelUnsubscribe(channel);
	    }
	  },
	  '#setAuthToken': function (data, response) {
	    var self = this;

	    if (data) {
	      var triggerAuthenticate = function (err) {
	        if (err) {
	          // This is a non-fatal error, we don't want to close the connection
	          // because of this but we do want to notify the server and throw an error
	          // on the client.
	          response.error(err);
	          self._onSCError(err);
	        } else {
	          self._changeToAuthenticatedState(data.token);
	          response.end();
	        }
	      };

	      this.auth.saveToken(this.options.authTokenName, data.token, {}, triggerAuthenticate);
	    } else {
	      response.error(new InvalidMessageError('No token data provided by #setAuthToken event'));
	    }
	  },
	  '#removeAuthToken': function (data, response) {
	    var self = this;

	    this.auth.removeToken(this.options.authTokenName, function (err, oldToken) {
	      if (err) {
	        // Non-fatal error - Do not close the connection
	        response.error(err);
	        self._onSCError(err);
	      } else {
	        SCEmitter.prototype.emit.call(self, 'removeAuthToken', oldToken);
	        self._changeToUnauthenticatedState();
	        response.end();
	      }
	    });
	  },
	  '#disconnect': function (data) {
	    this.transport.close(data.code, data.data);
	  }
	};

	SCSocket.prototype._callIdGenerator = function () {
	  return this._cid++;
	};

	SCSocket.prototype.getState = function () {
	  return this.state;
	};

	SCSocket.prototype.getBytesReceived = function () {
	  return this.transport.getBytesReceived();
	};

	SCSocket.prototype.deauthenticate = function (callback) {
	  var self = this;

	  this.auth.removeToken(this.options.authTokenName, function (err, oldToken) {
	    self.emit('#removeAuthToken');
	    callback && callback(err);
	    if (err) {
	      // Non-fatal error - Do not close the connection
	      self._onSCError(err);
	    } else {
	      SCEmitter.prototype.emit.call(self, 'removeAuthToken', oldToken);
	      self._changeToUnauthenticatedState();
	    }
	  });
	};

	SCSocket.prototype.connect = SCSocket.prototype.open = function () {
	  var self = this;

	  if (this.state == this.CLOSED) {
	    this.pendingReconnect = false;
	    this.pendingReconnectTimeout = null;
	    clearTimeout(this._reconnectTimeoutRef);

	    this.state = this.CONNECTING;
	    this._changeToPendingAuthState();

	    if (this.transport) {
	      this.transport.off();
	    }

	    this.transport = new SCTransport(this.auth, this.options);

	    this.transport.on('open', function (status) {
	      self.state = self.OPEN;
	      self._onSCOpen(status);
	    });

	    this.transport.on('error', function (err) {
	      self._onSCError(err);
	    });

	    this.transport.on('close', function (code, data) {
	      self.state = self.CLOSED;
	      self._onSCClose(code, data);
	    });

	    this.transport.on('openAbort', function (code, data) {
	      self.state = self.CLOSED;
	      self._onSCClose(code, data, true);
	    });

	    this.transport.on('event', function (event, data, res) {
	      self._onSCEvent(event, data, res);
	    });
	  }
	};

	SCSocket.prototype.reconnect = function () {
	  this.disconnect();
	  this.connect();
	};

	SCSocket.prototype.disconnect = function (code, data) {
	  code = code || 1000;

	  if (this.state == this.OPEN) {
	    var packet = {
	      code: code,
	      data: data
	    };
	    this.transport.emit('#disconnect', packet);
	    this.transport.close(code);

	  } else if (this.state == this.CONNECTING) {
	    this.transport.close(code);
	  } else {
	    this.pendingReconnect = false;
	    this.pendingReconnectTimeout = null;
	    clearTimeout(this._reconnectTimeoutRef);
	  }
	};

	SCSocket.prototype._changeToPendingAuthState = function () {
	  if (this.authState != this.PENDING) {
	    var oldState = this.authState;
	    this.authState = this.PENDING;
	    var stateChangeData = {
	      oldState: oldState,
	      newState: this.authState
	    };
	    SCEmitter.prototype.emit.call(this, 'authStateChange', stateChangeData);
	  }
	};

	SCSocket.prototype._changeToUnauthenticatedState = function () {
	  if (this.authState != this.UNAUTHENTICATED) {
	    var oldState = this.authState;
	    this.authState = this.UNAUTHENTICATED;
	    this.signedAuthToken = null;
	    this.authToken = null;

	    var stateChangeData = {
	      oldState: oldState,
	      newState: this.authState
	    };
	    SCEmitter.prototype.emit.call(this, 'authStateChange', stateChangeData);
	    if (oldState == this.AUTHENTICATED) {
	      SCEmitter.prototype.emit.call(this, 'deauthenticate');
	    }
	  }
	};

	SCSocket.prototype._changeToAuthenticatedState = function (signedAuthToken) {
	  if (this.authState != this.AUTHENTICATED) {
	    var oldState = this.authState;
	    this.authState = this.AUTHENTICATED;
	    this.signedAuthToken = signedAuthToken;
	    this.authToken = this._extractAuthTokenData(signedAuthToken);
	    var stateChangeData = {
	      oldState: oldState,
	      newState: this.authState,
	      signedAuthToken: signedAuthToken,
	      authToken: this.authToken
	    };
	    this.processPendingSubscriptions();

	    SCEmitter.prototype.emit.call(this, 'authStateChange', stateChangeData);
	    SCEmitter.prototype.emit.call(this, 'authenticate', signedAuthToken);
	  }
	};

	SCSocket.prototype.decodeBase64 = function (encodedString) {
	  var decodedString;
	  if (typeof Buffer == 'undefined') {
	    if (global.atob) {
	      decodedString = global.atob(encodedString);
	    } else {
	      decodedString = base64.decode(encodedString);
	    }
	  } else {
	    var buffer = new Buffer(encodedString, 'base64');
	    decodedString = buffer.toString('utf8');
	  }
	  return decodedString;
	};

	SCSocket.prototype.encodeBase64 = function (decodedString) {
	  var encodedString;
	  if (typeof Buffer == 'undefined') {
	    if (global.btoa) {
	      encodedString = global.btoa(decodedString);
	    } else {
	      encodedString = base64.encode(decodedString);
	    }
	  } else {
	    var buffer = new Buffer(decodedString, 'utf8');
	    encodedString = buffer.toString('base64');
	  }
	  return encodedString;
	};

	SCSocket.prototype._extractAuthTokenData = function (signedAuthToken) {
	  var tokenParts = (signedAuthToken || '').split('.');
	  var encodedTokenData = tokenParts[1];
	  if (encodedTokenData != null) {
	    var tokenData = encodedTokenData;
	    try {
	      tokenData = this.decodeBase64(tokenData);
	      return JSON.parse(tokenData);
	    } catch (e) {
	      return tokenData;
	    }
	  }
	  return null;
	};

	SCSocket.prototype.getAuthToken = function () {
	  return this.authToken;
	};

	SCSocket.prototype.getSignedAuthToken = function () {
	  return this.signedAuthToken;
	};

	// Perform client-initiated authentication by providing an encrypted token string
	SCSocket.prototype.authenticate = function (signedAuthToken, callback) {
	  var self = this;

	  this._changeToPendingAuthState();

	  this.emit('#authenticate', signedAuthToken, function (err, authStatus) {
	    if (authStatus && authStatus.authError) {
	      authStatus.authError = scErrors.hydrateError(authStatus.authError);
	    }
	    if (err) {
	      self._changeToUnauthenticatedState();
	      callback && callback(err, authStatus);
	    } else {
	      self.auth.saveToken(self.options.authTokenName, signedAuthToken, {}, function (err) {
	        callback && callback(err, authStatus);
	        if (err) {
	          self._changeToUnauthenticatedState();
	          self._onSCError(err);
	        } else {
	          if (authStatus.isAuthenticated) {
	            self._changeToAuthenticatedState(signedAuthToken);
	          } else {
	            self._changeToUnauthenticatedState();
	          }
	        }
	      });
	    }
	  });
	};

	SCSocket.prototype._tryReconnect = function (initialDelay) {
	  var self = this;

	  var exponent = this.connectAttempts++;
	  var reconnectOptions = this.options.autoReconnectOptions;
	  var timeout;

	  if (initialDelay == null || exponent > 0) {
	    var initialTimeout = Math.round(reconnectOptions.initialDelay + (reconnectOptions.randomness || 0) * Math.random());

	    timeout = Math.round(initialTimeout * Math.pow(reconnectOptions.multiplier, exponent));
	  } else {
	    timeout = initialDelay;
	  }

	  if (timeout > reconnectOptions.maxDelay) {
	    timeout = reconnectOptions.maxDelay;
	  }

	  clearTimeout(this._reconnectTimeoutRef);

	  this.pendingReconnect = true;
	  this.pendingReconnectTimeout = timeout;
	  this._reconnectTimeoutRef = setTimeout(function () {
	    self.connect();
	  }, timeout);
	};

	SCSocket.prototype._onSCOpen = function (status) {
	  var self = this;

	  if (status) {
	    this.id = status.id;
	    this.pingTimeout = status.pingTimeout;
	    this.transport.pingTimeout = this.pingTimeout;
	    if (status.isAuthenticated) {
	      this._changeToAuthenticatedState(status.authToken);
	    } else {
	      this._changeToUnauthenticatedState();
	    }
	  } else {
	    this._changeToUnauthenticatedState();
	  }

	  this.connectAttempts = 0;
	  if (this.options.autoProcessSubscriptions) {
	    this.processPendingSubscriptions();
	  } else {
	    this.pendingConnectCallback = true;
	  }

	  // If the user invokes the callback while in autoProcessSubscriptions mode, it
	  // won't break anything - The processPendingSubscriptions() call will be a no-op.
	  SCEmitter.prototype.emit.call(this, 'connect', status, function () {
	    self.processPendingSubscriptions();
	  });

	  this._flushEmitBuffer();
	};

	SCSocket.prototype._onSCError = function (err) {
	  var self = this;

	  // Throw error in different stack frame so that error handling
	  // cannot interfere with a reconnect action.
	  setTimeout(function () {
	    if (self.listeners('error').length < 1) {
	      throw err;
	    } else {
	      SCEmitter.prototype.emit.call(self, 'error', err);
	    }
	  }, 0);
	};

	SCSocket.prototype._suspendSubscriptions = function () {
	  var channel, newState;
	  for (var channelName in this._channels) {
	    if (this._channels.hasOwnProperty(channelName)) {
	      channel = this._channels[channelName];
	      if (channel.state == channel.SUBSCRIBED ||
	        channel.state == channel.PENDING) {

	        newState = channel.PENDING;
	      } else {
	        newState = channel.UNSUBSCRIBED;
	      }

	      this._triggerChannelUnsubscribe(channel, newState);
	    }
	  }
	};

	SCSocket.prototype._onSCClose = function (code, data, openAbort) {
	  var self = this;

	  this.id = null;

	  if (this.transport) {
	    this.transport.off();
	  }
	  this.pendingReconnect = false;
	  this.pendingReconnectTimeout = null;
	  clearTimeout(this._reconnectTimeoutRef);

	  this._changeToPendingAuthState();
	  this._suspendSubscriptions();

	  // Try to reconnect
	  // on server ping timeout (4000)
	  // or on client pong timeout (4001)
	  // or on close without status (1005)
	  // or on handshake failure (4003)
	  // or on socket hung up (1006)
	  if (this.options.autoReconnect) {
	    if (code == 4000 || code == 4001 || code == 1005) {
	      // If there is a ping or pong timeout or socket closes without
	      // status, don't wait before trying to reconnect - These could happen
	      // if the client wakes up after a period of inactivity and in this case we
	      // want to re-establish the connection as soon as possible.
	      this._tryReconnect(0);

	      // Codes 4500 and above will be treated as permanent disconnects.
	      // Socket will not try to auto-reconnect.
	    } else if (code != 1000 && code < 4500) {
	      this._tryReconnect();
	    }
	  }

	  if (openAbort) {
	    SCEmitter.prototype.emit.call(self, 'connectAbort', code, data);
	  } else {
	    SCEmitter.prototype.emit.call(self, 'disconnect', code, data);
	  }

	  if (!SCSocket.ignoreStatuses[code]) {
	    var failureMessage;
	    if (data) {
	      failureMessage = 'Socket connection failed: ' + data;
	    } else {
	      failureMessage = 'Socket connection failed for unknown reasons';
	    }
	    var err = new SocketProtocolError(SCSocket.errorStatuses[code] || failureMessage, code);
	    this._onSCError(err);
	  }
	};

	SCSocket.prototype._onSCEvent = function (event, data, res) {
	  var handler = this._privateEventHandlerMap[event];
	  if (handler) {
	    handler.call(this, data, res);
	  } else {
	    SCEmitter.prototype.emit.call(this, event, data, function () {
	      res && res.callback.apply(res, arguments);
	    });
	  }
	};

	SCSocket.prototype.parse = function (message) {
	  return this.transport.parse(message);
	};

	SCSocket.prototype.stringify = function (object) {
	  return this.transport.stringify(object);
	};

	SCSocket.prototype._flushEmitBuffer = function () {
	  var currentNode = this._emitBuffer.head;
	  var nextNode;

	  while (currentNode) {
	    nextNode = currentNode.next;
	    var eventObject = currentNode.data;
	    currentNode.detach();
	    this.transport.emitRaw(eventObject);
	    currentNode = nextNode;
	  }
	};

	SCSocket.prototype._handleEventAckTimeout = function (eventObject, eventNode) {
	  if (eventNode) {
	    eventNode.detach();
	  }
	  var error = new TimeoutError("Event response for '" + eventObject.event + "' timed out");
	  var callback = eventObject.callback;
	  if (callback) {
	    delete eventObject.callback;
	    callback.call(eventObject, error, eventObject);
	  }
	};

	SCSocket.prototype._emit = function (event, data, callback) {
	  var self = this;

	  if (this.state == this.CLOSED) {
	    this.connect();
	  }
	  var eventObject = {
	    event: event,
	    data: data,
	    callback: callback
	  };

	  var eventNode = new LinkedList.Item();
	  eventNode.data = eventObject;

	  eventObject.timeout = setTimeout(function () {
	    self._handleEventAckTimeout(eventObject, eventNode);
	  }, this.ackTimeout);

	  this._emitBuffer.append(eventNode);

	  if (this.state == this.OPEN) {
	    this._flushEmitBuffer();
	  }
	};

	SCSocket.prototype.send = function (data) {
	  this.transport.send(data);
	};

	SCSocket.prototype.emit = function (event, data, callback) {
	  if (this._localEvents[event] == null) {
	    this._emit(event, data, callback);
	  } else {
	    SCEmitter.prototype.emit.call(this, event, data);
	  }
	};

	SCSocket.prototype.publish = function (channelName, data, callback) {
	  var pubData = {
	    channel: this._decorateChannelName(channelName),
	    data: data
	  };
	  this.emit('#publish', pubData, callback);
	};

	SCSocket.prototype._triggerChannelSubscribe = function (channel, subscriptionOptions) {
	  var channelName = channel.name;

	  if (channel.state != channel.SUBSCRIBED) {
	    var oldState = channel.state;
	    channel.state = channel.SUBSCRIBED;

	    var stateChangeData = {
	      channel: channelName,
	      oldState: oldState,
	      newState: channel.state,
	      subscriptionOptions: subscriptionOptions
	    };
	    channel.emit('subscribeStateChange', stateChangeData);
	    channel.emit('subscribe', channelName, subscriptionOptions);
	    SCEmitter.prototype.emit.call(this, 'subscribeStateChange', stateChangeData);
	    SCEmitter.prototype.emit.call(this, 'subscribe', channelName, subscriptionOptions);
	  }
	};

	SCSocket.prototype._triggerChannelSubscribeFail = function (err, channel, subscriptionOptions) {
	  var channelName = channel.name;
	  var meetsAuthRequirements = !channel.waitForAuth || this.authState == this.AUTHENTICATED;

	  if (channel.state != channel.UNSUBSCRIBED && meetsAuthRequirements) {
	    channel.state = channel.UNSUBSCRIBED;

	    channel.emit('subscribeFail', err, channelName, subscriptionOptions);
	    SCEmitter.prototype.emit.call(this, 'subscribeFail', err, channelName, subscriptionOptions);
	  }
	};

	// Cancel any pending subscribe callback
	SCSocket.prototype._cancelPendingSubscribeCallback = function (channel) {
	  if (channel._pendingSubscriptionCid != null) {
	    this.transport.cancelPendingResponse(channel._pendingSubscriptionCid);
	    delete channel._pendingSubscriptionCid;
	  }
	};

	SCSocket.prototype._decorateChannelName = function (channelName) {
	  if (this.channelPrefix) {
	    channelName = this.channelPrefix + channelName;
	  }
	  return channelName;
	};

	SCSocket.prototype._undecorateChannelName = function (decoratedChannelName) {
	  if (this.channelPrefix && decoratedChannelName.indexOf(this.channelPrefix) == 0) {
	    return decoratedChannelName.replace(this.channelPrefix, '');
	  }
	  return decoratedChannelName;
	};

	SCSocket.prototype._trySubscribe = function (channel) {
	  var self = this;

	  var meetsAuthRequirements = !channel.waitForAuth || this.authState == this.AUTHENTICATED;

	  // We can only ever have one pending subscribe action at any given time on a channel
	  if (this.state == this.OPEN && !this.pendingConnectCallback &&
	    channel._pendingSubscriptionCid == null && meetsAuthRequirements) {

	    var options = {
	      noTimeout: true
	    };

	    var subscriptionOptions = {
	      channel: this._decorateChannelName(channel.name)
	    };
	    if (channel.waitForAuth) {
	      options.waitForAuth = true;
	      subscriptionOptions.waitForAuth = options.waitForAuth;
	    }
	    if (channel.data) {
	      subscriptionOptions.data = channel.data;
	    }

	    channel._pendingSubscriptionCid = this.transport.emit(
	      '#subscribe', subscriptionOptions, options,
	      function (err) {
	        delete channel._pendingSubscriptionCid;
	        if (err) {
	          self._triggerChannelSubscribeFail(err, channel, subscriptionOptions);
	        } else {
	          self._triggerChannelSubscribe(channel, subscriptionOptions);
	        }
	      }
	    );
	    SCEmitter.prototype.emit.call(this, 'subscribeRequest', channel.name, subscriptionOptions);
	  }
	};

	SCSocket.prototype.subscribe = function (channelName, options) {
	  var channel = this._channels[channelName];

	  if (!channel) {
	    channel = new SCChannel(channelName, this, options);
	    this._channels[channelName] = channel;
	  } else if (options) {
	    channel.setOptions(options);
	  }

	  if (channel.state == channel.UNSUBSCRIBED) {
	    channel.state = channel.PENDING;
	    this._trySubscribe(channel);
	  }

	  return channel;
	};

	SCSocket.prototype._triggerChannelUnsubscribe = function (channel, newState) {
	  var channelName = channel.name;
	  var oldState = channel.state;

	  if (newState) {
	    channel.state = newState;
	  } else {
	    channel.state = channel.UNSUBSCRIBED;
	  }
	  this._cancelPendingSubscribeCallback(channel);

	  if (oldState == channel.SUBSCRIBED) {
	    var stateChangeData = {
	      channel: channelName,
	      oldState: oldState,
	      newState: channel.state
	    };
	    channel.emit('subscribeStateChange', stateChangeData);
	    channel.emit('unsubscribe', channelName);
	    SCEmitter.prototype.emit.call(this, 'subscribeStateChange', stateChangeData);
	    SCEmitter.prototype.emit.call(this, 'unsubscribe', channelName);
	  }
	};

	SCSocket.prototype._tryUnsubscribe = function (channel) {
	  var self = this;

	  if (this.state == this.OPEN) {
	    var options = {
	      noTimeout: true
	    };
	    // If there is a pending subscribe action, cancel the callback
	    this._cancelPendingSubscribeCallback(channel);

	    // This operation cannot fail because the TCP protocol guarantees delivery
	    // so long as the connection remains open. If the connection closes,
	    // the server will automatically unsubscribe the socket and thus complete
	    // the operation on the server side.
	    var decoratedChannelName = this._decorateChannelName(channel.name);
	    this.transport.emit('#unsubscribe', decoratedChannelName, options);
	  }
	};

	SCSocket.prototype.unsubscribe = function (channelName) {

	  var channel = this._channels[channelName];

	  if (channel) {
	    if (channel.state != channel.UNSUBSCRIBED) {

	      this._triggerChannelUnsubscribe(channel);
	      this._tryUnsubscribe(channel);
	    }
	  }
	};

	SCSocket.prototype.channel = function (channelName, options) {
	  var currentChannel = this._channels[channelName];

	  if (!currentChannel) {
	    currentChannel = new SCChannel(channelName, this, options);
	    this._channels[channelName] = currentChannel;
	  }
	  return currentChannel;
	};

	SCSocket.prototype.destroyChannel = function (channelName) {
	  var channel = this._channels[channelName];
	  channel.unwatch();
	  channel.unsubscribe();
	  delete this._channels[channelName];
	};

	SCSocket.prototype.subscriptions = function (includePending) {
	  var subs = [];
	  var channel, includeChannel;
	  for (var channelName in this._channels) {
	    if (this._channels.hasOwnProperty(channelName)) {
	      channel = this._channels[channelName];

	      if (includePending) {
	        includeChannel = channel && (channel.state == channel.SUBSCRIBED ||
	          channel.state == channel.PENDING);
	      } else {
	        includeChannel = channel && channel.state == channel.SUBSCRIBED;
	      }

	      if (includeChannel) {
	        subs.push(channelName);
	      }
	    }
	  }
	  return subs;
	};

	SCSocket.prototype.isSubscribed = function (channelName, includePending) {
	  var channel = this._channels[channelName];
	  if (includePending) {
	    return !!channel && (channel.state == channel.SUBSCRIBED ||
	      channel.state == channel.PENDING);
	  }
	  return !!channel && channel.state == channel.SUBSCRIBED;
	};

	SCSocket.prototype.processPendingSubscriptions = function () {
	  var self = this;

	  this.pendingConnectCallback = false;

	  for (var i in this._channels) {
	    if (this._channels.hasOwnProperty(i)) {
	      (function (channel) {
	        if (channel.state == channel.PENDING) {
	          self._trySubscribe(channel);
	        }
	      })(this._channels[i]);
	    }
	  }
	};

	SCSocket.prototype.watch = function (channelName, handler) {
	  if (typeof handler != 'function') {
	    throw new InvalidArgumentsError('No handler function was provided');
	  }
	  this._channelEmitter.on(channelName, handler);
	};

	SCSocket.prototype.unwatch = function (channelName, handler) {
	  if (handler) {
	    this._channelEmitter.removeListener(channelName, handler);
	  } else {
	    this._channelEmitter.removeAllListeners(channelName);
	  }
	};

	SCSocket.prototype.watchers = function (channelName) {
	  return this._channelEmitter.listeners(channelName);
	};

	module.exports = SCSocket;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(43).Buffer))

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer, global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */

	'use strict'

	var base64 = __webpack_require__(44)
	var ieee754 = __webpack_require__(45)
	var isArray = __webpack_require__(46)

	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50
	Buffer.poolSize = 8192 // not used by this implementation

	var rootParent = {}

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Safari 5-7 lacks support for changing the `Object.prototype.constructor` property
	 *     on objects.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()

	function typedArraySupport () {
	  function Bar () {}
	  try {
	    var arr = new Uint8Array(1)
	    arr.foo = function () { return 42 }
	    arr.constructor = Bar
	    return arr.foo() === 42 && // typed array instances can be augmented
	        arr.constructor === Bar && // constructor can be set
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}

	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}

	/**
	 * Class: Buffer
	 * =============
	 *
	 * The Buffer constructor returns instances of `Uint8Array` that are augmented
	 * with function properties for all the node `Buffer` API functions. We use
	 * `Uint8Array` so that square bracket notation works as expected -- it returns
	 * a single octet.
	 *
	 * By augmenting the instances, we can avoid modifying the `Uint8Array`
	 * prototype.
	 */
	function Buffer (arg) {
	  if (!(this instanceof Buffer)) {
	    // Avoid going through an ArgumentsAdaptorTrampoline in the common case.
	    if (arguments.length > 1) return new Buffer(arg, arguments[1])
	    return new Buffer(arg)
	  }

	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    this.length = 0
	    this.parent = undefined
	  }

	  // Common case.
	  if (typeof arg === 'number') {
	    return fromNumber(this, arg)
	  }

	  // Slightly less common case.
	  if (typeof arg === 'string') {
	    return fromString(this, arg, arguments.length > 1 ? arguments[1] : 'utf8')
	  }

	  // Unusual.
	  return fromObject(this, arg)
	}

	function fromNumber (that, length) {
	  that = allocate(that, length < 0 ? 0 : checked(length) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < length; i++) {
	      that[i] = 0
	    }
	  }
	  return that
	}

	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8'

	  // Assumption: byteLength() return value is always < kMaxLength.
	  var length = byteLength(string, encoding) | 0
	  that = allocate(that, length)

	  that.write(string, encoding)
	  return that
	}

	function fromObject (that, object) {
	  if (Buffer.isBuffer(object)) return fromBuffer(that, object)

	  if (isArray(object)) return fromArray(that, object)

	  if (object == null) {
	    throw new TypeError('must start with number, buffer, array or string')
	  }

	  if (typeof ArrayBuffer !== 'undefined') {
	    if (object.buffer instanceof ArrayBuffer) {
	      return fromTypedArray(that, object)
	    }
	    if (object instanceof ArrayBuffer) {
	      return fromArrayBuffer(that, object)
	    }
	  }

	  if (object.length) return fromArrayLike(that, object)

	  return fromJsonObject(that, object)
	}

	function fromBuffer (that, buffer) {
	  var length = checked(buffer.length) | 0
	  that = allocate(that, length)
	  buffer.copy(that, 0, 0, length)
	  return that
	}

	function fromArray (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	// Duplicate of fromArray() to keep fromArray() monomorphic.
	function fromTypedArray (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  // Truncating the elements is probably not what people expect from typed
	  // arrays with BYTES_PER_ELEMENT > 1 but it's compatible with the behavior
	  // of the old Buffer constructor.
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	function fromArrayBuffer (that, array) {
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    array.byteLength
	    that = Buffer._augment(new Uint8Array(array))
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromTypedArray(that, new Uint8Array(array))
	  }
	  return that
	}

	function fromArrayLike (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	// Deserialize { type: 'Buffer', data: [1,2,3,...] } into a Buffer object.
	// Returns a zero-length buffer for inputs that don't conform to the spec.
	function fromJsonObject (that, object) {
	  var array
	  var length = 0

	  if (object.type === 'Buffer' && isArray(object.data)) {
	    array = object.data
	    length = checked(array.length) | 0
	  }
	  that = allocate(that, length)

	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	} else {
	  // pre-set for values that may exist in the future
	  Buffer.prototype.length = undefined
	  Buffer.prototype.parent = undefined
	}

	function allocate (that, length) {
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = Buffer._augment(new Uint8Array(length))
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that.length = length
	    that._isBuffer = true
	  }

	  var fromPool = length !== 0 && length <= Buffer.poolSize >>> 1
	  if (fromPool) that.parent = rootParent

	  return that
	}

	function checked (length) {
	  // Note: cannot use `length < kMaxLength` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}

	function SlowBuffer (subject, encoding) {
	  if (!(this instanceof SlowBuffer)) return new SlowBuffer(subject, encoding)

	  var buf = new Buffer(subject, encoding)
	  delete buf.parent
	  return buf
	}

	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}

	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }

	  if (a === b) return 0

	  var x = a.length
	  var y = b.length

	  var i = 0
	  var len = Math.min(x, y)
	  while (i < len) {
	    if (a[i] !== b[i]) break

	    ++i
	  }

	  if (i !== len) {
	    x = a[i]
	    y = b[i]
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'binary':
	    case 'base64':
	    case 'raw':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}

	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) throw new TypeError('list argument must be an Array of Buffers.')

	  if (list.length === 0) {
	    return new Buffer(0)
	  }

	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; i++) {
	      length += list[i].length
	    }
	  }

	  var buf = new Buffer(length)
	  var pos = 0
	  for (i = 0; i < list.length; i++) {
	    var item = list[i]
	    item.copy(buf, pos)
	    pos += item.length
	  }
	  return buf
	}

	function byteLength (string, encoding) {
	  if (typeof string !== 'string') string = '' + string

	  var len = string.length
	  if (len === 0) return 0

	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'binary':
	      // Deprecated
	      case 'raw':
	      case 'raws':
	        return len
	      case 'utf8':
	      case 'utf-8':
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength

	function slowToString (encoding, start, end) {
	  var loweredCase = false

	  start = start | 0
	  end = end === undefined || end === Infinity ? this.length : end | 0

	  if (!encoding) encoding = 'utf8'
	  if (start < 0) start = 0
	  if (end > this.length) end = this.length
	  if (end <= start) return ''

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)

	      case 'ascii':
	        return asciiSlice(this, start, end)

	      case 'binary':
	        return binarySlice(this, start, end)

	      case 'base64':
	        return base64Slice(this, start, end)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}

	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}

	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}

	Buffer.prototype.compare = function compare (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return 0
	  return Buffer.compare(this, b)
	}

	Buffer.prototype.indexOf = function indexOf (val, byteOffset) {
	  if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff
	  else if (byteOffset < -0x80000000) byteOffset = -0x80000000
	  byteOffset >>= 0

	  if (this.length === 0) return -1
	  if (byteOffset >= this.length) return -1

	  // Negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0)

	  if (typeof val === 'string') {
	    if (val.length === 0) return -1 // special case: looking for empty string always fails
	    return String.prototype.indexOf.call(this, val, byteOffset)
	  }
	  if (Buffer.isBuffer(val)) {
	    return arrayIndexOf(this, val, byteOffset)
	  }
	  if (typeof val === 'number') {
	    if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
	      return Uint8Array.prototype.indexOf.call(this, val, byteOffset)
	    }
	    return arrayIndexOf(this, [ val ], byteOffset)
	  }

	  function arrayIndexOf (arr, val, byteOffset) {
	    var foundIndex = -1
	    for (var i = 0; byteOffset + i < arr.length; i++) {
	      if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === val.length) return byteOffset + foundIndex
	      } else {
	        foundIndex = -1
	      }
	    }
	    return -1
	  }

	  throw new TypeError('val must be string, number or Buffer')
	}

	// `get` is deprecated
	Buffer.prototype.get = function get (offset) {
	  console.log('.get() is deprecated. Access using array indexes instead.')
	  return this.readUInt8(offset)
	}

	// `set` is deprecated
	Buffer.prototype.set = function set (v, offset) {
	  console.log('.set() is deprecated. Access using array indexes instead.')
	  return this.writeUInt8(v, offset)
	}

	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new Error('Invalid hex string')

	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; i++) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) throw new Error('Invalid hex string')
	    buf[offset + i] = parsed
	  }
	  return i
	}

	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}

	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}

	function binaryWrite (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}

	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}

	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}

	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    var swap = encoding
	    encoding = offset
	    offset = length | 0
	    length = swap
	  }

	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining

	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('attempt to write outside buffer bounds')
	  }

	  if (!encoding) encoding = 'utf8'

	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)

	      case 'ascii':
	        return asciiWrite(this, string, offset, length)

	      case 'binary':
	        return binaryWrite(this, string, offset, length)

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}

	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}

	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []

	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1

	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }

	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }

	    res.push(codePoint)
	    i += bytesPerSequence
	  }

	  return decodeCodePointsArray(res)
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000

	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}

	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; i++) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}

	function binarySlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; i++) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}

	function hexSlice (buf, start, end) {
	  var len = buf.length

	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len

	  var out = ''
	  for (var i = start; i < end; i++) {
	    out += toHex(buf[i])
	  }
	  return out
	}

	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}

	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end

	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }

	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }

	  if (end < start) end = start

	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = Buffer._augment(this.subarray(start, end))
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; i++) {
	      newBuf[i] = this[i + start]
	    }
	  }

	  if (newBuf.length) newBuf.parent = this.parent || this

	  return newBuf
	}

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}

	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }

	  return val
	}

	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }

	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }

	  return val
	}

	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}

	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}

	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}

	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}

	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}

	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}

	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}

	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}

	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}

	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}

	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}

	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}

	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('value is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('index out of range')
	}

	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}

	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}

	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = 0
	  var mul = 1
	  var sub = value < 0 ? 1 : 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  var sub = value < 0 ? 1 : 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (value > max || value < min) throw new RangeError('value is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('index out of range')
	  if (offset < 0) throw new RangeError('index out of range')
	}

	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}

	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}

	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}

	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start

	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')

	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }

	  var len = end - start
	  var i

	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; i--) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; i++) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    target._set(this.subarray(start, start + len), targetStart)
	  }

	  return len
	}

	// fill(value, start=0, end=buffer.length)
	Buffer.prototype.fill = function fill (value, start, end) {
	  if (!value) value = 0
	  if (!start) start = 0
	  if (!end) end = this.length

	  if (end < start) throw new RangeError('end < start')

	  // Fill 0 bytes; we're done
	  if (end === start) return
	  if (this.length === 0) return

	  if (start < 0 || start >= this.length) throw new RangeError('start out of bounds')
	  if (end < 0 || end > this.length) throw new RangeError('end out of bounds')

	  var i
	  if (typeof value === 'number') {
	    for (i = start; i < end; i++) {
	      this[i] = value
	    }
	  } else {
	    var bytes = utf8ToBytes(value.toString())
	    var len = bytes.length
	    for (i = start; i < end; i++) {
	      this[i] = bytes[i % len]
	    }
	  }

	  return this
	}

	/**
	 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
	 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
	 */
	Buffer.prototype.toArrayBuffer = function toArrayBuffer () {
	  if (typeof Uint8Array !== 'undefined') {
	    if (Buffer.TYPED_ARRAY_SUPPORT) {
	      return (new Buffer(this)).buffer
	    } else {
	      var buf = new Uint8Array(this.length)
	      for (var i = 0, len = buf.length; i < len; i += 1) {
	        buf[i] = this[i]
	      }
	      return buf.buffer
	    }
	  } else {
	    throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
	  }
	}

	// HELPER FUNCTIONS
	// ================

	var BP = Buffer.prototype

	/**
	 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
	 */
	Buffer._augment = function _augment (arr) {
	  arr.constructor = Buffer
	  arr._isBuffer = true

	  // save reference to original Uint8Array set method before overwriting
	  arr._set = arr.set

	  // deprecated
	  arr.get = BP.get
	  arr.set = BP.set

	  arr.write = BP.write
	  arr.toString = BP.toString
	  arr.toLocaleString = BP.toString
	  arr.toJSON = BP.toJSON
	  arr.equals = BP.equals
	  arr.compare = BP.compare
	  arr.indexOf = BP.indexOf
	  arr.copy = BP.copy
	  arr.slice = BP.slice
	  arr.readUIntLE = BP.readUIntLE
	  arr.readUIntBE = BP.readUIntBE
	  arr.readUInt8 = BP.readUInt8
	  arr.readUInt16LE = BP.readUInt16LE
	  arr.readUInt16BE = BP.readUInt16BE
	  arr.readUInt32LE = BP.readUInt32LE
	  arr.readUInt32BE = BP.readUInt32BE
	  arr.readIntLE = BP.readIntLE
	  arr.readIntBE = BP.readIntBE
	  arr.readInt8 = BP.readInt8
	  arr.readInt16LE = BP.readInt16LE
	  arr.readInt16BE = BP.readInt16BE
	  arr.readInt32LE = BP.readInt32LE
	  arr.readInt32BE = BP.readInt32BE
	  arr.readFloatLE = BP.readFloatLE
	  arr.readFloatBE = BP.readFloatBE
	  arr.readDoubleLE = BP.readDoubleLE
	  arr.readDoubleBE = BP.readDoubleBE
	  arr.writeUInt8 = BP.writeUInt8
	  arr.writeUIntLE = BP.writeUIntLE
	  arr.writeUIntBE = BP.writeUIntBE
	  arr.writeUInt16LE = BP.writeUInt16LE
	  arr.writeUInt16BE = BP.writeUInt16BE
	  arr.writeUInt32LE = BP.writeUInt32LE
	  arr.writeUInt32BE = BP.writeUInt32BE
	  arr.writeIntLE = BP.writeIntLE
	  arr.writeIntBE = BP.writeIntBE
	  arr.writeInt8 = BP.writeInt8
	  arr.writeInt16LE = BP.writeInt16LE
	  arr.writeInt16BE = BP.writeInt16BE
	  arr.writeInt32LE = BP.writeInt32LE
	  arr.writeInt32BE = BP.writeInt32BE
	  arr.writeFloatLE = BP.writeFloatLE
	  arr.writeFloatBE = BP.writeFloatBE
	  arr.writeDoubleLE = BP.writeDoubleLE
	  arr.writeDoubleBE = BP.writeDoubleBE
	  arr.fill = BP.fill
	  arr.inspect = BP.inspect
	  arr.toArrayBuffer = BP.toArrayBuffer

	  return arr
	}

	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}

	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}

	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}

	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []

	  for (var i = 0; i < length; i++) {
	    codePoint = string.charCodeAt(i)

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }

	        // valid lead
	        leadSurrogate = codePoint

	        continue
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }

	    leadSurrogate = null

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }

	  return bytes
	}

	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}

	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    if ((units -= 2) < 0) break

	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }

	  return byteArray
	}

	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}

	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; i++) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(43).Buffer, (function() { return this; }())))

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

	;(function (exports) {
		'use strict';

	  var Arr = (typeof Uint8Array !== 'undefined')
	    ? Uint8Array
	    : Array

		var PLUS   = '+'.charCodeAt(0)
		var SLASH  = '/'.charCodeAt(0)
		var NUMBER = '0'.charCodeAt(0)
		var LOWER  = 'a'.charCodeAt(0)
		var UPPER  = 'A'.charCodeAt(0)
		var PLUS_URL_SAFE = '-'.charCodeAt(0)
		var SLASH_URL_SAFE = '_'.charCodeAt(0)

		function decode (elt) {
			var code = elt.charCodeAt(0)
			if (code === PLUS ||
			    code === PLUS_URL_SAFE)
				return 62 // '+'
			if (code === SLASH ||
			    code === SLASH_URL_SAFE)
				return 63 // '/'
			if (code < NUMBER)
				return -1 //no match
			if (code < NUMBER + 10)
				return code - NUMBER + 26 + 26
			if (code < UPPER + 26)
				return code - UPPER
			if (code < LOWER + 26)
				return code - LOWER + 26
		}

		function b64ToByteArray (b64) {
			var i, j, l, tmp, placeHolders, arr

			if (b64.length % 4 > 0) {
				throw new Error('Invalid string. Length must be a multiple of 4')
			}

			// the number of equal signs (place holders)
			// if there are two placeholders, than the two characters before it
			// represent one byte
			// if there is only one, then the three characters before it represent 2 bytes
			// this is just a cheap hack to not do indexOf twice
			var len = b64.length
			placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

			// base64 is 4/3 + up to two characters of the original data
			arr = new Arr(b64.length * 3 / 4 - placeHolders)

			// if there are placeholders, only get up to the last complete 4 chars
			l = placeHolders > 0 ? b64.length - 4 : b64.length

			var L = 0

			function push (v) {
				arr[L++] = v
			}

			for (i = 0, j = 0; i < l; i += 4, j += 3) {
				tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
				push((tmp & 0xFF0000) >> 16)
				push((tmp & 0xFF00) >> 8)
				push(tmp & 0xFF)
			}

			if (placeHolders === 2) {
				tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
				push(tmp & 0xFF)
			} else if (placeHolders === 1) {
				tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
				push((tmp >> 8) & 0xFF)
				push(tmp & 0xFF)
			}

			return arr
		}

		function uint8ToBase64 (uint8) {
			var i,
				extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
				output = "",
				temp, length

			function encode (num) {
				return lookup.charAt(num)
			}

			function tripletToBase64 (num) {
				return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
			}

			// go through the array every three bytes, we'll deal with trailing stuff later
			for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
				temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
				output += tripletToBase64(temp)
			}

			// pad the end with zeros, but make sure to not forget the extra bytes
			switch (extraBytes) {
				case 1:
					temp = uint8[uint8.length - 1]
					output += encode(temp >> 2)
					output += encode((temp << 4) & 0x3F)
					output += '=='
					break
				case 2:
					temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
					output += encode(temp >> 10)
					output += encode((temp >> 4) & 0x3F)
					output += encode((temp << 2) & 0x3F)
					output += '='
					break
			}

			return output
		}

		exports.toByteArray = b64ToByteArray
		exports.fromByteArray = uint8ToBase64
	}( false ? (this.base64js = {}) : exports))


/***/ },
/* 45 */
/***/ function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]

	  i += d

	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}

	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

	  value = Math.abs(value)

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }

	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128
	}


/***/ },
/* 46 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var Emitter = __webpack_require__(48);

	if (!Object.create) {
	  Object.create = __webpack_require__(49);
	}

	var SCEmitter = function () {
	  Emitter.call(this);
	};

	SCEmitter.prototype = Object.create(Emitter.prototype);

	SCEmitter.prototype.emit = function (event) {
	  if (event == 'error' && this.domain) {
	    // Emit the error on the domain if it has one.
	    // See https://github.com/joyent/node/blob/ef4344311e19a4f73c031508252b21712b22fe8a/lib/events.js#L78-85
	    
	    var err = arguments[1];
	    
	    if (!err) {
	      err = new Error('Uncaught, unspecified "error" event.');
	    }
	    err.domainEmitter = this;
	    err.domain = this.domain;
	    err.domainThrown = false;
	    this.domain.emit('error', err);
	  }
	  Emitter.prototype.emit.apply(this, arguments);
	};

	module.exports.SCEmitter = SCEmitter;


/***/ },
/* 48 */
/***/ function(module, exports) {

	
	/**
	 * Expose `Emitter`.
	 */

	module.exports = Emitter;

	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */

	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};

	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */

	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}

	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
	    .push(fn);
	  return this;
	};

	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.once = function(event, fn){
	  function on() {
	    this.off(event, on);
	    fn.apply(this, arguments);
	  }

	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};

	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};

	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }

	  // specific event
	  var callbacks = this._callbacks['$' + event];
	  if (!callbacks) return this;

	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks['$' + event];
	    return this;
	  }

	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};

	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */

	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks['$' + event];

	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }

	  return this;
	};

	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */

	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks['$' + event] || [];
	};

	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */

	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports.create = (function () {
	  function F() {};

	  return function (o) {
	    if (arguments.length != 1) {
	      throw new Error('Object.create implementation only accepts one parameter.');
	    }
	    F.prototype = o;
	    return new F();
	  }
	})();

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var SCEmitter = __webpack_require__(47).SCEmitter;

	var SCChannel = function (name, client, options) {
	  var self = this;

	  SCEmitter.call(this);

	  this.PENDING = 'pending';
	  this.SUBSCRIBED = 'subscribed';
	  this.UNSUBSCRIBED = 'unsubscribed';

	  this.name = name;
	  this.state = this.UNSUBSCRIBED;
	  this.client = client;

	  this.options = options || {};
	  this.setOptions(this.options);
	};

	SCChannel.prototype = Object.create(SCEmitter.prototype);

	SCChannel.prototype.setOptions = function (options) {
	  if (!options) {
	    options = {};
	  }
	  this.waitForAuth = options.waitForAuth || false;
	  if (options.data !== undefined) {
	    this.data = options.data;
	  }
	};

	SCChannel.prototype.getState = function () {
	  return this.state;
	};

	SCChannel.prototype.subscribe = function (options) {
	  this.client.subscribe(this.name, options);
	};

	SCChannel.prototype.unsubscribe = function () {
	  this.client.unsubscribe(this.name);
	};

	SCChannel.prototype.isSubscribed = function (includePending) {
	  return this.client.isSubscribed(this.name, includePending);
	};

	SCChannel.prototype.publish = function (data, callback) {
	  this.client.publish(this.name, data, callback);
	};

	SCChannel.prototype.watch = function (handler) {
	  this.client.watch(this.name, handler);
	};

	SCChannel.prototype.unwatch = function (handler) {
	  this.client.unwatch(this.name, handler);
	};

	SCChannel.prototype.watchers = function () {
	  return this.client.watchers(this.name);
	};

	SCChannel.prototype.destroy = function () {
	  this.client.destroyChannel(this.name);
	};

	module.exports.SCChannel = SCChannel;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var scErrors = __webpack_require__(52);
	var InvalidActionError = scErrors.InvalidActionError;

	var Response = function (socket, id) {
	  this.socket = socket;
	  this.id = id;
	  this.sent = false;
	};

	Response.prototype._respond = function (responseData) {
	  if (this.sent) {
	    throw new InvalidActionError('Response ' + this.id + ' has already been sent');
	  } else {
	    this.sent = true;
	    this.socket.send(this.socket.stringify(responseData));
	  }
	};

	Response.prototype.end = function (data) {
	  if (this.id) {
	    var responseData = {
	      rid: this.id
	    };
	    if (data !== undefined) {
	      responseData.data = data;
	    }
	    this._respond(responseData);
	  }
	};

	Response.prototype.error = function (error, data) {
	  if (this.id) {
	    var err = scErrors.dehydrateError(error);

	    var responseData = {
	      rid: this.id,
	      error: err
	    };
	    if (data !== undefined) {
	      responseData.data = data;
	    }

	    this._respond(responseData);
	  }
	};

	Response.prototype.callback = function (error, data) {
	  if (error) {
	    this.error(error, data);
	  } else {
	    this.end(data);
	  }
	};

	module.exports.Response = Response;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var cycle = __webpack_require__(53);

	var isStrict = (function () { return !this; })();

	function AuthTokenExpiredError(message, expiry) {
	  if (Error.captureStackTrace && !isStrict) {
	    Error.captureStackTrace(this, arguments.callee);
	  } else {
	    this.stack = (new Error()).stack;
	  }
	  this.name = 'AuthTokenExpiredError';
	  this.message = message;
	  this.expiry = expiry;
	};
	AuthTokenExpiredError.prototype = Object.create(Error.prototype);


	function AuthTokenInvalidError(message) {
	  if (Error.captureStackTrace && !isStrict) {
	    Error.captureStackTrace(this, arguments.callee);
	  } else {
	    this.stack = (new Error()).stack;
	  }
	  this.name = 'AuthTokenInvalidError';
	  this.message = message;
	};
	AuthTokenInvalidError.prototype = Object.create(Error.prototype);


	function SilentMiddlewareBlockedError(message, type) {
	  if (Error.captureStackTrace && !isStrict) {
	    Error.captureStackTrace(this, arguments.callee);
	  } else {
	    this.stack = (new Error()).stack;
	  }
	  this.name = 'SilentMiddlewareBlockedError';
	  this.message = message;
	  this.type = type;
	};
	SilentMiddlewareBlockedError.prototype = Object.create(Error.prototype);


	function InvalidActionError(message) {
	  if (Error.captureStackTrace && !isStrict) {
	    Error.captureStackTrace(this, arguments.callee);
	  } else {
	    this.stack = (new Error()).stack;
	  }
	  this.name = 'InvalidActionError';
	  this.message = message;
	};
	InvalidActionError.prototype = Object.create(Error.prototype);

	function InvalidArgumentsError(message) {
	  if (Error.captureStackTrace && !isStrict) {
	    Error.captureStackTrace(this, arguments.callee);
	  } else {
	    this.stack = (new Error()).stack;
	  }
	  this.name = 'InvalidArgumentsError';
	  this.message = message;
	};
	InvalidArgumentsError.prototype = Object.create(Error.prototype);

	function InvalidOptionsError(message) {
	  if (Error.captureStackTrace && !isStrict) {
	    Error.captureStackTrace(this, arguments.callee);
	  } else {
	    this.stack = (new Error()).stack;
	  }
	  this.name = 'InvalidOptionsError';
	  this.message = message;
	};
	InvalidOptionsError.prototype = Object.create(Error.prototype);


	function InvalidMessageError(message) {
	  if (Error.captureStackTrace && !isStrict) {
	    Error.captureStackTrace(this, arguments.callee);
	  } else {
	    this.stack = (new Error()).stack;
	  }
	  this.name = 'InvalidMessageError';
	  this.message = message;
	};
	InvalidMessageError.prototype = Object.create(Error.prototype);


	function SocketProtocolError(message, code) {
	  if (Error.captureStackTrace && !isStrict) {
	    Error.captureStackTrace(this, arguments.callee);
	  } else {
	    this.stack = (new Error()).stack;
	  }
	  this.name = 'SocketProtocolError';
	  this.message = message;
	  this.code = code;
	};
	SocketProtocolError.prototype = Object.create(Error.prototype);


	function ServerProtocolError(message) {
	  if (Error.captureStackTrace && !isStrict) {
	    Error.captureStackTrace(this, arguments.callee);
	  } else {
	    this.stack = (new Error()).stack;
	  }
	  this.name = 'ServerProtocolError';
	  this.message = message;
	};
	ServerProtocolError.prototype = Object.create(Error.prototype);

	function HTTPServerError(message) {
	  if (Error.captureStackTrace && !isStrict) {
	    Error.captureStackTrace(this, arguments.callee);
	  } else {
	    this.stack = (new Error()).stack;
	  }
	  this.name = 'HTTPServerError';
	  this.message = message;
	};
	HTTPServerError.prototype = Object.create(Error.prototype);


	function ResourceLimitError(message) {
	  if (Error.captureStackTrace && !isStrict) {
	    Error.captureStackTrace(this, arguments.callee);
	  } else {
	    this.stack = (new Error()).stack;
	  }
	  this.name = 'ResourceLimitError';
	  this.message = message;
	};
	ResourceLimitError.prototype = Object.create(Error.prototype);


	function TimeoutError(message) {
	  if (Error.captureStackTrace && !isStrict) {
	    Error.captureStackTrace(this, arguments.callee);
	  } else {
	    this.stack = (new Error()).stack;
	  }
	  this.name = 'TimeoutError';
	  this.message = message;
	};
	TimeoutError.prototype = Object.create(Error.prototype);


	function BrokerError(message) {
	  if (Error.captureStackTrace && !isStrict) {
	    Error.captureStackTrace(this, arguments.callee);
	  } else {
	    this.stack = (new Error()).stack;
	  }
	  this.name = 'BrokerError';
	  this.message = message;
	};
	BrokerError.prototype = Object.create(Error.prototype);


	function ProcessExitError(message, code) {
	  if (Error.captureStackTrace && !isStrict) {
	    Error.captureStackTrace(this, arguments.callee);
	  } else {
	    this.stack = (new Error()).stack;
	  }
	  this.name = 'ProcessExitError';
	  this.message = message;
	  this.code = code;
	};
	ProcessExitError.prototype = Object.create(Error.prototype);


	function UnknownError(message) {
	  if (Error.captureStackTrace && !isStrict) {
	    Error.captureStackTrace(this, arguments.callee);
	  } else {
	    this.stack = (new Error()).stack;
	  }
	  this.name = 'UnknownError';
	  this.message = message;
	};
	UnknownError.prototype = Object.create(Error.prototype);


	// Expose all error types

	module.exports = {
	  AuthTokenExpiredError: AuthTokenExpiredError,
	  AuthTokenInvalidError: AuthTokenInvalidError,
	  SilentMiddlewareBlockedError: SilentMiddlewareBlockedError,
	  InvalidActionError: InvalidActionError,
	  InvalidArgumentsError: InvalidArgumentsError,
	  InvalidOptionsError: InvalidOptionsError,
	  InvalidMessageError: InvalidMessageError,
	  SocketProtocolError: SocketProtocolError,
	  ServerProtocolError: ServerProtocolError,
	  HTTPServerError: HTTPServerError,
	  ResourceLimitError: ResourceLimitError,
	  TimeoutError: TimeoutError,
	  BrokerError: BrokerError,
	  ProcessExitError: ProcessExitError,
	  UnknownError: UnknownError
	};

	module.exports.socketProtocolErrorStatuses = {
	  1001: 'Socket was disconnected',
	  1002: 'A WebSocket protocol error was encountered',
	  1003: 'Server terminated socket because it received invalid data',
	  1005: 'Socket closed without status code',
	  1006: 'Socket hung up',
	  1007: 'Message format was incorrect',
	  1008: 'Encountered a policy violation',
	  1009: 'Message was too big to process',
	  1010: 'Client ended the connection because the server did not comply with extension requirements',
	  1011: 'Server encountered an unexpected fatal condition',
	  4000: 'Server ping timed out',
	  4001: 'Client pong timed out',
	  4002: 'Server failed to sign auth token',
	  4003: 'Failed to complete handshake',
	  4004: 'Client failed to save auth token',
	  4005: 'Did not receive #handshake from client before timeout',
	  4006: 'Failed to bind socket to message broker',
	  4007: 'Client connection establishment timed out'
	};

	module.exports.socketProtocolIgnoreStatuses = {
	  1000: 'Socket closed normally',
	  1001: 'Socket hung up'
	};

	// Properties related to error domains cannot be serialized.
	var unserializableErrorProperties = {
	  domain: 1,
	  domainEmitter: 1,
	  domainThrown: 1
	};

	module.exports.dehydrateError = function (error, includeStackTrace) {
	  var dehydratedError;
	  if (typeof error == 'string') {
	      dehydratedError = error;
	  } else {
	    dehydratedError = {
	      message: error.message
	    };
	    if (includeStackTrace) {
	      dehydratedError.stack = error.stack;
	    }
	    for (var i in error) {
	      if (!unserializableErrorProperties[i]) {
	        dehydratedError[i] = error[i];
	      }
	    }
	  }
	  return cycle.decycle(dehydratedError);
	};

	module.exports.hydrateError = function (error) {
	  var hydratedError = null;
	  if (error != null) {
	    if (typeof error == 'string') {
	      hydratedError = error;
	    } else {
	      hydratedError = new Error(error.message);
	      for (var i in error) {
	        if (error.hasOwnProperty(i)) {
	          hydratedError[i] = error[i];
	        }
	      }
	    }
	  }
	  return hydratedError;
	};


/***/ },
/* 53 */
/***/ function(module, exports) {

	/*
	    cycle.js
	    2013-02-19

	    Public Domain.

	    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

	    This code should be minified before deployment.
	    See http://javascript.crockford.com/jsmin.html

	    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
	    NOT CONTROL.
	*/

	/*jslint evil: true, regexp: true */

	/*members $ref, apply, call, decycle, hasOwnProperty, length, prototype, push,
	    retrocycle, stringify, test, toString
	*/

	var cycle = exports;

	cycle.decycle = function decycle(object) {
	    'use strict';

	// Make a deep copy of an object or array, assuring that there is at most
	// one instance of each object or array in the resulting structure. The
	// duplicate references (which might be forming cycles) are replaced with
	// an object of the form
	//      {$ref: PATH}
	// where the PATH is a JSONPath string that locates the first occurance.
	// So,
	//      var a = [];
	//      a[0] = a;
	//      return JSON.stringify(JSON.decycle(a));
	// produces the string '[{"$ref":"$"}]'.

	// JSONPath is used to locate the unique object. $ indicates the top level of
	// the object or array. [NUMBER] or [STRING] indicates a child member or
	// property.

	    var objects = [],   // Keep a reference to each unique object or array
	        paths = [];     // Keep the path to each unique object or array

	    return (function derez(value, path) {

	// The derez recurses through the object, producing the deep copy.

	        var i,          // The loop counter
	            name,       // Property name
	            nu;         // The new object or array

	// typeof null === 'object', so go on if this value is really an object but not
	// one of the weird builtin objects.

	        if (typeof value === 'object' && value !== null &&
	                !(value instanceof Boolean) &&
	                !(value instanceof Date)    &&
	                !(value instanceof Number)  &&
	                !(value instanceof RegExp)  &&
	                !(value instanceof String)) {

	// If the value is an object or array, look to see if we have already
	// encountered it. If so, return a $ref/path object. This is a hard way,
	// linear search that will get slower as the number of unique objects grows.

	            for (i = 0; i < objects.length; i += 1) {
	                if (objects[i] === value) {
	                    return {$ref: paths[i]};
	                }
	            }

	// Otherwise, accumulate the unique value and its path.

	            objects.push(value);
	            paths.push(path);

	// If it is an array, replicate the array.

	            if (Object.prototype.toString.apply(value) === '[object Array]') {
	                nu = [];
	                for (i = 0; i < value.length; i += 1) {
	                    nu[i] = derez(value[i], path + '[' + i + ']');
	                }
	            } else {

	// If it is an object, replicate the object.

	                nu = {};
	                for (name in value) {
	                    if (Object.prototype.hasOwnProperty.call(value, name)) {
	                        nu[name] = derez(value[name],
	                            path + '[' + JSON.stringify(name) + ']');
	                    }
	                }
	            }
	            return nu;
	        }
	        return value;
	    }(object, '$'));
	};


	cycle.retrocycle = function retrocycle($) {
	    'use strict';

	// Restore an object that was reduced by decycle. Members whose values are
	// objects of the form
	//      {$ref: PATH}
	// are replaced with references to the value found by the PATH. This will
	// restore cycles. The object will be mutated.

	// The eval function is used to locate the values described by a PATH. The
	// root object is kept in a $ variable. A regular expression is used to
	// assure that the PATH is extremely well formed. The regexp contains nested
	// * quantifiers. That has been known to have extremely bad performance
	// problems on some browsers for very long strings. A PATH is expected to be
	// reasonably short. A PATH is allowed to belong to a very restricted subset of
	// Goessner's JSONPath.

	// So,
	//      var s = '[{"$ref":"$"}]';
	//      return JSON.retrocycle(JSON.parse(s));
	// produces an array containing a single element which is the array itself.

	    var px =
	        /^\$(?:\[(?:\d+|\"(?:[^\\\"\u0000-\u001f]|\\([\\\"\/bfnrt]|u[0-9a-zA-Z]{4}))*\")\])*$/;

	    (function rez(value) {

	// The rez function walks recursively through the object looking for $ref
	// properties. When it finds one that has a value that is a path, then it
	// replaces the $ref object with a reference to the value that is found by
	// the path.

	        var i, item, name, path;

	        if (value && typeof value === 'object') {
	            if (Object.prototype.toString.apply(value) === '[object Array]') {
	                for (i = 0; i < value.length; i += 1) {
	                    item = value[i];
	                    if (item && typeof item === 'object') {
	                        path = item.$ref;
	                        if (typeof path === 'string' && px.test(path)) {
	                            value[i] = eval(path);
	                        } else {
	                            rez(item);
	                        }
	                    }
	                }
	            } else {
	                for (name in value) {
	                    if (typeof value[name] === 'object') {
	                        item = value[name];
	                        if (item) {
	                            path = item.$ref;
	                            if (typeof path === 'string' && px.test(path)) {
	                                value[name] = eval(path);
	                            } else {
	                                rez(item);
	                            }
	                        }
	                    }
	                }
	            }
	        }
	    }($));
	    return $;
	};


/***/ },
/* 54 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {var AuthEngine = function () {
	  this._internalStorage = {};
	};

	AuthEngine.prototype._isLocalStorageEnabled = function () {
	  var err;
	  try {
	    // Some browsers will throw an error here if localStorage is disabled.
	    global.localStorage;
	    
	    // Safari, in Private Browsing Mode, looks like it supports localStorage but all calls to setItem
	    // throw QuotaExceededError. We're going to detect this and avoid hard to debug edge cases.
	    global.localStorage.setItem('__scLocalStorageTest', 1);
	    global.localStorage.removeItem('__scLocalStorageTest');
	  } catch (e) {
	    err = e;
	  }
	  return !err;
	};

	AuthEngine.prototype.saveToken = function (name, token, options, callback) {
	  if (this._isLocalStorageEnabled() && global.localStorage) {
	    global.localStorage.setItem(name, token);
	  } else {
	    this._internalStorage[name] = token;
	  }
	  callback && callback(null, token);
	};

	AuthEngine.prototype.removeToken = function (name, callback) {
	  var token;

	  this.loadToken(name, function (err, authToken) {
	    token = authToken;
	  });

	  if (this._isLocalStorageEnabled() && global.localStorage) {
	    global.localStorage.removeItem(name);
	  }
	  delete this._internalStorage[name];

	  callback && callback(null, token);
	};

	AuthEngine.prototype.loadToken = function (name, callback) {
	  var token;

	  if (this._isLocalStorageEnabled() && global.localStorage) {
	    token = global.localStorage.getItem(name);
	  } else {
	    token = this._internalStorage[name] || null;
	  }
	  callback(null, token);
	};

	module.exports.AuthEngine = AuthEngine;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var SCEmitter = __webpack_require__(47).SCEmitter;
	var formatter = __webpack_require__(56);
	var Response = __webpack_require__(51).Response;
	var querystring = __webpack_require__(57);
	var WebSocket = __webpack_require__(60);

	var scErrors = __webpack_require__(52);
	var TimeoutError = scErrors.TimeoutError;


	var SCTransport = function (authEngine, options) {
	  this.state = this.CLOSED;
	  this.auth = authEngine;
	  this.options = options;
	  this.connectTimeout = options.connectTimeout;
	  this.pingTimeout = options.ackTimeout;
	  this.callIdGenerator = options.callIdGenerator;

	  this._pingTimeoutTicker = null;
	  this._callbackMap = {};

	  this.open();
	};

	SCTransport.prototype = Object.create(SCEmitter.prototype);

	SCTransport.CONNECTING = SCTransport.prototype.CONNECTING = 'connecting';
	SCTransport.OPEN = SCTransport.prototype.OPEN = 'open';
	SCTransport.CLOSED = SCTransport.prototype.CLOSED = 'closed';

	SCTransport.prototype.uri = function () {
	  var query = this.options.query || {};
	  var schema = this.options.secure ? 'wss' : 'ws';
	  var port = '';

	  if (this.options.port && (('wss' == schema && this.options.port != 443)
	    || ('ws' == schema && this.options.port != 80))) {
	    port = ':' + this.options.port;
	  }

	  if (this.options.timestampRequests) {
	    query[this.options.timestampParam] = (new Date()).getTime();
	  }

	  query = querystring.stringify(query);

	  if (query.length) {
	    query = '?' + query;
	  }

	  return schema + '://' + this.options.hostname + port + this.options.path + query;
	};

	SCTransport.prototype.open = function () {
	  var self = this;

	  this.state = this.CONNECTING;
	  var uri = this.uri();

	  var wsSocket = new WebSocket(uri, null, this.options);
	  wsSocket.binaryType = this.options.binaryType;
	  this.socket = wsSocket;

	  wsSocket.onopen = function () {
	    self._onOpen();
	  };

	  wsSocket.onclose = function (event) {
	    self._onClose(event.code, event.reason);
	  };

	  wsSocket.onmessage = function (message, flags) {
	    self._onMessage(message.data);
	  };

	  wsSocket.onerror = function (error) {
	    // The onclose event will be called automatically after the onerror event
	    // if the socket is connected - Otherwise, if it's in the middle of
	    // connecting, we want to close it manually with a 1006 - This is necessary
	    // to prevent inconsistent behavior when running the client in Node.js
	    // vs in a browser.

	    if (self.state === self.CONNECTING) {
	      self._onClose(1006);
	    }
	  };

	  this._connectTimeoutRef = setTimeout(function () {
	    self._onClose(4007);
	    self.socket.close(4007);
	  }, this.connectTimeout);
	};

	SCTransport.prototype._onOpen = function () {
	  var self = this;

	  clearTimeout(this._connectTimeoutRef);
	  this._resetPingTimeout();

	  this._handshake(function (err, status) {
	    if (err) {
	      self._onError(err);
	      self._onClose(4003);
	      self.socket.close(4003);
	    } else {
	      self.state = self.OPEN;
	      SCEmitter.prototype.emit.call(self, 'open', status);
	      self._resetPingTimeout();
	    }
	  });
	};

	SCTransport.prototype._handshake = function (callback) {
	  var self = this;
	  this.auth.loadToken(this.options.authTokenName, function (err, token) {
	    if (err) {
	      callback(err);
	    } else {
	      // Don't wait for this.state to be 'open'.
	      // The underlying WebSocket (this.socket) is already open.
	      var options = {
	        force: true
	      };
	      self.emit('#handshake', {
	        authToken: token
	      }, options, function (err, status) {
	        if (status) {
	          // Add the token which was used as part of authentication attempt
	          // to the status object.
	          status.authToken = token;
	          if (status.authError) {
	            status.authError = scErrors.hydrateError(status.authError);
	          }
	        }
	        callback(err, status);
	      });
	    }
	  });
	};

	SCTransport.prototype._onClose = function (code, data) {
	  delete this.socket.onopen;
	  delete this.socket.onclose;
	  delete this.socket.onmessage;
	  delete this.socket.onerror;

	  clearTimeout(this._connectTimeoutRef);

	  if (this.state == this.OPEN) {
	    this.state = this.CLOSED;
	    SCEmitter.prototype.emit.call(this, 'close', code, data);

	  } else if (this.state == this.CONNECTING) {
	    this.state = this.CLOSED;
	    SCEmitter.prototype.emit.call(this, 'openAbort', code, data);
	  }
	};

	SCTransport.prototype._onMessage = function (message) {
	  SCEmitter.prototype.emit.call(this, 'event', 'message', message);

	  // If ping
	  if (message == '#1') {
	    this._resetPingTimeout();
	    if (this.socket.readyState == this.socket.OPEN) {
	      this.socket.send('#2');
	    }
	  } else {
	    var obj;
	    try {
	      obj = this.parse(message);
	    } catch (err) {
	      obj = message;
	    }
	    var event = obj.event;

	    if (event) {
	      var response = new Response(this, obj.cid);
	      SCEmitter.prototype.emit.call(this, 'event', event, obj.data, response);
	    } else if (obj.rid != null) {

	      var eventObject = this._callbackMap[obj.rid];
	      if (eventObject) {
	        clearTimeout(eventObject.timeout);
	        delete this._callbackMap[obj.rid];

	        if (eventObject.callback) {
	          var rehydratedError = scErrors.hydrateError(obj.error);
	          eventObject.callback(rehydratedError, obj.data);
	        }
	      }
	    } else {
	      SCEmitter.prototype.emit.call(this, 'event', 'raw', obj);
	    }
	  }
	};

	SCTransport.prototype._onError = function (err) {
	  SCEmitter.prototype.emit.call(this, 'error', err);
	};

	SCTransport.prototype._resetPingTimeout = function () {
	  var self = this;

	  var now = (new Date()).getTime();
	  clearTimeout(this._pingTimeoutTicker);

	  this._pingTimeoutTicker = setTimeout(function () {
	    self._onClose(4000);
	    self.socket.close(4000);
	  }, this.pingTimeout);
	};

	SCTransport.prototype.getBytesReceived = function () {
	  return this.socket.bytesReceived;
	};

	SCTransport.prototype.close = function (code, data) {
	  code = code || 1000;

	  if (this.state == this.OPEN) {
	    var packet = {
	      code: code,
	      data: data
	    };
	    this.emit('#disconnect', packet);

	    this._onClose(code, data);
	    this.socket.close(code);

	  } else if (this.state == this.CONNECTING) {
	    this._onClose(code, data);
	    this.socket.close(code);
	  }
	};

	SCTransport.prototype.emitRaw = function (eventObject) {
	  eventObject.cid = this.callIdGenerator();

	  if (eventObject.callback) {
	    this._callbackMap[eventObject.cid] = eventObject;
	  }

	  var simpleEventObject = {
	    event: eventObject.event,
	    data: eventObject.data,
	    cid: eventObject.cid
	  };

	  this.sendObject(simpleEventObject);
	  return eventObject.cid;
	};


	SCTransport.prototype._handleEventAckTimeout = function (eventObject) {
	  var errorMessage = "Event response for '" + eventObject.event + "' timed out";
	  var error = new TimeoutError(errorMessage);

	  if (eventObject.cid) {
	    delete this._callbackMap[eventObject.cid];
	  }
	  var callback = eventObject.callback;
	  delete eventObject.callback;
	  callback.call(eventObject, error, eventObject);
	};

	// The last two optional arguments (a and b) can be options and/or callback
	SCTransport.prototype.emit = function (event, data, a, b) {
	  var self = this;

	  var callback, options;

	  if (b) {
	    options = a;
	    callback = b;
	  } else {
	    if (a instanceof Function) {
	      options = {};
	      callback = a;
	    } else {
	      options = a;
	    }
	  }

	  var eventObject = {
	    event: event,
	    data: data,
	    callback: callback
	  };

	  if (callback && !options.noTimeout) {
	    eventObject.timeout = setTimeout(function () {
	      self._handleEventAckTimeout(eventObject);
	    }, this.options.ackTimeout);
	  }

	  var cid = null;
	  if (this.state == this.OPEN || options.force) {
	    cid = this.emitRaw(eventObject);
	  }
	  return cid;
	};

	SCTransport.prototype.cancelPendingResponse = function (cid) {
	  delete this._callbackMap[cid];
	};

	SCTransport.prototype.parse = function (message) {
	  return formatter.parse(message);
	};

	SCTransport.prototype.stringify = function (object) {
	  return formatter.stringify(object);
	};

	SCTransport.prototype.send = function (data) {
	  if (this.socket.readyState != this.socket.OPEN) {
	    this._onClose(1005);
	  } else {
	    this.socket.send(data);
	  }
	};

	SCTransport.prototype.sendObject = function (object) {
	  var str, formatError;
	  try {
	    str = this.stringify(object);
	  } catch (err) {
	    formatError = err;
	    this._onError(formatError);
	  }
	  if (!formatError) {
	    this.send(str);
	  }
	};

	module.exports.SCTransport = SCTransport;


/***/ },
/* 56 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {var base64Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

	module.exports.parse = function (input) {
	  if (input == null) {
	   return null;
	  }
	  var message = input.toString();

	  try {
	    return JSON.parse(message);
	  } catch (err) {}
	  return message;
	};

	var arrayBufferToBase64 = function (arraybuffer) {
	  var bytes = new Uint8Array(arraybuffer);
	  var len = bytes.length;
	  var base64 = '';

	  for (var i = 0; i < len; i += 3) {
	    base64 += base64Chars[bytes[i] >> 2];
	    base64 += base64Chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
	    base64 += base64Chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
	    base64 += base64Chars[bytes[i + 2] & 63];
	  }

	  if ((len % 3) === 2) {
	    base64 = base64.substring(0, base64.length - 1) + '=';
	  } else if (len % 3 === 1) {
	    base64 = base64.substring(0, base64.length - 2) + '==';
	  }

	  return base64;
	};

	var isOwnDescendant = function (object, ancestors) {
	  return ancestors.indexOf(object) > -1;
	};

	var convertBuffersToBase64 = function (object, ancestors) {
	  if (!ancestors) {
	    ancestors = [];
	  }
	  if (isOwnDescendant(object, ancestors)) {
	    throw new Error('Cannot traverse circular structure');
	  }
	  var newAncestors = ancestors.concat([object]);

	  if (global.ArrayBuffer && object instanceof global.ArrayBuffer) {
	    object = {
	      base64: true,
	      data: arrayBufferToBase64(object)
	    };
	  } else if (global.Buffer && object instanceof global.Buffer) {
	    object = {
	      base64: true,
	      data: object.toString('base64')
	    };
	  } else if (object instanceof Array) {
	    for (var i in object) {
	      if (object.hasOwnProperty(i)) {
	        object[i] = convertBuffersToBase64(object[i], newAncestors);
	      }
	    }
	  } else if (object instanceof Object) {
	    for (var j in object) {
	      if (object.hasOwnProperty(j)) {
	        object[j] = convertBuffersToBase64(object[j], newAncestors);
	      }
	    }
	  }
	  return object;
	};

	module.exports.stringify = function (object) {
	  var base64Object = convertBuffersToBase64(object);
	  return JSON.stringify(base64Object);
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.decode = exports.parse = __webpack_require__(58);
	exports.encode = exports.stringify = __webpack_require__(59);


/***/ },
/* 58 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	module.exports = function(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};

	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }

	  var regexp = /\+/g;
	  qs = qs.split(sep);

	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }

	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }

	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;

	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }

	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);

	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (Array.isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }

	  return obj;
	};


/***/ },
/* 59 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	var stringifyPrimitive = function(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;

	    case 'boolean':
	      return v ? 'true' : 'false';

	    case 'number':
	      return isFinite(v) ? v : '';

	    default:
	      return '';
	  }
	};

	module.exports = function(obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }

	  if (typeof obj === 'object') {
	    return Object.keys(obj).map(function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (Array.isArray(obj[k])) {
	        return obj[k].map(function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);

	  }

	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};


/***/ },
/* 60 */
/***/ function(module, exports) {

	
	/**
	 * Module dependencies.
	 */

	var global = typeof window != 'undefined' && window || (function() { return this; })();

	/**
	 * WebSocket constructor.
	 */

	var WebSocket = global.WebSocket || global.MozWebSocket;

	/**
	 * Module exports.
	 */

	module.exports = WebSocket ? ws : null;

	/**
	 * WebSocket constructor.
	 *
	 * The third `opts` options object gets ignored in web browsers, since it's
	 * non-standard, and throws a TypeError if passed to the constructor.
	 * See: https://github.com/einaros/ws/issues/227
	 *
	 * @param {String} uri
	 * @param {Array} protocols (optional)
	 * @param {Object} opts (optional)
	 * @api public
	 */

	function ws(uri, protocols, opts) {
	  var instance;
	  if (protocols) {
	    instance = new WebSocket(uri, protocols);
	  } else {
	    instance = new WebSocket(uri);
	  }
	  return instance;
	}

	if (WebSocket) ws.prototype = WebSocket.prototype;


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(62);


/***/ },
/* 62 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Constants.
	 */

	var errorMessage;

	errorMessage = 'An argument without append, prepend, ' +
	    'or detach methods was given to `List';

	/**
	 * Creates a new List: A linked list is a bit like an Array, but
	 * knows nothing about how many items are in it, and knows only about its
	 * first (`head`) and last (`tail`) items. Each item (e.g. `head`, `tail`,
	 * &c.) knows which item comes before or after it (its more like the
	 * implementation of the DOM in JavaScript).
	 * @global
	 * @private
	 * @constructor
	 * @class Represents an instance of List.
	 */

	function List(/*items...*/) {
	    if (arguments.length) {
	        return List.from(arguments);
	    }
	}

	var ListPrototype;

	ListPrototype = List.prototype;

	/**
	 * Creates a new list from the arguments (each a list item) passed in.
	 * @name List.of
	 * @param {...ListItem} [items] - Zero or more items to attach.
	 * @returns {list} - A new instance of List.
	 */

	List.of = function (/*items...*/) {
	    return List.from.call(this, arguments);
	};

	/**
	 * Creates a new list from the given array-like object (each a list item)
	 * passed in.
	 * @name List.from
	 * @param {ListItem[]} [items] - The items to append.
	 * @returns {list} - A new instance of List.
	 */
	List.from = function (items) {
	    var list = new this(), length, iterator, item;

	    if (items && (length = items.length)) {
	        iterator = -1;

	        while (++iterator < length) {
	            item = items[iterator];

	            if (item !== null && item !== undefined) {
	                list.append(item);
	            }
	        }
	    }

	    return list;
	};

	/**
	 * List#head
	 * Default to `null`.
	 */
	ListPrototype.head = null;

	/**
	 * List#tail
	 * Default to `null`.
	 */
	ListPrototype.tail = null;

	/**
	 * Returns the list's items as an array. This does *not* detach the items.
	 * @name List#toArray
	 * @returns {ListItem[]} - An array of (still attached) ListItems.
	 */
	ListPrototype.toArray = function () {
	    var item = this.head,
	        result = [];

	    while (item) {
	        result.push(item);
	        item = item.next;
	    }

	    return result;
	};

	/**
	 * Prepends the given item to the list: Item will be the new first item
	 * (`head`).
	 * @name List#prepend
	 * @param {ListItem} item - The item to prepend.
	 * @returns {ListItem} - An instance of ListItem (the given item).
	 */
	ListPrototype.prepend = function (item) {
	    if (!item) {
	        return false;
	    }

	    if (!item.append || !item.prepend || !item.detach) {
	        throw new Error(errorMessage + '#prepend`.');
	    }

	    var self, head;

	    // Cache self.
	    self = this;

	    // If self has a first item, defer prepend to the first items prepend
	    // method, and return the result.
	    head = self.head;

	    if (head) {
	        return head.prepend(item);
	    }

	    // ...otherwise, there is no `head` (or `tail`) item yet.

	    // Detach the prependee.
	    item.detach();

	    // Set the prependees parent list to reference self.
	    item.list = self;

	    // Set self's first item to the prependee, and return the item.
	    self.head = item;

	    return item;
	};

	/**
	 * Appends the given item to the list: Item will be the new last item (`tail`)
	 * if the list had a first item, and its first item (`head`) otherwise.
	 * @name List#append
	 * @param {ListItem} item - The item to append.
	 * @returns {ListItem} - An instance of ListItem (the given item).
	 */

	ListPrototype.append = function (item) {
	    if (!item) {
	        return false;
	    }

	    if (!item.append || !item.prepend || !item.detach) {
	        throw new Error(errorMessage + '#append`.');
	    }

	    var self, head, tail;

	    // Cache self.
	    self = this;

	    // If self has a last item, defer appending to the last items append
	    // method, and return the result.
	    tail = self.tail;

	    if (tail) {
	        return tail.append(item);
	    }

	    // If self has a first item, defer appending to the first items append
	    // method, and return the result.
	    head = self.head;

	    if (head) {
	        return head.append(item);
	    }

	    // ...otherwise, there is no `tail` or `head` item yet.

	    // Detach the appendee.
	    item.detach();

	    // Set the appendees parent list to reference self.
	    item.list = self;

	    // Set self's first item to the appendee, and return the item.
	    self.head = item;

	    return item;
	};

	/**
	 * Creates a new ListItem: A linked list item is a bit like DOM node:
	 * It knows only about its "parent" (`list`), the item before it (`prev`),
	 * and the item after it (`next`).
	 * @global
	 * @private
	 * @constructor
	 * @class Represents an instance of ListItem.
	 */

	function ListItem() {}

	List.Item = ListItem;

	var ListItemPrototype = ListItem.prototype;

	ListItemPrototype.next = null;

	ListItemPrototype.prev = null;

	ListItemPrototype.list = null;

	/**
	 * Detaches the item operated on from its parent list.
	 * @name ListItem#detach
	 * @returns {ListItem} - The item operated on.
	 */
	ListItemPrototype.detach = function () {
	    // Cache self, the parent list, and the previous and next items.
	    var self = this,
	        list = self.list,
	        prev = self.prev,
	        next = self.next;

	    // If the item is already detached, return self.
	    if (!list) {
	        return self;
	    }

	    // If self is the last item in the parent list, link the lists last item
	    // to the previous item.
	    if (list.tail === self) {
	        list.tail = prev;
	    }

	    // If self is the first item in the parent list, link the lists first item
	    // to the next item.
	    if (list.head === self) {
	        list.head = next;
	    }

	    // If both the last and first items in the parent list are the same,
	    // remove the link to the last item.
	    if (list.tail === list.head) {
	        list.tail = null;
	    }

	    // If a previous item exists, link its next item to selfs next item.
	    if (prev) {
	        prev.next = next;
	    }

	    // If a next item exists, link its previous item to selfs previous item.
	    if (next) {
	        next.prev = prev;
	    }

	    // Remove links from self to both the next and previous items, and to the
	    // parent list.
	    self.prev = self.next = self.list = null;

	    // Return self.
	    return self;
	};

	/**
	 * Prepends the given item *before* the item operated on.
	 * @name ListItem#prepend
	 * @param {ListItem} item - The item to prepend.
	 * @returns {ListItem} - The item operated on, or false when that item is not
	 * attached.
	 */
	ListItemPrototype.prepend = function (item) {
	    if (!item || !item.append || !item.prepend || !item.detach) {
	        throw new Error(errorMessage + 'Item#prepend`.');
	    }

	    // Cache self, the parent list, and the previous item.
	    var self = this,
	        list = self.list,
	        prev = self.prev;

	    // If self is detached, return false.
	    if (!list) {
	        return false;
	    }

	    // Detach the prependee.
	    item.detach();

	    // If self has a previous item...
	    if (prev) {
	        // ...link the prependees previous item, to selfs previous item.
	        item.prev = prev;

	        // ...link the previous items next item, to self.
	        prev.next = item;
	    }

	    // Set the prependees next item to self.
	    item.next = self;

	    // Set the prependees parent list to selfs parent list.
	    item.list = list;

	    // Set the previous item of self to the prependee.
	    self.prev = item;

	    // If self is the first item in the parent list, link the lists first item
	    // to the prependee.
	    if (self === list.head) {
	        list.head = item;
	    }

	    // If the the parent list has no last item, link the lists last item to
	    // self.
	    if (!list.tail) {
	        list.tail = self;
	    }

	    // Return the prependee.
	    return item;
	};

	/**
	 * Appends the given item *after* the item operated on.
	 * @name ListItem#append
	 * @param {ListItem} item - The item to append.
	 * @returns {ListItem} - The item operated on, or false when that item is not
	 * attached.
	 */
	ListItemPrototype.append = function (item) {
	    // If item is falsey, return false.
	    if (!item || !item.append || !item.prepend || !item.detach) {
	        throw new Error(errorMessage + 'Item#append`.');
	    }

	    // Cache self, the parent list, and the next item.
	    var self = this,
	        list = self.list,
	        next = self.next;

	    // If self is detached, return false.
	    if (!list) {
	        return false;
	    }

	    // Detach the appendee.
	    item.detach();

	    // If self has a next item...
	    if (next) {
	        // ...link the appendees next item, to selfs next item.
	        item.next = next;

	        // ...link the next items previous item, to the appendee.
	        next.prev = item;
	    }

	    // Set the appendees previous item to self.
	    item.prev = self;

	    // Set the appendees parent list to selfs parent list.
	    item.list = list;

	    // Set the next item of self to the appendee.
	    self.next = item;

	    // If the the parent list has no last item or if self is the parent lists
	    // last item, link the lists last item to the appendee.
	    if (self === list.tail || !list.tail) {
	        list.tail = item;
	    }

	    // Return the appendee.
	    return item;
	};

	/**
	 * Expose `List`.
	 */

	module.exports = List;


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! http://mths.be/base64 v0.1.0 by @mathias | MIT license */
	;(function(root) {

		// Detect free variables `exports`.
		var freeExports = typeof exports == 'object' && exports;

		// Detect free variable `module`.
		var freeModule = typeof module == 'object' && module &&
			module.exports == freeExports && module;

		// Detect free variable `global`, from Node.js or Browserified code, and use
		// it as `root`.
		var freeGlobal = typeof global == 'object' && global;
		if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
			root = freeGlobal;
		}

		/*--------------------------------------------------------------------------*/

		var InvalidCharacterError = function(message) {
			this.message = message;
		};
		InvalidCharacterError.prototype = new Error;
		InvalidCharacterError.prototype.name = 'InvalidCharacterError';

		var error = function(message) {
			// Note: the error messages used throughout this file match those used by
			// the native `atob`/`btoa` implementation in Chromium.
			throw new InvalidCharacterError(message);
		};

		var TABLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
		// http://whatwg.org/html/common-microsyntaxes.html#space-character
		var REGEX_SPACE_CHARACTERS = /[\t\n\f\r ]/g;

		// `decode` is designed to be fully compatible with `atob` as described in the
		// HTML Standard. http://whatwg.org/html/webappapis.html#dom-windowbase64-atob
		// The optimized base64-decoding algorithm used is based on @atk’s excellent
		// implementation. https://gist.github.com/atk/1020396
		var decode = function(input) {
			input = String(input)
				.replace(REGEX_SPACE_CHARACTERS, '');
			var length = input.length;
			if (length % 4 == 0) {
				input = input.replace(/==?$/, '');
				length = input.length;
			}
			if (
				length % 4 == 1 ||
				// http://whatwg.org/C#alphanumeric-ascii-characters
				/[^+a-zA-Z0-9/]/.test(input)
			) {
				error(
					'Invalid character: the string to be decoded is not correctly encoded.'
				);
			}
			var bitCounter = 0;
			var bitStorage;
			var buffer;
			var output = '';
			var position = -1;
			while (++position < length) {
				buffer = TABLE.indexOf(input.charAt(position));
				bitStorage = bitCounter % 4 ? bitStorage * 64 + buffer : buffer;
				// Unless this is the first of a group of 4 characters…
				if (bitCounter++ % 4) {
					// …convert the first 8 bits to a single ASCII character.
					output += String.fromCharCode(
						0xFF & bitStorage >> (-2 * bitCounter & 6)
					);
				}
			}
			return output;
		};

		// `encode` is designed to be fully compatible with `btoa` as described in the
		// HTML Standard: http://whatwg.org/html/webappapis.html#dom-windowbase64-btoa
		var encode = function(input) {
			input = String(input);
			if (/[^\0-\xFF]/.test(input)) {
				// Note: no need to special-case astral symbols here, as surrogates are
				// matched, and the input is supposed to only contain ASCII anyway.
				error(
					'The string to be encoded contains characters outside of the ' +
					'Latin1 range.'
				);
			}
			var padding = input.length % 3;
			var output = '';
			var position = -1;
			var a;
			var b;
			var c;
			var d;
			var buffer;
			// Make sure any padding is handled outside of the loop.
			var length = input.length - padding;

			while (++position < length) {
				// Read three bytes, i.e. 24 bits.
				a = input.charCodeAt(position) << 16;
				b = input.charCodeAt(++position) << 8;
				c = input.charCodeAt(++position);
				buffer = a + b + c;
				// Turn the 24 bits into four chunks of 6 bits each, and append the
				// matching character for each of them to the output.
				output += (
					TABLE.charAt(buffer >> 18 & 0x3F) +
					TABLE.charAt(buffer >> 12 & 0x3F) +
					TABLE.charAt(buffer >> 6 & 0x3F) +
					TABLE.charAt(buffer & 0x3F)
				);
			}

			if (padding == 2) {
				a = input.charCodeAt(position) << 8;
				b = input.charCodeAt(++position);
				buffer = a + b;
				output += (
					TABLE.charAt(buffer >> 10) +
					TABLE.charAt((buffer >> 4) & 0x3F) +
					TABLE.charAt((buffer << 2) & 0x3F) +
					'='
				);
			} else if (padding == 1) {
				buffer = input.charCodeAt(position);
				output += (
					TABLE.charAt(buffer >> 2) +
					TABLE.charAt((buffer << 4) & 0x3F) +
					'=='
				);
			}

			return output;
		};

		var base64 = {
			'encode': encode,
			'decode': decode,
			'version': '0.1.0'
		};

		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (
			true
		) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return base64;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}	else if (freeExports && !freeExports.nodeType) {
			if (freeModule) { // in Node.js or RingoJS v0.8.0+
				freeModule.exports = base64;
			} else { // in Narwhal or RingoJS v0.7.0-
				for (var key in base64) {
					base64.hasOwnProperty(key) && (freeExports[key] = base64[key]);
				}
			}
		} else { // in Rhino or a web browser
			root.base64 = base64;
		}

	}(this));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(64)(module), (function() { return this; }())))

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var SCSocket = __webpack_require__(42);

	var _connections = {};

	function getMultiplexId(options) {
	  var protocolPrefix = options.secure ? 'https://' : 'http://';
	  var queryString = '';
	  if (options.query) {
	    if (typeof options.query == 'string') {
	      queryString = options.query;
	    } else {
	      var queryArray = [];
	      var queryMap = options.query;
	      for (var key in queryMap) {
	        if (queryMap.hasOwnProperty(key)) {
	          queryArray.push(key + '=' + queryMap[key]);
	        }
	      }
	      if (queryArray.length) {
	        queryString = '?' + queryArray.join('&');
	      }
	    }
	  }
	  return protocolPrefix + options.hostname + ':' + options.port + options.path + queryString;
	}

	function isUrlSecure() {
	  return global.location && location.protocol == 'https:';
	}

	function getPort(options, isSecureDefault) {
	  var isSecure = options.secure == null ? isSecureDefault : options.secure;
	  return options.port || (global.location && location.port ? location.port : isSecure ? 443 : 80);
	}

	function connect(options) {
	  var self = this;

	  options = options || {};
	  var isSecureDefault = isUrlSecure();

	  var opts = {
	    port: getPort(options, isSecureDefault),
	    hostname: global.location && location.hostname,
	    path: '/socketcluster/',
	    secure: isSecureDefault,
	    autoReconnect: true,
	    autoProcessSubscriptions: true,
	    connectTimeout: 20000,
	    ackTimeout: 10000,
	    timestampRequests: false,
	    timestampParam: 't',
	    authEngine: null,
	    authTokenName: 'socketCluster.authToken',
	    binaryType: 'arraybuffer',
	    multiplex: true
	  };
	  for (var i in options) {
	    if (options.hasOwnProperty(i)) {
	      opts[i] = options[i];
	    }
	  }
	  var multiplexId = getMultiplexId(opts);
	  if (opts.multiplex === false) {
	    return new SCSocket(opts);
	  }
	  if (_connections[multiplexId]) {
	    _connections[multiplexId].connect();
	  } else {
	    _connections[multiplexId] = new SCSocket(opts);
	  }
	  return _connections[multiplexId];
	}

	function destroy(options) {
	  var self = this;

	  options = options || {};
	  var isSecureDefault = isUrlSecure();

	  var opts = {
	    port: getPort(options, isSecureDefault),
	    hostname: global.location && location.hostname,
	    path: '/socketcluster/',
	    secure: isSecureDefault
	  };
	  for (var i in options) {
	    if (options.hasOwnProperty(i)) {
	      opts[i] = options[i];
	    }
	  }
	  var multiplexId = getMultiplexId(opts);
	  delete _connections[multiplexId];
	}

	module.exports = {
	  connect: connect,
	  destroy: destroy
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = configureStore;

	var _reduxDevtoolsInstrument = __webpack_require__(67);

	var _reduxDevtoolsInstrument2 = _interopRequireDefault(_reduxDevtoolsInstrument);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function configureStore(next, subscriber, options) {
	  return (0, _reduxDevtoolsInstrument2.default)(subscriber, options)(next);
	}

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.INIT_ACTION = exports.ActionCreators = exports.ActionTypes = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.liftAction = liftAction;
	exports.liftReducerWith = liftReducerWith;
	exports.unliftState = unliftState;
	exports.unliftStore = unliftStore;
	exports.default = instrument;

	var _difference = __webpack_require__(68);

	var _difference2 = _interopRequireDefault(_difference);

	var _union = __webpack_require__(127);

	var _union2 = _interopRequireDefault(_union);

	var _isPlainObject = __webpack_require__(12);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _symbolObservable = __webpack_require__(16);

	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ActionTypes = exports.ActionTypes = {
	  PERFORM_ACTION: 'PERFORM_ACTION',
	  RESET: 'RESET',
	  ROLLBACK: 'ROLLBACK',
	  COMMIT: 'COMMIT',
	  SWEEP: 'SWEEP',
	  TOGGLE_ACTION: 'TOGGLE_ACTION',
	  SET_ACTIONS_ACTIVE: 'SET_ACTIONS_ACTIVE',
	  JUMP_TO_STATE: 'JUMP_TO_STATE',
	  IMPORT_STATE: 'IMPORT_STATE'
	};

	/**
	 * Action creators to change the History state.
	 */
	var ActionCreators = exports.ActionCreators = {
	  performAction: function performAction(action) {
	    if (!(0, _isPlainObject2.default)(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    return { type: ActionTypes.PERFORM_ACTION, action: action, timestamp: Date.now() };
	  },
	  reset: function reset() {
	    return { type: ActionTypes.RESET, timestamp: Date.now() };
	  },
	  rollback: function rollback() {
	    return { type: ActionTypes.ROLLBACK, timestamp: Date.now() };
	  },
	  commit: function commit() {
	    return { type: ActionTypes.COMMIT, timestamp: Date.now() };
	  },
	  sweep: function sweep() {
	    return { type: ActionTypes.SWEEP };
	  },
	  toggleAction: function toggleAction(id) {
	    return { type: ActionTypes.TOGGLE_ACTION, id: id };
	  },
	  setActionsActive: function setActionsActive(start, end) {
	    var active = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

	    return { type: ActionTypes.SET_ACTIONS_ACTIVE, start: start, end: end, active: active };
	  },
	  jumpToState: function jumpToState(index) {
	    return { type: ActionTypes.JUMP_TO_STATE, index: index };
	  },
	  importState: function importState(nextLiftedState) {
	    return { type: ActionTypes.IMPORT_STATE, nextLiftedState: nextLiftedState };
	  }
	};

	var INIT_ACTION = exports.INIT_ACTION = { type: '@@INIT' };

	/**
	 * Computes the next entry in the log by applying an action.
	 */
	function computeNextEntry(reducer, action, state, error) {
	  if (error) {
	    return {
	      state: state,
	      error: 'Interrupted by an error up the chain'
	    };
	  }

	  var nextState = state;
	  var nextError = void 0;
	  try {
	    nextState = reducer(state, action);
	  } catch (err) {
	    nextError = err.toString();
	    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && typeof window.chrome !== 'undefined') {
	      // In Chrome, rethrowing provides better source map support
	      setTimeout(function () {
	        throw err;
	      });
	    } else {
	      console.error(err);
	    }
	  }

	  return {
	    state: nextState,
	    error: nextError
	  };
	}

	/**
	 * Runs the reducer on invalidated actions to get a fresh computation log.
	 */
	function recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds) {
	  // Optimization: exit early and return the same reference
	  // if we know nothing could have changed.
	  if (minInvalidatedStateIndex >= computedStates.length && computedStates.length === stagedActionIds.length) {
	    return computedStates;
	  }

	  var nextComputedStates = computedStates.slice(0, minInvalidatedStateIndex);
	  for (var i = minInvalidatedStateIndex; i < stagedActionIds.length; i++) {
	    var actionId = stagedActionIds[i];
	    var action = actionsById[actionId].action;

	    var previousEntry = nextComputedStates[i - 1];
	    var previousState = previousEntry ? previousEntry.state : committedState;
	    var previousError = previousEntry ? previousEntry.error : undefined;

	    var shouldSkip = skippedActionIds.indexOf(actionId) > -1;
	    var entry = shouldSkip ? previousEntry : computeNextEntry(reducer, action, previousState, previousError);

	    nextComputedStates.push(entry);
	  }

	  return nextComputedStates;
	}

	/**
	 * Lifts an app's action into an action on the lifted store.
	 */
	function liftAction(action) {
	  return ActionCreators.performAction(action);
	}

	/**
	 * Creates a history state reducer from an app's reducer.
	 */
	function liftReducerWith(reducer, initialCommittedState, monitorReducer, options) {
	  var initialLiftedState = {
	    monitorState: monitorReducer(undefined, {}),
	    nextActionId: 1,
	    actionsById: { 0: liftAction(INIT_ACTION) },
	    stagedActionIds: [0],
	    skippedActionIds: [],
	    committedState: initialCommittedState,
	    currentStateIndex: 0,
	    computedStates: []
	  };

	  /**
	   * Manages how the history actions modify the history state.
	   */
	  return function (liftedState, liftedAction) {
	    var _ref = liftedState || initialLiftedState;

	    var monitorState = _ref.monitorState;
	    var actionsById = _ref.actionsById;
	    var nextActionId = _ref.nextActionId;
	    var stagedActionIds = _ref.stagedActionIds;
	    var skippedActionIds = _ref.skippedActionIds;
	    var committedState = _ref.committedState;
	    var currentStateIndex = _ref.currentStateIndex;
	    var computedStates = _ref.computedStates;


	    if (!liftedState) {
	      // Prevent mutating initialLiftedState
	      actionsById = _extends({}, actionsById);
	    }

	    function commitExcessActions(n) {
	      // Auto-commits n-number of excess actions.
	      var excess = n;
	      var idsToDelete = stagedActionIds.slice(1, excess + 1);

	      for (var i = 0; i < idsToDelete.length; i++) {
	        if (computedStates[i + 1].error) {
	          // Stop if error is found. Commit actions up to error.
	          excess = i;
	          idsToDelete = stagedActionIds.slice(1, excess + 1);
	          break;
	        } else {
	          delete actionsById[idsToDelete[i]];
	        }
	      }

	      skippedActionIds = skippedActionIds.filter(function (id) {
	        return idsToDelete.indexOf(id) === -1;
	      });
	      stagedActionIds = [0].concat(stagedActionIds.slice(excess + 1));
	      committedState = computedStates[excess].state;
	      computedStates = computedStates.slice(excess);
	      currentStateIndex = currentStateIndex > excess ? currentStateIndex - excess : 0;
	    }

	    // By default, agressively recompute every state whatever happens.
	    // This has O(n) performance, so we'll override this to a sensible
	    // value whenever we feel like we don't have to recompute the states.
	    var minInvalidatedStateIndex = 0;

	    switch (liftedAction.type) {
	      case ActionTypes.RESET:
	        {
	          // Get back to the state the store was created with.
	          actionsById = { 0: liftAction(INIT_ACTION) };
	          nextActionId = 1;
	          stagedActionIds = [0];
	          skippedActionIds = [];
	          committedState = initialCommittedState;
	          currentStateIndex = 0;
	          computedStates = [];
	          break;
	        }
	      case ActionTypes.COMMIT:
	        {
	          // Consider the last committed state the new starting point.
	          // Squash any staged actions into a single committed state.
	          actionsById = { 0: liftAction(INIT_ACTION) };
	          nextActionId = 1;
	          stagedActionIds = [0];
	          skippedActionIds = [];
	          committedState = computedStates[currentStateIndex].state;
	          currentStateIndex = 0;
	          computedStates = [];
	          break;
	        }
	      case ActionTypes.ROLLBACK:
	        {
	          // Forget about any staged actions.
	          // Start again from the last committed state.
	          actionsById = { 0: liftAction(INIT_ACTION) };
	          nextActionId = 1;
	          stagedActionIds = [0];
	          skippedActionIds = [];
	          currentStateIndex = 0;
	          computedStates = [];
	          break;
	        }
	      case ActionTypes.TOGGLE_ACTION:
	        {
	          var _ret = function () {
	            // Toggle whether an action with given ID is skipped.
	            // Being skipped means it is a no-op during the computation.
	            var actionId = liftedAction.id;

	            var index = skippedActionIds.indexOf(actionId);
	            if (index === -1) {
	              skippedActionIds = [actionId].concat(skippedActionIds);
	            } else {
	              skippedActionIds = skippedActionIds.filter(function (id) {
	                return id !== actionId;
	              });
	            }
	            // Optimization: we know history before this action hasn't changed
	            minInvalidatedStateIndex = stagedActionIds.indexOf(actionId);
	            return 'break';
	          }();

	          if (_ret === 'break') break;
	        }
	      case ActionTypes.SET_ACTIONS_ACTIVE:
	        {
	          // Toggle whether an action with given ID is skipped.
	          // Being skipped means it is a no-op during the computation.
	          var start = liftedAction.start;
	          var end = liftedAction.end;
	          var active = liftedAction.active;

	          var actionIds = [];
	          for (var i = start; i < end; i++) {
	            actionIds.push(i);
	          }if (active) {
	            skippedActionIds = (0, _difference2.default)(skippedActionIds, actionIds);
	          } else {
	            skippedActionIds = (0, _union2.default)(skippedActionIds, actionIds);
	          }

	          // Optimization: we know history before this action hasn't changed
	          minInvalidatedStateIndex = stagedActionIds.indexOf(start);
	          break;
	        }
	      case ActionTypes.JUMP_TO_STATE:
	        {
	          // Without recomputing anything, move the pointer that tell us
	          // which state is considered the current one. Useful for sliders.
	          currentStateIndex = liftedAction.index;
	          // Optimization: we know the history has not changed.
	          minInvalidatedStateIndex = Infinity;
	          break;
	        }
	      case ActionTypes.SWEEP:
	        {
	          // Forget any actions that are currently being skipped.
	          stagedActionIds = (0, _difference2.default)(stagedActionIds, skippedActionIds);
	          skippedActionIds = [];
	          currentStateIndex = Math.min(currentStateIndex, stagedActionIds.length - 1);
	          break;
	        }
	      case ActionTypes.PERFORM_ACTION:
	        {
	          // Auto-commit as new actions come in.
	          if (options.maxAge && stagedActionIds.length === options.maxAge) {
	            commitExcessActions(1);
	          }

	          if (currentStateIndex === stagedActionIds.length - 1) {
	            currentStateIndex++;
	          }
	          var _actionId = nextActionId++;
	          // Mutation! This is the hottest path, and we optimize on purpose.
	          // It is safe because we set a new key in a cache dictionary.
	          actionsById[_actionId] = liftedAction;
	          stagedActionIds = [].concat(stagedActionIds, [_actionId]);
	          // Optimization: we know that only the new action needs computing.
	          minInvalidatedStateIndex = stagedActionIds.length - 1;
	          break;
	        }
	      case ActionTypes.IMPORT_STATE:
	        {
	          var _liftedAction$nextLif = liftedAction.nextLiftedState;
	          // Completely replace everything.

	          monitorState = _liftedAction$nextLif.monitorState;
	          actionsById = _liftedAction$nextLif.actionsById;
	          nextActionId = _liftedAction$nextLif.nextActionId;
	          stagedActionIds = _liftedAction$nextLif.stagedActionIds;
	          skippedActionIds = _liftedAction$nextLif.skippedActionIds;
	          committedState = _liftedAction$nextLif.committedState;
	          currentStateIndex = _liftedAction$nextLif.currentStateIndex;
	          computedStates = _liftedAction$nextLif.computedStates;

	          break;
	        }
	      case '@@redux/INIT':
	        {
	          // Always recompute states on hot reload and init.
	          minInvalidatedStateIndex = 0;

	          if (options.maxAge && stagedActionIds.length > options.maxAge) {
	            // States must be recomputed before committing excess.
	            computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds);

	            commitExcessActions(stagedActionIds.length - options.maxAge);

	            // Avoid double computation.
	            minInvalidatedStateIndex = Infinity;
	          }

	          break;
	        }
	      default:
	        {
	          // If the action is not recognized, it's a monitor action.
	          // Optimization: a monitor action can't change history.
	          minInvalidatedStateIndex = Infinity;
	          break;
	        }
	    }

	    computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds);
	    monitorState = monitorReducer(monitorState, liftedAction);
	    return {
	      monitorState: monitorState,
	      actionsById: actionsById,
	      nextActionId: nextActionId,
	      stagedActionIds: stagedActionIds,
	      skippedActionIds: skippedActionIds,
	      committedState: committedState,
	      currentStateIndex: currentStateIndex,
	      computedStates: computedStates
	    };
	  };
	}

	/**
	 * Provides an app's view into the state of the lifted store.
	 */
	function unliftState(liftedState) {
	  var computedStates = liftedState.computedStates;
	  var currentStateIndex = liftedState.currentStateIndex;
	  var state = computedStates[currentStateIndex].state;

	  return state;
	}

	/**
	 * Provides an app's view into the lifted store.
	 */
	function unliftStore(liftedStore, liftReducer) {
	  var _extends2;

	  var lastDefinedState = void 0;

	  function getState() {
	    var state = unliftState(liftedStore.getState());
	    if (state !== undefined) {
	      lastDefinedState = state;
	    }
	    return lastDefinedState;
	  }

	  return _extends({}, liftedStore, (_extends2 = {

	    liftedStore: liftedStore,

	    dispatch: function dispatch(action) {
	      liftedStore.dispatch(liftAction(action));
	      return action;
	    },


	    getState: getState,

	    replaceReducer: function replaceReducer(nextReducer) {
	      liftedStore.replaceReducer(liftReducer(nextReducer));
	    }
	  }, _extends2[_symbolObservable2.default] = function () {
	    return _extends({}, liftedStore[_symbolObservable2.default](), {
	      subscribe: function subscribe(observer) {
	        if ((typeof observer === 'undefined' ? 'undefined' : _typeof(observer)) !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }

	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }

	        observeState();
	        var unsubscribe = liftedStore.subscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    });
	  }, _extends2));
	}

	/**
	 * Redux instrumentation store enhancer.
	 */
	function instrument() {
	  var monitorReducer = arguments.length <= 0 || arguments[0] === undefined ? function () {
	    return null;
	  } : arguments[0];
	  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  /* eslint-disable no-eq-null */
	  if (options.maxAge != null && options.maxAge < 2) {
	    /* eslint-enable */
	    throw new Error('DevTools.instrument({ maxAge }) option, if specified, ' + 'may not be less than 2.');
	  }

	  return function (createStore) {
	    return function (reducer, initialState, enhancer) {

	      function liftReducer(r) {
	        if (typeof r !== 'function') {
	          if (r && typeof r.default === 'function') {
	            throw new Error('Expected the reducer to be a function. ' + 'Instead got an object with a "default" field. ' + 'Did you pass a module instead of the default export? ' + 'Try passing require(...).default instead.');
	          }
	          throw new Error('Expected the reducer to be a function.');
	        }
	        return liftReducerWith(r, initialState, monitorReducer, options);
	      }

	      var liftedStore = createStore(liftReducer(reducer), enhancer);
	      if (liftedStore.liftedStore) {
	        throw new Error('DevTools instrumentation should not be applied more than once. ' + 'Check your store configuration.');
	      }

	      return unliftStore(liftedStore, liftReducer);
	    };
	  };
	}

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var baseDifference = __webpack_require__(69),
	    baseFlatten = __webpack_require__(111),
	    isArrayLikeObject = __webpack_require__(115),
	    rest = __webpack_require__(121);

	/**
	 * Creates an array of unique `array` values not included in the other given
	 * arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons. The order of result values is determined by the
	 * order they occur in the first array.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {...Array} [values] The values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 * @see _.without, _.xor
	 * @example
	 *
	 * _.difference([3, 2, 1], [4, 2]);
	 * // => [3, 1]
	 */
	var difference = rest(function(array, values) {
	  return isArrayLikeObject(array)
	    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
	    : [];
	});

	module.exports = difference;


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(70),
	    arrayIncludes = __webpack_require__(104),
	    arrayIncludesWith = __webpack_require__(107),
	    arrayMap = __webpack_require__(108),
	    baseUnary = __webpack_require__(109),
	    cacheHas = __webpack_require__(110);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * The base implementation of methods like `_.difference` without support
	 * for excluding multiple arrays or iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Array} values The values to exclude.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of filtered values.
	 */
	function baseDifference(array, values, iteratee, comparator) {
	  var index = -1,
	      includes = arrayIncludes,
	      isCommon = true,
	      length = array.length,
	      result = [],
	      valuesLength = values.length;

	  if (!length) {
	    return result;
	  }
	  if (iteratee) {
	    values = arrayMap(values, baseUnary(iteratee));
	  }
	  if (comparator) {
	    includes = arrayIncludesWith;
	    isCommon = false;
	  }
	  else if (values.length >= LARGE_ARRAY_SIZE) {
	    includes = cacheHas;
	    isCommon = false;
	    values = new SetCache(values);
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;

	    value = (comparator || value !== 0) ? value : 0;
	    if (isCommon && computed === computed) {
	      var valuesIndex = valuesLength;
	      while (valuesIndex--) {
	        if (values[valuesIndex] === computed) {
	          continue outer;
	        }
	      }
	      result.push(value);
	    }
	    else if (!includes(values, computed, comparator)) {
	      result.push(value);
	    }
	  }
	  return result;
	}

	module.exports = baseDifference;


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(71),
	    setCacheAdd = __webpack_require__(102),
	    setCacheHas = __webpack_require__(103);

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values ? values.length : 0;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	module.exports = SetCache;


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(72),
	    mapCacheDelete = __webpack_require__(96),
	    mapCacheGet = __webpack_require__(99),
	    mapCacheHas = __webpack_require__(100),
	    mapCacheSet = __webpack_require__(101);

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	module.exports = MapCache;


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(73),
	    ListCache = __webpack_require__(85),
	    Map = __webpack_require__(93);

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	module.exports = mapCacheClear;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(74),
	    hashDelete = __webpack_require__(81),
	    hashGet = __webpack_require__(82),
	    hashHas = __webpack_require__(83),
	    hashSet = __webpack_require__(84);

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	module.exports = Hash;


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(75);

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}

	module.exports = hashClear;


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(76);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(77);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object[key];
	  return isNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(78),
	    isHostObject = __webpack_require__(14),
	    isObject = __webpack_require__(79),
	    toSource = __webpack_require__(80);

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = isNative;


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(79);

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	module.exports = isFunction;


/***/ },
/* 79 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 80 */
/***/ function(module, exports) {

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	module.exports = toSource;


/***/ },
/* 81 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}

	module.exports = hashDelete;


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(75);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	module.exports = hashGet;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(75);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}

	module.exports = hashHas;


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(75);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	module.exports = hashSet;


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(86),
	    listCacheDelete = __webpack_require__(87),
	    listCacheGet = __webpack_require__(90),
	    listCacheHas = __webpack_require__(91),
	    listCacheSet = __webpack_require__(92);

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	module.exports = ListCache;


/***/ },
/* 86 */
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}

	module.exports = listCacheClear;


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(88);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}

	module.exports = listCacheDelete;


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(89);

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;


/***/ },
/* 89 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 * var other = { 'user': 'fred' };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(88);

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	module.exports = listCacheGet;


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(88);

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	module.exports = listCacheHas;


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(88);

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	module.exports = listCacheSet;


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(76),
	    root = __webpack_require__(94);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, global) {var checkGlobal = __webpack_require__(95);

	/** Used to determine if values are of the language type `Object`. */
	var objectTypes = {
	  'function': true,
	  'object': true
	};

	/** Detect free variable `exports`. */
	var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType)
	  ? exports
	  : undefined;

	/** Detect free variable `module`. */
	var freeModule = (objectTypes[typeof module] && module && !module.nodeType)
	  ? module
	  : undefined;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = checkGlobal(freeExports && freeModule && typeof global == 'object' && global);

	/** Detect free variable `self`. */
	var freeSelf = checkGlobal(objectTypes[typeof self] && self);

	/** Detect free variable `window`. */
	var freeWindow = checkGlobal(objectTypes[typeof window] && window);

	/** Detect `this` as the global object. */
	var thisGlobal = checkGlobal(objectTypes[typeof this] && this);

	/**
	 * Used as a reference to the global object.
	 *
	 * The `this` value is used if it's the global object to avoid Greasemonkey's
	 * restricted `window` object, otherwise the `window` object is used.
	 */
	var root = freeGlobal ||
	  ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) ||
	    freeSelf || thisGlobal || Function('return this')();

	module.exports = root;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(64)(module), (function() { return this; }())))

/***/ },
/* 95 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a global object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {null|Object} Returns `value` if it's a global object, else `null`.
	 */
	function checkGlobal(value) {
	  return (value && value.Object === Object) ? value : null;
	}

	module.exports = checkGlobal;


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(97);

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}

	module.exports = mapCacheDelete;


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(98);

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	module.exports = getMapData;


/***/ },
/* 98 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	module.exports = isKeyable;


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(97);

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	module.exports = mapCacheGet;


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(97);

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	module.exports = mapCacheHas;


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(97);

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}

	module.exports = mapCacheSet;


/***/ },
/* 102 */
/***/ function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	module.exports = setCacheAdd;


/***/ },
/* 103 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	module.exports = setCacheHas;


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(105);

	/**
	 * A specialized version of `_.includes` for arrays without support for
	 * specifying an index to search from.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} target The value to search for.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludes(array, value) {
	  return !!array.length && baseIndexOf(array, value, 0) > -1;
	}

	module.exports = arrayIncludes;


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var indexOfNaN = __webpack_require__(106);

	/**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  if (value !== value) {
	    return indexOfNaN(array, fromIndex);
	  }
	  var index = fromIndex - 1,
	      length = array.length;

	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = baseIndexOf;


/***/ },
/* 106 */
/***/ function(module, exports) {

	/**
	 * Gets the index at which the first occurrence of `NaN` is found in `array`.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched `NaN`, else `-1`.
	 */
	function indexOfNaN(array, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 0 : -1);

	  while ((fromRight ? index-- : ++index < length)) {
	    var other = array[index];
	    if (other !== other) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = indexOfNaN;


/***/ },
/* 107 */
/***/ function(module, exports) {

	/**
	 * This function is like `arrayIncludes` except that it accepts a comparator.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} target The value to search for.
	 * @param {Function} comparator The comparator invoked per element.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludesWith(array, value, comparator) {
	  var index = -1,
	      length = array.length;

	  while (++index < length) {
	    if (comparator(value, array[index])) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arrayIncludesWith;


/***/ },
/* 108 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;


/***/ },
/* 109 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing wrapper metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	module.exports = baseUnary;


/***/ },
/* 110 */
/***/ function(module, exports) {

	/**
	 * Checks if a cache value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	module.exports = cacheHas;


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(112),
	    isFlattenable = __webpack_require__(113);

	/**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, depth, predicate, isStrict, result) {
	  var index = -1,
	      length = array.length;

	  predicate || (predicate = isFlattenable);
	  result || (result = []);

	  while (++index < length) {
	    var value = array[index];
	    if (depth > 0 && predicate(value)) {
	      if (depth > 1) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, depth - 1, predicate, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}

	module.exports = baseFlatten;


/***/ },
/* 112 */
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	module.exports = arrayPush;


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(114),
	    isArray = __webpack_require__(120);

	/**
	 * Checks if `value` is a flattenable `arguments` object or array.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	 */
	function isFlattenable(value) {
	  return isArray(value) || isArguments(value);
	}

	module.exports = isFlattenable;


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLikeObject = __webpack_require__(115);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	module.exports = isArguments;


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(116),
	    isObjectLike = __webpack_require__(15);

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	module.exports = isArrayLikeObject;


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(117),
	    isFunction = __webpack_require__(78),
	    isLength = __webpack_require__(119);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value)) && !isFunction(value);
	}

	module.exports = isArrayLike;


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(118);

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a
	 * [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792) that affects
	 * Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	module.exports = getLength;


/***/ },
/* 118 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	module.exports = baseProperty;


/***/ },
/* 119 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length,
	 *  else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },
/* 120 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @type {Function}
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(122),
	    toInteger = __webpack_require__(123);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as
	 * an array.
	 *
	 * **Note:** This method is based on the
	 * [rest parameter](https://mdn.io/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.rest(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function rest(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : toInteger(start), 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, array);
	      case 1: return func.call(this, args[0], array);
	      case 2: return func.call(this, args[0], args[1], array);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}

	module.exports = rest;


/***/ },
/* 122 */
/***/ function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  var length = args.length;
	  switch (length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	module.exports = apply;


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var toFinite = __webpack_require__(124);

	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This function is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger(value) {
	  var result = toFinite(value),
	      remainder = result % 1;

	  return result === result ? (remainder ? result - remainder : result) : 0;
	}

	module.exports = toInteger;


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var toNumber = __webpack_require__(125);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;

	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}

	module.exports = toFinite;


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(78),
	    isObject = __webpack_require__(79),
	    isSymbol = __webpack_require__(126);

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = isFunction(value.valueOf) ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	module.exports = toNumber;


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(15);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	module.exports = isSymbol;


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var baseFlatten = __webpack_require__(111),
	    baseUniq = __webpack_require__(128),
	    isArrayLikeObject = __webpack_require__(115),
	    rest = __webpack_require__(121);

	/**
	 * Creates an array of unique values, in order, from all given arrays using
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {...Array} [arrays] The arrays to inspect.
	 * @returns {Array} Returns the new array of combined values.
	 * @example
	 *
	 * _.union([2, 1], [4, 2], [1, 2]);
	 * // => [2, 1, 4]
	 */
	var union = rest(function(arrays) {
	  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
	});

	module.exports = union;


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(70),
	    arrayIncludes = __webpack_require__(104),
	    arrayIncludesWith = __webpack_require__(107),
	    cacheHas = __webpack_require__(110),
	    createSet = __webpack_require__(129),
	    setToArray = __webpack_require__(132);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new duplicate free array.
	 */
	function baseUniq(array, iteratee, comparator) {
	  var index = -1,
	      includes = arrayIncludes,
	      length = array.length,
	      isCommon = true,
	      result = [],
	      seen = result;

	  if (comparator) {
	    isCommon = false;
	    includes = arrayIncludesWith;
	  }
	  else if (length >= LARGE_ARRAY_SIZE) {
	    var set = iteratee ? null : createSet(array);
	    if (set) {
	      return setToArray(set);
	    }
	    isCommon = false;
	    includes = cacheHas;
	    seen = new SetCache;
	  }
	  else {
	    seen = iteratee ? [] : result;
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;

	    value = (comparator || value !== 0) ? value : 0;
	    if (isCommon && computed === computed) {
	      var seenIndex = seen.length;
	      while (seenIndex--) {
	        if (seen[seenIndex] === computed) {
	          continue outer;
	        }
	      }
	      if (iteratee) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	    else if (!includes(seen, computed, comparator)) {
	      if (seen !== result) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	  }
	  return result;
	}

	module.exports = baseUniq;


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var Set = __webpack_require__(130),
	    noop = __webpack_require__(131),
	    setToArray = __webpack_require__(132);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/**
	 * Creates a set of `values`.
	 *
	 * @private
	 * @param {Array} values The values to add to the set.
	 * @returns {Object} Returns the new set.
	 */
	var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
	  return new Set(values);
	};

	module.exports = createSet;


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(76),
	    root = __webpack_require__(94);

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	module.exports = Set;


/***/ },
/* 131 */
/***/ function(module, exports) {

	/**
	 * A no-operation function that returns `undefined` regardless of the
	 * arguments it receives.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.3.0
	 * @category Util
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.noop(object) === undefined;
	 * // => true
	 */
	function noop() {
	  // No operation performed.
	}

	module.exports = noop;


/***/ },
/* 132 */
/***/ function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	module.exports = setToArray;


/***/ },
/* 133 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var defaultSocketOptions = exports.defaultSocketOptions = {
	  protocol: 'http',
	  hostname: 'remotedev.io',
	  port: 80,
	  autoReconnect: true,
	  autoReconnectOptions: {
	    randomness: 60000
	  }
	};

/***/ }
/******/ ]);