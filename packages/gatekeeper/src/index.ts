import OauthLogin, {
  AuthorizationGrantType,
  OauthLoginProps,
  ProviderLinks,
  ProviderLinksProps
} from './components/login';

import ConnectedLogout, { defaultLogoutProps, Logout, LogoutProps } from './components/logout';

import ConnectedOauthCallback, {
  defaultOauthCallbackProps,
  OauthCallback,
  OauthCallbackProps,
  RouteParams
} from './components/callback/implicit';

import ConnectedAPICallback, {
  APICallback,
  APICallbackProps,
  defaultAPICallbackProps
} from './components/callback/custom';

import {
  Component404,
  RenderErrorComponent,
  SuccessfulLogin,
  SuccessfulLoginProps
} from './components/callback/utils';

import gateKeeperReducer, {
  GateKeeperActionTypes,
  GateKeeperState,
  getResult,
  getSuccess,
  ImmutableGateKeeperState,
  initialState as initialGateKeeperState,
  RECORD,
  RecordAction,
  recordResult,
  reducerName as gateKeeperReducerName
} from './ducks/gatekeeper';

import {
  getOnadataUserInfo,
  getOpenSRPUserInfo,
  getProviderFromOptions,
  OauthOptions,
  Providers,
  UserInfoFnType
} from './helpers/oauth';

import { fetchUser, oauth2Callback } from './helpers/services';

import { errorCallback, ErrorCallback } from './helpers/utils';

export {
  defaultLogoutProps,
  defaultOauthCallbackProps,
  errorCallback,
  fetchUser,
  gateKeeperReducer,
  gateKeeperReducerName,
  getOnadataUserInfo,
  getOpenSRPUserInfo,
  getProviderFromOptions,
  getResult,
  getSuccess,
  initialGateKeeperState,
  oauth2Callback,
  recordResult,
  Component404,
  ConnectedLogout,
  ConnectedOauthCallback,
  ErrorCallback,
  GateKeeperActionTypes,
  GateKeeperState,
  ImmutableGateKeeperState,
  Logout,
  LogoutProps,
  OauthCallback,
  OauthCallbackProps,
  OauthLogin,
  OauthLoginProps,
  OauthOptions,
  Providers,
  ProviderLinks,
  ProviderLinksProps,
  SuccessfulLogin,
  SuccessfulLoginProps,
  RecordAction,
  RenderErrorComponent,
  RouteParams,
  UserInfoFnType,
  RECORD,
  ConnectedAPICallback,
  defaultAPICallbackProps,
  APICallback,
  APICallbackProps,
  AuthorizationGrantType
};
