import { Registry } from '@onaio/redux-reducer-registry';
import React from 'react';
import { ActionCreator } from 'redux';
/**
 * interface to describe Base options
 * @typeparam TAction - the type definition for the Action.
 * @typeparam TSelector - the type definition for the Selector.
 */
export interface CBVOptions<TAction, TSelector> {
  actionCreator: ActionCreator<TAction> /** The action creator function to use */;
  returnPropName: string /** The name of the prop used in mapStateToProps which represents the variable fetched from the redux state */;
  dispatchPropName: string /** The name of the prop used in mapDispatchToProps which represents the dispatch-able action creator */;
  selector: TSelector /** The selector function to use when getting the value from the Redux store */;
}
/**
 * Base class
 *
 * This class is initialized with the following parameters:
 *    - component: a react component
 *    - options: an object representing options for Base
 *
 * The class's render method will then return the same component wrapped in a
 * higher order component that has been connected to the redux store, and which
 * knows how to fetch data for display.
 *
 * The end goal is a quick and convenient way to display a list of objects without
 * having to worry about boilerplate code that deal with fetching objects and
 * storing them in a Redux store.
 *
 * Every method in this class can and should be overwritten to cater to custom needs.
 *
 * @typeparam ActionType - the type definition for the Action.
 * @typeparam SelectorType - the type definition for the Selector.
 * @typeparam PropsType - the type definition for the props that the connected component takes.
 * @typeparam RootState - the type definition for the Redux store (global state).
 */
export declare abstract class Base<ActionType, SelectorType, PropsType, RootState = Registry> {
  public Component: React.ElementType;
  public options: CBVOptions<ActionType, SelectorType>;
  /** constructor */
  constructor(component: React.ElementType, options: CBVOptions<ActionType, SelectorType>);
  /**
   * This function returns a Higher Order component whose job is to wrap around
   * the target component, and pass on props to it.
   *
   * This must be implemented.
   */
  public abstract getHOC(): React.ComponentType<any>;
  /**
   * The mapDispatchToProps function
   * You may override this for more custom needs.
   */
  public getMapDispatchToProps(): {
    [x: string]: ActionCreator<ActionType>;
  };
  /**
   * The mapStateToProps function
   *
   * This must be implemented.
   */
  public abstract getMapStateToProps(): (
    state: RootState,
    ownProps: PropsType
  ) => {
    [key: string]: any;
  };
  /**
   * This function simply connects the Higher Order Component to the redux
   * store.
   */
  public getConnectedHOC(): import('react-redux').ConnectedComponent<
    React.ComponentType<any>,
    Pick<any, symbol> & PropsType
  >;
  /**
   * This function returns the connected higher order component.
   */
  public render(): import('react-redux').ConnectedComponent<
    React.ComponentType<any>,
    Pick<any, symbol> & PropsType
  >;
}
