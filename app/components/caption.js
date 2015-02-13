import View from 'ampersand-view';
import DomthingMixin from 'ampersand-domthing-mixin';

import ViewScrollMixin from './view-scroll-mixin.js';
import captionTemplate from '../templates/caption.dom';

const Caption = View.extend(DomthingMixin, ViewScrollMixin, {

  template: captionTemplate,

  render() {
    this.renderWithTemplate(this);
    this.registerViewportScrollHandler(this.handleScrolling);
  },

  handleScrolling(scrollOffsetTop) {
  }
});

export default Caption;
