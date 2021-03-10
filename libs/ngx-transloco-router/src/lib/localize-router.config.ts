import {InjectionToken, Provider} from '@angular/core';
import {Routes} from '@angular/router';
import {LocalizeRouterModule} from './localize-router.module';

/**
 * Guard to make sure we have single initialization of forRoot
 */
export const LOCALIZE_ROUTER_FORROOT_GUARD = new InjectionToken<LocalizeRouterModule>('LOCALIZE_ROUTER_FORROOT_GUARD');

/**
 * Static provider for keeping track of routes
 */
export const RAW_ROUTES: InjectionToken<Routes[]> = new InjectionToken<Routes[]>('RAW_ROUTES');

/**
 * Namespace for fail proof access of CacheMechanism
 */
export enum CacheMechanism {
  LocalStorage = 'LocalStorage',
  Cookie = 'Cookie'
}

/**
 * Type for default language function
 * Used to override basic behaviour
 */
export type DefaultLanguageFunction = (languages: string[], cachedLang?: string, browserLang?: string) => string;

/**
 * Config interface for LocalizeRouter
 */
export type LocalizeRouterConfig = {
  parser?: Provider;
  translateRoute?: boolean;
  useCachedLang?: boolean;
  cacheMechanism?: CacheMechanism;
  cacheName?: string;
  defaultLangFunction?: DefaultLanguageFunction;
  alwaysSetPrefix?: boolean;
  cookieFormat?: string;
  initialNavigation?: boolean;
  prefix?: string;
  escapePrefix?: string;
}

const LOCALIZE_CACHE_NAME = 'LOCALIZE_DEFAULT_LANGUAGE';
const DEFAULT_COOKIE_FORMAT = '{{value}};{{expires}}';
const DEFAULT_INITIAL_NAVIGATION = false;

/*
 * New configuration method
 */

export const LOCALIZE_ROUTER_CONFIG = new InjectionToken('LOCALIZE_ROUTER_CONFIG', {
  providedIn: 'root',
  factory: () => {
    return {};
  }
});

export const defaultConfig: LocalizeRouterConfig = {
  translateRoute: false,
  useCachedLang: true,
  alwaysSetPrefix: true,
  cacheMechanism: CacheMechanism.LocalStorage,
  cacheName: LOCALIZE_CACHE_NAME,
  defaultLangFunction: void 0,
  cookieFormat: DEFAULT_COOKIE_FORMAT,
  initialNavigation: DEFAULT_INITIAL_NAVIGATION,
  prefix: 'ROUTES.',
  escapePrefix: '!'
};

export function localizeRouterConfig(config: Partial<LocalizeRouterConfig> = defaultConfig): LocalizeRouterConfig {
  return {...defaultConfig, ...config};
}

