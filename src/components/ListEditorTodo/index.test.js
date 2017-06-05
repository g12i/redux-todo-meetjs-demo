import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ListEditorTodo from '../ListEditorTodo';

describe('<ListEditorTodo />', () => {

  const noop = () => { };
  const props = {
    completed: false,
    content: 'content',
    id: 'id',
    onChangeTodoContent: noop,
    onChangeTodoCompletionStatus: noop,
  };

  it('set proper modifier to it\'s container', () => {
    const unCompletedWrapper = shallow(
      <ListEditorTodo {...props} completed={false} />
    );
    const completedWrapper = shallow(
      <ListEditorTodo {...props} completed />
    );
    expect(unCompletedWrapper.hasClass('ListEditor__Todo--UnCompleted')).to.be.true;
    expect(completedWrapper.hasClass('ListEditor__Todo--Completed')).to.be.true;
  });

  it('set renders input with correct value', () => {
    const wrapper = shallow(
      <ListEditorTodo {...props} />
    );
    expect(wrapper.find('input[type="text"]')).to.have.lengthOf(1);
    expect(wrapper.find('input[type="text"]').prop('value')).to.be.equal(props.content);
  });

  it('set renders checkbox with correct state', () => {
    const wrapper = shallow(
      <ListEditorTodo {...props} />
    );
    expect(wrapper.find('input[type="checkbox"]')).to.have.lengthOf(1);
    expect(wrapper.find('input[type="checkbox"]').prop('checked')).to.be.false;
  });

  it('calls #onChangeTodoContent when input is changed', () => {
    const onChangeTodoContent = sinon.spy();
    const wrapper = shallow(
      <ListEditorTodo {...props} onChangeTodoContent={onChangeTodoContent} />
    );
    const input = wrapper.find('input[type="text"]');
    input.simulate('change', { target: { value: 'new content' } });
    expect(onChangeTodoContent.callCount).to.be.equal(1);
    expect(onChangeTodoContent.calledWithMatch('id', 'new content')).to.be.true;
  });

  it('calls #onChangeTodoCompletionStatus when input is changed', () => {
    const onChangeTodoCompletionStatus = sinon.spy();
    const wrapper = shallow(
      <ListEditorTodo {...props} onChangeTodoCompletionStatus={onChangeTodoCompletionStatus} />
    );
    const input = wrapper.find('input[type="checkbox"]');
    input.simulate('change');
    expect(onChangeTodoCompletionStatus.callCount).to.be.equal(1);
    expect(onChangeTodoCompletionStatus.calledWithMatch('id')).to.be.true;
  });

});
