import { Component } from 'react';

export class AddForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInput = el => {
    this.setState({ [el.target.name]: el.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addContacts(this.state.name, this.state.number);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            onChange={this.handleInput}
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Phone
          <input
            onChange={this.handleInput}
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button>Add contact</button>
      </form>
    );
  }
}
