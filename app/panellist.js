import React from 'react';
import SlideList from './jsx/components/slide_list.jsx';

var data = [
  {foo: "Mickey Mouse", bar: "Mickey says hi!"},
  {foo: "Donald Duck", bar: "Donald says hi!"}
];

React.render(
  React.createElement(SlideList, {data}),
  document.getElementById('content')
); 