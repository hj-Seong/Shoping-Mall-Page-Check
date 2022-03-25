Vue.component('review-list', {
    props: ['reviews'],
    template:
    /*html*/
    `
    <div class="review-container">
    <h3>Reviews:</h3>
      <ul>
        <li v-for="(review, index) in reviews" :key="index">
          {{ review.name }} 님이 {{ review.rating }} 별점을 주었습니다
          <br/>
          "{{ review.review }}"
          <br/>

          추천: {{ review.recommend }}

        </li>
      </ul>
    </div>
  `
  })