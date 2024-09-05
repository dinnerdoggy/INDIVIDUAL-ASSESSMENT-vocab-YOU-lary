import renderToDOM from '../utils/renderToDom';

const viewCards = (array) => {
  let domString = '';
  array.forEach((item) => {
    domString = `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">${item.language}</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link">Edit</a>
            <a href="#" class="card-link">Delete</a>
        </div>
    </div>
    `;
  });
  renderToDOM('#cards', domString);
};

export default viewCards;
