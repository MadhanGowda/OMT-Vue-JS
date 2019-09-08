<template>
  <div class="home-main w-100">
    <div>
      <div class="top-bar">
        <img
          src="@/assets/images/gale_logo.png"
          height="35"
          class="align-self-start"
          alt="GALE Logo"
        >
        <h2 class="project-title">Operations Management Tool</h2>
      </div>
      <div class="container card-wrap-container">
        <div class="cards-wrap row">
          <card
            :name="name1"
            :image="image1.sample"
            :coming_soon="coming_soon1"
            :slug="slug1"
          />
          <card
            :name="name2"
            :image="image2.sample"
            :coming_soon="coming_soon2"
            :slug="slug2"
          />
          <card
            :name="name3"
            :image="image3.sample"
            :coming_soon="coming_soon3"
            :slug="slug3"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* ============
 * Home Index Page
 * ============
 *
 * The home index page.
 */
import Card from '@/components/Card.vue';

function onClick() {
  jQuery('.card').on('click', (el) => {
    const ele = jQuery(el.target);
    const slugEle = ele.parents('.home-page-card').find('.card');
    const url = `${window.location.origin}/dashboard&type=${slugEle.attr('data-slug')}?category=pantry_consumables`;
    window.location.replace(url);
  });
}
export default {
  name: 'HomeIndex',

  components: {
    Card,
  },

  data() {
    return {
      name1: 'Stores',
      slug1: 'stores',
      coming_soon1: false,
      image1: {
        sample: require('@/assets/images/st.jpg'),
      },
      name2: 'IT Assets',
      slug2: 'it_assets',
      coming_soon2: true,
      image2: {
        sample: require('@/assets/images/it.jpg'),
      },
      name3: 'Office Assets',
      slug3: 'office_assets',
      coming_soon3: true,
      image3: {
        sample: require('@/assets/images/oa.png'),
      },
    };
  },
  mounted() {
    onClick();
  },
};
</script>

<style>
body {
  background-color: #c4d6fe;
}
.home-main {
  padding: 30px;
}
.home-main .top-bar {
  position: relative;
}
.home-main .top-bar .project-title {
  font-family: 'Heebo', sans-serif;
  font-size: 40px;
  font-weight: 400;
  line-height: 1.2;
  text-align: center;
  vertical-align: middle;
  margin: 0;
  display: inline-block;
  color: #2f364f;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.home-main .card-wrap-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

</style>
