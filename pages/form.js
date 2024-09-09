import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const techForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-tech--${obj.firebaseKey}` : 'techForm'}" class="mb-4">
  <div class="mb-3">
    <label class="form-label">Title</label>
    <input class="form-control" id="inputTitle" placeholder="Enter Title" value="${obj.title || ''}" required>>
  </div>
  <div class="mb-3">
    <label class="form-label">Definition</label>
    <input class="form-control" id="inputDefinition" placeholder="Enter Definition" value="${obj.definition || ''}" required>>
  </div>
  <div class="mb-3">
    <label class="form-label">Language/Tech</label>
    <select class="form-control" id="techSelect" required>
    <option value="">Select a Language/Tech</option>
    <option>Javascript</option>
    <option>HTML</option>
    <option>CSS</option>
    </select>
  </div>
  <button type="submit" id="submit-tech" class="btn btn-primary">Submit</button>
</form>
  `;
  console.warn(obj.firebaseKey);
  renderToDOM('#form-container', domString);
};

export default techForm;
