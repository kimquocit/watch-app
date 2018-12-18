import React, { Component } from 'react';
import axios from 'axios';
import { Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Table, Button } from 'reactstrap';
import withAuth from '../../components/Admin/withAuth';
import Header from '../../components/Admin/Header';

class HomePage extends Component {
  state = {
    items: [],
    categories: [],
    newItemData: {
      name: '',
      price: '',
      category: ''
    },
    editItemData: {
      id: '',
      name: '',
      price: '',
      category: ''
    },
    newItemModal: false,
    editItemModal: false
  }
  componentWillMount() {
    this.loadItems();
    this.loadCategories();
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
    axios.post('http://localhost:3000/items/', this.state.newItemData).then((response) => {
      let { items } = this.state;
      items.push(response.data);
      this.setState({
        items, newItemModal: false, newItemData: {
          name: '',
          price: '',
          category: ''
        }
      });
    });
  }
  updateItem() {
    let { name, price, category } = this.state.editItemData;
    axios.put('http://localhost:3000/items/' + this.state.editItemData.id, {
      name, price, category
    }).then((response) => {
      this.loadItems();
      this.setState({
        editItemModal: false, editItemData: { id: '', name: '', price: '', category: '' }
      })
    });
  }
  editItem(id, name, price, category) {
    this.setState({
      editItemData: { id, name, price, category }, editItemModal: !this.state.editItemModal
    });
  }
  deleteItem(id) {
    axios.delete('http://localhost:3000/items/' + id).then((response) => {
      this.loadItems();
    });
  }
  loadItems() {
    axios.get('http://localhost:3000/items').then((response) => {
      this.setState({
        items: response.data
      })
    });
  }
  loadCategories() {
    axios.get('http://localhost:3000/categories').then((response) => {
      console.log(response.data);
      this.setState({
        categories: response.data
      })
    });
  }
  render() {
    let items = this.state.items.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>{item.category}</td>
          <td>
            <Button color="success" size="sm" className="mr-2" onClick={this.editItem.bind(this, item.id, item.name, item.price, item.category)}>Edit</Button>
            <Button color="danger" size="sm" onClick={this.deleteItem.bind(this, item.id)}>Delete</Button>
          </td>
        </tr>
      )
    });
    return (
      <div>
        <Header />
        <div className="App container">
          <Button className="my-3 btn-outline-success" color="primary" onClick={this.toggleNewItemModal.bind(this)}>Add Item</Button>
          <Modal isOpen={this.state.newItemModal} toggle={this.toggleNewItemModal.bind(this)}>
            <ModalHeader toggle={this.toggleNewItemModal.bind(this)}>Add a new item</ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label for="title">Name</Label>
                <Input id="title" value={this.state.newItemData.name} onChange={(e) => {
                  let { newItemData } = this.state;
                  newItemData.name = e.target.value;
                  this.setState({ newItemData });
                }} />
              </FormGroup>
              <FormGroup>
                <Label for="price">Price</Label>
                <Input id="price" value={this.state.newItemData.price} onChange={(e) => {
                  let { newItemData } = this.state;
                  newItemData.price = e.target.value;
                  this.setState({ newItemData });
                }} />
              </FormGroup>
              <FormGroup>
                <Label for="category">Category</Label>
                <Input type="select" id="category" value={this.state.newItemData.category} onChange={(e) => {
                  let { newItemData } = this.state;
                  newItemData.category = e.target.value;
                  this.setState({ newItemData });
                }}>
                  {this.state.categories.map((cat, i) => {
                    return (<option key={i}>{cat.name}</option>)
                  })}
                </Input>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" className="btn-outline-success" onClick={this.addItem.bind(this)}>Add Item</Button>{' '}
              <Button color="primary" className="btn-outline-success" onClick={this.toggleNewItemModal.bind(this)}>Cancel</Button>
            </ModalFooter>
          </Modal>

          <Modal isOpen={this.state.editItemModal} toggle={this.toggleEditItemModal.bind(this)}>
            <ModalHeader toggle={this.toggleEditItemModal.bind(this)}>Edit item</ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label for="title">Name</Label>
                <Input id="title" value={this.state.editItemData.name} onChange={(e) => {
                  let { editItemData } = this.state;
                  editItemData.name = e.target.value;
                  this.setState({ editItemData });
                }} />
              </FormGroup>
              <FormGroup>
                <Label for="price">Price</Label>
                <Input id="price" value={this.state.editItemData.price} onChange={(e) => {
                  let { editItemData } = this.state;
                  editItemData.price = e.target.value;
                  this.setState({ editItemData });
                }} />
              </FormGroup>
              <FormGroup>
                <Label for="category">Category</Label>
                <Input type="select" id="category" value={this.state.editItemData.category} onChange={(e) => {
                  let { editItemData } = this.state;
                  editItemData.category = e.target.value;
                  this.setState({ editItemData });
                }}>
                  {this.state.categories.map((cat, i) => {
                    return (<option key={i}>{cat.name}</option>)
                  })}
                </Input>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" className="btn-outline-success" onClick={this.updateItem.bind(this)}>Update Item</Button>{' '}
              <Button color="primary" className="btn-outline-success" onClick={this.toggleEditItemModal.bind(this)}>Cancel</Button>
            </ModalFooter>
          </Modal>

          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
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

export default withAuth(HomePage);
