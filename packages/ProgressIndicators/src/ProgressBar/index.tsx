import { Color } from 'csstype';
import React, { Component } from 'react';

export interface IndicatorThresholdItem {
  color: Color;
  name: string;
  orEquals?: boolean;
  value: number;
}

/** Props for ProgressBar */
export interface ProgressBarProps {
  animate: boolean /** apply animation to progressBar */;
  decimalPoints: number /** Rounds off the value to this number of decimal places */;
  height: string /** resizes the height of the progressBar */;
  min: number /** set lower bound for the progressBar range */;
  max: number /** set upper bound for the progressBar range */;
  value: number /** Represents the progress bar value */;
  lineColor: string /** set line colors */;
  lineColorThresholds?: { [key: string]: IndicatorThresholdItem } /** set linecolor threshold */;
  cssClass: string /** sets css gradient over progressBar */;
  showLabel: boolean /** set label on progressBar */;
  stripped: boolean /** set strips in progressBar */;
}

/** default props for ProgressBar */
export const defaultProgressBarProps: Partial<ProgressBarProps> = {
  animate: false,
  cssClass: 'progress-bar-striped',
  decimalPoints: 0,
  height: '10px',
  lineColor: '#0000FF',
  lineColorThresholds: undefined,
  max: 100,
  min: 0,
  showLabel: false,
  stripped: false,
  value: 0
};

/** Displays configurable progress bar */
class ProgressBar extends Component<ProgressBarProps, {}> {
  public static defaultProps = defaultProgressBarProps;

  constructor(props: ProgressBarProps) {
    super(props);
  }

  public render() {
    const { props } = this;
    const {
      animate,
      decimalPoints,
      value,
      lineColor,
      cssClass,
      stripped,
      lineColorThresholds,
      showLabel
    } = props;
    let backgroundColor = lineColor;
    const max = props.max || 100;
    const min = props.min || 0;
    let range = max - min;
    if (range <= 0) {
      range = 100;
    }
    const decimalValue = value / range;
    const percentValue = decimalValue * 100;
    const percentValueString = percentValue.toFixed(decimalPoints);

    // set the line color: if lineColorThresholds is not given; lineColor will be used
    if (lineColorThresholds) {
      // sort the color and their thresholds by the threshold value
      const ascendingThresholds = Object.keys(lineColorThresholds).sort(
        (e1, e2) => lineColorThresholds[e1].value - lineColorThresholds[e2].value
      );

      // top to bottom check to see which color threshold is matched first by the percentValue
      for (const item of ascendingThresholds) {
        if (
          lineColorThresholds[item].orEquals
            ? percentValue <= lineColorThresholds[item].value * 100
            : percentValue < lineColorThresholds[item].value * 100
        ) {
          backgroundColor = lineColorThresholds[item].color;
          break;
        }
      }
    }

    return (
      <div className="progress">
        <div
          className={`progress-bar ${stripped ? cssClass : ''}
          ${animate ? `${cssClass} progress-bar-animated` : ''}`}
          style={{
            backgroundColor: `${backgroundColor}`,
            width: `${percentValueString}%`
          }}
          role="progressbar"
          aria-valuenow={percentValue}
          aria-valuemin={min}
          aria-valuemax={max}
        >
          {showLabel ? `${percentValue}%` : null}
        </div>
      </div>
    );
  }
}

export default ProgressBar;
