globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, readBody, lazyEventHandler, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { klona } from 'klona';
import defu, { defuFn } from 'defu';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import unstorage_47drivers_47fs from 'unstorage/drivers/fs';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, relative, join } from 'pathe';
import { generateJSON } from '@intlify/bundle-utils';
import { createIPX, createIPXMiddleware } from 'ipx';
import gracefulShutdown from 'http-graceful-shutdown';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "i18n": {
      "experimental": {
        "jsTsFormatResource": false
      },
      "baseUrl": ""
    }
  },
  "i18n": {
    "precompile": {
      "strictMessage": true,
      "escapeHtml": false
    }
  },
  "ipx": {
    "dir": "../public",
    "domains": [],
    "sharp": {},
    "alias": {}
  }
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('i18n', unstorage_47drivers_47fs({"driver":"fs","base":"C:\\Wasaf\\mohir-motion\\.nuxt\\i18n","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function trapUnhandledNodeErrors() {
  {
    process.on(
      "unhandledRejection",
      (err) => console.error("[nitro] [unhandledRejection] " + err)
    );
    process.on(
      "uncaughtException",
      (err) => console.error("[nitro]  [uncaughtException] " + err)
    );
  }
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(html);
});

const assets = {
  "/1.png": {
    "type": "image/png",
    "etag": "\"22d76-8z8VMTNdKW3mJ8Wdo3Q6q1jKD4I\"",
    "mtime": "2025-09-03T17:36:59.231Z",
    "size": 142710,
    "path": "../public/1.png"
  },
  "/2.png": {
    "type": "image/png",
    "etag": "\"22e5c-OhDZh2Sx3CWtk39zDtQ5G3VWMhQ\"",
    "mtime": "2025-09-03T17:36:54.723Z",
    "size": 142940,
    "path": "../public/2.png"
  },
  "/3.png": {
    "type": "image/png",
    "etag": "\"262b4-jmLX1TEyZbMU2ss9hz2xxjlanFk\"",
    "mtime": "2025-09-03T17:36:48.760Z",
    "size": 156340,
    "path": "../public/3.png"
  },
  "/4.png": {
    "type": "image/png",
    "etag": "\"1f351-dd2JltUu1hUgAyDOiFldfnEcucQ\"",
    "mtime": "2025-09-03T17:36:48.793Z",
    "size": 127825,
    "path": "../public/4.png"
  },
  "/about.png": {
    "type": "image/png",
    "etag": "\"1563d-o/dvpZv04jXDIySbekwiiKa958M\"",
    "mtime": "2025-09-03T17:36:48.732Z",
    "size": 87613,
    "path": "../public/about.png"
  },
  "/background-services.jpg": {
    "type": "image/jpeg",
    "etag": "\"3de4-CDMo3U2FGItSrl98c5iynhB5/Ms\"",
    "mtime": "2025-08-14T12:33:55.089Z",
    "size": 15844,
    "path": "../public/background-services.jpg"
  },
  "/bg-gradient-1.jpeg": {
    "type": "image/jpeg",
    "etag": "\"621f-GlGuXSYypQxiIIPoflPN3/sOxJ0\"",
    "mtime": "2025-08-14T12:33:55.089Z",
    "size": 25119,
    "path": "../public/bg-gradient-1.jpeg"
  },
  "/bg-gradient-1.webp": {
    "type": "image/webp",
    "etag": "\"11de-e2qwW3YZpIb8wxG21Q+QXAmPvSw\"",
    "mtime": "2025-08-14T12:33:55.089Z",
    "size": 4574,
    "path": "../public/bg-gradient-1.webp"
  },
  "/bg-gradient-2.jpeg": {
    "type": "image/jpeg",
    "etag": "\"670c-hNEZb5zkLaeNA+uaFmVOyiybKSI\"",
    "mtime": "2025-08-14T12:33:55.089Z",
    "size": 26380,
    "path": "../public/bg-gradient-2.jpeg"
  },
  "/bg.jpg": {
    "type": "image/jpeg",
    "etag": "\"1b82d-QzcrnqknGPnCX8+pQ0Rogbn9iqY\"",
    "mtime": "2025-08-14T12:33:55.089Z",
    "size": 112685,
    "path": "../public/bg.jpg"
  },
  "/bgg.png": {
    "type": "image/png",
    "etag": "\"8e1c4-DtEJexlT+rzTTuxXqCJ2sS/A9L4\"",
    "mtime": "2025-09-03T18:50:19.971Z",
    "size": 582084,
    "path": "../public/bgg.png"
  },
  "/car.webp": {
    "type": "image/webp",
    "etag": "\"6a5e8-wJSw52h6gQJCAzCaOjoN8BexUvg\"",
    "mtime": "2025-08-14T12:33:55.108Z",
    "size": 435688,
    "path": "../public/car.webp"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"bdfe-Rby6karj4Uu9BBKmSXC/PVFjyMs\"",
    "mtime": "2025-08-14T12:33:55.108Z",
    "size": 48638,
    "path": "../public/favicon.ico"
  },
  "/k.png": {
    "type": "image/png",
    "etag": "\"d93eb-0EMbV1/EF/zLGNhNJ42xMZKGaj8\"",
    "mtime": "2025-09-03T18:29:11.475Z",
    "size": 889835,
    "path": "../public/k.png"
  },
  "/keys.png": {
    "type": "image/png",
    "etag": "\"44a7-n/qO56pSuNPaGsEXeM7QXJMv8ek\"",
    "mtime": "2025-09-03T17:36:48.102Z",
    "size": 17575,
    "path": "../public/keys.png"
  },
  "/kotta.png": {
    "type": "image/png",
    "etag": "\"ec008-S1X5PaLEG9UvZZKpM0jXXYF5Acg\"",
    "mtime": "2025-09-03T18:24:38.533Z",
    "size": 966664,
    "path": "../public/kotta.png"
  },
  "/men.png": {
    "type": "image/png",
    "etag": "\"2b16-ee4F3ItflbXxjpsMo7R7iPFLQA8\"",
    "mtime": "2025-09-03T17:37:04.240Z",
    "size": 11030,
    "path": "../public/men.png"
  },
  "/mohir-l.svg": {
    "type": "image/svg+xml",
    "etag": "\"91a-hULY8mRHwQQ6gDeUfw4RKQxZqsw\"",
    "mtime": "2025-08-14T12:33:55.108Z",
    "size": 2330,
    "path": "../public/mohir-l.svg"
  },
  "/mohir-logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"10f-6PaAzJzwPuuwT5JbTD5TybVm3II\"",
    "mtime": "2025-08-14T12:33:55.108Z",
    "size": 271,
    "path": "../public/mohir-logo.svg"
  },
  "/mohir.jpg": {
    "type": "image/jpeg",
    "etag": "\"12826-1e9ZnC3GOcSRhpYIod2pIEpSAPc\"",
    "mtime": "2025-09-02T15:36:41.335Z",
    "size": 75814,
    "path": "../public/mohir.jpg"
  },
  "/mohir.png": {
    "type": "image/png",
    "etag": "\"133091-7ZHzU/QODBfLv6JJwAXvXUHK2sw\"",
    "mtime": "2025-09-03T16:29:53.492Z",
    "size": 1257617,
    "path": "../public/mohir.png"
  },
  "/murod.png": {
    "type": "image/png",
    "etag": "\"c8e5b-Ee3NQw+SrguIG6a9OEI4Khcqtnw\"",
    "mtime": "2025-09-02T15:58:21.401Z",
    "size": 822875,
    "path": "../public/murod.png"
  },
  "/murodd.png": {
    "type": "image/png",
    "etag": "\"74287-vJdDvqdID3pDCa2bGeqBt+Xn8kA\"",
    "mtime": "2025-09-02T16:14:29.088Z",
    "size": 475783,
    "path": "../public/murodd.png"
  },
  "/offline.png": {
    "type": "image/png",
    "etag": "\"5c67-U+10SCbUGZx0YbfO/5waIikEvN8\"",
    "mtime": "2025-09-03T17:30:38.612Z",
    "size": 23655,
    "path": "../public/offline.png"
  },
  "/online.png": {
    "type": "image/png",
    "etag": "\"5bd4-f9FTykuU8zpWtEI1U2LLy6valIQ\"",
    "mtime": "2025-09-03T17:30:42.695Z",
    "size": 23508,
    "path": "../public/online.png"
  },
  "/see.png": {
    "type": "image/png",
    "etag": "\"50c7-MCo+tWj2lxWmTNbguj9zvn1tImk\"",
    "mtime": "2025-09-03T17:36:48.525Z",
    "size": 20679,
    "path": "../public/see.png"
  },
  "/_nuxt/config.709b71ea.js": {
    "type": "application/javascript",
    "etag": "\"a7-OEtg1YP2kFNli7ovMx73OcUsTlQ\"",
    "mtime": "2025-09-03T19:21:38.940Z",
    "size": 167,
    "path": "../public/_nuxt/config.709b71ea.js"
  },
  "/_nuxt/entry.c0d39de6.js": {
    "type": "application/javascript",
    "etag": "\"3e609-5mkPURr3VeRA8aj2EyR8/mhPQFc\"",
    "mtime": "2025-09-03T19:21:38.947Z",
    "size": 255497,
    "path": "../public/_nuxt/entry.c0d39de6.js"
  },
  "/_nuxt/entry.e4fbd104.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"66f5-sU2T2u0CmIxnfIVKnvNQ3d6fvXw\"",
    "mtime": "2025-09-03T19:21:38.933Z",
    "size": 26357,
    "path": "../public/_nuxt/entry.e4fbd104.css"
  },
  "/_nuxt/error-404.23f2309d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-ivsbEmi48+s9HDOqtrSdWFvddYQ\"",
    "mtime": "2025-09-03T19:21:38.938Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.23f2309d.css"
  },
  "/_nuxt/error-404.bb937ed5.js": {
    "type": "application/javascript",
    "etag": "\"8d2-H/6lpsiR36N1vtuiI74JNOolwoQ\"",
    "mtime": "2025-09-03T19:21:38.940Z",
    "size": 2258,
    "path": "../public/_nuxt/error-404.bb937ed5.js"
  },
  "/_nuxt/error-500.aa16ed4d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-7j4Tsx89siDo85YoIs0XqsPWmPI\"",
    "mtime": "2025-09-03T19:21:38.938Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.aa16ed4d.css"
  },
  "/_nuxt/error-500.ccb17067.js": {
    "type": "application/javascript",
    "etag": "\"756-H9PfqfOB13jmhJ14AuckOo+HXyw\"",
    "mtime": "2025-09-03T19:21:38.940Z",
    "size": 1878,
    "path": "../public/_nuxt/error-500.ccb17067.js"
  },
  "/_nuxt/form.2a013dbd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"48-c4FXAZErXY1qMENWxiyM9zHbSiw\"",
    "mtime": "2025-09-03T19:21:38.938Z",
    "size": 72,
    "path": "../public/_nuxt/form.2a013dbd.css"
  },
  "/_nuxt/form.c0a1d3bb.js": {
    "type": "application/javascript",
    "etag": "\"ddb-Kufwtgy3AP1v0LJWr6zSexs6Soc\"",
    "mtime": "2025-09-03T19:21:38.942Z",
    "size": 3547,
    "path": "../public/_nuxt/form.c0a1d3bb.js"
  },
  "/_nuxt/homeLayout.4bd3a5a9.js": {
    "type": "application/javascript",
    "etag": "\"12a-mruba+KB7yu84IEGc3e2V/3+WM8\"",
    "mtime": "2025-09-03T19:21:38.938Z",
    "size": 298,
    "path": "../public/_nuxt/homeLayout.4bd3a5a9.js"
  },
  "/_nuxt/Icon.a1368400.js": {
    "type": "application/javascript",
    "etag": "\"547f-b5ahLtBNfd0W/aCK6Gbb50IRgI0\"",
    "mtime": "2025-09-03T19:21:38.946Z",
    "size": 21631,
    "path": "../public/_nuxt/Icon.a1368400.js"
  },
  "/_nuxt/Icon.d9a03bcb.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"43-FIQjxQamTE8VvBkNnRF8Go6KLPM\"",
    "mtime": "2025-09-03T19:21:38.938Z",
    "size": 67,
    "path": "../public/_nuxt/Icon.d9a03bcb.css"
  },
  "/_nuxt/IconCSS.6edc7bff.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"102-F5FEFmWVF9wjE1jgjQsXqGhD4Cc\"",
    "mtime": "2025-09-03T19:21:38.938Z",
    "size": 258,
    "path": "../public/_nuxt/IconCSS.6edc7bff.css"
  },
  "/_nuxt/IconCSS.99bb69fb.js": {
    "type": "application/javascript",
    "etag": "\"4d0-Szfa42uHiAVD0dTfrjZtHbv0gJQ\"",
    "mtime": "2025-09-03T19:21:38.945Z",
    "size": 1232,
    "path": "../public/_nuxt/IconCSS.99bb69fb.js"
  },
  "/_nuxt/index.0db5aed3.js": {
    "type": "application/javascript",
    "etag": "\"be7-jCpiphyyB6BxwRg7poiEXRJ7/j8\"",
    "mtime": "2025-09-03T19:21:38.946Z",
    "size": 3047,
    "path": "../public/_nuxt/index.0db5aed3.js"
  },
  "/_nuxt/index.30706500.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3fd-b3FAP6UL7UvkGiI4/p3oNDC+ack\"",
    "mtime": "2025-09-03T19:21:38.938Z",
    "size": 1021,
    "path": "../public/_nuxt/index.30706500.css"
  },
  "/_nuxt/mundarija.12662db2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"48-wlirLT26ZzemvP97pWuDt+ubgqQ\"",
    "mtime": "2025-09-03T19:21:38.938Z",
    "size": 72,
    "path": "../public/_nuxt/mundarija.12662db2.css"
  },
  "/_nuxt/mundarija.2c4a99f9.js": {
    "type": "application/javascript",
    "etag": "\"941-SoHhYidYwRCbOuSP8zeMW38xxcU\"",
    "mtime": "2025-09-03T19:21:38.942Z",
    "size": 2369,
    "path": "../public/_nuxt/mundarija.2c4a99f9.js"
  },
  "/_nuxt/not-found.c5e0b8e7.js": {
    "type": "application/javascript",
    "etag": "\"11d-usFCJ4YmbJymkx5u2ykLJYtu+nk\"",
    "mtime": "2025-09-03T19:21:38.942Z",
    "size": 285,
    "path": "../public/_nuxt/not-found.c5e0b8e7.js"
  },
  "/_nuxt/nuxt-link.aaaf3dcc.js": {
    "type": "application/javascript",
    "etag": "\"10f7-SwFrrpGJPd2osg6d5SC6V6FFpWU\"",
    "mtime": "2025-09-03T19:21:38.938Z",
    "size": 4343,
    "path": "../public/_nuxt/nuxt-link.aaaf3dcc.js"
  },
  "/_nuxt/offline.26ef9c2a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"ef-+MxDcAhHs0Ki0dg+xSnj6E5Sj+I\"",
    "mtime": "2025-09-03T19:21:38.938Z",
    "size": 239,
    "path": "../public/_nuxt/offline.26ef9c2a.css"
  },
  "/_nuxt/offline.3e932933.js": {
    "type": "application/javascript",
    "etag": "\"c33-jGISXsBvoRv4qlonTD+sa5T8pXY\"",
    "mtime": "2025-09-03T19:21:38.946Z",
    "size": 3123,
    "path": "../public/_nuxt/offline.3e932933.js"
  },
  "/_nuxt/online.821c023b.js": {
    "type": "application/javascript",
    "etag": "\"1b63-IsPOBLDMqF/PuKm+fK2qmuMzHSk\"",
    "mtime": "2025-09-03T19:21:38.946Z",
    "size": 7011,
    "path": "../public/_nuxt/online.821c023b.js"
  },
  "/_nuxt/online.c4bd6130.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"59-rfJ9OL/wtlBa8X+ih+fRPCnwm2k\"",
    "mtime": "2025-09-03T19:21:38.938Z",
    "size": 89,
    "path": "../public/_nuxt/online.c4bd6130.css"
  },
  "/_nuxt/premium.d3247ed2.js": {
    "type": "application/javascript",
    "etag": "\"b4b-uKUDrkiAPtq4//51b0wyrMQB9dA\"",
    "mtime": "2025-09-03T19:21:38.942Z",
    "size": 2891,
    "path": "../public/_nuxt/premium.d3247ed2.js"
  },
  "/_nuxt/vip.681f71be.js": {
    "type": "application/javascript",
    "etag": "\"b42-pLwzRf560H6dfaYXWCdys7gEPsw\"",
    "mtime": "2025-09-03T19:21:38.942Z",
    "size": 2882,
    "path": "../public/_nuxt/vip.681f71be.js"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const BASE_KEY = "i18n";
const CONFIG_KEY = "config";
const configStorage = prefixStorage(useStorage(), BASE_KEY);
const PRECOMPILED_LOCALE_KEY = "i18n:locales";
const localeStorage = prefixStorage(useStorage(), PRECOMPILED_LOCALE_KEY);
const resolveKey = (key) => `${key}.js`;
const localeKey = (locale, hash) => `${locale}-${hash}`;
const configKey = (hash) => `${CONFIG_KEY}-${hash}`;
const _TAIqqt = defineEventHandler(async (event) => {
  const body = await readBody(event);
  validate(body);
  const cacheCode = await getCacheCode(body);
  if (cacheCode) {
    await setResponseHeader(event, "content-type", "text/javascript");
    return cacheCode.toString();
  }
  const [code, errors] = generateCode(body);
  if (errors.length > 0) {
    throw createError({ statusMessage: errors.join("|"), statusCode: 400 });
  }
  await setCacheCode(code, body);
  await setResponseHeader(event, "content-type", "text/javascript");
  return code;
});
function validate(body) {
  if (!body.type) {
    throw createError({ statusMessage: `require the 'type'`, statusCode: 400 });
  }
  if (body.type === "locale") {
    if (!body.locale) {
      throw createError({ statusMessage: `require the 'locale'`, statusCode: 400 });
    }
  }
  if (!body.hash) {
    throw createError({ statusMessage: `require the 'hash'`, statusCode: 400 });
  }
  if (!body.resource) {
    throw createError({ statusMessage: `require the 'resource'`, statusCode: 400 });
  }
}
async function getCacheCode({ type, locale, hash }) {
  if (type === "locale") {
    return await localeStorage.getItem(resolveKey(localeKey(locale, hash)));
  } else if (type === "config") {
    return await configStorage.getItem(resolveKey(configKey(hash)));
  } else {
    return null;
  }
}
function generateCode(body) {
  const errors = [];
  const {
    i18n: {
      precompile: { strictMessage, escapeHtml }
    }
  } = useRuntimeConfig();
  const env = "production";
  let gen = "";
  if (body.type === "locale") {
    const { code } = generateJSON(JSON.stringify(body.resource), {
      env,
      strictMessage,
      escapeHtml,
      onError: (error) => {
        errors.push(error);
      }
    });
    gen = code;
  } else if (body.type === "config") {
    gen += `export default {
`;
    const codes = [];
    Object.keys(body.resource).reduce((codes2, key) => {
      const { code } = generateJSON(JSON.stringify(body.resource[key]), {
        type: "bare",
        env,
        strictMessage,
        escapeHtml,
        onError: (error) => {
          errors.push(error);
        }
      });
      codes2.push(`  ${JSON.stringify(key)}: ${code},
`);
      return codes2;
    }, codes);
    gen += codes.join("");
    gen += `}
`;
  }
  return [gen, errors];
}
async function setCacheCode(code, { type, locale, hash }) {
  if (type === "locale") {
    await localeStorage.setItem(resolveKey(localeKey(locale, hash)), code);
  } else if (type === "config") {
    await configStorage.setItem(resolveKey(configKey(hash)), code);
  }
}

/*!
  * shared v9.3.0-beta.17
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
/**
 * Original Utilities
 * written by kazuya kawaguchi
 */
const isFunction = (val) => typeof val === 'function';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isObject = (val) => val !== null && typeof val === 'object';

const _xdQQgg = defineEventHandler(async (event) => {
  const hash = event.context.params?.hash;
  if (hash == null) {
    throw createError({ statusMessage: `require the 'hash'`, statusCode: 400 });
  }
  const i18nMeta = await getI18nMeta();
  const [filename] = hash.split(".");
  const target = i18nMeta[filename];
  const loadPath = await resolveModule(target.path);
  const loader = await import(loadPath).then((m) => m.default || m);
  if (target.type === "locale") {
    if (target.locale == null) {
      throw createError({ statusMessage: `not found locale`, statusCode: 500 });
    }
    const resource = await loader(target.locale);
    const code = await precompileLocale(target.locale, filename, resource);
    await setResponseHeader(event, "content-type", "text/javascript");
    return code;
  } else if (target.type === "config") {
    const config = isFunction(loader) ? await loader() : isObject(loader) ? loader : {};
    const messages = config.messages || {};
    const code = await precompileConfig(filename, messages);
    await setResponseHeader(event, "content-type", "text/javascript");
    return code;
  } else {
    throw new Error("Invalid type");
  }
});
async function getI18nMeta() {
  return await useStorage().getItem("build:dist:server:i18n-meta.json");
}
async function resolveModule(path) {
  const storage = await useStorage();
  const rootMount = await storage.getMount("root");
  const root = rootMount.driver.options.base;
  const rootRelative = relative(new URL(globalThis._importMeta_.url).pathname, root);
  return join(rootRelative, "dist/server", path);
}
async function precompileLocale(locale, filename, messages) {
  return await $fetch("/__i18n__/precompile", {
    method: "POST",
    body: {
      locale,
      type: "locale",
      hash: filename,
      resource: messages
    }
  });
}
async function precompileConfig(filename, messages) {
  return await $fetch("/__i18n__/precompile", {
    method: "POST",
    body: {
      type: "config",
      hash: filename,
      resource: getNeedPrecompileMessages(messages)
    }
  });
}
function deepCopy(src, des, predicate) {
  for (const key in src) {
    if (isObject(src[key])) {
      if (!isObject(des[key]))
        des[key] = {};
      deepCopy(src[key], des[key], predicate);
    } else {
      if (predicate) {
        if (predicate(src[key], des[key])) {
          des[key] = src[key];
        }
      } else {
        des[key] = src[key];
      }
    }
  }
}
function getNeedPrecompileMessages(messages) {
  const needPrecompileMessages = {};
  const predicate = (src) => !isFunction(src);
  for (const [locale, message] of Object.entries(messages)) {
    const dest = needPrecompileMessages[locale] = {};
    deepCopy(message, dest, predicate);
  }
  return needPrecompileMessages;
}

const _SApAFI = lazyEventHandler(() => {
  const opts = useRuntimeConfig().ipx || {};
  const ipxOptions = {
    ...opts,
    // TODO: Switch to storage API when ipx supports it
    dir: opts.dir ? fileURLToPath(new URL(opts.dir, globalThis._importMeta_.url)) : void 0
  };
  const ipx = createIPX(ipxOptions);
  const middleware = createIPXMiddleware(ipx);
  return eventHandler(async (event) => {
    event.node.req.url = withLeadingSlash(event.context.params._);
    await middleware(event.node.req, event.node.res);
  });
});

const _lazy_hVFnUb = () => import('../handlers/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_hVFnUb, lazy: true, middleware: false, method: undefined },
  { route: '/__i18n__/precompile', handler: _TAIqqt, lazy: false, middleware: false, method: "post" },
  { route: '/__i18n__/prerender/:hash', handler: _xdQQgg, lazy: false, middleware: false, method: "get" },
  { route: '/_ipx/**', handler: _SApAFI, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_hVFnUb, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || {};
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: $fetch });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT, 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  gracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((err) => {
          console.error(err);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const listener = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
