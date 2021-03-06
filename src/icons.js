import { ICONS_PROVIDER } from './settings';
import { warn } from './helpers';

function ionIconsLoader(name) {
  return fetch(`https://unpkg.com/ionicons@5.3.1-1/dist/svg/${name}.svg`)
    .then(response => response.ok ? response.text() : '');
}

function featherIconsLoader(name) {
  name = name.replace('-outline', '');

  return fetch(`https://unpkg.com/feather-icons@4/dist/icons/${name}.svg`)
    .then(response => response.ok ? response.text() : '');
}

function evaIconsLoader(name) {
  return fetch(`https://unpkg.com/eva-icons@1/${name.endsWith('-outline') ? 'outline' : 'fill'}/svg/${name}.svg`)
    .then(response => response.ok ? response.text() : '');
}

let loader = (name) => {
  if (ICONS_PROVIDER in Icons.loaders) {
    return Icons.loaders[ICONS_PROVIDER](name);
  }

  warn('icon not found', { name });

  return Promise.resolve('');
}

const ICONS_CACHE = {};

const Icons = {
  load(names, type) {
    if (names in ICONS_CACHE) return ICONS_CACHE[names];

    return ICONS_CACHE[names] = Promise
      .all(names.split(/\s+/g)
        .map(name => {
          if (!name || typeof name !== 'string' || !name.trim()) return Promise.resolve('');

          return loader(name, type)
            .catch(() => '');
        }))
      .then(list => {
        return list.find(iconData => !!iconData);
      })
      .catch(e => warn(e));
  },
  setLoader(_loader) {
    loader = _loader;
  },
  loaders: {
    feather: featherIconsLoader,
    eva: evaIconsLoader,
    ion: ionIconsLoader,
  },
}

export default Icons;
