'use babel';

var cmd=require('node-cmd');

export default class QvagrantManagerView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('qvagrant-manager');

	 console.log('hello world');

    // Create message element
    const message = document.createElement('div');
    message.textContent = 'The QvagrantManager package is Alive! It\'s ALIVE!';
    message.classList.add('message');
    this.element.appendChild(message);

	 cmd.get(
        'pwd',
        function(data){
            console.log('the current working dir is : ',data)
        }
    );

	 cmd.get(
        'ls',
        function(data){
            console.log('the current dir contains these files :\n\n',data)
        }
    );

	 cmd.get(
        'qvagrant global-status',
        function(data){
            console.log('the current dir contains these files :\n\n',data)
        }
    );
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

}
