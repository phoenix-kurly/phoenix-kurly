import {getNode} from '../dom/getNode.js';
import {user} from '../utils/user.js';

const register = getNode('#register-form');

export async function createUser() {
  let form = register;
  try {
    let formField = new FormData(form);
    let formData = Object.fromEntries(formField.entries());
    console.log(formData);
    let response = await user.post('http://localhost:3000/users', formData);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
