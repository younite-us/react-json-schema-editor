import React, { Component, useState } from 'react';
import { connect, Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Checkbox, withStyles as withStyles$1, Modal, Typography, IconButton, TextField, Grid } from '@material-ui/core';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';
import Add from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowRight from '@material-ui/icons/ArrowRight';
import CancelIcon from '@material-ui/icons/Cancel';
import SettingsIcon from '@material-ui/icons/Settings';

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

const UPDATE_JSON_ELEMENT = 'UPDATE_JSON_ELEMENT';
const UPDATE_JSON_FLAG = 'UPDATE_JSON_FLAG';
const RESET_COMPONENT = 'RESET_COMPONENT';
const PATCH_STATUS_FLAG = 'PATCH_STATUS_FLAG';
function updateJsonElement(rootJson, deleteFlag) {
  return {
    type: UPDATE_JSON_ELEMENT,
    payload: {
      rootJson: rootJson,
      deleteFlag: deleteFlag
    }
  };
}
function updateJsonFlag(deleteFlag) {
  return {
    type: UPDATE_JSON_FLAG,
    payload: deleteFlag
  };
}

const initialGroupState = {
  jsonSchema: {},
  rootJsonSchema: {},
  items: [],
  storeDeleteFlag: false,
  refreshComponent: '1',
  patchCompletFlag: true
};
function createNewElementReducer(state = initialGroupState, action) {
  switch (action.type) {
    case UPDATE_JSON_ELEMENT:
      return Object.assign({}, state, { ...state,
        rootJsonSchema: action.payload.rootJson,
        storeDeleteFlag: action.payload.deleteFlag
      });

    case UPDATE_JSON_FLAG:
      return Object.assign({}, state, { ...state,
        storeDeleteFlag: action.payload
      });

    case RESET_COMPONENT:
      return Object.assign({}, state, { ...state,
        refreshComponent: action.payload
      });

    case PATCH_STATUS_FLAG:
      return Object.assign({}, state, { ...state,
        patchCompletFlag: action.payload
      });

    default:
      return state;
  }
}

var rootReducer = combineReducers({
  createNewElementReducer: createNewElementReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

class YouCheckbox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement(Checkbox, {
      type: "checkbox",
      checked: this.props.checked,
      onChange: this.props.onClick,
      color: "primary"
    });
  }

}
YouCheckbox.propTypes = {
  checked: propTypes.bool,
  onClick: propTypes.func
};

class YouAutocomplete extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, this.props.multiOption === 'true' ? /*#__PURE__*/React.createElement(Select, {
      name: this.props.autocompleteName,
      placeholder: this.props.autocompletePlaceholder,
      value: this.props.autocompleteValue,
      onChange: this.props.onChange,
      options: this.props.autocompleteObject,
      classNamePrefix: "you-select__menu",
      multi: true
    }) : /*#__PURE__*/React.createElement(Select, {
      name: this.props.autocompleteName,
      placeholder: this.props.autocompletePlaceholder,
      value: this.props.autocompleteValue,
      onChange: this.props.onChange,
      options: this.props.autocompleteObject,
      classNamePrefix: "you-select__menu"
    }));
  }

}
YouAutocomplete.propTypes = {
  autocompletePlaceholder: propTypes.string,
  autocompleteName: propTypes.string,
  autocompleteValue: propTypes.any,
  autocompleteObject: propTypes.array,
  multiOption: propTypes.bool,
  onChange: propTypes.func
};

const styles = theme => ({
  bootstrapInput: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.1rem rgba(0,123,255,.25)'
    }
  }
});

class YouInput extends Component {
  constructor(props) {
    super(props);

    this.onBlur = event => {
      this.formRef.current.reportValidity();
      this.props.onBlur(event);
    };

    this.formRef = React.createRef();
    this.state = {
      elementInputValue: ''
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.elementInputValue) {
      this.setState({
        elementInputValue: nextProps.inputName
      });
    }
  }

  componentDidMount() {
    this.setState({
      elementInputValue: this.props.inputName
    });
  }

  onChangeInput(event) {
    this.setState({
      elementInputValue: event.target.value
    });
    this.props.onChangeInput(event);
  }

  render() {
    const {
      classes
    } = this.props;
    return (
      /*#__PURE__*/
      React.createElement("form", {
        ref: this.formRef
      }, /*#__PURE__*/React.createElement(InputBase, {
        id: "bootstrap-input",
        classes: {
          root: classes.bootstrapRoot,
          input: classes.bootstrapInput
        },
        required: true,
        autoFocus: true,
        name: this.props.inputName,
        placeholder: "Enter Text",
        value: this.state.elementInputValue,
        onBlur: this.onBlur,
        onChange: this.onChangeInput.bind(this),
        size: "small"
      }))
    );
  }

}

var YouInput$1 = withStyles(styles)(YouInput);

var styles$1 = (theme => ({
  expansionPanelStyle: {},
  expantionPanelHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: 0,
    marginLeft: '5px'
  },
  expantionPanelHeaderRoot: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 0,
    alignSelf: 'flex-start'
  },
  countBracket: {
    paddingLeft: '2%',
    paddingRight: '2%',
    width: '1rem'
  },
  requiredClass: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-arround'
  },
  colonClass: {
    paddingLeft: '2%',
    paddingRight: '2%'
  },
  deleteIcon: {
    float: 'right'
  },
  expantionPanelIcons: {
    display: 'flex',
    alignItems: 'center',
    width: '3rem'
  },
  panelClass: {
    display: 'flex',
    flexDirection: 'column'
  },
  detailsForm: {},
  hideClass: {
    display: 'none'
  },
  notObject: {
    display: 'flex'
  },
  emptyDiv: {
    width: '3rem'
  },
  dropDownClass: {
    width: '10rem'
  },
  expantionPanelHide: {
    display: 'none'
  },
  muiModelClass: {
    backgroundColor: 'white',
    width: '50rem',
    height: '20rem',
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: '50vh',
    top: '20vh'
  },
  modalHeader: {
    maxWidth: '100%',
    padding: '2%',
    paddingLeft: '4%',
    paddingRight: '4%',
    height: '2rem',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#2b63bb'
  },
  closeIcon: {
    top: 0,
    color: 'white'
  },
  typeTitle: {
    backGroundColor: 'white'
  },
  hiddenClass: {
    display: 'none'
  }
}));

const StyledMatPanel = withStyles$1({
  root: {
    borderRadius: 0,
    border: 0,
    padding: 0,
    boxShadow: 'none',
    flexGrow: 1
  }
})(ExpansionPanel);
const StyledMatPanelSummary = withStyles$1({
  root: {
    borderRadius: 0,
    border: 0,
    padding: 0,
    paddingLeft: '6px',
    margin: 0,
    height: '10px'
  }
})(ExpansionPanelSummary);
const StyledMatPanelDetails = withStyles$1({
  root: {
    borderRadius: 0,
    border: 0,
    padding: 0,
    paddingLeft: '15px',
    margin: 0
  }
})(ExpansionPanelDetails);

class Collapsible extends Component {
  constructor(props) {
    super(props);

    this.handleTypeChange = type => {
      this.setState({
        defaultValue: type
      });

      if (this.props.inputValue !== '') {
        this.props.handleTypeChange(this.props.inputValue, type);
      } else {
        this.props.handleTypeChange(this.props.currentElementIndex, type);
      }
    };

    this.getChild = index => {
      this.props.childItems.map((child, i) => {
        if (i === index) {
          return child;
        }
      });
    };

    this.gotDetails = (details, value) => {
      switch (details) {
        case 'name':
          if (value !== '' && this.state.inputName !== value) {
            if (this.state.inputName === '') {
              this.setState({
                inputName: value
              });
              this.props.onChangeInputOfElement(this.props.currentElementIndex, value);
            } else {
              this.props.onChangeInputOfElement(this.state.inputName, value);
              this.setState({
                inputName: value
              });
            }
          }

          break;

        case 'description':
          this.setState({
            description: value
          });

          if (this.state.inputName === '') {
            this.props.onChangeDetails(this.props.currentElementIndex, 'description', value);
          } else {
            this.props.onChangeDetails(this.state.inputName, 'description', value);
          }

          break;

        case 'required':
          this.setState({
            isRequired: value
          });

          if (this.state.inputName === '') {
            this.props.onChangeRequired(this.props.currentElementIndex, value);
          } else {
            this.props.onChangeRequired(this.state.inputName, value);
          }

          break;

        case 'def':
          this.setState({
            default: value
          });

          if (this.state.inputName === '') {
            this.props.onChangeDetails(this.props.currentElementIndex, 'default', value);
          } else {
            this.props.onChangeDetails(this.state.inputName, 'default', value);
          }

          break;
      }
    };

    this.getListElement = (newEleKey, i) => {
      console.log('mounting new element ', newEleKey);
      return /*#__PURE__*/React.createElement(ComponentGenerator, {
        type: "JsonBuilder",
        key: newEleKey,
        isNewElement: true,
        id: newEleKey,
        componentKey: newEleKey,
        componentCreated: this.props.componentCreated,
        childElementNameChanged: this.props.childElementNameChanged,
        handleChildTypeChange: this.props.handleChildTypeChange,
        deleteRequestChild: this.props.deleteRequestChild,
        checkDeleteKey: this.props.childDeleteKey,
        indexInParentArray: i,
        patchData: this.state.childItems[i],
        selfDelete: this.props.selfDelete,
        onChangeRequiredChild: this.props.onChangeRequiredChild,
        onChangeDetailsChild: this.props.onChangeDetailsChild
      });
    };

    this.selectedTypeChild = [];
    this.state = {
      expanded: false,
      defaultValue: {
        'label': 'Object',
        'value': 'Object'
      },
      isNewElement: false,
      inputName: '',
      inputNameValue: '',
      childItems: [],
      totalChildCount: 0,
      showDetails: false,
      isRequired: false,
      anchorEl: null,
      elementCount: 0
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.newElementCount !== nextProps.newElementCount || nextProps.newElementCount !== 0) {
      this.setState({
        elementCount: nextProps.newElementCount
      });
    }

    if (nextProps.totalChildCount === 0 || nextProps.totalChildCount > 0) {
      this.setState({
        totalChildCount: nextProps.totalChildCount
      });
    }

    if (nextProps.childItems) {
      this.setState({
        childItems: nextProps.childItems
      });
    }

    if (nextProps.patchData) {
      const key = Object.keys(nextProps.patchData)[0];

      if (Object.keys(nextProps.patchData[key]).includes('type')) {
        this.setState({
          defaultValue: {
            'label': nextProps.patchData[key].type,
            'value': nextProps.patchData[key].type
          }
        });
      } else {
        this.setState({
          defaultValue: {
            'label': 'Object',
            'value': 'Object'
          }
        });
      }
    }

    if (nextProps.inputValue) {
      this.setState({
        inputName: nextProps.inputValue
      });
    }
  }

  componentDidMount() {
    if (this.props.isNewElement) {
      this.setState({
        defaultValue: {
          'label': 'String',
          'value': 'String'
        },
        isNewElement: this.props.isNewElement
      });
    }
  }

  onChangeInputOfElement(event) {
    if (event.target.value !== '' && this.state.inputName !== event.target.value) {
      if (this.state.inputName === '') {
        this.setState({
          inputName: event.target.value
        });
        this.props.onChangeInputOfElement(this.props.currentElementIndex, event.target.value);
      } else {
        this.props.onChangeInputOfElement(this.state.inputName, event.target.value);
        this.setState({
          inputName: event.target.value
        });
      }
    }
  }

  setInputValue(event) {
    this.setState({
      inputNameValue: event.target.value
    });
  }

  onDeleteElement() {
    this.props.onDeleteElement(this.props.currentElementIndex);
  }

  showDetailsClicked(event) {
    this.setState({
      showDetails: !this.state.showDetails,
      anchorEl: event.currentTarget
    });
  }

  onCloseDetailsClicked() {
    this.setState({
      showDetails: !this.state.showDetails,
      anchorEl: null
    });
  }

  isRequired(event) {
    this.setState({
      isRequired: event.target.checked
    });

    if (this.state.inputName === '') {
      this.props.onChangeRequired(this.props.currentElementIndex, event.target.checked);
    } else {
      this.props.onChangeRequired(this.state.inputName, event.target.checked);
    }
  }

  render() {
    const newArrayElements = [...Array(this.state.elementCount)];
    const {
      classes
    } = this.props;
    const compo = this.state;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: classes.expantionPanelHeader
    }, /*#__PURE__*/React.createElement("div", {
      className: classes.expantionPanelHeader
    }, this.state.defaultValue.label === 'Object' ? /*#__PURE__*/React.createElement("div", {
      className: classes.expantionPanelIcons
    }, /*#__PURE__*/React.createElement(ComponentGenerator, {
      type: "addMoreIcon",
      addMore: this.props.addMore.bind(this, this.props.currentElementIndex, this.props.newElementCount)
    }), this.props.currentElementIndex !== 0 ? /*#__PURE__*/React.createElement(ComponentGenerator, {
      type: "arrowDownUp",
      expanded: this.props.expanded,
      handleChange: this.props.expandClick
    }) : '') : /*#__PURE__*/React.createElement("div", {
      className: classes.expantionPanelIcons
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: classes.requiredClass
    }, this.state.isNewElement ? /*#__PURE__*/React.createElement(ComponentGenerator, {
      type: "input",
      inputName: compo.inputName,
      onChangeInput: this.setInputValue.bind(this),
      onBlur: this.onChangeInputOfElement.bind(this)
    }) : '', /*#__PURE__*/React.createElement(ComponentGenerator, {
      className: this.state.isNewElement ? classes.checkBoxClass : classes.hiddenClass,
      checked: this.state.isRequired,
      onClick: this.isRequired.bind(this),
      type: "checkbox"
    }))), /*#__PURE__*/React.createElement("div", {
      className: classes.dropDownClass
    }, this.props.currentElementIndex !== 0 ? /*#__PURE__*/React.createElement(ComponentGenerator, {
      type: "dropdown",
      autocompleteName: this.props.autocompleteName,
      autocompletePlaceholder: this.props.autocompletePlaceholder,
      autocompleteValue: this.state.defaultValue,
      autocompleteObject: this.props.autocompleteObject,
      multiOption: this.props.multiOption,
      onChange: this.handleTypeChange.bind(this)
    }) : /*#__PURE__*/React.createElement("h4", null, "Properties")), this.state.defaultValue.label === 'Object' ? /*#__PURE__*/React.createElement("p", {
      className: classes.countBracket
    }, "[", this.state.totalChildCount, "]") : /*#__PURE__*/React.createElement("p", {
      className: classes.countBracket
    }), /*#__PURE__*/React.createElement("div", null, this.state.isNewElement ? /*#__PURE__*/React.createElement("div", null, this.state.showDetails ? /*#__PURE__*/React.createElement(ComponentGenerator, {
      type: "CancelIcon",
      onClick: this.showDetailsClicked.bind(this)
    }) : /*#__PURE__*/React.createElement(ComponentGenerator, {
      type: "SettingsIcon",
      onClick: this.showDetailsClicked.bind(this)
    })) : ''), this.state.isNewElement ? /*#__PURE__*/React.createElement("div", {
      className: classes.requiredClass
    }, /*#__PURE__*/React.createElement("div", {
      onClick: this.onDeleteElement.bind(this),
      className: classes.deleteIcon
    }, /*#__PURE__*/React.createElement(ComponentGenerator, {
      type: "deleteIcon"
    }))) : '')), /*#__PURE__*/React.createElement("div", {
      className: classes.panelClass
    }, this.state.defaultValue.label === 'Object' && this.props.expanded || this.props.currentElementIndex === 0 ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyleType: 'none'
      }
    }, newArrayElements.map((e, i) => {
      const eleId = i + 1;
      const newEleKey = this.props.currentElementIndex + ':' + eleId;
      return /*#__PURE__*/React.createElement("li", {
        key: newEleKey
      }, this.getListElement(newEleKey, i));
    }))) : ''), /*#__PURE__*/React.createElement(Modal, {
      "aria-labelledby": "simple-modal-title",
      "aria-describedby": "simple-modal-description",
      open: this.state.showDetails,
      onClose: () => {
        this.setState({
          showDetails: false
        });
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: classes.muiModelClass
    }, /*#__PURE__*/React.createElement("div", {
      className: classes.modalHeader
    }, /*#__PURE__*/React.createElement("div", {
      className: "typeTitle"
    }, /*#__PURE__*/React.createElement(Typography, {
      variant: "h6"
    }, "String")), /*#__PURE__*/React.createElement(IconButton, {
      className: classes.closeIcon,
      color: "primary",
      onClick: () => {
        this.setState({
          showDetails: false
        });
      }
    }, /*#__PURE__*/React.createElement(HighlightOffRoundedIcon, null))), /*#__PURE__*/React.createElement(ComponentGenerator, {
      type: "Model",
      elementDetails: this.gotDetails.bind(this),
      subType: this.state.defaultValue.label
    }))));
  }

}

const mapStateToProps = function mapStateToProps(store) {
  return {
    updatedRootJson: store.createNewElementReducer.rootJsonSchema
  };
};

var Collapsible$1 = connect(mapStateToProps)(withStyles$1(styles$1)(Collapsible));

class AddMore extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement(Add, {
      onClick: this.props.addMore,
      className: "plusIcon"
    });
  }

}
AddMore.propTypes = {
  onClick: propTypes.func
};

function ArrowDownUp(props) {
  return /*#__PURE__*/React.createElement("div", null, props.expanded ? /*#__PURE__*/React.createElement(ArrowDropDown, {
    onClick: props.handleChange
  }) : /*#__PURE__*/React.createElement(ArrowRight, {
    onClick: props.handleChange
  }));
}
ArrowDownUp.propTypes = {
  expanded: propTypes.bool,
  handleChange: propTypes.func
};

function TypeLabel(props) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: props.onClick
  }, /*#__PURE__*/React.createElement("h5", null, props.label));
}
TypeLabel.propTypes = {
  label: propTypes.string,
  onClick: propTypes.func
};

class JsonField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      label: 'Object'
    };
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "expantionPanelHeader"
    }, /*#__PURE__*/React.createElement(ComponentGenerator, {
      type: "addMoreIcon",
      addMore: this.props.addMore
    }), /*#__PURE__*/React.createElement(ComponentGenerator, {
      type: "arrowDownUp",
      expanded: this.state.expanded,
      expandClick: this.expandClick
    }), /*#__PURE__*/React.createElement(ComponentGenerator, {
      type: "typeLabel",
      label: this.state.label,
      onClickLabel: this.props.onClickLabel
    }), /*#__PURE__*/React.createElement(ComponentGenerator, {
      className: "checkBoxClass",
      type: "checkbox"
    }), /*#__PURE__*/React.createElement(ComponentGenerator, {
      type: "typeLabel",
      label: "required"
    }));
  }

}

const TYPES = [{
  'label': 'Object',
  'value': 'Object'
}, {
  'label': 'String',
  'value': 'String'
}, {
  'label': 'Integer',
  'value': 'Integer'
}, {
  'label': 'Number',
  'value': 'Number'
}, {
  'label': 'Boolean',
  'value': 'Boolean'
}, {
  'label': 'URI',
  'value': 'URI'
}, {
  'label': '$ref',
  'value': '$ref'
}, {
  'label': 'Array',
  'value': 'Array'
}];

class JsonBuilder extends Component {
  constructor(props) {
    super();

    this.patchJson = jsonChildArr => {
      this.counter = jsonChildArr.length;
      this.setState({
        childItems: jsonChildArr,
        newElementCount: jsonChildArr.length,
        childDeleteKey: '-1',
        patchComplete: true,
        expanded: true,
        counter: this.counter
      });
    };

    this.addMore = (index, count) => {
      store.dispatch(updateJsonFlag(false));

      if (this.props.patchJson && this.props.patchJson.length > 0) {
        this.childItems = this.props.patchJson;
      }

      this.counter = this.counter + 1;
      const jsonStringElement = {
        'type': 'String'
      };
      const actualCount = count + 1;
      const uniqueKey = index + ':' + actualCount;
      this.childItems.push({
        [uniqueKey]: jsonStringElement
      });
      this.setState({
        newElementCount: this.state.newElementCount + 1,
        childDeleteKey: '-1',
        childItems: this.childItems,
        counter: this.counter
      });
      this.props.componentCreated(this.childItems, this.state.name);
    };

    this.expandClick = () => {
      this.setState({
        expanded: !this.state.expanded
      });
    };

    this.handleTypeChange = (elementKey, type) => {
      this.setState({
        currentElementType: type
      });
      this.props.handleChildTypeChange(elementKey, type);
    };

    this.onChangeInputOfElement = (elementKey, value) => {
      this.setState({
        name: value
      });

      if (this.state.name === '') {
        this.props.childElementNameChanged(this.state.indexInParentArray, value, elementKey);
      } else {
        this.props.childElementNameChanged(this.state.indexInParentArray, value, this.state.name);
      }
    };

    this.childItems = [];
    this.counter = 0;
    this.state = {
      expanded: false,
      typeInput: 'Object',
      newElementCount: 0,
      currentElementType: {
        'label': 'Object',
        'value': 'Object'
      },
      elementInputLabel: '',
      elementNode: {},
      childItems: [],
      elementsChilds: {
        items: []
      },
      name: '',
      updatedRootJsonToChild: '',
      storeDeleteFlag: false,
      childDeleteKey: '',
      indexInParentArray: 0,
      patchComplete: false,
      counter: 0,
      selfDelete: false,
      clickDelete: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.patchJson && nextProps.patchJson.length > 0) {
      console.log('new patch ', nextProps.patchJson);

      if (!this.state.patchComplete) {
        this.patchJson(nextProps.patchJson);
      }
    }

    if (nextProps.patchData && !this.state.patchComplete && this.state.name !== 'root-node') {
      if (Object.keys(nextProps.patchData)[0].includes(':')) {
        this.setState({
          name: ''
        });
      } else {
        this.setState({
          name: Object.keys(nextProps.patchData)[0]
        });
      }

      const obj = nextProps.patchData[Object.keys(nextProps.patchData)[0]];

      if (!Object.keys(obj).includes('type') || obj.type === 'Object') {
        Object.keys(obj).map(key => {
          this.childItems.push({
            [key]: obj[key]
          });
        });
        this.patchJson(this.childItems);
      } else {
        this.setState({
          patchComplete: true
        });
      }
    }

    if (nextProps.componentKey && !nextProps.componentKey.includes(':')) {
      this.setState({
        name: nextProps.componentKey
      });
    }

    if (this.state.name !== '' && nextProps.checkDeleteKey === this.props.componentKey + this.state.name) {
      this.setState({
        checkDeleteKey: nextProps.componentKey
      });
    } else if (nextProps.checkDeleteKey === this.props.componentKey) {
      this.setState({
        checkDeleteKey: nextProps.componentKey
      });
    }

    if (nextProps.updatedRootJson && Object.keys(nextProps.updatedRootJson).length === 0) {
      this.childItems = [];
    }
  }

  componentDidMount() {
    this.setState({
      childItems: this.props.patchJson
    });
    this.childItems = this.state.childItems;
    this.props.componentCreated(this.childItems, this.state.name, null, null, null, null, this.props.componentKey);

    if (this.props.componentKey !== undefined && this.props.componentKey !== 0) {
      const strType = {
        'label': 'String',
        'value': 'String'
      };
      this.setState({
        currentElementType: strType
      });

      if (this.props.componentKey.includes(':')) {
        this.setState({
          name: ''
        });
      } else {
        this.setState({
          name: this.props.componentKey
        });
      }
    } else {
      this.setState({
        name: 'root-node'
      });
    }

    this.setState({
      indexInParentArray: this.props.indexInParentArray
    });
  }

  childElementNameChanged(childInd, childValue, oldKey) {
    if (childValue !== '' && childValue !== undefined && childInd !== '' && childInd !== undefined) {
      if (this.childItems.length === 0) {
        this.childItems = this.state.childItems;
      }

      this.childItems.map(child => {
        if (Object.keys(child)[0] === oldKey && oldKey !== childValue) {
          const valueToReplace = child[oldKey];
          child[childValue] = valueToReplace;
          delete child[oldKey];
        }
      });
      this.props.componentCreated(this.childItems, this.state.name, oldKey, childValue);
    }
  }

  handleChildTypeChange(childElementKey, childType) {
    this.childItems.map(child => {
      if (Object.keys(child)[0] === childElementKey) {
        if (child[childElementKey].type === 'Object' || !Object.keys(child[childElementKey]).includes('type')) {
          delete child[childElementKey].type;
          const remainingItems = child[childElementKey];
          child[childElementKey] = {
            'type': childType.label,
            ...remainingItems
          };
        } else {
          child[childElementKey].type = childType.label;
        }
      }
    });
    this.props.componentCreated(this.childItems, childElementKey);
  }

  componentCreated(childItems, childName, oldKey, newKey, deleteFlag, childKeyToDelete, lastKey) {
    if (this.props.componentKey === 0 && lastKey !== undefined) {
      if (parseInt(lastKey.split(':')[1]) === this.childItems.length) {
        this.setState({
          patchComplete: true
        });
      }
    }

    if (this.childItems.length === 0) {
      this.childItems = this.state.childItems;
    }

    if (deleteFlag) {
      this.childItems.map(child => {
        var jsonKey = Object.keys(child);

        if (jsonKey[0] === childName) {
          delete child[childName][childKeyToDelete];
        }
      });
      this.setState({
        deleteFlag: deleteFlag
      });
    } else if (oldKey === undefined) {
      this.childItems.map(child => {
        var jsonKey = Object.keys(child);

        if (jsonKey[0] === childName) {
          childItems.map(item => {
            var itemJsonKey = Object.keys(item);
            child[childName][itemJsonKey[0]] = item[itemJsonKey[0]];
            delete child[childName].type;
          });
        }
      });
    } else {
      this.childItems.map(child => {
        var jsonKey = Object.keys(child);

        if (jsonKey[0] === childName) {
          var itemJsonKey = Object.keys(child[childName]);
          [...Array(itemJsonKey.length)].map((e, i) => {
            if (oldKey === itemJsonKey[i]) {
              const valueToReplace = child[childName][oldKey];
              child[childName][newKey] = valueToReplace;
              delete child[childName][oldKey];
              delete child[childName].type;
            }
          });
        }
      });
    }

    this.props.componentCreated(this.childItems, this.state.name);
  }

  onDeleteElement(currentIndex) {
    if (this.state.name === '') {
      this.props.deleteRequestChild(currentIndex);
    } else {
      this.props.deleteRequestChild(currentIndex, this.state.name, this.state.indexInParentArray);
    }
  }

  deleteRequestChild(childIndex, childName, indexInParentArray) {
    this.counter = this.counter - 1;
    let childItemsArr = this.childItems;
    let indexOfChild = '';
    childItemsArr.map(child => {
      if (Object.keys(child)[0] === childName) {
        indexOfChild = this.childItems.indexOf(child);
      }
    });
    this.childItems.splice(indexOfChild, 1);
    this.setState({
      childDeleteKey: childName ? childIndex + childName : childIndex,
      counter: this.counter
    });
    this.props.componentCreated(this.childItems, this.state.name, null, null, true, childName);
  }

  onChangeRequired(childName, isRequired) {
    this.props.onChangeRequiredChild(childName, isRequired);
  }

  onChangeRequiredChild(childElementKey, isRequired) {
    this.childItems.map(child => {
      if (Object.keys(child)[0] === childElementKey) {
        if (isRequired) {
          child[childElementKey].required = isRequired;
        } else if (child[childElementKey].required !== undefined) {
          delete child[childElementKey].required;
        }
      }
    });
    this.props.componentCreated(this.childItems, childElementKey);
  }

  onChangeDetails(childName, details, value) {
    this.setState({
      [details]: value
    });
    this.props.onChangeDetailsChild(childName, details, value);
  }

  onChangeDetailsChild(childElementKey, details, value) {
    this.childItems.map(child => {
      if (Object.keys(child)[0] === childElementKey) {
        if (value && value !== '' && value !== undefined) {
          child[childElementKey][details] = value;
        } else if (child[childElementKey][details] !== undefined) {
          delete child[childElementKey][details];
        }
      }
    });
    this.props.componentCreated(this.childItems, childElementKey);
  }

  render() {
    if (!this.state.checkDeleteKey) {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ComponentGenerator, {
        type: "collapsible",
        expanded: this.state.expanded,
        expandClick: this.expandClick,
        addMore: this.addMore,
        autocompleteName: "Type",
        autocompletePlaceholder: "Type",
        autocompleteObject: TYPES,
        multiOption: false,
        handleTypeChange: this.handleTypeChange.bind(this),
        isNewElement: this.props.isNewElement,
        newElementCount: this.state.newElementCount,
        currentElementIndex: this.props.componentKey,
        key: this.props.componentKey,
        onChangeInputOfElement: this.onChangeInputOfElement.bind(this),
        componentCreated: this.componentCreated.bind(this),
        elementInputValue: this.state.elementInputLabel,
        childElementNameChanged: this.childElementNameChanged.bind(this),
        handleChildTypeChange: this.handleChildTypeChange.bind(this),
        onDeleteElement: this.onDeleteElement.bind(this),
        deleteRequestChild: this.deleteRequestChild.bind(this),
        updatedRootJsonToChild: this.state.updatedRootJsonToChild,
        inputValue: this.state.name,
        storeDeleteFlag: this.props.storeDeleteFlag,
        childDeleteKey: this.state.childDeleteKey,
        childItems: this.state.childItems,
        patchData: this.props.patchData,
        totalChildCount: this.state.counter,
        onChangeRequired: this.onChangeRequired.bind(this),
        onChangeRequiredChild: this.onChangeRequiredChild.bind(this),
        onChangeDetails: this.onChangeDetails.bind(this),
        onChangeDetailsChild: this.onChangeDetailsChild.bind(this),
        updatedComponent: this.state.updatedComponent
      }));
    } else {
      return null;
    }
  }

}

const mapStateToProps$1 = function mapStateToProps(store) {
  return {
    updatedRootJson: store.createNewElementReducer.rootJsonSchema,
    patchCompletFlag: store.createNewElementReducer.patchCompletFlag
  };
};

var JsonBuilder$1 = connect(mapStateToProps$1)(JsonBuilder);

var styles$2 = (theme => ({
  ModelContainer: {
    display: 'grid',
    maxWidth: '100%',
    padding: '4%',
    backgroundColor: 'white'
  },
  formContainer: {
    width: '100 %',
    height: '100 %',
    display: 'flex',
    justifyContent: 'space-around'
  },
  formBox: {
    display: 'grid',
    padding: '5px'
  },
  requiredClass: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  divider: {
    minHeight: '100 %',
    width: '0.1rem',
    marginRight: '2px',
    marginLeft: '2px'
  },
  detailsLabels: {
    fontSize: 20
  }
}));

const ForObject = props => {
  const [allValues, setValue] = useState({
    name: '',
    description: '',
    def: '',
    required: ''
  });

  const inputChanged = (state, value) => {
    setValue({
      [state]: value,
      ...allValues
    });
    props.elementDetails(state, value);
  };

  const {
    classes
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: classes.ModelContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.detailsLabels
  }, "Details"), /*#__PURE__*/React.createElement("div", {
    className: classes.formContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.formBox
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.formFieldss
  }, /*#__PURE__*/React.createElement(TextField, {
    id: "standard-with-placeholder",
    label: "Default",
    placeholder: "Enter Default Value",
    margin: "normal",
    onBlur: event => inputChanged('def', event.target.value)
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    className: classes.labels
  }, "Description:"), /*#__PURE__*/React.createElement("textarea", {
    onBlur: event => inputChanged('description', event.target.value)
  }))), /*#__PURE__*/React.createElement("div", {
    className: classes.divider
  }), /*#__PURE__*/React.createElement("div", {
    className: classes.formBox
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Common Validations"), /*#__PURE__*/React.createElement("div", {
    className: classes.requiredClass
  }, /*#__PURE__*/React.createElement(ComponentGenerator, {
    type: "checkbox",
    onClick: event => inputChanged('required', event.target.checked)
  }), /*#__PURE__*/React.createElement(ComponentGenerator, {
    type: "typeLabel",
    label: "Required ?"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Object Validations"), /*#__PURE__*/React.createElement("div", {
    className: classes.formFieldss
  }, /*#__PURE__*/React.createElement(TextField, {
    id: "filled-number",
    label: "Minimum",
    placeholder: "Enter Minimum Value",
    margin: "normal",
    type: "number",
    onChange: event => inputChanged('minimum', event.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: classes.formFieldss
  }, /*#__PURE__*/React.createElement(TextField, {
    id: "filled-number",
    label: "Maximum",
    placeholder: "Enter Maximum Value",
    margin: "normal",
    type: "number",
    onChange: event => inputChanged('maximum', event.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: classes.formFieldss
  }, /*#__PURE__*/React.createElement(TextField, {
    id: "standard-with-placeholder",
    label: "Enum",
    placeholder: "Enter Enum Value",
    margin: "normal",
    onChange: event => inputChanged('enum', event.target.value)
  }))))));
};

var ForObject$1 = withStyles(styles$2)(ForObject);

const DsModel = props => {
  switch (props.subType) {
    case "Object":
      return /*#__PURE__*/React.createElement(ForObject$1, props);

    case "String":
    default:
      return /*#__PURE__*/React.createElement(ForObject$1, props);
  }
};

class ComponentGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    switch (this.props.type) {
      case "checkbox":
        return /*#__PURE__*/React.createElement(YouCheckbox, this.props);

      case "dropdown":
        return /*#__PURE__*/React.createElement(YouAutocomplete, this.props);

      case "input":
        return /*#__PURE__*/React.createElement(YouInput$1, this.props);

      case "collapsible":
        return /*#__PURE__*/React.createElement(Collapsible$1, Object.assign({
          childItems: this.props.childItems
        }, this.props));

      case "addMoreIcon":
        return /*#__PURE__*/React.createElement(AddMore, Object.assign({
          style: {
            color: "#A0A0A0"
          }
        }, this.props));

      case "arrowDownUp":
        return /*#__PURE__*/React.createElement(ArrowDownUp, Object.assign({
          style: {
            color: "#A0A0A0"
          }
        }, this.props));

      case "typeLabel":
        return /*#__PURE__*/React.createElement(TypeLabel, this.props);

      case "jsonField":
        return /*#__PURE__*/React.createElement(JsonField, this.props);

      case "JsonBuilder":
        return /*#__PURE__*/React.createElement(JsonBuilder$1, Object.assign({
          patchJson: this.props.patchJson
        }, this.props));

      case "deleteIcon":
        return /*#__PURE__*/React.createElement(DeleteIcon, Object.assign({
          style: {
            color: "#A0A0A0"
          }
        }, this.props));

      case "Model":
        return /*#__PURE__*/React.createElement(DsModel, this.props);

      case "CancelIcon":
        return /*#__PURE__*/React.createElement(CancelIcon, Object.assign({
          style: {
            color: "#A0A0A0"
          }
        }, this.props));

      case "SettingsIcon":
        return /*#__PURE__*/React.createElement(SettingsIcon, Object.assign({
          style: {
            color: "#A0A0A0"
          }
        }, this.props));

      default:
        return "";
    }
  }

}

let childItems = [];
function traverse(jsonObj) {
  if (jsonObj !== null && typeof jsonObj == "object") {
    Object.entries(jsonObj).forEach(([key, value]) => {
      if (checkIfArray(value)) ; else {
        addArrayChildItem(key, value);
      }
    });
  }

  return childItems;
}

function addArrayChildItem(key, value) {
  childItems.push({
    [key]: value
  });
}

function checkIfArray(json) {
  if (json instanceof Array) {
    return true;
  } else {
    return false;
  }
}

var styles$3 = (theme => ({
  designerContainer: {
    left: 0,
    backgroundColor: 'white',
    padding: '1rem',
    paddingTop: 0
  }
}));

class Designer extends Component {
  constructor(props) {
    super(props);

    this.clearOldData = () => {
      store.dispatch(updateJsonElement({}, true));
      this.setState({
        deleteEverything: true
      });
    };

    this.jsonFields = [];
    this.childItems = [];
    this.state = {
      expanded: false,
      expansionPanelDetails: [],
      childItems: null,
      deleteEverything: false,
      reset: 1
    };
  }

  componentWillReceiveProps(props) {
    if (props.uploadedJson && props.uploadedJson !== null && this.json !== props.uploadedJson) {
      this.jsonUploaded(props.uploadedJson);
    }
  }

  jsonUploaded(json) {
    if (traverse(json) !== this.childItems) {
      this.clearOldData();
      this.childItems = [];
      this.childItems = traverse(json);
      this.json = json;
      this.setState({
        childItems: this.childItems
      });
      store.dispatch(updateJsonElement(JSON.parse(JSON.stringify(this.childItems)), false));
    }
  }

  componentCreated(childItems, childName, oldKey, newKey, deleteFlag, childKeyToDelete) {
    let str = '';
    this.childItems = childItems;
    childItems.map(child => {
      if (str === '') {
        str = str + JSON.stringify(child).substring(1, JSON.stringify(child).length - 1);
      } else {
        str = str + ',' + JSON.stringify(child).substring(1, JSON.stringify(child).length - 1);
      }
    });
    const finalJsonStr = '{' + str + '}';

    if (deleteFlag !== undefined && deleteFlag) {
      store.dispatch(updateJsonElement(JSON.parse(finalJsonStr), deleteFlag));
    } else {
      store.dispatch(updateJsonElement(JSON.parse(finalJsonStr), false));
    }
  }

  render() {
    const {
      classes
    } = this.props;
    return /*#__PURE__*/React.createElement("div", {
      className: classes.designerContainer
    }, /*#__PURE__*/React.createElement(ComponentGenerator, {
      type: "JsonBuilder",
      isNewElement: false,
      id: "-1",
      patchJson: this.state.childItems ? this.state.childItems : [],
      componentCreated: this.componentCreated.bind(this),
      componentKey: 0
    }));
  }

}

const mapStateToProps$2 = function mapStateToProps(store) {
  return {
    updatedRootJson: store.createNewElementReducer.rootJsonSchema,
    patchCompletFlag: store.createNewElementReducer.patchCompletFlag
  };
};

var Designer$1 = connect(mapStateToProps$2)(withStyles(styles$3)(Designer));

let width = 80;
let height = 50;
let unit = 'rem';
function setWidthAndHeight(widthProp, heightProp, unitProp) {
  width = widthProp;
  height = heightProp;
  unit = unitProp;
}
function wp(percentProp) {
  let num = percentProp.split('%')[0];

  if (num !== '100') {
    const firstW = width * parseInt(num);
    const finalWidthPercent = firstW / 100;
    return finalWidthPercent + unit;
  } else {
    return width + unit;
  }
}
function hp(percentProp) {
  let num = percentProp.split('%')[0];

  if (num !== '100') {
    const firstH = height * parseInt(num);
    const finalHeightPercent = firstH / 100;
    return finalHeightPercent + unit;
  } else {
    return height + unit;
  }
}

var styles$4 = (theme => ({
  jsonView: {
    height: hp('100%'),
    width: wp('50%'),
    fontSize: '18px',
    padding: '2rem',
    paddingTop: '3rem',
    paddingLeft: '4rem',
    fontFamily: 'sans-serif',
    border: 'none',
    '-webkit-box-sizing': 'border-box',
    '-moz-box-sizing': 'border-box',
    'box-sizing': 'border-box'
  },
  '@global': {
    '::-webkit-scrollbar': {
      width: '0.5rem'
    },
    '::-webkit-scrollbar-track': {
      'box-shadow': 'inset 0 0 5px grey',
      'border-radius': '10px'
    },
    ':: -webkit-scrollbar-thumb': {
      backgroundColor: '#2196f3',
      'border-radius': ' 5px'
    },
    '::-webkit-scrollbar-thumb:hover': {
      backgroundColor: '#2196f3'
    }
  }
}));

class JsonSchemaViewer extends Component {
  constructor(props) {
    super();
    this.state = {
      jsonSchema: {},
      updatedRootJson: {}
    };
  }

  componentDidMount() {}

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.updatedRootJson) {
      this.setState({
        updatedRootJson: nextProps.updatedRootJson
      });
    }
  }

  render() {
    const {
      classes
    } = this.props;
    const oneChild = JSON.stringify(this.props.updatedRootJson, undefined, 10);
    return /*#__PURE__*/React.createElement("textarea", {
      name: "body",
      className: classes.jsonView,
      value: oneChild,
      onChange: this.onJsonChange
    });
  }

}

const mapStateToProps$3 = function mapStateToProps(store) {
  return {};
};

var JsonSchemaViewer$1 = connect(mapStateToProps$3)(withStyles(styles$4)(JsonSchemaViewer));

var styles$5 = (theme => ({
  builderContainer: {
    maxWidth: wp('100%'),
    maxHeight: hp('100%'),
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    flex: 1
  },
  hiddenClass: {
    display: 'none'
  },
  customFileUploadTab: {
    borderBottom: 'none'
  },
  customFileUpload: {
    width: '8%',
    border: '1px',
    display: 'flex',
    padding: '0',
    alignItems: 'center',
    backgroundColor: "#397bc9",
    cursor: 'pointer'
  },
  textLabel: {
    paddingBottom: 0
  },
  designer: {
    minHeight: '100%',
    width: '100%',
    backgroundColor: "white",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    overflowY: 'auto',
    borderRadius: '10px',
    '-webkit-box-shadow': '5px 5px 15px rgba(0,0,0,0.4)',
    '-moz-box-shadow': '5px 5px 15px rgba(0,0,0,0.4)'
  },
  jsonschema: {
    minHeight: '100%',
    width: '100%',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderRadius: '10px',
    '-webkit-box-shadow': '5px 5px 15px rgba(0,0,0,0.4)',
    '-moz-box-shadow': '5px 5px 15px rgba(0,0,0,0.4)'
  },
  '@global': {
    '::-webkit-scrollbar': {
      width: '0.5rem'
    },
    '::-webkit-scrollbar-track': {
      'box-shadow': 'inset 0 0 5px grey',
      'border-radius': '10px'
    },
    ':: -webkit-scrollbar-thumb': {
      backgroundColor: '#2196f3',
      'border-radius': ' 5px'
    },
    '::-webkit-scrollbar-thumb:hover': {
      backgroundColor: '#2196f3'
    },
    'scrollhost::-webkit-scrollbar': {
      display: 'none'
    }
  },
  root: {
    minWidth: wp('49%'),
    maxWidth: wp('49%'),
    height: hp('100%'),
    display: 'flex',
    flexDirection: 'column',
    justifyConent: 'center',
    padding: '10px',
    backgroundColor: "white"
  },
  divider: {
    width: '0.1rem',
    background: 'red',
    marginRight: '2px',
    marginLeft: '2px'
  }
}));

class JsonBuilderContainer extends Component {
  constructor() {
    super();

    this.UNSAFE_componentWillReceiveProps = nextProps => {
      if (nextProps.importJson) {
        store.dispatch(updateJsonElement(nextProps.importJson));
      }
    };

    this.state = {
      value: 'designer',
      updatedRootJson: {},
      uploadedJson: []
    };
  }

  render() {
    const {
      classes
    } = this.props;
    return /*#__PURE__*/React.createElement(Grid, {
      container: true,
      style: {
        width: '100%'
      },
      alignItems: "stretch",
      justify: "center",
      spacing: 0
    }, /*#__PURE__*/React.createElement(Grid, {
      item: true,
      xs: 12,
      className: classes.root
    }, /*#__PURE__*/React.createElement("div", {
      className: classes.designer
    }, /*#__PURE__*/React.createElement(Designer$1, {
      uploadedJson: this.props.importJson
    }))), /*#__PURE__*/React.createElement(Grid, {
      item: true,
      xs: 12,
      className: classes.root
    }, /*#__PURE__*/React.createElement("div", {
      className: classes.jsonschema
    }, /*#__PURE__*/React.createElement(JsonSchemaViewer$1, {
      updatedRootJson: this.props.updatedRootJson
    }))));
  }

}

const mapStateToProps$4 = function mapStateToProps(store) {
  return {
    updatedRootJson: store.createNewElementReducer.rootJsonSchema
  };
};

var JsonBuilderContainer$1 = connect(mapStateToProps$4)(withStyles(styles$5)(JsonBuilderContainer));

function App(props) {
  const size = '100rem';
  setWidthAndHeight(1600, 700, 'px');
  return /*#__PURE__*/React.createElement("div", {
    className: "AppCss"
  }, /*#__PURE__*/React.createElement(JsonBuilderContainer$1, Object.assign({}, props, {
    width: size,
    height: size
  })));
}

class UiJson extends Component {
  render() {
    return (
      /*#__PURE__*/
      React.createElement(Provider, {
        store: store
      }, /*#__PURE__*/React.createElement(App, this.props))
    );
  }

}
UiJson.propTypes = {
  text: propTypes.string
};

export default UiJson;
//# sourceMappingURL=index.modern.js.map
