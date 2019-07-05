import { getFormData } from '../utils';

describe('superset-connector/utils', () => {
  it('getFormData should work correctly', async () => {
    // test row_limit
    expect(getFormData(2345)).toEqual({ adhoc_filters: [], row_limit: 2345 });

    // test SQL filter
    expect(
      getFormData(1000, [{ sqlExpression: "plan_id+=+'10f9e9fa'+AND+goal_id+!=+'73'" }])
    ).toEqual({
      adhoc_filters: [
        {
          clause: 'WHERE',
          expressionType: 'SQL',
          sqlExpression: "plan_id+=+'10f9e9fa'+AND+goal_id+!=+'73'"
        }
      ],
      row_limit: 1000
    });

    // test adhoc filter
    expect(
      getFormData(1000, [{ comparator: '10f9e9fa', operator: '==', subject: 'plan_id' }])
    ).toEqual({
      adhoc_filters: [
        {
          clause: 'WHERE',
          comparator: '10f9e9fa',
          expressionType: 'SIMPLE',
          operator: '==',
          subject: 'plan_id'
        }
      ],
      row_limit: 1000
    });

    // test everything altogether
    expect(
      getFormData(3000, [
        { sqlExpression: "plan_id+=+'10f9e9fa'+AND+goal_id+!=+'73'" },
        { comparator: '10f9e9fa', operator: '==', subject: 'plan_id' }
      ])
    ).toEqual({
      adhoc_filters: [
        {
          clause: 'WHERE',
          expressionType: 'SQL',
          sqlExpression: "plan_id+=+'10f9e9fa'+AND+goal_id+!=+'73'"
        },
        {
          clause: 'WHERE',
          comparator: '10f9e9fa',
          expressionType: 'SIMPLE',
          operator: '==',
          subject: 'plan_id'
        }
      ],
      row_limit: 3000
    });
  });
});
