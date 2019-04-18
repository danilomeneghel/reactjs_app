import React from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	this.handleDelete = this.handleDelete.bind(this);
  }
   
  createNotification = (type) => {
      switch (type) {
        case 'remove':
          NotificationManager.info('Item removido.', 'Excluído!');
          break;
        case 'success':
          NotificationManager.success('Item adicionado.', 'Sucesso!');
          break;
        case 'warning':
          NotificationManager.warning('Preencha os dados corretamente.', 'Atenção!', 3000);
          break;
        case 'error':
          NotificationManager.error('Verifique os dados digitados.', 'Erro!', 5000, () => {
            alert('callback');
          });
          break;
		default:
		  alert('Erro!');
      }
  };

  render() {
    return (
      <div>
	    <NotificationContainer/>
        <form onSubmit={this.handleSubmit}>
		  <br />
          <label htmlFor="new-todo">
            Digite o item a ser adicionado
          </label>
		  <br />
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button className='btn btn-success'>
		    Adicionar
		  </button>
        </form>
		
		<TodoList items={this.state.items} handleDelete={this.handleDelete} />
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
		this.createNotification('warning');
		return;
    } else {
		const newItem = {
		  text: this.state.text,
		  id: Date.now()
		};
		this.setState(prevState => ({
		  items: prevState.items.concat(newItem),
		  text: ''
		}));
		this.createNotification('success');
	}
  }
     
  handleDelete(id){
	this.setState(prevState => ({
		items: prevState.items.filter(el => el !== id )
	}));
	this.createNotification('remove');
  }
}

class TodoList extends React.Component {
  handleDelete(id){
    this.props.handleDelete(id);
  }

  render() {
	return (
		<ol>
			{this.props.items.map(item => (
				<li key={item.id}>{item.text} <button onClick={this.handleDelete.bind(this, item)}>Excluir</button></li>
			))}
		</ol>
	);
  }
}

export default TodoApp;