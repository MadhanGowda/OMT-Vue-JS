<template>
  <div class="home-page-card col-4 align-items-center">
    <div
      :disabled="coming_soon ? true : false"
      :data-slug="slug"
      class="card"
    >
      <div class="card-row row">
        <div class="card-text col-7">
          <div class="text">
            {{ name }}
            <p
              v-if="coming_soon"
              class="text-cs"
            >
              (Coming Soon)</p>
          </div>
        </div>
        <div class="card-image col-5">
          <img
            :src="image"
            class="card-image-tag"
            alt="...">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* ============
 * Card Component
 * ============
 *
 * A basic card component.
 *
 */
export default {
  name: 'HomePageCard',

  props: {
    name: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    slug: {
      type: String,
      default: '',
    },
    coming_soon: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.home-page-card {
  background-color: transparent;
}
.home-page-card:hover {
  transform: scale(1.1);
  transition: all 0.2s ease-out;
}
.home-page-card .card-text {
  background-color: #ecf1ff;
  font-family: 'Heebo', sans-serif;
  font-size: 30px;
  font-weight: 400;
  line-height: 1.2;
  text-align: center;
  vertical-align: middle;
  color: #2f364f;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  cursor: pointer;
}
.home-page-card .card-image {
  cursor: pointer;
  background-color: white;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 0;
}
.home-page-card .card-row {
  height: 300px;
  box-shadow: 0 2px 4px 0 rgba(197, 197, 197, 0.5);
}
.home-page-card .card {
  margin: 30px;
  background-color: transparent;
  border: none;
}
.home-page-card .card[disabled="disabled"] {
  pointer-events: none;
}

.home-page-card .text {
  position: relative;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.home-page-card .text .text-cs {
  font-size: 16px;
}
.home-page-card .card-image-tag {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}

</style>
