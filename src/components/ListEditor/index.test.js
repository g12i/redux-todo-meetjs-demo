import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Button from '../Button';
import ListEditor from '../ListEditor';
import ListEditorTodo from '../ListEditorTodo';

describe('<ListEditor />', () => {

  const noop = () => { };
  const props = {
    title: 'FooBar',
    id: 'foo-id',
    todos: [
      { id: '#1', content: 'Todo #1', completed: false },
      { id: '#2', content: 'Todo #2', completed: true },
      { id: '#3', content: 'Todo #3', completed: false },
    ],
    onChangeListTitle: noop,
    onRemoveList: noop,
  };

  it('renders input with title', () => {
    const wrapper = shallow(
      <ListEditor {...props} />
    );
    const input = wrapper.find('.ListEditor__TitleInput');
    expect(input).to.have.lengthOf(1);
    expect(input.prop('value')).to.be.equal('FooBar');
  });

  it('calls #onChangeListTitle when title input is changed', () => {
    const onChangeListTitle = sinon.spy();
    const wrapper = shallow(
      <ListEditor {...props} onChangeListTitle={onChangeListTitle} />
    );
    const input = wrapper.find('.ListEditor__TitleInput');
    input.simulate('change', { target: { value: 'foo' } });
    expect(onChangeListTitle.callCount).to.be.equal(1);
    expect(onChangeListTitle.calledWith('foo')).to.be.true;
  });

  it('renders sorted todos', () => {
    const wrapper = shallow(
      <ListEditor {...props} />
    );
    expect(wrapper.find(ListEditorTodo)).to.have.lengthOf(3);
    expect(wrapper.find(ListEditorTodo).at(0).prop('completed')).to.be.false;
    expect(wrapper.find(ListEditorTodo).at(1).prop('completed')).to.be.false;
    expect(wrapper.find(ListEditorTodo).at(2).prop('completed')).to.be.true;
  });

  it('renders clikable remove button', () => {
    const onRemoveList = sinon.spy();
    const wrapper = shallow(
      <ListEditor {...props} onRemoveList={onRemoveList} />
    );
    const $button = wrapper.find(Button).filterWhere(button => button.prop('children') === 'Remove');
    expect($button).to.have.lengthOf(1);
    $button.simulate('click');
    expect(onRemoveList.callCount).to.be.equal(1);
    expect(onRemoveList.calledWith('foo-id')).to.be.true;
  });

});
