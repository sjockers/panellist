import View from 'ampersand-view';
import DomthingMixin from 'ampersand-domthing-mixin';

import ViewScrollMixin from './view-scroll-mixin.js';
import panelTemplate from '../templates/panel.dom';

const Panel = View.extend(DomthingMixin, ViewScrollMixin, {

  template: panelTemplate,

  render() {
    this.renderWithTemplate(this);
    this.registerViewportScrollHandler(this.handleScrolling);
  },

  updateCssProperty(propertyName, fromValue, toValue, scrollOffsetTop, positioning) {
    var magicOffset = 300;

    var inMin = this.el.offsetTop;
    var inMax = this.el.offsetTop + this.el.clientHeight;
    var inDelta = scrollOffsetTop - inMin + this.el.clientHeight + magicOffset;

    var output = (fromValue - toValue) / (inMin - inMax) * inDelta;

    if (fromValue > toValue) {
      if (positioning) output = fromValue + output;
      output = output <= toValue ? toValue : output;
      output = output >= fromValue ? fromValue : output;
    }
    else {
      if (positioning) output = toValue - output;
      output = output >= toValue ? toValue : output;
      output = output <= fromValue ? fromValue : output;
    }

    this.el.update(propertyName, output.toString());
  },

  handleScrolling(scrollOffsetTop) {
    this.updateCssProperty('opacity', 0.1, 1, scrollOffsetTop);
    this.updateCssProperty('top', 200, 0, scrollOffsetTop, true);
    this.updateCssProperty('right', 100, -200, scrollOffsetTop, true);
  }
});

export default Panel;
