import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const techForm = () => {
  clearDom();
  const domString = `
  <form id="techForm">
  <div class="mb-3">
    <label class="form-label">Title</label>
    <input class="form-control" id="inputTitle">
  </div>
  <div class="mb-3">
    <label class="form-label">Definition</label>
    <input class="form-control" id="inputDefinition">
  </div>
  <div class="mb-3">
    <label class="form-label">Language/Tech</label>
    <select class="form-control" id="techSelect" required>
    <option value="">Select a Language/Tech</option>
    <option>Poop</option>
    </select>
  </div>
  <button type="submit" id="submit-tech" class="btn btn-primary">Submit</button>
</form>
  `;
  renderToDOM('#form-container', domString);
};

export default techForm;
