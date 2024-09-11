import renderToDOM from '../utils/renderToDom';

const viewCards = (array) => {
  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">${item.language}</h6>
            <p class="card-text">${item.definition}</p>
            <a href="#" id="edit-tech-btn--${item.firebaseKey}" class="card-link">Edit</a>
            <a href="#" id="delete-tech--${item.firebaseKey}" class="card-link">Delete</a>
            <p class="timestamp">${item.time_submitted}</p>
        </div>
    </div>
    `;
  });
  renderToDOM('#cards', domString);
};

export default viewCards;
