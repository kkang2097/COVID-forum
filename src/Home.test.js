import Home from './Home';
import React from 'react';
import ReactDOM from 'react-dom';
import {render} from '@testing-library/react';

it("Checking if card doesn't crash", () => {
    const div = document.createElement("div");
    ReactDOM.render(<div className="card"></div>, div)
});

it("Checking if card renders", () => {
    const {getByTestId} = render(<div className="card">
    <h1>{fakeData[index]["age"]}</h1>
    <h2>{fakeData[index]["gender"]}</h2>
    <h3>{fakeData[index]["location"]}</h3>
</div>)
})

describe('Parent Component', () => {
    it('renders Child component', () => {
      const wrapper = shallow(<Home />);
      expect(wrapper.containsMatchingElement(<Card/>)).toEqual(true);
    });
  });