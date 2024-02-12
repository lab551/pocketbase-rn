import { combineReducers } from 'redux';
import { RecordAction, ReduxRecord, records } from './records';
import { SubscriptionAction, subscriptions } from './subscriptions';

export const appReducer = combineReducers<{
  records: (state: ReduxRecord | undefined, action: RecordAction) => ReduxRecord;
  subscriptions: (state: string[] | undefined, action: SubscriptionAction) => string[];
}>({
  records,
  subscriptions,
});

export type State = ReturnType<typeof appReducer>;
