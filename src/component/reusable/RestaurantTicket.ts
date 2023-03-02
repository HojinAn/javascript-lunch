import { Restaurant } from "../../type/type";
import { categoryToSrc } from "../../utils/convertor";

class RestaurantTicket {
  restaurant: Restaurant;

  constructor(restaurant: Restaurant) {
    this.restaurant = restaurant;
  }

  template() {
    return `
    <li class="restaurant">
      <div class="restaurant__category">
        img src=${categoryToSrc(this.restaurant.category)} alt=${
      this.restaurant.category
    } class="category-icon">
      </div>
      <div class="restaurant__info">
        <h3 class="restaurant__name text-subtitle">${this.restaurant.name}</h3>
        <span class="restaurant__distance text-body">캠퍼스부터 ${
          this.restaurant.takingTime
        }분 내</span>
        <p class="restaurant__description text-body">${
          this.restaurant.description
        }</p>
      </div>
    </li>`;
  }
}

export default RestaurantTicket;
