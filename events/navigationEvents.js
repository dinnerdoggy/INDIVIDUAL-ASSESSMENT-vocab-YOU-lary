import techForm from '../pages/form';

const navEvents = () => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    // Click event for showing the form
    if (e.target.id.includes('add-form-btn')) {
      console.warn('Before techForm function call');
      techForm();
      console.warn('After function call');
    }
  });
};

export default navEvents;
