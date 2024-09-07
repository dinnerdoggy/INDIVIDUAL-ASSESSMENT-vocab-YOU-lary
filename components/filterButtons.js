import renderToDOM from '../utils/renderToDom';

const filterBtns = () => {
  // console.warn('started');
  let domString = '';
  domString += `
  <div class="btn-toolbar flexContainer" role="toolbar" aria-label="Toolbar with button groups">
    <div class="btn-group me-2" role="group" aria-label="First group">
      <button type="button" class="btn btn-primary">filter1</button>
    </div>
    <div class="btn-group me-2" role="group" aria-label="Second group">
      <button type="button" class="btn btn-secondary">filter2</button>
    </div>
    <div class="btn-group" role="group" aria-label="Third group">
      <button type="button" class="btn btn-info">filter3</button>
    </div>
  </div>
  `;
  // console.warn('before renderToDom');
  renderToDOM('#add-button', domString);
  // console.warn('finished');
};

export default filterBtns;
