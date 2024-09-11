import renderToDOM from '../utils/renderToDom';

const filterBtns = () => {
  // console.warn('started');
  let domString = '';
  domString = `
  <div class="btn-toolbar flexContainer" role="toolbar" aria-label="Toolbar with button groups">
    <div class="btn-group me-2" role="group" aria-label="First group">
      <button type="button" id="jsFilter" class="btn btn-primary">Javascript</button>
    </div>
    <div class="btn-group me-2" role="group" aria-label="Second group">
      <button type="button" id="htmlFilter" class="btn btn-secondary">HTML</button>
    </div>
    <div class="btn-group" role="group" aria-label="Third group">
      <button type="button" id="cssFilter" class="btn btn-info">CSS</button>
    </div>
    <div class="btn-group" role="group" aria-label="Third group">
      <button type="button" id="allCards" class="btn btn-info">All</button>
    </div>
  </div>
  `;
  // console.warn('before renderToDom');
  renderToDOM('#add-button', domString);
  // console.warn('finished');
};

export default filterBtns;
