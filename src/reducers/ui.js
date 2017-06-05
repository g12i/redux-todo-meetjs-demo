import uuid from 'uuid';

const SHOW_EDITOR = 'ui/SHOW_EDITOR';
const HIDE_EDITOR = 'ui/HIDE_EDITOR';

export const showEditor = () => ({ type: SHOW_EDITOR });
export const hideEditor = () => ({ type: HIDE_EDITOR });

export default function (state = { editorVisible: false }, action) {
  switch (action.type) {
    case SHOW_EDITOR:
      return { editorVisible: true };
    case HIDE_EDITOR:
      return { editorVisible: false };
    default:
      return state;
  }
}
