import { Component } from 'react';
import styled from 'styled-components';

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
      <FormDiv onSubmit={this.handleSubmit}>
        <label>
          Name
          <Input
            onChange={this.handleInput}
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Phone
          <Input
            onChange={this.handleInput}
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <Button>Add contact</Button>
      </FormDiv>
    );
  }
}

const FormDiv = styled.form`
  width: 250px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: 1px solid grey;
`;

const Button = styled.button`
  width: 250/30px;
  color: teal;
`;

const Input = styled.input`
  margin-left: 5px;
`;
