import {
  __commonJS,
  __export,
  __toESM
} from "./chunk-4EOJPDL2.js";

// node_modules/jquery/dist/jquery.js
var require_jquery = __commonJS({
  "node_modules/jquery/dist/jquery.js"(exports, module) {
    (function(global, factory) {
      "use strict";
      if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = global.document ? factory(global, true) : function(w) {
          if (!w.document) {
            throw new Error("jQuery requires a window with a document");
          }
          return factory(w);
        };
      } else {
        factory(global);
      }
    })(typeof window !== "undefined" ? window : exports, function(window2, noGlobal) {
      "use strict";
      var arr = [];
      var getProto = Object.getPrototypeOf;
      var slice = arr.slice;
      var flat = arr.flat ? function(array) {
        return arr.flat.call(array);
      } : function(array) {
        return arr.concat.apply([], array);
      };
      var push = arr.push;
      var indexOf = arr.indexOf;
      var class2type = {};
      var toString = class2type.toString;
      var hasOwn = class2type.hasOwnProperty;
      var fnToString = hasOwn.toString;
      var ObjectFunctionString = fnToString.call(Object);
      var support = {};
      var isFunction = function isFunction2(obj) {
        return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
      };
      var isWindow = function isWindow2(obj) {
        return obj != null && obj === obj.window;
      };
      var document2 = window2.document;
      var preservedScriptAttributes = {
        type: true,
        src: true,
        nonce: true,
        noModule: true
      };
      function DOMEval(code, node, doc) {
        doc = doc || document2;
        var i2, val, script = doc.createElement("script");
        script.text = code;
        if (node) {
          for (i2 in preservedScriptAttributes) {
            val = node[i2] || node.getAttribute && node.getAttribute(i2);
            if (val) {
              script.setAttribute(i2, val);
            }
          }
        }
        doc.head.appendChild(script).parentNode.removeChild(script);
      }
      function toType2(obj) {
        if (obj == null) {
          return obj + "";
        }
        return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
      }
      var version = "3.6.4", jQuery2 = function(selector, context) {
        return new jQuery2.fn.init(selector, context);
      };
      jQuery2.fn = jQuery2.prototype = {
        // The current version of jQuery being used
        jquery: version,
        constructor: jQuery2,
        // The default length of a jQuery object is 0
        length: 0,
        toArray: function() {
          return slice.call(this);
        },
        // Get the Nth element in the matched element set OR
        // Get the whole matched element set as a clean array
        get: function(num) {
          if (num == null) {
            return slice.call(this);
          }
          return num < 0 ? this[num + this.length] : this[num];
        },
        // Take an array of elements and push it onto the stack
        // (returning the new matched element set)
        pushStack: function(elems) {
          var ret = jQuery2.merge(this.constructor(), elems);
          ret.prevObject = this;
          return ret;
        },
        // Execute a callback for every element in the matched set.
        each: function(callback) {
          return jQuery2.each(this, callback);
        },
        map: function(callback) {
          return this.pushStack(jQuery2.map(this, function(elem, i2) {
            return callback.call(elem, i2, elem);
          }));
        },
        slice: function() {
          return this.pushStack(slice.apply(this, arguments));
        },
        first: function() {
          return this.eq(0);
        },
        last: function() {
          return this.eq(-1);
        },
        even: function() {
          return this.pushStack(jQuery2.grep(this, function(_elem, i2) {
            return (i2 + 1) % 2;
          }));
        },
        odd: function() {
          return this.pushStack(jQuery2.grep(this, function(_elem, i2) {
            return i2 % 2;
          }));
        },
        eq: function(i2) {
          var len = this.length, j = +i2 + (i2 < 0 ? len : 0);
          return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
        },
        end: function() {
          return this.prevObject || this.constructor();
        },
        // For internal use only.
        // Behaves like an Array's method, not like a jQuery method.
        push,
        sort: arr.sort,
        splice: arr.splice
      };
      jQuery2.extend = jQuery2.fn.extend = function() {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i2 = 1, length = arguments.length, deep = false;
        if (typeof target === "boolean") {
          deep = target;
          target = arguments[i2] || {};
          i2++;
        }
        if (typeof target !== "object" && !isFunction(target)) {
          target = {};
        }
        if (i2 === length) {
          target = this;
          i2--;
        }
        for (; i2 < length; i2++) {
          if ((options = arguments[i2]) != null) {
            for (name in options) {
              copy = options[name];
              if (name === "__proto__" || target === copy) {
                continue;
              }
              if (deep && copy && (jQuery2.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                src = target[name];
                if (copyIsArray && !Array.isArray(src)) {
                  clone = [];
                } else if (!copyIsArray && !jQuery2.isPlainObject(src)) {
                  clone = {};
                } else {
                  clone = src;
                }
                copyIsArray = false;
                target[name] = jQuery2.extend(deep, clone, copy);
              } else if (copy !== void 0) {
                target[name] = copy;
              }
            }
          }
        }
        return target;
      };
      jQuery2.extend({
        // Unique for each copy of jQuery on the page
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
        // Assume jQuery is ready without the ready module
        isReady: true,
        error: function(msg) {
          throw new Error(msg);
        },
        noop: function() {
        },
        isPlainObject: function(obj) {
          var proto, Ctor;
          if (!obj || toString.call(obj) !== "[object Object]") {
            return false;
          }
          proto = getProto(obj);
          if (!proto) {
            return true;
          }
          Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
          return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
        },
        isEmptyObject: function(obj) {
          var name;
          for (name in obj) {
            return false;
          }
          return true;
        },
        // Evaluates a script in a provided context; falls back to the global one
        // if not specified.
        globalEval: function(code, options, doc) {
          DOMEval(code, { nonce: options && options.nonce }, doc);
        },
        each: function(obj, callback) {
          var length, i2 = 0;
          if (isArrayLike(obj)) {
            length = obj.length;
            for (; i2 < length; i2++) {
              if (callback.call(obj[i2], i2, obj[i2]) === false) {
                break;
              }
            }
          } else {
            for (i2 in obj) {
              if (callback.call(obj[i2], i2, obj[i2]) === false) {
                break;
              }
            }
          }
          return obj;
        },
        // results is for internal usage only
        makeArray: function(arr2, results) {
          var ret = results || [];
          if (arr2 != null) {
            if (isArrayLike(Object(arr2))) {
              jQuery2.merge(
                ret,
                typeof arr2 === "string" ? [arr2] : arr2
              );
            } else {
              push.call(ret, arr2);
            }
          }
          return ret;
        },
        inArray: function(elem, arr2, i2) {
          return arr2 == null ? -1 : indexOf.call(arr2, elem, i2);
        },
        // Support: Android <=4.0 only, PhantomJS 1 only
        // push.apply(_, arraylike) throws on ancient WebKit
        merge: function(first, second) {
          var len = +second.length, j = 0, i2 = first.length;
          for (; j < len; j++) {
            first[i2++] = second[j];
          }
          first.length = i2;
          return first;
        },
        grep: function(elems, callback, invert) {
          var callbackInverse, matches = [], i2 = 0, length = elems.length, callbackExpect = !invert;
          for (; i2 < length; i2++) {
            callbackInverse = !callback(elems[i2], i2);
            if (callbackInverse !== callbackExpect) {
              matches.push(elems[i2]);
            }
          }
          return matches;
        },
        // arg is for internal usage only
        map: function(elems, callback, arg) {
          var length, value, i2 = 0, ret = [];
          if (isArrayLike(elems)) {
            length = elems.length;
            for (; i2 < length; i2++) {
              value = callback(elems[i2], i2, arg);
              if (value != null) {
                ret.push(value);
              }
            }
          } else {
            for (i2 in elems) {
              value = callback(elems[i2], i2, arg);
              if (value != null) {
                ret.push(value);
              }
            }
          }
          return flat(ret);
        },
        // A global GUID counter for objects
        guid: 1,
        // jQuery.support is not used in Core but other projects attach their
        // properties to it so it needs to exist.
        support
      });
      if (typeof Symbol === "function") {
        jQuery2.fn[Symbol.iterator] = arr[Symbol.iterator];
      }
      jQuery2.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
        function(_i, name) {
          class2type["[object " + name + "]"] = name.toLowerCase();
        }
      );
      function isArrayLike(obj) {
        var length = !!obj && "length" in obj && obj.length, type = toType2(obj);
        if (isFunction(obj) || isWindow(obj)) {
          return false;
        }
        return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
      }
      var Sizzle = (
        /*!
         * Sizzle CSS Selector Engine v2.3.10
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://js.foundation/
         *
         * Date: 2023-02-14
         */
        function(window3) {
          var i2, support2, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document3, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains2, expando = "sizzle" + 1 * /* @__PURE__ */ new Date(), preferredDoc = window3.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
            if (a === b) {
              hasDuplicate = true;
            }
            return 0;
          }, hasOwn2 = {}.hasOwnProperty, arr2 = [], pop = arr2.pop, pushNative = arr2.push, push2 = arr2.push, slice2 = arr2.slice, indexOf2 = function(list, elem) {
            var i3 = 0, len = list.length;
            for (; i3 < len; i3++) {
              if (list[i3] === elem) {
                return i3;
              }
            }
            return -1;
          }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", whitespace2 = "[\\x20\\t\\r\\n\\f]", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace2 + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace2 + "*(" + identifier + ")(?:" + whitespace2 + // Operator (capture 2)
          "*([*^$|!~]?=)" + whitespace2 + // "Attribute values must be CSS identifiers [capture 5]
          // or strings [capture 3 or capture 4]"
          `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace2 + "*\\]", pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace2 + "+", "g"), rtrim2 = new RegExp("^" + whitespace2 + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace2 + "+$", "g"), rcomma = new RegExp("^" + whitespace2 + "*," + whitespace2 + "*"), rleadingCombinator = new RegExp("^" + whitespace2 + "*([>+~]|" + whitespace2 + ")" + whitespace2 + "*"), rdescend = new RegExp(whitespace2 + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
            "ID": new RegExp("^#(" + identifier + ")"),
            "CLASS": new RegExp("^\\.(" + identifier + ")"),
            "TAG": new RegExp("^(" + identifier + "|[*])"),
            "ATTR": new RegExp("^" + attributes),
            "PSEUDO": new RegExp("^" + pseudos),
            "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace2 + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace2 + "*(?:([+-]|)" + whitespace2 + "*(\\d+)|))" + whitespace2 + "*\\)|)", "i"),
            "bool": new RegExp("^(?:" + booleans + ")$", "i"),
            // For use in libraries implementing .is()
            // We use this for POS matching in `select`
            "needsContext": new RegExp("^" + whitespace2 + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace2 + "*((?:-\\d)?\\d*)" + whitespace2 + "*\\)|)(?=[^-]|$)", "i")
          }, rhtml2 = /HTML$/i, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, rquickExpr2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace2 + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
            var high = "0x" + escape.slice(1) - 65536;
            return nonHex ? (
              // Strip the backslash prefix from a non-hex escape sequence
              nonHex
            ) : (
              // Replace a hexadecimal escape sequence with the encoded Unicode code point
              // Support: IE <=11+
              // For values outside the Basic Multilingual Plane (BMP), manually construct a
              // surrogate pair
              high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320)
            );
          }, rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, fcssescape = function(ch, asCodePoint) {
            if (asCodePoint) {
              if (ch === "\0") {
                return "�";
              }
              return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
            }
            return "\\" + ch;
          }, unloadHandler = function() {
            setDocument();
          }, inDisabledFieldset = addCombinator(
            function(elem) {
              return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
            },
            { dir: "parentNode", next: "legend" }
          );
          try {
            push2.apply(
              arr2 = slice2.call(preferredDoc.childNodes),
              preferredDoc.childNodes
            );
            arr2[preferredDoc.childNodes.length].nodeType;
          } catch (e) {
            push2 = {
              apply: arr2.length ? (
                // Leverage slice if possible
                function(target, els) {
                  pushNative.apply(target, slice2.call(els));
                }
              ) : (
                // Support: IE<9
                // Otherwise append directly
                function(target, els) {
                  var j = target.length, i3 = 0;
                  while (target[j++] = els[i3++]) {
                  }
                  target.length = j - 1;
                }
              )
            };
          }
          function Sizzle2(selector, context, results, seed) {
            var m, i3, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
            results = results || [];
            if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
              return results;
            }
            if (!seed) {
              setDocument(context);
              context = context || document3;
              if (documentIsHTML) {
                if (nodeType !== 11 && (match = rquickExpr2.exec(selector))) {
                  if (m = match[1]) {
                    if (nodeType === 9) {
                      if (elem = context.getElementById(m)) {
                        if (elem.id === m) {
                          results.push(elem);
                          return results;
                        }
                      } else {
                        return results;
                      }
                    } else {
                      if (newContext && (elem = newContext.getElementById(m)) && contains2(context, elem) && elem.id === m) {
                        results.push(elem);
                        return results;
                      }
                    }
                  } else if (match[2]) {
                    push2.apply(results, context.getElementsByTagName(selector));
                    return results;
                  } else if ((m = match[3]) && support2.getElementsByClassName && context.getElementsByClassName) {
                    push2.apply(results, context.getElementsByClassName(m));
                    return results;
                  }
                }
                if (support2.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && // Support: IE 8 only
                // Exclude object elements
                (nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {
                  newSelector = selector;
                  newContext = context;
                  if (nodeType === 1 && (rdescend.test(selector) || rleadingCombinator.test(selector))) {
                    newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                    if (newContext !== context || !support2.scope) {
                      if (nid = context.getAttribute("id")) {
                        nid = nid.replace(rcssescape, fcssescape);
                      } else {
                        context.setAttribute("id", nid = expando);
                      }
                    }
                    groups = tokenize(selector);
                    i3 = groups.length;
                    while (i3--) {
                      groups[i3] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i3]);
                    }
                    newSelector = groups.join(",");
                  }
                  try {
                    push2.apply(
                      results,
                      newContext.querySelectorAll(newSelector)
                    );
                    return results;
                  } catch (qsaError) {
                    nonnativeSelectorCache(selector, true);
                  } finally {
                    if (nid === expando) {
                      context.removeAttribute("id");
                    }
                  }
                }
              }
            }
            return select(selector.replace(rtrim2, "$1"), context, results, seed);
          }
          function createCache() {
            var keys = [];
            function cache(key, value) {
              if (keys.push(key + " ") > Expr.cacheLength) {
                delete cache[keys.shift()];
              }
              return cache[key + " "] = value;
            }
            return cache;
          }
          function markFunction(fn2) {
            fn2[expando] = true;
            return fn2;
          }
          function assert(fn2) {
            var el = document3.createElement("fieldset");
            try {
              return !!fn2(el);
            } catch (e) {
              return false;
            } finally {
              if (el.parentNode) {
                el.parentNode.removeChild(el);
              }
              el = null;
            }
          }
          function addHandle(attrs, handler) {
            var arr3 = attrs.split("|"), i3 = arr3.length;
            while (i3--) {
              Expr.attrHandle[arr3[i3]] = handler;
            }
          }
          function siblingCheck(a, b) {
            var cur = b && a, diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;
            if (diff) {
              return diff;
            }
            if (cur) {
              while (cur = cur.nextSibling) {
                if (cur === b) {
                  return -1;
                }
              }
            }
            return a ? 1 : -1;
          }
          function createInputPseudo(type) {
            return function(elem) {
              var name = elem.nodeName.toLowerCase();
              return name === "input" && elem.type === type;
            };
          }
          function createButtonPseudo(type) {
            return function(elem) {
              var name = elem.nodeName.toLowerCase();
              return (name === "input" || name === "button") && elem.type === type;
            };
          }
          function createDisabledPseudo(disabled) {
            return function(elem) {
              if ("form" in elem) {
                if (elem.parentNode && elem.disabled === false) {
                  if ("label" in elem) {
                    if ("label" in elem.parentNode) {
                      return elem.parentNode.disabled === disabled;
                    } else {
                      return elem.disabled === disabled;
                    }
                  }
                  return elem.isDisabled === disabled || // Where there is no isDisabled, check manually
                  /* jshint -W018 */
                  elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
                }
                return elem.disabled === disabled;
              } else if ("label" in elem) {
                return elem.disabled === disabled;
              }
              return false;
            };
          }
          function createPositionalPseudo(fn2) {
            return markFunction(function(argument) {
              argument = +argument;
              return markFunction(function(seed, matches2) {
                var j, matchIndexes = fn2([], seed.length, argument), i3 = matchIndexes.length;
                while (i3--) {
                  if (seed[j = matchIndexes[i3]]) {
                    seed[j] = !(matches2[j] = seed[j]);
                  }
                }
              });
            });
          }
          function testContext(context) {
            return context && typeof context.getElementsByTagName !== "undefined" && context;
          }
          support2 = Sizzle2.support = {};
          isXML = Sizzle2.isXML = function(elem) {
            var namespace = elem && elem.namespaceURI, docElem2 = elem && (elem.ownerDocument || elem).documentElement;
            return !rhtml2.test(namespace || docElem2 && docElem2.nodeName || "HTML");
          };
          setDocument = Sizzle2.setDocument = function(node) {
            var hasCompare, subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
            if (doc == document3 || doc.nodeType !== 9 || !doc.documentElement) {
              return document3;
            }
            document3 = doc;
            docElem = document3.documentElement;
            documentIsHTML = !isXML(document3);
            if (preferredDoc != document3 && (subWindow = document3.defaultView) && subWindow.top !== subWindow) {
              if (subWindow.addEventListener) {
                subWindow.addEventListener("unload", unloadHandler, false);
              } else if (subWindow.attachEvent) {
                subWindow.attachEvent("onunload", unloadHandler);
              }
            }
            support2.scope = assert(function(el) {
              docElem.appendChild(el).appendChild(document3.createElement("div"));
              return typeof el.querySelectorAll !== "undefined" && !el.querySelectorAll(":scope fieldset div").length;
            });
            support2.cssHas = assert(function() {
              try {
                document3.querySelector(":has(*,:jqfake)");
                return false;
              } catch (e) {
                return true;
              }
            });
            support2.attributes = assert(function(el) {
              el.className = "i";
              return !el.getAttribute("className");
            });
            support2.getElementsByTagName = assert(function(el) {
              el.appendChild(document3.createComment(""));
              return !el.getElementsByTagName("*").length;
            });
            support2.getElementsByClassName = rnative.test(document3.getElementsByClassName);
            support2.getById = assert(function(el) {
              docElem.appendChild(el).id = expando;
              return !document3.getElementsByName || !document3.getElementsByName(expando).length;
            });
            if (support2.getById) {
              Expr.filter["ID"] = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                  return elem.getAttribute("id") === attrId;
                };
              };
              Expr.find["ID"] = function(id, context) {
                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                  var elem = context.getElementById(id);
                  return elem ? [elem] : [];
                }
              };
            } else {
              Expr.filter["ID"] = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                  var node2 = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                  return node2 && node2.value === attrId;
                };
              };
              Expr.find["ID"] = function(id, context) {
                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                  var node2, i3, elems, elem = context.getElementById(id);
                  if (elem) {
                    node2 = elem.getAttributeNode("id");
                    if (node2 && node2.value === id) {
                      return [elem];
                    }
                    elems = context.getElementsByName(id);
                    i3 = 0;
                    while (elem = elems[i3++]) {
                      node2 = elem.getAttributeNode("id");
                      if (node2 && node2.value === id) {
                        return [elem];
                      }
                    }
                  }
                  return [];
                }
              };
            }
            Expr.find["TAG"] = support2.getElementsByTagName ? function(tag, context) {
              if (typeof context.getElementsByTagName !== "undefined") {
                return context.getElementsByTagName(tag);
              } else if (support2.qsa) {
                return context.querySelectorAll(tag);
              }
            } : function(tag, context) {
              var elem, tmp = [], i3 = 0, results = context.getElementsByTagName(tag);
              if (tag === "*") {
                while (elem = results[i3++]) {
                  if (elem.nodeType === 1) {
                    tmp.push(elem);
                  }
                }
                return tmp;
              }
              return results;
            };
            Expr.find["CLASS"] = support2.getElementsByClassName && function(className, context) {
              if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
                return context.getElementsByClassName(className);
              }
            };
            rbuggyMatches = [];
            rbuggyQSA = [];
            if (support2.qsa = rnative.test(document3.querySelectorAll)) {
              assert(function(el) {
                var input;
                docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a><select id='" + expando + "-\r\\' msallowcapture=''><option selected=''></option></select>";
                if (el.querySelectorAll("[msallowcapture^='']").length) {
                  rbuggyQSA.push("[*^$]=" + whitespace2 + `*(?:''|"")`);
                }
                if (!el.querySelectorAll("[selected]").length) {
                  rbuggyQSA.push("\\[" + whitespace2 + "*(?:value|" + booleans + ")");
                }
                if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
                  rbuggyQSA.push("~=");
                }
                input = document3.createElement("input");
                input.setAttribute("name", "");
                el.appendChild(input);
                if (!el.querySelectorAll("[name='']").length) {
                  rbuggyQSA.push("\\[" + whitespace2 + "*name" + whitespace2 + "*=" + whitespace2 + `*(?:''|"")`);
                }
                if (!el.querySelectorAll(":checked").length) {
                  rbuggyQSA.push(":checked");
                }
                if (!el.querySelectorAll("a#" + expando + "+*").length) {
                  rbuggyQSA.push(".#.+[+~]");
                }
                el.querySelectorAll("\\\f");
                rbuggyQSA.push("[\\r\\n\\f]");
              });
              assert(function(el) {
                el.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var input = document3.createElement("input");
                input.setAttribute("type", "hidden");
                el.appendChild(input).setAttribute("name", "D");
                if (el.querySelectorAll("[name=d]").length) {
                  rbuggyQSA.push("name" + whitespace2 + "*[*^$|!~]?=");
                }
                if (el.querySelectorAll(":enabled").length !== 2) {
                  rbuggyQSA.push(":enabled", ":disabled");
                }
                docElem.appendChild(el).disabled = true;
                if (el.querySelectorAll(":disabled").length !== 2) {
                  rbuggyQSA.push(":enabled", ":disabled");
                }
                el.querySelectorAll("*,:x");
                rbuggyQSA.push(",.*:");
              });
            }
            if (support2.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
              assert(function(el) {
                support2.disconnectedMatch = matches.call(el, "*");
                matches.call(el, "[s!='']:x");
                rbuggyMatches.push("!=", pseudos);
              });
            }
            if (!support2.cssHas) {
              rbuggyQSA.push(":has");
            }
            rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
            rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
            hasCompare = rnative.test(docElem.compareDocumentPosition);
            contains2 = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
              var adown = a.nodeType === 9 && a.documentElement || a, bup = b && b.parentNode;
              return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
            } : function(a, b) {
              if (b) {
                while (b = b.parentNode) {
                  if (b === a) {
                    return true;
                  }
                }
              }
              return false;
            };
            sortOrder = hasCompare ? function(a, b) {
              if (a === b) {
                hasDuplicate = true;
                return 0;
              }
              var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
              if (compare) {
                return compare;
              }
              compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : (
                // Otherwise we know they are disconnected
                1
              );
              if (compare & 1 || !support2.sortDetached && b.compareDocumentPosition(a) === compare) {
                if (a == document3 || a.ownerDocument == preferredDoc && contains2(preferredDoc, a)) {
                  return -1;
                }
                if (b == document3 || b.ownerDocument == preferredDoc && contains2(preferredDoc, b)) {
                  return 1;
                }
                return sortInput ? indexOf2(sortInput, a) - indexOf2(sortInput, b) : 0;
              }
              return compare & 4 ? -1 : 1;
            } : function(a, b) {
              if (a === b) {
                hasDuplicate = true;
                return 0;
              }
              var cur, i3 = 0, aup = a.parentNode, bup = b.parentNode, ap = [a], bp = [b];
              if (!aup || !bup) {
                return a == document3 ? -1 : b == document3 ? 1 : (
                  /* eslint-enable eqeqeq */
                  aup ? -1 : bup ? 1 : sortInput ? indexOf2(sortInput, a) - indexOf2(sortInput, b) : 0
                );
              } else if (aup === bup) {
                return siblingCheck(a, b);
              }
              cur = a;
              while (cur = cur.parentNode) {
                ap.unshift(cur);
              }
              cur = b;
              while (cur = cur.parentNode) {
                bp.unshift(cur);
              }
              while (ap[i3] === bp[i3]) {
                i3++;
              }
              return i3 ? (
                // Do a sibling check if the nodes have a common ancestor
                siblingCheck(ap[i3], bp[i3])
              ) : (
                // Otherwise nodes in our document sort first
                // Support: IE 11+, Edge 17 - 18+
                // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                // two documents; shallow comparisons work.
                /* eslint-disable eqeqeq */
                ap[i3] == preferredDoc ? -1 : bp[i3] == preferredDoc ? 1 : (
                  /* eslint-enable eqeqeq */
                  0
                )
              );
            };
            return document3;
          };
          Sizzle2.matches = function(expr, elements) {
            return Sizzle2(expr, null, null, elements);
          };
          Sizzle2.matchesSelector = function(elem, expr) {
            setDocument(elem);
            if (support2.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
              try {
                var ret = matches.call(elem, expr);
                if (ret || support2.disconnectedMatch || // As well, disconnected nodes are said to be in a document
                // fragment in IE 9
                elem.document && elem.document.nodeType !== 11) {
                  return ret;
                }
              } catch (e) {
                nonnativeSelectorCache(expr, true);
              }
            }
            return Sizzle2(expr, document3, null, [elem]).length > 0;
          };
          Sizzle2.contains = function(context, elem) {
            if ((context.ownerDocument || context) != document3) {
              setDocument(context);
            }
            return contains2(context, elem);
          };
          Sizzle2.attr = function(elem, name) {
            if ((elem.ownerDocument || elem) != document3) {
              setDocument(elem);
            }
            var fn2 = Expr.attrHandle[name.toLowerCase()], val = fn2 && hasOwn2.call(Expr.attrHandle, name.toLowerCase()) ? fn2(elem, name, !documentIsHTML) : void 0;
            return val !== void 0 ? val : support2.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
          };
          Sizzle2.escape = function(sel) {
            return (sel + "").replace(rcssescape, fcssescape);
          };
          Sizzle2.error = function(msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg);
          };
          Sizzle2.uniqueSort = function(results) {
            var elem, duplicates = [], j = 0, i3 = 0;
            hasDuplicate = !support2.detectDuplicates;
            sortInput = !support2.sortStable && results.slice(0);
            results.sort(sortOrder);
            if (hasDuplicate) {
              while (elem = results[i3++]) {
                if (elem === results[i3]) {
                  j = duplicates.push(i3);
                }
              }
              while (j--) {
                results.splice(duplicates[j], 1);
              }
            }
            sortInput = null;
            return results;
          };
          getText = Sizzle2.getText = function(elem) {
            var node, ret = "", i3 = 0, nodeType = elem.nodeType;
            if (!nodeType) {
              while (node = elem[i3++]) {
                ret += getText(node);
              }
            } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
              if (typeof elem.textContent === "string") {
                return elem.textContent;
              } else {
                for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                  ret += getText(elem);
                }
              }
            } else if (nodeType === 3 || nodeType === 4) {
              return elem.nodeValue;
            }
            return ret;
          };
          Expr = Sizzle2.selectors = {
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
              "ATTR": function(match) {
                match[1] = match[1].replace(runescape, funescape);
                match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                if (match[2] === "~=") {
                  match[3] = " " + match[3] + " ";
                }
                return match.slice(0, 4);
              },
              "CHILD": function(match) {
                match[1] = match[1].toLowerCase();
                if (match[1].slice(0, 3) === "nth") {
                  if (!match[3]) {
                    Sizzle2.error(match[0]);
                  }
                  match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                  match[5] = +(match[7] + match[8] || match[3] === "odd");
                } else if (match[3]) {
                  Sizzle2.error(match[0]);
                }
                return match;
              },
              "PSEUDO": function(match) {
                var excess, unquoted = !match[6] && match[2];
                if (matchExpr["CHILD"].test(match[0])) {
                  return null;
                }
                if (match[3]) {
                  match[2] = match[4] || match[5] || "";
                } else if (unquoted && rpseudo.test(unquoted) && // Get excess from tokenize (recursively)
                (excess = tokenize(unquoted, true)) && // advance to the next closing parenthesis
                (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                  match[0] = match[0].slice(0, excess);
                  match[2] = unquoted.slice(0, excess);
                }
                return match.slice(0, 3);
              }
            },
            filter: {
              "TAG": function(nodeNameSelector) {
                var nodeName2 = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                return nodeNameSelector === "*" ? function() {
                  return true;
                } : function(elem) {
                  return elem.nodeName && elem.nodeName.toLowerCase() === nodeName2;
                };
              },
              "CLASS": function(className) {
                var pattern = classCache[className + " "];
                return pattern || (pattern = new RegExp("(^|" + whitespace2 + ")" + className + "(" + whitespace2 + "|$)")) && classCache(
                  className,
                  function(elem) {
                    return pattern.test(
                      typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || ""
                    );
                  }
                );
              },
              "ATTR": function(name, operator, check) {
                return function(elem) {
                  var result = Sizzle2.attr(elem, name);
                  if (result == null) {
                    return operator === "!=";
                  }
                  if (!operator) {
                    return true;
                  }
                  result += "";
                  return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
                };
              },
              "CHILD": function(type, what, _argument, first, last) {
                var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                return first === 1 && last === 0 ? (
                  // Shortcut for :nth-*(n)
                  function(elem) {
                    return !!elem.parentNode;
                  }
                ) : function(elem, _context, xml) {
                  var cache, uniqueCache, outerCache, node, nodeIndex, start2, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                  if (parent) {
                    if (simple) {
                      while (dir2) {
                        node = elem;
                        while (node = node[dir2]) {
                          if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                            return false;
                          }
                        }
                        start2 = dir2 = type === "only" && !start2 && "nextSibling";
                      }
                      return true;
                    }
                    start2 = [forward ? parent.firstChild : parent.lastChild];
                    if (forward && useCache) {
                      node = parent;
                      outerCache = node[expando] || (node[expando] = {});
                      uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                      cache = uniqueCache[type] || [];
                      nodeIndex = cache[0] === dirruns && cache[1];
                      diff = nodeIndex && cache[2];
                      node = nodeIndex && parent.childNodes[nodeIndex];
                      while (node = ++nodeIndex && node && node[dir2] || // Fallback to seeking `elem` from the start
                      (diff = nodeIndex = 0) || start2.pop()) {
                        if (node.nodeType === 1 && ++diff && node === elem) {
                          uniqueCache[type] = [dirruns, nodeIndex, diff];
                          break;
                        }
                      }
                    } else {
                      if (useCache) {
                        node = elem;
                        outerCache = node[expando] || (node[expando] = {});
                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                        cache = uniqueCache[type] || [];
                        nodeIndex = cache[0] === dirruns && cache[1];
                        diff = nodeIndex;
                      }
                      if (diff === false) {
                        while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start2.pop()) {
                          if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                            if (useCache) {
                              outerCache = node[expando] || (node[expando] = {});
                              uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                              uniqueCache[type] = [dirruns, diff];
                            }
                            if (node === elem) {
                              break;
                            }
                          }
                        }
                      }
                    }
                    diff -= last;
                    return diff === first || diff % first === 0 && diff / first >= 0;
                  }
                };
              },
              "PSEUDO": function(pseudo, argument) {
                var args, fn2 = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle2.error("unsupported pseudo: " + pseudo);
                if (fn2[expando]) {
                  return fn2(argument);
                }
                if (fn2.length > 1) {
                  args = [pseudo, pseudo, "", argument];
                  return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches2) {
                    var idx, matched = fn2(seed, argument), i3 = matched.length;
                    while (i3--) {
                      idx = indexOf2(seed, matched[i3]);
                      seed[idx] = !(matches2[idx] = matched[i3]);
                    }
                  }) : function(elem) {
                    return fn2(elem, 0, args);
                  };
                }
                return fn2;
              }
            },
            pseudos: {
              // Potentially complex pseudos
              "not": markFunction(function(selector) {
                var input = [], results = [], matcher = compile(selector.replace(rtrim2, "$1"));
                return matcher[expando] ? markFunction(function(seed, matches2, _context, xml) {
                  var elem, unmatched = matcher(seed, null, xml, []), i3 = seed.length;
                  while (i3--) {
                    if (elem = unmatched[i3]) {
                      seed[i3] = !(matches2[i3] = elem);
                    }
                  }
                }) : function(elem, _context, xml) {
                  input[0] = elem;
                  matcher(input, null, xml, results);
                  input[0] = null;
                  return !results.pop();
                };
              }),
              "has": markFunction(function(selector) {
                return function(elem) {
                  return Sizzle2(selector, elem).length > 0;
                };
              }),
              "contains": markFunction(function(text) {
                text = text.replace(runescape, funescape);
                return function(elem) {
                  return (elem.textContent || getText(elem)).indexOf(text) > -1;
                };
              }),
              // "Whether an element is represented by a :lang() selector
              // is based solely on the element's language value
              // being equal to the identifier C,
              // or beginning with the identifier C immediately followed by "-".
              // The matching of C against the element's language value is performed case-insensitively.
              // The identifier C does not have to be a valid language name."
              // http://www.w3.org/TR/selectors/#lang-pseudo
              "lang": markFunction(function(lang) {
                if (!ridentifier.test(lang || "")) {
                  Sizzle2.error("unsupported lang: " + lang);
                }
                lang = lang.replace(runescape, funescape).toLowerCase();
                return function(elem) {
                  var elemLang;
                  do {
                    if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                      elemLang = elemLang.toLowerCase();
                      return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                    }
                  } while ((elem = elem.parentNode) && elem.nodeType === 1);
                  return false;
                };
              }),
              // Miscellaneous
              "target": function(elem) {
                var hash3 = window3.location && window3.location.hash;
                return hash3 && hash3.slice(1) === elem.id;
              },
              "root": function(elem) {
                return elem === docElem;
              },
              "focus": function(elem) {
                return elem === document3.activeElement && (!document3.hasFocus || document3.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
              },
              // Boolean properties
              "enabled": createDisabledPseudo(false),
              "disabled": createDisabledPseudo(true),
              "checked": function(elem) {
                var nodeName2 = elem.nodeName.toLowerCase();
                return nodeName2 === "input" && !!elem.checked || nodeName2 === "option" && !!elem.selected;
              },
              "selected": function(elem) {
                if (elem.parentNode) {
                  elem.parentNode.selectedIndex;
                }
                return elem.selected === true;
              },
              // Contents
              "empty": function(elem) {
                for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                  if (elem.nodeType < 6) {
                    return false;
                  }
                }
                return true;
              },
              "parent": function(elem) {
                return !Expr.pseudos["empty"](elem);
              },
              // Element/input types
              "header": function(elem) {
                return rheader.test(elem.nodeName);
              },
              "input": function(elem) {
                return rinputs.test(elem.nodeName);
              },
              "button": function(elem) {
                var name = elem.nodeName.toLowerCase();
                return name === "input" && elem.type === "button" || name === "button";
              },
              "text": function(elem) {
                var attr;
                return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && // Support: IE <10 only
                // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
                ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
              },
              // Position-in-collection
              "first": createPositionalPseudo(function() {
                return [0];
              }),
              "last": createPositionalPseudo(function(_matchIndexes, length) {
                return [length - 1];
              }),
              "eq": createPositionalPseudo(function(_matchIndexes, length, argument) {
                return [argument < 0 ? argument + length : argument];
              }),
              "even": createPositionalPseudo(function(matchIndexes, length) {
                var i3 = 0;
                for (; i3 < length; i3 += 2) {
                  matchIndexes.push(i3);
                }
                return matchIndexes;
              }),
              "odd": createPositionalPseudo(function(matchIndexes, length) {
                var i3 = 1;
                for (; i3 < length; i3 += 2) {
                  matchIndexes.push(i3);
                }
                return matchIndexes;
              }),
              "lt": createPositionalPseudo(function(matchIndexes, length, argument) {
                var i3 = argument < 0 ? argument + length : argument > length ? length : argument;
                for (; --i3 >= 0; ) {
                  matchIndexes.push(i3);
                }
                return matchIndexes;
              }),
              "gt": createPositionalPseudo(function(matchIndexes, length, argument) {
                var i3 = argument < 0 ? argument + length : argument;
                for (; ++i3 < length; ) {
                  matchIndexes.push(i3);
                }
                return matchIndexes;
              })
            }
          };
          Expr.pseudos["nth"] = Expr.pseudos["eq"];
          for (i2 in { radio: true, checkbox: true, file: true, password: true, image: true }) {
            Expr.pseudos[i2] = createInputPseudo(i2);
          }
          for (i2 in { submit: true, reset: true }) {
            Expr.pseudos[i2] = createButtonPseudo(i2);
          }
          function setFilters() {
          }
          setFilters.prototype = Expr.filters = Expr.pseudos;
          Expr.setFilters = new setFilters();
          tokenize = Sizzle2.tokenize = function(selector, parseOnly) {
            var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
            if (cached) {
              return parseOnly ? 0 : cached.slice(0);
            }
            soFar = selector;
            groups = [];
            preFilters = Expr.preFilter;
            while (soFar) {
              if (!matched || (match = rcomma.exec(soFar))) {
                if (match) {
                  soFar = soFar.slice(match[0].length) || soFar;
                }
                groups.push(tokens = []);
              }
              matched = false;
              if (match = rleadingCombinator.exec(soFar)) {
                matched = match.shift();
                tokens.push({
                  value: matched,
                  // Cast descendant combinators to space
                  type: match[0].replace(rtrim2, " ")
                });
                soFar = soFar.slice(matched.length);
              }
              for (type in Expr.filter) {
                if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                  matched = match.shift();
                  tokens.push({
                    value: matched,
                    type,
                    matches: match
                  });
                  soFar = soFar.slice(matched.length);
                }
              }
              if (!matched) {
                break;
              }
            }
            return parseOnly ? soFar.length : soFar ? Sizzle2.error(selector) : (
              // Cache the tokens
              tokenCache(selector, groups).slice(0)
            );
          };
          function toSelector(tokens) {
            var i3 = 0, len = tokens.length, selector = "";
            for (; i3 < len; i3++) {
              selector += tokens[i3].value;
            }
            return selector;
          }
          function addCombinator(matcher, combinator, base) {
            var dir2 = combinator.dir, skip = combinator.next, key = skip || dir2, checkNonElements = base && key === "parentNode", doneName = done++;
            return combinator.first ? (
              // Check against closest ancestor/preceding element
              function(elem, context, xml) {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    return matcher(elem, context, xml);
                  }
                }
                return false;
              }
            ) : (
              // Check against all ancestor/preceding elements
              function(elem, context, xml) {
                var oldCache, uniqueCache, outerCache, newCache = [dirruns, doneName];
                if (xml) {
                  while (elem = elem[dir2]) {
                    if (elem.nodeType === 1 || checkNonElements) {
                      if (matcher(elem, context, xml)) {
                        return true;
                      }
                    }
                  }
                } else {
                  while (elem = elem[dir2]) {
                    if (elem.nodeType === 1 || checkNonElements) {
                      outerCache = elem[expando] || (elem[expando] = {});
                      uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
                      if (skip && skip === elem.nodeName.toLowerCase()) {
                        elem = elem[dir2] || elem;
                      } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                        return newCache[2] = oldCache[2];
                      } else {
                        uniqueCache[key] = newCache;
                        if (newCache[2] = matcher(elem, context, xml)) {
                          return true;
                        }
                      }
                    }
                  }
                }
                return false;
              }
            );
          }
          function elementMatcher(matchers) {
            return matchers.length > 1 ? function(elem, context, xml) {
              var i3 = matchers.length;
              while (i3--) {
                if (!matchers[i3](elem, context, xml)) {
                  return false;
                }
              }
              return true;
            } : matchers[0];
          }
          function multipleContexts(selector, contexts, results) {
            var i3 = 0, len = contexts.length;
            for (; i3 < len; i3++) {
              Sizzle2(selector, contexts[i3], results);
            }
            return results;
          }
          function condense(unmatched, map, filter, context, xml) {
            var elem, newUnmatched = [], i3 = 0, len = unmatched.length, mapped = map != null;
            for (; i3 < len; i3++) {
              if (elem = unmatched[i3]) {
                if (!filter || filter(elem, context, xml)) {
                  newUnmatched.push(elem);
                  if (mapped) {
                    map.push(i3);
                  }
                }
              }
            }
            return newUnmatched;
          }
          function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            if (postFilter && !postFilter[expando]) {
              postFilter = setMatcher(postFilter);
            }
            if (postFinder && !postFinder[expando]) {
              postFinder = setMatcher(postFinder, postSelector);
            }
            return markFunction(function(seed, results, context, xml) {
              var temp, i3, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(
                selector || "*",
                context.nodeType ? [context] : context,
                []
              ), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? (
                // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
                postFinder || (seed ? preFilter : preexisting || postFilter) ? (
                  // ...intermediate processing is necessary
                  []
                ) : (
                  // ...otherwise use results directly
                  results
                )
              ) : matcherIn;
              if (matcher) {
                matcher(matcherIn, matcherOut, context, xml);
              }
              if (postFilter) {
                temp = condense(matcherOut, postMap);
                postFilter(temp, [], context, xml);
                i3 = temp.length;
                while (i3--) {
                  if (elem = temp[i3]) {
                    matcherOut[postMap[i3]] = !(matcherIn[postMap[i3]] = elem);
                  }
                }
              }
              if (seed) {
                if (postFinder || preFilter) {
                  if (postFinder) {
                    temp = [];
                    i3 = matcherOut.length;
                    while (i3--) {
                      if (elem = matcherOut[i3]) {
                        temp.push(matcherIn[i3] = elem);
                      }
                    }
                    postFinder(null, matcherOut = [], temp, xml);
                  }
                  i3 = matcherOut.length;
                  while (i3--) {
                    if ((elem = matcherOut[i3]) && (temp = postFinder ? indexOf2(seed, elem) : preMap[i3]) > -1) {
                      seed[temp] = !(results[temp] = elem);
                    }
                  }
                }
              } else {
                matcherOut = condense(
                  matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut
                );
                if (postFinder) {
                  postFinder(null, results, matcherOut, xml);
                } else {
                  push2.apply(results, matcherOut);
                }
              }
            });
          }
          function matcherFromTokens(tokens) {
            var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i3 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
              return elem === checkContext;
            }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
              return indexOf2(checkContext, elem) > -1;
            }, implicitRelative, true), matchers = [function(elem, context, xml) {
              var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
              checkContext = null;
              return ret;
            }];
            for (; i3 < len; i3++) {
              if (matcher = Expr.relative[tokens[i3].type]) {
                matchers = [addCombinator(elementMatcher(matchers), matcher)];
              } else {
                matcher = Expr.filter[tokens[i3].type].apply(null, tokens[i3].matches);
                if (matcher[expando]) {
                  j = ++i3;
                  for (; j < len; j++) {
                    if (Expr.relative[tokens[j].type]) {
                      break;
                    }
                  }
                  return setMatcher(
                    i3 > 1 && elementMatcher(matchers),
                    i3 > 1 && toSelector(
                      // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                      tokens.slice(0, i3 - 1).concat({ value: tokens[i3 - 2].type === " " ? "*" : "" })
                    ).replace(rtrim2, "$1"),
                    matcher,
                    i3 < j && matcherFromTokens(tokens.slice(i3, j)),
                    j < len && matcherFromTokens(tokens = tokens.slice(j)),
                    j < len && toSelector(tokens)
                  );
                }
                matchers.push(matcher);
              }
            }
            return elementMatcher(matchers);
          }
          function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
              var elem, j, matcher, matchedCount = 0, i3 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find["TAG"]("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
              if (outermost) {
                outermostContext = context == document3 || context || outermost;
              }
              for (; i3 !== len && (elem = elems[i3]) != null; i3++) {
                if (byElement && elem) {
                  j = 0;
                  if (!context && elem.ownerDocument != document3) {
                    setDocument(elem);
                    xml = !documentIsHTML;
                  }
                  while (matcher = elementMatchers[j++]) {
                    if (matcher(elem, context || document3, xml)) {
                      results.push(elem);
                      break;
                    }
                  }
                  if (outermost) {
                    dirruns = dirrunsUnique;
                  }
                }
                if (bySet) {
                  if (elem = !matcher && elem) {
                    matchedCount--;
                  }
                  if (seed) {
                    unmatched.push(elem);
                  }
                }
              }
              matchedCount += i3;
              if (bySet && i3 !== matchedCount) {
                j = 0;
                while (matcher = setMatchers[j++]) {
                  matcher(unmatched, setMatched, context, xml);
                }
                if (seed) {
                  if (matchedCount > 0) {
                    while (i3--) {
                      if (!(unmatched[i3] || setMatched[i3])) {
                        setMatched[i3] = pop.call(results);
                      }
                    }
                  }
                  setMatched = condense(setMatched);
                }
                push2.apply(results, setMatched);
                if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                  Sizzle2.uniqueSort(results);
                }
              }
              if (outermost) {
                dirruns = dirrunsUnique;
                outermostContext = contextBackup;
              }
              return unmatched;
            };
            return bySet ? markFunction(superMatcher) : superMatcher;
          }
          compile = Sizzle2.compile = function(selector, match) {
            var i3, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
            if (!cached) {
              if (!match) {
                match = tokenize(selector);
              }
              i3 = match.length;
              while (i3--) {
                cached = matcherFromTokens(match[i3]);
                if (cached[expando]) {
                  setMatchers.push(cached);
                } else {
                  elementMatchers.push(cached);
                }
              }
              cached = compilerCache(
                selector,
                matcherFromGroupMatchers(elementMatchers, setMatchers)
              );
              cached.selector = selector;
            }
            return cached;
          };
          select = Sizzle2.select = function(selector, context, results, seed) {
            var i3, tokens, token, type, find, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
            results = results || [];
            if (match.length === 1) {
              tokens = match[0] = match[0].slice(0);
              if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                if (!context) {
                  return results;
                } else if (compiled) {
                  context = context.parentNode;
                }
                selector = selector.slice(tokens.shift().value.length);
              }
              i3 = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
              while (i3--) {
                token = tokens[i3];
                if (Expr.relative[type = token.type]) {
                  break;
                }
                if (find = Expr.find[type]) {
                  if (seed = find(
                    token.matches[0].replace(runescape, funescape),
                    rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
                  )) {
                    tokens.splice(i3, 1);
                    selector = seed.length && toSelector(tokens);
                    if (!selector) {
                      push2.apply(results, seed);
                      return results;
                    }
                    break;
                  }
                }
              }
            }
            (compiled || compile(selector, match))(
              seed,
              context,
              !documentIsHTML,
              results,
              !context || rsibling.test(selector) && testContext(context.parentNode) || context
            );
            return results;
          };
          support2.sortStable = expando.split("").sort(sortOrder).join("") === expando;
          support2.detectDuplicates = !!hasDuplicate;
          setDocument();
          support2.sortDetached = assert(function(el) {
            return el.compareDocumentPosition(document3.createElement("fieldset")) & 1;
          });
          if (!assert(function(el) {
            el.innerHTML = "<a href='#'></a>";
            return el.firstChild.getAttribute("href") === "#";
          })) {
            addHandle("type|href|height|width", function(elem, name, isXML2) {
              if (!isXML2) {
                return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
              }
            });
          }
          if (!support2.attributes || !assert(function(el) {
            el.innerHTML = "<input/>";
            el.firstChild.setAttribute("value", "");
            return el.firstChild.getAttribute("value") === "";
          })) {
            addHandle("value", function(elem, _name, isXML2) {
              if (!isXML2 && elem.nodeName.toLowerCase() === "input") {
                return elem.defaultValue;
              }
            });
          }
          if (!assert(function(el) {
            return el.getAttribute("disabled") == null;
          })) {
            addHandle(booleans, function(elem, name, isXML2) {
              var val;
              if (!isXML2) {
                return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
              }
            });
          }
          return Sizzle2;
        }(window2)
      );
      jQuery2.find = Sizzle;
      jQuery2.expr = Sizzle.selectors;
      jQuery2.expr[":"] = jQuery2.expr.pseudos;
      jQuery2.uniqueSort = jQuery2.unique = Sizzle.uniqueSort;
      jQuery2.text = Sizzle.getText;
      jQuery2.isXMLDoc = Sizzle.isXML;
      jQuery2.contains = Sizzle.contains;
      jQuery2.escapeSelector = Sizzle.escape;
      var dir = function(elem, dir2, until) {
        var matched = [], truncate = until !== void 0;
        while ((elem = elem[dir2]) && elem.nodeType !== 9) {
          if (elem.nodeType === 1) {
            if (truncate && jQuery2(elem).is(until)) {
              break;
            }
            matched.push(elem);
          }
        }
        return matched;
      };
      var siblings = function(n, elem) {
        var matched = [];
        for (; n; n = n.nextSibling) {
          if (n.nodeType === 1 && n !== elem) {
            matched.push(n);
          }
        }
        return matched;
      };
      var rneedsContext = jQuery2.expr.match.needsContext;
      function nodeName(elem, name) {
        return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
      }
      var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function winnow(elements, qualifier, not) {
        if (isFunction(qualifier)) {
          return jQuery2.grep(elements, function(elem, i2) {
            return !!qualifier.call(elem, i2, elem) !== not;
          });
        }
        if (qualifier.nodeType) {
          return jQuery2.grep(elements, function(elem) {
            return elem === qualifier !== not;
          });
        }
        if (typeof qualifier !== "string") {
          return jQuery2.grep(elements, function(elem) {
            return indexOf.call(qualifier, elem) > -1 !== not;
          });
        }
        return jQuery2.filter(qualifier, elements, not);
      }
      jQuery2.filter = function(expr, elems, not) {
        var elem = elems[0];
        if (not) {
          expr = ":not(" + expr + ")";
        }
        if (elems.length === 1 && elem.nodeType === 1) {
          return jQuery2.find.matchesSelector(elem, expr) ? [elem] : [];
        }
        return jQuery2.find.matches(expr, jQuery2.grep(elems, function(elem2) {
          return elem2.nodeType === 1;
        }));
      };
      jQuery2.fn.extend({
        find: function(selector) {
          var i2, ret, len = this.length, self = this;
          if (typeof selector !== "string") {
            return this.pushStack(jQuery2(selector).filter(function() {
              for (i2 = 0; i2 < len; i2++) {
                if (jQuery2.contains(self[i2], this)) {
                  return true;
                }
              }
            }));
          }
          ret = this.pushStack([]);
          for (i2 = 0; i2 < len; i2++) {
            jQuery2.find(selector, self[i2], ret);
          }
          return len > 1 ? jQuery2.uniqueSort(ret) : ret;
        },
        filter: function(selector) {
          return this.pushStack(winnow(this, selector || [], false));
        },
        not: function(selector) {
          return this.pushStack(winnow(this, selector || [], true));
        },
        is: function(selector) {
          return !!winnow(
            this,
            // If this is a positional/relative selector, check membership in the returned set
            // so $("p:first").is("p:last") won't return true for a doc with two "p".
            typeof selector === "string" && rneedsContext.test(selector) ? jQuery2(selector) : selector || [],
            false
          ).length;
        }
      });
      var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init2 = jQuery2.fn.init = function(selector, context, root) {
        var match, elem;
        if (!selector) {
          return this;
        }
        root = root || rootjQuery;
        if (typeof selector === "string") {
          if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
            match = [null, selector, null];
          } else {
            match = rquickExpr.exec(selector);
          }
          if (match && (match[1] || !context)) {
            if (match[1]) {
              context = context instanceof jQuery2 ? context[0] : context;
              jQuery2.merge(this, jQuery2.parseHTML(
                match[1],
                context && context.nodeType ? context.ownerDocument || context : document2,
                true
              ));
              if (rsingleTag.test(match[1]) && jQuery2.isPlainObject(context)) {
                for (match in context) {
                  if (isFunction(this[match])) {
                    this[match](context[match]);
                  } else {
                    this.attr(match, context[match]);
                  }
                }
              }
              return this;
            } else {
              elem = document2.getElementById(match[2]);
              if (elem) {
                this[0] = elem;
                this.length = 1;
              }
              return this;
            }
          } else if (!context || context.jquery) {
            return (context || root).find(selector);
          } else {
            return this.constructor(context).find(selector);
          }
        } else if (selector.nodeType) {
          this[0] = selector;
          this.length = 1;
          return this;
        } else if (isFunction(selector)) {
          return root.ready !== void 0 ? root.ready(selector) : (
            // Execute immediately if ready is not present
            selector(jQuery2)
          );
        }
        return jQuery2.makeArray(selector, this);
      };
      init2.prototype = jQuery2.fn;
      rootjQuery = jQuery2(document2);
      var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
        children: true,
        contents: true,
        next: true,
        prev: true
      };
      jQuery2.fn.extend({
        has: function(target) {
          var targets = jQuery2(target, this), l = targets.length;
          return this.filter(function() {
            var i2 = 0;
            for (; i2 < l; i2++) {
              if (jQuery2.contains(this, targets[i2])) {
                return true;
              }
            }
          });
        },
        closest: function(selectors, context) {
          var cur, i2 = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery2(selectors);
          if (!rneedsContext.test(selectors)) {
            for (; i2 < l; i2++) {
              for (cur = this[i2]; cur && cur !== context; cur = cur.parentNode) {
                if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : (
                  // Don't pass non-elements to Sizzle
                  cur.nodeType === 1 && jQuery2.find.matchesSelector(cur, selectors)
                ))) {
                  matched.push(cur);
                  break;
                }
              }
            }
          }
          return this.pushStack(matched.length > 1 ? jQuery2.uniqueSort(matched) : matched);
        },
        // Determine the position of an element within the set
        index: function(elem) {
          if (!elem) {
            return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
          }
          if (typeof elem === "string") {
            return indexOf.call(jQuery2(elem), this[0]);
          }
          return indexOf.call(
            this,
            // If it receives a jQuery object, the first element is used
            elem.jquery ? elem[0] : elem
          );
        },
        add: function(selector, context) {
          return this.pushStack(
            jQuery2.uniqueSort(
              jQuery2.merge(this.get(), jQuery2(selector, context))
            )
          );
        },
        addBack: function(selector) {
          return this.add(
            selector == null ? this.prevObject : this.prevObject.filter(selector)
          );
        }
      });
      function sibling(cur, dir2) {
        while ((cur = cur[dir2]) && cur.nodeType !== 1) {
        }
        return cur;
      }
      jQuery2.each({
        parent: function(elem) {
          var parent = elem.parentNode;
          return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function(elem) {
          return dir(elem, "parentNode");
        },
        parentsUntil: function(elem, _i, until) {
          return dir(elem, "parentNode", until);
        },
        next: function(elem) {
          return sibling(elem, "nextSibling");
        },
        prev: function(elem) {
          return sibling(elem, "previousSibling");
        },
        nextAll: function(elem) {
          return dir(elem, "nextSibling");
        },
        prevAll: function(elem) {
          return dir(elem, "previousSibling");
        },
        nextUntil: function(elem, _i, until) {
          return dir(elem, "nextSibling", until);
        },
        prevUntil: function(elem, _i, until) {
          return dir(elem, "previousSibling", until);
        },
        siblings: function(elem) {
          return siblings((elem.parentNode || {}).firstChild, elem);
        },
        children: function(elem) {
          return siblings(elem.firstChild);
        },
        contents: function(elem) {
          if (elem.contentDocument != null && // Support: IE 11+
          // <object> elements with no `data` attribute has an object
          // `contentDocument` with a `null` prototype.
          getProto(elem.contentDocument)) {
            return elem.contentDocument;
          }
          if (nodeName(elem, "template")) {
            elem = elem.content || elem;
          }
          return jQuery2.merge([], elem.childNodes);
        }
      }, function(name, fn2) {
        jQuery2.fn[name] = function(until, selector) {
          var matched = jQuery2.map(this, fn2, until);
          if (name.slice(-5) !== "Until") {
            selector = until;
          }
          if (selector && typeof selector === "string") {
            matched = jQuery2.filter(selector, matched);
          }
          if (this.length > 1) {
            if (!guaranteedUnique[name]) {
              jQuery2.uniqueSort(matched);
            }
            if (rparentsprev.test(name)) {
              matched.reverse();
            }
          }
          return this.pushStack(matched);
        };
      });
      var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
      function createOptions(options) {
        var object = {};
        jQuery2.each(options.match(rnothtmlwhite) || [], function(_, flag) {
          object[flag] = true;
        });
        return object;
      }
      jQuery2.Callbacks = function(options) {
        options = typeof options === "string" ? createOptions(options) : jQuery2.extend({}, options);
        var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
          locked = locked || options.once;
          fired = firing = true;
          for (; queue.length; firingIndex = -1) {
            memory = queue.shift();
            while (++firingIndex < list.length) {
              if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                firingIndex = list.length;
                memory = false;
              }
            }
          }
          if (!options.memory) {
            memory = false;
          }
          firing = false;
          if (locked) {
            if (memory) {
              list = [];
            } else {
              list = "";
            }
          }
        }, self = {
          // Add a callback or a collection of callbacks to the list
          add: function() {
            if (list) {
              if (memory && !firing) {
                firingIndex = list.length - 1;
                queue.push(memory);
              }
              (function add(args) {
                jQuery2.each(args, function(_, arg) {
                  if (isFunction(arg)) {
                    if (!options.unique || !self.has(arg)) {
                      list.push(arg);
                    }
                  } else if (arg && arg.length && toType2(arg) !== "string") {
                    add(arg);
                  }
                });
              })(arguments);
              if (memory && !firing) {
                fire();
              }
            }
            return this;
          },
          // Remove a callback from the list
          remove: function() {
            jQuery2.each(arguments, function(_, arg) {
              var index;
              while ((index = jQuery2.inArray(arg, list, index)) > -1) {
                list.splice(index, 1);
                if (index <= firingIndex) {
                  firingIndex--;
                }
              }
            });
            return this;
          },
          // Check if a given callback is in the list.
          // If no argument is given, return whether or not list has callbacks attached.
          has: function(fn2) {
            return fn2 ? jQuery2.inArray(fn2, list) > -1 : list.length > 0;
          },
          // Remove all callbacks from the list
          empty: function() {
            if (list) {
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
            if (!memory && !firing) {
              list = memory = "";
            }
            return this;
          },
          locked: function() {
            return !!locked;
          },
          // Call all callbacks with the given context and arguments
          fireWith: function(context, args) {
            if (!locked) {
              args = args || [];
              args = [context, args.slice ? args.slice() : args];
              queue.push(args);
              if (!firing) {
                fire();
              }
            }
            return this;
          },
          // Call all the callbacks with the given arguments
          fire: function() {
            self.fireWith(this, arguments);
            return this;
          },
          // To know if the callbacks have already been called at least once
          fired: function() {
            return !!fired;
          }
        };
        return self;
      };
      function Identity(v) {
        return v;
      }
      function Thrower(ex) {
        throw ex;
      }
      function adoptValue(value, resolve, reject, noValue) {
        var method;
        try {
          if (value && isFunction(method = value.promise)) {
            method.call(value).done(resolve).fail(reject);
          } else if (value && isFunction(method = value.then)) {
            method.call(value, resolve, reject);
          } else {
            resolve.apply(void 0, [value].slice(noValue));
          }
        } catch (value2) {
          reject.apply(void 0, [value2]);
        }
      }
      jQuery2.extend({
        Deferred: function(func) {
          var tuples = [
            // action, add listener, callbacks,
            // ... .then handlers, argument index, [final state]
            [
              "notify",
              "progress",
              jQuery2.Callbacks("memory"),
              jQuery2.Callbacks("memory"),
              2
            ],
            [
              "resolve",
              "done",
              jQuery2.Callbacks("once memory"),
              jQuery2.Callbacks("once memory"),
              0,
              "resolved"
            ],
            [
              "reject",
              "fail",
              jQuery2.Callbacks("once memory"),
              jQuery2.Callbacks("once memory"),
              1,
              "rejected"
            ]
          ], state = "pending", promise = {
            state: function() {
              return state;
            },
            always: function() {
              deferred.done(arguments).fail(arguments);
              return this;
            },
            "catch": function(fn2) {
              return promise.then(null, fn2);
            },
            // Keep pipe for back-compat
            pipe: function() {
              var fns = arguments;
              return jQuery2.Deferred(function(newDefer) {
                jQuery2.each(tuples, function(_i, tuple) {
                  var fn2 = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                  deferred[tuple[1]](function() {
                    var returned = fn2 && fn2.apply(this, arguments);
                    if (returned && isFunction(returned.promise)) {
                      returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                    } else {
                      newDefer[tuple[0] + "With"](
                        this,
                        fn2 ? [returned] : arguments
                      );
                    }
                  });
                });
                fns = null;
              }).promise();
            },
            then: function(onFulfilled, onRejected, onProgress) {
              var maxDepth = 0;
              function resolve(depth, deferred2, handler, special) {
                return function() {
                  var that = this, args = arguments, mightThrow = function() {
                    var returned, then;
                    if (depth < maxDepth) {
                      return;
                    }
                    returned = handler.apply(that, args);
                    if (returned === deferred2.promise()) {
                      throw new TypeError("Thenable self-resolution");
                    }
                    then = returned && // Support: Promises/A+ section 2.3.4
                    // https://promisesaplus.com/#point-64
                    // Only check objects and functions for thenability
                    (typeof returned === "object" || typeof returned === "function") && returned.then;
                    if (isFunction(then)) {
                      if (special) {
                        then.call(
                          returned,
                          resolve(maxDepth, deferred2, Identity, special),
                          resolve(maxDepth, deferred2, Thrower, special)
                        );
                      } else {
                        maxDepth++;
                        then.call(
                          returned,
                          resolve(maxDepth, deferred2, Identity, special),
                          resolve(maxDepth, deferred2, Thrower, special),
                          resolve(
                            maxDepth,
                            deferred2,
                            Identity,
                            deferred2.notifyWith
                          )
                        );
                      }
                    } else {
                      if (handler !== Identity) {
                        that = void 0;
                        args = [returned];
                      }
                      (special || deferred2.resolveWith)(that, args);
                    }
                  }, process2 = special ? mightThrow : function() {
                    try {
                      mightThrow();
                    } catch (e) {
                      if (jQuery2.Deferred.exceptionHook) {
                        jQuery2.Deferred.exceptionHook(
                          e,
                          process2.stackTrace
                        );
                      }
                      if (depth + 1 >= maxDepth) {
                        if (handler !== Thrower) {
                          that = void 0;
                          args = [e];
                        }
                        deferred2.rejectWith(that, args);
                      }
                    }
                  };
                  if (depth) {
                    process2();
                  } else {
                    if (jQuery2.Deferred.getStackHook) {
                      process2.stackTrace = jQuery2.Deferred.getStackHook();
                    }
                    window2.setTimeout(process2);
                  }
                };
              }
              return jQuery2.Deferred(function(newDefer) {
                tuples[0][3].add(
                  resolve(
                    0,
                    newDefer,
                    isFunction(onProgress) ? onProgress : Identity,
                    newDefer.notifyWith
                  )
                );
                tuples[1][3].add(
                  resolve(
                    0,
                    newDefer,
                    isFunction(onFulfilled) ? onFulfilled : Identity
                  )
                );
                tuples[2][3].add(
                  resolve(
                    0,
                    newDefer,
                    isFunction(onRejected) ? onRejected : Thrower
                  )
                );
              }).promise();
            },
            // Get a promise for this deferred
            // If obj is provided, the promise aspect is added to the object
            promise: function(obj) {
              return obj != null ? jQuery2.extend(obj, promise) : promise;
            }
          }, deferred = {};
          jQuery2.each(tuples, function(i2, tuple) {
            var list = tuple[2], stateString = tuple[5];
            promise[tuple[1]] = list.add;
            if (stateString) {
              list.add(
                function() {
                  state = stateString;
                },
                // rejected_callbacks.disable
                // fulfilled_callbacks.disable
                tuples[3 - i2][2].disable,
                // rejected_handlers.disable
                // fulfilled_handlers.disable
                tuples[3 - i2][3].disable,
                // progress_callbacks.lock
                tuples[0][2].lock,
                // progress_handlers.lock
                tuples[0][3].lock
              );
            }
            list.add(tuple[3].fire);
            deferred[tuple[0]] = function() {
              deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
              return this;
            };
            deferred[tuple[0] + "With"] = list.fireWith;
          });
          promise.promise(deferred);
          if (func) {
            func.call(deferred, deferred);
          }
          return deferred;
        },
        // Deferred helper
        when: function(singleValue) {
          var remaining = arguments.length, i2 = remaining, resolveContexts = Array(i2), resolveValues = slice.call(arguments), primary = jQuery2.Deferred(), updateFunc = function(i3) {
            return function(value) {
              resolveContexts[i3] = this;
              resolveValues[i3] = arguments.length > 1 ? slice.call(arguments) : value;
              if (!--remaining) {
                primary.resolveWith(resolveContexts, resolveValues);
              }
            };
          };
          if (remaining <= 1) {
            adoptValue(
              singleValue,
              primary.done(updateFunc(i2)).resolve,
              primary.reject,
              !remaining
            );
            if (primary.state() === "pending" || isFunction(resolveValues[i2] && resolveValues[i2].then)) {
              return primary.then();
            }
          }
          while (i2--) {
            adoptValue(resolveValues[i2], updateFunc(i2), primary.reject);
          }
          return primary.promise();
        }
      });
      var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      jQuery2.Deferred.exceptionHook = function(error, stack) {
        if (window2.console && window2.console.warn && error && rerrorNames.test(error.name)) {
          window2.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
        }
      };
      jQuery2.readyException = function(error) {
        window2.setTimeout(function() {
          throw error;
        });
      };
      var readyList = jQuery2.Deferred();
      jQuery2.fn.ready = function(fn2) {
        readyList.then(fn2).catch(function(error) {
          jQuery2.readyException(error);
        });
        return this;
      };
      jQuery2.extend({
        // Is the DOM ready to be used? Set to true once it occurs.
        isReady: false,
        // A counter to track how many items to wait for before
        // the ready event fires. See trac-6781
        readyWait: 1,
        // Handle when the DOM is ready
        ready: function(wait) {
          if (wait === true ? --jQuery2.readyWait : jQuery2.isReady) {
            return;
          }
          jQuery2.isReady = true;
          if (wait !== true && --jQuery2.readyWait > 0) {
            return;
          }
          readyList.resolveWith(document2, [jQuery2]);
        }
      });
      jQuery2.ready.then = readyList.then;
      function completed() {
        document2.removeEventListener("DOMContentLoaded", completed);
        window2.removeEventListener("load", completed);
        jQuery2.ready();
      }
      if (document2.readyState === "complete" || document2.readyState !== "loading" && !document2.documentElement.doScroll) {
        window2.setTimeout(jQuery2.ready);
      } else {
        document2.addEventListener("DOMContentLoaded", completed);
        window2.addEventListener("load", completed);
      }
      var access = function(elems, fn2, key, value, chainable, emptyGet, raw) {
        var i2 = 0, len = elems.length, bulk = key == null;
        if (toType2(key) === "object") {
          chainable = true;
          for (i2 in key) {
            access(elems, fn2, i2, key[i2], true, emptyGet, raw);
          }
        } else if (value !== void 0) {
          chainable = true;
          if (!isFunction(value)) {
            raw = true;
          }
          if (bulk) {
            if (raw) {
              fn2.call(elems, value);
              fn2 = null;
            } else {
              bulk = fn2;
              fn2 = function(elem, _key, value2) {
                return bulk.call(jQuery2(elem), value2);
              };
            }
          }
          if (fn2) {
            for (; i2 < len; i2++) {
              fn2(
                elems[i2],
                key,
                raw ? value : value.call(elems[i2], i2, fn2(elems[i2], key))
              );
            }
          }
        }
        if (chainable) {
          return elems;
        }
        if (bulk) {
          return fn2.call(elems);
        }
        return len ? fn2(elems[0], key) : emptyGet;
      };
      var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
      function fcamelCase(_all, letter) {
        return letter.toUpperCase();
      }
      function camelCase(string) {
        return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
      }
      var acceptData = function(owner) {
        return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
      };
      function Data2() {
        this.expando = jQuery2.expando + Data2.uid++;
      }
      Data2.uid = 1;
      Data2.prototype = {
        cache: function(owner) {
          var value = owner[this.expando];
          if (!value) {
            value = {};
            if (acceptData(owner)) {
              if (owner.nodeType) {
                owner[this.expando] = value;
              } else {
                Object.defineProperty(owner, this.expando, {
                  value,
                  configurable: true
                });
              }
            }
          }
          return value;
        },
        set: function(owner, data, value) {
          var prop, cache = this.cache(owner);
          if (typeof data === "string") {
            cache[camelCase(data)] = value;
          } else {
            for (prop in data) {
              cache[camelCase(prop)] = data[prop];
            }
          }
          return cache;
        },
        get: function(owner, key) {
          return key === void 0 ? this.cache(owner) : (
            // Always use camelCase key (gh-2257)
            owner[this.expando] && owner[this.expando][camelCase(key)]
          );
        },
        access: function(owner, key, value) {
          if (key === void 0 || key && typeof key === "string" && value === void 0) {
            return this.get(owner, key);
          }
          this.set(owner, key, value);
          return value !== void 0 ? value : key;
        },
        remove: function(owner, key) {
          var i2, cache = owner[this.expando];
          if (cache === void 0) {
            return;
          }
          if (key !== void 0) {
            if (Array.isArray(key)) {
              key = key.map(camelCase);
            } else {
              key = camelCase(key);
              key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
            }
            i2 = key.length;
            while (i2--) {
              delete cache[key[i2]];
            }
          }
          if (key === void 0 || jQuery2.isEmptyObject(cache)) {
            if (owner.nodeType) {
              owner[this.expando] = void 0;
            } else {
              delete owner[this.expando];
            }
          }
        },
        hasData: function(owner) {
          var cache = owner[this.expando];
          return cache !== void 0 && !jQuery2.isEmptyObject(cache);
        }
      };
      var dataPriv = new Data2();
      var dataUser = new Data2();
      var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
      function getData(data) {
        if (data === "true") {
          return true;
        }
        if (data === "false") {
          return false;
        }
        if (data === "null") {
          return null;
        }
        if (data === +data + "") {
          return +data;
        }
        if (rbrace.test(data)) {
          return JSON.parse(data);
        }
        return data;
      }
      function dataAttr(elem, key, data) {
        var name;
        if (data === void 0 && elem.nodeType === 1) {
          name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
          data = elem.getAttribute(name);
          if (typeof data === "string") {
            try {
              data = getData(data);
            } catch (e) {
            }
            dataUser.set(elem, key, data);
          } else {
            data = void 0;
          }
        }
        return data;
      }
      jQuery2.extend({
        hasData: function(elem) {
          return dataUser.hasData(elem) || dataPriv.hasData(elem);
        },
        data: function(elem, name, data) {
          return dataUser.access(elem, name, data);
        },
        removeData: function(elem, name) {
          dataUser.remove(elem, name);
        },
        // TODO: Now that all calls to _data and _removeData have been replaced
        // with direct calls to dataPriv methods, these can be deprecated.
        _data: function(elem, name, data) {
          return dataPriv.access(elem, name, data);
        },
        _removeData: function(elem, name) {
          dataPriv.remove(elem, name);
        }
      });
      jQuery2.fn.extend({
        data: function(key, value) {
          var i2, name, data, elem = this[0], attrs = elem && elem.attributes;
          if (key === void 0) {
            if (this.length) {
              data = dataUser.get(elem);
              if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                i2 = attrs.length;
                while (i2--) {
                  if (attrs[i2]) {
                    name = attrs[i2].name;
                    if (name.indexOf("data-") === 0) {
                      name = camelCase(name.slice(5));
                      dataAttr(elem, name, data[name]);
                    }
                  }
                }
                dataPriv.set(elem, "hasDataAttrs", true);
              }
            }
            return data;
          }
          if (typeof key === "object") {
            return this.each(function() {
              dataUser.set(this, key);
            });
          }
          return access(this, function(value2) {
            var data2;
            if (elem && value2 === void 0) {
              data2 = dataUser.get(elem, key);
              if (data2 !== void 0) {
                return data2;
              }
              data2 = dataAttr(elem, key);
              if (data2 !== void 0) {
                return data2;
              }
              return;
            }
            this.each(function() {
              dataUser.set(this, key, value2);
            });
          }, null, value, arguments.length > 1, null, true);
        },
        removeData: function(key) {
          return this.each(function() {
            dataUser.remove(this, key);
          });
        }
      });
      jQuery2.extend({
        queue: function(elem, type, data) {
          var queue;
          if (elem) {
            type = (type || "fx") + "queue";
            queue = dataPriv.get(elem, type);
            if (data) {
              if (!queue || Array.isArray(data)) {
                queue = dataPriv.access(elem, type, jQuery2.makeArray(data));
              } else {
                queue.push(data);
              }
            }
            return queue || [];
          }
        },
        dequeue: function(elem, type) {
          type = type || "fx";
          var queue = jQuery2.queue(elem, type), startLength = queue.length, fn2 = queue.shift(), hooks = jQuery2._queueHooks(elem, type), next = function() {
            jQuery2.dequeue(elem, type);
          };
          if (fn2 === "inprogress") {
            fn2 = queue.shift();
            startLength--;
          }
          if (fn2) {
            if (type === "fx") {
              queue.unshift("inprogress");
            }
            delete hooks.stop;
            fn2.call(elem, next, hooks);
          }
          if (!startLength && hooks) {
            hooks.empty.fire();
          }
        },
        // Not public - generate a queueHooks object, or return the current one
        _queueHooks: function(elem, type) {
          var key = type + "queueHooks";
          return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
            empty: jQuery2.Callbacks("once memory").add(function() {
              dataPriv.remove(elem, [type + "queue", key]);
            })
          });
        }
      });
      jQuery2.fn.extend({
        queue: function(type, data) {
          var setter = 2;
          if (typeof type !== "string") {
            data = type;
            type = "fx";
            setter--;
          }
          if (arguments.length < setter) {
            return jQuery2.queue(this[0], type);
          }
          return data === void 0 ? this : this.each(function() {
            var queue = jQuery2.queue(this, type, data);
            jQuery2._queueHooks(this, type);
            if (type === "fx" && queue[0] !== "inprogress") {
              jQuery2.dequeue(this, type);
            }
          });
        },
        dequeue: function(type) {
          return this.each(function() {
            jQuery2.dequeue(this, type);
          });
        },
        clearQueue: function(type) {
          return this.queue(type || "fx", []);
        },
        // Get a promise resolved when queues of a certain type
        // are emptied (fx is the type by default)
        promise: function(type, obj) {
          var tmp, count = 1, defer = jQuery2.Deferred(), elements = this, i2 = this.length, resolve = function() {
            if (!--count) {
              defer.resolveWith(elements, [elements]);
            }
          };
          if (typeof type !== "string") {
            obj = type;
            type = void 0;
          }
          type = type || "fx";
          while (i2--) {
            tmp = dataPriv.get(elements[i2], type + "queueHooks");
            if (tmp && tmp.empty) {
              count++;
              tmp.empty.add(resolve);
            }
          }
          resolve();
          return defer.promise(obj);
        }
      });
      var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
      var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
      var cssExpand = ["Top", "Right", "Bottom", "Left"];
      var documentElement = document2.documentElement;
      var isAttached = function(elem) {
        return jQuery2.contains(elem.ownerDocument, elem);
      }, composed = { composed: true };
      if (documentElement.getRootNode) {
        isAttached = function(elem) {
          return jQuery2.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
        };
      }
      var isHiddenWithinTree = function(elem, el) {
        elem = el || elem;
        return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
        // Support: Firefox <=43 - 45
        // Disconnected elements can have computed display: none, so first confirm that elem is
        // in the document.
        isAttached(elem) && jQuery2.css(elem, "display") === "none";
      };
      function adjustCSS(elem, prop, valueParts, tween) {
        var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
          return tween.cur();
        } : function() {
          return jQuery2.css(elem, prop, "");
        }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery2.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery2.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery2.css(elem, prop));
        if (initialInUnit && initialInUnit[3] !== unit) {
          initial = initial / 2;
          unit = unit || initialInUnit[3];
          initialInUnit = +initial || 1;
          while (maxIterations--) {
            jQuery2.style(elem, prop, initialInUnit + unit);
            if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
              maxIterations = 0;
            }
            initialInUnit = initialInUnit / scale;
          }
          initialInUnit = initialInUnit * 2;
          jQuery2.style(elem, prop, initialInUnit + unit);
          valueParts = valueParts || [];
        }
        if (valueParts) {
          initialInUnit = +initialInUnit || +initial || 0;
          adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
          if (tween) {
            tween.unit = unit;
            tween.start = initialInUnit;
            tween.end = adjusted;
          }
        }
        return adjusted;
      }
      var defaultDisplayMap = {};
      function getDefaultDisplay(elem) {
        var temp, doc = elem.ownerDocument, nodeName2 = elem.nodeName, display = defaultDisplayMap[nodeName2];
        if (display) {
          return display;
        }
        temp = doc.body.appendChild(doc.createElement(nodeName2));
        display = jQuery2.css(temp, "display");
        temp.parentNode.removeChild(temp);
        if (display === "none") {
          display = "block";
        }
        defaultDisplayMap[nodeName2] = display;
        return display;
      }
      function showHide(elements, show) {
        var display, elem, values = [], index = 0, length = elements.length;
        for (; index < length; index++) {
          elem = elements[index];
          if (!elem.style) {
            continue;
          }
          display = elem.style.display;
          if (show) {
            if (display === "none") {
              values[index] = dataPriv.get(elem, "display") || null;
              if (!values[index]) {
                elem.style.display = "";
              }
            }
            if (elem.style.display === "" && isHiddenWithinTree(elem)) {
              values[index] = getDefaultDisplay(elem);
            }
          } else {
            if (display !== "none") {
              values[index] = "none";
              dataPriv.set(elem, "display", display);
            }
          }
        }
        for (index = 0; index < length; index++) {
          if (values[index] != null) {
            elements[index].style.display = values[index];
          }
        }
        return elements;
      }
      jQuery2.fn.extend({
        show: function() {
          return showHide(this, true);
        },
        hide: function() {
          return showHide(this);
        },
        toggle: function(state) {
          if (typeof state === "boolean") {
            return state ? this.show() : this.hide();
          }
          return this.each(function() {
            if (isHiddenWithinTree(this)) {
              jQuery2(this).show();
            } else {
              jQuery2(this).hide();
            }
          });
        }
      });
      var rcheckableType = /^(?:checkbox|radio)$/i;
      var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
      var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
      (function() {
        var fragment = document2.createDocumentFragment(), div = fragment.appendChild(document2.createElement("div")), input = document2.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("checked", "checked");
        input.setAttribute("name", "t");
        div.appendChild(input);
        support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
        div.innerHTML = "<textarea>x</textarea>";
        support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
        div.innerHTML = "<option></option>";
        support.option = !!div.lastChild;
      })();
      var wrapMap = {
        // XHTML parsers do not magically insert elements in the
        // same way that tag soup parsers do. So we cannot shorten
        // this by omitting <tbody> or other required elements.
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
      wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
      wrapMap.th = wrapMap.td;
      if (!support.option) {
        wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
      }
      function getAll(context, tag) {
        var ret;
        if (typeof context.getElementsByTagName !== "undefined") {
          ret = context.getElementsByTagName(tag || "*");
        } else if (typeof context.querySelectorAll !== "undefined") {
          ret = context.querySelectorAll(tag || "*");
        } else {
          ret = [];
        }
        if (tag === void 0 || tag && nodeName(context, tag)) {
          return jQuery2.merge([context], ret);
        }
        return ret;
      }
      function setGlobalEval(elems, refElements) {
        var i2 = 0, l = elems.length;
        for (; i2 < l; i2++) {
          dataPriv.set(
            elems[i2],
            "globalEval",
            !refElements || dataPriv.get(refElements[i2], "globalEval")
          );
        }
      }
      var rhtml = /<|&#?\w+;/;
      function buildFragment(elems, context, scripts, selection, ignored) {
        var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i2 = 0, l = elems.length;
        for (; i2 < l; i2++) {
          elem = elems[i2];
          if (elem || elem === 0) {
            if (toType2(elem) === "object") {
              jQuery2.merge(nodes, elem.nodeType ? [elem] : elem);
            } else if (!rhtml.test(elem)) {
              nodes.push(context.createTextNode(elem));
            } else {
              tmp = tmp || fragment.appendChild(context.createElement("div"));
              tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
              wrap = wrapMap[tag] || wrapMap._default;
              tmp.innerHTML = wrap[1] + jQuery2.htmlPrefilter(elem) + wrap[2];
              j = wrap[0];
              while (j--) {
                tmp = tmp.lastChild;
              }
              jQuery2.merge(nodes, tmp.childNodes);
              tmp = fragment.firstChild;
              tmp.textContent = "";
            }
          }
        }
        fragment.textContent = "";
        i2 = 0;
        while (elem = nodes[i2++]) {
          if (selection && jQuery2.inArray(elem, selection) > -1) {
            if (ignored) {
              ignored.push(elem);
            }
            continue;
          }
          attached = isAttached(elem);
          tmp = getAll(fragment.appendChild(elem), "script");
          if (attached) {
            setGlobalEval(tmp);
          }
          if (scripts) {
            j = 0;
            while (elem = tmp[j++]) {
              if (rscriptType.test(elem.type || "")) {
                scripts.push(elem);
              }
            }
          }
        }
        return fragment;
      }
      var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
      function returnTrue() {
        return true;
      }
      function returnFalse() {
        return false;
      }
      function expectSync(elem, type) {
        return elem === safeActiveElement() === (type === "focus");
      }
      function safeActiveElement() {
        try {
          return document2.activeElement;
        } catch (err) {
        }
      }
      function on(elem, types, selector, data, fn2, one) {
        var origFn, type;
        if (typeof types === "object") {
          if (typeof selector !== "string") {
            data = data || selector;
            selector = void 0;
          }
          for (type in types) {
            on(elem, type, selector, data, types[type], one);
          }
          return elem;
        }
        if (data == null && fn2 == null) {
          fn2 = selector;
          data = selector = void 0;
        } else if (fn2 == null) {
          if (typeof selector === "string") {
            fn2 = data;
            data = void 0;
          } else {
            fn2 = data;
            data = selector;
            selector = void 0;
          }
        }
        if (fn2 === false) {
          fn2 = returnFalse;
        } else if (!fn2) {
          return elem;
        }
        if (one === 1) {
          origFn = fn2;
          fn2 = function(event) {
            jQuery2().off(event);
            return origFn.apply(this, arguments);
          };
          fn2.guid = origFn.guid || (origFn.guid = jQuery2.guid++);
        }
        return elem.each(function() {
          jQuery2.event.add(this, types, fn2, data, selector);
        });
      }
      jQuery2.event = {
        global: {},
        add: function(elem, types, handler, data, selector) {
          var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
          if (!acceptData(elem)) {
            return;
          }
          if (handler.handler) {
            handleObjIn = handler;
            handler = handleObjIn.handler;
            selector = handleObjIn.selector;
          }
          if (selector) {
            jQuery2.find.matchesSelector(documentElement, selector);
          }
          if (!handler.guid) {
            handler.guid = jQuery2.guid++;
          }
          if (!(events = elemData.events)) {
            events = elemData.events = /* @__PURE__ */ Object.create(null);
          }
          if (!(eventHandle = elemData.handle)) {
            eventHandle = elemData.handle = function(e) {
              return typeof jQuery2 !== "undefined" && jQuery2.event.triggered !== e.type ? jQuery2.event.dispatch.apply(elem, arguments) : void 0;
            };
          }
          types = (types || "").match(rnothtmlwhite) || [""];
          t = types.length;
          while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort();
            if (!type) {
              continue;
            }
            special = jQuery2.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            special = jQuery2.event.special[type] || {};
            handleObj = jQuery2.extend({
              type,
              origType,
              data,
              handler,
              guid: handler.guid,
              selector,
              needsContext: selector && jQuery2.expr.match.needsContext.test(selector),
              namespace: namespaces.join(".")
            }, handleObjIn);
            if (!(handlers = events[type])) {
              handlers = events[type] = [];
              handlers.delegateCount = 0;
              if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                if (elem.addEventListener) {
                  elem.addEventListener(type, eventHandle);
                }
              }
            }
            if (special.add) {
              special.add.call(elem, handleObj);
              if (!handleObj.handler.guid) {
                handleObj.handler.guid = handler.guid;
              }
            }
            if (selector) {
              handlers.splice(handlers.delegateCount++, 0, handleObj);
            } else {
              handlers.push(handleObj);
            }
            jQuery2.event.global[type] = true;
          }
        },
        // Detach an event or set of events from an element
        remove: function(elem, types, handler, selector, mappedTypes) {
          var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
          if (!elemData || !(events = elemData.events)) {
            return;
          }
          types = (types || "").match(rnothtmlwhite) || [""];
          t = types.length;
          while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort();
            if (!type) {
              for (type in events) {
                jQuery2.event.remove(elem, type + types[t], handler, selector, true);
              }
              continue;
            }
            special = jQuery2.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            handlers = events[type] || [];
            tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
            origCount = j = handlers.length;
            while (j--) {
              handleObj = handlers[j];
              if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                handlers.splice(j, 1);
                if (handleObj.selector) {
                  handlers.delegateCount--;
                }
                if (special.remove) {
                  special.remove.call(elem, handleObj);
                }
              }
            }
            if (origCount && !handlers.length) {
              if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                jQuery2.removeEvent(elem, type, elemData.handle);
              }
              delete events[type];
            }
          }
          if (jQuery2.isEmptyObject(events)) {
            dataPriv.remove(elem, "handle events");
          }
        },
        dispatch: function(nativeEvent) {
          var i2, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery2.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || /* @__PURE__ */ Object.create(null))[event.type] || [], special = jQuery2.event.special[event.type] || {};
          args[0] = event;
          for (i2 = 1; i2 < arguments.length; i2++) {
            args[i2] = arguments[i2];
          }
          event.delegateTarget = this;
          if (special.preDispatch && special.preDispatch.call(this, event) === false) {
            return;
          }
          handlerQueue = jQuery2.event.handlers.call(this, event, handlers);
          i2 = 0;
          while ((matched = handlerQueue[i2++]) && !event.isPropagationStopped()) {
            event.currentTarget = matched.elem;
            j = 0;
            while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
              if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                event.handleObj = handleObj;
                event.data = handleObj.data;
                ret = ((jQuery2.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                if (ret !== void 0) {
                  if ((event.result = ret) === false) {
                    event.preventDefault();
                    event.stopPropagation();
                  }
                }
              }
            }
          }
          if (special.postDispatch) {
            special.postDispatch.call(this, event);
          }
          return event.result;
        },
        handlers: function(event, handlers) {
          var i2, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
          if (delegateCount && // Support: IE <=9
          // Black-hole SVG <use> instance trees (trac-13180)
          cur.nodeType && // Support: Firefox <=42
          // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
          // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
          // Support: IE 11 only
          // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
          !(event.type === "click" && event.button >= 1)) {
            for (; cur !== this; cur = cur.parentNode || this) {
              if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                matchedHandlers = [];
                matchedSelectors = {};
                for (i2 = 0; i2 < delegateCount; i2++) {
                  handleObj = handlers[i2];
                  sel = handleObj.selector + " ";
                  if (matchedSelectors[sel] === void 0) {
                    matchedSelectors[sel] = handleObj.needsContext ? jQuery2(sel, this).index(cur) > -1 : jQuery2.find(sel, this, null, [cur]).length;
                  }
                  if (matchedSelectors[sel]) {
                    matchedHandlers.push(handleObj);
                  }
                }
                if (matchedHandlers.length) {
                  handlerQueue.push({ elem: cur, handlers: matchedHandlers });
                }
              }
            }
          }
          cur = this;
          if (delegateCount < handlers.length) {
            handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
          }
          return handlerQueue;
        },
        addProp: function(name, hook) {
          Object.defineProperty(jQuery2.Event.prototype, name, {
            enumerable: true,
            configurable: true,
            get: isFunction(hook) ? function() {
              if (this.originalEvent) {
                return hook(this.originalEvent);
              }
            } : function() {
              if (this.originalEvent) {
                return this.originalEvent[name];
              }
            },
            set: function(value) {
              Object.defineProperty(this, name, {
                enumerable: true,
                configurable: true,
                writable: true,
                value
              });
            }
          });
        },
        fix: function(originalEvent) {
          return originalEvent[jQuery2.expando] ? originalEvent : new jQuery2.Event(originalEvent);
        },
        special: {
          load: {
            // Prevent triggered image.load events from bubbling to window.load
            noBubble: true
          },
          click: {
            // Utilize native event to ensure correct state for checkable inputs
            setup: function(data) {
              var el = this || data;
              if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                leverageNative(el, "click", returnTrue);
              }
              return false;
            },
            trigger: function(data) {
              var el = this || data;
              if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                leverageNative(el, "click");
              }
              return true;
            },
            // For cross-browser consistency, suppress native .click() on links
            // Also prevent it if we're currently inside a leveraged native-event stack
            _default: function(event) {
              var target = event.target;
              return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
            }
          },
          beforeunload: {
            postDispatch: function(event) {
              if (event.result !== void 0 && event.originalEvent) {
                event.originalEvent.returnValue = event.result;
              }
            }
          }
        }
      };
      function leverageNative(el, type, expectSync2) {
        if (!expectSync2) {
          if (dataPriv.get(el, type) === void 0) {
            jQuery2.event.add(el, type, returnTrue);
          }
          return;
        }
        dataPriv.set(el, type, false);
        jQuery2.event.add(el, type, {
          namespace: false,
          handler: function(event) {
            var notAsync, result, saved = dataPriv.get(this, type);
            if (event.isTrigger & 1 && this[type]) {
              if (!saved.length) {
                saved = slice.call(arguments);
                dataPriv.set(this, type, saved);
                notAsync = expectSync2(this, type);
                this[type]();
                result = dataPriv.get(this, type);
                if (saved !== result || notAsync) {
                  dataPriv.set(this, type, false);
                } else {
                  result = {};
                }
                if (saved !== result) {
                  event.stopImmediatePropagation();
                  event.preventDefault();
                  return result && result.value;
                }
              } else if ((jQuery2.event.special[type] || {}).delegateType) {
                event.stopPropagation();
              }
            } else if (saved.length) {
              dataPriv.set(this, type, {
                value: jQuery2.event.trigger(
                  // Support: IE <=9 - 11+
                  // Extend with the prototype to reset the above stopImmediatePropagation()
                  jQuery2.extend(saved[0], jQuery2.Event.prototype),
                  saved.slice(1),
                  this
                )
              });
              event.stopImmediatePropagation();
            }
          }
        });
      }
      jQuery2.removeEvent = function(elem, type, handle) {
        if (elem.removeEventListener) {
          elem.removeEventListener(type, handle);
        }
      };
      jQuery2.Event = function(src, props) {
        if (!(this instanceof jQuery2.Event)) {
          return new jQuery2.Event(src, props);
        }
        if (src && src.type) {
          this.originalEvent = src;
          this.type = src.type;
          this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && // Support: Android <=2.3 only
          src.returnValue === false ? returnTrue : returnFalse;
          this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
          this.currentTarget = src.currentTarget;
          this.relatedTarget = src.relatedTarget;
        } else {
          this.type = src;
        }
        if (props) {
          jQuery2.extend(this, props);
        }
        this.timeStamp = src && src.timeStamp || Date.now();
        this[jQuery2.expando] = true;
      };
      jQuery2.Event.prototype = {
        constructor: jQuery2.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        isSimulated: false,
        preventDefault: function() {
          var e = this.originalEvent;
          this.isDefaultPrevented = returnTrue;
          if (e && !this.isSimulated) {
            e.preventDefault();
          }
        },
        stopPropagation: function() {
          var e = this.originalEvent;
          this.isPropagationStopped = returnTrue;
          if (e && !this.isSimulated) {
            e.stopPropagation();
          }
        },
        stopImmediatePropagation: function() {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = returnTrue;
          if (e && !this.isSimulated) {
            e.stopImmediatePropagation();
          }
          this.stopPropagation();
        }
      };
      jQuery2.each({
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
        code: true,
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
        which: true
      }, jQuery2.event.addProp);
      jQuery2.each({ focus: "focusin", blur: "focusout" }, function(type, delegateType) {
        jQuery2.event.special[type] = {
          // Utilize native event if possible so blur/focus sequence is correct
          setup: function() {
            leverageNative(this, type, expectSync);
            return false;
          },
          trigger: function() {
            leverageNative(this, type);
            return true;
          },
          // Suppress native focus or blur if we're currently inside
          // a leveraged native-event stack
          _default: function(event) {
            return dataPriv.get(event.target, type);
          },
          delegateType
        };
      });
      jQuery2.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, function(orig, fix) {
        jQuery2.event.special[orig] = {
          delegateType: fix,
          bindType: fix,
          handle: function(event) {
            var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
            if (!related || related !== target && !jQuery2.contains(target, related)) {
              event.type = handleObj.origType;
              ret = handleObj.handler.apply(this, arguments);
              event.type = fix;
            }
            return ret;
          }
        };
      });
      jQuery2.fn.extend({
        on: function(types, selector, data, fn2) {
          return on(this, types, selector, data, fn2);
        },
        one: function(types, selector, data, fn2) {
          return on(this, types, selector, data, fn2, 1);
        },
        off: function(types, selector, fn2) {
          var handleObj, type;
          if (types && types.preventDefault && types.handleObj) {
            handleObj = types.handleObj;
            jQuery2(types.delegateTarget).off(
              handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
              handleObj.selector,
              handleObj.handler
            );
            return this;
          }
          if (typeof types === "object") {
            for (type in types) {
              this.off(type, selector, types[type]);
            }
            return this;
          }
          if (selector === false || typeof selector === "function") {
            fn2 = selector;
            selector = void 0;
          }
          if (fn2 === false) {
            fn2 = returnFalse;
          }
          return this.each(function() {
            jQuery2.event.remove(this, types, fn2, selector);
          });
        }
      });
      var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
      function manipulationTarget(elem, content) {
        if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
          return jQuery2(elem).children("tbody")[0] || elem;
        }
        return elem;
      }
      function disableScript(elem) {
        elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
        return elem;
      }
      function restoreScript(elem) {
        if ((elem.type || "").slice(0, 5) === "true/") {
          elem.type = elem.type.slice(5);
        } else {
          elem.removeAttribute("type");
        }
        return elem;
      }
      function cloneCopyEvent(src, dest) {
        var i2, l, type, pdataOld, udataOld, udataCur, events;
        if (dest.nodeType !== 1) {
          return;
        }
        if (dataPriv.hasData(src)) {
          pdataOld = dataPriv.get(src);
          events = pdataOld.events;
          if (events) {
            dataPriv.remove(dest, "handle events");
            for (type in events) {
              for (i2 = 0, l = events[type].length; i2 < l; i2++) {
                jQuery2.event.add(dest, type, events[type][i2]);
              }
            }
          }
        }
        if (dataUser.hasData(src)) {
          udataOld = dataUser.access(src);
          udataCur = jQuery2.extend({}, udataOld);
          dataUser.set(dest, udataCur);
        }
      }
      function fixInput(src, dest) {
        var nodeName2 = dest.nodeName.toLowerCase();
        if (nodeName2 === "input" && rcheckableType.test(src.type)) {
          dest.checked = src.checked;
        } else if (nodeName2 === "input" || nodeName2 === "textarea") {
          dest.defaultValue = src.defaultValue;
        }
      }
      function domManip(collection, args, callback, ignored) {
        args = flat(args);
        var fragment, first, scripts, hasScripts, node, doc, i2 = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
        if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
          return collection.each(function(index) {
            var self = collection.eq(index);
            if (valueIsFunction) {
              args[0] = value.call(this, index, self.html());
            }
            domManip(self, args, callback, ignored);
          });
        }
        if (l) {
          fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
          first = fragment.firstChild;
          if (fragment.childNodes.length === 1) {
            fragment = first;
          }
          if (first || ignored) {
            scripts = jQuery2.map(getAll(fragment, "script"), disableScript);
            hasScripts = scripts.length;
            for (; i2 < l; i2++) {
              node = fragment;
              if (i2 !== iNoClone) {
                node = jQuery2.clone(node, true, true);
                if (hasScripts) {
                  jQuery2.merge(scripts, getAll(node, "script"));
                }
              }
              callback.call(collection[i2], node, i2);
            }
            if (hasScripts) {
              doc = scripts[scripts.length - 1].ownerDocument;
              jQuery2.map(scripts, restoreScript);
              for (i2 = 0; i2 < hasScripts; i2++) {
                node = scripts[i2];
                if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery2.contains(doc, node)) {
                  if (node.src && (node.type || "").toLowerCase() !== "module") {
                    if (jQuery2._evalUrl && !node.noModule) {
                      jQuery2._evalUrl(node.src, {
                        nonce: node.nonce || node.getAttribute("nonce")
                      }, doc);
                    }
                  } else {
                    DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                  }
                }
              }
            }
          }
        }
        return collection;
      }
      function remove(elem, selector, keepData) {
        var node, nodes = selector ? jQuery2.filter(selector, elem) : elem, i2 = 0;
        for (; (node = nodes[i2]) != null; i2++) {
          if (!keepData && node.nodeType === 1) {
            jQuery2.cleanData(getAll(node));
          }
          if (node.parentNode) {
            if (keepData && isAttached(node)) {
              setGlobalEval(getAll(node, "script"));
            }
            node.parentNode.removeChild(node);
          }
        }
        return elem;
      }
      jQuery2.extend({
        htmlPrefilter: function(html) {
          return html;
        },
        clone: function(elem, dataAndEvents, deepDataAndEvents) {
          var i2, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
          if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery2.isXMLDoc(elem)) {
            destElements = getAll(clone);
            srcElements = getAll(elem);
            for (i2 = 0, l = srcElements.length; i2 < l; i2++) {
              fixInput(srcElements[i2], destElements[i2]);
            }
          }
          if (dataAndEvents) {
            if (deepDataAndEvents) {
              srcElements = srcElements || getAll(elem);
              destElements = destElements || getAll(clone);
              for (i2 = 0, l = srcElements.length; i2 < l; i2++) {
                cloneCopyEvent(srcElements[i2], destElements[i2]);
              }
            } else {
              cloneCopyEvent(elem, clone);
            }
          }
          destElements = getAll(clone, "script");
          if (destElements.length > 0) {
            setGlobalEval(destElements, !inPage && getAll(elem, "script"));
          }
          return clone;
        },
        cleanData: function(elems) {
          var data, elem, type, special = jQuery2.event.special, i2 = 0;
          for (; (elem = elems[i2]) !== void 0; i2++) {
            if (acceptData(elem)) {
              if (data = elem[dataPriv.expando]) {
                if (data.events) {
                  for (type in data.events) {
                    if (special[type]) {
                      jQuery2.event.remove(elem, type);
                    } else {
                      jQuery2.removeEvent(elem, type, data.handle);
                    }
                  }
                }
                elem[dataPriv.expando] = void 0;
              }
              if (elem[dataUser.expando]) {
                elem[dataUser.expando] = void 0;
              }
            }
          }
        }
      });
      jQuery2.fn.extend({
        detach: function(selector) {
          return remove(this, selector, true);
        },
        remove: function(selector) {
          return remove(this, selector);
        },
        text: function(value) {
          return access(this, function(value2) {
            return value2 === void 0 ? jQuery2.text(this) : this.empty().each(function() {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                this.textContent = value2;
              }
            });
          }, null, value, arguments.length);
        },
        append: function() {
          return domManip(this, arguments, function(elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var target = manipulationTarget(this, elem);
              target.appendChild(elem);
            }
          });
        },
        prepend: function() {
          return domManip(this, arguments, function(elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var target = manipulationTarget(this, elem);
              target.insertBefore(elem, target.firstChild);
            }
          });
        },
        before: function() {
          return domManip(this, arguments, function(elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this);
            }
          });
        },
        after: function() {
          return domManip(this, arguments, function(elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this.nextSibling);
            }
          });
        },
        empty: function() {
          var elem, i2 = 0;
          for (; (elem = this[i2]) != null; i2++) {
            if (elem.nodeType === 1) {
              jQuery2.cleanData(getAll(elem, false));
              elem.textContent = "";
            }
          }
          return this;
        },
        clone: function(dataAndEvents, deepDataAndEvents) {
          dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
          deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
          return this.map(function() {
            return jQuery2.clone(this, dataAndEvents, deepDataAndEvents);
          });
        },
        html: function(value) {
          return access(this, function(value2) {
            var elem = this[0] || {}, i2 = 0, l = this.length;
            if (value2 === void 0 && elem.nodeType === 1) {
              return elem.innerHTML;
            }
            if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
              value2 = jQuery2.htmlPrefilter(value2);
              try {
                for (; i2 < l; i2++) {
                  elem = this[i2] || {};
                  if (elem.nodeType === 1) {
                    jQuery2.cleanData(getAll(elem, false));
                    elem.innerHTML = value2;
                  }
                }
                elem = 0;
              } catch (e) {
              }
            }
            if (elem) {
              this.empty().append(value2);
            }
          }, null, value, arguments.length);
        },
        replaceWith: function() {
          var ignored = [];
          return domManip(this, arguments, function(elem) {
            var parent = this.parentNode;
            if (jQuery2.inArray(this, ignored) < 0) {
              jQuery2.cleanData(getAll(this));
              if (parent) {
                parent.replaceChild(elem, this);
              }
            }
          }, ignored);
        }
      });
      jQuery2.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, function(name, original) {
        jQuery2.fn[name] = function(selector) {
          var elems, ret = [], insert = jQuery2(selector), last = insert.length - 1, i2 = 0;
          for (; i2 <= last; i2++) {
            elems = i2 === last ? this : this.clone(true);
            jQuery2(insert[i2])[original](elems);
            push.apply(ret, elems.get());
          }
          return this.pushStack(ret);
        };
      });
      var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
      var rcustomProp = /^--/;
      var getStyles = function(elem) {
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
          view = window2;
        }
        return view.getComputedStyle(elem);
      };
      var swap = function(elem, options, callback) {
        var ret, name, old = {};
        for (name in options) {
          old[name] = elem.style[name];
          elem.style[name] = options[name];
        }
        ret = callback.call(elem);
        for (name in options) {
          elem.style[name] = old[name];
        }
        return ret;
      };
      var rboxStyle = new RegExp(cssExpand.join("|"), "i");
      var whitespace = "[\\x20\\t\\r\\n\\f]";
      var rtrimCSS = new RegExp(
        "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
        "g"
      );
      (function() {
        function computeStyleTests() {
          if (!div) {
            return;
          }
          container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
          div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
          documentElement.appendChild(container).appendChild(div);
          var divStyle = window2.getComputedStyle(div);
          pixelPositionVal = divStyle.top !== "1%";
          reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
          div.style.right = "60%";
          pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
          boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
          div.style.position = "absolute";
          scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
          documentElement.removeChild(container);
          div = null;
        }
        function roundPixelMeasures(measure) {
          return Math.round(parseFloat(measure));
        }
        var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document2.createElement("div"), div = document2.createElement("div");
        if (!div.style) {
          return;
        }
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";
        jQuery2.extend(support, {
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
          },
          // Support: IE 9 - 11+, Edge 15 - 18+
          // IE/Edge misreport `getComputedStyle` of table rows with width/height
          // set in CSS while `offset*` properties report correct values.
          // Behavior in IE 9 is more subtle than in newer versions & it passes
          // some versions of this test; make sure not to make it pass there!
          //
          // Support: Firefox 70+
          // Only Firefox includes border widths
          // in computed dimensions. (gh-4529)
          reliableTrDimensions: function() {
            var table, tr, trChild, trStyle;
            if (reliableTrDimensionsVal == null) {
              table = document2.createElement("table");
              tr = document2.createElement("tr");
              trChild = document2.createElement("div");
              table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
              tr.style.cssText = "border:1px solid";
              tr.style.height = "1px";
              trChild.style.height = "9px";
              trChild.style.display = "block";
              documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
              trStyle = window2.getComputedStyle(tr);
              reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
              documentElement.removeChild(table);
            }
            return reliableTrDimensionsVal;
          }
        });
      })();
      function curCSS(elem, name, computed) {
        var width, minWidth, maxWidth, ret, isCustomProp = rcustomProp.test(name), style = elem.style;
        computed = computed || getStyles(elem);
        if (computed) {
          ret = computed.getPropertyValue(name) || computed[name];
          if (isCustomProp && ret) {
            ret = ret.replace(rtrimCSS, "$1") || void 0;
          }
          if (ret === "" && !isAttached(elem)) {
            ret = jQuery2.style(elem, name);
          }
          if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
            width = style.width;
            minWidth = style.minWidth;
            maxWidth = style.maxWidth;
            style.minWidth = style.maxWidth = style.width = ret;
            ret = computed.width;
            style.width = width;
            style.minWidth = minWidth;
            style.maxWidth = maxWidth;
          }
        }
        return ret !== void 0 ? (
          // Support: IE <=9 - 11 only
          // IE returns zIndex value as an integer.
          ret + ""
        ) : ret;
      }
      function addGetHookIf(conditionFn, hookFn) {
        return {
          get: function() {
            if (conditionFn()) {
              delete this.get;
              return;
            }
            return (this.get = hookFn).apply(this, arguments);
          }
        };
      }
      var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document2.createElement("div").style, vendorProps = {};
      function vendorPropName(name) {
        var capName = name[0].toUpperCase() + name.slice(1), i2 = cssPrefixes.length;
        while (i2--) {
          name = cssPrefixes[i2] + capName;
          if (name in emptyStyle) {
            return name;
          }
        }
      }
      function finalPropName(name) {
        var final = jQuery2.cssProps[name] || vendorProps[name];
        if (final) {
          return final;
        }
        if (name in emptyStyle) {
          return name;
        }
        return vendorProps[name] = vendorPropName(name) || name;
      }
      var rdisplayswap = /^(none|table(?!-c[ea]).+)/, cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
      };
      function setPositiveNumber(_elem, value, subtract) {
        var matches = rcssNum.exec(value);
        return matches ? (
          // Guard against undefined "subtract", e.g., when used as in cssHooks
          Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px")
        ) : value;
      }
      function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
        var i2 = dimension === "width" ? 1 : 0, extra = 0, delta = 0;
        if (box === (isBorderBox ? "border" : "content")) {
          return 0;
        }
        for (; i2 < 4; i2 += 2) {
          if (box === "margin") {
            delta += jQuery2.css(elem, box + cssExpand[i2], true, styles);
          }
          if (!isBorderBox) {
            delta += jQuery2.css(elem, "padding" + cssExpand[i2], true, styles);
            if (box !== "padding") {
              delta += jQuery2.css(elem, "border" + cssExpand[i2] + "Width", true, styles);
            } else {
              extra += jQuery2.css(elem, "border" + cssExpand[i2] + "Width", true, styles);
            }
          } else {
            if (box === "content") {
              delta -= jQuery2.css(elem, "padding" + cssExpand[i2], true, styles);
            }
            if (box !== "margin") {
              delta -= jQuery2.css(elem, "border" + cssExpand[i2] + "Width", true, styles);
            }
          }
        }
        if (!isBorderBox && computedVal >= 0) {
          delta += Math.max(0, Math.ceil(
            elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5
            // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
            // Use an explicit zero to avoid NaN (gh-3964)
          )) || 0;
        }
        return delta;
      }
      function getWidthOrHeight(elem, dimension, extra) {
        var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery2.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
        if (rnumnonpx.test(val)) {
          if (!extra) {
            return val;
          }
          val = "auto";
        }
        if ((!support.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
        // IE/Edge misreport `getComputedStyle` of table rows with width/height
        // set in CSS while `offset*` properties report correct values.
        // Interestingly, in some cases IE 9 doesn't suffer from this issue.
        !support.reliableTrDimensions() && nodeName(elem, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
        // This happens for inline elements with no explicit setting (gh-3571)
        val === "auto" || // Support: Android <=4.1 - 4.3 only
        // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
        !parseFloat(val) && jQuery2.css(elem, "display", false, styles) === "inline") && // Make sure the element is visible & connected
        elem.getClientRects().length) {
          isBorderBox = jQuery2.css(elem, "boxSizing", false, styles) === "border-box";
          valueIsBorderBox = offsetProp in elem;
          if (valueIsBorderBox) {
            val = elem[offsetProp];
          }
        }
        val = parseFloat(val) || 0;
        return val + boxModelAdjustment(
          elem,
          dimension,
          extra || (isBorderBox ? "border" : "content"),
          valueIsBorderBox,
          styles,
          // Provide the current computed size to request scroll gutter calculation (gh-3589)
          val
        ) + "px";
      }
      jQuery2.extend({
        // Add in style property hooks for overriding the default
        // behavior of getting and setting a style property
        cssHooks: {
          opacity: {
            get: function(elem, computed) {
              if (computed) {
                var ret = curCSS(elem, "opacity");
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
          "gridArea": true,
          "gridColumn": true,
          "gridColumnEnd": true,
          "gridColumnStart": true,
          "gridRow": true,
          "gridRowEnd": true,
          "gridRowStart": true,
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
        style: function(elem, name, value, extra) {
          if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
            return;
          }
          var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
          if (!isCustomProp) {
            name = finalPropName(origName);
          }
          hooks = jQuery2.cssHooks[name] || jQuery2.cssHooks[origName];
          if (value !== void 0) {
            type = typeof value;
            if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
              value = adjustCSS(elem, name, ret);
              type = "number";
            }
            if (value == null || value !== value) {
              return;
            }
            if (type === "number" && !isCustomProp) {
              value += ret && ret[3] || (jQuery2.cssNumber[origName] ? "" : "px");
            }
            if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
              style[name] = "inherit";
            }
            if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) {
              if (isCustomProp) {
                style.setProperty(name, value);
              } else {
                style[name] = value;
              }
            }
          } else {
            if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) {
              return ret;
            }
            return style[name];
          }
        },
        css: function(elem, name, extra, styles) {
          var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
          if (!isCustomProp) {
            name = finalPropName(origName);
          }
          hooks = jQuery2.cssHooks[name] || jQuery2.cssHooks[origName];
          if (hooks && "get" in hooks) {
            val = hooks.get(elem, true, extra);
          }
          if (val === void 0) {
            val = curCSS(elem, name, styles);
          }
          if (val === "normal" && name in cssNormalTransform) {
            val = cssNormalTransform[name];
          }
          if (extra === "" || extra) {
            num = parseFloat(val);
            return extra === true || isFinite(num) ? num || 0 : val;
          }
          return val;
        }
      });
      jQuery2.each(["height", "width"], function(_i, dimension) {
        jQuery2.cssHooks[dimension] = {
          get: function(elem, computed, extra) {
            if (computed) {
              return rdisplayswap.test(jQuery2.css(elem, "display")) && // Support: Safari 8+
              // Table columns in Safari have non-zero offsetWidth & zero
              // getBoundingClientRect().width unless display is changed.
              // Support: IE <=11 only
              // Running getBoundingClientRect on a disconnected node
              // in IE throws an error.
              (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                return getWidthOrHeight(elem, dimension, extra);
              }) : getWidthOrHeight(elem, dimension, extra);
            }
          },
          set: function(elem, value, extra) {
            var matches, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery2.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(
              elem,
              dimension,
              extra,
              isBorderBox,
              styles
            ) : 0;
            if (isBorderBox && scrollboxSizeBuggy) {
              subtract -= Math.ceil(
                elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5
              );
            }
            if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
              elem.style[dimension] = value;
              value = jQuery2.css(elem, dimension);
            }
            return setPositiveNumber(elem, value, subtract);
          }
        };
      });
      jQuery2.cssHooks.marginLeft = addGetHookIf(
        support.reliableMarginLeft,
        function(elem, computed) {
          if (computed) {
            return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function() {
              return elem.getBoundingClientRect().left;
            })) + "px";
          }
        }
      );
      jQuery2.each({
        margin: "",
        padding: "",
        border: "Width"
      }, function(prefix, suffix) {
        jQuery2.cssHooks[prefix + suffix] = {
          expand: function(value) {
            var i2 = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
            for (; i2 < 4; i2++) {
              expanded[prefix + cssExpand[i2] + suffix] = parts[i2] || parts[i2 - 2] || parts[0];
            }
            return expanded;
          }
        };
        if (prefix !== "margin") {
          jQuery2.cssHooks[prefix + suffix].set = setPositiveNumber;
        }
      });
      jQuery2.fn.extend({
        css: function(name, value) {
          return access(this, function(elem, name2, value2) {
            var styles, len, map = {}, i2 = 0;
            if (Array.isArray(name2)) {
              styles = getStyles(elem);
              len = name2.length;
              for (; i2 < len; i2++) {
                map[name2[i2]] = jQuery2.css(elem, name2[i2], false, styles);
              }
              return map;
            }
            return value2 !== void 0 ? jQuery2.style(elem, name2, value2) : jQuery2.css(elem, name2);
          }, name, value, arguments.length > 1);
        }
      });
      function Tween(elem, options, prop, end2, easing) {
        return new Tween.prototype.init(elem, options, prop, end2, easing);
      }
      jQuery2.Tween = Tween;
      Tween.prototype = {
        constructor: Tween,
        init: function(elem, options, prop, end2, easing, unit) {
          this.elem = elem;
          this.prop = prop;
          this.easing = easing || jQuery2.easing._default;
          this.options = options;
          this.start = this.now = this.cur();
          this.end = end2;
          this.unit = unit || (jQuery2.cssNumber[prop] ? "" : "px");
        },
        cur: function() {
          var hooks = Tween.propHooks[this.prop];
          return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
        },
        run: function(percent) {
          var eased, hooks = Tween.propHooks[this.prop];
          if (this.options.duration) {
            this.pos = eased = jQuery2.easing[this.easing](
              percent,
              this.options.duration * percent,
              0,
              1,
              this.options.duration
            );
          } else {
            this.pos = eased = percent;
          }
          this.now = (this.end - this.start) * eased + this.start;
          if (this.options.step) {
            this.options.step.call(this.elem, this.now, this);
          }
          if (hooks && hooks.set) {
            hooks.set(this);
          } else {
            Tween.propHooks._default.set(this);
          }
          return this;
        }
      };
      Tween.prototype.init.prototype = Tween.prototype;
      Tween.propHooks = {
        _default: {
          get: function(tween) {
            var result;
            if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
              return tween.elem[tween.prop];
            }
            result = jQuery2.css(tween.elem, tween.prop, "");
            return !result || result === "auto" ? 0 : result;
          },
          set: function(tween) {
            if (jQuery2.fx.step[tween.prop]) {
              jQuery2.fx.step[tween.prop](tween);
            } else if (tween.elem.nodeType === 1 && (jQuery2.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
              jQuery2.style(tween.elem, tween.prop, tween.now + tween.unit);
            } else {
              tween.elem[tween.prop] = tween.now;
            }
          }
        }
      };
      Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(tween) {
          if (tween.elem.nodeType && tween.elem.parentNode) {
            tween.elem[tween.prop] = tween.now;
          }
        }
      };
      jQuery2.easing = {
        linear: function(p) {
          return p;
        },
        swing: function(p) {
          return 0.5 - Math.cos(p * Math.PI) / 2;
        },
        _default: "swing"
      };
      jQuery2.fx = Tween.prototype.init;
      jQuery2.fx.step = {};
      var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
      function schedule() {
        if (inProgress) {
          if (document2.hidden === false && window2.requestAnimationFrame) {
            window2.requestAnimationFrame(schedule);
          } else {
            window2.setTimeout(schedule, jQuery2.fx.interval);
          }
          jQuery2.fx.tick();
        }
      }
      function createFxNow() {
        window2.setTimeout(function() {
          fxNow = void 0;
        });
        return fxNow = Date.now();
      }
      function genFx(type, includeWidth) {
        var which, i2 = 0, attrs = { height: type };
        includeWidth = includeWidth ? 1 : 0;
        for (; i2 < 4; i2 += 2 - includeWidth) {
          which = cssExpand[i2];
          attrs["margin" + which] = attrs["padding" + which] = type;
        }
        if (includeWidth) {
          attrs.opacity = attrs.width = type;
        }
        return attrs;
      }
      function createTween(value, prop, animation) {
        var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
        for (; index < length; index++) {
          if (tween = collection[index].call(animation, prop, value)) {
            return tween;
          }
        }
      }
      function defaultPrefilter(elem, props, opts) {
        var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
        if (!opts.queue) {
          hooks = jQuery2._queueHooks(elem, "fx");
          if (hooks.unqueued == null) {
            hooks.unqueued = 0;
            oldfire = hooks.empty.fire;
            hooks.empty.fire = function() {
              if (!hooks.unqueued) {
                oldfire();
              }
            };
          }
          hooks.unqueued++;
          anim.always(function() {
            anim.always(function() {
              hooks.unqueued--;
              if (!jQuery2.queue(elem, "fx").length) {
                hooks.empty.fire();
              }
            });
          });
        }
        for (prop in props) {
          value = props[prop];
          if (rfxtypes.test(value)) {
            delete props[prop];
            toggle = toggle || value === "toggle";
            if (value === (hidden ? "hide" : "show")) {
              if (value === "show" && dataShow && dataShow[prop] !== void 0) {
                hidden = true;
              } else {
                continue;
              }
            }
            orig[prop] = dataShow && dataShow[prop] || jQuery2.style(elem, prop);
          }
        }
        propTween = !jQuery2.isEmptyObject(props);
        if (!propTween && jQuery2.isEmptyObject(orig)) {
          return;
        }
        if (isBox && elem.nodeType === 1) {
          opts.overflow = [style.overflow, style.overflowX, style.overflowY];
          restoreDisplay = dataShow && dataShow.display;
          if (restoreDisplay == null) {
            restoreDisplay = dataPriv.get(elem, "display");
          }
          display = jQuery2.css(elem, "display");
          if (display === "none") {
            if (restoreDisplay) {
              display = restoreDisplay;
            } else {
              showHide([elem], true);
              restoreDisplay = elem.style.display || restoreDisplay;
              display = jQuery2.css(elem, "display");
              showHide([elem]);
            }
          }
          if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
            if (jQuery2.css(elem, "float") === "none") {
              if (!propTween) {
                anim.done(function() {
                  style.display = restoreDisplay;
                });
                if (restoreDisplay == null) {
                  display = style.display;
                  restoreDisplay = display === "none" ? "" : display;
                }
              }
              style.display = "inline-block";
            }
          }
        }
        if (opts.overflow) {
          style.overflow = "hidden";
          anim.always(function() {
            style.overflow = opts.overflow[0];
            style.overflowX = opts.overflow[1];
            style.overflowY = opts.overflow[2];
          });
        }
        propTween = false;
        for (prop in orig) {
          if (!propTween) {
            if (dataShow) {
              if ("hidden" in dataShow) {
                hidden = dataShow.hidden;
              }
            } else {
              dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
            }
            if (toggle) {
              dataShow.hidden = !hidden;
            }
            if (hidden) {
              showHide([elem], true);
            }
            anim.done(function() {
              if (!hidden) {
                showHide([elem]);
              }
              dataPriv.remove(elem, "fxshow");
              for (prop in orig) {
                jQuery2.style(elem, prop, orig[prop]);
              }
            });
          }
          propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
          if (!(prop in dataShow)) {
            dataShow[prop] = propTween.start;
            if (hidden) {
              propTween.end = propTween.start;
              propTween.start = 0;
            }
          }
        }
      }
      function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks;
        for (index in props) {
          name = camelCase(index);
          easing = specialEasing[name];
          value = props[index];
          if (Array.isArray(value)) {
            easing = value[1];
            value = props[index] = value[0];
          }
          if (index !== name) {
            props[name] = value;
            delete props[index];
          }
          hooks = jQuery2.cssHooks[name];
          if (hooks && "expand" in hooks) {
            value = hooks.expand(value);
            delete props[name];
            for (index in value) {
              if (!(index in props)) {
                props[index] = value[index];
                specialEasing[index] = easing;
              }
            }
          } else {
            specialEasing[name] = easing;
          }
        }
      }
      function Animation(elem, properties, options) {
        var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery2.Deferred().always(function() {
          delete tick.elem;
        }), tick = function() {
          if (stopped) {
            return false;
          }
          var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index2 = 0, length2 = animation.tweens.length;
          for (; index2 < length2; index2++) {
            animation.tweens[index2].run(percent);
          }
          deferred.notifyWith(elem, [animation, percent, remaining]);
          if (percent < 1 && length2) {
            return remaining;
          }
          if (!length2) {
            deferred.notifyWith(elem, [animation, 1, 0]);
          }
          deferred.resolveWith(elem, [animation]);
          return false;
        }, animation = deferred.promise({
          elem,
          props: jQuery2.extend({}, properties),
          opts: jQuery2.extend(true, {
            specialEasing: {},
            easing: jQuery2.easing._default
          }, options),
          originalProperties: properties,
          originalOptions: options,
          startTime: fxNow || createFxNow(),
          duration: options.duration,
          tweens: [],
          createTween: function(prop, end2) {
            var tween = jQuery2.Tween(
              elem,
              animation.opts,
              prop,
              end2,
              animation.opts.specialEasing[prop] || animation.opts.easing
            );
            animation.tweens.push(tween);
            return tween;
          },
          stop: function(gotoEnd) {
            var index2 = 0, length2 = gotoEnd ? animation.tweens.length : 0;
            if (stopped) {
              return this;
            }
            stopped = true;
            for (; index2 < length2; index2++) {
              animation.tweens[index2].run(1);
            }
            if (gotoEnd) {
              deferred.notifyWith(elem, [animation, 1, 0]);
              deferred.resolveWith(elem, [animation, gotoEnd]);
            } else {
              deferred.rejectWith(elem, [animation, gotoEnd]);
            }
            return this;
          }
        }), props = animation.props;
        propFilter(props, animation.opts.specialEasing);
        for (; index < length; index++) {
          result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
          if (result) {
            if (isFunction(result.stop)) {
              jQuery2._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
            }
            return result;
          }
        }
        jQuery2.map(props, createTween, animation);
        if (isFunction(animation.opts.start)) {
          animation.opts.start.call(elem, animation);
        }
        animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
        jQuery2.fx.timer(
          jQuery2.extend(tick, {
            elem,
            anim: animation,
            queue: animation.opts.queue
          })
        );
        return animation;
      }
      jQuery2.Animation = jQuery2.extend(Animation, {
        tweeners: {
          "*": [function(prop, value) {
            var tween = this.createTween(prop, value);
            adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
            return tween;
          }]
        },
        tweener: function(props, callback) {
          if (isFunction(props)) {
            callback = props;
            props = ["*"];
          } else {
            props = props.match(rnothtmlwhite);
          }
          var prop, index = 0, length = props.length;
          for (; index < length; index++) {
            prop = props[index];
            Animation.tweeners[prop] = Animation.tweeners[prop] || [];
            Animation.tweeners[prop].unshift(callback);
          }
        },
        prefilters: [defaultPrefilter],
        prefilter: function(callback, prepend) {
          if (prepend) {
            Animation.prefilters.unshift(callback);
          } else {
            Animation.prefilters.push(callback);
          }
        }
      });
      jQuery2.speed = function(speed, easing, fn2) {
        var opt = speed && typeof speed === "object" ? jQuery2.extend({}, speed) : {
          complete: fn2 || !fn2 && easing || isFunction(speed) && speed,
          duration: speed,
          easing: fn2 && easing || easing && !isFunction(easing) && easing
        };
        if (jQuery2.fx.off) {
          opt.duration = 0;
        } else {
          if (typeof opt.duration !== "number") {
            if (opt.duration in jQuery2.fx.speeds) {
              opt.duration = jQuery2.fx.speeds[opt.duration];
            } else {
              opt.duration = jQuery2.fx.speeds._default;
            }
          }
        }
        if (opt.queue == null || opt.queue === true) {
          opt.queue = "fx";
        }
        opt.old = opt.complete;
        opt.complete = function() {
          if (isFunction(opt.old)) {
            opt.old.call(this);
          }
          if (opt.queue) {
            jQuery2.dequeue(this, opt.queue);
          }
        };
        return opt;
      };
      jQuery2.fn.extend({
        fadeTo: function(speed, to, easing, callback) {
          return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
        },
        animate: function(prop, speed, easing, callback) {
          var empty = jQuery2.isEmptyObject(prop), optall = jQuery2.speed(speed, easing, callback), doAnimation = function() {
            var anim = Animation(this, jQuery2.extend({}, prop), optall);
            if (empty || dataPriv.get(this, "finish")) {
              anim.stop(true);
            }
          };
          doAnimation.finish = doAnimation;
          return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        stop: function(type, clearQueue, gotoEnd) {
          var stopQueue = function(hooks) {
            var stop = hooks.stop;
            delete hooks.stop;
            stop(gotoEnd);
          };
          if (typeof type !== "string") {
            gotoEnd = clearQueue;
            clearQueue = type;
            type = void 0;
          }
          if (clearQueue) {
            this.queue(type || "fx", []);
          }
          return this.each(function() {
            var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery2.timers, data = dataPriv.get(this);
            if (index) {
              if (data[index] && data[index].stop) {
                stopQueue(data[index]);
              }
            } else {
              for (index in data) {
                if (data[index] && data[index].stop && rrun.test(index)) {
                  stopQueue(data[index]);
                }
              }
            }
            for (index = timers.length; index--; ) {
              if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                timers[index].anim.stop(gotoEnd);
                dequeue = false;
                timers.splice(index, 1);
              }
            }
            if (dequeue || !gotoEnd) {
              jQuery2.dequeue(this, type);
            }
          });
        },
        finish: function(type) {
          if (type !== false) {
            type = type || "fx";
          }
          return this.each(function() {
            var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery2.timers, length = queue ? queue.length : 0;
            data.finish = true;
            jQuery2.queue(this, type, []);
            if (hooks && hooks.stop) {
              hooks.stop.call(this, true);
            }
            for (index = timers.length; index--; ) {
              if (timers[index].elem === this && timers[index].queue === type) {
                timers[index].anim.stop(true);
                timers.splice(index, 1);
              }
            }
            for (index = 0; index < length; index++) {
              if (queue[index] && queue[index].finish) {
                queue[index].finish.call(this);
              }
            }
            delete data.finish;
          });
        }
      });
      jQuery2.each(["toggle", "show", "hide"], function(_i, name) {
        var cssFn = jQuery2.fn[name];
        jQuery2.fn[name] = function(speed, easing, callback) {
          return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
        };
      });
      jQuery2.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" }
      }, function(name, props) {
        jQuery2.fn[name] = function(speed, easing, callback) {
          return this.animate(props, speed, easing, callback);
        };
      });
      jQuery2.timers = [];
      jQuery2.fx.tick = function() {
        var timer, i2 = 0, timers = jQuery2.timers;
        fxNow = Date.now();
        for (; i2 < timers.length; i2++) {
          timer = timers[i2];
          if (!timer() && timers[i2] === timer) {
            timers.splice(i2--, 1);
          }
        }
        if (!timers.length) {
          jQuery2.fx.stop();
        }
        fxNow = void 0;
      };
      jQuery2.fx.timer = function(timer) {
        jQuery2.timers.push(timer);
        jQuery2.fx.start();
      };
      jQuery2.fx.interval = 13;
      jQuery2.fx.start = function() {
        if (inProgress) {
          return;
        }
        inProgress = true;
        schedule();
      };
      jQuery2.fx.stop = function() {
        inProgress = null;
      };
      jQuery2.fx.speeds = {
        slow: 600,
        fast: 200,
        // Default speed
        _default: 400
      };
      jQuery2.fn.delay = function(time, type) {
        time = jQuery2.fx ? jQuery2.fx.speeds[time] || time : time;
        type = type || "fx";
        return this.queue(type, function(next, hooks) {
          var timeout = window2.setTimeout(next, time);
          hooks.stop = function() {
            window2.clearTimeout(timeout);
          };
        });
      };
      (function() {
        var input = document2.createElement("input"), select = document2.createElement("select"), opt = select.appendChild(document2.createElement("option"));
        input.type = "checkbox";
        support.checkOn = input.value !== "";
        support.optSelected = opt.selected;
        input = document2.createElement("input");
        input.value = "t";
        input.type = "radio";
        support.radioValue = input.value === "t";
      })();
      var boolHook, attrHandle = jQuery2.expr.attrHandle;
      jQuery2.fn.extend({
        attr: function(name, value) {
          return access(this, jQuery2.attr, name, value, arguments.length > 1);
        },
        removeAttr: function(name) {
          return this.each(function() {
            jQuery2.removeAttr(this, name);
          });
        }
      });
      jQuery2.extend({
        attr: function(elem, name, value) {
          var ret, hooks, nType = elem.nodeType;
          if (nType === 3 || nType === 8 || nType === 2) {
            return;
          }
          if (typeof elem.getAttribute === "undefined") {
            return jQuery2.prop(elem, name, value);
          }
          if (nType !== 1 || !jQuery2.isXMLDoc(elem)) {
            hooks = jQuery2.attrHooks[name.toLowerCase()] || (jQuery2.expr.match.bool.test(name) ? boolHook : void 0);
          }
          if (value !== void 0) {
            if (value === null) {
              jQuery2.removeAttr(elem, name);
              return;
            }
            if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
              return ret;
            }
            elem.setAttribute(name, value + "");
            return value;
          }
          if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
            return ret;
          }
          ret = jQuery2.find.attr(elem, name);
          return ret == null ? void 0 : ret;
        },
        attrHooks: {
          type: {
            set: function(elem, value) {
              if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                var val = elem.value;
                elem.setAttribute("type", value);
                if (val) {
                  elem.value = val;
                }
                return value;
              }
            }
          }
        },
        removeAttr: function(elem, value) {
          var name, i2 = 0, attrNames = value && value.match(rnothtmlwhite);
          if (attrNames && elem.nodeType === 1) {
            while (name = attrNames[i2++]) {
              elem.removeAttribute(name);
            }
          }
        }
      });
      boolHook = {
        set: function(elem, value, name) {
          if (value === false) {
            jQuery2.removeAttr(elem, name);
          } else {
            elem.setAttribute(name, name);
          }
          return name;
        }
      };
      jQuery2.each(jQuery2.expr.match.bool.source.match(/\w+/g), function(_i, name) {
        var getter = attrHandle[name] || jQuery2.find.attr;
        attrHandle[name] = function(elem, name2, isXML) {
          var ret, handle, lowercaseName = name2.toLowerCase();
          if (!isXML) {
            handle = attrHandle[lowercaseName];
            attrHandle[lowercaseName] = ret;
            ret = getter(elem, name2, isXML) != null ? lowercaseName : null;
            attrHandle[lowercaseName] = handle;
          }
          return ret;
        };
      });
      var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
      jQuery2.fn.extend({
        prop: function(name, value) {
          return access(this, jQuery2.prop, name, value, arguments.length > 1);
        },
        removeProp: function(name) {
          return this.each(function() {
            delete this[jQuery2.propFix[name] || name];
          });
        }
      });
      jQuery2.extend({
        prop: function(elem, name, value) {
          var ret, hooks, nType = elem.nodeType;
          if (nType === 3 || nType === 8 || nType === 2) {
            return;
          }
          if (nType !== 1 || !jQuery2.isXMLDoc(elem)) {
            name = jQuery2.propFix[name] || name;
            hooks = jQuery2.propHooks[name];
          }
          if (value !== void 0) {
            if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
              return ret;
            }
            return elem[name] = value;
          }
          if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
            return ret;
          }
          return elem[name];
        },
        propHooks: {
          tabIndex: {
            get: function(elem) {
              var tabindex = jQuery2.find.attr(elem, "tabindex");
              if (tabindex) {
                return parseInt(tabindex, 10);
              }
              if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
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
      });
      if (!support.optSelected) {
        jQuery2.propHooks.selected = {
          get: function(elem) {
            var parent = elem.parentNode;
            if (parent && parent.parentNode) {
              parent.parentNode.selectedIndex;
            }
            return null;
          },
          set: function(elem) {
            var parent = elem.parentNode;
            if (parent) {
              parent.selectedIndex;
              if (parent.parentNode) {
                parent.parentNode.selectedIndex;
              }
            }
          }
        };
      }
      jQuery2.each([
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
        jQuery2.propFix[this.toLowerCase()] = this;
      });
      function stripAndCollapse(value) {
        var tokens = value.match(rnothtmlwhite) || [];
        return tokens.join(" ");
      }
      function getClass(elem) {
        return elem.getAttribute && elem.getAttribute("class") || "";
      }
      function classesToArray(value) {
        if (Array.isArray(value)) {
          return value;
        }
        if (typeof value === "string") {
          return value.match(rnothtmlwhite) || [];
        }
        return [];
      }
      jQuery2.fn.extend({
        addClass: function(value) {
          var classNames, cur, curValue, className, i2, finalValue;
          if (isFunction(value)) {
            return this.each(function(j) {
              jQuery2(this).addClass(value.call(this, j, getClass(this)));
            });
          }
          classNames = classesToArray(value);
          if (classNames.length) {
            return this.each(function() {
              curValue = getClass(this);
              cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
              if (cur) {
                for (i2 = 0; i2 < classNames.length; i2++) {
                  className = classNames[i2];
                  if (cur.indexOf(" " + className + " ") < 0) {
                    cur += className + " ";
                  }
                }
                finalValue = stripAndCollapse(cur);
                if (curValue !== finalValue) {
                  this.setAttribute("class", finalValue);
                }
              }
            });
          }
          return this;
        },
        removeClass: function(value) {
          var classNames, cur, curValue, className, i2, finalValue;
          if (isFunction(value)) {
            return this.each(function(j) {
              jQuery2(this).removeClass(value.call(this, j, getClass(this)));
            });
          }
          if (!arguments.length) {
            return this.attr("class", "");
          }
          classNames = classesToArray(value);
          if (classNames.length) {
            return this.each(function() {
              curValue = getClass(this);
              cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
              if (cur) {
                for (i2 = 0; i2 < classNames.length; i2++) {
                  className = classNames[i2];
                  while (cur.indexOf(" " + className + " ") > -1) {
                    cur = cur.replace(" " + className + " ", " ");
                  }
                }
                finalValue = stripAndCollapse(cur);
                if (curValue !== finalValue) {
                  this.setAttribute("class", finalValue);
                }
              }
            });
          }
          return this;
        },
        toggleClass: function(value, stateVal) {
          var classNames, className, i2, self, type = typeof value, isValidValue = type === "string" || Array.isArray(value);
          if (isFunction(value)) {
            return this.each(function(i3) {
              jQuery2(this).toggleClass(
                value.call(this, i3, getClass(this), stateVal),
                stateVal
              );
            });
          }
          if (typeof stateVal === "boolean" && isValidValue) {
            return stateVal ? this.addClass(value) : this.removeClass(value);
          }
          classNames = classesToArray(value);
          return this.each(function() {
            if (isValidValue) {
              self = jQuery2(this);
              for (i2 = 0; i2 < classNames.length; i2++) {
                className = classNames[i2];
                if (self.hasClass(className)) {
                  self.removeClass(className);
                } else {
                  self.addClass(className);
                }
              }
            } else if (value === void 0 || type === "boolean") {
              className = getClass(this);
              if (className) {
                dataPriv.set(this, "__className__", className);
              }
              if (this.setAttribute) {
                this.setAttribute(
                  "class",
                  className || value === false ? "" : dataPriv.get(this, "__className__") || ""
                );
              }
            }
          });
        },
        hasClass: function(selector) {
          var className, elem, i2 = 0;
          className = " " + selector + " ";
          while (elem = this[i2++]) {
            if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
              return true;
            }
          }
          return false;
        }
      });
      var rreturn = /\r/g;
      jQuery2.fn.extend({
        val: function(value) {
          var hooks, ret, valueIsFunction, elem = this[0];
          if (!arguments.length) {
            if (elem) {
              hooks = jQuery2.valHooks[elem.type] || jQuery2.valHooks[elem.nodeName.toLowerCase()];
              if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) {
                return ret;
              }
              ret = elem.value;
              if (typeof ret === "string") {
                return ret.replace(rreturn, "");
              }
              return ret == null ? "" : ret;
            }
            return;
          }
          valueIsFunction = isFunction(value);
          return this.each(function(i2) {
            var val;
            if (this.nodeType !== 1) {
              return;
            }
            if (valueIsFunction) {
              val = value.call(this, i2, jQuery2(this).val());
            } else {
              val = value;
            }
            if (val == null) {
              val = "";
            } else if (typeof val === "number") {
              val += "";
            } else if (Array.isArray(val)) {
              val = jQuery2.map(val, function(value2) {
                return value2 == null ? "" : value2 + "";
              });
            }
            hooks = jQuery2.valHooks[this.type] || jQuery2.valHooks[this.nodeName.toLowerCase()];
            if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) {
              this.value = val;
            }
          });
        }
      });
      jQuery2.extend({
        valHooks: {
          option: {
            get: function(elem) {
              var val = jQuery2.find.attr(elem, "value");
              return val != null ? val : (
                // Support: IE <=10 - 11 only
                // option.text throws exceptions (trac-14686, trac-14858)
                // Strip and collapse whitespace
                // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                stripAndCollapse(jQuery2.text(elem))
              );
            }
          },
          select: {
            get: function(elem) {
              var value, option, i2, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max2 = one ? index + 1 : options.length;
              if (index < 0) {
                i2 = max2;
              } else {
                i2 = one ? index : 0;
              }
              for (; i2 < max2; i2++) {
                option = options[i2];
                if ((option.selected || i2 === index) && // Don't return options that are disabled or in a disabled optgroup
                !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                  value = jQuery2(option).val();
                  if (one) {
                    return value;
                  }
                  values.push(value);
                }
              }
              return values;
            },
            set: function(elem, value) {
              var optionSet, option, options = elem.options, values = jQuery2.makeArray(value), i2 = options.length;
              while (i2--) {
                option = options[i2];
                if (option.selected = jQuery2.inArray(jQuery2.valHooks.option.get(option), values) > -1) {
                  optionSet = true;
                }
              }
              if (!optionSet) {
                elem.selectedIndex = -1;
              }
              return values;
            }
          }
        }
      });
      jQuery2.each(["radio", "checkbox"], function() {
        jQuery2.valHooks[this] = {
          set: function(elem, value) {
            if (Array.isArray(value)) {
              return elem.checked = jQuery2.inArray(jQuery2(elem).val(), value) > -1;
            }
          }
        };
        if (!support.checkOn) {
          jQuery2.valHooks[this].get = function(elem) {
            return elem.getAttribute("value") === null ? "on" : elem.value;
          };
        }
      });
      support.focusin = "onfocusin" in window2;
      var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
        e.stopPropagation();
      };
      jQuery2.extend(jQuery2.event, {
        trigger: function(event, data, elem, onlyHandlers) {
          var i2, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document2], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
          cur = lastElement = tmp = elem = elem || document2;
          if (elem.nodeType === 3 || elem.nodeType === 8) {
            return;
          }
          if (rfocusMorph.test(type + jQuery2.event.triggered)) {
            return;
          }
          if (type.indexOf(".") > -1) {
            namespaces = type.split(".");
            type = namespaces.shift();
            namespaces.sort();
          }
          ontype = type.indexOf(":") < 0 && "on" + type;
          event = event[jQuery2.expando] ? event : new jQuery2.Event(type, typeof event === "object" && event);
          event.isTrigger = onlyHandlers ? 2 : 3;
          event.namespace = namespaces.join(".");
          event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
          event.result = void 0;
          if (!event.target) {
            event.target = elem;
          }
          data = data == null ? [event] : jQuery2.makeArray(data, [event]);
          special = jQuery2.event.special[type] || {};
          if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
            return;
          }
          if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
            bubbleType = special.delegateType || type;
            if (!rfocusMorph.test(bubbleType + type)) {
              cur = cur.parentNode;
            }
            for (; cur; cur = cur.parentNode) {
              eventPath.push(cur);
              tmp = cur;
            }
            if (tmp === (elem.ownerDocument || document2)) {
              eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
            }
          }
          i2 = 0;
          while ((cur = eventPath[i2++]) && !event.isPropagationStopped()) {
            lastElement = cur;
            event.type = i2 > 1 ? bubbleType : special.bindType || type;
            handle = (dataPriv.get(cur, "events") || /* @__PURE__ */ Object.create(null))[event.type] && dataPriv.get(cur, "handle");
            if (handle) {
              handle.apply(cur, data);
            }
            handle = ontype && cur[ontype];
            if (handle && handle.apply && acceptData(cur)) {
              event.result = handle.apply(cur, data);
              if (event.result === false) {
                event.preventDefault();
              }
            }
          }
          event.type = type;
          if (!onlyHandlers && !event.isDefaultPrevented()) {
            if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
              if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                tmp = elem[ontype];
                if (tmp) {
                  elem[ontype] = null;
                }
                jQuery2.event.triggered = type;
                if (event.isPropagationStopped()) {
                  lastElement.addEventListener(type, stopPropagationCallback);
                }
                elem[type]();
                if (event.isPropagationStopped()) {
                  lastElement.removeEventListener(type, stopPropagationCallback);
                }
                jQuery2.event.triggered = void 0;
                if (tmp) {
                  elem[ontype] = tmp;
                }
              }
            }
          }
          return event.result;
        },
        // Piggyback on a donor event to simulate a different one
        // Used only for `focus(in | out)` events
        simulate: function(type, elem, event) {
          var e = jQuery2.extend(
            new jQuery2.Event(),
            event,
            {
              type,
              isSimulated: true
            }
          );
          jQuery2.event.trigger(e, null, elem);
        }
      });
      jQuery2.fn.extend({
        trigger: function(type, data) {
          return this.each(function() {
            jQuery2.event.trigger(type, data, this);
          });
        },
        triggerHandler: function(type, data) {
          var elem = this[0];
          if (elem) {
            return jQuery2.event.trigger(type, data, elem, true);
          }
        }
      });
      if (!support.focusin) {
        jQuery2.each({ focus: "focusin", blur: "focusout" }, function(orig, fix) {
          var handler = function(event) {
            jQuery2.event.simulate(fix, event.target, jQuery2.event.fix(event));
          };
          jQuery2.event.special[fix] = {
            setup: function() {
              var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix);
              if (!attaches) {
                doc.addEventListener(orig, handler, true);
              }
              dataPriv.access(doc, fix, (attaches || 0) + 1);
            },
            teardown: function() {
              var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix) - 1;
              if (!attaches) {
                doc.removeEventListener(orig, handler, true);
                dataPriv.remove(doc, fix);
              } else {
                dataPriv.access(doc, fix, attaches);
              }
            }
          };
        });
      }
      var location2 = window2.location;
      var nonce = { guid: Date.now() };
      var rquery = /\?/;
      jQuery2.parseXML = function(data) {
        var xml, parserErrorElem;
        if (!data || typeof data !== "string") {
          return null;
        }
        try {
          xml = new window2.DOMParser().parseFromString(data, "text/xml");
        } catch (e) {
        }
        parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
        if (!xml || parserErrorElem) {
          jQuery2.error("Invalid XML: " + (parserErrorElem ? jQuery2.map(parserErrorElem.childNodes, function(el) {
            return el.textContent;
          }).join("\n") : data));
        }
        return xml;
      };
      var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
      function buildParams(prefix, obj, traditional, add) {
        var name;
        if (Array.isArray(obj)) {
          jQuery2.each(obj, function(i2, v) {
            if (traditional || rbracket.test(prefix)) {
              add(prefix, v);
            } else {
              buildParams(
                prefix + "[" + (typeof v === "object" && v != null ? i2 : "") + "]",
                v,
                traditional,
                add
              );
            }
          });
        } else if (!traditional && toType2(obj) === "object") {
          for (name in obj) {
            buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
          }
        } else {
          add(prefix, obj);
        }
      }
      jQuery2.param = function(a, traditional) {
        var prefix, s = [], add = function(key, valueOrFunction) {
          var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
          s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
        };
        if (a == null) {
          return "";
        }
        if (Array.isArray(a) || a.jquery && !jQuery2.isPlainObject(a)) {
          jQuery2.each(a, function() {
            add(this.name, this.value);
          });
        } else {
          for (prefix in a) {
            buildParams(prefix, a[prefix], traditional, add);
          }
        }
        return s.join("&");
      };
      jQuery2.fn.extend({
        serialize: function() {
          return jQuery2.param(this.serializeArray());
        },
        serializeArray: function() {
          return this.map(function() {
            var elements = jQuery2.prop(this, "elements");
            return elements ? jQuery2.makeArray(elements) : this;
          }).filter(function() {
            var type = this.type;
            return this.name && !jQuery2(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
          }).map(function(_i, elem) {
            var val = jQuery2(this).val();
            if (val == null) {
              return null;
            }
            if (Array.isArray(val)) {
              return jQuery2.map(val, function(val2) {
                return { name: elem.name, value: val2.replace(rCRLF, "\r\n") };
              });
            }
            return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
          }).get();
        }
      });
      var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document2.createElement("a");
      originAnchor.href = location2.href;
      function addToPrefiltersOrTransports(structure) {
        return function(dataTypeExpression, func) {
          if (typeof dataTypeExpression !== "string") {
            func = dataTypeExpression;
            dataTypeExpression = "*";
          }
          var dataType, i2 = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
          if (isFunction(func)) {
            while (dataType = dataTypes[i2++]) {
              if (dataType[0] === "+") {
                dataType = dataType.slice(1) || "*";
                (structure[dataType] = structure[dataType] || []).unshift(func);
              } else {
                (structure[dataType] = structure[dataType] || []).push(func);
              }
            }
          }
        };
      }
      function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        var inspected = {}, seekingTransport = structure === transports;
        function inspect(dataType) {
          var selected;
          inspected[dataType] = true;
          jQuery2.each(structure[dataType] || [], function(_, prefilterOrFactory) {
            var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
            if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
              options.dataTypes.unshift(dataTypeOrTransport);
              inspect(dataTypeOrTransport);
              return false;
            } else if (seekingTransport) {
              return !(selected = dataTypeOrTransport);
            }
          });
          return selected;
        }
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
      }
      function ajaxExtend(target, src) {
        var key, deep, flatOptions = jQuery2.ajaxSettings.flatOptions || {};
        for (key in src) {
          if (src[key] !== void 0) {
            (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
          }
        }
        if (deep) {
          jQuery2.extend(true, target, deep);
        }
        return target;
      }
      function ajaxHandleResponses(s, jqXHR, responses) {
        var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
        while (dataTypes[0] === "*") {
          dataTypes.shift();
          if (ct === void 0) {
            ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
          }
        }
        if (ct) {
          for (type in contents) {
            if (contents[type] && contents[type].test(ct)) {
              dataTypes.unshift(type);
              break;
            }
          }
        }
        if (dataTypes[0] in responses) {
          finalDataType = dataTypes[0];
        } else {
          for (type in responses) {
            if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
              finalDataType = type;
              break;
            }
            if (!firstDataType) {
              firstDataType = type;
            }
          }
          finalDataType = finalDataType || firstDataType;
        }
        if (finalDataType) {
          if (finalDataType !== dataTypes[0]) {
            dataTypes.unshift(finalDataType);
          }
          return responses[finalDataType];
        }
      }
      function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
        if (dataTypes[1]) {
          for (conv in s.converters) {
            converters[conv.toLowerCase()] = s.converters[conv];
          }
        }
        current = dataTypes.shift();
        while (current) {
          if (s.responseFields[current]) {
            jqXHR[s.responseFields[current]] = response;
          }
          if (!prev && isSuccess && s.dataFilter) {
            response = s.dataFilter(response, s.dataType);
          }
          prev = current;
          current = dataTypes.shift();
          if (current) {
            if (current === "*") {
              current = prev;
            } else if (prev !== "*" && prev !== current) {
              conv = converters[prev + " " + current] || converters["* " + current];
              if (!conv) {
                for (conv2 in converters) {
                  tmp = conv2.split(" ");
                  if (tmp[1] === current) {
                    conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                    if (conv) {
                      if (conv === true) {
                        conv = converters[conv2];
                      } else if (converters[conv2] !== true) {
                        current = tmp[0];
                        dataTypes.unshift(tmp[1]);
                      }
                      break;
                    }
                  }
                }
              }
              if (conv !== true) {
                if (conv && s.throws) {
                  response = conv(response);
                } else {
                  try {
                    response = conv(response);
                  } catch (e) {
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
      jQuery2.extend({
        // Counter for holding the number of active queries
        active: 0,
        // Last-Modified header cache for next request
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: location2.href,
          type: "GET",
          isLocal: rlocalProtocol.test(location2.protocol),
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
            "text xml": jQuery2.parseXML
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
        ajaxSetup: function(target, settings) {
          return settings ? (
            // Building a settings object
            ajaxExtend(ajaxExtend(target, jQuery2.ajaxSettings), settings)
          ) : (
            // Extending ajaxSettings
            ajaxExtend(jQuery2.ajaxSettings, target)
          );
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        // Main method
        ajax: function(url, options) {
          if (typeof url === "object") {
            options = url;
            url = void 0;
          }
          options = options || {};
          var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed2, fireGlobals, i2, uncached, s = jQuery2.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery2(callbackContext) : jQuery2.event, deferred = jQuery2.Deferred(), completeDeferred = jQuery2.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
            readyState: 0,
            // Builds headers hashtable if needed
            getResponseHeader: function(key) {
              var match;
              if (completed2) {
                if (!responseHeaders) {
                  responseHeaders = {};
                  while (match = rheaders.exec(responseHeadersString)) {
                    responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                  }
                }
                match = responseHeaders[key.toLowerCase() + " "];
              }
              return match == null ? null : match.join(", ");
            },
            // Raw string
            getAllResponseHeaders: function() {
              return completed2 ? responseHeadersString : null;
            },
            // Caches the header
            setRequestHeader: function(name, value) {
              if (completed2 == null) {
                name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                requestHeaders[name] = value;
              }
              return this;
            },
            // Overrides response content-type header
            overrideMimeType: function(type) {
              if (completed2 == null) {
                s.mimeType = type;
              }
              return this;
            },
            // Status-dependent callbacks
            statusCode: function(map) {
              var code;
              if (map) {
                if (completed2) {
                  jqXHR.always(map[jqXHR.status]);
                } else {
                  for (code in map) {
                    statusCode[code] = [statusCode[code], map[code]];
                  }
                }
              }
              return this;
            },
            // Cancel the request
            abort: function(statusText) {
              var finalText = statusText || strAbort;
              if (transport) {
                transport.abort(finalText);
              }
              done(0, finalText);
              return this;
            }
          };
          deferred.promise(jqXHR);
          s.url = ((url || s.url || location2.href) + "").replace(rprotocol, location2.protocol + "//");
          s.type = options.method || options.type || s.method || s.type;
          s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
          if (s.crossDomain == null) {
            urlAnchor = document2.createElement("a");
            try {
              urlAnchor.href = s.url;
              urlAnchor.href = urlAnchor.href;
              s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
            } catch (e) {
              s.crossDomain = true;
            }
          }
          if (s.data && s.processData && typeof s.data !== "string") {
            s.data = jQuery2.param(s.data, s.traditional);
          }
          inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
          if (completed2) {
            return jqXHR;
          }
          fireGlobals = jQuery2.event && s.global;
          if (fireGlobals && jQuery2.active++ === 0) {
            jQuery2.event.trigger("ajaxStart");
          }
          s.type = s.type.toUpperCase();
          s.hasContent = !rnoContent.test(s.type);
          cacheURL = s.url.replace(rhash, "");
          if (!s.hasContent) {
            uncached = s.url.slice(cacheURL.length);
            if (s.data && (s.processData || typeof s.data === "string")) {
              cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
              delete s.data;
            }
            if (s.cache === false) {
              cacheURL = cacheURL.replace(rantiCache, "$1");
              uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
            }
            s.url = cacheURL + uncached;
          } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
            s.data = s.data.replace(r20, "+");
          }
          if (s.ifModified) {
            if (jQuery2.lastModified[cacheURL]) {
              jqXHR.setRequestHeader("If-Modified-Since", jQuery2.lastModified[cacheURL]);
            }
            if (jQuery2.etag[cacheURL]) {
              jqXHR.setRequestHeader("If-None-Match", jQuery2.etag[cacheURL]);
            }
          }
          if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
            jqXHR.setRequestHeader("Content-Type", s.contentType);
          }
          jqXHR.setRequestHeader(
            "Accept",
            s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]
          );
          for (i2 in s.headers) {
            jqXHR.setRequestHeader(i2, s.headers[i2]);
          }
          if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed2)) {
            return jqXHR.abort();
          }
          strAbort = "abort";
          completeDeferred.add(s.complete);
          jqXHR.done(s.success);
          jqXHR.fail(s.error);
          transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
          if (!transport) {
            done(-1, "No Transport");
          } else {
            jqXHR.readyState = 1;
            if (fireGlobals) {
              globalEventContext.trigger("ajaxSend", [jqXHR, s]);
            }
            if (completed2) {
              return jqXHR;
            }
            if (s.async && s.timeout > 0) {
              timeoutTimer = window2.setTimeout(function() {
                jqXHR.abort("timeout");
              }, s.timeout);
            }
            try {
              completed2 = false;
              transport.send(requestHeaders, done);
            } catch (e) {
              if (completed2) {
                throw e;
              }
              done(-1, e);
            }
          }
          function done(status, nativeStatusText, responses, headers) {
            var isSuccess, success, error, response, modified, statusText = nativeStatusText;
            if (completed2) {
              return;
            }
            completed2 = true;
            if (timeoutTimer) {
              window2.clearTimeout(timeoutTimer);
            }
            transport = void 0;
            responseHeadersString = headers || "";
            jqXHR.readyState = status > 0 ? 4 : 0;
            isSuccess = status >= 200 && status < 300 || status === 304;
            if (responses) {
              response = ajaxHandleResponses(s, jqXHR, responses);
            }
            if (!isSuccess && jQuery2.inArray("script", s.dataTypes) > -1 && jQuery2.inArray("json", s.dataTypes) < 0) {
              s.converters["text script"] = function() {
              };
            }
            response = ajaxConvert(s, response, jqXHR, isSuccess);
            if (isSuccess) {
              if (s.ifModified) {
                modified = jqXHR.getResponseHeader("Last-Modified");
                if (modified) {
                  jQuery2.lastModified[cacheURL] = modified;
                }
                modified = jqXHR.getResponseHeader("etag");
                if (modified) {
                  jQuery2.etag[cacheURL] = modified;
                }
              }
              if (status === 204 || s.type === "HEAD") {
                statusText = "nocontent";
              } else if (status === 304) {
                statusText = "notmodified";
              } else {
                statusText = response.state;
                success = response.data;
                error = response.error;
                isSuccess = !error;
              }
            } else {
              error = statusText;
              if (status || !statusText) {
                statusText = "error";
                if (status < 0) {
                  status = 0;
                }
              }
            }
            jqXHR.status = status;
            jqXHR.statusText = (nativeStatusText || statusText) + "";
            if (isSuccess) {
              deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
            } else {
              deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
            }
            jqXHR.statusCode(statusCode);
            statusCode = void 0;
            if (fireGlobals) {
              globalEventContext.trigger(
                isSuccess ? "ajaxSuccess" : "ajaxError",
                [jqXHR, s, isSuccess ? success : error]
              );
            }
            completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
            if (fireGlobals) {
              globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
              if (!--jQuery2.active) {
                jQuery2.event.trigger("ajaxStop");
              }
            }
          }
          return jqXHR;
        },
        getJSON: function(url, data, callback) {
          return jQuery2.get(url, data, callback, "json");
        },
        getScript: function(url, callback) {
          return jQuery2.get(url, void 0, callback, "script");
        }
      });
      jQuery2.each(["get", "post"], function(_i, method) {
        jQuery2[method] = function(url, data, callback, type) {
          if (isFunction(data)) {
            type = type || callback;
            callback = data;
            data = void 0;
          }
          return jQuery2.ajax(jQuery2.extend({
            url,
            type: method,
            dataType: type,
            data,
            success: callback
          }, jQuery2.isPlainObject(url) && url));
        };
      });
      jQuery2.ajaxPrefilter(function(s) {
        var i2;
        for (i2 in s.headers) {
          if (i2.toLowerCase() === "content-type") {
            s.contentType = s.headers[i2] || "";
          }
        }
      });
      jQuery2._evalUrl = function(url, options, doc) {
        return jQuery2.ajax({
          url,
          // Make this explicit, since user can override this through ajaxSetup (trac-11264)
          type: "GET",
          dataType: "script",
          cache: true,
          async: false,
          global: false,
          // Only evaluate the response if it is successful (gh-4126)
          // dataFilter is not invoked for failure responses, so using it instead
          // of the default converter is kludgy but it works.
          converters: {
            "text script": function() {
            }
          },
          dataFilter: function(response) {
            jQuery2.globalEval(response, options, doc);
          }
        });
      };
      jQuery2.fn.extend({
        wrapAll: function(html) {
          var wrap;
          if (this[0]) {
            if (isFunction(html)) {
              html = html.call(this[0]);
            }
            wrap = jQuery2(html, this[0].ownerDocument).eq(0).clone(true);
            if (this[0].parentNode) {
              wrap.insertBefore(this[0]);
            }
            wrap.map(function() {
              var elem = this;
              while (elem.firstElementChild) {
                elem = elem.firstElementChild;
              }
              return elem;
            }).append(this);
          }
          return this;
        },
        wrapInner: function(html) {
          if (isFunction(html)) {
            return this.each(function(i2) {
              jQuery2(this).wrapInner(html.call(this, i2));
            });
          }
          return this.each(function() {
            var self = jQuery2(this), contents = self.contents();
            if (contents.length) {
              contents.wrapAll(html);
            } else {
              self.append(html);
            }
          });
        },
        wrap: function(html) {
          var htmlIsFunction = isFunction(html);
          return this.each(function(i2) {
            jQuery2(this).wrapAll(htmlIsFunction ? html.call(this, i2) : html);
          });
        },
        unwrap: function(selector) {
          this.parent(selector).not("body").each(function() {
            jQuery2(this).replaceWith(this.childNodes);
          });
          return this;
        }
      });
      jQuery2.expr.pseudos.hidden = function(elem) {
        return !jQuery2.expr.pseudos.visible(elem);
      };
      jQuery2.expr.pseudos.visible = function(elem) {
        return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
      };
      jQuery2.ajaxSettings.xhr = function() {
        try {
          return new window2.XMLHttpRequest();
        } catch (e) {
        }
      };
      var xhrSuccessStatus = {
        // File protocol always yields status code 0, assume 200
        0: 200,
        // Support: IE <=9 only
        // trac-1450: sometimes IE returns 1223 when it should be 204
        1223: 204
      }, xhrSupported = jQuery2.ajaxSettings.xhr();
      support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
      support.ajax = xhrSupported = !!xhrSupported;
      jQuery2.ajaxTransport(function(options) {
        var callback, errorCallback;
        if (support.cors || xhrSupported && !options.crossDomain) {
          return {
            send: function(headers, complete) {
              var i2, xhr = options.xhr();
              xhr.open(
                options.type,
                options.url,
                options.async,
                options.username,
                options.password
              );
              if (options.xhrFields) {
                for (i2 in options.xhrFields) {
                  xhr[i2] = options.xhrFields[i2];
                }
              }
              if (options.mimeType && xhr.overrideMimeType) {
                xhr.overrideMimeType(options.mimeType);
              }
              if (!options.crossDomain && !headers["X-Requested-With"]) {
                headers["X-Requested-With"] = "XMLHttpRequest";
              }
              for (i2 in headers) {
                xhr.setRequestHeader(i2, headers[i2]);
              }
              callback = function(type) {
                return function() {
                  if (callback) {
                    callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                    if (type === "abort") {
                      xhr.abort();
                    } else if (type === "error") {
                      if (typeof xhr.status !== "number") {
                        complete(0, "error");
                      } else {
                        complete(
                          // File: protocol always yields status 0; see trac-8605, trac-14207
                          xhr.status,
                          xhr.statusText
                        );
                      }
                    } else {
                      complete(
                        xhrSuccessStatus[xhr.status] || xhr.status,
                        xhr.statusText,
                        // Support: IE <=9 only
                        // IE9 has no XHR2 but throws on binary (trac-11426)
                        // For XHR2 non-text, let the caller handle it (gh-2498)
                        (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText },
                        xhr.getAllResponseHeaders()
                      );
                    }
                  }
                };
              };
              xhr.onload = callback();
              errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
              if (xhr.onabort !== void 0) {
                xhr.onabort = errorCallback;
              } else {
                xhr.onreadystatechange = function() {
                  if (xhr.readyState === 4) {
                    window2.setTimeout(function() {
                      if (callback) {
                        errorCallback();
                      }
                    });
                  }
                };
              }
              callback = callback("abort");
              try {
                xhr.send(options.hasContent && options.data || null);
              } catch (e) {
                if (callback) {
                  throw e;
                }
              }
            },
            abort: function() {
              if (callback) {
                callback();
              }
            }
          };
        }
      });
      jQuery2.ajaxPrefilter(function(s) {
        if (s.crossDomain) {
          s.contents.script = false;
        }
      });
      jQuery2.ajaxSetup({
        accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
          script: /\b(?:java|ecma)script\b/
        },
        converters: {
          "text script": function(text) {
            jQuery2.globalEval(text);
            return text;
          }
        }
      });
      jQuery2.ajaxPrefilter("script", function(s) {
        if (s.cache === void 0) {
          s.cache = false;
        }
        if (s.crossDomain) {
          s.type = "GET";
        }
      });
      jQuery2.ajaxTransport("script", function(s) {
        if (s.crossDomain || s.scriptAttrs) {
          var script, callback;
          return {
            send: function(_, complete) {
              script = jQuery2("<script>").attr(s.scriptAttrs || {}).prop({ charset: s.scriptCharset, src: s.url }).on("load error", callback = function(evt) {
                script.remove();
                callback = null;
                if (evt) {
                  complete(evt.type === "error" ? 404 : 200, evt.type);
                }
              });
              document2.head.appendChild(script[0]);
            },
            abort: function() {
              if (callback) {
                callback();
              }
            }
          };
        }
      });
      var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
      jQuery2.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
          var callback = oldCallbacks.pop() || jQuery2.expando + "_" + nonce.guid++;
          this[callback] = true;
          return callback;
        }
      });
      jQuery2.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
        if (jsonProp || s.dataTypes[0] === "jsonp") {
          callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
          if (jsonProp) {
            s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
          } else if (s.jsonp !== false) {
            s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
          }
          s.converters["script json"] = function() {
            if (!responseContainer) {
              jQuery2.error(callbackName + " was not called");
            }
            return responseContainer[0];
          };
          s.dataTypes[0] = "json";
          overwritten = window2[callbackName];
          window2[callbackName] = function() {
            responseContainer = arguments;
          };
          jqXHR.always(function() {
            if (overwritten === void 0) {
              jQuery2(window2).removeProp(callbackName);
            } else {
              window2[callbackName] = overwritten;
            }
            if (s[callbackName]) {
              s.jsonpCallback = originalSettings.jsonpCallback;
              oldCallbacks.push(callbackName);
            }
            if (responseContainer && isFunction(overwritten)) {
              overwritten(responseContainer[0]);
            }
            responseContainer = overwritten = void 0;
          });
          return "script";
        }
      });
      support.createHTMLDocument = function() {
        var body = document2.implementation.createHTMLDocument("").body;
        body.innerHTML = "<form></form><form></form>";
        return body.childNodes.length === 2;
      }();
      jQuery2.parseHTML = function(data, context, keepScripts) {
        if (typeof data !== "string") {
          return [];
        }
        if (typeof context === "boolean") {
          keepScripts = context;
          context = false;
        }
        var base, parsed, scripts;
        if (!context) {
          if (support.createHTMLDocument) {
            context = document2.implementation.createHTMLDocument("");
            base = context.createElement("base");
            base.href = document2.location.href;
            context.head.appendChild(base);
          } else {
            context = document2;
          }
        }
        parsed = rsingleTag.exec(data);
        scripts = !keepScripts && [];
        if (parsed) {
          return [context.createElement(parsed[1])];
        }
        parsed = buildFragment([data], context, scripts);
        if (scripts && scripts.length) {
          jQuery2(scripts).remove();
        }
        return jQuery2.merge([], parsed.childNodes);
      };
      jQuery2.fn.load = function(url, params, callback) {
        var selector, type, response, self = this, off = url.indexOf(" ");
        if (off > -1) {
          selector = stripAndCollapse(url.slice(off));
          url = url.slice(0, off);
        }
        if (isFunction(params)) {
          callback = params;
          params = void 0;
        } else if (params && typeof params === "object") {
          type = "POST";
        }
        if (self.length > 0) {
          jQuery2.ajax({
            url,
            // If "type" variable is undefined, then "GET" method will be used.
            // Make value of this field explicit since
            // user can override it through ajaxSetup method
            type: type || "GET",
            dataType: "html",
            data: params
          }).done(function(responseText) {
            response = arguments;
            self.html(selector ? (
              // If a selector was specified, locate the right elements in a dummy div
              // Exclude scripts to avoid IE 'Permission Denied' errors
              jQuery2("<div>").append(jQuery2.parseHTML(responseText)).find(selector)
            ) : (
              // Otherwise use the full result
              responseText
            ));
          }).always(callback && function(jqXHR, status) {
            self.each(function() {
              callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
            });
          });
        }
        return this;
      };
      jQuery2.expr.pseudos.animated = function(elem) {
        return jQuery2.grep(jQuery2.timers, function(fn2) {
          return elem === fn2.elem;
        }).length;
      };
      jQuery2.offset = {
        setOffset: function(elem, options, i2) {
          var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery2.css(elem, "position"), curElem = jQuery2(elem), props = {};
          if (position === "static") {
            elem.style.position = "relative";
          }
          curOffset = curElem.offset();
          curCSSTop = jQuery2.css(elem, "top");
          curCSSLeft = jQuery2.css(elem, "left");
          calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
          if (calculatePosition) {
            curPosition = curElem.position();
            curTop = curPosition.top;
            curLeft = curPosition.left;
          } else {
            curTop = parseFloat(curCSSTop) || 0;
            curLeft = parseFloat(curCSSLeft) || 0;
          }
          if (isFunction(options)) {
            options = options.call(elem, i2, jQuery2.extend({}, curOffset));
          }
          if (options.top != null) {
            props.top = options.top - curOffset.top + curTop;
          }
          if (options.left != null) {
            props.left = options.left - curOffset.left + curLeft;
          }
          if ("using" in options) {
            options.using.call(elem, props);
          } else {
            curElem.css(props);
          }
        }
      };
      jQuery2.fn.extend({
        // offset() relates an element's border box to the document origin
        offset: function(options) {
          if (arguments.length) {
            return options === void 0 ? this : this.each(function(i2) {
              jQuery2.offset.setOffset(this, options, i2);
            });
          }
          var rect, win, elem = this[0];
          if (!elem) {
            return;
          }
          if (!elem.getClientRects().length) {
            return { top: 0, left: 0 };
          }
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
          if (!this[0]) {
            return;
          }
          var offsetParent, offset2, doc, elem = this[0], parentOffset = { top: 0, left: 0 };
          if (jQuery2.css(elem, "position") === "fixed") {
            offset2 = elem.getBoundingClientRect();
          } else {
            offset2 = this.offset();
            doc = elem.ownerDocument;
            offsetParent = elem.offsetParent || doc.documentElement;
            while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery2.css(offsetParent, "position") === "static") {
              offsetParent = offsetParent.parentNode;
            }
            if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
              parentOffset = jQuery2(offsetParent).offset();
              parentOffset.top += jQuery2.css(offsetParent, "borderTopWidth", true);
              parentOffset.left += jQuery2.css(offsetParent, "borderLeftWidth", true);
            }
          }
          return {
            top: offset2.top - parentOffset.top - jQuery2.css(elem, "marginTop", true),
            left: offset2.left - parentOffset.left - jQuery2.css(elem, "marginLeft", true)
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
          return this.map(function() {
            var offsetParent = this.offsetParent;
            while (offsetParent && jQuery2.css(offsetParent, "position") === "static") {
              offsetParent = offsetParent.offsetParent;
            }
            return offsetParent || documentElement;
          });
        }
      });
      jQuery2.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
        var top2 = "pageYOffset" === prop;
        jQuery2.fn[method] = function(val) {
          return access(this, function(elem, method2, val2) {
            var win;
            if (isWindow(elem)) {
              win = elem;
            } else if (elem.nodeType === 9) {
              win = elem.defaultView;
            }
            if (val2 === void 0) {
              return win ? win[prop] : elem[method2];
            }
            if (win) {
              win.scrollTo(
                !top2 ? val2 : win.pageXOffset,
                top2 ? val2 : win.pageYOffset
              );
            } else {
              elem[method2] = val2;
            }
          }, method, val, arguments.length);
        };
      });
      jQuery2.each(["top", "left"], function(_i, prop) {
        jQuery2.cssHooks[prop] = addGetHookIf(
          support.pixelPosition,
          function(elem, computed) {
            if (computed) {
              computed = curCSS(elem, prop);
              return rnumnonpx.test(computed) ? jQuery2(elem).position()[prop] + "px" : computed;
            }
          }
        );
      });
      jQuery2.each({ Height: "height", Width: "width" }, function(name, type) {
        jQuery2.each({
          padding: "inner" + name,
          content: type,
          "": "outer" + name
        }, function(defaultExtra, funcName) {
          jQuery2.fn[funcName] = function(margin, value) {
            var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
            return access(this, function(elem, type2, value2) {
              var doc;
              if (isWindow(elem)) {
                return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
              }
              if (elem.nodeType === 9) {
                doc = elem.documentElement;
                return Math.max(
                  elem.body["scroll" + name],
                  doc["scroll" + name],
                  elem.body["offset" + name],
                  doc["offset" + name],
                  doc["client" + name]
                );
              }
              return value2 === void 0 ? (
                // Get width or height on the element, requesting but not forcing parseFloat
                jQuery2.css(elem, type2, extra)
              ) : (
                // Set width or height on the element
                jQuery2.style(elem, type2, value2, extra)
              );
            }, type, chainable ? margin : void 0, chainable);
          };
        });
      });
      jQuery2.each([
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
      ], function(_i, type) {
        jQuery2.fn[type] = function(fn2) {
          return this.on(type, fn2);
        };
      });
      jQuery2.fn.extend({
        bind: function(types, data, fn2) {
          return this.on(types, null, data, fn2);
        },
        unbind: function(types, fn2) {
          return this.off(types, null, fn2);
        },
        delegate: function(selector, types, data, fn2) {
          return this.on(types, selector, data, fn2);
        },
        undelegate: function(selector, types, fn2) {
          return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn2);
        },
        hover: function(fnOver, fnOut) {
          return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
        }
      });
      jQuery2.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
        function(_i, name) {
          jQuery2.fn[name] = function(data, fn2) {
            return arguments.length > 0 ? this.on(name, null, data, fn2) : this.trigger(name);
          };
        }
      );
      var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
      jQuery2.proxy = function(fn2, context) {
        var tmp, args, proxy;
        if (typeof context === "string") {
          tmp = fn2[context];
          context = fn2;
          fn2 = tmp;
        }
        if (!isFunction(fn2)) {
          return void 0;
        }
        args = slice.call(arguments, 2);
        proxy = function() {
          return fn2.apply(context || this, args.concat(slice.call(arguments)));
        };
        proxy.guid = fn2.guid = fn2.guid || jQuery2.guid++;
        return proxy;
      };
      jQuery2.holdReady = function(hold) {
        if (hold) {
          jQuery2.readyWait++;
        } else {
          jQuery2.ready(true);
        }
      };
      jQuery2.isArray = Array.isArray;
      jQuery2.parseJSON = JSON.parse;
      jQuery2.nodeName = nodeName;
      jQuery2.isFunction = isFunction;
      jQuery2.isWindow = isWindow;
      jQuery2.camelCase = camelCase;
      jQuery2.type = toType2;
      jQuery2.now = Date.now;
      jQuery2.isNumeric = function(obj) {
        var type = jQuery2.type(obj);
        return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
        // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
        // subtraction forces infinities to NaN
        !isNaN(obj - parseFloat(obj));
      };
      jQuery2.trim = function(text) {
        return text == null ? "" : (text + "").replace(rtrim, "$1");
      };
      if (typeof define === "function" && define.amd) {
        define("jquery", [], function() {
          return jQuery2;
        });
      }
      var _jQuery = window2.jQuery, _$ = window2.$;
      jQuery2.noConflict = function(deep) {
        if (window2.$ === jQuery2) {
          window2.$ = _$;
        }
        if (deep && window2.jQuery === jQuery2) {
          window2.jQuery = _jQuery;
        }
        return jQuery2;
      };
      if (typeof noGlobal === "undefined") {
        window2.jQuery = window2.$ = jQuery2;
      }
      return jQuery2;
    });
  }
});

// node_modules/laravel-datatables-vite/js/index.js
var import_jquery7 = __toESM(require_jquery());

// node_modules/bootstrap/dist/js/bootstrap.esm.js
var bootstrap_esm_exports = {};
__export(bootstrap_esm_exports, {
  Alert: () => Alert,
  Button: () => Button,
  Carousel: () => Carousel,
  Collapse: () => Collapse,
  Dropdown: () => Dropdown,
  Modal: () => Modal,
  Offcanvas: () => Offcanvas,
  Popover: () => Popover,
  ScrollSpy: () => ScrollSpy,
  Tab: () => Tab,
  Toast: () => Toast,
  Tooltip: () => Tooltip
});

// node_modules/@popperjs/core/lib/index.js
var lib_exports = {};
__export(lib_exports, {
  afterMain: () => afterMain,
  afterRead: () => afterRead,
  afterWrite: () => afterWrite,
  applyStyles: () => applyStyles_default,
  arrow: () => arrow_default,
  auto: () => auto,
  basePlacements: () => basePlacements,
  beforeMain: () => beforeMain,
  beforeRead: () => beforeRead,
  beforeWrite: () => beforeWrite,
  bottom: () => bottom,
  clippingParents: () => clippingParents,
  computeStyles: () => computeStyles_default,
  createPopper: () => createPopper3,
  createPopperBase: () => createPopper,
  createPopperLite: () => createPopper2,
  detectOverflow: () => detectOverflow,
  end: () => end,
  eventListeners: () => eventListeners_default,
  flip: () => flip_default,
  hide: () => hide_default,
  left: () => left,
  main: () => main,
  modifierPhases: () => modifierPhases,
  offset: () => offset_default,
  placements: () => placements,
  popper: () => popper,
  popperGenerator: () => popperGenerator,
  popperOffsets: () => popperOffsets_default,
  preventOverflow: () => preventOverflow_default,
  read: () => read,
  reference: () => reference,
  right: () => right,
  start: () => start,
  top: () => top,
  variationPlacements: () => variationPlacements,
  viewport: () => viewport,
  write: () => write
});

// node_modules/@popperjs/core/lib/enums.js
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

// node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}

// node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}

// node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles_default = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect,
  requires: ["computeStyles"]
};

// node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function getBasePlacement(placement) {
  return placement.split("-")[0];
}

// node_modules/@popperjs/core/lib/utils/math.js
var max = Math.max;
var min = Math.min;
var round = Math.round;

// node_modules/@popperjs/core/lib/utils/userAgent.js
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}

// node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

// node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}

// node_modules/@popperjs/core/lib/dom-utils/contains.js
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}

// node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}

// node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}

// node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}

// node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle2(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle2(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle2(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}

// node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}

// node_modules/@popperjs/core/lib/utils/within.js
function within(min2, value, max2) {
  return max(min2, min(value, max2));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}

// node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

// node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

// node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

// node_modules/@popperjs/core/lib/modifiers/arrow.js
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect2(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (true) {
    if (!isHTMLElement(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "));
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    if (true) {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
    }
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow_default = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect2,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};

// node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split("-")[1];
}

// node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x, y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle2(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }, getWindow(popper2)) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  if (true) {
    var transitionProperty = getComputedStyle2(state.elements.popper).transitionProperty || "";
    if (adaptive && ["transform", "top", "right", "bottom", "left"].some(function(property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', "\n\n", 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", "\n\n", "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
    }
  }
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles_default = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};

// node_modules/@popperjs/core/lib/modifiers/eventListeners.js
var passive = {
  passive: true
};
function effect3(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners_default = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect3,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}

// node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var hash2 = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash2[matched];
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

// node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle2(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle2(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

// node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}

// node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}

// node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle2(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

// node_modules/@popperjs/core/lib/utils/computeOffsets.js
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}

// node_modules/@popperjs/core/lib/utils/detectOverflow.js
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}

// node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements2.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements2;
    if (true) {
      console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" "));
    }
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}

// node_modules/@popperjs/core/lib/modifiers/flip.js
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i2 = 0; i2 < placements2.length; i2++) {
    var placement = placements2[i2];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip_default = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};

// node_modules/@popperjs/core/lib/modifiers/hide.js
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide_default = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};

// node_modules/@popperjs/core/lib/modifiers/offset.js
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
var offset_default = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};

// node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets_default = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}

// node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min2 = offset2 + overflow[mainSide];
    var max2 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow_default = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};

// node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

// node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// node_modules/@popperjs/core/lib/utils/orderModifiers.js
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

// node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}

// node_modules/@popperjs/core/lib/utils/format.js
function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return [].concat(args).reduce(function(p, c) {
    return p.replace(/%s/, c);
  }, str);
}

// node_modules/@popperjs/core/lib/utils/validateModifiers.js
var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function validateModifiers(modifiers) {
  modifiers.forEach(function(modifier) {
    [].concat(Object.keys(modifier), VALID_PROPERTIES).filter(function(value, index, self) {
      return self.indexOf(value) === index;
    }).forEach(function(key) {
      switch (key) {
        case "name":
          if (typeof modifier.name !== "string") {
            console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', '"' + String(modifier.name) + '"'));
          }
          break;
        case "enabled":
          if (typeof modifier.enabled !== "boolean") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', '"' + String(modifier.enabled) + '"'));
          }
          break;
        case "phase":
          if (modifierPhases.indexOf(modifier.phase) < 0) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(", "), '"' + String(modifier.phase) + '"'));
          }
          break;
        case "fn":
          if (typeof modifier.fn !== "function") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', '"' + String(modifier.fn) + '"'));
          }
          break;
        case "effect":
          if (modifier.effect != null && typeof modifier.effect !== "function") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', '"' + String(modifier.fn) + '"'));
          }
          break;
        case "requires":
          if (modifier.requires != null && !Array.isArray(modifier.requires)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', '"' + String(modifier.requires) + '"'));
          }
          break;
        case "requiresIfExists":
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', '"' + String(modifier.requiresIfExists) + '"'));
          }
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + modifier.name + '" modifier, valid properties are ' + VALID_PROPERTIES.map(function(s) {
            return '"' + s + '"';
          }).join(", ") + '; but "' + key + '" was provided.');
      }
      modifier.requires && modifier.requires.forEach(function(requirement) {
        if (modifiers.find(function(mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

// node_modules/@popperjs/core/lib/utils/uniqueBy.js
function uniqueBy(arr, fn2) {
  var identifiers = /* @__PURE__ */ new Set();
  return arr.filter(function(item) {
    var identifier = fn2(item);
    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

// node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}

// node_modules/@popperjs/core/lib/createPopper.js
var INVALID_ELEMENT_ERROR = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.";
var INFINITE_LOOP_ERROR = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.";
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers3 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper4(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers3, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        if (true) {
          var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function(_ref) {
            var name = _ref.name;
            return name;
          });
          validateModifiers(modifiers);
          if (getBasePlacement(state.options.placement) === auto) {
            var flipModifier = state.orderedModifiers.find(function(_ref2) {
              var name = _ref2.name;
              return name === "flip";
            });
            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
            }
          }
          var _getComputedStyle = getComputedStyle2(popper2), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft;
          if ([marginTop, marginRight, marginBottom, marginLeft].some(function(margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
          }
        }
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          if (true) {
            console.error(INVALID_ELEMENT_ERROR);
          }
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (true) {
            __debug_loops__ += 1;
            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      if (true) {
        console.error(INVALID_ELEMENT_ERROR);
      }
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref3) {
        var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect4 = _ref3.effect;
        if (typeof effect4 === "function") {
          var cleanupFn = effect4({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var createPopper = popperGenerator();

// node_modules/@popperjs/core/lib/popper-lite.js
var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default];
var createPopper2 = popperGenerator({
  defaultModifiers
});

// node_modules/@popperjs/core/lib/popper.js
var defaultModifiers2 = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
var createPopper3 = popperGenerator({
  defaultModifiers: defaultModifiers2
});

// node_modules/bootstrap/dist/js/bootstrap.esm.js
var MAX_UID = 1e6;
var MILLISECONDS_MULTIPLIER = 1e3;
var TRANSITION_END = "transitionend";
var toType = (object) => {
  if (object === null || object === void 0) {
    return `${object}`;
  }
  return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
};
var getUID = (prefix) => {
  do {
    prefix += Math.floor(Math.random() * MAX_UID);
  } while (document.getElementById(prefix));
  return prefix;
};
var getSelector = (element) => {
  let selector = element.getAttribute("data-bs-target");
  if (!selector || selector === "#") {
    let hrefAttribute = element.getAttribute("href");
    if (!hrefAttribute || !hrefAttribute.includes("#") && !hrefAttribute.startsWith(".")) {
      return null;
    }
    if (hrefAttribute.includes("#") && !hrefAttribute.startsWith("#")) {
      hrefAttribute = `#${hrefAttribute.split("#")[1]}`;
    }
    selector = hrefAttribute && hrefAttribute !== "#" ? hrefAttribute.trim() : null;
  }
  return selector;
};
var getSelectorFromElement = (element) => {
  const selector = getSelector(element);
  if (selector) {
    return document.querySelector(selector) ? selector : null;
  }
  return null;
};
var getElementFromSelector = (element) => {
  const selector = getSelector(element);
  return selector ? document.querySelector(selector) : null;
};
var getTransitionDurationFromElement = (element) => {
  if (!element) {
    return 0;
  }
  let {
    transitionDuration,
    transitionDelay
  } = window.getComputedStyle(element);
  const floatTransitionDuration = Number.parseFloat(transitionDuration);
  const floatTransitionDelay = Number.parseFloat(transitionDelay);
  if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0;
  }
  transitionDuration = transitionDuration.split(",")[0];
  transitionDelay = transitionDelay.split(",")[0];
  return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
};
var triggerTransitionEnd = (element) => {
  element.dispatchEvent(new Event(TRANSITION_END));
};
var isElement2 = (object) => {
  if (!object || typeof object !== "object") {
    return false;
  }
  if (typeof object.jquery !== "undefined") {
    object = object[0];
  }
  return typeof object.nodeType !== "undefined";
};
var getElement = (object) => {
  if (isElement2(object)) {
    return object.jquery ? object[0] : object;
  }
  if (typeof object === "string" && object.length > 0) {
    return document.querySelector(object);
  }
  return null;
};
var isVisible = (element) => {
  if (!isElement2(element) || element.getClientRects().length === 0) {
    return false;
  }
  const elementIsVisible = getComputedStyle(element).getPropertyValue("visibility") === "visible";
  const closedDetails = element.closest("details:not([open])");
  if (!closedDetails) {
    return elementIsVisible;
  }
  if (closedDetails !== element) {
    const summary = element.closest("summary");
    if (summary && summary.parentNode !== closedDetails) {
      return false;
    }
    if (summary === null) {
      return false;
    }
  }
  return elementIsVisible;
};
var isDisabled = (element) => {
  if (!element || element.nodeType !== Node.ELEMENT_NODE) {
    return true;
  }
  if (element.classList.contains("disabled")) {
    return true;
  }
  if (typeof element.disabled !== "undefined") {
    return element.disabled;
  }
  return element.hasAttribute("disabled") && element.getAttribute("disabled") !== "false";
};
var findShadowRoot = (element) => {
  if (!document.documentElement.attachShadow) {
    return null;
  }
  if (typeof element.getRootNode === "function") {
    const root = element.getRootNode();
    return root instanceof ShadowRoot ? root : null;
  }
  if (element instanceof ShadowRoot) {
    return element;
  }
  if (!element.parentNode) {
    return null;
  }
  return findShadowRoot(element.parentNode);
};
var noop = () => {
};
var reflow = (element) => {
  element.offsetHeight;
};
var getjQuery = () => {
  if (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")) {
    return window.jQuery;
  }
  return null;
};
var DOMContentLoadedCallbacks = [];
var onDOMContentLoaded = (callback) => {
  if (document.readyState === "loading") {
    if (!DOMContentLoadedCallbacks.length) {
      document.addEventListener("DOMContentLoaded", () => {
        for (const callback2 of DOMContentLoadedCallbacks) {
          callback2();
        }
      });
    }
    DOMContentLoadedCallbacks.push(callback);
  } else {
    callback();
  }
};
var isRTL = () => document.documentElement.dir === "rtl";
var defineJQueryPlugin = (plugin) => {
  onDOMContentLoaded(() => {
    const $9 = getjQuery();
    if ($9) {
      const name = plugin.NAME;
      const JQUERY_NO_CONFLICT = $9.fn[name];
      $9.fn[name] = plugin.jQueryInterface;
      $9.fn[name].Constructor = plugin;
      $9.fn[name].noConflict = () => {
        $9.fn[name] = JQUERY_NO_CONFLICT;
        return plugin.jQueryInterface;
      };
    }
  });
};
var execute = (callback) => {
  if (typeof callback === "function") {
    callback();
  }
};
var executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
  if (!waitForTransition) {
    execute(callback);
    return;
  }
  const durationPadding = 5;
  const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
  let called = false;
  const handler = ({
    target
  }) => {
    if (target !== transitionElement) {
      return;
    }
    called = true;
    transitionElement.removeEventListener(TRANSITION_END, handler);
    execute(callback);
  };
  transitionElement.addEventListener(TRANSITION_END, handler);
  setTimeout(() => {
    if (!called) {
      triggerTransitionEnd(transitionElement);
    }
  }, emulatedDuration);
};
var getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
  const listLength = list.length;
  let index = list.indexOf(activeElement);
  if (index === -1) {
    return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
  }
  index += shouldGetNext ? 1 : -1;
  if (isCycleAllowed) {
    index = (index + listLength) % listLength;
  }
  return list[Math.max(0, Math.min(index, listLength - 1))];
};
var namespaceRegex = /[^.]*(?=\..*)\.|.*/;
var stripNameRegex = /\..*/;
var stripUidRegex = /::\d+$/;
var eventRegistry = {};
var uidEvent = 1;
var customEvents = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
};
var nativeEvents = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
function makeEventUid(element, uid) {
  return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
}
function getElementEvents(element) {
  const uid = makeEventUid(element);
  element.uidEvent = uid;
  eventRegistry[uid] = eventRegistry[uid] || {};
  return eventRegistry[uid];
}
function bootstrapHandler(element, fn2) {
  return function handler(event) {
    hydrateObj(event, {
      delegateTarget: element
    });
    if (handler.oneOff) {
      EventHandler.off(element, event.type, fn2);
    }
    return fn2.apply(element, [event]);
  };
}
function bootstrapDelegationHandler(element, selector, fn2) {
  return function handler(event) {
    const domElements = element.querySelectorAll(selector);
    for (let {
      target
    } = event; target && target !== this; target = target.parentNode) {
      for (const domElement of domElements) {
        if (domElement !== target) {
          continue;
        }
        hydrateObj(event, {
          delegateTarget: target
        });
        if (handler.oneOff) {
          EventHandler.off(element, event.type, selector, fn2);
        }
        return fn2.apply(target, [event]);
      }
    }
  };
}
function findHandler(events, callable, delegationSelector = null) {
  return Object.values(events).find((event) => event.callable === callable && event.delegationSelector === delegationSelector);
}
function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
  const isDelegated = typeof handler === "string";
  const callable = isDelegated ? delegationFunction : handler || delegationFunction;
  let typeEvent = getTypeEvent(originalTypeEvent);
  if (!nativeEvents.has(typeEvent)) {
    typeEvent = originalTypeEvent;
  }
  return [isDelegated, callable, typeEvent];
}
function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
  if (typeof originalTypeEvent !== "string" || !element) {
    return;
  }
  let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
  if (originalTypeEvent in customEvents) {
    const wrapFunction = (fn3) => {
      return function(event) {
        if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
          return fn3.call(this, event);
        }
      };
    };
    callable = wrapFunction(callable);
  }
  const events = getElementEvents(element);
  const handlers = events[typeEvent] || (events[typeEvent] = {});
  const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
  if (previousFunction) {
    previousFunction.oneOff = previousFunction.oneOff && oneOff;
    return;
  }
  const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ""));
  const fn2 = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
  fn2.delegationSelector = isDelegated ? handler : null;
  fn2.callable = callable;
  fn2.oneOff = oneOff;
  fn2.uidEvent = uid;
  handlers[uid] = fn2;
  element.addEventListener(typeEvent, fn2, isDelegated);
}
function removeHandler(element, events, typeEvent, handler, delegationSelector) {
  const fn2 = findHandler(events[typeEvent], handler, delegationSelector);
  if (!fn2) {
    return;
  }
  element.removeEventListener(typeEvent, fn2, Boolean(delegationSelector));
  delete events[typeEvent][fn2.uidEvent];
}
function removeNamespacedHandlers(element, events, typeEvent, namespace) {
  const storeElementEvent = events[typeEvent] || {};
  for (const handlerKey of Object.keys(storeElementEvent)) {
    if (handlerKey.includes(namespace)) {
      const event = storeElementEvent[handlerKey];
      removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
    }
  }
}
function getTypeEvent(event) {
  event = event.replace(stripNameRegex, "");
  return customEvents[event] || event;
}
var EventHandler = {
  on(element, event, handler, delegationFunction) {
    addHandler(element, event, handler, delegationFunction, false);
  },
  one(element, event, handler, delegationFunction) {
    addHandler(element, event, handler, delegationFunction, true);
  },
  off(element, originalTypeEvent, handler, delegationFunction) {
    if (typeof originalTypeEvent !== "string" || !element) {
      return;
    }
    const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
    const inNamespace = typeEvent !== originalTypeEvent;
    const events = getElementEvents(element);
    const storeElementEvent = events[typeEvent] || {};
    const isNamespace = originalTypeEvent.startsWith(".");
    if (typeof callable !== "undefined") {
      if (!Object.keys(storeElementEvent).length) {
        return;
      }
      removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
      return;
    }
    if (isNamespace) {
      for (const elementEvent of Object.keys(events)) {
        removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
      }
    }
    for (const keyHandlers of Object.keys(storeElementEvent)) {
      const handlerKey = keyHandlers.replace(stripUidRegex, "");
      if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
        const event = storeElementEvent[keyHandlers];
        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
      }
    }
  },
  trigger(element, event, args) {
    if (typeof event !== "string" || !element) {
      return null;
    }
    const $9 = getjQuery();
    const typeEvent = getTypeEvent(event);
    const inNamespace = event !== typeEvent;
    let jQueryEvent = null;
    let bubbles = true;
    let nativeDispatch = true;
    let defaultPrevented = false;
    if (inNamespace && $9) {
      jQueryEvent = $9.Event(event, args);
      $9(element).trigger(jQueryEvent);
      bubbles = !jQueryEvent.isPropagationStopped();
      nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
      defaultPrevented = jQueryEvent.isDefaultPrevented();
    }
    let evt = new Event(event, {
      bubbles,
      cancelable: true
    });
    evt = hydrateObj(evt, args);
    if (defaultPrevented) {
      evt.preventDefault();
    }
    if (nativeDispatch) {
      element.dispatchEvent(evt);
    }
    if (evt.defaultPrevented && jQueryEvent) {
      jQueryEvent.preventDefault();
    }
    return evt;
  }
};
function hydrateObj(obj, meta) {
  for (const [key, value] of Object.entries(meta || {})) {
    try {
      obj[key] = value;
    } catch (_unused) {
      Object.defineProperty(obj, key, {
        configurable: true,
        get() {
          return value;
        }
      });
    }
  }
  return obj;
}
var elementMap = /* @__PURE__ */ new Map();
var Data = {
  set(element, key, instance) {
    if (!elementMap.has(element)) {
      elementMap.set(element, /* @__PURE__ */ new Map());
    }
    const instanceMap = elementMap.get(element);
    if (!instanceMap.has(key) && instanceMap.size !== 0) {
      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
      return;
    }
    instanceMap.set(key, instance);
  },
  get(element, key) {
    if (elementMap.has(element)) {
      return elementMap.get(element).get(key) || null;
    }
    return null;
  },
  remove(element, key) {
    if (!elementMap.has(element)) {
      return;
    }
    const instanceMap = elementMap.get(element);
    instanceMap.delete(key);
    if (instanceMap.size === 0) {
      elementMap.delete(element);
    }
  }
};
function normalizeData(value) {
  if (value === "true") {
    return true;
  }
  if (value === "false") {
    return false;
  }
  if (value === Number(value).toString()) {
    return Number(value);
  }
  if (value === "" || value === "null") {
    return null;
  }
  if (typeof value !== "string") {
    return value;
  }
  try {
    return JSON.parse(decodeURIComponent(value));
  } catch (_unused) {
    return value;
  }
}
function normalizeDataKey(key) {
  return key.replace(/[A-Z]/g, (chr) => `-${chr.toLowerCase()}`);
}
var Manipulator = {
  setDataAttribute(element, key, value) {
    element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
  },
  removeDataAttribute(element, key) {
    element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
  },
  getDataAttributes(element) {
    if (!element) {
      return {};
    }
    const attributes = {};
    const bsKeys = Object.keys(element.dataset).filter((key) => key.startsWith("bs") && !key.startsWith("bsConfig"));
    for (const key of bsKeys) {
      let pureKey = key.replace(/^bs/, "");
      pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
      attributes[pureKey] = normalizeData(element.dataset[key]);
    }
    return attributes;
  },
  getDataAttribute(element, key) {
    return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
  }
};
var Config = class {
  // Getters
  static get Default() {
    return {};
  }
  static get DefaultType() {
    return {};
  }
  static get NAME() {
    throw new Error('You have to implement the static method "NAME", for each component!');
  }
  _getConfig(config) {
    config = this._mergeConfigObj(config);
    config = this._configAfterMerge(config);
    this._typeCheckConfig(config);
    return config;
  }
  _configAfterMerge(config) {
    return config;
  }
  _mergeConfigObj(config, element) {
    const jsonConfig = isElement2(element) ? Manipulator.getDataAttribute(element, "config") : {};
    return {
      ...this.constructor.Default,
      ...typeof jsonConfig === "object" ? jsonConfig : {},
      ...isElement2(element) ? Manipulator.getDataAttributes(element) : {},
      ...typeof config === "object" ? config : {}
    };
  }
  _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
    for (const property of Object.keys(configTypes)) {
      const expectedTypes = configTypes[property];
      const value = config[property];
      const valueType = isElement2(value) ? "element" : toType(value);
      if (!new RegExp(expectedTypes).test(valueType)) {
        throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
      }
    }
  }
};
var VERSION = "5.2.3";
var BaseComponent = class extends Config {
  constructor(element, config) {
    super();
    element = getElement(element);
    if (!element) {
      return;
    }
    this._element = element;
    this._config = this._getConfig(config);
    Data.set(this._element, this.constructor.DATA_KEY, this);
  }
  // Public
  dispose() {
    Data.remove(this._element, this.constructor.DATA_KEY);
    EventHandler.off(this._element, this.constructor.EVENT_KEY);
    for (const propertyName of Object.getOwnPropertyNames(this)) {
      this[propertyName] = null;
    }
  }
  _queueCallback(callback, element, isAnimated = true) {
    executeAfterTransition(callback, element, isAnimated);
  }
  _getConfig(config) {
    config = this._mergeConfigObj(config, this._element);
    config = this._configAfterMerge(config);
    this._typeCheckConfig(config);
    return config;
  }
  // Static
  static getInstance(element) {
    return Data.get(getElement(element), this.DATA_KEY);
  }
  static getOrCreateInstance(element, config = {}) {
    return this.getInstance(element) || new this(element, typeof config === "object" ? config : null);
  }
  static get VERSION() {
    return VERSION;
  }
  static get DATA_KEY() {
    return `bs.${this.NAME}`;
  }
  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`;
  }
  static eventName(name) {
    return `${name}${this.EVENT_KEY}`;
  }
};
var enableDismissTrigger = (component, method = "hide") => {
  const clickEvent = `click.dismiss${component.EVENT_KEY}`;
  const name = component.NAME;
  EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function(event) {
    if (["A", "AREA"].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    const target = getElementFromSelector(this) || this.closest(`.${name}`);
    const instance = component.getOrCreateInstance(target);
    instance[method]();
  });
};
var NAME$f = "alert";
var DATA_KEY$a = "bs.alert";
var EVENT_KEY$b = `.${DATA_KEY$a}`;
var EVENT_CLOSE = `close${EVENT_KEY$b}`;
var EVENT_CLOSED = `closed${EVENT_KEY$b}`;
var CLASS_NAME_FADE$5 = "fade";
var CLASS_NAME_SHOW$8 = "show";
var Alert = class extends BaseComponent {
  // Getters
  static get NAME() {
    return NAME$f;
  }
  // Public
  close() {
    const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);
    if (closeEvent.defaultPrevented) {
      return;
    }
    this._element.classList.remove(CLASS_NAME_SHOW$8);
    const isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);
    this._queueCallback(() => this._destroyElement(), this._element, isAnimated);
  }
  // Private
  _destroyElement() {
    this._element.remove();
    EventHandler.trigger(this._element, EVENT_CLOSED);
    this.dispose();
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = Alert.getOrCreateInstance(this);
      if (typeof config !== "string") {
        return;
      }
      if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config](this);
    });
  }
};
enableDismissTrigger(Alert, "close");
defineJQueryPlugin(Alert);
var NAME$e = "button";
var DATA_KEY$9 = "bs.button";
var EVENT_KEY$a = `.${DATA_KEY$9}`;
var DATA_API_KEY$6 = ".data-api";
var CLASS_NAME_ACTIVE$3 = "active";
var SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
var EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$a}${DATA_API_KEY$6}`;
var Button = class extends BaseComponent {
  // Getters
  static get NAME() {
    return NAME$e;
  }
  // Public
  toggle() {
    this._element.setAttribute("aria-pressed", this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = Button.getOrCreateInstance(this);
      if (config === "toggle") {
        data[config]();
      }
    });
  }
};
EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, (event) => {
  event.preventDefault();
  const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
  const data = Button.getOrCreateInstance(button);
  data.toggle();
});
defineJQueryPlugin(Button);
var SelectorEngine = {
  find(selector, element = document.documentElement) {
    return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
  },
  findOne(selector, element = document.documentElement) {
    return Element.prototype.querySelector.call(element, selector);
  },
  children(element, selector) {
    return [].concat(...element.children).filter((child) => child.matches(selector));
  },
  parents(element, selector) {
    const parents = [];
    let ancestor = element.parentNode.closest(selector);
    while (ancestor) {
      parents.push(ancestor);
      ancestor = ancestor.parentNode.closest(selector);
    }
    return parents;
  },
  prev(element, selector) {
    let previous = element.previousElementSibling;
    while (previous) {
      if (previous.matches(selector)) {
        return [previous];
      }
      previous = previous.previousElementSibling;
    }
    return [];
  },
  // TODO: this is now unused; remove later along with prev()
  next(element, selector) {
    let next = element.nextElementSibling;
    while (next) {
      if (next.matches(selector)) {
        return [next];
      }
      next = next.nextElementSibling;
    }
    return [];
  },
  focusableChildren(element) {
    const focusables = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((selector) => `${selector}:not([tabindex^="-"])`).join(",");
    return this.find(focusables, element).filter((el) => !isDisabled(el) && isVisible(el));
  }
};
var NAME$d = "swipe";
var EVENT_KEY$9 = ".bs.swipe";
var EVENT_TOUCHSTART = `touchstart${EVENT_KEY$9}`;
var EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$9}`;
var EVENT_TOUCHEND = `touchend${EVENT_KEY$9}`;
var EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$9}`;
var EVENT_POINTERUP = `pointerup${EVENT_KEY$9}`;
var POINTER_TYPE_TOUCH = "touch";
var POINTER_TYPE_PEN = "pen";
var CLASS_NAME_POINTER_EVENT = "pointer-event";
var SWIPE_THRESHOLD = 40;
var Default$c = {
  endCallback: null,
  leftCallback: null,
  rightCallback: null
};
var DefaultType$c = {
  endCallback: "(function|null)",
  leftCallback: "(function|null)",
  rightCallback: "(function|null)"
};
var Swipe = class extends Config {
  constructor(element, config) {
    super();
    this._element = element;
    if (!element || !Swipe.isSupported()) {
      return;
    }
    this._config = this._getConfig(config);
    this._deltaX = 0;
    this._supportPointerEvents = Boolean(window.PointerEvent);
    this._initEvents();
  }
  // Getters
  static get Default() {
    return Default$c;
  }
  static get DefaultType() {
    return DefaultType$c;
  }
  static get NAME() {
    return NAME$d;
  }
  // Public
  dispose() {
    EventHandler.off(this._element, EVENT_KEY$9);
  }
  // Private
  _start(event) {
    if (!this._supportPointerEvents) {
      this._deltaX = event.touches[0].clientX;
      return;
    }
    if (this._eventIsPointerPenTouch(event)) {
      this._deltaX = event.clientX;
    }
  }
  _end(event) {
    if (this._eventIsPointerPenTouch(event)) {
      this._deltaX = event.clientX - this._deltaX;
    }
    this._handleSwipe();
    execute(this._config.endCallback);
  }
  _move(event) {
    this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
  }
  _handleSwipe() {
    const absDeltaX = Math.abs(this._deltaX);
    if (absDeltaX <= SWIPE_THRESHOLD) {
      return;
    }
    const direction = absDeltaX / this._deltaX;
    this._deltaX = 0;
    if (!direction) {
      return;
    }
    execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
  }
  _initEvents() {
    if (this._supportPointerEvents) {
      EventHandler.on(this._element, EVENT_POINTERDOWN, (event) => this._start(event));
      EventHandler.on(this._element, EVENT_POINTERUP, (event) => this._end(event));
      this._element.classList.add(CLASS_NAME_POINTER_EVENT);
    } else {
      EventHandler.on(this._element, EVENT_TOUCHSTART, (event) => this._start(event));
      EventHandler.on(this._element, EVENT_TOUCHMOVE, (event) => this._move(event));
      EventHandler.on(this._element, EVENT_TOUCHEND, (event) => this._end(event));
    }
  }
  _eventIsPointerPenTouch(event) {
    return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
  }
  // Static
  static isSupported() {
    return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
  }
};
var NAME$c = "carousel";
var DATA_KEY$8 = "bs.carousel";
var EVENT_KEY$8 = `.${DATA_KEY$8}`;
var DATA_API_KEY$5 = ".data-api";
var ARROW_LEFT_KEY$1 = "ArrowLeft";
var ARROW_RIGHT_KEY$1 = "ArrowRight";
var TOUCHEVENT_COMPAT_WAIT = 500;
var ORDER_NEXT = "next";
var ORDER_PREV = "prev";
var DIRECTION_LEFT = "left";
var DIRECTION_RIGHT = "right";
var EVENT_SLIDE = `slide${EVENT_KEY$8}`;
var EVENT_SLID = `slid${EVENT_KEY$8}`;
var EVENT_KEYDOWN$1 = `keydown${EVENT_KEY$8}`;
var EVENT_MOUSEENTER$1 = `mouseenter${EVENT_KEY$8}`;
var EVENT_MOUSELEAVE$1 = `mouseleave${EVENT_KEY$8}`;
var EVENT_DRAG_START = `dragstart${EVENT_KEY$8}`;
var EVENT_LOAD_DATA_API$3 = `load${EVENT_KEY$8}${DATA_API_KEY$5}`;
var EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$8}${DATA_API_KEY$5}`;
var CLASS_NAME_CAROUSEL = "carousel";
var CLASS_NAME_ACTIVE$2 = "active";
var CLASS_NAME_SLIDE = "slide";
var CLASS_NAME_END = "carousel-item-end";
var CLASS_NAME_START = "carousel-item-start";
var CLASS_NAME_NEXT = "carousel-item-next";
var CLASS_NAME_PREV = "carousel-item-prev";
var SELECTOR_ACTIVE = ".active";
var SELECTOR_ITEM = ".carousel-item";
var SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
var SELECTOR_ITEM_IMG = ".carousel-item img";
var SELECTOR_INDICATORS = ".carousel-indicators";
var SELECTOR_DATA_SLIDE = "[data-bs-slide], [data-bs-slide-to]";
var SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
var KEY_TO_DIRECTION = {
  [ARROW_LEFT_KEY$1]: DIRECTION_RIGHT,
  [ARROW_RIGHT_KEY$1]: DIRECTION_LEFT
};
var Default$b = {
  interval: 5e3,
  keyboard: true,
  pause: "hover",
  ride: false,
  touch: true,
  wrap: true
};
var DefaultType$b = {
  interval: "(number|boolean)",
  // TODO:v6 remove boolean support
  keyboard: "boolean",
  pause: "(string|boolean)",
  ride: "(boolean|string)",
  touch: "boolean",
  wrap: "boolean"
};
var Carousel = class extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._interval = null;
    this._activeElement = null;
    this._isSliding = false;
    this.touchTimeout = null;
    this._swipeHelper = null;
    this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);
    this._addEventListeners();
    if (this._config.ride === CLASS_NAME_CAROUSEL) {
      this.cycle();
    }
  }
  // Getters
  static get Default() {
    return Default$b;
  }
  static get DefaultType() {
    return DefaultType$b;
  }
  static get NAME() {
    return NAME$c;
  }
  // Public
  next() {
    this._slide(ORDER_NEXT);
  }
  nextWhenVisible() {
    if (!document.hidden && isVisible(this._element)) {
      this.next();
    }
  }
  prev() {
    this._slide(ORDER_PREV);
  }
  pause() {
    if (this._isSliding) {
      triggerTransitionEnd(this._element);
    }
    this._clearInterval();
  }
  cycle() {
    this._clearInterval();
    this._updateInterval();
    this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
  }
  _maybeEnableCycle() {
    if (!this._config.ride) {
      return;
    }
    if (this._isSliding) {
      EventHandler.one(this._element, EVENT_SLID, () => this.cycle());
      return;
    }
    this.cycle();
  }
  to(index) {
    const items = this._getItems();
    if (index > items.length - 1 || index < 0) {
      return;
    }
    if (this._isSliding) {
      EventHandler.one(this._element, EVENT_SLID, () => this.to(index));
      return;
    }
    const activeIndex = this._getItemIndex(this._getActive());
    if (activeIndex === index) {
      return;
    }
    const order2 = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
    this._slide(order2, items[index]);
  }
  dispose() {
    if (this._swipeHelper) {
      this._swipeHelper.dispose();
    }
    super.dispose();
  }
  // Private
  _configAfterMerge(config) {
    config.defaultInterval = config.interval;
    return config;
  }
  _addEventListeners() {
    if (this._config.keyboard) {
      EventHandler.on(this._element, EVENT_KEYDOWN$1, (event) => this._keydown(event));
    }
    if (this._config.pause === "hover") {
      EventHandler.on(this._element, EVENT_MOUSEENTER$1, () => this.pause());
      EventHandler.on(this._element, EVENT_MOUSELEAVE$1, () => this._maybeEnableCycle());
    }
    if (this._config.touch && Swipe.isSupported()) {
      this._addTouchEventListeners();
    }
  }
  _addTouchEventListeners() {
    for (const img of SelectorEngine.find(SELECTOR_ITEM_IMG, this._element)) {
      EventHandler.on(img, EVENT_DRAG_START, (event) => event.preventDefault());
    }
    const endCallBack = () => {
      if (this._config.pause !== "hover") {
        return;
      }
      this.pause();
      if (this.touchTimeout) {
        clearTimeout(this.touchTimeout);
      }
      this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
    };
    const swipeConfig = {
      leftCallback: () => this._slide(this._directionToOrder(DIRECTION_LEFT)),
      rightCallback: () => this._slide(this._directionToOrder(DIRECTION_RIGHT)),
      endCallback: endCallBack
    };
    this._swipeHelper = new Swipe(this._element, swipeConfig);
  }
  _keydown(event) {
    if (/input|textarea/i.test(event.target.tagName)) {
      return;
    }
    const direction = KEY_TO_DIRECTION[event.key];
    if (direction) {
      event.preventDefault();
      this._slide(this._directionToOrder(direction));
    }
  }
  _getItemIndex(element) {
    return this._getItems().indexOf(element);
  }
  _setActiveIndicatorElement(index) {
    if (!this._indicatorsElement) {
      return;
    }
    const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
    activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
    activeIndicator.removeAttribute("aria-current");
    const newActiveIndicator = SelectorEngine.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);
    if (newActiveIndicator) {
      newActiveIndicator.classList.add(CLASS_NAME_ACTIVE$2);
      newActiveIndicator.setAttribute("aria-current", "true");
    }
  }
  _updateInterval() {
    const element = this._activeElement || this._getActive();
    if (!element) {
      return;
    }
    const elementInterval = Number.parseInt(element.getAttribute("data-bs-interval"), 10);
    this._config.interval = elementInterval || this._config.defaultInterval;
  }
  _slide(order2, element = null) {
    if (this._isSliding) {
      return;
    }
    const activeElement = this._getActive();
    const isNext = order2 === ORDER_NEXT;
    const nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);
    if (nextElement === activeElement) {
      return;
    }
    const nextElementIndex = this._getItemIndex(nextElement);
    const triggerEvent = (eventName) => {
      return EventHandler.trigger(this._element, eventName, {
        relatedTarget: nextElement,
        direction: this._orderToDirection(order2),
        from: this._getItemIndex(activeElement),
        to: nextElementIndex
      });
    };
    const slideEvent = triggerEvent(EVENT_SLIDE);
    if (slideEvent.defaultPrevented) {
      return;
    }
    if (!activeElement || !nextElement) {
      return;
    }
    const isCycling = Boolean(this._interval);
    this.pause();
    this._isSliding = true;
    this._setActiveIndicatorElement(nextElementIndex);
    this._activeElement = nextElement;
    const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
    const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
    nextElement.classList.add(orderClassName);
    reflow(nextElement);
    activeElement.classList.add(directionalClassName);
    nextElement.classList.add(directionalClassName);
    const completeCallBack = () => {
      nextElement.classList.remove(directionalClassName, orderClassName);
      nextElement.classList.add(CLASS_NAME_ACTIVE$2);
      activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
      this._isSliding = false;
      triggerEvent(EVENT_SLID);
    };
    this._queueCallback(completeCallBack, activeElement, this._isAnimated());
    if (isCycling) {
      this.cycle();
    }
  }
  _isAnimated() {
    return this._element.classList.contains(CLASS_NAME_SLIDE);
  }
  _getActive() {
    return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
  }
  _getItems() {
    return SelectorEngine.find(SELECTOR_ITEM, this._element);
  }
  _clearInterval() {
    if (this._interval) {
      clearInterval(this._interval);
      this._interval = null;
    }
  }
  _directionToOrder(direction) {
    if (isRTL()) {
      return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
    }
    return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
  }
  _orderToDirection(order2) {
    if (isRTL()) {
      return order2 === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return order2 === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = Carousel.getOrCreateInstance(this, config);
      if (typeof config === "number") {
        data.to(config);
        return;
      }
      if (typeof config === "string") {
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      }
    });
  }
};
EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, function(event) {
  const target = getElementFromSelector(this);
  if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
    return;
  }
  event.preventDefault();
  const carousel = Carousel.getOrCreateInstance(target);
  const slideIndex = this.getAttribute("data-bs-slide-to");
  if (slideIndex) {
    carousel.to(slideIndex);
    carousel._maybeEnableCycle();
    return;
  }
  if (Manipulator.getDataAttribute(this, "slide") === "next") {
    carousel.next();
    carousel._maybeEnableCycle();
    return;
  }
  carousel.prev();
  carousel._maybeEnableCycle();
});
EventHandler.on(window, EVENT_LOAD_DATA_API$3, () => {
  const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);
  for (const carousel of carousels) {
    Carousel.getOrCreateInstance(carousel);
  }
});
defineJQueryPlugin(Carousel);
var NAME$b = "collapse";
var DATA_KEY$7 = "bs.collapse";
var EVENT_KEY$7 = `.${DATA_KEY$7}`;
var DATA_API_KEY$4 = ".data-api";
var EVENT_SHOW$6 = `show${EVENT_KEY$7}`;
var EVENT_SHOWN$6 = `shown${EVENT_KEY$7}`;
var EVENT_HIDE$6 = `hide${EVENT_KEY$7}`;
var EVENT_HIDDEN$6 = `hidden${EVENT_KEY$7}`;
var EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$7}${DATA_API_KEY$4}`;
var CLASS_NAME_SHOW$7 = "show";
var CLASS_NAME_COLLAPSE = "collapse";
var CLASS_NAME_COLLAPSING = "collapsing";
var CLASS_NAME_COLLAPSED = "collapsed";
var CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
var CLASS_NAME_HORIZONTAL = "collapse-horizontal";
var WIDTH = "width";
var HEIGHT = "height";
var SELECTOR_ACTIVES = ".collapse.show, .collapse.collapsing";
var SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
var Default$a = {
  parent: null,
  toggle: true
};
var DefaultType$a = {
  parent: "(null|element)",
  toggle: "boolean"
};
var Collapse = class extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._isTransitioning = false;
    this._triggerArray = [];
    const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);
    for (const elem of toggleList) {
      const selector = getSelectorFromElement(elem);
      const filterElement = SelectorEngine.find(selector).filter((foundElement) => foundElement === this._element);
      if (selector !== null && filterElement.length) {
        this._triggerArray.push(elem);
      }
    }
    this._initializeChildren();
    if (!this._config.parent) {
      this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
    }
    if (this._config.toggle) {
      this.toggle();
    }
  }
  // Getters
  static get Default() {
    return Default$a;
  }
  static get DefaultType() {
    return DefaultType$a;
  }
  static get NAME() {
    return NAME$b;
  }
  // Public
  toggle() {
    if (this._isShown()) {
      this.hide();
    } else {
      this.show();
    }
  }
  show() {
    if (this._isTransitioning || this._isShown()) {
      return;
    }
    let activeChildren = [];
    if (this._config.parent) {
      activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter((element) => element !== this._element).map((element) => Collapse.getOrCreateInstance(element, {
        toggle: false
      }));
    }
    if (activeChildren.length && activeChildren[0]._isTransitioning) {
      return;
    }
    const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$6);
    if (startEvent.defaultPrevented) {
      return;
    }
    for (const activeInstance of activeChildren) {
      activeInstance.hide();
    }
    const dimension = this._getDimension();
    this._element.classList.remove(CLASS_NAME_COLLAPSE);
    this._element.classList.add(CLASS_NAME_COLLAPSING);
    this._element.style[dimension] = 0;
    this._addAriaAndCollapsedClass(this._triggerArray, true);
    this._isTransitioning = true;
    const complete = () => {
      this._isTransitioning = false;
      this._element.classList.remove(CLASS_NAME_COLLAPSING);
      this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
      this._element.style[dimension] = "";
      EventHandler.trigger(this._element, EVENT_SHOWN$6);
    };
    const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
    const scrollSize = `scroll${capitalizedDimension}`;
    this._queueCallback(complete, this._element, true);
    this._element.style[dimension] = `${this._element[scrollSize]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown()) {
      return;
    }
    const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$6);
    if (startEvent.defaultPrevented) {
      return;
    }
    const dimension = this._getDimension();
    this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
    reflow(this._element);
    this._element.classList.add(CLASS_NAME_COLLAPSING);
    this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
    for (const trigger of this._triggerArray) {
      const element = getElementFromSelector(trigger);
      if (element && !this._isShown(element)) {
        this._addAriaAndCollapsedClass([trigger], false);
      }
    }
    this._isTransitioning = true;
    const complete = () => {
      this._isTransitioning = false;
      this._element.classList.remove(CLASS_NAME_COLLAPSING);
      this._element.classList.add(CLASS_NAME_COLLAPSE);
      EventHandler.trigger(this._element, EVENT_HIDDEN$6);
    };
    this._element.style[dimension] = "";
    this._queueCallback(complete, this._element, true);
  }
  _isShown(element = this._element) {
    return element.classList.contains(CLASS_NAME_SHOW$7);
  }
  // Private
  _configAfterMerge(config) {
    config.toggle = Boolean(config.toggle);
    config.parent = getElement(config.parent);
    return config;
  }
  _getDimension() {
    return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
  }
  _initializeChildren() {
    if (!this._config.parent) {
      return;
    }
    const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE$4);
    for (const element of children) {
      const selected = getElementFromSelector(element);
      if (selected) {
        this._addAriaAndCollapsedClass([element], this._isShown(selected));
      }
    }
  }
  _getFirstLevelChildren(selector) {
    const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
    return SelectorEngine.find(selector, this._config.parent).filter((element) => !children.includes(element));
  }
  _addAriaAndCollapsedClass(triggerArray, isOpen) {
    if (!triggerArray.length) {
      return;
    }
    for (const element of triggerArray) {
      element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
      element.setAttribute("aria-expanded", isOpen);
    }
  }
  // Static
  static jQueryInterface(config) {
    const _config = {};
    if (typeof config === "string" && /show|hide/.test(config)) {
      _config.toggle = false;
    }
    return this.each(function() {
      const data = Collapse.getOrCreateInstance(this, _config);
      if (typeof config === "string") {
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      }
    });
  }
};
EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function(event) {
  if (event.target.tagName === "A" || event.delegateTarget && event.delegateTarget.tagName === "A") {
    event.preventDefault();
  }
  const selector = getSelectorFromElement(this);
  const selectorElements = SelectorEngine.find(selector);
  for (const element of selectorElements) {
    Collapse.getOrCreateInstance(element, {
      toggle: false
    }).toggle();
  }
});
defineJQueryPlugin(Collapse);
var NAME$a = "dropdown";
var DATA_KEY$6 = "bs.dropdown";
var EVENT_KEY$6 = `.${DATA_KEY$6}`;
var DATA_API_KEY$3 = ".data-api";
var ESCAPE_KEY$2 = "Escape";
var TAB_KEY$1 = "Tab";
var ARROW_UP_KEY$1 = "ArrowUp";
var ARROW_DOWN_KEY$1 = "ArrowDown";
var RIGHT_MOUSE_BUTTON = 2;
var EVENT_HIDE$5 = `hide${EVENT_KEY$6}`;
var EVENT_HIDDEN$5 = `hidden${EVENT_KEY$6}`;
var EVENT_SHOW$5 = `show${EVENT_KEY$6}`;
var EVENT_SHOWN$5 = `shown${EVENT_KEY$6}`;
var EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
var EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$6}${DATA_API_KEY$3}`;
var EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$6}${DATA_API_KEY$3}`;
var CLASS_NAME_SHOW$6 = "show";
var CLASS_NAME_DROPUP = "dropup";
var CLASS_NAME_DROPEND = "dropend";
var CLASS_NAME_DROPSTART = "dropstart";
var CLASS_NAME_DROPUP_CENTER = "dropup-center";
var CLASS_NAME_DROPDOWN_CENTER = "dropdown-center";
var SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
var SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE$3}.${CLASS_NAME_SHOW$6}`;
var SELECTOR_MENU = ".dropdown-menu";
var SELECTOR_NAVBAR = ".navbar";
var SELECTOR_NAVBAR_NAV = ".navbar-nav";
var SELECTOR_VISIBLE_ITEMS = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)";
var PLACEMENT_TOP = isRTL() ? "top-end" : "top-start";
var PLACEMENT_TOPEND = isRTL() ? "top-start" : "top-end";
var PLACEMENT_BOTTOM = isRTL() ? "bottom-end" : "bottom-start";
var PLACEMENT_BOTTOMEND = isRTL() ? "bottom-start" : "bottom-end";
var PLACEMENT_RIGHT = isRTL() ? "left-start" : "right-start";
var PLACEMENT_LEFT = isRTL() ? "right-start" : "left-start";
var PLACEMENT_TOPCENTER = "top";
var PLACEMENT_BOTTOMCENTER = "bottom";
var Default$9 = {
  autoClose: true,
  boundary: "clippingParents",
  display: "dynamic",
  offset: [0, 2],
  popperConfig: null,
  reference: "toggle"
};
var DefaultType$9 = {
  autoClose: "(boolean|string)",
  boundary: "(string|element)",
  display: "string",
  offset: "(array|string|function)",
  popperConfig: "(null|object|function)",
  reference: "(string|element|object)"
};
var Dropdown = class extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._popper = null;
    this._parent = this._element.parentNode;
    this._menu = SelectorEngine.next(this._element, SELECTOR_MENU)[0] || SelectorEngine.prev(this._element, SELECTOR_MENU)[0] || SelectorEngine.findOne(SELECTOR_MENU, this._parent);
    this._inNavbar = this._detectNavbar();
  }
  // Getters
  static get Default() {
    return Default$9;
  }
  static get DefaultType() {
    return DefaultType$9;
  }
  static get NAME() {
    return NAME$a;
  }
  // Public
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (isDisabled(this._element) || this._isShown()) {
      return;
    }
    const relatedTarget = {
      relatedTarget: this._element
    };
    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$5, relatedTarget);
    if (showEvent.defaultPrevented) {
      return;
    }
    this._createPopper();
    if ("ontouchstart" in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {
      for (const element of [].concat(...document.body.children)) {
        EventHandler.on(element, "mouseover", noop);
      }
    }
    this._element.focus();
    this._element.setAttribute("aria-expanded", true);
    this._menu.classList.add(CLASS_NAME_SHOW$6);
    this._element.classList.add(CLASS_NAME_SHOW$6);
    EventHandler.trigger(this._element, EVENT_SHOWN$5, relatedTarget);
  }
  hide() {
    if (isDisabled(this._element) || !this._isShown()) {
      return;
    }
    const relatedTarget = {
      relatedTarget: this._element
    };
    this._completeHide(relatedTarget);
  }
  dispose() {
    if (this._popper) {
      this._popper.destroy();
    }
    super.dispose();
  }
  update() {
    this._inNavbar = this._detectNavbar();
    if (this._popper) {
      this._popper.update();
    }
  }
  // Private
  _completeHide(relatedTarget) {
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$5, relatedTarget);
    if (hideEvent.defaultPrevented) {
      return;
    }
    if ("ontouchstart" in document.documentElement) {
      for (const element of [].concat(...document.body.children)) {
        EventHandler.off(element, "mouseover", noop);
      }
    }
    if (this._popper) {
      this._popper.destroy();
    }
    this._menu.classList.remove(CLASS_NAME_SHOW$6);
    this._element.classList.remove(CLASS_NAME_SHOW$6);
    this._element.setAttribute("aria-expanded", "false");
    Manipulator.removeDataAttribute(this._menu, "popper");
    EventHandler.trigger(this._element, EVENT_HIDDEN$5, relatedTarget);
  }
  _getConfig(config) {
    config = super._getConfig(config);
    if (typeof config.reference === "object" && !isElement2(config.reference) && typeof config.reference.getBoundingClientRect !== "function") {
      throw new TypeError(`${NAME$a.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
    }
    return config;
  }
  _createPopper() {
    if (typeof lib_exports === "undefined") {
      throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
    }
    let referenceElement = this._element;
    if (this._config.reference === "parent") {
      referenceElement = this._parent;
    } else if (isElement2(this._config.reference)) {
      referenceElement = getElement(this._config.reference);
    } else if (typeof this._config.reference === "object") {
      referenceElement = this._config.reference;
    }
    const popperConfig = this._getPopperConfig();
    this._popper = createPopper3(referenceElement, this._menu, popperConfig);
  }
  _isShown() {
    return this._menu.classList.contains(CLASS_NAME_SHOW$6);
  }
  _getPlacement() {
    const parentDropdown = this._parent;
    if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
      return PLACEMENT_RIGHT;
    }
    if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
      return PLACEMENT_LEFT;
    }
    if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {
      return PLACEMENT_TOPCENTER;
    }
    if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
      return PLACEMENT_BOTTOMCENTER;
    }
    const isEnd = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
    if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
      return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
    }
    return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
  }
  _detectNavbar() {
    return this._element.closest(SELECTOR_NAVBAR) !== null;
  }
  _getOffset() {
    const {
      offset: offset2
    } = this._config;
    if (typeof offset2 === "string") {
      return offset2.split(",").map((value) => Number.parseInt(value, 10));
    }
    if (typeof offset2 === "function") {
      return (popperData) => offset2(popperData, this._element);
    }
    return offset2;
  }
  _getPopperConfig() {
    const defaultBsPopperConfig = {
      placement: this._getPlacement(),
      modifiers: [{
        name: "preventOverflow",
        options: {
          boundary: this._config.boundary
        }
      }, {
        name: "offset",
        options: {
          offset: this._getOffset()
        }
      }]
    };
    if (this._inNavbar || this._config.display === "static") {
      Manipulator.setDataAttribute(this._menu, "popper", "static");
      defaultBsPopperConfig.modifiers = [{
        name: "applyStyles",
        enabled: false
      }];
    }
    return {
      ...defaultBsPopperConfig,
      ...typeof this._config.popperConfig === "function" ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig
    };
  }
  _selectMenuItem({
    key,
    target
  }) {
    const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter((element) => isVisible(element));
    if (!items.length) {
      return;
    }
    getNextActiveElement(items, target, key === ARROW_DOWN_KEY$1, !items.includes(target)).focus();
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = Dropdown.getOrCreateInstance(this, config);
      if (typeof config !== "string") {
        return;
      }
      if (typeof data[config] === "undefined") {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config]();
    });
  }
  static clearMenus(event) {
    if (event.button === RIGHT_MOUSE_BUTTON || event.type === "keyup" && event.key !== TAB_KEY$1) {
      return;
    }
    const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);
    for (const toggle of openToggles) {
      const context = Dropdown.getInstance(toggle);
      if (!context || context._config.autoClose === false) {
        continue;
      }
      const composedPath = event.composedPath();
      const isMenuTarget = composedPath.includes(context._menu);
      if (composedPath.includes(context._element) || context._config.autoClose === "inside" && !isMenuTarget || context._config.autoClose === "outside" && isMenuTarget) {
        continue;
      }
      if (context._menu.contains(event.target) && (event.type === "keyup" && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
        continue;
      }
      const relatedTarget = {
        relatedTarget: context._element
      };
      if (event.type === "click") {
        relatedTarget.clickEvent = event;
      }
      context._completeHide(relatedTarget);
    }
  }
  static dataApiKeydownHandler(event) {
    const isInput = /input|textarea/i.test(event.target.tagName);
    const isEscapeEvent = event.key === ESCAPE_KEY$2;
    const isUpOrDownEvent = [ARROW_UP_KEY$1, ARROW_DOWN_KEY$1].includes(event.key);
    if (!isUpOrDownEvent && !isEscapeEvent) {
      return;
    }
    if (isInput && !isEscapeEvent) {
      return;
    }
    event.preventDefault();
    const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.next(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.findOne(SELECTOR_DATA_TOGGLE$3, event.delegateTarget.parentNode);
    const instance = Dropdown.getOrCreateInstance(getToggleButton);
    if (isUpOrDownEvent) {
      event.stopPropagation();
      instance.show();
      instance._selectMenuItem(event);
      return;
    }
    if (instance._isShown()) {
      event.stopPropagation();
      instance.hide();
      getToggleButton.focus();
    }
  }
};
EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function(event) {
  event.preventDefault();
  Dropdown.getOrCreateInstance(this).toggle();
});
defineJQueryPlugin(Dropdown);
var SELECTOR_FIXED_CONTENT = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";
var SELECTOR_STICKY_CONTENT = ".sticky-top";
var PROPERTY_PADDING = "padding-right";
var PROPERTY_MARGIN = "margin-right";
var ScrollBarHelper = class {
  constructor() {
    this._element = document.body;
  }
  // Public
  getWidth() {
    const documentWidth = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - documentWidth);
  }
  hide() {
    const width = this.getWidth();
    this._disableOverFlow();
    this._setElementAttributes(this._element, PROPERTY_PADDING, (calculatedValue) => calculatedValue + width);
    this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, (calculatedValue) => calculatedValue + width);
    this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, (calculatedValue) => calculatedValue - width);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow");
    this._resetElementAttributes(this._element, PROPERTY_PADDING);
    this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
    this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
  }
  isOverflowing() {
    return this.getWidth() > 0;
  }
  // Private
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, "overflow");
    this._element.style.overflow = "hidden";
  }
  _setElementAttributes(selector, styleProperty, callback) {
    const scrollbarWidth = this.getWidth();
    const manipulationCallBack = (element) => {
      if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
        return;
      }
      this._saveInitialAttribute(element, styleProperty);
      const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
      element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
    };
    this._applyManipulationCallback(selector, manipulationCallBack);
  }
  _saveInitialAttribute(element, styleProperty) {
    const actualValue = element.style.getPropertyValue(styleProperty);
    if (actualValue) {
      Manipulator.setDataAttribute(element, styleProperty, actualValue);
    }
  }
  _resetElementAttributes(selector, styleProperty) {
    const manipulationCallBack = (element) => {
      const value = Manipulator.getDataAttribute(element, styleProperty);
      if (value === null) {
        element.style.removeProperty(styleProperty);
        return;
      }
      Manipulator.removeDataAttribute(element, styleProperty);
      element.style.setProperty(styleProperty, value);
    };
    this._applyManipulationCallback(selector, manipulationCallBack);
  }
  _applyManipulationCallback(selector, callBack) {
    if (isElement2(selector)) {
      callBack(selector);
      return;
    }
    for (const sel of SelectorEngine.find(selector, this._element)) {
      callBack(sel);
    }
  }
};
var NAME$9 = "backdrop";
var CLASS_NAME_FADE$4 = "fade";
var CLASS_NAME_SHOW$5 = "show";
var EVENT_MOUSEDOWN = `mousedown.bs.${NAME$9}`;
var Default$8 = {
  className: "modal-backdrop",
  clickCallback: null,
  isAnimated: false,
  isVisible: true,
  // if false, we use the backdrop helper without adding any element to the dom
  rootElement: "body"
  // give the choice to place backdrop under different elements
};
var DefaultType$8 = {
  className: "string",
  clickCallback: "(function|null)",
  isAnimated: "boolean",
  isVisible: "boolean",
  rootElement: "(element|string)"
};
var Backdrop = class extends Config {
  constructor(config) {
    super();
    this._config = this._getConfig(config);
    this._isAppended = false;
    this._element = null;
  }
  // Getters
  static get Default() {
    return Default$8;
  }
  static get DefaultType() {
    return DefaultType$8;
  }
  static get NAME() {
    return NAME$9;
  }
  // Public
  show(callback) {
    if (!this._config.isVisible) {
      execute(callback);
      return;
    }
    this._append();
    const element = this._getElement();
    if (this._config.isAnimated) {
      reflow(element);
    }
    element.classList.add(CLASS_NAME_SHOW$5);
    this._emulateAnimation(() => {
      execute(callback);
    });
  }
  hide(callback) {
    if (!this._config.isVisible) {
      execute(callback);
      return;
    }
    this._getElement().classList.remove(CLASS_NAME_SHOW$5);
    this._emulateAnimation(() => {
      this.dispose();
      execute(callback);
    });
  }
  dispose() {
    if (!this._isAppended) {
      return;
    }
    EventHandler.off(this._element, EVENT_MOUSEDOWN);
    this._element.remove();
    this._isAppended = false;
  }
  // Private
  _getElement() {
    if (!this._element) {
      const backdrop = document.createElement("div");
      backdrop.className = this._config.className;
      if (this._config.isAnimated) {
        backdrop.classList.add(CLASS_NAME_FADE$4);
      }
      this._element = backdrop;
    }
    return this._element;
  }
  _configAfterMerge(config) {
    config.rootElement = getElement(config.rootElement);
    return config;
  }
  _append() {
    if (this._isAppended) {
      return;
    }
    const element = this._getElement();
    this._config.rootElement.append(element);
    EventHandler.on(element, EVENT_MOUSEDOWN, () => {
      execute(this._config.clickCallback);
    });
    this._isAppended = true;
  }
  _emulateAnimation(callback) {
    executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
  }
};
var NAME$8 = "focustrap";
var DATA_KEY$5 = "bs.focustrap";
var EVENT_KEY$5 = `.${DATA_KEY$5}`;
var EVENT_FOCUSIN$2 = `focusin${EVENT_KEY$5}`;
var EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$5}`;
var TAB_KEY = "Tab";
var TAB_NAV_FORWARD = "forward";
var TAB_NAV_BACKWARD = "backward";
var Default$7 = {
  autofocus: true,
  trapElement: null
  // The element to trap focus inside of
};
var DefaultType$7 = {
  autofocus: "boolean",
  trapElement: "element"
};
var FocusTrap = class extends Config {
  constructor(config) {
    super();
    this._config = this._getConfig(config);
    this._isActive = false;
    this._lastTabNavDirection = null;
  }
  // Getters
  static get Default() {
    return Default$7;
  }
  static get DefaultType() {
    return DefaultType$7;
  }
  static get NAME() {
    return NAME$8;
  }
  // Public
  activate() {
    if (this._isActive) {
      return;
    }
    if (this._config.autofocus) {
      this._config.trapElement.focus();
    }
    EventHandler.off(document, EVENT_KEY$5);
    EventHandler.on(document, EVENT_FOCUSIN$2, (event) => this._handleFocusin(event));
    EventHandler.on(document, EVENT_KEYDOWN_TAB, (event) => this._handleKeydown(event));
    this._isActive = true;
  }
  deactivate() {
    if (!this._isActive) {
      return;
    }
    this._isActive = false;
    EventHandler.off(document, EVENT_KEY$5);
  }
  // Private
  _handleFocusin(event) {
    const {
      trapElement
    } = this._config;
    if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
      return;
    }
    const elements = SelectorEngine.focusableChildren(trapElement);
    if (elements.length === 0) {
      trapElement.focus();
    } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
      elements[elements.length - 1].focus();
    } else {
      elements[0].focus();
    }
  }
  _handleKeydown(event) {
    if (event.key !== TAB_KEY) {
      return;
    }
    this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
  }
};
var NAME$7 = "modal";
var DATA_KEY$4 = "bs.modal";
var EVENT_KEY$4 = `.${DATA_KEY$4}`;
var DATA_API_KEY$2 = ".data-api";
var ESCAPE_KEY$1 = "Escape";
var EVENT_HIDE$4 = `hide${EVENT_KEY$4}`;
var EVENT_HIDE_PREVENTED$1 = `hidePrevented${EVENT_KEY$4}`;
var EVENT_HIDDEN$4 = `hidden${EVENT_KEY$4}`;
var EVENT_SHOW$4 = `show${EVENT_KEY$4}`;
var EVENT_SHOWN$4 = `shown${EVENT_KEY$4}`;
var EVENT_RESIZE$1 = `resize${EVENT_KEY$4}`;
var EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY$4}`;
var EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$4}`;
var EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$4}`;
var EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$4}${DATA_API_KEY$2}`;
var CLASS_NAME_OPEN = "modal-open";
var CLASS_NAME_FADE$3 = "fade";
var CLASS_NAME_SHOW$4 = "show";
var CLASS_NAME_STATIC = "modal-static";
var OPEN_SELECTOR$1 = ".modal.show";
var SELECTOR_DIALOG = ".modal-dialog";
var SELECTOR_MODAL_BODY = ".modal-body";
var SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
var Default$6 = {
  backdrop: true,
  focus: true,
  keyboard: true
};
var DefaultType$6 = {
  backdrop: "(boolean|string)",
  focus: "boolean",
  keyboard: "boolean"
};
var Modal = class extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
    this._backdrop = this._initializeBackDrop();
    this._focustrap = this._initializeFocusTrap();
    this._isShown = false;
    this._isTransitioning = false;
    this._scrollBar = new ScrollBarHelper();
    this._addEventListeners();
  }
  // Getters
  static get Default() {
    return Default$6;
  }
  static get DefaultType() {
    return DefaultType$6;
  }
  static get NAME() {
    return NAME$7;
  }
  // Public
  toggle(relatedTarget) {
    return this._isShown ? this.hide() : this.show(relatedTarget);
  }
  show(relatedTarget) {
    if (this._isShown || this._isTransitioning) {
      return;
    }
    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, {
      relatedTarget
    });
    if (showEvent.defaultPrevented) {
      return;
    }
    this._isShown = true;
    this._isTransitioning = true;
    this._scrollBar.hide();
    document.body.classList.add(CLASS_NAME_OPEN);
    this._adjustDialog();
    this._backdrop.show(() => this._showElement(relatedTarget));
  }
  hide() {
    if (!this._isShown || this._isTransitioning) {
      return;
    }
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);
    if (hideEvent.defaultPrevented) {
      return;
    }
    this._isShown = false;
    this._isTransitioning = true;
    this._focustrap.deactivate();
    this._element.classList.remove(CLASS_NAME_SHOW$4);
    this._queueCallback(() => this._hideModal(), this._element, this._isAnimated());
  }
  dispose() {
    for (const htmlElement of [window, this._dialog]) {
      EventHandler.off(htmlElement, EVENT_KEY$4);
    }
    this._backdrop.dispose();
    this._focustrap.deactivate();
    super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  // Private
  _initializeBackDrop() {
    return new Backdrop({
      isVisible: Boolean(this._config.backdrop),
      // 'static' option will be translated to true, and booleans will keep their value,
      isAnimated: this._isAnimated()
    });
  }
  _initializeFocusTrap() {
    return new FocusTrap({
      trapElement: this._element
    });
  }
  _showElement(relatedTarget) {
    if (!document.body.contains(this._element)) {
      document.body.append(this._element);
    }
    this._element.style.display = "block";
    this._element.removeAttribute("aria-hidden");
    this._element.setAttribute("aria-modal", true);
    this._element.setAttribute("role", "dialog");
    this._element.scrollTop = 0;
    const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
    if (modalBody) {
      modalBody.scrollTop = 0;
    }
    reflow(this._element);
    this._element.classList.add(CLASS_NAME_SHOW$4);
    const transitionComplete = () => {
      if (this._config.focus) {
        this._focustrap.activate();
      }
      this._isTransitioning = false;
      EventHandler.trigger(this._element, EVENT_SHOWN$4, {
        relatedTarget
      });
    };
    this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
  }
  _addEventListeners() {
    EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, (event) => {
      if (event.key !== ESCAPE_KEY$1) {
        return;
      }
      if (this._config.keyboard) {
        event.preventDefault();
        this.hide();
        return;
      }
      this._triggerBackdropTransition();
    });
    EventHandler.on(window, EVENT_RESIZE$1, () => {
      if (this._isShown && !this._isTransitioning) {
        this._adjustDialog();
      }
    });
    EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, (event) => {
      EventHandler.one(this._element, EVENT_CLICK_DISMISS, (event2) => {
        if (this._element !== event.target || this._element !== event2.target) {
          return;
        }
        if (this._config.backdrop === "static") {
          this._triggerBackdropTransition();
          return;
        }
        if (this._config.backdrop) {
          this.hide();
        }
      });
    });
  }
  _hideModal() {
    this._element.style.display = "none";
    this._element.setAttribute("aria-hidden", true);
    this._element.removeAttribute("aria-modal");
    this._element.removeAttribute("role");
    this._isTransitioning = false;
    this._backdrop.hide(() => {
      document.body.classList.remove(CLASS_NAME_OPEN);
      this._resetAdjustments();
      this._scrollBar.reset();
      EventHandler.trigger(this._element, EVENT_HIDDEN$4);
    });
  }
  _isAnimated() {
    return this._element.classList.contains(CLASS_NAME_FADE$3);
  }
  _triggerBackdropTransition() {
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED$1);
    if (hideEvent.defaultPrevented) {
      return;
    }
    const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
    const initialOverflowY = this._element.style.overflowY;
    if (initialOverflowY === "hidden" || this._element.classList.contains(CLASS_NAME_STATIC)) {
      return;
    }
    if (!isModalOverflowing) {
      this._element.style.overflowY = "hidden";
    }
    this._element.classList.add(CLASS_NAME_STATIC);
    this._queueCallback(() => {
      this._element.classList.remove(CLASS_NAME_STATIC);
      this._queueCallback(() => {
        this._element.style.overflowY = initialOverflowY;
      }, this._dialog);
    }, this._dialog);
    this._element.focus();
  }
  /**
   * The following methods are used to handle overflowing modals
   */
  _adjustDialog() {
    const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
    const scrollbarWidth = this._scrollBar.getWidth();
    const isBodyOverflowing = scrollbarWidth > 0;
    if (isBodyOverflowing && !isModalOverflowing) {
      const property = isRTL() ? "paddingLeft" : "paddingRight";
      this._element.style[property] = `${scrollbarWidth}px`;
    }
    if (!isBodyOverflowing && isModalOverflowing) {
      const property = isRTL() ? "paddingRight" : "paddingLeft";
      this._element.style[property] = `${scrollbarWidth}px`;
    }
  }
  _resetAdjustments() {
    this._element.style.paddingLeft = "";
    this._element.style.paddingRight = "";
  }
  // Static
  static jQueryInterface(config, relatedTarget) {
    return this.each(function() {
      const data = Modal.getOrCreateInstance(this, config);
      if (typeof config !== "string") {
        return;
      }
      if (typeof data[config] === "undefined") {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config](relatedTarget);
    });
  }
};
EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function(event) {
  const target = getElementFromSelector(this);
  if (["A", "AREA"].includes(this.tagName)) {
    event.preventDefault();
  }
  EventHandler.one(target, EVENT_SHOW$4, (showEvent) => {
    if (showEvent.defaultPrevented) {
      return;
    }
    EventHandler.one(target, EVENT_HIDDEN$4, () => {
      if (isVisible(this)) {
        this.focus();
      }
    });
  });
  const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);
  if (alreadyOpen) {
    Modal.getInstance(alreadyOpen).hide();
  }
  const data = Modal.getOrCreateInstance(target);
  data.toggle(this);
});
enableDismissTrigger(Modal);
defineJQueryPlugin(Modal);
var NAME$6 = "offcanvas";
var DATA_KEY$3 = "bs.offcanvas";
var EVENT_KEY$3 = `.${DATA_KEY$3}`;
var DATA_API_KEY$1 = ".data-api";
var EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$3}${DATA_API_KEY$1}`;
var ESCAPE_KEY = "Escape";
var CLASS_NAME_SHOW$3 = "show";
var CLASS_NAME_SHOWING$1 = "showing";
var CLASS_NAME_HIDING = "hiding";
var CLASS_NAME_BACKDROP = "offcanvas-backdrop";
var OPEN_SELECTOR = ".offcanvas.show";
var EVENT_SHOW$3 = `show${EVENT_KEY$3}`;
var EVENT_SHOWN$3 = `shown${EVENT_KEY$3}`;
var EVENT_HIDE$3 = `hide${EVENT_KEY$3}`;
var EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$3}`;
var EVENT_HIDDEN$3 = `hidden${EVENT_KEY$3}`;
var EVENT_RESIZE = `resize${EVENT_KEY$3}`;
var EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$3}${DATA_API_KEY$1}`;
var EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$3}`;
var SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
var Default$5 = {
  backdrop: true,
  keyboard: true,
  scroll: false
};
var DefaultType$5 = {
  backdrop: "(boolean|string)",
  keyboard: "boolean",
  scroll: "boolean"
};
var Offcanvas = class extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._isShown = false;
    this._backdrop = this._initializeBackDrop();
    this._focustrap = this._initializeFocusTrap();
    this._addEventListeners();
  }
  // Getters
  static get Default() {
    return Default$5;
  }
  static get DefaultType() {
    return DefaultType$5;
  }
  static get NAME() {
    return NAME$6;
  }
  // Public
  toggle(relatedTarget) {
    return this._isShown ? this.hide() : this.show(relatedTarget);
  }
  show(relatedTarget) {
    if (this._isShown) {
      return;
    }
    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
      relatedTarget
    });
    if (showEvent.defaultPrevented) {
      return;
    }
    this._isShown = true;
    this._backdrop.show();
    if (!this._config.scroll) {
      new ScrollBarHelper().hide();
    }
    this._element.setAttribute("aria-modal", true);
    this._element.setAttribute("role", "dialog");
    this._element.classList.add(CLASS_NAME_SHOWING$1);
    const completeCallBack = () => {
      if (!this._config.scroll || this._config.backdrop) {
        this._focustrap.activate();
      }
      this._element.classList.add(CLASS_NAME_SHOW$3);
      this._element.classList.remove(CLASS_NAME_SHOWING$1);
      EventHandler.trigger(this._element, EVENT_SHOWN$3, {
        relatedTarget
      });
    };
    this._queueCallback(completeCallBack, this._element, true);
  }
  hide() {
    if (!this._isShown) {
      return;
    }
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);
    if (hideEvent.defaultPrevented) {
      return;
    }
    this._focustrap.deactivate();
    this._element.blur();
    this._isShown = false;
    this._element.classList.add(CLASS_NAME_HIDING);
    this._backdrop.hide();
    const completeCallback = () => {
      this._element.classList.remove(CLASS_NAME_SHOW$3, CLASS_NAME_HIDING);
      this._element.removeAttribute("aria-modal");
      this._element.removeAttribute("role");
      if (!this._config.scroll) {
        new ScrollBarHelper().reset();
      }
      EventHandler.trigger(this._element, EVENT_HIDDEN$3);
    };
    this._queueCallback(completeCallback, this._element, true);
  }
  dispose() {
    this._backdrop.dispose();
    this._focustrap.deactivate();
    super.dispose();
  }
  // Private
  _initializeBackDrop() {
    const clickCallback = () => {
      if (this._config.backdrop === "static") {
        EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
        return;
      }
      this.hide();
    };
    const isVisible2 = Boolean(this._config.backdrop);
    return new Backdrop({
      className: CLASS_NAME_BACKDROP,
      isVisible: isVisible2,
      isAnimated: true,
      rootElement: this._element.parentNode,
      clickCallback: isVisible2 ? clickCallback : null
    });
  }
  _initializeFocusTrap() {
    return new FocusTrap({
      trapElement: this._element
    });
  }
  _addEventListeners() {
    EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, (event) => {
      if (event.key !== ESCAPE_KEY) {
        return;
      }
      if (!this._config.keyboard) {
        EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
        return;
      }
      this.hide();
    });
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = Offcanvas.getOrCreateInstance(this, config);
      if (typeof config !== "string") {
        return;
      }
      if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config](this);
    });
  }
};
EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function(event) {
  const target = getElementFromSelector(this);
  if (["A", "AREA"].includes(this.tagName)) {
    event.preventDefault();
  }
  if (isDisabled(this)) {
    return;
  }
  EventHandler.one(target, EVENT_HIDDEN$3, () => {
    if (isVisible(this)) {
      this.focus();
    }
  });
  const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
  if (alreadyOpen && alreadyOpen !== target) {
    Offcanvas.getInstance(alreadyOpen).hide();
  }
  const data = Offcanvas.getOrCreateInstance(target);
  data.toggle(this);
});
EventHandler.on(window, EVENT_LOAD_DATA_API$2, () => {
  for (const selector of SelectorEngine.find(OPEN_SELECTOR)) {
    Offcanvas.getOrCreateInstance(selector).show();
  }
});
EventHandler.on(window, EVENT_RESIZE, () => {
  for (const element of SelectorEngine.find("[aria-modal][class*=show][class*=offcanvas-]")) {
    if (getComputedStyle(element).position !== "fixed") {
      Offcanvas.getOrCreateInstance(element).hide();
    }
  }
});
enableDismissTrigger(Offcanvas);
defineJQueryPlugin(Offcanvas);
var uriAttributes = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]);
var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
var allowedAttribute = (attribute, allowedAttributeList) => {
  const attributeName = attribute.nodeName.toLowerCase();
  if (allowedAttributeList.includes(attributeName)) {
    if (uriAttributes.has(attributeName)) {
      return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue) || DATA_URL_PATTERN.test(attribute.nodeValue));
    }
    return true;
  }
  return allowedAttributeList.filter((attributeRegex) => attributeRegex instanceof RegExp).some((regex) => regex.test(attributeName));
};
var DefaultAllowlist = {
  // Global attributes allowed on any supplied element below.
  "*": ["class", "dir", "id", "lang", "role", ARIA_ATTRIBUTE_PATTERN],
  a: ["target", "href", "title", "rel"],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  div: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ["src", "srcset", "alt", "title", "width", "height"],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
};
function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
  if (!unsafeHtml.length) {
    return unsafeHtml;
  }
  if (sanitizeFunction && typeof sanitizeFunction === "function") {
    return sanitizeFunction(unsafeHtml);
  }
  const domParser = new window.DOMParser();
  const createdDocument = domParser.parseFromString(unsafeHtml, "text/html");
  const elements = [].concat(...createdDocument.body.querySelectorAll("*"));
  for (const element of elements) {
    const elementName = element.nodeName.toLowerCase();
    if (!Object.keys(allowList).includes(elementName)) {
      element.remove();
      continue;
    }
    const attributeList = [].concat(...element.attributes);
    const allowedAttributes = [].concat(allowList["*"] || [], allowList[elementName] || []);
    for (const attribute of attributeList) {
      if (!allowedAttribute(attribute, allowedAttributes)) {
        element.removeAttribute(attribute.nodeName);
      }
    }
  }
  return createdDocument.body.innerHTML;
}
var NAME$5 = "TemplateFactory";
var Default$4 = {
  allowList: DefaultAllowlist,
  content: {},
  // { selector : text ,  selector2 : text2 , }
  extraClass: "",
  html: false,
  sanitize: true,
  sanitizeFn: null,
  template: "<div></div>"
};
var DefaultType$4 = {
  allowList: "object",
  content: "object",
  extraClass: "(string|function)",
  html: "boolean",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  template: "string"
};
var DefaultContentType = {
  entry: "(string|element|function|null)",
  selector: "(string|element)"
};
var TemplateFactory = class extends Config {
  constructor(config) {
    super();
    this._config = this._getConfig(config);
  }
  // Getters
  static get Default() {
    return Default$4;
  }
  static get DefaultType() {
    return DefaultType$4;
  }
  static get NAME() {
    return NAME$5;
  }
  // Public
  getContent() {
    return Object.values(this._config.content).map((config) => this._resolvePossibleFunction(config)).filter(Boolean);
  }
  hasContent() {
    return this.getContent().length > 0;
  }
  changeContent(content) {
    this._checkContent(content);
    this._config.content = {
      ...this._config.content,
      ...content
    };
    return this;
  }
  toHtml() {
    const templateWrapper = document.createElement("div");
    templateWrapper.innerHTML = this._maybeSanitize(this._config.template);
    for (const [selector, text] of Object.entries(this._config.content)) {
      this._setContent(templateWrapper, text, selector);
    }
    const template = templateWrapper.children[0];
    const extraClass = this._resolvePossibleFunction(this._config.extraClass);
    if (extraClass) {
      template.classList.add(...extraClass.split(" "));
    }
    return template;
  }
  // Private
  _typeCheckConfig(config) {
    super._typeCheckConfig(config);
    this._checkContent(config.content);
  }
  _checkContent(arg) {
    for (const [selector, content] of Object.entries(arg)) {
      super._typeCheckConfig({
        selector,
        entry: content
      }, DefaultContentType);
    }
  }
  _setContent(template, content, selector) {
    const templateElement = SelectorEngine.findOne(selector, template);
    if (!templateElement) {
      return;
    }
    content = this._resolvePossibleFunction(content);
    if (!content) {
      templateElement.remove();
      return;
    }
    if (isElement2(content)) {
      this._putElementInTemplate(getElement(content), templateElement);
      return;
    }
    if (this._config.html) {
      templateElement.innerHTML = this._maybeSanitize(content);
      return;
    }
    templateElement.textContent = content;
  }
  _maybeSanitize(arg) {
    return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
  }
  _resolvePossibleFunction(arg) {
    return typeof arg === "function" ? arg(this) : arg;
  }
  _putElementInTemplate(element, templateElement) {
    if (this._config.html) {
      templateElement.innerHTML = "";
      templateElement.append(element);
      return;
    }
    templateElement.textContent = element.textContent;
  }
};
var NAME$4 = "tooltip";
var DISALLOWED_ATTRIBUTES = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]);
var CLASS_NAME_FADE$2 = "fade";
var CLASS_NAME_MODAL = "modal";
var CLASS_NAME_SHOW$2 = "show";
var SELECTOR_TOOLTIP_INNER = ".tooltip-inner";
var SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
var EVENT_MODAL_HIDE = "hide.bs.modal";
var TRIGGER_HOVER = "hover";
var TRIGGER_FOCUS = "focus";
var TRIGGER_CLICK = "click";
var TRIGGER_MANUAL = "manual";
var EVENT_HIDE$2 = "hide";
var EVENT_HIDDEN$2 = "hidden";
var EVENT_SHOW$2 = "show";
var EVENT_SHOWN$2 = "shown";
var EVENT_INSERTED = "inserted";
var EVENT_CLICK$1 = "click";
var EVENT_FOCUSIN$1 = "focusin";
var EVENT_FOCUSOUT$1 = "focusout";
var EVENT_MOUSEENTER = "mouseenter";
var EVENT_MOUSELEAVE = "mouseleave";
var AttachmentMap = {
  AUTO: "auto",
  TOP: "top",
  RIGHT: isRTL() ? "left" : "right",
  BOTTOM: "bottom",
  LEFT: isRTL() ? "right" : "left"
};
var Default$3 = {
  allowList: DefaultAllowlist,
  animation: true,
  boundary: "clippingParents",
  container: false,
  customClass: "",
  delay: 0,
  fallbackPlacements: ["top", "right", "bottom", "left"],
  html: false,
  offset: [0, 0],
  placement: "top",
  popperConfig: null,
  sanitize: true,
  sanitizeFn: null,
  selector: false,
  template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  title: "",
  trigger: "hover focus"
};
var DefaultType$3 = {
  allowList: "object",
  animation: "boolean",
  boundary: "(string|element)",
  container: "(string|element|boolean)",
  customClass: "(string|function)",
  delay: "(number|object)",
  fallbackPlacements: "array",
  html: "boolean",
  offset: "(array|string|function)",
  placement: "(string|function)",
  popperConfig: "(null|object|function)",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  selector: "(string|boolean)",
  template: "string",
  title: "(string|element|function)",
  trigger: "string"
};
var Tooltip = class extends BaseComponent {
  constructor(element, config) {
    if (typeof lib_exports === "undefined") {
      throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
    }
    super(element, config);
    this._isEnabled = true;
    this._timeout = 0;
    this._isHovered = null;
    this._activeTrigger = {};
    this._popper = null;
    this._templateFactory = null;
    this._newContent = null;
    this.tip = null;
    this._setListeners();
    if (!this._config.selector) {
      this._fixTitle();
    }
  }
  // Getters
  static get Default() {
    return Default$3;
  }
  static get DefaultType() {
    return DefaultType$3;
  }
  static get NAME() {
    return NAME$4;
  }
  // Public
  enable() {
    this._isEnabled = true;
  }
  disable() {
    this._isEnabled = false;
  }
  toggleEnabled() {
    this._isEnabled = !this._isEnabled;
  }
  toggle() {
    if (!this._isEnabled) {
      return;
    }
    this._activeTrigger.click = !this._activeTrigger.click;
    if (this._isShown()) {
      this._leave();
      return;
    }
    this._enter();
  }
  dispose() {
    clearTimeout(this._timeout);
    EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
    if (this._element.getAttribute("data-bs-original-title")) {
      this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title"));
    }
    this._disposePopper();
    super.dispose();
  }
  show() {
    if (this._element.style.display === "none") {
      throw new Error("Please use show on visible elements");
    }
    if (!(this._isWithContent() && this._isEnabled)) {
      return;
    }
    const showEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOW$2));
    const shadowRoot = findShadowRoot(this._element);
    const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);
    if (showEvent.defaultPrevented || !isInTheDom) {
      return;
    }
    this._disposePopper();
    const tip = this._getTipElement();
    this._element.setAttribute("aria-describedby", tip.getAttribute("id"));
    const {
      container
    } = this._config;
    if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
      container.append(tip);
      EventHandler.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
    }
    this._popper = this._createPopper(tip);
    tip.classList.add(CLASS_NAME_SHOW$2);
    if ("ontouchstart" in document.documentElement) {
      for (const element of [].concat(...document.body.children)) {
        EventHandler.on(element, "mouseover", noop);
      }
    }
    const complete = () => {
      EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOWN$2));
      if (this._isHovered === false) {
        this._leave();
      }
      this._isHovered = false;
    };
    this._queueCallback(complete, this.tip, this._isAnimated());
  }
  hide() {
    if (!this._isShown()) {
      return;
    }
    const hideEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDE$2));
    if (hideEvent.defaultPrevented) {
      return;
    }
    const tip = this._getTipElement();
    tip.classList.remove(CLASS_NAME_SHOW$2);
    if ("ontouchstart" in document.documentElement) {
      for (const element of [].concat(...document.body.children)) {
        EventHandler.off(element, "mouseover", noop);
      }
    }
    this._activeTrigger[TRIGGER_CLICK] = false;
    this._activeTrigger[TRIGGER_FOCUS] = false;
    this._activeTrigger[TRIGGER_HOVER] = false;
    this._isHovered = null;
    const complete = () => {
      if (this._isWithActiveTrigger()) {
        return;
      }
      if (!this._isHovered) {
        this._disposePopper();
      }
      this._element.removeAttribute("aria-describedby");
      EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDDEN$2));
    };
    this._queueCallback(complete, this.tip, this._isAnimated());
  }
  update() {
    if (this._popper) {
      this._popper.update();
    }
  }
  // Protected
  _isWithContent() {
    return Boolean(this._getTitle());
  }
  _getTipElement() {
    if (!this.tip) {
      this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
    }
    return this.tip;
  }
  _createTipElement(content) {
    const tip = this._getTemplateFactory(content).toHtml();
    if (!tip) {
      return null;
    }
    tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
    tip.classList.add(`bs-${this.constructor.NAME}-auto`);
    const tipId = getUID(this.constructor.NAME).toString();
    tip.setAttribute("id", tipId);
    if (this._isAnimated()) {
      tip.classList.add(CLASS_NAME_FADE$2);
    }
    return tip;
  }
  setContent(content) {
    this._newContent = content;
    if (this._isShown()) {
      this._disposePopper();
      this.show();
    }
  }
  _getTemplateFactory(content) {
    if (this._templateFactory) {
      this._templateFactory.changeContent(content);
    } else {
      this._templateFactory = new TemplateFactory({
        ...this._config,
        // the `content` var has to be after `this._config`
        // to override config.content in case of popover
        content,
        extraClass: this._resolvePossibleFunction(this._config.customClass)
      });
    }
    return this._templateFactory;
  }
  _getContentForTemplate() {
    return {
      [SELECTOR_TOOLTIP_INNER]: this._getTitle()
    };
  }
  _getTitle() {
    return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
  }
  // Private
  _initializeOnDelegatedTarget(event) {
    return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
  }
  _isAnimated() {
    return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE$2);
  }
  _isShown() {
    return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW$2);
  }
  _createPopper(tip) {
    const placement = typeof this._config.placement === "function" ? this._config.placement.call(this, tip, this._element) : this._config.placement;
    const attachment = AttachmentMap[placement.toUpperCase()];
    return createPopper3(this._element, tip, this._getPopperConfig(attachment));
  }
  _getOffset() {
    const {
      offset: offset2
    } = this._config;
    if (typeof offset2 === "string") {
      return offset2.split(",").map((value) => Number.parseInt(value, 10));
    }
    if (typeof offset2 === "function") {
      return (popperData) => offset2(popperData, this._element);
    }
    return offset2;
  }
  _resolvePossibleFunction(arg) {
    return typeof arg === "function" ? arg.call(this._element) : arg;
  }
  _getPopperConfig(attachment) {
    const defaultBsPopperConfig = {
      placement: attachment,
      modifiers: [{
        name: "flip",
        options: {
          fallbackPlacements: this._config.fallbackPlacements
        }
      }, {
        name: "offset",
        options: {
          offset: this._getOffset()
        }
      }, {
        name: "preventOverflow",
        options: {
          boundary: this._config.boundary
        }
      }, {
        name: "arrow",
        options: {
          element: `.${this.constructor.NAME}-arrow`
        }
      }, {
        name: "preSetPlacement",
        enabled: true,
        phase: "beforeMain",
        fn: (data) => {
          this._getTipElement().setAttribute("data-popper-placement", data.state.placement);
        }
      }]
    };
    return {
      ...defaultBsPopperConfig,
      ...typeof this._config.popperConfig === "function" ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig
    };
  }
  _setListeners() {
    const triggers = this._config.trigger.split(" ");
    for (const trigger of triggers) {
      if (trigger === "click") {
        EventHandler.on(this._element, this.constructor.eventName(EVENT_CLICK$1), this._config.selector, (event) => {
          const context = this._initializeOnDelegatedTarget(event);
          context.toggle();
        });
      } else if (trigger !== TRIGGER_MANUAL) {
        const eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN$1);
        const eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT$1);
        EventHandler.on(this._element, eventIn, this._config.selector, (event) => {
          const context = this._initializeOnDelegatedTarget(event);
          context._activeTrigger[event.type === "focusin" ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
          context._enter();
        });
        EventHandler.on(this._element, eventOut, this._config.selector, (event) => {
          const context = this._initializeOnDelegatedTarget(event);
          context._activeTrigger[event.type === "focusout" ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
          context._leave();
        });
      }
    }
    this._hideModalHandler = () => {
      if (this._element) {
        this.hide();
      }
    };
    EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
  }
  _fixTitle() {
    const title = this._element.getAttribute("title");
    if (!title) {
      return;
    }
    if (!this._element.getAttribute("aria-label") && !this._element.textContent.trim()) {
      this._element.setAttribute("aria-label", title);
    }
    this._element.setAttribute("data-bs-original-title", title);
    this._element.removeAttribute("title");
  }
  _enter() {
    if (this._isShown() || this._isHovered) {
      this._isHovered = true;
      return;
    }
    this._isHovered = true;
    this._setTimeout(() => {
      if (this._isHovered) {
        this.show();
      }
    }, this._config.delay.show);
  }
  _leave() {
    if (this._isWithActiveTrigger()) {
      return;
    }
    this._isHovered = false;
    this._setTimeout(() => {
      if (!this._isHovered) {
        this.hide();
      }
    }, this._config.delay.hide);
  }
  _setTimeout(handler, timeout) {
    clearTimeout(this._timeout);
    this._timeout = setTimeout(handler, timeout);
  }
  _isWithActiveTrigger() {
    return Object.values(this._activeTrigger).includes(true);
  }
  _getConfig(config) {
    const dataAttributes = Manipulator.getDataAttributes(this._element);
    for (const dataAttribute of Object.keys(dataAttributes)) {
      if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) {
        delete dataAttributes[dataAttribute];
      }
    }
    config = {
      ...dataAttributes,
      ...typeof config === "object" && config ? config : {}
    };
    config = this._mergeConfigObj(config);
    config = this._configAfterMerge(config);
    this._typeCheckConfig(config);
    return config;
  }
  _configAfterMerge(config) {
    config.container = config.container === false ? document.body : getElement(config.container);
    if (typeof config.delay === "number") {
      config.delay = {
        show: config.delay,
        hide: config.delay
      };
    }
    if (typeof config.title === "number") {
      config.title = config.title.toString();
    }
    if (typeof config.content === "number") {
      config.content = config.content.toString();
    }
    return config;
  }
  _getDelegateConfig() {
    const config = {};
    for (const key in this._config) {
      if (this.constructor.Default[key] !== this._config[key]) {
        config[key] = this._config[key];
      }
    }
    config.selector = false;
    config.trigger = "manual";
    return config;
  }
  _disposePopper() {
    if (this._popper) {
      this._popper.destroy();
      this._popper = null;
    }
    if (this.tip) {
      this.tip.remove();
      this.tip = null;
    }
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = Tooltip.getOrCreateInstance(this, config);
      if (typeof config !== "string") {
        return;
      }
      if (typeof data[config] === "undefined") {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config]();
    });
  }
};
defineJQueryPlugin(Tooltip);
var NAME$3 = "popover";
var SELECTOR_TITLE = ".popover-header";
var SELECTOR_CONTENT = ".popover-body";
var Default$2 = {
  ...Tooltip.Default,
  content: "",
  offset: [0, 8],
  placement: "right",
  template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
  trigger: "click"
};
var DefaultType$2 = {
  ...Tooltip.DefaultType,
  content: "(null|string|element|function)"
};
var Popover = class extends Tooltip {
  // Getters
  static get Default() {
    return Default$2;
  }
  static get DefaultType() {
    return DefaultType$2;
  }
  static get NAME() {
    return NAME$3;
  }
  // Overrides
  _isWithContent() {
    return this._getTitle() || this._getContent();
  }
  // Private
  _getContentForTemplate() {
    return {
      [SELECTOR_TITLE]: this._getTitle(),
      [SELECTOR_CONTENT]: this._getContent()
    };
  }
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = Popover.getOrCreateInstance(this, config);
      if (typeof config !== "string") {
        return;
      }
      if (typeof data[config] === "undefined") {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config]();
    });
  }
};
defineJQueryPlugin(Popover);
var NAME$2 = "scrollspy";
var DATA_KEY$2 = "bs.scrollspy";
var EVENT_KEY$2 = `.${DATA_KEY$2}`;
var DATA_API_KEY = ".data-api";
var EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
var EVENT_CLICK = `click${EVENT_KEY$2}`;
var EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$2}${DATA_API_KEY}`;
var CLASS_NAME_DROPDOWN_ITEM = "dropdown-item";
var CLASS_NAME_ACTIVE$1 = "active";
var SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
var SELECTOR_TARGET_LINKS = "[href]";
var SELECTOR_NAV_LIST_GROUP = ".nav, .list-group";
var SELECTOR_NAV_LINKS = ".nav-link";
var SELECTOR_NAV_ITEMS = ".nav-item";
var SELECTOR_LIST_ITEMS = ".list-group-item";
var SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`;
var SELECTOR_DROPDOWN = ".dropdown";
var SELECTOR_DROPDOWN_TOGGLE$1 = ".dropdown-toggle";
var Default$1 = {
  offset: null,
  // TODO: v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "0px 0px -25%",
  smoothScroll: false,
  target: null,
  threshold: [0.1, 0.5, 1]
};
var DefaultType$1 = {
  offset: "(number|null)",
  // TODO v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "string",
  smoothScroll: "boolean",
  target: "element",
  threshold: "array"
};
var ScrollSpy = class extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._targetLinks = /* @__PURE__ */ new Map();
    this._observableSections = /* @__PURE__ */ new Map();
    this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element;
    this._activeTarget = null;
    this._observer = null;
    this._previousScrollData = {
      visibleEntryTop: 0,
      parentScrollTop: 0
    };
    this.refresh();
  }
  // Getters
  static get Default() {
    return Default$1;
  }
  static get DefaultType() {
    return DefaultType$1;
  }
  static get NAME() {
    return NAME$2;
  }
  // Public
  refresh() {
    this._initializeTargetsAndObservables();
    this._maybeEnableSmoothScroll();
    if (this._observer) {
      this._observer.disconnect();
    } else {
      this._observer = this._getNewObserver();
    }
    for (const section of this._observableSections.values()) {
      this._observer.observe(section);
    }
  }
  dispose() {
    this._observer.disconnect();
    super.dispose();
  }
  // Private
  _configAfterMerge(config) {
    config.target = getElement(config.target) || document.body;
    config.rootMargin = config.offset ? `${config.offset}px 0px -30%` : config.rootMargin;
    if (typeof config.threshold === "string") {
      config.threshold = config.threshold.split(",").map((value) => Number.parseFloat(value));
    }
    return config;
  }
  _maybeEnableSmoothScroll() {
    if (!this._config.smoothScroll) {
      return;
    }
    EventHandler.off(this._config.target, EVENT_CLICK);
    EventHandler.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, (event) => {
      const observableSection = this._observableSections.get(event.target.hash);
      if (observableSection) {
        event.preventDefault();
        const root = this._rootElement || window;
        const height = observableSection.offsetTop - this._element.offsetTop;
        if (root.scrollTo) {
          root.scrollTo({
            top: height,
            behavior: "smooth"
          });
          return;
        }
        root.scrollTop = height;
      }
    });
  }
  _getNewObserver() {
    const options = {
      root: this._rootElement,
      threshold: this._config.threshold,
      rootMargin: this._config.rootMargin
    };
    return new IntersectionObserver((entries) => this._observerCallback(entries), options);
  }
  // The logic of selection
  _observerCallback(entries) {
    const targetElement = (entry) => this._targetLinks.get(`#${entry.target.id}`);
    const activate = (entry) => {
      this._previousScrollData.visibleEntryTop = entry.target.offsetTop;
      this._process(targetElement(entry));
    };
    const parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
    const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
    this._previousScrollData.parentScrollTop = parentScrollTop;
    for (const entry of entries) {
      if (!entry.isIntersecting) {
        this._activeTarget = null;
        this._clearActiveClass(targetElement(entry));
        continue;
      }
      const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop;
      if (userScrollsDown && entryIsLowerThanPrevious) {
        activate(entry);
        if (!parentScrollTop) {
          return;
        }
        continue;
      }
      if (!userScrollsDown && !entryIsLowerThanPrevious) {
        activate(entry);
      }
    }
  }
  _initializeTargetsAndObservables() {
    this._targetLinks = /* @__PURE__ */ new Map();
    this._observableSections = /* @__PURE__ */ new Map();
    const targetLinks = SelectorEngine.find(SELECTOR_TARGET_LINKS, this._config.target);
    for (const anchor of targetLinks) {
      if (!anchor.hash || isDisabled(anchor)) {
        continue;
      }
      const observableSection = SelectorEngine.findOne(anchor.hash, this._element);
      if (isVisible(observableSection)) {
        this._targetLinks.set(anchor.hash, anchor);
        this._observableSections.set(anchor.hash, observableSection);
      }
    }
  }
  _process(target) {
    if (this._activeTarget === target) {
      return;
    }
    this._clearActiveClass(this._config.target);
    this._activeTarget = target;
    target.classList.add(CLASS_NAME_ACTIVE$1);
    this._activateParents(target);
    EventHandler.trigger(this._element, EVENT_ACTIVATE, {
      relatedTarget: target
    });
  }
  _activateParents(target) {
    if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
      SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE$1);
      return;
    }
    for (const listGroup of SelectorEngine.parents(target, SELECTOR_NAV_LIST_GROUP)) {
      for (const item of SelectorEngine.prev(listGroup, SELECTOR_LINK_ITEMS)) {
        item.classList.add(CLASS_NAME_ACTIVE$1);
      }
    }
  }
  _clearActiveClass(parent) {
    parent.classList.remove(CLASS_NAME_ACTIVE$1);
    const activeNodes = SelectorEngine.find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE$1}`, parent);
    for (const node of activeNodes) {
      node.classList.remove(CLASS_NAME_ACTIVE$1);
    }
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = ScrollSpy.getOrCreateInstance(this, config);
      if (typeof config !== "string") {
        return;
      }
      if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config]();
    });
  }
};
EventHandler.on(window, EVENT_LOAD_DATA_API$1, () => {
  for (const spy of SelectorEngine.find(SELECTOR_DATA_SPY)) {
    ScrollSpy.getOrCreateInstance(spy);
  }
});
defineJQueryPlugin(ScrollSpy);
var NAME$1 = "tab";
var DATA_KEY$1 = "bs.tab";
var EVENT_KEY$1 = `.${DATA_KEY$1}`;
var EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
var EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
var EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
var EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
var EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}`;
var EVENT_KEYDOWN = `keydown${EVENT_KEY$1}`;
var EVENT_LOAD_DATA_API = `load${EVENT_KEY$1}`;
var ARROW_LEFT_KEY = "ArrowLeft";
var ARROW_RIGHT_KEY = "ArrowRight";
var ARROW_UP_KEY = "ArrowUp";
var ARROW_DOWN_KEY = "ArrowDown";
var CLASS_NAME_ACTIVE = "active";
var CLASS_NAME_FADE$1 = "fade";
var CLASS_NAME_SHOW$1 = "show";
var CLASS_DROPDOWN = "dropdown";
var SELECTOR_DROPDOWN_TOGGLE = ".dropdown-toggle";
var SELECTOR_DROPDOWN_MENU = ".dropdown-menu";
var NOT_SELECTOR_DROPDOWN_TOGGLE = ":not(.dropdown-toggle)";
var SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
var SELECTOR_OUTER = ".nav-item, .list-group-item";
var SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`;
var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
var SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE}`;
var SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="list"]`;
var Tab = class extends BaseComponent {
  constructor(element) {
    super(element);
    this._parent = this._element.closest(SELECTOR_TAB_PANEL);
    if (!this._parent) {
      return;
    }
    this._setInitialAttributes(this._parent, this._getChildren());
    EventHandler.on(this._element, EVENT_KEYDOWN, (event) => this._keydown(event));
  }
  // Getters
  static get NAME() {
    return NAME$1;
  }
  // Public
  show() {
    const innerElem = this._element;
    if (this._elemIsActive(innerElem)) {
      return;
    }
    const active = this._getActiveElem();
    const hideEvent = active ? EventHandler.trigger(active, EVENT_HIDE$1, {
      relatedTarget: innerElem
    }) : null;
    const showEvent = EventHandler.trigger(innerElem, EVENT_SHOW$1, {
      relatedTarget: active
    });
    if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) {
      return;
    }
    this._deactivate(active, innerElem);
    this._activate(innerElem, active);
  }
  // Private
  _activate(element, relatedElem) {
    if (!element) {
      return;
    }
    element.classList.add(CLASS_NAME_ACTIVE);
    this._activate(getElementFromSelector(element));
    const complete = () => {
      if (element.getAttribute("role") !== "tab") {
        element.classList.add(CLASS_NAME_SHOW$1);
        return;
      }
      element.removeAttribute("tabindex");
      element.setAttribute("aria-selected", true);
      this._toggleDropDown(element, true);
      EventHandler.trigger(element, EVENT_SHOWN$1, {
        relatedTarget: relatedElem
      });
    };
    this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
  }
  _deactivate(element, relatedElem) {
    if (!element) {
      return;
    }
    element.classList.remove(CLASS_NAME_ACTIVE);
    element.blur();
    this._deactivate(getElementFromSelector(element));
    const complete = () => {
      if (element.getAttribute("role") !== "tab") {
        element.classList.remove(CLASS_NAME_SHOW$1);
        return;
      }
      element.setAttribute("aria-selected", false);
      element.setAttribute("tabindex", "-1");
      this._toggleDropDown(element, false);
      EventHandler.trigger(element, EVENT_HIDDEN$1, {
        relatedTarget: relatedElem
      });
    };
    this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
  }
  _keydown(event) {
    if (![ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY].includes(event.key)) {
      return;
    }
    event.stopPropagation();
    event.preventDefault();
    const isNext = [ARROW_RIGHT_KEY, ARROW_DOWN_KEY].includes(event.key);
    const nextActiveElement = getNextActiveElement(this._getChildren().filter((element) => !isDisabled(element)), event.target, isNext, true);
    if (nextActiveElement) {
      nextActiveElement.focus({
        preventScroll: true
      });
      Tab.getOrCreateInstance(nextActiveElement).show();
    }
  }
  _getChildren() {
    return SelectorEngine.find(SELECTOR_INNER_ELEM, this._parent);
  }
  _getActiveElem() {
    return this._getChildren().find((child) => this._elemIsActive(child)) || null;
  }
  _setInitialAttributes(parent, children) {
    this._setAttributeIfNotExists(parent, "role", "tablist");
    for (const child of children) {
      this._setInitialAttributesOnChild(child);
    }
  }
  _setInitialAttributesOnChild(child) {
    child = this._getInnerElement(child);
    const isActive = this._elemIsActive(child);
    const outerElem = this._getOuterElement(child);
    child.setAttribute("aria-selected", isActive);
    if (outerElem !== child) {
      this._setAttributeIfNotExists(outerElem, "role", "presentation");
    }
    if (!isActive) {
      child.setAttribute("tabindex", "-1");
    }
    this._setAttributeIfNotExists(child, "role", "tab");
    this._setInitialAttributesOnTargetPanel(child);
  }
  _setInitialAttributesOnTargetPanel(child) {
    const target = getElementFromSelector(child);
    if (!target) {
      return;
    }
    this._setAttributeIfNotExists(target, "role", "tabpanel");
    if (child.id) {
      this._setAttributeIfNotExists(target, "aria-labelledby", `#${child.id}`);
    }
  }
  _toggleDropDown(element, open) {
    const outerElem = this._getOuterElement(element);
    if (!outerElem.classList.contains(CLASS_DROPDOWN)) {
      return;
    }
    const toggle = (selector, className) => {
      const element2 = SelectorEngine.findOne(selector, outerElem);
      if (element2) {
        element2.classList.toggle(className, open);
      }
    };
    toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE);
    toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW$1);
    outerElem.setAttribute("aria-expanded", open);
  }
  _setAttributeIfNotExists(element, attribute, value) {
    if (!element.hasAttribute(attribute)) {
      element.setAttribute(attribute, value);
    }
  }
  _elemIsActive(elem) {
    return elem.classList.contains(CLASS_NAME_ACTIVE);
  }
  // Try to get the inner element (usually the .nav-link)
  _getInnerElement(elem) {
    return elem.matches(SELECTOR_INNER_ELEM) ? elem : SelectorEngine.findOne(SELECTOR_INNER_ELEM, elem);
  }
  // Try to get the outer element (usually the .nav-item)
  _getOuterElement(elem) {
    return elem.closest(SELECTOR_OUTER) || elem;
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = Tab.getOrCreateInstance(this);
      if (typeof config !== "string") {
        return;
      }
      if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config]();
    });
  }
};
EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function(event) {
  if (["A", "AREA"].includes(this.tagName)) {
    event.preventDefault();
  }
  if (isDisabled(this)) {
    return;
  }
  Tab.getOrCreateInstance(this).show();
});
EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
  for (const element of SelectorEngine.find(SELECTOR_DATA_TOGGLE_ACTIVE)) {
    Tab.getOrCreateInstance(element);
  }
});
defineJQueryPlugin(Tab);
var NAME = "toast";
var DATA_KEY = "bs.toast";
var EVENT_KEY = `.${DATA_KEY}`;
var EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
var EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
var EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
var EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
var EVENT_HIDE = `hide${EVENT_KEY}`;
var EVENT_HIDDEN = `hidden${EVENT_KEY}`;
var EVENT_SHOW = `show${EVENT_KEY}`;
var EVENT_SHOWN = `shown${EVENT_KEY}`;
var CLASS_NAME_FADE = "fade";
var CLASS_NAME_HIDE = "hide";
var CLASS_NAME_SHOW = "show";
var CLASS_NAME_SHOWING = "showing";
var DefaultType = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
};
var Default = {
  animation: true,
  autohide: true,
  delay: 5e3
};
var Toast = class extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._timeout = null;
    this._hasMouseInteraction = false;
    this._hasKeyboardInteraction = false;
    this._setListeners();
  }
  // Getters
  static get Default() {
    return Default;
  }
  static get DefaultType() {
    return DefaultType;
  }
  static get NAME() {
    return NAME;
  }
  // Public
  show() {
    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);
    if (showEvent.defaultPrevented) {
      return;
    }
    this._clearTimeout();
    if (this._config.animation) {
      this._element.classList.add(CLASS_NAME_FADE);
    }
    const complete = () => {
      this._element.classList.remove(CLASS_NAME_SHOWING);
      EventHandler.trigger(this._element, EVENT_SHOWN);
      this._maybeScheduleHide();
    };
    this._element.classList.remove(CLASS_NAME_HIDE);
    reflow(this._element);
    this._element.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING);
    this._queueCallback(complete, this._element, this._config.animation);
  }
  hide() {
    if (!this.isShown()) {
      return;
    }
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
    if (hideEvent.defaultPrevented) {
      return;
    }
    const complete = () => {
      this._element.classList.add(CLASS_NAME_HIDE);
      this._element.classList.remove(CLASS_NAME_SHOWING, CLASS_NAME_SHOW);
      EventHandler.trigger(this._element, EVENT_HIDDEN);
    };
    this._element.classList.add(CLASS_NAME_SHOWING);
    this._queueCallback(complete, this._element, this._config.animation);
  }
  dispose() {
    this._clearTimeout();
    if (this.isShown()) {
      this._element.classList.remove(CLASS_NAME_SHOW);
    }
    super.dispose();
  }
  isShown() {
    return this._element.classList.contains(CLASS_NAME_SHOW);
  }
  // Private
  _maybeScheduleHide() {
    if (!this._config.autohide) {
      return;
    }
    if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
      return;
    }
    this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay);
  }
  _onInteraction(event, isInteracting) {
    switch (event.type) {
      case "mouseover":
      case "mouseout": {
        this._hasMouseInteraction = isInteracting;
        break;
      }
      case "focusin":
      case "focusout": {
        this._hasKeyboardInteraction = isInteracting;
        break;
      }
    }
    if (isInteracting) {
      this._clearTimeout();
      return;
    }
    const nextElement = event.relatedTarget;
    if (this._element === nextElement || this._element.contains(nextElement)) {
      return;
    }
    this._maybeScheduleHide();
  }
  _setListeners() {
    EventHandler.on(this._element, EVENT_MOUSEOVER, (event) => this._onInteraction(event, true));
    EventHandler.on(this._element, EVENT_MOUSEOUT, (event) => this._onInteraction(event, false));
    EventHandler.on(this._element, EVENT_FOCUSIN, (event) => this._onInteraction(event, true));
    EventHandler.on(this._element, EVENT_FOCUSOUT, (event) => this._onInteraction(event, false));
  }
  _clearTimeout() {
    clearTimeout(this._timeout);
    this._timeout = null;
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = Toast.getOrCreateInstance(this, config);
      if (typeof config === "string") {
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      }
    });
  }
};
enableDismissTrigger(Toast);
defineJQueryPlugin(Toast);

// node_modules/datatables.net-bs5/js/dataTables.bootstrap5.mjs
var import_jquery2 = __toESM(require_jquery(), 1);

// node_modules/datatables.net/js/jquery.dataTables.mjs
var import_jquery = __toESM(require_jquery(), 1);
var $2 = import_jquery.default;
var DataTable = function(selector, options) {
  if (DataTable.factory(selector, options)) {
    return DataTable;
  }
  if (this instanceof DataTable) {
    return $2(selector).DataTable(options);
  } else {
    options = selector;
  }
  this.$ = function(sSelector, oOpts) {
    return this.api(true).$(sSelector, oOpts);
  };
  this._ = function(sSelector, oOpts) {
    return this.api(true).rows(sSelector, oOpts).data();
  };
  this.api = function(traditional) {
    return traditional ? new _Api(
      _fnSettingsFromNode(this[_ext.iApiIndex])
    ) : new _Api(this);
  };
  this.fnAddData = function(data, redraw) {
    var api = this.api(true);
    var rows = Array.isArray(data) && (Array.isArray(data[0]) || $2.isPlainObject(data[0])) ? api.rows.add(data) : api.row.add(data);
    if (redraw === void 0 || redraw) {
      api.draw();
    }
    return rows.flatten().toArray();
  };
  this.fnAdjustColumnSizing = function(bRedraw) {
    var api = this.api(true).columns.adjust();
    var settings = api.settings()[0];
    var scroll = settings.oScroll;
    if (bRedraw === void 0 || bRedraw) {
      api.draw(false);
    } else if (scroll.sX !== "" || scroll.sY !== "") {
      _fnScrollDraw(settings);
    }
  };
  this.fnClearTable = function(bRedraw) {
    var api = this.api(true).clear();
    if (bRedraw === void 0 || bRedraw) {
      api.draw();
    }
  };
  this.fnClose = function(nTr) {
    this.api(true).row(nTr).child.hide();
  };
  this.fnDeleteRow = function(target, callback, redraw) {
    var api = this.api(true);
    var rows = api.rows(target);
    var settings = rows.settings()[0];
    var data = settings.aoData[rows[0][0]];
    rows.remove();
    if (callback) {
      callback.call(this, settings, data);
    }
    if (redraw === void 0 || redraw) {
      api.draw();
    }
    return data;
  };
  this.fnDestroy = function(remove) {
    this.api(true).destroy(remove);
  };
  this.fnDraw = function(complete) {
    this.api(true).draw(complete);
  };
  this.fnFilter = function(sInput, iColumn, bRegex, bSmart, bShowGlobal, bCaseInsensitive) {
    var api = this.api(true);
    if (iColumn === null || iColumn === void 0) {
      api.search(sInput, bRegex, bSmart, bCaseInsensitive);
    } else {
      api.column(iColumn).search(sInput, bRegex, bSmart, bCaseInsensitive);
    }
    api.draw();
  };
  this.fnGetData = function(src, col) {
    var api = this.api(true);
    if (src !== void 0) {
      var type = src.nodeName ? src.nodeName.toLowerCase() : "";
      return col !== void 0 || type == "td" || type == "th" ? api.cell(src, col).data() : api.row(src).data() || null;
    }
    return api.data().toArray();
  };
  this.fnGetNodes = function(iRow) {
    var api = this.api(true);
    return iRow !== void 0 ? api.row(iRow).node() : api.rows().nodes().flatten().toArray();
  };
  this.fnGetPosition = function(node) {
    var api = this.api(true);
    var nodeName = node.nodeName.toUpperCase();
    if (nodeName == "TR") {
      return api.row(node).index();
    } else if (nodeName == "TD" || nodeName == "TH") {
      var cell = api.cell(node).index();
      return [
        cell.row,
        cell.columnVisible,
        cell.column
      ];
    }
    return null;
  };
  this.fnIsOpen = function(nTr) {
    return this.api(true).row(nTr).child.isShown();
  };
  this.fnOpen = function(nTr, mHtml, sClass) {
    return this.api(true).row(nTr).child(mHtml, sClass).show().child()[0];
  };
  this.fnPageChange = function(mAction, bRedraw) {
    var api = this.api(true).page(mAction);
    if (bRedraw === void 0 || bRedraw) {
      api.draw(false);
    }
  };
  this.fnSetColumnVis = function(iCol, bShow, bRedraw) {
    var api = this.api(true).column(iCol).visible(bShow);
    if (bRedraw === void 0 || bRedraw) {
      api.columns.adjust().draw();
    }
  };
  this.fnSettings = function() {
    return _fnSettingsFromNode(this[_ext.iApiIndex]);
  };
  this.fnSort = function(aaSort) {
    this.api(true).order(aaSort).draw();
  };
  this.fnSortListener = function(nNode, iColumn, fnCallback) {
    this.api(true).order.listener(nNode, iColumn, fnCallback);
  };
  this.fnUpdate = function(mData, mRow, iColumn, bRedraw, bAction) {
    var api = this.api(true);
    if (iColumn === void 0 || iColumn === null) {
      api.row(mRow).data(mData);
    } else {
      api.cell(mRow, iColumn).data(mData);
    }
    if (bAction === void 0 || bAction) {
      api.columns.adjust();
    }
    if (bRedraw === void 0 || bRedraw) {
      api.draw();
    }
    return 0;
  };
  this.fnVersionCheck = _ext.fnVersionCheck;
  var _that = this;
  var emptyInit = options === void 0;
  var len = this.length;
  if (emptyInit) {
    options = {};
  }
  this.oApi = this.internal = _ext.internal;
  for (var fn2 in DataTable.ext.internal) {
    if (fn2) {
      this[fn2] = _fnExternApiFunc(fn2);
    }
  }
  this.each(function() {
    var o = {};
    var oInit = len > 1 ? (
      // optimisation for single table case
      _fnExtend(o, options, true)
    ) : options;
    var i2 = 0, iLen, j, jLen, k, kLen;
    var sId = this.getAttribute("id");
    var bInitHandedOff = false;
    var defaults = DataTable.defaults;
    var $this = $2(this);
    if (this.nodeName.toLowerCase() != "table") {
      _fnLog(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
      return;
    }
    _fnCompatOpts(defaults);
    _fnCompatCols(defaults.column);
    _fnCamelToHungarian(defaults, defaults, true);
    _fnCamelToHungarian(defaults.column, defaults.column, true);
    _fnCamelToHungarian(defaults, $2.extend(oInit, $this.data()), true);
    var allSettings = DataTable.settings;
    for (i2 = 0, iLen = allSettings.length; i2 < iLen; i2++) {
      var s = allSettings[i2];
      if (s.nTable == this || s.nTHead && s.nTHead.parentNode == this || s.nTFoot && s.nTFoot.parentNode == this) {
        var bRetrieve = oInit.bRetrieve !== void 0 ? oInit.bRetrieve : defaults.bRetrieve;
        var bDestroy = oInit.bDestroy !== void 0 ? oInit.bDestroy : defaults.bDestroy;
        if (emptyInit || bRetrieve) {
          return s.oInstance;
        } else if (bDestroy) {
          s.oInstance.fnDestroy();
          break;
        } else {
          _fnLog(s, 0, "Cannot reinitialise DataTable", 3);
          return;
        }
      }
      if (s.sTableId == this.id) {
        allSettings.splice(i2, 1);
        break;
      }
    }
    if (sId === null || sId === "") {
      sId = "DataTables_Table_" + DataTable.ext._unique++;
      this.id = sId;
    }
    var oSettings = $2.extend(true, {}, DataTable.models.oSettings, {
      "sDestroyWidth": $this[0].style.width,
      "sInstance": sId,
      "sTableId": sId
    });
    oSettings.nTable = this;
    oSettings.oApi = _that.internal;
    oSettings.oInit = oInit;
    allSettings.push(oSettings);
    oSettings.oInstance = _that.length === 1 ? _that : $this.dataTable();
    _fnCompatOpts(oInit);
    _fnLanguageCompat(oInit.oLanguage);
    if (oInit.aLengthMenu && !oInit.iDisplayLength) {
      oInit.iDisplayLength = Array.isArray(oInit.aLengthMenu[0]) ? oInit.aLengthMenu[0][0] : oInit.aLengthMenu[0];
    }
    oInit = _fnExtend($2.extend(true, {}, defaults), oInit);
    _fnMap(oSettings.oFeatures, oInit, [
      "bPaginate",
      "bLengthChange",
      "bFilter",
      "bSort",
      "bSortMulti",
      "bInfo",
      "bProcessing",
      "bAutoWidth",
      "bSortClasses",
      "bServerSide",
      "bDeferRender"
    ]);
    _fnMap(oSettings, oInit, [
      "asStripeClasses",
      "ajax",
      "fnServerData",
      "fnFormatNumber",
      "sServerMethod",
      "aaSorting",
      "aaSortingFixed",
      "aLengthMenu",
      "sPaginationType",
      "sAjaxSource",
      "sAjaxDataProp",
      "iStateDuration",
      "sDom",
      "bSortCellsTop",
      "iTabIndex",
      "fnStateLoadCallback",
      "fnStateSaveCallback",
      "renderer",
      "searchDelay",
      "rowId",
      ["iCookieDuration", "iStateDuration"],
      // backwards compat
      ["oSearch", "oPreviousSearch"],
      ["aoSearchCols", "aoPreSearchCols"],
      ["iDisplayLength", "_iDisplayLength"]
    ]);
    _fnMap(oSettings.oScroll, oInit, [
      ["sScrollX", "sX"],
      ["sScrollXInner", "sXInner"],
      ["sScrollY", "sY"],
      ["bScrollCollapse", "bCollapse"]
    ]);
    _fnMap(oSettings.oLanguage, oInit, "fnInfoCallback");
    _fnCallbackReg(oSettings, "aoDrawCallback", oInit.fnDrawCallback, "user");
    _fnCallbackReg(oSettings, "aoServerParams", oInit.fnServerParams, "user");
    _fnCallbackReg(oSettings, "aoStateSaveParams", oInit.fnStateSaveParams, "user");
    _fnCallbackReg(oSettings, "aoStateLoadParams", oInit.fnStateLoadParams, "user");
    _fnCallbackReg(oSettings, "aoStateLoaded", oInit.fnStateLoaded, "user");
    _fnCallbackReg(oSettings, "aoRowCallback", oInit.fnRowCallback, "user");
    _fnCallbackReg(oSettings, "aoRowCreatedCallback", oInit.fnCreatedRow, "user");
    _fnCallbackReg(oSettings, "aoHeaderCallback", oInit.fnHeaderCallback, "user");
    _fnCallbackReg(oSettings, "aoFooterCallback", oInit.fnFooterCallback, "user");
    _fnCallbackReg(oSettings, "aoInitComplete", oInit.fnInitComplete, "user");
    _fnCallbackReg(oSettings, "aoPreDrawCallback", oInit.fnPreDrawCallback, "user");
    oSettings.rowIdFn = _fnGetObjectDataFn(oInit.rowId);
    _fnBrowserDetect(oSettings);
    var oClasses = oSettings.oClasses;
    $2.extend(oClasses, DataTable.ext.classes, oInit.oClasses);
    $this.addClass(oClasses.sTable);
    if (oSettings.iInitDisplayStart === void 0) {
      oSettings.iInitDisplayStart = oInit.iDisplayStart;
      oSettings._iDisplayStart = oInit.iDisplayStart;
    }
    if (oInit.iDeferLoading !== null) {
      oSettings.bDeferLoading = true;
      var tmp = Array.isArray(oInit.iDeferLoading);
      oSettings._iRecordsDisplay = tmp ? oInit.iDeferLoading[0] : oInit.iDeferLoading;
      oSettings._iRecordsTotal = tmp ? oInit.iDeferLoading[1] : oInit.iDeferLoading;
    }
    var oLanguage = oSettings.oLanguage;
    $2.extend(true, oLanguage, oInit.oLanguage);
    if (oLanguage.sUrl) {
      $2.ajax({
        dataType: "json",
        url: oLanguage.sUrl,
        success: function(json) {
          _fnCamelToHungarian(defaults.oLanguage, json);
          _fnLanguageCompat(json);
          $2.extend(true, oLanguage, json, oSettings.oInit.oLanguage);
          _fnCallbackFire(oSettings, null, "i18n", [oSettings]);
          _fnInitialise(oSettings);
        },
        error: function() {
          _fnInitialise(oSettings);
        }
      });
      bInitHandedOff = true;
    } else {
      _fnCallbackFire(oSettings, null, "i18n", [oSettings]);
    }
    if (oInit.asStripeClasses === null) {
      oSettings.asStripeClasses = [
        oClasses.sStripeOdd,
        oClasses.sStripeEven
      ];
    }
    var stripeClasses = oSettings.asStripeClasses;
    var rowOne = $this.children("tbody").find("tr").eq(0);
    if ($2.inArray(true, $2.map(stripeClasses, function(el, i3) {
      return rowOne.hasClass(el);
    })) !== -1) {
      $2("tbody tr", this).removeClass(stripeClasses.join(" "));
      oSettings.asDestroyStripes = stripeClasses.slice();
    }
    var anThs = [];
    var aoColumnsInit;
    var nThead = this.getElementsByTagName("thead");
    if (nThead.length !== 0) {
      _fnDetectHeader(oSettings.aoHeader, nThead[0]);
      anThs = _fnGetUniqueThs(oSettings);
    }
    if (oInit.aoColumns === null) {
      aoColumnsInit = [];
      for (i2 = 0, iLen = anThs.length; i2 < iLen; i2++) {
        aoColumnsInit.push(null);
      }
    } else {
      aoColumnsInit = oInit.aoColumns;
    }
    for (i2 = 0, iLen = aoColumnsInit.length; i2 < iLen; i2++) {
      _fnAddColumn(oSettings, anThs ? anThs[i2] : null);
    }
    _fnApplyColumnDefs(oSettings, oInit.aoColumnDefs, aoColumnsInit, function(iCol, oDef) {
      _fnColumnOptions(oSettings, iCol, oDef);
    });
    if (rowOne.length) {
      var a = function(cell, name) {
        return cell.getAttribute("data-" + name) !== null ? name : null;
      };
      $2(rowOne[0]).children("th, td").each(function(i3, cell) {
        var col = oSettings.aoColumns[i3];
        if (!col) {
          _fnLog(oSettings, 0, "Incorrect column count", 18);
        }
        if (col.mData === i3) {
          var sort = a(cell, "sort") || a(cell, "order");
          var filter = a(cell, "filter") || a(cell, "search");
          if (sort !== null || filter !== null) {
            col.mData = {
              _: i3 + ".display",
              sort: sort !== null ? i3 + ".@data-" + sort : void 0,
              type: sort !== null ? i3 + ".@data-" + sort : void 0,
              filter: filter !== null ? i3 + ".@data-" + filter : void 0
            };
            col._isArrayHost = true;
            _fnColumnOptions(oSettings, i3);
          }
        }
      });
    }
    var features = oSettings.oFeatures;
    var loadedInit = function() {
      if (oInit.aaSorting === void 0) {
        var sorting = oSettings.aaSorting;
        for (i2 = 0, iLen = sorting.length; i2 < iLen; i2++) {
          sorting[i2][1] = oSettings.aoColumns[i2].asSorting[0];
        }
      }
      _fnSortingClasses(oSettings);
      if (features.bSort) {
        _fnCallbackReg(oSettings, "aoDrawCallback", function() {
          if (oSettings.bSorted) {
            var aSort = _fnSortFlatten(oSettings);
            var sortedColumns = {};
            $2.each(aSort, function(i3, val) {
              sortedColumns[val.src] = val.dir;
            });
            _fnCallbackFire(oSettings, null, "order", [oSettings, aSort, sortedColumns]);
            _fnSortAria(oSettings);
          }
        });
      }
      _fnCallbackReg(oSettings, "aoDrawCallback", function() {
        if (oSettings.bSorted || _fnDataSource(oSettings) === "ssp" || features.bDeferRender) {
          _fnSortingClasses(oSettings);
        }
      }, "sc");
      var captions = $this.children("caption").each(function() {
        this._captionSide = $2(this).css("caption-side");
      });
      var thead = $this.children("thead");
      if (thead.length === 0) {
        thead = $2("<thead/>").appendTo($this);
      }
      oSettings.nTHead = thead[0];
      var tbody = $this.children("tbody");
      if (tbody.length === 0) {
        tbody = $2("<tbody/>").insertAfter(thead);
      }
      oSettings.nTBody = tbody[0];
      var tfoot = $this.children("tfoot");
      if (tfoot.length === 0 && captions.length > 0 && (oSettings.oScroll.sX !== "" || oSettings.oScroll.sY !== "")) {
        tfoot = $2("<tfoot/>").appendTo($this);
      }
      if (tfoot.length === 0 || tfoot.children().length === 0) {
        $this.addClass(oClasses.sNoFooter);
      } else if (tfoot.length > 0) {
        oSettings.nTFoot = tfoot[0];
        _fnDetectHeader(oSettings.aoFooter, oSettings.nTFoot);
      }
      if (oInit.aaData) {
        for (i2 = 0; i2 < oInit.aaData.length; i2++) {
          _fnAddData(oSettings, oInit.aaData[i2]);
        }
      } else if (oSettings.bDeferLoading || _fnDataSource(oSettings) == "dom") {
        _fnAddTr(oSettings, $2(oSettings.nTBody).children("tr"));
      }
      oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
      oSettings.bInitialised = true;
      if (bInitHandedOff === false) {
        _fnInitialise(oSettings);
      }
    };
    _fnCallbackReg(oSettings, "aoDrawCallback", _fnSaveState, "state_save");
    if (oInit.bStateSave) {
      features.bStateSave = true;
      _fnLoadState(oSettings, oInit, loadedInit);
    } else {
      loadedInit();
    }
  });
  _that = null;
  return this;
};
var _ext;
var _Api;
var _api_register;
var _api_registerPlural;
var _re_dic = {};
var _re_new_lines = /[\r\n\u2028]/g;
var _re_html = /<.*?>/g;
var _re_date = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/;
var _re_escape_regex = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^", "-"].join("|\\") + ")", "g");
var _re_formatted_numeric = /['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi;
var _empty = function(d) {
  return !d || d === true || d === "-" ? true : false;
};
var _intVal = function(s) {
  var integer = parseInt(s, 10);
  return !isNaN(integer) && isFinite(s) ? integer : null;
};
var _numToDecimal = function(num, decimalPoint) {
  if (!_re_dic[decimalPoint]) {
    _re_dic[decimalPoint] = new RegExp(_fnEscapeRegex(decimalPoint), "g");
  }
  return typeof num === "string" && decimalPoint !== "." ? num.replace(/\./g, "").replace(_re_dic[decimalPoint], ".") : num;
};
var _isNumber = function(d, decimalPoint, formatted) {
  let type = typeof d;
  var strType = type === "string";
  if (type === "number" || type === "bigint") {
    return true;
  }
  if (_empty(d)) {
    return true;
  }
  if (decimalPoint && strType) {
    d = _numToDecimal(d, decimalPoint);
  }
  if (formatted && strType) {
    d = d.replace(_re_formatted_numeric, "");
  }
  return !isNaN(parseFloat(d)) && isFinite(d);
};
var _isHtml = function(d) {
  return _empty(d) || typeof d === "string";
};
var _htmlNumeric = function(d, decimalPoint, formatted) {
  if (_empty(d)) {
    return true;
  }
  var html = _isHtml(d);
  return !html ? null : _isNumber(_stripHtml(d), decimalPoint, formatted) ? true : null;
};
var _pluck = function(a, prop, prop2) {
  var out = [];
  var i2 = 0, ien = a.length;
  if (prop2 !== void 0) {
    for (; i2 < ien; i2++) {
      if (a[i2] && a[i2][prop]) {
        out.push(a[i2][prop][prop2]);
      }
    }
  } else {
    for (; i2 < ien; i2++) {
      if (a[i2]) {
        out.push(a[i2][prop]);
      }
    }
  }
  return out;
};
var _pluck_order = function(a, order2, prop, prop2) {
  var out = [];
  var i2 = 0, ien = order2.length;
  if (prop2 !== void 0) {
    for (; i2 < ien; i2++) {
      if (a[order2[i2]][prop]) {
        out.push(a[order2[i2]][prop][prop2]);
      }
    }
  } else {
    for (; i2 < ien; i2++) {
      out.push(a[order2[i2]][prop]);
    }
  }
  return out;
};
var _range = function(len, start2) {
  var out = [];
  var end2;
  if (start2 === void 0) {
    start2 = 0;
    end2 = len;
  } else {
    end2 = start2;
    start2 = len;
  }
  for (var i2 = start2; i2 < end2; i2++) {
    out.push(i2);
  }
  return out;
};
var _removeEmpty = function(a) {
  var out = [];
  for (var i2 = 0, ien = a.length; i2 < ien; i2++) {
    if (a[i2]) {
      out.push(a[i2]);
    }
  }
  return out;
};
var _stripHtml = function(d) {
  return d.replace(_re_html, "");
};
var _areAllUnique = function(src) {
  if (src.length < 2) {
    return true;
  }
  var sorted = src.slice().sort();
  var last = sorted[0];
  for (var i2 = 1, ien = sorted.length; i2 < ien; i2++) {
    if (sorted[i2] === last) {
      return false;
    }
    last = sorted[i2];
  }
  return true;
};
var _unique = function(src) {
  if (_areAllUnique(src)) {
    return src.slice();
  }
  var out = [], val, i2, ien = src.length, j, k = 0;
  again:
    for (i2 = 0; i2 < ien; i2++) {
      val = src[i2];
      for (j = 0; j < k; j++) {
        if (out[j] === val) {
          continue again;
        }
      }
      out.push(val);
      k++;
    }
  return out;
};
var _flatten = function(out, val) {
  if (Array.isArray(val)) {
    for (var i2 = 0; i2 < val.length; i2++) {
      _flatten(out, val[i2]);
    }
  } else {
    out.push(val);
  }
  return out;
};
var _includes = function(search, start2) {
  if (start2 === void 0) {
    start2 = 0;
  }
  return this.indexOf(search, start2) !== -1;
};
if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === "[object Array]";
  };
}
if (!Array.prototype.includes) {
  Array.prototype.includes = _includes;
}
if (!String.prototype.trim) {
  String.prototype.trim = function() {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  };
}
if (!String.prototype.includes) {
  String.prototype.includes = _includes;
}
DataTable.util = {
  /**
   * Throttle the calls to a function. Arguments and context are maintained
   * for the throttled function.
   *
   * @param {function} fn Function to be called
   * @param {integer} freq Call frequency in mS
   * @return {function} Wrapped function
   */
  throttle: function(fn2, freq) {
    var frequency = freq !== void 0 ? freq : 200, last, timer;
    return function() {
      var that = this, now = +/* @__PURE__ */ new Date(), args = arguments;
      if (last && now < last + frequency) {
        clearTimeout(timer);
        timer = setTimeout(function() {
          last = void 0;
          fn2.apply(that, args);
        }, frequency);
      } else {
        last = now;
        fn2.apply(that, args);
      }
    };
  },
  /**
   * Escape a string such that it can be used in a regular expression
   *
   *  @param {string} val string to escape
   *  @returns {string} escaped string
   */
  escapeRegex: function(val) {
    return val.replace(_re_escape_regex, "\\$1");
  },
  /**
   * Create a function that will write to a nested object or array
   * @param {*} source JSON notation string
   * @returns Write function
   */
  set: function(source) {
    if ($2.isPlainObject(source)) {
      return DataTable.util.set(source._);
    } else if (source === null) {
      return function() {
      };
    } else if (typeof source === "function") {
      return function(data, val, meta) {
        source(data, "set", val, meta);
      };
    } else if (typeof source === "string" && (source.indexOf(".") !== -1 || source.indexOf("[") !== -1 || source.indexOf("(") !== -1)) {
      var setData = function(data, val, src) {
        var a = _fnSplitObjNotation(src), b;
        var aLast = a[a.length - 1];
        var arrayNotation, funcNotation, o, innerSrc;
        for (var i2 = 0, iLen = a.length - 1; i2 < iLen; i2++) {
          if (a[i2] === "__proto__" || a[i2] === "constructor") {
            throw new Error("Cannot set prototype values");
          }
          arrayNotation = a[i2].match(__reArray);
          funcNotation = a[i2].match(__reFn);
          if (arrayNotation) {
            a[i2] = a[i2].replace(__reArray, "");
            data[a[i2]] = [];
            b = a.slice();
            b.splice(0, i2 + 1);
            innerSrc = b.join(".");
            if (Array.isArray(val)) {
              for (var j = 0, jLen = val.length; j < jLen; j++) {
                o = {};
                setData(o, val[j], innerSrc);
                data[a[i2]].push(o);
              }
            } else {
              data[a[i2]] = val;
            }
            return;
          } else if (funcNotation) {
            a[i2] = a[i2].replace(__reFn, "");
            data = data[a[i2]](val);
          }
          if (data[a[i2]] === null || data[a[i2]] === void 0) {
            data[a[i2]] = {};
          }
          data = data[a[i2]];
        }
        if (aLast.match(__reFn)) {
          data = data[aLast.replace(__reFn, "")](val);
        } else {
          data[aLast.replace(__reArray, "")] = val;
        }
      };
      return function(data, val) {
        return setData(data, val, source);
      };
    } else {
      return function(data, val) {
        data[source] = val;
      };
    }
  },
  /**
   * Create a function that will read nested objects from arrays, based on JSON notation
   * @param {*} source JSON notation string
   * @returns Value read
   */
  get: function(source) {
    if ($2.isPlainObject(source)) {
      var o = {};
      $2.each(source, function(key, val) {
        if (val) {
          o[key] = DataTable.util.get(val);
        }
      });
      return function(data, type, row, meta) {
        var t = o[type] || o._;
        return t !== void 0 ? t(data, type, row, meta) : data;
      };
    } else if (source === null) {
      return function(data) {
        return data;
      };
    } else if (typeof source === "function") {
      return function(data, type, row, meta) {
        return source(data, type, row, meta);
      };
    } else if (typeof source === "string" && (source.indexOf(".") !== -1 || source.indexOf("[") !== -1 || source.indexOf("(") !== -1)) {
      var fetchData = function(data, type, src) {
        var arrayNotation, funcNotation, out, innerSrc;
        if (src !== "") {
          var a = _fnSplitObjNotation(src);
          for (var i2 = 0, iLen = a.length; i2 < iLen; i2++) {
            arrayNotation = a[i2].match(__reArray);
            funcNotation = a[i2].match(__reFn);
            if (arrayNotation) {
              a[i2] = a[i2].replace(__reArray, "");
              if (a[i2] !== "") {
                data = data[a[i2]];
              }
              out = [];
              a.splice(0, i2 + 1);
              innerSrc = a.join(".");
              if (Array.isArray(data)) {
                for (var j = 0, jLen = data.length; j < jLen; j++) {
                  out.push(fetchData(data[j], type, innerSrc));
                }
              }
              var join = arrayNotation[0].substring(1, arrayNotation[0].length - 1);
              data = join === "" ? out : out.join(join);
              break;
            } else if (funcNotation) {
              a[i2] = a[i2].replace(__reFn, "");
              data = data[a[i2]]();
              continue;
            }
            if (data === null || data[a[i2]] === void 0) {
              return void 0;
            }
            data = data[a[i2]];
          }
        }
        return data;
      };
      return function(data, type) {
        return fetchData(data, type, source);
      };
    } else {
      return function(data, type) {
        return data[source];
      };
    }
  }
};
function _fnHungarianMap(o) {
  var hungarian = "a aa ai ao as b fn i m o s ", match, newKey, map = {};
  $2.each(o, function(key, val) {
    match = key.match(/^([^A-Z]+?)([A-Z])/);
    if (match && hungarian.indexOf(match[1] + " ") !== -1) {
      newKey = key.replace(match[0], match[2].toLowerCase());
      map[newKey] = key;
      if (match[1] === "o") {
        _fnHungarianMap(o[key]);
      }
    }
  });
  o._hungarianMap = map;
}
function _fnCamelToHungarian(src, user, force) {
  if (!src._hungarianMap) {
    _fnHungarianMap(src);
  }
  var hungarianKey;
  $2.each(user, function(key, val) {
    hungarianKey = src._hungarianMap[key];
    if (hungarianKey !== void 0 && (force || user[hungarianKey] === void 0)) {
      if (hungarianKey.charAt(0) === "o") {
        if (!user[hungarianKey]) {
          user[hungarianKey] = {};
        }
        $2.extend(true, user[hungarianKey], user[key]);
        _fnCamelToHungarian(src[hungarianKey], user[hungarianKey], force);
      } else {
        user[hungarianKey] = user[key];
      }
    }
  });
}
function _fnLanguageCompat(lang) {
  var defaults = DataTable.defaults.oLanguage;
  var defaultDecimal = defaults.sDecimal;
  if (defaultDecimal) {
    _addNumericSort(defaultDecimal);
  }
  if (lang) {
    var zeroRecords = lang.sZeroRecords;
    if (!lang.sEmptyTable && zeroRecords && defaults.sEmptyTable === "No data available in table") {
      _fnMap(lang, lang, "sZeroRecords", "sEmptyTable");
    }
    if (!lang.sLoadingRecords && zeroRecords && defaults.sLoadingRecords === "Loading...") {
      _fnMap(lang, lang, "sZeroRecords", "sLoadingRecords");
    }
    if (lang.sInfoThousands) {
      lang.sThousands = lang.sInfoThousands;
    }
    var decimal = lang.sDecimal;
    if (decimal && defaultDecimal !== decimal) {
      _addNumericSort(decimal);
    }
  }
}
var _fnCompatMap = function(o, knew, old) {
  if (o[knew] !== void 0) {
    o[old] = o[knew];
  }
};
function _fnCompatOpts(init2) {
  _fnCompatMap(init2, "ordering", "bSort");
  _fnCompatMap(init2, "orderMulti", "bSortMulti");
  _fnCompatMap(init2, "orderClasses", "bSortClasses");
  _fnCompatMap(init2, "orderCellsTop", "bSortCellsTop");
  _fnCompatMap(init2, "order", "aaSorting");
  _fnCompatMap(init2, "orderFixed", "aaSortingFixed");
  _fnCompatMap(init2, "paging", "bPaginate");
  _fnCompatMap(init2, "pagingType", "sPaginationType");
  _fnCompatMap(init2, "pageLength", "iDisplayLength");
  _fnCompatMap(init2, "searching", "bFilter");
  if (typeof init2.sScrollX === "boolean") {
    init2.sScrollX = init2.sScrollX ? "100%" : "";
  }
  if (typeof init2.scrollX === "boolean") {
    init2.scrollX = init2.scrollX ? "100%" : "";
  }
  var searchCols = init2.aoSearchCols;
  if (searchCols) {
    for (var i2 = 0, ien = searchCols.length; i2 < ien; i2++) {
      if (searchCols[i2]) {
        _fnCamelToHungarian(DataTable.models.oSearch, searchCols[i2]);
      }
    }
  }
}
function _fnCompatCols(init2) {
  _fnCompatMap(init2, "orderable", "bSortable");
  _fnCompatMap(init2, "orderData", "aDataSort");
  _fnCompatMap(init2, "orderSequence", "asSorting");
  _fnCompatMap(init2, "orderDataType", "sortDataType");
  var dataSort = init2.aDataSort;
  if (typeof dataSort === "number" && !Array.isArray(dataSort)) {
    init2.aDataSort = [dataSort];
  }
}
function _fnBrowserDetect(settings) {
  if (!DataTable.__browser) {
    var browser = {};
    DataTable.__browser = browser;
    var n = $2("<div/>").css({
      position: "fixed",
      top: 0,
      left: $2(window).scrollLeft() * -1,
      // allow for scrolling
      height: 1,
      width: 1,
      overflow: "hidden"
    }).append(
      $2("<div/>").css({
        position: "absolute",
        top: 1,
        left: 1,
        width: 100,
        overflow: "scroll"
      }).append(
        $2("<div/>").css({
          width: "100%",
          height: 10
        })
      )
    ).appendTo("body");
    var outer = n.children();
    var inner = outer.children();
    browser.barWidth = outer[0].offsetWidth - outer[0].clientWidth;
    browser.bScrollOversize = inner[0].offsetWidth === 100 && outer[0].clientWidth !== 100;
    browser.bScrollbarLeft = Math.round(inner.offset().left) !== 1;
    browser.bBounding = n[0].getBoundingClientRect().width ? true : false;
    n.remove();
  }
  $2.extend(settings.oBrowser, DataTable.__browser);
  settings.oScroll.iBarWidth = DataTable.__browser.barWidth;
}
function _fnReduce(that, fn2, init2, start2, end2, inc) {
  var i2 = start2, value, isSet = false;
  if (init2 !== void 0) {
    value = init2;
    isSet = true;
  }
  while (i2 !== end2) {
    if (!that.hasOwnProperty(i2)) {
      continue;
    }
    value = isSet ? fn2(value, that[i2], i2, that) : that[i2];
    isSet = true;
    i2 += inc;
  }
  return value;
}
function _fnAddColumn(oSettings, nTh) {
  var oDefaults = DataTable.defaults.column;
  var iCol = oSettings.aoColumns.length;
  var oCol = $2.extend({}, DataTable.models.oColumn, oDefaults, {
    "nTh": nTh ? nTh : document.createElement("th"),
    "sTitle": oDefaults.sTitle ? oDefaults.sTitle : nTh ? nTh.innerHTML : "",
    "aDataSort": oDefaults.aDataSort ? oDefaults.aDataSort : [iCol],
    "mData": oDefaults.mData ? oDefaults.mData : iCol,
    idx: iCol
  });
  oSettings.aoColumns.push(oCol);
  var searchCols = oSettings.aoPreSearchCols;
  searchCols[iCol] = $2.extend({}, DataTable.models.oSearch, searchCols[iCol]);
  _fnColumnOptions(oSettings, iCol, $2(nTh).data());
}
function _fnColumnOptions(oSettings, iCol, oOptions) {
  var oCol = oSettings.aoColumns[iCol];
  var oClasses = oSettings.oClasses;
  var th = $2(oCol.nTh);
  if (!oCol.sWidthOrig) {
    oCol.sWidthOrig = th.attr("width") || null;
    var t = (th.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
    if (t) {
      oCol.sWidthOrig = t[1];
    }
  }
  if (oOptions !== void 0 && oOptions !== null) {
    _fnCompatCols(oOptions);
    _fnCamelToHungarian(DataTable.defaults.column, oOptions, true);
    if (oOptions.mDataProp !== void 0 && !oOptions.mData) {
      oOptions.mData = oOptions.mDataProp;
    }
    if (oOptions.sType) {
      oCol._sManualType = oOptions.sType;
    }
    if (oOptions.className && !oOptions.sClass) {
      oOptions.sClass = oOptions.className;
    }
    if (oOptions.sClass) {
      th.addClass(oOptions.sClass);
    }
    var origClass = oCol.sClass;
    $2.extend(oCol, oOptions);
    _fnMap(oCol, oOptions, "sWidth", "sWidthOrig");
    if (origClass !== oCol.sClass) {
      oCol.sClass = origClass + " " + oCol.sClass;
    }
    if (oOptions.iDataSort !== void 0) {
      oCol.aDataSort = [oOptions.iDataSort];
    }
    _fnMap(oCol, oOptions, "aDataSort");
  }
  var mDataSrc = oCol.mData;
  var mData = _fnGetObjectDataFn(mDataSrc);
  var mRender = oCol.mRender ? _fnGetObjectDataFn(oCol.mRender) : null;
  var attrTest = function(src) {
    return typeof src === "string" && src.indexOf("@") !== -1;
  };
  oCol._bAttrSrc = $2.isPlainObject(mDataSrc) && (attrTest(mDataSrc.sort) || attrTest(mDataSrc.type) || attrTest(mDataSrc.filter));
  oCol._setter = null;
  oCol.fnGetData = function(rowData, type, meta) {
    var innerData = mData(rowData, type, void 0, meta);
    return mRender && type ? mRender(innerData, type, rowData, meta) : innerData;
  };
  oCol.fnSetData = function(rowData, val, meta) {
    return _fnSetObjectDataFn(mDataSrc)(rowData, val, meta);
  };
  if (typeof mDataSrc !== "number" && !oCol._isArrayHost) {
    oSettings._rowReadObject = true;
  }
  if (!oSettings.oFeatures.bSort) {
    oCol.bSortable = false;
    th.addClass(oClasses.sSortableNone);
  }
  var bAsc = $2.inArray("asc", oCol.asSorting) !== -1;
  var bDesc = $2.inArray("desc", oCol.asSorting) !== -1;
  if (!oCol.bSortable || !bAsc && !bDesc) {
    oCol.sSortingClass = oClasses.sSortableNone;
    oCol.sSortingClassJUI = "";
  } else if (bAsc && !bDesc) {
    oCol.sSortingClass = oClasses.sSortableAsc;
    oCol.sSortingClassJUI = oClasses.sSortJUIAscAllowed;
  } else if (!bAsc && bDesc) {
    oCol.sSortingClass = oClasses.sSortableDesc;
    oCol.sSortingClassJUI = oClasses.sSortJUIDescAllowed;
  } else {
    oCol.sSortingClass = oClasses.sSortable;
    oCol.sSortingClassJUI = oClasses.sSortJUI;
  }
}
function _fnAdjustColumnSizing(settings) {
  if (settings.oFeatures.bAutoWidth !== false) {
    var columns = settings.aoColumns;
    _fnCalculateColumnWidths(settings);
    for (var i2 = 0, iLen = columns.length; i2 < iLen; i2++) {
      columns[i2].nTh.style.width = columns[i2].sWidth;
    }
  }
  var scroll = settings.oScroll;
  if (scroll.sY !== "" || scroll.sX !== "") {
    _fnScrollDraw(settings);
  }
  _fnCallbackFire(settings, null, "column-sizing", [settings]);
}
function _fnVisibleToColumnIndex(oSettings, iMatch) {
  var aiVis = _fnGetColumns(oSettings, "bVisible");
  return typeof aiVis[iMatch] === "number" ? aiVis[iMatch] : null;
}
function _fnColumnIndexToVisible(oSettings, iMatch) {
  var aiVis = _fnGetColumns(oSettings, "bVisible");
  var iPos = $2.inArray(iMatch, aiVis);
  return iPos !== -1 ? iPos : null;
}
function _fnVisbleColumns(oSettings) {
  var vis = 0;
  $2.each(oSettings.aoColumns, function(i2, col) {
    if (col.bVisible && $2(col.nTh).css("display") !== "none") {
      vis++;
    }
  });
  return vis;
}
function _fnGetColumns(oSettings, sParam) {
  var a = [];
  $2.map(oSettings.aoColumns, function(val, i2) {
    if (val[sParam]) {
      a.push(i2);
    }
  });
  return a;
}
function _fnColumnTypes(settings) {
  var columns = settings.aoColumns;
  var data = settings.aoData;
  var types = DataTable.ext.type.detect;
  var i2, ien, j, jen, k, ken;
  var col, cell, detectedType, cache;
  for (i2 = 0, ien = columns.length; i2 < ien; i2++) {
    col = columns[i2];
    cache = [];
    if (!col.sType && col._sManualType) {
      col.sType = col._sManualType;
    } else if (!col.sType) {
      for (j = 0, jen = types.length; j < jen; j++) {
        for (k = 0, ken = data.length; k < ken; k++) {
          if (cache[k] === void 0) {
            cache[k] = _fnGetCellData(settings, k, i2, "type");
          }
          detectedType = types[j](cache[k], settings);
          if (!detectedType && j !== types.length - 1) {
            break;
          }
          if (detectedType === "html" && !_empty(cache[k])) {
            break;
          }
        }
        if (detectedType) {
          col.sType = detectedType;
          break;
        }
      }
      if (!col.sType) {
        col.sType = "string";
      }
    }
  }
}
function _fnApplyColumnDefs(oSettings, aoColDefs, aoCols, fn2) {
  var i2, iLen, j, jLen, k, kLen, def;
  var columns = oSettings.aoColumns;
  if (aoColDefs) {
    for (i2 = aoColDefs.length - 1; i2 >= 0; i2--) {
      def = aoColDefs[i2];
      var aTargets = def.target !== void 0 ? def.target : def.targets !== void 0 ? def.targets : def.aTargets;
      if (!Array.isArray(aTargets)) {
        aTargets = [aTargets];
      }
      for (j = 0, jLen = aTargets.length; j < jLen; j++) {
        if (typeof aTargets[j] === "number" && aTargets[j] >= 0) {
          while (columns.length <= aTargets[j]) {
            _fnAddColumn(oSettings);
          }
          fn2(aTargets[j], def);
        } else if (typeof aTargets[j] === "number" && aTargets[j] < 0) {
          fn2(columns.length + aTargets[j], def);
        } else if (typeof aTargets[j] === "string") {
          for (k = 0, kLen = columns.length; k < kLen; k++) {
            if (aTargets[j] == "_all" || $2(columns[k].nTh).hasClass(aTargets[j])) {
              fn2(k, def);
            }
          }
        }
      }
    }
  }
  if (aoCols) {
    for (i2 = 0, iLen = aoCols.length; i2 < iLen; i2++) {
      fn2(i2, aoCols[i2]);
    }
  }
}
function _fnAddData(oSettings, aDataIn, nTr, anTds) {
  var iRow = oSettings.aoData.length;
  var oData = $2.extend(true, {}, DataTable.models.oRow, {
    src: nTr ? "dom" : "data",
    idx: iRow
  });
  oData._aData = aDataIn;
  oSettings.aoData.push(oData);
  var nTd, sThisType;
  var columns = oSettings.aoColumns;
  for (var i2 = 0, iLen = columns.length; i2 < iLen; i2++) {
    columns[i2].sType = null;
  }
  oSettings.aiDisplayMaster.push(iRow);
  var id = oSettings.rowIdFn(aDataIn);
  if (id !== void 0) {
    oSettings.aIds[id] = oData;
  }
  if (nTr || !oSettings.oFeatures.bDeferRender) {
    _fnCreateTr(oSettings, iRow, nTr, anTds);
  }
  return iRow;
}
function _fnAddTr(settings, trs) {
  var row;
  if (!(trs instanceof $2)) {
    trs = $2(trs);
  }
  return trs.map(function(i2, el) {
    row = _fnGetRowElements(settings, el);
    return _fnAddData(settings, row.data, el, row.cells);
  });
}
function _fnNodeToDataIndex(oSettings, n) {
  return n._DT_RowIndex !== void 0 ? n._DT_RowIndex : null;
}
function _fnNodeToColumnIndex(oSettings, iRow, n) {
  return $2.inArray(n, oSettings.aoData[iRow].anCells);
}
function _fnGetCellData(settings, rowIdx, colIdx, type) {
  if (type === "search") {
    type = "filter";
  } else if (type === "order") {
    type = "sort";
  }
  var draw = settings.iDraw;
  var col = settings.aoColumns[colIdx];
  var rowData = settings.aoData[rowIdx]._aData;
  var defaultContent = col.sDefaultContent;
  var cellData = col.fnGetData(rowData, type, {
    settings,
    row: rowIdx,
    col: colIdx
  });
  if (cellData === void 0) {
    if (settings.iDrawError != draw && defaultContent === null) {
      _fnLog(settings, 0, "Requested unknown parameter " + (typeof col.mData == "function" ? "{function}" : "'" + col.mData + "'") + " for row " + rowIdx + ", column " + colIdx, 4);
      settings.iDrawError = draw;
    }
    return defaultContent;
  }
  if ((cellData === rowData || cellData === null) && defaultContent !== null && type !== void 0) {
    cellData = defaultContent;
  } else if (typeof cellData === "function") {
    return cellData.call(rowData);
  }
  if (cellData === null && type === "display") {
    return "";
  }
  if (type === "filter") {
    var fomatters = DataTable.ext.type.search;
    if (fomatters[col.sType]) {
      cellData = fomatters[col.sType](cellData);
    }
  }
  return cellData;
}
function _fnSetCellData(settings, rowIdx, colIdx, val) {
  var col = settings.aoColumns[colIdx];
  var rowData = settings.aoData[rowIdx]._aData;
  col.fnSetData(rowData, val, {
    settings,
    row: rowIdx,
    col: colIdx
  });
}
var __reArray = /\[.*?\]$/;
var __reFn = /\(\)$/;
function _fnSplitObjNotation(str) {
  return $2.map(str.match(/(\\.|[^\.])+/g) || [""], function(s) {
    return s.replace(/\\\./g, ".");
  });
}
var _fnGetObjectDataFn = DataTable.util.get;
var _fnSetObjectDataFn = DataTable.util.set;
function _fnGetDataMaster(settings) {
  return _pluck(settings.aoData, "_aData");
}
function _fnClearTable(settings) {
  settings.aoData.length = 0;
  settings.aiDisplayMaster.length = 0;
  settings.aiDisplay.length = 0;
  settings.aIds = {};
}
function _fnDeleteIndex(a, iTarget, splice) {
  var iTargetIndex = -1;
  for (var i2 = 0, iLen = a.length; i2 < iLen; i2++) {
    if (a[i2] == iTarget) {
      iTargetIndex = i2;
    } else if (a[i2] > iTarget) {
      a[i2]--;
    }
  }
  if (iTargetIndex != -1 && splice === void 0) {
    a.splice(iTargetIndex, 1);
  }
}
function _fnInvalidate(settings, rowIdx, src, colIdx) {
  var row = settings.aoData[rowIdx];
  var i2, ien;
  var cellWrite = function(cell, col) {
    while (cell.childNodes.length) {
      cell.removeChild(cell.firstChild);
    }
    cell.innerHTML = _fnGetCellData(settings, rowIdx, col, "display");
  };
  if (src === "dom" || (!src || src === "auto") && row.src === "dom") {
    row._aData = _fnGetRowElements(
      settings,
      row,
      colIdx,
      colIdx === void 0 ? void 0 : row._aData
    ).data;
  } else {
    var cells = row.anCells;
    if (cells) {
      if (colIdx !== void 0) {
        cellWrite(cells[colIdx], colIdx);
      } else {
        for (i2 = 0, ien = cells.length; i2 < ien; i2++) {
          cellWrite(cells[i2], i2);
        }
      }
    }
  }
  row._aSortData = null;
  row._aFilterData = null;
  var cols = settings.aoColumns;
  if (colIdx !== void 0) {
    cols[colIdx].sType = null;
  } else {
    for (i2 = 0, ien = cols.length; i2 < ien; i2++) {
      cols[i2].sType = null;
    }
    _fnRowAttributes(settings, row);
  }
}
function _fnGetRowElements(settings, row, colIdx, d) {
  var tds = [], td = row.firstChild, name, col, o, i2 = 0, contents, columns = settings.aoColumns, objectRead = settings._rowReadObject;
  d = d !== void 0 ? d : objectRead ? {} : [];
  var attr = function(str, td2) {
    if (typeof str === "string") {
      var idx = str.indexOf("@");
      if (idx !== -1) {
        var attr2 = str.substring(idx + 1);
        var setter = _fnSetObjectDataFn(str);
        setter(d, td2.getAttribute(attr2));
      }
    }
  };
  var cellProcess = function(cell) {
    if (colIdx === void 0 || colIdx === i2) {
      col = columns[i2];
      contents = cell.innerHTML.trim();
      if (col && col._bAttrSrc) {
        var setter = _fnSetObjectDataFn(col.mData._);
        setter(d, contents);
        attr(col.mData.sort, cell);
        attr(col.mData.type, cell);
        attr(col.mData.filter, cell);
      } else {
        if (objectRead) {
          if (!col._setter) {
            col._setter = _fnSetObjectDataFn(col.mData);
          }
          col._setter(d, contents);
        } else {
          d[i2] = contents;
        }
      }
    }
    i2++;
  };
  if (td) {
    while (td) {
      name = td.nodeName.toUpperCase();
      if (name == "TD" || name == "TH") {
        cellProcess(td);
        tds.push(td);
      }
      td = td.nextSibling;
    }
  } else {
    tds = row.anCells;
    for (var j = 0, jen = tds.length; j < jen; j++) {
      cellProcess(tds[j]);
    }
  }
  var rowNode = row.firstChild ? row : row.nTr;
  if (rowNode) {
    var id = rowNode.getAttribute("id");
    if (id) {
      _fnSetObjectDataFn(settings.rowId)(d, id);
    }
  }
  return {
    data: d,
    cells: tds
  };
}
function _fnCreateTr(oSettings, iRow, nTrIn, anTds) {
  var row = oSettings.aoData[iRow], rowData = row._aData, cells = [], nTr, nTd, oCol, i2, iLen, create;
  if (row.nTr === null) {
    nTr = nTrIn || document.createElement("tr");
    row.nTr = nTr;
    row.anCells = cells;
    nTr._DT_RowIndex = iRow;
    _fnRowAttributes(oSettings, row);
    for (i2 = 0, iLen = oSettings.aoColumns.length; i2 < iLen; i2++) {
      oCol = oSettings.aoColumns[i2];
      create = nTrIn ? false : true;
      nTd = create ? document.createElement(oCol.sCellType) : anTds[i2];
      if (!nTd) {
        _fnLog(oSettings, 0, "Incorrect column count", 18);
      }
      nTd._DT_CellIndex = {
        row: iRow,
        column: i2
      };
      cells.push(nTd);
      if (create || (oCol.mRender || oCol.mData !== i2) && (!$2.isPlainObject(oCol.mData) || oCol.mData._ !== i2 + ".display")) {
        nTd.innerHTML = _fnGetCellData(oSettings, iRow, i2, "display");
      }
      if (oCol.sClass) {
        nTd.className += " " + oCol.sClass;
      }
      if (oCol.bVisible && !nTrIn) {
        nTr.appendChild(nTd);
      } else if (!oCol.bVisible && nTrIn) {
        nTd.parentNode.removeChild(nTd);
      }
      if (oCol.fnCreatedCell) {
        oCol.fnCreatedCell.call(
          oSettings.oInstance,
          nTd,
          _fnGetCellData(oSettings, iRow, i2),
          rowData,
          iRow,
          i2
        );
      }
    }
    _fnCallbackFire(oSettings, "aoRowCreatedCallback", null, [nTr, rowData, iRow, cells]);
  }
}
function _fnRowAttributes(settings, row) {
  var tr = row.nTr;
  var data = row._aData;
  if (tr) {
    var id = settings.rowIdFn(data);
    if (id) {
      tr.id = id;
    }
    if (data.DT_RowClass) {
      var a = data.DT_RowClass.split(" ");
      row.__rowc = row.__rowc ? _unique(row.__rowc.concat(a)) : a;
      $2(tr).removeClass(row.__rowc.join(" ")).addClass(data.DT_RowClass);
    }
    if (data.DT_RowAttr) {
      $2(tr).attr(data.DT_RowAttr);
    }
    if (data.DT_RowData) {
      $2(tr).data(data.DT_RowData);
    }
  }
}
function _fnBuildHead(oSettings) {
  var i2, ien, cell, row, column;
  var thead = oSettings.nTHead;
  var tfoot = oSettings.nTFoot;
  var createHeader = $2("th, td", thead).length === 0;
  var classes = oSettings.oClasses;
  var columns = oSettings.aoColumns;
  if (createHeader) {
    row = $2("<tr/>").appendTo(thead);
  }
  for (i2 = 0, ien = columns.length; i2 < ien; i2++) {
    column = columns[i2];
    cell = $2(column.nTh).addClass(column.sClass);
    if (createHeader) {
      cell.appendTo(row);
    }
    if (oSettings.oFeatures.bSort) {
      cell.addClass(column.sSortingClass);
      if (column.bSortable !== false) {
        cell.attr("tabindex", oSettings.iTabIndex).attr("aria-controls", oSettings.sTableId);
        _fnSortAttachListener(oSettings, column.nTh, i2);
      }
    }
    if (column.sTitle != cell[0].innerHTML) {
      cell.html(column.sTitle);
    }
    _fnRenderer(oSettings, "header")(
      oSettings,
      cell,
      column,
      classes
    );
  }
  if (createHeader) {
    _fnDetectHeader(oSettings.aoHeader, thead);
  }
  $2(thead).children("tr").children("th, td").addClass(classes.sHeaderTH);
  $2(tfoot).children("tr").children("th, td").addClass(classes.sFooterTH);
  if (tfoot !== null) {
    var cells = oSettings.aoFooter[0];
    for (i2 = 0, ien = cells.length; i2 < ien; i2++) {
      column = columns[i2];
      if (column) {
        column.nTf = cells[i2].cell;
        if (column.sClass) {
          $2(column.nTf).addClass(column.sClass);
        }
      } else {
        _fnLog(oSettings, 0, "Incorrect column count", 18);
      }
    }
  }
}
function _fnDrawHead(oSettings, aoSource, bIncludeHidden) {
  var i2, iLen, j, jLen, k, kLen, n, nLocalTr;
  var aoLocal = [];
  var aApplied = [];
  var iColumns = oSettings.aoColumns.length;
  var iRowspan, iColspan;
  if (!aoSource) {
    return;
  }
  if (bIncludeHidden === void 0) {
    bIncludeHidden = false;
  }
  for (i2 = 0, iLen = aoSource.length; i2 < iLen; i2++) {
    aoLocal[i2] = aoSource[i2].slice();
    aoLocal[i2].nTr = aoSource[i2].nTr;
    for (j = iColumns - 1; j >= 0; j--) {
      if (!oSettings.aoColumns[j].bVisible && !bIncludeHidden) {
        aoLocal[i2].splice(j, 1);
      }
    }
    aApplied.push([]);
  }
  for (i2 = 0, iLen = aoLocal.length; i2 < iLen; i2++) {
    nLocalTr = aoLocal[i2].nTr;
    if (nLocalTr) {
      while (n = nLocalTr.firstChild) {
        nLocalTr.removeChild(n);
      }
    }
    for (j = 0, jLen = aoLocal[i2].length; j < jLen; j++) {
      iRowspan = 1;
      iColspan = 1;
      if (aApplied[i2][j] === void 0) {
        nLocalTr.appendChild(aoLocal[i2][j].cell);
        aApplied[i2][j] = 1;
        while (aoLocal[i2 + iRowspan] !== void 0 && aoLocal[i2][j].cell == aoLocal[i2 + iRowspan][j].cell) {
          aApplied[i2 + iRowspan][j] = 1;
          iRowspan++;
        }
        while (aoLocal[i2][j + iColspan] !== void 0 && aoLocal[i2][j].cell == aoLocal[i2][j + iColspan].cell) {
          for (k = 0; k < iRowspan; k++) {
            aApplied[i2 + k][j + iColspan] = 1;
          }
          iColspan++;
        }
        $2(aoLocal[i2][j].cell).attr("rowspan", iRowspan).attr("colspan", iColspan);
      }
    }
  }
}
function _fnDraw(oSettings, ajaxComplete) {
  _fnStart(oSettings);
  var aPreDraw = _fnCallbackFire(oSettings, "aoPreDrawCallback", "preDraw", [oSettings]);
  if ($2.inArray(false, aPreDraw) !== -1) {
    _fnProcessingDisplay(oSettings, false);
    return;
  }
  var anRows = [];
  var iRowCount = 0;
  var asStripeClasses = oSettings.asStripeClasses;
  var iStripes = asStripeClasses.length;
  var oLang = oSettings.oLanguage;
  var bServerSide = _fnDataSource(oSettings) == "ssp";
  var aiDisplay = oSettings.aiDisplay;
  var iDisplayStart = oSettings._iDisplayStart;
  var iDisplayEnd = oSettings.fnDisplayEnd();
  oSettings.bDrawing = true;
  if (oSettings.bDeferLoading) {
    oSettings.bDeferLoading = false;
    oSettings.iDraw++;
    _fnProcessingDisplay(oSettings, false);
  } else if (!bServerSide) {
    oSettings.iDraw++;
  } else if (!oSettings.bDestroying && !ajaxComplete) {
    _fnAjaxUpdate(oSettings);
    return;
  }
  if (aiDisplay.length !== 0) {
    var iStart = bServerSide ? 0 : iDisplayStart;
    var iEnd = bServerSide ? oSettings.aoData.length : iDisplayEnd;
    for (var j = iStart; j < iEnd; j++) {
      var iDataIndex = aiDisplay[j];
      var aoData = oSettings.aoData[iDataIndex];
      if (aoData.nTr === null) {
        _fnCreateTr(oSettings, iDataIndex);
      }
      var nRow = aoData.nTr;
      if (iStripes !== 0) {
        var sStripe = asStripeClasses[iRowCount % iStripes];
        if (aoData._sRowStripe != sStripe) {
          $2(nRow).removeClass(aoData._sRowStripe).addClass(sStripe);
          aoData._sRowStripe = sStripe;
        }
      }
      _fnCallbackFire(
        oSettings,
        "aoRowCallback",
        null,
        [nRow, aoData._aData, iRowCount, j, iDataIndex]
      );
      anRows.push(nRow);
      iRowCount++;
    }
  } else {
    var sZero = oLang.sZeroRecords;
    if (oSettings.iDraw == 1 && _fnDataSource(oSettings) == "ajax") {
      sZero = oLang.sLoadingRecords;
    } else if (oLang.sEmptyTable && oSettings.fnRecordsTotal() === 0) {
      sZero = oLang.sEmptyTable;
    }
    anRows[0] = $2("<tr/>", { "class": iStripes ? asStripeClasses[0] : "" }).append($2("<td />", {
      "valign": "top",
      "colSpan": _fnVisbleColumns(oSettings),
      "class": oSettings.oClasses.sRowEmpty
    }).html(sZero))[0];
  }
  _fnCallbackFire(oSettings, "aoHeaderCallback", "header", [
    $2(oSettings.nTHead).children("tr")[0],
    _fnGetDataMaster(oSettings),
    iDisplayStart,
    iDisplayEnd,
    aiDisplay
  ]);
  _fnCallbackFire(oSettings, "aoFooterCallback", "footer", [
    $2(oSettings.nTFoot).children("tr")[0],
    _fnGetDataMaster(oSettings),
    iDisplayStart,
    iDisplayEnd,
    aiDisplay
  ]);
  var body = $2(oSettings.nTBody);
  body.children().detach();
  body.append($2(anRows));
  _fnCallbackFire(oSettings, "aoDrawCallback", "draw", [oSettings]);
  oSettings.bSorted = false;
  oSettings.bFiltered = false;
  oSettings.bDrawing = false;
}
function _fnReDraw(settings, holdPosition) {
  var features = settings.oFeatures, sort = features.bSort, filter = features.bFilter;
  if (sort) {
    _fnSort(settings);
  }
  if (filter) {
    _fnFilterComplete(settings, settings.oPreviousSearch);
  } else {
    settings.aiDisplay = settings.aiDisplayMaster.slice();
  }
  if (holdPosition !== true) {
    settings._iDisplayStart = 0;
  }
  settings._drawHold = holdPosition;
  _fnDraw(settings);
  settings._drawHold = false;
}
function _fnAddOptionsHtml(oSettings) {
  var classes = oSettings.oClasses;
  var table = $2(oSettings.nTable);
  var holding = $2("<div/>").insertBefore(table);
  var features = oSettings.oFeatures;
  var insert = $2("<div/>", {
    id: oSettings.sTableId + "_wrapper",
    "class": classes.sWrapper + (oSettings.nTFoot ? "" : " " + classes.sNoFooter)
  });
  oSettings.nHolding = holding[0];
  oSettings.nTableWrapper = insert[0];
  oSettings.nTableReinsertBefore = oSettings.nTable.nextSibling;
  var aDom = oSettings.sDom.split("");
  var featureNode, cOption, nNewNode, cNext, sAttr, j;
  for (var i2 = 0; i2 < aDom.length; i2++) {
    featureNode = null;
    cOption = aDom[i2];
    if (cOption == "<") {
      nNewNode = $2("<div/>")[0];
      cNext = aDom[i2 + 1];
      if (cNext == "'" || cNext == '"') {
        sAttr = "";
        j = 2;
        while (aDom[i2 + j] != cNext) {
          sAttr += aDom[i2 + j];
          j++;
        }
        if (sAttr == "H") {
          sAttr = classes.sJUIHeader;
        } else if (sAttr == "F") {
          sAttr = classes.sJUIFooter;
        }
        if (sAttr.indexOf(".") != -1) {
          var aSplit = sAttr.split(".");
          nNewNode.id = aSplit[0].substr(1, aSplit[0].length - 1);
          nNewNode.className = aSplit[1];
        } else if (sAttr.charAt(0) == "#") {
          nNewNode.id = sAttr.substr(1, sAttr.length - 1);
        } else {
          nNewNode.className = sAttr;
        }
        i2 += j;
      }
      insert.append(nNewNode);
      insert = $2(nNewNode);
    } else if (cOption == ">") {
      insert = insert.parent();
    } else if (cOption == "l" && features.bPaginate && features.bLengthChange) {
      featureNode = _fnFeatureHtmlLength(oSettings);
    } else if (cOption == "f" && features.bFilter) {
      featureNode = _fnFeatureHtmlFilter(oSettings);
    } else if (cOption == "r" && features.bProcessing) {
      featureNode = _fnFeatureHtmlProcessing(oSettings);
    } else if (cOption == "t") {
      featureNode = _fnFeatureHtmlTable(oSettings);
    } else if (cOption == "i" && features.bInfo) {
      featureNode = _fnFeatureHtmlInfo(oSettings);
    } else if (cOption == "p" && features.bPaginate) {
      featureNode = _fnFeatureHtmlPaginate(oSettings);
    } else if (DataTable.ext.feature.length !== 0) {
      var aoFeatures = DataTable.ext.feature;
      for (var k = 0, kLen = aoFeatures.length; k < kLen; k++) {
        if (cOption == aoFeatures[k].cFeature) {
          featureNode = aoFeatures[k].fnInit(oSettings);
          break;
        }
      }
    }
    if (featureNode) {
      var aanFeatures = oSettings.aanFeatures;
      if (!aanFeatures[cOption]) {
        aanFeatures[cOption] = [];
      }
      aanFeatures[cOption].push(featureNode);
      insert.append(featureNode);
    }
  }
  holding.replaceWith(insert);
  oSettings.nHolding = null;
}
function _fnDetectHeader(aLayout, nThead) {
  var nTrs = $2(nThead).children("tr");
  var nTr, nCell;
  var i2, k, l, iLen, jLen, iColShifted, iColumn, iColspan, iRowspan;
  var bUnique;
  var fnShiftCol = function(a, i3, j) {
    var k2 = a[i3];
    while (k2[j]) {
      j++;
    }
    return j;
  };
  aLayout.splice(0, aLayout.length);
  for (i2 = 0, iLen = nTrs.length; i2 < iLen; i2++) {
    aLayout.push([]);
  }
  for (i2 = 0, iLen = nTrs.length; i2 < iLen; i2++) {
    nTr = nTrs[i2];
    iColumn = 0;
    nCell = nTr.firstChild;
    while (nCell) {
      if (nCell.nodeName.toUpperCase() == "TD" || nCell.nodeName.toUpperCase() == "TH") {
        iColspan = nCell.getAttribute("colspan") * 1;
        iRowspan = nCell.getAttribute("rowspan") * 1;
        iColspan = !iColspan || iColspan === 0 || iColspan === 1 ? 1 : iColspan;
        iRowspan = !iRowspan || iRowspan === 0 || iRowspan === 1 ? 1 : iRowspan;
        iColShifted = fnShiftCol(aLayout, i2, iColumn);
        bUnique = iColspan === 1 ? true : false;
        for (l = 0; l < iColspan; l++) {
          for (k = 0; k < iRowspan; k++) {
            aLayout[i2 + k][iColShifted + l] = {
              "cell": nCell,
              "unique": bUnique
            };
            aLayout[i2 + k].nTr = nTr;
          }
        }
      }
      nCell = nCell.nextSibling;
    }
  }
}
function _fnGetUniqueThs(oSettings, nHeader, aLayout) {
  var aReturn = [];
  if (!aLayout) {
    aLayout = oSettings.aoHeader;
    if (nHeader) {
      aLayout = [];
      _fnDetectHeader(aLayout, nHeader);
    }
  }
  for (var i2 = 0, iLen = aLayout.length; i2 < iLen; i2++) {
    for (var j = 0, jLen = aLayout[i2].length; j < jLen; j++) {
      if (aLayout[i2][j].unique && (!aReturn[j] || !oSettings.bSortCellsTop)) {
        aReturn[j] = aLayout[i2][j].cell;
      }
    }
  }
  return aReturn;
}
function _fnStart(oSettings) {
  var bServerSide = _fnDataSource(oSettings) == "ssp";
  var iInitDisplayStart = oSettings.iInitDisplayStart;
  if (iInitDisplayStart !== void 0 && iInitDisplayStart !== -1) {
    oSettings._iDisplayStart = bServerSide ? iInitDisplayStart : iInitDisplayStart >= oSettings.fnRecordsDisplay() ? 0 : iInitDisplayStart;
    oSettings.iInitDisplayStart = -1;
  }
}
function _fnBuildAjax(oSettings, data, fn2) {
  _fnCallbackFire(oSettings, "aoServerParams", "serverParams", [data]);
  if (data && Array.isArray(data)) {
    var tmp = {};
    var rbracket = /(.*?)\[\]$/;
    $2.each(data, function(key, val) {
      var match = val.name.match(rbracket);
      if (match) {
        var name = match[0];
        if (!tmp[name]) {
          tmp[name] = [];
        }
        tmp[name].push(val.value);
      } else {
        tmp[val.name] = val.value;
      }
    });
    data = tmp;
  }
  var ajaxData;
  var ajax = oSettings.ajax;
  var instance = oSettings.oInstance;
  var callback = function(json) {
    var status = oSettings.jqXHR ? oSettings.jqXHR.status : null;
    if (json === null || typeof status === "number" && status == 204) {
      json = {};
      _fnAjaxDataSrc(oSettings, json, []);
    }
    var error = json.error || json.sError;
    if (error) {
      _fnLog(oSettings, 0, error);
    }
    oSettings.json = json;
    _fnCallbackFire(oSettings, null, "xhr", [oSettings, json, oSettings.jqXHR]);
    fn2(json);
  };
  if ($2.isPlainObject(ajax) && ajax.data) {
    ajaxData = ajax.data;
    var newData = typeof ajaxData === "function" ? ajaxData(data, oSettings) : (
      // fn can manipulate data or return
      ajaxData
    );
    data = typeof ajaxData === "function" && newData ? newData : $2.extend(true, data, newData);
    delete ajax.data;
  }
  var baseAjax = {
    "data": data,
    "success": callback,
    "dataType": "json",
    "cache": false,
    "type": oSettings.sServerMethod,
    "error": function(xhr, error, thrown) {
      var ret = _fnCallbackFire(oSettings, null, "xhr", [oSettings, null, oSettings.jqXHR]);
      if ($2.inArray(true, ret) === -1) {
        if (error == "parsererror") {
          _fnLog(oSettings, 0, "Invalid JSON response", 1);
        } else if (xhr.readyState === 4) {
          _fnLog(oSettings, 0, "Ajax error", 7);
        }
      }
      _fnProcessingDisplay(oSettings, false);
    }
  };
  oSettings.oAjaxData = data;
  _fnCallbackFire(oSettings, null, "preXhr", [oSettings, data]);
  if (oSettings.fnServerData) {
    oSettings.fnServerData.call(
      instance,
      oSettings.sAjaxSource,
      $2.map(data, function(val, key) {
        return { name: key, value: val };
      }),
      callback,
      oSettings
    );
  } else if (oSettings.sAjaxSource || typeof ajax === "string") {
    oSettings.jqXHR = $2.ajax($2.extend(baseAjax, {
      url: ajax || oSettings.sAjaxSource
    }));
  } else if (typeof ajax === "function") {
    oSettings.jqXHR = ajax.call(instance, data, callback, oSettings);
  } else {
    oSettings.jqXHR = $2.ajax($2.extend(baseAjax, ajax));
    ajax.data = ajaxData;
  }
}
function _fnAjaxUpdate(settings) {
  settings.iDraw++;
  _fnProcessingDisplay(settings, true);
  _fnBuildAjax(
    settings,
    _fnAjaxParameters(settings),
    function(json) {
      _fnAjaxUpdateDraw(settings, json);
    }
  );
}
function _fnAjaxParameters(settings) {
  var columns = settings.aoColumns, columnCount = columns.length, features = settings.oFeatures, preSearch = settings.oPreviousSearch, preColSearch = settings.aoPreSearchCols, i2, data = [], dataProp, column, columnSearch, sort = _fnSortFlatten(settings), displayStart = settings._iDisplayStart, displayLength = features.bPaginate !== false ? settings._iDisplayLength : -1;
  var param = function(name, value) {
    data.push({ "name": name, "value": value });
  };
  param("sEcho", settings.iDraw);
  param("iColumns", columnCount);
  param("sColumns", _pluck(columns, "sName").join(","));
  param("iDisplayStart", displayStart);
  param("iDisplayLength", displayLength);
  var d = {
    draw: settings.iDraw,
    columns: [],
    order: [],
    start: displayStart,
    length: displayLength,
    search: {
      value: preSearch.sSearch,
      regex: preSearch.bRegex
    }
  };
  for (i2 = 0; i2 < columnCount; i2++) {
    column = columns[i2];
    columnSearch = preColSearch[i2];
    dataProp = typeof column.mData == "function" ? "function" : column.mData;
    d.columns.push({
      data: dataProp,
      name: column.sName,
      searchable: column.bSearchable,
      orderable: column.bSortable,
      search: {
        value: columnSearch.sSearch,
        regex: columnSearch.bRegex
      }
    });
    param("mDataProp_" + i2, dataProp);
    if (features.bFilter) {
      param("sSearch_" + i2, columnSearch.sSearch);
      param("bRegex_" + i2, columnSearch.bRegex);
      param("bSearchable_" + i2, column.bSearchable);
    }
    if (features.bSort) {
      param("bSortable_" + i2, column.bSortable);
    }
  }
  if (features.bFilter) {
    param("sSearch", preSearch.sSearch);
    param("bRegex", preSearch.bRegex);
  }
  if (features.bSort) {
    $2.each(sort, function(i3, val) {
      d.order.push({ column: val.col, dir: val.dir });
      param("iSortCol_" + i3, val.col);
      param("sSortDir_" + i3, val.dir);
    });
    param("iSortingCols", sort.length);
  }
  var legacy = DataTable.ext.legacy.ajax;
  if (legacy === null) {
    return settings.sAjaxSource ? data : d;
  }
  return legacy ? data : d;
}
function _fnAjaxUpdateDraw(settings, json) {
  var compat = function(old, modern) {
    return json[old] !== void 0 ? json[old] : json[modern];
  };
  var data = _fnAjaxDataSrc(settings, json);
  var draw = compat("sEcho", "draw");
  var recordsTotal = compat("iTotalRecords", "recordsTotal");
  var recordsFiltered = compat("iTotalDisplayRecords", "recordsFiltered");
  if (draw !== void 0) {
    if (draw * 1 < settings.iDraw) {
      return;
    }
    settings.iDraw = draw * 1;
  }
  if (!data) {
    data = [];
  }
  _fnClearTable(settings);
  settings._iRecordsTotal = parseInt(recordsTotal, 10);
  settings._iRecordsDisplay = parseInt(recordsFiltered, 10);
  for (var i2 = 0, ien = data.length; i2 < ien; i2++) {
    _fnAddData(settings, data[i2]);
  }
  settings.aiDisplay = settings.aiDisplayMaster.slice();
  _fnDraw(settings, true);
  if (!settings._bInitComplete) {
    _fnInitComplete(settings, json);
  }
  _fnProcessingDisplay(settings, false);
}
function _fnAjaxDataSrc(oSettings, json, write2) {
  var dataSrc = $2.isPlainObject(oSettings.ajax) && oSettings.ajax.dataSrc !== void 0 ? oSettings.ajax.dataSrc : oSettings.sAjaxDataProp;
  if (!write2) {
    if (dataSrc === "data") {
      return json.aaData || json[dataSrc];
    }
    return dataSrc !== "" ? _fnGetObjectDataFn(dataSrc)(json) : json;
  }
  _fnSetObjectDataFn(dataSrc)(json, write2);
}
function _fnFeatureHtmlFilter(settings) {
  var classes = settings.oClasses;
  var tableId = settings.sTableId;
  var language = settings.oLanguage;
  var previousSearch = settings.oPreviousSearch;
  var features = settings.aanFeatures;
  var input = '<input type="search" class="' + classes.sFilterInput + '"/>';
  var str = language.sSearch;
  str = str.match(/_INPUT_/) ? str.replace("_INPUT_", input) : str + input;
  var filter = $2("<div/>", {
    "id": !features.f ? tableId + "_filter" : null,
    "class": classes.sFilter
  }).append($2("<label/>").append(str));
  var searchFn = function(event) {
    var n = features.f;
    var val = !this.value ? "" : this.value;
    if (previousSearch.return && event.key !== "Enter") {
      return;
    }
    if (val != previousSearch.sSearch) {
      _fnFilterComplete(settings, {
        "sSearch": val,
        "bRegex": previousSearch.bRegex,
        "bSmart": previousSearch.bSmart,
        "bCaseInsensitive": previousSearch.bCaseInsensitive,
        "return": previousSearch.return
      });
      settings._iDisplayStart = 0;
      _fnDraw(settings);
    }
  };
  var searchDelay = settings.searchDelay !== null ? settings.searchDelay : _fnDataSource(settings) === "ssp" ? 400 : 0;
  var jqFilter = $2("input", filter).val(previousSearch.sSearch).attr("placeholder", language.sSearchPlaceholder).on(
    "keyup.DT search.DT input.DT paste.DT cut.DT",
    searchDelay ? _fnThrottle(searchFn, searchDelay) : searchFn
  ).on("mouseup", function(e) {
    setTimeout(function() {
      searchFn.call(jqFilter[0], e);
    }, 10);
  }).on("keypress.DT", function(e) {
    if (e.keyCode == 13) {
      return false;
    }
  }).attr("aria-controls", tableId);
  $2(settings.nTable).on("search.dt.DT", function(ev, s) {
    if (settings === s) {
      try {
        if (jqFilter[0] !== document.activeElement) {
          jqFilter.val(previousSearch.sSearch);
        }
      } catch (e) {
      }
    }
  });
  return filter[0];
}
function _fnFilterComplete(oSettings, oInput, iForce) {
  var oPrevSearch = oSettings.oPreviousSearch;
  var aoPrevSearch = oSettings.aoPreSearchCols;
  var fnSaveFilter = function(oFilter) {
    oPrevSearch.sSearch = oFilter.sSearch;
    oPrevSearch.bRegex = oFilter.bRegex;
    oPrevSearch.bSmart = oFilter.bSmart;
    oPrevSearch.bCaseInsensitive = oFilter.bCaseInsensitive;
    oPrevSearch.return = oFilter.return;
  };
  var fnRegex = function(o) {
    return o.bEscapeRegex !== void 0 ? !o.bEscapeRegex : o.bRegex;
  };
  _fnColumnTypes(oSettings);
  if (_fnDataSource(oSettings) != "ssp") {
    _fnFilter(oSettings, oInput.sSearch, iForce, fnRegex(oInput), oInput.bSmart, oInput.bCaseInsensitive, oInput.return);
    fnSaveFilter(oInput);
    for (var i2 = 0; i2 < aoPrevSearch.length; i2++) {
      _fnFilterColumn(
        oSettings,
        aoPrevSearch[i2].sSearch,
        i2,
        fnRegex(aoPrevSearch[i2]),
        aoPrevSearch[i2].bSmart,
        aoPrevSearch[i2].bCaseInsensitive
      );
    }
    _fnFilterCustom(oSettings);
  } else {
    fnSaveFilter(oInput);
  }
  oSettings.bFiltered = true;
  _fnCallbackFire(oSettings, null, "search", [oSettings]);
}
function _fnFilterCustom(settings) {
  var filters = DataTable.ext.search;
  var displayRows = settings.aiDisplay;
  var row, rowIdx;
  for (var i2 = 0, ien = filters.length; i2 < ien; i2++) {
    var rows = [];
    for (var j = 0, jen = displayRows.length; j < jen; j++) {
      rowIdx = displayRows[j];
      row = settings.aoData[rowIdx];
      if (filters[i2](settings, row._aFilterData, rowIdx, row._aData, j)) {
        rows.push(rowIdx);
      }
    }
    displayRows.length = 0;
    $2.merge(displayRows, rows);
  }
}
function _fnFilterColumn(settings, searchStr, colIdx, regex, smart, caseInsensitive) {
  if (searchStr === "") {
    return;
  }
  var data;
  var out = [];
  var display = settings.aiDisplay;
  var rpSearch = _fnFilterCreateSearch(searchStr, regex, smart, caseInsensitive);
  for (var i2 = 0; i2 < display.length; i2++) {
    data = settings.aoData[display[i2]]._aFilterData[colIdx];
    if (rpSearch.test(data)) {
      out.push(display[i2]);
    }
  }
  settings.aiDisplay = out;
}
function _fnFilter(settings, input, force, regex, smart, caseInsensitive) {
  var rpSearch = _fnFilterCreateSearch(input, regex, smart, caseInsensitive);
  var prevSearch = settings.oPreviousSearch.sSearch;
  var displayMaster = settings.aiDisplayMaster;
  var display, invalidated, i2;
  var filtered = [];
  if (DataTable.ext.search.length !== 0) {
    force = true;
  }
  invalidated = _fnFilterData(settings);
  if (input.length <= 0) {
    settings.aiDisplay = displayMaster.slice();
  } else {
    if (invalidated || force || regex || prevSearch.length > input.length || input.indexOf(prevSearch) !== 0 || settings.bSorted) {
      settings.aiDisplay = displayMaster.slice();
    }
    display = settings.aiDisplay;
    for (i2 = 0; i2 < display.length; i2++) {
      if (rpSearch.test(settings.aoData[display[i2]]._sFilterRow)) {
        filtered.push(display[i2]);
      }
    }
    settings.aiDisplay = filtered;
  }
}
function _fnFilterCreateSearch(search, regex, smart, caseInsensitive) {
  search = regex ? search : _fnEscapeRegex(search);
  if (smart) {
    var a = $2.map(search.match(/"[^"]+"|[^ ]+/g) || [""], function(word) {
      if (word.charAt(0) === '"') {
        var m = word.match(/^"(.*)"$/);
        word = m ? m[1] : word;
      }
      return word.replace('"', "");
    });
    search = "^(?=.*?" + a.join(")(?=.*?") + ").*$";
  }
  return new RegExp(search, caseInsensitive ? "i" : "");
}
var _fnEscapeRegex = DataTable.util.escapeRegex;
var __filter_div = $2("<div>")[0];
var __filter_div_textContent = __filter_div.textContent !== void 0;
function _fnFilterData(settings) {
  var columns = settings.aoColumns;
  var column;
  var i2, j, ien, jen, filterData, cellData, row;
  var wasInvalidated = false;
  for (i2 = 0, ien = settings.aoData.length; i2 < ien; i2++) {
    row = settings.aoData[i2];
    if (!row._aFilterData) {
      filterData = [];
      for (j = 0, jen = columns.length; j < jen; j++) {
        column = columns[j];
        if (column.bSearchable) {
          cellData = _fnGetCellData(settings, i2, j, "filter");
          if (cellData === null) {
            cellData = "";
          }
          if (typeof cellData !== "string" && cellData.toString) {
            cellData = cellData.toString();
          }
        } else {
          cellData = "";
        }
        if (cellData.indexOf && cellData.indexOf("&") !== -1) {
          __filter_div.innerHTML = cellData;
          cellData = __filter_div_textContent ? __filter_div.textContent : __filter_div.innerText;
        }
        if (cellData.replace) {
          cellData = cellData.replace(/[\r\n\u2028]/g, "");
        }
        filterData.push(cellData);
      }
      row._aFilterData = filterData;
      row._sFilterRow = filterData.join("  ");
      wasInvalidated = true;
    }
  }
  return wasInvalidated;
}
function _fnSearchToCamel(obj) {
  return {
    search: obj.sSearch,
    smart: obj.bSmart,
    regex: obj.bRegex,
    caseInsensitive: obj.bCaseInsensitive
  };
}
function _fnSearchToHung(obj) {
  return {
    sSearch: obj.search,
    bSmart: obj.smart,
    bRegex: obj.regex,
    bCaseInsensitive: obj.caseInsensitive
  };
}
function _fnFeatureHtmlInfo(settings) {
  var tid = settings.sTableId, nodes = settings.aanFeatures.i, n = $2("<div/>", {
    "class": settings.oClasses.sInfo,
    "id": !nodes ? tid + "_info" : null
  });
  if (!nodes) {
    settings.aoDrawCallback.push({
      "fn": _fnUpdateInfo,
      "sName": "information"
    });
    n.attr("role", "status").attr("aria-live", "polite");
    $2(settings.nTable).attr("aria-describedby", tid + "_info");
  }
  return n[0];
}
function _fnUpdateInfo(settings) {
  var nodes = settings.aanFeatures.i;
  if (nodes.length === 0) {
    return;
  }
  var lang = settings.oLanguage, start2 = settings._iDisplayStart + 1, end2 = settings.fnDisplayEnd(), max2 = settings.fnRecordsTotal(), total = settings.fnRecordsDisplay(), out = total ? lang.sInfo : lang.sInfoEmpty;
  if (total !== max2) {
    out += " " + lang.sInfoFiltered;
  }
  out += lang.sInfoPostFix;
  out = _fnInfoMacros(settings, out);
  var callback = lang.fnInfoCallback;
  if (callback !== null) {
    out = callback.call(
      settings.oInstance,
      settings,
      start2,
      end2,
      max2,
      total,
      out
    );
  }
  $2(nodes).html(out);
}
function _fnInfoMacros(settings, str) {
  var formatter = settings.fnFormatNumber, start2 = settings._iDisplayStart + 1, len = settings._iDisplayLength, vis = settings.fnRecordsDisplay(), all = len === -1;
  return str.replace(/_START_/g, formatter.call(settings, start2)).replace(/_END_/g, formatter.call(settings, settings.fnDisplayEnd())).replace(/_MAX_/g, formatter.call(settings, settings.fnRecordsTotal())).replace(/_TOTAL_/g, formatter.call(settings, vis)).replace(/_PAGE_/g, formatter.call(settings, all ? 1 : Math.ceil(start2 / len))).replace(/_PAGES_/g, formatter.call(settings, all ? 1 : Math.ceil(vis / len)));
}
function _fnInitialise(settings) {
  var i2, iLen, iAjaxStart = settings.iInitDisplayStart;
  var columns = settings.aoColumns, column;
  var features = settings.oFeatures;
  var deferLoading = settings.bDeferLoading;
  if (!settings.bInitialised) {
    setTimeout(function() {
      _fnInitialise(settings);
    }, 200);
    return;
  }
  _fnAddOptionsHtml(settings);
  _fnBuildHead(settings);
  _fnDrawHead(settings, settings.aoHeader);
  _fnDrawHead(settings, settings.aoFooter);
  _fnProcessingDisplay(settings, true);
  if (features.bAutoWidth) {
    _fnCalculateColumnWidths(settings);
  }
  for (i2 = 0, iLen = columns.length; i2 < iLen; i2++) {
    column = columns[i2];
    if (column.sWidth) {
      column.nTh.style.width = _fnStringToCss(column.sWidth);
    }
  }
  _fnCallbackFire(settings, null, "preInit", [settings]);
  _fnReDraw(settings);
  var dataSrc = _fnDataSource(settings);
  if (dataSrc != "ssp" || deferLoading) {
    if (dataSrc == "ajax") {
      _fnBuildAjax(settings, [], function(json) {
        var aData = _fnAjaxDataSrc(settings, json);
        for (i2 = 0; i2 < aData.length; i2++) {
          _fnAddData(settings, aData[i2]);
        }
        settings.iInitDisplayStart = iAjaxStart;
        _fnReDraw(settings);
        _fnProcessingDisplay(settings, false);
        _fnInitComplete(settings, json);
      }, settings);
    } else {
      _fnProcessingDisplay(settings, false);
      _fnInitComplete(settings);
    }
  }
}
function _fnInitComplete(settings, json) {
  settings._bInitComplete = true;
  if (json || settings.oInit.aaData) {
    _fnAdjustColumnSizing(settings);
  }
  _fnCallbackFire(settings, null, "plugin-init", [settings, json]);
  _fnCallbackFire(settings, "aoInitComplete", "init", [settings, json]);
}
function _fnLengthChange(settings, val) {
  var len = parseInt(val, 10);
  settings._iDisplayLength = len;
  _fnLengthOverflow(settings);
  _fnCallbackFire(settings, null, "length", [settings, len]);
}
function _fnFeatureHtmlLength(settings) {
  var classes = settings.oClasses, tableId = settings.sTableId, menu = settings.aLengthMenu, d2 = Array.isArray(menu[0]), lengths = d2 ? menu[0] : menu, language = d2 ? menu[1] : menu;
  var select = $2("<select/>", {
    "name": tableId + "_length",
    "aria-controls": tableId,
    "class": classes.sLengthSelect
  });
  for (var i2 = 0, ien = lengths.length; i2 < ien; i2++) {
    select[0][i2] = new Option(
      typeof language[i2] === "number" ? settings.fnFormatNumber(language[i2]) : language[i2],
      lengths[i2]
    );
  }
  var div = $2("<div><label/></div>").addClass(classes.sLength);
  if (!settings.aanFeatures.l) {
    div[0].id = tableId + "_length";
  }
  div.children().append(
    settings.oLanguage.sLengthMenu.replace("_MENU_", select[0].outerHTML)
  );
  $2("select", div).val(settings._iDisplayLength).on("change.DT", function(e) {
    _fnLengthChange(settings, $2(this).val());
    _fnDraw(settings);
  });
  $2(settings.nTable).on("length.dt.DT", function(e, s, len) {
    if (settings === s) {
      $2("select", div).val(len);
    }
  });
  return div[0];
}
function _fnFeatureHtmlPaginate(settings) {
  var type = settings.sPaginationType, plugin = DataTable.ext.pager[type], modern = typeof plugin === "function", redraw = function(settings2) {
    _fnDraw(settings2);
  }, node = $2("<div/>").addClass(settings.oClasses.sPaging + type)[0], features = settings.aanFeatures;
  if (!modern) {
    plugin.fnInit(settings, node, redraw);
  }
  if (!features.p) {
    node.id = settings.sTableId + "_paginate";
    settings.aoDrawCallback.push({
      "fn": function(settings2) {
        if (modern) {
          var start2 = settings2._iDisplayStart, len = settings2._iDisplayLength, visRecords = settings2.fnRecordsDisplay(), all = len === -1, page = all ? 0 : Math.ceil(start2 / len), pages = all ? 1 : Math.ceil(visRecords / len), buttons = plugin(page, pages), i2, ien;
          for (i2 = 0, ien = features.p.length; i2 < ien; i2++) {
            _fnRenderer(settings2, "pageButton")(
              settings2,
              features.p[i2],
              i2,
              buttons,
              page,
              pages
            );
          }
        } else {
          plugin.fnUpdate(settings2, redraw);
        }
      },
      "sName": "pagination"
    });
  }
  return node;
}
function _fnPageChange(settings, action, redraw) {
  var start2 = settings._iDisplayStart, len = settings._iDisplayLength, records = settings.fnRecordsDisplay();
  if (records === 0 || len === -1) {
    start2 = 0;
  } else if (typeof action === "number") {
    start2 = action * len;
    if (start2 > records) {
      start2 = 0;
    }
  } else if (action == "first") {
    start2 = 0;
  } else if (action == "previous") {
    start2 = len >= 0 ? start2 - len : 0;
    if (start2 < 0) {
      start2 = 0;
    }
  } else if (action == "next") {
    if (start2 + len < records) {
      start2 += len;
    }
  } else if (action == "last") {
    start2 = Math.floor((records - 1) / len) * len;
  } else {
    _fnLog(settings, 0, "Unknown paging action: " + action, 5);
  }
  var changed = settings._iDisplayStart !== start2;
  settings._iDisplayStart = start2;
  if (changed) {
    _fnCallbackFire(settings, null, "page", [settings]);
    if (redraw) {
      _fnDraw(settings);
    }
  } else {
    _fnCallbackFire(settings, null, "page-nc", [settings]);
  }
  return changed;
}
function _fnFeatureHtmlProcessing(settings) {
  return $2("<div/>", {
    "id": !settings.aanFeatures.r ? settings.sTableId + "_processing" : null,
    "class": settings.oClasses.sProcessing,
    "role": "status"
  }).html(settings.oLanguage.sProcessing).append("<div><div></div><div></div><div></div><div></div></div>").insertBefore(settings.nTable)[0];
}
function _fnProcessingDisplay(settings, show) {
  if (settings.oFeatures.bProcessing) {
    $2(settings.aanFeatures.r).css("display", show ? "block" : "none");
  }
  _fnCallbackFire(settings, null, "processing", [settings, show]);
}
function _fnFeatureHtmlTable(settings) {
  var table = $2(settings.nTable);
  var scroll = settings.oScroll;
  if (scroll.sX === "" && scroll.sY === "") {
    return settings.nTable;
  }
  var scrollX = scroll.sX;
  var scrollY = scroll.sY;
  var classes = settings.oClasses;
  var caption = table.children("caption");
  var captionSide = caption.length ? caption[0]._captionSide : null;
  var headerClone = $2(table[0].cloneNode(false));
  var footerClone = $2(table[0].cloneNode(false));
  var footer = table.children("tfoot");
  var _div = "<div/>";
  var size = function(s) {
    return !s ? null : _fnStringToCss(s);
  };
  if (!footer.length) {
    footer = null;
  }
  var scroller = $2(_div, { "class": classes.sScrollWrapper }).append(
    $2(_div, { "class": classes.sScrollHead }).css({
      overflow: "hidden",
      position: "relative",
      border: 0,
      width: scrollX ? size(scrollX) : "100%"
    }).append(
      $2(_div, { "class": classes.sScrollHeadInner }).css({
        "box-sizing": "content-box",
        width: scroll.sXInner || "100%"
      }).append(
        headerClone.removeAttr("id").css("margin-left", 0).append(captionSide === "top" ? caption : null).append(
          table.children("thead")
        )
      )
    )
  ).append(
    $2(_div, { "class": classes.sScrollBody }).css({
      position: "relative",
      overflow: "auto",
      width: size(scrollX)
    }).append(table)
  );
  if (footer) {
    scroller.append(
      $2(_div, { "class": classes.sScrollFoot }).css({
        overflow: "hidden",
        border: 0,
        width: scrollX ? size(scrollX) : "100%"
      }).append(
        $2(_div, { "class": classes.sScrollFootInner }).append(
          footerClone.removeAttr("id").css("margin-left", 0).append(captionSide === "bottom" ? caption : null).append(
            table.children("tfoot")
          )
        )
      )
    );
  }
  var children = scroller.children();
  var scrollHead = children[0];
  var scrollBody = children[1];
  var scrollFoot = footer ? children[2] : null;
  if (scrollX) {
    $2(scrollBody).on("scroll.DT", function(e) {
      var scrollLeft = this.scrollLeft;
      scrollHead.scrollLeft = scrollLeft;
      if (footer) {
        scrollFoot.scrollLeft = scrollLeft;
      }
    });
  }
  $2(scrollBody).css("max-height", scrollY);
  if (!scroll.bCollapse) {
    $2(scrollBody).css("height", scrollY);
  }
  settings.nScrollHead = scrollHead;
  settings.nScrollBody = scrollBody;
  settings.nScrollFoot = scrollFoot;
  settings.aoDrawCallback.push({
    "fn": _fnScrollDraw,
    "sName": "scrolling"
  });
  return scroller[0];
}
function _fnScrollDraw(settings) {
  var scroll = settings.oScroll, scrollX = scroll.sX, scrollXInner = scroll.sXInner, scrollY = scroll.sY, barWidth = scroll.iBarWidth, divHeader = $2(settings.nScrollHead), divHeaderStyle = divHeader[0].style, divHeaderInner = divHeader.children("div"), divHeaderInnerStyle = divHeaderInner[0].style, divHeaderTable = divHeaderInner.children("table"), divBodyEl = settings.nScrollBody, divBody = $2(divBodyEl), divBodyStyle = divBodyEl.style, divFooter = $2(settings.nScrollFoot), divFooterInner = divFooter.children("div"), divFooterTable = divFooterInner.children("table"), header = $2(settings.nTHead), table = $2(settings.nTable), tableEl = table[0], tableStyle = tableEl.style, footer = settings.nTFoot ? $2(settings.nTFoot) : null, browser = settings.oBrowser, ie67 = browser.bScrollOversize, dtHeaderCells = _pluck(settings.aoColumns, "nTh"), headerTrgEls, footerTrgEls, headerSrcEls, footerSrcEls, headerCopy, footerCopy, headerWidths = [], footerWidths = [], headerContent = [], footerContent = [], idx, correction, sanityWidth, zeroOut = function(nSizer) {
    var style = nSizer.style;
    style.paddingTop = "0";
    style.paddingBottom = "0";
    style.borderTopWidth = "0";
    style.borderBottomWidth = "0";
    style.height = 0;
  };
  var scrollBarVis = divBodyEl.scrollHeight > divBodyEl.clientHeight;
  if (settings.scrollBarVis !== scrollBarVis && settings.scrollBarVis !== void 0) {
    settings.scrollBarVis = scrollBarVis;
    _fnAdjustColumnSizing(settings);
    return;
  } else {
    settings.scrollBarVis = scrollBarVis;
  }
  table.children("thead, tfoot").remove();
  if (footer) {
    footerCopy = footer.clone().prependTo(table);
    footerTrgEls = footer.find("tr");
    footerSrcEls = footerCopy.find("tr");
    footerCopy.find("[id]").removeAttr("id");
  }
  headerCopy = header.clone().prependTo(table);
  headerTrgEls = header.find("tr");
  headerSrcEls = headerCopy.find("tr");
  headerCopy.find("th, td").removeAttr("tabindex");
  headerCopy.find("[id]").removeAttr("id");
  if (!scrollX) {
    divBodyStyle.width = "100%";
    divHeader[0].style.width = "100%";
  }
  $2.each(_fnGetUniqueThs(settings, headerCopy), function(i2, el) {
    idx = _fnVisibleToColumnIndex(settings, i2);
    el.style.width = settings.aoColumns[idx].sWidth;
  });
  if (footer) {
    _fnApplyToChildren(function(n) {
      n.style.width = "";
    }, footerSrcEls);
  }
  sanityWidth = table.outerWidth();
  if (scrollX === "") {
    tableStyle.width = "100%";
    if (ie67 && (table.find("tbody").height() > divBodyEl.offsetHeight || divBody.css("overflow-y") == "scroll")) {
      tableStyle.width = _fnStringToCss(table.outerWidth() - barWidth);
    }
    sanityWidth = table.outerWidth();
  } else if (scrollXInner !== "") {
    tableStyle.width = _fnStringToCss(scrollXInner);
    sanityWidth = table.outerWidth();
  }
  _fnApplyToChildren(zeroOut, headerSrcEls);
  _fnApplyToChildren(function(nSizer) {
    var style = window.getComputedStyle ? window.getComputedStyle(nSizer).width : _fnStringToCss($2(nSizer).width());
    headerContent.push(nSizer.innerHTML);
    headerWidths.push(style);
  }, headerSrcEls);
  _fnApplyToChildren(function(nToSize, i2) {
    nToSize.style.width = headerWidths[i2];
  }, headerTrgEls);
  $2(headerSrcEls).css("height", 0);
  if (footer) {
    _fnApplyToChildren(zeroOut, footerSrcEls);
    _fnApplyToChildren(function(nSizer) {
      footerContent.push(nSizer.innerHTML);
      footerWidths.push(_fnStringToCss($2(nSizer).css("width")));
    }, footerSrcEls);
    _fnApplyToChildren(function(nToSize, i2) {
      nToSize.style.width = footerWidths[i2];
    }, footerTrgEls);
    $2(footerSrcEls).height(0);
  }
  _fnApplyToChildren(function(nSizer, i2) {
    nSizer.innerHTML = '<div class="dataTables_sizing">' + headerContent[i2] + "</div>";
    nSizer.childNodes[0].style.height = "0";
    nSizer.childNodes[0].style.overflow = "hidden";
    nSizer.style.width = headerWidths[i2];
  }, headerSrcEls);
  if (footer) {
    _fnApplyToChildren(function(nSizer, i2) {
      nSizer.innerHTML = '<div class="dataTables_sizing">' + footerContent[i2] + "</div>";
      nSizer.childNodes[0].style.height = "0";
      nSizer.childNodes[0].style.overflow = "hidden";
      nSizer.style.width = footerWidths[i2];
    }, footerSrcEls);
  }
  if (Math.round(table.outerWidth()) < Math.round(sanityWidth)) {
    correction = divBodyEl.scrollHeight > divBodyEl.offsetHeight || divBody.css("overflow-y") == "scroll" ? sanityWidth + barWidth : sanityWidth;
    if (ie67 && (divBodyEl.scrollHeight > divBodyEl.offsetHeight || divBody.css("overflow-y") == "scroll")) {
      tableStyle.width = _fnStringToCss(correction - barWidth);
    }
    if (scrollX === "" || scrollXInner !== "") {
      _fnLog(settings, 1, "Possible column misalignment", 6);
    }
  } else {
    correction = "100%";
  }
  divBodyStyle.width = _fnStringToCss(correction);
  divHeaderStyle.width = _fnStringToCss(correction);
  if (footer) {
    settings.nScrollFoot.style.width = _fnStringToCss(correction);
  }
  if (!scrollY) {
    if (ie67) {
      divBodyStyle.height = _fnStringToCss(tableEl.offsetHeight + barWidth);
    }
  }
  var iOuterWidth = table.outerWidth();
  divHeaderTable[0].style.width = _fnStringToCss(iOuterWidth);
  divHeaderInnerStyle.width = _fnStringToCss(iOuterWidth);
  var bScrolling = table.height() > divBodyEl.clientHeight || divBody.css("overflow-y") == "scroll";
  var padding = "padding" + (browser.bScrollbarLeft ? "Left" : "Right");
  divHeaderInnerStyle[padding] = bScrolling ? barWidth + "px" : "0px";
  if (footer) {
    divFooterTable[0].style.width = _fnStringToCss(iOuterWidth);
    divFooterInner[0].style.width = _fnStringToCss(iOuterWidth);
    divFooterInner[0].style[padding] = bScrolling ? barWidth + "px" : "0px";
  }
  table.children("colgroup").insertBefore(table.children("thead"));
  divBody.trigger("scroll");
  if ((settings.bSorted || settings.bFiltered) && !settings._drawHold) {
    divBodyEl.scrollTop = 0;
  }
}
function _fnApplyToChildren(fn2, an1, an2) {
  var index = 0, i2 = 0, iLen = an1.length;
  var nNode1, nNode2;
  while (i2 < iLen) {
    nNode1 = an1[i2].firstChild;
    nNode2 = an2 ? an2[i2].firstChild : null;
    while (nNode1) {
      if (nNode1.nodeType === 1) {
        if (an2) {
          fn2(nNode1, nNode2, index);
        } else {
          fn2(nNode1, index);
        }
        index++;
      }
      nNode1 = nNode1.nextSibling;
      nNode2 = an2 ? nNode2.nextSibling : null;
    }
    i2++;
  }
}
var __re_html_remove = /<.*?>/g;
function _fnCalculateColumnWidths(oSettings) {
  var table = oSettings.nTable, columns = oSettings.aoColumns, scroll = oSettings.oScroll, scrollY = scroll.sY, scrollX = scroll.sX, scrollXInner = scroll.sXInner, columnCount = columns.length, visibleColumns = _fnGetColumns(oSettings, "bVisible"), headerCells = $2("th", oSettings.nTHead), tableWidthAttr = table.getAttribute("width"), tableContainer = table.parentNode, userInputs = false, i2, column, columnIdx, width, outerWidth, browser = oSettings.oBrowser, ie67 = browser.bScrollOversize;
  var styleWidth = table.style.width;
  if (styleWidth && styleWidth.indexOf("%") !== -1) {
    tableWidthAttr = styleWidth;
  }
  for (i2 = 0; i2 < visibleColumns.length; i2++) {
    column = columns[visibleColumns[i2]];
    if (column.sWidth !== null) {
      column.sWidth = _fnConvertToWidth(column.sWidthOrig, tableContainer);
      userInputs = true;
    }
  }
  if (ie67 || !userInputs && !scrollX && !scrollY && columnCount == _fnVisbleColumns(oSettings) && columnCount == headerCells.length) {
    for (i2 = 0; i2 < columnCount; i2++) {
      var colIdx = _fnVisibleToColumnIndex(oSettings, i2);
      if (colIdx !== null) {
        columns[colIdx].sWidth = _fnStringToCss(headerCells.eq(i2).width());
      }
    }
  } else {
    var tmpTable = $2(table).clone().css("visibility", "hidden").removeAttr("id");
    tmpTable.find("tbody tr").remove();
    var tr = $2("<tr/>").appendTo(tmpTable.find("tbody"));
    tmpTable.find("thead, tfoot").remove();
    tmpTable.append($2(oSettings.nTHead).clone()).append($2(oSettings.nTFoot).clone());
    tmpTable.find("tfoot th, tfoot td").css("width", "");
    headerCells = _fnGetUniqueThs(oSettings, tmpTable.find("thead")[0]);
    for (i2 = 0; i2 < visibleColumns.length; i2++) {
      column = columns[visibleColumns[i2]];
      headerCells[i2].style.width = column.sWidthOrig !== null && column.sWidthOrig !== "" ? _fnStringToCss(column.sWidthOrig) : "";
      if (column.sWidthOrig && scrollX) {
        $2(headerCells[i2]).append($2("<div/>").css({
          width: column.sWidthOrig,
          margin: 0,
          padding: 0,
          border: 0,
          height: 1
        }));
      }
    }
    if (oSettings.aoData.length) {
      for (i2 = 0; i2 < visibleColumns.length; i2++) {
        columnIdx = visibleColumns[i2];
        column = columns[columnIdx];
        $2(_fnGetWidestNode(oSettings, columnIdx)).clone(false).append(column.sContentPadding).appendTo(tr);
      }
    }
    $2("[name]", tmpTable).removeAttr("name");
    var holder = $2("<div/>").css(
      scrollX || scrollY ? {
        position: "absolute",
        top: 0,
        left: 0,
        height: 1,
        right: 0,
        overflow: "hidden"
      } : {}
    ).append(tmpTable).appendTo(tableContainer);
    if (scrollX && scrollXInner) {
      tmpTable.width(scrollXInner);
    } else if (scrollX) {
      tmpTable.css("width", "auto");
      tmpTable.removeAttr("width");
      if (tmpTable.width() < tableContainer.clientWidth && tableWidthAttr) {
        tmpTable.width(tableContainer.clientWidth);
      }
    } else if (scrollY) {
      tmpTable.width(tableContainer.clientWidth);
    } else if (tableWidthAttr) {
      tmpTable.width(tableWidthAttr);
    }
    var total = 0;
    for (i2 = 0; i2 < visibleColumns.length; i2++) {
      var cell = $2(headerCells[i2]);
      var border = cell.outerWidth() - cell.width();
      var bounding = browser.bBounding ? Math.ceil(headerCells[i2].getBoundingClientRect().width) : cell.outerWidth();
      total += bounding;
      columns[visibleColumns[i2]].sWidth = _fnStringToCss(bounding - border);
    }
    table.style.width = _fnStringToCss(total);
    holder.remove();
  }
  if (tableWidthAttr) {
    table.style.width = _fnStringToCss(tableWidthAttr);
  }
  if ((tableWidthAttr || scrollX) && !oSettings._reszEvt) {
    var bindResize = function() {
      $2(window).on("resize.DT-" + oSettings.sInstance, _fnThrottle(function() {
        _fnAdjustColumnSizing(oSettings);
      }));
    };
    if (ie67) {
      setTimeout(bindResize, 1e3);
    } else {
      bindResize();
    }
    oSettings._reszEvt = true;
  }
}
var _fnThrottle = DataTable.util.throttle;
function _fnConvertToWidth(width, parent) {
  if (!width) {
    return 0;
  }
  var n = $2("<div/>").css("width", _fnStringToCss(width)).appendTo(parent || document.body);
  var val = n[0].offsetWidth;
  n.remove();
  return val;
}
function _fnGetWidestNode(settings, colIdx) {
  var idx = _fnGetMaxLenString(settings, colIdx);
  if (idx < 0) {
    return null;
  }
  var data = settings.aoData[idx];
  return !data.nTr ? (
    // Might not have been created when deferred rendering
    $2("<td/>").html(_fnGetCellData(settings, idx, colIdx, "display"))[0]
  ) : data.anCells[colIdx];
}
function _fnGetMaxLenString(settings, colIdx) {
  var s, max2 = -1, maxIdx = -1;
  for (var i2 = 0, ien = settings.aoData.length; i2 < ien; i2++) {
    s = _fnGetCellData(settings, i2, colIdx, "display") + "";
    s = s.replace(__re_html_remove, "");
    s = s.replace(/&nbsp;/g, " ");
    if (s.length > max2) {
      max2 = s.length;
      maxIdx = i2;
    }
  }
  return maxIdx;
}
function _fnStringToCss(s) {
  if (s === null) {
    return "0px";
  }
  if (typeof s == "number") {
    return s < 0 ? "0px" : s + "px";
  }
  return s.match(/\d$/) ? s + "px" : s;
}
function _fnSortFlatten(settings) {
  var i2, iLen, k, kLen, aSort = [], aiOrig = [], aoColumns = settings.aoColumns, aDataSort, iCol, sType, srcCol, fixed = settings.aaSortingFixed, fixedObj = $2.isPlainObject(fixed), nestedSort = [], add = function(a) {
    if (a.length && !Array.isArray(a[0])) {
      nestedSort.push(a);
    } else {
      $2.merge(nestedSort, a);
    }
  };
  if (Array.isArray(fixed)) {
    add(fixed);
  }
  if (fixedObj && fixed.pre) {
    add(fixed.pre);
  }
  add(settings.aaSorting);
  if (fixedObj && fixed.post) {
    add(fixed.post);
  }
  for (i2 = 0; i2 < nestedSort.length; i2++) {
    srcCol = nestedSort[i2][0];
    aDataSort = aoColumns[srcCol].aDataSort;
    for (k = 0, kLen = aDataSort.length; k < kLen; k++) {
      iCol = aDataSort[k];
      sType = aoColumns[iCol].sType || "string";
      if (nestedSort[i2]._idx === void 0) {
        nestedSort[i2]._idx = $2.inArray(nestedSort[i2][1], aoColumns[iCol].asSorting);
      }
      aSort.push({
        src: srcCol,
        col: iCol,
        dir: nestedSort[i2][1],
        index: nestedSort[i2]._idx,
        type: sType,
        formatter: DataTable.ext.type.order[sType + "-pre"]
      });
    }
  }
  return aSort;
}
function _fnSort(oSettings) {
  var i2, ien, iLen, j, jLen, k, kLen, sDataType, nTh, aiOrig = [], oExtSort = DataTable.ext.type.order, aoData = oSettings.aoData, aoColumns = oSettings.aoColumns, aDataSort, data, iCol, sType, oSort, formatters = 0, sortCol, displayMaster = oSettings.aiDisplayMaster, aSort;
  _fnColumnTypes(oSettings);
  aSort = _fnSortFlatten(oSettings);
  for (i2 = 0, ien = aSort.length; i2 < ien; i2++) {
    sortCol = aSort[i2];
    if (sortCol.formatter) {
      formatters++;
    }
    _fnSortData(oSettings, sortCol.col);
  }
  if (_fnDataSource(oSettings) != "ssp" && aSort.length !== 0) {
    for (i2 = 0, iLen = displayMaster.length; i2 < iLen; i2++) {
      aiOrig[displayMaster[i2]] = i2;
    }
    if (formatters === aSort.length) {
      displayMaster.sort(function(a, b) {
        var x, y, k2, test, sort, len = aSort.length, dataA = aoData[a]._aSortData, dataB = aoData[b]._aSortData;
        for (k2 = 0; k2 < len; k2++) {
          sort = aSort[k2];
          x = dataA[sort.col];
          y = dataB[sort.col];
          test = x < y ? -1 : x > y ? 1 : 0;
          if (test !== 0) {
            return sort.dir === "asc" ? test : -test;
          }
        }
        x = aiOrig[a];
        y = aiOrig[b];
        return x < y ? -1 : x > y ? 1 : 0;
      });
    } else {
      displayMaster.sort(function(a, b) {
        var x, y, k2, l, test, sort, fn2, len = aSort.length, dataA = aoData[a]._aSortData, dataB = aoData[b]._aSortData;
        for (k2 = 0; k2 < len; k2++) {
          sort = aSort[k2];
          x = dataA[sort.col];
          y = dataB[sort.col];
          fn2 = oExtSort[sort.type + "-" + sort.dir] || oExtSort["string-" + sort.dir];
          test = fn2(x, y);
          if (test !== 0) {
            return test;
          }
        }
        x = aiOrig[a];
        y = aiOrig[b];
        return x < y ? -1 : x > y ? 1 : 0;
      });
    }
  }
  oSettings.bSorted = true;
}
function _fnSortAria(settings) {
  var label;
  var nextSort;
  var columns = settings.aoColumns;
  var aSort = _fnSortFlatten(settings);
  var oAria = settings.oLanguage.oAria;
  for (var i2 = 0, iLen = columns.length; i2 < iLen; i2++) {
    var col = columns[i2];
    var asSorting = col.asSorting;
    var sTitle = col.ariaTitle || col.sTitle.replace(/<.*?>/g, "");
    var th = col.nTh;
    th.removeAttribute("aria-sort");
    if (col.bSortable) {
      if (aSort.length > 0 && aSort[0].col == i2) {
        th.setAttribute("aria-sort", aSort[0].dir == "asc" ? "ascending" : "descending");
        nextSort = asSorting[aSort[0].index + 1] || asSorting[0];
      } else {
        nextSort = asSorting[0];
      }
      label = sTitle + (nextSort === "asc" ? oAria.sSortAscending : oAria.sSortDescending);
    } else {
      label = sTitle;
    }
    th.setAttribute("aria-label", label);
  }
}
function _fnSortListener(settings, colIdx, append, callback) {
  var col = settings.aoColumns[colIdx];
  var sorting = settings.aaSorting;
  var asSorting = col.asSorting;
  var nextSortIdx;
  var next = function(a, overflow) {
    var idx = a._idx;
    if (idx === void 0) {
      idx = $2.inArray(a[1], asSorting);
    }
    return idx + 1 < asSorting.length ? idx + 1 : overflow ? null : 0;
  };
  if (typeof sorting[0] === "number") {
    sorting = settings.aaSorting = [sorting];
  }
  if (append && settings.oFeatures.bSortMulti) {
    var sortIdx = $2.inArray(colIdx, _pluck(sorting, "0"));
    if (sortIdx !== -1) {
      nextSortIdx = next(sorting[sortIdx], true);
      if (nextSortIdx === null && sorting.length === 1) {
        nextSortIdx = 0;
      }
      if (nextSortIdx === null) {
        sorting.splice(sortIdx, 1);
      } else {
        sorting[sortIdx][1] = asSorting[nextSortIdx];
        sorting[sortIdx]._idx = nextSortIdx;
      }
    } else {
      sorting.push([colIdx, asSorting[0], 0]);
      sorting[sorting.length - 1]._idx = 0;
    }
  } else if (sorting.length && sorting[0][0] == colIdx) {
    nextSortIdx = next(sorting[0]);
    sorting.length = 1;
    sorting[0][1] = asSorting[nextSortIdx];
    sorting[0]._idx = nextSortIdx;
  } else {
    sorting.length = 0;
    sorting.push([colIdx, asSorting[0]]);
    sorting[0]._idx = 0;
  }
  _fnReDraw(settings);
  if (typeof callback == "function") {
    callback(settings);
  }
}
function _fnSortAttachListener(settings, attachTo, colIdx, callback) {
  var col = settings.aoColumns[colIdx];
  _fnBindAction(attachTo, {}, function(e) {
    if (col.bSortable === false) {
      return;
    }
    if (settings.oFeatures.bProcessing) {
      _fnProcessingDisplay(settings, true);
      setTimeout(function() {
        _fnSortListener(settings, colIdx, e.shiftKey, callback);
        if (_fnDataSource(settings) !== "ssp") {
          _fnProcessingDisplay(settings, false);
        }
      }, 0);
    } else {
      _fnSortListener(settings, colIdx, e.shiftKey, callback);
    }
  });
}
function _fnSortingClasses(settings) {
  var oldSort = settings.aLastSort;
  var sortClass = settings.oClasses.sSortColumn;
  var sort = _fnSortFlatten(settings);
  var features = settings.oFeatures;
  var i2, ien, colIdx;
  if (features.bSort && features.bSortClasses) {
    for (i2 = 0, ien = oldSort.length; i2 < ien; i2++) {
      colIdx = oldSort[i2].src;
      $2(_pluck(settings.aoData, "anCells", colIdx)).removeClass(sortClass + (i2 < 2 ? i2 + 1 : 3));
    }
    for (i2 = 0, ien = sort.length; i2 < ien; i2++) {
      colIdx = sort[i2].src;
      $2(_pluck(settings.aoData, "anCells", colIdx)).addClass(sortClass + (i2 < 2 ? i2 + 1 : 3));
    }
  }
  settings.aLastSort = sort;
}
function _fnSortData(settings, idx) {
  var column = settings.aoColumns[idx];
  var customSort = DataTable.ext.order[column.sSortDataType];
  var customData;
  if (customSort) {
    customData = customSort.call(
      settings.oInstance,
      settings,
      idx,
      _fnColumnIndexToVisible(settings, idx)
    );
  }
  var row, cellData;
  var formatter = DataTable.ext.type.order[column.sType + "-pre"];
  for (var i2 = 0, ien = settings.aoData.length; i2 < ien; i2++) {
    row = settings.aoData[i2];
    if (!row._aSortData) {
      row._aSortData = [];
    }
    if (!row._aSortData[idx] || customSort) {
      cellData = customSort ? customData[i2] : (
        // If there was a custom sort function, use data from there
        _fnGetCellData(settings, i2, idx, "sort")
      );
      row._aSortData[idx] = formatter ? formatter(cellData) : cellData;
    }
  }
}
function _fnSaveState(settings) {
  if (settings._bLoadingState) {
    return;
  }
  var state = {
    time: +/* @__PURE__ */ new Date(),
    start: settings._iDisplayStart,
    length: settings._iDisplayLength,
    order: $2.extend(true, [], settings.aaSorting),
    search: _fnSearchToCamel(settings.oPreviousSearch),
    columns: $2.map(settings.aoColumns, function(col, i2) {
      return {
        visible: col.bVisible,
        search: _fnSearchToCamel(settings.aoPreSearchCols[i2])
      };
    })
  };
  settings.oSavedState = state;
  _fnCallbackFire(settings, "aoStateSaveParams", "stateSaveParams", [settings, state]);
  if (settings.oFeatures.bStateSave && !settings.bDestroying) {
    settings.fnStateSaveCallback.call(settings.oInstance, settings, state);
  }
}
function _fnLoadState(settings, oInit, callback) {
  if (!settings.oFeatures.bStateSave) {
    callback();
    return;
  }
  var loaded = function(state2) {
    _fnImplementState(settings, state2, callback);
  };
  var state = settings.fnStateLoadCallback.call(settings.oInstance, settings, loaded);
  if (state !== void 0) {
    _fnImplementState(settings, state, callback);
  }
  return true;
}
function _fnImplementState(settings, s, callback) {
  var i2, ien;
  var columns = settings.aoColumns;
  settings._bLoadingState = true;
  var api = settings._bInitComplete ? new DataTable.Api(settings) : null;
  if (!s || !s.time) {
    settings._bLoadingState = false;
    callback();
    return;
  }
  var abStateLoad = _fnCallbackFire(settings, "aoStateLoadParams", "stateLoadParams", [settings, s]);
  if ($2.inArray(false, abStateLoad) !== -1) {
    settings._bLoadingState = false;
    callback();
    return;
  }
  var duration = settings.iStateDuration;
  if (duration > 0 && s.time < +/* @__PURE__ */ new Date() - duration * 1e3) {
    settings._bLoadingState = false;
    callback();
    return;
  }
  if (s.columns && columns.length !== s.columns.length) {
    settings._bLoadingState = false;
    callback();
    return;
  }
  settings.oLoadedState = $2.extend(true, {}, s);
  if (s.length !== void 0) {
    if (api) {
      api.page.len(s.length);
    } else {
      settings._iDisplayLength = s.length;
    }
  }
  if (s.start !== void 0) {
    if (api === null) {
      settings._iDisplayStart = s.start;
      settings.iInitDisplayStart = s.start;
    } else {
      _fnPageChange(settings, s.start / settings._iDisplayLength);
    }
  }
  if (s.order !== void 0) {
    settings.aaSorting = [];
    $2.each(s.order, function(i3, col2) {
      settings.aaSorting.push(
        col2[0] >= columns.length ? [0, col2[1]] : col2
      );
    });
  }
  if (s.search !== void 0) {
    $2.extend(settings.oPreviousSearch, _fnSearchToHung(s.search));
  }
  if (s.columns) {
    for (i2 = 0, ien = s.columns.length; i2 < ien; i2++) {
      var col = s.columns[i2];
      if (col.visible !== void 0) {
        if (api) {
          api.column(i2).visible(col.visible, false);
        } else {
          columns[i2].bVisible = col.visible;
        }
      }
      if (col.search !== void 0) {
        $2.extend(settings.aoPreSearchCols[i2], _fnSearchToHung(col.search));
      }
    }
    if (api) {
      api.columns.adjust();
    }
  }
  settings._bLoadingState = false;
  _fnCallbackFire(settings, "aoStateLoaded", "stateLoaded", [settings, s]);
  callback();
}
function _fnSettingsFromNode(table) {
  var settings = DataTable.settings;
  var idx = $2.inArray(table, _pluck(settings, "nTable"));
  return idx !== -1 ? settings[idx] : null;
}
function _fnLog(settings, level, msg, tn) {
  msg = "DataTables warning: " + (settings ? "table id=" + settings.sTableId + " - " : "") + msg;
  if (tn) {
    msg += ". For more information about this error, please see http://datatables.net/tn/" + tn;
  }
  if (!level) {
    var ext = DataTable.ext;
    var type = ext.sErrMode || ext.errMode;
    if (settings) {
      _fnCallbackFire(settings, null, "error", [settings, tn, msg]);
    }
    if (type == "alert") {
      alert(msg);
    } else if (type == "throw") {
      throw new Error(msg);
    } else if (typeof type == "function") {
      type(settings, tn, msg);
    }
  } else if (window.console && console.log) {
    console.log(msg);
  }
}
function _fnMap(ret, src, name, mappedName) {
  if (Array.isArray(name)) {
    $2.each(name, function(i2, val) {
      if (Array.isArray(val)) {
        _fnMap(ret, src, val[0], val[1]);
      } else {
        _fnMap(ret, src, val);
      }
    });
    return;
  }
  if (mappedName === void 0) {
    mappedName = name;
  }
  if (src[name] !== void 0) {
    ret[mappedName] = src[name];
  }
}
function _fnExtend(out, extender, breakRefs) {
  var val;
  for (var prop in extender) {
    if (extender.hasOwnProperty(prop)) {
      val = extender[prop];
      if ($2.isPlainObject(val)) {
        if (!$2.isPlainObject(out[prop])) {
          out[prop] = {};
        }
        $2.extend(true, out[prop], val);
      } else if (breakRefs && prop !== "data" && prop !== "aaData" && Array.isArray(val)) {
        out[prop] = val.slice();
      } else {
        out[prop] = val;
      }
    }
  }
  return out;
}
function _fnBindAction(n, oData, fn2) {
  $2(n).on("click.DT", oData, function(e) {
    $2(n).trigger("blur");
    fn2(e);
  }).on("keypress.DT", oData, function(e) {
    if (e.which === 13) {
      e.preventDefault();
      fn2(e);
    }
  }).on("selectstart.DT", function() {
    return false;
  });
}
function _fnCallbackReg(oSettings, sStore, fn2, sName) {
  if (fn2) {
    oSettings[sStore].push({
      "fn": fn2,
      "sName": sName
    });
  }
}
function _fnCallbackFire(settings, callbackArr, eventName, args) {
  var ret = [];
  if (callbackArr) {
    ret = $2.map(settings[callbackArr].slice().reverse(), function(val, i2) {
      return val.fn.apply(settings.oInstance, args);
    });
  }
  if (eventName !== null) {
    var e = $2.Event(eventName + ".dt");
    var table = $2(settings.nTable);
    table.trigger(e, args);
    if (table.parents("body").length === 0) {
      $2("body").trigger(e, args);
    }
    ret.push(e.result);
  }
  return ret;
}
function _fnLengthOverflow(settings) {
  var start2 = settings._iDisplayStart, end2 = settings.fnDisplayEnd(), len = settings._iDisplayLength;
  if (start2 >= end2) {
    start2 = end2 - len;
  }
  start2 -= start2 % len;
  if (len === -1 || start2 < 0) {
    start2 = 0;
  }
  settings._iDisplayStart = start2;
}
function _fnRenderer(settings, type) {
  var renderer = settings.renderer;
  var host = DataTable.ext.renderer[type];
  if ($2.isPlainObject(renderer) && renderer[type]) {
    return host[renderer[type]] || host._;
  } else if (typeof renderer === "string") {
    return host[renderer] || host._;
  }
  return host._;
}
function _fnDataSource(settings) {
  if (settings.oFeatures.bServerSide) {
    return "ssp";
  } else if (settings.ajax || settings.sAjaxSource) {
    return "ajax";
  }
  return "dom";
}
var __apiStruct = [];
var __arrayProto = Array.prototype;
var _toSettings = function(mixed) {
  var idx, jq;
  var settings = DataTable.settings;
  var tables = $2.map(settings, function(el, i2) {
    return el.nTable;
  });
  if (!mixed) {
    return [];
  } else if (mixed.nTable && mixed.oApi) {
    return [mixed];
  } else if (mixed.nodeName && mixed.nodeName.toLowerCase() === "table") {
    idx = $2.inArray(mixed, tables);
    return idx !== -1 ? [settings[idx]] : null;
  } else if (mixed && typeof mixed.settings === "function") {
    return mixed.settings().toArray();
  } else if (typeof mixed === "string") {
    jq = $2(mixed);
  } else if (mixed instanceof $2) {
    jq = mixed;
  }
  if (jq) {
    return jq.map(function(i2) {
      idx = $2.inArray(this, tables);
      return idx !== -1 ? settings[idx] : null;
    }).toArray();
  }
};
_Api = function(context, data) {
  if (!(this instanceof _Api)) {
    return new _Api(context, data);
  }
  var settings = [];
  var ctxSettings = function(o) {
    var a = _toSettings(o);
    if (a) {
      settings.push.apply(settings, a);
    }
  };
  if (Array.isArray(context)) {
    for (var i2 = 0, ien = context.length; i2 < ien; i2++) {
      ctxSettings(context[i2]);
    }
  } else {
    ctxSettings(context);
  }
  this.context = _unique(settings);
  if (data) {
    $2.merge(this, data);
  }
  this.selector = {
    rows: null,
    cols: null,
    opts: null
  };
  _Api.extend(this, this, __apiStruct);
};
DataTable.Api = _Api;
$2.extend(_Api.prototype, {
  any: function() {
    return this.count() !== 0;
  },
  concat: __arrayProto.concat,
  context: [],
  // array of table settings objects
  count: function() {
    return this.flatten().length;
  },
  each: function(fn2) {
    for (var i2 = 0, ien = this.length; i2 < ien; i2++) {
      fn2.call(this, this[i2], i2, this);
    }
    return this;
  },
  eq: function(idx) {
    var ctx = this.context;
    return ctx.length > idx ? new _Api(ctx[idx], this[idx]) : null;
  },
  filter: function(fn2) {
    var a = [];
    if (__arrayProto.filter) {
      a = __arrayProto.filter.call(this, fn2, this);
    } else {
      for (var i2 = 0, ien = this.length; i2 < ien; i2++) {
        if (fn2.call(this, this[i2], i2, this)) {
          a.push(this[i2]);
        }
      }
    }
    return new _Api(this.context, a);
  },
  flatten: function() {
    var a = [];
    return new _Api(this.context, a.concat.apply(a, this.toArray()));
  },
  join: __arrayProto.join,
  indexOf: __arrayProto.indexOf || function(obj, start2) {
    for (var i2 = start2 || 0, ien = this.length; i2 < ien; i2++) {
      if (this[i2] === obj) {
        return i2;
      }
    }
    return -1;
  },
  iterator: function(flatten, type, fn2, alwaysNew) {
    var a = [], ret, i2, ien, j, jen, context = this.context, rows, items, item, selector = this.selector;
    if (typeof flatten === "string") {
      alwaysNew = fn2;
      fn2 = type;
      type = flatten;
      flatten = false;
    }
    for (i2 = 0, ien = context.length; i2 < ien; i2++) {
      var apiInst = new _Api(context[i2]);
      if (type === "table") {
        ret = fn2.call(apiInst, context[i2], i2);
        if (ret !== void 0) {
          a.push(ret);
        }
      } else if (type === "columns" || type === "rows") {
        ret = fn2.call(apiInst, context[i2], this[i2], i2);
        if (ret !== void 0) {
          a.push(ret);
        }
      } else if (type === "column" || type === "column-rows" || type === "row" || type === "cell") {
        items = this[i2];
        if (type === "column-rows") {
          rows = _selector_row_indexes(context[i2], selector.opts);
        }
        for (j = 0, jen = items.length; j < jen; j++) {
          item = items[j];
          if (type === "cell") {
            ret = fn2.call(apiInst, context[i2], item.row, item.column, i2, j);
          } else {
            ret = fn2.call(apiInst, context[i2], item, i2, j, rows);
          }
          if (ret !== void 0) {
            a.push(ret);
          }
        }
      }
    }
    if (a.length || alwaysNew) {
      var api = new _Api(context, flatten ? a.concat.apply([], a) : a);
      var apiSelector = api.selector;
      apiSelector.rows = selector.rows;
      apiSelector.cols = selector.cols;
      apiSelector.opts = selector.opts;
      return api;
    }
    return this;
  },
  lastIndexOf: __arrayProto.lastIndexOf || function(obj, start2) {
    return this.indexOf.apply(this.toArray.reverse(), arguments);
  },
  length: 0,
  map: function(fn2) {
    var a = [];
    if (__arrayProto.map) {
      a = __arrayProto.map.call(this, fn2, this);
    } else {
      for (var i2 = 0, ien = this.length; i2 < ien; i2++) {
        a.push(fn2.call(this, this[i2], i2));
      }
    }
    return new _Api(this.context, a);
  },
  pluck: function(prop) {
    var fn2 = DataTable.util.get(prop);
    return this.map(function(el) {
      return fn2(el);
    });
  },
  pop: __arrayProto.pop,
  push: __arrayProto.push,
  // Does not return an API instance
  reduce: __arrayProto.reduce || function(fn2, init2) {
    return _fnReduce(this, fn2, init2, 0, this.length, 1);
  },
  reduceRight: __arrayProto.reduceRight || function(fn2, init2) {
    return _fnReduce(this, fn2, init2, this.length - 1, -1, -1);
  },
  reverse: __arrayProto.reverse,
  // Object with rows, columns and opts
  selector: null,
  shift: __arrayProto.shift,
  slice: function() {
    return new _Api(this.context, this);
  },
  sort: __arrayProto.sort,
  // ? name - order?
  splice: __arrayProto.splice,
  toArray: function() {
    return __arrayProto.slice.call(this);
  },
  to$: function() {
    return $2(this);
  },
  toJQuery: function() {
    return $2(this);
  },
  unique: function() {
    return new _Api(this.context, _unique(this));
  },
  unshift: __arrayProto.unshift
});
_Api.extend = function(scope, obj, ext) {
  if (!ext.length || !obj || !(obj instanceof _Api) && !obj.__dt_wrapper) {
    return;
  }
  var i2, ien, struct, methodScoping = function(scope2, fn2, struc) {
    return function() {
      var ret = fn2.apply(scope2, arguments);
      _Api.extend(ret, ret, struc.methodExt);
      return ret;
    };
  };
  for (i2 = 0, ien = ext.length; i2 < ien; i2++) {
    struct = ext[i2];
    obj[struct.name] = struct.type === "function" ? methodScoping(scope, struct.val, struct) : struct.type === "object" ? {} : struct.val;
    obj[struct.name].__dt_wrapper = true;
    _Api.extend(scope, obj[struct.name], struct.propExt);
  }
};
_Api.register = _api_register = function(name, val) {
  if (Array.isArray(name)) {
    for (var j = 0, jen = name.length; j < jen; j++) {
      _Api.register(name[j], val);
    }
    return;
  }
  var i2, ien, heir = name.split("."), struct = __apiStruct, key, method;
  var find = function(src2, name2) {
    for (var i3 = 0, ien2 = src2.length; i3 < ien2; i3++) {
      if (src2[i3].name === name2) {
        return src2[i3];
      }
    }
    return null;
  };
  for (i2 = 0, ien = heir.length; i2 < ien; i2++) {
    method = heir[i2].indexOf("()") !== -1;
    key = method ? heir[i2].replace("()", "") : heir[i2];
    var src = find(struct, key);
    if (!src) {
      src = {
        name: key,
        val: {},
        methodExt: [],
        propExt: [],
        type: "object"
      };
      struct.push(src);
    }
    if (i2 === ien - 1) {
      src.val = val;
      src.type = typeof val === "function" ? "function" : $2.isPlainObject(val) ? "object" : "other";
    } else {
      struct = method ? src.methodExt : src.propExt;
    }
  }
};
_Api.registerPlural = _api_registerPlural = function(pluralName, singularName, val) {
  _Api.register(pluralName, val);
  _Api.register(singularName, function() {
    var ret = val.apply(this, arguments);
    if (ret === this) {
      return this;
    } else if (ret instanceof _Api) {
      return ret.length ? Array.isArray(ret[0]) ? new _Api(ret.context, ret[0]) : (
        // Array results are 'enhanced'
        ret[0]
      ) : void 0;
    }
    return ret;
  });
};
var __table_selector = function(selector, a) {
  if (Array.isArray(selector)) {
    return $2.map(selector, function(item) {
      return __table_selector(item, a);
    });
  }
  if (typeof selector === "number") {
    return [a[selector]];
  }
  var nodes = $2.map(a, function(el, i2) {
    return el.nTable;
  });
  return $2(nodes).filter(selector).map(function(i2) {
    var idx = $2.inArray(this, nodes);
    return a[idx];
  }).toArray();
};
_api_register("tables()", function(selector) {
  return selector !== void 0 && selector !== null ? new _Api(__table_selector(selector, this.context)) : this;
});
_api_register("table()", function(selector) {
  var tables = this.tables(selector);
  var ctx = tables.context;
  return ctx.length ? new _Api(ctx[0]) : tables;
});
_api_registerPlural("tables().nodes()", "table().node()", function() {
  return this.iterator("table", function(ctx) {
    return ctx.nTable;
  }, 1);
});
_api_registerPlural("tables().body()", "table().body()", function() {
  return this.iterator("table", function(ctx) {
    return ctx.nTBody;
  }, 1);
});
_api_registerPlural("tables().header()", "table().header()", function() {
  return this.iterator("table", function(ctx) {
    return ctx.nTHead;
  }, 1);
});
_api_registerPlural("tables().footer()", "table().footer()", function() {
  return this.iterator("table", function(ctx) {
    return ctx.nTFoot;
  }, 1);
});
_api_registerPlural("tables().containers()", "table().container()", function() {
  return this.iterator("table", function(ctx) {
    return ctx.nTableWrapper;
  }, 1);
});
_api_register("draw()", function(paging) {
  return this.iterator("table", function(settings) {
    if (paging === "page") {
      _fnDraw(settings);
    } else {
      if (typeof paging === "string") {
        paging = paging === "full-hold" ? false : true;
      }
      _fnReDraw(settings, paging === false);
    }
  });
});
_api_register("page()", function(action) {
  if (action === void 0) {
    return this.page.info().page;
  }
  return this.iterator("table", function(settings) {
    _fnPageChange(settings, action);
  });
});
_api_register("page.info()", function(action) {
  if (this.context.length === 0) {
    return void 0;
  }
  var settings = this.context[0], start2 = settings._iDisplayStart, len = settings.oFeatures.bPaginate ? settings._iDisplayLength : -1, visRecords = settings.fnRecordsDisplay(), all = len === -1;
  return {
    "page": all ? 0 : Math.floor(start2 / len),
    "pages": all ? 1 : Math.ceil(visRecords / len),
    "start": start2,
    "end": settings.fnDisplayEnd(),
    "length": len,
    "recordsTotal": settings.fnRecordsTotal(),
    "recordsDisplay": visRecords,
    "serverSide": _fnDataSource(settings) === "ssp"
  };
});
_api_register("page.len()", function(len) {
  if (len === void 0) {
    return this.context.length !== 0 ? this.context[0]._iDisplayLength : void 0;
  }
  return this.iterator("table", function(settings) {
    _fnLengthChange(settings, len);
  });
});
var __reload = function(settings, holdPosition, callback) {
  if (callback) {
    var api = new _Api(settings);
    api.one("draw", function() {
      callback(api.ajax.json());
    });
  }
  if (_fnDataSource(settings) == "ssp") {
    _fnReDraw(settings, holdPosition);
  } else {
    _fnProcessingDisplay(settings, true);
    var xhr = settings.jqXHR;
    if (xhr && xhr.readyState !== 4) {
      xhr.abort();
    }
    _fnBuildAjax(settings, [], function(json) {
      _fnClearTable(settings);
      var data = _fnAjaxDataSrc(settings, json);
      for (var i2 = 0, ien = data.length; i2 < ien; i2++) {
        _fnAddData(settings, data[i2]);
      }
      _fnReDraw(settings, holdPosition);
      _fnProcessingDisplay(settings, false);
    });
  }
};
_api_register("ajax.json()", function() {
  var ctx = this.context;
  if (ctx.length > 0) {
    return ctx[0].json;
  }
});
_api_register("ajax.params()", function() {
  var ctx = this.context;
  if (ctx.length > 0) {
    return ctx[0].oAjaxData;
  }
});
_api_register("ajax.reload()", function(callback, resetPaging) {
  return this.iterator("table", function(settings) {
    __reload(settings, resetPaging === false, callback);
  });
});
_api_register("ajax.url()", function(url) {
  var ctx = this.context;
  if (url === void 0) {
    if (ctx.length === 0) {
      return void 0;
    }
    ctx = ctx[0];
    return ctx.ajax ? $2.isPlainObject(ctx.ajax) ? ctx.ajax.url : ctx.ajax : ctx.sAjaxSource;
  }
  return this.iterator("table", function(settings) {
    if ($2.isPlainObject(settings.ajax)) {
      settings.ajax.url = url;
    } else {
      settings.ajax = url;
    }
  });
});
_api_register("ajax.url().load()", function(callback, resetPaging) {
  return this.iterator("table", function(ctx) {
    __reload(ctx, resetPaging === false, callback);
  });
});
var _selector_run = function(type, selector, selectFn, settings, opts) {
  var out = [], res, a, i2, ien, j, jen, selectorType = typeof selector;
  if (!selector || selectorType === "string" || selectorType === "function" || selector.length === void 0) {
    selector = [selector];
  }
  for (i2 = 0, ien = selector.length; i2 < ien; i2++) {
    a = selector[i2] && selector[i2].split && !selector[i2].match(/[\[\(:]/) ? selector[i2].split(",") : [selector[i2]];
    for (j = 0, jen = a.length; j < jen; j++) {
      res = selectFn(typeof a[j] === "string" ? a[j].trim() : a[j]);
      if (res && res.length) {
        out = out.concat(res);
      }
    }
  }
  var ext = _ext.selector[type];
  if (ext.length) {
    for (i2 = 0, ien = ext.length; i2 < ien; i2++) {
      out = ext[i2](settings, opts, out);
    }
  }
  return _unique(out);
};
var _selector_opts = function(opts) {
  if (!opts) {
    opts = {};
  }
  if (opts.filter && opts.search === void 0) {
    opts.search = opts.filter;
  }
  return $2.extend({
    search: "none",
    order: "current",
    page: "all"
  }, opts);
};
var _selector_first = function(inst) {
  for (var i2 = 0, ien = inst.length; i2 < ien; i2++) {
    if (inst[i2].length > 0) {
      inst[0] = inst[i2];
      inst[0].length = 1;
      inst.length = 1;
      inst.context = [inst.context[i2]];
      return inst;
    }
  }
  inst.length = 0;
  return inst;
};
var _selector_row_indexes = function(settings, opts) {
  var i2, ien, tmp, a = [], displayFiltered = settings.aiDisplay, displayMaster = settings.aiDisplayMaster;
  var search = opts.search, order2 = opts.order, page = opts.page;
  if (_fnDataSource(settings) == "ssp") {
    return search === "removed" ? [] : _range(0, displayMaster.length);
  } else if (page == "current") {
    for (i2 = settings._iDisplayStart, ien = settings.fnDisplayEnd(); i2 < ien; i2++) {
      a.push(displayFiltered[i2]);
    }
  } else if (order2 == "current" || order2 == "applied") {
    if (search == "none") {
      a = displayMaster.slice();
    } else if (search == "applied") {
      a = displayFiltered.slice();
    } else if (search == "removed") {
      var displayFilteredMap = {};
      for (var i2 = 0, ien = displayFiltered.length; i2 < ien; i2++) {
        displayFilteredMap[displayFiltered[i2]] = null;
      }
      a = $2.map(displayMaster, function(el) {
        return !displayFilteredMap.hasOwnProperty(el) ? el : null;
      });
    }
  } else if (order2 == "index" || order2 == "original") {
    for (i2 = 0, ien = settings.aoData.length; i2 < ien; i2++) {
      if (search == "none") {
        a.push(i2);
      } else {
        tmp = $2.inArray(i2, displayFiltered);
        if (tmp === -1 && search == "removed" || tmp >= 0 && search == "applied") {
          a.push(i2);
        }
      }
    }
  }
  return a;
};
var __row_selector = function(settings, selector, opts) {
  var rows;
  var run = function(sel) {
    var selInt = _intVal(sel);
    var i2, ien;
    var aoData = settings.aoData;
    if (selInt !== null && !opts) {
      return [selInt];
    }
    if (!rows) {
      rows = _selector_row_indexes(settings, opts);
    }
    if (selInt !== null && $2.inArray(selInt, rows) !== -1) {
      return [selInt];
    } else if (sel === null || sel === void 0 || sel === "") {
      return rows;
    }
    if (typeof sel === "function") {
      return $2.map(rows, function(idx) {
        var row = aoData[idx];
        return sel(idx, row._aData, row.nTr) ? idx : null;
      });
    }
    if (sel.nodeName) {
      var rowIdx = sel._DT_RowIndex;
      var cellIdx = sel._DT_CellIndex;
      if (rowIdx !== void 0) {
        return aoData[rowIdx] && aoData[rowIdx].nTr === sel ? [rowIdx] : [];
      } else if (cellIdx) {
        return aoData[cellIdx.row] && aoData[cellIdx.row].nTr === sel.parentNode ? [cellIdx.row] : [];
      } else {
        var host = $2(sel).closest("*[data-dt-row]");
        return host.length ? [host.data("dt-row")] : [];
      }
    }
    if (typeof sel === "string" && sel.charAt(0) === "#") {
      var rowObj = settings.aIds[sel.replace(/^#/, "")];
      if (rowObj !== void 0) {
        return [rowObj.idx];
      }
    }
    var nodes = _removeEmpty(
      _pluck_order(settings.aoData, rows, "nTr")
    );
    return $2(nodes).filter(sel).map(function() {
      return this._DT_RowIndex;
    }).toArray();
  };
  return _selector_run("row", selector, run, settings, opts);
};
_api_register("rows()", function(selector, opts) {
  if (selector === void 0) {
    selector = "";
  } else if ($2.isPlainObject(selector)) {
    opts = selector;
    selector = "";
  }
  opts = _selector_opts(opts);
  var inst = this.iterator("table", function(settings) {
    return __row_selector(settings, selector, opts);
  }, 1);
  inst.selector.rows = selector;
  inst.selector.opts = opts;
  return inst;
});
_api_register("rows().nodes()", function() {
  return this.iterator("row", function(settings, row) {
    return settings.aoData[row].nTr || void 0;
  }, 1);
});
_api_register("rows().data()", function() {
  return this.iterator(true, "rows", function(settings, rows) {
    return _pluck_order(settings.aoData, rows, "_aData");
  }, 1);
});
_api_registerPlural("rows().cache()", "row().cache()", function(type) {
  return this.iterator("row", function(settings, row) {
    var r = settings.aoData[row];
    return type === "search" ? r._aFilterData : r._aSortData;
  }, 1);
});
_api_registerPlural("rows().invalidate()", "row().invalidate()", function(src) {
  return this.iterator("row", function(settings, row) {
    _fnInvalidate(settings, row, src);
  });
});
_api_registerPlural("rows().indexes()", "row().index()", function() {
  return this.iterator("row", function(settings, row) {
    return row;
  }, 1);
});
_api_registerPlural("rows().ids()", "row().id()", function(hash3) {
  var a = [];
  var context = this.context;
  for (var i2 = 0, ien = context.length; i2 < ien; i2++) {
    for (var j = 0, jen = this[i2].length; j < jen; j++) {
      var id = context[i2].rowIdFn(context[i2].aoData[this[i2][j]]._aData);
      a.push((hash3 === true ? "#" : "") + id);
    }
  }
  return new _Api(context, a);
});
_api_registerPlural("rows().remove()", "row().remove()", function() {
  var that = this;
  this.iterator("row", function(settings, row, thatIdx) {
    var data = settings.aoData;
    var rowData = data[row];
    var i2, ien, j, jen;
    var loopRow, loopCells;
    data.splice(row, 1);
    for (i2 = 0, ien = data.length; i2 < ien; i2++) {
      loopRow = data[i2];
      loopCells = loopRow.anCells;
      if (loopRow.nTr !== null) {
        loopRow.nTr._DT_RowIndex = i2;
      }
      if (loopCells !== null) {
        for (j = 0, jen = loopCells.length; j < jen; j++) {
          loopCells[j]._DT_CellIndex.row = i2;
        }
      }
    }
    _fnDeleteIndex(settings.aiDisplayMaster, row);
    _fnDeleteIndex(settings.aiDisplay, row);
    _fnDeleteIndex(that[thatIdx], row, false);
    if (settings._iRecordsDisplay > 0) {
      settings._iRecordsDisplay--;
    }
    _fnLengthOverflow(settings);
    var id = settings.rowIdFn(rowData._aData);
    if (id !== void 0) {
      delete settings.aIds[id];
    }
  });
  this.iterator("table", function(settings) {
    for (var i2 = 0, ien = settings.aoData.length; i2 < ien; i2++) {
      settings.aoData[i2].idx = i2;
    }
  });
  return this;
});
_api_register("rows.add()", function(rows) {
  var newRows = this.iterator("table", function(settings) {
    var row, i2, ien;
    var out = [];
    for (i2 = 0, ien = rows.length; i2 < ien; i2++) {
      row = rows[i2];
      if (row.nodeName && row.nodeName.toUpperCase() === "TR") {
        out.push(_fnAddTr(settings, row)[0]);
      } else {
        out.push(_fnAddData(settings, row));
      }
    }
    return out;
  }, 1);
  var modRows = this.rows(-1);
  modRows.pop();
  $2.merge(modRows, newRows);
  return modRows;
});
_api_register("row()", function(selector, opts) {
  return _selector_first(this.rows(selector, opts));
});
_api_register("row().data()", function(data) {
  var ctx = this.context;
  if (data === void 0) {
    return ctx.length && this.length ? ctx[0].aoData[this[0]]._aData : void 0;
  }
  var row = ctx[0].aoData[this[0]];
  row._aData = data;
  if (Array.isArray(data) && row.nTr && row.nTr.id) {
    _fnSetObjectDataFn(ctx[0].rowId)(data, row.nTr.id);
  }
  _fnInvalidate(ctx[0], this[0], "data");
  return this;
});
_api_register("row().node()", function() {
  var ctx = this.context;
  return ctx.length && this.length ? ctx[0].aoData[this[0]].nTr || null : null;
});
_api_register("row.add()", function(row) {
  if (row instanceof $2 && row.length) {
    row = row[0];
  }
  var rows = this.iterator("table", function(settings) {
    if (row.nodeName && row.nodeName.toUpperCase() === "TR") {
      return _fnAddTr(settings, row)[0];
    }
    return _fnAddData(settings, row);
  });
  return this.row(rows[0]);
});
$2(document).on("plugin-init.dt", function(e, context) {
  var api = new _Api(context);
  var namespace = "on-plugin-init";
  var stateSaveParamsEvent = "stateSaveParams." + namespace;
  var destroyEvent = "destroy. " + namespace;
  api.on(stateSaveParamsEvent, function(e2, settings, d) {
    var idFn = settings.rowIdFn;
    var data = settings.aoData;
    var ids = [];
    for (var i2 = 0; i2 < data.length; i2++) {
      if (data[i2]._detailsShow) {
        ids.push("#" + idFn(data[i2]._aData));
      }
    }
    d.childRows = ids;
  });
  api.on(destroyEvent, function() {
    api.off(stateSaveParamsEvent + " " + destroyEvent);
  });
  var loaded = api.state.loaded();
  if (loaded && loaded.childRows) {
    api.rows($2.map(loaded.childRows, function(id) {
      return id.replace(/:/g, "\\:");
    })).every(function() {
      _fnCallbackFire(context, null, "requestChild", [this]);
    });
  }
});
var __details_add = function(ctx, row, data, klass) {
  var rows = [];
  var addRow = function(r, k) {
    if (Array.isArray(r) || r instanceof $2) {
      for (var i2 = 0, ien = r.length; i2 < ien; i2++) {
        addRow(r[i2], k);
      }
      return;
    }
    if (r.nodeName && r.nodeName.toLowerCase() === "tr") {
      rows.push(r);
    } else {
      var created = $2("<tr><td></td></tr>").addClass(k);
      $2("td", created).addClass(k).html(r)[0].colSpan = _fnVisbleColumns(ctx);
      rows.push(created[0]);
    }
  };
  addRow(data, klass);
  if (row._details) {
    row._details.detach();
  }
  row._details = $2(rows);
  if (row._detailsShow) {
    row._details.insertAfter(row.nTr);
  }
};
var __details_state = DataTable.util.throttle(
  function(ctx) {
    _fnSaveState(ctx[0]);
  },
  500
);
var __details_remove = function(api, idx) {
  var ctx = api.context;
  if (ctx.length) {
    var row = ctx[0].aoData[idx !== void 0 ? idx : api[0]];
    if (row && row._details) {
      row._details.remove();
      row._detailsShow = void 0;
      row._details = void 0;
      $2(row.nTr).removeClass("dt-hasChild");
      __details_state(ctx);
    }
  }
};
var __details_display = function(api, show) {
  var ctx = api.context;
  if (ctx.length && api.length) {
    var row = ctx[0].aoData[api[0]];
    if (row._details) {
      row._detailsShow = show;
      if (show) {
        row._details.insertAfter(row.nTr);
        $2(row.nTr).addClass("dt-hasChild");
      } else {
        row._details.detach();
        $2(row.nTr).removeClass("dt-hasChild");
      }
      _fnCallbackFire(ctx[0], null, "childRow", [show, api.row(api[0])]);
      __details_events(ctx[0]);
      __details_state(ctx);
    }
  }
};
var __details_events = function(settings) {
  var api = new _Api(settings);
  var namespace = ".dt.DT_details";
  var drawEvent = "draw" + namespace;
  var colvisEvent = "column-sizing" + namespace;
  var destroyEvent = "destroy" + namespace;
  var data = settings.aoData;
  api.off(drawEvent + " " + colvisEvent + " " + destroyEvent);
  if (_pluck(data, "_details").length > 0) {
    api.on(drawEvent, function(e, ctx) {
      if (settings !== ctx) {
        return;
      }
      api.rows({ page: "current" }).eq(0).each(function(idx) {
        var row = data[idx];
        if (row._detailsShow) {
          row._details.insertAfter(row.nTr);
        }
      });
    });
    api.on(colvisEvent, function(e, ctx, idx, vis) {
      if (settings !== ctx) {
        return;
      }
      var row, visible = _fnVisbleColumns(ctx);
      for (var i2 = 0, ien = data.length; i2 < ien; i2++) {
        row = data[i2];
        if (row._details) {
          row._details.children("td[colspan]").attr("colspan", visible);
        }
      }
    });
    api.on(destroyEvent, function(e, ctx) {
      if (settings !== ctx) {
        return;
      }
      for (var i2 = 0, ien = data.length; i2 < ien; i2++) {
        if (data[i2]._details) {
          __details_remove(api, i2);
        }
      }
    });
  }
};
var _emp = "";
var _child_obj = _emp + "row().child";
var _child_mth = _child_obj + "()";
_api_register(_child_mth, function(data, klass) {
  var ctx = this.context;
  if (data === void 0) {
    return ctx.length && this.length ? ctx[0].aoData[this[0]]._details : void 0;
  } else if (data === true) {
    this.child.show();
  } else if (data === false) {
    __details_remove(this);
  } else if (ctx.length && this.length) {
    __details_add(ctx[0], ctx[0].aoData[this[0]], data, klass);
  }
  return this;
});
_api_register([
  _child_obj + ".show()",
  _child_mth + ".show()"
  // only when `child()` was called with parameters (without
], function(show) {
  __details_display(this, true);
  return this;
});
_api_register([
  _child_obj + ".hide()",
  _child_mth + ".hide()"
  // only when `child()` was called with parameters (without
], function() {
  __details_display(this, false);
  return this;
});
_api_register([
  _child_obj + ".remove()",
  _child_mth + ".remove()"
  // only when `child()` was called with parameters (without
], function() {
  __details_remove(this);
  return this;
});
_api_register(_child_obj + ".isShown()", function() {
  var ctx = this.context;
  if (ctx.length && this.length) {
    return ctx[0].aoData[this[0]]._detailsShow || false;
  }
  return false;
});
var __re_column_selector = /^([^:]+):(name|visIdx|visible)$/;
var __columnData = function(settings, column, r1, r2, rows) {
  var a = [];
  for (var row = 0, ien = rows.length; row < ien; row++) {
    a.push(_fnGetCellData(settings, rows[row], column));
  }
  return a;
};
var __column_selector = function(settings, selector, opts) {
  var columns = settings.aoColumns, names = _pluck(columns, "sName"), nodes = _pluck(columns, "nTh");
  var run = function(s) {
    var selInt = _intVal(s);
    if (s === "") {
      return _range(columns.length);
    }
    if (selInt !== null) {
      return [
        selInt >= 0 ? selInt : (
          // Count from left
          columns.length + selInt
        )
        // Count from right (+ because its a negative value)
      ];
    }
    if (typeof s === "function") {
      var rows = _selector_row_indexes(settings, opts);
      return $2.map(columns, function(col, idx2) {
        return s(
          idx2,
          __columnData(settings, idx2, 0, 0, rows),
          nodes[idx2]
        ) ? idx2 : null;
      });
    }
    var match = typeof s === "string" ? s.match(__re_column_selector) : "";
    if (match) {
      switch (match[2]) {
        case "visIdx":
        case "visible":
          var idx = parseInt(match[1], 10);
          if (idx < 0) {
            var visColumns = $2.map(columns, function(col, i2) {
              return col.bVisible ? i2 : null;
            });
            return [visColumns[visColumns.length + idx]];
          }
          return [_fnVisibleToColumnIndex(settings, idx)];
        case "name":
          return $2.map(names, function(name, i2) {
            return name === match[1] ? i2 : null;
          });
        default:
          return [];
      }
    }
    if (s.nodeName && s._DT_CellIndex) {
      return [s._DT_CellIndex.column];
    }
    var jqResult = $2(nodes).filter(s).map(function() {
      return $2.inArray(this, nodes);
    }).toArray();
    if (jqResult.length || !s.nodeName) {
      return jqResult;
    }
    var host = $2(s).closest("*[data-dt-column]");
    return host.length ? [host.data("dt-column")] : [];
  };
  return _selector_run("column", selector, run, settings, opts);
};
var __setColumnVis = function(settings, column, vis) {
  var cols = settings.aoColumns, col = cols[column], data = settings.aoData, row, cells, i2, ien, tr;
  if (vis === void 0) {
    return col.bVisible;
  }
  if (col.bVisible === vis) {
    return;
  }
  if (vis) {
    var insertBefore = $2.inArray(true, _pluck(cols, "bVisible"), column + 1);
    for (i2 = 0, ien = data.length; i2 < ien; i2++) {
      tr = data[i2].nTr;
      cells = data[i2].anCells;
      if (tr) {
        tr.insertBefore(cells[column], cells[insertBefore] || null);
      }
    }
  } else {
    $2(_pluck(settings.aoData, "anCells", column)).detach();
  }
  col.bVisible = vis;
};
_api_register("columns()", function(selector, opts) {
  if (selector === void 0) {
    selector = "";
  } else if ($2.isPlainObject(selector)) {
    opts = selector;
    selector = "";
  }
  opts = _selector_opts(opts);
  var inst = this.iterator("table", function(settings) {
    return __column_selector(settings, selector, opts);
  }, 1);
  inst.selector.cols = selector;
  inst.selector.opts = opts;
  return inst;
});
_api_registerPlural("columns().header()", "column().header()", function(selector, opts) {
  return this.iterator("column", function(settings, column) {
    return settings.aoColumns[column].nTh;
  }, 1);
});
_api_registerPlural("columns().footer()", "column().footer()", function(selector, opts) {
  return this.iterator("column", function(settings, column) {
    return settings.aoColumns[column].nTf;
  }, 1);
});
_api_registerPlural("columns().data()", "column().data()", function() {
  return this.iterator("column-rows", __columnData, 1);
});
_api_registerPlural("columns().dataSrc()", "column().dataSrc()", function() {
  return this.iterator("column", function(settings, column) {
    return settings.aoColumns[column].mData;
  }, 1);
});
_api_registerPlural("columns().cache()", "column().cache()", function(type) {
  return this.iterator("column-rows", function(settings, column, i2, j, rows) {
    return _pluck_order(
      settings.aoData,
      rows,
      type === "search" ? "_aFilterData" : "_aSortData",
      column
    );
  }, 1);
});
_api_registerPlural("columns().nodes()", "column().nodes()", function() {
  return this.iterator("column-rows", function(settings, column, i2, j, rows) {
    return _pluck_order(settings.aoData, rows, "anCells", column);
  }, 1);
});
_api_registerPlural("columns().visible()", "column().visible()", function(vis, calc) {
  var that = this;
  var ret = this.iterator("column", function(settings, column) {
    if (vis === void 0) {
      return settings.aoColumns[column].bVisible;
    }
    __setColumnVis(settings, column, vis);
  });
  if (vis !== void 0) {
    this.iterator("table", function(settings) {
      _fnDrawHead(settings, settings.aoHeader);
      _fnDrawHead(settings, settings.aoFooter);
      if (!settings.aiDisplay.length) {
        $2(settings.nTBody).find("td[colspan]").attr("colspan", _fnVisbleColumns(settings));
      }
      _fnSaveState(settings);
      that.iterator("column", function(settings2, column) {
        _fnCallbackFire(settings2, null, "column-visibility", [settings2, column, vis, calc]);
      });
      if (calc === void 0 || calc) {
        that.columns.adjust();
      }
    });
  }
  return ret;
});
_api_registerPlural("columns().indexes()", "column().index()", function(type) {
  return this.iterator("column", function(settings, column) {
    return type === "visible" ? _fnColumnIndexToVisible(settings, column) : column;
  }, 1);
});
_api_register("columns.adjust()", function() {
  return this.iterator("table", function(settings) {
    _fnAdjustColumnSizing(settings);
  }, 1);
});
_api_register("column.index()", function(type, idx) {
  if (this.context.length !== 0) {
    var ctx = this.context[0];
    if (type === "fromVisible" || type === "toData") {
      return _fnVisibleToColumnIndex(ctx, idx);
    } else if (type === "fromData" || type === "toVisible") {
      return _fnColumnIndexToVisible(ctx, idx);
    }
  }
});
_api_register("column()", function(selector, opts) {
  return _selector_first(this.columns(selector, opts));
});
var __cell_selector = function(settings, selector, opts) {
  var data = settings.aoData;
  var rows = _selector_row_indexes(settings, opts);
  var cells = _removeEmpty(_pluck_order(data, rows, "anCells"));
  var allCells = $2(_flatten([], cells));
  var row;
  var columns = settings.aoColumns.length;
  var a, i2, ien, j, o, host;
  var run = function(s) {
    var fnSelector = typeof s === "function";
    if (s === null || s === void 0 || fnSelector) {
      a = [];
      for (i2 = 0, ien = rows.length; i2 < ien; i2++) {
        row = rows[i2];
        for (j = 0; j < columns; j++) {
          o = {
            row,
            column: j
          };
          if (fnSelector) {
            host = data[row];
            if (s(o, _fnGetCellData(settings, row, j), host.anCells ? host.anCells[j] : null)) {
              a.push(o);
            }
          } else {
            a.push(o);
          }
        }
      }
      return a;
    }
    if ($2.isPlainObject(s)) {
      return s.column !== void 0 && s.row !== void 0 && $2.inArray(s.row, rows) !== -1 ? [s] : [];
    }
    var jqResult = allCells.filter(s).map(function(i3, el) {
      return {
        // use a new object, in case someone changes the values
        row: el._DT_CellIndex.row,
        column: el._DT_CellIndex.column
      };
    }).toArray();
    if (jqResult.length || !s.nodeName) {
      return jqResult;
    }
    host = $2(s).closest("*[data-dt-row]");
    return host.length ? [{
      row: host.data("dt-row"),
      column: host.data("dt-column")
    }] : [];
  };
  return _selector_run("cell", selector, run, settings, opts);
};
_api_register("cells()", function(rowSelector, columnSelector, opts) {
  if ($2.isPlainObject(rowSelector)) {
    if (rowSelector.row === void 0) {
      opts = rowSelector;
      rowSelector = null;
    } else {
      opts = columnSelector;
      columnSelector = null;
    }
  }
  if ($2.isPlainObject(columnSelector)) {
    opts = columnSelector;
    columnSelector = null;
  }
  if (columnSelector === null || columnSelector === void 0) {
    return this.iterator("table", function(settings) {
      return __cell_selector(settings, rowSelector, _selector_opts(opts));
    });
  }
  var internalOpts = opts ? {
    page: opts.page,
    order: opts.order,
    search: opts.search
  } : {};
  var columns = this.columns(columnSelector, internalOpts);
  var rows = this.rows(rowSelector, internalOpts);
  var i2, ien, j, jen;
  var cellsNoOpts = this.iterator("table", function(settings, idx) {
    var a = [];
    for (i2 = 0, ien = rows[idx].length; i2 < ien; i2++) {
      for (j = 0, jen = columns[idx].length; j < jen; j++) {
        a.push({
          row: rows[idx][i2],
          column: columns[idx][j]
        });
      }
    }
    return a;
  }, 1);
  var cells = opts && opts.selected ? this.cells(cellsNoOpts, opts) : cellsNoOpts;
  $2.extend(cells.selector, {
    cols: columnSelector,
    rows: rowSelector,
    opts
  });
  return cells;
});
_api_registerPlural("cells().nodes()", "cell().node()", function() {
  return this.iterator("cell", function(settings, row, column) {
    var data = settings.aoData[row];
    return data && data.anCells ? data.anCells[column] : void 0;
  }, 1);
});
_api_register("cells().data()", function() {
  return this.iterator("cell", function(settings, row, column) {
    return _fnGetCellData(settings, row, column);
  }, 1);
});
_api_registerPlural("cells().cache()", "cell().cache()", function(type) {
  type = type === "search" ? "_aFilterData" : "_aSortData";
  return this.iterator("cell", function(settings, row, column) {
    return settings.aoData[row][type][column];
  }, 1);
});
_api_registerPlural("cells().render()", "cell().render()", function(type) {
  return this.iterator("cell", function(settings, row, column) {
    return _fnGetCellData(settings, row, column, type);
  }, 1);
});
_api_registerPlural("cells().indexes()", "cell().index()", function() {
  return this.iterator("cell", function(settings, row, column) {
    return {
      row,
      column,
      columnVisible: _fnColumnIndexToVisible(settings, column)
    };
  }, 1);
});
_api_registerPlural("cells().invalidate()", "cell().invalidate()", function(src) {
  return this.iterator("cell", function(settings, row, column) {
    _fnInvalidate(settings, row, src, column);
  });
});
_api_register("cell()", function(rowSelector, columnSelector, opts) {
  return _selector_first(this.cells(rowSelector, columnSelector, opts));
});
_api_register("cell().data()", function(data) {
  var ctx = this.context;
  var cell = this[0];
  if (data === void 0) {
    return ctx.length && cell.length ? _fnGetCellData(ctx[0], cell[0].row, cell[0].column) : void 0;
  }
  _fnSetCellData(ctx[0], cell[0].row, cell[0].column, data);
  _fnInvalidate(ctx[0], cell[0].row, "data", cell[0].column);
  return this;
});
_api_register("order()", function(order2, dir) {
  var ctx = this.context;
  if (order2 === void 0) {
    return ctx.length !== 0 ? ctx[0].aaSorting : void 0;
  }
  if (typeof order2 === "number") {
    order2 = [[order2, dir]];
  } else if (order2.length && !Array.isArray(order2[0])) {
    order2 = Array.prototype.slice.call(arguments);
  }
  return this.iterator("table", function(settings) {
    settings.aaSorting = order2.slice();
  });
});
_api_register("order.listener()", function(node, column, callback) {
  return this.iterator("table", function(settings) {
    _fnSortAttachListener(settings, node, column, callback);
  });
});
_api_register("order.fixed()", function(set) {
  if (!set) {
    var ctx = this.context;
    var fixed = ctx.length ? ctx[0].aaSortingFixed : void 0;
    return Array.isArray(fixed) ? { pre: fixed } : fixed;
  }
  return this.iterator("table", function(settings) {
    settings.aaSortingFixed = $2.extend(true, {}, set);
  });
});
_api_register([
  "columns().order()",
  "column().order()"
], function(dir) {
  var that = this;
  return this.iterator("table", function(settings, i2) {
    var sort = [];
    $2.each(that[i2], function(j, col) {
      sort.push([col, dir]);
    });
    settings.aaSorting = sort;
  });
});
_api_register("search()", function(input, regex, smart, caseInsen) {
  var ctx = this.context;
  if (input === void 0) {
    return ctx.length !== 0 ? ctx[0].oPreviousSearch.sSearch : void 0;
  }
  return this.iterator("table", function(settings) {
    if (!settings.oFeatures.bFilter) {
      return;
    }
    _fnFilterComplete(settings, $2.extend({}, settings.oPreviousSearch, {
      "sSearch": input + "",
      "bRegex": regex === null ? false : regex,
      "bSmart": smart === null ? true : smart,
      "bCaseInsensitive": caseInsen === null ? true : caseInsen
    }), 1);
  });
});
_api_registerPlural(
  "columns().search()",
  "column().search()",
  function(input, regex, smart, caseInsen) {
    return this.iterator("column", function(settings, column) {
      var preSearch = settings.aoPreSearchCols;
      if (input === void 0) {
        return preSearch[column].sSearch;
      }
      if (!settings.oFeatures.bFilter) {
        return;
      }
      $2.extend(preSearch[column], {
        "sSearch": input + "",
        "bRegex": regex === null ? false : regex,
        "bSmart": smart === null ? true : smart,
        "bCaseInsensitive": caseInsen === null ? true : caseInsen
      });
      _fnFilterComplete(settings, settings.oPreviousSearch, 1);
    });
  }
);
_api_register("state()", function() {
  return this.context.length ? this.context[0].oSavedState : null;
});
_api_register("state.clear()", function() {
  return this.iterator("table", function(settings) {
    settings.fnStateSaveCallback.call(settings.oInstance, settings, {});
  });
});
_api_register("state.loaded()", function() {
  return this.context.length ? this.context[0].oLoadedState : null;
});
_api_register("state.save()", function() {
  return this.iterator("table", function(settings) {
    _fnSaveState(settings);
  });
});
DataTable.use = function(module, type) {
  if (type === "lib" || module.fn) {
    $2 = module;
  } else if (type == "win" || module.document) {
    window = module;
    document = module.document;
  }
};
DataTable.factory = function(root, jq) {
  var is = false;
  if (root && root.document) {
    window = root;
    document = root.document;
  }
  if (jq && jq.fn && jq.fn.jquery) {
    $2 = jq;
    is = true;
  }
  return is;
};
DataTable.versionCheck = DataTable.fnVersionCheck = function(version) {
  var aThis = DataTable.version.split(".");
  var aThat = version.split(".");
  var iThis, iThat;
  for (var i2 = 0, iLen = aThat.length; i2 < iLen; i2++) {
    iThis = parseInt(aThis[i2], 10) || 0;
    iThat = parseInt(aThat[i2], 10) || 0;
    if (iThis === iThat) {
      continue;
    }
    return iThis > iThat;
  }
  return true;
};
DataTable.isDataTable = DataTable.fnIsDataTable = function(table) {
  var t = $2(table).get(0);
  var is = false;
  if (table instanceof DataTable.Api) {
    return true;
  }
  $2.each(DataTable.settings, function(i2, o) {
    var head = o.nScrollHead ? $2("table", o.nScrollHead)[0] : null;
    var foot = o.nScrollFoot ? $2("table", o.nScrollFoot)[0] : null;
    if (o.nTable === t || head === t || foot === t) {
      is = true;
    }
  });
  return is;
};
DataTable.tables = DataTable.fnTables = function(visible) {
  var api = false;
  if ($2.isPlainObject(visible)) {
    api = visible.api;
    visible = visible.visible;
  }
  var a = $2.map(DataTable.settings, function(o) {
    if (!visible || visible && $2(o.nTable).is(":visible")) {
      return o.nTable;
    }
  });
  return api ? new _Api(a) : a;
};
DataTable.camelToHungarian = _fnCamelToHungarian;
_api_register("$()", function(selector, opts) {
  var rows = this.rows(opts).nodes(), jqRows = $2(rows);
  return $2([].concat(
    jqRows.filter(selector).toArray(),
    jqRows.find(selector).toArray()
  ));
});
$2.each(["on", "one", "off"], function(i2, key) {
  _api_register(key + "()", function() {
    var args = Array.prototype.slice.call(arguments);
    args[0] = $2.map(args[0].split(/\s/), function(e) {
      return !e.match(/\.dt\b/) ? e + ".dt" : e;
    }).join(" ");
    var inst = $2(this.tables().nodes());
    inst[key].apply(inst, args);
    return this;
  });
});
_api_register("clear()", function() {
  return this.iterator("table", function(settings) {
    _fnClearTable(settings);
  });
});
_api_register("settings()", function() {
  return new _Api(this.context, this.context);
});
_api_register("init()", function() {
  var ctx = this.context;
  return ctx.length ? ctx[0].oInit : null;
});
_api_register("data()", function() {
  return this.iterator("table", function(settings) {
    return _pluck(settings.aoData, "_aData");
  }).flatten();
});
_api_register("destroy()", function(remove) {
  remove = remove || false;
  return this.iterator("table", function(settings) {
    var classes = settings.oClasses;
    var table = settings.nTable;
    var tbody = settings.nTBody;
    var thead = settings.nTHead;
    var tfoot = settings.nTFoot;
    var jqTable = $2(table);
    var jqTbody = $2(tbody);
    var jqWrapper = $2(settings.nTableWrapper);
    var rows = $2.map(settings.aoData, function(r) {
      return r.nTr;
    });
    var i2, ien;
    settings.bDestroying = true;
    _fnCallbackFire(settings, "aoDestroyCallback", "destroy", [settings]);
    if (!remove) {
      new _Api(settings).columns().visible(true);
    }
    jqWrapper.off(".DT").find(":not(tbody *)").off(".DT");
    $2(window).off(".DT-" + settings.sInstance);
    if (table != thead.parentNode) {
      jqTable.children("thead").detach();
      jqTable.append(thead);
    }
    if (tfoot && table != tfoot.parentNode) {
      jqTable.children("tfoot").detach();
      jqTable.append(tfoot);
    }
    settings.aaSorting = [];
    settings.aaSortingFixed = [];
    _fnSortingClasses(settings);
    $2(rows).removeClass(settings.asStripeClasses.join(" "));
    $2("th, td", thead).removeClass(
      classes.sSortable + " " + classes.sSortableAsc + " " + classes.sSortableDesc + " " + classes.sSortableNone
    );
    jqTbody.children().detach();
    jqTbody.append(rows);
    var orig = settings.nTableWrapper.parentNode;
    var removedMethod = remove ? "remove" : "detach";
    jqTable[removedMethod]();
    jqWrapper[removedMethod]();
    if (!remove && orig) {
      orig.insertBefore(table, settings.nTableReinsertBefore);
      jqTable.css("width", settings.sDestroyWidth).removeClass(classes.sTable);
      ien = settings.asDestroyStripes.length;
      if (ien) {
        jqTbody.children().each(function(i3) {
          $2(this).addClass(settings.asDestroyStripes[i3 % ien]);
        });
      }
    }
    var idx = $2.inArray(settings, DataTable.settings);
    if (idx !== -1) {
      DataTable.settings.splice(idx, 1);
    }
  });
});
$2.each(["column", "row", "cell"], function(i2, type) {
  _api_register(type + "s().every()", function(fn2) {
    var opts = this.selector.opts;
    var api = this;
    return this.iterator(type, function(settings, arg1, arg2, arg3, arg4) {
      fn2.call(
        api[type](
          arg1,
          type === "cell" ? arg2 : opts,
          type === "cell" ? opts : void 0
        ),
        arg1,
        arg2,
        arg3,
        arg4
      );
    });
  });
});
_api_register("i18n()", function(token, def, plural) {
  var ctx = this.context[0];
  var resolved = _fnGetObjectDataFn(token)(ctx.oLanguage);
  if (resolved === void 0) {
    resolved = def;
  }
  if (plural !== void 0 && $2.isPlainObject(resolved)) {
    resolved = resolved[plural] !== void 0 ? resolved[plural] : resolved._;
  }
  return resolved.replace("%d", plural);
});
DataTable.version = "1.13.4";
DataTable.settings = [];
DataTable.models = {};
DataTable.models.oSearch = {
  /**
   * Flag to indicate if the filtering should be case insensitive or not
   *  @type boolean
   *  @default true
   */
  "bCaseInsensitive": true,
  /**
   * Applied search term
   *  @type string
   *  @default <i>Empty string</i>
   */
  "sSearch": "",
  /**
   * Flag to indicate if the search term should be interpreted as a
   * regular expression (true) or not (false) and therefore and special
   * regex characters escaped.
   *  @type boolean
   *  @default false
   */
  "bRegex": false,
  /**
   * Flag to indicate if DataTables is to use its smart filtering or not.
   *  @type boolean
   *  @default true
   */
  "bSmart": true,
  /**
   * Flag to indicate if DataTables should only trigger a search when
   * the return key is pressed.
   *  @type boolean
   *  @default false
   */
  "return": false
};
DataTable.models.oRow = {
  /**
   * TR element for the row
   *  @type node
   *  @default null
   */
  "nTr": null,
  /**
   * Array of TD elements for each row. This is null until the row has been
   * created.
   *  @type array nodes
   *  @default []
   */
  "anCells": null,
  /**
   * Data object from the original data source for the row. This is either
   * an array if using the traditional form of DataTables, or an object if
   * using mData options. The exact type will depend on the passed in
   * data from the data source, or will be an array if using DOM a data
   * source.
   *  @type array|object
   *  @default []
   */
  "_aData": [],
  /**
   * Sorting data cache - this array is ostensibly the same length as the
   * number of columns (although each index is generated only as it is
   * needed), and holds the data that is used for sorting each column in the
   * row. We do this cache generation at the start of the sort in order that
   * the formatting of the sort data need be done only once for each cell
   * per sort. This array should not be read from or written to by anything
   * other than the master sorting methods.
   *  @type array
   *  @default null
   *  @private
   */
  "_aSortData": null,
  /**
   * Per cell filtering data cache. As per the sort data cache, used to
   * increase the performance of the filtering in DataTables
   *  @type array
   *  @default null
   *  @private
   */
  "_aFilterData": null,
  /**
   * Filtering data cache. This is the same as the cell filtering cache, but
   * in this case a string rather than an array. This is easily computed with
   * a join on `_aFilterData`, but is provided as a cache so the join isn't
   * needed on every search (memory traded for performance)
   *  @type array
   *  @default null
   *  @private
   */
  "_sFilterRow": null,
  /**
   * Cache of the class name that DataTables has applied to the row, so we
   * can quickly look at this variable rather than needing to do a DOM check
   * on className for the nTr property.
   *  @type string
   *  @default <i>Empty string</i>
   *  @private
   */
  "_sRowStripe": "",
  /**
   * Denote if the original data source was from the DOM, or the data source
   * object. This is used for invalidating data, so DataTables can
   * automatically read data from the original source, unless uninstructed
   * otherwise.
   *  @type string
   *  @default null
   *  @private
   */
  "src": null,
  /**
   * Index in the aoData array. This saves an indexOf lookup when we have the
   * object, but want to know the index
   *  @type integer
   *  @default -1
   *  @private
   */
  "idx": -1
};
DataTable.models.oColumn = {
  /**
   * Column index. This could be worked out on-the-fly with $.inArray, but it
   * is faster to just hold it as a variable
   *  @type integer
   *  @default null
   */
  "idx": null,
  /**
   * A list of the columns that sorting should occur on when this column
   * is sorted. That this property is an array allows multi-column sorting
   * to be defined for a column (for example first name / last name columns
   * would benefit from this). The values are integers pointing to the
   * columns to be sorted on (typically it will be a single integer pointing
   * at itself, but that doesn't need to be the case).
   *  @type array
   */
  "aDataSort": null,
  /**
   * Define the sorting directions that are applied to the column, in sequence
   * as the column is repeatedly sorted upon - i.e. the first value is used
   * as the sorting direction when the column if first sorted (clicked on).
   * Sort it again (click again) and it will move on to the next index.
   * Repeat until loop.
   *  @type array
   */
  "asSorting": null,
  /**
   * Flag to indicate if the column is searchable, and thus should be included
   * in the filtering or not.
   *  @type boolean
   */
  "bSearchable": null,
  /**
   * Flag to indicate if the column is sortable or not.
   *  @type boolean
   */
  "bSortable": null,
  /**
   * Flag to indicate if the column is currently visible in the table or not
   *  @type boolean
   */
  "bVisible": null,
  /**
   * Store for manual type assignment using the `column.type` option. This
   * is held in store so we can manipulate the column's `sType` property.
   *  @type string
   *  @default null
   *  @private
   */
  "_sManualType": null,
  /**
   * Flag to indicate if HTML5 data attributes should be used as the data
   * source for filtering or sorting. True is either are.
   *  @type boolean
   *  @default false
   *  @private
   */
  "_bAttrSrc": false,
  /**
   * Developer definable function that is called whenever a cell is created (Ajax source,
   * etc) or processed for input (DOM source). This can be used as a compliment to mRender
   * allowing you to modify the DOM element (add background colour for example) when the
   * element is available.
   *  @type function
   *  @param {element} nTd The TD node that has been created
   *  @param {*} sData The Data for the cell
   *  @param {array|object} oData The data for the whole row
   *  @param {int} iRow The row index for the aoData data store
   *  @default null
   */
  "fnCreatedCell": null,
  /**
   * Function to get data from a cell in a column. You should <b>never</b>
   * access data directly through _aData internally in DataTables - always use
   * the method attached to this property. It allows mData to function as
   * required. This function is automatically assigned by the column
   * initialisation method
   *  @type function
   *  @param {array|object} oData The data array/object for the array
   *    (i.e. aoData[]._aData)
   *  @param {string} sSpecific The specific data type you want to get -
   *    'display', 'type' 'filter' 'sort'
   *  @returns {*} The data for the cell from the given row's data
   *  @default null
   */
  "fnGetData": null,
  /**
   * Function to set data for a cell in the column. You should <b>never</b>
   * set the data directly to _aData internally in DataTables - always use
   * this method. It allows mData to function as required. This function
   * is automatically assigned by the column initialisation method
   *  @type function
   *  @param {array|object} oData The data array/object for the array
   *    (i.e. aoData[]._aData)
   *  @param {*} sValue Value to set
   *  @default null
   */
  "fnSetData": null,
  /**
   * Property to read the value for the cells in the column from the data
   * source array / object. If null, then the default content is used, if a
   * function is given then the return from the function is used.
   *  @type function|int|string|null
   *  @default null
   */
  "mData": null,
  /**
   * Partner property to mData which is used (only when defined) to get
   * the data - i.e. it is basically the same as mData, but without the
   * 'set' option, and also the data fed to it is the result from mData.
   * This is the rendering method to match the data method of mData.
   *  @type function|int|string|null
   *  @default null
   */
  "mRender": null,
  /**
   * Unique header TH/TD element for this column - this is what the sorting
   * listener is attached to (if sorting is enabled.)
   *  @type node
   *  @default null
   */
  "nTh": null,
  /**
   * Unique footer TH/TD element for this column (if there is one). Not used
   * in DataTables as such, but can be used for plug-ins to reference the
   * footer for each column.
   *  @type node
   *  @default null
   */
  "nTf": null,
  /**
   * The class to apply to all TD elements in the table's TBODY for the column
   *  @type string
   *  @default null
   */
  "sClass": null,
  /**
   * When DataTables calculates the column widths to assign to each column,
   * it finds the longest string in each column and then constructs a
   * temporary table and reads the widths from that. The problem with this
   * is that "mmm" is much wider then "iiii", but the latter is a longer
   * string - thus the calculation can go wrong (doing it properly and putting
   * it into an DOM object and measuring that is horribly(!) slow). Thus as
   * a "work around" we provide this option. It will append its value to the
   * text that is found to be the longest string for the column - i.e. padding.
   *  @type string
   */
  "sContentPadding": null,
  /**
   * Allows a default value to be given for a column's data, and will be used
   * whenever a null data source is encountered (this can be because mData
   * is set to null, or because the data source itself is null).
   *  @type string
   *  @default null
   */
  "sDefaultContent": null,
  /**
   * Name for the column, allowing reference to the column by name as well as
   * by index (needs a lookup to work by name).
   *  @type string
   */
  "sName": null,
  /**
   * Custom sorting data type - defines which of the available plug-ins in
   * afnSortData the custom sorting will use - if any is defined.
   *  @type string
   *  @default std
   */
  "sSortDataType": "std",
  /**
   * Class to be applied to the header element when sorting on this column
   *  @type string
   *  @default null
   */
  "sSortingClass": null,
  /**
   * Class to be applied to the header element when sorting on this column -
   * when jQuery UI theming is used.
   *  @type string
   *  @default null
   */
  "sSortingClassJUI": null,
  /**
   * Title of the column - what is seen in the TH element (nTh).
   *  @type string
   */
  "sTitle": null,
  /**
   * Column sorting and filtering type
   *  @type string
   *  @default null
   */
  "sType": null,
  /**
   * Width of the column
   *  @type string
   *  @default null
   */
  "sWidth": null,
  /**
   * Width of the column when it was first "encountered"
   *  @type string
   *  @default null
   */
  "sWidthOrig": null
};
DataTable.defaults = {
  /**
   * An array of data to use for the table, passed in at initialisation which
   * will be used in preference to any data which is already in the DOM. This is
   * particularly useful for constructing tables purely in Javascript, for
   * example with a custom Ajax call.
   *  @type array
   *  @default null
   *
   *  @dtopt Option
   *  @name DataTable.defaults.data
   *
   *  @example
   *    // Using a 2D array data source
   *    $(document).ready( function () {
   *      $('#example').dataTable( {
   *        "data": [
   *          ['Trident', 'Internet Explorer 4.0', 'Win 95+', 4, 'X'],
   *          ['Trident', 'Internet Explorer 5.0', 'Win 95+', 5, 'C'],
   *        ],
   *        "columns": [
   *          { "title": "Engine" },
   *          { "title": "Browser" },
   *          { "title": "Platform" },
   *          { "title": "Version" },
   *          { "title": "Grade" }
   *        ]
   *      } );
   *    } );
   *
   *  @example
   *    // Using an array of objects as a data source (`data`)
   *    $(document).ready( function () {
   *      $('#example').dataTable( {
   *        "data": [
   *          {
   *            "engine":   "Trident",
   *            "browser":  "Internet Explorer 4.0",
   *            "platform": "Win 95+",
   *            "version":  4,
   *            "grade":    "X"
   *          },
   *          {
   *            "engine":   "Trident",
   *            "browser":  "Internet Explorer 5.0",
   *            "platform": "Win 95+",
   *            "version":  5,
   *            "grade":    "C"
   *          }
   *        ],
   *        "columns": [
   *          { "title": "Engine",   "data": "engine" },
   *          { "title": "Browser",  "data": "browser" },
   *          { "title": "Platform", "data": "platform" },
   *          { "title": "Version",  "data": "version" },
   *          { "title": "Grade",    "data": "grade" }
   *        ]
   *      } );
   *    } );
   */
  "aaData": null,
  /**
   * If ordering is enabled, then DataTables will perform a first pass sort on
   * initialisation. You can define which column(s) the sort is performed
   * upon, and the sorting direction, with this variable. The `sorting` array
   * should contain an array for each column to be sorted initially containing
   * the column's index and a direction string ('asc' or 'desc').
   *  @type array
   *  @default [[0,'asc']]
   *
   *  @dtopt Option
   *  @name DataTable.defaults.order
   *
   *  @example
   *    // Sort by 3rd column first, and then 4th column
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "order": [[2,'asc'], [3,'desc']]
   *      } );
   *    } );
   *
   *    // No initial sorting
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "order": []
   *      } );
   *    } );
   */
  "aaSorting": [[0, "asc"]],
  /**
   * This parameter is basically identical to the `sorting` parameter, but
   * cannot be overridden by user interaction with the table. What this means
   * is that you could have a column (visible or hidden) which the sorting
   * will always be forced on first - any sorting after that (from the user)
   * will then be performed as required. This can be useful for grouping rows
   * together.
   *  @type array
   *  @default null
   *
   *  @dtopt Option
   *  @name DataTable.defaults.orderFixed
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "orderFixed": [[0,'asc']]
   *      } );
   *    } )
   */
  "aaSortingFixed": [],
  /**
   * DataTables can be instructed to load data to display in the table from a
   * Ajax source. This option defines how that Ajax call is made and where to.
   *
   * The `ajax` property has three different modes of operation, depending on
   * how it is defined. These are:
   *
   * * `string` - Set the URL from where the data should be loaded from.
   * * `object` - Define properties for `jQuery.ajax`.
   * * `function` - Custom data get function
   *
   * `string`
   * --------
   *
   * As a string, the `ajax` property simply defines the URL from which
   * DataTables will load data.
   *
   * `object`
   * --------
   *
   * As an object, the parameters in the object are passed to
   * [jQuery.ajax](http://api.jquery.com/jQuery.ajax/) allowing fine control
   * of the Ajax request. DataTables has a number of default parameters which
   * you can override using this option. Please refer to the jQuery
   * documentation for a full description of the options available, although
   * the following parameters provide additional options in DataTables or
   * require special consideration:
   *
   * * `data` - As with jQuery, `data` can be provided as an object, but it
   *   can also be used as a function to manipulate the data DataTables sends
   *   to the server. The function takes a single parameter, an object of
   *   parameters with the values that DataTables has readied for sending. An
   *   object may be returned which will be merged into the DataTables
   *   defaults, or you can add the items to the object that was passed in and
   *   not return anything from the function. This supersedes `fnServerParams`
   *   from DataTables 1.9-.
   *
   * * `dataSrc` - By default DataTables will look for the property `data` (or
   *   `aaData` for compatibility with DataTables 1.9-) when obtaining data
   *   from an Ajax source or for server-side processing - this parameter
   *   allows that property to be changed. You can use Javascript dotted
   *   object notation to get a data source for multiple levels of nesting, or
   *   it my be used as a function. As a function it takes a single parameter,
   *   the JSON returned from the server, which can be manipulated as
   *   required, with the returned value being that used by DataTables as the
   *   data source for the table. This supersedes `sAjaxDataProp` from
   *   DataTables 1.9-.
   *
   * * `success` - Should not be overridden it is used internally in
   *   DataTables. To manipulate / transform the data returned by the server
   *   use `ajax.dataSrc`, or use `ajax` as a function (see below).
   *
   * `function`
   * ----------
   *
   * As a function, making the Ajax call is left up to yourself allowing
   * complete control of the Ajax request. Indeed, if desired, a method other
   * than Ajax could be used to obtain the required data, such as Web storage
   * or an AIR database.
   *
   * The function is given four parameters and no return is required. The
   * parameters are:
   *
   * 1. _object_ - Data to send to the server
   * 2. _function_ - Callback function that must be executed when the required
   *    data has been obtained. That data should be passed into the callback
   *    as the only parameter
   * 3. _object_ - DataTables settings object for the table
   *
   * Note that this supersedes `fnServerData` from DataTables 1.9-.
   *
   *  @type string|object|function
   *  @default null
   *
   *  @dtopt Option
   *  @name DataTable.defaults.ajax
   *  @since 1.10.0
   *
   * @example
   *   // Get JSON data from a file via Ajax.
   *   // Note DataTables expects data in the form `{ data: [ ...data... ] }` by default).
   *   $('#example').dataTable( {
   *     "ajax": "data.json"
   *   } );
   *
   * @example
   *   // Get JSON data from a file via Ajax, using `dataSrc` to change
   *   // `data` to `tableData` (i.e. `{ tableData: [ ...data... ] }`)
   *   $('#example').dataTable( {
   *     "ajax": {
   *       "url": "data.json",
   *       "dataSrc": "tableData"
   *     }
   *   } );
   *
   * @example
   *   // Get JSON data from a file via Ajax, using `dataSrc` to read data
   *   // from a plain array rather than an array in an object
   *   $('#example').dataTable( {
   *     "ajax": {
   *       "url": "data.json",
   *       "dataSrc": ""
   *     }
   *   } );
   *
   * @example
   *   // Manipulate the data returned from the server - add a link to data
   *   // (note this can, should, be done using `render` for the column - this
   *   // is just a simple example of how the data can be manipulated).
   *   $('#example').dataTable( {
   *     "ajax": {
   *       "url": "data.json",
   *       "dataSrc": function ( json ) {
   *         for ( var i=0, ien=json.length ; i<ien ; i++ ) {
   *           json[i][0] = '<a href="/message/'+json[i][0]+'>View message</a>';
   *         }
   *         return json;
   *       }
   *     }
   *   } );
   *
   * @example
   *   // Add data to the request
   *   $('#example').dataTable( {
   *     "ajax": {
   *       "url": "data.json",
   *       "data": function ( d ) {
   *         return {
   *           "extra_search": $('#extra').val()
   *         };
   *       }
   *     }
   *   } );
   *
   * @example
   *   // Send request as POST
   *   $('#example').dataTable( {
   *     "ajax": {
   *       "url": "data.json",
   *       "type": "POST"
   *     }
   *   } );
   *
   * @example
   *   // Get the data from localStorage (could interface with a form for
   *   // adding, editing and removing rows).
   *   $('#example').dataTable( {
   *     "ajax": function (data, callback, settings) {
   *       callback(
   *         JSON.parse( localStorage.getItem('dataTablesData') )
   *       );
   *     }
   *   } );
   */
  "ajax": null,
  /**
   * This parameter allows you to readily specify the entries in the length drop
   * down menu that DataTables shows when pagination is enabled. It can be
   * either a 1D array of options which will be used for both the displayed
   * option and the value, or a 2D array which will use the array in the first
   * position as the value, and the array in the second position as the
   * displayed options (useful for language strings such as 'All').
   *
   * Note that the `pageLength` property will be automatically set to the
   * first value given in this array, unless `pageLength` is also provided.
   *  @type array
   *  @default [ 10, 25, 50, 100 ]
   *
   *  @dtopt Option
   *  @name DataTable.defaults.lengthMenu
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
   *      } );
   *    } );
   */
  "aLengthMenu": [10, 25, 50, 100],
  /**
   * The `columns` option in the initialisation parameter allows you to define
   * details about the way individual columns behave. For a full list of
   * column options that can be set, please see
   * {@link DataTable.defaults.column}. Note that if you use `columns` to
   * define your columns, you must have an entry in the array for every single
   * column that you have in your table (these can be null if you don't which
   * to specify any options).
   *  @member
   *
   *  @name DataTable.defaults.column
   */
  "aoColumns": null,
  /**
   * Very similar to `columns`, `columnDefs` allows you to target a specific
   * column, multiple columns, or all columns, using the `targets` property of
   * each object in the array. This allows great flexibility when creating
   * tables, as the `columnDefs` arrays can be of any length, targeting the
   * columns you specifically want. `columnDefs` may use any of the column
   * options available: {@link DataTable.defaults.column}, but it _must_
   * have `targets` defined in each object in the array. Values in the `targets`
   * array may be:
   *   <ul>
   *     <li>a string - class name will be matched on the TH for the column</li>
   *     <li>0 or a positive integer - column index counting from the left</li>
   *     <li>a negative integer - column index counting from the right</li>
   *     <li>the string "_all" - all columns (i.e. assign a default)</li>
   *   </ul>
   *  @member
   *
   *  @name DataTable.defaults.columnDefs
   */
  "aoColumnDefs": null,
  /**
   * Basically the same as `search`, this parameter defines the individual column
   * filtering state at initialisation time. The array must be of the same size
   * as the number of columns, and each element be an object with the parameters
   * `search` and `escapeRegex` (the latter is optional). 'null' is also
   * accepted and the default will be used.
   *  @type array
   *  @default []
   *
   *  @dtopt Option
   *  @name DataTable.defaults.searchCols
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "searchCols": [
   *          null,
   *          { "search": "My filter" },
   *          null,
   *          { "search": "^[0-9]", "escapeRegex": false }
   *        ]
   *      } );
   *    } )
   */
  "aoSearchCols": [],
  /**
   * An array of CSS classes that should be applied to displayed rows. This
   * array may be of any length, and DataTables will apply each class
   * sequentially, looping when required.
   *  @type array
   *  @default null <i>Will take the values determined by the `oClasses.stripe*`
   *    options</i>
   *
   *  @dtopt Option
   *  @name DataTable.defaults.stripeClasses
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "stripeClasses": [ 'strip1', 'strip2', 'strip3' ]
   *      } );
   *    } )
   */
  "asStripeClasses": null,
  /**
   * Enable or disable automatic column width calculation. This can be disabled
   * as an optimisation (it takes some time to calculate the widths) if the
   * tables widths are passed in using `columns`.
   *  @type boolean
   *  @default true
   *
   *  @dtopt Features
   *  @name DataTable.defaults.autoWidth
   *
   *  @example
   *    $(document).ready( function () {
   *      $('#example').dataTable( {
   *        "autoWidth": false
   *      } );
   *    } );
   */
  "bAutoWidth": true,
  /**
   * Deferred rendering can provide DataTables with a huge speed boost when you
   * are using an Ajax or JS data source for the table. This option, when set to
   * true, will cause DataTables to defer the creation of the table elements for
   * each row until they are needed for a draw - saving a significant amount of
   * time.
   *  @type boolean
   *  @default false
   *
   *  @dtopt Features
   *  @name DataTable.defaults.deferRender
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "ajax": "sources/arrays.txt",
   *        "deferRender": true
   *      } );
   *    } );
   */
  "bDeferRender": false,
  /**
   * Replace a DataTable which matches the given selector and replace it with
   * one which has the properties of the new initialisation object passed. If no
   * table matches the selector, then the new DataTable will be constructed as
   * per normal.
   *  @type boolean
   *  @default false
   *
   *  @dtopt Options
   *  @name DataTable.defaults.destroy
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "srollY": "200px",
   *        "paginate": false
   *      } );
   *
   *      // Some time later....
   *      $('#example').dataTable( {
   *        "filter": false,
   *        "destroy": true
   *      } );
   *    } );
   */
  "bDestroy": false,
  /**
   * Enable or disable filtering of data. Filtering in DataTables is "smart" in
   * that it allows the end user to input multiple words (space separated) and
   * will match a row containing those words, even if not in the order that was
   * specified (this allow matching across multiple columns). Note that if you
   * wish to use filtering in DataTables this must remain 'true' - to remove the
   * default filtering input box and retain filtering abilities, please use
   * {@link DataTable.defaults.dom}.
   *  @type boolean
   *  @default true
   *
   *  @dtopt Features
   *  @name DataTable.defaults.searching
   *
   *  @example
   *    $(document).ready( function () {
   *      $('#example').dataTable( {
   *        "searching": false
   *      } );
   *    } );
   */
  "bFilter": true,
  /**
   * Enable or disable the table information display. This shows information
   * about the data that is currently visible on the page, including information
   * about filtered data if that action is being performed.
   *  @type boolean
   *  @default true
   *
   *  @dtopt Features
   *  @name DataTable.defaults.info
   *
   *  @example
   *    $(document).ready( function () {
   *      $('#example').dataTable( {
   *        "info": false
   *      } );
   *    } );
   */
  "bInfo": true,
  /**
   * Allows the end user to select the size of a formatted page from a select
   * menu (sizes are 10, 25, 50 and 100). Requires pagination (`paginate`).
   *  @type boolean
   *  @default true
   *
   *  @dtopt Features
   *  @name DataTable.defaults.lengthChange
   *
   *  @example
   *    $(document).ready( function () {
   *      $('#example').dataTable( {
   *        "lengthChange": false
   *      } );
   *    } );
   */
  "bLengthChange": true,
  /**
   * Enable or disable pagination.
   *  @type boolean
   *  @default true
   *
   *  @dtopt Features
   *  @name DataTable.defaults.paging
   *
   *  @example
   *    $(document).ready( function () {
   *      $('#example').dataTable( {
   *        "paging": false
   *      } );
   *    } );
   */
  "bPaginate": true,
  /**
   * Enable or disable the display of a 'processing' indicator when the table is
   * being processed (e.g. a sort). This is particularly useful for tables with
   * large amounts of data where it can take a noticeable amount of time to sort
   * the entries.
   *  @type boolean
   *  @default false
   *
   *  @dtopt Features
   *  @name DataTable.defaults.processing
   *
   *  @example
   *    $(document).ready( function () {
   *      $('#example').dataTable( {
   *        "processing": true
   *      } );
   *    } );
   */
  "bProcessing": false,
  /**
   * Retrieve the DataTables object for the given selector. Note that if the
   * table has already been initialised, this parameter will cause DataTables
   * to simply return the object that has already been set up - it will not take
   * account of any changes you might have made to the initialisation object
   * passed to DataTables (setting this parameter to true is an acknowledgement
   * that you understand this). `destroy` can be used to reinitialise a table if
   * you need.
   *  @type boolean
   *  @default false
   *
   *  @dtopt Options
   *  @name DataTable.defaults.retrieve
   *
   *  @example
   *    $(document).ready( function() {
   *      initTable();
   *      tableActions();
   *    } );
   *
   *    function initTable ()
   *    {
   *      return $('#example').dataTable( {
   *        "scrollY": "200px",
   *        "paginate": false,
   *        "retrieve": true
   *      } );
   *    }
   *
   *    function tableActions ()
   *    {
   *      var table = initTable();
   *      // perform API operations with oTable
   *    }
   */
  "bRetrieve": false,
  /**
   * When vertical (y) scrolling is enabled, DataTables will force the height of
   * the table's viewport to the given height at all times (useful for layout).
   * However, this can look odd when filtering data down to a small data set,
   * and the footer is left "floating" further down. This parameter (when
   * enabled) will cause DataTables to collapse the table's viewport down when
   * the result set will fit within the given Y height.
   *  @type boolean
   *  @default false
   *
   *  @dtopt Options
   *  @name DataTable.defaults.scrollCollapse
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "scrollY": "200",
   *        "scrollCollapse": true
   *      } );
   *    } );
   */
  "bScrollCollapse": false,
  /**
   * Configure DataTables to use server-side processing. Note that the
   * `ajax` parameter must also be given in order to give DataTables a
   * source to obtain the required data for each draw.
   *  @type boolean
   *  @default false
   *
   *  @dtopt Features
   *  @dtopt Server-side
   *  @name DataTable.defaults.serverSide
   *
   *  @example
   *    $(document).ready( function () {
   *      $('#example').dataTable( {
   *        "serverSide": true,
   *        "ajax": "xhr.php"
   *      } );
   *    } );
   */
  "bServerSide": false,
  /**
   * Enable or disable sorting of columns. Sorting of individual columns can be
   * disabled by the `sortable` option for each column.
   *  @type boolean
   *  @default true
   *
   *  @dtopt Features
   *  @name DataTable.defaults.ordering
   *
   *  @example
   *    $(document).ready( function () {
   *      $('#example').dataTable( {
   *        "ordering": false
   *      } );
   *    } );
   */
  "bSort": true,
  /**
   * Enable or display DataTables' ability to sort multiple columns at the
   * same time (activated by shift-click by the user).
   *  @type boolean
   *  @default true
   *
   *  @dtopt Options
   *  @name DataTable.defaults.orderMulti
   *
   *  @example
   *    // Disable multiple column sorting ability
   *    $(document).ready( function () {
   *      $('#example').dataTable( {
   *        "orderMulti": false
   *      } );
   *    } );
   */
  "bSortMulti": true,
  /**
   * Allows control over whether DataTables should use the top (true) unique
   * cell that is found for a single column, or the bottom (false - default).
   * This is useful when using complex headers.
   *  @type boolean
   *  @default false
   *
   *  @dtopt Options
   *  @name DataTable.defaults.orderCellsTop
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "orderCellsTop": true
   *      } );
   *    } );
   */
  "bSortCellsTop": false,
  /**
   * Enable or disable the addition of the classes `sorting\_1`, `sorting\_2` and
   * `sorting\_3` to the columns which are currently being sorted on. This is
   * presented as a feature switch as it can increase processing time (while
   * classes are removed and added) so for large data sets you might want to
   * turn this off.
   *  @type boolean
   *  @default true
   *
   *  @dtopt Features
   *  @name DataTable.defaults.orderClasses
   *
   *  @example
   *    $(document).ready( function () {
   *      $('#example').dataTable( {
   *        "orderClasses": false
   *      } );
   *    } );
   */
  "bSortClasses": true,
  /**
   * Enable or disable state saving. When enabled HTML5 `localStorage` will be
   * used to save table display information such as pagination information,
   * display length, filtering and sorting. As such when the end user reloads
   * the page the display display will match what thy had previously set up.
   *
   * Due to the use of `localStorage` the default state saving is not supported
   * in IE6 or 7. If state saving is required in those browsers, use
   * `stateSaveCallback` to provide a storage solution such as cookies.
   *  @type boolean
   *  @default false
   *
   *  @dtopt Features
   *  @name DataTable.defaults.stateSave
   *
   *  @example
   *    $(document).ready( function () {
   *      $('#example').dataTable( {
   *        "stateSave": true
   *      } );
   *    } );
   */
  "bStateSave": false,
  /**
   * This function is called when a TR element is created (and all TD child
   * elements have been inserted), or registered if using a DOM source, allowing
   * manipulation of the TR element (adding classes etc).
   *  @type function
   *  @param {node} row "TR" element for the current row
   *  @param {array} data Raw data array for this row
   *  @param {int} dataIndex The index of this row in the internal aoData array
   *
   *  @dtopt Callbacks
   *  @name DataTable.defaults.createdRow
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "createdRow": function( row, data, dataIndex ) {
   *          // Bold the grade for all 'A' grade browsers
   *          if ( data[4] == "A" )
   *          {
   *            $('td:eq(4)', row).html( '<b>A</b>' );
   *          }
   *        }
   *      } );
   *    } );
   */
  "fnCreatedRow": null,
  /**
   * This function is called on every 'draw' event, and allows you to
   * dynamically modify any aspect you want about the created DOM.
   *  @type function
   *  @param {object} settings DataTables settings object
   *
   *  @dtopt Callbacks
   *  @name DataTable.defaults.drawCallback
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "drawCallback": function( settings ) {
   *          alert( 'DataTables has redrawn the table' );
   *        }
   *      } );
   *    } );
   */
  "fnDrawCallback": null,
  /**
   * Identical to fnHeaderCallback() but for the table footer this function
   * allows you to modify the table footer on every 'draw' event.
   *  @type function
   *  @param {node} foot "TR" element for the footer
   *  @param {array} data Full table data (as derived from the original HTML)
   *  @param {int} start Index for the current display starting point in the
   *    display array
   *  @param {int} end Index for the current display ending point in the
   *    display array
   *  @param {array int} display Index array to translate the visual position
   *    to the full data array
   *
   *  @dtopt Callbacks
   *  @name DataTable.defaults.footerCallback
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "footerCallback": function( tfoot, data, start, end, display ) {
   *          tfoot.getElementsByTagName('th')[0].innerHTML = "Starting index is "+start;
   *        }
   *      } );
   *    } )
   */
  "fnFooterCallback": null,
  /**
   * When rendering large numbers in the information element for the table
   * (i.e. "Showing 1 to 10 of 57 entries") DataTables will render large numbers
   * to have a comma separator for the 'thousands' units (e.g. 1 million is
   * rendered as "1,000,000") to help readability for the end user. This
   * function will override the default method DataTables uses.
   *  @type function
   *  @member
   *  @param {int} toFormat number to be formatted
   *  @returns {string} formatted string for DataTables to show the number
   *
   *  @dtopt Callbacks
   *  @name DataTable.defaults.formatNumber
   *
   *  @example
   *    // Format a number using a single quote for the separator (note that
   *    // this can also be done with the language.thousands option)
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "formatNumber": function ( toFormat ) {
   *          return toFormat.toString().replace(
   *            /\B(?=(\d{3})+(?!\d))/g, "'"
   *          );
   *        };
   *      } );
   *    } );
   */
  "fnFormatNumber": function(toFormat) {
    return toFormat.toString().replace(
      /\B(?=(\d{3})+(?!\d))/g,
      this.oLanguage.sThousands
    );
  },
  /**
   * This function is called on every 'draw' event, and allows you to
   * dynamically modify the header row. This can be used to calculate and
   * display useful information about the table.
   *  @type function
   *  @param {node} head "TR" element for the header
   *  @param {array} data Full table data (as derived from the original HTML)
   *  @param {int} start Index for the current display starting point in the
   *    display array
   *  @param {int} end Index for the current display ending point in the
   *    display array
   *  @param {array int} display Index array to translate the visual position
   *    to the full data array
   *
   *  @dtopt Callbacks
   *  @name DataTable.defaults.headerCallback
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "fheaderCallback": function( head, data, start, end, display ) {
   *          head.getElementsByTagName('th')[0].innerHTML = "Displaying "+(end-start)+" records";
   *        }
   *      } );
   *    } )
   */
  "fnHeaderCallback": null,
  /**
   * The information element can be used to convey information about the current
   * state of the table. Although the internationalisation options presented by
   * DataTables are quite capable of dealing with most customisations, there may
   * be times where you wish to customise the string further. This callback
   * allows you to do exactly that.
   *  @type function
   *  @param {object} oSettings DataTables settings object
   *  @param {int} start Starting position in data for the draw
   *  @param {int} end End position in data for the draw
   *  @param {int} max Total number of rows in the table (regardless of
   *    filtering)
   *  @param {int} total Total number of rows in the data set, after filtering
   *  @param {string} pre The string that DataTables has formatted using it's
   *    own rules
   *  @returns {string} The string to be displayed in the information element.
   *
   *  @dtopt Callbacks
   *  @name DataTable.defaults.infoCallback
   *
   *  @example
   *    $('#example').dataTable( {
   *      "infoCallback": function( settings, start, end, max, total, pre ) {
   *        return start +" to "+ end;
   *      }
   *    } );
   */
  "fnInfoCallback": null,
  /**
   * Called when the table has been initialised. Normally DataTables will
   * initialise sequentially and there will be no need for this function,
   * however, this does not hold true when using external language information
   * since that is obtained using an async XHR call.
   *  @type function
   *  @param {object} settings DataTables settings object
   *  @param {object} json The JSON object request from the server - only
   *    present if client-side Ajax sourced data is used
   *
   *  @dtopt Callbacks
   *  @name DataTable.defaults.initComplete
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "initComplete": function(settings, json) {
   *          alert( 'DataTables has finished its initialisation.' );
   *        }
   *      } );
   *    } )
   */
  "fnInitComplete": null,
  /**
   * Called at the very start of each table draw and can be used to cancel the
   * draw by returning false, any other return (including undefined) results in
   * the full draw occurring).
   *  @type function
   *  @param {object} settings DataTables settings object
   *  @returns {boolean} False will cancel the draw, anything else (including no
   *    return) will allow it to complete.
   *
   *  @dtopt Callbacks
   *  @name DataTable.defaults.preDrawCallback
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "preDrawCallback": function( settings ) {
   *          if ( $('#test').val() == 1 ) {
   *            return false;
   *          }
   *        }
   *      } );
   *    } );
   */
  "fnPreDrawCallback": null,
  /**
   * This function allows you to 'post process' each row after it have been
   * generated for each table draw, but before it is rendered on screen. This
   * function might be used for setting the row class name etc.
   *  @type function
   *  @param {node} row "TR" element for the current row
   *  @param {array} data Raw data array for this row
   *  @param {int} displayIndex The display index for the current table draw
   *  @param {int} displayIndexFull The index of the data in the full list of
   *    rows (after filtering)
   *
   *  @dtopt Callbacks
   *  @name DataTable.defaults.rowCallback
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "rowCallback": function( row, data, displayIndex, displayIndexFull ) {
   *          // Bold the grade for all 'A' grade browsers
   *          if ( data[4] == "A" ) {
   *            $('td:eq(4)', row).html( '<b>A</b>' );
   *          }
   *        }
   *      } );
   *    } );
   */
  "fnRowCallback": null,
  /**
   * __Deprecated__ The functionality provided by this parameter has now been
   * superseded by that provided through `ajax`, which should be used instead.
   *
   * This parameter allows you to override the default function which obtains
   * the data from the server so something more suitable for your application.
   * For example you could use POST data, or pull information from a Gears or
   * AIR database.
   *  @type function
   *  @member
   *  @param {string} source HTTP source to obtain the data from (`ajax`)
   *  @param {array} data A key/value pair object containing the data to send
   *    to the server
   *  @param {function} callback to be called on completion of the data get
   *    process that will draw the data on the page.
   *  @param {object} settings DataTables settings object
   *
   *  @dtopt Callbacks
   *  @dtopt Server-side
   *  @name DataTable.defaults.serverData
   *
   *  @deprecated 1.10. Please use `ajax` for this functionality now.
   */
  "fnServerData": null,
  /**
   * __Deprecated__ The functionality provided by this parameter has now been
   * superseded by that provided through `ajax`, which should be used instead.
   *
   *  It is often useful to send extra data to the server when making an Ajax
   * request - for example custom filtering information, and this callback
   * function makes it trivial to send extra information to the server. The
   * passed in parameter is the data set that has been constructed by
   * DataTables, and you can add to this or modify it as you require.
   *  @type function
   *  @param {array} data Data array (array of objects which are name/value
   *    pairs) that has been constructed by DataTables and will be sent to the
   *    server. In the case of Ajax sourced data with server-side processing
   *    this will be an empty array, for server-side processing there will be a
   *    significant number of parameters!
   *  @returns {undefined} Ensure that you modify the data array passed in,
   *    as this is passed by reference.
   *
   *  @dtopt Callbacks
   *  @dtopt Server-side
   *  @name DataTable.defaults.serverParams
   *
   *  @deprecated 1.10. Please use `ajax` for this functionality now.
   */
  "fnServerParams": null,
  /**
   * Load the table state. With this function you can define from where, and how, the
   * state of a table is loaded. By default DataTables will load from `localStorage`
   * but you might wish to use a server-side database or cookies.
   *  @type function
   *  @member
   *  @param {object} settings DataTables settings object
   *  @param {object} callback Callback that can be executed when done. It
   *    should be passed the loaded state object.
   *  @return {object} The DataTables state object to be loaded
   *
   *  @dtopt Callbacks
   *  @name DataTable.defaults.stateLoadCallback
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "stateSave": true,
   *        "stateLoadCallback": function (settings, callback) {
   *          $.ajax( {
   *            "url": "/state_load",
   *            "dataType": "json",
   *            "success": function (json) {
   *              callback( json );
   *            }
   *          } );
   *        }
   *      } );
   *    } );
   */
  "fnStateLoadCallback": function(settings) {
    try {
      return JSON.parse(
        (settings.iStateDuration === -1 ? sessionStorage : localStorage).getItem(
          "DataTables_" + settings.sInstance + "_" + location.pathname
        )
      );
    } catch (e) {
      return {};
    }
  },
  /**
   * Callback which allows modification of the saved state prior to loading that state.
   * This callback is called when the table is loading state from the stored data, but
   * prior to the settings object being modified by the saved state. Note that for
   * plug-in authors, you should use the `stateLoadParams` event to load parameters for
   * a plug-in.
   *  @type function
   *  @param {object} settings DataTables settings object
   *  @param {object} data The state object that is to be loaded
   *
   *  @dtopt Callbacks
   *  @name DataTable.defaults.stateLoadParams
   *
   *  @example
   *    // Remove a saved filter, so filtering is never loaded
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "stateSave": true,
   *        "stateLoadParams": function (settings, data) {
   *          data.oSearch.sSearch = "";
   *        }
   *      } );
   *    } );
   *
   *  @example
   *    // Disallow state loading by returning false
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "stateSave": true,
   *        "stateLoadParams": function (settings, data) {
   *          return false;
   *        }
   *      } );
   *    } );
   */
  "fnStateLoadParams": null,
  /**
   * Callback that is called when the state has been loaded from the state saving method
   * and the DataTables settings object has been modified as a result of the loaded state.
   *  @type function
   *  @param {object} settings DataTables settings object
   *  @param {object} data The state object that was loaded
   *
   *  @dtopt Callbacks
   *  @name DataTable.defaults.stateLoaded
   *
   *  @example
   *    // Show an alert with the filtering value that was saved
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "stateSave": true,
   *        "stateLoaded": function (settings, data) {
   *          alert( 'Saved filter was: '+data.oSearch.sSearch );
   *        }
   *      } );
   *    } );
   */
  "fnStateLoaded": null,
  /**
   * Save the table state. This function allows you to define where and how the state
   * information for the table is stored By default DataTables will use `localStorage`
   * but you might wish to use a server-side database or cookies.
   *  @type function
   *  @member
   *  @param {object} settings DataTables settings object
   *  @param {object} data The state object to be saved
   *
   *  @dtopt Callbacks
   *  @name DataTable.defaults.stateSaveCallback
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "stateSave": true,
   *        "stateSaveCallback": function (settings, data) {
   *          // Send an Ajax request to the server with the state object
   *          $.ajax( {
   *            "url": "/state_save",
   *            "data": data,
   *            "dataType": "json",
   *            "method": "POST"
   *            "success": function () {}
   *          } );
   *        }
   *      } );
   *    } );
   */
  "fnStateSaveCallback": function(settings, data) {
    try {
      (settings.iStateDuration === -1 ? sessionStorage : localStorage).setItem(
        "DataTables_" + settings.sInstance + "_" + location.pathname,
        JSON.stringify(data)
      );
    } catch (e) {
    }
  },
  /**
   * Callback which allows modification of the state to be saved. Called when the table
   * has changed state a new state save is required. This method allows modification of
   * the state saving object prior to actually doing the save, including addition or
   * other state properties or modification. Note that for plug-in authors, you should
   * use the `stateSaveParams` event to save parameters for a plug-in.
   *  @type function
   *  @param {object} settings DataTables settings object
   *  @param {object} data The state object to be saved
   *
   *  @dtopt Callbacks
   *  @name DataTable.defaults.stateSaveParams
   *
   *  @example
   *    // Remove a saved filter, so filtering is never saved
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "stateSave": true,
   *        "stateSaveParams": function (settings, data) {
   *          data.oSearch.sSearch = "";
   *        }
   *      } );
   *    } );
   */
  "fnStateSaveParams": null,
  /**
   * Duration for which the saved state information is considered valid. After this period
   * has elapsed the state will be returned to the default.
   * Value is given in seconds.
   *  @type int
   *  @default 7200 <i>(2 hours)</i>
   *
   *  @dtopt Options
   *  @name DataTable.defaults.stateDuration
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "stateDuration": 60*60*24; // 1 day
   *      } );
   *    } )
   */
  "iStateDuration": 7200,
  /**
   * When enabled DataTables will not make a request to the server for the first
   * page draw - rather it will use the data already on the page (no sorting etc
   * will be applied to it), thus saving on an XHR at load time. `deferLoading`
   * is used to indicate that deferred loading is required, but it is also used
   * to tell DataTables how many records there are in the full table (allowing
   * the information element and pagination to be displayed correctly). In the case
   * where a filtering is applied to the table on initial load, this can be
   * indicated by giving the parameter as an array, where the first element is
   * the number of records available after filtering and the second element is the
   * number of records without filtering (allowing the table information element
   * to be shown correctly).
   *  @type int | array
   *  @default null
   *
   *  @dtopt Options
   *  @name DataTable.defaults.deferLoading
   *
   *  @example
   *    // 57 records available in the table, no filtering applied
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "serverSide": true,
   *        "ajax": "scripts/server_processing.php",
   *        "deferLoading": 57
   *      } );
   *    } );
   *
   *  @example
   *    // 57 records after filtering, 100 without filtering (an initial filter applied)
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "serverSide": true,
   *        "ajax": "scripts/server_processing.php",
   *        "deferLoading": [ 57, 100 ],
   *        "search": {
   *          "search": "my_filter"
   *        }
   *      } );
   *    } );
   */
  "iDeferLoading": null,
  /**
   * Number of rows to display on a single page when using pagination. If
   * feature enabled (`lengthChange`) then the end user will be able to override
   * this to a custom setting using a pop-up menu.
   *  @type int
   *  @default 10
   *
   *  @dtopt Options
   *  @name DataTable.defaults.pageLength
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "pageLength": 50
   *      } );
   *    } )
   */
  "iDisplayLength": 10,
  /**
   * Define the starting point for data display when using DataTables with
   * pagination. Note that this parameter is the number of records, rather than
   * the page number, so if you have 10 records per page and want to start on
   * the third page, it should be "20".
   *  @type int
   *  @default 0
   *
   *  @dtopt Options
   *  @name DataTable.defaults.displayStart
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "displayStart": 20
   *      } );
   *    } )
   */
  "iDisplayStart": 0,
  /**
   * By default DataTables allows keyboard navigation of the table (sorting, paging,
   * and filtering) by adding a `tabindex` attribute to the required elements. This
   * allows you to tab through the controls and press the enter key to activate them.
   * The tabindex is default 0, meaning that the tab follows the flow of the document.
   * You can overrule this using this parameter if you wish. Use a value of -1 to
   * disable built-in keyboard navigation.
   *  @type int
   *  @default 0
   *
   *  @dtopt Options
   *  @name DataTable.defaults.tabIndex
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "tabIndex": 1
   *      } );
   *    } );
   */
  "iTabIndex": 0,
  /**
   * Classes that DataTables assigns to the various components and features
   * that it adds to the HTML table. This allows classes to be configured
   * during initialisation in addition to through the static
   * {@link DataTable.ext.oStdClasses} object).
   *  @namespace
   *  @name DataTable.defaults.classes
   */
  "oClasses": {},
  /**
   * All strings that DataTables uses in the user interface that it creates
   * are defined in this object, allowing you to modified them individually or
   * completely replace them all as required.
   *  @namespace
   *  @name DataTable.defaults.language
   */
  "oLanguage": {
    /**
     * Strings that are used for WAI-ARIA labels and controls only (these are not
     * actually visible on the page, but will be read by screenreaders, and thus
     * must be internationalised as well).
     *  @namespace
     *  @name DataTable.defaults.language.aria
     */
    "oAria": {
      /**
       * ARIA label that is added to the table headers when the column may be
       * sorted ascending by activing the column (click or return when focused).
       * Note that the column header is prefixed to this string.
       *  @type string
       *  @default : activate to sort column ascending
       *
       *  @dtopt Language
       *  @name DataTable.defaults.language.aria.sortAscending
       *
       *  @example
       *    $(document).ready( function() {
       *      $('#example').dataTable( {
       *        "language": {
       *          "aria": {
       *            "sortAscending": " - click/return to sort ascending"
       *          }
       *        }
       *      } );
       *    } );
       */
      "sSortAscending": ": activate to sort column ascending",
      /**
       * ARIA label that is added to the table headers when the column may be
       * sorted descending by activing the column (click or return when focused).
       * Note that the column header is prefixed to this string.
       *  @type string
       *  @default : activate to sort column ascending
       *
       *  @dtopt Language
       *  @name DataTable.defaults.language.aria.sortDescending
       *
       *  @example
       *    $(document).ready( function() {
       *      $('#example').dataTable( {
       *        "language": {
       *          "aria": {
       *            "sortDescending": " - click/return to sort descending"
       *          }
       *        }
       *      } );
       *    } );
       */
      "sSortDescending": ": activate to sort column descending"
    },
    /**
     * Pagination string used by DataTables for the built-in pagination
     * control types.
     *  @namespace
     *  @name DataTable.defaults.language.paginate
     */
    "oPaginate": {
      /**
       * Text to use when using the 'full_numbers' type of pagination for the
       * button to take the user to the first page.
       *  @type string
       *  @default First
       *
       *  @dtopt Language
       *  @name DataTable.defaults.language.paginate.first
       *
       *  @example
       *    $(document).ready( function() {
       *      $('#example').dataTable( {
       *        "language": {
       *          "paginate": {
       *            "first": "First page"
       *          }
       *        }
       *      } );
       *    } );
       */
      "sFirst": "First",
      /**
       * Text to use when using the 'full_numbers' type of pagination for the
       * button to take the user to the last page.
       *  @type string
       *  @default Last
       *
       *  @dtopt Language
       *  @name DataTable.defaults.language.paginate.last
       *
       *  @example
       *    $(document).ready( function() {
       *      $('#example').dataTable( {
       *        "language": {
       *          "paginate": {
       *            "last": "Last page"
       *          }
       *        }
       *      } );
       *    } );
       */
      "sLast": "Last",
      /**
       * Text to use for the 'next' pagination button (to take the user to the
       * next page).
       *  @type string
       *  @default Next
       *
       *  @dtopt Language
       *  @name DataTable.defaults.language.paginate.next
       *
       *  @example
       *    $(document).ready( function() {
       *      $('#example').dataTable( {
       *        "language": {
       *          "paginate": {
       *            "next": "Next page"
       *          }
       *        }
       *      } );
       *    } );
       */
      "sNext": "Next",
      /**
       * Text to use for the 'previous' pagination button (to take the user to
       * the previous page).
       *  @type string
       *  @default Previous
       *
       *  @dtopt Language
       *  @name DataTable.defaults.language.paginate.previous
       *
       *  @example
       *    $(document).ready( function() {
       *      $('#example').dataTable( {
       *        "language": {
       *          "paginate": {
       *            "previous": "Previous page"
       *          }
       *        }
       *      } );
       *    } );
       */
      "sPrevious": "Previous"
    },
    /**
     * This string is shown in preference to `zeroRecords` when the table is
     * empty of data (regardless of filtering). Note that this is an optional
     * parameter - if it is not given, the value of `zeroRecords` will be used
     * instead (either the default or given value).
     *  @type string
     *  @default No data available in table
     *
     *  @dtopt Language
     *  @name DataTable.defaults.language.emptyTable
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "language": {
     *          "emptyTable": "No data available in table"
     *        }
     *      } );
     *    } );
     */
    "sEmptyTable": "No data available in table",
    /**
     * This string gives information to the end user about the information
     * that is current on display on the page. The following tokens can be
     * used in the string and will be dynamically replaced as the table
     * display updates. This tokens can be placed anywhere in the string, or
     * removed as needed by the language requires:
     *
     * * `\_START\_` - Display index of the first record on the current page
     * * `\_END\_` - Display index of the last record on the current page
     * * `\_TOTAL\_` - Number of records in the table after filtering
     * * `\_MAX\_` - Number of records in the table without filtering
     * * `\_PAGE\_` - Current page number
     * * `\_PAGES\_` - Total number of pages of data in the table
     *
     *  @type string
     *  @default Showing _START_ to _END_ of _TOTAL_ entries
     *
     *  @dtopt Language
     *  @name DataTable.defaults.language.info
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "language": {
     *          "info": "Showing page _PAGE_ of _PAGES_"
     *        }
     *      } );
     *    } );
     */
    "sInfo": "Showing _START_ to _END_ of _TOTAL_ entries",
    /**
     * Display information string for when the table is empty. Typically the
     * format of this string should match `info`.
     *  @type string
     *  @default Showing 0 to 0 of 0 entries
     *
     *  @dtopt Language
     *  @name DataTable.defaults.language.infoEmpty
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "language": {
     *          "infoEmpty": "No entries to show"
     *        }
     *      } );
     *    } );
     */
    "sInfoEmpty": "Showing 0 to 0 of 0 entries",
    /**
     * When a user filters the information in a table, this string is appended
     * to the information (`info`) to give an idea of how strong the filtering
     * is. The variable _MAX_ is dynamically updated.
     *  @type string
     *  @default (filtered from _MAX_ total entries)
     *
     *  @dtopt Language
     *  @name DataTable.defaults.language.infoFiltered
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "language": {
     *          "infoFiltered": " - filtering from _MAX_ records"
     *        }
     *      } );
     *    } );
     */
    "sInfoFiltered": "(filtered from _MAX_ total entries)",
    /**
     * If can be useful to append extra information to the info string at times,
     * and this variable does exactly that. This information will be appended to
     * the `info` (`infoEmpty` and `infoFiltered` in whatever combination they are
     * being used) at all times.
     *  @type string
     *  @default <i>Empty string</i>
     *
     *  @dtopt Language
     *  @name DataTable.defaults.language.infoPostFix
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "language": {
     *          "infoPostFix": "All records shown are derived from real information."
     *        }
     *      } );
     *    } );
     */
    "sInfoPostFix": "",
    /**
     * This decimal place operator is a little different from the other
     * language options since DataTables doesn't output floating point
     * numbers, so it won't ever use this for display of a number. Rather,
     * what this parameter does is modify the sort methods of the table so
     * that numbers which are in a format which has a character other than
     * a period (`.`) as a decimal place will be sorted numerically.
     *
     * Note that numbers with different decimal places cannot be shown in
     * the same table and still be sortable, the table must be consistent.
     * However, multiple different tables on the page can use different
     * decimal place characters.
     *  @type string
     *  @default 
     *
     *  @dtopt Language
     *  @name DataTable.defaults.language.decimal
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "language": {
     *          "decimal": ","
     *          "thousands": "."
     *        }
     *      } );
     *    } );
     */
    "sDecimal": "",
    /**
     * DataTables has a build in number formatter (`formatNumber`) which is
     * used to format large numbers that are used in the table information.
     * By default a comma is used, but this can be trivially changed to any
     * character you wish with this parameter.
     *  @type string
     *  @default ,
     *
     *  @dtopt Language
     *  @name DataTable.defaults.language.thousands
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "language": {
     *          "thousands": "'"
     *        }
     *      } );
     *    } );
     */
    "sThousands": ",",
    /**
     * Detail the action that will be taken when the drop down menu for the
     * pagination length option is changed. The '_MENU_' variable is replaced
     * with a default select list of 10, 25, 50 and 100, and can be replaced
     * with a custom select box if required.
     *  @type string
     *  @default Show _MENU_ entries
     *
     *  @dtopt Language
     *  @name DataTable.defaults.language.lengthMenu
     *
     *  @example
     *    // Language change only
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "language": {
     *          "lengthMenu": "Display _MENU_ records"
     *        }
     *      } );
     *    } );
     *
     *  @example
     *    // Language and options change
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "language": {
     *          "lengthMenu": 'Display <select>'+
     *            '<option value="10">10</option>'+
     *            '<option value="20">20</option>'+
     *            '<option value="30">30</option>'+
     *            '<option value="40">40</option>'+
     *            '<option value="50">50</option>'+
     *            '<option value="-1">All</option>'+
     *            '</select> records'
     *        }
     *      } );
     *    } );
     */
    "sLengthMenu": "Show _MENU_ entries",
    /**
     * When using Ajax sourced data and during the first draw when DataTables is
     * gathering the data, this message is shown in an empty row in the table to
     * indicate to the end user the the data is being loaded. Note that this
     * parameter is not used when loading data by server-side processing, just
     * Ajax sourced data with client-side processing.
     *  @type string
     *  @default Loading...
     *
     *  @dtopt Language
     *  @name DataTable.defaults.language.loadingRecords
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "language": {
     *          "loadingRecords": "Please wait - loading..."
     *        }
     *      } );
     *    } );
     */
    "sLoadingRecords": "Loading...",
    /**
     * Text which is displayed when the table is processing a user action
     * (usually a sort command or similar).
     *  @type string
     *
     *  @dtopt Language
     *  @name DataTable.defaults.language.processing
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "language": {
     *          "processing": "DataTables is currently busy"
     *        }
     *      } );
     *    } );
     */
    "sProcessing": "",
    /**
     * Details the actions that will be taken when the user types into the
     * filtering input text box. The variable "_INPUT_", if used in the string,
     * is replaced with the HTML text box for the filtering input allowing
     * control over where it appears in the string. If "_INPUT_" is not given
     * then the input box is appended to the string automatically.
     *  @type string
     *  @default Search:
     *
     *  @dtopt Language
     *  @name DataTable.defaults.language.search
     *
     *  @example
     *    // Input text box will be appended at the end automatically
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "language": {
     *          "search": "Filter records:"
     *        }
     *      } );
     *    } );
     *
     *  @example
     *    // Specify where the filter should appear
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "language": {
     *          "search": "Apply filter _INPUT_ to table"
     *        }
     *      } );
     *    } );
     */
    "sSearch": "Search:",
    /**
     * Assign a `placeholder` attribute to the search `input` element
     *  @type string
     *  @default 
     *
     *  @dtopt Language
     *  @name DataTable.defaults.language.searchPlaceholder
     */
    "sSearchPlaceholder": "",
    /**
     * All of the language information can be stored in a file on the
     * server-side, which DataTables will look up if this parameter is passed.
     * It must store the URL of the language file, which is in a JSON format,
     * and the object has the same properties as the oLanguage object in the
     * initialiser object (i.e. the above parameters). Please refer to one of
     * the example language files to see how this works in action.
     *  @type string
     *  @default <i>Empty string - i.e. disabled</i>
     *
     *  @dtopt Language
     *  @name DataTable.defaults.language.url
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "language": {
     *          "url": "http://www.sprymedia.co.uk/dataTables/lang.txt"
     *        }
     *      } );
     *    } );
     */
    "sUrl": "",
    /**
     * Text shown inside the table records when the is no information to be
     * displayed after filtering. `emptyTable` is shown when there is simply no
     * information in the table at all (regardless of filtering).
     *  @type string
     *  @default No matching records found
     *
     *  @dtopt Language
     *  @name DataTable.defaults.language.zeroRecords
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "language": {
     *          "zeroRecords": "No records to display"
     *        }
     *      } );
     *    } );
     */
    "sZeroRecords": "No matching records found"
  },
  /**
   * This parameter allows you to have define the global filtering state at
   * initialisation time. As an object the `search` parameter must be
   * defined, but all other parameters are optional. When `regex` is true,
   * the search string will be treated as a regular expression, when false
   * (default) it will be treated as a straight string. When `smart`
   * DataTables will use it's smart filtering methods (to word match at
   * any point in the data), when false this will not be done.
   *  @namespace
   *  @extends DataTable.models.oSearch
   *
   *  @dtopt Options
   *  @name DataTable.defaults.search
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "search": {"search": "Initial search"}
   *      } );
   *    } )
   */
  "oSearch": $2.extend({}, DataTable.models.oSearch),
  /**
   * __Deprecated__ The functionality provided by this parameter has now been
   * superseded by that provided through `ajax`, which should be used instead.
   *
   * By default DataTables will look for the property `data` (or `aaData` for
   * compatibility with DataTables 1.9-) when obtaining data from an Ajax
   * source or for server-side processing - this parameter allows that
   * property to be changed. You can use Javascript dotted object notation to
   * get a data source for multiple levels of nesting.
   *  @type string
   *  @default data
   *
   *  @dtopt Options
   *  @dtopt Server-side
   *  @name DataTable.defaults.ajaxDataProp
   *
   *  @deprecated 1.10. Please use `ajax` for this functionality now.
   */
  "sAjaxDataProp": "data",
  /**
   * __Deprecated__ The functionality provided by this parameter has now been
   * superseded by that provided through `ajax`, which should be used instead.
   *
   * You can instruct DataTables to load data from an external
   * source using this parameter (use aData if you want to pass data in you
   * already have). Simply provide a url a JSON object can be obtained from.
   *  @type string
   *  @default null
   *
   *  @dtopt Options
   *  @dtopt Server-side
   *  @name DataTable.defaults.ajaxSource
   *
   *  @deprecated 1.10. Please use `ajax` for this functionality now.
   */
  "sAjaxSource": null,
  /**
   * This initialisation variable allows you to specify exactly where in the
   * DOM you want DataTables to inject the various controls it adds to the page
   * (for example you might want the pagination controls at the top of the
   * table). DIV elements (with or without a custom class) can also be added to
   * aid styling. The follow syntax is used:
   *   <ul>
   *     <li>The following options are allowed:
   *       <ul>
   *         <li>'l' - Length changing</li>
   *         <li>'f' - Filtering input</li>
   *         <li>'t' - The table!</li>
   *         <li>'i' - Information</li>
   *         <li>'p' - Pagination</li>
   *         <li>'r' - pRocessing</li>
   *       </ul>
   *     </li>
   *     <li>The following constants are allowed:
   *       <ul>
   *         <li>'H' - jQueryUI theme "header" classes ('fg-toolbar ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix')</li>
   *         <li>'F' - jQueryUI theme "footer" classes ('fg-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix')</li>
   *       </ul>
   *     </li>
   *     <li>The following syntax is expected:
   *       <ul>
   *         <li>'&lt;' and '&gt;' - div elements</li>
   *         <li>'&lt;"class" and '&gt;' - div with a class</li>
   *         <li>'&lt;"#id" and '&gt;' - div with an ID</li>
   *       </ul>
   *     </li>
   *     <li>Examples:
   *       <ul>
   *         <li>'&lt;"wrapper"flipt&gt;'</li>
   *         <li>'&lt;lf&lt;t&gt;ip&gt;'</li>
   *       </ul>
   *     </li>
   *   </ul>
   *  @type string
   *  @default lfrtip <i>(when `jQueryUI` is false)</i> <b>or</b>
   *    <"H"lfr>t<"F"ip> <i>(when `jQueryUI` is true)</i>
   *
   *  @dtopt Options
   *  @name DataTable.defaults.dom
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "dom": '&lt;"top"i&gt;rt&lt;"bottom"flp&gt;&lt;"clear"&gt;'
   *      } );
   *    } );
   */
  "sDom": "lfrtip",
  /**
   * Search delay option. This will throttle full table searches that use the
   * DataTables provided search input element (it does not effect calls to
   * `dt-api search()`, providing a delay before the search is made.
   *  @type integer
   *  @default 0
   *
   *  @dtopt Options
   *  @name DataTable.defaults.searchDelay
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "searchDelay": 200
   *      } );
   *    } )
   */
  "searchDelay": null,
  /**
   * DataTables features six different built-in options for the buttons to
   * display for pagination control:
   *
   * * `numbers` - Page number buttons only
   * * `simple` - 'Previous' and 'Next' buttons only
   * * 'simple_numbers` - 'Previous' and 'Next' buttons, plus page numbers
   * * `full` - 'First', 'Previous', 'Next' and 'Last' buttons
   * * `full_numbers` - 'First', 'Previous', 'Next' and 'Last' buttons, plus page numbers
   * * `first_last_numbers` - 'First' and 'Last' buttons, plus page numbers
   *  
   * Further methods can be added using {@link DataTable.ext.oPagination}.
   *  @type string
   *  @default simple_numbers
   *
   *  @dtopt Options
   *  @name DataTable.defaults.pagingType
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "pagingType": "full_numbers"
   *      } );
   *    } )
   */
  "sPaginationType": "simple_numbers",
  /**
   * Enable horizontal scrolling. When a table is too wide to fit into a
   * certain layout, or you have a large number of columns in the table, you
   * can enable x-scrolling to show the table in a viewport, which can be
   * scrolled. This property can be `true` which will allow the table to
   * scroll horizontally when needed, or any CSS unit, or a number (in which
   * case it will be treated as a pixel measurement). Setting as simply `true`
   * is recommended.
   *  @type boolean|string
   *  @default <i>blank string - i.e. disabled</i>
   *
   *  @dtopt Features
   *  @name DataTable.defaults.scrollX
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "scrollX": true,
   *        "scrollCollapse": true
   *      } );
   *    } );
   */
  "sScrollX": "",
  /**
   * This property can be used to force a DataTable to use more width than it
   * might otherwise do when x-scrolling is enabled. For example if you have a
   * table which requires to be well spaced, this parameter is useful for
   * "over-sizing" the table, and thus forcing scrolling. This property can by
   * any CSS unit, or a number (in which case it will be treated as a pixel
   * measurement).
   *  @type string
   *  @default <i>blank string - i.e. disabled</i>
   *
   *  @dtopt Options
   *  @name DataTable.defaults.scrollXInner
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "scrollX": "100%",
   *        "scrollXInner": "110%"
   *      } );
   *    } );
   */
  "sScrollXInner": "",
  /**
   * Enable vertical scrolling. Vertical scrolling will constrain the DataTable
   * to the given height, and enable scrolling for any data which overflows the
   * current viewport. This can be used as an alternative to paging to display
   * a lot of data in a small area (although paging and scrolling can both be
   * enabled at the same time). This property can be any CSS unit, or a number
   * (in which case it will be treated as a pixel measurement).
   *  @type string
   *  @default <i>blank string - i.e. disabled</i>
   *
   *  @dtopt Features
   *  @name DataTable.defaults.scrollY
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "scrollY": "200px",
   *        "paginate": false
   *      } );
   *    } );
   */
  "sScrollY": "",
  /**
   * __Deprecated__ The functionality provided by this parameter has now been
   * superseded by that provided through `ajax`, which should be used instead.
   *
   * Set the HTTP method that is used to make the Ajax call for server-side
   * processing or Ajax sourced data.
   *  @type string
   *  @default GET
   *
   *  @dtopt Options
   *  @dtopt Server-side
   *  @name DataTable.defaults.serverMethod
   *
   *  @deprecated 1.10. Please use `ajax` for this functionality now.
   */
  "sServerMethod": "GET",
  /**
   * DataTables makes use of renderers when displaying HTML elements for
   * a table. These renderers can be added or modified by plug-ins to
   * generate suitable mark-up for a site. For example the Bootstrap
   * integration plug-in for DataTables uses a paging button renderer to
   * display pagination buttons in the mark-up required by Bootstrap.
   *
   * For further information about the renderers available see
   * DataTable.ext.renderer
   *  @type string|object
   *  @default null
   *
   *  @name DataTable.defaults.renderer
   *
   */
  "renderer": null,
  /**
   * Set the data property name that DataTables should use to get a row's id
   * to set as the `id` property in the node.
   *  @type string
   *  @default DT_RowId
   *
   *  @name DataTable.defaults.rowId
   */
  "rowId": "DT_RowId"
};
_fnHungarianMap(DataTable.defaults);
DataTable.defaults.column = {
  /**
   * Define which column(s) an order will occur on for this column. This
   * allows a column's ordering to take multiple columns into account when
   * doing a sort or use the data from a different column. For example first
   * name / last name columns make sense to do a multi-column sort over the
   * two columns.
   *  @type array|int
   *  @default null <i>Takes the value of the column index automatically</i>
   *
   *  @name DataTable.defaults.column.orderData
   *  @dtopt Columns
   *
   *  @example
   *    // Using `columnDefs`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columnDefs": [
   *          { "orderData": [ 0, 1 ], "targets": [ 0 ] },
   *          { "orderData": [ 1, 0 ], "targets": [ 1 ] },
   *          { "orderData": 2, "targets": [ 2 ] }
   *        ]
   *      } );
   *    } );
   *
   *  @example
   *    // Using `columns`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columns": [
   *          { "orderData": [ 0, 1 ] },
   *          { "orderData": [ 1, 0 ] },
   *          { "orderData": 2 },
   *          null,
   *          null
   *        ]
   *      } );
   *    } );
   */
  "aDataSort": null,
  "iDataSort": -1,
  /**
   * You can control the default ordering direction, and even alter the
   * behaviour of the sort handler (i.e. only allow ascending ordering etc)
   * using this parameter.
   *  @type array
   *  @default [ 'asc', 'desc' ]
   *
   *  @name DataTable.defaults.column.orderSequence
   *  @dtopt Columns
   *
   *  @example
   *    // Using `columnDefs`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columnDefs": [
   *          { "orderSequence": [ "asc" ], "targets": [ 1 ] },
   *          { "orderSequence": [ "desc", "asc", "asc" ], "targets": [ 2 ] },
   *          { "orderSequence": [ "desc" ], "targets": [ 3 ] }
   *        ]
   *      } );
   *    } );
   *
   *  @example
   *    // Using `columns`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columns": [
   *          null,
   *          { "orderSequence": [ "asc" ] },
   *          { "orderSequence": [ "desc", "asc", "asc" ] },
   *          { "orderSequence": [ "desc" ] },
   *          null
   *        ]
   *      } );
   *    } );
   */
  "asSorting": ["asc", "desc"],
  /**
   * Enable or disable filtering on the data in this column.
   *  @type boolean
   *  @default true
   *
   *  @name DataTable.defaults.column.searchable
   *  @dtopt Columns
   *
   *  @example
   *    // Using `columnDefs`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columnDefs": [
   *          { "searchable": false, "targets": [ 0 ] }
   *        ] } );
   *    } );
   *
   *  @example
   *    // Using `columns`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columns": [
   *          { "searchable": false },
   *          null,
   *          null,
   *          null,
   *          null
   *        ] } );
   *    } );
   */
  "bSearchable": true,
  /**
   * Enable or disable ordering on this column.
   *  @type boolean
   *  @default true
   *
   *  @name DataTable.defaults.column.orderable
   *  @dtopt Columns
   *
   *  @example
   *    // Using `columnDefs`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columnDefs": [
   *          { "orderable": false, "targets": [ 0 ] }
   *        ] } );
   *    } );
   *
   *  @example
   *    // Using `columns`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columns": [
   *          { "orderable": false },
   *          null,
   *          null,
   *          null,
   *          null
   *        ] } );
   *    } );
   */
  "bSortable": true,
  /**
   * Enable or disable the display of this column.
   *  @type boolean
   *  @default true
   *
   *  @name DataTable.defaults.column.visible
   *  @dtopt Columns
   *
   *  @example
   *    // Using `columnDefs`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columnDefs": [
   *          { "visible": false, "targets": [ 0 ] }
   *        ] } );
   *    } );
   *
   *  @example
   *    // Using `columns`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columns": [
   *          { "visible": false },
   *          null,
   *          null,
   *          null,
   *          null
   *        ] } );
   *    } );
   */
  "bVisible": true,
  /**
   * Developer definable function that is called whenever a cell is created (Ajax source,
   * etc) or processed for input (DOM source). This can be used as a compliment to mRender
   * allowing you to modify the DOM element (add background colour for example) when the
   * element is available.
   *  @type function
   *  @param {element} td The TD node that has been created
   *  @param {*} cellData The Data for the cell
   *  @param {array|object} rowData The data for the whole row
   *  @param {int} row The row index for the aoData data store
   *  @param {int} col The column index for aoColumns
   *
   *  @name DataTable.defaults.column.createdCell
   *  @dtopt Columns
   *
   *  @example
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columnDefs": [ {
   *          "targets": [3],
   *          "createdCell": function (td, cellData, rowData, row, col) {
   *            if ( cellData == "1.7" ) {
   *              $(td).css('color', 'blue')
   *            }
   *          }
   *        } ]
   *      });
   *    } );
   */
  "fnCreatedCell": null,
  /**
   * This parameter has been replaced by `data` in DataTables to ensure naming
   * consistency. `dataProp` can still be used, as there is backwards
   * compatibility in DataTables for this option, but it is strongly
   * recommended that you use `data` in preference to `dataProp`.
   *  @name DataTable.defaults.column.dataProp
   */
  /**
   * This property can be used to read data from any data source property,
   * including deeply nested objects / properties. `data` can be given in a
   * number of different ways which effect its behaviour:
   *
   * * `integer` - treated as an array index for the data source. This is the
   *   default that DataTables uses (incrementally increased for each column).
   * * `string` - read an object property from the data source. There are
   *   three 'special' options that can be used in the string to alter how
   *   DataTables reads the data from the source object:
   *    * `.` - Dotted Javascript notation. Just as you use a `.` in
   *      Javascript to read from nested objects, so to can the options
   *      specified in `data`. For example: `browser.version` or
   *      `browser.name`. If your object parameter name contains a period, use
   *      `\\` to escape it - i.e. `first\\.name`.
   *    * `[]` - Array notation. DataTables can automatically combine data
   *      from and array source, joining the data with the characters provided
   *      between the two brackets. For example: `name[, ]` would provide a
   *      comma-space separated list from the source array. If no characters
   *      are provided between the brackets, the original array source is
   *      returned.
   *    * `()` - Function notation. Adding `()` to the end of a parameter will
   *      execute a function of the name given. For example: `browser()` for a
   *      simple function on the data source, `browser.version()` for a
   *      function in a nested property or even `browser().version` to get an
   *      object property if the function called returns an object. Note that
   *      function notation is recommended for use in `render` rather than
   *      `data` as it is much simpler to use as a renderer.
   * * `null` - use the original data source for the row rather than plucking
   *   data directly from it. This action has effects on two other
   *   initialisation options:
   *    * `defaultContent` - When null is given as the `data` option and
   *      `defaultContent` is specified for the column, the value defined by
   *      `defaultContent` will be used for the cell.
   *    * `render` - When null is used for the `data` option and the `render`
   *      option is specified for the column, the whole data source for the
   *      row is used for the renderer.
   * * `function` - the function given will be executed whenever DataTables
   *   needs to set or get the data for a cell in the column. The function
   *   takes three parameters:
   *    * Parameters:
   *      * `{array|object}` The data source for the row
   *      * `{string}` The type call data requested - this will be 'set' when
   *        setting data or 'filter', 'display', 'type', 'sort' or undefined
   *        when gathering data. Note that when `undefined` is given for the
   *        type DataTables expects to get the raw data for the object back<
   *      * `{*}` Data to set when the second parameter is 'set'.
   *    * Return:
   *      * The return value from the function is not required when 'set' is
   *        the type of call, but otherwise the return is what will be used
   *        for the data requested.
   *
   * Note that `data` is a getter and setter option. If you just require
   * formatting of data for output, you will likely want to use `render` which
   * is simply a getter and thus simpler to use.
   *
   * Note that prior to DataTables 1.9.2 `data` was called `mDataProp`. The
   * name change reflects the flexibility of this property and is consistent
   * with the naming of mRender. If 'mDataProp' is given, then it will still
   * be used by DataTables, as it automatically maps the old name to the new
   * if required.
   *
   *  @type string|int|function|null
   *  @default null <i>Use automatically calculated column index</i>
   *
   *  @name DataTable.defaults.column.data
   *  @dtopt Columns
   *
   *  @example
   *    // Read table data from objects
   *    // JSON structure for each row:
   *    //   {
   *    //      "engine": {value},
   *    //      "browser": {value},
   *    //      "platform": {value},
   *    //      "version": {value},
   *    //      "grade": {value}
   *    //   }
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "ajaxSource": "sources/objects.txt",
   *        "columns": [
   *          { "data": "engine" },
   *          { "data": "browser" },
   *          { "data": "platform" },
   *          { "data": "version" },
   *          { "data": "grade" }
   *        ]
   *      } );
   *    } );
   *
   *  @example
   *    // Read information from deeply nested objects
   *    // JSON structure for each row:
   *    //   {
   *    //      "engine": {value},
   *    //      "browser": {value},
   *    //      "platform": {
   *    //         "inner": {value}
   *    //      },
   *    //      "details": [
   *    //         {value}, {value}
   *    //      ]
   *    //   }
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "ajaxSource": "sources/deep.txt",
   *        "columns": [
   *          { "data": "engine" },
   *          { "data": "browser" },
   *          { "data": "platform.inner" },
   *          { "data": "details.0" },
   *          { "data": "details.1" }
   *        ]
   *      } );
   *    } );
   *
   *  @example
   *    // Using `data` as a function to provide different information for
   *    // sorting, filtering and display. In this case, currency (price)
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columnDefs": [ {
   *          "targets": [ 0 ],
   *          "data": function ( source, type, val ) {
   *            if (type === 'set') {
   *              source.price = val;
   *              // Store the computed display and filter values for efficiency
   *              source.price_display = val=="" ? "" : "$"+numberFormat(val);
   *              source.price_filter  = val=="" ? "" : "$"+numberFormat(val)+" "+val;
   *              return;
   *            }
   *            else if (type === 'display') {
   *              return source.price_display;
   *            }
   *            else if (type === 'filter') {
   *              return source.price_filter;
   *            }
   *            // 'sort', 'type' and undefined all just use the integer
   *            return source.price;
   *          }
   *        } ]
   *      } );
   *    } );
   *
   *  @example
   *    // Using default content
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columnDefs": [ {
   *          "targets": [ 0 ],
   *          "data": null,
   *          "defaultContent": "Click to edit"
   *        } ]
   *      } );
   *    } );
   *
   *  @example
   *    // Using array notation - outputting a list from an array
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columnDefs": [ {
   *          "targets": [ 0 ],
   *          "data": "name[, ]"
   *        } ]
   *      } );
   *    } );
   *
   */
  "mData": null,
  /**
   * This property is the rendering partner to `data` and it is suggested that
   * when you want to manipulate data for display (including filtering,
   * sorting etc) without altering the underlying data for the table, use this
   * property. `render` can be considered to be the the read only companion to
   * `data` which is read / write (then as such more complex). Like `data`
   * this option can be given in a number of different ways to effect its
   * behaviour:
   *
   * * `integer` - treated as an array index for the data source. This is the
   *   default that DataTables uses (incrementally increased for each column).
   * * `string` - read an object property from the data source. There are
   *   three 'special' options that can be used in the string to alter how
   *   DataTables reads the data from the source object:
   *    * `.` - Dotted Javascript notation. Just as you use a `.` in
   *      Javascript to read from nested objects, so to can the options
   *      specified in `data`. For example: `browser.version` or
   *      `browser.name`. If your object parameter name contains a period, use
   *      `\\` to escape it - i.e. `first\\.name`.
   *    * `[]` - Array notation. DataTables can automatically combine data
   *      from and array source, joining the data with the characters provided
   *      between the two brackets. For example: `name[, ]` would provide a
   *      comma-space separated list from the source array. If no characters
   *      are provided between the brackets, the original array source is
   *      returned.
   *    * `()` - Function notation. Adding `()` to the end of a parameter will
   *      execute a function of the name given. For example: `browser()` for a
   *      simple function on the data source, `browser.version()` for a
   *      function in a nested property or even `browser().version` to get an
   *      object property if the function called returns an object.
   * * `object` - use different data for the different data types requested by
   *   DataTables ('filter', 'display', 'type' or 'sort'). The property names
   *   of the object is the data type the property refers to and the value can
   *   defined using an integer, string or function using the same rules as
   *   `render` normally does. Note that an `_` option _must_ be specified.
   *   This is the default value to use if you haven't specified a value for
   *   the data type requested by DataTables.
   * * `function` - the function given will be executed whenever DataTables
   *   needs to set or get the data for a cell in the column. The function
   *   takes three parameters:
   *    * Parameters:
   *      * {array|object} The data source for the row (based on `data`)
   *      * {string} The type call data requested - this will be 'filter',
   *        'display', 'type' or 'sort'.
   *      * {array|object} The full data source for the row (not based on
   *        `data`)
   *    * Return:
   *      * The return value from the function is what will be used for the
   *        data requested.
   *
   *  @type string|int|function|object|null
   *  @default null Use the data source value.
   *
   *  @name DataTable.defaults.column.render
   *  @dtopt Columns
   *
   *  @example
   *    // Create a comma separated list from an array of objects
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "ajaxSource": "sources/deep.txt",
   *        "columns": [
   *          { "data": "engine" },
   *          { "data": "browser" },
   *          {
   *            "data": "platform",
   *            "render": "[, ].name"
   *          }
   *        ]
   *      } );
   *    } );
   *
   *  @example
   *    // Execute a function to obtain data
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columnDefs": [ {
   *          "targets": [ 0 ],
   *          "data": null, // Use the full data source object for the renderer's source
   *          "render": "browserName()"
   *        } ]
   *      } );
   *    } );
   *
   *  @example
   *    // As an object, extracting different data for the different types
   *    // This would be used with a data source such as:
   *    //   { "phone": 5552368, "phone_filter": "5552368 555-2368", "phone_display": "555-2368" }
   *    // Here the `phone` integer is used for sorting and type detection, while `phone_filter`
   *    // (which has both forms) is used for filtering for if a user inputs either format, while
   *    // the formatted phone number is the one that is shown in the table.
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columnDefs": [ {
   *          "targets": [ 0 ],
   *          "data": null, // Use the full data source object for the renderer's source
   *          "render": {
   *            "_": "phone",
   *            "filter": "phone_filter",
   *            "display": "phone_display"
   *          }
   *        } ]
   *      } );
   *    } );
   *
   *  @example
   *    // Use as a function to create a link from the data source
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columnDefs": [ {
   *          "targets": [ 0 ],
   *          "data": "download_link",
   *          "render": function ( data, type, full ) {
   *            return '<a href="'+data+'">Download</a>';
   *          }
   *        } ]
   *      } );
   *    } );
   */
  "mRender": null,
  /**
   * Change the cell type created for the column - either TD cells or TH cells. This
   * can be useful as TH cells have semantic meaning in the table body, allowing them
   * to act as a header for a row (you may wish to add scope='row' to the TH elements).
   *  @type string
   *  @default td
   *
   *  @name DataTable.defaults.column.cellType
   *  @dtopt Columns
   *
   *  @example
   *    // Make the first column use TH cells
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columnDefs": [ {
   *          "targets": [ 0 ],
   *          "cellType": "th"
   *        } ]
   *      } );
   *    } );
   */
  "sCellType": "td",
  /**
   * Class to give to each cell in this column.
   *  @type string
   *  @default <i>Empty string</i>
   *
   *  @name DataTable.defaults.column.class
   *  @dtopt Columns
   *
   *  @example
   *    // Using `columnDefs`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columnDefs": [
   *          { "class": "my_class", "targets": [ 0 ] }
   *        ]
   *      } );
   *    } );
   *
   *  @example
   *    // Using `columns`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columns": [
   *          { "class": "my_class" },
   *          null,
   *          null,
   *          null,
   *          null
   *        ]
   *      } );
   *    } );
   */
  "sClass": "",
  /**
   * When DataTables calculates the column widths to assign to each column,
   * it finds the longest string in each column and then constructs a
   * temporary table and reads the widths from that. The problem with this
   * is that "mmm" is much wider then "iiii", but the latter is a longer
   * string - thus the calculation can go wrong (doing it properly and putting
   * it into an DOM object and measuring that is horribly(!) slow). Thus as
   * a "work around" we provide this option. It will append its value to the
   * text that is found to be the longest string for the column - i.e. padding.
   * Generally you shouldn't need this!
   *  @type string
   *  @default <i>Empty string<i>
   *
   *  @name DataTable.defaults.column.contentPadding
   *  @dtopt Columns
   *
   *  @example
   *    // Using `columns`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columns": [
   *          null,
   *          null,
   *          null,
   *          {
   *            "contentPadding": "mmm"
   *          }
   *        ]
   *      } );
   *    } );
   */
  "sContentPadding": "",
  /**
   * Allows a default value to be given for a column's data, and will be used
   * whenever a null data source is encountered (this can be because `data`
   * is set to null, or because the data source itself is null).
   *  @type string
   *  @default null
   *
   *  @name DataTable.defaults.column.defaultContent
   *  @dtopt Columns
   *
   *  @example
   *    // Using `columnDefs`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columnDefs": [
   *          {
   *            "data": null,
   *            "defaultContent": "Edit",
   *            "targets": [ -1 ]
   *          }
   *        ]
   *      } );
   *    } );
   *
   *  @example
   *    // Using `columns`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columns": [
   *          null,
   *          null,
   *          null,
   *          {
   *            "data": null,
   *            "defaultContent": "Edit"
   *          }
   *        ]
   *      } );
   *    } );
   */
  "sDefaultContent": null,
  /**
   * This parameter is only used in DataTables' server-side processing. It can
   * be exceptionally useful to know what columns are being displayed on the
   * client side, and to map these to database fields. When defined, the names
   * also allow DataTables to reorder information from the server if it comes
   * back in an unexpected order (i.e. if you switch your columns around on the
   * client-side, your server-side code does not also need updating).
   *  @type string
   *  @default <i>Empty string</i>
   *
   *  @name DataTable.defaults.column.name
   *  @dtopt Columns
   *
   *  @example
   *    // Using `columnDefs`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columnDefs": [
   *          { "name": "engine", "targets": [ 0 ] },
   *          { "name": "browser", "targets": [ 1 ] },
   *          { "name": "platform", "targets": [ 2 ] },
   *          { "name": "version", "targets": [ 3 ] },
   *          { "name": "grade", "targets": [ 4 ] }
   *        ]
   *      } );
   *    } );
   *
   *  @example
   *    // Using `columns`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columns": [
   *          { "name": "engine" },
   *          { "name": "browser" },
   *          { "name": "platform" },
   *          { "name": "version" },
   *          { "name": "grade" }
   *        ]
   *      } );
   *    } );
   */
  "sName": "",
  /**
   * Defines a data source type for the ordering which can be used to read
   * real-time information from the table (updating the internally cached
   * version) prior to ordering. This allows ordering to occur on user
   * editable elements such as form inputs.
   *  @type string
   *  @default std
   *
   *  @name DataTable.defaults.column.orderDataType
   *  @dtopt Columns
   *
   *  @example
   *    // Using `columnDefs`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columnDefs": [
   *          { "orderDataType": "dom-text", "targets": [ 2, 3 ] },
   *          { "type": "numeric", "targets": [ 3 ] },
   *          { "orderDataType": "dom-select", "targets": [ 4 ] },
   *          { "orderDataType": "dom-checkbox", "targets": [ 5 ] }
   *        ]
   *      } );
   *    } );
   *
   *  @example
   *    // Using `columns`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columns": [
   *          null,
   *          null,
   *          { "orderDataType": "dom-text" },
   *          { "orderDataType": "dom-text", "type": "numeric" },
   *          { "orderDataType": "dom-select" },
   *          { "orderDataType": "dom-checkbox" }
   *        ]
   *      } );
   *    } );
   */
  "sSortDataType": "std",
  /**
   * The title of this column.
   *  @type string
   *  @default null <i>Derived from the 'TH' value for this column in the
   *    original HTML table.</i>
   *
   *  @name DataTable.defaults.column.title
   *  @dtopt Columns
   *
   *  @example
   *    // Using `columnDefs`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columnDefs": [
   *          { "title": "My column title", "targets": [ 0 ] }
   *        ]
   *      } );
   *    } );
   *
   *  @example
   *    // Using `columns`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columns": [
   *          { "title": "My column title" },
   *          null,
   *          null,
   *          null,
   *          null
   *        ]
   *      } );
   *    } );
   */
  "sTitle": null,
  /**
   * The type allows you to specify how the data for this column will be
   * ordered. Four types (string, numeric, date and html (which will strip
   * HTML tags before ordering)) are currently available. Note that only date
   * formats understood by Javascript's Date() object will be accepted as type
   * date. For example: "Mar 26, 2008 5:03 PM". May take the values: 'string',
   * 'numeric', 'date' or 'html' (by default). Further types can be adding
   * through plug-ins.
   *  @type string
   *  @default null <i>Auto-detected from raw data</i>
   *
   *  @name DataTable.defaults.column.type
   *  @dtopt Columns
   *
   *  @example
   *    // Using `columnDefs`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columnDefs": [
   *          { "type": "html", "targets": [ 0 ] }
   *        ]
   *      } );
   *    } );
   *
   *  @example
   *    // Using `columns`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columns": [
   *          { "type": "html" },
   *          null,
   *          null,
   *          null,
   *          null
   *        ]
   *      } );
   *    } );
   */
  "sType": null,
  /**
   * Defining the width of the column, this parameter may take any CSS value
   * (3em, 20px etc). DataTables applies 'smart' widths to columns which have not
   * been given a specific width through this interface ensuring that the table
   * remains readable.
   *  @type string
   *  @default null <i>Automatic</i>
   *
   *  @name DataTable.defaults.column.width
   *  @dtopt Columns
   *
   *  @example
   *    // Using `columnDefs`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columnDefs": [
   *          { "width": "20%", "targets": [ 0 ] }
   *        ]
   *      } );
   *    } );
   *
   *  @example
   *    // Using `columns`
   *    $(document).ready( function() {
   *      $('#example').dataTable( {
   *        "columns": [
   *          { "width": "20%" },
   *          null,
   *          null,
   *          null,
   *          null
   *        ]
   *      } );
   *    } );
   */
  "sWidth": null
};
_fnHungarianMap(DataTable.defaults.column);
DataTable.models.oSettings = {
  /**
   * Primary features of DataTables and their enablement state.
   *  @namespace
   */
  "oFeatures": {
    /**
     * Flag to say if DataTables should automatically try to calculate the
     * optimum table and columns widths (true) or not (false).
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type boolean
     */
    "bAutoWidth": null,
    /**
     * Delay the creation of TR and TD elements until they are actually
     * needed by a driven page draw. This can give a significant speed
     * increase for Ajax source and Javascript source data, but makes no
     * difference at all for DOM and server-side processing tables.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type boolean
     */
    "bDeferRender": null,
    /**
     * Enable filtering on the table or not. Note that if this is disabled
     * then there is no filtering at all on the table, including fnFilter.
     * To just remove the filtering input use sDom and remove the 'f' option.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type boolean
     */
    "bFilter": null,
    /**
     * Table information element (the 'Showing x of y records' div) enable
     * flag.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type boolean
     */
    "bInfo": null,
    /**
     * Present a user control allowing the end user to change the page size
     * when pagination is enabled.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type boolean
     */
    "bLengthChange": null,
    /**
     * Pagination enabled or not. Note that if this is disabled then length
     * changing must also be disabled.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type boolean
     */
    "bPaginate": null,
    /**
     * Processing indicator enable flag whenever DataTables is enacting a
     * user request - typically an Ajax request for server-side processing.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type boolean
     */
    "bProcessing": null,
    /**
     * Server-side processing enabled flag - when enabled DataTables will
     * get all data from the server for every draw - there is no filtering,
     * sorting or paging done on the client-side.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type boolean
     */
    "bServerSide": null,
    /**
     * Sorting enablement flag.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type boolean
     */
    "bSort": null,
    /**
     * Multi-column sorting
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type boolean
     */
    "bSortMulti": null,
    /**
     * Apply a class to the columns which are being sorted to provide a
     * visual highlight or not. This can slow things down when enabled since
     * there is a lot of DOM interaction.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type boolean
     */
    "bSortClasses": null,
    /**
     * State saving enablement flag.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type boolean
     */
    "bStateSave": null
  },
  /**
   * Scrolling settings for a table.
   *  @namespace
   */
  "oScroll": {
    /**
     * When the table is shorter in height than sScrollY, collapse the
     * table container down to the height of the table (when true).
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type boolean
     */
    "bCollapse": null,
    /**
     * Width of the scrollbar for the web-browser's platform. Calculated
     * during table initialisation.
     *  @type int
     *  @default 0
     */
    "iBarWidth": 0,
    /**
     * Viewport width for horizontal scrolling. Horizontal scrolling is
     * disabled if an empty string.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type string
     */
    "sX": null,
    /**
     * Width to expand the table to when using x-scrolling. Typically you
     * should not need to use this.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type string
     *  @deprecated
     */
    "sXInner": null,
    /**
     * Viewport height for vertical scrolling. Vertical scrolling is disabled
     * if an empty string.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type string
     */
    "sY": null
  },
  /**
   * Language information for the table.
   *  @namespace
   *  @extends DataTable.defaults.oLanguage
   */
  "oLanguage": {
    /**
     * Information callback function. See
     * {@link DataTable.defaults.fnInfoCallback}
     *  @type function
     *  @default null
     */
    "fnInfoCallback": null
  },
  /**
   * Browser support parameters
   *  @namespace
   */
  "oBrowser": {
    /**
     * Indicate if the browser incorrectly calculates width:100% inside a
     * scrolling element (IE6/7)
     *  @type boolean
     *  @default false
     */
    "bScrollOversize": false,
    /**
     * Determine if the vertical scrollbar is on the right or left of the
     * scrolling container - needed for rtl language layout, although not
     * all browsers move the scrollbar (Safari).
     *  @type boolean
     *  @default false
     */
    "bScrollbarLeft": false,
    /**
     * Flag for if `getBoundingClientRect` is fully supported or not
     *  @type boolean
     *  @default false
     */
    "bBounding": false,
    /**
     * Browser scrollbar width
     *  @type integer
     *  @default 0
     */
    "barWidth": 0
  },
  "ajax": null,
  /**
   * Array referencing the nodes which are used for the features. The
   * parameters of this object match what is allowed by sDom - i.e.
   *   <ul>
   *     <li>'l' - Length changing</li>
   *     <li>'f' - Filtering input</li>
   *     <li>'t' - The table!</li>
   *     <li>'i' - Information</li>
   *     <li>'p' - Pagination</li>
   *     <li>'r' - pRocessing</li>
   *   </ul>
   *  @type array
   *  @default []
   */
  "aanFeatures": [],
  /**
   * Store data information - see {@link DataTable.models.oRow} for detailed
   * information.
   *  @type array
   *  @default []
   */
  "aoData": [],
  /**
   * Array of indexes which are in the current display (after filtering etc)
   *  @type array
   *  @default []
   */
  "aiDisplay": [],
  /**
   * Array of indexes for display - no filtering
   *  @type array
   *  @default []
   */
  "aiDisplayMaster": [],
  /**
   * Map of row ids to data indexes
   *  @type object
   *  @default {}
   */
  "aIds": {},
  /**
   * Store information about each column that is in use
   *  @type array
   *  @default []
   */
  "aoColumns": [],
  /**
   * Store information about the table's header
   *  @type array
   *  @default []
   */
  "aoHeader": [],
  /**
   * Store information about the table's footer
   *  @type array
   *  @default []
   */
  "aoFooter": [],
  /**
   * Store the applied global search information in case we want to force a
   * research or compare the old search to a new one.
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   *  @namespace
   *  @extends DataTable.models.oSearch
   */
  "oPreviousSearch": {},
  /**
   * Store the applied search for each column - see
   * {@link DataTable.models.oSearch} for the format that is used for the
   * filtering information for each column.
   *  @type array
   *  @default []
   */
  "aoPreSearchCols": [],
  /**
   * Sorting that is applied to the table. Note that the inner arrays are
   * used in the following manner:
   * <ul>
   *   <li>Index 0 - column number</li>
   *   <li>Index 1 - current sorting direction</li>
   * </ul>
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   *  @type array
   *  @todo These inner arrays should really be objects
   */
  "aaSorting": null,
  /**
   * Sorting that is always applied to the table (i.e. prefixed in front of
   * aaSorting).
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   *  @type array
   *  @default []
   */
  "aaSortingFixed": [],
  /**
   * Classes to use for the striping of a table.
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   *  @type array
   *  @default []
   */
  "asStripeClasses": null,
  /**
   * If restoring a table - we should restore its striping classes as well
   *  @type array
   *  @default []
   */
  "asDestroyStripes": [],
  /**
   * If restoring a table - we should restore its width
   *  @type int
   *  @default 0
   */
  "sDestroyWidth": 0,
  /**
   * Callback functions array for every time a row is inserted (i.e. on a draw).
   *  @type array
   *  @default []
   */
  "aoRowCallback": [],
  /**
   * Callback functions for the header on each draw.
   *  @type array
   *  @default []
   */
  "aoHeaderCallback": [],
  /**
   * Callback function for the footer on each draw.
   *  @type array
   *  @default []
   */
  "aoFooterCallback": [],
  /**
   * Array of callback functions for draw callback functions
   *  @type array
   *  @default []
   */
  "aoDrawCallback": [],
  /**
   * Array of callback functions for row created function
   *  @type array
   *  @default []
   */
  "aoRowCreatedCallback": [],
  /**
   * Callback functions for just before the table is redrawn. A return of
   * false will be used to cancel the draw.
   *  @type array
   *  @default []
   */
  "aoPreDrawCallback": [],
  /**
   * Callback functions for when the table has been initialised.
   *  @type array
   *  @default []
   */
  "aoInitComplete": [],
  /**
   * Callbacks for modifying the settings to be stored for state saving, prior to
   * saving state.
   *  @type array
   *  @default []
   */
  "aoStateSaveParams": [],
  /**
   * Callbacks for modifying the settings that have been stored for state saving
   * prior to using the stored values to restore the state.
   *  @type array
   *  @default []
   */
  "aoStateLoadParams": [],
  /**
   * Callbacks for operating on the settings object once the saved state has been
   * loaded
   *  @type array
   *  @default []
   */
  "aoStateLoaded": [],
  /**
   * Cache the table ID for quick access
   *  @type string
   *  @default <i>Empty string</i>
   */
  "sTableId": "",
  /**
   * The TABLE node for the main table
   *  @type node
   *  @default null
   */
  "nTable": null,
  /**
   * Permanent ref to the thead element
   *  @type node
   *  @default null
   */
  "nTHead": null,
  /**
   * Permanent ref to the tfoot element - if it exists
   *  @type node
   *  @default null
   */
  "nTFoot": null,
  /**
   * Permanent ref to the tbody element
   *  @type node
   *  @default null
   */
  "nTBody": null,
  /**
   * Cache the wrapper node (contains all DataTables controlled elements)
   *  @type node
   *  @default null
   */
  "nTableWrapper": null,
  /**
   * Indicate if when using server-side processing the loading of data
   * should be deferred until the second draw.
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   *  @type boolean
   *  @default false
   */
  "bDeferLoading": false,
  /**
   * Indicate if all required information has been read in
   *  @type boolean
   *  @default false
   */
  "bInitialised": false,
  /**
   * Information about open rows. Each object in the array has the parameters
   * 'nTr' and 'nParent'
   *  @type array
   *  @default []
   */
  "aoOpenRows": [],
  /**
   * Dictate the positioning of DataTables' control elements - see
   * {@link DataTable.model.oInit.sDom}.
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   *  @type string
   *  @default null
   */
  "sDom": null,
  /**
   * Search delay (in mS)
   *  @type integer
   *  @default null
   */
  "searchDelay": null,
  /**
   * Which type of pagination should be used.
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   *  @type string
   *  @default two_button
   */
  "sPaginationType": "two_button",
  /**
   * The state duration (for `stateSave`) in seconds.
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   *  @type int
   *  @default 0
   */
  "iStateDuration": 0,
  /**
   * Array of callback functions for state saving. Each array element is an
   * object with the following parameters:
   *   <ul>
   *     <li>function:fn - function to call. Takes two parameters, oSettings
   *       and the JSON string to save that has been thus far created. Returns
   *       a JSON string to be inserted into a json object
   *       (i.e. '"param": [ 0, 1, 2]')</li>
   *     <li>string:sName - name of callback</li>
   *   </ul>
   *  @type array
   *  @default []
   */
  "aoStateSave": [],
  /**
   * Array of callback functions for state loading. Each array element is an
   * object with the following parameters:
   *   <ul>
   *     <li>function:fn - function to call. Takes two parameters, oSettings
   *       and the object stored. May return false to cancel state loading</li>
   *     <li>string:sName - name of callback</li>
   *   </ul>
   *  @type array
   *  @default []
   */
  "aoStateLoad": [],
  /**
   * State that was saved. Useful for back reference
   *  @type object
   *  @default null
   */
  "oSavedState": null,
  /**
   * State that was loaded. Useful for back reference
   *  @type object
   *  @default null
   */
  "oLoadedState": null,
  /**
   * Source url for AJAX data for the table.
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   *  @type string
   *  @default null
   */
  "sAjaxSource": null,
  /**
   * Property from a given object from which to read the table data from. This
   * can be an empty string (when not server-side processing), in which case
   * it is  assumed an an array is given directly.
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   *  @type string
   */
  "sAjaxDataProp": null,
  /**
   * The last jQuery XHR object that was used for server-side data gathering.
   * This can be used for working with the XHR information in one of the
   * callbacks
   *  @type object
   *  @default null
   */
  "jqXHR": null,
  /**
   * JSON returned from the server in the last Ajax request
   *  @type object
   *  @default undefined
   */
  "json": void 0,
  /**
   * Data submitted as part of the last Ajax request
   *  @type object
   *  @default undefined
   */
  "oAjaxData": void 0,
  /**
   * Function to get the server-side data.
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   *  @type function
   */
  "fnServerData": null,
  /**
   * Functions which are called prior to sending an Ajax request so extra
   * parameters can easily be sent to the server
   *  @type array
   *  @default []
   */
  "aoServerParams": [],
  /**
   * Send the XHR HTTP method - GET or POST (could be PUT or DELETE if
   * required).
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   *  @type string
   */
  "sServerMethod": null,
  /**
   * Format numbers for display.
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   *  @type function
   */
  "fnFormatNumber": null,
  /**
   * List of options that can be used for the user selectable length menu.
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   *  @type array
   *  @default []
   */
  "aLengthMenu": null,
  /**
   * Counter for the draws that the table does. Also used as a tracker for
   * server-side processing
   *  @type int
   *  @default 0
   */
  "iDraw": 0,
  /**
   * Indicate if a redraw is being done - useful for Ajax
   *  @type boolean
   *  @default false
   */
  "bDrawing": false,
  /**
   * Draw index (iDraw) of the last error when parsing the returned data
   *  @type int
   *  @default -1
   */
  "iDrawError": -1,
  /**
   * Paging display length
   *  @type int
   *  @default 10
   */
  "_iDisplayLength": 10,
  /**
   * Paging start point - aiDisplay index
   *  @type int
   *  @default 0
   */
  "_iDisplayStart": 0,
  /**
   * Server-side processing - number of records in the result set
   * (i.e. before filtering), Use fnRecordsTotal rather than
   * this property to get the value of the number of records, regardless of
   * the server-side processing setting.
   *  @type int
   *  @default 0
   *  @private
   */
  "_iRecordsTotal": 0,
  /**
   * Server-side processing - number of records in the current display set
   * (i.e. after filtering). Use fnRecordsDisplay rather than
   * this property to get the value of the number of records, regardless of
   * the server-side processing setting.
   *  @type boolean
   *  @default 0
   *  @private
   */
  "_iRecordsDisplay": 0,
  /**
   * The classes to use for the table
   *  @type object
   *  @default {}
   */
  "oClasses": {},
  /**
   * Flag attached to the settings object so you can check in the draw
   * callback if filtering has been done in the draw. Deprecated in favour of
   * events.
   *  @type boolean
   *  @default false
   *  @deprecated
   */
  "bFiltered": false,
  /**
   * Flag attached to the settings object so you can check in the draw
   * callback if sorting has been done in the draw. Deprecated in favour of
   * events.
   *  @type boolean
   *  @default false
   *  @deprecated
   */
  "bSorted": false,
  /**
   * Indicate that if multiple rows are in the header and there is more than
   * one unique cell per column, if the top one (true) or bottom one (false)
   * should be used for sorting / title by DataTables.
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   *  @type boolean
   */
  "bSortCellsTop": null,
  /**
   * Initialisation object that is used for the table
   *  @type object
   *  @default null
   */
  "oInit": null,
  /**
   * Destroy callback functions - for plug-ins to attach themselves to the
   * destroy so they can clean up markup and events.
   *  @type array
   *  @default []
   */
  "aoDestroyCallback": [],
  /**
   * Get the number of records in the current record set, before filtering
   *  @type function
   */
  "fnRecordsTotal": function() {
    return _fnDataSource(this) == "ssp" ? this._iRecordsTotal * 1 : this.aiDisplayMaster.length;
  },
  /**
   * Get the number of records in the current record set, after filtering
   *  @type function
   */
  "fnRecordsDisplay": function() {
    return _fnDataSource(this) == "ssp" ? this._iRecordsDisplay * 1 : this.aiDisplay.length;
  },
  /**
   * Get the display end point - aiDisplay index
   *  @type function
   */
  "fnDisplayEnd": function() {
    var len = this._iDisplayLength, start2 = this._iDisplayStart, calc = start2 + len, records = this.aiDisplay.length, features = this.oFeatures, paginate = features.bPaginate;
    if (features.bServerSide) {
      return paginate === false || len === -1 ? start2 + records : Math.min(start2 + len, this._iRecordsDisplay);
    } else {
      return !paginate || calc > records || len === -1 ? records : calc;
    }
  },
  /**
   * The DataTables object for this table
   *  @type object
   *  @default null
   */
  "oInstance": null,
  /**
   * Unique identifier for each instance of the DataTables object. If there
   * is an ID on the table node, then it takes that value, otherwise an
   * incrementing internal counter is used.
   *  @type string
   *  @default null
   */
  "sInstance": null,
  /**
   * tabindex attribute value that is added to DataTables control elements, allowing
   * keyboard navigation of the table and its controls.
   */
  "iTabIndex": 0,
  /**
   * DIV container for the footer scrolling table if scrolling
   */
  "nScrollHead": null,
  /**
   * DIV container for the footer scrolling table if scrolling
   */
  "nScrollFoot": null,
  /**
   * Last applied sort
   *  @type array
   *  @default []
   */
  "aLastSort": [],
  /**
   * Stored plug-in instances
   *  @type object
   *  @default {}
   */
  "oPlugins": {},
  /**
   * Function used to get a row's id from the row's data
   *  @type function
   *  @default null
   */
  "rowIdFn": null,
  /**
   * Data location where to store a row's id
   *  @type string
   *  @default null
   */
  "rowId": null
};
DataTable.ext = _ext = {
  /**
   * Buttons. For use with the Buttons extension for DataTables. This is
   * defined here so other extensions can define buttons regardless of load
   * order. It is _not_ used by DataTables core.
   *
   *  @type object
   *  @default {}
   */
  buttons: {},
  /**
   * Element class names
   *
   *  @type object
   *  @default {}
   */
  classes: {},
  /**
   * DataTables build type (expanded by the download builder)
   *
   *  @type string
   */
  builder: "-source-",
  /**
   * Error reporting.
   * 
   * How should DataTables report an error. Can take the value 'alert',
   * 'throw', 'none' or a function.
   *
   *  @type string|function
   *  @default alert
   */
  errMode: "alert",
  /**
   * Feature plug-ins.
   * 
   * This is an array of objects which describe the feature plug-ins that are
   * available to DataTables. These feature plug-ins are then available for
   * use through the `dom` initialisation option.
   * 
   * Each feature plug-in is described by an object which must have the
   * following properties:
   * 
   * * `fnInit` - function that is used to initialise the plug-in,
   * * `cFeature` - a character so the feature can be enabled by the `dom`
   *   instillation option. This is case sensitive.
   *
   * The `fnInit` function has the following input parameters:
   *
   * 1. `{object}` DataTables settings object: see
   *    {@link DataTable.models.oSettings}
   *
   * And the following return is expected:
   * 
   * * {node|null} The element which contains your feature. Note that the
   *   return may also be void if your plug-in does not require to inject any
   *   DOM elements into DataTables control (`dom`) - for example this might
   *   be useful when developing a plug-in which allows table control via
   *   keyboard entry
   *
   *  @type array
   *
   *  @example
   *    $.fn.dataTable.ext.features.push( {
   *      "fnInit": function( oSettings ) {
   *        return new TableTools( { "oDTSettings": oSettings } );
   *      },
   *      "cFeature": "T"
   *    } );
   */
  feature: [],
  /**
   * Row searching.
   * 
   * This method of searching is complimentary to the default type based
   * searching, and a lot more comprehensive as it allows you complete control
   * over the searching logic. Each element in this array is a function
   * (parameters described below) that is called for every row in the table,
   * and your logic decides if it should be included in the searching data set
   * or not.
   *
   * Searching functions have the following input parameters:
   *
   * 1. `{object}` DataTables settings object: see
   *    {@link DataTable.models.oSettings}
   * 2. `{array|object}` Data for the row to be processed (same as the
   *    original format that was passed in as the data source, or an array
   *    from a DOM data source
   * 3. `{int}` Row index ({@link DataTable.models.oSettings.aoData}), which
   *    can be useful to retrieve the `TR` element if you need DOM interaction.
   *
   * And the following return is expected:
   *
   * * {boolean} Include the row in the searched result set (true) or not
   *   (false)
   *
   * Note that as with the main search ability in DataTables, technically this
   * is "filtering", since it is subtractive. However, for consistency in
   * naming we call it searching here.
   *
   *  @type array
   *  @default []
   *
   *  @example
   *    // The following example shows custom search being applied to the
   *    // fourth column (i.e. the data[3] index) based on two input values
   *    // from the end-user, matching the data in a certain range.
   *    $.fn.dataTable.ext.search.push(
   *      function( settings, data, dataIndex ) {
   *        var min = document.getElementById('min').value * 1;
   *        var max = document.getElementById('max').value * 1;
   *        var version = data[3] == "-" ? 0 : data[3]*1;
   *
   *        if ( min == "" && max == "" ) {
   *          return true;
   *        }
   *        else if ( min == "" && version < max ) {
   *          return true;
   *        }
   *        else if ( min < version && "" == max ) {
   *          return true;
   *        }
   *        else if ( min < version && version < max ) {
   *          return true;
   *        }
   *        return false;
   *      }
   *    );
   */
  search: [],
  /**
   * Selector extensions
   *
   * The `selector` option can be used to extend the options available for the
   * selector modifier options (`selector-modifier` object data type) that
   * each of the three built in selector types offer (row, column and cell +
   * their plural counterparts). For example the Select extension uses this
   * mechanism to provide an option to select only rows, columns and cells
   * that have been marked as selected by the end user (`{selected: true}`),
   * which can be used in conjunction with the existing built in selector
   * options.
   *
   * Each property is an array to which functions can be pushed. The functions
   * take three attributes:
   *
   * * Settings object for the host table
   * * Options object (`selector-modifier` object type)
   * * Array of selected item indexes
   *
   * The return is an array of the resulting item indexes after the custom
   * selector has been applied.
   *
   *  @type object
   */
  selector: {
    cell: [],
    column: [],
    row: []
  },
  /**
   * Internal functions, exposed for used in plug-ins.
   * 
   * Please note that you should not need to use the internal methods for
   * anything other than a plug-in (and even then, try to avoid if possible).
   * The internal function may change between releases.
   *
   *  @type object
   *  @default {}
   */
  internal: {},
  /**
   * Legacy configuration options. Enable and disable legacy options that
   * are available in DataTables.
   *
   *  @type object
   */
  legacy: {
    /**
     * Enable / disable DataTables 1.9 compatible server-side processing
     * requests
     *
     *  @type boolean
     *  @default null
     */
    ajax: null
  },
  /**
   * Pagination plug-in methods.
   * 
   * Each entry in this object is a function and defines which buttons should
   * be shown by the pagination rendering method that is used for the table:
   * {@link DataTable.ext.renderer.pageButton}. The renderer addresses how the
   * buttons are displayed in the document, while the functions here tell it
   * what buttons to display. This is done by returning an array of button
   * descriptions (what each button will do).
   *
   * Pagination types (the four built in options and any additional plug-in
   * options defined here) can be used through the `paginationType`
   * initialisation parameter.
   *
   * The functions defined take two parameters:
   *
   * 1. `{int} page` The current page index
   * 2. `{int} pages` The number of pages in the table
   *
   * Each function is expected to return an array where each element of the
   * array can be one of:
   *
   * * `first` - Jump to first page when activated
   * * `last` - Jump to last page when activated
   * * `previous` - Show previous page when activated
   * * `next` - Show next page when activated
   * * `{int}` - Show page of the index given
   * * `{array}` - A nested array containing the above elements to add a
   *   containing 'DIV' element (might be useful for styling).
   *
   * Note that DataTables v1.9- used this object slightly differently whereby
   * an object with two functions would be defined for each plug-in. That
   * ability is still supported by DataTables 1.10+ to provide backwards
   * compatibility, but this option of use is now decremented and no longer
   * documented in DataTables 1.10+.
   *
   *  @type object
   *  @default {}
   *
   *  @example
   *    // Show previous, next and current page buttons only
   *    $.fn.dataTableExt.oPagination.current = function ( page, pages ) {
   *      return [ 'previous', page, 'next' ];
   *    };
   */
  pager: {},
  renderer: {
    pageButton: {},
    header: {}
  },
  /**
   * Ordering plug-ins - custom data source
   * 
   * The extension options for ordering of data available here is complimentary
   * to the default type based ordering that DataTables typically uses. It
   * allows much greater control over the the data that is being used to
   * order a column, but is necessarily therefore more complex.
   * 
   * This type of ordering is useful if you want to do ordering based on data
   * live from the DOM (for example the contents of an 'input' element) rather
   * than just the static string that DataTables knows of.
   * 
   * The way these plug-ins work is that you create an array of the values you
   * wish to be ordering for the column in question and then return that
   * array. The data in the array much be in the index order of the rows in
   * the table (not the currently ordering order!). Which order data gathering
   * function is run here depends on the `dt-init columns.orderDataType`
   * parameter that is used for the column (if any).
   *
   * The functions defined take two parameters:
   *
   * 1. `{object}` DataTables settings object: see
   *    {@link DataTable.models.oSettings}
   * 2. `{int}` Target column index
   *
   * Each function is expected to return an array:
   *
   * * `{array}` Data for the column to be ordering upon
   *
   *  @type array
   *
   *  @example
   *    // Ordering using `input` node values
   *    $.fn.dataTable.ext.order['dom-text'] = function  ( settings, col )
   *    {
   *      return this.api().column( col, {order:'index'} ).nodes().map( function ( td, i ) {
   *        return $('input', td).val();
   *      } );
   *    }
   */
  order: {},
  /**
   * Type based plug-ins.
   *
   * Each column in DataTables has a type assigned to it, either by automatic
   * detection or by direct assignment using the `type` option for the column.
   * The type of a column will effect how it is ordering and search (plug-ins
   * can also make use of the column type if required).
   *
   * @namespace
   */
  type: {
    /**
     * Type detection functions.
     *
     * The functions defined in this object are used to automatically detect
     * a column's type, making initialisation of DataTables super easy, even
     * when complex data is in the table.
     *
     * The functions defined take two parameters:
     *
        *  1. `{*}` Data from the column cell to be analysed
        *  2. `{settings}` DataTables settings object. This can be used to
        *     perform context specific type detection - for example detection
        *     based on language settings such as using a comma for a decimal
        *     place. Generally speaking the options from the settings will not
        *     be required
     *
     * Each function is expected to return:
     *
     * * `{string|null}` Data type detected, or null if unknown (and thus
     *   pass it on to the other type detection functions.
     *
     *  @type array
     *
     *  @example
     *    // Currency type detection plug-in:
     *    $.fn.dataTable.ext.type.detect.push(
     *      function ( data, settings ) {
     *        // Check the numeric part
     *        if ( ! data.substring(1).match(/[0-9]/) ) {
     *          return null;
     *        }
     *
     *        // Check prefixed by currency
     *        if ( data.charAt(0) == '$' || data.charAt(0) == '&pound;' ) {
     *          return 'currency';
     *        }
     *        return null;
     *      }
     *    );
     */
    detect: [],
    /**
     * Type based search formatting.
     *
     * The type based searching functions can be used to pre-format the
     * data to be search on. For example, it can be used to strip HTML
     * tags or to de-format telephone numbers for numeric only searching.
     *
     * Note that is a search is not defined for a column of a given type,
     * no search formatting will be performed.
     * 
     * Pre-processing of searching data plug-ins - When you assign the sType
     * for a column (or have it automatically detected for you by DataTables
     * or a type detection plug-in), you will typically be using this for
     * custom sorting, but it can also be used to provide custom searching
     * by allowing you to pre-processing the data and returning the data in
     * the format that should be searched upon. This is done by adding
     * functions this object with a parameter name which matches the sType
     * for that target column. This is the corollary of <i>afnSortData</i>
     * for searching data.
     *
     * The functions defined take a single parameter:
     *
        *  1. `{*}` Data from the column cell to be prepared for searching
     *
     * Each function is expected to return:
     *
     * * `{string|null}` Formatted string that will be used for the searching.
     *
     *  @type object
     *  @default {}
     *
     *  @example
     *    $.fn.dataTable.ext.type.search['title-numeric'] = function ( d ) {
     *      return d.replace(/\n/g," ").replace( /<.*?>/g, "" );
     *    }
     */
    search: {},
    /**
     * Type based ordering.
     *
     * The column type tells DataTables what ordering to apply to the table
     * when a column is sorted upon. The order for each type that is defined,
     * is defined by the functions available in this object.
     *
     * Each ordering option can be described by three properties added to
     * this object:
     *
     * * `{type}-pre` - Pre-formatting function
     * * `{type}-asc` - Ascending order function
     * * `{type}-desc` - Descending order function
     *
     * All three can be used together, only `{type}-pre` or only
     * `{type}-asc` and `{type}-desc` together. It is generally recommended
     * that only `{type}-pre` is used, as this provides the optimal
     * implementation in terms of speed, although the others are provided
     * for compatibility with existing Javascript sort functions.
     *
     * `{type}-pre`: Functions defined take a single parameter:
     *
        *  1. `{*}` Data from the column cell to be prepared for ordering
     *
     * And return:
     *
     * * `{*}` Data to be sorted upon
     *
     * `{type}-asc` and `{type}-desc`: Functions are typical Javascript sort
     * functions, taking two parameters:
     *
        *  1. `{*}` Data to compare to the second parameter
        *  2. `{*}` Data to compare to the first parameter
     *
     * And returning:
     *
     * * `{*}` Ordering match: <0 if first parameter should be sorted lower
     *   than the second parameter, ===0 if the two parameters are equal and
     *   >0 if the first parameter should be sorted height than the second
     *   parameter.
     * 
     *  @type object
     *  @default {}
     *
     *  @example
     *    // Numeric ordering of formatted numbers with a pre-formatter
     *    $.extend( $.fn.dataTable.ext.type.order, {
     *      "string-pre": function(x) {
     *        a = (a === "-" || a === "") ? 0 : a.replace( /[^\d\-\.]/g, "" );
     *        return parseFloat( a );
     *      }
     *    } );
     *
     *  @example
     *    // Case-sensitive string ordering, with no pre-formatting method
     *    $.extend( $.fn.dataTable.ext.order, {
     *      "string-case-asc": function(x,y) {
     *        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
     *      },
     *      "string-case-desc": function(x,y) {
     *        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
     *      }
     *    } );
     */
    order: {}
  },
  /**
   * Unique DataTables instance counter
   *
   * @type int
   * @private
   */
  _unique: 0,
  //
  // Depreciated
  // The following properties are retained for backwards compatibility only.
  // The should not be used in new projects and will be removed in a future
  // version
  //
  /**
   * Version check function.
   *  @type function
   *  @depreciated Since 1.10
   */
  fnVersionCheck: DataTable.fnVersionCheck,
  /**
   * Index for what 'this' index API functions should use
   *  @type int
   *  @deprecated Since v1.10
   */
  iApiIndex: 0,
  /**
   * jQuery UI class container
   *  @type object
   *  @deprecated Since v1.10
   */
  oJUIClasses: {},
  /**
   * Software version
   *  @type string
   *  @deprecated Since v1.10
   */
  sVersion: DataTable.version
};
$2.extend(_ext, {
  afnFiltering: _ext.search,
  aTypes: _ext.type.detect,
  ofnSearch: _ext.type.search,
  oSort: _ext.type.order,
  afnSortData: _ext.order,
  aoFeatures: _ext.feature,
  oApi: _ext.internal,
  oStdClasses: _ext.classes,
  oPagination: _ext.pager
});
$2.extend(DataTable.ext.classes, {
  "sTable": "dataTable",
  "sNoFooter": "no-footer",
  /* Paging buttons */
  "sPageButton": "paginate_button",
  "sPageButtonActive": "current",
  "sPageButtonDisabled": "disabled",
  /* Striping classes */
  "sStripeOdd": "odd",
  "sStripeEven": "even",
  /* Empty row */
  "sRowEmpty": "dataTables_empty",
  /* Features */
  "sWrapper": "dataTables_wrapper",
  "sFilter": "dataTables_filter",
  "sInfo": "dataTables_info",
  "sPaging": "dataTables_paginate paging_",
  /* Note that the type is postfixed */
  "sLength": "dataTables_length",
  "sProcessing": "dataTables_processing",
  /* Sorting */
  "sSortAsc": "sorting_asc",
  "sSortDesc": "sorting_desc",
  "sSortable": "sorting",
  /* Sortable in both directions */
  "sSortableAsc": "sorting_desc_disabled",
  "sSortableDesc": "sorting_asc_disabled",
  "sSortableNone": "sorting_disabled",
  "sSortColumn": "sorting_",
  /* Note that an int is postfixed for the sorting order */
  /* Filtering */
  "sFilterInput": "",
  /* Page length */
  "sLengthSelect": "",
  /* Scrolling */
  "sScrollWrapper": "dataTables_scroll",
  "sScrollHead": "dataTables_scrollHead",
  "sScrollHeadInner": "dataTables_scrollHeadInner",
  "sScrollBody": "dataTables_scrollBody",
  "sScrollFoot": "dataTables_scrollFoot",
  "sScrollFootInner": "dataTables_scrollFootInner",
  /* Misc */
  "sHeaderTH": "",
  "sFooterTH": "",
  // Deprecated
  "sSortJUIAsc": "",
  "sSortJUIDesc": "",
  "sSortJUI": "",
  "sSortJUIAscAllowed": "",
  "sSortJUIDescAllowed": "",
  "sSortJUIWrapper": "",
  "sSortIcon": "",
  "sJUIHeader": "",
  "sJUIFooter": ""
});
var extPagination = DataTable.ext.pager;
function _numbers(page, pages) {
  var numbers = [], buttons = extPagination.numbers_length, half = Math.floor(buttons / 2), i2 = 1;
  if (pages <= buttons) {
    numbers = _range(0, pages);
  } else if (page <= half) {
    numbers = _range(0, buttons - 2);
    numbers.push("ellipsis");
    numbers.push(pages - 1);
  } else if (page >= pages - 1 - half) {
    numbers = _range(pages - (buttons - 2), pages);
    numbers.splice(0, 0, "ellipsis");
    numbers.splice(0, 0, 0);
  } else {
    numbers = _range(page - half + 2, page + half - 1);
    numbers.push("ellipsis");
    numbers.push(pages - 1);
    numbers.splice(0, 0, "ellipsis");
    numbers.splice(0, 0, 0);
  }
  numbers.DT_el = "span";
  return numbers;
}
$2.extend(extPagination, {
  simple: function(page, pages) {
    return ["previous", "next"];
  },
  full: function(page, pages) {
    return ["first", "previous", "next", "last"];
  },
  numbers: function(page, pages) {
    return [_numbers(page, pages)];
  },
  simple_numbers: function(page, pages) {
    return ["previous", _numbers(page, pages), "next"];
  },
  full_numbers: function(page, pages) {
    return ["first", "previous", _numbers(page, pages), "next", "last"];
  },
  first_last_numbers: function(page, pages) {
    return ["first", _numbers(page, pages), "last"];
  },
  // For testing and plug-ins to use
  _numbers,
  // Number of number buttons (including ellipsis) to show. _Must be odd!_
  numbers_length: 7
});
$2.extend(true, DataTable.ext.renderer, {
  pageButton: {
    _: function(settings, host, idx, buttons, page, pages) {
      var classes = settings.oClasses;
      var lang = settings.oLanguage.oPaginate;
      var aria = settings.oLanguage.oAria.paginate || {};
      var btnDisplay, btnClass;
      var attach = function(container, buttons2) {
        var i2, ien, node, button, tabIndex;
        var disabledClass = classes.sPageButtonDisabled;
        var clickHandler = function(e) {
          _fnPageChange(settings, e.data.action, true);
        };
        for (i2 = 0, ien = buttons2.length; i2 < ien; i2++) {
          button = buttons2[i2];
          if (Array.isArray(button)) {
            var inner = $2("<" + (button.DT_el || "div") + "/>").appendTo(container);
            attach(inner, button);
          } else {
            btnDisplay = null;
            btnClass = button;
            tabIndex = settings.iTabIndex;
            switch (button) {
              case "ellipsis":
                container.append('<span class="ellipsis">&#x2026;</span>');
                break;
              case "first":
                btnDisplay = lang.sFirst;
                if (page === 0) {
                  tabIndex = -1;
                  btnClass += " " + disabledClass;
                }
                break;
              case "previous":
                btnDisplay = lang.sPrevious;
                if (page === 0) {
                  tabIndex = -1;
                  btnClass += " " + disabledClass;
                }
                break;
              case "next":
                btnDisplay = lang.sNext;
                if (pages === 0 || page === pages - 1) {
                  tabIndex = -1;
                  btnClass += " " + disabledClass;
                }
                break;
              case "last":
                btnDisplay = lang.sLast;
                if (pages === 0 || page === pages - 1) {
                  tabIndex = -1;
                  btnClass += " " + disabledClass;
                }
                break;
              default:
                btnDisplay = settings.fnFormatNumber(button + 1);
                btnClass = page === button ? classes.sPageButtonActive : "";
                break;
            }
            if (btnDisplay !== null) {
              var tag = settings.oInit.pagingTag || "a";
              var disabled = btnClass.indexOf(disabledClass) !== -1;
              node = $2("<" + tag + ">", {
                "class": classes.sPageButton + " " + btnClass,
                "aria-controls": settings.sTableId,
                "aria-disabled": disabled ? "true" : null,
                "aria-label": aria[button],
                "aria-role": "link",
                "aria-current": btnClass === classes.sPageButtonActive ? "page" : null,
                "data-dt-idx": button,
                "tabindex": tabIndex,
                "id": idx === 0 && typeof button === "string" ? settings.sTableId + "_" + button : null
              }).html(btnDisplay).appendTo(container);
              _fnBindAction(
                node,
                { action: button },
                clickHandler
              );
            }
          }
        }
      };
      var activeEl;
      try {
        activeEl = $2(host).find(document.activeElement).data("dt-idx");
      } catch (e) {
      }
      attach($2(host).empty(), buttons);
      if (activeEl !== void 0) {
        $2(host).find("[data-dt-idx=" + activeEl + "]").trigger("focus");
      }
    }
  }
});
$2.extend(DataTable.ext.type.detect, [
  // Plain numbers - first since V8 detects some plain numbers as dates
  // e.g. Date.parse('55') (but not all, e.g. Date.parse('22')...).
  function(d, settings) {
    var decimal = settings.oLanguage.sDecimal;
    return _isNumber(d, decimal) ? "num" + decimal : null;
  },
  // Dates (only those recognised by the browser's Date.parse)
  function(d, settings) {
    if (d && !(d instanceof Date) && !_re_date.test(d)) {
      return null;
    }
    var parsed = Date.parse(d);
    return parsed !== null && !isNaN(parsed) || _empty(d) ? "date" : null;
  },
  // Formatted numbers
  function(d, settings) {
    var decimal = settings.oLanguage.sDecimal;
    return _isNumber(d, decimal, true) ? "num-fmt" + decimal : null;
  },
  // HTML numeric
  function(d, settings) {
    var decimal = settings.oLanguage.sDecimal;
    return _htmlNumeric(d, decimal) ? "html-num" + decimal : null;
  },
  // HTML numeric, formatted
  function(d, settings) {
    var decimal = settings.oLanguage.sDecimal;
    return _htmlNumeric(d, decimal, true) ? "html-num-fmt" + decimal : null;
  },
  // HTML (this is strict checking - there must be html)
  function(d, settings) {
    return _empty(d) || typeof d === "string" && d.indexOf("<") !== -1 ? "html" : null;
  }
]);
$2.extend(DataTable.ext.type.search, {
  html: function(data) {
    return _empty(data) ? data : typeof data === "string" ? data.replace(_re_new_lines, " ").replace(_re_html, "") : "";
  },
  string: function(data) {
    return _empty(data) ? data : typeof data === "string" ? data.replace(_re_new_lines, " ") : data;
  }
});
var __numericReplace = function(d, decimalPlace, re1, re2) {
  if (d !== 0 && (!d || d === "-")) {
    return -Infinity;
  }
  let type = typeof d;
  if (type === "number" || type === "bigint") {
    return d;
  }
  if (decimalPlace) {
    d = _numToDecimal(d, decimalPlace);
  }
  if (d.replace) {
    if (re1) {
      d = d.replace(re1, "");
    }
    if (re2) {
      d = d.replace(re2, "");
    }
  }
  return d * 1;
};
function _addNumericSort(decimalPlace) {
  $2.each(
    {
      // Plain numbers
      "num": function(d) {
        return __numericReplace(d, decimalPlace);
      },
      // Formatted numbers
      "num-fmt": function(d) {
        return __numericReplace(d, decimalPlace, _re_formatted_numeric);
      },
      // HTML numeric
      "html-num": function(d) {
        return __numericReplace(d, decimalPlace, _re_html);
      },
      // HTML numeric, formatted
      "html-num-fmt": function(d) {
        return __numericReplace(d, decimalPlace, _re_html, _re_formatted_numeric);
      }
    },
    function(key, fn2) {
      _ext.type.order[key + decimalPlace + "-pre"] = fn2;
      if (key.match(/^html\-/)) {
        _ext.type.search[key + decimalPlace] = _ext.type.search.html;
      }
    }
  );
}
$2.extend(_ext.type.order, {
  // Dates
  "date-pre": function(d) {
    var ts = Date.parse(d);
    return isNaN(ts) ? -Infinity : ts;
  },
  // html
  "html-pre": function(a) {
    return _empty(a) ? "" : a.replace ? a.replace(/<.*?>/g, "").toLowerCase() : a + "";
  },
  // string
  "string-pre": function(a) {
    return _empty(a) ? "" : typeof a === "string" ? a.toLowerCase() : !a.toString ? "" : a.toString();
  },
  // string-asc and -desc are retained only for compatibility with the old
  // sort methods
  "string-asc": function(x, y) {
    return x < y ? -1 : x > y ? 1 : 0;
  },
  "string-desc": function(x, y) {
    return x < y ? 1 : x > y ? -1 : 0;
  }
});
_addNumericSort("");
$2.extend(true, DataTable.ext.renderer, {
  header: {
    _: function(settings, cell, column, classes) {
      $2(settings.nTable).on("order.dt.DT", function(e, ctx, sorting, columns) {
        if (settings !== ctx) {
          return;
        }
        var colIdx = column.idx;
        cell.removeClass(
          classes.sSortAsc + " " + classes.sSortDesc
        ).addClass(
          columns[colIdx] == "asc" ? classes.sSortAsc : columns[colIdx] == "desc" ? classes.sSortDesc : column.sSortingClass
        );
      });
    },
    jqueryui: function(settings, cell, column, classes) {
      $2("<div/>").addClass(classes.sSortJUIWrapper).append(cell.contents()).append(
        $2("<span/>").addClass(classes.sSortIcon + " " + column.sSortingClassJUI)
      ).appendTo(cell);
      $2(settings.nTable).on("order.dt.DT", function(e, ctx, sorting, columns) {
        if (settings !== ctx) {
          return;
        }
        var colIdx = column.idx;
        cell.removeClass(classes.sSortAsc + " " + classes.sSortDesc).addClass(
          columns[colIdx] == "asc" ? classes.sSortAsc : columns[colIdx] == "desc" ? classes.sSortDesc : column.sSortingClass
        );
        cell.find("span." + classes.sSortIcon).removeClass(
          classes.sSortJUIAsc + " " + classes.sSortJUIDesc + " " + classes.sSortJUI + " " + classes.sSortJUIAscAllowed + " " + classes.sSortJUIDescAllowed
        ).addClass(
          columns[colIdx] == "asc" ? classes.sSortJUIAsc : columns[colIdx] == "desc" ? classes.sSortJUIDesc : column.sSortingClassJUI
        );
      });
    }
  }
});
var __htmlEscapeEntities = function(d) {
  if (Array.isArray(d)) {
    d = d.join(",");
  }
  return typeof d === "string" ? d.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : d;
};
function __mld(dt, momentFn, luxonFn, dateFn, arg1) {
  if (window.moment) {
    return dt[momentFn](arg1);
  } else if (window.luxon) {
    return dt[luxonFn](arg1);
  }
  return dateFn ? dt[dateFn](arg1) : dt;
}
var __mlWarning = false;
function __mldObj(d, format2, locale) {
  var dt;
  if (window.moment) {
    dt = window.moment.utc(d, format2, locale, true);
    if (!dt.isValid()) {
      return null;
    }
  } else if (window.luxon) {
    dt = format2 && typeof d === "string" ? window.luxon.DateTime.fromFormat(d, format2) : window.luxon.DateTime.fromISO(d);
    if (!dt.isValid) {
      return null;
    }
    dt.setLocale(locale);
  } else if (!format2) {
    dt = new Date(d);
  } else {
    if (!__mlWarning) {
      alert("DataTables warning: Formatted date without Moment.js or Luxon - https://datatables.net/tn/17");
    }
    __mlWarning = true;
  }
  return dt;
}
function __mlHelper(localeString) {
  return function(from, to, locale, def) {
    if (arguments.length === 0) {
      locale = "en";
      to = null;
      from = null;
    } else if (arguments.length === 1) {
      locale = "en";
      to = from;
      from = null;
    } else if (arguments.length === 2) {
      locale = to;
      to = from;
      from = null;
    }
    var typeName = "datetime-" + to;
    if (!DataTable.ext.type.order[typeName]) {
      DataTable.ext.type.detect.unshift(function(d) {
        return d === typeName ? typeName : false;
      });
      DataTable.ext.type.order[typeName + "-asc"] = function(a, b) {
        var x = a.valueOf();
        var y = b.valueOf();
        return x === y ? 0 : x < y ? -1 : 1;
      };
      DataTable.ext.type.order[typeName + "-desc"] = function(a, b) {
        var x = a.valueOf();
        var y = b.valueOf();
        return x === y ? 0 : x > y ? -1 : 1;
      };
    }
    return function(d, type) {
      if (d === null || d === void 0) {
        if (def === "--now") {
          var local = /* @__PURE__ */ new Date();
          d = new Date(Date.UTC(
            local.getFullYear(),
            local.getMonth(),
            local.getDate(),
            local.getHours(),
            local.getMinutes(),
            local.getSeconds()
          ));
        } else {
          d = "";
        }
      }
      if (type === "type") {
        return typeName;
      }
      if (d === "") {
        return type !== "sort" ? "" : __mldObj("0000-01-01 00:00:00", null, locale);
      }
      if (to !== null && from === to && type !== "sort" && type !== "type" && !(d instanceof Date)) {
        return d;
      }
      var dt = __mldObj(d, from, locale);
      if (dt === null) {
        return d;
      }
      if (type === "sort") {
        return dt;
      }
      var formatted = to === null ? __mld(dt, "toDate", "toJSDate", "")[localeString]() : __mld(dt, "format", "toFormat", "toISOString", to);
      return type === "display" ? __htmlEscapeEntities(formatted) : formatted;
    };
  };
}
var __thousands = ",";
var __decimal = ".";
if (Intl) {
  try {
    num = new Intl.NumberFormat().formatToParts(100000.1);
    for (i2 = 0; i2 < num.length; i2++) {
      if (num[i2].type === "group") {
        __thousands = num[i2].value;
      } else if (num[i2].type === "decimal") {
        __decimal = num[i2].value;
      }
    }
  } catch (e) {
  }
}
var num;
var i2;
DataTable.datetime = function(format2, locale) {
  var typeName = "datetime-detect-" + format2;
  if (!locale) {
    locale = "en";
  }
  if (!DataTable.ext.type.order[typeName]) {
    DataTable.ext.type.detect.unshift(function(d) {
      var dt = __mldObj(d, format2, locale);
      return d === "" || dt ? typeName : false;
    });
    DataTable.ext.type.order[typeName + "-pre"] = function(d) {
      return __mldObj(d, format2, locale) || 0;
    };
  }
};
DataTable.render = {
  date: __mlHelper("toLocaleDateString"),
  datetime: __mlHelper("toLocaleString"),
  time: __mlHelper("toLocaleTimeString"),
  number: function(thousands, decimal, precision, prefix, postfix) {
    if (thousands === null || thousands === void 0) {
      thousands = __thousands;
    }
    if (decimal === null || decimal === void 0) {
      decimal = __decimal;
    }
    return {
      display: function(d) {
        if (typeof d !== "number" && typeof d !== "string") {
          return d;
        }
        if (d === "" || d === null) {
          return d;
        }
        var negative = d < 0 ? "-" : "";
        var flo = parseFloat(d);
        if (isNaN(flo)) {
          return __htmlEscapeEntities(d);
        }
        flo = flo.toFixed(precision);
        d = Math.abs(flo);
        var intPart = parseInt(d, 10);
        var floatPart = precision ? decimal + (d - intPart).toFixed(precision).substring(2) : "";
        if (intPart === 0 && parseFloat(floatPart) === 0) {
          negative = "";
        }
        return negative + (prefix || "") + intPart.toString().replace(
          /\B(?=(\d{3})+(?!\d))/g,
          thousands
        ) + floatPart + (postfix || "");
      }
    };
  },
  text: function() {
    return {
      display: __htmlEscapeEntities,
      filter: __htmlEscapeEntities
    };
  }
};
function _fnExternApiFunc(fn2) {
  return function() {
    var args = [_fnSettingsFromNode(this[DataTable.ext.iApiIndex])].concat(
      Array.prototype.slice.call(arguments)
    );
    return DataTable.ext.internal[fn2].apply(this, args);
  };
}
$2.extend(DataTable.ext.internal, {
  _fnExternApiFunc,
  _fnBuildAjax,
  _fnAjaxUpdate,
  _fnAjaxParameters,
  _fnAjaxUpdateDraw,
  _fnAjaxDataSrc,
  _fnAddColumn,
  _fnColumnOptions,
  _fnAdjustColumnSizing,
  _fnVisibleToColumnIndex,
  _fnColumnIndexToVisible,
  _fnVisbleColumns,
  _fnGetColumns,
  _fnColumnTypes,
  _fnApplyColumnDefs,
  _fnHungarianMap,
  _fnCamelToHungarian,
  _fnLanguageCompat,
  _fnBrowserDetect,
  _fnAddData,
  _fnAddTr,
  _fnNodeToDataIndex,
  _fnNodeToColumnIndex,
  _fnGetCellData,
  _fnSetCellData,
  _fnSplitObjNotation,
  _fnGetObjectDataFn,
  _fnSetObjectDataFn,
  _fnGetDataMaster,
  _fnClearTable,
  _fnDeleteIndex,
  _fnInvalidate,
  _fnGetRowElements,
  _fnCreateTr,
  _fnBuildHead,
  _fnDrawHead,
  _fnDraw,
  _fnReDraw,
  _fnAddOptionsHtml,
  _fnDetectHeader,
  _fnGetUniqueThs,
  _fnFeatureHtmlFilter,
  _fnFilterComplete,
  _fnFilterCustom,
  _fnFilterColumn,
  _fnFilter,
  _fnFilterCreateSearch,
  _fnEscapeRegex,
  _fnFilterData,
  _fnFeatureHtmlInfo,
  _fnUpdateInfo,
  _fnInfoMacros,
  _fnInitialise,
  _fnInitComplete,
  _fnLengthChange,
  _fnFeatureHtmlLength,
  _fnFeatureHtmlPaginate,
  _fnPageChange,
  _fnFeatureHtmlProcessing,
  _fnProcessingDisplay,
  _fnFeatureHtmlTable,
  _fnScrollDraw,
  _fnApplyToChildren,
  _fnCalculateColumnWidths,
  _fnThrottle,
  _fnConvertToWidth,
  _fnGetWidestNode,
  _fnGetMaxLenString,
  _fnStringToCss,
  _fnSortFlatten,
  _fnSort,
  _fnSortAria,
  _fnSortListener,
  _fnSortAttachListener,
  _fnSortingClasses,
  _fnSortData,
  _fnSaveState,
  _fnLoadState,
  _fnImplementState,
  _fnSettingsFromNode,
  _fnLog,
  _fnMap,
  _fnBindAction,
  _fnCallbackReg,
  _fnCallbackFire,
  _fnLengthOverflow,
  _fnRenderer,
  _fnDataSource,
  _fnRowAttributes,
  _fnExtend,
  _fnCalculateEnd: function() {
  }
  // Used by a lot of plug-ins, but redundant
  // in 1.10, so this dead-end function is
  // added to prevent errors
});
$2.fn.dataTable = DataTable;
DataTable.$ = $2;
$2.fn.dataTableSettings = DataTable.settings;
$2.fn.dataTableExt = DataTable.ext;
$2.fn.DataTable = function(opts) {
  return $2(this).dataTable(opts).api();
};
$2.each(DataTable, function(prop, val) {
  $2.fn.DataTable[prop] = val;
});
var jquery_dataTables_default = DataTable;

// node_modules/datatables.net-bs5/js/dataTables.bootstrap5.mjs
import_jquery2.default.extend(true, jquery_dataTables_default.defaults, {
  dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row dt-row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
  renderer: "bootstrap"
});
import_jquery2.default.extend(jquery_dataTables_default.ext.classes, {
  sWrapper: "dataTables_wrapper dt-bootstrap5",
  sFilterInput: "form-control form-control-sm",
  sLengthSelect: "form-select form-select-sm",
  sProcessing: "dataTables_processing card",
  sPageButton: "paginate_button page-item"
});
jquery_dataTables_default.ext.renderer.pageButton.bootstrap = function(settings, host, idx, buttons, page, pages) {
  var api = new jquery_dataTables_default.Api(settings);
  var classes = settings.oClasses;
  var lang = settings.oLanguage.oPaginate;
  var aria = settings.oLanguage.oAria.paginate || {};
  var btnDisplay, btnClass;
  var attach = function(container, buttons2) {
    var i2, ien, node, button;
    var clickHandler = function(e) {
      e.preventDefault();
      if (!(0, import_jquery2.default)(e.currentTarget).hasClass("disabled") && api.page() != e.data.action) {
        api.page(e.data.action).draw("page");
      }
    };
    for (i2 = 0, ien = buttons2.length; i2 < ien; i2++) {
      button = buttons2[i2];
      if (Array.isArray(button)) {
        attach(container, button);
      } else {
        btnDisplay = "";
        btnClass = "";
        switch (button) {
          case "ellipsis":
            btnDisplay = "&#x2026;";
            btnClass = "disabled";
            break;
          case "first":
            btnDisplay = lang.sFirst;
            btnClass = button + (page > 0 ? "" : " disabled");
            break;
          case "previous":
            btnDisplay = lang.sPrevious;
            btnClass = button + (page > 0 ? "" : " disabled");
            break;
          case "next":
            btnDisplay = lang.sNext;
            btnClass = button + (page < pages - 1 ? "" : " disabled");
            break;
          case "last":
            btnDisplay = lang.sLast;
            btnClass = button + (page < pages - 1 ? "" : " disabled");
            break;
          default:
            btnDisplay = button + 1;
            btnClass = page === button ? "active" : "";
            break;
        }
        if (btnDisplay) {
          var disabled = btnClass.indexOf("disabled") !== -1;
          node = (0, import_jquery2.default)("<li>", {
            "class": classes.sPageButton + " " + btnClass,
            "id": idx === 0 && typeof button === "string" ? settings.sTableId + "_" + button : null
          }).append(
            (0, import_jquery2.default)("<a>", {
              "href": disabled ? null : "#",
              "aria-controls": settings.sTableId,
              "aria-disabled": disabled ? "true" : null,
              "aria-label": aria[button],
              "aria-role": "link",
              "aria-current": btnClass === "active" ? "page" : null,
              "data-dt-idx": button,
              "tabindex": settings.iTabIndex,
              "class": "page-link"
            }).html(btnDisplay)
          ).appendTo(container);
          settings.oApi._fnBindAction(
            node,
            { action: button },
            clickHandler
          );
        }
      }
    }
  };
  var hostEl = (0, import_jquery2.default)(host);
  var activeEl;
  try {
    activeEl = hostEl.find(document.activeElement).data("dt-idx");
  } catch (e) {
  }
  var paginationEl = hostEl.children("ul.pagination");
  if (paginationEl.length) {
    paginationEl.empty();
  } else {
    paginationEl = hostEl.html("<ul/>").children("ul").addClass("pagination");
  }
  attach(
    paginationEl,
    buttons
  );
  if (activeEl !== void 0) {
    hostEl.find("[data-dt-idx=" + activeEl + "]").trigger("focus");
  }
};
var dataTables_bootstrap5_default = jquery_dataTables_default;

// node_modules/datatables.net-buttons-bs5/js/buttons.bootstrap5.mjs
var import_jquery4 = __toESM(require_jquery(), 1);

// node_modules/datatables.net-buttons/js/dataTables.buttons.mjs
var import_jquery3 = __toESM(require_jquery(), 1);
var _instCounter = 0;
var _buttonCounter = 0;
var _dtButtons = jquery_dataTables_default.ext.buttons;
function _fadeIn(el, duration, fn2) {
  if (import_jquery3.default.fn.animate) {
    el.stop().fadeIn(duration, fn2);
  } else {
    el.css("display", "block");
    if (fn2) {
      fn2.call(el);
    }
  }
}
function _fadeOut(el, duration, fn2) {
  if (import_jquery3.default.fn.animate) {
    el.stop().fadeOut(duration, fn2);
  } else {
    el.css("display", "none");
    if (fn2) {
      fn2.call(el);
    }
  }
}
var Buttons = function(dt, config) {
  if (!(this instanceof Buttons)) {
    return function(settings) {
      return new Buttons(settings, dt).container();
    };
  }
  if (typeof config === "undefined") {
    config = {};
  }
  if (config === true) {
    config = {};
  }
  if (Array.isArray(config)) {
    config = { buttons: config };
  }
  this.c = import_jquery3.default.extend(true, {}, Buttons.defaults, config);
  if (config.buttons) {
    this.c.buttons = config.buttons;
  }
  this.s = {
    dt: new jquery_dataTables_default.Api(dt),
    buttons: [],
    listenKeys: "",
    namespace: "dtb" + _instCounter++
  };
  this.dom = {
    container: (0, import_jquery3.default)("<" + this.c.dom.container.tag + "/>").addClass(this.c.dom.container.className)
  };
  this._constructor();
};
import_jquery3.default.extend(Buttons.prototype, {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * Public methods
   */
  /**
   * Get the action of a button
   * @param  {int|string} Button index
   * @return {function}
   */
  /**
  * Set the action of a button
  * @param  {node} node Button element
  * @param  {function} action Function to set
  * @return {Buttons} Self for chaining
  */
  action: function(node, action) {
    var button = this._nodeToButton(node);
    if (action === void 0) {
      return button.conf.action;
    }
    button.conf.action = action;
    return this;
  },
  /**
   * Add an active class to the button to make to look active or get current
   * active state.
   * @param  {node} node Button element
   * @param  {boolean} [flag] Enable / disable flag
   * @return {Buttons} Self for chaining or boolean for getter
   */
  active: function(node, flag) {
    var button = this._nodeToButton(node);
    var klass = this.c.dom.button.active;
    var jqNode = (0, import_jquery3.default)(button.node);
    if (flag === void 0) {
      return jqNode.hasClass(klass);
    }
    jqNode.toggleClass(klass, flag === void 0 ? true : flag);
    return this;
  },
  /**
   * Add a new button
   * @param {object} config Button configuration object, base string name or function
   * @param {int|string} [idx] Button index for where to insert the button
   * @param {boolean} [draw=true] Trigger a draw. Set a false when adding
   *   lots of buttons, until the last button.
   * @return {Buttons} Self for chaining
   */
  add: function(config, idx, draw) {
    var buttons = this.s.buttons;
    if (typeof idx === "string") {
      var split = idx.split("-");
      var base = this.s;
      for (var i2 = 0, ien = split.length - 1; i2 < ien; i2++) {
        base = base.buttons[split[i2] * 1];
      }
      buttons = base.buttons;
      idx = split[split.length - 1] * 1;
    }
    this._expandButton(
      buttons,
      config,
      config !== void 0 ? config.split : void 0,
      (config === void 0 || config.split === void 0 || config.split.length === 0) && base !== void 0,
      false,
      idx
    );
    if (draw === void 0 || draw === true) {
      this._draw();
    }
    return this;
  },
  /**
   * Clear buttons from a collection and then insert new buttons
   */
  collectionRebuild: function(node, newButtons) {
    var button = this._nodeToButton(node);
    if (newButtons !== void 0) {
      var i2;
      for (i2 = button.buttons.length - 1; i2 >= 0; i2--) {
        this.remove(button.buttons[i2].node);
      }
      if (button.conf.prefixButtons) {
        newButtons.unshift.apply(newButtons, button.conf.prefixButtons);
      }
      if (button.conf.postfixButtons) {
        newButtons.push.apply(newButtons, button.conf.postfixButtons);
      }
      for (i2 = 0; i2 < newButtons.length; i2++) {
        var newBtn = newButtons[i2];
        this._expandButton(
          button.buttons,
          newBtn,
          newBtn !== void 0 && newBtn.config !== void 0 && newBtn.config.split !== void 0,
          true,
          newBtn.parentConf !== void 0 && newBtn.parentConf.split !== void 0,
          null,
          newBtn.parentConf
        );
      }
    }
    this._draw(button.collection, button.buttons);
  },
  /**
   * Get the container node for the buttons
   * @return {jQuery} Buttons node
   */
  container: function() {
    return this.dom.container;
  },
  /**
   * Disable a button
   * @param  {node} node Button node
   * @return {Buttons} Self for chaining
   */
  disable: function(node) {
    var button = this._nodeToButton(node);
    (0, import_jquery3.default)(button.node).addClass(this.c.dom.button.disabled).prop("disabled", true);
    return this;
  },
  /**
   * Destroy the instance, cleaning up event handlers and removing DOM
   * elements
   * @return {Buttons} Self for chaining
   */
  destroy: function() {
    (0, import_jquery3.default)("body").off("keyup." + this.s.namespace);
    var buttons = this.s.buttons.slice();
    var i2, ien;
    for (i2 = 0, ien = buttons.length; i2 < ien; i2++) {
      this.remove(buttons[i2].node);
    }
    this.dom.container.remove();
    var buttonInsts = this.s.dt.settings()[0];
    for (i2 = 0, ien = buttonInsts.length; i2 < ien; i2++) {
      if (buttonInsts.inst === this) {
        buttonInsts.splice(i2, 1);
        break;
      }
    }
    return this;
  },
  /**
   * Enable / disable a button
   * @param  {node} node Button node
   * @param  {boolean} [flag=true] Enable / disable flag
   * @return {Buttons} Self for chaining
   */
  enable: function(node, flag) {
    if (flag === false) {
      return this.disable(node);
    }
    var button = this._nodeToButton(node);
    (0, import_jquery3.default)(button.node).removeClass(this.c.dom.button.disabled).prop("disabled", false);
    return this;
  },
  /**
   * Get a button's index
   * 
   * This is internally recursive
   * @param {element} node Button to get the index of
   * @return {string} Button index
   */
  index: function(node, nested, buttons) {
    if (!nested) {
      nested = "";
      buttons = this.s.buttons;
    }
    for (var i2 = 0, ien = buttons.length; i2 < ien; i2++) {
      var inner = buttons[i2].buttons;
      if (buttons[i2].node === node) {
        return nested + i2;
      }
      if (inner && inner.length) {
        var match = this.index(node, i2 + "-", inner);
        if (match !== null) {
          return match;
        }
      }
    }
    return null;
  },
  /**
   * Get the instance name for the button set selector
   * @return {string} Instance name
   */
  name: function() {
    return this.c.name;
  },
  /**
   * Get a button's node of the buttons container if no button is given
   * @param  {node} [node] Button node
   * @return {jQuery} Button element, or container
   */
  node: function(node) {
    if (!node) {
      return this.dom.container;
    }
    var button = this._nodeToButton(node);
    return (0, import_jquery3.default)(button.node);
  },
  /**
   * Set / get a processing class on the selected button
   * @param {element} node Triggering button node
   * @param  {boolean} flag true to add, false to remove, undefined to get
   * @return {boolean|Buttons} Getter value or this if a setter.
   */
  processing: function(node, flag) {
    var dt = this.s.dt;
    var button = this._nodeToButton(node);
    if (flag === void 0) {
      return (0, import_jquery3.default)(button.node).hasClass("processing");
    }
    (0, import_jquery3.default)(button.node).toggleClass("processing", flag);
    (0, import_jquery3.default)(dt.table().node()).triggerHandler("buttons-processing.dt", [
      flag,
      dt.button(node),
      dt,
      (0, import_jquery3.default)(node),
      button.conf
    ]);
    return this;
  },
  /**
   * Remove a button.
   * @param  {node} node Button node
   * @return {Buttons} Self for chaining
   */
  remove: function(node) {
    var button = this._nodeToButton(node);
    var host = this._nodeToHost(node);
    var dt = this.s.dt;
    if (button.buttons.length) {
      for (var i2 = button.buttons.length - 1; i2 >= 0; i2--) {
        this.remove(button.buttons[i2].node);
      }
    }
    button.conf.destroying = true;
    if (button.conf.destroy) {
      button.conf.destroy.call(dt.button(node), dt, (0, import_jquery3.default)(node), button.conf);
    }
    this._removeKey(button.conf);
    (0, import_jquery3.default)(button.node).remove();
    var idx = import_jquery3.default.inArray(button, host);
    host.splice(idx, 1);
    return this;
  },
  /**
   * Get the text for a button
   * @param  {int|string} node Button index
   * @return {string} Button text
   */
  /**
  * Set the text for a button
  * @param  {int|string|function} node Button index
  * @param  {string} label Text
  * @return {Buttons} Self for chaining
  */
  text: function(node, label) {
    var button = this._nodeToButton(node);
    var buttonLiner = this.c.dom.collection.buttonLiner;
    var linerTag = button.inCollection && buttonLiner && buttonLiner.tag ? buttonLiner.tag : this.c.dom.buttonLiner.tag;
    var dt = this.s.dt;
    var jqNode = (0, import_jquery3.default)(button.node);
    var text = function(opt) {
      return typeof opt === "function" ? opt(dt, jqNode, button.conf) : opt;
    };
    if (label === void 0) {
      return text(button.conf.text);
    }
    button.conf.text = label;
    if (linerTag) {
      jqNode.children(linerTag).eq(0).filter(":not(.dt-down-arrow)").html(text(label));
    } else {
      jqNode.html(text(label));
    }
    return this;
  },
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * Constructor
   */
  /**
   * Buttons constructor
   * @private
   */
  _constructor: function() {
    var that = this;
    var dt = this.s.dt;
    var dtSettings = dt.settings()[0];
    var buttons = this.c.buttons;
    if (!dtSettings._buttons) {
      dtSettings._buttons = [];
    }
    dtSettings._buttons.push({
      inst: this,
      name: this.c.name
    });
    for (var i2 = 0, ien = buttons.length; i2 < ien; i2++) {
      this.add(buttons[i2]);
    }
    dt.on("destroy", function(e, settings) {
      if (settings === dtSettings) {
        that.destroy();
      }
    });
    (0, import_jquery3.default)("body").on("keyup." + this.s.namespace, function(e) {
      if (!document.activeElement || document.activeElement === document.body) {
        var character = String.fromCharCode(e.keyCode).toLowerCase();
        if (that.s.listenKeys.toLowerCase().indexOf(character) !== -1) {
          that._keypress(character, e);
        }
      }
    });
  },
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * Private methods
   */
  /**
   * Add a new button to the key press listener
   * @param {object} conf Resolved button configuration object
   * @private
   */
  _addKey: function(conf) {
    if (conf.key) {
      this.s.listenKeys += import_jquery3.default.isPlainObject(conf.key) ? conf.key.key : conf.key;
    }
  },
  /**
   * Insert the buttons into the container. Call without parameters!
   * @param  {node} [container] Recursive only - Insert point
   * @param  {array} [buttons] Recursive only - Buttons array
   * @private
   */
  _draw: function(container, buttons) {
    if (!container) {
      container = this.dom.container;
      buttons = this.s.buttons;
    }
    container.children().detach();
    for (var i2 = 0, ien = buttons.length; i2 < ien; i2++) {
      container.append(buttons[i2].inserter);
      container.append(" ");
      if (buttons[i2].buttons && buttons[i2].buttons.length) {
        this._draw(buttons[i2].collection, buttons[i2].buttons);
      }
    }
  },
  /**
   * Create buttons from an array of buttons
   * @param  {array} attachTo Buttons array to attach to
   * @param  {object} button Button definition
   * @param  {boolean} inCollection true if the button is in a collection
   * @private
   */
  _expandButton: function(attachTo, button, split, inCollection, inSplit, attachPoint, parentConf) {
    var dt = this.s.dt;
    var buttonCounter = 0;
    var isSplit = false;
    var buttons = !Array.isArray(button) ? [button] : button;
    if (button === void 0) {
      buttons = !Array.isArray(split) ? [split] : split;
    }
    if (button !== void 0 && button.split !== void 0) {
      isSplit = true;
    }
    for (var i2 = 0, ien = buttons.length; i2 < ien; i2++) {
      var conf = this._resolveExtends(buttons[i2]);
      if (!conf) {
        continue;
      }
      if (conf.config !== void 0 && conf.config.split) {
        isSplit = true;
      } else {
        isSplit = false;
      }
      if (Array.isArray(conf)) {
        this._expandButton(attachTo, conf, built !== void 0 && built.conf !== void 0 ? built.conf.split : void 0, inCollection, parentConf !== void 0 && parentConf.split !== void 0, attachPoint, parentConf);
        continue;
      }
      var built = this._buildButton(conf, inCollection, conf.split !== void 0 || conf.config !== void 0 && conf.config.split !== void 0, inSplit);
      if (!built) {
        continue;
      }
      if (attachPoint !== void 0 && attachPoint !== null) {
        attachTo.splice(attachPoint, 0, built);
        attachPoint++;
      } else {
        attachTo.push(built);
      }
      if (built.conf.buttons || built.conf.split) {
        built.collection = (0, import_jquery3.default)("<" + (isSplit ? this.c.dom.splitCollection.tag : this.c.dom.collection.tag) + "/>");
        built.conf._collection = built.collection;
        if (built.conf.split) {
          for (var j = 0; j < built.conf.split.length; j++) {
            if (typeof built.conf.split[j] === "object") {
              built.conf.split[j].parent = parentConf;
              if (built.conf.split[j].collectionLayout === void 0) {
                built.conf.split[j].collectionLayout = built.conf.collectionLayout;
              }
              if (built.conf.split[j].dropup === void 0) {
                built.conf.split[j].dropup = built.conf.dropup;
              }
              if (built.conf.split[j].fade === void 0) {
                built.conf.split[j].fade = built.conf.fade;
              }
            }
          }
        } else {
          (0, import_jquery3.default)(built.node).append((0, import_jquery3.default)('<span class="dt-down-arrow">' + this.c.dom.splitDropdown.text + "</span>"));
        }
        this._expandButton(built.buttons, built.conf.buttons, built.conf.split, !isSplit, isSplit, attachPoint, built.conf);
      }
      built.conf.parent = parentConf;
      if (conf.init) {
        conf.init.call(dt.button(built.node), dt, (0, import_jquery3.default)(built.node), conf);
      }
      buttonCounter++;
    }
  },
  /**
   * Create an individual button
   * @param  {object} config            Resolved button configuration
   * @param  {boolean} inCollection `true` if a collection button
   * @return {jQuery} Created button node (jQuery)
   * @private
   */
  _buildButton: function(config, inCollection, isSplit, inSplit) {
    var buttonDom = this.c.dom.button;
    var linerDom = this.c.dom.buttonLiner;
    var collectionDom = this.c.dom.collection;
    var splitDom = this.c.dom.split;
    var splitCollectionDom = this.c.dom.splitCollection;
    var splitDropdownButton = this.c.dom.splitDropdownButton;
    var dt = this.s.dt;
    var text = function(opt) {
      return typeof opt === "function" ? opt(dt, button, config) : opt;
    };
    if (config.spacer) {
      var spacer = (0, import_jquery3.default)("<span></span>").addClass("dt-button-spacer " + config.style + " " + buttonDom.spacerClass).html(text(config.text));
      return {
        conf: config,
        node: spacer,
        inserter: spacer,
        buttons: [],
        inCollection,
        isSplit,
        inSplit,
        collection: null
      };
    }
    if (!isSplit && inSplit && splitCollectionDom) {
      buttonDom = splitDropdownButton;
    } else if (!isSplit && inCollection && collectionDom.button) {
      buttonDom = collectionDom.button;
    }
    if (!isSplit && inSplit && splitCollectionDom.buttonLiner) {
      linerDom = splitCollectionDom.buttonLiner;
    } else if (!isSplit && inCollection && collectionDom.buttonLiner) {
      linerDom = collectionDom.buttonLiner;
    }
    if (config.available && !config.available(dt, config) && !config.hasOwnProperty("html")) {
      return false;
    }
    var button;
    if (!config.hasOwnProperty("html")) {
      var action = function(e, dt2, button2, config2) {
        config2.action.call(dt2.button(button2), e, dt2, button2, config2);
        (0, import_jquery3.default)(dt2.table().node()).triggerHandler("buttons-action.dt", [
          dt2.button(button2),
          dt2,
          button2,
          config2
        ]);
      };
      var tag = config.tag || buttonDom.tag;
      var clickBlurs = config.clickBlurs === void 0 ? true : config.clickBlurs;
      button = (0, import_jquery3.default)("<" + tag + "/>").addClass(buttonDom.className).addClass(inSplit ? this.c.dom.splitDropdownButton.className : "").attr("tabindex", this.s.dt.settings()[0].iTabIndex).attr("aria-controls", this.s.dt.table().node().id).on("click.dtb", function(e) {
        e.preventDefault();
        if (!button.hasClass(buttonDom.disabled) && config.action) {
          action(e, dt, button, config);
        }
        if (clickBlurs) {
          button.trigger("blur");
        }
      }).on("keypress.dtb", function(e) {
        if (e.keyCode === 13) {
          e.preventDefault();
          if (!button.hasClass(buttonDom.disabled) && config.action) {
            action(e, dt, button, config);
          }
        }
      });
      if (tag.toLowerCase() === "a") {
        button.attr("href", "#");
      }
      if (tag.toLowerCase() === "button") {
        button.attr("type", "button");
      }
      if (linerDom.tag) {
        var liner = (0, import_jquery3.default)("<" + linerDom.tag + "/>").html(text(config.text)).addClass(linerDom.className);
        if (linerDom.tag.toLowerCase() === "a") {
          liner.attr("href", "#");
        }
        button.append(liner);
      } else {
        button.html(text(config.text));
      }
      if (config.enabled === false) {
        button.addClass(buttonDom.disabled);
      }
      if (config.className) {
        button.addClass(config.className);
      }
      if (config.titleAttr) {
        button.attr("title", text(config.titleAttr));
      }
      if (config.attr) {
        button.attr(config.attr);
      }
      if (!config.namespace) {
        config.namespace = ".dt-button-" + _buttonCounter++;
      }
      if (config.config !== void 0 && config.config.split) {
        config.split = config.config.split;
      }
    } else {
      button = (0, import_jquery3.default)(config.html);
    }
    var buttonContainer = this.c.dom.buttonContainer;
    var inserter;
    if (buttonContainer && buttonContainer.tag) {
      inserter = (0, import_jquery3.default)("<" + buttonContainer.tag + "/>").addClass(buttonContainer.className).append(button);
    } else {
      inserter = button;
    }
    this._addKey(config);
    if (this.c.buttonCreated) {
      inserter = this.c.buttonCreated(config, inserter);
    }
    var splitDiv;
    if (isSplit) {
      splitDiv = (0, import_jquery3.default)("<div/>").addClass(this.c.dom.splitWrapper.className);
      splitDiv.append(button);
      var dropButtonConfig = import_jquery3.default.extend(config, {
        text: this.c.dom.splitDropdown.text,
        className: this.c.dom.splitDropdown.className,
        closeButton: false,
        attr: {
          "aria-haspopup": "dialog",
          "aria-expanded": false
        },
        align: this.c.dom.splitDropdown.align,
        splitAlignClass: this.c.dom.splitDropdown.splitAlignClass
      });
      this._addKey(dropButtonConfig);
      var splitAction = function(e, dt2, button2, config2) {
        _dtButtons.split.action.call(dt2.button(splitDiv), e, dt2, button2, config2);
        (0, import_jquery3.default)(dt2.table().node()).triggerHandler("buttons-action.dt", [
          dt2.button(button2),
          dt2,
          button2,
          config2
        ]);
        button2.attr("aria-expanded", true);
      };
      var dropButton = (0, import_jquery3.default)('<button class="' + this.c.dom.splitDropdown.className + ' dt-button"><span class="dt-btn-split-drop-arrow">' + this.c.dom.splitDropdown.text + "</span></button>").on("click.dtb", function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (!dropButton.hasClass(buttonDom.disabled)) {
          splitAction(e, dt, dropButton, dropButtonConfig);
        }
        if (clickBlurs) {
          dropButton.trigger("blur");
        }
      }).on("keypress.dtb", function(e) {
        if (e.keyCode === 13) {
          e.preventDefault();
          if (!dropButton.hasClass(buttonDom.disabled)) {
            splitAction(e, dt, dropButton, dropButtonConfig);
          }
        }
      });
      if (config.split.length === 0) {
        dropButton.addClass("dtb-hide-drop");
      }
      splitDiv.append(dropButton).attr(dropButtonConfig.attr);
    }
    return {
      conf: config,
      node: isSplit ? splitDiv.get(0) : button.get(0),
      inserter: isSplit ? splitDiv : inserter,
      buttons: [],
      inCollection,
      isSplit,
      inSplit,
      collection: null
    };
  },
  /**
   * Get the button object from a node (recursive)
   * @param  {node} node Button node
   * @param  {array} [buttons] Button array, uses base if not defined
   * @return {object} Button object
   * @private
   */
  _nodeToButton: function(node, buttons) {
    if (!buttons) {
      buttons = this.s.buttons;
    }
    for (var i2 = 0, ien = buttons.length; i2 < ien; i2++) {
      if (buttons[i2].node === node) {
        return buttons[i2];
      }
      if (buttons[i2].buttons.length) {
        var ret = this._nodeToButton(node, buttons[i2].buttons);
        if (ret) {
          return ret;
        }
      }
    }
  },
  /**
   * Get container array for a button from a button node (recursive)
   * @param  {node} node Button node
   * @param  {array} [buttons] Button array, uses base if not defined
   * @return {array} Button's host array
   * @private
   */
  _nodeToHost: function(node, buttons) {
    if (!buttons) {
      buttons = this.s.buttons;
    }
    for (var i2 = 0, ien = buttons.length; i2 < ien; i2++) {
      if (buttons[i2].node === node) {
        return buttons;
      }
      if (buttons[i2].buttons.length) {
        var ret = this._nodeToHost(node, buttons[i2].buttons);
        if (ret) {
          return ret;
        }
      }
    }
  },
  /**
   * Handle a key press - determine if any button's key configured matches
   * what was typed and trigger the action if so.
   * @param  {string} character The character pressed
   * @param  {object} e Key event that triggered this call
   * @private
   */
  _keypress: function(character, e) {
    if (e._buttonsHandled) {
      return;
    }
    var run = function(conf, node) {
      if (!conf.key) {
        return;
      }
      if (conf.key === character) {
        e._buttonsHandled = true;
        (0, import_jquery3.default)(node).click();
      } else if (import_jquery3.default.isPlainObject(conf.key)) {
        if (conf.key.key !== character) {
          return;
        }
        if (conf.key.shiftKey && !e.shiftKey) {
          return;
        }
        if (conf.key.altKey && !e.altKey) {
          return;
        }
        if (conf.key.ctrlKey && !e.ctrlKey) {
          return;
        }
        if (conf.key.metaKey && !e.metaKey) {
          return;
        }
        e._buttonsHandled = true;
        (0, import_jquery3.default)(node).click();
      }
    };
    var recurse = function(a) {
      for (var i2 = 0, ien = a.length; i2 < ien; i2++) {
        run(a[i2].conf, a[i2].node);
        if (a[i2].buttons.length) {
          recurse(a[i2].buttons);
        }
      }
    };
    recurse(this.s.buttons);
  },
  /**
   * Remove a key from the key listener for this instance (to be used when a
   * button is removed)
   * @param  {object} conf Button configuration
   * @private
   */
  _removeKey: function(conf) {
    if (conf.key) {
      var character = import_jquery3.default.isPlainObject(conf.key) ? conf.key.key : conf.key;
      var a = this.s.listenKeys.split("");
      var idx = import_jquery3.default.inArray(character, a);
      a.splice(idx, 1);
      this.s.listenKeys = a.join("");
    }
  },
  /**
   * Resolve a button configuration
   * @param  {string|function|object} conf Button config to resolve
   * @return {object} Button configuration
   * @private
   */
  _resolveExtends: function(conf) {
    var that = this;
    var dt = this.s.dt;
    var i2, ien;
    var toConfObject = function(base) {
      var loop = 0;
      while (!import_jquery3.default.isPlainObject(base) && !Array.isArray(base)) {
        if (base === void 0) {
          return;
        }
        if (typeof base === "function") {
          base = base.call(that, dt, conf);
          if (!base) {
            return false;
          }
        } else if (typeof base === "string") {
          if (!_dtButtons[base]) {
            return { html: base };
          }
          base = _dtButtons[base];
        }
        loop++;
        if (loop > 30) {
          throw "Buttons: Too many iterations";
        }
      }
      return Array.isArray(base) ? base : import_jquery3.default.extend({}, base);
    };
    conf = toConfObject(conf);
    while (conf && conf.extend) {
      if (!_dtButtons[conf.extend]) {
        throw "Cannot extend unknown button type: " + conf.extend;
      }
      var objArray = toConfObject(_dtButtons[conf.extend]);
      if (Array.isArray(objArray)) {
        return objArray;
      } else if (!objArray) {
        return false;
      }
      var originalClassName = objArray.className;
      if (conf.config !== void 0 && objArray.config !== void 0) {
        conf.config = import_jquery3.default.extend({}, objArray.config, conf.config);
      }
      conf = import_jquery3.default.extend({}, objArray, conf);
      if (originalClassName && conf.className !== originalClassName) {
        conf.className = originalClassName + " " + conf.className;
      }
      conf.extend = objArray.extend;
    }
    var postfixButtons = conf.postfixButtons;
    if (postfixButtons) {
      if (!conf.buttons) {
        conf.buttons = [];
      }
      for (i2 = 0, ien = postfixButtons.length; i2 < ien; i2++) {
        conf.buttons.push(postfixButtons[i2]);
      }
    }
    var prefixButtons = conf.prefixButtons;
    if (prefixButtons) {
      if (!conf.buttons) {
        conf.buttons = [];
      }
      for (i2 = 0, ien = prefixButtons.length; i2 < ien; i2++) {
        conf.buttons.splice(i2, 0, prefixButtons[i2]);
      }
    }
    return conf;
  },
  /**
   * Display (and replace if there is an existing one) a popover attached to a button
   * @param {string|node} content Content to show
   * @param {DataTable.Api} hostButton DT API instance of the button
   * @param {object} inOpts Options (see object below for all options)
   */
  _popover: function(content, hostButton, inOpts, e) {
    var dt = hostButton;
    var buttonsSettings = this.c;
    var closed = false;
    var options = import_jquery3.default.extend({
      align: "button-left",
      // button-right, dt-container, split-left, split-right
      autoClose: false,
      background: true,
      backgroundClassName: "dt-button-background",
      closeButton: true,
      contentClassName: buttonsSettings.dom.collection.className,
      collectionLayout: "",
      collectionTitle: "",
      dropup: false,
      fade: 400,
      popoverTitle: "",
      rightAlignClassName: "dt-button-right",
      tag: buttonsSettings.dom.collection.tag
    }, inOpts);
    var hostNode = hostButton.node();
    var close = function() {
      closed = true;
      _fadeOut(
        (0, import_jquery3.default)(".dt-button-collection"),
        options.fade,
        function() {
          (0, import_jquery3.default)(this).detach();
        }
      );
      (0, import_jquery3.default)(dt.buttons('[aria-haspopup="dialog"][aria-expanded="true"]').nodes()).attr("aria-expanded", "false");
      (0, import_jquery3.default)("div.dt-button-background").off("click.dtb-collection");
      Buttons.background(false, options.backgroundClassName, options.fade, hostNode);
      (0, import_jquery3.default)(window).off("resize.resize.dtb-collection");
      (0, import_jquery3.default)("body").off(".dtb-collection");
      dt.off("buttons-action.b-internal");
      dt.off("destroy");
    };
    if (content === false) {
      close();
      return;
    }
    var existingExpanded = (0, import_jquery3.default)(dt.buttons('[aria-haspopup="dialog"][aria-expanded="true"]').nodes());
    if (existingExpanded.length) {
      if (hostNode.closest("div.dt-button-collection").length) {
        hostNode = existingExpanded.eq(0);
      }
      close();
    }
    var cnt = (0, import_jquery3.default)(".dt-button", content).length;
    var mod = "";
    if (cnt === 3) {
      mod = "dtb-b3";
    } else if (cnt === 2) {
      mod = "dtb-b2";
    } else if (cnt === 1) {
      mod = "dtb-b1";
    }
    var display = (0, import_jquery3.default)("<div/>").addClass("dt-button-collection").addClass(options.collectionLayout).addClass(options.splitAlignClass).addClass(mod).css("display", "none").attr({
      "aria-modal": true,
      role: "dialog"
    });
    content = (0, import_jquery3.default)(content).addClass(options.contentClassName).attr("role", "menu").appendTo(display);
    hostNode.attr("aria-expanded", "true");
    if (hostNode.parents("body")[0] !== document.body) {
      hostNode = document.body.lastChild;
    }
    if (options.popoverTitle) {
      display.prepend('<div class="dt-button-collection-title">' + options.popoverTitle + "</div>");
    } else if (options.collectionTitle) {
      display.prepend('<div class="dt-button-collection-title">' + options.collectionTitle + "</div>");
    }
    if (options.closeButton) {
      display.prepend('<div class="dtb-popover-close">x</div>').addClass("dtb-collection-closeable");
    }
    _fadeIn(display.insertAfter(hostNode), options.fade);
    var tableContainer = (0, import_jquery3.default)(hostButton.table().container());
    var position = display.css("position");
    if (options.span === "container" || options.align === "dt-container") {
      hostNode = hostNode.parent();
      display.css("width", tableContainer.width());
    }
    if (position === "absolute") {
      var offsetParent = (0, import_jquery3.default)(hostNode[0].offsetParent);
      var buttonPosition = hostNode.position();
      var buttonOffset = hostNode.offset();
      var tableSizes = offsetParent.offset();
      var containerPosition = offsetParent.position();
      var computed = window.getComputedStyle(offsetParent[0]);
      tableSizes.height = offsetParent.outerHeight();
      tableSizes.width = offsetParent.width() + parseFloat(computed.paddingLeft);
      tableSizes.right = tableSizes.left + tableSizes.width;
      tableSizes.bottom = tableSizes.top + tableSizes.height;
      var top2 = buttonPosition.top + hostNode.outerHeight();
      var left2 = buttonPosition.left;
      display.css({
        top: top2,
        left: left2
      });
      computed = window.getComputedStyle(display[0]);
      var popoverSizes = display.offset();
      popoverSizes.height = display.outerHeight();
      popoverSizes.width = display.outerWidth();
      popoverSizes.right = popoverSizes.left + popoverSizes.width;
      popoverSizes.bottom = popoverSizes.top + popoverSizes.height;
      popoverSizes.marginTop = parseFloat(computed.marginTop);
      popoverSizes.marginBottom = parseFloat(computed.marginBottom);
      if (options.dropup) {
        top2 = buttonPosition.top - popoverSizes.height - popoverSizes.marginTop - popoverSizes.marginBottom;
      }
      if (options.align === "button-right" || display.hasClass(options.rightAlignClassName)) {
        left2 = buttonPosition.left - popoverSizes.width + hostNode.outerWidth();
      }
      if (options.align === "dt-container" || options.align === "container") {
        if (left2 < buttonPosition.left) {
          left2 = -buttonPosition.left;
        }
        if (left2 + popoverSizes.width > tableSizes.width) {
          left2 = tableSizes.width - popoverSizes.width;
        }
      }
      if (containerPosition.left + left2 + popoverSizes.width > (0, import_jquery3.default)(window).width()) {
        left2 = (0, import_jquery3.default)(window).width() - popoverSizes.width - containerPosition.left;
      }
      if (buttonOffset.left + left2 < 0) {
        left2 = -buttonOffset.left;
      }
      if (containerPosition.top + top2 + popoverSizes.height > (0, import_jquery3.default)(window).height() + (0, import_jquery3.default)(window).scrollTop()) {
        top2 = buttonPosition.top - popoverSizes.height - popoverSizes.marginTop - popoverSizes.marginBottom;
      }
      if (containerPosition.top + top2 < (0, import_jquery3.default)(window).scrollTop()) {
        top2 = buttonPosition.top + hostNode.outerHeight();
      }
      display.css({
        top: top2,
        left: left2
      });
    } else {
      var position = function() {
        var half = (0, import_jquery3.default)(window).height() / 2;
        var top3 = display.height() / 2;
        if (top3 > half) {
          top3 = half;
        }
        display.css("marginTop", top3 * -1);
      };
      position();
      (0, import_jquery3.default)(window).on("resize.dtb-collection", function() {
        position();
      });
    }
    if (options.background) {
      Buttons.background(
        true,
        options.backgroundClassName,
        options.fade,
        options.backgroundHost || hostNode
      );
    }
    (0, import_jquery3.default)("div.dt-button-background").on("click.dtb-collection", function() {
    });
    if (options.autoClose) {
      setTimeout(function() {
        dt.on("buttons-action.b-internal", function(e2, btn, dt2, node) {
          if (node[0] === hostNode[0]) {
            return;
          }
          close();
        });
      }, 0);
    }
    (0, import_jquery3.default)(display).trigger("buttons-popover.dt");
    dt.on("destroy", close);
    setTimeout(function() {
      closed = false;
      (0, import_jquery3.default)("body").on("click.dtb-collection", function(e2) {
        if (closed) {
          return;
        }
        var back = import_jquery3.default.fn.addBack ? "addBack" : "andSelf";
        var parent = (0, import_jquery3.default)(e2.target).parent()[0];
        if (!(0, import_jquery3.default)(e2.target).parents()[back]().filter(content).length && !(0, import_jquery3.default)(parent).hasClass("dt-buttons") || (0, import_jquery3.default)(e2.target).hasClass("dt-button-background")) {
          close();
        }
      }).on("keyup.dtb-collection", function(e2) {
        if (e2.keyCode === 27) {
          close();
        }
      }).on("keydown.dtb-collection", function(e2) {
        var elements = (0, import_jquery3.default)("a, button", content);
        var active = document.activeElement;
        if (e2.keyCode !== 9) {
          return;
        }
        if (elements.index(active) === -1) {
          elements.first().focus();
          e2.preventDefault();
        } else if (e2.shiftKey) {
          if (active === elements[0]) {
            elements.last().focus();
            e2.preventDefault();
          }
        } else {
          if (active === elements.last()[0]) {
            elements.first().focus();
            e2.preventDefault();
          }
        }
      });
    }, 0);
  }
});
Buttons.background = function(show, className, fade, insertPoint) {
  if (fade === void 0) {
    fade = 400;
  }
  if (!insertPoint) {
    insertPoint = document.body;
  }
  if (show) {
    _fadeIn(
      (0, import_jquery3.default)("<div/>").addClass(className).css("display", "none").insertAfter(insertPoint),
      fade
    );
  } else {
    _fadeOut(
      (0, import_jquery3.default)("div." + className),
      fade,
      function() {
        (0, import_jquery3.default)(this).removeClass(className).remove();
      }
    );
  }
};
Buttons.instanceSelector = function(group, buttons) {
  if (group === void 0 || group === null) {
    return import_jquery3.default.map(buttons, function(v) {
      return v.inst;
    });
  }
  var ret = [];
  var names = import_jquery3.default.map(buttons, function(v) {
    return v.name;
  });
  var process2 = function(input) {
    if (Array.isArray(input)) {
      for (var i2 = 0, ien = input.length; i2 < ien; i2++) {
        process2(input[i2]);
      }
      return;
    }
    if (typeof input === "string") {
      if (input.indexOf(",") !== -1) {
        process2(input.split(","));
      } else {
        var idx = import_jquery3.default.inArray(input.trim(), names);
        if (idx !== -1) {
          ret.push(buttons[idx].inst);
        }
      }
    } else if (typeof input === "number") {
      ret.push(buttons[input].inst);
    } else if (typeof input === "object") {
      ret.push(input);
    }
  };
  process2(group);
  return ret;
};
Buttons.buttonSelector = function(insts, selector) {
  var ret = [];
  var nodeBuilder = function(a, buttons, baseIdx) {
    var button;
    var idx;
    for (var i3 = 0, ien2 = buttons.length; i3 < ien2; i3++) {
      button = buttons[i3];
      if (button) {
        idx = baseIdx !== void 0 ? baseIdx + i3 : i3 + "";
        a.push({
          node: button.node,
          name: button.conf.name,
          idx
        });
        if (button.buttons) {
          nodeBuilder(a, button.buttons, idx + "-");
        }
      }
    }
  };
  var run = function(selector2, inst2) {
    var i3, ien2;
    var buttons = [];
    nodeBuilder(buttons, inst2.s.buttons);
    var nodes = import_jquery3.default.map(buttons, function(v) {
      return v.node;
    });
    if (Array.isArray(selector2) || selector2 instanceof import_jquery3.default) {
      for (i3 = 0, ien2 = selector2.length; i3 < ien2; i3++) {
        run(selector2[i3], inst2);
      }
      return;
    }
    if (selector2 === null || selector2 === void 0 || selector2 === "*") {
      for (i3 = 0, ien2 = buttons.length; i3 < ien2; i3++) {
        ret.push({
          inst: inst2,
          node: buttons[i3].node
        });
      }
    } else if (typeof selector2 === "number") {
      if (inst2.s.buttons[selector2]) {
        ret.push({
          inst: inst2,
          node: inst2.s.buttons[selector2].node
        });
      }
    } else if (typeof selector2 === "string") {
      if (selector2.indexOf(",") !== -1) {
        var a = selector2.split(",");
        for (i3 = 0, ien2 = a.length; i3 < ien2; i3++) {
          run(a[i3].trim(), inst2);
        }
      } else if (selector2.match(/^\d+(\-\d+)*$/)) {
        var indexes = import_jquery3.default.map(buttons, function(v) {
          return v.idx;
        });
        ret.push({
          inst: inst2,
          node: buttons[import_jquery3.default.inArray(selector2, indexes)].node
        });
      } else if (selector2.indexOf(":name") !== -1) {
        var name = selector2.replace(":name", "");
        for (i3 = 0, ien2 = buttons.length; i3 < ien2; i3++) {
          if (buttons[i3].name === name) {
            ret.push({
              inst: inst2,
              node: buttons[i3].node
            });
          }
        }
      } else {
        (0, import_jquery3.default)(nodes).filter(selector2).each(function() {
          ret.push({
            inst: inst2,
            node: this
          });
        });
      }
    } else if (typeof selector2 === "object" && selector2.nodeName) {
      var idx = import_jquery3.default.inArray(selector2, nodes);
      if (idx !== -1) {
        ret.push({
          inst: inst2,
          node: nodes[idx]
        });
      }
    }
  };
  for (var i2 = 0, ien = insts.length; i2 < ien; i2++) {
    var inst = insts[i2];
    run(selector, inst);
  }
  return ret;
};
Buttons.stripData = function(str, config) {
  if (typeof str !== "string") {
    return str;
  }
  str = str.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
  str = str.replace(/<!\-\-.*?\-\->/g, "");
  if (!config || config.stripHtml) {
    str = str.replace(/<[^>]*>/g, "");
  }
  if (!config || config.trim) {
    str = str.replace(/^\s+|\s+$/g, "");
  }
  if (!config || config.stripNewlines) {
    str = str.replace(/\n/g, " ");
  }
  if (!config || config.decodeEntities) {
    _exportTextarea.innerHTML = str;
    str = _exportTextarea.value;
  }
  return str;
};
Buttons.defaults = {
  buttons: ["copy", "excel", "csv", "pdf", "print"],
  name: "main",
  tabIndex: 0,
  dom: {
    container: {
      tag: "div",
      className: "dt-buttons"
    },
    collection: {
      tag: "div",
      className: ""
    },
    button: {
      tag: "button",
      className: "dt-button",
      active: "active",
      disabled: "disabled",
      spacerClass: ""
    },
    buttonLiner: {
      tag: "span",
      className: ""
    },
    split: {
      tag: "div",
      className: "dt-button-split"
    },
    splitWrapper: {
      tag: "div",
      className: "dt-btn-split-wrapper"
    },
    splitDropdown: {
      tag: "button",
      text: "&#x25BC;",
      className: "dt-btn-split-drop",
      align: "split-right",
      splitAlignClass: "dt-button-split-left"
    },
    splitDropdownButton: {
      tag: "button",
      className: "dt-btn-split-drop-button dt-button"
    },
    splitCollection: {
      tag: "div",
      className: "dt-button-split-collection"
    }
  }
};
Buttons.version = "2.3.6";
import_jquery3.default.extend(_dtButtons, {
  collection: {
    text: function(dt) {
      return dt.i18n("buttons.collection", "Collection");
    },
    className: "buttons-collection",
    closeButton: false,
    init: function(dt, button, config) {
      button.attr("aria-expanded", false);
    },
    action: function(e, dt, button, config) {
      if (config._collection.parents("body").length) {
        this.popover(false, config);
      } else {
        this.popover(config._collection, config);
      }
      if (e.type === "keypress") {
        (0, import_jquery3.default)("a, button", config._collection).eq(0).focus();
      }
    },
    attr: {
      "aria-haspopup": "dialog"
    }
    // Also the popover options, defined in Buttons.popover
  },
  split: {
    text: function(dt) {
      return dt.i18n("buttons.split", "Split");
    },
    className: "buttons-split",
    closeButton: false,
    init: function(dt, button, config) {
      return button.attr("aria-expanded", false);
    },
    action: function(e, dt, button, config) {
      this.popover(config._collection, config);
    },
    attr: {
      "aria-haspopup": "dialog"
    }
    // Also the popover options, defined in Buttons.popover
  },
  copy: function(dt, conf) {
    if (_dtButtons.copyHtml5) {
      return "copyHtml5";
    }
  },
  csv: function(dt, conf) {
    if (_dtButtons.csvHtml5 && _dtButtons.csvHtml5.available(dt, conf)) {
      return "csvHtml5";
    }
  },
  excel: function(dt, conf) {
    if (_dtButtons.excelHtml5 && _dtButtons.excelHtml5.available(dt, conf)) {
      return "excelHtml5";
    }
  },
  pdf: function(dt, conf) {
    if (_dtButtons.pdfHtml5 && _dtButtons.pdfHtml5.available(dt, conf)) {
      return "pdfHtml5";
    }
  },
  pageLength: function(dt) {
    var lengthMenu = dt.settings()[0].aLengthMenu;
    var vals = [];
    var lang = [];
    var text = function(dt2) {
      return dt2.i18n("buttons.pageLength", {
        "-1": "Show all rows",
        _: "Show %d rows"
      }, dt2.page.len());
    };
    if (Array.isArray(lengthMenu[0])) {
      vals = lengthMenu[0];
      lang = lengthMenu[1];
    } else {
      for (var i2 = 0; i2 < lengthMenu.length; i2++) {
        var option = lengthMenu[i2];
        if (import_jquery3.default.isPlainObject(option)) {
          vals.push(option.value);
          lang.push(option.label);
        } else {
          vals.push(option);
          lang.push(option);
        }
      }
    }
    return {
      extend: "collection",
      text,
      className: "buttons-page-length",
      autoClose: true,
      buttons: import_jquery3.default.map(vals, function(val, i3) {
        return {
          text: lang[i3],
          className: "button-page-length",
          action: function(e, dt2) {
            dt2.page.len(val).draw();
          },
          init: function(dt2, node, conf) {
            var that = this;
            var fn2 = function() {
              that.active(dt2.page.len() === val);
            };
            dt2.on("length.dt" + conf.namespace, fn2);
            fn2();
          },
          destroy: function(dt2, node, conf) {
            dt2.off("length.dt" + conf.namespace);
          }
        };
      }),
      init: function(dt2, node, conf) {
        var that = this;
        dt2.on("length.dt" + conf.namespace, function() {
          that.text(conf.text);
        });
      },
      destroy: function(dt2, node, conf) {
        dt2.off("length.dt" + conf.namespace);
      }
    };
  },
  spacer: {
    style: "empty",
    spacer: true,
    text: function(dt) {
      return dt.i18n("buttons.spacer", "");
    }
  }
});
jquery_dataTables_default.Api.register("buttons()", function(group, selector) {
  if (selector === void 0) {
    selector = group;
    group = void 0;
  }
  this.selector.buttonGroup = group;
  var res = this.iterator(true, "table", function(ctx) {
    if (ctx._buttons) {
      return Buttons.buttonSelector(
        Buttons.instanceSelector(group, ctx._buttons),
        selector
      );
    }
  }, true);
  res._groupSelector = group;
  return res;
});
jquery_dataTables_default.Api.register("button()", function(group, selector) {
  var buttons = this.buttons(group, selector);
  if (buttons.length > 1) {
    buttons.splice(1, buttons.length);
  }
  return buttons;
});
jquery_dataTables_default.Api.registerPlural("buttons().active()", "button().active()", function(flag) {
  if (flag === void 0) {
    return this.map(function(set) {
      return set.inst.active(set.node);
    });
  }
  return this.each(function(set) {
    set.inst.active(set.node, flag);
  });
});
jquery_dataTables_default.Api.registerPlural("buttons().action()", "button().action()", function(action) {
  if (action === void 0) {
    return this.map(function(set) {
      return set.inst.action(set.node);
    });
  }
  return this.each(function(set) {
    set.inst.action(set.node, action);
  });
});
jquery_dataTables_default.Api.registerPlural("buttons().collectionRebuild()", "button().collectionRebuild()", function(buttons) {
  return this.each(function(set) {
    for (var i2 = 0; i2 < buttons.length; i2++) {
      if (typeof buttons[i2] === "object") {
        buttons[i2].parentConf = set;
      }
    }
    set.inst.collectionRebuild(set.node, buttons);
  });
});
jquery_dataTables_default.Api.register(["buttons().enable()", "button().enable()"], function(flag) {
  return this.each(function(set) {
    set.inst.enable(set.node, flag);
  });
});
jquery_dataTables_default.Api.register(["buttons().disable()", "button().disable()"], function() {
  return this.each(function(set) {
    set.inst.disable(set.node);
  });
});
jquery_dataTables_default.Api.register("button().index()", function() {
  var idx = null;
  this.each(function(set) {
    var res = set.inst.index(set.node);
    if (res !== null) {
      idx = res;
    }
  });
  return idx;
});
jquery_dataTables_default.Api.registerPlural("buttons().nodes()", "button().node()", function() {
  var jq = (0, import_jquery3.default)();
  (0, import_jquery3.default)(this.each(function(set) {
    jq = jq.add(set.inst.node(set.node));
  }));
  return jq;
});
jquery_dataTables_default.Api.registerPlural("buttons().processing()", "button().processing()", function(flag) {
  if (flag === void 0) {
    return this.map(function(set) {
      return set.inst.processing(set.node);
    });
  }
  return this.each(function(set) {
    set.inst.processing(set.node, flag);
  });
});
jquery_dataTables_default.Api.registerPlural("buttons().text()", "button().text()", function(label) {
  if (label === void 0) {
    return this.map(function(set) {
      return set.inst.text(set.node);
    });
  }
  return this.each(function(set) {
    set.inst.text(set.node, label);
  });
});
jquery_dataTables_default.Api.registerPlural("buttons().trigger()", "button().trigger()", function() {
  return this.each(function(set) {
    set.inst.node(set.node).trigger("click");
  });
});
jquery_dataTables_default.Api.register("button().popover()", function(content, options) {
  return this.map(function(set) {
    return set.inst._popover(content, this.button(this[0].node), options);
  });
});
jquery_dataTables_default.Api.register("buttons().containers()", function() {
  var jq = (0, import_jquery3.default)();
  var groupSelector = this._groupSelector;
  this.iterator(true, "table", function(ctx) {
    if (ctx._buttons) {
      var insts = Buttons.instanceSelector(groupSelector, ctx._buttons);
      for (var i2 = 0, ien = insts.length; i2 < ien; i2++) {
        jq = jq.add(insts[i2].container());
      }
    }
  });
  return jq;
});
jquery_dataTables_default.Api.register("buttons().container()", function() {
  return this.containers().eq(0);
});
jquery_dataTables_default.Api.register("button().add()", function(idx, conf, draw) {
  var ctx = this.context;
  if (ctx.length) {
    var inst = Buttons.instanceSelector(this._groupSelector, ctx[0]._buttons);
    if (inst.length) {
      inst[0].add(conf, idx, draw);
    }
  }
  return this.button(this._groupSelector, idx);
});
jquery_dataTables_default.Api.register("buttons().destroy()", function() {
  this.pluck("inst").unique().each(function(inst) {
    inst.destroy();
  });
  return this;
});
jquery_dataTables_default.Api.registerPlural("buttons().remove()", "buttons().remove()", function() {
  this.each(function(set) {
    set.inst.remove(set.node);
  });
  return this;
});
var _infoTimer;
jquery_dataTables_default.Api.register("buttons.info()", function(title, message, time) {
  var that = this;
  if (title === false) {
    this.off("destroy.btn-info");
    _fadeOut(
      (0, import_jquery3.default)("#datatables_buttons_info"),
      400,
      function() {
        (0, import_jquery3.default)(this).remove();
      }
    );
    clearTimeout(_infoTimer);
    _infoTimer = null;
    return this;
  }
  if (_infoTimer) {
    clearTimeout(_infoTimer);
  }
  if ((0, import_jquery3.default)("#datatables_buttons_info").length) {
    (0, import_jquery3.default)("#datatables_buttons_info").remove();
  }
  title = title ? "<h2>" + title + "</h2>" : "";
  _fadeIn(
    (0, import_jquery3.default)('<div id="datatables_buttons_info" class="dt-button-info"/>').html(title).append((0, import_jquery3.default)("<div/>")[typeof message === "string" ? "html" : "append"](message)).css("display", "none").appendTo("body")
  );
  if (time !== void 0 && time !== 0) {
    _infoTimer = setTimeout(function() {
      that.buttons.info(false);
    }, time);
  }
  this.on("destroy.btn-info", function() {
    that.buttons.info(false);
  });
  return this;
});
jquery_dataTables_default.Api.register("buttons.exportData()", function(options) {
  if (this.context.length) {
    return _exportData(new jquery_dataTables_default.Api(this.context[0]), options);
  }
});
jquery_dataTables_default.Api.register("buttons.exportInfo()", function(conf) {
  if (!conf) {
    conf = {};
  }
  return {
    filename: _filename(conf),
    title: _title(conf),
    messageTop: _message(this, conf.message || conf.messageTop, "top"),
    messageBottom: _message(this, conf.messageBottom, "bottom")
  };
});
var _filename = function(config) {
  var filename = config.filename === "*" && config.title !== "*" && config.title !== void 0 && config.title !== null && config.title !== "" ? config.title : config.filename;
  if (typeof filename === "function") {
    filename = filename();
  }
  if (filename === void 0 || filename === null) {
    return null;
  }
  if (filename.indexOf("*") !== -1) {
    filename = filename.replace("*", (0, import_jquery3.default)("head > title").text()).trim();
  }
  filename = filename.replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g, "");
  var extension = _stringOrFunction(config.extension);
  if (!extension) {
    extension = "";
  }
  return filename + extension;
};
var _stringOrFunction = function(option) {
  if (option === null || option === void 0) {
    return null;
  } else if (typeof option === "function") {
    return option();
  }
  return option;
};
var _title = function(config) {
  var title = _stringOrFunction(config.title);
  return title === null ? null : title.indexOf("*") !== -1 ? title.replace("*", (0, import_jquery3.default)("head > title").text() || "Exported data") : title;
};
var _message = function(dt, option, position) {
  var message = _stringOrFunction(option);
  if (message === null) {
    return null;
  }
  var caption = (0, import_jquery3.default)("caption", dt.table().container()).eq(0);
  if (message === "*") {
    var side = caption.css("caption-side");
    if (side !== position) {
      return null;
    }
    return caption.length ? caption.text() : "";
  }
  return message;
};
var _exportTextarea = (0, import_jquery3.default)("<textarea/>")[0];
var _exportData = function(dt, inOpts) {
  var config = import_jquery3.default.extend(true, {}, {
    rows: null,
    columns: "",
    modifier: {
      search: "applied",
      order: "applied"
    },
    orthogonal: "display",
    stripHtml: true,
    stripNewlines: true,
    decodeEntities: true,
    trim: true,
    format: {
      header: function(d) {
        return Buttons.stripData(d, config);
      },
      footer: function(d) {
        return Buttons.stripData(d, config);
      },
      body: function(d) {
        return Buttons.stripData(d, config);
      }
    },
    customizeData: null
  }, inOpts);
  var header = dt.columns(config.columns).indexes().map(function(idx) {
    var el = dt.column(idx).header();
    return config.format.header(el.innerHTML, idx, el);
  }).toArray();
  var footer = dt.table().footer() ? dt.columns(config.columns).indexes().map(function(idx) {
    var el = dt.column(idx).footer();
    return config.format.footer(el ? el.innerHTML : "", idx, el);
  }).toArray() : null;
  var modifier = import_jquery3.default.extend({}, config.modifier);
  if (dt.select && typeof dt.select.info === "function" && modifier.selected === void 0) {
    if (dt.rows(config.rows, import_jquery3.default.extend({ selected: true }, modifier)).any()) {
      import_jquery3.default.extend(modifier, { selected: true });
    }
  }
  var rowIndexes = dt.rows(config.rows, modifier).indexes().toArray();
  var selectedCells = dt.cells(rowIndexes, config.columns);
  var cells = selectedCells.render(config.orthogonal).toArray();
  var cellNodes = selectedCells.nodes().toArray();
  var columns = header.length;
  var rows = columns > 0 ? cells.length / columns : 0;
  var body = [];
  var cellCounter = 0;
  for (var i2 = 0, ien = rows; i2 < ien; i2++) {
    var row = [columns];
    for (var j = 0; j < columns; j++) {
      row[j] = config.format.body(cells[cellCounter], i2, j, cellNodes[cellCounter]);
      cellCounter++;
    }
    body[i2] = row;
  }
  var data = {
    header,
    footer,
    body
  };
  if (config.customizeData) {
    config.customizeData(data);
  }
  return data;
};
import_jquery3.default.fn.dataTable.Buttons = Buttons;
import_jquery3.default.fn.DataTable.Buttons = Buttons;
(0, import_jquery3.default)(document).on("init.dt plugin-init.dt", function(e, settings) {
  if (e.namespace !== "dt") {
    return;
  }
  var opts = settings.oInit.buttons || jquery_dataTables_default.defaults.buttons;
  if (opts && !settings._buttons) {
    new Buttons(settings, opts).container();
  }
});
function _init(settings, options) {
  var api = new jquery_dataTables_default.Api(settings);
  var opts = options ? options : api.init().buttons || jquery_dataTables_default.defaults.buttons;
  return new Buttons(api, opts).container();
}
jquery_dataTables_default.ext.feature.push({
  fnInit: _init,
  cFeature: "B"
});
if (jquery_dataTables_default.ext.features) {
  jquery_dataTables_default.ext.features.register("buttons", _init);
}

// node_modules/datatables.net-buttons-bs5/js/buttons.bootstrap5.mjs
import_jquery4.default.extend(true, dataTables_bootstrap5_default.Buttons.defaults, {
  dom: {
    container: {
      className: "dt-buttons btn-group flex-wrap"
    },
    button: {
      className: "btn btn-secondary"
    },
    collection: {
      tag: "div",
      className: "dropdown-menu",
      closeButton: false,
      button: {
        tag: "a",
        className: "dt-button dropdown-item",
        active: "active",
        disabled: "disabled"
      }
    },
    splitWrapper: {
      tag: "div",
      className: "dt-btn-split-wrapper btn-group",
      closeButton: false
    },
    splitDropdown: {
      tag: "button",
      text: "",
      className: "btn btn-secondary dt-btn-split-drop dropdown-toggle dropdown-toggle-split",
      closeButton: false,
      align: "split-left",
      splitAlignClass: "dt-button-split-left"
    },
    splitDropdownButton: {
      tag: "button",
      className: "dt-btn-split-drop-button btn btn-secondary",
      closeButton: false
    }
  },
  buttonCreated: function(config, button) {
    return config.buttons ? (0, import_jquery4.default)('<div class="btn-group"/>').append(button) : button;
  }
});
dataTables_bootstrap5_default.ext.buttons.collection.className += " dropdown-toggle";
dataTables_bootstrap5_default.ext.buttons.collection.rightAlignClassName = "dropdown-menu-right";

// node_modules/datatables.net-select-bs5/js/select.bootstrap5.mjs
var import_jquery6 = __toESM(require_jquery(), 1);

// node_modules/datatables.net-select/js/dataTables.select.mjs
var import_jquery5 = __toESM(require_jquery(), 1);
jquery_dataTables_default.select = {};
jquery_dataTables_default.select.version = "1.6.2";
jquery_dataTables_default.select.init = function(dt) {
  var ctx = dt.settings()[0];
  if (ctx._select) {
    return;
  }
  var savedSelected = dt.state.loaded();
  var selectAndSave = function(e, settings, data) {
    if (data === null || data.select === void 0) {
      return;
    }
    if (dt.rows({ selected: true }).any()) {
      dt.rows().deselect();
    }
    if (data.select.rows !== void 0) {
      dt.rows(data.select.rows).select();
    }
    if (dt.columns({ selected: true }).any()) {
      dt.columns().deselect();
    }
    if (data.select.columns !== void 0) {
      dt.columns(data.select.columns).select();
    }
    if (dt.cells({ selected: true }).any()) {
      dt.cells().deselect();
    }
    if (data.select.cells !== void 0) {
      for (var i2 = 0; i2 < data.select.cells.length; i2++) {
        dt.cell(data.select.cells[i2].row, data.select.cells[i2].column).select();
      }
    }
    dt.state.save();
  };
  dt.on("stateSaveParams", function(e, settings, data) {
    data.select = {};
    data.select.rows = dt.rows({ selected: true }).ids(true).toArray();
    data.select.columns = dt.columns({ selected: true })[0];
    data.select.cells = dt.cells({ selected: true })[0].map(function(coords) {
      return { row: dt.row(coords.row).id(true), column: coords.column };
    });
  }).on("stateLoadParams", selectAndSave).one("init", function() {
    selectAndSave(void 0, void 0, savedSelected);
  });
  var init2 = ctx.oInit.select;
  var defaults = jquery_dataTables_default.defaults.select;
  var opts = init2 === void 0 ? defaults : init2;
  var items = "row";
  var style = "api";
  var blurable = false;
  var toggleable = true;
  var info2 = true;
  var selector = "td, th";
  var className = "selected";
  var setStyle = false;
  ctx._select = {};
  if (opts === true) {
    style = "os";
    setStyle = true;
  } else if (typeof opts === "string") {
    style = opts;
    setStyle = true;
  } else if (import_jquery5.default.isPlainObject(opts)) {
    if (opts.blurable !== void 0) {
      blurable = opts.blurable;
    }
    if (opts.toggleable !== void 0) {
      toggleable = opts.toggleable;
    }
    if (opts.info !== void 0) {
      info2 = opts.info;
    }
    if (opts.items !== void 0) {
      items = opts.items;
    }
    if (opts.style !== void 0) {
      style = opts.style;
      setStyle = true;
    } else {
      style = "os";
      setStyle = true;
    }
    if (opts.selector !== void 0) {
      selector = opts.selector;
    }
    if (opts.className !== void 0) {
      className = opts.className;
    }
  }
  dt.select.selector(selector);
  dt.select.items(items);
  dt.select.style(style);
  dt.select.blurable(blurable);
  dt.select.toggleable(toggleable);
  dt.select.info(info2);
  ctx._select.className = className;
  import_jquery5.default.fn.dataTable.ext.order["select-checkbox"] = function(settings, col) {
    return this.api().column(col, { order: "index" }).nodes().map(function(td) {
      if (settings._select.items === "row") {
        return (0, import_jquery5.default)(td).parent().hasClass(settings._select.className);
      } else if (settings._select.items === "cell") {
        return (0, import_jquery5.default)(td).hasClass(settings._select.className);
      }
      return false;
    });
  };
  if (!setStyle && (0, import_jquery5.default)(dt.table().node()).hasClass("selectable")) {
    dt.select.style("os");
  }
};
function cellRange(dt, idx, last) {
  var indexes;
  var columnIndexes;
  var rowIndexes;
  var selectColumns = function(start2, end2) {
    if (start2 > end2) {
      var tmp = end2;
      end2 = start2;
      start2 = tmp;
    }
    var record = false;
    return dt.columns(":visible").indexes().filter(function(i2) {
      if (i2 === start2) {
        record = true;
      }
      if (i2 === end2) {
        record = false;
        return true;
      }
      return record;
    });
  };
  var selectRows = function(start2, end2) {
    var indexes2 = dt.rows({ search: "applied" }).indexes();
    if (indexes2.indexOf(start2) > indexes2.indexOf(end2)) {
      var tmp = end2;
      end2 = start2;
      start2 = tmp;
    }
    var record = false;
    return indexes2.filter(function(i2) {
      if (i2 === start2) {
        record = true;
      }
      if (i2 === end2) {
        record = false;
        return true;
      }
      return record;
    });
  };
  if (!dt.cells({ selected: true }).any() && !last) {
    columnIndexes = selectColumns(0, idx.column);
    rowIndexes = selectRows(0, idx.row);
  } else {
    columnIndexes = selectColumns(last.column, idx.column);
    rowIndexes = selectRows(last.row, idx.row);
  }
  indexes = dt.cells(rowIndexes, columnIndexes).flatten();
  if (!dt.cells(idx, { selected: true }).any()) {
    dt.cells(indexes).select();
  } else {
    dt.cells(indexes).deselect();
  }
}
function disableMouseSelection(dt) {
  var ctx = dt.settings()[0];
  var selector = ctx._select.selector;
  (0, import_jquery5.default)(dt.table().container()).off("mousedown.dtSelect", selector).off("mouseup.dtSelect", selector).off("click.dtSelect", selector);
  (0, import_jquery5.default)("body").off("click.dtSelect" + _safeId(dt.table().node()));
}
function enableMouseSelection(dt) {
  var container = (0, import_jquery5.default)(dt.table().container());
  var ctx = dt.settings()[0];
  var selector = ctx._select.selector;
  var matchSelection;
  container.on("mousedown.dtSelect", selector, function(e) {
    if (e.shiftKey || e.metaKey || e.ctrlKey) {
      container.css("-moz-user-select", "none").one("selectstart.dtSelect", selector, function() {
        return false;
      });
    }
    if (window.getSelection) {
      matchSelection = window.getSelection();
    }
  }).on("mouseup.dtSelect", selector, function() {
    container.css("-moz-user-select", "");
  }).on("click.dtSelect", selector, function(e) {
    var items = dt.select.items();
    var idx;
    if (matchSelection) {
      var selection = window.getSelection();
      if (!selection.anchorNode || (0, import_jquery5.default)(selection.anchorNode).closest("table")[0] === dt.table().node()) {
        if (selection !== matchSelection) {
          return;
        }
      }
    }
    var ctx2 = dt.settings()[0];
    var wrapperClass = dt.settings()[0].oClasses.sWrapper.trim().replace(/ +/g, ".");
    if ((0, import_jquery5.default)(e.target).closest("div." + wrapperClass)[0] != dt.table().container()) {
      return;
    }
    var cell = dt.cell((0, import_jquery5.default)(e.target).closest("td, th"));
    if (!cell.any()) {
      return;
    }
    var event = import_jquery5.default.Event("user-select.dt");
    eventTrigger(dt, event, [items, cell, e]);
    if (event.isDefaultPrevented()) {
      return;
    }
    var cellIndex = cell.index();
    if (items === "row") {
      idx = cellIndex.row;
      typeSelect(e, dt, ctx2, "row", idx);
    } else if (items === "column") {
      idx = cell.index().column;
      typeSelect(e, dt, ctx2, "column", idx);
    } else if (items === "cell") {
      idx = cell.index();
      typeSelect(e, dt, ctx2, "cell", idx);
    }
    ctx2._select_lastCell = cellIndex;
  });
  (0, import_jquery5.default)("body").on("click.dtSelect" + _safeId(dt.table().node()), function(e) {
    if (ctx._select.blurable) {
      if ((0, import_jquery5.default)(e.target).parents().filter(dt.table().container()).length) {
        return;
      }
      if ((0, import_jquery5.default)(e.target).parents("html").length === 0) {
        return;
      }
      if ((0, import_jquery5.default)(e.target).parents("div.DTE").length) {
        return;
      }
      var event = import_jquery5.default.Event("select-blur.dt");
      eventTrigger(dt, event, [e.target, e]);
      if (event.isDefaultPrevented()) {
        return;
      }
      clear(ctx, true);
    }
  });
}
function eventTrigger(api, type, args, any) {
  if (any && !api.flatten().length) {
    return;
  }
  if (typeof type === "string") {
    type = type + ".dt";
  }
  args.unshift(api);
  (0, import_jquery5.default)(api.table().node()).trigger(type, args);
}
function info(api) {
  var ctx = api.settings()[0];
  if (!ctx._select.info || !ctx.aanFeatures.i) {
    return;
  }
  if (api.select.style() === "api") {
    return;
  }
  var rows = api.rows({ selected: true }).flatten().length;
  var columns = api.columns({ selected: true }).flatten().length;
  var cells = api.cells({ selected: true }).flatten().length;
  var add = function(el, name, num) {
    el.append((0, import_jquery5.default)('<span class="select-item"/>').append(api.i18n(
      "select." + name + "s",
      { _: "%d " + name + "s selected", 0: "", 1: "1 " + name + " selected" },
      num
    )));
  };
  import_jquery5.default.each(ctx.aanFeatures.i, function(i2, el) {
    el = (0, import_jquery5.default)(el);
    var output = (0, import_jquery5.default)('<span class="select-info"/>');
    add(output, "row", rows);
    add(output, "column", columns);
    add(output, "cell", cells);
    var exisiting = el.children("span.select-info");
    if (exisiting.length) {
      exisiting.remove();
    }
    if (output.text() !== "") {
      el.append(output);
    }
  });
}
function init(ctx) {
  var api = new jquery_dataTables_default.Api(ctx);
  ctx._select_init = true;
  ctx.aoRowCreatedCallback.push({
    fn: function(row, data, index) {
      var i2, ien;
      var d = ctx.aoData[index];
      if (d._select_selected) {
        (0, import_jquery5.default)(row).addClass(ctx._select.className);
      }
      for (i2 = 0, ien = ctx.aoColumns.length; i2 < ien; i2++) {
        if (ctx.aoColumns[i2]._select_selected || d._selected_cells && d._selected_cells[i2]) {
          (0, import_jquery5.default)(d.anCells[i2]).addClass(ctx._select.className);
        }
      }
    },
    sName: "select-deferRender"
  });
  api.on("preXhr.dt.dtSelect", function(e, settings) {
    if (settings !== api.settings()[0]) {
      return;
    }
    var rows = api.rows({ selected: true }).ids(true).filter(function(d) {
      return d !== void 0;
    });
    var cells = api.cells({ selected: true }).eq(0).map(function(cellIdx) {
      var id = api.row(cellIdx.row).id(true);
      return id ? { row: id, column: cellIdx.column } : void 0;
    }).filter(function(d) {
      return d !== void 0;
    });
    api.one("draw.dt.dtSelect", function() {
      api.rows(rows).select();
      if (cells.any()) {
        cells.each(function(id) {
          api.cells(id.row, id.column).select();
        });
      }
    });
  });
  api.on("draw.dtSelect.dt select.dtSelect.dt deselect.dtSelect.dt info.dt", function() {
    info(api);
    api.state.save();
  });
  api.on("destroy.dtSelect", function() {
    (0, import_jquery5.default)(api.rows({ selected: true }).nodes()).removeClass(api.settings()[0]._select.className);
    disableMouseSelection(api);
    api.off(".dtSelect");
    (0, import_jquery5.default)("body").off(".dtSelect" + _safeId(api.table().node()));
  });
}
function rowColumnRange(dt, type, idx, last) {
  var indexes = dt[type + "s"]({ search: "applied" }).indexes();
  var idx1 = import_jquery5.default.inArray(last, indexes);
  var idx2 = import_jquery5.default.inArray(idx, indexes);
  if (!dt[type + "s"]({ selected: true }).any() && idx1 === -1) {
    indexes.splice(import_jquery5.default.inArray(idx, indexes) + 1, indexes.length);
  } else {
    if (idx1 > idx2) {
      var tmp = idx2;
      idx2 = idx1;
      idx1 = tmp;
    }
    indexes.splice(idx2 + 1, indexes.length);
    indexes.splice(0, idx1);
  }
  if (!dt[type](idx, { selected: true }).any()) {
    dt[type + "s"](indexes).select();
  } else {
    indexes.splice(import_jquery5.default.inArray(idx, indexes), 1);
    dt[type + "s"](indexes).deselect();
  }
}
function clear(ctx, force) {
  if (force || ctx._select.style === "single") {
    var api = new jquery_dataTables_default.Api(ctx);
    api.rows({ selected: true }).deselect();
    api.columns({ selected: true }).deselect();
    api.cells({ selected: true }).deselect();
  }
}
function typeSelect(e, dt, ctx, type, idx) {
  var style = dt.select.style();
  var toggleable = dt.select.toggleable();
  var isSelected = dt[type](idx, { selected: true }).any();
  if (isSelected && !toggleable) {
    return;
  }
  if (style === "os") {
    if (e.ctrlKey || e.metaKey) {
      dt[type](idx).select(!isSelected);
    } else if (e.shiftKey) {
      if (type === "cell") {
        cellRange(dt, idx, ctx._select_lastCell || null);
      } else {
        rowColumnRange(
          dt,
          type,
          idx,
          ctx._select_lastCell ? ctx._select_lastCell[type] : null
        );
      }
    } else {
      var selected = dt[type + "s"]({ selected: true });
      if (isSelected && selected.flatten().length === 1) {
        dt[type](idx).deselect();
      } else {
        selected.deselect();
        dt[type](idx).select();
      }
    }
  } else if (style == "multi+shift") {
    if (e.shiftKey) {
      if (type === "cell") {
        cellRange(dt, idx, ctx._select_lastCell || null);
      } else {
        rowColumnRange(
          dt,
          type,
          idx,
          ctx._select_lastCell ? ctx._select_lastCell[type] : null
        );
      }
    } else {
      dt[type](idx).select(!isSelected);
    }
  } else {
    dt[type](idx).select(!isSelected);
  }
}
function _safeId(node) {
  return node.id.replace(/[^a-zA-Z0-9\-\_]/g, "-");
}
import_jquery5.default.each([
  { type: "row", prop: "aoData" },
  { type: "column", prop: "aoColumns" }
], function(i2, o) {
  jquery_dataTables_default.ext.selector[o.type].push(function(settings, opts, indexes) {
    var selected = opts.selected;
    var data;
    var out = [];
    if (selected !== true && selected !== false) {
      return indexes;
    }
    for (var i3 = 0, ien = indexes.length; i3 < ien; i3++) {
      data = settings[o.prop][indexes[i3]];
      if (selected === true && data._select_selected === true || selected === false && !data._select_selected) {
        out.push(indexes[i3]);
      }
    }
    return out;
  });
});
jquery_dataTables_default.ext.selector.cell.push(function(settings, opts, cells) {
  var selected = opts.selected;
  var rowData;
  var out = [];
  if (selected === void 0) {
    return cells;
  }
  for (var i2 = 0, ien = cells.length; i2 < ien; i2++) {
    rowData = settings.aoData[cells[i2].row];
    if (selected === true && rowData._selected_cells && rowData._selected_cells[cells[i2].column] === true || selected === false && (!rowData._selected_cells || !rowData._selected_cells[cells[i2].column])) {
      out.push(cells[i2]);
    }
  }
  return out;
});
var apiRegister = jquery_dataTables_default.Api.register;
var apiRegisterPlural = jquery_dataTables_default.Api.registerPlural;
apiRegister("select()", function() {
  return this.iterator("table", function(ctx) {
    jquery_dataTables_default.select.init(new jquery_dataTables_default.Api(ctx));
  });
});
apiRegister("select.blurable()", function(flag) {
  if (flag === void 0) {
    return this.context[0]._select.blurable;
  }
  return this.iterator("table", function(ctx) {
    ctx._select.blurable = flag;
  });
});
apiRegister("select.toggleable()", function(flag) {
  if (flag === void 0) {
    return this.context[0]._select.toggleable;
  }
  return this.iterator("table", function(ctx) {
    ctx._select.toggleable = flag;
  });
});
apiRegister("select.info()", function(flag) {
  if (flag === void 0) {
    return this.context[0]._select.info;
  }
  return this.iterator("table", function(ctx) {
    ctx._select.info = flag;
  });
});
apiRegister("select.items()", function(items) {
  if (items === void 0) {
    return this.context[0]._select.items;
  }
  return this.iterator("table", function(ctx) {
    ctx._select.items = items;
    eventTrigger(new jquery_dataTables_default.Api(ctx), "selectItems", [items]);
  });
});
apiRegister("select.style()", function(style) {
  if (style === void 0) {
    return this.context[0]._select.style;
  }
  return this.iterator("table", function(ctx) {
    if (!ctx._select) {
      jquery_dataTables_default.select.init(new jquery_dataTables_default.Api(ctx));
    }
    if (!ctx._select_init) {
      init(ctx);
    }
    ctx._select.style = style;
    var dt = new jquery_dataTables_default.Api(ctx);
    disableMouseSelection(dt);
    if (style !== "api") {
      enableMouseSelection(dt);
    }
    eventTrigger(new jquery_dataTables_default.Api(ctx), "selectStyle", [style]);
  });
});
apiRegister("select.selector()", function(selector) {
  if (selector === void 0) {
    return this.context[0]._select.selector;
  }
  return this.iterator("table", function(ctx) {
    disableMouseSelection(new jquery_dataTables_default.Api(ctx));
    ctx._select.selector = selector;
    if (ctx._select.style !== "api") {
      enableMouseSelection(new jquery_dataTables_default.Api(ctx));
    }
  });
});
apiRegisterPlural("rows().select()", "row().select()", function(select) {
  var api = this;
  if (select === false) {
    return this.deselect();
  }
  this.iterator("row", function(ctx, idx) {
    clear(ctx);
    ctx.aoData[idx]._select_selected = true;
    (0, import_jquery5.default)(ctx.aoData[idx].nTr).addClass(ctx._select.className);
  });
  this.iterator("table", function(ctx, i2) {
    eventTrigger(api, "select", ["row", api[i2]], true);
  });
  return this;
});
apiRegister("row().selected()", function() {
  var ctx = this.context[0];
  if (ctx && this.length && ctx.aoData[this[0]] && ctx.aoData[this[0]]._select_selected) {
    return true;
  }
  return false;
});
apiRegisterPlural("columns().select()", "column().select()", function(select) {
  var api = this;
  if (select === false) {
    return this.deselect();
  }
  this.iterator("column", function(ctx, idx) {
    clear(ctx);
    ctx.aoColumns[idx]._select_selected = true;
    var column = new jquery_dataTables_default.Api(ctx).column(idx);
    (0, import_jquery5.default)(column.header()).addClass(ctx._select.className);
    (0, import_jquery5.default)(column.footer()).addClass(ctx._select.className);
    column.nodes().to$().addClass(ctx._select.className);
  });
  this.iterator("table", function(ctx, i2) {
    eventTrigger(api, "select", ["column", api[i2]], true);
  });
  return this;
});
apiRegister("column().selected()", function() {
  var ctx = this.context[0];
  if (ctx && this.length && ctx.aoColumns[this[0]] && ctx.aoColumns[this[0]]._select_selected) {
    return true;
  }
  return false;
});
apiRegisterPlural("cells().select()", "cell().select()", function(select) {
  var api = this;
  if (select === false) {
    return this.deselect();
  }
  this.iterator("cell", function(ctx, rowIdx, colIdx) {
    clear(ctx);
    var data = ctx.aoData[rowIdx];
    if (data._selected_cells === void 0) {
      data._selected_cells = [];
    }
    data._selected_cells[colIdx] = true;
    if (data.anCells) {
      (0, import_jquery5.default)(data.anCells[colIdx]).addClass(ctx._select.className);
    }
  });
  this.iterator("table", function(ctx, i2) {
    eventTrigger(api, "select", ["cell", api.cells(api[i2]).indexes().toArray()], true);
  });
  return this;
});
apiRegister("cell().selected()", function() {
  var ctx = this.context[0];
  if (ctx && this.length) {
    var row = ctx.aoData[this[0][0].row];
    if (row && row._selected_cells && row._selected_cells[this[0][0].column]) {
      return true;
    }
  }
  return false;
});
apiRegisterPlural("rows().deselect()", "row().deselect()", function() {
  var api = this;
  this.iterator("row", function(ctx, idx) {
    ctx.aoData[idx]._select_selected = false;
    ctx._select_lastCell = null;
    (0, import_jquery5.default)(ctx.aoData[idx].nTr).removeClass(ctx._select.className);
  });
  this.iterator("table", function(ctx, i2) {
    eventTrigger(api, "deselect", ["row", api[i2]], true);
  });
  return this;
});
apiRegisterPlural("columns().deselect()", "column().deselect()", function() {
  var api = this;
  this.iterator("column", function(ctx, idx) {
    ctx.aoColumns[idx]._select_selected = false;
    var api2 = new jquery_dataTables_default.Api(ctx);
    var column = api2.column(idx);
    (0, import_jquery5.default)(column.header()).removeClass(ctx._select.className);
    (0, import_jquery5.default)(column.footer()).removeClass(ctx._select.className);
    api2.cells(null, idx).indexes().each(function(cellIdx) {
      var data = ctx.aoData[cellIdx.row];
      var cellSelected = data._selected_cells;
      if (data.anCells && (!cellSelected || !cellSelected[cellIdx.column])) {
        (0, import_jquery5.default)(data.anCells[cellIdx.column]).removeClass(ctx._select.className);
      }
    });
  });
  this.iterator("table", function(ctx, i2) {
    eventTrigger(api, "deselect", ["column", api[i2]], true);
  });
  return this;
});
apiRegisterPlural("cells().deselect()", "cell().deselect()", function() {
  var api = this;
  this.iterator("cell", function(ctx, rowIdx, colIdx) {
    var data = ctx.aoData[rowIdx];
    if (data._selected_cells !== void 0) {
      data._selected_cells[colIdx] = false;
    }
    if (data.anCells && !ctx.aoColumns[colIdx]._select_selected) {
      (0, import_jquery5.default)(data.anCells[colIdx]).removeClass(ctx._select.className);
    }
  });
  this.iterator("table", function(ctx, i2) {
    eventTrigger(api, "deselect", ["cell", api[i2]], true);
  });
  return this;
});
function i18n(label, def) {
  return function(dt) {
    return dt.i18n("buttons." + label, def);
  };
}
function namespacedEvents(config) {
  var unique = config._eventNamespace;
  return "draw.dt.DT" + unique + " select.dt.DT" + unique + " deselect.dt.DT" + unique;
}
function enabled(dt, config) {
  if (import_jquery5.default.inArray("rows", config.limitTo) !== -1 && dt.rows({ selected: true }).any()) {
    return true;
  }
  if (import_jquery5.default.inArray("columns", config.limitTo) !== -1 && dt.columns({ selected: true }).any()) {
    return true;
  }
  if (import_jquery5.default.inArray("cells", config.limitTo) !== -1 && dt.cells({ selected: true }).any()) {
    return true;
  }
  return false;
}
var _buttonNamespace = 0;
import_jquery5.default.extend(jquery_dataTables_default.ext.buttons, {
  selected: {
    text: i18n("selected", "Selected"),
    className: "buttons-selected",
    limitTo: ["rows", "columns", "cells"],
    init: function(dt, node, config) {
      var that = this;
      config._eventNamespace = ".select" + _buttonNamespace++;
      dt.on(namespacedEvents(config), function() {
        that.enable(enabled(dt, config));
      });
      this.disable();
    },
    destroy: function(dt, node, config) {
      dt.off(config._eventNamespace);
    }
  },
  selectedSingle: {
    text: i18n("selectedSingle", "Selected single"),
    className: "buttons-selected-single",
    init: function(dt, node, config) {
      var that = this;
      config._eventNamespace = ".select" + _buttonNamespace++;
      dt.on(namespacedEvents(config), function() {
        var count = dt.rows({ selected: true }).flatten().length + dt.columns({ selected: true }).flatten().length + dt.cells({ selected: true }).flatten().length;
        that.enable(count === 1);
      });
      this.disable();
    },
    destroy: function(dt, node, config) {
      dt.off(config._eventNamespace);
    }
  },
  selectAll: {
    text: i18n("selectAll", "Select all"),
    className: "buttons-select-all",
    action: function() {
      var items = this.select.items();
      this[items + "s"]().select();
    }
  },
  selectNone: {
    text: i18n("selectNone", "Deselect all"),
    className: "buttons-select-none",
    action: function() {
      clear(this.settings()[0], true);
    },
    init: function(dt, node, config) {
      var that = this;
      config._eventNamespace = ".select" + _buttonNamespace++;
      dt.on(namespacedEvents(config), function() {
        var count = dt.rows({ selected: true }).flatten().length + dt.columns({ selected: true }).flatten().length + dt.cells({ selected: true }).flatten().length;
        that.enable(count > 0);
      });
      this.disable();
    },
    destroy: function(dt, node, config) {
      dt.off(config._eventNamespace);
    }
  },
  showSelected: {
    text: i18n("showSelected", "Show only selected"),
    className: "buttons-show-selected",
    action: function(e, dt, node, conf) {
      if (conf._filter) {
        var idx = jquery_dataTables_default.ext.search.indexOf(conf._filter);
        if (idx !== -1) {
          jquery_dataTables_default.ext.search.splice(idx, 1);
          conf._filter = null;
        }
        this.active(false);
      } else {
        var fn2 = function(s, data, idx2) {
          if (s !== dt.settings()[0]) {
            return true;
          }
          let row = s.aoData[idx2];
          return row._select_selected;
        };
        conf._filter = fn2;
        jquery_dataTables_default.ext.search.push(fn2);
        this.active(true);
      }
      dt.draw();
    }
  }
});
import_jquery5.default.each(["Row", "Column", "Cell"], function(i2, item) {
  var lc = item.toLowerCase();
  jquery_dataTables_default.ext.buttons["select" + item + "s"] = {
    text: i18n("select" + item + "s", "Select " + lc + "s"),
    className: "buttons-select-" + lc + "s",
    action: function() {
      this.select.items(lc);
    },
    init: function(dt) {
      var that = this;
      dt.on("selectItems.dt.DT", function(e, ctx, items) {
        that.active(items === lc);
      });
    }
  };
});
import_jquery5.default.fn.DataTable.select = jquery_dataTables_default.select;
(0, import_jquery5.default)(document).on("preInit.dt.dtSelect", function(e, ctx) {
  if (e.namespace !== "dt") {
    return;
  }
  jquery_dataTables_default.select.init(new jquery_dataTables_default.Api(ctx));
});

// node_modules/laravel-datatables-vite/js/buttons/helper.js
window._buildUrl = function(dt, action) {
  let url = dt.ajax.url() || "";
  let params = dt.ajax.params();
  params.action = action;
  return url + "?" + $.param(params);
};

// node_modules/laravel-datatables-vite/js/buttons/plugins.js
document.addEventListener("DOMContentLoaded", function() {
  let oTable = $("table");
  oTable.on("select.dt", function(e, dt, type, indexes) {
    dt.rows({ selected: true }).every(function(rowIdx, tableLoop, rowLoop) {
      var data = this.data();
      if (data.deleted_at == null) {
        dt.button("restore:name").disable();
        dt.button("forceDelete:name").disable();
        dt.button("forceDeleteSingle:name").disable();
      }
    });
  });
  oTable.on("deselect.dt", function(e, dt, type, indexes) {
    dt.rows({ selected: true }).every(function(rowIdx, tableLoop, rowLoop) {
      var data = this.data();
      if (data.deleted_at == null) {
        dt.button("restore:name").disable();
        dt.button("forceDelete:name").disable();
        dt.button("forceDeleteSingle:name").disable();
      }
    });
  });
});

// node_modules/laravel-datatables-vite/js/buttons/add.js
document.addEventListener("DOMContentLoaded", function() {
  $.fn.dataTable.ext.buttons.add = {
    name: "add",
    className: "buttons-add btn-success",
    text: '<i class="bi bi-plus"></i> New',
    action: function(e, dt, button, config) {
      let uri = window.location.toString();
      if (uri.indexOf("?") > 0) {
        uri = uri.substring(0, uri.indexOf("?"));
      }
      window.location = uri + "/create";
    }
  };
});

// node_modules/laravel-datatables-vite/js/buttons/export.js
document.addEventListener("DOMContentLoaded", function() {
  $.fn.dataTable.ext.buttons.export = {
    name: "export",
    extend: "collection",
    className: "btn-primary",
    text: 'Export&nbsp;<span class="caret"/>',
    buttons: [
      { extend: "csv", text: "CSV" },
      { extend: "excel", text: "Excel" },
      { extend: "pdf", text: "PDF" }
    ]
  };
});

// node_modules/laravel-datatables-vite/js/buttons/csv.js
document.addEventListener("DOMContentLoaded", function() {
  $.fn.dataTable.ext.buttons.csv = {
    name: "csv",
    className: "buttons-csv btn-primary",
    titleAttr: "Export as CSV",
    text: '<i class="bi bi-filetype-csv"></i>',
    action: function(e, dt, button, config) {
      window.location = _buildUrl(dt, "csv");
    }
  };
});

// node_modules/laravel-datatables-vite/js/buttons/excel.js
document.addEventListener("DOMContentLoaded", function() {
  $.fn.dataTable.ext.buttons.excel = {
    name: "excel",
    className: "buttons-excel btn-primary",
    titleAttr: "Export as Excel",
    text: '<i class="bi bi-file-earmark-excel"></i>',
    action: function(e, dt, button, config) {
      window.location = _buildUrl(dt, "excel");
    }
  };
});

// node_modules/laravel-datatables-vite/js/buttons/pdf.js
document.addEventListener("DOMContentLoaded", function() {
  $.fn.dataTable.ext.buttons.pdf = {
    name: "pdf",
    className: "buttons-pdf btn-primary",
    titleAttr: "Export as PDF",
    text: '<i class="bi bi-file-pdf"></i>',
    action: function(e, dt, button, config) {
      window.location = _buildUrl(dt, "pdf");
    }
  };
});

// node_modules/laravel-datatables-vite/js/buttons/print.js
document.addEventListener("DOMContentLoaded", function() {
  $.fn.dataTable.ext.buttons.print = {
    name: "print",
    className: "buttons-print btn-primary",
    titleAttr: "Print",
    text: '<i class="bi bi-printer"></i>',
    action: function(e, dt, button, config) {
      window.location = _buildUrl(dt, "print");
    }
  };
});

// node_modules/laravel-datatables-vite/js/buttons/reset.js
document.addEventListener("DOMContentLoaded", function() {
  $.fn.dataTable.ext.buttons.reset = {
    name: "reset",
    className: "btn-primary",
    titleAttr: "Reset",
    text: '<i class="bi bi-arrow-counterclockwise"></i>',
    action: function(e, dt, button, config) {
      $(".dataTable").find(":input").each(function() {
        $(this).val("");
      }).each(function(e2) {
        let val = $.fn.dataTable.util.escapeRegex($(this).val());
        dt.table().column($(this).closest("th").index()).search(val ? val : "", false, true);
      });
      dt.search("").draw();
    }
  };
});

// node_modules/laravel-datatables-vite/js/buttons/reload.js
document.addEventListener("DOMContentLoaded", function() {
  $.fn.dataTable.ext.buttons.reload = {
    name: "reload",
    className: "btn-primary",
    titleAttr: "Reload",
    text: '<i class="bi bi-arrow-repeat"></i>',
    action: function(e, dt, button, config) {
      dt.draw(false);
    },
    init: function(dt, node, config) {
      let instance = this;
      dt.on("processing.dt", (e, settings, processing) => {
        let button = $(node);
        if (processing) {
          button.html('<i class="spinner-border spinner-border-sm" role="status">\n  <span class="visually-hidden">Loading...</span>\n</i>');
        } else {
          button.html('<i class="bi bi-arrow-repeat"></i>');
        }
        button.attr("disabled", processing);
      });
    }
  };
});

// node_modules/laravel-datatables-vite/js/buttons/restore.js
document.addEventListener("DOMContentLoaded", function() {
  $.fn.dataTable.ext.buttons.restore = {
    name: "restore",
    extend: "selected",
    className: "buttons-restore btn-success",
    text: '<i class="bi bi-undo"></i> Restore',
    action: function(e, dt, node, config) {
      let editor = config.editor || dt.editor();
      editor.remove(dt.rows({ selected: true }).indexes(), {
        title: config.formTitle || "Restore Record",
        message: function(e2, dt2) {
          let row = dt2.row({ selected: true }).data();
          let msg = row.DTE_Restore || "Are you sure you want to restore record # " + row.DT_RowId + "?";
          return msg;
        },
        buttons: [
          {
            text: '<i class="bi bi-undo"></i> Restore',
            className: "btn btn-success btn-editor-restore",
            action: function() {
              this.submit(null, null, function(data) {
                data.action = "restore";
              });
            }
          },
          {
            text: "Cancel",
            className: "btn ml-2",
            action: function() {
              this.close();
            }
          }
        ]
      });
    }
  };
});

// node_modules/laravel-datatables-vite/js/buttons/duplicate.js
document.addEventListener("DOMContentLoaded", function() {
  $.fn.dataTable.ext.buttons.duplicate = {
    name: "duplicate",
    extend: "selected",
    className: "buttons-duplicate btn-success",
    text: '<i class="bi bi-copy"></i> Duplicate',
    action: function(e, dt, node, config) {
      let editor = config.editor || dt.editor();
      editor.edit(dt.rows({ selected: true }).indexes(), {
        title: config.formTitle || "Duplicate Record",
        buttons: config.formButtons || [
          {
            text: '<i class="bi bi-copy"></i> Duplicate',
            className: "btn btn-success btn-editor-duplicate",
            action: function() {
              this.submit();
            }
          },
          {
            text: "Cancel",
            className: "btn ml-2",
            action: function() {
              this.close();
            }
          }
        ]
      }).mode("create");
    }
  };
});

// node_modules/laravel-datatables-vite/js/buttons/duplicateSingle.js
document.addEventListener("DOMContentLoaded", function() {
  $.fn.dataTable.ext.buttons.duplicateSingle = {
    name: "duplicateSingle",
    extend: "selectedSingle",
    className: "buttons-duplicate btn-success",
    text: '<i class="bi bi-copy"></i> Duplicate',
    action: function(e, dt, node, config) {
      let editor = config.editor || dt.editor();
      editor.edit(dt.rows({ selected: true }).indexes(), {
        title: config.formTitle || "Duplicate Record",
        buttons: config.formButtons || [
          {
            text: '<i class="bi bi-copy"></i> Duplicate',
            className: "btn btn-success btn-editor-duplicate",
            action: function() {
              this.submit();
            }
          },
          {
            text: "Cancel",
            className: "btn ml-2",
            action: function() {
              this.close();
            }
          }
        ]
      }).mode("create");
    }
  };
});

// node_modules/laravel-datatables-vite/js/buttons/forceDelete.js
document.addEventListener("DOMContentLoaded", function() {
  $.fn.dataTable.ext.buttons.forceDelete = {
    name: "forceDelete",
    extend: "selected",
    className: "buttons-force-delete btn-danger",
    text: '<i class="bi bi-trash"></i> Force Delete',
    action: function(e, dt, node, config) {
      let editor = config.editor || dt.editor();
      editor.remove(dt.rows({ selected: true }).indexes(), {
        title: config.formTitle || "Force Delete Record(/s)",
        message: function(e2, dt2) {
          let data = dt2.rows(e2.modifier()).data();
          let rows = data[0].hasOwnProperty("DTE_Remove") ? data.pluck("DTE_Remove") : data.pluck("DT_RowId");
          return "Are you sure you want to force delete the following record(s)? <ul><li>" + rows.join("</li><li>") + "</li></ul>";
        },
        buttons: [
          {
            text: '<i class="bi bi-trash"></i> Delete',
            className: "btn btn-danger btn-editor-remove",
            action: function() {
              this.submit(null, null, function(data) {
                data.action = "forceDelete";
              });
            }
          },
          {
            text: "Cancel",
            className: "btn ml-2",
            action: function() {
              this.close();
            }
          }
        ]
      });
    }
  };
});

// node_modules/laravel-datatables-vite/js/buttons/forceDeleteSingle.js
document.addEventListener("DOMContentLoaded", function() {
  $.fn.dataTable.ext.buttons.forceDeleteSingle = {
    name: "forceDeleteSingle",
    extend: "selectedSingle",
    className: "buttons-force-delete btn-danger",
    text: '<i class="bi bi-trash"></i> Force Delete',
    action: function(e, dt, node, config) {
      let editor = config.editor || dt.editor();
      editor.remove(dt.rows({ selected: true }).indexes(), {
        title: config.formTitle || "Force Delete Record",
        message: function(e2, dt2) {
          let row = dt2.row({ selected: true }).data();
          let msg = row.DTE_Remove || "Are you sure you want to force delete record # " + row.DT_RowId + "?";
          return msg;
        },
        buttons: [
          {
            text: '<i class="bi bi-trash"></i> Delete',
            className: "btn btn-danger btn-editor-remove",
            action: function() {
              this.submit(null, null, function(data) {
                data.action = "forceDelete";
              });
            }
          },
          {
            text: "Cancel",
            className: "btn ml-2",
            action: function() {
              this.close();
            }
          }
        ]
      });
    }
  };
});

// node_modules/laravel-datatables-vite/js/buttons/url.js
document.addEventListener("DOMContentLoaded", function() {
  $.fn.dataTable.ext.buttons.url = {
    name: "url",
    extend: "selectedSingle",
    className: "buttons-url",
    text: "URL Action (change me)",
    action: function(e, dt, node, config) {
      let data = dt.row({ selected: true }).data();
      let key = config.data || "DTE_URL";
      let url = data[key] || "#";
      if (config.target == "_blank") {
        window.open(url, "_blank");
      } else {
        window.location = url;
      }
    }
  };
});

// node_modules/laravel-datatables-vite/js/buttons/ajax.js
document.addEventListener("DOMContentLoaded", function() {
  $.fn.dataTable.ext.buttons.ajax = {
    name: "ajax",
    extend: "selectedSingle",
    className: "buttons-ajax",
    text: "Ajax Action (Change Me)",
    action: function(e, dt, node, config) {
      let data = dt.row({ selected: true }).data();
      let url = data[config.data || "DTE_AJAX"] || "";
      let method = config.method || "POST";
      if (config.hasOwnProperty("confirmation")) {
        if (!confirm(config.confirmation)) {
          if (config.hasOwnProperty("onCancel"))
            config.onCancel();
          return false;
        }
      }
      $.ajax({
        url,
        method,
        data
      }).done((response) => {
        if (config.hasOwnProperty("onSuccess"))
          config.onSuccess(response);
        dt.draw();
      }).fail((err) => {
        if (config.hasOwnProperty("onError"))
          config.onError(err);
      });
    }
  };
});

// node_modules/laravel-datatables-vite/js/buttons/ajaxBatch.js
document.addEventListener("DOMContentLoaded", function() {
  $.fn.dataTable.ext.buttons.ajaxBatch = {
    name: "ajaxBatch",
    extend: "selected",
    className: "buttons-ajax",
    text: "Ajax Batch Action (Change Me)",
    action: function(e, dt, node, config) {
      let selected = dt.rows({ selected: true }).data();
      let formData = { data: [] };
      for (i = 0; i < selected.count(); i++) {
        formData.data.push(selected[i]);
      }
      if (config.hasOwnProperty("confirmation")) {
        if (!confirm(config.confirmation)) {
          if (config.hasOwnProperty("onCancel"))
            config.onCancel();
          return false;
        }
      }
      let url = config.url || "";
      let method = config.method || "POST";
      $.ajax({
        url,
        method,
        data: formData
      }).done((response) => {
        if (config.hasOwnProperty("onSuccess"))
          config.onSuccess(response);
        dt.draw();
      }).fail((err) => {
        if (config.hasOwnProperty("onError"))
          config.onError(err);
      });
    }
  };
});

// node_modules/laravel-datatables-vite/js/buttons/toggleScope.js
document.addEventListener("DOMContentLoaded", function() {
  $.fn.dataTable.ext.buttons.toggleScope = {
    name: "toggleScope",
    className: "buttons-toggle",
    text: '<i class="bi bi-square"></i> Toggle',
    action: function(e, dt, node, config) {
      node.find("i").toggleClass("bi-check-square").toggleClass("bi-square");
      let scope = config.scope;
      let key = config.key || "scopes";
      dt.on("preXhr." + scope, (e2, conf, data) => {
        data[key] = data[key] || {};
        data[key][scope] = node.find("i.bi-check-square").length;
      });
      dt.draw();
    }
  };
});

// node_modules/laravel-datatables-vite/js/buttons/softDeletes.js
document.addEventListener("DOMContentLoaded", function() {
  $.fn.dataTable.ext.buttons.withTrashed = {
    name: "withTrashed",
    className: "buttons-toggle",
    text: '<i class="bi bi-square"></i> Show Deleted',
    action: function(e, dt, node, config) {
      node.find("i").toggleClass("fa-check-square").toggleClass("fa-square");
      let key = config.key || "scopes";
      dt.on("preXhr.withTrashed", (e2, conf, data) => {
        data[key] = data[key] || {};
        data[key].withTrashed = node.find("i.fa-check-square").length;
      });
      dt.draw();
    }
  };
  $.fn.dataTable.ext.buttons.onlyTrashed = {
    name: "onlyTrashed",
    className: "buttons-toggle",
    text: '<i class="bi bi-square"></i> Only Deleted',
    action: function(e, dt, node, config) {
      node.find("i").toggleClass("fa-check-square").toggleClass("fa-square");
      let key = config.key || "scopes";
      dt.on("preXhr.onlyTrashed", (e2, conf, data) => {
        data[key] = data[key] || {};
        data[key].onlyTrashed = node.find("i.fa-check-square").length;
      });
      dt.draw();
    }
  };
});

// node_modules/laravel-datatables-vite/js/dataTables.renderers.js
document.addEventListener("DOMContentLoaded", function() {
  $.fn.dataTable.render.badge = function(badgeType) {
    return function(d, type, row) {
      if (!badgeType) {
        badgeType = "info";
      }
      return '<span class="badge badge-' + badgeType + '">' + d + "</span>";
    };
  };
  $.fn.dataTable.render.boolean = function() {
    return function(d) {
      let mode = "danger";
      let label = "N";
      if (d || "1" === d) {
        mode = "success";
        label = "Y";
      }
      return '<span class="badge badge-' + mode + '">' + label + "</span>";
    };
  };
  $.fn.dataTable.render.suffix = function(suffix) {
    return function(d) {
      return d + " " + suffix;
    };
  };
  $.fn.dataTable.render.prefix = function(prefix) {
    return function(d) {
      return prefix + " " + d;
    };
  };
});

// node_modules/laravel-datatables-vite/js/index.js
window.jQuery = window.$ = import_jquery7.default;
window.bootstrap = bootstrap_esm_exports;
window.DataTable = dataTables_bootstrap5_default;
import_jquery7.default.extend(true, dataTables_bootstrap5_default.defaults, {
  dom: "<'row'<'col-sm-12 mb-4'B>><'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>"
});
import_jquery7.default.extend(true, dataTables_bootstrap5_default.Buttons.defaults, {
  dom: {
    buttonLiner: {
      tag: ""
    }
  }
});
import_jquery7.default.extend(dataTables_bootstrap5_default.ext.classes, {
  sTable: "dataTable table table-striped table-bordered table-hover"
});
/*! Bundled license information:

jquery/dist/jquery.js:
  (*!
   * jQuery JavaScript Library v3.6.4
   * https://jquery.com/
   *
   * Includes Sizzle.js
   * https://sizzlejs.com/
   *
   * Copyright OpenJS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2023-03-08T15:28Z
   *)

bootstrap/dist/js/bootstrap.esm.js:
  (*!
    * Bootstrap v5.2.3 (https://getbootstrap.com/)
    * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

datatables.net/js/jquery.dataTables.mjs:
  (*! DataTables 1.13.4
   * ©2008-2023 SpryMedia Ltd - datatables.net/license
   *)

datatables.net-bs5/js/dataTables.bootstrap5.mjs:
  (*! DataTables Bootstrap 5 integration
   * 2020 SpryMedia Ltd - datatables.net/license
   *)

datatables.net-buttons/js/dataTables.buttons.mjs:
  (*! Buttons for DataTables 2.3.6
   * ©2016-2023 SpryMedia Ltd - datatables.net/license
   *)

datatables.net-buttons-bs5/js/buttons.bootstrap5.mjs:
  (*! Bootstrap integration for DataTables' Buttons
   * ©2016 SpryMedia Ltd - datatables.net/license
   *)

datatables.net-select/js/dataTables.select.mjs:
  (*! Select for DataTables 1.6.2
   * © SpryMedia Ltd - datatables.net/license/mit
   *)

datatables.net-select-bs5/js/select.bootstrap5.mjs:
  (*! Bootstrap 5 styling wrapper for Select
   * © SpryMedia Ltd - datatables.net/license
   *)
*/
//# sourceMappingURL=laravel-datatables-vite.js.map
