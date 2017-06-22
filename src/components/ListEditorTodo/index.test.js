import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import ListEditorTodo from '../ListEditorTodo';
import Checkbox from '../Checkbox';
import Button from '../Button';

describe('<ListEditorTodo />', () => {

  const noop = () => { };
  const props = {
    completed: false,
    content: 'content',
    id: 'id',
    onChangeTodoContent: noop,
    onChangeTodoCompletionStatus: noop,
    onClickRemoveTodo: noop,
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

  it('set renders Checkbox with correct state', () => {
    const wrapper = shallow(
      <ListEditorTodo {...props} />
    );
    expect(wrapper.find(Checkbox)).to.have.lengthOf(1);
    expect(wrapper.find(Checkbox).prop('checked')).to.be.false;
  });

  it('calls #onChangeTodoContent when input is changed', () => {
    const onChangeTodoContent = sinon.spy();
    const wrapper = shallow(
      <ListEditorTodo {...props} onChangeTodoContent={onChangeTodoContent} />
    );
    const $input = wrapper.find('input[type="text"]');
    const fakeEvent = { target: { value: 'new content' } };
    $input.simulate('change', fakeEvent);
    expect(onChangeTodoContent.callCount).to.be.equal(1);
    expect(onChangeTodoContent.calledWith(fakeEvent)).to.be.true;
  });

  it('calls #onChangeTodoCompletionStatus when input is changed', () => {
    const onChangeTodoCompletionStatus = sinon.spy();
    const wrapper = mount(
      <ListEditorTodo {...props} onChangeTodoCompletionStatus={onChangeTodoCompletionStatus} />
    );
    const $input = wrapper.find('input[type="checkbox"]');
    $input.simulate('change');
    expect(onChangeTodoCompletionStatus.callCount).to.be.equal(1);
  });

  it('set renders remove Button', () => {
    const onClickRemoveTodo = sinon.spy();
    const wrapper = shallow(
      <ListEditorTodo {...props} onClickRemoveTodo={onClickRemoveTodo} />
    );
    const $button = wrapper.find(Button);
    expect($button).to.have.lengthOf(1);
    $button.simulate('click');
    expect(onClickRemoveTodo.callCount).to.be.equal(1);
  });

});
