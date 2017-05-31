import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ListShowcaseItem from '../ListShowcaseItem';

describe('<ListShowcaseItem />', () => {

  const props = {
    title: 'Hello world',
    id: '#foo list',
    todos: [
      { id: '#1', content: 'Todo #1', completed: false },
      { id: '#2', content: 'Todo #2', completed: true },
    ],
    onClick: () => { },
  };

  it('renders heading', () => {
    const wrapper = shallow(
      <ListShowcaseItem {...props} />
    );
    const h3 = wrapper.find('h3');
    expect(h3).to.have.lengthOf(1);
    expect(h3.text()).to.be.equal('Hello world');
  });

  it('renders 2 todo items', () => {
    const wrapper = shallow(
      <ListShowcaseItem {...props} />
    );
    const todos = wrapper.find('.ListShowcaseItem__Todo');
    expect(todos).to.have.lengthOf(2);
    expect(todos.first().find('.ListShowcaseItem__TodoContent').text()).to.be.equal('Todo #1');
    expect(todos.last().find('.ListShowcaseItem__TodoContent').text()).to.be.equal('Todo #2');
  });

  it('renders completed Todo correctly', () => {
    const wrapper = shallow(
      <ListShowcaseItem {...props} />
    );
    const todos = wrapper.find('.ListShowcaseItem__Todo');
    expect(todos.first().find('[type="checkbox"]').prop('checked')).to.be.equal(false);
  });

  it('renders uncompleted Todo correctly', () => {
    const wrapper = shallow(
      <ListShowcaseItem {...props} />
    );
    const todos = wrapper.find('.ListShowcaseItem__Todo');
    expect(todos.last().find('[type="checkbox"]').prop('checked')).to.be.equal(true);
  });

  it('is clickable', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(
      <ListShowcaseItem {...props} onClick={onClick} />
    );
    wrapper.simulate('click');
    expect(onClick).to.have.property('callCount', 1);
  });

});
