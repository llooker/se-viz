(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["tabulatorsub"] = factory();
	else
		root["tabulatorsub"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 492);
/******/ })
/************************************************************************/
/******/ ({

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval( code, doc, node ) {
		doc = doc || document;

		var i,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				if ( node[ i ] ) {
					script[ i ] = node[ i ];
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.3.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ dimension ] );

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	if ( val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tabulator_tables__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tabulator_tables___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tabulator_tables__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);




var format_usd = {
      decimal: ".",
      thousand: ",",
      symbol: "$",
      precision: 2,
};
var format_gbp = {
      decimal: ".",
      thousand: ",",
      symbol: "£",
      precision: 2,
};
var format_dec_0 = {
      decimal: ".",
      thousand: ",",
      precision: 0,
};
var format_dec_2 = {
      decimal: ".",
      thousand: ",",
      precision: 2,
};
var format_percent_2 = function(cell, formatterParams, onRendered){
  rendered_value = (100 * cell.getValue()).toFixed(2).toString() + '%';
  return rendered_value; //return the contents of the cell;
};

var themeFinanceTable = `
  /* Based on: Tabulator v4.1.3 (c) Oliver Folkerd */
  .tabulator {
    position: relative;
    background-color: #fff;
    overflow: auto;
    font-family: Open Sans,Helvetica,Arial,sans-serif;    /* FONT FAMILY   */
    font-size: 11px;                                      /* FONT SIZE     */
    text-align: left;
    -ms-transform: translatez(0);
    transform: translatez(0);
  }
  .tabulator[tabulator-layout="fitDataFill"] .tabulator-tableHolder .tabulator-table {
    min-width: 100%;
  }
  .tabulator.tabulator-block-select {
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
  }
  .tabulator .tabulator-header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    border-bottom: 1px solid #000; /* #999 */
    background-color: #fff;
    color: #555;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
  }
  .tabulator .tabulator-header .tabulator-col {
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    border-right: 1px solid #ddd;
    background-color: #fff;
    text-align: left;
    vertical-align: bottom;
    overflow: hidden;
  }
  .tabulator .tabulator-header .tabulator-col.tabulator-moving {
    position: absolute;
    border: 1px solid #999;
    background: #e6e6e6;
    pointer-events: none;
  }
  .tabulator .tabulator-header .tabulator-col .tabulator-col-content {
    box-sizing: border-box;
    position: relative;
    padding: 4px;
  }
  .tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-col-title {
    box-sizing: border-box;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: bottom;
  }
  .tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-col-title .tabulator-title-editor {
    box-sizing: border-box;
    width: 100%;
    border: 1px solid #999;
    padding: 1px;
    background: #fff;
  }
  .tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-arrow {
    display: inline-block;
    position: absolute;
    top: 9px;
    right: 8px;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #bbb;
  }
  .tabulator .tabulator-header .tabulator-col.tabulator-col-group .tabulator-col-group-cols {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    border-top: 1px solid #ddd;
    overflow: hidden;
  }
  .tabulator .tabulator-header .tabulator-col.tabulator-col-group .tabulator-col-group-cols .tabulator-col:last-child {
    margin-right: -1px;
  }
  .tabulator .tabulator-header .tabulator-col:first-child .tabulator-col-resize-handle.prev {
    display: none;
  }
  .tabulator .tabulator-header .tabulator-col.ui-sortable-helper {
    position: absolute;
    background-color: #e6e6e6 !important;
    border: 1px solid #ddd;
  }
  .tabulator .tabulator-header .tabulator-col .tabulator-header-filter {
    position: relative;
    box-sizing: border-box;
    margin-top: 2px;
    width: 100%;
    text-align: center;
  }
  .tabulator .tabulator-header .tabulator-col .tabulator-header-filter textarea {
    height: auto !important;
  }
  .tabulator .tabulator-header .tabulator-col .tabulator-header-filter svg {
    margin-top: 3px;
  }
  .tabulator .tabulator-header .tabulator-col .tabulator-header-filter input::-ms-clear {
    width: 0;
    height: 0;
  }
  .tabulator .tabulator-header .tabulator-col.tabulator-sortable .tabulator-col-title {
    padding-right: 25px;
  }
  .tabulator .tabulator-header .tabulator-col.tabulator-sortable:hover {
    cursor: pointer;
    background-color: #e6e6e6;
  }
  .tabulator .tabulator-header .tabulator-col.tabulator-sortable[aria-sort="none"] .tabulator-col-content .tabulator-arrow {
    border-top: none;
    border-bottom: 6px solid #bbb;
  }
  .tabulator .tabulator-header .tabulator-col.tabulator-sortable[aria-sort="asc"] .tabulator-col-content .tabulator-arrow {
    border-top: none;
    border-bottom: 6px solid #666;
  }
  .tabulator .tabulator-header .tabulator-col.tabulator-sortable[aria-sort="desc"] .tabulator-col-content .tabulator-arrow {
    border-top: 6px solid #666;
    border-bottom: none;
  }
  .tabulator .tabulator-header .tabulator-col.tabulator-col-vertical .tabulator-col-content .tabulator-col-title {
    -webkit-writing-mode: vertical-rl;
        -ms-writing-mode: tb-rl;
            writing-mode: vertical-rl;
    text-orientation: mixed;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
        align-items: center;
    -ms-flex-pack: center;
        justify-content: center;
  }
  .tabulator .tabulator-header .tabulator-col.tabulator-col-vertical.tabulator-col-vertical-flip .tabulator-col-title {
    -ms-transform: rotate(180deg);
        transform: rotate(180deg);
  }
  .tabulator .tabulator-header .tabulator-col.tabulator-col-vertical.tabulator-sortable .tabulator-col-title {
    padding-right: 0;
    padding-top: 20px;
  }
  .tabulator .tabulator-header .tabulator-col.tabulator-col-vertical.tabulator-sortable.tabulator-col-vertical-flip .tabulator-col-title {
    padding-right: 0;
    padding-bottom: 20px;
  }
  .tabulator .tabulator-header .tabulator-col.tabulator-col-vertical.tabulator-sortable .tabulator-arrow {
    right: calc(50% - 6px);
  }
  .tabulator .tabulator-header .tabulator-frozen {
    display: inline-block;
    position: absolute;
    z-index: 10;
  }
  .tabulator .tabulator-header .tabulator-frozen.tabulator-frozen-left {
    border-right: 2px solid #ddd;
  }
  .tabulator .tabulator-header .tabulator-frozen.tabulator-frozen-right {
    border-left: 2px solid #ddd;
  }
  .tabulator .tabulator-header .tabulator-calcs-holder {
    box-sizing: border-box;
    min-width: 400%;
    background: #f2f2f2 !important;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #999;
    overflow: hidden;
  }
  .tabulator .tabulator-header .tabulator-calcs-holder .tabulator-row {
    background: #f2f2f2 !important;
  }
  .tabulator .tabulator-header .tabulator-calcs-holder .tabulator-row .tabulator-col-resize-handle {
    display: none;
  }
  .tabulator .tabulator-header .tabulator-frozen-rows-holder {
    min-width: 400%;
  }
  .tabulator .tabulator-header .tabulator-frozen-rows-holder:empty {
    display: none;
  }
  .tabulator .tabulator-tableHolder {
    position: relative;
    width: 100%;
    white-space: nowrap;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  .tabulator .tabulator-tableHolder:focus {
    outline: none;
  }
  .tabulator .tabulator-tableHolder .tabulator-placeholder {
    box-sizing: border-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
        align-items: center;
    width: 100%;
  }
  .tabulator .tabulator-tableHolder .tabulator-placeholder[tabulator-render-mode="virtual"] {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }
  .tabulator .tabulator-tableHolder .tabulator-placeholder span {
    display: inline-block;
    margin: 0 auto;
    padding: 10px;
    color: #000;
    font-weight: bold;
    font-size: 20px;
  }
  .tabulator .tabulator-tableHolder .tabulator-table {
    position: relative;
    display: inline-block;
    background-color: #fff;
    white-space: nowrap;
    overflow: visible;
    color: #333;
  }
  .tabulator .tabulator-tableHolder .tabulator-table .tabulator-row.tabulator-calcs {
    font-weight: bold;
    background: #ffffff !important; /* #f2f2f2 */
  }
  .tabulator .tabulator-tableHolder .tabulator-table .tabulator-row.tabulator-calcs.tabulator-calcs-top {
    border-bottom: 2px solid #ddd;
  }
  .tabulator .tabulator-tableHolder .tabulator-table .tabulator-row.tabulator-calcs.tabulator-calcs-bottom {
    border-top: 2px solid #000;
  }
  .tabulator .tabulator-col-resize-handle {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 5px;
  }
  .tabulator .tabulator-col-resize-handle.prev {
    left: 0;
    right: auto;
  }
  .tabulator .tabulator-col-resize-handle:hover {
    cursor: ew-resize;
  }
  .tabulator .tabulator-footer {
    padding: 5px 10px;
    border-top: 1px solid #999;
    background-color: #fff;
    text-align: right;
    color: #555;
    font-weight: bold;
    white-space: nowrap;
    -ms-user-select: none;
        user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
  }
  .tabulator .tabulator-footer .tabulator-calcs-holder {
    box-sizing: border-box;
    width: calc(100% + 20px);
    margin: -5px -10px 5px -10px;
    text-align: left;
    background: #f2f2f2 !important;
    border-bottom: 1px solid #fff;
    border-top: 1px solid #ddd;
    overflow: hidden;
  }
  .tabulator .tabulator-footer .tabulator-calcs-holder .tabulator-row {
    background: #f2f2f2 !important;
  }
  .tabulator .tabulator-footer .tabulator-calcs-holder .tabulator-row .tabulator-col-resize-handle {
    display: none;
  }
  .tabulator .tabulator-footer .tabulator-calcs-holder:only-child {
    margin-bottom: -5px;
    border-bottom: none;
  }
  .tabulator .tabulator-footer .tabulator-pages {
    margin: 0 7px;
  }
  .tabulator .tabulator-footer .tabulator-page {
    display: inline-block;
    margin: 0 2px;
    border: 1px solid #aaa;
    border-radius: 3px;
    padding: 2px 5px;
    background: rgba(255, 255, 255, 0.2);
    color: #555;
    font-family: inherit;
    font-weight: inherit;
    font-size: inherit;
  }
  .tabulator .tabulator-footer .tabulator-page.active {
    color: #d00;
  }
  .tabulator .tabulator-footer .tabulator-page:disabled {
    opacity: .5;
  }
  .tabulator .tabulator-footer .tabulator-page:not(.disabled):hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.2);
    color: #fff;
  }
  .tabulator .tabulator-loader {
    position: absolute;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
        align-items: center;
    top: 0;
    left: 0;
    z-index: 100;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.4);
    text-align: center;
  }
  .tabulator .tabulator-loader .tabulator-loader-msg {
    display: inline-block;
    margin: 0 auto;
    padding: 10px 20px;
    border-radius: 10px;
    background: #fff;
    font-weight: bold;
    font-size: 16px;
  }
  .tabulator .tabulator-loader .tabulator-loader-msg.tabulator-loading {
    border: 4px solid #333;
    color: #000;
  }
  .tabulator .tabulator-loader .tabulator-loader-msg.tabulator-error {
    border: 4px solid #D00;
    color: #590000;
  }
  .tabulator-row {
    position: relative;
    box-sizing: border-box;
    min-height: 22px;
    background-color: #fff;
    /* border-bottom: 1px solid #ddd; */
  }
  .tabulator-row:nth-child(even) {
    background-color: #fff;
  }
  .tabulator-row.tabulator-selectable:hover {
    background-color: #bbb;
    cursor: pointer;
  }
  .tabulator-row.tabulator-selected {
    background-color: #9ABCEA;
  }
  .tabulator-row.tabulator-selected:hover {
    background-color: #769BCC;
    cursor: pointer;
  }
  .tabulator-row.tabulator-moving {
    position: absolute;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    pointer-events: none !important;
    z-index: 15;
  }
  .tabulator-row .tabulator-row-resize-handle {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 5px;
  }
  .tabulator-row .tabulator-row-resize-handle.prev {
    top: 0;
    bottom: auto;
  }
  .tabulator-row .tabulator-row-resize-handle:hover {
    cursor: ns-resize;
  }
  .tabulator-row .tabulator-frozen {
    display: inline-block;
    position: absolute;
    background-color: inherit;
    z-index: 10;
  }
  .tabulator-row .tabulator-frozen.tabulator-frozen-left {
    border-right: 2px solid #ddd;
  }
  .tabulator-row .tabulator-frozen.tabulator-frozen-right {
    border-left: 2px solid #ddd;
  }
  .tabulator-row .tabulator-responsive-collapse {
    box-sizing: border-box;
    padding: 5px;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }
  .tabulator-row .tabulator-responsive-collapse:empty {
    display: none;
  }
  .tabulator-row .tabulator-responsive-collapse table {
    font-size: 14px;
  }
  .tabulator-row .tabulator-responsive-collapse table tr td {
    position: relative;
  }
  .tabulator-row .tabulator-responsive-collapse table tr td:first-of-type {
    padding-right: 10px;
  }
  .tabulator-row .tabulator-cell {
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    padding: 4px;
    border-right: 1px solid #ddd;
    vertical-align: middle;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .tabulator-row .tabulator-cell:last-of-type {
    border-right: none;
  }
  .tabulator-row .tabulator-cell.tabulator-editing {
    border: 1px solid #1D68CD;
    padding: 0;
  }
  .tabulator-row .tabulator-cell.tabulator-editing input, .tabulator-row .tabulator-cell.tabulator-editing select {
    border: 1px;
    background: transparent;
  }
  .tabulator-row .tabulator-cell.tabulator-validation-fail {
    border: 1px solid #dd0000;
  }
  .tabulator-row .tabulator-cell.tabulator-validation-fail input, .tabulator-row .tabulator-cell.tabulator-validation-fail select {
    border: 1px;
    background: transparent;
    color: #dd0000;
  }
  .tabulator-row .tabulator-cell:first-child .tabulator-col-resize-handle.prev {
    display: none;
  }
  .tabulator-row .tabulator-cell.tabulator-row-handle {
    display: -ms-inline-flexbox;
    display: inline-flex;
    -ms-flex-align: center;
        align-items: center;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
  }
  .tabulator-row .tabulator-cell.tabulator-row-handle .tabulator-row-handle-box {
    width: 80%;
  }
  .tabulator-row .tabulator-cell.tabulator-row-handle .tabulator-row-handle-box .tabulator-row-handle-bar {
    width: 100%;
    height: 3px;
    margin-top: 2px;
    background: #666;
  }
  .tabulator-row .tabulator-cell .tabulator-data-tree-branch {
    display: inline-block;
    vertical-align: middle;
    height: 9px;
    width: 7px;
    margin-top: -9px;
    margin-right: 5px;
    border-bottom-left-radius: 1px;
    border-left: 2px solid #ddd;
    border-bottom: 2px solid #ddd;
  }
  .tabulator-row .tabulator-cell .tabulator-data-tree-control {
    display: -ms-inline-flexbox;
    display: inline-flex;
    -ms-flex-pack: center;
        justify-content: center;
    -ms-flex-align: center;
        align-items: center;
    vertical-align: middle;
    height: 11px;
    width: 11px;
    margin-right: 5px;
    border: 1px solid #333;
    border-radius: 2px;
    background: rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  .tabulator-row .tabulator-cell .tabulator-data-tree-control:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.2);
  }
  .tabulator-row .tabulator-cell .tabulator-data-tree-control .tabulator-data-tree-control-collapse {
    display: inline-block;
    position: relative;
    height: 7px;
    width: 1px;
    background: transparent;
  }
  .tabulator-row .tabulator-cell .tabulator-data-tree-control .tabulator-data-tree-control-collapse:after {
    position: absolute;
    content: "";
    left: -3px;
    top: 3px;
    height: 1px;
    width: 7px;
    background: #333;
  }
  .tabulator-row .tabulator-cell .tabulator-data-tree-control .tabulator-data-tree-control-expand {
    display: inline-block;
    position: relative;
    height: 7px;
    width: 1px;
    background: #333;
  }
  .tabulator-row .tabulator-cell .tabulator-data-tree-control .tabulator-data-tree-control-expand:after {
    position: absolute;
    content: "";
    left: -3px;
    top: 3px;
    height: 1px;
    width: 7px;
    background: #333;
  }
  .tabulator-row .tabulator-cell .tabulator-responsive-collapse-toggle {
    display: -ms-inline-flexbox;
    display: inline-flex;
    -ms-flex-align: center;
        align-items: center;
    -ms-flex-pack: center;
        justify-content: center;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
    height: 15px;
    width: 15px;
    border-radius: 20px;
    background: #666;
    color: #fff;
    font-weight: bold;
    font-size: 1.1em;
  }
  .tabulator-row .tabulator-cell .tabulator-responsive-collapse-toggle:hover {
    opacity: .7;
  }
  .tabulator-row .tabulator-cell .tabulator-responsive-collapse-toggle.open .tabulator-responsive-collapse-toggle-close {
    display: initial;
  }
  .tabulator-row .tabulator-cell .tabulator-responsive-collapse-toggle.open .tabulator-responsive-collapse-toggle-open {
    display: none;
  }
  .tabulator-row .tabulator-cell .tabulator-responsive-collapse-toggle .tabulator-responsive-collapse-toggle-close {
    display: none;
  }
  .tabulator-row.tabulator-group {
    box-sizing: border-box;
    border-bottom: 1px solid #999;
    border-right: 1px solid #ddd;
    border-top: 1px solid #999;
    padding: 5px;
    padding-left: 10px;
    background: #ffffff;     /* #fafafa */
    font-weight: bold;
    min-width: 100%;
  }
  .tabulator-row.tabulator-group:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }
  .tabulator-row.tabulator-group.tabulator-group-visible .tabulator-arrow {
    margin-right: 10px;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid #666;
    border-bottom: 0;
  }
  .tabulator-row.tabulator-group.tabulator-group-level-1 .tabulator-arrow {
    margin-left: 20px;
  }
  .tabulator-row.tabulator-group.tabulator-group-level-2 .tabulator-arrow {
    margin-left: 40px;
  }
  .tabulator-row.tabulator-group.tabulator-group-level-3 .tabulator-arrow {
    margin-left: 60px;
  }
  .tabulator-row.tabulator-group.tabulator-group-level-4 .tabulator-arrow {
    margin-left: 80px;
  }
  .tabulator-row.tabulator-group.tabulator-group-level-5 .tabulator-arrow {
    margin-left: 100px;
  }
  .tabulator-row.tabulator-group .tabulator-arrow {
    display: inline-block;
    width: 0;
    height: 0;
    margin-right: 16px;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-right: 0;
    border-left: 6px solid #666;
    vertical-align: middle;
  }
  .tabulator-row.tabulator-group span {
    margin-left: 10px;
    color: #666;
  }
  .tabulator-edit-select-list {
    position: absolute;
    display: inline-block;
    box-sizing: border-box;
    max-height: 200px;
    background: #fff;
    border: 1px solid #ddd;
    font-size: 14px;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    z-index: 10000;
  }
  .tabulator-edit-select-list .tabulator-edit-select-list-item {
    padding: 4px;
    color: #333;
  }
  .tabulator-edit-select-list .tabulator-edit-select-list-item.active {
    color: #fff;
    background: #1D68CD;
  }
  .tabulator-edit-select-list .tabulator-edit-select-list-item:hover {
    cursor: pointer;
    color: #fff;
    background: #1D68CD;
  }
  .tabulator-edit-select-list .tabulator-edit-select-list-group {
    border-bottom: 1px solid #ddd;
    padding: 4px;
    padding-top: 6px;
    color: #333;
    font-weight: bold;
  }
`

// Global options
var global_options = {
  use_grouping: {
    section: "Data",
    type: "boolean",
    label: "Use Grouping",
    default: "true"
  },
}

looker.plugins.visualizations.add({

  options: global_options,

  create: function(element, config) {
    this.style = document.createElement('style')
    document.head.appendChild(this.style)

    var container = element.appendChild(document.createElement("div"));
    container.id = "finance-tabulator";
  },

  updateAsync: function(data, element, config, queryResponse, details, done) {
    var vis = this;

    var new_options = global_options
    var group_by_options = []
    queryResponse.fields.dimension_like.forEach(function(field) {
      var safe_name = field.name.replace(".", "|");
      var id = "Width: " + safe_name;
      new_options[id] = {
        default: null,
        type: "number",
      };
      var group_option = {};
      group_option[field.label_short] = safe_name
      group_by_options.push(group_option);
    });

    new_options["group_by"] = {
      section: "Data",
      type: "string",
      label: "Group By",
      values: group_by_options,
      display: "select",
      default: null,
    };

    queryResponse.fields.measure_like.forEach(function(field) {
      var safe_name = field.name.replace(".", "|");
      var id = "Width: " + safe_name;
      new_options[id] = {
        default: null,
        type: "number",
      };

    });

    this.trigger('registerOptions', new_options); // register options with parent page to update visConfig

    // Clear any errors from previous updates.
    this.clearErrors();

    // Throw some errors and exit if the shape of the data isn't what this chart needs.
    if (queryResponse.fields.dimensions.length == 0) {
      this.addError({title: "No Dimensions", message: "This chart requires dimensions."});
      return;
    }

    // print data to console for debugging:
    console.log("data", data);
    // console.log("element", element);
    console.log("config", config);
    // console.log("details", details);
    console.log("queryResponse", queryResponse);

    // Set style (this could be made flexible as per https://github.com/looker/custom_visualizations_v2/blob/master/src/examples/subtotal/subtotal.ts)
    this.style.innerHTML = themeFinanceTable

    // destory old viz if already exists
    if (__WEBPACK_IMPORTED_MODULE_1_jquery___default()("#finance-tabulator").hasClass("tabulator")) {
      __WEBPACK_IMPORTED_MODULE_1_jquery___default()("#finance-tabulator").tabulator("destroy")
    }

    // Initialise data and meta-data structures
    var tbl_data = []

    // HANDLE DIMENSIONS
    var dim_names = []    // list of raw dim names
    var dim_details = []  // full objects for dims

    for (var i = 0; i < queryResponse.fields.dimension_like.length; i++) {
        var dim_name = queryResponse.fields.dimension_like[i].name
        dim_names.push(dim_name)

        var safe_name = dim_name.replace(".", "|")
        var dim_object = queryResponse.fields.dimension_like[i]

        var dim_definition = {
          title: dim_object.label_short,
          field: safe_name,
          align: dim_object.align,
          // frozen: true,
        }

        if (config["Width: " + safe_name] != null) {
          dim_definition["width"] = config["Width: " + safe_name]
        }
        dim_details.push(dim_definition)
    }

    // BUILD TABLE DATA ARRAY
    for (var j = 0; j < data.length; j++) {
      var row = {id: j};

      for (var i = 0; i < dim_names.length; i++) {
          var raw_name = dim_names[i]
          var safe_name = raw_name.replace(".", "|")

          row[safe_name] = data[j][raw_name].value
      }

      tbl_data.push(row)
    }

    // HANDLE MEASURES
    var mea_names = []
    var mea_details = []

    for (var i = 0; i < queryResponse.fields.measure_like.length; i++) {
      var mea_name = queryResponse.fields.measure_like[i].name
      mea_names.push(mea_name)

      var safe_name = mea_name.replace(".", "|")
      var mea_object = queryResponse.fields.measure_like[i]

      var mea_definition = {
        title: mea_object.label_short,
        field: safe_name,
        align: mea_object.align,
      }

      if (["sum", "count", "count_distinct"].includes(mea_object.type)) {
        mea_definition["bottomCalc"] = "sum";
      }
      else if (["average", "average_distinct"].includes(mea_object.type)) {
        mea_definition["bottomCalc"] = "avg";
      }

      if (mea_object.value_format != null) {
        console.log("mea_object.value_format", mea_object.value_format)

        if (mea_object.value_format.indexOf("$") !== -1) {
          mea_definition["formatter"] = "money"
          mea_definition["bottomCalcFormatter"] = "money"
          mea_definition["formatterParams"] = format_usd
          mea_definition["bottomCalcFormatterParams"] = format_usd
        }
        else if (mea_object.value_format.indexOf("£") !== -1) {
          mea_definition["formatter"] = "money"
          mea_definition["bottomCalcFormatter"] = "money"
          mea_definition["formatterParams"] = format_gbp
          mea_definition["bottomCalcFormatterParams"] = format_gbp
        }
        else if (mea_object.value_format.indexOf("%") !== -1) {
          mea_definition["formatter"] = format_percent_2;
        }
        else if (mea_object.value_format.indexOf(".") !== -1) {
          mea_definition["formatter"] = "money"
          mea_definition["bottomCalcFormatter"] = "money"
          mea_definition["formatterParams"] = format_dec_2
          mea_definition["bottomCalcFormatterParams"] = format_dec_2
        }
        else {
          mea_definition["formatter"] = "money"
          mea_definition["bottomCalcFormatter"] = "money"
          mea_definition["formatterParams"] = format_dec_0
          mea_definition["bottomCalcFormatterParams"] = format_dec_0
        }
      }

      if (config["Width: " + safe_name] != null) {
        mea_definition["width"] = config["Width: " + safe_name]
      }

      mea_details.push(mea_definition)
    }

    for (var j = 0; j < data.length; j++) {
      for (var i = 0; i < mea_names.length; i++) {
          var raw_name = mea_names[i]
          var safe_name = mea_names[i].replace(".", "|")

          tbl_data[j][safe_name] = data[j][raw_name].value;
      }
    }

    var table_col_details = dim_details.concat(mea_details)

    // DEBUG CHECK
    console.log("table_col_details", table_col_details)
    console.log("tbl_data", tbl_data)
    var group_by
    if (config.use_grouping == true) {
        group_by = config.group_by
    } else {
        group_by = null
    };

    var initial_sort = table_col_details[0].field;

    var tbl = __WEBPACK_IMPORTED_MODULE_1_jquery___default()("#finance-tabulator").tabulator({
      data: tbl_data,           //load row data from array
      layout:"fitDataFill",      // fit columns to data, but also fill full table width
      // responsiveLayout: "hide",  //hide columns that dont fit on the table

      tooltips: true,            //show tool tips on cells

      pagination: false, //"local",       //paginate the data
      paginationSize: 10,         //allow 7 rows per page of data

      movableColumns: false,      //allow column order to be changed
      resizableColumns: true,
      resizableRows: false,       //allow row size to be changed

      groupBy: group_by,
      groupHeader: function(value, count, data, group) {
          //value - the value all members of this group share
          //count - the number of rows in this group
          //data - an array of all the row data objects in this group
          //group - the group component for the group

          return value + "<span style='color:#d00; margin-left:10px;'>(" + count + " item)</span>";
      },

      initialSort: [ {column: initial_sort, dir:"asc"} ],
      columns: table_col_details,

      columnResized: function(column) {
        col_resize = {};
        col_resize["Width: " + column.column.definition.field] = column.column.width;
        vis.trigger('updateConfig', [col_resize]);
      },

      tooltips: function(cell) {
          //function should return a string for the tooltip or false to hide the tooltip
          return  cell.getColumn().getDefinition().title + ": " + cell.getValue();
      },
    });

    // Always call done to indicate a visualization has finished rendering.
    done()
  }
})


/***/ }),

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* Tabulator v4.1.0 (c) Oliver Folkerd */

;(function (global, factory) {
	if (( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined') {
		module.exports = factory();
	} else if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		global.Tabulator = factory();
	}
})(this, function () {

	'use strict';

	// https://tc39.github.io/ecma262/#sec-array.prototype.findIndex


	if (!Array.prototype.findIndex) {

		Object.defineProperty(Array.prototype, 'findIndex', {

			value: function value(predicate) {

				// 1. Let O be ? ToObject(this value).


				if (this == null) {

					throw new TypeError('"this" is null or not defined');
				}

				var o = Object(this);

				// 2. Let len be ? ToLength(? Get(O, "length")).


				var len = o.length >>> 0;

				// 3. If IsCallable(predicate) is false, throw a TypeError exception.


				if (typeof predicate !== 'function') {

					throw new TypeError('predicate must be a function');
				}

				// 4. If thisArg was supplied, let T be thisArg; else let T be undefined.


				var thisArg = arguments[1];

				// 5. Let k be 0.


				var k = 0;

				// 6. Repeat, while k < len


				while (k < len) {

					// a. Let Pk be ! ToString(k).


					// b. Let kValue be ? Get(O, Pk).


					// c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).


					// d. If testResult is true, return k.


					var kValue = o[k];

					if (predicate.call(thisArg, kValue, k, o)) {

						return k;
					}

					// e. Increase k by 1.


					k++;
				}

				// 7. Return -1.


				return -1;
			}

		});
	}

	// https://tc39.github.io/ecma262/#sec-array.prototype.find


	if (!Array.prototype.find) {

		Object.defineProperty(Array.prototype, 'find', {

			value: function value(predicate) {

				// 1. Let O be ? ToObject(this value).


				if (this == null) {

					throw new TypeError('"this" is null or not defined');
				}

				var o = Object(this);

				// 2. Let len be ? ToLength(? Get(O, "length")).


				var len = o.length >>> 0;

				// 3. If IsCallable(predicate) is false, throw a TypeError exception.


				if (typeof predicate !== 'function') {

					throw new TypeError('predicate must be a function');
				}

				// 4. If thisArg was supplied, let T be thisArg; else let T be undefined.


				var thisArg = arguments[1];

				// 5. Let k be 0.


				var k = 0;

				// 6. Repeat, while k < len


				while (k < len) {

					// a. Let Pk be ! ToString(k).


					// b. Let kValue be ? Get(O, Pk).


					// c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).


					// d. If testResult is true, return kValue.


					var kValue = o[k];

					if (predicate.call(thisArg, kValue, k, o)) {

						return kValue;
					}

					// e. Increase k by 1.


					k++;
				}

				// 7. Return undefined.


				return undefined;
			}

		});
	}

	var ColumnManager = function ColumnManager(table) {

		this.table = table; //hold parent table


		this.headersElement = this.createHeadersElement();

		this.element = this.createHeaderElement(); //containing element


		this.rowManager = null; //hold row manager object


		this.columns = []; // column definition object


		this.columnsByIndex = []; //columns by index


		this.columnsByField = []; //columns by field


		this.scrollLeft = 0;

		this.element.insertBefore(this.headersElement, this.element.firstChild);
	};

	////////////// Setup Functions /////////////////


	ColumnManager.prototype.createHeadersElement = function () {

		var el = document.createElement("div");

		el.classList.add("tabulator-headers");

		return el;
	};

	ColumnManager.prototype.createHeaderElement = function () {

		var el = document.createElement("div");

		el.classList.add("tabulator-header");

		return el;
	};

	//link to row manager


	ColumnManager.prototype.setRowManager = function (manager) {

		this.rowManager = manager;
	};

	//return containing element


	ColumnManager.prototype.getElement = function () {

		return this.element;
	};

	//return header containing element


	ColumnManager.prototype.getHeadersElement = function () {

		return this.headersElement;
	};

	//scroll horizontally to match table body


	ColumnManager.prototype.scrollHorizontal = function (left) {

		var hozAdjust = 0,
		    scrollWidth = this.element.scrollWidth - this.table.element.clientWidth;

		this.element.scrollLeft = left;

		//adjust for vertical scrollbar moving table when present


		if (left > scrollWidth) {

			hozAdjust = left - scrollWidth;

			this.element.style.marginLeft = -hozAdjust + "px";
		} else {

			this.element.style.marginLeft = 0;
		}

		//keep frozen columns fixed in position


		//this._calcFrozenColumnsPos(hozAdjust + 3);


		this.scrollLeft = left;

		if (this.table.modExists("frozenColumns")) {

			this.table.modules.frozenColumns.layout();
		}
	};

	///////////// Column Setup Functions /////////////


	ColumnManager.prototype.setColumns = function (cols, row) {

		var self = this;

		while (self.headersElement.firstChild) {
			self.headersElement.removeChild(self.headersElement.firstChild);
		}self.columns = [];

		self.columnsByIndex = [];

		self.columnsByField = [];

		//reset frozen columns


		if (self.table.modExists("frozenColumns")) {

			self.table.modules.frozenColumns.reset();
		}

		cols.forEach(function (def, i) {

			self._addColumn(def);
		});

		self._reIndexColumns();

		if (self.table.options.responsiveLayout && self.table.modExists("responsiveLayout", true)) {

			self.table.modules.responsiveLayout.initialize();
		}

		self.redraw(true);
	};

	ColumnManager.prototype._addColumn = function (definition, before, nextToColumn) {

		var column = new Column(definition, this),
		    colEl = column.getElement(),
		    index = nextToColumn ? this.findColumnIndex(nextToColumn) : nextToColumn;

		if (nextToColumn && index > -1) {

			var parentIndex = this.columns.indexOf(nextToColumn.getTopColumn());

			var nextEl = nextToColumn.getElement();

			if (before) {

				this.columns.splice(parentIndex, 0, column);

				nextEl.parentNode.insertBefore(colEl, nextEl);
			} else {

				this.columns.splice(parentIndex + 1, 0, column);

				nextEl.parentNode.insertBefore(colEl, nextEl.nextSibling);
			}
		} else {

			if (before) {

				this.columns.unshift(column);

				this.headersElement.insertBefore(column.getElement(), this.headersElement.firstChild);
			} else {

				this.columns.push(column);

				this.headersElement.appendChild(column.getElement());
			}
		}

		return column;
	};

	ColumnManager.prototype.registerColumnField = function (col) {

		if (col.definition.field) {

			this.columnsByField[col.definition.field] = col;
		}
	};

	ColumnManager.prototype.registerColumnPosition = function (col) {

		this.columnsByIndex.push(col);
	};

	ColumnManager.prototype._reIndexColumns = function () {

		this.columnsByIndex = [];

		this.columns.forEach(function (column) {

			column.reRegisterPosition();
		});
	};

	//ensure column headers take up the correct amount of space in column groups


	ColumnManager.prototype._verticalAlignHeaders = function () {

		var self = this,
		    minHeight = 0;

		self.columns.forEach(function (column) {

			var height;

			column.clearVerticalAlign();

			height = column.getHeight();

			if (height > minHeight) {

				minHeight = height;
			}
		});

		self.columns.forEach(function (column) {

			column.verticalAlign(self.table.options.columnVertAlign, minHeight);
		});

		self.rowManager.adjustTableSize();
	};

	//////////////// Column Details /////////////////


	ColumnManager.prototype.findColumn = function (subject) {

		var self = this;

		if ((typeof subject === 'undefined' ? 'undefined' : _typeof(subject)) == "object") {

			if (subject instanceof Column) {

				//subject is column element


				return subject;
			} else if (subject instanceof ColumnComponent) {

				//subject is public column component


				return subject._getSelf() || false;
			} else if (subject instanceof HTMLElement) {

				//subject is a HTML element of the column header


				var match = self.columns.find(function (column) {

					return column.element === subject;
				});

				return match || false;
			}
		} else {

			//subject should be treated as the field name of the column


			return this.columnsByField[subject] || false;
		}

		//catch all for any other type of input


		return false;
	};

	ColumnManager.prototype.getColumnByField = function (field) {

		return this.columnsByField[field];
	};

	ColumnManager.prototype.getColumnByIndex = function (index) {

		return this.columnsByIndex[index];
	};

	ColumnManager.prototype.getColumns = function () {

		return this.columns;
	};

	ColumnManager.prototype.findColumnIndex = function (column) {

		return this.columnsByIndex.findIndex(function (col) {

			return column === col;
		});
	};

	//return all columns that are not groups


	ColumnManager.prototype.getRealColumns = function () {

		return this.columnsByIndex;
	};

	//travers across columns and call action


	ColumnManager.prototype.traverse = function (callback) {

		var self = this;

		self.columnsByIndex.forEach(function (column, i) {

			callback(column, i);
		});
	};

	//get defintions of actual columns


	ColumnManager.prototype.getDefinitions = function (active) {

		var self = this,
		    output = [];

		self.columnsByIndex.forEach(function (column) {

			if (!active || active && column.visible) {

				output.push(column.getDefinition());
			}
		});

		return output;
	};

	//get full nested definition tree


	ColumnManager.prototype.getDefinitionTree = function () {

		var self = this,
		    output = [];

		self.columns.forEach(function (column) {

			output.push(column.getDefinition(true));
		});

		return output;
	};

	ColumnManager.prototype.getComponents = function (structured) {

		var self = this,
		    output = [],
		    columns = structured ? self.columns : self.columnsByIndex;

		columns.forEach(function (column) {

			output.push(column.getComponent());
		});

		return output;
	};

	ColumnManager.prototype.getWidth = function () {

		var width = 0;

		this.columnsByIndex.forEach(function (column) {

			if (column.visible) {

				width += column.getWidth();
			}
		});

		return width;
	};

	ColumnManager.prototype.moveColumn = function (from, to, after) {

		this._moveColumnInArray(this.columns, from, to, after);

		this._moveColumnInArray(this.columnsByIndex, from, to, after, true);

		if (this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", true)) {

			this.table.modules.responsiveLayout.initialize();
		}

		if (this.table.options.columnMoved) {

			this.table.options.columnMoved.call(this.table, from.getComponent(), this.table.columnManager.getComponents());
		}

		if (this.table.options.persistentLayout && this.table.modExists("persistence", true)) {

			this.table.modules.persistence.save("columns");
		}
	};

	ColumnManager.prototype._moveColumnInArray = function (columns, from, to, after, updateRows) {

		var fromIndex = columns.indexOf(from),
		    toIndex;

		if (fromIndex > -1) {

			columns.splice(fromIndex, 1);

			toIndex = columns.indexOf(to);

			if (toIndex > -1) {

				if (after) {

					toIndex = toIndex + 1;
				}
			} else {

				toIndex = fromIndex;
			}

			columns.splice(toIndex, 0, from);

			if (updateRows) {

				this.table.rowManager.rows.forEach(function (row) {

					if (row.cells.length) {

						var cell = row.cells.splice(fromIndex, 1)[0];

						row.cells.splice(toIndex, 0, cell);
					}
				});
			}
		}
	};

	ColumnManager.prototype.scrollToColumn = function (column, position, ifVisible) {
		var _this = this;

		var left = 0,
		    offset = 0,
		    adjust = 0,
		    colEl = column.getElement();

		return new Promise(function (resolve, reject) {

			if (typeof position === "undefined") {

				position = _this.table.options.scrollToColumnPosition;
			}

			if (typeof ifVisible === "undefined") {

				ifVisible = _this.table.options.scrollToColumnIfVisible;
			}

			if (column.visible) {

				//align to correct position


				switch (position) {

					case "middle":

					case "center":

						adjust = -_this.element.clientWidth / 2;

						break;

					case "right":

						adjust = colEl.clientWidth - _this.headersElement.clientWidth;

						break;

				}

				//check column visibility


				if (!ifVisible) {

					offset = colEl.offsetLeft;

					if (offset > 0 && offset + colEl.offsetWidth < _this.element.clientWidth) {

						return false;
					}
				}

				//calculate scroll position


				left = colEl.offsetLeft + _this.element.scrollLeft + adjust;

				left = Math.max(Math.min(left, _this.table.rowManager.element.scrollWidth - _this.table.rowManager.element.clientWidth), 0);

				_this.table.rowManager.scrollHorizontal(left);

				_this.scrollHorizontal(left);

				resolve();
			} else {

				console.warn("Scroll Error - Column not visible");

				reject("Scroll Error - Column not visible");
			}
		});
	};

	//////////////// Cell Management /////////////////


	ColumnManager.prototype.generateCells = function (row) {

		var self = this;

		var cells = [];

		self.columnsByIndex.forEach(function (column) {

			cells.push(column.generateCell(row));
		});

		return cells;
	};

	//////////////// Column Management /////////////////


	ColumnManager.prototype.getFlexBaseWidth = function () {

		var self = this,
		    totalWidth = self.table.element.clientWidth,
		    //table element width


		fixedWidth = 0;

		//adjust for vertical scrollbar if present


		if (self.rowManager.element.scrollHeight > self.rowManager.element.clientHeight) {

			totalWidth -= self.rowManager.element.offsetWidth - self.rowManager.element.clientWidth;
		}

		this.columnsByIndex.forEach(function (column) {

			var width, minWidth, colWidth;

			if (column.visible) {

				width = column.definition.width || 0;

				minWidth = typeof column.minWidth == "undefined" ? self.table.options.columnMinWidth : parseInt(column.minWidth);

				if (typeof width == "string") {

					if (width.indexOf("%") > -1) {

						colWidth = totalWidth / 100 * parseInt(width);
					} else {

						colWidth = parseInt(width);
					}
				} else {

					colWidth = width;
				}

				fixedWidth += colWidth > minWidth ? colWidth : minWidth;
			}
		});

		return fixedWidth;
	};

	ColumnManager.prototype.addColumn = function (definition, before, nextToColumn) {

		var column = this._addColumn(definition, before, nextToColumn);

		this._reIndexColumns();

		if (this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", true)) {

			this.table.modules.responsiveLayout.initialize();
		}

		if (this.table.modExists("columnCalcs")) {

			this.table.modules.columnCalcs.recalc(this.table.rowManager.activeRows);
		}

		this.redraw();

		if (this.table.modules.layout.getMode() != "fitColumns") {

			column.reinitializeWidth();
		}

		this._verticalAlignHeaders();

		this.table.rowManager.reinitialize();
	};

	//remove column from system


	ColumnManager.prototype.deregisterColumn = function (column) {

		var field = column.getField(),
		    index;

		//remove from field list


		if (field) {

			delete this.columnsByField[field];
		}

		//remove from index list


		index = this.columnsByIndex.indexOf(column);

		if (index > -1) {

			this.columnsByIndex.splice(index, 1);
		}

		//remove from column list


		index = this.columns.indexOf(column);

		if (index > -1) {

			this.columns.splice(index, 1);
		}

		if (this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", true)) {

			this.table.modules.responsiveLayout.initialize();
		}

		this.redraw();
	};

	//redraw columns


	ColumnManager.prototype.redraw = function (force) {

		if (force) {

			if (Tabulator.prototype.helpers.elVisible(this.element)) {

				this._verticalAlignHeaders();
			}

			this.table.rowManager.resetScroll();

			this.table.rowManager.reinitialize();
		}

		if (this.table.modules.layout.getMode() == "fitColumns") {

			this.table.modules.layout.layout();
		} else {

			if (force) {

				this.table.modules.layout.layout();
			} else {

				if (this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", true)) {

					this.table.modules.responsiveLayout.update();
				}
			}
		}

		if (this.table.modExists("frozenColumns")) {

			this.table.modules.frozenColumns.layout();
		}

		if (this.table.modExists("columnCalcs")) {

			this.table.modules.columnCalcs.recalc(this.table.rowManager.activeRows);
		}

		if (force) {

			if (this.table.options.persistentLayout && this.table.modExists("persistence", true)) {

				this.table.modules.persistence.save("columns");
			}

			if (this.table.modExists("columnCalcs")) {

				this.table.modules.columnCalcs.redraw();
			}
		}

		this.table.footerManager.redraw();
	};

	//public column object

	var ColumnComponent = function ColumnComponent(column) {

		this._column = column;

		this.type = "ColumnComponent";
	};

	ColumnComponent.prototype.getElement = function () {

		return this._column.getElement();
	};

	ColumnComponent.prototype.getDefinition = function () {

		return this._column.getDefinition();
	};

	ColumnComponent.prototype.getField = function () {

		return this._column.getField();
	};

	ColumnComponent.prototype.getCells = function () {

		var cells = [];

		this._column.cells.forEach(function (cell) {

			cells.push(cell.getComponent());
		});

		return cells;
	};

	ColumnComponent.prototype.getVisibility = function () {

		return this._column.visible;
	};

	ColumnComponent.prototype.show = function () {

		if (this._column.isGroup) {

			this._column.columns.forEach(function (column) {

				column.show();
			});
		} else {

			this._column.show();
		}
	};

	ColumnComponent.prototype.hide = function () {

		if (this._column.isGroup) {

			this._column.columns.forEach(function (column) {

				column.hide();
			});
		} else {

			this._column.hide();
		}
	};

	ColumnComponent.prototype.toggle = function () {

		if (this._column.visible) {

			this.hide();
		} else {

			this.show();
		}
	};

	ColumnComponent.prototype.delete = function () {

		this._column.delete();
	};

	ColumnComponent.prototype.getSubColumns = function () {

		var output = [];

		if (this._column.columns.length) {

			this._column.columns.forEach(function (column) {

				output.push(column.getComponent());
			});
		}

		return output;
	};

	ColumnComponent.prototype.getParentColumn = function () {

		return this._column.parent instanceof Column ? this._column.parent.getComponent() : false;
	};

	ColumnComponent.prototype._getSelf = function () {

		return this._column;
	};

	ColumnComponent.prototype.scrollTo = function () {

		return this._column.table.columnManager.scrollToColumn(this._column);
	};

	ColumnComponent.prototype.getTable = function () {

		return this._column.table;
	};

	ColumnComponent.prototype.headerFilterFocus = function () {

		if (this._column.table.modExists("filter", true)) {

			this._column.table.modules.filter.setHeaderFilterFocus(this._column);
		}
	};

	ColumnComponent.prototype.reloadHeaderFilter = function () {

		if (this._column.table.modExists("filter", true)) {

			this._column.table.modules.filter.reloadHeaderFilter(this._column);
		}
	};

	ColumnComponent.prototype.setHeaderFilterValue = function (value) {

		if (this._column.table.modExists("filter", true)) {

			this._column.table.modules.filter.setHeaderFilterValue(this._column, value);
		}
	};

	var Column = function Column(def, parent) {

		var self = this;

		this.table = parent.table;

		this.definition = def; //column definition

		this.parent = parent; //hold parent object

		this.type = "column"; //type of element

		this.columns = []; //child columns

		this.cells = []; //cells bound to this column

		this.element = this.createElement(); //column header element

		this.contentElement = false;

		this.groupElement = this.createGroupElement(); //column group holder element

		this.isGroup = false;

		this.tooltip = false; //hold column tooltip

		this.hozAlign = ""; //horizontal text alignment


		//multi dimentional filed handling

		this.field = "";

		this.fieldStructure = "";

		this.getFieldValue = "";

		this.setFieldValue = "";

		this.setField(this.definition.field);

		this.modules = {}; //hold module variables;


		this.cellEvents = {

			cellClick: false,

			cellDblClick: false,

			cellContext: false,

			cellTap: false,

			cellDblTap: false,

			cellTapHold: false

		};

		this.width = null; //column width

		this.minWidth = null; //column minimum width

		this.widthFixed = false; //user has specified a width for this column


		this.visible = true; //default visible state


		//initialize column

		if (def.columns) {

			this.isGroup = true;

			def.columns.forEach(function (def, i) {

				var newCol = new Column(def, self);

				self.attachColumn(newCol);
			});

			self.checkColumnVisibility();
		} else {

			parent.registerColumnField(this);
		}

		if (def.rowHandle && this.table.options.movableRows !== false && this.table.modExists("moveRow")) {

			this.table.modules.moveRow.setHandle(true);
		}

		this._buildHeader();
	};

	Column.prototype.createElement = function () {

		var el = document.createElement("div");

		el.classList.add("tabulator-col");

		el.setAttribute("role", "columnheader");

		el.setAttribute("aria-sort", "none");

		return el;
	};

	Column.prototype.createGroupElement = function () {

		var el = document.createElement("div");

		el.classList.add("tabulator-col-group-cols");

		return el;
	};

	Column.prototype.setField = function (field) {

		this.field = field;

		this.fieldStructure = field ? this.table.options.nestedFieldSeparator ? field.split(this.table.options.nestedFieldSeparator) : [field] : [];

		this.getFieldValue = this.fieldStructure.length > 1 ? this._getNestedData : this._getFlatData;

		this.setFieldValue = this.fieldStructure.length > 1 ? this._setNesteData : this._setFlatData;
	};

	//register column position with column manager

	Column.prototype.registerColumnPosition = function (column) {

		this.parent.registerColumnPosition(column);
	};

	//register column position with column manager

	Column.prototype.registerColumnField = function (column) {

		this.parent.registerColumnField(column);
	};

	//trigger position registration

	Column.prototype.reRegisterPosition = function () {

		if (this.isGroup) {

			this.columns.forEach(function (column) {

				column.reRegisterPosition();
			});
		} else {

			this.registerColumnPosition(this);
		}
	};

	Column.prototype.setTooltip = function () {

		var self = this,
		    def = self.definition;

		//set header tooltips

		var tooltip = def.headerTooltip || def.tooltip === false ? def.headerTooltip : self.table.options.tooltipsHeader;

		if (tooltip) {

			if (tooltip === true) {

				if (def.field) {

					self.table.modules.localize.bind("columns|" + def.field, function (value) {

						self.element.setAttribute("title", value || def.title);
					});
				} else {

					self.element.setAttribute("title", def.title);
				}
			} else {

				if (typeof tooltip == "function") {

					tooltip = tooltip(self.getComponent());

					if (tooltip === false) {

						tooltip = "";
					}
				}

				self.element.setAttribute("title", tooltip);
			}
		} else {

			self.element.setAttribute("title", "");
		}
	};

	//build header element

	Column.prototype._buildHeader = function () {

		var self = this,
		    def = self.definition;

		while (self.element.firstChild) {
			self.element.removeChild(self.element.firstChild);
		}if (def.headerVertical) {

			self.element.classList.add("tabulator-col-vertical");

			if (def.headerVertical === "flip") {

				self.element.classList.add("tabulator-col-vertical-flip");
			}
		}

		self.contentElement = self._bindEvents();

		self.contentElement = self._buildColumnHeaderContent();

		self.element.appendChild(self.contentElement);

		if (self.isGroup) {

			self._buildGroupHeader();
		} else {

			self._buildColumnHeader();
		}

		self.setTooltip();

		//set resizable handles

		if (self.table.options.resizableColumns && self.table.modExists("resizeColumns")) {

			self.table.modules.resizeColumns.initializeColumn("header", self, self.element);
		}

		//set resizable handles

		if (def.headerFilter && self.table.modExists("filter") && self.table.modExists("edit")) {

			if (typeof def.headerFilterPlaceholder !== "undefined" && def.field) {

				self.table.modules.localize.setHeaderFilterColumnPlaceholder(def.field, def.headerFilterPlaceholder);
			}

			self.table.modules.filter.initializeColumn(self);
		}

		//set resizable handles

		if (self.table.modExists("frozenColumns")) {

			self.table.modules.frozenColumns.initializeColumn(self);
		}

		//set movable column

		if (self.table.options.movableColumns && !self.isGroup && self.table.modExists("moveColumn")) {

			self.table.modules.moveColumn.initializeColumn(self);
		}

		//set calcs column

		if ((def.topCalc || def.bottomCalc) && self.table.modExists("columnCalcs")) {

			self.table.modules.columnCalcs.initializeColumn(self);
		}

		//update header tooltip on mouse enter

		self.element.addEventListener("mouseenter", function (e) {

			self.setTooltip();
		});
	};

	Column.prototype._bindEvents = function () {

		var self = this,
		    def = self.definition,
		    dblTap,
		    tapHold,
		    tap;

		//setup header click event bindings

		if (typeof def.headerClick == "function") {

			self.element.addEventListener("click", function (e) {
				def.headerClick(e, self.getComponent());
			});
		}

		if (typeof def.headerDblClick == "function") {

			self.element.addEventListener("dblclick", function (e) {
				def.headerDblClick(e, self.getComponent());
			});
		}

		if (typeof def.headerContext == "function") {

			self.element.addEventListener("contextmenu", function (e) {
				def.headerContext(e, self.getComponent());
			});
		}

		//setup header tap event bindings

		if (typeof def.headerTap == "function") {

			tap = false;

			self.element.addEventListener("touchstart", function (e) {

				tap = true;
			});

			self.element.addEventListener("touchend", function (e) {

				if (tap) {

					def.headerTap(e, self.getComponent());
				}

				tap = false;
			});
		}

		if (typeof def.headerDblTap == "function") {

			dblTap = null;

			self.element.addEventListener("touchend", function (e) {

				if (dblTap) {

					clearTimeout(dblTap);

					dblTap = null;

					def.headerDblTap(e, self.getComponent());
				} else {

					dblTap = setTimeout(function () {

						clearTimeout(dblTap);

						dblTap = null;
					}, 300);
				}
			});
		}

		if (typeof def.headerTapHold == "function") {

			tapHold = null;

			self.element.addEventListener("touchstart", function (e) {

				clearTimeout(tapHold);

				tapHold = setTimeout(function () {

					clearTimeout(tapHold);

					tapHold = null;

					tap = false;

					def.headerTapHold(e, self.getComponent());
				}, 1000);
			});

			self.element.addEventListener("touchend", function (e) {

				clearTimeout(tapHold);

				tapHold = null;
			});
		}

		//store column cell click event bindings

		if (typeof def.cellClick == "function") {

			self.cellEvents.cellClick = def.cellClick;
		}

		if (typeof def.cellDblClick == "function") {

			self.cellEvents.cellDblClick = def.cellDblClick;
		}

		if (typeof def.cellContext == "function") {

			self.cellEvents.cellContext = def.cellContext;
		}

		//setup column cell tap event bindings

		if (typeof def.cellTap == "function") {

			self.cellEvents.cellTap = def.cellTap;
		}

		if (typeof def.cellDblTap == "function") {

			self.cellEvents.cellDblTap = def.cellDblTap;
		}

		if (typeof def.cellTapHold == "function") {

			self.cellEvents.cellTapHold = def.cellTapHold;
		}

		//setup column cell edit callbacks

		if (typeof def.cellEdited == "function") {

			self.cellEvents.cellEdited = def.cellEdited;
		}

		if (typeof def.cellEditing == "function") {

			self.cellEvents.cellEditing = def.cellEditing;
		}

		if (typeof def.cellEditCancelled == "function") {

			self.cellEvents.cellEditCancelled = def.cellEditCancelled;
		}
	};

	//build header element for header

	Column.prototype._buildColumnHeader = function () {

		var self = this,
		    def = self.definition,
		    table = self.table,
		    sortable;

		//set column sorter

		if (table.modExists("sort")) {

			table.modules.sort.initializeColumn(self, self.contentElement);
		}

		//set column formatter

		if (table.modExists("format")) {

			table.modules.format.initializeColumn(self);
		}

		//set column editor

		if (typeof def.editor != "undefined" && table.modExists("edit")) {

			table.modules.edit.initializeColumn(self);
		}

		//set colum validator

		if (typeof def.validator != "undefined" && table.modExists("validate")) {

			table.modules.validate.initializeColumn(self);
		}

		//set column mutator

		if (table.modExists("mutator")) {

			table.modules.mutator.initializeColumn(self);
		}

		//set column accessor

		if (table.modExists("accessor")) {

			table.modules.accessor.initializeColumn(self);
		}

		//set respoviveLayout

		if (_typeof(table.options.responsiveLayout) && table.modExists("responsiveLayout")) {

			table.modules.responsiveLayout.initializeColumn(self);
		}

		//set column visibility

		if (typeof def.visible != "undefined") {

			if (def.visible) {

				self.show(true);
			} else {

				self.hide(true);
			}
		}

		//asign additional css classes to column header

		if (def.cssClass) {

			self.element.classList.add(def.cssClass);
		}

		if (def.field) {

			this.element.setAttribute("tabulator-field", def.field);
		}

		//set min width if present

		self.setMinWidth(typeof def.minWidth == "undefined" ? self.table.options.columnMinWidth : def.minWidth);

		self.reinitializeWidth();

		//set tooltip if present

		self.tooltip = self.definition.tooltip || self.definition.tooltip === false ? self.definition.tooltip : self.table.options.tooltips;

		//set orizontal text alignment

		self.hozAlign = typeof self.definition.align == "undefined" ? "" : self.definition.align;
	};

	Column.prototype._buildColumnHeaderContent = function () {

		var self = this,
		    def = self.definition,
		    table = self.table;

		var contentElement = document.createElement("div");

		contentElement.classList.add("tabulator-col-content");

		contentElement.appendChild(self._buildColumnHeaderTitle());

		return contentElement;
	};

	//build title element of column

	Column.prototype._buildColumnHeaderTitle = function () {

		var self = this,
		    def = self.definition,
		    table = self.table,
		    title;

		var titleHolderElement = document.createElement("div");

		titleHolderElement.classList.add("tabulator-col-title");

		if (def.editableTitle) {

			var titleElement = document.createElement("input");

			titleElement.classList.add("tabulator-title-editor");

			titleElement.addEventListener("click", function (e) {

				e.stopPropagation();

				titleElement.focus();
			});

			titleElement.addEventListener("change", function () {

				def.title = titleElement.value;

				table.options.columnTitleChanged.call(self.table, self.getComponent());
			});

			titleHolderElement.appendChild(titleElement);

			if (def.field) {

				table.modules.localize.bind("columns|" + def.field, function (text) {

					titleElement.value = text || def.title || "&nbsp";
				});
			} else {

				titleElement.value = def.title || "&nbsp";
			}
		} else {

			if (def.field) {

				table.modules.localize.bind("columns|" + def.field, function (text) {

					self._formatColumnHeaderTitle(titleHolderElement, text || def.title || "&nbsp");
				});
			} else {

				self._formatColumnHeaderTitle(titleHolderElement, def.title || "&nbsp");
			}
		}

		return titleHolderElement;
	};

	Column.prototype._formatColumnHeaderTitle = function (el, title) {

		var formatter, contents, params, mockCell;

		if (this.definition.titleFormatter && this.table.modExists("format")) {

			formatter = this.table.modules.format.getFormatter(this.definition.titleFormatter);

			mockCell = {

				getValue: function getValue() {

					return title;
				},

				getElement: function getElement() {

					return el;
				}

			};

			params = this.definition.titleFormatterParams || {};

			params = typeof params === "function" ? params() : params;

			contents = formatter.call(this.table.modules.format, mockCell, params);

			switch (typeof contents === 'undefined' ? 'undefined' : _typeof(contents)) {

				case "object":

					if (contents instanceof Node) {

						this.element.appendChild(contents);
					} else {

						this.element.innerHTML = "";

						console.warn("Format Error - Title formatter has returned a type of object, the only valid formatter object return is an instance of Node, the formatter returned:", contents);
					}

					break;

				case "undefined":

				case "null":

					this.element.innerHTML = "";

					break;

				default:

					this.element.innerHTML = contents;

			}
		} else {

			el.innerHTML = title;
		}
	};

	//build header element for column group

	Column.prototype._buildGroupHeader = function () {

		this.element.classList.add("tabulator-col-group");

		this.element.setAttribute("role", "columngroup");

		this.element.setAttribute("aria-title", this.definition.title);

		this.element.appendChild(this.groupElement);
	};

	//flat field lookup

	Column.prototype._getFlatData = function (data) {

		return data[this.field];
	};

	//nested field lookup

	Column.prototype._getNestedData = function (data) {

		var dataObj = data,
		    structure = this.fieldStructure,
		    length = structure.length,
		    output;

		for (var i = 0; i < length; i++) {

			dataObj = dataObj[structure[i]];

			output = dataObj;

			if (!dataObj) {

				break;
			}
		}

		return output;
	};

	//flat field set

	Column.prototype._setFlatData = function (data, value) {

		data[this.field] = value;
	};

	//nested field set

	Column.prototype._setNesteData = function (data, value) {

		var dataObj = data,
		    structure = this.fieldStructure,
		    length = structure.length;

		for (var i = 0; i < length; i++) {

			if (i == length - 1) {

				dataObj[structure[i]] = value;
			} else {

				if (!dataObj[structure[i]]) {

					dataObj[structure[i]] = {};
				}

				dataObj = dataObj[structure[i]];
			}
		}
	};

	//attach column to this group

	Column.prototype.attachColumn = function (column) {

		var self = this;

		if (self.groupElement) {

			self.columns.push(column);

			self.groupElement.appendChild(column.getElement());
		} else {

			console.warn("Column Warning - Column being attached to another column instead of column group");
		}
	};

	//vertically align header in column

	Column.prototype.verticalAlign = function (alignment, height) {

		//calculate height of column header and group holder element

		var parentHeight = this.parent.isGroup ? this.parent.getGroupElement().clientHeight : height || this.parent.getHeadersElement().clientHeight;

		// var parentHeight = this.parent.isGroup ? this.parent.getGroupElement().clientHeight : this.parent.getHeadersElement().clientHeight;


		this.element.style.height = parentHeight + "px";

		if (this.isGroup) {

			this.groupElement.style.minHeight = parentHeight - this.contentElement.offsetHeight + "px";
		}

		//vertically align cell contents

		if (!this.isGroup && alignment !== "top") {

			if (alignment === "bottom") {

				this.element.style.paddingTop = this.element.clientHeight - this.contentElement.offsetHeight + "px";
			} else {

				this.element.style.paddingTop = (this.element.clientHeight - this.contentElement.offsetHeight) / 2 + "px";
			}
		}

		this.columns.forEach(function (column) {

			column.verticalAlign(alignment);
		});
	};

	//clear vertical alignmenet

	Column.prototype.clearVerticalAlign = function () {

		this.element.style.paddingTop = "";

		this.element.style.height = "";

		this.element.style.minHeight = "";

		this.columns.forEach(function (column) {

			column.clearVerticalAlign();
		});
	};

	//// Retreive Column Information ////


	//return column header element

	Column.prototype.getElement = function () {

		return this.element;
	};

	//return colunm group element

	Column.prototype.getGroupElement = function () {

		return this.groupElement;
	};

	//return field name

	Column.prototype.getField = function () {

		return this.field;
	};

	//return the first column in a group

	Column.prototype.getFirstColumn = function () {

		if (!this.isGroup) {

			return this;
		} else {

			if (this.columns.length) {

				return this.columns[0].getFirstColumn();
			} else {

				return false;
			}
		}
	};

	//return the last column in a group

	Column.prototype.getLastColumn = function () {

		if (!this.isGroup) {

			return this;
		} else {

			if (this.columns.length) {

				return this.columns[this.columns.length - 1].getLastColumn();
			} else {

				return false;
			}
		}
	};

	//return all columns in a group

	Column.prototype.getColumns = function () {

		return this.columns;
	};

	//return all columns in a group

	Column.prototype.getCells = function () {

		return this.cells;
	};

	//retreive the top column in a group of columns

	Column.prototype.getTopColumn = function () {

		if (this.parent.isGroup) {

			return this.parent.getTopColumn();
		} else {

			return this;
		}
	};

	//return column definition object

	Column.prototype.getDefinition = function (updateBranches) {

		var colDefs = [];

		if (this.isGroup && updateBranches) {

			this.columns.forEach(function (column) {

				colDefs.push(column.getDefinition(true));
			});

			this.definition.columns = colDefs;
		}

		return this.definition;
	};

	//////////////////// Actions ////////////////////


	Column.prototype.checkColumnVisibility = function () {

		var visible = false;

		this.columns.forEach(function (column) {

			if (column.visible) {

				visible = true;
			}
		});

		if (visible) {

			this.show();

			this.parent.table.options.columnVisibilityChanged.call(this.table, this.getComponent(), false);
		} else {

			this.hide();
		}
	};

	//show column

	Column.prototype.show = function (silent, responsiveToggle) {

		if (!this.visible) {

			this.visible = true;

			this.element.style.display = "";

			this.table.columnManager._verticalAlignHeaders();

			if (this.parent.isGroup) {

				this.parent.checkColumnVisibility();
			}

			this.cells.forEach(function (cell) {

				cell.show();
			});

			if (this.table.options.persistentLayout && this.table.modExists("responsiveLayout", true)) {

				this.table.modules.persistence.save("columns");
			}

			if (!responsiveToggle && this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", true)) {

				this.table.modules.responsiveLayout.updateColumnVisibility(this, this.visible);
			}

			if (!silent) {

				this.table.options.columnVisibilityChanged.call(this.table, this.getComponent(), true);
			}
		}
	};

	//hide column

	Column.prototype.hide = function (silent, responsiveToggle) {

		if (this.visible) {

			this.visible = false;

			this.element.style.display = "none";

			this.table.columnManager._verticalAlignHeaders();

			if (this.parent.isGroup) {

				this.parent.checkColumnVisibility();
			}

			this.cells.forEach(function (cell) {

				cell.hide();
			});

			if (this.table.options.persistentLayout && this.table.modExists("persistence", true)) {

				this.table.modules.persistence.save("columns");
			}

			if (!responsiveToggle && this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", true)) {

				this.table.modules.responsiveLayout.updateColumnVisibility(this, this.visible);
			}

			if (!silent) {

				this.table.options.columnVisibilityChanged.call(this.table, this.getComponent(), false);
			}
		}
	};

	Column.prototype.matchChildWidths = function () {

		var childWidth = 0;

		if (this.contentElement && this.columns.length) {

			this.columns.forEach(function (column) {

				childWidth += column.getWidth();
			});

			this.contentElement.style.maxWidth = childWidth - 1 + "px";
		}
	};

	Column.prototype.setWidth = function (width) {

		this.widthFixed = true;

		this.setWidthActual(width);
	};

	Column.prototype.setWidthActual = function (width) {

		if (isNaN(width)) {

			width = Math.floor(this.table.element.clientWidth / 100 * parseInt(width));
		}

		width = Math.max(this.minWidth, width);

		this.width = width;

		this.element.style.width = width ? width + "px" : "";

		if (!this.isGroup) {

			this.cells.forEach(function (cell) {

				cell.setWidth(width);
			});
		}

		if (this.parent.isGroup) {

			this.parent.matchChildWidths();
		}

		//set resizable handles

		if (this.table.modExists("frozenColumns")) {

			this.table.modules.frozenColumns.layout();
		}
	};

	Column.prototype.checkCellHeights = function () {

		var rows = [];

		this.cells.forEach(function (cell) {

			if (cell.row.heightInitialized) {

				if (cell.row.getElement().offsetParent !== null) {

					rows.push(cell.row);

					cell.row.clearCellHeight();
				} else {

					cell.row.heightInitialized = false;
				}
			}
		});

		rows.forEach(function (row) {

			row.calcHeight();
		});

		rows.forEach(function (row) {

			row.setCellHeight();
		});
	};

	Column.prototype.getWidth = function () {

		// return this.element.offsetWidth;

		return this.width;
	};

	Column.prototype.getHeight = function () {

		return this.element.offsetHeight;
	};

	Column.prototype.setMinWidth = function (minWidth) {

		this.minWidth = minWidth;

		this.element.style.minWidth = minWidth ? minWidth + "px" : "";

		this.cells.forEach(function (cell) {

			cell.setMinWidth(minWidth);
		});
	};

	Column.prototype.delete = function () {

		if (this.isGroup) {

			this.columns.forEach(function (column) {

				column.delete();
			});
		}

		var cellCount = this.cells.length;

		for (var i = 0; i < cellCount; i++) {

			this.cells[0].delete();
		}

		this.element.parentNode.removeChild(this.element);

		this.table.columnManager.deregisterColumn(this);
	};

	//////////////// Cell Management /////////////////


	//generate cell for this column

	Column.prototype.generateCell = function (row) {

		var self = this;

		var cell = new Cell(self, row);

		this.cells.push(cell);

		return cell;
	};

	Column.prototype.reinitializeWidth = function (force) {

		this.widthFixed = false;

		//set width if present

		if (typeof this.definition.width !== "undefined" && !force) {

			this.setWidth(this.definition.width);
		}

		//hide header filters to prevent them altering column width

		if (this.table.modExists("filter")) {

			this.table.modules.filter.hideHeaderFilterElements();
		}

		this.fitToData();

		//show header filters again after layout is complete

		if (this.table.modExists("filter")) {

			this.table.modules.filter.showHeaderFilterElements();
		}
	};

	//set column width to maximum cell width

	Column.prototype.fitToData = function () {

		var self = this;

		if (!this.widthFixed) {

			this.element.width = "";

			self.cells.forEach(function (cell) {

				cell.setWidth("");
			});
		}

		var maxWidth = this.element.offsetWidth;

		if (!self.width || !this.widthFixed) {

			self.cells.forEach(function (cell) {

				var width = cell.getWidth();

				if (width > maxWidth) {

					maxWidth = width;
				}
			});

			if (maxWidth) {

				self.setWidthActual(maxWidth + 1);
			}
		}
	};

	Column.prototype.deleteCell = function (cell) {

		var index = this.cells.indexOf(cell);

		if (index > -1) {

			this.cells.splice(index, 1);
		}
	};

	//////////////// Event Bindings /////////////////


	//////////////// Object Generation /////////////////

	Column.prototype.getComponent = function () {

		return new ColumnComponent(this);
	};

	var RowManager = function RowManager(table) {

		this.table = table;

		this.element = this.createHolderElement(); //containing element

		this.tableElement = this.createTableElement(); //table element

		this.columnManager = null; //hold column manager object

		this.height = 0; //hold height of table element


		this.firstRender = false; //handle first render

		this.renderMode = "classic"; //current rendering mode


		this.rows = []; //hold row data objects

		this.activeRows = []; //rows currently available to on display in the table

		this.activeRowsCount = 0; //count of active rows


		this.displayRows = []; //rows currently on display in the table

		this.displayRowsCount = 0; //count of display rows


		this.scrollTop = 0;

		this.scrollLeft = 0;

		this.vDomRowHeight = 20; //approximation of row heights for padding


		this.vDomTop = 0; //hold position for first rendered row in the virtual DOM

		this.vDomBottom = 0; //hold possition for last rendered row in the virtual DOM


		this.vDomScrollPosTop = 0; //last scroll position of the vDom top;

		this.vDomScrollPosBottom = 0; //last scroll position of the vDom bottom;


		this.vDomTopPad = 0; //hold value of padding for top of virtual DOM

		this.vDomBottomPad = 0; //hold value of padding for bottom of virtual DOM


		this.vDomMaxRenderChain = 90; //the maximum number of dom elements that can be rendered in 1 go


		this.vDomWindowBuffer = 0; //window row buffer before removing elements, to smooth scrolling


		this.vDomWindowMinTotalRows = 20; //minimum number of rows to be generated in virtual dom (prevent buffering issues on tables with tall rows)

		this.vDomWindowMinMarginRows = 5; //minimum number of rows to be generated in virtual dom margin


		this.vDomTopNewRows = []; //rows to normalize after appending to optimize render speed

		this.vDomBottomNewRows = []; //rows to normalize after appending to optimize render speed
	};

	//////////////// Setup Functions /////////////////


	RowManager.prototype.createHolderElement = function () {

		var el = document.createElement("div");

		el.classList.add("tabulator-tableHolder");

		el.setAttribute("tabindex", 0);

		return el;
	};

	RowManager.prototype.createTableElement = function () {

		var el = document.createElement("div");

		el.classList.add("tabulator-table");

		return el;
	};

	//return containing element

	RowManager.prototype.getElement = function () {

		return this.element;
	};

	//return table element

	RowManager.prototype.getTableElement = function () {

		return this.tableElement;
	};

	//return position of row in table

	RowManager.prototype.getRowPosition = function (row, active) {

		if (active) {

			return this.activeRows.indexOf(row);
		} else {

			return this.rows.indexOf(row);
		}
	};

	//link to column manager

	RowManager.prototype.setColumnManager = function (manager) {

		this.columnManager = manager;
	};

	RowManager.prototype.initialize = function () {

		var self = this;

		self.setRenderMode();

		//initialize manager

		self.element.appendChild(self.tableElement);

		self.firstRender = true;

		//scroll header along with table body

		self.element.addEventListener("scroll", function () {

			var left = self.element.scrollLeft;

			//handle horizontal scrolling

			if (self.scrollLeft != left) {

				self.columnManager.scrollHorizontal(left);

				if (self.table.options.groupBy) {

					self.table.modules.groupRows.scrollHeaders(left);
				}

				if (self.table.modExists("columnCalcs")) {

					self.table.modules.columnCalcs.scrollHorizontal(left);
				}
			}

			self.scrollLeft = left;
		});

		//handle virtual dom scrolling

		if (this.renderMode === "virtual") {

			self.element.addEventListener("scroll", function () {

				var top = self.element.scrollTop;

				var dir = self.scrollTop > top;

				//handle verical scrolling

				if (self.scrollTop != top) {

					self.scrollTop = top;

					self.scrollVertical(dir);

					if (self.table.options.ajaxProgressiveLoad == "scroll") {

						self.table.modules.ajax.nextPage(self.element.scrollHeight - self.element.clientHeight - top);
					}
				} else {

					self.scrollTop = top;
				}
			});
		}
	};

	////////////////// Row Manipulation //////////////////


	RowManager.prototype.findRow = function (subject) {

		var self = this;

		if ((typeof subject === 'undefined' ? 'undefined' : _typeof(subject)) == "object") {

			if (subject instanceof Row) {

				//subject is row element

				return subject;
			} else if (subject instanceof RowComponent) {

				//subject is public row component

				return subject._getSelf() || false;
			} else if (subject instanceof HTMLElement) {

				//subject is a HTML element of the row

				var match = self.rows.find(function (row) {

					return row.element === subject;
				});

				return match || false;
			}
		} else if (typeof subject == "undefined" || subject === null) {

			return false;
		} else {

			//subject should be treated as the index of the row

			var _match = self.rows.find(function (row) {

				return row.data[self.table.options.index] == subject;
			});

			return _match || false;
		}

		//catch all for any other type of input


		return false;
	};

	RowManager.prototype.getRowFromPosition = function (position, active) {

		if (active) {

			return this.activeRows[position];
		} else {

			return this.rows[position];
		}
	};

	RowManager.prototype.scrollToRow = function (row, position, ifVisible) {
		var _this2 = this;

		var rowIndex = this.getDisplayRows().indexOf(row),
		    rowEl = row.getElement(),
		    rowTop,
		    offset = 0;

		return new Promise(function (resolve, reject) {

			if (rowIndex > -1) {

				if (typeof position === "undefined") {

					position = _this2.table.options.scrollToRowPosition;
				}

				if (typeof ifVisible === "undefined") {

					ifVisible = _this2.table.options.scrollToRowIfVisible;
				}

				if (position === "nearest") {

					switch (_this2.renderMode) {

						case "classic":

							rowTop = Tabulator.prototype.helpers.elOffset(rowEl).top;

							position = Math.abs(_this2.element.scrollTop - rowTop) > Math.abs(_this2.element.scrollTop + _this2.element.clientHeight - rowTop) ? "bottom" : "top";

							break;

						case "virtual":

							position = Math.abs(_this2.vDomTop - rowIndex) > Math.abs(_this2.vDomBottom - rowIndex) ? "bottom" : "top";

							break;

					}
				}

				//check row visibility

				if (!ifVisible) {

					if (Tabulator.prototype.helpers.elVisible(rowEl)) {

						offset = Tabulator.prototype.helpers.elOffset(rowEl).top - Tabulator.prototype.helpers.elOffset(_this2.element).top;

						if (offset > 0 && offset < _this2.element.clientHeight - rowEl.offsetHeight) {

							return false;
						}
					}
				}

				//scroll to row

				switch (_this2.renderMode) {

					case "classic":

						_this2.element.scrollTop = Tabulator.prototype.helpers.elOffset(rowEl).top - Tabulator.prototype.helpers.elOffset(_this2.element).top + _this2.element.scrollTop;

						break;

					case "virtual":

						_this2._virtualRenderFill(rowIndex, true);

						break;

				}

				//align to correct position

				switch (position) {

					case "middle":

					case "center":

						_this2.element.scrollTop = _this2.element.scrollTop - _this2.element.clientHeight / 2;

						break;

					case "bottom":

						_this2.element.scrollTop = _this2.element.scrollTop - _this2.element.clientHeight + rowEl.offsetHeight;

						break;

				}

				resolve();
			} else {

				console.warn("Scroll Error - Row not visible");

				reject("Scroll Error - Row not visible");
			}
		});
	};

	////////////////// Data Handling //////////////////


	RowManager.prototype.setData = function (data, renderInPosition) {
		var _this3 = this;

		var self = this;

		return new Promise(function (resolve, reject) {

			if (renderInPosition && _this3.getDisplayRows().length) {

				if (self.table.options.pagination) {

					self._setDataActual(data, true);
				} else {

					_this3.reRenderInPosition(function () {

						self._setDataActual(data);
					});
				}
			} else {

				_this3.resetScroll();

				_this3._setDataActual(data);
			}

			resolve();
		});
	};

	RowManager.prototype._setDataActual = function (data, renderInPosition) {

		var self = this;

		self.table.options.dataLoading.call(this.table, data);

		self.rows.forEach(function (row) {

			row.wipe();
		});

		self.rows = [];

		if (this.table.options.history && this.table.modExists("history")) {

			this.table.modules.history.clear();
		}

		if (Array.isArray(data)) {

			if (this.table.modExists("selectRow")) {

				this.table.modules.selectRow.clearSelectionData();
			}

			data.forEach(function (def, i) {

				if (def && (typeof def === 'undefined' ? 'undefined' : _typeof(def)) === "object") {

					var row = new Row(def, self);

					self.rows.push(row);
				} else {

					console.warn("Data Loading Warning - Invalid row data detected and ignored, expecting object but received:", def);
				}
			});

			self.table.options.dataLoaded.call(this.table, data);

			self.refreshActiveData(false, false, renderInPosition);
		} else {

			console.error("Data Loading Error - Unable to process data due to invalid data type \nExpecting: array \nReceived: ", typeof data === 'undefined' ? 'undefined' : _typeof(data), "\nData:     ", data);
		}
	};

	RowManager.prototype.deleteRow = function (row) {

		var allIndex = this.rows.indexOf(row),
		    activeIndex = this.activeRows.indexOf(row);

		if (activeIndex > -1) {

			this.activeRows.splice(activeIndex, 1);
		}

		if (allIndex > -1) {

			this.rows.splice(allIndex, 1);
		}

		this.setActiveRows(this.activeRows);

		this.displayRowIterator(function (rows) {

			var displayIndex = rows.indexOf(row);

			if (displayIndex > -1) {

				rows.splice(displayIndex, 1);
			}
		});

		this.reRenderInPosition();

		this.table.options.rowDeleted.call(this.table, row.getComponent());

		this.table.options.dataEdited.call(this.table, this.getData());

		if (this.table.options.groupBy && this.table.modExists("groupRows")) {

			this.table.modules.groupRows.updateGroupRows(true);
		} else if (this.table.options.pagination && this.table.modExists("page")) {

			this.refreshActiveData(false, false, true);
		} else {

			if (this.table.options.pagination && this.table.modExists("page")) {

				this.refreshActiveData("page");
			}
		}
	};

	RowManager.prototype.addRow = function (data, pos, index, blockRedraw) {

		var row = this.addRowActual(data, pos, index, blockRedraw);

		if (this.table.options.history && this.table.modExists("history")) {

			this.table.modules.history.action("rowAdd", row, { data: data, pos: pos, index: index });
		}

		return row;
	};

	//add multiple rows

	RowManager.prototype.addRows = function (data, pos, index) {
		var _this4 = this;

		var self = this,
		    length = 0,
		    rows = [];

		return new Promise(function (resolve, reject) {

			pos = _this4.findAddRowPos(pos);

			if (!Array.isArray(data)) {

				data = [data];
			}

			length = data.length - 1;

			if (typeof index == "undefined" && pos || typeof index !== "undefined" && !pos) {

				data.reverse();
			}

			data.forEach(function (item, i) {

				var row = self.addRow(item, pos, index, true);

				rows.push(row);
			});

			if (_this4.table.options.groupBy && _this4.table.modExists("groupRows")) {

				_this4.table.modules.groupRows.updateGroupRows(true);
			} else if (_this4.table.options.pagination && _this4.table.modExists("page")) {

				_this4.refreshActiveData(false, false, true);
			} else {

				_this4.reRenderInPosition();
			}

			//recalc column calculations if present

			if (_this4.table.modExists("columnCalcs")) {

				_this4.table.modules.columnCalcs.recalc(_this4.table.rowManager.activeRows);
			}

			resolve(rows);
		});
	};

	RowManager.prototype.findAddRowPos = function (pos) {

		if (typeof pos === "undefined") {

			pos = this.table.options.addRowPos;
		}

		if (pos === "pos") {

			pos = true;
		}

		if (pos === "bottom") {

			pos = false;
		}

		return pos;
	};

	RowManager.prototype.addRowActual = function (data, pos, index, blockRedraw) {

		var row = data instanceof Row ? data : new Row(data || {}, this),
		    top = this.findAddRowPos(pos),
		    dispRows;

		if (!index && this.table.options.pagination && this.table.options.paginationAddRow == "page") {

			dispRows = this.getDisplayRows();

			if (top) {

				if (dispRows.length) {

					index = dispRows[0];
				} else {

					if (this.activeRows.length) {

						index = this.activeRows[this.activeRows.length - 1];

						top = false;
					}
				}
			} else {

				if (dispRows.length) {

					index = dispRows[dispRows.length - 1];

					top = dispRows.length < this.table.modules.page.getPageSize() ? false : true;
				}
			}
		}

		if (index) {

			index = this.findRow(index);
		}

		if (this.table.options.groupBy && this.table.modExists("groupRows")) {

			this.table.modules.groupRows.assignRowToGroup(row);

			var groupRows = row.getGroup().rows;

			if (groupRows.length > 1) {

				if (!index || index && groupRows.indexOf(index) == -1) {

					if (top) {

						if (groupRows[0] !== row) {

							index = groupRows[0];

							this._moveRowInArray(row.getGroup().rows, row, index, top);
						}
					} else {

						if (groupRows[groupRows.length - 1] !== row) {

							index = groupRows[groupRows.length - 1];

							this._moveRowInArray(row.getGroup().rows, row, index, top);
						}
					}
				} else {

					this._moveRowInArray(row.getGroup().rows, row, index, top);
				}
			}
		}

		if (index) {

			var allIndex = this.rows.indexOf(index),
			    activeIndex = this.activeRows.indexOf(index);

			this.displayRowIterator(function (rows) {

				var displayIndex = rows.indexOf(index);

				if (displayIndex > -1) {

					rows.splice(top ? displayIndex : displayIndex + 1, 0, row);
				}
			});

			if (activeIndex > -1) {

				this.activeRows.splice(top ? activeIndex : activeIndex + 1, 0, row);
			}

			if (allIndex > -1) {

				this.rows.splice(top ? allIndex : allIndex + 1, 0, row);
			}
		} else {

			if (top) {

				this.displayRowIterator(function (rows) {

					rows.unshift(row);
				});

				this.activeRows.unshift(row);

				this.rows.unshift(row);
			} else {

				this.displayRowIterator(function (rows) {

					rows.push(row);
				});

				this.activeRows.push(row);

				this.rows.push(row);
			}
		}

		this.setActiveRows(this.activeRows);

		this.table.options.rowAdded.call(this.table, row.getComponent());

		this.table.options.dataEdited.call(this.table, this.getData());

		if (!blockRedraw) {

			this.reRenderInPosition();
		}

		return row;
	};

	RowManager.prototype.moveRow = function (from, to, after) {

		if (this.table.options.history && this.table.modExists("history")) {

			this.table.modules.history.action("rowMove", from, { pos: this.getRowPosition(from), to: to, after: after });
		}

		this.moveRowActual(from, to, after);

		this.table.options.rowMoved.call(this.table, from.getComponent());
	};

	RowManager.prototype.moveRowActual = function (from, to, after) {

		var self = this;

		this._moveRowInArray(this.rows, from, to, after);

		this._moveRowInArray(this.activeRows, from, to, after);

		this.displayRowIterator(function (rows) {

			self._moveRowInArray(rows, from, to, after);
		});

		if (this.table.options.groupBy && this.table.modExists("groupRows")) {

			var toGroup = to.getGroup();

			var fromGroup = from.getGroup();

			if (toGroup === fromGroup) {

				this._moveRowInArray(toGroup.rows, from, to, after);
			} else {

				if (fromGroup) {

					fromGroup.removeRow(from);
				}

				toGroup.insertRow(from, to, after);
			}
		}
	};

	RowManager.prototype._moveRowInArray = function (rows, from, to, after) {

		var fromIndex, toIndex, start, end;

		if (from !== to) {

			fromIndex = rows.indexOf(from);

			if (fromIndex > -1) {

				rows.splice(fromIndex, 1);

				toIndex = rows.indexOf(to);

				if (toIndex > -1) {

					if (after) {

						rows.splice(toIndex + 1, 0, from);
					} else {

						rows.splice(toIndex, 0, from);
					}
				} else {

					rows.splice(fromIndex, 0, from);
				}
			}

			//restyle rows

			if (rows === this.getDisplayRows()) {

				start = fromIndex < toIndex ? fromIndex : toIndex;

				end = toIndex > fromIndex ? toIndex : fromIndex + 1;

				for (var i = start; i <= end; i++) {

					if (rows[i]) {

						this.styleRow(rows[i], i);
					}
				}
			}
		}
	};

	RowManager.prototype.clearData = function () {

		this.setData([]);
	};

	RowManager.prototype.getRowIndex = function (row) {

		return this.findRowIndex(row, this.rows);
	};

	RowManager.prototype.getDisplayRowIndex = function (row) {

		var index = this.getDisplayRows().indexOf(row);

		return index > -1 ? index : false;
	};

	RowManager.prototype.nextDisplayRow = function (row, rowOnly) {

		var index = this.getDisplayRowIndex(row),
		    nextRow = false;

		if (index !== false && index < this.displayRowsCount - 1) {

			nextRow = this.getDisplayRows()[index + 1];
		}

		if (nextRow && (!(nextRow instanceof Row) || nextRow.type != "row")) {

			return this.nextDisplayRow(nextRow, rowOnly);
		}

		return nextRow;
	};

	RowManager.prototype.prevDisplayRow = function (row, rowOnly) {

		var index = this.getDisplayRowIndex(row),
		    prevRow = false;

		if (index) {

			prevRow = this.getDisplayRows()[index - 1];
		}

		if (prevRow && (!(prevRow instanceof Row) || prevRow.type != "row")) {

			return this.prevDisplayRow(prevRow, rowOnly);
		}

		return prevRow;
	};

	RowManager.prototype.findRowIndex = function (row, list) {

		var rowIndex;

		row = this.findRow(row);

		if (row) {

			rowIndex = list.indexOf(row);

			if (rowIndex > -1) {

				return rowIndex;
			}
		}

		return false;
	};

	RowManager.prototype.getData = function (active, transform) {

		var self = this,
		    output = [];

		var rows = active ? self.activeRows : self.rows;

		rows.forEach(function (row) {

			output.push(row.getData(transform || "data"));
		});

		return output;
	};

	RowManager.prototype.getHtml = function (active) {

		var data = this.getData(active),
		    columns = [],
		    header = "",
		    body = "",
		    table = "";

		//build header row

		this.table.columnManager.getColumns().forEach(function (column) {

			var def = column.getDefinition();

			if (column.visible && !def.hideInHtml) {

				header += '<th>' + (def.title || "") + '</th>';

				columns.push(column);
			}
		});

		//build body rows

		data.forEach(function (rowData) {

			var row = "";

			columns.forEach(function (column) {

				var value = column.getFieldValue(rowData);

				if (typeof value === "undefined" || value === null) {

					value = ":";
				}

				row += '<td>' + value + '</td>';
			});

			body += '<tr>' + row + '</tr>';
		});

		//build table

		table = '<table>\n\n\t\t\t<thead>\n\n\t\t\t<tr>' + header + '</tr>\n\n\t\t\t</thead>\n\n\t\t\t<tbody>' + body + '</tbody>\n\n\t\t\t</table>';

		return table;
	};

	RowManager.prototype.getComponents = function (active) {

		var self = this,
		    output = [];

		var rows = active ? self.activeRows : self.rows;

		rows.forEach(function (row) {

			output.push(row.getComponent());
		});

		return output;
	};

	RowManager.prototype.getDataCount = function (active) {

		return active ? this.rows.length : this.activeRows.length;
	};

	RowManager.prototype._genRemoteRequest = function () {

		var self = this,
		    table = self.table,
		    options = table.options,
		    params = {};

		if (table.modExists("page")) {

			//set sort data if defined

			if (options.ajaxSorting) {

				var sorters = self.table.modules.sort.getSort();

				sorters.forEach(function (item) {

					delete item.column;
				});

				params[self.table.modules.page.paginationDataSentNames.sorters] = sorters;
			}

			//set filter data if defined

			if (options.ajaxFiltering) {

				var filters = self.table.modules.filter.getFilters(true, true);

				params[self.table.modules.page.paginationDataSentNames.filters] = filters;
			}

			self.table.modules.ajax.setParams(params, true);
		}

		table.modules.ajax.sendRequest().then(function (data) {

			self.setData(data);
		}).catch(function (e) {});
	};

	//choose the path to refresh data after a filter update

	RowManager.prototype.filterRefresh = function () {

		var table = this.table,
		    options = table.options,
		    left = this.scrollLeft;

		if (options.ajaxFiltering) {

			if (options.pagination == "remote" && table.modExists("page")) {

				table.modules.page.reset(true);

				table.modules.page.setPage(1);
			} else if (options.ajaxProgressiveLoad) {

				table.modules.ajax.loadData();
			} else {

				//assume data is url, make ajax call to url to get data

				this._genRemoteRequest();
			}
		} else {

			this.refreshActiveData("filter");
		}

		this.scrollHorizontal(left);
	};

	//choose the path to refresh data after a sorter update

	RowManager.prototype.sorterRefresh = function () {

		var table = this.table,
		    options = this.table.options,
		    left = this.scrollLeft;

		if (options.ajaxSorting) {

			if ((options.pagination == "remote" || options.progressiveLoad) && table.modExists("page")) {

				table.modules.page.reset(true);

				table.modules.page.setPage(1);
			} else if (options.ajaxProgressiveLoad) {

				table.modules.ajax.loadData();
			} else {

				//assume data is url, make ajax call to url to get data

				this._genRemoteRequest();
			}
		} else {

			this.refreshActiveData("sort");
		}

		this.scrollHorizontal(left);
	};

	RowManager.prototype.scrollHorizontal = function (left) {

		this.scrollLeft = left;

		this.element.scrollLeft = left;

		if (this.table.options.groupBy) {

			this.table.modules.groupRows.scrollHeaders(left);
		}

		if (this.table.modExists("columnCalcs")) {

			this.table.modules.columnCalcs.scrollHorizontal(left);
		}
	};

	//set active data set

	RowManager.prototype.refreshActiveData = function (stage, skipStage, renderInPosition) {

		var self = this,
		    table = this.table,
		    displayIndex;

		if (!stage) {

			stage = "all";
		}

		if (table.options.selectable && !table.options.selectablePersistence && table.modExists("selectRow")) {

			table.modules.selectRow.deselectRows();
		}

		//cascade through data refresh stages

		switch (stage) {

			case "all":

			case "filter":

				if (!skipStage) {

					if (table.modExists("filter")) {

						self.setActiveRows(table.modules.filter.filter(self.rows));
					} else {

						self.setActiveRows(self.rows.slice(0));
					}
				} else {

					skipStage = false;
				}

			case "sort":

				if (!skipStage) {

					if (table.modExists("sort")) {

						table.modules.sort.sort();
					}
				} else {

					skipStage = false;
				}

			//generic stage to allow for pipeline trigger after the data manipulation stage

			case "display":

				this.resetDisplayRows();

			case "freeze":

				if (!skipStage) {

					if (this.table.modExists("frozenRows")) {

						if (table.modules.frozenRows.isFrozen()) {

							if (!table.modules.frozenRows.getDisplayIndex()) {

								table.modules.frozenRows.setDisplayIndex(this.getNextDisplayIndex());
							}

							displayIndex = table.modules.frozenRows.getDisplayIndex();

							displayIndex = self.setDisplayRows(table.modules.frozenRows.getRows(this.getDisplayRows(displayIndex - 1)), displayIndex);

							if (displayIndex !== true) {

								table.modules.frozenRows.setDisplayIndex(displayIndex);
							}
						}
					}
				} else {

					skipStage = false;
				}

			case "group":

				if (!skipStage) {

					if (table.options.groupBy && table.modExists("groupRows")) {

						if (!table.modules.groupRows.getDisplayIndex()) {

							table.modules.groupRows.setDisplayIndex(this.getNextDisplayIndex());
						}

						displayIndex = table.modules.groupRows.getDisplayIndex();

						displayIndex = self.setDisplayRows(table.modules.groupRows.getRows(this.getDisplayRows(displayIndex - 1)), displayIndex);

						if (displayIndex !== true) {

							table.modules.groupRows.setDisplayIndex(displayIndex);
						}
					}
				} else {

					skipStage = false;
				}

			case "tree":

				if (!skipStage) {

					if (table.options.dataTree && table.modExists("dataTree")) {

						if (!table.modules.dataTree.getDisplayIndex()) {

							table.modules.dataTree.setDisplayIndex(this.getNextDisplayIndex());
						}

						displayIndex = table.modules.dataTree.getDisplayIndex();

						displayIndex = self.setDisplayRows(table.modules.dataTree.getRows(this.getDisplayRows(displayIndex - 1)), displayIndex);

						if (displayIndex !== true) {

							table.modules.dataTree.setDisplayIndex(displayIndex);
						}
					}
				} else {

					skipStage = false;
				}

				if (table.options.pagination && table.modExists("page") && !renderInPosition) {

					if (table.modules.page.getMode() == "local") {

						table.modules.page.reset();
					}
				}

			case "page":

				if (!skipStage) {

					if (table.options.pagination && table.modExists("page")) {

						if (!table.modules.page.getDisplayIndex()) {

							table.modules.page.setDisplayIndex(this.getNextDisplayIndex());
						}

						displayIndex = table.modules.page.getDisplayIndex();

						if (table.modules.page.getMode() == "local") {

							table.modules.page.setMaxRows(this.getDisplayRows(displayIndex - 1).length);
						}

						displayIndex = self.setDisplayRows(table.modules.page.getRows(this.getDisplayRows(displayIndex - 1)), displayIndex);

						if (displayIndex !== true) {

							table.modules.page.setDisplayIndex(displayIndex);
						}
					}
				} else {

					skipStage = false;
				}

		}

		if (Tabulator.prototype.helpers.elVisible(self.element)) {

			if (renderInPosition) {

				self.reRenderInPosition();
			} else {

				self.renderTable();

				if (table.options.layoutColumnsOnNewData) {

					self.table.columnManager.redraw(true);
				}
			}
		}

		if (table.modExists("columnCalcs")) {

			table.modules.columnCalcs.recalc(this.activeRows);
		}
	};

	RowManager.prototype.setActiveRows = function (activeRows) {

		this.activeRows = activeRows;

		this.activeRowsCount = this.activeRows.length;
	};

	//reset display rows array

	RowManager.prototype.resetDisplayRows = function () {

		this.displayRows = [];

		this.displayRows.push(this.activeRows.slice(0));

		this.displayRowsCount = this.displayRows[0].length;

		if (this.table.modExists("frozenRows")) {

			this.table.modules.frozenRows.setDisplayIndex(0);
		}

		if (this.table.options.groupBy && this.table.modExists("groupRows")) {

			this.table.modules.groupRows.setDisplayIndex(0);
		}

		if (this.table.options.pagination && this.table.modExists("page")) {

			this.table.modules.page.setDisplayIndex(0);
		}
	};

	RowManager.prototype.getNextDisplayIndex = function () {

		return this.displayRows.length;
	};

	//set display row pipeline data

	RowManager.prototype.setDisplayRows = function (displayRows, index) {

		var output = true;

		if (index && typeof this.displayRows[index] != "undefined") {

			this.displayRows[index] = displayRows;

			output = true;
		} else {

			this.displayRows.push(displayRows);

			output = index = this.displayRows.length - 1;
		}

		if (index == this.displayRows.length - 1) {

			this.displayRowsCount = this.displayRows[this.displayRows.length - 1].length;
		}

		return output;
	};

	RowManager.prototype.getDisplayRows = function (index) {

		if (typeof index == "undefined") {

			return this.displayRows.length ? this.displayRows[this.displayRows.length - 1] : [];
		} else {

			return this.displayRows[index] || [];
		}
	};

	//repeat action accross display rows

	RowManager.prototype.displayRowIterator = function (callback) {

		this.displayRows.forEach(callback);

		this.displayRowsCount = this.displayRows[this.displayRows.length - 1].length;
	};

	//return only actual rows (not group headers etc)

	RowManager.prototype.getRows = function () {

		return this.rows;
	};

	///////////////// Table Rendering /////////////////


	//trigger rerender of table in current position

	RowManager.prototype.reRenderInPosition = function (callback) {

		if (this.getRenderMode() == "virtual") {

			var scrollTop = this.element.scrollTop;

			var topRow = false;

			var topOffset = false;

			var left = this.scrollLeft;

			var rows = this.getDisplayRows();

			for (var i = this.vDomTop; i <= this.vDomBottom; i++) {

				if (rows[i]) {

					var diff = scrollTop - rows[i].getElement().offsetTop;

					if (topOffset === false || Math.abs(diff) < topOffset) {

						topOffset = diff;

						topRow = i;
					} else {

						break;
					}
				}
			}

			if (callback) {

				callback();
			}

			this._virtualRenderFill(topRow === false ? this.displayRowsCount - 1 : topRow, true, topOffset || 0);

			this.scrollHorizontal(left);
		} else {

			this.renderTable();
		}
	};

	RowManager.prototype.setRenderMode = function () {

		if ((this.table.element.clientHeight || this.table.options.height) && this.table.options.virtualDom) {

			this.renderMode = "virtual";
		} else {

			this.renderMode = "classic";
		}
	};

	RowManager.prototype.getRenderMode = function () {

		return this.renderMode;
	};

	RowManager.prototype.renderTable = function () {

		var self = this;

		self.table.options.renderStarted.call(this.table);

		self.element.scrollTop = 0;

		switch (self.renderMode) {

			case "classic":

				self._simpleRender();

				break;

			case "virtual":

				self._virtualRenderFill();

				break;

		}

		if (self.firstRender) {

			if (self.displayRowsCount) {

				self.firstRender = false;

				self.table.modules.layout.layout();
			} else {

				self.renderEmptyScroll();
			}
		}

		if (self.table.modExists("frozenColumns")) {

			self.table.modules.frozenColumns.layout();
		}

		if (!self.displayRowsCount) {

			if (self.table.options.placeholder) {

				if (this.renderMode) {

					self.table.options.placeholder.setAttribute("tabulator-render-mode", this.renderMode);
				}

				self.getElement().appendChild(self.table.options.placeholder);
			}
		}

		self.table.options.renderComplete.call(this.table);
	};

	//simple render on heightless table

	RowManager.prototype._simpleRender = function () {

		var self = this,
		    element = this.tableElement;

		self._clearVirtualDom();

		if (self.displayRowsCount) {

			var onlyGroupHeaders = true;

			self.getDisplayRows().forEach(function (row, index) {

				self.styleRow(row, index);

				element.appendChild(row.getElement());

				row.initialize(true);

				if (row.type !== "group") {

					onlyGroupHeaders = false;
				}
			});

			if (onlyGroupHeaders) {

				element.style.minWidth = self.table.columnManager.getWidth() + "px";
			}
		} else {

			self.renderEmptyScroll();
		}
	};

	//show scrollbars on empty table div

	RowManager.prototype.renderEmptyScroll = function () {

		this.tableElement.style.minWidth = this.table.columnManager.getWidth();

		this.tableElement.style.minHeight = "1px";

		// this.tableElement.style.visibility = "hidden";
	};

	RowManager.prototype._clearVirtualDom = function () {

		var element = this.tableElement;

		if (this.table.options.placeholder && this.table.options.placeholder.parentNode) {

			this.table.options.placeholder.parentNode.removeChild(this.table.options.placeholder);
		}

		// element.children.detach();

		while (element.firstChild) {
			element.removeChild(element.firstChild);
		}element.style.paddingTop = "";

		element.style.paddingBottom = "";

		element.style.minWidth = "";

		element.style.minHeight = "";

		element.style.visibility = "";

		this.scrollTop = 0;

		this.scrollLeft = 0;

		this.vDomTop = 0;

		this.vDomBottom = 0;

		this.vDomTopPad = 0;

		this.vDomBottomPad = 0;
	};

	RowManager.prototype.styleRow = function (row, index) {

		var rowEl = row.getElement();

		if (index % 2) {

			rowEl.classList.add("tabulator-row-even");

			rowEl.classList.remove("tabulator-row-odd");
		} else {

			rowEl.classList.add("tabulator-row-odd");

			rowEl.classList.remove("tabulator-row-even");
		}
	};

	//full virtual render

	RowManager.prototype._virtualRenderFill = function (position, forceMove, offset) {

		var self = this,
		    element = self.tableElement,
		    holder = self.element,
		    topPad = 0,
		    rowsHeight = 0,
		    topPadHeight = 0,
		    i = 0,
		    onlyGroupHeaders = true,
		    rows = self.getDisplayRows();

		position = position || 0;

		offset = offset || 0;

		if (!position) {

			self._clearVirtualDom();
		} else {

			// element.children().detach();

			while (element.firstChild) {
				element.removeChild(element.firstChild);
			} //check if position is too close to bottom of table

			var heightOccpied = (self.displayRowsCount - position + 1) * self.vDomRowHeight;

			if (heightOccpied < self.height) {

				position -= Math.ceil((self.height - heightOccpied) / self.vDomRowHeight);

				if (position < 0) {

					position = 0;
				}
			}

			//calculate initial pad

			topPad = Math.min(Math.max(Math.floor(self.vDomWindowBuffer / self.vDomRowHeight), self.vDomWindowMinMarginRows), position);

			position -= topPad;
		}

		if (self.displayRowsCount && Tabulator.prototype.helpers.elVisible(self.element)) {

			self.vDomTop = position;

			self.vDomBottom = position - 1;

			while ((rowsHeight <= self.height + self.vDomWindowBuffer || i < self.vDomWindowMinTotalRows) && self.vDomBottom < self.displayRowsCount - 1) {

				var index = self.vDomBottom + 1,
				    row = rows[index];

				self.styleRow(row, index);

				element.appendChild(row.getElement());

				if (!row.initialized) {

					row.initialize(true);
				} else {

					if (!row.heightInitialized) {

						row.normalizeHeight(true);
					}
				}

				if (i < topPad) {

					topPadHeight += row.getHeight();
				} else {

					rowsHeight += row.getHeight();
				}

				if (row.type !== "group") {

					onlyGroupHeaders = false;
				}

				self.vDomBottom++;

				i++;
			}

			if (!position) {

				this.vDomTopPad = 0;

				//adjust rowheight to match average of rendered elements

				self.vDomRowHeight = Math.floor((rowsHeight + topPadHeight) / i);

				self.vDomBottomPad = self.vDomRowHeight * (self.displayRowsCount - self.vDomBottom - 1);

				self.vDomScrollHeight = topPadHeight + rowsHeight + self.vDomBottomPad - self.height;
			} else {

				self.vDomTopPad = !forceMove ? self.scrollTop - topPadHeight : self.vDomRowHeight * this.vDomTop + offset;

				self.vDomBottomPad = self.vDomBottom == self.displayRowsCount - 1 ? 0 : Math.max(self.vDomScrollHeight - self.vDomTopPad - rowsHeight - topPadHeight, 0);
			}

			element.style.paddingTop = self.vDomTopPad + "px";

			element.style.paddingBottom = self.vDomBottomPad + "px";

			if (forceMove) {

				this.scrollTop = self.vDomTopPad + topPadHeight + offset;
			}

			this.scrollTop = Math.min(this.scrollTop, this.element.scrollHeight - this.height);

			//adjust for horizontal scrollbar if present

			if (this.element.scrollWidth > this.element.offsetWidth) {

				this.scrollTop += this.element.offsetHeight - this.element.clientHeight;
			}

			this.vDomScrollPosTop = this.scrollTop;

			this.vDomScrollPosBottom = this.scrollTop;

			holder.scrollTop = this.scrollTop;

			element.style.minWidth = onlyGroupHeaders ? self.table.columnManager.getWidth() + "px" : "";

			if (self.table.options.groupBy) {

				if (self.table.modules.layout.getMode() != "fitDataFill" && self.displayRowsCount == self.table.modules.groupRows.countGroups()) {

					self.tableElement.style.minWidth = self.table.columnManager.getWidth();
				}
			}
		} else {

			this.renderEmptyScroll();
		}
	};

	//handle vertical scrolling

	RowManager.prototype.scrollVertical = function (dir) {

		var topDiff = this.scrollTop - this.vDomScrollPosTop;

		var bottomDiff = this.scrollTop - this.vDomScrollPosBottom;

		var margin = this.vDomWindowBuffer * 2;

		if (-topDiff > margin || bottomDiff > margin) {

			//if big scroll redraw table;

			var left = this.scrollLeft;

			this._virtualRenderFill(Math.floor(this.element.scrollTop / this.element.scrollHeight * this.displayRowsCount));

			this.scrollHorizontal(left);
		} else {

			if (dir) {

				//scrolling up

				if (topDiff < 0) {

					this._addTopRow(-topDiff);
				}

				if (topDiff < 0) {

					//hide bottom row if needed

					if (this.vDomScrollHeight - this.scrollTop > this.vDomWindowBuffer) {

						this._removeBottomRow(-bottomDiff);
					}
				}
			} else {

				//scrolling down

				if (topDiff >= 0) {

					//hide top row if needed

					if (this.scrollTop > this.vDomWindowBuffer) {

						this._removeTopRow(topDiff);
					}
				}

				if (bottomDiff >= 0) {

					this._addBottomRow(bottomDiff);
				}
			}
		}
	};

	RowManager.prototype._addTopRow = function (topDiff) {
		var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;


		var table = this.tableElement,
		    rows = this.getDisplayRows();

		if (this.vDomTop) {

			var index = this.vDomTop - 1,
			    topRow = rows[index],
			    topRowHeight = topRow.getHeight() || this.vDomRowHeight;

			//hide top row if needed

			if (topDiff >= topRowHeight) {

				this.styleRow(topRow, index);

				table.insertBefore(topRow.getElement(), table.firstChild);

				if (!topRow.initialized || !topRow.heightInitialized) {

					this.vDomTopNewRows.push(topRow);

					if (!topRow.heightInitialized) {

						topRow.clearCellHeight();
					}
				}

				topRow.initialize();

				this.vDomTopPad -= topRowHeight;

				if (this.vDomTopPad < 0) {

					this.vDomTopPad = index * this.vDomRowHeight;
				}

				if (!index) {

					this.vDomTopPad = 0;
				}

				table.style.paddingTop = this.vDomTopPad + "px";

				this.vDomScrollPosTop -= topRowHeight;

				this.vDomTop--;
			}

			topDiff = -(this.scrollTop - this.vDomScrollPosTop);

			if (i < this.vDomMaxRenderChain && this.vDomTop && topDiff >= (rows[this.vDomTop - 1].getHeight() || this.vDomRowHeight)) {

				this._addTopRow(topDiff, i + 1);
			} else {

				this._quickNormalizeRowHeight(this.vDomTopNewRows);
			}
		}
	};

	RowManager.prototype._removeTopRow = function (topDiff) {

		var table = this.tableElement,
		    topRow = this.getDisplayRows()[this.vDomTop],
		    topRowHeight = topRow.getHeight() || this.vDomRowHeight;

		if (topDiff >= topRowHeight) {

			var rowEl = topRow.getElement();

			rowEl.parentNode.removeChild(rowEl);

			this.vDomTopPad += topRowHeight;

			table.style.paddingTop = this.vDomTopPad + "px";

			this.vDomScrollPosTop += this.vDomTop ? topRowHeight : topRowHeight + this.vDomWindowBuffer;

			this.vDomTop++;

			topDiff = this.scrollTop - this.vDomScrollPosTop;

			this._removeTopRow(topDiff);
		}
	};

	RowManager.prototype._addBottomRow = function (bottomDiff) {
		var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;


		var table = this.tableElement,
		    rows = this.getDisplayRows();

		if (this.vDomBottom < this.displayRowsCount - 1) {

			var index = this.vDomBottom + 1,
			    bottomRow = rows[index],
			    bottomRowHeight = bottomRow.getHeight() || this.vDomRowHeight;

			//hide bottom row if needed

			if (bottomDiff >= bottomRowHeight) {

				this.styleRow(bottomRow, index);

				table.appendChild(bottomRow.getElement());

				if (!bottomRow.initialized || !bottomRow.heightInitialized) {

					this.vDomBottomNewRows.push(bottomRow);

					if (!bottomRow.heightInitialized) {

						bottomRow.clearCellHeight();
					}
				}

				bottomRow.initialize();

				this.vDomBottomPad -= bottomRowHeight;

				if (this.vDomBottomPad < 0 || index == this.displayRowsCount - 1) {

					this.vDomBottomPad = 0;
				}

				table.style.paddingBottom = this.vDomBottomPad + "px";

				this.vDomScrollPosBottom += bottomRowHeight;

				this.vDomBottom++;
			}

			bottomDiff = this.scrollTop - this.vDomScrollPosBottom;

			if (i < this.vDomMaxRenderChain && this.vDomBottom < this.displayRowsCount - 1 && bottomDiff >= (rows[this.vDomBottom + 1].getHeight() || this.vDomRowHeight)) {

				this._addBottomRow(bottomDiff, i + 1);
			} else {

				this._quickNormalizeRowHeight(this.vDomBottomNewRows);
			}
		}
	};

	RowManager.prototype._removeBottomRow = function (bottomDiff) {

		var table = this.tableElement,
		    bottomRow = this.getDisplayRows()[this.vDomBottom],
		    bottomRowHeight = bottomRow.getHeight() || this.vDomRowHeight;

		if (bottomDiff >= bottomRowHeight) {

			var rowEl = bottomRow.getElement();

			if (rowEl.parentNode) {

				rowEl.parentNode.removeChild(rowEl);
			}

			this.vDomBottomPad += bottomRowHeight;

			if (this.vDomBottomPad < 0) {

				this.vDomBottomPad = 0;
			}

			table.style.paddingBottom = this.vDomBottomPad + "px";

			this.vDomScrollPosBottom -= bottomRowHeight;

			this.vDomBottom--;

			bottomDiff = -(this.scrollTop - this.vDomScrollPosBottom);

			this._removeBottomRow(bottomDiff);
		}
	};

	RowManager.prototype._quickNormalizeRowHeight = function (rows) {

		rows.forEach(function (row) {

			row.calcHeight();
		});

		rows.forEach(function (row) {

			row.setCellHeight();
		});

		rows.length = 0;
	};

	//normalize height of active rows

	RowManager.prototype.normalizeHeight = function () {

		this.activeRows.forEach(function (row) {

			row.normalizeHeight();
		});
	};

	//adjust the height of the table holder to fit in the Tabulator element

	RowManager.prototype.adjustTableSize = function () {

		if (this.renderMode === "virtual") {

			this.height = this.element.clientHeight;

			this.vDomWindowBuffer = this.table.options.virtualDomBuffer || this.height;

			var otherHeight = this.columnManager.getElement().offsetHeight + (this.table.footerManager && !this.table.footerManager.external ? this.table.footerManager.getElement().offsetHeight : 0);

			this.element.style.minHeight = "calc(100% - " + otherHeight + "px)";

			this.element.style.height = "calc(100% - " + otherHeight + "px)";

			this.element.style.maxHeight = "calc(100% - " + otherHeight + "px)";
		}
	};

	//renitialize all rows

	RowManager.prototype.reinitialize = function () {

		this.rows.forEach(function (row) {

			row.reinitialize();
		});
	};

	//redraw table

	RowManager.prototype.redraw = function (force) {

		var pos = 0,
		    left = this.scrollLeft;

		this.adjustTableSize();

		if (!force) {

			if (self.renderMode == "classic") {

				if (self.table.options.groupBy) {

					self.refreshActiveData("group", false, false);
				} else {

					this._simpleRender();
				}
			} else {

				this.reRenderInPosition();

				this.scrollHorizontal(left);
			}

			if (!this.displayRowsCount) {

				if (this.table.options.placeholder) {

					this.getElement().appendChild(this.table.options.placeholder);
				}
			}
		} else {

			this.renderTable();
		}
	};

	RowManager.prototype.resetScroll = function () {

		this.element.scrollLeft = 0;

		this.element.scrollTop = 0;

		if (this.table.browser === "ie") {

			var event = document.createEvent("Event");

			event.initEvent("scroll", false, true);

			this.element.dispatchEvent(event);
		} else {

			this.element.dispatchEvent(new Event('scroll'));
		}
	};

	//public row object

	var RowComponent = function RowComponent(row) {

		this._row = row;
	};

	RowComponent.prototype.getData = function (transform) {

		return this._row.getData(transform);
	};

	RowComponent.prototype.getElement = function () {

		return this._row.getElement();
	};

	RowComponent.prototype.getCells = function () {

		var cells = [];

		this._row.getCells().forEach(function (cell) {

			cells.push(cell.getComponent());
		});

		return cells;
	};

	RowComponent.prototype.getCell = function (column) {

		var cell = this._row.getCell(column);

		return cell ? cell.getComponent() : false;
	};

	RowComponent.prototype.getIndex = function () {

		return this._row.getData("data")[this._row.table.options.index];
	};

	RowComponent.prototype.getPosition = function (active) {

		return this._row.table.rowManager.getRowPosition(this._row, active);
	};

	RowComponent.prototype.delete = function () {

		return this._row.delete();
	};

	RowComponent.prototype.scrollTo = function () {

		return this._row.table.rowManager.scrollToRow(this._row);
	};

	RowComponent.prototype.update = function (data) {

		return this._row.updateData(data);
	};

	RowComponent.prototype.normalizeHeight = function () {

		this._row.normalizeHeight(true);
	};

	RowComponent.prototype.select = function () {

		this._row.table.modules.selectRow.selectRows(this._row);
	};

	RowComponent.prototype.deselect = function () {

		this._row.table.modules.selectRow.deselectRows(this._row);
	};

	RowComponent.prototype.toggleSelect = function () {

		this._row.table.modules.selectRow.toggleRow(this._row);
	};

	RowComponent.prototype.isSelected = function () {

		return this._row.table.modules.selectRow.isRowSelected(this._row);
	};

	RowComponent.prototype._getSelf = function () {

		return this._row;
	};

	RowComponent.prototype.freeze = function () {

		if (this._row.table.modExists("frozenRows", true)) {

			this._row.table.modules.frozenRows.freezeRow(this._row);
		}
	};

	RowComponent.prototype.unfreeze = function () {

		if (this._row.table.modExists("frozenRows", true)) {

			this._row.table.modules.frozenRows.unfreezeRow(this._row);
		}
	};

	RowComponent.prototype.treeCollapse = function () {

		if (this._row.table.modExists("dataTree", true)) {

			this._row.table.modules.dataTree.collapseRow(this._row);
		}
	};

	RowComponent.prototype.treeExpand = function () {

		if (this._row.table.modExists("dataTree", true)) {

			this._row.table.modules.dataTree.expandRow(this._row);
		}
	};

	RowComponent.prototype.treeToggle = function () {

		if (this._row.table.modExists("dataTree", true)) {

			this._row.table.modules.dataTree.toggleRow(this._row);
		}
	};

	RowComponent.prototype.getTreeParent = function () {

		if (this._row.table.modExists("dataTree", true)) {

			return this._row.table.modules.dataTree.getTreeParent(this._row);
		}

		return false;
	};

	RowComponent.prototype.getTreeChildren = function () {

		if (this._row.table.modExists("dataTree", true)) {

			return this._row.table.modules.dataTree.getTreeChildren(this._row);
		}

		return false;
	};

	RowComponent.prototype.reformat = function () {

		return this._row.reinitialize();
	};

	RowComponent.prototype.getGroup = function () {

		return this._row.getGroup().getComponent();
	};

	RowComponent.prototype.getTable = function () {

		return this._row.table;
	};

	RowComponent.prototype.getNextRow = function () {

		return this._row.nextRow();
	};

	RowComponent.prototype.getPrevRow = function () {

		return this._row.prevRow();
	};

	var Row = function Row(data, parent) {

		this.table = parent.table;

		this.parent = parent;

		this.data = {};

		this.type = "row"; //type of element

		this.element = this.createElement();

		this.modules = {}; //hold module variables;

		this.cells = [];

		this.height = 0; //hold element height

		this.outerHeight = 0; //holde lements outer height

		this.initialized = false; //element has been rendered

		this.heightInitialized = false; //element has resized cells to fit


		this.setData(data);

		this.generateElement();
	};

	Row.prototype.createElement = function () {

		var el = document.createElement("div");

		el.classList.add("tabulator-row");

		el.setAttribute("role", "row");

		return el;
	};

	Row.prototype.getElement = function () {

		return this.element;
	};

	Row.prototype.generateElement = function () {

		var self = this,
		    dblTap,
		    tapHold,
		    tap;

		//set row selection characteristics

		if (self.table.options.selectable !== false && self.table.modExists("selectRow")) {

			self.table.modules.selectRow.initializeRow(this);
		}

		//setup movable rows

		if (self.table.options.movableRows !== false && self.table.modExists("moveRow")) {

			self.table.modules.moveRow.initializeRow(this);
		}

		//setup data tree

		if (self.table.options.dataTree !== false && self.table.modExists("dataTree")) {

			self.table.modules.dataTree.initializeRow(this);
		}

		//handle row click events

		if (self.table.options.rowClick) {

			self.element.addEventListener("click", function (e) {

				self.table.options.rowClick(e, self.getComponent());
			});
		}

		if (self.table.options.rowDblClick) {

			self.element.addEventListener("dblclick", function (e) {

				self.table.options.rowDblClick(e, self.getComponent());
			});
		}

		if (self.table.options.rowContext) {

			self.element.addEventListener("contextmenu", function (e) {

				self.table.options.rowContext(e, self.getComponent());
			});
		}

		if (self.table.options.rowTap) {

			tap = false;

			self.element.addEventListener("touchstart", function (e) {

				tap = true;
			});

			self.element.addEventListener("touchend", function (e) {

				if (tap) {

					self.table.options.rowTap(e, self.getComponent());
				}

				tap = false;
			});
		}

		if (self.table.options.rowDblTap) {

			dblTap = null;

			self.element.addEventListener("touchend", function (e) {

				if (dblTap) {

					clearTimeout(dblTap);

					dblTap = null;

					self.table.options.rowDblTap(e, self.getComponent());
				} else {

					dblTap = setTimeout(function () {

						clearTimeout(dblTap);

						dblTap = null;
					}, 300);
				}
			});
		}

		if (self.table.options.rowTapHold) {

			tapHold = null;

			self.element.addEventListener("touchstart", function (e) {

				clearTimeout(tapHold);

				tapHold = setTimeout(function () {

					clearTimeout(tapHold);

					tapHold = null;

					tap = false;

					self.table.options.rowTapHold(e, self.getComponent());
				}, 1000);
			});

			self.element.addEventListener("touchend", function (e) {

				clearTimeout(tapHold);

				tapHold = null;
			});
		}
	};

	Row.prototype.generateCells = function () {

		this.cells = this.table.columnManager.generateCells(this);
	};

	//functions to setup on first render

	Row.prototype.initialize = function (force) {

		var self = this;

		if (!self.initialized || force) {

			self.deleteCells();

			while (self.element.firstChild) {
				self.element.removeChild(self.element.firstChild);
			} //handle frozen cells

			if (this.table.modExists("frozenColumns")) {

				this.table.modules.frozenColumns.layoutRow(this);
			}

			this.generateCells();

			self.cells.forEach(function (cell) {

				self.element.appendChild(cell.getElement());

				cell.cellRendered();
			});

			if (force) {

				self.normalizeHeight();
			}

			//setup movable rows

			if (self.table.options.dataTree && self.table.modExists("dataTree")) {

				self.table.modules.dataTree.layoutRow(this);
			}

			//setup movable rows

			if (self.table.options.responsiveLayout === "collapse" && self.table.modExists("responsiveLayout")) {

				self.table.modules.responsiveLayout.layoutRow(this);
			}

			if (self.table.options.rowFormatter) {

				self.table.options.rowFormatter(self.getComponent());
			}

			//set resizable handles

			if (self.table.options.resizableRows && self.table.modExists("resizeRows")) {

				self.table.modules.resizeRows.initializeRow(self);
			}

			self.initialized = true;
		}
	};

	Row.prototype.reinitializeHeight = function () {

		this.heightInitialized = false;

		if (this.element.offsetParent !== null) {

			this.normalizeHeight(true);
		}
	};

	Row.prototype.reinitialize = function () {

		this.initialized = false;

		this.heightInitialized = false;

		this.height = 0;

		if (this.element.offsetParent !== null) {

			this.initialize(true);
		}
	};

	//get heights when doing bulk row style calcs in virtual DOM

	Row.prototype.calcHeight = function () {

		var maxHeight = 0,
		    minHeight = this.table.options.resizableRows ? this.element.clientHeight : 0;

		this.cells.forEach(function (cell) {

			var height = cell.getHeight();

			if (height > maxHeight) {

				maxHeight = height;
			}
		});

		this.height = Math.max(maxHeight, minHeight);

		this.outerHeight = this.element.offsetHeight;
	};

	//set of cells

	Row.prototype.setCellHeight = function () {

		var height = this.height;

		this.cells.forEach(function (cell) {

			cell.setHeight(height);
		});

		this.heightInitialized = true;
	};

	Row.prototype.clearCellHeight = function () {

		this.cells.forEach(function (cell) {

			cell.clearHeight();
		});
	};

	//normalize the height of elements in the row

	Row.prototype.normalizeHeight = function (force) {

		if (force) {

			this.clearCellHeight();
		}

		this.calcHeight();

		this.setCellHeight();
	};

	Row.prototype.setHeight = function (height) {

		this.height = height;

		this.setCellHeight();
	};

	//set height of rows

	Row.prototype.setHeight = function (height, force) {

		if (this.height != height || force) {

			this.height = height;

			this.setCellHeight();

			// this.outerHeight = this.element.outerHeight();

			this.outerHeight = this.element.offsetHeight;
		}
	};

	//return rows outer height

	Row.prototype.getHeight = function () {

		return this.outerHeight;
	};

	//return rows outer Width

	Row.prototype.getWidth = function () {

		return this.element.offsetWidth;
	};

	//////////////// Cell Management /////////////////


	Row.prototype.deleteCell = function (cell) {

		var index = this.cells.indexOf(cell);

		if (index > -1) {

			this.cells.splice(index, 1);
		}
	};

	//////////////// Data Management /////////////////


	Row.prototype.setData = function (data) {

		var self = this;

		if (self.table.modExists("mutator")) {

			self.data = self.table.modules.mutator.transformRow(data, "data");
		} else {

			self.data = data;
		}
	};

	//update the rows data

	Row.prototype.updateData = function (data) {
		var _this5 = this;

		var self = this;

		return new Promise(function (resolve, reject) {

			if (typeof data === "string") {

				data = JSON.parse(data);
			}

			//mutate incomming data if needed

			if (self.table.modExists("mutator")) {

				data = self.table.modules.mutator.transformRow(data, "data", true);
			}

			//set data

			for (var attrname in data) {

				self.data[attrname] = data[attrname];
			}

			//update affected cells only

			for (var attrname in data) {

				var cell = _this5.getCell(attrname);

				if (cell) {

					if (cell.getValue() != data[attrname]) {

						cell.setValueProcessData(data[attrname]);
					}
				}
			}

			//Partial reinitialization if visible

			if (Tabulator.prototype.helpers.elVisible(_this5.element)) {

				self.normalizeHeight();

				if (self.table.options.rowFormatter) {

					self.table.options.rowFormatter(self.getComponent());
				}
			} else {

				_this5.initialized = false;

				_this5.height = 0;
			}

			//self.reinitialize();


			self.table.options.rowUpdated.call(_this5.table, self.getComponent());

			resolve();
		});
	};

	Row.prototype.getData = function (transform) {

		var self = this;

		if (transform) {

			if (self.table.modExists("accessor")) {

				return self.table.modules.accessor.transformRow(self.data, transform);
			}
		} else {

			return this.data;
		}
	};

	Row.prototype.getCell = function (column) {

		var match = false;

		column = this.table.columnManager.findColumn(column);

		match = this.cells.find(function (cell) {

			return cell.column === column;
		});

		return match;
	};

	Row.prototype.getCellIndex = function (findCell) {

		return this.cells.findIndex(function (cell) {

			return cell === findCell;
		});
	};

	Row.prototype.findNextEditableCell = function (index) {

		var nextCell = false;

		if (index < this.cells.length - 1) {

			for (var i = index + 1; i < this.cells.length; i++) {

				var cell = this.cells[i];

				if (cell.column.modules.edit && Tabulator.prototype.helpers.elVisible(cell.getElement())) {

					var allowEdit = true;

					if (typeof cell.column.modules.edit.check == "function") {

						allowEdit = cell.column.modules.edit.check(cell.getComponent());
					}

					if (allowEdit) {

						nextCell = cell;

						break;
					}
				}
			}
		}

		return nextCell;
	};

	Row.prototype.findPrevEditableCell = function (index) {

		var prevCell = false;

		if (index > 0) {

			for (var i = index - 1; i >= 0; i--) {

				var cell = this.cells[i],
				    allowEdit = true;

				if (cell.column.modules.edit && Tabulator.prototype.helpers.elVisible(cell.getElement())) {

					if (typeof cell.column.modules.edit.check == "function") {

						allowEdit = cell.column.modules.edit.check(cell.getComponent());
					}

					if (allowEdit) {

						prevCell = cell;

						break;
					}
				}
			}
		}

		return prevCell;
	};

	Row.prototype.getCells = function () {

		return this.cells;
	};

	Row.prototype.nextRow = function () {

		var row = this.table.rowManager.nextDisplayRow(this, true);

		return row ? row.getComponent() : false;
	};

	Row.prototype.prevRow = function () {

		var row = this.table.rowManager.prevDisplayRow(this, true);

		return row ? row.getComponent() : false;
	};

	///////////////////// Actions  /////////////////////


	Row.prototype.delete = function () {
		var _this6 = this;

		return new Promise(function (resolve, reject) {

			var index = _this6.table.rowManager.getRowIndex(_this6);

			_this6.deleteActual();

			if (_this6.table.options.history && _this6.table.modExists("history")) {

				if (index) {

					index = _this6.table.rowManager.rows[index - 1];
				}

				_this6.table.modules.history.action("rowDelete", _this6, { data: _this6.getData(), pos: !index, index: index });
			}

			resolve();
		});
	};

	Row.prototype.deleteActual = function () {

		var index = this.table.rowManager.getRowIndex(this);

		//deselect row if it is selected

		if (this.table.modExists("selectRow")) {

			this.table.modules.selectRow._deselectRow(this, true);
		}

		// if(this.table.options.dataTree && this.table.modExists("dataTree")){

		// 	this.table.modules.dataTree.collapseRow(this, true);

		// }


		this.table.rowManager.deleteRow(this);

		this.deleteCells();

		this.initialized = false;

		this.heightInitialized = false;

		//remove from group

		if (this.modules.group) {

			this.modules.group.removeRow(this);
		}

		//recalc column calculations if present

		if (this.table.modExists("columnCalcs")) {

			if (this.table.options.groupBy && this.table.modExists("groupRows")) {

				this.table.modules.columnCalcs.recalcRowGroup(this);
			} else {

				this.table.modules.columnCalcs.recalc(this.table.rowManager.activeRows);
			}
		}
	};

	Row.prototype.deleteCells = function () {

		var cellCount = this.cells.length;

		for (var i = 0; i < cellCount; i++) {

			this.cells[0].delete();
		}
	};

	Row.prototype.wipe = function () {

		this.deleteCells();

		// this.element.children().each(function(){

		// 	$(this).remove();

		// })

		// this.element.empty();


		while (this.element.firstChild) {
			this.element.removeChild(this.element.firstChild);
		} // this.element.remove();

		if (this.element.parentNode) {

			this.element.parentNode.removeChild(this.element);
		}
	};

	Row.prototype.getGroup = function () {

		return this.modules.group || false;
	};

	//////////////// Object Generation /////////////////

	Row.prototype.getComponent = function () {

		return new RowComponent(this);
	};

	//public row object

	var CellComponent = function CellComponent(cell) {

		this._cell = cell;
	};

	CellComponent.prototype.getValue = function () {

		return this._cell.getValue();
	};

	CellComponent.prototype.getOldValue = function () {

		return this._cell.getOldValue();
	};

	CellComponent.prototype.getElement = function () {

		return this._cell.getElement();
	};

	CellComponent.prototype.getRow = function () {

		return this._cell.row.getComponent();
	};

	CellComponent.prototype.getData = function () {

		return this._cell.row.getData();
	};

	CellComponent.prototype.getField = function () {

		return this._cell.column.getField();
	};

	CellComponent.prototype.getColumn = function () {

		return this._cell.column.getComponent();
	};

	CellComponent.prototype.setValue = function (value, mutate) {

		if (typeof mutate == "undefined") {

			mutate = true;
		}

		this._cell.setValue(value, mutate);
	};

	CellComponent.prototype.restoreOldValue = function () {

		this._cell.setValueActual(this._cell.getOldValue());
	};

	CellComponent.prototype.edit = function (force) {

		return this._cell.edit(force);
	};

	CellComponent.prototype.cancelEdit = function () {

		this._cell.cancelEdit();
	};

	CellComponent.prototype.nav = function () {

		return this._cell.nav();
	};

	CellComponent.prototype.checkHeight = function () {

		this._cell.checkHeight();
	};

	CellComponent.prototype.getTable = function () {

		return this._cell.table;
	};

	CellComponent.prototype._getSelf = function () {

		return this._cell;
	};

	var Cell = function Cell(column, row) {

		this.table = column.table;

		this.column = column;

		this.row = row;

		this.element = null;

		this.value = null;

		this.oldValue = null;

		this.height = null;

		this.width = null;

		this.minWidth = null;

		this.build();
	};

	//////////////// Setup Functions /////////////////


	//generate element

	Cell.prototype.build = function () {

		this.generateElement();

		this.setWidth(this.column.width);

		this._configureCell();

		this.setValueActual(this.column.getFieldValue(this.row.data));
	};

	Cell.prototype.generateElement = function () {

		this.element = document.createElement('div');

		this.element.className = "tabulator-cell";

		this.element.setAttribute("role", "gridcell");

		this.element = this.element;
	};

	Cell.prototype._configureCell = function () {

		var self = this,
		    cellEvents = self.column.cellEvents,
		    element = self.element,
		    field = this.column.getField(),
		    dblTap,
		    tapHold,
		    tap;

		//set text alignment

		element.style.textAlign = self.column.hozAlign;

		if (field) {

			element.setAttribute("tabulator-field", field);
		}

		if (self.column.definition.cssClass) {

			element.classList.add(self.column.definition.cssClass);
		}

		//set event bindings

		if (cellEvents.cellClick || self.table.options.cellClick) {

			self.element.addEventListener("click", function (e) {

				var component = self.getComponent();

				if (cellEvents.cellClick) {

					cellEvents.cellClick.call(self.table, e, component);
				}

				if (self.table.options.cellClick) {

					self.table.options.cellClick.call(self.table, e, component);
				}
			});
		}

		if (cellEvents.cellDblClick || this.table.options.cellDblClick) {

			element.addEventListener("dblclick", function (e) {

				var component = self.getComponent();

				if (cellEvents.cellDblClick) {

					cellEvents.cellDblClick.call(self.table, e, component);
				}

				if (self.table.options.cellDblClick) {

					self.table.options.cellDblClick.call(self.table, e, component);
				}
			});
		}

		if (cellEvents.cellContext || this.table.options.cellContext) {

			element.addEventListener("contextmenu", function (e) {

				var component = self.getComponent();

				if (cellEvents.cellContext) {

					cellEvents.cellContext.call(self.table, e, component);
				}

				if (self.table.options.cellContext) {

					self.table.options.cellContext.call(self.table, e, component);
				}
			});
		}

		if (this.table.options.tooltipGenerationMode === "hover") {

			//update tooltip on mouse enter

			element.addEventListener("mouseenter", function (e) {

				self._generateTooltip();
			});
		}

		if (cellEvents.cellTap || this.table.options.cellTap) {

			tap = false;

			element.addEventListener("touchstart", function (e) {

				tap = true;
			});

			element.addEventListener("touchend", function (e) {

				if (tap) {

					var component = self.getComponent();

					if (cellEvents.cellTap) {

						cellEvents.cellTap.call(self.table, e, component);
					}

					if (self.table.options.cellTap) {

						self.table.options.cellTap.call(self.table, e, component);
					}
				}

				tap = false;
			});
		}

		if (cellEvents.cellDblTap || this.table.options.cellDblTap) {

			dblTap = null;

			element.addEventListener("touchend", function (e) {

				if (dblTap) {

					clearTimeout(dblTap);

					dblTap = null;

					var component = self.getComponent();

					if (cellEvents.cellDblTap) {

						cellEvents.cellDblTap.call(self.table, e, component);
					}

					if (self.table.options.cellDblTap) {

						self.table.options.cellDblTap.call(self.table, e, component);
					}
				} else {

					dblTap = setTimeout(function () {

						clearTimeout(dblTap);

						dblTap = null;
					}, 300);
				}
			});
		}

		if (cellEvents.cellTapHold || this.table.options.cellTapHold) {

			tapHold = null;

			element.addEventListener("touchstart", function (e) {

				clearTimeout(tapHold);

				tapHold = setTimeout(function () {

					clearTimeout(tapHold);

					tapHold = null;

					tap = false;

					var component = self.getComponent();

					if (cellEvents.cellTapHold) {

						cellEvents.cellTapHold.call(self.table, e, component);
					}

					if (self.table.options.cellTapHold) {

						self.table.options.cellTapHold.call(self.table, e, component);
					}
				}, 1000);
			});

			element.addEventListener("touchend", function (e) {

				clearTimeout(tapHold);

				tapHold = null;
			});
		}

		if (self.column.modules.edit) {

			self.table.modules.edit.bindEditor(self);
		}

		if (self.column.definition.rowHandle && self.table.options.movableRows !== false && self.table.modExists("moveRow")) {

			self.table.modules.moveRow.initializeCell(self);
		}

		//hide cell if not visible

		if (!self.column.visible) {

			self.hide();
		}
	};

	//generate cell contents

	Cell.prototype._generateContents = function () {

		var val;

		if (this.table.modExists("format")) {

			val = this.table.modules.format.formatValue(this);
		} else {

			val = this.element.innerHTML = this.value;
		}

		switch (typeof val === 'undefined' ? 'undefined' : _typeof(val)) {

			case "object":

				if (val instanceof Node) {

					this.element.appendChild(val);
				} else {

					this.element.innerHTML = "";

					console.warn("Format Error - Formatter has returned a type of object, the only valid formatter object return is an instance of Node, the formatter returned:", val);
				}

				break;

			case "undefined":

			case "null":

				this.element.innerHTML = "";

				break;

			default:

				this.element.innerHTML = val;

		}
	};

	Cell.prototype.cellRendered = function () {

		if (this.table.modExists("format") && this.table.modules.format.cellRendered) {

			this.table.modules.format.cellRendered(this);
		}
	};

	//generate tooltip text

	Cell.prototype._generateTooltip = function () {

		var tooltip = this.column.tooltip;

		if (tooltip) {

			if (tooltip === true) {

				tooltip = this.value;
			} else if (typeof tooltip == "function") {

				tooltip = tooltip(this.getComponent());

				if (tooltip === false) {

					tooltip = "";
				}
			}

			if (typeof tooltip === "undefined") {

				tooltip = "";
			}

			this.element.setAttribute("title", tooltip);
		} else {

			this.element.setAttribute("title", "");
		}
	};

	//////////////////// Getters ////////////////////

	Cell.prototype.getElement = function () {

		return this.element;
	};

	Cell.prototype.getValue = function () {

		return this.value;
	};

	Cell.prototype.getOldValue = function () {

		return this.oldValue;
	};

	//////////////////// Actions ////////////////////


	Cell.prototype.setValue = function (value, mutate) {

		var changed = this.setValueProcessData(value, mutate),
		    component;

		if (changed) {

			if (this.table.options.history && this.table.modExists("history")) {

				this.table.modules.history.action("cellEdit", this, { oldValue: this.oldValue, newValue: this.value });
			}

			component = this.getComponent();

			if (this.column.cellEvents.cellEdited) {

				this.column.cellEvents.cellEdited.call(this.table, component);
			}

			this.table.options.cellEdited.call(this.table, component);

			this.table.options.dataEdited.call(this.table, this.table.rowManager.getData());
		}

		if (this.table.modExists("columnCalcs")) {

			if (this.column.definition.topCalc || this.column.definition.bottomCalc) {

				if (this.table.options.groupBy && this.table.modExists("groupRows")) {

					this.table.modules.columnCalcs.recalcRowGroup(this.row);
				} else {

					this.table.modules.columnCalcs.recalc(this.table.rowManager.activeRows);
				}
			}
		}
	};

	Cell.prototype.setValueProcessData = function (value, mutate) {

		var changed = false;

		if (this.value != value) {

			changed = true;

			if (mutate) {

				if (this.column.modules.mutate) {

					value = this.table.modules.mutator.transformCell(this, value);
				}
			}
		}

		this.setValueActual(value);

		return changed;
	};

	Cell.prototype.setValueActual = function (value) {

		this.oldValue = this.value;

		this.value = value;

		this.column.setFieldValue(this.row.data, value);

		this._generateContents();

		this._generateTooltip();

		//set resizable handles

		if (this.table.options.resizableColumns && this.table.modExists("resizeColumns")) {

			this.table.modules.resizeColumns.initializeColumn("cell", this.column, this.element);
		}

		//handle frozen cells

		if (this.table.modExists("frozenColumns")) {

			this.table.modules.frozenColumns.layoutElement(this.element, this.column);
		}
	};

	Cell.prototype.setWidth = function (width) {

		this.width = width;

		// this.element.css("width", width || "");

		this.element.style.width = width ? width + "px" : "";
	};

	Cell.prototype.getWidth = function () {

		return this.width || this.element.offsetWidth;
	};

	Cell.prototype.setMinWidth = function (minWidth) {

		this.minWidth = minWidth;

		this.element.style.minWidth = minWidth ? minWidth + "px" : "";
	};

	Cell.prototype.checkHeight = function () {

		// var height = this.element.css("height");


		this.row.reinitializeHeight();
	};

	Cell.prototype.clearHeight = function () {

		this.element.style.height = "";

		this.height = null;
	};

	Cell.prototype.setHeight = function (height) {

		this.height = height;

		this.element.style.height = height ? height + "px" : "";
	};

	Cell.prototype.getHeight = function () {

		return this.height || this.element.offsetHeight;
	};

	Cell.prototype.show = function () {

		this.element.style.display = "";
	};

	Cell.prototype.hide = function () {

		this.element.style.display = "none";
	};

	Cell.prototype.edit = function (force) {

		if (this.table.modExists("edit", true)) {

			return this.table.modules.edit.editCell(this, force);
		}
	};

	Cell.prototype.cancelEdit = function () {

		if (this.table.modExists("edit", true)) {

			var editing = this.table.modules.edit.getCurrentCell();

			if (editing && editing._getSelf() === this) {

				this.table.modules.edit.cancelEdit();
			} else {

				console.warn("Cancel Editor Error - This cell is not currently being edited ");
			}
		}
	};

	Cell.prototype.delete = function () {

		this.element.parentNode.removeChild(this.element);

		this.column.deleteCell(this);

		this.row.deleteCell(this);
	};

	//////////////// Navigation /////////////////


	Cell.prototype.nav = function () {

		var self = this,
		    nextCell = false,
		    index = this.row.getCellIndex(this);

		return {

			next: function next() {

				var nextCell = this.right(),
				    nextRow;

				if (!nextCell) {

					nextRow = self.table.rowManager.nextDisplayRow(self.row, true);

					if (nextRow) {

						nextCell = nextRow.findNextEditableCell(-1);

						if (nextCell) {

							nextCell.edit();

							return true;
						}
					}
				} else {

					return true;
				}

				return false;
			},

			prev: function prev() {

				var nextCell = this.left(),
				    prevRow;

				if (!nextCell) {

					prevRow = self.table.rowManager.prevDisplayRow(self.row, true);

					if (prevRow) {

						nextCell = prevRow.findPrevEditableCell(prevRow.cells.length);

						if (nextCell) {

							nextCell.edit();

							return true;
						}
					}
				} else {

					return true;
				}

				return false;
			},

			left: function left() {

				nextCell = self.row.findPrevEditableCell(index);

				if (nextCell) {

					nextCell.edit();

					return true;
				} else {

					return false;
				}
			},

			right: function right() {

				nextCell = self.row.findNextEditableCell(index);

				if (nextCell) {

					nextCell.edit();

					return true;
				} else {

					return false;
				}
			},

			up: function up() {

				var nextRow = self.table.rowManager.prevDisplayRow(self.row, true);

				if (nextRow) {

					nextRow.cells[index].edit();
				}
			},

			down: function down() {

				var nextRow = self.table.rowManager.nextDisplayRow(self.row, true);

				if (nextRow) {

					nextRow.cells[index].edit();
				}
			}

		};
	};

	Cell.prototype.getIndex = function () {

		this.row.getCellIndex(this);
	};

	//////////////// Object Generation /////////////////

	Cell.prototype.getComponent = function () {

		return new CellComponent(this);
	};

	var FooterManager = function FooterManager(table) {

		this.table = table;

		this.active = false;

		this.element = this.createElement(); //containing element

		this.external = false;

		this.links = [];

		this._initialize();
	};

	FooterManager.prototype.createElement = function () {

		var el = document.createElement("div");

		el.classList.add("tabulator-footer");

		return el;
	};

	FooterManager.prototype._initialize = function (element) {

		if (this.table.options.footerElement) {

			switch (_typeof(this.table.options.footerElement)) {

				case "string":

					if (this.table.options.footerElement[0] === "<") {

						this.element.innerHTML = this.table.options.footerElement;
					} else {

						this.external = true;

						this.element = document.querySelector(this.table.options.footerElement);
					}

					break;

				default:

					this.element = this.table.options.footerElement;

					break;

			}
		}
	};

	FooterManager.prototype.getElement = function () {

		return this.element;
	};

	FooterManager.prototype.append = function (element, parent) {

		this.activate(parent);

		this.element.appendChild(element);

		this.table.rowManager.adjustTableSize();
	};

	FooterManager.prototype.prepend = function (element, parent) {

		this.activate(parent);

		this.element.insertBefore(element, this.element.firstChild);

		this.table.rowManager.adjustTableSize();
	};

	FooterManager.prototype.remove = function (element) {

		element.parentNode.removeChild(element);

		this.deactivate();
	};

	FooterManager.prototype.deactivate = function (force) {

		if (!this.element.firstChild || force) {

			if (!this.external) {

				this.element.parentNode.removeChild(this.element);
			}

			this.active = false;
		}

		// this.table.rowManager.adjustTableSize();
	};

	FooterManager.prototype.activate = function (parent) {

		if (!this.active) {

			this.active = true;

			if (!this.external) {

				this.table.element.appendChild(this.getElement());

				this.table.element.style.display = '';
			}
		}

		if (parent) {

			this.links.push(parent);
		}
	};

	FooterManager.prototype.redraw = function () {

		this.links.forEach(function (link) {

			link.footerRedraw();
		});
	};

	var Tabulator = function Tabulator(element, options) {

		this.options = {};

		this.columnManager = null; // hold Column Manager

		this.rowManager = null; //hold Row Manager

		this.footerManager = null; //holder Footer Manager

		this.browser = ""; //hold current browser type

		this.browserSlow = false; //handle reduced functionality for slower browsers


		this.modules = {}; //hold all modules bound to this table


		this.initializeElement(element);

		this.initializeOptions(options || {});

		this._create();

		Tabulator.prototype.comms.register(this); //register table for inderdevice communication
	};

	//default setup options

	Tabulator.prototype.defaultOptions = {

		height: false, //height of tabulator


		layout: "fitData", ///layout type "fitColumns" | "fitData"

		layoutColumnsOnNewData: false, //update column widths on setData


		columnMinWidth: 40, //minimum global width for a column

		columnVertAlign: "top", //vertical alignment of column headers


		resizableColumns: true, //resizable columns

		resizableRows: false, //resizable rows

		autoResize: true, //auto resize table


		columns: [], //store for colum header info


		data: [], //default starting data


		nestedFieldSeparator: ".", //seperatpr for nested data


		tooltips: false, //Tool tip value

		tooltipsHeader: false, //Tool tip for headers

		tooltipGenerationMode: "load", //when to generate tooltips


		initialSort: false, //initial sorting criteria

		initialFilter: false, //initial filtering criteria


		columnHeaderSortMulti: true, //multiple or single column sorting


		sortOrderReverse: false, //reverse internal sort ordering


		footerElement: false, //hold footer element


		index: "id", //filed for row index


		keybindings: [], //array for keybindings


		clipboard: false, //enable clipboard

		clipboardCopyStyled: true, //formatted table data

		clipboardCopySelector: "active", //method of chosing which data is coppied to the clipboard

		clipboardCopyFormatter: "table", //convert data to a clipboard string

		clipboardPasteParser: "table", //convert pasted clipboard data to rows

		clipboardPasteAction: "insert", //how to insert pasted data into the table

		clipboardCopyConfig: false, //clipboard config


		clipboardCopied: function clipboardCopied() {}, //data has been copied to the clipboard

		clipboardPasted: function clipboardPasted() {}, //data has been pasted into the table

		clipboardPasteError: function clipboardPasteError() {}, //data has not successfully been pasted into the table


		downloadDataFormatter: false, //function to manipulate table data before it is downloaded

		downloadReady: function downloadReady(data, blob) {
			return blob;
		}, //function to manipulate download data

		downloadComplete: false, //function to manipulate download data

		downloadConfig: false, //download config


		dataTree: false, //enable data tree

		dataTreeBranchElement: true, //show data tree branch element

		dataTreeChildIndent: 9, //data tree child indent in px

		dataTreeChildField: "_children", //data tre column field to look for child rows

		dataTreeCollapseElement: false, //data tree row collapse element

		dataTreeExpandElement: false, //data tree row expand element

		dataTreeStartExpanded: false,

		dataTreeRowExpanded: function dataTreeRowExpanded() {}, //row has been expanded

		dataTreeRowCollapsed: function dataTreeRowCollapsed() {}, //row has been collapsed


		addRowPos: "bottom", //position to insert blank rows, top|bottom


		selectable: "highlight", //highlight rows on hover

		selectableRangeType: "drag", //highlight rows on hover

		selectableRollingSelection: true, //roll selection once maximum number of selectable rows is reached

		selectablePersistence: true, // maintain selection when table view is updated

		selectableCheck: function selectableCheck(data, row) {
			return true;
		}, //check wheather row is selectable


		headerFilterPlaceholder: false, //placeholder text to display in header filters


		history: false, //enable edit history


		locale: false, //current system language

		langs: {},

		virtualDom: true, //enable DOM virtualization


		persistentLayout: false, //store column layout in memory

		persistentSort: false, //store sorting in memory

		persistentFilter: false, //store filters in memory

		persistenceID: "", //key for persistent storage

		persistenceMode: true, //mode for storing persistence information


		responsiveLayout: false, //responsive layout flags

		responsiveLayoutCollapseStartOpen: true, //start showing collapsed data

		responsiveLayoutCollapseUseFormatters: true, //responsive layout collapse formatter

		responsiveLayoutCollapseFormatter: false, //responsive layout collapse formatter


		pagination: false, //set pagination type

		paginationSize: false, //set number of rows to a page

		paginationButtonCount: 5, // set count of page button

		paginationElement: false, //element to hold pagination numbers

		paginationDataSent: {}, //pagination data sent to the server

		paginationDataReceived: {}, //pagination data received from the server

		paginationAddRow: "page", //add rows on table or page


		ajaxURL: false, //url for ajax loading

		ajaxURLGenerator: false,

		ajaxParams: {}, //params for ajax loading

		ajaxConfig: "get", //ajax request type

		ajaxContentType: "form", //ajax request type

		ajaxRequestFunc: false, //promise function

		ajaxLoader: true, //show loader

		ajaxLoaderLoading: false, //loader element

		ajaxLoaderError: false, //loader element

		ajaxFiltering: false,

		ajaxSorting: false,

		ajaxProgressiveLoad: false, //progressive loading

		ajaxProgressiveLoadDelay: 0, //delay between requests

		ajaxProgressiveLoadScrollMargin: 0, //margin before scroll begins


		groupBy: false, //enable table grouping and set field to group by

		groupStartOpen: true, //starting state of group

		groupValues: false,

		groupHeader: false, //header generation function


		movableColumns: false, //enable movable columns


		movableRows: false, //enable movable rows

		movableRowsConnectedTables: false, //tables for movable rows to be connected to

		movableRowsSender: false,

		movableRowsReceiver: "insert",

		movableRowsSendingStart: function movableRowsSendingStart() {},

		movableRowsSent: function movableRowsSent() {},

		movableRowsSentFailed: function movableRowsSentFailed() {},

		movableRowsSendingStop: function movableRowsSendingStop() {},

		movableRowsReceivingStart: function movableRowsReceivingStart() {},

		movableRowsReceived: function movableRowsReceived() {},

		movableRowsReceivedFailed: function movableRowsReceivedFailed() {},

		movableRowsReceivingStop: function movableRowsReceivingStop() {},

		scrollToRowPosition: "top",

		scrollToRowIfVisible: true,

		scrollToColumnPosition: "left",

		scrollToColumnIfVisible: true,

		rowFormatter: false,

		placeholder: false,

		//table building callbacks

		tableBuilding: function tableBuilding() {},

		tableBuilt: function tableBuilt() {},

		//render callbacks

		renderStarted: function renderStarted() {},

		renderComplete: function renderComplete() {},

		//row callbacks

		rowClick: false,

		rowDblClick: false,

		rowContext: false,

		rowTap: false,

		rowDblTap: false,

		rowTapHold: false,

		rowAdded: function rowAdded() {},

		rowDeleted: function rowDeleted() {},

		rowMoved: function rowMoved() {},

		rowUpdated: function rowUpdated() {},

		rowSelectionChanged: function rowSelectionChanged() {},

		rowSelected: function rowSelected() {},

		rowDeselected: function rowDeselected() {},

		rowResized: function rowResized() {},

		//cell callbacks

		//row callbacks

		cellClick: false,

		cellDblClick: false,

		cellContext: false,

		cellTap: false,

		cellDblTap: false,

		cellTapHold: false,

		cellEditing: function cellEditing() {},

		cellEdited: function cellEdited() {},

		cellEditCancelled: function cellEditCancelled() {},

		//column callbacks

		columnMoved: false,

		columnResized: function columnResized() {},

		columnTitleChanged: function columnTitleChanged() {},

		columnVisibilityChanged: function columnVisibilityChanged() {},

		//HTML iport callbacks

		htmlImporting: function htmlImporting() {},

		htmlImported: function htmlImported() {},

		//data callbacks

		dataLoading: function dataLoading() {},

		dataLoaded: function dataLoaded() {},

		dataEdited: function dataEdited() {},

		//ajax callbacks

		ajaxRequesting: function ajaxRequesting() {},

		ajaxResponse: false,

		ajaxError: function ajaxError() {},

		//filtering callbacks

		dataFiltering: false,

		dataFiltered: false,

		//sorting callbacks

		dataSorting: function dataSorting() {},

		dataSorted: function dataSorted() {},

		//grouping callbacks

		groupToggleElement: "arrow",

		groupClosedShowCalcs: false,

		dataGrouping: function dataGrouping() {},

		dataGrouped: false,

		groupVisibilityChanged: function groupVisibilityChanged() {},

		groupClick: false,

		groupDblClick: false,

		groupContext: false,

		groupTap: false,

		groupDblTap: false,

		groupTapHold: false,

		columnCalcs: true,

		//pagination callbacks

		pageLoaded: function pageLoaded() {},

		//localization callbacks

		localized: function localized() {},

		//validation has failed

		validationFailed: function validationFailed() {},

		//history callbacks

		historyUndo: function historyUndo() {},

		historyRedo: function historyRedo() {}

	};

	Tabulator.prototype.initializeOptions = function (options) {

		for (var key in this.defaultOptions) {

			if (key in options) {

				this.options[key] = options[key];
			} else {

				if (Array.isArray(this.defaultOptions[key])) {

					this.options[key] = [];
				} else if (_typeof(this.defaultOptions[key]) === "object") {

					this.options[key] = {};
				} else {

					this.options[key] = this.defaultOptions[key];
				}
			}
		}
	};

	Tabulator.prototype.initializeElement = function (element) {

		if (element instanceof HTMLElement) {

			this.element = element;

			return true;
		} else if (typeof element === "string") {

			this.element = document.querySelector(element);

			if (this.element) {

				return true;
			} else {

				console.error("Tabulator Creation Error - no element found matching selector: ", element);

				return false;
			}
		} else {

			console.error("Tabulator Creation Error - Invalid element provided:", element);

			return false;
		}
	};

	//convert depricated functionality to new functions

	Tabulator.prototype._mapDepricatedFunctionality = function () {};

	//concreate table

	Tabulator.prototype._create = function () {

		this._clearObjectPointers();

		this._mapDepricatedFunctionality();

		this.bindModules();

		if (this.element.tagName === "TABLE") {

			if (this.modExists("htmlTableImport", true)) {

				this.modules.htmlTableImport.parseTable();
			}
		}

		this.columnManager = new ColumnManager(this);

		this.rowManager = new RowManager(this);

		this.footerManager = new FooterManager(this);

		this.columnManager.setRowManager(this.rowManager);

		this.rowManager.setColumnManager(this.columnManager);

		this._buildElement();

		this._loadInitialData();
	};

	//clear pointers to objects in default config object

	Tabulator.prototype._clearObjectPointers = function () {

		this.options.columns = this.options.columns.slice(0);

		this.options.data = this.options.data.slice(0);
	};

	//build tabulator element

	Tabulator.prototype._buildElement = function () {

		var element = this.element,
		    mod = this.modules,
		    options = this.options;

		options.tableBuilding.call(this);

		element.classList.add("tabulator");

		element.setAttribute("role", "grid");

		//empty element

		while (element.firstChild) {
			element.removeChild(element.firstChild);
		} //set table height

		if (options.height) {

			options.height = isNaN(options.height) ? options.height : options.height + "px";

			element.style.height = options.height;
		}

		this.rowManager.initialize();

		this._detectBrowser();

		if (this.modExists("layout", true)) {

			mod.layout.initialize(options.layout);
		}

		//set localization

		if (options.headerFilterPlaceholder !== false) {

			mod.localize.setHeaderFilterPlaceholder(options.headerFilterPlaceholder);
		}

		for (var locale in options.langs) {

			mod.localize.installLang(locale, options.langs[locale]);
		}

		mod.localize.setLocale(options.locale);

		//configure placeholder element

		if (typeof options.placeholder == "string") {

			var el = document.createElement("div");

			el.classList.add("tabulator-placeholder");

			var span = document.createElement("span");

			span.innerHTML = options.placeholder;

			el.appendChild(span);

			options.placeholder = el;
		}

		//build table elements

		element.appendChild(this.columnManager.getElement());

		element.appendChild(this.rowManager.getElement());

		if (options.footerElement) {

			this.footerManager.activate();
		}

		if (options.dataTree && this.modExists("dataTree", true)) {

			mod.dataTree.initialize();
		}

		if ((options.persistentLayout || options.persistentSort || options.persistentFilter) && this.modExists("persistence", true)) {

			mod.persistence.initialize(options.persistenceMode, options.persistenceID);
		}

		if (options.persistentLayout && this.modExists("persistence", true)) {

			options.columns = mod.persistence.load("columns", options.columns);
		}

		if (options.movableRows && this.modExists("moveRow")) {

			mod.moveRow.initialize();
		}

		if (this.modExists("columnCalcs")) {

			mod.columnCalcs.initialize();
		}

		this.columnManager.setColumns(options.columns);

		if (this.modExists("frozenRows")) {

			this.modules.frozenRows.initialize();
		}

		if ((options.persistentSort || options.initialSort) && this.modExists("sort", true)) {

			var sorters = [];

			if (options.persistentSort && this.modExists("persistence", true)) {

				sorters = mod.persistence.load("sort");

				if (sorters === false && options.initialSort) {

					sorters = options.initialSort;
				}
			} else if (options.initialSort) {

				sorters = options.initialSort;
			}

			mod.sort.setSort(sorters);
		}

		if ((options.persistentFilter || options.initialFilter) && this.modExists("filter", true)) {

			var filters = [];

			if (options.persistentFilter && this.modExists("persistence", true)) {

				filters = mod.persistence.load("filter");

				if (filters === false && options.initialFilter) {

					filters = options.initialFilter;
				}
			} else if (options.initialFilter) {

				filters = options.initialFilter;
			}

			mod.filter.setFilter(filters);

			// this.setFilter(filters);
		}

		if (this.modExists("ajax")) {

			mod.ajax.initialize();
		}

		if (options.pagination && this.modExists("page", true)) {

			mod.page.initialize();
		}

		if (options.groupBy && this.modExists("groupRows", true)) {

			mod.groupRows.initialize();
		}

		if (this.modExists("keybindings")) {

			mod.keybindings.initialize();
		}

		if (this.modExists("selectRow")) {

			mod.selectRow.clearSelectionData(true);
		}

		if (options.autoResize && this.modExists("resizeTable")) {

			mod.resizeTable.initialize();
		}

		if (this.modExists("clipboard")) {

			mod.clipboard.initialize();
		}

		options.tableBuilt.call(this);
	};

	Tabulator.prototype._loadInitialData = function () {

		var self = this;

		if (self.options.pagination && self.modExists("page")) {

			self.modules.page.reset(true);

			if (self.options.pagination == "local") {

				if (self.options.data.length) {

					self.rowManager.setData(self.options.data);
				} else {

					if ((self.options.ajaxURL || self.options.ajaxURLGenerator) && self.modExists("ajax")) {

						self.modules.ajax.loadData();
					} else {

						self.rowManager.setData(self.options.data);
					}
				}
			} else {

				self.modules.page.setPage(1);
			}
		} else {

			if (self.options.data.length) {

				self.rowManager.setData(self.options.data);
			} else {

				if ((self.options.ajaxURL || self.options.ajaxURLGenerator) && self.modExists("ajax")) {

					self.modules.ajax.loadData();
				} else {

					self.rowManager.setData(self.options.data);
				}
			}
		}
	};

	//deconstructor

	Tabulator.prototype.destroy = function () {

		var element = this.element;

		Tabulator.prototype.comms.deregister(this); //deregister table from inderdevice communication


		//clear row data

		this.rowManager.rows.forEach(function (row) {

			row.wipe();
		});

		this.rowManager.rows = [];

		this.rowManager.activeRows = [];

		this.rowManager.displayRows = [];

		//clear event bindings

		if (this.options.autoResize && this.modExists("resizeTable")) {

			this.modules.resizeTable.clearBindings();
		}

		if (this.modExists("keybindings")) {

			this.modules.keybindings.clearBindings();
		}

		//clear DOM

		while (element.firstChild) {
			element.removeChild(element.firstChild);
		}element.classList.remove("tabulator");
	};

	Tabulator.prototype._detectBrowser = function () {

		var ua = navigator.userAgent;

		if (ua.indexOf("Trident") > -1) {

			this.browser = "ie";

			this.browserSlow = true;
		} else if (ua.indexOf("Edge") > -1) {

			this.browser = "edge";

			this.browserSlow = true;
		} else if (ua.indexOf("Firefox") > -1) {

			this.browser = "firefox";

			this.browserSlow = false;
		} else {

			this.browser = "other";

			this.browserSlow = false;
		}
	};

	////////////////// Data Handling //////////////////


	//load data

	Tabulator.prototype.setData = function (data, params, config) {

		if (this.modExists("ajax")) {

			this.modules.ajax.blockActiveRequest();
		}

		return this._setData(data, params, config);
	};

	Tabulator.prototype._setData = function (data, params, config, inPosition) {

		var self = this;

		if (typeof data === "string") {

			if (data.indexOf("{") == 0 || data.indexOf("[") == 0) {

				//data is a json encoded string

				return self.rowManager.setData(JSON.parse(data), inPosition);
			} else {

				if (self.modExists("ajax", true)) {

					if (params) {

						self.modules.ajax.setParams(params);
					}

					if (config) {

						self.modules.ajax.setConfig(config);
					}

					self.modules.ajax.setUrl(data);

					if (self.options.pagination == "remote" && self.modExists("page", true)) {

						self.modules.page.reset(true);

						return self.modules.page.setPage(1);
					} else {

						//assume data is url, make ajax call to url to get data

						return self.modules.ajax.loadData(inPosition);
					}
				}
			}
		} else {

			if (data) {

				//asume data is already an object

				return self.rowManager.setData(data, inPosition);
			} else {

				//no data provided, check if ajaxURL is present;

				if (self.modExists("ajax") && (self.modules.ajax.getUrl || self.options.ajaxURLGenerator)) {

					if (self.options.pagination == "remote" && self.modExists("page", true)) {

						self.modules.page.reset(true);

						return self.modules.page.setPage(1);
					} else {

						return self.modules.ajax.loadData(inPosition);
					}
				} else {

					//empty data

					return self.rowManager.setData([], inPosition);
				}
			}
		}
	};

	//clear data

	Tabulator.prototype.clearData = function () {

		if (this.modExists("ajax")) {

			this.modules.ajax.blockActiveRequest();
		}

		this.rowManager.clearData();
	};

	//get table data array

	Tabulator.prototype.getData = function (active) {

		return this.rowManager.getData(active);
	};

	//get table data array count

	Tabulator.prototype.getDataCount = function (active) {

		return this.rowManager.getDataCount(active);
	};

	//search for specific row components

	Tabulator.prototype.searchRows = function (field, type, value) {

		if (this.modExists("filter", true)) {

			return this.modules.filter.search("rows", field, type, value);
		}
	};

	//search for specific data

	Tabulator.prototype.searchData = function (field, type, value) {

		if (this.modExists("filter", true)) {

			return this.modules.filter.search("data", field, type, value);
		}
	};

	//get table html

	Tabulator.prototype.getHtml = function (active) {

		return this.rowManager.getHtml(active);
	};

	//retrieve Ajax URL

	Tabulator.prototype.getAjaxUrl = function () {

		if (this.modExists("ajax", true)) {

			return this.modules.ajax.getUrl();
		}
	};

	//replace data, keeping table in position with same sort

	Tabulator.prototype.replaceData = function (data, params, config) {

		if (this.modExists("ajax")) {

			this.modules.ajax.blockActiveRequest();
		}

		return this._setData(data, params, config, true);
	};

	//update table data

	Tabulator.prototype.updateData = function (data) {
		var _this7 = this;

		var self = this;

		var responses = 0;

		return new Promise(function (resolve, reject) {

			if (_this7.modExists("ajax")) {

				_this7.modules.ajax.blockActiveRequest();
			}

			if (typeof data === "string") {

				data = JSON.parse(data);
			}

			if (data) {

				data.forEach(function (item) {

					var row = self.rowManager.findRow(item[self.options.index]);

					if (row) {

						responses++;

						row.updateData(item).then(function () {

							responses--;

							if (!responses) {

								resolve();
							}
						});
					}
				});
			} else {

				console.warn("Update Error - No data provided");

				reject("Update Error - No data provided");
			}
		});
	};

	Tabulator.prototype.addData = function (data, pos, index) {
		var _this8 = this;

		return new Promise(function (resolve, reject) {

			if (_this8.modExists("ajax")) {

				_this8.modules.ajax.blockActiveRequest();
			}

			if (typeof data === "string") {

				data = JSON.parse(data);
			}

			if (data) {

				_this8.rowManager.addRows(data, pos, index).then(function (rows) {

					var output = [];

					rows.forEach(function (row) {

						output.push(row.getComponent());
					});

					resolve(output);
				});
			} else {

				console.warn("Update Error - No data provided");

				reject("Update Error - No data provided");
			}
		});
	};

	//update table data

	Tabulator.prototype.updateOrAddData = function (data) {
		var _this9 = this;

		var self = this,
		    rows = [],
		    responses = 0;

		return new Promise(function (resolve, reject) {

			if (_this9.modExists("ajax")) {

				_this9.modules.ajax.blockActiveRequest();
			}

			if (typeof data === "string") {

				data = JSON.parse(data);
			}

			if (data) {

				data.forEach(function (item) {

					var row = self.rowManager.findRow(item[self.options.index]);

					responses++;

					if (row) {

						row.updateData(item).then(function () {

							responses--;

							rows.push(row.getComponent());

							if (!responses) {

								resolve(rows);
							}
						});
					} else {

						self.rowManager.addRows(item).then(function (newRows) {

							responses--;

							rows.push(newRows[0].getComponent());

							if (!responses) {

								resolve(rows);
							}
						});
					}
				});
			} else {

				console.warn("Update Error - No data provided");

				reject("Update Error - No data provided");
			}
		});
	};

	//get row object

	Tabulator.prototype.getRow = function (index) {

		var row = this.rowManager.findRow(index);

		if (row) {

			return row.getComponent();
		} else {

			console.warn("Find Error - No matching row found:", index);

			return false;
		}
	};

	//get row object

	Tabulator.prototype.getRowFromPosition = function (position, active) {

		var row = this.rowManager.getRowFromPosition(position, active);

		if (row) {

			return row.getComponent();
		} else {

			console.warn("Find Error - No matching row found:", position);

			return false;
		}
	};

	//delete row from table

	Tabulator.prototype.deleteRow = function (index) {
		var _this10 = this;

		return new Promise(function (resolve, reject) {

			var row = _this10.rowManager.findRow(index);

			if (row) {

				row.delete().then(function () {

					resolve();
				}).catch(function (err) {

					reject(err);
				});
			} else {

				console.warn("Delete Error - No matching row found:", index);

				reject("Delete Error - No matching row found");
			}
		});
	};

	//add row to table

	Tabulator.prototype.addRow = function (data, pos, index) {
		var _this11 = this;

		return new Promise(function (resolve, reject) {

			if (typeof data === "string") {

				data = JSON.parse(data);
			}

			_this11.rowManager.addRows(data, pos, index).then(function (rows) {

				//recalc column calculations if present

				if (_this11.modExists("columnCalcs")) {

					_this11.modules.columnCalcs.recalc(_this11.rowManager.activeRows);
				}

				resolve(rows[0].getComponent());
			});
		});
	};

	//update a row if it exitsts otherwise create it

	Tabulator.prototype.updateOrAddRow = function (index, data) {
		var _this12 = this;

		return new Promise(function (resolve, reject) {

			var row = _this12.rowManager.findRow(index);

			if (typeof data === "string") {

				data = JSON.parse(data);
			}

			if (row) {

				row.updateData(data).then(function () {

					//recalc column calculations if present

					if (_this12.modExists("columnCalcs")) {

						_this12.modules.columnCalcs.recalc(_this12.rowManager.activeRows);
					}

					resolve(row.getComponent());
				}).catch(function (err) {

					reject(err);
				});
			} else {

				row = _this12.rowManager.addRows(data).then(function (rows) {

					//recalc column calculations if present

					if (_this12.modExists("columnCalcs")) {

						_this12.modules.columnCalcs.recalc(_this12.rowManager.activeRows);
					}

					resolve(rows[0].getComponent());
				}).catch(function (err) {

					reject(err);
				});
			}
		});
	};

	//update row data

	Tabulator.prototype.updateRow = function (index, data) {
		var _this13 = this;

		return new Promise(function (resolve, reject) {

			var row = _this13.rowManager.findRow(index);

			if (typeof data === "string") {

				data = JSON.parse(data);
			}

			if (row) {

				row.updateData(data).then(function () {

					resolve(row.getComponent());
				}).catch(function (err) {

					reject(err);
				});
			} else {

				console.warn("Update Error - No matching row found:", index);

				reject("Update Error - No matching row found");
			}
		});
	};

	//scroll to row in DOM

	Tabulator.prototype.scrollToRow = function (index, position, ifVisible) {
		var _this14 = this;

		return new Promise(function (resolve, reject) {

			var row = _this14.rowManager.findRow(index);

			if (row) {

				_this14.rowManager.scrollToRow(row, position, ifVisible).then(function () {

					resolve();
				}).catch(function (err) {

					reject(err);
				});
			} else {

				console.warn("Scroll Error - No matching row found:", index);

				reject("Scroll Error - No matching row found");
			}
		});
	};

	Tabulator.prototype.getRows = function (active) {

		return this.rowManager.getComponents(active);
	};

	//get position of row in table

	Tabulator.prototype.getRowPosition = function (index, active) {

		var row = this.rowManager.findRow(index);

		if (row) {

			return this.rowManager.getRowPosition(row, active);
		} else {

			console.warn("Position Error - No matching row found:", index);

			return false;
		}
	};

	//copy table data to clipboard

	Tabulator.prototype.copyToClipboard = function (selector, selectorParams, formatter, formatterParams) {

		if (this.modExists("clipboard", true)) {

			this.modules.clipboard.copy(selector, selectorParams, formatter, formatterParams);
		}
	};

	/////////////// Column Functions  ///////////////


	Tabulator.prototype.setColumns = function (definition) {

		this.columnManager.setColumns(definition);
	};

	Tabulator.prototype.getColumns = function (structured) {

		return this.columnManager.getComponents(structured);
	};

	Tabulator.prototype.getColumn = function (field) {

		var col = this.columnManager.findColumn(field);

		if (col) {

			return col.getComponent();
		} else {

			console.warn("Find Error - No matching column found:", field);

			return false;
		}
	};

	Tabulator.prototype.getColumnDefinitions = function () {

		return this.columnManager.getDefinitionTree();
	};

	Tabulator.prototype.getColumnLayout = function () {

		if (this.modExists("persistence", true)) {

			return this.modules.persistence.parseColumns(this.columnManager.getColumns());
		}
	};

	Tabulator.prototype.setColumnLayout = function (layout) {

		if (this.modExists("persistence", true)) {

			this.columnManager.setColumns(this.modules.persistence.mergeDefinition(this.options.columns, layout));

			return true;
		}

		return false;
	};

	Tabulator.prototype.showColumn = function (field) {

		var column = this.columnManager.findColumn(field);

		if (column) {

			column.show();

			if (this.options.responsiveLayout && this.modExists("responsiveLayout", true)) {

				this.modules.responsiveLayout.update();
			}
		} else {

			console.warn("Column Show Error - No matching column found:", field);

			return false;
		}
	};

	Tabulator.prototype.hideColumn = function (field) {

		var column = this.columnManager.findColumn(field);

		if (column) {

			column.hide();

			if (this.options.responsiveLayout && this.modExists("responsiveLayout", true)) {

				this.modules.responsiveLayout.update();
			}
		} else {

			console.warn("Column Hide Error - No matching column found:", field);

			return false;
		}
	};

	Tabulator.prototype.toggleColumn = function (field) {

		var column = this.columnManager.findColumn(field);

		if (column) {

			if (column.visible) {

				column.hide();
			} else {

				column.show();
			}
		} else {

			console.warn("Column Visibility Toggle Error - No matching column found:", field);

			return false;
		}
	};

	Tabulator.prototype.addColumn = function (definition, before, field) {

		var column = this.columnManager.findColumn(field);

		this.columnManager.addColumn(definition, before, column);
	};

	Tabulator.prototype.deleteColumn = function (field) {

		var column = this.columnManager.findColumn(field);

		if (column) {

			column.delete();
		} else {

			console.warn("Column Delete Error - No matching column found:", field);

			return false;
		}
	};

	//scroll to column in DOM

	Tabulator.prototype.scrollToColumn = function (field, position, ifVisible) {
		var _this15 = this;

		return new Promise(function (resolve, reject) {

			var column = _this15.columnManager.findColumn(field);

			if (column) {

				_this15.columnManager.scrollToColumn(column, position, ifVisible).then(function () {

					resolve();
				}).catch(function (err) {

					reject(err);
				});
			} else {

				console.warn("Scroll Error - No matching column found:", field);

				reject("Scroll Error - No matching column found");
			}
		});
	};

	//////////// Localization Functions  ////////////

	Tabulator.prototype.setLocale = function (locale) {

		this.modules.localize.setLocale(locale);
	};

	Tabulator.prototype.getLocale = function () {

		return this.modules.localize.getLocale();
	};

	Tabulator.prototype.getLang = function (locale) {

		return this.modules.localize.getLang(locale);
	};

	//////////// General Public Functions ////////////


	//redraw list without updating data

	Tabulator.prototype.redraw = function (force) {

		this.columnManager.redraw(force);

		this.rowManager.redraw(force);
	};

	Tabulator.prototype.setHeight = function (height) {

		this.options.height = isNaN(height) ? height : height + "px";

		this.element.style.height = this.options.height;

		this.rowManager.redraw();
	};

	///////////////////// Sorting ////////////////////


	//trigger sort

	Tabulator.prototype.setSort = function (sortList, dir) {

		if (this.modExists("sort", true)) {

			this.modules.sort.setSort(sortList, dir);

			this.rowManager.sorterRefresh();
		}
	};

	Tabulator.prototype.getSorters = function () {

		if (this.modExists("sort", true)) {

			return this.modules.sort.getSort();
		}
	};

	Tabulator.prototype.clearSort = function () {

		if (this.modExists("sort", true)) {

			this.modules.sort.clear();

			this.rowManager.sorterRefresh();
		}
	};

	///////////////////// Filtering ////////////////////


	//set standard filters

	Tabulator.prototype.setFilter = function (field, type, value) {

		if (this.modExists("filter", true)) {

			this.modules.filter.setFilter(field, type, value);

			this.rowManager.filterRefresh();
		}
	};

	//add filter to array

	Tabulator.prototype.addFilter = function (field, type, value) {

		if (this.modExists("filter", true)) {

			this.modules.filter.addFilter(field, type, value);

			this.rowManager.filterRefresh();
		}
	};

	//get all filters

	Tabulator.prototype.getFilters = function (all) {

		if (this.modExists("filter", true)) {

			return this.modules.filter.getFilters(all);
		}
	};

	Tabulator.prototype.setHeaderFilterFocus = function (field) {

		if (this.modExists("filter", true)) {

			var column = this.columnManager.findColumn(field);

			if (column) {

				this.modules.filter.setHeaderFilterFocus(column);
			} else {

				console.warn("Column Filter Focus Error - No matching column found:", field);

				return false;
			}
		}
	};

	Tabulator.prototype.setHeaderFilterValue = function (field, value) {

		if (this.modExists("filter", true)) {

			var column = this.columnManager.findColumn(field);

			if (column) {

				this.modules.filter.setHeaderFilterValue(column, value);
			} else {

				console.warn("Column Filter Error - No matching column found:", field);

				return false;
			}
		}
	};

	Tabulator.prototype.getHeaderFilters = function () {

		if (this.modExists("filter", true)) {

			return this.modules.filter.getHeaderFilters();
		}
	};

	//remove filter from array

	Tabulator.prototype.removeFilter = function (field, type, value) {

		if (this.modExists("filter", true)) {

			this.modules.filter.removeFilter(field, type, value);

			this.rowManager.filterRefresh();
		}
	};

	//clear filters

	Tabulator.prototype.clearFilter = function (all) {

		if (this.modExists("filter", true)) {

			this.modules.filter.clearFilter(all);

			this.rowManager.filterRefresh();
		}
	};

	//clear header filters

	Tabulator.prototype.clearHeaderFilter = function () {

		if (this.modExists("filter", true)) {

			this.modules.filter.clearHeaderFilter();

			this.rowManager.filterRefresh();
		}
	};

	///////////////////// Filtering ////////////////////

	Tabulator.prototype.selectRow = function (rows) {

		if (this.modExists("selectRow", true)) {

			this.modules.selectRow.selectRows(rows);
		}
	};

	Tabulator.prototype.deselectRow = function (rows) {

		if (this.modExists("selectRow", true)) {

			this.modules.selectRow.deselectRows(rows);
		}
	};

	Tabulator.prototype.toggleSelectRow = function (row) {

		if (this.modExists("selectRow", true)) {

			this.modules.selectRow.toggleRow(row);
		}
	};

	Tabulator.prototype.getSelectedRows = function () {

		if (this.modExists("selectRow", true)) {

			return this.modules.selectRow.getSelectedRows();
		}
	};

	Tabulator.prototype.getSelectedData = function () {

		if (this.modExists("selectRow", true)) {

			return this.modules.selectRow.getSelectedData();
		}
	};

	//////////// Pagination Functions  ////////////


	Tabulator.prototype.setMaxPage = function (max) {

		if (this.options.pagination && this.modExists("page")) {

			this.modules.page.setMaxPage(max);
		} else {

			return false;
		}
	};

	Tabulator.prototype.setPage = function (page) {

		if (this.options.pagination && this.modExists("page")) {

			this.modules.page.setPage(page);
		} else {

			return false;
		}
	};

	Tabulator.prototype.setPageSize = function (size) {

		if (this.options.pagination && this.modExists("page")) {

			this.modules.page.setPageSize(size);

			this.modules.page.setPage(1);
		} else {

			return false;
		}
	};

	Tabulator.prototype.getPageSize = function () {

		if (this.options.pagination && this.modExists("page", true)) {

			return this.modules.page.getPageSize();
		}
	};

	Tabulator.prototype.previousPage = function () {

		if (this.options.pagination && this.modExists("page")) {

			this.modules.page.previousPage();
		} else {

			return false;
		}
	};

	Tabulator.prototype.nextPage = function () {

		if (this.options.pagination && this.modExists("page")) {

			this.modules.page.nextPage();
		} else {

			return false;
		}
	};

	Tabulator.prototype.getPage = function () {

		if (this.options.pagination && this.modExists("page")) {

			return this.modules.page.getPage();
		} else {

			return false;
		}
	};

	Tabulator.prototype.getPageMax = function () {

		if (this.options.pagination && this.modExists("page")) {

			return this.modules.page.getPageMax();
		} else {

			return false;
		}
	};

	///////////////// Grouping Functions ///////////////


	Tabulator.prototype.setGroupBy = function (groups) {

		if (this.modExists("groupRows", true)) {

			this.options.groupBy = groups;

			this.modules.groupRows.initialize();

			this.rowManager.refreshActiveData("display");
		} else {

			return false;
		}
	};

	Tabulator.prototype.setGroupStartOpen = function (values) {

		if (this.modExists("groupRows", true)) {

			this.options.groupStartOpen = values;

			this.modules.groupRows.initialize();

			if (this.options.groupBy) {

				this.rowManager.refreshActiveData("group");
			} else {

				console.warn("Grouping Update - cant refresh view, no groups have been set");
			}
		} else {

			return false;
		}
	};

	Tabulator.prototype.setGroupHeader = function (values) {

		if (this.modExists("groupRows", true)) {

			this.options.groupHeader = values;

			this.modules.groupRows.initialize();

			if (this.options.groupBy) {

				this.rowManager.refreshActiveData("group");
			} else {

				console.warn("Grouping Update - cant refresh view, no groups have been set");
			}
		} else {

			return false;
		}
	};

	Tabulator.prototype.getGroups = function (values) {

		if (this.modExists("groupRows", true)) {

			return this.modules.groupRows.getGroups(true);
		} else {

			return false;
		}
	};

	// get grouped table data in the same format as getData()

	Tabulator.prototype.getGroupedData = function () {

		if (this.modExists("groupRows", true)) {

			return this.options.groupBy ? this.modules.groupRows.getGroupedData() : this.getData();
		}
	};

	///////////////// Column Calculation Functions ///////////////

	Tabulator.prototype.getCalcResults = function () {

		if (this.modExists("columnCalcs", true)) {

			return this.modules.columnCalcs.getResults();
		} else {

			return false;
		}
	};

	/////////////// Navigation Management //////////////


	Tabulator.prototype.navigatePrev = function () {

		var cell = false;

		if (this.modExists("edit", true)) {

			cell = this.modules.edit.currentCell;

			if (cell) {

				e.preventDefault();

				return cell.nav().prev();
			}
		}

		return false;
	};

	Tabulator.prototype.navigateNext = function () {

		var cell = false;

		if (this.modExists("edit", true)) {

			cell = this.modules.edit.currentCell;

			if (cell) {

				e.preventDefault();

				return cell.nav().next();
			}
		}

		return false;
	};

	Tabulator.prototype.navigateLeft = function () {

		var cell = false;

		if (this.modExists("edit", true)) {

			cell = this.modules.edit.currentCell;

			if (cell) {

				e.preventDefault();

				return cell.nav().left();
			}
		}

		return false;
	};

	Tabulator.prototype.navigateRight = function () {

		var cell = false;

		if (this.modExists("edit", true)) {

			cell = this.modules.edit.currentCell;

			if (cell) {

				e.preventDefault();

				return cell.nav().right();
			}
		}

		return false;
	};

	Tabulator.prototype.navigateUp = function () {

		var cell = false;

		if (this.modExists("edit", true)) {

			cell = this.modules.edit.currentCell;

			if (cell) {

				e.preventDefault();

				return cell.nav().up();
			}
		}

		return false;
	};

	Tabulator.prototype.navigateDown = function () {

		var cell = false;

		if (this.modExists("edit", true)) {

			cell = this.modules.edit.currentCell;

			if (cell) {

				e.preventDefault();

				return cell.nav().dpwn();
			}
		}

		return false;
	};

	/////////////// History Management //////////////

	Tabulator.prototype.undo = function () {

		if (this.options.history && this.modExists("history", true)) {

			return this.modules.history.undo();
		} else {

			return false;
		}
	};

	Tabulator.prototype.redo = function () {

		if (this.options.history && this.modExists("history", true)) {

			return this.modules.history.redo();
		} else {

			return false;
		}
	};

	Tabulator.prototype.getHistoryUndoSize = function () {

		if (this.options.history && this.modExists("history", true)) {

			return this.modules.history.getHistoryUndoSize();
		} else {

			return false;
		}
	};

	Tabulator.prototype.getHistoryRedoSize = function () {

		if (this.options.history && this.modExists("history", true)) {

			return this.modules.history.getHistoryRedoSize();
		} else {

			return false;
		}
	};

	/////////////// Download Management //////////////


	Tabulator.prototype.download = function (type, filename, options) {

		if (this.modExists("download", true)) {

			this.modules.download.download(type, filename, options);
		}
	};

	/////////// Inter Table Communications ///////////


	Tabulator.prototype.tableComms = function (table, module, action, data) {

		this.modules.comms.receive(table, module, action, data);
	};

	////////////// Extension Management //////////////


	//object to hold module

	Tabulator.prototype.moduleBindings = {};

	//extend module

	Tabulator.prototype.extendModule = function (name, property, values) {

		if (Tabulator.prototype.moduleBindings[name]) {

			var source = Tabulator.prototype.moduleBindings[name].prototype[property];

			if (source) {

				if ((typeof values === 'undefined' ? 'undefined' : _typeof(values)) == "object") {

					for (var key in values) {

						source[key] = values[key];
					}
				} else {

					console.warn("Module Error - Invalid value type, it must be an object");
				}
			} else {

				console.warn("Module Error - property does not exist:", property);
			}
		} else {

			console.warn("Module Error - module does not exist:", name);
		}
	};

	//add module to tabulator

	Tabulator.prototype.registerModule = function (name, module) {

		var self = this;

		Tabulator.prototype.moduleBindings[name] = module;
	};

	//ensure that module are bound to instantiated function

	Tabulator.prototype.bindModules = function () {

		this.modules = {};

		for (var name in Tabulator.prototype.moduleBindings) {

			this.modules[name] = new Tabulator.prototype.moduleBindings[name](this);
		}
	};

	//Check for module

	Tabulator.prototype.modExists = function (plugin, required) {

		if (this.modules[plugin]) {

			return true;
		} else {

			if (required) {

				console.error("Tabulator Module Not Installed: " + plugin);
			}

			return false;
		}
	};

	Tabulator.prototype.helpers = {

		elVisible: function elVisible(el) {

			return !(el.offsetWidth <= 0 && el.offsetHeight <= 0);
		},

		elOffset: function elOffset(el) {

			var box = el.getBoundingClientRect();

			return {

				top: box.top + window.pageYOffset - document.documentElement.clientTop,

				left: box.left + window.pageXOffset - document.documentElement.clientLeft

			};
		},

		deepClone: function deepClone(obj) {

			var clone = Array.isArray(obj) ? [] : {};

			for (var i in obj) {

				if (obj[i] != null && _typeof(obj[i]) === "object") {

					if (obj[i] instanceof Date) {

						clone[i] = new Date(obj[i]);
					} else {

						clone[i] = this.deepClone(obj[i]);
					}
				} else {

					clone[i] = obj[i];
				}
			}

			return clone;
		}

	};

	Tabulator.prototype.comms = {

		tables: [],

		register: function register(table) {

			Tabulator.prototype.comms.tables.push(table);
		},

		deregister: function deregister(table) {

			var index = Tabulator.prototype.comms.tables.indexOf(table);

			if (index > -1) {

				Tabulator.prototype.comms.tables.splice(index, 1);
			}
		},

		lookupTable: function lookupTable(query) {

			var results = [],
			    matches,
			    match;

			if (typeof query === "string") {

				matches = document.querySelectorAll(query);

				if (matches.length) {

					for (var i = 0; i < matches.length; i++) {

						match = Tabulator.prototype.comms.matchElement(matches[i]);

						if (match) {

							results.push(match);
						}
					}
				}
			} else if (query instanceof HTMLElement || query instanceof Tabulator) {

				match = Tabulator.prototype.comms.matchElement(query);

				if (match) {

					results.push(match);
				}
			} else if (Array.isArray(query)) {

				query.forEach(function (item) {

					results = results.concat(Tabulator.prototype.comms.lookupTable(item));
				});
			} else {

				console.warn("Table Connection Error - Invalid Selector", query);
			}

			return results;
		},

		matchElement: function matchElement(element) {

			return Tabulator.prototype.comms.tables.find(function (table) {

				return element instanceof Tabulator ? table === element : table.element === element;
			});
		}

	};

	var Layout = function Layout(table) {

		this.table = table;

		this.mode = null;
	};

	//initialize layout system


	Layout.prototype.initialize = function (layout) {

		if (this.modes[layout]) {

			this.mode = layout;
		} else {

			console.warn("Layout Error - invalid mode set, defaulting to 'fitData' : " + layout);

			this.mode = 'fitData';
		}

		this.table.element.setAttribute("tabulator-layout", this.mode);
	};

	Layout.prototype.getMode = function () {

		return this.mode;
	};

	//trigger table layout


	Layout.prototype.layout = function () {

		this.modes[this.mode].call(this, this.table.columnManager.columnsByIndex);
	};

	//layout render functions


	Layout.prototype.modes = {

		//resize columns to fit data the contain


		"fitData": function fitData(columns) {

			columns.forEach(function (column) {

				column.reinitializeWidth();
			});

			if (this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", true)) {

				this.table.modules.responsiveLayout.update();
			}
		},

		//resize columns to fit data the contain


		"fitDataFill": function fitDataFill(columns) {

			columns.forEach(function (column) {

				column.reinitializeWidth();
			});

			if (this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", true)) {

				this.table.modules.responsiveLayout.update();
			}
		},

		//resize columns to fit


		"fitColumns": function fitColumns(columns) {

			var self = this;

			var totalWidth = self.table.element.clientWidth; //table element width


			var fixedWidth = 0; //total width of columns with a defined width


			var flexWidth = 0; //total width available to flexible columns


			var flexGrowUnits = 0; //total number of widthGrow blocks accross all columns


			var flexColWidth = 0; //desired width of flexible columns


			var flexColumns = []; //array of flexible width columns


			var fixedShrinkColumns = []; //array of fixed width columns that can shrink


			var flexShrinkUnits = 0; //total number of widthShrink blocks accross all columns


			var overflowWidth = 0; //horizontal overflow width


			var gapFill = 0; //number of pixels to be added to final column to close and half pixel gaps


			function calcWidth(width) {

				var colWidth;

				if (typeof width == "string") {

					if (width.indexOf("%") > -1) {

						colWidth = totalWidth / 100 * parseInt(width);
					} else {

						colWidth = parseInt(width);
					}
				} else {

					colWidth = width;
				}

				return colWidth;
			}

			//ensure columns resize to take up the correct amount of space


			function scaleColumns(columns, freeSpace, colWidth, shrinkCols) {

				var oversizeCols = [],
				    oversizeSpace = 0,
				    remainingSpace = 0,
				    nextColWidth = 0,
				    gap = 0,
				    changeUnits = 0,
				    undersizeCols = [];

				function calcGrow(col) {

					return colWidth * (col.column.definition.widthGrow || 1);
				}

				function calcShrink(col) {

					return calcWidth(col.width) - colWidth * (col.column.definition.widthShrink || 0);
				}

				columns.forEach(function (col, i) {

					var width = shrinkCols ? calcShrink(col) : calcGrow(col);

					if (col.column.minWidth >= width) {

						oversizeCols.push(col);
					} else {

						undersizeCols.push(col);

						changeUnits += shrinkCols ? col.column.definition.widthShrink || 1 : col.column.definition.widthGrow || 1;
					}
				});

				if (oversizeCols.length) {

					oversizeCols.forEach(function (col) {

						oversizeSpace += shrinkCols ? col.width - col.column.minWidth : col.column.minWidth;

						col.width = col.column.minWidth;
					});

					remainingSpace = freeSpace - oversizeSpace;

					nextColWidth = changeUnits ? Math.floor(remainingSpace / changeUnits) : remainingSpace;

					gap = remainingSpace - nextColWidth * changeUnits;

					gap += scaleColumns(undersizeCols, remainingSpace, nextColWidth, shrinkCols);
				} else {

					gap = changeUnits ? freeSpace - Math.floor(freeSpace / changeUnits) * changeUnits : freeSpace;

					undersizeCols.forEach(function (column) {

						column.width = shrinkCols ? calcShrink(column) : calcGrow(column);
					});
				}

				return gap;
			}

			if (this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", true)) {

				this.table.modules.responsiveLayout.update();
			}

			//adjust for vertical scrollbar if present


			if (this.table.rowManager.element.scrollHeight > this.table.rowManager.element.clientHeight) {

				totalWidth -= this.table.rowManager.element.offsetWidth - this.table.rowManager.element.clientWidth;
			}

			columns.forEach(function (column) {

				var width, minWidth, colWidth;

				if (column.visible) {

					width = column.definition.width;

					minWidth = parseInt(column.minWidth);

					if (width) {

						colWidth = calcWidth(width);

						fixedWidth += colWidth > minWidth ? colWidth : minWidth;

						if (column.definition.widthShrink) {

							fixedShrinkColumns.push({

								column: column,

								width: colWidth > minWidth ? colWidth : minWidth

							});

							flexShrinkUnits += column.definition.widthShrink;
						}
					} else {

						flexColumns.push({

							column: column,

							width: 0

						});

						flexGrowUnits += column.definition.widthGrow || 1;
					}
				}
			});

			//calculate available space


			flexWidth = totalWidth - fixedWidth;

			//calculate correct column size


			flexColWidth = Math.floor(flexWidth / flexGrowUnits);

			//generate column widths


			var gapFill = scaleColumns(flexColumns, flexWidth, flexColWidth, false);

			//increase width of last column to account for rounding errors


			if (flexColumns.length && gapFill > 0) {

				flexColumns[flexColumns.length - 1].width += +gapFill;
			}

			//caculate space for columns to be shrunk into


			flexColumns.forEach(function (col) {

				flexWidth -= col.width;
			});

			overflowWidth = Math.abs(gapFill) + flexWidth;

			//shrink oversize columns if there is no available space


			if (overflowWidth > 0 && flexShrinkUnits) {

				gapFill = scaleColumns(fixedShrinkColumns, overflowWidth, Math.floor(overflowWidth / flexShrinkUnits), true);
			}

			//decrease width of last column to account for rounding errors


			if (fixedShrinkColumns.length) {

				fixedShrinkColumns[fixedShrinkColumns.length - 1].width -= gapFill;
			}

			flexColumns.forEach(function (col) {

				col.column.setWidth(col.width);
			});

			fixedShrinkColumns.forEach(function (col) {

				col.column.setWidth(col.width);
			});
		}

	};

	Tabulator.prototype.registerModule("layout", Layout);

	var Localize = function Localize(table) {

		this.table = table; //hold Tabulator object

		this.locale = "default"; //current locale

		this.lang = false; //current language

		this.bindings = {}; //update events to call when locale is changed
	};

	//set header placehoder

	Localize.prototype.setHeaderFilterPlaceholder = function (placeholder) {

		this.langs.default.headerFilters.default = placeholder;
	};

	//set header filter placeholder by column

	Localize.prototype.setHeaderFilterColumnPlaceholder = function (column, placeholder) {

		this.langs.default.headerFilters.columns[column] = placeholder;

		if (this.lang && !this.lang.headerFilters.columns[column]) {

			this.lang.headerFilters.columns[column] = placeholder;
		}
	};

	//setup a lang description object

	Localize.prototype.installLang = function (locale, lang) {

		if (this.langs[locale]) {

			this._setLangProp(this.langs[locale], lang);
		} else {

			this.langs[locale] = lang;
		}
	};

	Localize.prototype._setLangProp = function (lang, values) {

		for (var key in values) {

			if (lang[key] && _typeof(lang[key]) == "object") {

				this._setLangProp(lang[key], values[key]);
			} else {

				lang[key] = values[key];
			}
		}
	};

	//set current locale

	Localize.prototype.setLocale = function (desiredLocale) {

		var self = this;

		desiredLocale = desiredLocale || "default";

		//fill in any matching languge values

		function traverseLang(trans, path) {

			for (var prop in trans) {

				if (_typeof(trans[prop]) == "object") {

					if (!path[prop]) {

						path[prop] = {};
					}

					traverseLang(trans[prop], path[prop]);
				} else {

					path[prop] = trans[prop];
				}
			}
		}

		//determing correct locale to load

		if (desiredLocale === true && navigator.language) {

			//get local from system

			desiredLocale = navigator.language.toLowerCase();
		}

		if (desiredLocale) {

			//if locale is not set, check for matching top level locale else use default

			if (!self.langs[desiredLocale]) {

				var prefix = desiredLocale.split("-")[0];

				if (self.langs[prefix]) {

					console.warn("Localization Error - Exact matching locale not found, using closest match: ", desiredLocale, prefix);

					desiredLocale = prefix;
				} else {

					console.warn("Localization Error - Matching locale not found, using default: ", desiredLocale);

					desiredLocale = "default";
				}
			}
		}

		self.locale = desiredLocale;

		//load default lang template

		self.lang = Tabulator.prototype.helpers.deepClone(self.langs.default || {});

		if (desiredLocale != "default") {

			traverseLang(self.langs[desiredLocale], self.lang);
		}

		self.table.options.localized.call(self.table, self.locale, self.lang);

		self._executeBindings();
	};

	//get current locale

	Localize.prototype.getLocale = function (locale) {

		return self.locale;
	};

	//get lang object for given local or current if none provided

	Localize.prototype.getLang = function (locale) {

		return locale ? this.langs[locale] : this.lang;
	};

	//get text for current locale

	Localize.prototype.getText = function (path, value) {

		var path = value ? path + "|" + value : path,
		    pathArray = path.split("|"),
		    text = this._getLangElement(pathArray, this.locale);

		// if(text === false){

		// 	console.warn("Localization Error - Matching localized text not found for given path: ", path);

		// }


		return text || "";
	};

	//traverse langs object and find localized copy

	Localize.prototype._getLangElement = function (path, locale) {

		var self = this;

		var root = self.lang;

		path.forEach(function (level) {

			var rootPath;

			if (root) {

				rootPath = root[level];

				if (typeof rootPath != "undefined") {

					root = rootPath;
				} else {

					root = false;
				}
			}
		});

		return root;
	};

	//set update binding

	Localize.prototype.bind = function (path, callback) {

		if (!this.bindings[path]) {

			this.bindings[path] = [];
		}

		this.bindings[path].push(callback);

		callback(this.getText(path), this.lang);
	};

	//itterate through bindings and trigger updates

	Localize.prototype._executeBindings = function () {

		var self = this;

		var _loop = function _loop(path) {

			self.bindings[path].forEach(function (binding) {

				binding(self.getText(path), self.lang);
			});
		};

		for (var path in self.bindings) {
			_loop(path);
		}
	};

	//Localized text listings

	Localize.prototype.langs = {

		"default": { //hold default locale text

			"groups": {

				"item": "item",

				"items": "items"

			},

			"columns": {},

			"ajax": {

				"loading": "Loading",

				"error": "Error"

			},

			"pagination": {

				"first": "First",

				"first_title": "First Page",

				"last": "Last",

				"last_title": "Last Page",

				"prev": "Prev",

				"prev_title": "Prev Page",

				"next": "Next",

				"next_title": "Next Page"

			},

			"headerFilters": {

				"default": "filter column...",

				"columns": {}

			}

		}

	};

	Tabulator.prototype.registerModule("localize", Localize);

	var Comms = function Comms(table) {

		this.table = table;
	};

	Comms.prototype.getConnections = function (selectors) {

		var self = this,
		    connections = [],
		    connection;

		connection = Tabulator.prototype.comms.lookupTable(selectors);

		connection.forEach(function (con) {

			if (self.table !== con) {

				connections.push(con);
			}
		});

		return connections;
	};

	Comms.prototype.send = function (selectors, module, action, data) {

		var self = this,
		    connections = this.getConnections(selectors);

		connections.forEach(function (connection) {

			connection.tableComms(self.table.element, module, action, data);
		});

		if (!connections.length && selectors) {

			console.warn("Table Connection Error - No tables matching selector found", selectors);
		}
	};

	Comms.prototype.receive = function (table, module, action, data) {

		if (this.table.modExists(module)) {

			return this.table.modules[module].commsReceived(table, action, data);
		} else {

			console.warn("Inter-table Comms Error - no such module:", module);
		}
	};

	Tabulator.prototype.registerModule("comms", Comms);

	var Accessor = function Accessor(table) {
		this.table = table; //hold Tabulator object
		this.allowedTypes = ["", "data", "download", "clipboard"]; //list of accessor types
	};

	//initialize column accessor
	Accessor.prototype.initializeColumn = function (column) {
		var self = this,
		    match = false,
		    config = {};

		this.allowedTypes.forEach(function (type) {
			var key = "accessor" + (type.charAt(0).toUpperCase() + type.slice(1)),
			    accessor;

			if (column.definition[key]) {
				accessor = self.lookupAccessor(column.definition[key]);

				if (accessor) {
					match = true;

					config[key] = {
						accessor: accessor,
						params: column.definition[key + "Params"] || {}
					};
				}
			}
		});

		if (match) {
			column.modules.accessor = config;
		}
	}, Accessor.prototype.lookupAccessor = function (value) {
		var accessor = false;

		//set column accessor
		switch (typeof value === 'undefined' ? 'undefined' : _typeof(value)) {
			case "string":
				if (this.accessors[value]) {
					accessor = this.accessors[value];
				} else {
					console.warn("Accessor Error - No such accessor found, ignoring: ", value);
				}
				break;

			case "function":
				accessor = value;
				break;
		}

		return accessor;
	};

	//apply accessor to row
	Accessor.prototype.transformRow = function (dataIn, type) {
		var self = this,
		    key = "accessor" + (type.charAt(0).toUpperCase() + type.slice(1));

		//clone data object with deep copy to isolate internal data from returned result
		var data = Tabulator.prototype.helpers.deepClone(dataIn || {});

		self.table.columnManager.traverse(function (column) {
			var value, accessor, params, component;

			if (column.modules.accessor) {

				accessor = column.modules.accessor[key] || column.modules.accessor.accessor || false;

				if (accessor) {
					value = column.getFieldValue(data);

					if (value != "undefined") {
						component = column.getComponent();
						params = typeof accessor.params === "function" ? accessor.params(value, data, type, component) : accessor.params;
						column.setFieldValue(data, accessor.accessor(value, data, type, params, component));
					}
				}
			}
		});

		return data;
	},

	//default accessors
	Accessor.prototype.accessors = {};

	Tabulator.prototype.registerModule("accessor", Accessor);
	var Ajax = function Ajax(table) {

		this.table = table; //hold Tabulator object
		this.config = false; //hold config object for ajax request
		this.url = ""; //request URL
		this.urlGenerator = false;
		this.params = false; //request parameters

		this.loaderElement = this.createLoaderElement(); //loader message div
		this.msgElement = this.createMsgElement(); //message element
		this.loadingElement = false;
		this.errorElement = false;
		this.loaderPromise = false;

		this.progressiveLoad = false;
		this.loading = false;

		this.requestOrder = 0; //prevent requests comming out of sequence if overridden by another load request
	};

	//initialize setup options
	Ajax.prototype.initialize = function () {
		this.loaderElement.appendChild(this.msgElement);

		if (this.table.options.ajaxLoaderLoading) {
			this.loadingElement = this.table.options.ajaxLoaderLoading;
		}

		this.loaderPromise = this.table.options.ajaxRequestFunc || this.defaultLoaderPromise;

		this.urlGenerator = this.table.options.ajaxURLGenerator || this.defaultURLGenerator;

		if (this.table.options.ajaxLoaderError) {
			this.errorElement = this.table.options.ajaxLoaderError;
		}

		if (this.table.options.ajaxParams) {
			this.setParams(this.table.options.ajaxParams);
		}

		if (this.table.options.ajaxConfig) {
			this.setConfig(this.table.options.ajaxConfig);
		}

		if (this.table.options.ajaxURL) {
			this.setUrl(this.table.options.ajaxURL);
		}

		if (this.table.options.ajaxProgressiveLoad) {
			if (this.table.options.pagination) {
				this.progressiveLoad = false;
				console.error("Progressive Load Error - Pagination and progressive load cannot be used at the same time");
			} else {
				if (this.table.modExists("page")) {
					this.progressiveLoad = this.table.options.ajaxProgressiveLoad;
					this.table.modules.page.initializeProgressive(this.progressiveLoad);
				} else {
					console.error("Pagination plugin is required for progressive ajax loading");
				}
			}
		}
	};

	Ajax.prototype.createLoaderElement = function () {
		var el = document.createElement("div");
		el.classList.add("tabulator-loader");
		return el;
	};

	Ajax.prototype.createMsgElement = function () {
		var el = document.createElement("div");

		el.classList.add("tabulator-loader-msg");
		el.setAttribute("role", "alert");

		return el;
	};

	//set ajax params
	Ajax.prototype.setParams = function (params, update) {
		if (update) {
			this.params = this.params || {};

			for (var key in params) {
				this.params[key] = params[key];
			}
		} else {
			this.params = params;
		}
	};

	Ajax.prototype.getParams = function () {
		return this.params || {};
	};

	//load config object
	Ajax.prototype.setConfig = function (config) {
		this._loadDefaultConfig();

		if (typeof config == "string") {
			this.config.method = config;
		} else {
			for (var key in config) {
				this.config[key] = config[key];
			}
		}
	};

	//create config object from default
	Ajax.prototype._loadDefaultConfig = function (force) {
		var self = this;
		if (!self.config || force) {

			self.config = {};

			//load base config from defaults
			for (var key in self.defaultConfig) {
				self.config[key] = self.defaultConfig[key];
			}
		}
	};

	//set request url
	Ajax.prototype.setUrl = function (url) {
		this.url = url;
	};

	//get request url
	Ajax.prototype.getUrl = function () {
		return this.url;
	};

	//lstandard loading function
	Ajax.prototype.loadData = function (inPosition) {
		var self = this;

		if (this.progressiveLoad) {
			return this._loadDataProgressive();
		} else {
			return this._loadDataStandard(inPosition);
		}
	};

	Ajax.prototype.nextPage = function (diff) {
		var margin;

		if (!this.loading) {

			margin = this.table.options.ajaxProgressiveLoadScrollMargin || this.table.rowManager.getElement().clientHeight * 2;

			if (diff < margin) {
				this.table.modules.page.nextPage();
			}
		}
	};

	Ajax.prototype.blockActiveRequest = function () {
		this.requestOrder++;
	};

	Ajax.prototype._loadDataProgressive = function () {
		this.table.rowManager.setData([]);
		return this.table.modules.page.setPage(1);
	};

	Ajax.prototype._loadDataStandard = function (inPosition) {
		var _this16 = this;

		return new Promise(function (resolve, reject) {
			_this16.sendRequest(inPosition).then(function (data) {
				_this16.table.rowManager.setData(data, inPosition);
				resolve();
			}).catch(function (e) {
				reject();
			});
		});
	};

	Ajax.prototype.generateParamsList = function (data, prefix) {
		var self = this,
		    output = [];

		prefix = prefix || "";

		if (Array.isArray(data)) {
			data.forEach(function (item, i) {
				output = output.concat(self.generateParamsList(item, prefix ? prefix + "[" + i + "]" : i));
			});
		} else if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === "object") {
			for (var key in data) {
				output = output.concat(self.generateParamsList(data[key], prefix ? prefix + "[" + key + "]" : key));
			}
		} else {
			output.push({ key: prefix, value: data });
		}

		return output;
	};

	Ajax.prototype.serializeParams = function (params) {
		var output = this.generateParamsList(params),
		    encoded = [];

		output.forEach(function (item) {
			encoded.push(encodeURIComponent(item.key) + "=" + encodeURIComponent(item.value));
		});

		return encoded.join("&");
	};

	//send ajax request
	Ajax.prototype.sendRequest = function (silent) {
		var _this17 = this;

		var self = this,
		    url = self.url,
		    requestNo,
		    esc,
		    query;

		self.requestOrder++;
		requestNo = self.requestOrder;

		self._loadDefaultConfig();

		return new Promise(function (resolve, reject) {
			if (self.table.options.ajaxRequesting.call(_this17.table, self.url, self.params) !== false) {

				self.loading = true;

				if (!silent) {
					self.showLoader();
				}

				_this17.loaderPromise(url, self.config, self.params).then(function (data) {
					if (requestNo === self.requestOrder) {
						if (self.table.options.ajaxResponse) {
							data = self.table.options.ajaxResponse.call(self.table, self.url, self.params, data);
						}
						resolve(data);
					} else {
						console.warn("Ajax Response Blocked - An active ajax request was blocked by an attempt to change table data while the request was being made");
					}

					self.hideLoader();

					self.loading = false;
				}).catch(function (error) {
					console.error("Ajax Load Error: ", error);
					self.table.options.ajaxError.call(self.table, error);

					self.showError();

					setTimeout(function () {
						self.hideLoader();
					}, 3000);

					self.loading = false;

					reject();
				});
			} else {
				reject();
			}
		});
	};

	Ajax.prototype.showLoader = function () {
		var shouldLoad = typeof this.table.options.ajaxLoader === "function" ? this.table.options.ajaxLoader() : this.table.options.ajaxLoader;

		if (shouldLoad) {

			this.hideLoader();

			while (this.msgElement.firstChild) {
				this.msgElement.removeChild(this.msgElement.firstChild);
			}this.msgElement.classList.remove("tabulator-error");
			this.msgElement.classList.add("tabulator-loading");

			if (this.loadingElement) {
				this.msgElement.appendChild(this.loadingElement);
			} else {
				this.msgElement.innerHTML = this.table.modules.localize.getText("ajax|loading");
			}

			this.table.element.appendChild(this.loaderElement);
		}
	};

	Ajax.prototype.showError = function () {
		this.hideLoader();

		while (this.msgElement.firstChild) {
			this.msgElement.removeChild(this.msgElement.firstChild);
		}this.msgElement.classList.remove("tabulator-loading");
		this.msgElement.classList.add("tabulator-error");

		if (this.errorElement) {
			this.msgElement.appendChild(this.errorElement);
		} else {
			this.msgElement.innerHTML = this.table.modules.localize.getText("ajax|error");
		}

		this.table.element.appendChild(this.loaderElement);
	};

	Ajax.prototype.hideLoader = function () {
		if (this.loaderElement.parentNode) {
			this.loaderElement.parentNode.removeChild(this.loaderElement);
		}
	};

	//default ajax config object
	Ajax.prototype.defaultConfig = {
		method: "GET"
	};

	Ajax.prototype.defaultURLGenerator = function (url, config, params) {
		if (params && Object.keys(params).length) {
			if (!config.method || config.method.toLowerCase() == "get") {
				config.method = "get";
				url += "?" + this.serializeParams(params);
			}
		}

		return url;
	};

	Ajax.prototype.defaultLoaderPromise = function (url, config, params) {
		var self = this,
		    contentType;

		return new Promise(function (resolve, reject) {

			//set url
			url = self.urlGenerator(url, config, params);

			//set body content if not GET request
			if (config.method != "get") {
				contentType = _typeof(self.table.options.ajaxContentType) === "object" ? self.table.options.ajaxContentType : self.contentTypeFormatters[self.table.options.ajaxContentType];
				if (contentType) {

					for (var key in contentType.headers) {
						if (!config.headers) {
							config.headers = {};
						}

						if (typeof config.headers[key] === "undefined") {
							config.headers[key] = contentType.headers[key];
						}
					}

					config.body = contentType.body.call(self, url, config, params);
				} else {
					console.warn("Ajax Error - Invalid ajaxContentType value:", self.table.options.ajaxContentType);
				}
			}

			if (url) {

				//configure headers
				if (typeof config.credentials === "undefined") {
					config.credentials = 'include';
				}

				if (typeof config.headers === "undefined") {
					config.headers = {};
				}

				if (typeof config.headers.Accept === "undefined") {
					config.headers.Accept = "application/json";
				}

				if (typeof config.headers["X-Requested-With"] === "undefined") {
					config.headers["X-Requested-With"] = "XMLHttpRequest";
				}

				//send request
				fetch(url, config).then(function (response) {
					if (response.ok) {
						response.json().then(function (data) {
							resolve(data);
						}).catch(function (error) {
							reject(error);
							console.warn("Ajax Load Error - Invalid JSON returned", error);
						});
					} else {
						console.error("Ajax Load Error - Connection Error: " + response.status, response.statusText);
						reject(response);
					}
				}).catch(function (error) {
					console.error("Ajax Load Error - Connection Error: ", error);
					reject(error);
				});
			} else {
				reject("No URL Set");
			}
		});
	};

	Ajax.prototype.contentTypeFormatters = {
		"json": {
			headers: {
				'Content-Type': 'application/json'
			},
			body: function body(url, config, params) {
				return JSON.stringify(params);
			}
		},
		"form": {
			headers: {},
			body: function body(url, config, params) {
				var output = this.generateParamsList(params),
				    form = new FormData();

				output.forEach(function (item) {
					form.append(item.key, item.value);
				});

				return form;
			}
		}
	};

	Tabulator.prototype.registerModule("ajax", Ajax);
	var ColumnCalcs = function ColumnCalcs(table) {
		this.table = table; //hold Tabulator object
		this.topCalcs = [];
		this.botCalcs = [];
		this.genColumn = false;
		this.topElement = this.createElement();
		this.botElement = this.createElement();
		this.topRow = false;
		this.botRow = false;
		this.topInitialized = false;
		this.botInitialized = false;

		this.initialize();
	};

	ColumnCalcs.prototype.createElement = function () {
		var el = document.createElement("div");
		el.classList.add("tabulator-calcs-holder");
		return el;
	};

	ColumnCalcs.prototype.initialize = function () {
		this.genColumn = new Column({ field: "value" }, this);
	};

	//dummy functions to handle being mock column manager
	ColumnCalcs.prototype.registerColumnField = function () {};

	//initialize column calcs
	ColumnCalcs.prototype.initializeColumn = function (column) {
		var def = column.definition;

		var config = {
			topCalcParams: def.topCalcParams || {},
			botCalcParams: def.bottomCalcParams || {}
		};

		if (def.topCalc) {

			switch (_typeof(def.topCalc)) {
				case "string":
					if (this.calculations[def.topCalc]) {
						config.topCalc = this.calculations[def.topCalc];
					} else {
						console.warn("Column Calc Error - No such calculation found, ignoring: ", def.topCalc);
					}
					break;

				case "function":
					config.topCalc = def.topCalc;
					break;

			}

			if (config.topCalc) {
				column.modules.columnCalcs = config;
				this.topCalcs.push(column);

				if (this.table.options.columnCalcs != "group") {
					this.initializeTopRow();
				}
			}
		}

		if (def.bottomCalc) {
			switch (_typeof(def.bottomCalc)) {
				case "string":
					if (this.calculations[def.bottomCalc]) {
						config.botCalc = this.calculations[def.bottomCalc];
					} else {
						console.warn("Column Calc Error - No such calculation found, ignoring: ", def.bottomCalc);
					}
					break;

				case "function":
					config.botCalc = def.bottomCalc;
					break;

			}

			if (config.botCalc) {
				column.modules.columnCalcs = config;
				this.botCalcs.push(column);

				if (this.table.options.columnCalcs != "group") {
					this.initializeBottomRow();
				}
			}
		}
	};

	ColumnCalcs.prototype.removeCalcs = function () {
		var changed = false;

		if (this.topInitialized) {
			this.topInitialized = false;
			this.topElement.parentNode.removeChild(this.topElement);
			changed = true;
		}

		if (this.botInitialized) {
			this.botInitialized = false;
			this.table.footerManager.remove(this.botElement);
			changed = true;
		}

		if (changed) {
			this.table.rowManager.adjustTableSize();
		}
	};

	ColumnCalcs.prototype.initializeTopRow = function () {
		if (!this.topInitialized) {
			// this.table.columnManager.headersElement.after(this.topElement);
			this.table.columnManager.getElement().insertBefore(this.topElement, this.table.columnManager.headersElement.nextSibling);
			this.topInitialized = true;
		}
	};

	ColumnCalcs.prototype.initializeBottomRow = function () {
		if (!this.botInitialized) {
			this.table.footerManager.prepend(this.botElement);
			this.botInitialized = true;
		}
	};

	ColumnCalcs.prototype.scrollHorizontal = function (left) {
		var hozAdjust = 0,
		    scrollWidth = this.table.columnManager.getElement().scrollWidth - this.table.element.clientWidth;

		if (this.botInitialized) {
			this.botRow.getElement().style.marginLeft = -left + "px";
		}
	};

	ColumnCalcs.prototype.recalc = function (rows) {
		var data, row;

		if (this.topInitialized || this.botInitialized) {
			data = this.rowsToData(rows);

			if (this.topInitialized) {
				row = this.generateRow("top", this.rowsToData(rows));
				this.topRow = row;
				while (this.topElement.firstChild) {
					this.topElement.removeChild(this.topElement.firstChild);
				}this.topElement.appendChild(row.getElement());
				row.initialize(true);
			}

			if (this.botInitialized) {
				row = this.generateRow("bottom", this.rowsToData(rows));
				this.botRow = row;
				while (this.botElement.firstChild) {
					this.botElement.removeChild(this.botElement.firstChild);
				}this.botElement.appendChild(row.getElement());
				row.initialize(true);
			}

			this.table.rowManager.adjustTableSize();

			//set resizable handles
			if (this.table.modExists("frozenColumns")) {
				this.table.modules.frozenColumns.layout();
			}
		}
	};

	ColumnCalcs.prototype.recalcRowGroup = function (row) {
		this.recalcGroup(this.table.modules.groupRows.getRowGroup(row));
	};

	ColumnCalcs.prototype.recalcGroup = function (group) {
		var data, rowData;

		if (group) {
			if (group.calcs) {
				if (group.calcs.bottom) {
					data = this.rowsToData(group.rows);
					rowData = this.generateRowData("bottom", data);

					group.calcs.bottom.updateData(rowData);
					group.calcs.bottom.reinitialize();
				}

				if (group.calcs.top) {
					data = this.rowsToData(group.rows);
					rowData = this.generateRowData("top", data);

					group.calcs.top.updateData(rowData);
					group.calcs.top.reinitialize();
				}
			}
		}
	};

	//generate top stats row
	ColumnCalcs.prototype.generateTopRow = function (rows) {
		return this.generateRow("top", this.rowsToData(rows));
	};
	//generate bottom stats row
	ColumnCalcs.prototype.generateBottomRow = function (rows) {
		return this.generateRow("bottom", this.rowsToData(rows));
	};

	ColumnCalcs.prototype.rowsToData = function (rows) {
		var data = [];

		rows.forEach(function (row) {
			data.push(row.getData());
		});

		return data;
	};

	//generate stats row
	ColumnCalcs.prototype.generateRow = function (pos, data) {
		var self = this,
		    rowData = this.generateRowData(pos, data),
		    row = new Row(rowData, this);

		row.getElement().classList.add("tabulator-calcs", "tabulator-calcs-" + pos);
		row.type = "calc";

		row.generateCells = function () {

			var cells = [];

			self.table.columnManager.columnsByIndex.forEach(function (column) {

				if (column.visible) {
					//set field name of mock column
					self.genColumn.setField(column.getField());
					self.genColumn.hozAlign = column.hozAlign;

					if (column.definition[pos + "CalcFormatter"] && self.table.modExists("format")) {

						self.genColumn.modules.format = {
							formatter: self.table.modules.format.getFormatter(column.definition[pos + "CalcFormatter"]),
							params: column.definition[pos + "CalcFormatterParams"]
						};
					} else {
						self.genColumn.modules.format = {
							formatter: self.table.modules.format.getFormatter("plaintext"),
							params: {}
						};
					}

					//generate cell and assign to correct column
					var cell = new Cell(self.genColumn, row);
					cell.column = column;
					cell.setWidth(column.width);

					column.cells.push(cell);
					cells.push(cell);
				}
			});

			this.cells = cells;
		};

		return row;
	};

	//generate stats row
	ColumnCalcs.prototype.generateRowData = function (pos, data) {
		var rowData = {},
		    calcs = pos == "top" ? this.topCalcs : this.botCalcs,
		    type = pos == "top" ? "topCalc" : "botCalc",
		    params,
		    paramKey;

		calcs.forEach(function (column) {
			var values = [];

			if (column.modules.columnCalcs && column.modules.columnCalcs[type]) {
				data.forEach(function (item) {
					values.push(column.getFieldValue(item));
				});

				paramKey = type + "Params";
				params = typeof column.modules.columnCalcs[paramKey] === "function" ? column.modules.columnCalcs[paramKey](value, data) : column.modules.columnCalcs[paramKey];

				column.setFieldValue(rowData, column.modules.columnCalcs[type](values, data, params));
			}
		});

		return rowData;
	};

	ColumnCalcs.prototype.hasTopCalcs = function () {
		return !!this.topCalcs.length;
	}, ColumnCalcs.prototype.hasBottomCalcs = function () {
		return !!this.botCalcs.length;
	},

	//handle table redraw
	ColumnCalcs.prototype.redraw = function () {
		if (this.topRow) {
			this.topRow.normalizeHeight(true);
		}
		if (this.botRow) {
			this.botRow.normalizeHeight(true);
		}
	};

	//return the calculated
	ColumnCalcs.prototype.getResults = function () {
		var self = this,
		    results = {},
		    groups;

		if (this.table.options.groupBy && this.table.modExists("groupRows")) {
			groups = this.table.modules.groupRows.getGroups(true);

			groups.forEach(function (group) {
				results[group.getKey()] = self.getGroupResults(group);
			});
		} else {
			results = {
				top: this.topRow ? this.topRow.getData() : {},
				bottom: this.botRow ? this.botRow.getData() : {}
			};
		}

		return results;
	};

	//get results from a group
	ColumnCalcs.prototype.getGroupResults = function (group) {
		var self = this,
		    groupObj = group._getSelf(),
		    subGroups = group.getSubGroups(),
		    subGroupResults = {},
		    results = {};

		subGroups.forEach(function (subgroup) {
			subGroupResults[subgroup.getKey()] = self.getGroupResults(subgroup);
		});

		results = {
			top: groupObj.calcs.top ? groupObj.calcs.top.getData() : {},
			bottom: groupObj.calcs.bottom ? groupObj.calcs.bottom.getData() : {},
			groups: subGroupResults
		};

		return results;
	};

	//default calculations
	ColumnCalcs.prototype.calculations = {
		"avg": function avg(values, data, calcParams) {
			var output = 0,
			    precision = typeof calcParams.precision !== "undefined" ? calcParams.precision : 2;

			if (values.length) {
				output = values.reduce(function (sum, value) {
					value = Number(value);
					return sum + value;
				});

				output = output / values.length;

				output = precision !== false ? output.toFixed(precision) : output;
			}

			return parseFloat(output).toString();
		},
		"max": function max(values, data, calcParams) {
			var output = null,
			    precision = typeof calcParams.precision !== "undefined" ? calcParams.precision : false;

			values.forEach(function (value) {

				value = Number(value);

				if (value > output || output === null) {
					output = value;
				}
			});

			return output !== null ? precision !== false ? output.toFixed(precision) : output : "";
		},
		"min": function min(values, data, calcParams) {
			var output = null,
			    precision = typeof calcParams.precision !== "undefined" ? calcParams.precision : false;

			values.forEach(function (value) {

				value = Number(value);

				if (value < output || output === null) {
					output = value;
				}
			});

			return output !== null ? precision !== false ? output.toFixed(precision) : output : "";
		},
		"sum": function sum(values, data, calcParams) {
			var output = 0,
			    precision = typeof calcParams.precision !== "undefined" ? calcParams.precision : false;

			if (values.length) {
				values.forEach(function (value) {
					value = Number(value);

					output += !isNaN(value) ? Number(value) : 0;
				});
			}

			return precision !== false ? output.toFixed(precision) : output;
		},
		"concat": function concat(values, data, calcParams) {
			var output = 0;

			if (values.length) {
				output = values.reduce(function (sum, value) {
					return String(sum) + String(value);
				});
			}

			return output;
		},
		"count": function count(values, data, calcParams) {
			var output = 0;

			if (values.length) {
				values.forEach(function (value) {
					if (value) {
						output++;
					}
				});
			}

			return output;
		}
	};

	Tabulator.prototype.registerModule("columnCalcs", ColumnCalcs);
	var Clipboard = function Clipboard(table) {
		this.table = table;
		this.mode = true;
		this.copySelector = false;
		this.copySelectorParams = {};
		this.copyFormatter = false;
		this.copyFormatterParams = {};
		this.pasteParser = function () {};
		this.pasteAction = function () {};
		this.htmlElement = false;
		this.config = {};

		this.blocked = true; //block copy actions not originating from this command
	};

	Clipboard.prototype.initialize = function () {
		var self = this;

		this.mode = this.table.options.clipboard;

		if (this.mode === true || this.mode === "copy") {
			this.table.element.addEventListener("copy", function (e) {
				var data;

				self.processConfig();

				if (!self.blocked) {
					e.preventDefault();

					data = self.generateContent();

					if (window.clipboardData && window.clipboardData.setData) {
						window.clipboardData.setData('Text', data);
					} else if (e.clipboardData && e.clipboardData.setData) {
						e.clipboardData.setData('text/plain', data);
						if (self.htmlElement) {
							e.clipboardData.setData('text/html', self.htmlElement.outerHTML);
						}
					} else if (e.originalEvent && e.originalEvent.clipboardData.setData) {
						e.originalEvent.clipboardData.setData('text/plain', data);
						if (self.htmlElement) {
							e.originalEvent.clipboardData.setData('text/html', self.htmlElement.outerHTML);
						}
					}

					self.table.options.clipboardCopied.call(this.table, data);

					self.reset();
				}
			});
		}

		if (this.mode === true || this.mode === "paste") {
			this.table.element.addEventListener("paste", function (e) {
				self.paste(e);
			});
		}

		this.setPasteParser(this.table.options.clipboardPasteParser);
		this.setPasteAction(this.table.options.clipboardPasteAction);
	};

	Clipboard.prototype.processConfig = function () {
		var config = {
			columnHeaders: "groups",
			rowGroups: true
		};

		if (typeof this.table.options.clipboardCopyHeader !== "undefined") {
			config.columnHeaders = this.table.options.clipboardCopyHeader;
			console.warn("DEPRICATION WANRING - clipboardCopyHeader option has been depricated, please use the columnHeaders property on the clipboardCopyConfig option");
		}

		if (this.table.options.clipboardCopyConfig) {
			for (var key in this.table.options.clipboardCopyConfig) {
				config[key] = this.table.options.clipboardCopyConfig[key];
			}
		}

		if (config.rowGroups && this.table.options.groupBy && this.table.modExists("groupRows")) {
			this.config.rowGroups = true;
		}

		if (config.columnHeaders) {
			if ((config.columnHeaders === "groups" || config === true) && this.table.columnManager.columns.length != this.table.columnManager.columnsByIndex.length) {
				this.config.columnHeaders = "groups";
			} else {
				this.config.columnHeaders = "columns";
			}
		} else {
			this.config.columnHeaders = false;
		}
	};

	Clipboard.prototype.reset = function () {
		this.blocked = false;
		this.originalSelectionText = "";
	};

	Clipboard.prototype.setPasteAction = function (action) {

		switch (typeof action === 'undefined' ? 'undefined' : _typeof(action)) {
			case "string":
				this.pasteAction = this.pasteActions[action];

				if (!this.pasteAction) {
					console.warn("Clipboard Error - No such paste action found:", action);
				}
				break;

			case "function":
				this.pasteAction = action;
				break;
		}
	};

	Clipboard.prototype.setPasteParser = function (parser) {
		switch (typeof parser === 'undefined' ? 'undefined' : _typeof(parser)) {
			case "string":
				this.pasteParser = this.pasteParsers[parser];

				if (!this.pasteParser) {
					console.warn("Clipboard Error - No such paste parser found:", parser);
				}
				break;

			case "function":
				this.pasteParser = parser;
				break;
		}
	};

	Clipboard.prototype.paste = function (e) {
		var data, rowData, rows;

		if (this.checkPaseOrigin(e)) {

			data = this.getPasteData(e);

			rowData = this.pasteParser.call(this, data);

			if (rowData) {
				e.preventDefault();

				if (this.table.modExists("mutator")) {
					rowData = this.mutateData(rowData);
				}

				rows = this.pasteAction.call(this, rowData);
				this.table.options.clipboardPasted.call(this.table, data, rowData, rows);
			} else {
				this.table.options.clipboardPasteError.call(this.table, data);
			}
		}
	};

	Clipboard.prototype.mutateData = function (data) {
		var self = this,
		    output = [];

		if (Array.isArray(data)) {
			data.forEach(function (row) {
				output.push(self.table.modules.mutator.transformRow(row, "clipboard"));
			});
		} else {
			output = data;
		}

		return output;
	};

	Clipboard.prototype.checkPaseOrigin = function (e) {
		var valid = true;

		if (e.target.tagName != "DIV" || this.table.modules.edit.currentCell) {
			valid = false;
		}

		return valid;
	};

	Clipboard.prototype.getPasteData = function (e) {
		var data;

		if (window.clipboardData && window.clipboardData.getData) {
			data = window.clipboardData.getData('Text');
		} else if (e.clipboardData && e.clipboardData.getData) {
			data = e.clipboardData.getData('text/plain');
		} else if (e.originalEvent && e.originalEvent.clipboardData.getData) {
			data = e.originalEvent.clipboardData.getData('text/plain');
		}

		return data;
	};

	Clipboard.prototype.copy = function (selector, selectorParams, formatter, formatterParams, internal) {
		var range, sel;
		this.blocked = false;

		if (this.mode === true || this.mode === "copy") {

			if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
				range = document.createRange();
				range.selectNodeContents(this.table.element);
				sel = window.getSelection();

				if (sel.toString() && internal) {
					selector = "userSelection";
					formatter = "raw";
					selectorParams = sel.toString();
				}

				sel.removeAllRanges();
				sel.addRange(range);
			} else if (typeof document.selection != "undefined" && typeof document.body.createTextRange != "undefined") {
				textRange = document.body.createTextRange();
				textRange.moveToElementText(this.table.element);
				textRange.select();
			}

			this.setSelector(selector);
			this.copySelectorParams = typeof selectorParams != "undefined" && selectorParams != null ? selectorParams : this.config.columnHeaders;
			this.setFormatter(formatter);
			this.copyFormatterParams = typeof formatterParams != "undefined" && formatterParams != null ? formatterParams : {};

			document.execCommand('copy');

			if (sel) {
				sel.removeAllRanges();
			}
		}
	};

	Clipboard.prototype.setSelector = function (selector) {
		selector = selector || this.table.options.clipboardCopySelector;

		switch (typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) {
			case "string":
				if (this.copySelectors[selector]) {
					this.copySelector = this.copySelectors[selector];
				} else {
					console.warn("Clipboard Error - No such selector found:", selector);
				}
				break;

			case "function":
				this.copySelector = selector;
				break;
		}
	};

	Clipboard.prototype.setFormatter = function (formatter) {

		formatter = formatter || this.table.options.clipboardCopyFormatter;

		switch (typeof formatter === 'undefined' ? 'undefined' : _typeof(formatter)) {
			case "string":
				if (this.copyFormatters[formatter]) {
					this.copyFormatter = this.copyFormatters[formatter];
				} else {
					console.warn("Clipboard Error - No such formatter found:", formatter);
				}
				break;

			case "function":
				this.copyFormatter = formatter;
				break;
		}
	};

	Clipboard.prototype.generateContent = function () {
		var data;

		this.htmlElement = false;
		data = this.copySelector.call(this, this.config, this.copySelectorParams);

		return this.copyFormatter.call(this, data, this.config, this.copyFormatterParams);
	};

	Clipboard.prototype.generateSimpleHeaders = function (columns) {
		var headers = [];

		columns.forEach(function (column) {
			headers.push(column.definition.title);
		});

		return headers;
	};

	Clipboard.prototype.generateColumnGroupHeaders = function (columns) {
		var _this18 = this;

		var output = [];

		this.table.columnManager.columns.forEach(function (column) {
			var colData = _this18.processColumnGroup(column);

			if (colData) {
				output.push(colData);
			}
		});

		return output;
	};

	Clipboard.prototype.processColumnGroup = function (column) {
		var _this19 = this;

		var subGroups = column.columns;

		var groupData = {
			type: "group",
			title: column.definition.title,
			column: column
		};

		if (subGroups.length) {
			groupData.subGroups = [];
			groupData.width = 0;

			subGroups.forEach(function (subGroup) {
				var subGroupData = _this19.processColumnGroup(subGroup);

				if (subGroupData) {
					groupData.width += subGroupData.width;
					groupData.subGroups.push(subGroupData);
				}
			});

			if (!groupData.width) {
				return false;
			}
		} else {
			if (column.field && column.visible) {
				groupData.width = 1;
			} else {
				return false;
			}
		}

		return groupData;
	};

	Clipboard.prototype.groupHeadersToRows = function (columns) {

		var headers = [];

		function parseColumnGroup(column, level) {

			if (typeof headers[level] === "undefined") {
				headers[level] = [];
			}

			headers[level].push(column.title);

			if (column.subGroups) {
				column.subGroups.forEach(function (subGroup) {
					parseColumnGroup(subGroup, level + 1);
				});
			} else {
				padColumnheaders();
			}
		}

		function padColumnheaders() {
			var max = 0;

			headers.forEach(function (title) {
				var len = title.length;
				if (len > max) {
					max = len;
				}
			});

			headers.forEach(function (title) {
				var len = title.length;
				if (len < max) {
					for (var i = len; i < max; i++) {
						title.push("");
					}
				}
			});
		}

		columns.forEach(function (column) {
			parseColumnGroup(column, 0);
		});

		return headers;
	};

	Clipboard.prototype.rowsToData = function (rows, config, params) {
		var columns = this.table.columnManager.columnsByIndex,
		    data = [];

		rows.forEach(function (row) {
			var rowArray = [],
			    rowData = row.getData("clipboard");

			columns.forEach(function (column) {
				var value = column.getFieldValue(rowData);

				switch (typeof value === 'undefined' ? 'undefined' : _typeof(value)) {
					case "object":
						value = JSON.stringify(value);
						break;

					case "undefined":
					case "null":
						value = "";
						break;

					default:
						value = value;
				}

				rowArray.push(value);
			});

			data.push(rowArray);
		});

		return data;
	};

	Clipboard.prototype.buildComplexRows = function (config) {
		var _this20 = this;

		var output = [],
		    groups = this.table.modules.groupRows.getGroups();

		groups.forEach(function (group) {
			output.push(_this20.processGroupData(group));
		});

		return output;
	};

	Clipboard.prototype.processGroupData = function (group) {
		var _this21 = this;

		var subGroups = group.getSubGroups();

		var groupData = {
			type: "group",
			key: group.key
		};

		if (subGroups.length) {
			groupData.subGroups = [];

			subGroups.forEach(function (subGroup) {
				groupData.subGroups.push(_this21.processGroupData(subGroup));
			});
		} else {
			groupData.rows = group.getRows(true);
		}

		return groupData;
	};

	Clipboard.prototype.buildOutput = function (rows, config, params) {
		var _this22 = this;

		var output = [],
		    columns = this.table.columnManager.columnsByIndex;

		if (config.columnHeaders) {

			if (config.columnHeaders == "groups") {
				columns = this.generateColumnGroupHeaders(this.table.columnManager.columns);

				output = output.concat(this.groupHeadersToRows(columns));
			} else {
				output.push(this.generateSimpleHeaders(columns));
			}
		}

		//generate styled content
		if (this.table.options.clipboardCopyStyled) {
			this.generateHTML(rows, columns, config, params);
		}

		//generate unstyled content
		if (config.rowGroups) {
			rows.forEach(function (row) {
				output = output.concat(_this22.parseRowGroupData(row, config, params));
			});
		} else {
			output = output.concat(this.rowsToData(rows, config, params));
		}

		return output;
	};

	Clipboard.prototype.parseRowGroupData = function (group, config, params) {
		var _this23 = this;

		var groupData = [];

		groupData.push([group.key]);

		if (group.subGroups) {
			group.subGroups.forEach(function (subGroup) {
				groupData = groupData.concat(_this23.parseRowGroupData(subGroup, config, params));
			});
		} else {

			groupData = groupData.concat(this.rowsToData(group.rows, config, params));
		}

		return groupData;
	};

	Clipboard.prototype.generateHTML = function (rows, columns, config, params) {
		var self = this,
		    data = [],
		    headers = [],
		    body,
		    oddRow,
		    evenRow,
		    firstRow,
		    firstCell,
		    firstGroup,
		    lastCell,
		    styleCells;

		//create table element
		this.htmlElement = document.createElement("table");
		self.mapElementStyles(this.table.element, this.htmlElement, ["border-top", "border-left", "border-right", "border-bottom"]);

		function generateSimpleHeaders() {
			var headerEl = document.createElement("tr");

			columns.forEach(function (column) {
				var columnEl = document.createElement("th");
				columnEl.innerHTML = column.definition.title;

				self.mapElementStyles(column.getElement(), columnEl, ["border-top", "border-left", "border-right", "border-bottom", "background-color", "color", "font-weight", "font-family", "font-size"]);

				headerEl.appendChild(columnEl);
			});

			self.mapElementStyles(self.table.columnManager.getHeadersElement(), headerEl, ["border-top", "border-left", "border-right", "border-bottom", "background-color", "color", "font-weight", "font-family", "font-size"]);

			self.htmlElement.appendChild(document.createElement("thead").appendChild(headerEl));
		}

		function generateHeaders(headers) {

			var headerHolderEl = document.createElement("thead");

			headers.forEach(function (columns) {
				var headerEl = document.createElement("tr");

				columns.forEach(function (column) {
					var columnEl = document.createElement("th");

					if (column.width > 1) {
						columnEl.colSpan = column.width;
					}

					if (column.height > 1) {
						columnEl.rowSpan = column.height;
					}

					columnEl.innerHTML = column.title;

					self.mapElementStyles(column.element, columnEl, ["border-top", "border-left", "border-right", "border-bottom", "background-color", "color", "font-weight", "font-family", "font-size"]);

					headerEl.appendChild(columnEl);
				});

				self.mapElementStyles(self.table.columnManager.getHeadersElement(), headerEl, ["border-top", "border-left", "border-right", "border-bottom", "background-color", "color", "font-weight", "font-family", "font-size"]);

				headerHolderEl.appendChild(headerEl);
			});

			self.htmlElement.appendChild(headerHolderEl);
		}

		function parseColumnGroup(column, level) {

			if (typeof headers[level] === "undefined") {
				headers[level] = [];
			}

			headers[level].push({
				title: column.title,
				width: column.width,
				height: 1,
				children: !!column.subGroups,
				element: column.column.getElement()
			});

			if (column.subGroups) {
				column.subGroups.forEach(function (subGroup) {
					parseColumnGroup(subGroup, level + 1);
				});
			}
		}

		function padVerticalColumnheaders() {
			headers.forEach(function (row, index) {
				row.forEach(function (header) {
					if (!header.children) {
						header.height = headers.length - index;
					}
				});
			});
		}

		//create headers if needed
		if (config.columnHeaders) {
			if (config.columnHeaders == "groups") {
				columns.forEach(function (column) {
					parseColumnGroup(column, 0);
				});

				padVerticalColumnheaders();
				generateHeaders(headers);
			} else {
				generateSimpleHeaders();
			}
		}

		columns = this.table.columnManager.columnsByIndex;

		//create table body
		body = document.createElement("tbody");

		//lookup row styles
		if (window.getComputedStyle) {
			oddRow = this.table.element.querySelector(".tabulator-row-odd:not(.tabulator-group):not(.tabulator-calcs)");
			evenRow = this.table.element.querySelector(".tabulator-row-even:not(.tabulator-group):not(.tabulator-calcs)");
			firstRow = this.table.element.querySelector(".tabulator-row:not(.tabulator-group):not(.tabulator-calcs)");
			firstGroup = this.table.element.getElementsByClassName("tabulator-group")[0];

			if (firstRow) {
				styleCells = firstRow.getElementsByClassName("tabulator-cell");
				firstCell = styleCells[0];
				lastCell = styleCells[styleCells.length - 1];
			}
		}

		function processRows(rowArray) {
			//add rows to table
			rowArray.forEach(function (row, i) {
				var rowEl = document.createElement("tr"),
				    rowData = row.getData("clipboard"),
				    styleRow = firstRow;

				columns.forEach(function (column, j) {
					var cellEl = document.createElement("td"),
					    value = column.getFieldValue(rowData);

					switch (typeof value === 'undefined' ? 'undefined' : _typeof(value)) {
						case "object":
							value = JSON.stringify(value);
							break;

						case "undefined":
						case "null":
							value = "";
							break;

						default:
							value = value;
					}

					cellEl.innerHTML = value;

					if (column.definition.align) {
						cellEl.style.textAlign = column.definition.align;
					}

					if (j < columns.length - 1) {
						if (firstCell) {
							self.mapElementStyles(firstCell, cellEl, ["border-top", "border-left", "border-right", "border-bottom", "color", "font-weight", "font-family", "font-size"]);
						}
					} else {
						if (firstCell) {
							self.mapElementStyles(firstCell, cellEl, ["border-top", "border-left", "border-right", "border-bottom", "color", "font-weight", "font-family", "font-size"]);
						}
					}

					rowEl.appendChild(cellEl);
				});

				if (!(i % 2) && oddRow) {
					styleRow = oddRow;
				}

				if (i % 2 && evenRow) {
					styleRow = evenRow;
				}

				if (styleRow) {
					self.mapElementStyles(styleRow, rowEl, ["border-top", "border-left", "border-right", "border-bottom", "color", "font-weight", "font-family", "font-size", "background-color"]);
				}

				body.appendChild(rowEl);
			});
		}

		function processGroup(group) {
			var groupEl = document.createElement("tr"),
			    groupCellEl = document.createElement("td");

			groupCellEl.colSpan = columns.length;

			groupCellEl.innerHTML = group.key;

			groupEl.appendChild(groupCellEl);
			body.appendChild(groupEl);

			self.mapElementStyles(firstGroup, groupEl, ["border-top", "border-left", "border-right", "border-bottom", "color", "font-weight", "font-family", "font-size", "background-color"]);

			if (group.subGroups) {
				group.subGroups.forEach(function (subGroup) {
					processGroup(subGroup);
				});
			} else {
				processRows(group.rows);
			}
		}

		if (config.rowGroups) {
			rows.forEach(function (group) {
				processGroup(group);
			});
		} else {
			processRows(rows);
		}

		this.htmlElement.appendChild(body);
	};

	Clipboard.prototype.mapElementStyles = function (from, to, props) {

		var lookup = {
			"background-color": "backgroundColor",
			"color": "fontColor",
			"font-weight": "fontWeight",
			"font-family": "fontFamily",
			"font-size": "fontSize",
			"border-top": "borderTop",
			"border-left": "borderLeft",
			"border-right": "borderRight",
			"border-bottom": "borderBottom"
		};

		if (window.getComputedStyle) {
			var fromStyle = window.getComputedStyle(from);

			props.forEach(function (prop) {
				to.style[lookup[prop]] = fromStyle.getPropertyValue(prop);
			});
		}

		// return window.getComputedStyle ? window.getComputedStyle(element, null).getPropertyValue(property) : element.style[property.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); })];
	};

	Clipboard.prototype.copySelectors = {
		userSelection: function userSelection(config, params) {
			return params;
		},
		selected: function selected(config, params) {
			var rows = [];

			if (this.table.modExists("selectRow", true)) {
				rows = this.table.modules.selectRow.getSelectedRows();
			}

			if (config.rowGroups) {
				console.warn("Clipboard Warning - select coptSelector does not support row groups");
			}

			return this.buildOutput(rows, config, params);
		},
		table: function table(config, params) {
			if (config.rowGroups) {
				console.warn("Clipboard Warning - table coptSelector does not support row groups");
			}

			return this.buildOutput(this.table.rowManager.getComponents(), config, params);
		},
		active: function active(config, params) {
			var rows;

			if (config.rowGroups) {
				rows = this.buildComplexRows(config);
			} else {
				rows = this.table.rowManager.getComponents(true);
			}

			return this.buildOutput(rows, config, params);
		}
	};

	Clipboard.prototype.copyFormatters = {
		raw: function raw(data, params) {
			return data;
		},
		table: function table(data, params) {
			var output = [];

			data.forEach(function (row) {
				row.forEach(function (value) {
					if (typeof value == "undefined") {
						value = "";
					}

					value = typeof value == "undefined" || value === null ? "" : value.toString();

					if (value.match(/\r|\n/)) {
						value = value.split('"').join('""');
						value = '"' + value + '"';
					}
				});

				output.push(row.join("\t"));
			});

			return output.join("\n");
		}
	};

	Clipboard.prototype.pasteParsers = {
		table: function table(clipboard) {
			var data = [],
			    success = false,
			    headerFindSuccess = true,
			    columns = this.table.columnManager.columns,
			    columnMap = [],
			    rows = [];

			//get data from clipboard into array of columns and rows.
			clipboard = clipboard.split("\n");

			clipboard.forEach(function (row) {
				data.push(row.split("\t"));
			});

			if (data.length && !(data.length === 1 && data[0].length < 2)) {
				success = true;

				//check if headers are present by title
				data[0].forEach(function (value) {
					var column = columns.find(function (column) {
						return value && column.definition.title && value.trim() && column.definition.title.trim() === value.trim();
					});

					if (column) {
						columnMap.push(column);
					} else {
						headerFindSuccess = false;
					}
				});

				//check if column headers are present by field
				if (!headerFindSuccess) {
					headerFindSuccess = true;
					columnMap = [];

					data[0].forEach(function (value) {
						var column = columns.find(function (column) {
							return value && column.field && value.trim() && column.field.trim() === value.trim();
						});

						if (column) {
							columnMap.push(column);
						} else {
							headerFindSuccess = false;
						}
					});

					if (!headerFindSuccess) {
						columnMap = this.table.columnManager.columnsByIndex;
					}
				}

				//remove header row if found
				if (headerFindSuccess) {
					data.shift();
				}

				data.forEach(function (item) {
					var row = {};

					item.forEach(function (value, i) {
						if (columnMap[i]) {
							row[columnMap[i].field] = value;
						}
					});

					rows.push(row);
				});

				return rows;
			} else {
				return false;
			}
		}
	};

	Clipboard.prototype.pasteActions = {
		replace: function replace(rows) {
			return this.table.setData(rows);
		},
		update: function update(rows) {
			return this.table.updateOrAddData(rows);
		},
		insert: function insert(rows) {
			return this.table.addData(rows);
		}
	};

	Tabulator.prototype.registerModule("clipboard", Clipboard);

	var DataTree = function DataTree(table) {
		this.table = table;
		this.indent = 10;
		this.field = "";
		this.collapseEl = null;
		this.expandEl = null;
		this.branchEl = null;

		this.startOpen = function () {};

		this.displayIndex = 0;
	};

	DataTree.prototype.initialize = function () {
		var dummyEl = null,
		    options = this.table.options;

		this.field = options.dataTreeChildField;
		this.indent = options.dataTreeChildIndent;

		if (options.dataTreeBranchElement) {

			if (options.dataTreeBranchElement === true) {
				this.branchEl = document.createElement("div");
				this.branchEl.classList.add("tabulator-data-tree-branch");
			} else {
				if (typeof options.dataTreeBranchElement === "string") {
					dummyEl = document.createElement("div");
					dummyEl.innerHTML = options.dataTreeBranchElement;
					this.branchEl = dummyEl.firstChild;
				} else {
					this.branchEl = options.dataTreeBranchElement;
				}
			}
		}

		if (options.dataTreeCollapseElement) {
			if (typeof options.dataTreeCollapseElement === "string") {
				dummyEl = document.createElement("div");
				dummyEl.innerHTML = options.dataTreeCollapseElement;
				this.collapseEl = dummyEl.firstChild;
			} else {
				this.collapseEl = options.dataTreeCollapseElement;
			}
		} else {
			this.collapseEl = document.createElement("div");
			this.collapseEl.classList.add("tabulator-data-tree-control");
			this.collapseEl.innerHTML = "<div class='tabulator-data-tree-control-collapse'></div>";
		}

		if (options.dataTreeExpandElement) {
			if (typeof options.dataTreeExpandElement === "string") {
				dummyEl = document.createElement("div");
				dummyEl.innerHTML = options.dataTreeExpandElement;
				this.expandEl = dummyEl.firstChild;
			} else {
				this.expandEl = options.dataTreeExpandElement;
			}
		} else {
			this.expandEl = document.createElement("div");
			this.expandEl.classList.add("tabulator-data-tree-control");
			this.expandEl.innerHTML = "<div class='tabulator-data-tree-control-expand'></div>";
		}

		switch (_typeof(options.dataTreeStartExpanded)) {
			case "boolean":
				this.startOpen = function (row, index) {
					return options.dataTreeStartExpanded;
				};
				break;

			case "function":
				this.startOpen = options.dataTreeStartExpanded;
				break;

			default:
				this.startOpen = function (row, index) {
					return options.dataTreeStartExpanded[index];
				};
				break;
		}
	};

	DataTree.prototype.initializeRow = function (row) {

		var children = typeof row.getData()[this.field] !== "undefined";

		row.modules.dataTree = {
			index: 0,
			open: children ? this.startOpen(row.getComponent(), 0) : false,
			controlEl: false,
			branchEl: false,
			parent: false,
			children: children
		};
	};

	DataTree.prototype.layoutRow = function (row) {
		var cell = row.getCells()[0],
		    el = cell.getElement(),
		    config = row.modules.dataTree;

		el.style.paddingLeft = parseInt(window.getComputedStyle(el, null).getPropertyValue('padding-left')) + config.index * this.indent + "px";

		if (config.branchEl) {
			config.branchEl.parentNode.removeChild(config.branchEl);
		}

		this.generateControlElement(row, el);

		if (config.index && this.branchEl) {
			config.branchEl = this.branchEl.cloneNode(true);
			el.insertBefore(config.branchEl, el.firstChild);
			el.style.paddingLeft = parseInt(el.style.paddingLeft) + (config.branchEl.offsetWidth + config.branchEl.style.marginRight) * (config.index - 1) + "px";
		}
	};

	DataTree.prototype.generateControlElement = function (row, el) {
		var _this24 = this;

		var config = row.modules.dataTree,
		    el = el || row.getCells()[0].getElement(),
		    oldControl = config.controlEl;

		if (config.children !== false) {

			if (config.open) {
				config.controlEl = this.collapseEl.cloneNode(true);
				config.controlEl.addEventListener("click", function (e) {
					e.stopPropagation();
					_this24.collapseRow(row);
				});
			} else {
				config.controlEl = this.expandEl.cloneNode(true);
				config.controlEl.addEventListener("click", function (e) {
					e.stopPropagation();
					_this24.expandRow(row);
				});
			}

			config.controlEl.addEventListener("mousedown", function (e) {
				e.stopPropagation();
			});

			if (oldControl && oldControl.parentNode === el) {
				oldControl.parentNode.replaceChild(config.controlEl, oldControl);
			} else {
				el.insertBefore(config.controlEl, el.firstChild);
			}
		}
	};

	DataTree.prototype.setDisplayIndex = function (index) {
		this.displayIndex = index;
	};

	DataTree.prototype.getDisplayIndex = function () {
		return this.displayIndex;
	};

	DataTree.prototype.getRows = function (rows) {
		var _this25 = this;

		var output = [];

		rows.forEach(function (row, i) {
			var config = row.modules.dataTree.children,
			    children;

			output.push(row);

			if (!config.index && config.children !== false) {
				children = _this25.getChildren(row);

				children.forEach(function (child) {
					output.push(child);
				});
			}
		});

		return output;
	};

	DataTree.prototype.getChildren = function (row) {
		var _this26 = this;

		var config = row.modules.dataTree,
		    output = [];

		if (config.children !== false && config.open) {
			if (!Array.isArray(config.children)) {
				config.children = this.generateChildren(row);
			}

			config.children.forEach(function (child) {
				output.push(child);

				var subChildren = _this26.getChildren(child);

				subChildren.forEach(function (sub) {
					output.push(sub);
				});
			});
		}

		return output;
	};

	DataTree.prototype.generateChildren = function (row) {
		var _this27 = this;

		var children = [];

		row.getData()[this.field].forEach(function (childData) {
			var childRow = new Row(childData || {}, _this27.table.rowManager);
			childRow.modules.dataTree.index = row.modules.dataTree.index + 1;
			childRow.modules.dataTree.parent = row;
			childRow.modules.dataTree.open = _this27.startOpen(row, childRow.modules.dataTree.index);
			children.push(childRow);
		});

		return children;
	};

	DataTree.prototype.expandRow = function (row, silent) {
		var config = row.modules.dataTree;

		if (config.children !== false) {
			config.open = true;

			row.reinitialize();

			this.table.rowManager.refreshActiveData("tree", false, true);

			this.table.options.dataTreeRowExpanded(row.getComponent(), row.modules.dataTree.index);
		}
	};

	DataTree.prototype.collapseRow = function (row) {
		var config = row.modules.dataTree;

		if (config.children !== false) {
			config.open = false;

			row.reinitialize();

			this.table.rowManager.refreshActiveData("tree", false, true);

			this.table.options.dataTreeRowCollapsed(row.getComponent(), row.modules.dataTree.index);
		}
	};

	DataTree.prototype.toggleRow = function (row) {
		var config = row.modules.dataTree;

		if (config.children !== false) {
			if (config.open) {
				this.collapseRow(row);
			} else {
				this.expandRow(row);
			}
		}
	};

	DataTree.prototype.getTreeParent = function (row) {
		return row.modules.dataTree.parent ? row.modules.dataTree.parent.getComponent() : false;
	};

	DataTree.prototype.getTreeChildren = function (row) {
		var config = row.modules.dataTree,
		    output = [];

		if (config.children) {

			if (!Array.isArray(config.children)) {
				config.children = this.generateChildren(row);
			}

			config.children.forEach(function (childRow) {
				if (childRow instanceof Row) {
					output.push(childRow.getComponent());
				}
			});
		}

		return output;
	};

	DataTree.prototype.checkForRestyle = function (cell) {
		if (!cell.row.cells.indexOf(cell)) {
			if (cell.row.modules.dataTree.children !== false) {
				cell.row.reinitialize();
			}
		}
	};

	Tabulator.prototype.registerModule("dataTree", DataTree);
	var Download = function Download(table) {
		this.table = table; //hold Tabulator object
		this.fields = {}; //hold filed multi dimension arrays
		this.columnsByIndex = []; //hold columns in their order in the table
		this.columnsByField = {}; //hold columns with lookup by field name
		this.config = {};
	};

	//trigger file download
	Download.prototype.download = function (type, filename, options, interceptCallback) {
		var self = this,
		    downloadFunc = false;
		this.processConfig();

		function buildLink(data, mime) {
			if (interceptCallback) {
				interceptCallback(data);
			} else {
				self.triggerDownload(data, mime, type, filename);
			}
		}

		if (typeof type == "function") {
			downloadFunc = type;
		} else {
			if (self.downloaders[type]) {
				downloadFunc = self.downloaders[type];
			} else {
				console.warn("Download Error - No such download type found: ", type);
			}
		}

		this.processColumns();

		if (downloadFunc) {
			downloadFunc.call(this, self.processDefinitions(), self.processData(), options || {}, buildLink, this.config);
		}
	};

	Download.prototype.processConfig = function () {
		var config = { //download config
			columnGroups: true,
			rowGroups: true
		};

		if (this.table.options.downloadConfig) {
			for (var key in this.table.options.downloadConfig) {
				config[key] = this.table.options.downloadConfig[key];
			}
		}

		if (config.rowGroups && this.table.options.groupBy && this.table.modExists("groupRows")) {
			this.config.rowGroups = true;
		}

		if (config.columnGroups && this.table.columnManager.columns.length != this.table.columnManager.columnsByIndex.length) {
			this.config.columnGroups = true;
		}
	};

	Download.prototype.processColumns = function () {
		var self = this;

		self.columnsByIndex = [];
		self.columnsByField = {};

		self.table.columnManager.columnsByIndex.forEach(function (column) {

			if (column.field && column.visible && column.definition.download !== false) {
				self.columnsByIndex.push(column);
				self.columnsByField[column.field] = column;
			}
		});
	};

	Download.prototype.processDefinitions = function () {
		var self = this,
		    processedDefinitions = [];

		if (this.config.columnGroups) {
			self.table.columnManager.columns.forEach(function (column) {
				var colData = self.processColumnGroup(column);

				if (colData) {
					processedDefinitions.push(colData);
				}
			});
		} else {
			self.columnsByIndex.forEach(function (column) {
				if (column.download !== false) {
					//isolate definiton from defintion object
					processedDefinitions.push(self.processDefinition(column));
				}
			});
		}

		return processedDefinitions;
	};

	Download.prototype.processColumnGroup = function (column) {
		var _this28 = this;

		var subGroups = column.columns;

		var groupData = {
			type: "group",
			title: column.definition.title
		};

		if (subGroups.length) {
			groupData.subGroups = [];
			groupData.width = 0;

			subGroups.forEach(function (subGroup) {
				var subGroupData = _this28.processColumnGroup(subGroup);

				if (subGroupData) {
					groupData.width += subGroupData.width;
					groupData.subGroups.push(subGroupData);
				}
			});

			if (!groupData.width) {
				return false;
			}
		} else {
			if (column.field && column.visible && column.definition.download !== false) {
				groupData.width = 1;
				groupData.definition = this.processDefinition(column);
			} else {
				return false;
			}
		}

		return groupData;
	};

	Download.prototype.processDefinition = function (column) {
		var def = {};

		for (var key in column.definition) {
			def[key] = column.definition[key];
		}

		if (typeof column.definition.downloadTitle != "undefined") {
			def.title = column.definition.downloadTitle;
		}

		return def;
	};

	Download.prototype.processData = function () {
		var _this29 = this;

		var self = this,
		    data = [],
		    groups = [];

		if (this.config.rowGroups) {
			groups = this.table.modules.groupRows.getGroups();

			groups.forEach(function (group) {
				data.push(_this29.processGroupData(group));
			});
		} else {
			data = self.table.rowManager.getData(true, "download");
		}

		//bulk data processing
		if (typeof self.table.options.downloadDataFormatter == "function") {
			data = self.table.options.downloadDataFormatter(data);
		}

		return data;
	};

	Download.prototype.processGroupData = function (group) {
		var _this30 = this;

		var subGroups = group.getSubGroups();

		var groupData = {
			type: "group",
			key: group.key
		};

		if (subGroups.length) {
			groupData.subGroups = [];

			subGroups.forEach(function (subGroup) {
				groupData.subGroups.push(_this30.processGroupData(subGroup));
			});
		} else {
			groupData.rows = group.getData(true, "download");
		}

		return groupData;
	};

	Download.prototype.triggerDownload = function (data, mime, type, filename) {
		var element = document.createElement('a'),
		    blob = new Blob([data], { type: mime }),
		    filename = filename || "Tabulator." + (typeof type === "function" ? "txt" : type);

		blob = this.table.options.downloadReady.call(this.table, data, blob);

		if (blob) {

			if (navigator.msSaveOrOpenBlob) {
				navigator.msSaveOrOpenBlob(blob, filename);
			} else {
				element.setAttribute('href', window.URL.createObjectURL(blob));

				//set file title
				element.setAttribute('download', filename);

				//trigger download
				element.style.display = 'none';
				document.body.appendChild(element);
				element.click();

				//remove temporary link element
				document.body.removeChild(element);
			}

			if (this.table.options.downloadComplete) {
				this.table.options.downloadComplete();
			}
		}
	};

	//nested field lookup
	Download.prototype.getFieldValue = function (field, data) {
		var column = this.columnsByField[field];

		if (column) {
			return column.getFieldValue(data);
		}

		return false;
	};

	Download.prototype.commsReceived = function (table, action, data) {
		switch (action) {
			case "intercept":
				this.download(data.type, "", data.options, data.intercept);
				break;
		}
	};

	//downloaders
	Download.prototype.downloaders = {
		csv: function csv(columns, data, options, setFileContents, config) {
			var self = this,
			    titles = [],
			    fields = [],
			    delimiter = options && options.delimiter ? options.delimiter : ",",
			    fileContents;

			//build column headers
			function parseSimpleTitles() {
				columns.forEach(function (column) {
					titles.push('"' + String(column.title).split('"').join('""') + '"');
					fields.push(column.field);
				});
			}

			function parseColumnGroup(column, level) {
				if (column.subGroups) {
					column.subGroups.forEach(function (subGroup) {
						parseColumnGroup(subGroup, level + 1);
					});
				} else {
					titles.push('"' + String(column.title).split('"').join('""') + '"');
					fields.push(column.definition.field);
				}
			}

			if (config.columnGroups) {
				console.warn("Download Warning - CSV downloader cannot process column groups");

				columns.forEach(function (column) {
					parseColumnGroup(column, 0);
				});
			} else {
				parseSimpleTitles();
			}

			//generate header row
			fileContents = [titles.join(delimiter)];

			function parseRows(data) {
				//generate each row of the table
				data.forEach(function (row) {
					var rowData = [];

					fields.forEach(function (field) {
						var value = self.getFieldValue(field, row);

						switch (typeof value === 'undefined' ? 'undefined' : _typeof(value)) {
							case "object":
								value = JSON.stringify(value);
								break;

							case "undefined":
							case "null":
								value = "";
								break;

							default:
								value = value;
						}

						//escape quotation marks
						rowData.push('"' + String(value).split('"').join('""') + '"');
					});

					fileContents.push(rowData.join(delimiter));
				});
			}

			function parseGroup(group) {
				if (group.subGroups) {
					group.subGroups.forEach(function (subGroup) {
						parseGroup(subGroup);
					});
				} else {
					parseRows(group.rows);
				}
			}

			if (config.rowGroups) {
				console.warn("Download Warning - CSV downloader cannot process row groups");

				data.forEach(function (group) {
					parseGroup(group);
				});
			} else {
				parseRows(data);
			}

			setFileContents(fileContents.join("\n"), "text/csv");
		},

		json: function json(columns, data, options, setFileContents, config) {
			var fileContents = JSON.stringify(data, null, '\t');

			setFileContents(fileContents, "application/json");
		},

		pdf: function pdf(columns, data, options, setFileContents, config) {
			var self = this,
			    fields = [],
			    header = [],
			    body = [],
			    table = "",
			    groupRowIndexs = [],
			    autoTableParams = {},
			    rowGroupStyles = {},
			    jsPDFParams = options.jsPDF || {},
			    title = options && options.title ? options.title : "";

			if (!jsPDFParams.orientation) {
				jsPDFParams.orientation = options.orientation || "landscape";
			}

			if (!jsPDFParams.unit) {
				jsPDFParams.unit = "pt";
			}

			//build column headers
			function parseSimpleTitles() {
				columns.forEach(function (column) {
					if (column.field) {
						header.push(column.title || "");
						fields.push(column.field);
					}
				});
			}

			function parseColumnGroup(column, level) {
				if (column.subGroups) {
					column.subGroups.forEach(function (subGroup) {
						parseColumnGroup(subGroup, level + 1);
					});
				} else {
					header.push(column.title || "");
					fields.push(column.definition.field);
				}
			}

			if (config.columnGroups) {
				console.warn("Download Warning - PDF downloader cannot process column groups");

				columns.forEach(function (column) {
					parseColumnGroup(column, 0);
				});
			} else {
				parseSimpleTitles();
			}

			function parseValue(value) {
				switch (typeof value === 'undefined' ? 'undefined' : _typeof(value)) {
					case "object":
						value = JSON.stringify(value);
						break;

					case "undefined":
					case "null":
						value = "";
						break;

					default:
						value = value;
				}

				return value;
			}

			function parseRows(data) {
				//build table rows
				data.forEach(function (row) {
					var rowData = [];

					fields.forEach(function (field) {
						var value = self.getFieldValue(field, row);
						rowData.push(parseValue(value));
					});

					body.push(rowData);
				});
			}

			function parseGroup(group) {
				var groupData = [];

				groupData.push(parseValue(group.key));

				groupRowIndexs.push(body.length);

				body.push(groupData);

				if (group.subGroups) {
					group.subGroups.forEach(function (subGroup) {
						parseGroup(subGroup);
					});
				} else {
					parseRows(group.rows);
				}
			}

			if (config.rowGroups) {
				data.forEach(function (group) {
					parseGroup(group);
				});
			} else {
				parseRows(data);
			}

			var doc = new jsPDF(jsPDFParams); //set document to landscape, better for most tables

			if (options && options.autoTable) {
				if (typeof options.autoTable === "function") {
					autoTableParams = options.autoTable(doc) || {};
				} else {
					autoTableParams = options.autoTable;
				}
			}

			if (config.rowGroups) {
				var createdCell = function createdCell(cell, data) {
					if (groupRowIndexs.indexOf(data.row.index) > -1) {
						for (var key in rowGroupStyles) {
							cell.styles[key] = rowGroupStyles[key];
						}
					}
				};

				rowGroupStyles = options.rowGroupStyles || {
					fontStyle: "bold",
					fontSize: 12,
					cellPadding: 6,
					fillColor: 220
				};

				if (!autoTableParams.createdCell) {
					autoTableParams.createdCell = createdCell;
				} else {
					var createdCellHolder = autoTableParams.createdCell;

					autoTableParams.createdCell = function (cell, data) {
						createdCell(cell, data);
						createdCellHolder(cell, data);
					};
				}
			}

			if (title) {
				autoTableParams.addPageContent = function (data) {
					doc.text(title, 40, 30);
				};
			}

			doc.autoTable(header, body, autoTableParams);

			setFileContents(doc.output("arraybuffer"), "application/pdf");
		},

		xlsx: function xlsx(columns, data, options, setFileContents, config) {
			var self = this,
			    sheetName = options.sheetName || "Sheet1",
			    workbook = { SheetNames: [], Sheets: {} },
			    groupRowIndexs = [],
			    groupColumnIndexs = [],
			    output;

			function generateSheet() {
				var titles = [],
				    fields = [],
				    rows = [],
				    worksheet;

				//convert rows to worksheet
				function rowsToSheet() {
					var sheet = {};
					var range = { s: { c: 0, r: 0 }, e: { c: fields.length, r: rows.length } };

					XLSX.utils.sheet_add_aoa(sheet, rows);

					sheet['!ref'] = XLSX.utils.encode_range(range);

					var merges = generateMerges();

					if (merges.length) {
						sheet["!merges"] = merges;
					}

					return sheet;
				}

				function parseSimpleTitles() {
					//get field lists
					columns.forEach(function (column) {
						titles.push(column.title);
						fields.push(column.field);
					});

					rows.push(titles);
				}

				function parseColumnGroup(column, level) {

					if (typeof titles[level] === "undefined") {
						titles[level] = [];
					}

					if (typeof groupColumnIndexs[level] === "undefined") {
						groupColumnIndexs[level] = [];
					}

					if (column.width > 1) {

						groupColumnIndexs[level].push({
							type: "hoz",
							start: titles[level].length,
							end: titles[level].length + column.width - 1
						});
					}

					titles[level].push(column.title);

					if (column.subGroups) {
						column.subGroups.forEach(function (subGroup) {
							parseColumnGroup(subGroup, level + 1);
						});
					} else {
						fields.push(column.definition.field);
						padColumnTitles(fields.length - 1, level);

						groupColumnIndexs[level].push({
							type: "vert",
							start: fields.length - 1
						});
					}
				}

				function padColumnTitles() {
					var max = 0;

					titles.forEach(function (title) {
						var len = title.length;
						if (len > max) {
							max = len;
						}
					});

					titles.forEach(function (title) {
						var len = title.length;
						if (len < max) {
							for (var i = len; i < max; i++) {
								title.push("");
							}
						}
					});
				}

				if (config.columnGroups) {
					columns.forEach(function (column) {
						parseColumnGroup(column, 0);
					});

					titles.forEach(function (title) {
						rows.push(title);
					});
				} else {
					parseSimpleTitles();
				}

				function generateMerges() {
					var output = [];

					groupRowIndexs.forEach(function (index) {
						output.push({ s: { r: index, c: 0 }, e: { r: index, c: fields.length - 1 } });
					});

					groupColumnIndexs.forEach(function (merges, level) {
						merges.forEach(function (merge) {
							if (merge.type === "hoz") {
								output.push({ s: { r: level, c: merge.start }, e: { r: level, c: merge.end } });
							} else {
								if (level != titles.length - 1) {
									output.push({ s: { r: level, c: merge.start }, e: { r: titles.length - 1, c: merge.start } });
								}
							}
						});
					});

					return output;
				}

				//generate each row of the table
				function parseRows(data) {
					data.forEach(function (row) {
						var rowData = [];

						fields.forEach(function (field) {
							var value = self.getFieldValue(field, row);

							rowData.push((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === "object" ? JSON.stringify(value) : value);
						});

						rows.push(rowData);
					});
				}

				function parseGroup(group) {
					var groupData = [];

					groupData.push(group.key);

					groupRowIndexs.push(rows.length);

					rows.push(groupData);

					if (group.subGroups) {
						group.subGroups.forEach(function (subGroup) {
							parseGroup(subGroup);
						});
					} else {
						parseRows(group.rows);
					}
				}

				if (config.rowGroups) {
					data.forEach(function (group) {
						parseGroup(group);
					});
				} else {
					parseRows(data);
				}

				worksheet = rowsToSheet();

				return worksheet;
			}

			if (options.sheetOnly) {
				setFileContents(generateSheet());
				return;
			}

			if (options.sheets) {
				for (var sheet in options.sheets) {

					if (options.sheets[sheet] === true) {
						workbook.SheetNames.push(sheet);
						workbook.Sheets[sheet] = generateSheet();
					} else {

						workbook.SheetNames.push(sheet);

						this.table.modules.comms.send(options.sheets[sheet], "download", "intercept", {
							type: "xlsx",
							options: { sheetOnly: true },
							intercept: function intercept(data) {
								workbook.Sheets[sheet] = data;
							}
						});
					}
				}
			} else {
				workbook.SheetNames.push(sheetName);
				workbook.Sheets[sheetName] = generateSheet();
			}

			//convert workbook to binary array
			function s2ab(s) {
				var buf = new ArrayBuffer(s.length);
				var view = new Uint8Array(buf);
				for (var i = 0; i != s.length; ++i) {
					view[i] = s.charCodeAt(i) & 0xFF;
				}return buf;
			}

			output = XLSX.write(workbook, { bookType: 'xlsx', bookSST: true, type: 'binary' });

			setFileContents(s2ab(output), "application/octet-stream");
		}

	};

	Tabulator.prototype.registerModule("download", Download);
	var Edit = function Edit(table) {
		this.table = table; //hold Tabulator object
		this.currentCell = false; //hold currently editing cell
		this.mouseClick = false; //hold mousedown state to prevent click binding being overriden by editor opening
		this.recursionBlock = false; //prevent focus recursion
		this.invalidEdit = false;
	};

	//initialize column editor
	Edit.prototype.initializeColumn = function (column) {
		var self = this,
		    config = {
			editor: false,
			blocked: false,
			check: column.definition.editable,
			params: column.definition.editorParams || {}
		};

		//set column editor
		switch (_typeof(column.definition.editor)) {
			case "string":

				if (column.definition.editor === "tick") {
					column.definition.editor = "tickCross";
					console.warn("DEPRICATION WANRING - the tick editor has been depricated, please use the tickCross editor");
				}

				if (self.editors[column.definition.editor]) {
					config.editor = self.editors[column.definition.editor];
				} else {
					console.warn("Editor Error - No such editor found: ", column.definition.editor);
				}
				break;

			case "function":
				config.editor = column.definition.editor;
				break;

			case "boolean":

				if (column.definition.editor === true) {

					if (typeof column.definition.formatter !== "function") {

						if (column.definition.formatter === "tick") {
							column.definition.formatter = "tickCross";
							console.warn("DEPRICATION WANRING - the tick editor has been depricated, please use the tickCross editor");
						}

						if (self.editors[column.definition.formatter]) {
							config.editor = self.editors[column.definition.formatter];
						} else {
							config.editor = self.editors["input"];
						}
					} else {
						console.warn("Editor Error - Cannot auto lookup editor for a custom formatter: ", column.definition.formatter);
					}
				}
				break;
		}

		if (config.editor) {
			column.modules.edit = config;
		}
	};

	Edit.prototype.getCurrentCell = function () {
		return this.currentCell ? this.currentCell.getComponent() : false;
	};

	Edit.prototype.clearEditor = function () {
		var cell = this.currentCell,
		    cellEl;

		this.invalidEdit = false;

		if (cell) {
			this.currentCell = false;

			cellEl = cell.getElement();
			cellEl.classList.remove("tabulator-validation-fail");
			cellEl.classList.remove("tabulator-editing");
			while (cellEl.firstChild) {
				cellEl.removeChild(cellEl.firstChild);
			}cell.row.getElement().classList.remove("tabulator-row-editing");
		}
	};

	Edit.prototype.cancelEdit = function () {

		if (this.currentCell) {
			var cell = this.currentCell;
			var component = this.currentCell.getComponent();

			this.clearEditor();
			cell.setValueActual(cell.getValue());

			if (cell.column.cellEvents.cellEditCancelled) {
				cell.column.cellEvents.cellEditCancelled.call(this.table, component);
			}

			this.table.options.cellEditCancelled.call(this.table, component);
		}
	};

	//return a formatted value for a cell
	Edit.prototype.bindEditor = function (cell) {
		var self = this,
		    element = cell.getElement();

		element.setAttribute("tabindex", 0);

		element.addEventListener("click", function (e) {
			if (!element.classList.contains("tabulator-editing")) {
				element.focus();
			}
		});

		element.addEventListener("mousedown", function (e) {
			self.mouseClick = true;
		});

		element.addEventListener("focus", function (e) {
			if (!self.recursionBlock) {
				self.edit(cell, e, false);
			}
		});
	};

	Edit.prototype.focusCellNoEvent = function (cell) {
		this.recursionBlock = true;
		cell.getElement().focus();
		this.recursionBlock = false;
	};

	Edit.prototype.editCell = function (cell, forceEdit) {
		this.focusCellNoEvent(cell);
		this.edit(cell, false, forceEdit);
	};

	Edit.prototype.edit = function (cell, e, forceEdit) {
		var self = this,
		    allowEdit = true,
		    rendered = function rendered() {},
		    element = cell.getElement(),
		    cellEditor,
		    component,
		    params;

		//prevent editing if another cell is refusing to leave focus (eg. validation fail)
		if (this.currentCell) {
			if (!this.invalidEdit) {
				this.cancelEdit();
			}
			return;
		}

		//handle successfull value change
		function success(value) {

			if (self.currentCell === cell) {
				var valid = true;

				if (cell.column.modules.validate && self.table.modExists("validate")) {
					valid = self.table.modules.validate.validate(cell.column.modules.validate, cell.getComponent(), value);
				}

				if (valid === true) {
					self.clearEditor();
					cell.setValue(value, true);

					if (self.table.options.dataTree && self.table.modExists("dataTree")) {
						self.table.modules.dataTree.checkForRestyle(cell);
					}
				} else {
					self.invalidEdit = true;
					element.classList.add("tabulator-validation-fail");
					self.focusCellNoEvent(cell);
					rendered();
					self.table.options.validationFailed.call(self.table, cell.getComponent(), value, valid);
				}
			} else {
				// console.warn("Edit Success Error - cannot call success on a cell that is no longer being edited");
			}
		}

		//handle aborted edit
		function cancel() {
			if (self.currentCell === cell) {
				self.cancelEdit();

				if (self.table.options.dataTree && self.table.modExists("dataTree")) {
					self.table.modules.dataTree.checkForRestyle(cell);
				}
			} else {
				// console.warn("Edit Success Error - cannot call cancel on a cell that is no longer being edited");
			}
		}

		function onRendered(callback) {
			rendered = callback;
		}

		if (!cell.column.modules.edit.blocked) {
			if (e) {
				e.stopPropagation();
			}

			switch (_typeof(cell.column.modules.edit.check)) {
				case "function":
					allowEdit = cell.column.modules.edit.check(cell.getComponent());
					break;

				case "boolean":
					allowEdit = cell.column.modules.edit.check;
					break;
			}

			if (allowEdit || forceEdit) {

				self.cancelEdit();

				self.currentCell = cell;

				component = cell.getComponent();

				if (this.mouseClick) {
					this.mouseClick = false;

					if (cell.column.cellEvents.cellClick) {
						cell.column.cellEvents.cellClick.call(this.table, component);
					}
				}

				if (cell.column.cellEvents.cellEditing) {
					cell.column.cellEvents.cellEditing.call(this.table, component);
				}

				self.table.options.cellEditing.call(this.table, component);

				params = typeof cell.column.modules.edit.params === "function" ? cell.column.modules.edit.params(component) : cell.column.modules.edit.params;

				cellEditor = cell.column.modules.edit.editor.call(self, component, onRendered, success, cancel, params);

				//if editor returned, add to DOM, if false, abort edit
				if (cellEditor !== false) {

					if (cellEditor instanceof Node) {
						element.classList.add("tabulator-editing");
						cell.row.getElement().classList.add("tabulator-row-editing");
						while (element.firstChild) {
							element.removeChild(element.firstChild);
						}element.appendChild(cellEditor);

						//trigger onRendered Callback
						rendered();

						//prevent editing from triggering rowClick event
						var children = element.children;

						for (var i = 0; i < children.length; i++) {
							children[i].addEventListener("click", function (e) {
								e.stopPropagation();
							});
						}
					} else {
						console.warn("Edit Error - Editor should return an instance of Node, the editor returned:", cellEditor);
						element.blur();
						return false;
					}
				} else {
					element.blur();
					return false;
				}

				return true;
			} else {
				this.mouseClick = false;
				element.blur();
				return false;
			}
		} else {
			this.mouseClick = false;
			element.blur();
			return false;
		}
	};

	//default data editors
	Edit.prototype.editors = {

		//input element
		input: function input(cell, onRendered, success, cancel, editorParams) {

			//create and style input
			var cellValue = cell.getValue(),
			    input = document.createElement("input");

			input.setAttribute("type", "text");

			input.style.padding = "4px";
			input.style.width = "100%";
			input.style.boxSizing = "border-box";

			input.value = typeof cellValue !== "undefined" ? cellValue : "";

			onRendered(function () {
				input.focus();
				input.style.height = "100%";
			});

			function onChange(e) {
				if ((cellValue === null || typeof cellValue === "undefined") && input.value !== "" || input.value != cellValue) {
					success(input.value);
				} else {
					cancel();
				}
			}

			//submit new value on blur or change
			input.addEventListener("change", onChange);
			input.addEventListener("blur", onChange);

			//submit new value on enter
			input.addEventListener("keydown", function (e) {
				switch (e.keyCode) {
					case 13:
						success(input.value);
						break;

					case 27:
						cancel();
						break;
				}
			});

			return input;
		},

		//resizable text area element
		textarea: function textarea(cell, onRendered, success, cancel, editorParams) {
			var self = this,
			    cellValue = cell.getValue(),
			    value = String(typeof cellValue == "null" || typeof cellValue == "undefined" ? "" : cellValue),
			    count = (value.match(/(?:\r\n|\r|\n)/g) || []).length + 1,
			    input = document.createElement("textarea"),
			    scrollHeight = 0;

			//create and style input
			input.style.display = "block";
			input.style.padding = "2px";
			input.style.height = "100%";
			input.style.width = "100%";
			input.style.boxSizing = "border-box";
			input.style.whiteSpace = "pre-wrap";
			input.style.resize = "none";

			input.value = value;

			onRendered(function () {
				input.focus();
				input.style.height = "100%";
			});

			function onChange(e) {

				if ((cellValue === null || typeof cellValue === "undefined") && input.value !== "" || input.value != cellValue) {
					success(input.value);
					setTimeout(function () {
						cell.getRow().normalizeHeight();
					}, 300);
				} else {
					cancel();
				}
			}

			//submit new value on blur or change
			input.addEventListener("change", onChange);
			input.addEventListener("blur", onChange);

			input.addEventListener("keyup", function () {

				input.style.height = "";

				var heightNow = input.scrollHeight;

				input.style.height = heightNow + "px";

				if (heightNow != scrollHeight) {
					scrollHeight = heightNow;
					cell.getRow().normalizeHeight();
				}
			});

			input.addEventListener("keydown", function (e) {
				if (e.keyCode == 27) {
					cancel();
				}
			});

			return input;
		},

		//input element with type of number
		number: function number(cell, onRendered, success, cancel, editorParams) {

			var cellValue = cell.getValue(),
			    input = document.createElement("input");

			input.setAttribute("type", "number");

			if (typeof editorParams.max != "undefined") {
				input.setAttribute("max", editorParams.max);
			}

			if (typeof editorParams.min != "undefined") {
				input.setAttribute("min", editorParams.min);
			}

			if (typeof editorParams.step != "undefined") {
				input.setAttribute("step", editorParams.step);
			}

			//create and style input
			input.style.padding = "4px";
			input.style.width = "100%";
			input.style.boxSizing = "border-box";

			input.value = cellValue;

			onRendered(function () {
				input.focus();
				input.style.height = "100%";
			});

			function onChange() {
				var value = input.value;

				if (!isNaN(value) && value !== "") {
					value = Number(value);
				}

				if (value != cellValue) {
					success(value);
				} else {
					cancel();
				}
			}

			//submit new value on blur
			input.addEventListener("blur", function (e) {
				onChange();
			});

			//submit new value on enter
			input.addEventListener("keydown", function (e) {
				switch (e.keyCode) {
					case 13:
					case 9:
						onChange();
						break;

					case 27:
						cancel();
						break;
				}
			});

			return input;
		},

		//input element with type of number
		range: function range(cell, onRendered, success, cancel, editorParams) {

			var cellValue = cell.getValue(),
			    input = document.createElement("input");

			input.setAttribute("type", "range");

			if (typeof editorParams.max != "undefined") {
				input.setAttribute("max", editorParams.max);
			}

			if (typeof editorParams.min != "undefined") {
				input.setAttribute("min", editorParams.min);
			}

			if (typeof editorParams.step != "undefined") {
				input.setAttribute("step", editorParams.step);
			}

			//create and style input
			input.style.padding = "4px";
			input.style.width = "100%";
			input.style.boxSizing = "border-box";

			input.value = cellValue;

			onRendered(function () {
				input.focus();
				input.style.height = "100%";
			});

			function onChange() {
				var value = input.value;

				if (!isNaN(value) && value !== "") {
					value = Number(value);
				}

				if (value != cellValue) {
					success(value);
				} else {
					cancel();
				}
			}

			//submit new value on blur
			input.addEventListener("blur", function (e) {
				onChange();
			});

			//submit new value on enter
			input.addEventListener("keydown", function (e) {
				switch (e.keyCode) {
					case 13:
					case 9:
						onChange();
						break;

					case 27:
						cancel();
						break;
				}
			});

			return input;
		},

		//select
		select: function select(cell, onRendered, success, cancel, editorParams) {
			var self = this,
			    cellEl = cell.getElement(),
			    initialValue = cell.getValue(),
			    input = document.createElement("input"),
			    listEl = document.createElement("div"),
			    dataItems = [],
			    displayItems = [],
			    currentItem = {},
			    blurable = true;

			if (Array.isArray(editorParams) || !Array.isArray(editorParams) && (typeof editorParams === 'undefined' ? 'undefined' : _typeof(editorParams)) === "object" && !editorParams.values) {
				console.warn("DEPRICATION WANRING - values for the select editor must now be passed into the valuse property of the editorParams object, not as the editorParams object");
				editorParams = { values: editorParams };
			}

			function getUniqueColumnValues() {
				var output = {},
				    column = cell.getColumn()._getSelf(),
				    data = self.table.getData();

				data.forEach(function (row) {
					var val = column.getFieldValue(row);

					if (val !== null && typeof val !== "undefined" && val !== "") {
						output[val] = true;
					}
				});

				return Object.keys(output);
			}

			function parseItems(inputValues, curentValue) {
				var dataList = [];
				var displayList = [];

				function processComplexListItem(item) {
					var item = {
						label: editorParams.listItemFormatter ? editorParams.listItemFormatter(item.value, item.label) : item.label,
						value: item.value,
						element: false
					};

					if (item.value === curentValue) {
						setCurrentItem(item);
					}

					dataList.push(item);
					displayList.push(item);

					return item;
				}

				if (typeof inputValues == "function") {
					inputValues = inputValues(cell);
				}

				if (Array.isArray(inputValues)) {
					inputValues.forEach(function (value) {
						var item;

						if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === "object") {

							if (value.options) {
								item = {
									label: value.label,
									group: true,
									element: false
								};

								displayList.push(item);

								value.options.forEach(function (item) {
									processComplexListItem(item);
								});
							} else {
								processComplexListItem(value);
							}
						} else {
							item = {
								label: editorParams.listItemFormatter ? editorParams.listItemFormatter(value, value) : value,
								value: value,
								element: false
							};

							if (item.value === curentValue) {
								setCurrentItem(item);
							}

							dataList.push(item);
							displayList.push(item);
						}
					});
				} else {
					for (var key in inputValues) {
						var item = {
							label: editorParams.listItemFormatter ? editorParams.listItemFormatter(key, inputValues[key]) : inputValues[key],
							value: key,
							element: false
						};

						if (item.value === curentValue) {
							setCurrentItem(item);
						}

						dataList.push(item);
						displayList.push(item);
					}
				}

				dataItems = dataList;
				displayItems = displayList;

				fillList();
			}

			function fillList() {
				while (listEl.firstChild) {
					listEl.removeChild(listEl.firstChild);
				}displayItems.forEach(function (item) {
					var el = item.element;

					if (!el) {

						if (item.group) {
							el = document.createElement("div");
							el.classList.add("tabulator-edit-select-list-group");
							el.tabIndex = 0;
							el.innerHTML = item.label;
						} else {
							el = document.createElement("div");
							el.classList.add("tabulator-edit-select-list-item");
							el.tabIndex = 0;
							el.innerHTML = item.label;

							el.addEventListener("click", function () {
								setCurrentItem(item);
								chooseItem();
							});

							if (item === currentItem) {
								el.classList.add("active");
							}
						}

						el.addEventListener("mousedown", function () {
							blurable = false;

							setTimeout(function () {
								blurable = true;
							}, 10);
						});

						item.element = el;
					}

					listEl.appendChild(el);
				});
			}

			function setCurrentItem(item) {

				if (currentItem && currentItem.element) {
					currentItem.element.classList.remove("active");
				}

				currentItem = item;
				input.value = item.label;

				if (item.element) {
					item.element.classList.add("active");
				}
			}

			function chooseItem() {
				hideList();

				if (initialValue !== currentItem.value) {
					success(currentItem.value);
				} else {
					cancel();
				}
			}

			function cancelItem() {
				hideList();
				cancel();
			}

			function showList() {
				if (!listEl.parentNode) {

					if (editorParams.values === true) {
						parseItems(getUniqueColumnValues(), initialValue);
					} else {
						parseItems(editorParams.values || [], initialValue);
					}

					var offset = Tabulator.prototype.helpers.elOffset(cellEl);

					listEl.style.minWidth = cellEl.offsetWidth + "px";

					listEl.style.top = offset.top + cellEl.offsetHeight + "px";
					listEl.style.left = offset.left + "px";
					document.body.appendChild(listEl);
				}
			}

			function hideList() {
				if (listEl.parentNode) {
					listEl.parentNode.removeChild(listEl);
				}
			}

			//style input
			input.setAttribute("type", "text");

			input.style.padding = "4px";
			input.style.width = "100%";
			input.style.boxSizing = "border-box";
			input.readonly = true;

			//allow key based navigation
			input.addEventListener("keydown", function (e) {
				var index;

				switch (e.keyCode) {
					case 38:
						//up arrow
						e.stopImmediatePropagation();
						e.stopPropagation();

						index = dataItems.indexOf(currentItem);

						if (index > 0) {
							setCurrentItem(dataItems[index - 1]);
						}
						break;

					case 40:
						//down arrow
						e.stopImmediatePropagation();
						e.stopPropagation();

						index = dataItems.indexOf(currentItem);

						if (index < dataItems.length - 1) {
							if (index == -1) {
								setCurrentItem(dataItems[0]);
							} else {
								setCurrentItem(dataItems[index + 1]);
							}
						}
						break;

					case 13:
						//enter
						chooseItem();
						break;

					case 27:
						//escape
						cancelItem();
						break;
				}
			});

			input.addEventListener("blur", function (e) {
				if (blurable) {
					cancelItem();
				}
			});

			input.addEventListener("focus", function (e) {
				showList();
			});

			//style list element
			listEl = document.createElement("div");
			listEl.classList.add("tabulator-edit-select-list");

			onRendered(function () {
				input.style.height = "100%";
				input.focus();
			});

			return input;
		},

		//autocomplete
		autocomplete: function autocomplete(cell, onRendered, success, cancel, editorParams) {
			var self = this,
			    cellEl = cell.getElement(),
			    initialValue = cell.getValue(),
			    input = document.createElement("input"),
			    listEl = document.createElement("div"),
			    allItems = [],
			    displayItems = [],
			    currentItem = {},
			    blurable = true;

			function getUniqueColumnValues() {
				var output = {},
				    column = cell.getColumn()._getSelf(),
				    data = self.table.getData();

				data.forEach(function (row) {
					var val = column.getFieldValue(row);

					if (val !== null && typeof val !== "undefined" && val !== "") {
						output[val] = true;
					}
				});

				return Object.keys(output);
			}

			function parseItems(inputValues, curentValue) {
				var itemList = [];

				if (Array.isArray(inputValues)) {
					inputValues.forEach(function (value) {
						var item = {
							title: editorParams.listItemFormatter ? editorParams.listItemFormatter(value, value) : value,
							value: value,
							element: false
						};

						if (item.value === curentValue) {
							setCurrentItem(item);
						}

						itemList.push(item);
					});
				} else {
					for (var key in inputValues) {
						var item = {
							title: editorParams.listItemFormatter ? editorParams.listItemFormatter(key, inputValues[key]) : inputValues[key],
							value: key,
							element: false
						};

						if (item.value === curentValue) {
							setCurrentItem(item);
						}

						itemList.push(item);
					}
				}

				allItems = itemList;
			}

			function filterList(term) {
				var matches = [];

				if (editorParams.searchFunc) {
					matches = editorParams.searchFunc(term, values);
				} else {
					if (term === "") {

						if (editorParams.showListOnEmpty) {
							allItems.forEach(function (item) {
								matches.push(item);
							});
						}
					} else {
						allItems.forEach(function (item) {

							if (item.value !== null || typeof item.value !== "undefined") {
								if (String(item.value).toLowerCase().indexOf(String(term).toLowerCase()) > -1) {
									matches.push(item);
								}
							}
						});
					}
				}

				displayItems = matches;

				fillList();
			}

			function fillList() {
				var current = false;

				while (listEl.firstChild) {
					listEl.removeChild(listEl.firstChild);
				}displayItems.forEach(function (item) {
					var el = item.element;

					if (!el) {
						el = document.createElement("div");
						el.classList.add("tabulator-edit-select-list-item");
						el.tabIndex = 0;
						el.innerHTML = item.title;

						el.addEventListener("click", function () {
							setCurrentItem(item);
							chooseItem();
						});

						el.addEventListener("mousedown", function () {
							blurable = false;

							setTimeout(function () {
								blurable = true;
							}, 10);
						});

						item.element = el;

						if (item === currentItem) {
							item.element.classList.add("active");
							current = true;
						}
					}

					listEl.appendChild(el);
				});

				if (!current) {
					setCurrentItem(false);
				}
			}

			function setCurrentItem(item, showInputValue) {
				if (currentItem && currentItem.element) {
					currentItem.element.classList.remove("active");
				}

				currentItem = item;

				if (item && item.element) {
					item.element.classList.add("active");
				}
			}

			function chooseItem() {
				hideList();

				if (currentItem) {
					if (initialValue !== currentItem.value) {
						initialValue = currentItem.value;
						input.value = currentItem.value;
						success(input.value);
					} else {
						cancel();
					}
				} else {
					if (editorParams.freetext) {
						initialValue = input.value;
						success(input.value);
					} else {
						if (editorParams.allowEmpty && input.value === "") {
							initialValue = input.value;
							success(input.value);
						} else {
							cancel();
						}
					}
				}
			}

			function cancelItem() {
				hideList();
				cancel();
			}

			function showList() {
				if (!listEl.parentNode) {
					while (listEl.firstChild) {
						listEl.removeChild(listEl.firstChild);
					}if (editorParams.values === true) {
						parseItems(getUniqueColumnValues(), initialValue);
					} else {
						parseItems(editorParams.values || [], initialValue);
					}

					var offset = Tabulator.prototype.helpers.elOffset(cellEl);

					listEl.style.minWidth = cellEl.offsetWidth + "px";

					listEl.style.top = offset.top + cellEl.offsetHeight + "px";
					listEl.style.left = offset.left + "px";
					document.body.appendChild(listEl);
				}
			}

			function hideList() {
				if (listEl.parentNode) {
					listEl.parentNode.removeChild(listEl);
				}
			}

			//style input
			input.setAttribute("type", "text");

			input.style.padding = "4px";
			input.style.width = "100%";
			input.style.boxSizing = "border-box";

			//allow key based navigation
			input.addEventListener("keydown", function (e) {
				var index;

				switch (e.keyCode) {
					case 38:
						//up arrow
						e.stopImmediatePropagation();
						e.stopPropagation();

						index = displayItems.indexOf(currentItem);

						if (index > 0) {
							setCurrentItem(displayItems[index - 1]);
						} else {
							setCurrentItem(false);
						}
						break;

					case 40:
						//down arrow
						e.stopImmediatePropagation();
						e.stopPropagation();

						index = displayItems.indexOf(currentItem);

						if (index < displayItems.length - 1) {
							if (index == -1) {
								setCurrentItem(displayItems[0]);
							} else {
								setCurrentItem(displayItems[index + 1]);
							}
						}
						break;

					case 13:
						//enter
						chooseItem();
						break;

					case 27:
						//escape
						cancelItem();
						break;
				}
			});

			input.addEventListener("keyup", function (e) {

				switch (e.keyCode) {
					case 38: //up arrow
					case 37: //left arrow
					case 39: //up arrow
					case 40: //right arrow
					case 13: //enter
					case 27:
						//escape
						break;

					default:
						filterList(input.value);
				}
			});

			input.addEventListener("blur", function (e) {
				if (blurable) {
					chooseItem();
				}
			});

			input.addEventListener("focus", function (e) {
				showList();
				input.value = initialValue;
				filterList(initialValue);
			});

			//style list element
			listEl = document.createElement("div");
			listEl.classList.add("tabulator-edit-select-list");

			onRendered(function () {
				input.style.height = "100%";
				input.focus();
			});

			return input;
		},

		//start rating
		star: function star(cell, onRendered, success, cancel, editorParams) {
			var self = this,
			    element = cell.getElement(),
			    value = cell.getValue(),
			    maxStars = element.getElementsByTagName("svg").length || 5,
			    size = element.getElementsByTagName("svg")[0] ? element.getElementsByTagName("svg")[0].getAttribute("width") : 14,
			    stars = [],
			    starsHolder = document.createElement("div"),
			    star = document.createElementNS('http://www.w3.org/2000/svg', "svg");

			//change star type
			function starChange(val) {
				stars.forEach(function (star, i) {
					if (i < val) {
						if (self.table.browser == "ie") {
							star.setAttribute("class", "tabulator-star-active");
						} else {
							star.classList.replace("tabulator-star-inactive", "tabulator-star-active");
						}

						star.innerHTML = '<polygon fill="#488CE9" stroke="#014AAE" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/>';
					} else {
						if (self.table.browser == "ie") {
							star.setAttribute("class", "tabulator-star-inactive");
						} else {
							star.classList.replace("tabulator-star-active", "tabulator-star-inactive");
						}

						star.innerHTML = '<polygon fill="#010155" stroke="#686868" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/>';
					}
				});
			}

			//build stars
			function buildStar(i) {
				var nextStar = star.cloneNode(true);

				stars.push(nextStar);

				nextStar.addEventListener("mouseover", function (e) {
					e.stopPropagation();
					starChange(i);
				});

				nextStar.addEventListener("click", function (e) {
					e.stopPropagation();
					success(i);
				});

				starsHolder.appendChild(nextStar);
			}

			//handle keyboard navigation value change
			function changeValue(val) {
				value = val;
				starChange(val);
			}

			//style cell
			element.style.whiteSpace = "nowrap";
			element.style.overflow = "hidden";
			element.style.textOverflow = "ellipsis";

			//style holding element
			starsHolder.style.verticalAlign = "middle";
			starsHolder.style.display = "inline-block";
			starsHolder.style.padding = "4px";

			//style star
			star.setAttribute("width", size);
			star.setAttribute("height", size);
			star.setAttribute("viewBox", "0 0 512 512");
			star.setAttribute("xml:space", "preserve");
			star.style.padding = "0 1px";

			//create correct number of stars
			for (var i = 1; i <= maxStars; i++) {
				buildStar(i);
			}

			//ensure value does not exceed number of stars
			value = Math.min(parseInt(value), maxStars);

			// set initial styling of stars
			starChange(value);

			starsHolder.addEventListener("mouseover", function (e) {
				starChange(0);
			});

			starsHolder.addEventListener("click", function (e) {
				success(0);
			});

			element.addEventListener("blur", function (e) {
				cancel();
			});

			//allow key based navigation
			element.addEventListener("keydown", function (e) {
				switch (e.keyCode) {
					case 39:
						//right arrow
						changeValue(value + 1);
						break;

					case 37:
						//left arrow
						changeValue(value - 1);
						break;

					case 13:
						//enter
						success(value);
						break;

					case 27:
						//escape
						cancel();
						break;
				}
			});

			return starsHolder;
		},

		//draggable progress bar
		progress: function progress(cell, onRendered, success, cancel, editorParams) {
			var element = cell.getElement(),
			    max = typeof editorParams.max === "undefined" ? element.getElementsByTagName("div")[0].getAttribute("max") || 100 : editorParams.max,
			    min = typeof editorParams.min === "undefined" ? element.getElementsByTagName("div")[0].getAttribute("min") || 0 : editorParams.min,
			    percent = (max - min) / 100,
			    value = cell.getValue() || 0,
			    handle = document.createElement("div"),
			    bar = document.createElement("div"),
			    mouseDrag,
			    mouseDragWidth;

			//set new value
			function updateValue() {
				var calcVal = percent * Math.round(bar.offsetWidth / (element.clientWidth / 100)) + min;
				success(calcVal);
				element.setAttribute("aria-valuenow", calcVal);
				element.setAttribute("aria-label", value);
			}

			//style handle
			handle.style.position = "absolute";
			handle.style.right = "0";
			handle.style.top = "0";
			handle.style.bottom = "0";
			handle.style.width = "5px";
			handle.classList.add("tabulator-progress-handle");

			//style bar
			bar.style.display = "inline-block";
			bar.style.position = "absolute";
			bar.style.top = "8px";
			bar.style.bottom = "8px";
			bar.style.left = "4px";
			bar.style.marginRight = "4px";
			bar.style.backgroundColor = "#488CE9";
			bar.style.maxWidth = "100%";
			bar.style.minWidth = "0%";

			//style cell
			element.style.padding = "0 4px";

			//make sure value is in range
			value = Math.min(parseFloat(value), max);
			value = Math.max(parseFloat(value), min);

			//workout percentage
			value = 100 - Math.round((value - min) / percent);
			bar.style.right = value + "%";

			element.setAttribute("aria-valuemin", min);
			element.setAttribute("aria-valuemax", max);

			bar.appendChild(handle);

			handle.addEventListener("mousedown", function (e) {
				mouseDrag = e.screenX;
				mouseDragWidth = bar.offsetWidth;
			});

			handle.addEventListener("mouseover", function () {
				handle.style.cursor = "ew-resize";
			});

			element.addEventListener("mousemove", function (e) {
				if (mouseDrag) {
					bar.style.width = mouseDragWidth + e.screenX - mouseDrag + "px";
				}
			});

			element.addEventListener("mouseup", function (e) {
				if (mouseDrag) {
					e.stopPropagation();
					e.stopImmediatePropagation();

					mouseDrag = false;
					mouseDragWidth = false;

					updateValue();
				}
			});

			//allow key based navigation
			element.addEventListener("keydown", function (e) {
				switch (e.keyCode) {
					case 39:
						//right arrow
						bar.style.width = bar.clientWidth + element.clientWidth / 100 + "px";
						break;

					case 37:
						//left arrow
						bar.style.width = bar.clientWidth - element.clientWidth / 100 + "px";
						break;

					case 13:
						//enter
						updateValue();
						break;

					case 27:
						//escape
						cancel();
						break;

				}
			});

			element.addEventListener("blur", function () {
				cancel();
			});

			return bar;
		},

		//checkbox
		tickCross: function tickCross(cell, onRendered, success, cancel, editorParams) {
			var value = cell.getValue(),
			    input = document.createElement("input"),
			    tristate = editorParams.tristate,
			    indetermValue = typeof editorParams.indeterminateValue === "undefined" ? null : editorParams.indeterminateValue,
			    indetermState = false;

			input.setAttribute("type", "checkbox");
			input.style.marginTop = "5px";
			input.style.boxSizing = "border-box";

			input.value = value;

			if (tristate && (typeof value === "undefined" || value === indetermValue || value === "")) {
				indetermState = true;
				input.indeterminate = true;
			}

			if (this.table.browser != "firefox") {
				//prevent blur issue on mac firefox
				onRendered(function () {
					input.focus();
				});
			}

			input.checked = value === true || value === "true" || value === "True" || value === 1;

			function setValue() {
				if (tristate) {
					if (input.checked && !indetermState) {
						input.checked = false;
						input.indeterminate = true;
						indetermState = true;
						return indetermValue;
					} else {
						indetermState = false;
						return input.checked;
					}
				} else {
					return input.checked;
				}
			}

			//submit new value on blur
			input.addEventListener("change", function (e) {
				success(setValue());
			});

			input.addEventListener("blur", function (e) {
				success(setValue());
			});

			//submit new value on enter
			input.addEventListener("keydown", function (e) {
				if (e.keyCode == 13) {
					success(setValue());
				}
				if (e.keyCode == 27) {
					cancel();
				}
			});

			return input;
		}
	};

	Tabulator.prototype.registerModule("edit", Edit);
	var Filter = function Filter(table) {

		this.table = table; //hold Tabulator object

		this.filterList = []; //hold filter list
		this.headerFilters = {}; //hold column filters
		this.headerFilterElements = []; //hold header filter elements for manipulation
		this.headerFilterColumns = []; //hold columns that use header filters

		this.changed = false; //has filtering changed since last render
	};

	//initialize column header filter
	Filter.prototype.initializeColumn = function (column, value) {
		var self = this,
		    field = column.getField(),
		    prevSuccess,
		    params;

		//handle successfull value change
		function success(value) {
			var filterType = column.modules.filter.tagType == "input" && column.modules.filter.attrType == "text" || column.modules.filter.tagType == "textarea" ? "partial" : "match",
			    type = "",
			    filterFunc;

			if (typeof prevSuccess === "undefined" || prevSuccess !== value) {

				prevSuccess = value;

				if (!column.modules.filter.emptyFunc(value)) {
					column.modules.filter.value = value;

					switch (_typeof(column.definition.headerFilterFunc)) {
						case "string":
							if (self.filters[column.definition.headerFilterFunc]) {
								type = column.definition.headerFilterFunc;
								filterFunc = function filterFunc(data) {
									return self.filters[column.definition.headerFilterFunc](value, column.getFieldValue(data));
								};
							} else {
								console.warn("Header Filter Error - Matching filter function not found: ", column.definition.headerFilterFunc);
							}
							break;

						case "function":
							filterFunc = function filterFunc(data) {
								var params = column.definition.headerFilterFuncParams || {};
								var fieldVal = column.getFieldValue(data);

								params = typeof params === "function" ? params(value, fieldVal, data) : params;

								return column.definition.headerFilterFunc(value, fieldVal, data, params);
							};

							type = filterFunc;
							break;
					}

					if (!filterFunc) {
						switch (filterType) {
							case "partial":
								filterFunc = function filterFunc(data) {
									return String(column.getFieldValue(data)).toLowerCase().indexOf(String(value).toLowerCase()) > -1;
								};
								type = "like";
								break;

							default:
								filterFunc = function filterFunc(data) {
									return column.getFieldValue(data) == value;
								};
								type = "=";
						}
					}

					self.headerFilters[field] = { value: value, func: filterFunc, type: type };
				} else {
					delete self.headerFilters[field];
				}

				self.changed = true;

				self.table.rowManager.filterRefresh();
			}
		}

		column.modules.filter = {
			success: success,
			attrType: false,
			tagType: false,
			emptyFunc: false
		};

		this.generateHeaderFilterElement(column);
	};

	Filter.prototype.generateHeaderFilterElement = function (column, initialValue) {
		var self = this,
		    success = column.modules.filter.success,
		    field = column.getField(),
		    filterElement,
		    editor,
		    editorElement,
		    cellWrapper,
		    typingTimer,
		    searchTrigger,
		    params;

		//handle aborted edit
		function cancel() {}

		if (column.modules.filter.headerElement && column.modules.filter.headerElement.parentNode) {
			column.modules.filter.headerElement.parentNode.removeChild(column.modules.filter.headerElement);
		}

		if (field) {

			//set empty value function
			column.modules.filter.emptyFunc = column.definition.headerFilterEmptyCheck || function (value) {
				return !value && value !== "0";
			};

			filterElement = document.createElement("div");
			filterElement.classList.add("tabulator-header-filter");

			//set column editor
			switch (_typeof(column.definition.headerFilter)) {
				case "string":
					if (self.table.modules.edit.editors[column.definition.headerFilter]) {
						editor = self.table.modules.edit.editors[column.definition.headerFilter];

						if ((column.definition.headerFilter === "tick" || column.definition.headerFilter === "tickCross") && !column.definition.headerFilterEmptyCheck) {
							column.modules.filter.emptyFunc = function (value) {
								return value !== true && value !== false;
							};
						}
					} else {
						console.warn("Filter Error - Cannot build header filter, No such editor found: ", column.definition.editor);
					}
					break;

				case "function":
					editor = column.definition.headerFilter;
					break;

				case "boolean":
					if (column.modules.edit && column.modules.edit.editor) {
						editor = column.modules.edit.editor;
					} else {
						if (column.definition.formatter && self.table.modules.edit.editors[column.definition.formatter]) {
							editor = self.table.modules.edit.editors[column.definition.formatter];

							if ((column.definition.formatter === "tick" || column.definition.formatter === "tickCross") && !column.definition.headerFilterEmptyCheck) {
								column.modules.filter.emptyFunc = function (value) {
									return value !== true && value !== false;
								};
							}
						} else {
							editor = self.table.modules.edit.editors["input"];
						}
					}
					break;
			}

			if (editor) {

				cellWrapper = {
					getValue: function getValue() {
						return typeof initialValue !== "undefined" ? initialValue : "";
					},
					getField: function getField() {
						return column.definition.field;
					},
					getElement: function getElement() {
						return filterElement;
					},
					getRow: function getRow() {
						return {
							normalizeHeight: function normalizeHeight() {}
						};
					}
				};

				params = column.definition.headerFilterParams || {};

				params = typeof params === "function" ? params.call(self.table) : params;

				editorElement = editor.call(this.table.modules.edit, cellWrapper, function () {}, success, cancel, params);

				if (!editorElement) {
					console.warn("Filter Error - Cannot add filter to " + field + " column, editor returned a value of false");
					return;
				}

				if (!(editorElement instanceof Node)) {
					console.warn("Filter Error - Cannot add filter to " + field + " column, editor should return an instance of Node, the editor returned:", editorElement);
					return;
				}

				//set Placeholder Text
				if (field) {
					self.table.modules.localize.bind("headerFilters|columns|" + column.definition.field, function (value) {
						editorElement.setAttribute("placeholder", typeof value !== "undefined" && value ? value : self.table.modules.localize.getText("headerFilters|default"));
					});
				} else {
					self.table.modules.localize.bind("headerFilters|default", function (value) {
						editorElement.setAttribute("placeholder", typeof self.column.definition.headerFilterPlaceholder !== "undefined" && self.column.definition.headerFilterPlaceholder ? self.column.definition.headerFilterPlaceholder : value);
					});
				}

				//focus on element on click
				editorElement.addEventListener("click", function (e) {
					e.stopPropagation();
					editorElement.focus();
				});

				//live update filters as user types
				typingTimer = false;

				searchTrigger = function searchTrigger(e) {
					if (typingTimer) {
						clearTimeout(typingTimer);
					}

					typingTimer = setTimeout(function () {
						success(editorElement.value);
					}, 300);
				};

				column.modules.filter.headerElement = editorElement;
				column.modules.filter.attrType = editorElement.hasAttribute("type") ? editorElement.getAttribute("type").toLowerCase() : "";
				column.modules.filter.tagType = editorElement.tagName.toLowerCase();

				if (column.definition.headerFilterLiveFilter !== false) {

					if (!(column.definition.headerFilter === "autocomplete" || column.definition.editor === "autocomplete" && column.definition.headerFilter === true)) {
						editorElement.addEventListener("keyup", searchTrigger);
						editorElement.addEventListener("search", searchTrigger);

						//update number filtered columns on change
						if (column.modules.filter.attrType == "number") {
							editorElement.addEventListener("change", function (e) {
								success(editorElement.value);
							});
						}

						//change text inputs to search inputs to allow for clearing of field
						if (column.modules.filter.attrType == "text" && this.table.browser !== "ie") {
							editorElement.setAttribute("type", "search");
							// editorElement.off("change blur"); //prevent blur from triggering filter and preventing selection click
						}
					}

					//prevent input and select elements from propegating click to column sorters etc
					if (column.modules.filter.tagType == "input" || column.modules.filter.tagType == "select" || column.modules.filter.tagType == "textarea") {
						editorElement.addEventListener("mousedown", function (e) {
							e.stopPropagation();
						});
					}
				}

				filterElement.appendChild(editorElement);

				column.contentElement.appendChild(filterElement);

				self.headerFilterElements.push(editorElement);
				self.headerFilterColumns.push(column);
			}
		} else {
			console.warn("Filter Error - Cannot add header filter, column has no field set:", column.definition.title);
		}
	};

	//hide all header filter elements (used to ensure correct column widths in "fitData" layout mode)
	Filter.prototype.hideHeaderFilterElements = function () {
		this.headerFilterElements.forEach(function (element) {
			element.style.display = 'none';
		});
	};

	//show all header filter elements (used to ensure correct column widths in "fitData" layout mode)
	Filter.prototype.showHeaderFilterElements = function () {
		this.headerFilterElements.forEach(function (element) {
			element.style.display = '';
		});
	};

	//programatically set value of header filter
	Filter.prototype.setHeaderFilterFocus = function (column) {
		if (column.modules.filter && column.modules.filter.headerElement) {
			column.modules.filter.headerElement.focus();
		} else {
			console.warn("Column Filter Focus Error - No header filter set on column:", column.getField());
		}
	};

	//programatically set value of header filter
	Filter.prototype.setHeaderFilterValue = function (column, value) {
		if (column) {
			if (column.modules.filter && column.modules.filter.headerElement) {
				this.generateHeaderFilterElement(column, value);
				column.modules.filter.success(value);
			} else {
				console.warn("Column Filter Error - No header filter set on column:", column.getField());
			}
		}
	};

	Filter.prototype.reloadHeaderFilter = function (column) {
		if (column) {
			if (column.modules.filter && column.modules.filter.headerElement) {
				this.generateHeaderFilterElement(column, column.modules.filter.value);
			} else {
				console.warn("Column Filter Error - No header filter set on column:", column.getField());
			}
		}
	};

	//check if the filters has changed since last use
	Filter.prototype.hasChanged = function () {
		var changed = this.changed;
		this.changed = false;
		return changed;
	};

	//set standard filters
	Filter.prototype.setFilter = function (field, type, value) {
		var self = this;

		self.filterList = [];

		if (!Array.isArray(field)) {
			field = [{ field: field, type: type, value: value }];
		}

		self.addFilter(field);
	};

	//add filter to array
	Filter.prototype.addFilter = function (field, type, value) {
		var self = this;

		if (!Array.isArray(field)) {
			field = [{ field: field, type: type, value: value }];
		}

		field.forEach(function (filter) {

			filter = self.findFilter(filter);

			if (filter) {
				self.filterList.push(filter);

				self.changed = true;
			}
		});

		if (this.table.options.persistentFilter && this.table.modExists("persistence", true)) {
			this.table.modules.persistence.save("filter");
		}
	};

	Filter.prototype.findFilter = function (filter) {
		var self = this,
		    column;

		if (Array.isArray(filter)) {
			return this.findSubFilters(filter);
		}

		var filterFunc = false;

		if (typeof filter.field == "function") {
			filterFunc = function filterFunc(data) {
				return filter.field(data, filter.type || {}); // pass params to custom filter function
			};
		} else {

			if (self.filters[filter.type]) {

				column = self.table.columnManager.getColumnByField(filter.field);

				if (column) {
					filterFunc = function filterFunc(data) {
						return self.filters[filter.type](filter.value, column.getFieldValue(data));
					};
				} else {
					filterFunc = function filterFunc(data) {
						return self.filters[filter.type](filter.value, data[filter.field]);
					};
				}
			} else {
				console.warn("Filter Error - No such filter type found, ignoring: ", filter.type);
			}
		}

		filter.func = filterFunc;

		return filter.func ? filter : false;
	};

	Filter.prototype.findSubFilters = function (filters) {
		var self = this,
		    output = [];

		filters.forEach(function (filter) {
			filter = self.findFilter(filter);

			if (filter) {
				output.push(filter);
			}
		});

		return output.length ? output : false;
	};

	//get all filters
	Filter.prototype.getFilters = function (all, ajax) {
		var self = this,
		    output = [];

		if (all) {
			output = self.getHeaderFilters();
		}

		self.filterList.forEach(function (filter) {
			output.push({ field: filter.field, type: filter.type, value: filter.value });
		});

		if (ajax) {
			output.forEach(function (item) {
				if (typeof item.type == "function") {
					item.type = "function";
				}
			});
		}

		return output;
	};

	//get all filters
	Filter.prototype.getHeaderFilters = function () {
		var self = this,
		    output = [];

		for (var key in this.headerFilters) {
			output.push({ field: key, type: this.headerFilters[key].type, value: this.headerFilters[key].value });
		}

		return output;
	};

	//remove filter from array
	Filter.prototype.removeFilter = function (field, type, value) {
		var self = this;

		if (!Array.isArray(field)) {
			field = [{ field: field, type: type, value: value }];
		}

		field.forEach(function (filter) {
			var index = -1;

			if (_typeof(filter.field) == "object") {
				index = self.filterList.findIndex(function (element) {
					return filter === element;
				});
			} else {
				index = self.filterList.findIndex(function (element) {
					return filter.field === element.field && filter.type === element.type && filter.value === element.value;
				});
			}

			if (index > -1) {
				self.filterList.splice(index, 1);
				self.changed = true;
			} else {
				console.warn("Filter Error - No matching filter type found, ignoring: ", filter.type);
			}
		});

		if (this.table.options.persistentFilter && this.table.modExists("persistence", true)) {
			this.table.modules.persistence.save("filter");
		}
	};

	//clear filters
	Filter.prototype.clearFilter = function (all) {
		this.filterList = [];

		if (all) {
			this.clearHeaderFilter();
		}

		this.changed = true;

		if (this.table.options.persistentFilter && this.table.modExists("persistence", true)) {
			this.table.modules.persistence.save("filter");
		}
	};

	//clear header filters
	Filter.prototype.clearHeaderFilter = function () {
		var self = this;

		this.headerFilters = {};

		this.headerFilterColumns.forEach(function (column) {
			column.modules.filter.value = null;
			self.reloadHeaderFilter(column);
		});

		this.changed = true;
	};

	//search data and return matching rows
	Filter.prototype.search = function (searchType, field, type, value) {
		var self = this,
		    activeRows = [],
		    filterList = [];

		if (!Array.isArray(field)) {
			field = [{ field: field, type: type, value: value }];
		}

		field.forEach(function (filter) {
			filter = self.findFilter(filter);

			if (filter) {
				filterList.push(filter);
			}
		});

		this.table.rowManager.rows.forEach(function (row) {
			var match = true;

			filterList.forEach(function (filter) {
				if (!self.filterRecurse(filter, row.getData())) {
					match = false;
				}
			});

			if (match) {
				activeRows.push(searchType === "data" ? row.getData("data") : row.getComponent());
			}
		});

		return activeRows;
	};

	//filter row array
	Filter.prototype.filter = function (rowList, filters) {
		var self = this,
		    activeRows = [],
		    activeRowComponents = [];

		if (self.table.options.dataFiltering) {
			self.table.options.dataFiltering.call(self.table, self.getFilters());
		}

		if (!self.table.options.ajaxFiltering && (self.filterList.length || Object.keys(self.headerFilters).length)) {

			rowList.forEach(function (row) {
				if (self.filterRow(row)) {
					activeRows.push(row);
				}
			});
		} else {
			activeRows = rowList.slice(0);
		}

		if (self.table.options.dataFiltered) {

			activeRows.forEach(function (row) {
				activeRowComponents.push(row.getComponent());
			});

			self.table.options.dataFiltered.call(self.table, self.getFilters(), activeRowComponents);
		}

		return activeRows;
	};

	//filter individual row
	Filter.prototype.filterRow = function (row, filters) {
		var self = this,
		    match = true,
		    data = row.getData();

		self.filterList.forEach(function (filter) {
			if (!self.filterRecurse(filter, data)) {
				match = false;
			}
		});

		for (var field in self.headerFilters) {
			if (!self.headerFilters[field].func(data)) {
				match = false;
			}
		}

		return match;
	};

	Filter.prototype.filterRecurse = function (filter, data) {
		var self = this,
		    match = false;

		if (Array.isArray(filter)) {
			filter.forEach(function (subFilter) {
				if (self.filterRecurse(subFilter, data)) {
					match = true;
				}
			});
		} else {
			match = filter.func(data);
		}

		return match;
	};

	//list of available filters
	Filter.prototype.filters = {

		//equal to
		"=": function _(filterVal, rowVal) {
			return rowVal == filterVal ? true : false;
		},

		//less than
		"<": function _(filterVal, rowVal) {
			return rowVal < filterVal ? true : false;
		},

		//less than or equal to
		"<=": function _(filterVal, rowVal) {
			return rowVal <= filterVal ? true : false;
		},

		//greater than
		">": function _(filterVal, rowVal) {
			return rowVal > filterVal ? true : false;
		},

		//greater than or equal to
		">=": function _(filterVal, rowVal) {
			return rowVal >= filterVal ? true : false;
		},

		//not equal to
		"!=": function _(filterVal, rowVal) {
			return rowVal != filterVal ? true : false;
		},

		"regex": function regex(filterVal, rowVal) {

			if (typeof filterVal == "string") {
				filterVal = new RegExp(filterVal);
			}

			return filterVal.test(rowVal);
		},

		//contains the string
		"like": function like(filterVal, rowVal) {
			if (filterVal === null || typeof filterVal === "undefined") {
				return rowVal === filterVal ? true : false;
			} else {
				if (typeof rowVal !== 'undefined' && rowVal !== null) {
					return String(rowVal).toLowerCase().indexOf(filterVal.toLowerCase()) > -1 ? true : false;
				} else {
					return false;
				}
			}
		},

		//in array
		"in": function _in(filterVal, rowVal) {
			if (Array.isArray(filterVal)) {
				return filterVal.indexOf(rowVal) > -1;
			} else {
				console.warn("Filter Error - filter value is not an array:", filterVal);
				return false;
			}
		}
	};

	Tabulator.prototype.registerModule("filter", Filter);
	var Format = function Format(table) {
		this.table = table; //hold Tabulator object
	};

	//initialize column formatter
	Format.prototype.initializeColumn = function (column) {
		var self = this,
		    config = { params: column.definition.formatterParams || {} };

		//set column formatter
		switch (_typeof(column.definition.formatter)) {
			case "string":

				if (column.definition.formatter === "tick") {
					column.definition.formatter = "tickCross";

					if (typeof column.definition.formatterParams.crossElement == "undefined") {
						column.definition.formatterParams.crossElement = false;
					}

					console.warn("DEPRICATION WANRING - the tick formatter has been depricated, please use the tickCross formatter with the crossElement param set to false");
				}

				if (self.formatters[column.definition.formatter]) {
					config.formatter = self.formatters[column.definition.formatter];
				} else {
					console.warn("Formatter Error - No such formatter found: ", column.definition.formatter);
					config.formatter = self.formatters.plaintext;
				}
				break;

			case "function":
				config.formatter = column.definition.formatter;
				break;

			default:
				config.formatter = self.formatters.plaintext;
				break;
		}

		column.modules.format = config;
	};

	Format.prototype.cellRendered = function (cell) {
		if (cell.column.modules.format.renderedCallback) {
			cell.column.modules.format.renderedCallback();
		}
	};

	//return a formatted value for a cell
	Format.prototype.formatValue = function (cell) {
		var component = cell.getComponent(),
		    params = typeof cell.column.modules.format.params === "function" ? cell.column.modules.format.params(component) : cell.column.modules.format.params;

		function onRendered(callback) {
			cell.column.modules.format.renderedCallback = callback;
		}

		return cell.column.modules.format.formatter.call(this, component, params, onRendered);
	};

	Format.prototype.sanitizeHTML = function (value) {
		if (value) {
			var entityMap = {
				'&': '&amp;',
				'<': '&lt;',
				'>': '&gt;',
				'"': '&quot;',
				"'": '&#39;',
				'/': '&#x2F;',
				'`': '&#x60;',
				'=': '&#x3D;'
			};

			return String(value).replace(/[&<>"'`=\/]/g, function (s) {
				return entityMap[s];
			});
		} else {
			return value;
		}
	};

	Format.prototype.emptyToSpace = function (value) {
		return value === null || typeof value === "undefined" ? "&nbsp" : value;
	};

	//get formatter for cell
	Format.prototype.getFormatter = function (formatter) {
		var formatter;

		switch (typeof formatter === 'undefined' ? 'undefined' : _typeof(formatter)) {
			case "string":
				if (this.formatters[formatter]) {
					formatter = this.formatters[formatter];
				} else {
					console.warn("Formatter Error - No such formatter found: ", formatter);
					formatter = this.formatters.plaintext;
				}
				break;

			case "function":
				formatter = formatter;
				break;

			default:
				formatter = this.formatters.plaintext;
				break;
		}

		return formatter;
	};

	//default data formatters
	Format.prototype.formatters = {
		//plain text value
		plaintext: function plaintext(cell, formatterParams, onRendered) {
			return this.emptyToSpace(this.sanitizeHTML(cell.getValue()));
		},

		//html text value
		html: function html(cell, formatterParams, onRendered) {
			return cell.getValue();
		},

		//multiline text area
		textarea: function textarea(cell, formatterParams, onRendered) {
			cell.getElement().style.whiteSpace = "pre-wrap";
			return this.emptyToSpace(this.sanitizeHTML(cell.getValue()));
		},

		//currency formatting
		money: function money(cell, formatterParams, onRendered) {
			var floatVal = parseFloat(cell.getValue()),
			    number,
			    integer,
			    decimal,
			    rgx;

			var decimalSym = formatterParams.decimal || ".";
			var thousandSym = formatterParams.thousand || ",";
			var symbol = formatterParams.symbol || "";
			var after = !!formatterParams.symbolAfter;
			var precision = typeof formatterParams.precision !== "undefined" ? formatterParams.precision : 2;

			if (isNaN(floatVal)) {
				return this.emptyToSpace(this.sanitizeHTML(cell.getValue()));
			}

			number = precision !== false ? floatVal.toFixed(precision) : floatVal;
			number = String(number).split(".");

			integer = number[0];
			decimal = number.length > 1 ? decimalSym + number[1] : "";

			rgx = /(\d+)(\d{3})/;

			while (rgx.test(integer)) {
				integer = integer.replace(rgx, "$1" + thousandSym + "$2");
			}

			return after ? integer + decimal + symbol : symbol + integer + decimal;
		},

		//clickable anchor tag
		link: function link(cell, formatterParams, onRendered) {
			var value = this.sanitizeHTML(cell.getValue()),
			    urlPrefix = formatterParams.urlPrefix || "",
			    label = this.emptyToSpace(value),
			    el = document.createElement("a"),
			    data;

			if (formatterParams.labelField) {
				data = cell.getData();
				label = data[formatterParams.labelField];
			}

			if (formatterParams.label) {
				switch (_typeof(formatterParams.label)) {
					case "string":
						label = formatterParams.label;
						break;

					case "function":
						label = formatterParams.label(cell);
						break;
				}
			}

			if (formatterParams.urlField) {
				data = cell.getData();
				value = data[formatterParams.urlField];
			}

			if (formatterParams.url) {
				switch (_typeof(formatterParams.url)) {
					case "string":
						value = formatterParams.url;
						break;

					case "function":
						value = formatterParams.url(cell);
						break;
				}
			}

			el.setAttribute("href", urlPrefix + value);

			if (formatterParams.target) {
				el.setAttribute("target", formatterParams.target);
			}

			el.innerHTML = this.emptyToSpace(label);

			return el;
		},

		//image element
		image: function image(cell, formatterParams, onRendered) {
			var el = document.createElement("img");
			el.setAttribute("src", cell.getValue());

			switch (_typeof(formatterParams.height)) {
				case "number":
					element.style.height = formatterParams.height + "px";
					break;

				case "string":
					element.style.height = formatterParams.height;
					break;
			}

			switch (_typeof(formatterParams.width)) {
				case "number":
					element.style.width = formatterParams.width + "px";
					break;

				case "string":
					element.style.width = formatterParams.width;
					break;
			}

			el.addEventListener("load", function () {
				cell.getRow().normalizeHeight();
			});

			return el;
		},

		//tick or cross
		tickCross: function tickCross(cell, formatterParams, onRendered) {
			var value = cell.getValue(),
			    element = cell.getElement(),
			    empty = formatterParams.allowEmpty,
			    truthy = formatterParams.allowTruthy,
			    tick = typeof formatterParams.tickElement !== "undefined" ? formatterParams.tickElement : '<svg enable-background="new 0 0 24 24" height="14" width="14" viewBox="0 0 24 24" xml:space="preserve" ><path fill="#2DC214" clip-rule="evenodd" d="M21.652,3.211c-0.293-0.295-0.77-0.295-1.061,0L9.41,14.34  c-0.293,0.297-0.771,0.297-1.062,0L3.449,9.351C3.304,9.203,3.114,9.13,2.923,9.129C2.73,9.128,2.534,9.201,2.387,9.351  l-2.165,1.946C0.078,11.445,0,11.63,0,11.823c0,0.194,0.078,0.397,0.223,0.544l4.94,5.184c0.292,0.296,0.771,0.776,1.062,1.07  l2.124,2.141c0.292,0.293,0.769,0.293,1.062,0l14.366-14.34c0.293-0.294,0.293-0.777,0-1.071L21.652,3.211z" fill-rule="evenodd"/></svg>',
			    cross = typeof formatterParams.crossElement !== "undefined" ? formatterParams.crossElement : '<svg enable-background="new 0 0 24 24" height="14" width="14"  viewBox="0 0 24 24" xml:space="preserve" ><path fill="#CE1515" d="M22.245,4.015c0.313,0.313,0.313,0.826,0,1.139l-6.276,6.27c-0.313,0.312-0.313,0.826,0,1.14l6.273,6.272  c0.313,0.313,0.313,0.826,0,1.14l-2.285,2.277c-0.314,0.312-0.828,0.312-1.142,0l-6.271-6.271c-0.313-0.313-0.828-0.313-1.141,0  l-6.276,6.267c-0.313,0.313-0.828,0.313-1.141,0l-2.282-2.28c-0.313-0.313-0.313-0.826,0-1.14l6.278-6.269  c0.313-0.312,0.313-0.826,0-1.14L1.709,5.147c-0.314-0.313-0.314-0.827,0-1.14l2.284-2.278C4.308,1.417,4.821,1.417,5.135,1.73  L11.405,8c0.314,0.314,0.828,0.314,1.141,0.001l6.276-6.267c0.312-0.312,0.826-0.312,1.141,0L22.245,4.015z"/></svg>';

			if (truthy && value || value === true || value === "true" || value === "True" || value === 1 || value === "1") {
				element.setAttribute("aria-checked", true);
				return tick || "";
			} else {
				if (empty && (value === "null" || value === "" || value === null || typeof value === "undefined")) {
					element.setAttribute("aria-checked", "mixed");
					return "";
				} else {
					element.setAttribute("aria-checked", false);
					return cross || "";
				}
			}
		},

		datetime: function datetime(cell, formatterParams, onRendered) {
			var inputFormat = formatterParams.inputFormat || "YYYY-MM-DD hh:mm:ss";
			var outputFormat = formatterParams.outputFormat || "DD/MM/YYYY hh:mm:ss";
			var invalid = typeof formatterParams.invalidPlaceholder !== "undefined" ? formatterParams.invalidPlaceholder : "";
			var value = cell.getValue();

			var newDatetime = moment(value, inputFormat);

			if (newDatetime.isValid()) {
				return newDatetime.format(outputFormat);
			} else {

				if (invalid === true) {
					return value;
				} else if (typeof invalid === "function") {
					return invalid(value);
				} else {
					return invalid;
				}
			}
		},

		datetimediff: function datetime(cell, formatterParams, onRendered) {
			var inputFormat = formatterParams.inputFormat || "YYYY-MM-DD hh:mm:ss";
			var invalid = typeof formatterParams.invalidPlaceholder !== "undefined" ? formatterParams.invalidPlaceholder : "";
			var suffix = typeof formatterParams.suffix !== "undefined" ? formatterParams.suffix : false;
			var unit = typeof formatterParams.unit !== "undefined" ? formatterParams.unit : undefined;
			var humanize = typeof formatterParams.humanize !== "undefined" ? formatterParams.humanize : false;
			var date = typeof formatterParams.date !== "undefined" ? formatterParams.date : moment();
			var value = cell.getValue();

			var newDatetime = moment(value, inputFormat);

			if (newDatetime.isValid()) {
				if (humanize) {
					return moment.duration(newDatetime.diff(date)).humanize(suffix);
				} else {
					return newDatetime.diff(date, unit) + (suffix ? " " + suffix : "");
				}
			} else {

				if (invalid === true) {
					return value;
				} else if (typeof invalid === "function") {
					return invalid(value);
				} else {
					return invalid;
				}
			}
		},

		//select
		lookup: function lookup(cell, formatterParams, onRendered) {
			var value = cell.getValue();

			if (typeof formatterParams[value] === "undefined") {
				console.warn('Missing display value for ' + value);
				return value;
			}

			return formatterParams[value];
		},

		//star rating
		star: function star(cell, formatterParams, onRendered) {
			var value = cell.getValue(),
			    element = cell.getElement(),
			    maxStars = formatterParams && formatterParams.stars ? formatterParams.stars : 5,
			    stars = document.createElement("span"),
			    star = document.createElementNS('http://www.w3.org/2000/svg', "svg"),
			    starActive = '<polygon fill="#FFEA00" stroke="#C1AB60" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/>',
			    starInactive = '<polygon fill="#D2D2D2" stroke="#686868" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/>';

			//style stars holder
			stars.style.verticalAlign = "middle";

			//style star
			star.setAttribute("width", "14");
			star.setAttribute("height", "14");
			star.setAttribute("viewBox", "0 0 512 512");
			star.setAttribute("xml:space", "preserve");
			star.style.padding = "0 1px";

			value = parseInt(value) < maxStars ? parseInt(value) : maxStars;

			for (var i = 1; i <= maxStars; i++) {
				var nextStar = star.cloneNode(true);
				nextStar.innerHTML = i <= value ? starActive : starInactive;

				stars.appendChild(nextStar);
			}

			element.style.whiteSpace = "nowrap";
			element.style.overflow = "hidden";
			element.style.textOverflow = "ellipsis";

			element.setAttribute("aria-label", value);

			return stars;
		},

		//progress bar
		progress: function progress(cell, formatterParams, onRendered) {
			//progress bar
			var value = this.sanitizeHTML(cell.getValue()) || 0,
			    element = cell.getElement(),
			    max = formatterParams && formatterParams.max ? formatterParams.max : 100,
			    min = formatterParams && formatterParams.min ? formatterParams.min : 0,
			    legendAlign = formatterParams && formatterParams.legendAlign ? formatterParams.legendAlign : "center",
			    percent,
			    percentValue,
			    color,
			    legend,
			    legendColor,
			    top,
			    left,
			    right,
			    bottom;

			//make sure value is in range
			percentValue = parseFloat(value) <= max ? parseFloat(value) : max;
			percentValue = parseFloat(percentValue) >= min ? parseFloat(percentValue) : min;

			//workout percentage
			percent = (max - min) / 100;
			percentValue = Math.round((percentValue - min) / percent);

			//set bar color
			switch (_typeof(formatterParams.color)) {
				case "string":
					color = formatterParams.color;
					break;
				case "function":
					color = formatterParams.color(value);
					break;
				case "object":
					if (Array.isArray(formatterParams.color)) {
						var unit = 100 / formatterParams.color.length;
						var index = Math.floor(percentValue / unit);

						index = Math.min(index, formatterParams.color.length - 1);
						index = Math.max(index, 0);
						color = formatterParams.color[index];
						break;
					}
				default:
					color = "#2DC214";
			}

			//generate legend
			switch (_typeof(formatterParams.legend)) {
				case "string":
					legend = formatterParams.legend;
					break;
				case "function":
					legend = formatterParams.legend(value);
					break;
				case "boolean":
					legend = value;
					break;
				default:
					legend = false;
			}

			//set legend color
			switch (_typeof(formatterParams.legendColor)) {
				case "string":
					legendColor = formatterParams.legendColor;
					break;
				case "function":
					legendColor = formatterParams.legendColor(value);
					break;
				case "object":
					if (Array.isArray(formatterParams.legendColor)) {
						var unit = 100 / formatterParams.legendColor.length;
						var index = Math.floor(percentValue / unit);

						index = Math.min(index, formatterParams.legendColor.length - 1);
						index = Math.max(index, 0);
						legendColor = formatterParams.legendColor[index];
					}
					break;
				default:
					legendColor = "#000";
			}

			element.style.minWidth = "30px";
			element.style.position = "relative";

			element.setAttribute("aria-label", percentValue);

			return "<div style='position:absolute; top:8px; bottom:8px; left:4px; right:4px;'  data-max='" + max + "' data-min='" + min + "'><div style='position:relative; height:100%; width:calc(" + percentValue + "%); background-color:" + color + "; display:inline-block;'></div></div>" + (legend ? "<div style='position:absolute; top:4px; left:0; text-align:" + legendAlign + "; width:100%; color:" + legendColor + ";'>" + legend + "</div>" : "");
		},

		//background color
		color: function color(cell, formatterParams, onRendered) {
			cell.getElement().style.backgroundColor = this.sanitizeHTML(cell.getValue());
			return "";
		},

		//tick icon
		buttonTick: function buttonTick(cell, formatterParams, onRendered) {
			return '<svg enable-background="new 0 0 24 24" height="14" width="14" viewBox="0 0 24 24" xml:space="preserve" ><path fill="#2DC214" clip-rule="evenodd" d="M21.652,3.211c-0.293-0.295-0.77-0.295-1.061,0L9.41,14.34  c-0.293,0.297-0.771,0.297-1.062,0L3.449,9.351C3.304,9.203,3.114,9.13,2.923,9.129C2.73,9.128,2.534,9.201,2.387,9.351  l-2.165,1.946C0.078,11.445,0,11.63,0,11.823c0,0.194,0.078,0.397,0.223,0.544l4.94,5.184c0.292,0.296,0.771,0.776,1.062,1.07  l2.124,2.141c0.292,0.293,0.769,0.293,1.062,0l14.366-14.34c0.293-0.294,0.293-0.777,0-1.071L21.652,3.211z" fill-rule="evenodd"/></svg>';
		},

		//cross icon
		buttonCross: function buttonCross(cell, formatterParams, onRendered) {
			return '<svg enable-background="new 0 0 24 24" height="14" width="14" viewBox="0 0 24 24" xml:space="preserve" ><path fill="#CE1515" d="M22.245,4.015c0.313,0.313,0.313,0.826,0,1.139l-6.276,6.27c-0.313,0.312-0.313,0.826,0,1.14l6.273,6.272  c0.313,0.313,0.313,0.826,0,1.14l-2.285,2.277c-0.314,0.312-0.828,0.312-1.142,0l-6.271-6.271c-0.313-0.313-0.828-0.313-1.141,0  l-6.276,6.267c-0.313,0.313-0.828,0.313-1.141,0l-2.282-2.28c-0.313-0.313-0.313-0.826,0-1.14l6.278-6.269  c0.313-0.312,0.313-0.826,0-1.14L1.709,5.147c-0.314-0.313-0.314-0.827,0-1.14l2.284-2.278C4.308,1.417,4.821,1.417,5.135,1.73  L11.405,8c0.314,0.314,0.828,0.314,1.141,0.001l6.276-6.267c0.312-0.312,0.826-0.312,1.141,0L22.245,4.015z"/></svg>';
		},

		//current row number
		rownum: function rownum(cell, formatterParams, onRendered) {
			return this.table.rowManager.activeRows.indexOf(cell.getRow()._getSelf()) + 1;
		},

		//row handle
		handle: function handle(cell, formatterParams, onRendered) {
			cell.getElement().classList.add("tabulator-row-handle");
			return "<div class='tabulator-row-handle-box'><div class='tabulator-row-handle-bar'></div><div class='tabulator-row-handle-bar'></div><div class='tabulator-row-handle-bar'></div></div>";
		},

		responsiveCollapse: function responsiveCollapse(cell, formatterParams, onRendered) {
			var self = this,
			    open = false,
			    el = document.createElement("div");

			function toggleList(isOpen) {
				var collapse = cell.getRow().getElement().getElementsByClassName("tabulator-responsive-collapse")[0];

				open = isOpen;

				if (open) {
					el.classList.add("open");
					if (collapse) {
						collapse.style.display = '';
					}
				} else {
					el.classList.remove("open");
					if (collapse) {
						collapse.style.display = 'none';
					}
				}
			}

			el.classList.add("tabulator-responsive-collapse-toggle");
			el.innerHTML = "<span class='tabulator-responsive-collapse-toggle-open'>+</span><span class='tabulator-responsive-collapse-toggle-close'>-</span>";

			cell.getElement().classList.add("tabulator-row-handle");

			if (self.table.options.responsiveLayoutCollapseStartOpen) {
				open = true;
			}

			el.addEventListener("click", function () {
				toggleList(!open);
			});

			toggleList(open);

			return el;
		}
	};

	Tabulator.prototype.registerModule("format", Format);
	var FrozenColumns = function FrozenColumns(table) {
		this.table = table; //hold Tabulator object
		this.leftColumns = [];
		this.rightColumns = [];
		this.leftMargin = 0;
		this.rightMargin = 0;
		this.initializationMode = "left";
		this.active = false;
	};

	//reset initial state
	FrozenColumns.prototype.reset = function () {
		this.initializationMode = "left";
		this.leftColumns = [];
		this.rightColumns = [];
		this.active = false;
	};

	//initialize specific column
	FrozenColumns.prototype.initializeColumn = function (column) {
		var config = { margin: 0, edge: false };

		if (column.definition.frozen) {

			if (!column.parent.isGroup) {

				if (!column.isGroup) {
					config.position = this.initializationMode;

					if (this.initializationMode == "left") {
						this.leftColumns.push(column);
					} else {
						this.rightColumns.unshift(column);
					}

					this.active = true;

					column.modules.frozen = config;
				} else {
					console.warn("Frozen Column Error - Column Groups cannot be frozen");
				}
			} else {
				console.warn("Frozen Column Error - Grouped columns cannot be frozen");
			}
		} else {
			this.initializationMode = "right";
		}
	};

	//layout columns appropropriatly
	FrozenColumns.prototype.layout = function () {
		var self = this,
		    tableHolder = this.table.rowManager.element,
		    rightMargin = 0;

		if (self.active) {

			//calculate row padding

			self.leftMargin = self._calcSpace(self.leftColumns, self.leftColumns.length);
			self.table.columnManager.headersElement.style.marginLeft = self.leftMargin + "px";

			self.rightMargin = self._calcSpace(self.rightColumns, self.rightColumns.length);
			self.table.columnManager.element.style.paddingRight = self.rightMargin + "px";

			self.table.rowManager.activeRows.forEach(function (row) {
				self.layoutRow(row);
			});

			if (self.table.modExists("columnCalcs")) {
				if (self.table.modules.columnCalcs.topInitialized && self.table.modules.columnCalcs.topRow) {
					self.layoutRow(self.table.modules.columnCalcs.topRow);
				}
				if (self.table.modules.columnCalcs.botInitialized && self.table.modules.columnCalcs.botRow) {
					self.layoutRow(self.table.modules.columnCalcs.botRow);
				}
			}

			//calculate left columns
			self.leftColumns.forEach(function (column, i) {
				column.modules.frozen.margin = self._calcSpace(self.leftColumns, i) + self.table.columnManager.scrollLeft;

				if (i == self.leftColumns.length - 1) {
					column.modules.frozen.edge = true;
				} else {
					column.modules.frozen.edge = false;
				}

				self.layoutColumn(column);
			});

			//calculate right frozen columns
			rightMargin = self.table.rowManager.element.clientWidth + self.table.columnManager.scrollLeft;

			// if(tableHolder.scrollHeight > tableHolder.clientHeight){
			// 	rightMargin -= tableHolder.offsetWidth - tableHolder.clientWidth;
			// }

			self.rightColumns.forEach(function (column, i) {
				column.modules.frozen.margin = rightMargin - self._calcSpace(self.rightColumns, i + 1);

				if (i == self.rightColumns.length - 1) {
					column.modules.frozen.edge = true;
				} else {
					column.modules.frozen.edge = false;
				}

				self.layoutColumn(column);
			});
		}
	};

	FrozenColumns.prototype.layoutColumn = function (column) {
		var self = this;

		self.layoutElement(column.getElement(), column);

		column.cells.forEach(function (cell) {
			self.layoutElement(cell.getElement(), column);
		});
	};

	FrozenColumns.prototype.layoutRow = function (row) {
		var rowEl = row.getElement();

		rowEl.style.paddingLeft = this.leftMargin + "px";
		// rowEl.style.paddingRight = this.rightMargin + "px";
	};

	FrozenColumns.prototype.layoutElement = function (element, column) {

		if (column.modules.frozen) {
			element.style.position = "absolute";
			element.style.left = column.modules.frozen.margin + "px";

			element.classList.add("tabulator-frozen");

			if (column.modules.frozen.edge) {
				element.classList.add("tabulator-frozen-" + column.modules.frozen.position);
			}
		}
	};

	FrozenColumns.prototype._calcSpace = function (columns, index) {
		var width = 0;

		for (var i = 0; i < index; i++) {
			if (columns[i].visible) {
				width += columns[i].getWidth();
			}
		}

		return width;
	};

	Tabulator.prototype.registerModule("frozenColumns", FrozenColumns);
	var FrozenRows = function FrozenRows(table) {
		this.table = table; //hold Tabulator object
		this.topElement = document.createElement("div");
		this.rows = [];
		this.displayIndex = 0; //index in display pipeline
	};

	FrozenRows.prototype.initialize = function () {
		this.rows = [];

		this.topElement.classList.add("tabulator-frozen-rows-holder");

		// this.table.columnManager.element.append(this.topElement);
		this.table.columnManager.getElement().insertBefore(this.topElement, this.table.columnManager.headersElement.nextSibling);
	};

	FrozenRows.prototype.setDisplayIndex = function (index) {
		this.displayIndex = index;
	};

	FrozenRows.prototype.getDisplayIndex = function () {
		return this.displayIndex;
	};

	FrozenRows.prototype.isFrozen = function () {
		return !!this.rows.length;
	};

	//filter frozen rows out of display data
	FrozenRows.prototype.getRows = function (rows) {
		var self = this,
		    frozen = [],
		    output = rows.slice(0);

		this.rows.forEach(function (row) {
			var index = output.indexOf(row);

			if (index > -1) {
				output.splice(index, 1);
			}
		});

		return output;
	};

	FrozenRows.prototype.freezeRow = function (row) {
		if (!row.modules.frozen) {
			row.modules.frozen = true;
			this.topElement.appendChild(row.getElement());
			row.initialize();
			row.normalizeHeight();
			this.table.rowManager.adjustTableSize();

			this.rows.push(row);

			this.table.rowManager.refreshActiveData("display");

			this.styleRows();
		} else {
			console.warn("Freeze Error - Row is already frozen");
		}
	};

	FrozenRows.prototype.unfreezeRow = function (row) {
		var index = this.rows.indexOf(row);

		if (row.modules.frozen) {

			row.modules.frozen = false;

			var rowEl = row.getElement();
			rowEl.parentNode.removeChild(rowEl);

			this.table.rowManager.adjustTableSize();

			this.rows.splice(index, 1);

			this.table.rowManager.refreshActiveData("display");

			if (this.rows.length) {
				this.styleRows();
			}
		} else {
			console.warn("Freeze Error - Row is already unfrozen");
		}
	};

	FrozenRows.prototype.styleRows = function (row) {
		var self = this;

		this.rows.forEach(function (row, i) {
			self.table.rowManager.styleRow(row, i);
		});
	};

	Tabulator.prototype.registerModule("frozenRows", FrozenRows);

	//public group object
	var GroupComponent = function GroupComponent(group) {
		this._group = group;
		this.type = "GroupComponent";
	};

	GroupComponent.prototype.getKey = function () {
		return this._group.key;
	};

	GroupComponent.prototype.getElement = function () {
		return this._group.element;
	};

	GroupComponent.prototype.getRows = function () {
		return this._group.getRows(true);
	};

	GroupComponent.prototype.getSubGroups = function () {
		return this._group.getSubGroups(true);
	};

	GroupComponent.prototype.getParentGroup = function () {
		return this._group.parent ? this._group.parent.getComponent() : false;
	};

	GroupComponent.prototype.getVisibility = function () {
		return this._group.visible;
	};

	GroupComponent.prototype.show = function () {
		this._group.show();
	};

	GroupComponent.prototype.hide = function () {
		this._group.hide();
	};

	GroupComponent.prototype.toggle = function () {
		this._group.toggleVisibility();
	};

	GroupComponent.prototype._getSelf = function () {
		return this._group;
	};

	GroupComponent.prototype.getTable = function () {
		return this._group.table;
	};

	//////////////////////////////////////////////////
	//////////////// Group Functions /////////////////
	//////////////////////////////////////////////////

	var Group = function Group(groupManager, parent, level, key, field, generator, oldGroup) {

		this.groupManager = groupManager;
		this.parent = parent;
		this.key = key;
		this.level = level;
		this.field = field;
		this.hasSubGroups = level < groupManager.groupIDLookups.length - 1;
		this.addRow = this.hasSubGroups ? this._addRowToGroup : this._addRow;
		this.type = "group"; //type of element
		this.old = oldGroup;
		this.rows = [];
		this.groups = [];
		this.groupList = [];
		this.generator = generator;
		this.elementContents = false;
		this.height = 0;
		this.outerHeight = 0;
		this.initialized = false;
		this.calcs = {};
		this.initialized = false;
		this.modules = {};

		this.visible = oldGroup ? oldGroup.visible : typeof groupManager.startOpen[level] !== "undefined" ? groupManager.startOpen[level] : groupManager.startOpen[0];

		this.createElements();
		this.addBindings();

		this.createValueGroups();
	};

	Group.prototype.createElements = function () {
		this.element = document.createElement("div");
		this.element.classList.add("tabulator-row");
		this.element.classList.add("tabulator-group");
		this.element.classList.add("tabulator-group-level-" + this.level);
		this.element.setAttribute("role", "rowgroup");

		this.arrowElement = document.createElement("div");
		this.arrowElement.classList.add("tabulator-arrow");
	};

	Group.prototype.createValueGroups = function () {
		var _this31 = this;

		var level = this.level + 1;
		if (this.groupManager.allowedValues && this.groupManager.allowedValues[level]) {
			this.groupManager.allowedValues[level].forEach(function (value) {
				_this31._createGroup(value, level);
			});
		}
	};

	Group.prototype.addBindings = function () {
		var self = this,
		    dblTap,
		    tapHold,
		    tap,
		    toggleElement;

		//handle group click events
		if (self.groupManager.table.options.groupClick) {
			self.element.addEventListener("click", function (e) {
				self.groupManager.table.options.groupClick(e, self.getComponent());
			});
		}

		if (self.groupManager.table.options.groupDblClick) {
			self.element.addEventListener("dblclick", function (e) {
				self.groupManager.table.options.groupDblClick(e, self.getComponent());
			});
		}

		if (self.groupManager.table.options.groupContext) {
			self.element.addEventListener("contextmenu", function (e) {
				self.groupManager.table.options.groupContext(e, self.getComponent());
			});
		}

		if (self.groupManager.table.options.groupTap) {

			tap = false;

			self.element.addEventListener("touchstart", function (e) {
				tap = true;
			});

			self.element.addEventListener("touchend", function (e) {
				if (tap) {
					self.groupManager.table.options.groupTap(e, self.getComponent());
				}

				tap = false;
			});
		}

		if (self.groupManager.table.options.groupDblTap) {

			dblTap = null;

			self.element.addEventListener("touchend", function (e) {

				if (dblTap) {
					clearTimeout(dblTap);
					dblTap = null;

					self.groupManager.table.options.groupDblTap(e, self.getComponent());
				} else {

					dblTap = setTimeout(function () {
						clearTimeout(dblTap);
						dblTap = null;
					}, 300);
				}
			});
		}

		if (self.groupManager.table.options.groupTapHold) {

			tapHold = null;

			self.element.addEventListener("touchstart", function (e) {
				clearTimeout(tapHold);

				tapHold = setTimeout(function () {
					clearTimeout(tapHold);
					tapHold = null;
					tap = false;
					self.groupManager.table.options.groupTapHold(e, self.getComponent());
				}, 1000);
			});

			self.element.addEventListener("touchend", function (e) {
				clearTimeout(tapHold);
				tapHold = null;
			});
		}

		if (self.groupManager.table.options.groupToggleElement) {
			toggleElement = self.groupManager.table.options.groupToggleElement == "arrow" ? self.arrowElement : self.element;

			toggleElement.addEventListener("click", function (e) {
				e.stopPropagation();
				e.stopImmediatePropagation();
				self.toggleVisibility();
			});
		}
	};

	Group.prototype._createGroup = function (groupID, level) {
		var groupKey = level + "_" + groupID;
		var group = new Group(this.groupManager, this, level, groupID, this.groupManager.groupIDLookups[level].field, this.groupManager.headerGenerator[level] || this.groupManager.headerGenerator[0], this.old ? this.old.groups[groupKey] : false);

		this.groups[groupKey] = group;
		this.groupList.push(group);
	};

	Group.prototype._addRowToGroup = function (row) {

		var level = this.level + 1;

		if (this.hasSubGroups) {
			var groupID = this.groupManager.groupIDLookups[level].func(row.getData()),
			    groupKey = level + "_" + groupID;

			if (this.groupManager.allowedValues && this.groupManager.allowedValues[level]) {
				if (this.groups[groupKey]) {
					this.groups[groupKey].addRow(row);
				}
			} else {
				if (!this.groups[groupKey]) {
					this._createGroup(groupID, level);
				}

				this.groups[groupKey].addRow(row);
			}
		}
	};

	Group.prototype._addRow = function (row) {
		this.rows.push(row);
		row.modules.group = this;
	};

	Group.prototype.insertRow = function (row, to, after) {
		var data = this.conformRowData({});

		row.updateData(data);

		var toIndex = this.rows.indexOf(to);

		if (toIndex > -1) {
			if (after) {
				this.rows.splice(toIndex + 1, 0, row);
			} else {
				this.rows.splice(toIndex, 0, row);
			}
		} else {
			if (after) {
				this.rows.push(row);
			} else {
				this.rows.unshift(row);
			}
		}

		row.modules.group = this;

		this.generateGroupHeaderContents();

		if (this.groupManager.table.modExists("columnCalcs") && this.groupManager.table.options.columnCalcs != "table") {
			this.groupManager.table.modules.columnCalcs.recalcGroup(this);
		}
	};

	Group.prototype.getRowIndex = function (row) {};

	//update row data to match grouping contraints
	Group.prototype.conformRowData = function (data) {
		if (this.field) {
			data[this.field] = this.key;
		} else {
			console.warn("Data Conforming Error - Cannot conform row data to match new group as groupBy is a function");
		}

		if (this.parent) {
			data = this.parent.conformRowData(data);
		}

		return data;
	};

	Group.prototype.removeRow = function (row) {
		var index = this.rows.indexOf(row);

		if (index > -1) {
			this.rows.splice(index, 1);
		}

		if (!this.rows.length) {
			if (this.parent) {
				this.parent.removeGroup(this);
			} else {
				this.groupManager.removeGroup(this);
			}

			this.groupManager.updateGroupRows(true);
		} else {
			this.generateGroupHeaderContents();
			if (this.groupManager.table.modExists("columnCalcs") && this.groupManager.table.options.columnCalcs != "table") {
				this.groupManager.table.modules.columnCalcs.recalcGroup(this);
			}
		}
	};

	Group.prototype.removeGroup = function (group) {
		var groupKey = group.level + "_" + group.key,
		    index;

		if (this.groups[groupKey]) {
			delete this.groups[groupKey];

			index = this.groupList.indexOf(group);

			if (index > -1) {
				this.groupList.splice(index, 1);
			}

			if (!this.groupList.length) {
				if (this.parent) {
					this.parent.removeGroup(this);
				} else {
					this.groupManager.removeGroup(this);
				}
			}
		}
	};

	Group.prototype.getHeadersAndRows = function () {
		var output = [];

		output.push(this);

		this._visSet();

		if (this.visible) {

			if (this.groupList.length) {
				this.groupList.forEach(function (group) {
					output = output.concat(group.getHeadersAndRows());
				});
			} else {
				if (this.groupManager.table.options.columnCalcs != "table" && this.groupManager.table.modExists("columnCalcs") && this.groupManager.table.modules.columnCalcs.hasTopCalcs()) {
					this.calcs.top = this.groupManager.table.modules.columnCalcs.generateTopRow(this.rows);
					output.push(this.calcs.top);
				}

				output = output.concat(this.rows);

				if (this.groupManager.table.options.columnCalcs != "table" && this.groupManager.table.modExists("columnCalcs") && this.groupManager.table.modules.columnCalcs.hasBottomCalcs()) {
					this.calcs.bottom = this.groupManager.table.modules.columnCalcs.generateBottomRow(this.rows);
					output.push(this.calcs.bottom);
				}
			}
		} else {
			if (!this.groupList.length && this.groupManager.table.options.columnCalcs != "table" && this.groupManager.table.options.groupClosedShowCalcs) {
				if (this.groupManager.table.modExists("columnCalcs")) {
					if (this.groupManager.table.modules.columnCalcs.hasTopCalcs()) {
						this.calcs.top = this.groupManager.table.modules.columnCalcs.generateTopRow(this.rows);
						output.push(this.calcs.top);
					}

					if (this.groupManager.table.modules.columnCalcs.hasBottomCalcs()) {
						this.calcs.bottom = this.groupManager.table.modules.columnCalcs.generateBottomRow(this.rows);
						output.push(this.calcs.bottom);
					}
				}
			}
		}

		return output;
	};

	Group.prototype.getData = function (visible, transform) {
		var self = this,
		    output = [];

		this._visSet();

		if (!visible || visible && this.visible) {
			this.rows.forEach(function (row) {
				output.push(row.getData(transform || "data"));
			});
		}

		return output;
	};

	// Group.prototype.getRows = function(){
	// 	this._visSet();

	// 	return this.visible ? this.rows : [];
	// };

	Group.prototype.getRowCount = function () {
		var count = 0;

		if (this.groupList.length) {
			this.groupList.forEach(function (group) {
				count += group.getRowCount();
			});
		} else {
			count = this.rows.length;
		}
		return count;
	};

	Group.prototype.toggleVisibility = function () {
		if (this.visible) {
			this.hide();
		} else {
			this.show();
		}
	};

	Group.prototype.hide = function () {
		this.visible = false;

		if (this.groupManager.table.rowManager.getRenderMode() == "classic" && !this.groupManager.table.options.pagination) {

			this.element.classList.remove("tabulator-group-visible");

			if (this.groupList.length) {
				this.groupList.forEach(function (group) {

					var el;

					if (group.calcs.top) {
						el = group.calcs.top.getElement();
						el.parentNode.removeChild(el);
					}

					if (group.calcs.bottom) {
						el = group.calcs.bottom.getElement();
						el.parentNode.removeChild(el);
					}

					var rows = group.getHeadersAndRows();

					rows.forEach(function (row) {
						var rowEl = row.getElement();
						rowEl.parentNode.removeChild(rowEl);
					});
				});
			} else {
				this.rows.forEach(function (row) {
					var rowEl = row.getElement();
					rowEl.parentNode.removeChild(rowEl);
				});
			}

			this.groupManager.table.rowManager.setDisplayRows(this.groupManager.updateGroupRows(), this.groupManager.getDisplayIndex());
		} else {
			this.groupManager.updateGroupRows(true);
		}

		this.groupManager.table.options.groupVisibilityChanged.call(this.table, this.getComponent(), false);
	};

	Group.prototype.show = function () {
		var self = this;

		self.visible = true;

		if (this.groupManager.table.rowManager.getRenderMode() == "classic" && !this.groupManager.table.options.pagination) {

			this.element.classList.add("tabulator-group-visible");

			var prev = self.getElement();

			if (this.groupList.length) {
				this.groupList.forEach(function (group) {
					var rows = group.getHeadersAndRows();

					rows.forEach(function (row) {
						var rowEl = row.getElement();
						prev.parentNode.insertBefore(rowEl, prev.nextSibling);
						row.initialize();
						prev = rowEl;
					});
				});
			} else {
				self.rows.forEach(function (row) {
					var rowEl = row.getElement();
					prev.parentNode.insertBefore(rowEl, prev.nextSibling);
					row.initialize();
					prev = rowEl;
				});
			}

			this.groupManager.table.rowManager.setDisplayRows(this.groupManager.updateGroupRows(), this.groupManager.getDisplayIndex());
		} else {
			this.groupManager.updateGroupRows(true);
		}

		this.groupManager.table.options.groupVisibilityChanged.call(this.table, this.getComponent(), true);
	};

	Group.prototype._visSet = function () {
		var data = [];

		if (typeof this.visible == "function") {

			this.rows.forEach(function (row) {
				data.push(row.getData());
			});

			this.visible = this.visible(this.key, this.getRowCount(), data, this.getComponent());
		}
	};

	Group.prototype.getRowGroup = function (row) {
		var match = false;
		if (this.groupList.length) {
			this.groupList.forEach(function (group) {
				var result = group.getRowGroup(row);

				if (result) {
					match = result;
				}
			});
		} else {
			if (this.rows.find(function (item) {
				return item === row;
			})) {
				match = this;
			}
		}

		return match;
	};

	Group.prototype.getSubGroups = function (component) {
		var output = [];

		this.groupList.forEach(function (child) {
			output.push(component ? child.getComponent() : child);
		});

		return output;
	};

	Group.prototype.getRows = function (compoment) {
		var output = [];

		this.rows.forEach(function (row) {
			output.push(compoment ? row.getComponent() : row);
		});

		return output;
	};

	Group.prototype.generateGroupHeaderContents = function () {
		var data = [];

		this.rows.forEach(function (row) {
			data.push(row.getData());
		});

		this.elementContents = this.generator(this.key, this.getRowCount(), data, this.getComponent());

		while (this.element.firstChild) {
			this.element.removeChild(this.element.firstChild);
		}if (typeof this.elementContents === "string") {
			this.element.innerHTML = this.elementContents;
		} else {
			this.element.appendChild(this.elementContents);
		}

		this.element.insertBefore(this.arrowElement, this.element.firstChild);
	};

	////////////// Standard Row Functions //////////////

	Group.prototype.getElement = function () {
		this.addBindingsd = false;

		this._visSet();

		if (this.visible) {
			this.element.classList.add("tabulator-group-visible");
		} else {
			this.element.classList.remove("tabulator-group-visible");
		}

		this.element.childNodes.forEach(function (child) {
			child.parentNode.removeChild(child);
		});

		this.generateGroupHeaderContents();

		// this.addBindings();

		return this.element;
	};

	//normalize the height of elements in the row
	Group.prototype.normalizeHeight = function () {
		this.setHeight(this.element.clientHeight);
	};

	Group.prototype.initialize = function (force) {
		if (!this.initialized || force) {
			this.normalizeHeight();
			this.initialized = true;
		}
	};

	Group.prototype.reinitialize = function () {
		this.initialized = false;
		this.height = 0;

		if (Tabulator.prototype.helpers.elVisible(this.element)) {
			this.initialize(true);
		}
	};

	Group.prototype.setHeight = function (height) {
		if (this.height != height) {
			this.height = height;
			this.outerHeight = this.element.offsetHeight;
		}
	};

	//return rows outer height
	Group.prototype.getHeight = function () {
		return this.outerHeight;
	};

	Group.prototype.getGroup = function () {
		return this;
	};

	Group.prototype.reinitializeHeight = function () {};
	Group.prototype.calcHeight = function () {};
	Group.prototype.setCellHeight = function () {};
	Group.prototype.clearCellHeight = function () {};

	//////////////// Object Generation /////////////////
	Group.prototype.getComponent = function () {
		return new GroupComponent(this);
	};

	//////////////////////////////////////////////////
	////////////// Group Row Extension ///////////////
	//////////////////////////////////////////////////

	var GroupRows = function GroupRows(table) {

		this.table = table; //hold Tabulator object

		this.groupIDLookups = false; //enable table grouping and set field to group by
		this.startOpen = [function () {
			return false;
		}]; //starting state of group
		this.headerGenerator = [function () {
			return "";
		}];
		this.groupList = []; //ordered list of groups
		this.allowedValues = false;
		this.groups = {}; //hold row groups
		this.displayIndex = 0; //index in display pipeline
	};

	//initialize group configuration
	GroupRows.prototype.initialize = function () {
		var self = this,
		    groupBy = self.table.options.groupBy,
		    startOpen = self.table.options.groupStartOpen,
		    groupHeader = self.table.options.groupHeader;

		this.allowedValues = self.table.options.groupValues;

		self.headerGenerator = [function () {
			return "";
		}];
		this.startOpen = [function () {
			return false;
		}]; //starting state of group

		self.table.modules.localize.bind("groups|item", function (langValue, lang) {
			self.headerGenerator[0] = function (value, count, data) {
				//header layout function
				return (typeof value === "undefined" ? "" : value) + "<span>(" + count + " " + (count === 1 ? langValue : lang.groups.items) + ")</span>";
			};
		});

		this.groupIDLookups = [];

		if (Array.isArray(groupBy) || groupBy) {
			if (this.table.modExists("columnCalcs") && this.table.options.columnCalcs != "table" && this.table.options.columnCalcs != "both") {
				this.table.modules.columnCalcs.removeCalcs();
			}
		} else {
			if (this.table.modExists("columnCalcs") && this.table.options.columnCalcs != "group") {

				var cols = this.table.columnManager.getRealColumns();

				cols.forEach(function (col) {
					if (col.definition.topCalc) {
						self.table.modules.columnCalcs.initializeTopRow();
					}

					if (col.definition.bottomCalc) {
						self.table.modules.columnCalcs.initializeBottomRow();
					}
				});
			}
		}

		if (!Array.isArray(groupBy)) {
			groupBy = [groupBy];
		}

		groupBy.forEach(function (group, i) {
			var lookupFunc, column;

			if (typeof group == "function") {
				lookupFunc = group;
			} else {
				column = self.table.columnManager.getColumnByField(group);

				if (column) {
					lookupFunc = function lookupFunc(data) {
						return column.getFieldValue(data);
					};
				} else {
					lookupFunc = function lookupFunc(data) {
						return data[group];
					};
				}
			}

			self.groupIDLookups.push({
				field: typeof group === "function" ? false : group,
				func: lookupFunc,
				values: self.allowedValues ? self.allowedValues[i] : false
			});
		});

		if (startOpen) {

			if (!Array.isArray(startOpen)) {
				startOpen = [startOpen];
			}

			startOpen.forEach(function (level) {
				level = typeof level == "function" ? level : function () {
					return true;
				};
			});

			self.startOpen = startOpen;
		}

		if (groupHeader) {
			self.headerGenerator = Array.isArray(groupHeader) ? groupHeader : [groupHeader];
		}

		this.initialized = true;
	};

	GroupRows.prototype.setDisplayIndex = function (index) {
		this.displayIndex = index;
	};

	GroupRows.prototype.getDisplayIndex = function () {
		return this.displayIndex;
	};

	//return appropriate rows with group headers
	GroupRows.prototype.getRows = function (rows) {
		if (this.groupIDLookups.length) {

			this.table.options.dataGrouping.call(this.table);

			this.generateGroups(rows);

			if (this.table.options.dataGrouped) {
				this.table.options.dataGrouped.call(this.table, this.getGroups(true));
			}

			return this.updateGroupRows();
		} else {
			return rows.slice(0);
		}
	};

	GroupRows.prototype.getGroups = function (compoment) {
		var groupComponents = [];

		this.groupList.forEach(function (group) {
			groupComponents.push(compoment ? group.getComponent() : group);
		});

		return groupComponents;
	};

	GroupRows.prototype.pullGroupListData = function (groupList) {
		var self = this;
		var groupListData = [];

		groupList.forEach(function (group) {
			var groupHeader = {};
			groupHeader.level = 0;
			groupHeader.rowCount = 0;
			groupHeader.headerContent = "";
			var childData = [];

			if (group.hasSubGroups) {
				childData = self.pullGroupListData(group.groupList);

				groupHeader.level = group.level;
				groupHeader.rowCount = childData.length - group.groupList.length; // data length minus number of sub-headers
				groupHeader.headerContent = group.generator(group.key, groupHeader.rowCount, group.rows, group);

				groupListData.push(groupHeader);
				groupListData = groupListData.concat(childData);
			} else {
				groupHeader.level = group.level;
				groupHeader.headerContent = group.generator(group.key, group.rows.length, group.rows, group);
				groupHeader.rowCount = group.getRows().length;

				groupListData.push(groupHeader);

				group.getRows().forEach(function (row) {
					groupListData.push(row.getData("data"));
				});
			}
		});

		return groupListData;
	};

	GroupRows.prototype.getGroupedData = function () {

		return this.pullGroupListData(this.groupList);
	};

	GroupRows.prototype.getRowGroup = function (row) {
		var match = false;

		this.groupList.forEach(function (group) {
			var result = group.getRowGroup(row);

			if (result) {
				match = result;
			}
		});

		return match;
	};

	GroupRows.prototype.countGroups = function () {
		return this.groupList.length;
	};

	GroupRows.prototype.generateGroups = function (rows) {
		var self = this,
		    oldGroups = self.groups;

		self.groups = {};
		self.groupList = [];

		if (this.allowedValues && this.allowedValues[0]) {
			this.allowedValues[0].forEach(function (value) {
				self.createGroup(value, 0, oldGroups);
			});

			rows.forEach(function (row) {
				self.assignRowToExistingGroup(row, oldGroups);
			});
		} else {
			rows.forEach(function (row) {
				self.assignRowToGroup(row, oldGroups);
			});
		}
	};

	GroupRows.prototype.createGroup = function (groupID, level, oldGroups) {
		var groupKey = level + "_" + groupID,
		    group;

		oldGroups = oldGroups || [];

		group = new Group(this, false, level, groupID, this.groupIDLookups[0].field, this.headerGenerator[0], oldGroups[groupKey]);

		this.groups[groupKey] = group;
		this.groupList.push(group);
	};

	GroupRows.prototype.assignRowToGroup = function (row, oldGroups) {
		var groupID = this.groupIDLookups[0].func(row.getData()),
		    groupKey = "0_" + groupID;

		if (!this.groups[groupKey]) {
			this.createGroup(groupID, 0, oldGroups);
		}

		this.groups[groupKey].addRow(row);
	};

	GroupRows.prototype.assignRowToExistingGroup = function (row, oldGroups) {
		var groupID = this.groupIDLookups[0].func(row.getData()),
		    groupKey = "0_" + groupID;

		if (this.groups[groupKey]) {
			this.groups[groupKey].addRow(row);
		}
	};

	GroupRows.prototype.assignRowToGroup = function (row, oldGroups) {
		var groupID = this.groupIDLookups[0].func(row.getData()),
		    newGroupNeeded = !this.groups["0_" + groupID];

		if (newGroupNeeded) {
			this.createGroup(groupID, 0, oldGroups);
		}

		this.groups["0_" + groupID].addRow(row);

		return !newGroupNeeded;
	};

	GroupRows.prototype.updateGroupRows = function (force) {
		var self = this,
		    output = [],
		    oldRowCount;

		self.groupList.forEach(function (group) {
			output = output.concat(group.getHeadersAndRows());
		});

		//force update of table display
		if (force) {

			var displayIndex = self.table.rowManager.setDisplayRows(output, this.getDisplayIndex());

			if (displayIndex !== true) {
				this.setDisplayIndex(displayIndex);
			}

			self.table.rowManager.refreshActiveData("group", true, true);
		}

		return output;
	};

	GroupRows.prototype.scrollHeaders = function (left) {
		this.groupList.forEach(function (group) {
			group.arrowElement.style.marginLeft = left + "px";
		});
	};

	GroupRows.prototype.removeGroup = function (group) {
		var groupKey = group.level + "_" + group.key,
		    index;

		if (this.groups[groupKey]) {
			delete this.groups[groupKey];

			index = this.groupList.indexOf(group);

			if (index > -1) {
				this.groupList.splice(index, 1);
			}
		}
	};

	Tabulator.prototype.registerModule("groupRows", GroupRows);
	var History = function History(table) {
		this.table = table; //hold Tabulator object

		this.history = [];
		this.index = -1;
	};

	History.prototype.clear = function () {
		this.history = [];
		this.index = -1;
	};

	History.prototype.action = function (type, component, data) {

		this.history = this.history.slice(0, this.index + 1);

		this.history.push({
			type: type,
			component: component,
			data: data
		});

		this.index++;
	};

	History.prototype.getHistoryUndoSize = function () {
		return this.index + 1;
	};

	History.prototype.getHistoryRedoSize = function () {
		return this.history.length - (this.index + 1);
	};

	History.prototype.undo = function () {

		if (this.index > -1) {
			var action = this.history[this.index];

			this.undoers[action.type].call(this, action);

			this.index--;

			this.table.options.historyUndo.call(this.table, action.type, action.component.getComponent(), action.data);

			return true;
		} else {
			console.warn("History Undo Error - No more history to undo");
			return false;
		}
	};

	History.prototype.redo = function () {
		if (this.history.length - 1 > this.index) {

			this.index++;

			var action = this.history[this.index];

			this.redoers[action.type].call(this, action);

			this.table.options.historyRedo.call(this.table, action.type, action.component.getComponent(), action.data);

			return true;
		} else {
			console.warn("History Redo Error - No more history to redo");
			return false;
		}
	};

	History.prototype.undoers = {
		cellEdit: function cellEdit(action) {
			action.component.setValueProcessData(action.data.oldValue);
		},

		rowAdd: function rowAdd(action) {
			action.component.deleteActual();
		},

		rowDelete: function rowDelete(action) {
			var newRow = this.table.rowManager.addRowActual(action.data.data, action.data.pos, action.data.index);

			this._rebindRow(action.component, newRow);
		},

		rowMove: function rowMove(action) {
			this.table.rowManager.moveRowActual(action.component, this.table.rowManager.rows[action.data.pos], false);
			this.table.rowManager.redraw();
		}
	};

	History.prototype.redoers = {
		cellEdit: function cellEdit(action) {
			action.component.setValueProcessData(action.data.newValue);
		},

		rowAdd: function rowAdd(action) {
			var newRow = this.table.rowManager.addRowActual(action.data.data, action.data.pos, action.data.index);

			this._rebindRow(action.component, newRow);
		},

		rowDelete: function rowDelete(action) {
			action.component.deleteActual();
		},

		rowMove: function rowMove(action) {
			this.table.rowManager.moveRowActual(action.component, this.table.rowManager.rows[action.data.pos], false);
			this.table.rowManager.redraw();
		}
	};

	//rebind rows to new element after deletion
	History.prototype._rebindRow = function (oldRow, newRow) {
		this.history.forEach(function (action) {
			if (action.component instanceof Row) {
				if (action.component === oldRow) {
					action.component = newRow;
				}
			} else if (action.component instanceof Cell) {
				if (action.component.row === oldRow) {
					var field = action.component.column.getField();

					if (field) {
						action.component = newRow.getCell(field);
					}
				}
			}
		});
	};

	Tabulator.prototype.registerModule("history", History);
	var HtmlTableImport = function HtmlTableImport(table) {
		this.table = table; //hold Tabulator object
		this.fieldIndex = [];
		this.hasIndex = false;
	};

	HtmlTableImport.prototype.parseTable = function () {
		var self = this,
		    element = self.table.element,
		    options = self.table.options,
		    columns = options.columns,
		    headers = element.getElementsByTagName("th"),
		    rows = element.getElementsByTagName("tbody")[0],
		    data = [],
		    newTable;

		self.hasIndex = false;

		self.table.options.htmlImporting.call(this.table);

		rows = rows ? rows.getElementsByTagName("tr") : [];

		//check for tablator inline options
		self._extractOptions(element, options);

		if (headers.length) {
			self._extractHeaders(headers, rows);
		} else {
			self._generateBlankHeaders(headers, rows);
		}

		//iterate through table rows and build data set
		for (var index = 0; index < rows.length; index++) {
			var row = rows[index],
			    cells = row.getElementsByTagName("td"),
			    item = {};

			//create index if the dont exist in table
			if (!self.hasIndex) {
				item[options.index] = index;
			}

			for (var i = 0; i < cells.length; i++) {
				var cell = cells[i];
				if (typeof this.fieldIndex[i] !== "undefined") {
					item[this.fieldIndex[i]] = cell.innerHTML;
				}
			}

			//add row data to item
			data.push(item);
		}

		//create new element
		var newElement = document.createElement("div");

		//transfer attributes to new element
		var attributes = element.attributes;

		// loop through attributes and apply them on div

		for (var i in attributes) {
			if (_typeof(attributes[i]) == "object") {
				newElement.setAttribute(attributes[i].name, attributes[i].value);
			}
		}

		// replace table with div element
		element.parentNode.replaceChild(newElement, element);

		options.data = data;

		self.table.options.htmlImported.call(this.table);

		// // newElement.tabulator(options);

		this.table.element = newElement;
	};

	//extract tabulator attribute options
	HtmlTableImport.prototype._extractOptions = function (element, options) {
		var attributes = element.attributes;

		for (var index in attributes) {
			var attrib = attributes[index];
			var name;

			if ((typeof attrib === 'undefined' ? 'undefined' : _typeof(attrib)) == "object" && attrib.name && attrib.name.indexOf("tabulator-") === 0) {
				name = attrib.name.replace("tabulator-", "");

				for (var key in options) {
					if (key.toLowerCase() == name) {
						options[key] = this._attribValue(attrib.value);
					}
				}
			}
		}
	};

	//get value of attribute
	HtmlTableImport.prototype._attribValue = function (value) {
		if (value === "true") {
			return true;
		}

		if (value === "false") {
			return false;
		}

		return value;
	};

	//find column if it has already been defined
	HtmlTableImport.prototype._findCol = function (title) {
		var match = this.table.options.columns.find(function (column) {
			return column.title === title;
		});

		return match || false;
	};

	//extract column from headers
	HtmlTableImport.prototype._extractHeaders = function (headers, rows) {
		for (var index = 0; index < headers.length; index++) {
			var header = headers[index],
			    exists = false,
			    col = this._findCol(header.textContent),
			    width,
			    attributes;

			if (col) {
				exists = true;
			} else {
				col = { title: header.textContent.trim() };
			}

			if (!col.field) {
				col.field = header.textContent.trim().toLowerCase().replace(" ", "_");
			}

			width = header.getAttribute("width");

			if (width && !col.width) {
				col.width = width;
			}

			//check for tablator inline options
			attributes = header.attributes;

			// //check for tablator inline options
			this._extractOptions(header, col);

			for (var i in attributes) {
				var attrib = attributes[i],
				    name;

				if ((typeof attrib === 'undefined' ? 'undefined' : _typeof(attrib)) == "object" && attrib.name && attrib.name.indexOf("tabulator-") === 0) {

					name = attrib.name.replace("tabulator-", "");

					col[name] = this._attribValue(attrib.value);
				}
			}

			this.fieldIndex[index] = col.field;

			if (col.field == this.table.options.index) {
				this.hasIndex = true;
			}

			if (!exists) {
				this.table.options.columns.push(col);
			}
		}
	};

	//generate blank headers
	HtmlTableImport.prototype._generateBlankHeaders = function (headers, rows) {
		for (var index = 0; index < headers.length; index++) {
			var header = headers[index],
			    col = { title: "", field: "col" + index };

			this.fieldIndex[index] = col.field;

			var width = header.getAttribute("width");

			if (width) {
				col.width = width;
			}

			this.table.options.columns.push(col);
		}
	};

	Tabulator.prototype.registerModule("htmlTableImport", HtmlTableImport);
	var Keybindings = function Keybindings(table) {
		this.table = table; //hold Tabulator object
		this.watchKeys = null;
		this.pressedKeys = null;
		this.keyupBinding = false;
		this.keydownBinding = false;
	};

	Keybindings.prototype.initialize = function () {
		var bindings = this.table.options.keybindings,
		    mergedBindings = {};

		this.watchKeys = {};
		this.pressedKeys = [];

		if (bindings !== false) {

			for (var key in this.bindings) {
				mergedBindings[key] = this.bindings[key];
			}

			if (Object.keys(bindings).length) {

				for (var _key in bindings) {
					mergedBindings[_key] = bindings[_key];
				}
			}

			this.mapBindings(mergedBindings);
			this.bindEvents();
		}
	};

	Keybindings.prototype.mapBindings = function (bindings) {
		var _this32 = this;

		var self = this;

		var _loop2 = function _loop2(key) {

			if (_this32.actions[key]) {

				if (bindings[key]) {

					if (_typeof(bindings[key]) !== "object") {
						bindings[key] = [bindings[key]];
					}

					bindings[key].forEach(function (binding) {
						self.mapBinding(key, binding);
					});
				}
			} else {
				console.warn("Key Binding Error - no such action:", key);
			}
		};

		for (var key in bindings) {
			_loop2(key);
		}
	};

	Keybindings.prototype.mapBinding = function (action, symbolsList) {
		var self = this;

		var binding = {
			action: this.actions[action],
			keys: [],
			ctrl: false,
			shift: false
		};

		var symbols = symbolsList.toString().toLowerCase().split(" ").join("").split("+");

		symbols.forEach(function (symbol) {
			switch (symbol) {
				case "ctrl":
					binding.ctrl = true;
					break;

				case "shift":
					binding.shift = true;
					break;

				default:
					symbol = parseInt(symbol);
					binding.keys.push(symbol);

					if (!self.watchKeys[symbol]) {
						self.watchKeys[symbol] = [];
					}

					self.watchKeys[symbol].push(binding);
			}
		});
	};

	Keybindings.prototype.bindEvents = function () {
		var self = this;

		this.keyupBinding = function (e) {
			var code = e.keyCode;
			var bindings = self.watchKeys[code];

			if (bindings) {

				self.pressedKeys.push(code);

				bindings.forEach(function (binding) {
					self.checkBinding(e, binding);
				});
			}
		};

		this.keydownBinding = function (e) {
			var code = e.keyCode;
			var bindings = self.watchKeys[code];

			if (bindings) {

				var index = self.pressedKeys.indexOf(code);

				if (index > -1) {
					self.pressedKeys.splice(index, 1);
				}
			}
		};

		this.table.element.addEventListener("keydown", this.keyupBinding);

		this.table.element.addEventListener("keyup", this.keydownBinding);
	};

	Keybindings.prototype.clearBindings = function () {
		if (this.keyupBinding) {
			this.table.element.removeEventListener("keydown", this.keyupBinding);
		}

		if (this.keydownBinding) {
			this.table.element.removeEventListener("keyup", this.keydownBinding);
		}
	};

	Keybindings.prototype.checkBinding = function (e, binding) {
		var self = this,
		    match = true;

		if (e.ctrlKey == binding.ctrl && e.shiftKey == binding.shift) {
			binding.keys.forEach(function (key) {
				var index = self.pressedKeys.indexOf(key);

				if (index == -1) {
					match = false;
				}
			});

			if (match) {
				binding.action.call(self, e);
			}

			return true;
		}

		return false;
	};

	//default bindings
	Keybindings.prototype.bindings = {
		navPrev: "shift + 9",
		navNext: 9,
		navUp: 38,
		navDown: 40,
		scrollPageUp: 33,
		scrollPageDown: 34,
		scrollToStart: 36,
		scrollToEnd: 35,
		undo: "ctrl + 90",
		redo: "ctrl + 89",
		copyToClipboard: "ctrl + 67"
	};

	//default actions
	Keybindings.prototype.actions = {
		keyBlock: function keyBlock(e) {
			e.stopPropagation();
			e.preventDefault();
		},
		scrollPageUp: function scrollPageUp(e) {
			var rowManager = this.table.rowManager,
			    newPos = rowManager.scrollTop - rowManager.height,
			    scrollMax = rowManager.element.scrollHeight;

			e.preventDefault();

			if (rowManager.displayRowsCount) {
				if (newPos >= 0) {
					rowManager.element.scrollTop = newPos;
				} else {
					rowManager.scrollToRow(rowManager.getDisplayRows()[0]);
				}
			}

			this.table.element.focus();
		},
		scrollPageDown: function scrollPageDown(e) {
			var rowManager = this.table.rowManager,
			    newPos = rowManager.scrollTop + rowManager.height,
			    scrollMax = rowManager.element.scrollHeight;

			e.preventDefault();

			if (rowManager.displayRowsCount) {
				if (newPos <= scrollMax) {
					rowManager.element.scrollTop = newPos;
				} else {
					rowManager.scrollToRow(rowManager.getDisplayRows()[rowManager.displayRowsCount - 1]);
				}
			}

			this.table.element.focus();
		},
		scrollToStart: function scrollToStart(e) {
			var rowManager = this.table.rowManager;

			e.preventDefault();

			if (rowManager.displayRowsCount) {
				rowManager.scrollToRow(rowManager.getDisplayRows()[0]);
			}

			this.table.element.focus();
		},
		scrollToEnd: function scrollToEnd(e) {
			var rowManager = this.table.rowManager;

			e.preventDefault();

			if (rowManager.displayRowsCount) {
				rowManager.scrollToRow(rowManager.getDisplayRows()[rowManager.displayRowsCount - 1]);
			}

			this.table.element.focus();
		},
		navPrev: function navPrev(e) {
			var cell = false;

			if (this.table.modExists("edit")) {
				cell = this.table.modules.edit.currentCell;

				if (cell) {
					e.preventDefault();
					cell.nav().prev();
				}
			}
		},

		navNext: function navNext(e) {
			var cell = false;

			if (this.table.modExists("edit")) {
				cell = this.table.modules.edit.currentCell;

				if (cell) {
					e.preventDefault();
					cell.nav().next();
				}
			}
		},

		navLeft: function navLeft(e) {
			var cell = false;

			if (this.table.modExists("edit")) {
				cell = this.table.modules.edit.currentCell;

				if (cell) {
					e.preventDefault();
					cell.nav().left();
				}
			}
		},

		navRight: function navRight(e) {
			var cell = false;

			if (this.table.modExists("edit")) {
				cell = this.table.modules.edit.currentCell;

				if (cell) {
					e.preventDefault();
					cell.nav().right();
				}
			}
		},

		navUp: function navUp(e) {
			var cell = false;

			if (this.table.modExists("edit")) {
				cell = this.table.modules.edit.currentCell;

				if (cell) {
					e.preventDefault();
					cell.nav().up();
				}
			}
		},

		navDown: function navDown(e) {
			var cell = false;

			if (this.table.modExists("edit")) {
				cell = this.table.modules.edit.currentCell;

				if (cell) {
					e.preventDefault();
					cell.nav().down();
				}
			}
		},

		undo: function undo(e) {
			var cell = false;
			if (this.table.options.history && this.table.modExists("history") && this.table.modExists("edit")) {

				cell = this.table.modules.edit.currentCell;

				if (!cell) {
					e.preventDefault();
					this.table.modules.history.undo();
				}
			}
		},

		redo: function redo(e) {
			var cell = false;
			if (this.table.options.history && this.table.modExists("history") && this.table.modExists("edit")) {

				cell = this.table.modules.edit.currentCell;

				if (!cell) {
					e.preventDefault();
					this.table.modules.history.redo();
				}
			}
		},

		copyToClipboard: function copyToClipboard(e) {
			if (!this.table.modules.edit.currentCell) {
				if (this.table.modExists("clipboard", true)) {
					this.table.modules.clipboard.copy(!this.table.options.selectable || this.table.options.selectable == "highlight" ? "active" : "selected", null, null, null, true);
				}
			}
		}
	};

	Tabulator.prototype.registerModule("keybindings", Keybindings);
	var MoveColumns = function MoveColumns(table) {
		this.table = table; //hold Tabulator object
		this.placeholderElement = this.createPlaceholderElement();
		this.hoverElement = false; //floating column header element
		this.checkTimeout = false; //click check timeout holder
		this.checkPeriod = 250; //period to wait on mousedown to consider this a move and not a click
		this.moving = false; //currently moving column
		this.toCol = false; //destination column
		this.toColAfter = false; //position of moving column relative to the desitnation column
		this.startX = 0; //starting position within header element
		this.autoScrollMargin = 40; //auto scroll on edge when within margin
		this.autoScrollStep = 5; //auto scroll distance in pixels
		this.autoScrollTimeout = false; //auto scroll timeout

		this.moveHover = this.moveHover.bind(this);
		this.endMove = this.endMove.bind(this);
	};

	MoveColumns.prototype.createPlaceholderElement = function () {
		var el = document.createElement("div");

		el.classList.add("tabulator-col");
		el.classList.add("tabulator-col-placeholder");

		return el;
	};

	MoveColumns.prototype.initializeColumn = function (column) {
		var self = this,
		    config = {},
		    colEl;

		if (!column.modules.frozen) {

			colEl = column.getElement();

			config.mousemove = function (e) {
				if (column.parent === self.moving.parent) {
					if (e.pageX - Tabulator.prototype.helpers.elOffset(colEl).left + self.table.columnManager.element.scrollLeft > column.getWidth() / 2) {
						if (self.toCol !== column || !self.toColAfter) {
							colEl.parentNode.insertBefore(self.placeholderElement, colEl.nextSibling);
							self.moveColumn(column, true);
						}
					} else {
						if (self.toCol !== column || self.toColAfter) {
							colEl.parentNode.insertBefore(self.placeholderElement, colEl);
							self.moveColumn(column, false);
						}
					}
				}
			}.bind(self);

			colEl.addEventListener("mousedown", function (e) {
				if (e.which === 1) {
					self.checkTimeout = setTimeout(function () {
						self.startMove(e, column);
					}, self.checkPeriod);
				}
			});

			colEl.addEventListener("mouseup", function (e) {
				if (e.which === 1) {
					if (self.checkTimeout) {
						clearTimeout(self.checkTimeout);
					}
				}
			});
		}

		column.modules.moveColumn = config;
	};

	MoveColumns.prototype.startMove = function (e, column) {
		var element = column.getElement();

		this.moving = column;
		this.startX = e.pageX - Tabulator.prototype.helpers.elOffset(element).left;

		this.table.element.classList.add("tabulator-block-select");

		//create placeholder

		this.placeholderElement.style.width = column.getWidth() + "px";
		this.placeholderElement.style.height = column.getHeight() + "px";

		element.parentNode.insertBefore(this.placeholderElement, element);
		element.parentNode.removeChild(element);

		//create hover element
		this.hoverElement = element.cloneNode(true);
		this.hoverElement.classList.add("tabulator-moving");

		this.table.columnManager.getElement().appendChild(this.hoverElement);

		this.hoverElement.style.left = "0";
		this.hoverElement.style.bottom = "0";

		this._bindMouseMove();

		document.body.addEventListener("mousemove", this.moveHover);
		document.body.addEventListener("mouseup", this.endMove);

		this.moveHover(e);
	};

	MoveColumns.prototype._bindMouseMove = function () {
		this.table.columnManager.columnsByIndex.forEach(function (column) {
			if (column.modules.moveColumn.mousemove) {
				column.getElement().addEventListener("mousemove", column.modules.moveColumn.mousemove);
			}
		});
	};

	MoveColumns.prototype._unbindMouseMove = function () {
		this.table.columnManager.columnsByIndex.forEach(function (column) {
			if (column.modules.moveColumn.mousemove) {
				column.getElement().removeEventListener("mousemove", column.modules.moveColumn.mousemove);
			}
		});
	};

	MoveColumns.prototype.moveColumn = function (column, after) {
		var movingCells = this.moving.getCells();

		this.toCol = column;
		this.toColAfter = after;

		if (after) {
			column.getCells().forEach(function (cell, i) {
				var cellEl = cell.getElement();
				cellEl.parentNode.insertBefore(movingCells[i].getElement(), cellEl.nextSibling);
			});
		} else {
			column.getCells().forEach(function (cell, i) {
				var cellEl = cell.getElement();
				cellEl.parentNode.insertBefore(movingCells[i].getElement(), cellEl);
			});
		}
	};

	MoveColumns.prototype.endMove = function (e) {
		if (e.which === 1) {
			this._unbindMouseMove();

			this.placeholderElement.parentNode.insertBefore(this.moving.getElement(), this.placeholderElement.nextSibling);
			this.placeholderElement.parentNode.removeChild(this.placeholderElement);
			this.hoverElement.parentNode.removeChild(this.hoverElement);

			this.table.element.classList.remove("tabulator-block-select");

			if (this.toCol) {
				this.table.columnManager.moveColumn(this.moving, this.toCol, this.toColAfter);
			}

			this.moving = false;
			this.toCol = false;
			this.toColAfter = false;

			document.body.removeEventListener("mousemove", this.moveHover);
			document.body.removeEventListener("mouseup", this.endMove);
		}
	};

	MoveColumns.prototype.moveHover = function (e) {
		var self = this,
		    columnHolder = self.table.columnManager.getElement(),
		    scrollLeft = columnHolder.scrollLeft,
		    xPos = e.pageX - Tabulator.prototype.helpers.elOffset(columnHolder).left + scrollLeft,
		    scrollPos;

		self.hoverElement.style.left = xPos - self.startX + "px";

		if (xPos - scrollLeft < self.autoScrollMargin) {
			if (!self.autoScrollTimeout) {
				self.autoScrollTimeout = setTimeout(function () {
					scrollPos = Math.max(0, scrollLeft - 5);
					self.table.rowManager.getElement().scrollLeft = scrollPos;
					self.autoScrollTimeout = false;
				}, 1);
			}
		}

		if (scrollLeft + columnHolder.clientWidth - xPos < self.autoScrollMargin) {
			if (!self.autoScrollTimeout) {
				self.autoScrollTimeout = setTimeout(function () {
					scrollPos = Math.min(columnHolder.clientWidth, scrollLeft + 5);
					self.table.rowManager.getElement().scrollLeft = scrollPos;
					self.autoScrollTimeout = false;
				}, 1);
			}
		}
	};

	Tabulator.prototype.registerModule("moveColumn", MoveColumns);
	var MoveRows = function MoveRows(table) {

		this.table = table; //hold Tabulator object
		this.placeholderElement = this.createPlaceholderElement();
		this.hoverElement = false; //floating row header element
		this.checkTimeout = false; //click check timeout holder
		this.checkPeriod = 150; //period to wait on mousedown to consider this a move and not a click
		this.moving = false; //currently moving row
		this.toRow = false; //destination row
		this.toRowAfter = false; //position of moving row relative to the desitnation row
		this.hasHandle = false; //row has handle instead of fully movable row
		this.startY = 0; //starting Y position within header element
		this.startX = 0; //starting X position within header element

		this.moveHover = this.moveHover.bind(this);
		this.endMove = this.endMove.bind(this);
		this.tableRowDropEvent = false;

		this.connection = false;
		this.connections = [];

		this.connectedTable = false;
		this.connectedRow = false;
	};

	MoveRows.prototype.createPlaceholderElement = function () {
		var el = document.createElement("div");

		el.classList.add("tabulator-row");
		el.classList.add("tabulator-row-placeholder");

		return el;
	};

	MoveRows.prototype.initialize = function (handle) {
		this.connection = this.table.options.movableRowsConnectedTables;
	};

	MoveRows.prototype.setHandle = function (handle) {
		this.hasHandle = handle;
	};

	MoveRows.prototype.initializeRow = function (row) {
		var self = this,
		    config = {},
		    rowEl;

		//inter table drag drop
		config.mouseup = function (e) {
			self.tableRowDrop(e, row);
		}.bind(self);

		//same table drag drop
		config.mousemove = function (e) {
			if (e.pageY - Tabulator.prototype.helpers.elOffset(row.element).top + self.table.rowManager.element.scrollTop > row.getHeight() / 2) {
				if (self.toRow !== row || !self.toRowAfter) {
					var rowEl = row.getElement();
					rowEl.parentNode.insertBefore(self.placeholderElement, rowEl.nextSibling);
					self.moveRow(row, true);
				}
			} else {
				if (self.toRow !== row || self.toRowAfter) {
					var rowEl = row.getElement();
					rowEl.parentNode.insertBefore(self.placeholderElement, rowEl);
					self.moveRow(row, false);
				}
			}
		}.bind(self);

		if (!this.hasHandle) {

			rowEl = row.getElement();

			rowEl.addEventListener("mousedown", function (e) {
				if (e.which === 1) {
					self.checkTimeout = setTimeout(function () {
						self.startMove(e, row);
					}, self.checkPeriod);
				}
			});

			rowEl.addEventListener("mouseup", function (e) {
				if (e.which === 1) {
					if (self.checkTimeout) {
						clearTimeout(self.checkTimeout);
					}
				}
			});
		}

		row.modules.moveRow = config;
	};

	MoveRows.prototype.initializeCell = function (cell) {
		var self = this,
		    cellEl = cell.getElement();

		cellEl.addEventListener("mousedown", function (e) {
			if (e.which === 1) {
				self.checkTimeout = setTimeout(function () {
					self.startMove(e, cell.row);
				}, self.checkPeriod);
			}
		});

		cellEl.addEventListener("mouseup", function (e) {
			if (e.which === 1) {
				if (self.checkTimeout) {
					clearTimeout(self.checkTimeout);
				}
			}
		});
	};

	MoveRows.prototype._bindMouseMove = function () {
		var self = this;

		self.table.rowManager.getDisplayRows().forEach(function (row) {
			if (row.type === "row" && row.modules.moveRow.mousemove) {
				row.getElement().addEventListener("mousemove", row.modules.moveRow.mousemove);
			}
		});
	};

	MoveRows.prototype._unbindMouseMove = function () {
		var self = this;

		self.table.rowManager.getDisplayRows().forEach(function (row) {
			if (row.type === "row" && row.modules.moveRow.mousemove) {
				row.getElement().removeEventListener("mousemove", row.modules.moveRow.mousemove);
			}
		});
	};

	MoveRows.prototype.startMove = function (e, row) {
		var element = row.getElement();

		this.setStartPosition(e, row);

		this.moving = row;

		this.table.element.classList.add("tabulator-block-select");

		//create placeholder
		this.placeholderElement.style.width = row.getWidth() + "px";
		this.placeholderElement.style.height = row.getHeight() + "px";

		if (!this.connection) {
			element.parentNode.insertBefore(this.placeholderElement, element);
			element.parentNode.removeChild(element);
		} else {
			this.table.element.classList.add("tabulator-movingrow-sending");
			this.connectToTables(row);
		}

		//create hover element
		this.hoverElement = element.cloneNode(true);
		this.hoverElement.classList.add("tabulator-moving");

		if (this.connection) {
			document.body.appendChild(this.hoverElement);
			this.hoverElement.style.left = "0";
			this.hoverElement.style.top = "0";
			this.hoverElement.style.width = this.table.element.clientWidth + "px";
			this.hoverElement.style.whiteSpace = "nowrap";
			this.hoverElement.style.overflow = "hidden";
			this.hoverElement.style.pointerEvents = "none";
		} else {
			this.table.rowManager.getTableElement().appendChild(this.hoverElement);

			this.hoverElement.style.left = "0";
			this.hoverElement.style.top = "0";

			this._bindMouseMove();
		}

		document.body.addEventListener("mousemove", this.moveHover);
		document.body.addEventListener("mouseup", this.endMove);

		this.moveHover(e);
	};

	MoveRows.prototype.setStartPosition = function (e, row) {
		var element, position;

		element = row.getElement();
		if (this.connection) {
			position = element.getBoundingClientRect();

			this.startX = position.left - e.pageX + window.scrollX;
			this.startY = position.top - e.pageY + window.scrollY;
		} else {
			this.startY = e.pageY - element.getBoundingClientRect().top;
		}
	};

	MoveRows.prototype.endMove = function (e) {
		if (!e || e.which === 1) {
			this._unbindMouseMove();

			if (!this.connection) {
				this.placeholderElement.parentNode.insertBefore(this.moving.getElement(), this.placeholderElement.nextSibling);
				this.placeholderElement.parentNode.removeChild(this.placeholderElement);
			}

			this.hoverElement.parentNode.removeChild(this.hoverElement);

			this.table.element.classList.remove("tabulator-block-select");

			if (this.toRow) {
				this.table.rowManager.moveRow(this.moving, this.toRow, this.toRowAfter);
			}

			this.moving = false;
			this.toRow = false;
			this.toRowAfter = false;

			document.body.removeEventListener("mousemove", this.moveHover);
			document.body.removeEventListener("mouseup", this.endMove);

			if (this.connection) {
				this.table.element.classList.remove("tabulator-movingrow-sending");
				this.disconnectFromTables();
			}
		}
	};

	MoveRows.prototype.moveRow = function (row, after) {
		this.toRow = row;
		this.toRowAfter = after;
	};

	MoveRows.prototype.moveHover = function (e) {
		if (this.connection) {
			this.moveHoverConnections.call(this, e);
		} else {
			this.moveHoverTable.call(this, e);
		}
	};

	MoveRows.prototype.moveHoverTable = function (e) {
		var rowHolder = this.table.rowManager.getElement(),
		    scrollTop = rowHolder.scrollTop,
		    yPos = e.pageY - rowHolder.getBoundingClientRect().top + scrollTop,
		    scrollPos;

		this.hoverElement.style.top = yPos - this.startY + "px";
	};

	MoveRows.prototype.moveHoverConnections = function (e) {
		this.hoverElement.style.left = this.startX + e.pageX + "px";
		this.hoverElement.style.top = this.startY + e.pageY + "px";
	};

	//establish connection with other tables
	MoveRows.prototype.connectToTables = function (row) {
		var self = this,
		    connections = this.table.modules.comms.getConnections(this.connection);

		this.table.options.movableRowsSendingStart.call(this.table, connections);

		this.table.modules.comms.send(this.connection, "moveRow", "connect", {
			row: row
		});
	};

	//disconnect from other tables
	MoveRows.prototype.disconnectFromTables = function () {
		var self = this,
		    connections = this.table.modules.comms.getConnections(this.connection);

		this.table.options.movableRowsSendingStop.call(this.table, connections);

		this.table.modules.comms.send(this.connection, "moveRow", "disconnect");
	};

	//accept incomming connection
	MoveRows.prototype.connect = function (table, row) {
		var self = this;
		if (!this.connectedTable) {
			this.connectedTable = table;
			this.connectedRow = row;

			this.table.element.classList.add("tabulator-movingrow-receiving");

			self.table.rowManager.getDisplayRows().forEach(function (row) {
				if (row.type === "row" && row.modules.moveRow && row.modules.moveRow.mouseup) {
					row.getElement().addEventListener("mouseup", row.modules.moveRow.mouseup);
				}
			});

			self.tableRowDropEvent = self.tableRowDrop.bind(self);

			self.table.element.addEventListener("mouseup", self.tableRowDropEvent);

			this.table.options.movableRowsReceivingStart.call(this.table, row, table);

			return true;
		} else {
			console.warn("Move Row Error - Table cannot accept connection, already connected to table:", this.connectedTable);
			return false;
		}
	};

	//close incomming connection
	MoveRows.prototype.disconnect = function (table) {
		var self = this;
		if (table === this.connectedTable) {
			this.connectedTable = false;
			this.connectedRow = false;

			this.table.element.classList.remove("tabulator-movingrow-receiving");

			self.table.rowManager.getDisplayRows().forEach(function (row) {
				if (row.type === "row" && row.modules.moveRow && row.modules.moveRow.mouseup) {
					row.getElement().removeEventListener("mouseup", row.modules.moveRow.mouseup);
				}
			});

			self.table.element.removeEventListener("mouseup", self.tableRowDropEvent);

			this.table.options.movableRowsReceivingStop.call(this.table, table);
		} else {
			console.warn("Move Row Error - trying to disconnect from non connected table");
		}
	};

	MoveRows.prototype.dropComplete = function (table, row, success) {
		var sender = false;

		if (success) {

			switch (_typeof(this.table.options.movableRowsSender)) {
				case "string":
					sender = this.senders[this.table.options.movableRowsSender];
					break;

				case "function":
					sender = this.table.options.movableRowsSender;
					break;
			}

			if (sender) {
				sender.call(this, this.moving.getComponent(), row ? row.getComponent() : undefined, table);
			} else {
				if (this.table.options.movableRowsSender) {
					console.warn("Mover Row Error - no matching sender found:", this.table.options.movableRowsSender);
				}
			}

			this.table.options.movableRowsSent.call(this.table, this.moving.getComponent(), row ? row.getComponent() : undefined, table);
		} else {
			this.table.options.movableRowsSentFailed.call(this.table, this.moving.getComponent(), row ? row.getComponent() : undefined, table);
		}

		this.endMove();
	};

	MoveRows.prototype.tableRowDrop = function (e, row) {
		var receiver = false,
		    success = false;

		e.stopImmediatePropagation();

		switch (_typeof(this.table.options.movableRowsReceiver)) {
			case "string":
				receiver = this.receivers[this.table.options.movableRowsReceiver];
				break;

			case "function":
				receiver = this.table.options.movableRowsReceiver;
				break;
		}

		if (receiver) {
			success = receiver.call(this, this.connectedRow.getComponent(), row ? row.getComponent() : undefined, this.connectedTable);
		} else {
			console.warn("Mover Row Error - no matching receiver found:", this.table.options.movableRowsReceiver);
		}

		if (success) {
			this.table.options.movableRowsReceived.call(this.table, this.connectedRow.getComponent(), row ? row.getComponent() : undefined, this.connectedTable);
		} else {
			this.table.options.movableRowsReceivedFailed.call(this.table, this.connectedRow.getComponent(), row ? row.getComponent() : undefined, this.connectedTable);
		}

		this.table.modules.comms.send(this.connectedTable, "moveRow", "dropcomplete", {
			row: row,
			success: success
		});
	};

	MoveRows.prototype.receivers = {
		insert: function insert(fromRow, toRow, fromTable) {
			this.table.addRow(fromRow.getData(), undefined, toRow);
			return true;
		},

		add: function add(fromRow, toRow, fromTable) {
			this.table.addRow(fromRow.getData());
			return true;
		},

		update: function update(fromRow, toRow, fromTable) {
			if (toRow) {
				toRow.update(fromRow.getData());
				return true;
			}

			return false;
		},

		replace: function replace(fromRow, toRow, fromTable) {
			if (toRow) {
				this.table.addRow(fromRow.getData(), undefined, toRow);
				toRow.delete();
				return true;
			}

			return false;
		}
	};

	MoveRows.prototype.senders = {
		delete: function _delete(fromRow, toRow, toTable) {
			fromRow.delete();
		}
	};

	MoveRows.prototype.commsReceived = function (table, action, data) {
		switch (action) {
			case "connect":
				return this.connect(table, data.row);
				break;

			case "disconnect":
				return this.disconnect(table);
				break;

			case "dropcomplete":
				return this.dropComplete(table, data.row, data.success);
				break;
		}
	};

	Tabulator.prototype.registerModule("moveRow", MoveRows);
	var Mutator = function Mutator(table) {
		this.table = table; //hold Tabulator object
		this.allowedTypes = ["", "data", "edit", "clipboard"]; //list of muatation types
	};

	//initialize column mutator
	Mutator.prototype.initializeColumn = function (column) {
		var self = this,
		    match = false,
		    config = {};

		this.allowedTypes.forEach(function (type) {
			var key = "mutator" + (type.charAt(0).toUpperCase() + type.slice(1)),
			    mutator;

			if (column.definition[key]) {
				mutator = self.lookupMutator(column.definition[key]);

				if (mutator) {
					match = true;

					config[key] = {
						mutator: mutator,
						params: column.definition[key + "Params"] || {}
					};
				}
			}
		});

		if (match) {
			column.modules.mutate = config;
		}
	};

	Mutator.prototype.lookupMutator = function (value) {
		var mutator = false;

		//set column mutator
		switch (typeof value === 'undefined' ? 'undefined' : _typeof(value)) {
			case "string":
				if (this.mutators[value]) {
					mutator = this.mutators[value];
				} else {
					console.warn("Mutator Error - No such mutator found, ignoring: ", value);
				}
				break;

			case "function":
				mutator = value;
				break;
		}

		return mutator;
	};

	//apply mutator to row
	Mutator.prototype.transformRow = function (data, type, update) {
		var self = this,
		    key = "mutator" + (type.charAt(0).toUpperCase() + type.slice(1)),
		    value;

		self.table.columnManager.traverse(function (column) {
			var mutator, params, component;

			if (column.modules.mutate) {
				mutator = column.modules.mutate[key] || column.modules.mutate.mutator || false;

				if (mutator) {
					value = column.getFieldValue(data);

					if (!update || update && typeof value !== "undefined") {
						component = column.getComponent();
						params = typeof mutator.params === "function" ? mutator.params(value, data, type, component) : mutator.params;
						column.setFieldValue(data, mutator.mutator(value, data, type, params, component));
					}
				}
			}
		});

		return data;
	};

	//apply mutator to new cell value
	Mutator.prototype.transformCell = function (cell, value) {
		var mutator = cell.column.modules.mutate.mutatorEdit || cell.column.modules.mutate.mutator || false;

		if (mutator) {
			return mutator.mutator(value, cell.row.getData(), "edit", mutator.params, cell.getComponent());
		} else {
			return value;
		}
	};

	//default mutators
	Mutator.prototype.mutators = {};

	Tabulator.prototype.registerModule("mutator", Mutator);
	var Page = function Page(table) {

		this.table = table; //hold Tabulator object

		this.mode = "local";
		this.progressiveLoad = false;

		this.size = 0;
		this.page = 1;
		this.count = 5;
		this.max = 1;

		this.displayIndex = 0; //index in display pipeline

		this.createElements();
	};

	Page.prototype.createElements = function () {

		var button;

		this.element = document.createElement("span");
		this.element.classList.add("tabulator-paginator");

		this.pagesElement = document.createElement("span");
		this.pagesElement.classList.add("tabulator-pages");

		button = document.createElement("button");
		button.classList.add("tabulator-page");
		button.setAttribute("type", "button");
		button.setAttribute("role", "button");
		button.setAttribute("aria-label", "");
		button.setAttribute("title", "");

		this.firstBut = button.cloneNode(true);
		this.firstBut.setAttribute("data-page", "first");

		this.prevBut = button.cloneNode(true);
		this.prevBut.setAttribute("data-page", "prev");

		this.nextBut = button.cloneNode(true);
		this.nextBut.setAttribute("data-page", "next");

		this.lastBut = button.cloneNode(true);
		this.lastBut.setAttribute("data-page", "last");
	};

	//setup pageination
	Page.prototype.initialize = function (hidden) {
		var self = this;

		//update param names
		for (var key in self.table.options.paginationDataSent) {
			self.paginationDataSentNames[key] = self.table.options.paginationDataSent[key];
		}

		for (var _key2 in self.table.options.paginationDataReceived) {
			self.paginationDataReceivedNames[_key2] = self.table.options.paginationDataReceived[_key2];
		}

		//build pagination element

		//bind localizations
		self.table.modules.localize.bind("pagination|first", function (value) {
			self.firstBut.innerHTML = value;
		});

		self.table.modules.localize.bind("pagination|first_title", function (value) {
			self.firstBut.setAttribute("aria-label", value);
			self.firstBut.setAttribute("title", value);
		});

		self.table.modules.localize.bind("pagination|prev", function (value) {
			self.prevBut.innerHTML = value;
		});

		self.table.modules.localize.bind("pagination|prev_title", function (value) {
			self.prevBut.setAttribute("aria-label", value);
			self.prevBut.setAttribute("title", value);
		});

		self.table.modules.localize.bind("pagination|next", function (value) {
			self.nextBut.innerHTML = value;
		});

		self.table.modules.localize.bind("pagination|next_title", function (value) {
			self.nextBut.setAttribute("aria-label", value);
			self.nextBut.setAttribute("title", value);
		});

		self.table.modules.localize.bind("pagination|last", function (value) {
			self.lastBut.innerHTML = value;
		});

		self.table.modules.localize.bind("pagination|last_title", function (value) {
			self.lastBut.setAttribute("aria-label", value);
			self.lastBut.setAttribute("title", value);
		});

		//click bindings
		self.firstBut.addEventListener("click", function () {
			self.setPage(1);
		});

		self.prevBut.addEventListener("click", function () {
			self.previousPage();
		});

		self.nextBut.addEventListener("click", function () {
			self.nextPage();
		});

		self.lastBut.addEventListener("click", function () {
			self.setPage(self.max);
		});

		if (self.table.options.paginationElement) {
			self.element = self.table.options.paginationElement;
		}

		//append to DOM
		self.element.appendChild(self.firstBut);
		self.element.appendChild(self.prevBut);
		self.element.appendChild(self.pagesElement);
		self.element.appendChild(self.nextBut);
		self.element.appendChild(self.lastBut);

		if (!self.table.options.paginationElement && !hidden) {
			self.table.footerManager.append(self.element, self);
		}

		//set default values
		self.mode = self.table.options.pagination;
		self.size = self.table.options.paginationSize || Math.floor(self.table.rowManager.getElement().clientHeight / 24);
		self.count = self.table.options.paginationButtonCount;
	};

	Page.prototype.initializeProgressive = function (mode) {
		this.initialize(true);
		this.mode = "progressive_" + mode;
		this.progressiveLoad = true;
	};

	Page.prototype.setDisplayIndex = function (index) {
		this.displayIndex = index;
	};

	Page.prototype.getDisplayIndex = function () {
		return this.displayIndex;
	};

	//calculate maximum page from number of rows
	Page.prototype.setMaxRows = function (rowCount) {
		if (!rowCount) {
			this.max = 1;
		} else {
			this.max = Math.ceil(rowCount / this.size);
		}

		if (this.page > this.max) {
			this.page = this.max;
		}
	};

	//reset to first page without triggering action
	Page.prototype.reset = function (force) {
		if (this.mode == "local" || force) {
			this.page = 1;
		}
		return true;
	};

	//set the maxmum page
	Page.prototype.setMaxPage = function (max) {
		this.max = max || 1;

		if (this.page > this.max) {
			this.page = this.max;
			this.trigger();
		}
	};

	//set current page number
	Page.prototype.setPage = function (page) {
		var _this33 = this;

		return new Promise(function (resolve, reject) {
			if (page > 0 && page <= _this33.max) {
				_this33.page = page;
				_this33.trigger().then(function () {
					resolve();
				}).catch(function () {
					reject();
				});
			} else {
				console.warn("Pagination Error - Requested page is out of range of 1 - " + _this33.max + ":", page);
				reject();
			}
		});
	};

	Page.prototype.setPageSize = function (size) {
		if (size > 0) {
			this.size = size;
		}
	};

	//setup the pagination buttons
	Page.prototype._setPageButtons = function () {
		var self = this;

		var leftSize = Math.floor((this.count - 1) / 2);
		var rightSize = Math.ceil((this.count - 1) / 2);
		var min = this.max - this.page + leftSize + 1 < this.count ? this.max - this.count + 1 : Math.max(this.page - leftSize, 1);
		var max = this.page <= rightSize ? Math.min(this.count, this.max) : Math.min(this.page + rightSize, this.max);

		while (self.pagesElement.firstChild) {
			self.pagesElement.removeChild(self.pagesElement.firstChild);
		}if (self.page == 1) {
			self.firstBut.disabled = true;
			self.prevBut.disabled = true;
		} else {
			self.firstBut.disabled = false;
			self.prevBut.disabled = false;
		}

		if (self.page == self.max) {
			self.lastBut.disabled = true;
			self.nextBut.disabled = true;
		} else {
			self.lastBut.disabled = false;
			self.nextBut.disabled = false;
		}

		for (var i = min; i <= max; i++) {
			if (i > 0 && i <= self.max) {
				self.pagesElement.appendChild(self._generatePageButton(i));
			}
		}

		this.footerRedraw();
	};

	Page.prototype._generatePageButton = function (page) {
		var self = this,
		    button = document.createElement("button");

		button.classList.add("tabulator-page");
		if (page == self.page) {
			button.classList.add("active");
		}

		button.setAttribute("type", "button");
		button.setAttribute("role", "button");
		button.setAttribute("aria-label", "Show Page " + page);
		button.setAttribute("title", "Show Page " + page);
		button.setAttribute("data-page", page);
		button.textContent = page;

		button.addEventListener("click", function (e) {
			self.setPage(page);
		});

		return button;
	};

	//previous page
	Page.prototype.previousPage = function () {
		var _this34 = this;

		return new Promise(function (resolve, reject) {
			if (_this34.page > 1) {
				_this34.page--;
				_this34.trigger().then(function () {
					resolve();
				}).catch(function () {
					reject();
				});
			} else {
				console.warn("Pagination Error - Previous page would be less than page 1:", 0);
				reject();
			}
		});
	};

	//next page
	Page.prototype.nextPage = function () {
		var _this35 = this;

		return new Promise(function (resolve, reject) {
			if (_this35.page < _this35.max) {
				_this35.page++;
				_this35.trigger().then(function () {
					resolve();
				}).catch(function () {
					reject();
				});
			} else {
				if (!_this35.progressiveLoad) {
					console.warn("Pagination Error - Next page would be greater than maximum page of " + _this35.max + ":", _this35.max + 1);
				}
				reject();
			}
		});
	};

	//return current page number
	Page.prototype.getPage = function () {
		return this.page;
	};

	//return max page number
	Page.prototype.getPageMax = function () {
		return this.max;
	};

	Page.prototype.getPageSize = function (size) {
		return this.size;
	};

	Page.prototype.getMode = function () {
		return this.mode;
	};

	//return appropriate rows for current page
	Page.prototype.getRows = function (data) {
		var output, start, end;

		if (this.mode == "local") {
			output = [];
			start = this.size * (this.page - 1);
			end = start + parseInt(this.size);

			this._setPageButtons();

			for (var i = start; i < end; i++) {
				if (data[i]) {
					output.push(data[i]);
				}
			}

			return output;
		} else {

			this._setPageButtons();

			return data.slice(0);
		}
	};

	Page.prototype.trigger = function () {
		var _this36 = this;

		var left;

		return new Promise(function (resolve, reject) {

			switch (_this36.mode) {
				case "local":
					left = _this36.table.rowManager.scrollLeft;

					_this36.table.rowManager.refreshActiveData("page");
					_this36.table.rowManager.scrollHorizontal(left);

					_this36.table.options.pageLoaded.call(_this36.table, _this36.getPage());
					resolve();
					break;

				case "remote":
				case "progressive_load":
				case "progressive_scroll":
					_this36.table.modules.ajax.blockActiveRequest();
					_this36._getRemotePage().then(function () {
						resolve();
					}).catch(function () {
						reject();
					});
					break;

				default:
					console.warn("Pagination Error - no such pagination mode:", _this36.mode);
					reject();
			}
		});
	};

	Page.prototype._getRemotePage = function () {
		var _this37 = this;

		var self = this,
		    oldParams,
		    pageParams;

		return new Promise(function (resolve, reject) {

			if (!self.table.modExists("ajax", true)) {
				reject();
			}

			//record old params and restore after request has been made
			oldParams = Tabulator.prototype.helpers.deepClone(self.table.modules.ajax.getParams() || {});
			pageParams = self.table.modules.ajax.getParams();

			//configure request params
			pageParams[_this37.paginationDataSentNames.page] = self.page;

			//set page size if defined
			if (_this37.size) {
				pageParams[_this37.paginationDataSentNames.size] = _this37.size;
			}

			//set sort data if defined
			if (_this37.table.options.ajaxSorting && _this37.table.modExists("sort")) {
				var sorters = self.table.modules.sort.getSort();

				sorters.forEach(function (item) {
					delete item.column;
				});

				pageParams[_this37.paginationDataSentNames.sorters] = sorters;
			}

			//set filter data if defined
			if (_this37.table.options.ajaxFiltering && _this37.table.modExists("filter")) {
				var filters = self.table.modules.filter.getFilters(true, true);
				pageParams[_this37.paginationDataSentNames.filters] = filters;
			}

			self.table.modules.ajax.setParams(pageParams);

			self.table.modules.ajax.sendRequest(_this37.progressiveLoad).then(function (data) {
				self._parseRemoteData(data);
				resolve();
			}).catch(function (e) {
				reject();
			});

			self.table.modules.ajax.setParams(oldParams);
		});
	};

	Page.prototype._parseRemoteData = function (data) {
		var self = this,
		    left,
		    data,
		    margin;

		if (typeof data[this.paginationDataReceivedNames.last_page] === "undefined") {
			console.warn("Remote Pagination Error - Server response missing '" + this.paginationDataReceivedNames.last_page + "' property");
		}

		if (data[this.paginationDataReceivedNames.data]) {
			this.max = parseInt(data[this.paginationDataReceivedNames.last_page]) || 1;

			if (this.progressiveLoad) {
				switch (this.mode) {
					case "progressive_load":
						this.table.rowManager.addRows(data[this.paginationDataReceivedNames.data]);
						if (this.page < this.max) {
							setTimeout(function () {
								self.nextPage();
							}, self.table.options.ajaxProgressiveLoadDelay);
						}
						break;

					case "progressive_scroll":
						data = this.table.rowManager.getData().concat(data[this.paginationDataReceivedNames.data]);

						this.table.rowManager.setData(data, true);

						margin = this.table.options.ajaxProgressiveLoadScrollMargin || this.table.rowManager.element.clientHeight * 2;

						if (self.table.rowManager.element.scrollHeight <= self.table.rowManager.element.clientHeight + margin) {
							self.nextPage();
						}
						break;
				}
			} else {
				left = this.table.rowManager.scrollLeft;

				this.table.rowManager.setData(data[this.paginationDataReceivedNames.data]);

				this.table.rowManager.scrollHorizontal(left);

				this.table.columnManager.scrollHorizontal(left);

				this.table.options.pageLoaded.call(this.table, this.getPage());
			}
		} else {
			console.warn("Remote Pagination Error - Server response missing '" + this.paginationDataReceivedNames.data + "' property");
		}
	};

	//handle the footer element being redrawn
	Page.prototype.footerRedraw = function () {
		var footer = this.table.footerManager.element;

		if (Math.ceil(footer.clientWidth) - footer.scrollWidth < 0) {
			this.pagesElement.style.display = 'none';
		} else {
			this.pagesElement.style.display = '';

			if (Math.ceil(footer.clientWidth) - footer.scrollWidth < 0) {
				this.pagesElement.style.display = 'none';
			}
		}
	};

	//set the paramter names for pagination requests
	Page.prototype.paginationDataSentNames = {
		"page": "page",
		"size": "size",
		"sorters": "sorters",
		// "sort_dir":"sort_dir",
		"filters": "filters"
	};

	//set the property names for pagination responses
	Page.prototype.paginationDataReceivedNames = {
		"current_page": "current_page",
		"last_page": "last_page",
		"data": "data"
	};

	Tabulator.prototype.registerModule("page", Page);

	var Persistence = function Persistence(table) {
		this.table = table; //hold Tabulator object
		this.mode = "";
		this.id = "";
		this.persistProps = ["field", "width", "visible"];
	};

	//setup parameters
	Persistence.prototype.initialize = function (mode, id) {
		//determine persistent layout storage type
		this.mode = mode !== true ? mode : typeof window.localStorage !== 'undefined' ? "local" : "cookie";

		//set storage tag
		this.id = "tabulator-" + (id || this.table.element.getAttribute("id") || "");
	};

	//load saved definitions
	Persistence.prototype.load = function (type, current) {

		var data = this.retreiveData(type);

		if (current) {
			data = data ? this.mergeDefinition(current, data) : current;
		}

		return data;
	};

	//retreive data from memory
	Persistence.prototype.retreiveData = function (type) {
		var data = "",
		    id = this.id + (type === "columns" ? "" : "-" + type);

		switch (this.mode) {
			case "local":
				data = localStorage.getItem(id);
				break;

			case "cookie":

				//find cookie
				var cookie = document.cookie,
				    cookiePos = cookie.indexOf(id + "="),
				    end = void 0;

				//if cookie exists, decode and load column data into tabulator
				if (cookiePos > -1) {
					cookie = cookie.substr(cookiePos);

					end = cookie.indexOf(";");

					if (end > -1) {
						cookie = cookie.substr(0, end);
					}

					data = cookie.replace(id + "=", "");
				}
				break;

			default:
				console.warn("Persistance Load Error - invalid mode selected", this.mode);
		}

		return data ? JSON.parse(data) : false;
	};

	//merge old and new column defintions
	Persistence.prototype.mergeDefinition = function (oldCols, newCols) {
		var self = this,
		    output = [];

		// oldCols = oldCols || [];
		newCols = newCols || [];

		newCols.forEach(function (column, to) {

			var from = self._findColumn(oldCols, column);

			if (from) {

				from.width = column.width;
				from.visible = column.visible;

				if (from.columns) {
					from.columns = self.mergeDefinition(from.columns, column.columns);
				}

				output.push(from);
			}
		});
		oldCols.forEach(function (column, i) {
			var from = self._findColumn(newCols, column);
			if (!from) {
				if (output.length > i) {
					output.splice(i, 0, column);
				} else {
					output.push(column);
				}
			}
		});

		return output;
	};

	//find matching columns
	Persistence.prototype._findColumn = function (columns, subject) {
		var type = subject.columns ? "group" : subject.field ? "field" : "object";

		return columns.find(function (col) {
			switch (type) {
				case "group":
					return col.title === subject.title && col.columns.length === subject.columns.length;
					break;

				case "field":
					return col.field === subject.field;
					break;

				case "object":
					return col === subject;
					break;
			}
		});
	};

	//save data
	Persistence.prototype.save = function (type) {
		var data = {};

		switch (type) {
			case "columns":
				data = this.parseColumns(this.table.columnManager.getColumns());
				break;

			case "filter":
				data = this.table.modules.filter.getFilters();
				break;

			case "sort":
				data = this.validateSorters(this.table.modules.sort.getSort());
				break;
		}

		var id = this.id + (type === "columns" ? "" : "-" + type);

		this.saveData(id, data);
	};

	//ensure sorters contain no function data
	Persistence.prototype.validateSorters = function (data) {
		data.forEach(function (item) {
			item.column = item.field;
			delete item.field;
		});

		return data;
	};

	//save data to chosed medium
	Persistence.prototype.saveData = function (id, data) {

		data = JSON.stringify(data);

		switch (this.mode) {
			case "local":
				localStorage.setItem(id, data);
				break;

			case "cookie":
				var expireDate = new Date();
				expireDate.setDate(expireDate.getDate() + 10000);

				//save cookie
				document.cookie = id + "=" + data + "; expires=" + expireDate.toUTCString();
				break;

			default:
				console.warn("Persistance Save Error - invalid mode selected", this.mode);
		}
	};

	//build premission list
	Persistence.prototype.parseColumns = function (columns) {
		var self = this,
		    definitions = [];

		columns.forEach(function (column) {
			var def = {};

			if (column.isGroup) {
				def.title = column.getDefinition().title;
				def.columns = self.parseColumns(column.getColumns());
			} else {
				def.title = column.getDefinition().title;
				def.field = column.getField();
				def.width = column.getWidth();
				def.visible = column.visible;
			}

			definitions.push(def);
		});

		return definitions;
	};

	Tabulator.prototype.registerModule("persistence", Persistence);

	var ResizeColumns = function ResizeColumns(table) {
		this.table = table; //hold Tabulator object
		this.startColumn = false;
		this.startX = false;
		this.startWidth = false;
		this.handle = null;
		this.prevHandle = null;
	};

	ResizeColumns.prototype.initializeColumn = function (type, column, element) {
		var self = this,
		    variableHeight = false,
		    mode = this.table.options.resizableColumns;

		//set column resize mode
		if (type === "header") {
			variableHeight = column.definition.formatter == "textarea" || column.definition.variableHeight;
			column.modules.resize = { variableHeight: variableHeight };
		}

		if (mode === true || mode == type) {

			var handle = document.createElement('div');
			handle.className = "tabulator-col-resize-handle";

			var prevHandle = document.createElement('div');
			prevHandle.className = "tabulator-col-resize-handle prev";

			handle.addEventListener("click", function (e) {
				e.stopPropagation();
			});

			handle.addEventListener("mousedown", function (e) {
				var nearestColumn = column.getLastColumn();

				if (nearestColumn && self._checkResizability(nearestColumn)) {
					self.startColumn = column;
					self._mouseDown(e, nearestColumn);
				}
			});

			//reszie column on  double click
			handle.addEventListener("dblclick", function (e) {
				if (self._checkResizability(column)) {
					column.reinitializeWidth(true);
				}
			});

			prevHandle.addEventListener("click", function (e) {
				e.stopPropagation();
			});

			prevHandle.addEventListener("mousedown", function (e) {
				var nearestColumn, colIndex, prevColumn;

				nearestColumn = column.getFirstColumn();

				if (nearestColumn) {
					colIndex = self.table.columnManager.findColumnIndex(nearestColumn);
					prevColumn = colIndex > 0 ? self.table.columnManager.getColumnByIndex(colIndex - 1) : false;

					if (prevColumn && self._checkResizability(prevColumn)) {
						self.startColumn = column;
						self._mouseDown(e, prevColumn);
					}
				}
			});

			//resize column on double click
			prevHandle.addEventListener("dblclick", function (e) {
				var nearestColumn, colIndex, prevColumn;

				nearestColumn = column.getFirstColumn();

				if (nearestColumn) {
					colIndex = self.table.columnManager.findColumnIndex(nearestColumn);
					prevColumn = colIndex > 0 ? self.table.columnManager.getColumnByIndex(colIndex - 1) : false;

					if (prevColumn && self._checkResizability(prevColumn)) {
						prevColumn.reinitializeWidth(true);
					}
				}
			});

			element.appendChild(handle);
			element.appendChild(prevHandle);
		}
	};

	ResizeColumns.prototype._checkResizability = function (column) {
		return typeof column.definition.resizable != "undefined" ? column.definition.resizable : this.table.options.resizableColumns;
	};

	ResizeColumns.prototype._mouseDown = function (e, column) {
		var self = this;

		self.table.element.classList.add("tabulator-block-select");

		function mouseMove(e) {
			column.setWidth(self.startWidth + (e.screenX - self.startX));

			if (!self.table.browserSlow && column.modules.resize && column.modules.resize.variableHeight) {
				column.checkCellHeights();
			}
		}

		function mouseUp(e) {

			//block editor from taking action while resizing is taking place
			if (self.startColumn.modules.edit) {
				self.startColumn.modules.edit.blocked = false;
			}

			if (self.table.browserSlow && column.modules.resize && column.modules.resize.variableHeight) {
				column.checkCellHeights();
			}

			document.body.removeEventListener("mouseup", mouseUp);
			document.body.removeEventListener("mousemove", mouseMove);

			self.table.element.classList.remove("tabulator-block-select");

			if (self.table.options.persistentLayout && self.table.modExists("persistence", true)) {
				self.table.modules.persistence.save("columns");
			}

			self.table.options.columnResized.call(self.table, self.startColumn.getComponent());
		}

		e.stopPropagation(); //prevent resize from interfereing with movable columns

		//block editor from taking action while resizing is taking place
		if (self.startColumn.modules.edit) {
			self.startColumn.modules.edit.blocked = true;
		}

		self.startX = e.screenX;
		self.startWidth = column.getWidth();

		document.body.addEventListener("mousemove", mouseMove);
		document.body.addEventListener("mouseup", mouseUp);
	};

	Tabulator.prototype.registerModule("resizeColumns", ResizeColumns);
	var ResizeRows = function ResizeRows(table) {
		this.table = table; //hold Tabulator object
		this.startColumn = false;
		this.startY = false;
		this.startHeight = false;
		this.handle = null;
		this.prevHandle = null;
	};

	ResizeRows.prototype.initializeRow = function (row) {
		var self = this,
		    rowEl = row.getElement();

		var handle = document.createElement('div');
		handle.className = "tabulator-row-resize-handle";

		var prevHandle = document.createElement('div');
		prevHandle.className = "tabulator-row-resize-handle prev";

		handle.addEventListener("click", function (e) {
			e.stopPropagation();
		});

		handle.addEventListener("mousedown", function (e) {
			self.startRow = row;
			self._mouseDown(e, row);
		});

		prevHandle.addEventListener("click", function (e) {
			e.stopPropagation();
		});

		prevHandle.addEventListener("mousedown", function (e) {
			var prevRow = self.table.rowManager.prevDisplayRow(row);

			if (prevRow) {
				self.startRow = prevRow;
				self._mouseDown(e, prevRow);
			}
		});

		rowEl.appendChild(handle);
		rowEl.appendChild(prevHandle);
	};

	ResizeRows.prototype._mouseDown = function (e, row) {
		var self = this;

		self.table.element.classList.add("tabulator-block-select");

		function mouseMove(e) {
			row.setHeight(self.startHeight + (e.screenY - self.startY));
		}

		function mouseUp(e) {

			// //block editor from taking action while resizing is taking place
			// if(self.startColumn.modules.edit){
			// 	self.startColumn.modules.edit.blocked = false;
			// }

			document.body.removeEventListener("mouseup", mouseMove);
			document.body.removeEventListener("mousemove", mouseMove);

			self.table.element.classList.remove("tabulator-block-select");

			self.table.options.rowResized.call(this.table, row.getComponent());
		}

		e.stopPropagation(); //prevent resize from interfereing with movable columns

		//block editor from taking action while resizing is taking place
		// if(self.startColumn.modules.edit){
		// 	self.startColumn.modules.edit.blocked = true;
		// }

		self.startY = e.screenY;
		self.startHeight = row.getHeight();

		document.body.addEventListener("mousemove", mouseMove);

		document.body.addEventListener("mouseup", mouseUp);
	};

	Tabulator.prototype.registerModule("resizeRows", ResizeRows);
	var ResizeTable = function ResizeTable(table) {
		this.table = table; //hold Tabulator object
		this.binding = false;
		this.observer = false;
	};

	ResizeTable.prototype.initialize = function (row) {
		var table = this.table,
		    observer;

		if (typeof ResizeObserver !== "undefined" && table.rowManager.getRenderMode() === "virtual") {
			this.observer = new ResizeObserver(function (entry) {
				table.redraw();
			});

			this.observer.observe(table.element);
		} else {
			this.binding = function () {
				table.redraw();
			};

			window.addEventListener("resize", this.binding);
		}
	};

	ResizeTable.prototype.clearBindings = function (row) {
		if (this.binding) {
			window.removeEventListener("resize", this.binding);
		}

		if (this.observer) {
			this.observer.unobserve(this.table.element);
		}
	};

	Tabulator.prototype.registerModule("resizeTable", ResizeTable);
	var ResponsiveLayout = function ResponsiveLayout(table) {
		this.table = table; //hold Tabulator object
		this.columns = [];
		this.hiddenColumns = [];
		this.mode = "";
		this.index = 0;
		this.collapseFormatter = [];
		this.collapseStartOpen = true;
	};

	//generate resposive columns list
	ResponsiveLayout.prototype.initialize = function () {
		var columns = [];

		this.mode = this.table.options.responsiveLayout;
		this.collapseFormatter = this.table.options.responsiveLayoutCollapseFormatter || this.formatCollapsedData;
		this.collapseStartOpen = this.table.options.responsiveLayoutCollapseStartOpen;
		this.hiddenColumns = [];

		//detemine level of responsivity for each column
		this.table.columnManager.columnsByIndex.forEach(function (column, i) {
			if (column.modules.responsive) {
				if (column.modules.responsive.order && column.modules.responsive.visible) {
					column.modules.responsive.index = i;
					columns.push(column);

					if (!column.visible && this.mode === "collapse") {
						this.hiddenColumns.push(column);
					}
				}
			}
		});

		//sort list by responsivity
		columns = columns.reverse();
		columns = columns.sort(function (a, b) {
			var diff = b.modules.responsive.order - a.modules.responsive.order;
			return diff || b.modules.responsive.index - a.modules.responsive.index;
		});

		this.columns = columns;

		if (this.mode === "collapse") {
			this.generateCollapsedContent();
		}
	};

	//define layout information
	ResponsiveLayout.prototype.initializeColumn = function (column) {
		var def = column.getDefinition();

		column.modules.responsive = { order: typeof def.responsive === "undefined" ? 1 : def.responsive, visible: def.visible === false ? false : true };
	};

	ResponsiveLayout.prototype.layoutRow = function (row) {
		var rowEl = row.getElement(),
		    el = document.createElement("div");

		el.classList.add("tabulator-responsive-collapse");

		if (!rowEl.classList.contains("tabulator-calcs")) {
			row.modules.responsiveLayout = {
				element: el
			};

			if (!this.collapseStartOpen) {
				el.style.display = 'none';
			}

			rowEl.appendChild(el);

			this.generateCollapsedRowContent(row);
		}
	};

	//update column visibility
	ResponsiveLayout.prototype.updateColumnVisibility = function (column, visible) {
		var index;
		if (column.modules.responsive) {
			column.modules.responsive.visible = visible;
			this.initialize();
		}
	};

	ResponsiveLayout.prototype.hideColumn = function (column) {
		column.hide(false, true);

		if (this.mode === "collapse") {
			this.hiddenColumns.unshift(column);
			this.generateCollapsedContent();
		}
	};

	ResponsiveLayout.prototype.showColumn = function (column) {
		var index;

		column.show(false, true);
		//set column width to prevent calculation loops on uninitialized columns
		column.setWidth(column.getWidth());

		if (this.mode === "collapse") {
			index = this.hiddenColumns.indexOf(column);

			if (index > -1) {
				this.hiddenColumns.splice(index, 1);
			}

			this.generateCollapsedContent();
		}
	};

	//redraw columns to fit space
	ResponsiveLayout.prototype.update = function () {
		var self = this,
		    working = true;

		while (working) {

			var width = self.table.modules.layout.getMode() == "fitColumns" ? self.table.columnManager.getFlexBaseWidth() : self.table.columnManager.getWidth();

			var diff = self.table.columnManager.element.clientWidth - width;

			if (diff < 0) {
				//table is too wide
				var column = self.columns[self.index];

				if (column) {
					self.hideColumn(column);
					self.index++;
				} else {
					working = false;
				}
			} else {

				//table has spare space
				var _column = self.columns[self.index - 1];

				if (_column) {
					if (diff > 0) {
						if (diff >= _column.getWidth()) {
							self.showColumn(_column);
							self.index--;
						} else {
							working = false;
						}
					} else {
						working = false;
					}
				} else {
					working = false;
				}
			}

			if (!self.table.rowManager.activeRowsCount) {
				self.table.rowManager.renderEmptyScroll();
			}
		}
	};

	ResponsiveLayout.prototype.generateCollapsedContent = function () {
		var self = this,
		    rows = this.table.rowManager.getDisplayRows();

		rows.forEach(function (row) {
			self.generateCollapsedRowContent(row);
		});
	};

	ResponsiveLayout.prototype.generateCollapsedRowContent = function (row) {
		var el, contents;

		if (row.modules.responsiveLayout) {
			el = row.modules.responsiveLayout.element;

			while (el.firstChild) {
				el.removeChild(el.firstChild);
			}contents = this.collapseFormatter(this.generateCollapsedRowData(row));

			if (contents) {
				el.appendChild(contents);
			}
		}
	};

	ResponsiveLayout.prototype.generateCollapsedRowData = function (row) {
		var self = this,
		    data = row.getData(),
		    output = {},
		    mockCellComponent;

		this.hiddenColumns.forEach(function (column) {
			var value = column.getFieldValue(data);

			if (column.definition.title && column.field) {
				if (column.modules.format && self.table.options.responsiveLayoutCollapseUseFormatters) {

					mockCellComponent = {
						value: false,
						data: {},
						getValue: function getValue() {
							return value;
						},
						getData: function getData() {
							return data;
						},
						getElement: function getElement() {
							return document.createElement("div");
						},
						getRow: function getRow() {
							return row.getComponent();
						},
						getColumn: function getColumn() {
							return column.getComponent();
						}
					};

					output[column.definition.title] = column.modules.format.formatter.call(self.table.modules.format, mockCellComponent, column.modules.format.params);
				} else {
					output[column.definition.title] = value;
				}
			}
		});

		return output;
	};

	ResponsiveLayout.prototype.formatCollapsedData = function (data) {
		var list = document.createElement("table"),
		    listContents = "";

		for (var key in data) {
			listContents += "<tr><td><strong>" + key + "</strong></td><td>" + data[key] + "</td></tr>";
		}

		list.innerHTML = listContents;

		return Object.keys(data).length ? list : "";
	};

	Tabulator.prototype.registerModule("responsiveLayout", ResponsiveLayout);
	var SelectRow = function SelectRow(table) {
		this.table = table; //hold Tabulator object
		this.selecting = false; //flag selecting in progress
		this.lastClickedRow = false; //last clicked row
		this.selectPrev = []; //hold previously selected element for drag drop selection
		this.selectedRows = []; //hold selected rows
	};

	SelectRow.prototype.clearSelectionData = function (silent) {
		this.selecting = false;
		this.lastClickedRow = false;
		this.selectPrev = [];
		this.selectedRows = [];

		if (!silent) {
			this._rowSelectionChanged();
		}
	};

	SelectRow.prototype.initializeRow = function (row) {
		var self = this,
		    element = row.getElement();

		// trigger end of row selection
		var endSelect = function endSelect() {

			setTimeout(function () {
				self.selecting = false;
			}, 50);

			document.body.removeEventListener("mouseup", endSelect);
		};

		row.modules.select = { selected: false };

		//set row selection class
		if (self.table.options.selectableCheck.call(this.table, row.getComponent())) {
			element.classList.add("tabulator-selectable");
			element.classList.remove("tabulator-unselectable");

			if (self.table.options.selectable && self.table.options.selectable != "highlight") {
				if (self.table.options.selectableRangeMode && self.table.options.selectableRangeMode === "click") {
					element.addEventListener("click", function (e) {
						if (e.shiftKey) {
							self.lastClickedRow = self.lastClickedRow || row;

							var lastClickedRowIdx = self.table.rowManager.getDisplayRowIndex(self.lastClickedRow);
							var rowIdx = self.table.rowManager.getDisplayRowIndex(row);

							var fromRowIdx = lastClickedRowIdx <= rowIdx ? lastClickedRowIdx : rowIdx;
							var toRowIdx = lastClickedRowIdx >= rowIdx ? lastClickedRowIdx : rowIdx;

							var rows = self.table.rowManager.getDisplayRows().slice(0);
							var toggledRows = rows.splice(fromRowIdx, toRowIdx - fromRowIdx + 1);

							if (e.ctrlKey) {
								toggledRows.forEach(function (toggledRow) {
									if (toggledRow !== self.lastClickedRow) {
										self.toggleRow(toggledRow);
									}
								});
								self.lastClickedRow = row;
							} else {
								self.deselectRows();
								self.selectRows(toggledRows);
							}
						} else if (e.ctrlKey) {
							self.toggleRow(row);
							self.lastClickedRow = row;
						} else {
							self.deselectRows();
							self.selectRows(row);
							self.lastClickedRow = row;
						}
					});
				} else {
					element.addEventListener("click", function (e) {
						if (!self.selecting) {
							self.toggleRow(row);
						}
					});

					element.addEventListener("mousedown", function (e) {
						if (e.shiftKey) {
							self.selecting = true;

							self.selectPrev = [];

							document.body.addEventListener("mouseup", endSelect);
							document.body.addEventListener("keyup", endSelect);

							self.toggleRow(row);

							return false;
						}
					});

					element.addEventListener("mouseenter", function (e) {
						if (self.selecting) {
							self.toggleRow(row);

							if (self.selectPrev[1] == row) {
								self.toggleRow(self.selectPrev[0]);
							}
						}
					});

					element.addEventListener("mouseout", function (e) {
						if (self.selecting) {
							self.selectPrev.unshift(row);
						}
					});
				}
			}
		} else {
			element.classList.add("tabulator-unselectable");
			element.classList.remove("tabulator-selectable");
		}
	};

	//toggle row selection
	SelectRow.prototype.toggleRow = function (row) {
		if (this.table.options.selectableCheck.call(this.table, row.getComponent())) {
			if (row.modules.select.selected) {
				this._deselectRow(row);
			} else {
				this._selectRow(row);
			}
		}
	};

	//select a number of rows
	SelectRow.prototype.selectRows = function (rows) {
		var self = this;

		switch (typeof rows === 'undefined' ? 'undefined' : _typeof(rows)) {
			case "undefined":
				self.table.rowManager.rows.forEach(function (row) {
					self._selectRow(row, false, true);
				});

				self._rowSelectionChanged();
				break;

			case "boolean":
				if (rows === true) {
					self.table.rowManager.activeRows.forEach(function (row) {
						self._selectRow(row, false, true);
					});

					self._rowSelectionChanged();
				}
				break;

			default:
				if (Array.isArray(rows)) {
					rows.forEach(function (row) {
						self._selectRow(row);
					});

					self._rowSelectionChanged();
				} else {
					self._selectRow(rows);
				}
				break;
		}
	};

	//select an individual row
	SelectRow.prototype._selectRow = function (rowInfo, silent, force) {
		var index;

		//handle max row count
		if (!isNaN(this.table.options.selectable) && this.table.options.selectable !== true && !force) {
			if (this.selectedRows.length >= this.table.options.selectable) {
				if (this.table.options.selectableRollingSelection) {
					this._deselectRow(this.selectedRows[0]);
				} else {
					return false;
				}
			}
		}

		var row = this.table.rowManager.findRow(rowInfo);

		if (row) {
			if (this.selectedRows.indexOf(row) == -1) {
				row.modules.select.selected = true;
				row.getElement().classList.add("tabulator-selected");

				this.selectedRows.push(row);

				if (!silent) {
					this.table.options.rowSelected.call(this.table, row.getComponent());
					this._rowSelectionChanged();
				}
			}
		} else {
			if (!silent) {
				console.warn("Selection Error - No such row found, ignoring selection:" + rowInfo);
			}
		}
	};

	SelectRow.prototype.isRowSelected = function (row) {
		return this.selectedRows.indexOf(row) !== -1;
	};

	//deselect a number of rows
	SelectRow.prototype.deselectRows = function (rows) {
		var self = this,
		    rowCount;

		if (typeof rows == "undefined") {

			rowCount = self.selectedRows.length;

			for (var i = 0; i < rowCount; i++) {
				self._deselectRow(self.selectedRows[0], false);
			}

			self._rowSelectionChanged();
		} else {
			if (Array.isArray(rows)) {
				rows.forEach(function (row) {
					self._deselectRow(row);
				});

				self._rowSelectionChanged();
			} else {
				self._deselectRow(rows);
			}
		}
	};

	//deselect an individual row
	SelectRow.prototype._deselectRow = function (rowInfo, silent) {
		var self = this,
		    row = self.table.rowManager.findRow(rowInfo),
		    index;

		if (row) {
			index = self.selectedRows.findIndex(function (selectedRow) {
				return selectedRow == row;
			});

			if (index > -1) {

				row.modules.select.selected = false;
				row.getElement().classList.remove("tabulator-selected");
				self.selectedRows.splice(index, 1);

				if (!silent) {
					self.table.options.rowDeselected.call(this.table, row.getComponent());
					self._rowSelectionChanged();
				}
			}
		} else {
			if (!silent) {
				console.warn("Deselection Error - No such row found, ignoring selection:" + rowInfo);
			}
		}
	};

	SelectRow.prototype.getSelectedData = function () {
		var data = [];

		this.selectedRows.forEach(function (row) {
			data.push(row.getData());
		});

		return data;
	};

	SelectRow.prototype.getSelectedRows = function () {

		var rows = [];

		this.selectedRows.forEach(function (row) {
			rows.push(row.getComponent());
		});

		return rows;
	};

	SelectRow.prototype._rowSelectionChanged = function () {
		this.table.options.rowSelectionChanged.call(this.table, this.getSelectedData(), this.getSelectedRows());
	};

	Tabulator.prototype.registerModule("selectRow", SelectRow);

	var Sort = function Sort(table) {
		this.table = table; //hold Tabulator object
		this.sortList = []; //holder current sort
		this.changed = false; //has the sort changed since last render
	};

	//initialize column header for sorting
	Sort.prototype.initializeColumn = function (column, content) {
		var self = this,
		    sorter = false,
		    colEl,
		    arrowEl;

		switch (_typeof(column.definition.sorter)) {
			case "string":
				if (self.sorters[column.definition.sorter]) {
					sorter = self.sorters[column.definition.sorter];
				} else {
					console.warn("Sort Error - No such sorter found: ", column.definition.sorter);
				}
				break;

			case "function":
				sorter = column.definition.sorter;
				break;
		}

		column.modules.sort = {
			sorter: sorter, dir: "none",
			params: column.definition.sorterParams || {},
			startingDir: column.definition.headerSortStartingDir || "asc"
		};

		if (column.definition.headerSort !== false) {

			colEl = column.getElement();

			colEl.classList.add("tabulator-sortable");

			arrowEl = document.createElement("div");
			arrowEl.classList.add("tabulator-arrow");
			//create sorter arrow
			content.appendChild(arrowEl);

			//sort on click
			colEl.addEventListener("click", function (e) {
				var dir = "",
				    sorters = [],
				    match = false;

				if (column.modules.sort) {
					dir = column.modules.sort.dir == "asc" ? "desc" : column.modules.sort.dir == "desc" ? "asc" : column.modules.sort.startingDir;

					if (self.table.options.columnHeaderSortMulti && (e.shiftKey || e.ctrlKey)) {
						sorters = self.getSort();

						match = sorters.findIndex(function (sorter) {
							return sorter.field === column.getField();
						});

						if (match > -1) {
							sorters[match].dir = sorters[match].dir == "asc" ? "desc" : "asc";

							if (match != sorters.length - 1) {
								sorters.push(sorters.splice(match, 1)[0]);
							}
						} else {
							sorters.push({ column: column, dir: dir });
						}

						//add to existing sort
						self.setSort(sorters);
					} else {
						//sort by column only
						self.setSort(column, dir);
					}

					self.table.rowManager.sorterRefresh();
				}
			});
		}
	};

	//check if the sorters have changed since last use
	Sort.prototype.hasChanged = function () {
		var changed = this.changed;
		this.changed = false;
		return changed;
	};

	//return current sorters
	Sort.prototype.getSort = function () {
		var self = this,
		    sorters = [];

		self.sortList.forEach(function (item) {
			if (item.column) {
				sorters.push({ column: item.column.getComponent(), field: item.column.getField(), dir: item.dir });
			}
		});

		return sorters;
	};

	//change sort list and trigger sort
	Sort.prototype.setSort = function (sortList, dir) {
		var self = this,
		    newSortList = [];

		if (!Array.isArray(sortList)) {
			sortList = [{ column: sortList, dir: dir }];
		}

		sortList.forEach(function (item) {
			var column;

			column = self.table.columnManager.findColumn(item.column);

			if (column) {
				item.column = column;
				newSortList.push(item);
				self.changed = true;
			} else {
				console.warn("Sort Warning - Sort field does not exist and is being ignored: ", item.column);
			}
		});

		self.sortList = newSortList;

		if (this.table.options.persistentSort && this.table.modExists("persistence", true)) {
			this.table.modules.persistence.save("sort");
		}
	};

	//clear sorters
	Sort.prototype.clear = function () {
		this.setSort([]);
	};

	//find appropriate sorter for column
	Sort.prototype.findSorter = function (column) {
		var row = this.table.rowManager.activeRows[0],
		    sorter = "string",
		    field,
		    value;

		if (row) {
			row = row.getData();
			field = column.getField();

			if (field) {

				value = column.getFieldValue(row);

				switch (typeof value === 'undefined' ? 'undefined' : _typeof(value)) {
					case "undefined":
						sorter = "string";
						break;

					case "boolean":
						sorter = "boolean";
						break;

					default:
						if (!isNaN(value) && value !== "") {
							sorter = "number";
						} else {
							if (value.match(/((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+$/i)) {
								sorter = "alphanum";
							}
						}
						break;
				}
			}
		}

		return this.sorters[sorter];
	};

	//work through sort list sorting data
	Sort.prototype.sort = function () {
		var self = this,
		    lastSort,
		    sortList;

		sortList = this.table.options.sortOrderReverse ? self.sortList.slice().reverse() : self.sortList;

		if (self.table.options.dataSorting) {
			self.table.options.dataSorting.call(self.table, self.getSort());
		}

		self.clearColumnHeaders();

		if (!self.table.options.ajaxSorting) {

			sortList.forEach(function (item, i) {

				if (item.column && item.column.modules.sort) {

					//if no sorter has been defined, take a guess
					if (!item.column.modules.sort.sorter) {
						item.column.modules.sort.sorter = self.findSorter(item.column);
					}

					self._sortItem(item.column, item.dir, sortList, i);
				}

				self.setColumnHeader(item.column, item.dir);
			});
		} else {
			sortList.forEach(function (item, i) {
				self.setColumnHeader(item.column, item.dir);
			});
		}

		if (self.table.options.dataSorted) {
			self.table.options.dataSorted.call(self.table, self.getSort(), self.table.rowManager.getComponents(true));
		}
	};

	//clear sort arrows on columns
	Sort.prototype.clearColumnHeaders = function () {
		this.table.columnManager.getRealColumns().forEach(function (column) {
			if (column.modules.sort) {
				column.modules.sort.dir = "none";
				column.getElement().setAttribute("aria-sort", "none");
			}
		});
	};

	//set the column header sort direction
	Sort.prototype.setColumnHeader = function (column, dir) {
		column.modules.sort.dir = dir;
		column.getElement().setAttribute("aria-sort", dir);
	};

	//sort each item in sort list
	Sort.prototype._sortItem = function (column, dir, sortList, i) {
		var self = this;

		var activeRows = self.table.rowManager.activeRows;

		var params = typeof column.modules.sort.params === "function" ? column.modules.sort.params(column.getComponent(), dir) : column.modules.sort.params;

		activeRows.sort(function (a, b) {

			var result = self._sortRow(a, b, column, dir, params);

			//if results match recurse through previous searchs to be sure
			if (result === 0 && i) {
				for (var j = i - 1; j >= 0; j--) {
					result = self._sortRow(a, b, sortList[j].column, sortList[j].dir, params);

					if (result !== 0) {
						break;
					}
				}
			}

			return result;
		});
	};

	//process individual rows for a sort function on active data
	Sort.prototype._sortRow = function (a, b, column, dir, params) {
		var el1Comp, el2Comp, colComp;

		//switch elements depending on search direction
		var el1 = dir == "asc" ? a : b;
		var el2 = dir == "asc" ? b : a;

		a = column.getFieldValue(el1.getData());
		b = column.getFieldValue(el2.getData());

		a = typeof a !== "undefined" ? a : "";
		b = typeof b !== "undefined" ? b : "";

		el1Comp = el1.getComponent();
		el2Comp = el2.getComponent();

		return column.modules.sort.sorter.call(this, a, b, el1Comp, el2Comp, column.getComponent(), dir, params);
	};

	//default data sorters
	Sort.prototype.sorters = {

		//sort numbers
		number: function number(a, b, aRow, bRow, column, dir, params) {
			var alignEmptyValues = params.alignEmptyValues;
			var emptyAlign = 0;

			a = parseFloat(String(a).replace(",", ""));
			b = parseFloat(String(b).replace(",", ""));

			//handle non numeric values
			if (isNaN(a)) {
				emptyAlign = isNaN(b) ? 0 : -1;
			} else if (isNaN(b)) {
				emptyAlign = 1;
			} else {
				//compare valid values
				return a - b;
			}

			//fix empty values in position
			if (alignEmptyValues === "top" && dir === "desc" || alignEmptyValues === "bottom" && dir === "asc") {
				emptyAlign *= -1;
			}

			return emptyAlign;
		},

		//sort strings
		string: function string(a, b, aRow, bRow, column, dir, params) {
			var alignEmptyValues = params.alignEmptyValues;
			var emptyAlign = 0;
			var locale;

			//handle empty values
			if (!a) {
				emptyAlign = !b ? 0 : -1;
			} else if (!b) {
				emptyAlign = 1;
			} else {
				//compare valid values
				switch (_typeof(params.locale)) {
					case "boolean":
						if (params.locale) {
							locale = this.table.modules.localize.getLocale();
						}
						break;
					case "string":
						locale = params.locale;
						break;
				}

				return String(a).toLowerCase().localeCompare(String(b).toLowerCase(), locale);
			}

			//fix empty values in position
			if (alignEmptyValues === "top" && dir === "desc" || alignEmptyValues === "bottom" && dir === "asc") {
				emptyAlign *= -1;
			}

			return emptyAlign;
		},

		//sort date
		date: function date(a, b, aRow, bRow, column, dir, params) {
			if (!params.format) {
				params.format = "DD/MM/YYYY";
			}

			return this.sorters.datetime.call(this, a, b, aRow, bRow, column, dir, params);
		},

		//sort hh:mm formatted times
		time: function time(a, b, aRow, bRow, column, dir, params) {
			if (!params.format) {
				params.format = "hh:mm";
			}

			return this.sorters.datetime.call(this, a, b, aRow, bRow, column, dir, params);
		},

		//sort datetime
		datetime: function datetime(a, b, aRow, bRow, column, dir, params) {
			var format = params.format || "DD/MM/YYYY hh:mm:ss",
			    alignEmptyValues = params.alignEmptyValues,
			    emptyAlign = 0;

			if (typeof moment != "undefined") {
				a = moment(a, format);
				b = moment(b, format);

				if (!a.isValid()) {
					emptyAlign = !b.isValid() ? 0 : -1;
				} else if (!b.isValid()) {
					emptyAlign = 1;
				} else {
					//compare valid values
					return a - b;
				}

				//fix empty values in position
				if (alignEmptyValues === "top" && dir === "desc" || alignEmptyValues === "bottom" && dir === "asc") {
					emptyAlign *= -1;
				}

				return emptyAlign;
			} else {
				console.error("Sort Error - 'datetime' sorter is dependant on moment.js");
			}
		},

		//sort booleans
		boolean: function boolean(a, b, aRow, bRow, column, dir, params) {
			var el1 = a === true || a === "true" || a === "True" || a === 1 ? 1 : 0;
			var el2 = b === true || b === "true" || b === "True" || b === 1 ? 1 : 0;

			return el1 - el2;
		},

		//sort if element contains any data
		array: function array(a, b, aRow, bRow, column, dir, params) {
			var el1 = 0;
			var el2 = 0;
			var type = params.type || "length";
			var alignEmptyValues = params.alignEmptyValues;
			var emptyAlign = 0;

			function calc(value) {

				switch (type) {
					case "length":
						return value.length;
						break;

					case "sum":
						return value.reduce(function (c, d) {
							return c + d;
						});
						break;

					case "max":
						return Math.max.apply(null, value);
						break;

					case "min":
						return Math.min.apply(null, value);
						break;

					case "avg":
						return value.reduce(function (c, d) {
							return c + d;
						}) / value.length;
						break;
				}
			}

			//handle non array values
			if (!Array.isArray(a)) {
				alignEmptyValues = !Array.isArray(b) ? 0 : -1;
			} else if (!Array.isArray(b)) {
				alignEmptyValues = 1;
			} else {

				//compare valid values
				el1 = a ? calc(a) : 0;
				el2 = b ? calc(b) : 0;

				return el1 - el2;
			}

			//fix empty values in position
			if (alignEmptyValues === "top" && dir === "desc" || alignEmptyValues === "bottom" && dir === "asc") {
				emptyAlign *= -1;
			}

			return emptyAlign;
		},

		//sort if element contains any data
		exists: function exists(a, b, aRow, bRow, column, dir, params) {
			var el1 = typeof a == "undefined" ? 0 : 1;
			var el2 = typeof b == "undefined" ? 0 : 1;

			return el1 - el2;
		},

		//sort alpha numeric strings
		alphanum: function alphanum(as, bs, aRow, bRow, column, dir, params) {
			var a,
			    b,
			    a1,
			    b1,
			    i = 0,
			    L,
			    rx = /(\d+)|(\D+)/g,
			    rd = /\d/;
			var alignEmptyValues = params.alignEmptyValues;
			var emptyAlign = 0;

			//handle empty values
			if (!as && as !== 0) {
				emptyAlign = !bs && bs !== 0 ? 0 : -1;
			} else if (!bs && bs !== 0) {
				emptyAlign = 1;
			} else {

				if (isFinite(as) && isFinite(bs)) return as - bs;
				a = String(as).toLowerCase();
				b = String(bs).toLowerCase();
				if (a === b) return 0;
				if (!(rd.test(a) && rd.test(b))) return a > b ? 1 : -1;
				a = a.match(rx);
				b = b.match(rx);
				L = a.length > b.length ? b.length : a.length;
				while (i < L) {
					a1 = a[i];
					b1 = b[i++];
					if (a1 !== b1) {
						if (isFinite(a1) && isFinite(b1)) {
							if (a1.charAt(0) === "0") a1 = "." + a1;
							if (b1.charAt(0) === "0") b1 = "." + b1;
							return a1 - b1;
						} else return a1 > b1 ? 1 : -1;
					}
				}

				return a.length > b.length;
			}

			//fix empty values in position
			if (alignEmptyValues === "top" && dir === "desc" || alignEmptyValues === "bottom" && dir === "asc") {
				emptyAlign *= -1;
			}

			return emptyAlign;
		}
	};

	Tabulator.prototype.registerModule("sort", Sort);

	var Validate = function Validate(table) {
		this.table = table;
	};

	//validate
	Validate.prototype.initializeColumn = function (column) {
		var self = this,
		    config = [],
		    validator;

		if (column.definition.validator) {

			if (Array.isArray(column.definition.validator)) {
				column.definition.validator.forEach(function (item) {
					validator = self._extractValidator(item);

					if (validator) {
						config.push(validator);
					}
				});
			} else {
				validator = this._extractValidator(column.definition.validator);

				if (validator) {
					config.push(validator);
				}
			}

			column.modules.validate = config.length ? config : false;
		}
	};

	Validate.prototype._extractValidator = function (value) {
		var parts, type, params;

		switch (typeof value === 'undefined' ? 'undefined' : _typeof(value)) {
			case "string":
				parts = value.split(":", 2);
				type = parts.shift();
				params = parts[0];

				return this._buildValidator(type, params);
				break;

			case "function":
				return this._buildValidator(value);
				break;

			case "object":
				return this._buildValidator(value.type, value.parameters);
				break;
		}
	};

	Validate.prototype._buildValidator = function (type, params) {

		var func = typeof type == "function" ? type : this.validators[type];

		if (!func) {
			console.warn("Validator Setup Error - No matching validator found:", type);
			return false;
		} else {
			return {
				type: typeof type == "function" ? "function" : type,
				func: func,
				params: params
			};
		}
	};

	Validate.prototype.validate = function (validators, cell, value) {
		var self = this,
		    valid = [];

		if (validators) {
			validators.forEach(function (item) {
				if (!item.func.call(self, cell, value, item.params)) {
					valid.push({
						type: item.type,
						parameters: item.params
					});
				}
			});
		}

		return valid.length ? valid : true;
	};

	Validate.prototype.validators = {

		//is integer
		integer: function integer(cell, value, parameters) {
			if (value === "" || value === null || typeof value === "undefined") {
				return true;
			}
			value = Number(value);
			return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
		},

		//is float
		float: function float(cell, value, parameters) {
			if (value === "" || value === null || typeof value === "undefined") {
				return true;
			}
			value = Number(value);
			return typeof value === 'number' && isFinite(value) && value % 1 !== 0;
		},

		//must be a number
		numeric: function numeric(cell, value, parameters) {
			if (value === "" || value === null || typeof value === "undefined") {
				return true;
			}
			return !isNaN(value);
		},

		//must be a string
		string: function string(cell, value, parameters) {
			if (value === "" || value === null || typeof value === "undefined") {
				return true;
			}
			return isNaN(value);
		},

		//maximum value
		max: function max(cell, value, parameters) {
			if (value === "" || value === null || typeof value === "undefined") {
				return true;
			}
			return parseFloat(value) <= parameters;
		},

		//minimum value
		min: function min(cell, value, parameters) {
			if (value === "" || value === null || typeof value === "undefined") {
				return true;
			}
			return parseFloat(value) >= parameters;
		},

		//minimum string length
		minLength: function minLength(cell, value, parameters) {
			if (value === "" || value === null || typeof value === "undefined") {
				return true;
			}
			return String(value).length >= parameters;
		},

		//maximum string length
		maxLength: function maxLength(cell, value, parameters) {
			if (value === "" || value === null || typeof value === "undefined") {
				return true;
			}
			return String(value).length <= parameters;
		},

		//in provided value list
		in: function _in(cell, value, parameters) {
			if (value === "" || value === null || typeof value === "undefined") {
				return true;
			}
			if (typeof parameters == "string") {
				parameters = parameters.split("|");
			}

			return value === "" || parameters.indexOf(value) > -1;
		},

		//must match provided regex
		regex: function regex(cell, value, parameters) {
			if (value === "" || value === null || typeof value === "undefined") {
				return true;
			}
			var reg = new RegExp(parameters);

			return reg.test(value);
		},

		//value must be unique in this column
		unique: function unique(cell, value, parameters) {
			if (value === "" || value === null || typeof value === "undefined") {
				return true;
			}
			var unique = true;

			var cellData = cell.getData();
			var column = cell.getColumn()._getSelf();

			this.table.rowManager.rows.forEach(function (row) {
				var data = row.getData();

				if (data !== cellData) {
					if (value == column.getFieldValue(data)) {
						unique = false;
					}
				}
			});

			return unique;
		},

		//must have a value
		required: function required(cell, value, parameters) {
			return value !== "" & value !== null && typeof value !== "undefined";
		}
	};

	Tabulator.prototype.registerModule("validate", Validate);

	return Tabulator;
});

/***/ })

/******/ });
});