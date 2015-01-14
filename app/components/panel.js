import View from 'ampersand-view';
import DomthingMixin from 'ampersand-domthing-mixin';

import ViewScrollMixin from './view-scroll-mixin.js';
import panelTemplate from '../templates/panel.dom';

const Panel = View.extend(DomthingMixin, ViewScrollMixin, {

  template: panelTemplate,

  render() {
    this.renderWithTemplate(this);
    this.registerViewportScrollHandler(this.handleScrolling);
    this.el.update('opacity', '0');
  },

  handleScrolling(scrollOffsetTop) {
    var magicOffset = 500;
    var inMin = this.el.offsetTop; 
    var inMax = this.el.offsetTop + this.el.clientHeight;
    var inDelta = scrollOffsetTop - inMin + magicOffset;
    var outMin = 0;
    var outMax = 1;

    var outDelta = (outMin - outMax) / (inMin - inMax) * inDelta;

    this.el.update('opacity', outDelta.toString());
  }
});

export default Panel;