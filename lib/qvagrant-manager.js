'use babel';

import QvagrantManagerView from './qvagrant-manager-view';
import { CompositeDisposable } from 'atom';

export default {

  qvagrantManagerView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.qvagrantManagerView = new QvagrantManagerView(state.qvagrantManagerViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.qvagrantManagerView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'qvagrant-manager:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.qvagrantManagerView.destroy();
  },

  serialize() {
    return {
      qvagrantManagerViewState: this.qvagrantManagerView.serialize()
    };
  },

  toggle() {
    console.log('QvagrantManager was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
