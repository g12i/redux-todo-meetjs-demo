import React from 'react';
import sinon from 'sinon';
import uuid from 'uuid';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import ListShowcaseItem from '../ListShowcaseItem';
import Checkbox from '../Checkbox';

describe('<ListShowcaseItem />', () => {

  const todoFixture = (completed = true, content = 'Todo') => ({ id: uuid(), content, completed });
  const todosFixture = (length, completed = i => true, content = i => `Todo #${i}`) => new Array(length).fill().map((v, i) => todoFixture(completed(i), content(i)));
  const shuffle = array => {
    const arrayCopy = array.slice();
    let currentIndex = arrayCopy.length;
    let temporaryValue;
    let randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = arrayCopy[currentIndex];
      arrayCopy[currentIndex] = arrayCopy[randomIndex];
      arrayCopy[randomIndex] = temporaryValue;
    }
    return arrayCopy;
  }

  const props = {
    title: 'Hello world',
    id: '#foo list',
    todos: [
      todoFixture(false, 'Todo #1'),
      todoFixture(true, 'Todo #2'),
    ],
    onClick: () => { },
  };

  it('renders heading', () => {
    const wrapper = shallow(
      <ListShowcaseItem {...props} />
    );
    const $h3 = wrapper.find('h3');
    expect($h3).to.have.lengthOf(1);
    expect($h3.text()).to.be.equal('Hello world');
  });

  it('renders 2 todo items', () => {
    const wrapper = mount(
      <ListShowcaseItem {...props} />
    );
    const $todos = wrapper.find('.ListShowcaseItem__Todo');
    expect($todos).to.have.lengthOf(2);
    expect($todos.first().find('.ListShowcaseItem__TodoContent').text()).to.be.equal('Todo #1');
    expect($todos.last().find('.ListShowcaseItem__TodoContent').text()).to.be.equal('Todo #2');
  });

  it('renders max 7 items and "more" indicator', () => {
    const wrapper = mount(
      <ListShowcaseItem {...props} todos={todosFixture(12)} />
    );
    expect(wrapper.find('.ListShowcaseItem__Todo')).to.have.lengthOf(7);
    expect(wrapper.find('.ListShowcaseItem__HasMoreIndicator')).to.have.lengthOf(1);
  });

  it('renders todos sorted by complition', () => {
    const shuffledTodos = shuffle(todosFixture(7, i => ((i < 3) ? true : false)));
    const wrapper = mount(
      <ListShowcaseItem {...props} todos={shuffledTodos} />
    );
    const $todos = wrapper.find('.ListShowcaseItem__Todo');
    expect($todos).to.have.lengthOf(7);
    expect($todos.at(0).find(Checkbox).prop('checked')).to.be.equal(false);
    expect($todos.at(1).find(Checkbox).prop('checked')).to.be.equal(false);
    expect($todos.at(2).find(Checkbox).prop('checked')).to.be.equal(false);
    expect($todos.at(3).find(Checkbox).prop('checked')).to.be.equal(false);
    expect($todos.at(4).find(Checkbox).prop('checked')).to.be.equal(true);
    expect($todos.at(5).find(Checkbox).prop('checked')).to.be.equal(true);
    expect($todos.at(6).find(Checkbox).prop('checked')).to.be.equal(true);
  });

  it('renders completed Todo correctly', () => {
    const wrapper = mount(
      <ListShowcaseItem {...props} />
    );
    const $todos = wrapper.find('.ListShowcaseItem__Todo');
    expect($todos.first().find(Checkbox).prop('checked')).to.be.equal(false);
  });

  it('renders uncompleted Todo correctly', () => {
    const wrapper = mount(
      <ListShowcaseItem {...props} />
    );
    const $todos = wrapper.find('.ListShowcaseItem__Todo');
    expect($todos.last().find(Checkbox).prop('checked')).to.be.equal(true);
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