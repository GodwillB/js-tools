import { Dictionary } from '@onaio/utils';
import { DrillDownColumn } from '../components/TableJSX';
import { DrillDownTableProps } from './types';
/** Takes an object and returns columns that are compatible with react-table
 * derived from the object's keys
 */
export declare function columnsFromObjects<D extends object>(items: D[]): Array<DrillDownColumn<D>>;
export declare const defaultDrillDownFilter: (
  props: DrillDownTableProps<Dictionary<any>>,
  parentId: string
) => Array<Dictionary<any>>;
