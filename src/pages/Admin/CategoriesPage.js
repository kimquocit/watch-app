import React, { Component } from 'react';
import axios from 'axios';
import { Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Table, Button } from 'reactstrap';
import withAuth from '../../components/Admin/withAuth';
import Header from '../../components/Admin/Header';

class CategoriesPage extends Component {
  state = {
    items: [],
    newItemData: {
      name: ''
    },
    editItemData: {
      id: '',
      name: ''
    },
    newItemModal: false,
    editItemModal: false
  }
  componentWillMount() {
    this.loadItems();
  }
  toggleNewItemModal() {
    this.setState({
      newItemModal: !this.state.newItemModal
    });
  }
  toggleEditItemModal() {
    this.setState({
      editItemModal: !this.state.editItemModal
    });
  }
  addItem() {
    axios.post('http://localhost:3000/categories/', this.state.newItemData).then((response) => {
      let { items } = this.state;
      items.push(response.data);
      this.setState({
        items, newItemModal: false, newItemData: {
          name: ''
        }
      });
    });
  }
  updateItem() {
    let { name } = this.state.editItemData;
    axios.put('http://localhost:3000/categories/' + this.state.editItemData.id, {
      name
    }).then((response) => {
      this.loadItems();
      this.setState({
        editItemModal: false, editItemData: { id: '', name: '' }
      })
    });
  }
  editItem(id, name, price, category) {
    this.setState({
      editItemData: { id, name }, editItemModal: !this.state.editItemModal
    });
  }
  deleteItem(id) {
    axios.delete('http://localhost:3000/categories/' + id).then((response) => {
      this.loadItems();
    });
  }
  loadItems() {
    axios.get('http://localhost:3000/categories').then((response) => {
      this.setState({
        items: response.data
      })
    });
  }
  render() {
    let items = this.state.items.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>
            <Button color="success" size="sm" className="mr-2" onClick={this.editItem.bind(this, item.id, item.name)}>Edit</Button>
            <Button color="danger" size="sm" onClick={this.deleteItem.bind(this, item.id)}>Delete</Button>
          </td>
        </tr>
      )
    });
    return (
      <div>
        <Header />
        <div className="App container">
          <Button className="my-3 btn-outline-success" color="primary" onClick={this.toggleNewItemModal.bind(this)}>Add Category</Button>
          <Modal isOpen={this.state.newItemModal} toggle={this.toggleNewItemModal.bind(this)}>
            <ModalHeader toggle={this.toggleNewItemModal.bind(this)}>Add a new category</ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label for="title">Name</Label>
                <Input id="title" value={this.state.newItemData.name} onChange={(e) => {
                  let { newItemData } = this.state;
                  newItemData.name = e.target.value;
                  this.setState({ newItemData });
                }} />
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" className="btn-outline-success" onClick={this.addItem.bind(this)}>Add Category</Button>{' '}
              <Button color="primary" className="btn-outline-success" onClick={this.toggleNewItemModal.bind(this)}>Cancel</Button>
            </ModalFooter>
          </Modal>

          <Modal isOpen={this.state.editItemModal} toggle={this.toggleEditItemModal.bind(this)}>
            <ModalHeader toggle={this.toggleEditItemModal.bind(this)}>Edit Category</ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label for="title">Name</Label>
                <Input id="title" value={this.state.editItemData.name} onChange={(e) => {
                  let { editItemData } = this.state;
                  editItemData.name = e.target.value;
                  this.setState({ editItemData });
                }} />
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" className="btn-outline-success" onClick={this.updateItem.bind(this)}>Update Category</Button>{' '}
              <Button color="primary" className="btn-outline-success" onClick={this.toggleEditItemModal.bind(this)}>Cancel</Button>
            </ModalFooter>
          </Modal>

          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default withAuth(CategoriesPage);
