Vue.component('product-display', {
    props: ['premium'],
    template: 
    /*html*/
    `<div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <img v-bind:src="image">
        </div>
        <div class="product-info">
          <h1>{{ title }}</h1>
  
          <p v-if="inStock">재고가 남아있습니다</p>
          <p v-else>재고가 없습니다</p>
  
          <p>금액: {{ shipping }}</p>
          <ul>
            <li v-for="detail in details">{{ detail }}</li>
          </ul>
  
          <div 
            v-for="(variant, index) in variants" 
            :key="variant.id" 
            @mouseover="updateVariant(index)" 
            class="color-circle" 
            :style="{ backgroundColor: variant.color }">
          </div>
          
          <button 
            class="button" 
            :class="{ disabledButton: !inStock }" 
            :disabled="!inStock" 
            v-on:click="addToCart">
            장바구니에 추가
          </button>
        </div>
      </div>


      <review-list v-if="reviews.length" :reviews="reviews"></review-list>
      <review-form @review-submitted="addReview"></review-form>

    </div>`,
    data() {
      return {
          product: '마스크',
          brand: 'Green',
          selectedVariant: 0,
          details: ['폴리프로필렌 부직포', '플라스틱(코편)', '나일론끈'],
          variants: [
            { id: 2234, color: 'white', image: './images/mask_white.jpg', quantity: 50 },
            { id: 2235, color: 'black', image: './images/mask_black.jpg', quantity: 0 },
          ],
          reviews: []
      }
    },
    methods: {
        addToCart() {
          //장바구니 추가, 부모로 이벤트 생성
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
        },
        updateVariant(index) {
          //인덱스 바꾸기
            this.selectedVariant = index
        },
        addReview(review) {
          //리뷰추가
          this.reviews.push(review)
        }
    },
    computed: {
        title() {
          //title
            return this.brand + ' ' + this.product
        },
        image() {
          //selectedVariant 색상에 따라서 이미지 바뀜
            return this.variants[this.selectedVariant].image
        },
        inStock() {
          //selectedVariant 색상에 따라서 수량 바뀜
            return this.variants[this.selectedVariant].quantity
        },
        shipping() {
          //손님등급에 따른 금액
          if (this.premium) {
            return 15000
          }
          return 20000
        }
    }
  })