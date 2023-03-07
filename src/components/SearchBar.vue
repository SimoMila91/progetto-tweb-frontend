<template>
  <div class="input-cont text-left d-flex" :class="isSticky && !mobile ? 'input-cont-sticky' : '' ">
    <v-icon :class="{'primary-color': inputFocus }">
      mdi-bookmark-multiple-outline
    </v-icon>
    <input
        id="in"
        placeholder="Che cosa vuoi imparare?"
        type="text"
        class="w-100 input-style in"
        :class="{'placeholder-style': isSticky && mobile, 'input-style-sticky placeholder-style': isSticky && !mobile}"
        autocomplete="off"
        v-model="state"
        @input="filterStates"
        @focus="filterStates"
    />
    <div id="item" class="filter-cont" v-if="filterState && modal"
         :style="!mobile && isSticky ? 'top: 63px; left: -8px;' : mobile && isSticky ? ' top: unset; bottom: 71px;' : null"
    >
      <ul class="list-style">
        <li id="item" class="p-text" v-for="state in filterState" v-bind:key="state" @click="setState(state)">{{ state }}</li>
      </ul>
    </div>
    <div
        class="search-button"
        :style="isSticky && !mobile ? 'font-size: 12px; right: 12px; padding: 11px;' : null"
    >
      <v-icon>
        mdi-magnify
      </v-icon>
    </div>
    <div id="ov" class="overlay" :style="isClickedSticky ? 'opacity: 1; visibility: visible' : null"></div>
  </div>
</template>

<script>
import '@/assets/css/main.css'
export default {
  name: "SearchBar",
  props: ['isSticky', 'mobile'],
  data() {
    return {
      inputFocus: true, //  TODO: da risettare a null
      state: '',
      states: [
          'Matematica',
          'Inglese',
          'Spagnolo',
          'Informatica',
          'Storia',
          'Programmazione III',
          'Intelligenza Artificiale',
      ],
      filterState: [],
      modal: null,
      isClickedSticky: false,
    }
  },
  created() {
    document.addEventListener('click', this.handleFocus);
  },
  methods: {
    handleFocus(e) {
      if (e.srcElement.id === 'ov' && this.isSticky && this.isClickedSticky) {
        this.isClickedSticky = false;
      }
      if (e.srcElement.id === 'in') {
        if (this.isSticky) {
          this.isClickedSticky = true;
        }
        this.inputFocus = true;
      }
      if (e.srcElement.id !== 'item' && e.srcElement.id !== 'in' && e.type === 'click') {
        this.modal = false;
      }
    },
    filterStates() {
      this.modal = true;
      if (this.state === '')
      {
        this.filterState = this.states;
      } else {
        this.filterState = this.states.filter(state => {
          return state.toLowerCase().startsWith(this.state.toLowerCase());
        });
      }

      if (this.filterState.length === 0)
      {
        this.filterState[0] = this.state;
      }
    },
    setState(state) {
      this.state = state;
      this.modal = false;
      this.isClickedSticky = false;
    },
    handleFocusOut(e) {
      if (e.srcElement === "in") console.log("dio cane");
      if (this.isClickedSticky && !this.isSticky) {
        this.modal = false;
        this.isClickedSticky = false;
      } else if (this.isClickedSticky && this.isSticky) {
        this.isClickedSticky = false;
      }
    }
  }
}
</script>

<style scoped>
.input-cont {
  margin-top: 20px;
  padding: 20px;
  background-color: white;
  border-radius: 50px;
  box-shadow: 0px 14px 24px rgb(255 99 99 / 20%);
  position: relative;
}

.input-cont-sticky {
  margin: auto !important;
  background-color: #f7f7f7;
  box-shadow: none;
  padding: 15px;
  border: 3px solid white;
}

.input-cont-sticky:hover {
  border: 3px solid #f7f7f7;
  background-color: white;
}

.input-cont-sticky:focus-within {
  background-color: white;
  border: 3px solid #f7f7f7;
}


.input-style-sticky {
  padding: 15px !important;
}

.placeholder-style::placeholder {
  color: black !important;
  font-weight: 700 !important;
}

.search-button {
  position: absolute;
  right: 7px;
  background-color: #ff6363;
  padding: 14px;
  border-radius: 50px;
  top: 6px;
  color: #ffffff;
  cursor: pointer;
}

.input-style {
  position: absolute;
  outline: none !important;
  left: 30px;
  padding: 20px;
  top: 0px;
}

.filter-cont {
  background: white;
  position: absolute;
  top: 71px;
  left: 0;
  padding: 24px 27px 24px 22px;
  border-radius: 50px;
  width: 250px;
  z-index: 100;
}

.list-style {
  list-style-type: none;
}

.list-style li {
  cursor: pointer;
  line-height: 32px;
  border-radius: 50px;
  padding: 3px 13px;
  font-size: 13px !important;
}

.list-style li:hover {
  background-color: #fff1f1;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 200vw;
  height: 200vh;
  background-color: rgba(0,0,0,.15);
  z-index: -1;
  transition: all .3s;
  opacity: 0;
  visibility: hidden;
}

@media(min-width: 962px) {
  .input-cont {
    margin-right: 100px;
  }
}

@media(min-width: 1661px) {
  .input-cont {
    margin-right: 30%;
  }
}

</style>