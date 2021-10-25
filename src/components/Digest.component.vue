<template>
  <div class="digest">
    <div class="digest__title title">Digest Posts</div>

    <div class="filter">
      <button class="button filter__searchBtn" @click="filter()">
        <img src="../assets/i/search.png" class="filter__searchBtn__icon"/>
      </button>

      <div class="input-control filter__inputBlock">
        <input class="input-control__input filter__inputBlock__input" placeholder="Filter by author ..." v-model="authorName" v-on:keyup.enter="filter" />
      </div>
    </div>

    <div class="cards">
      <div class="cards__item" v-for="(post) in filteredData" :key="post.title">
        <div class="cards__item__content">
          <div class="cards__item__content__title">{{post.title}}</div>
          <div>{{post.body}}</div>
          <div class="cards__item__content__sub">{{post.username}}</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

  import { createNamespacedHelpers } from 'vuex'
  const { mapGetters : mapGettersPosts, mapActions : mapActionsPosts } = createNamespacedHelpers('posts');
  const { mapGetters : mapGettersUsers, mapActions : mapActionsUsers } = createNamespacedHelpers('users');

  export default {
    name: 'Digest',
    data: function(){
      return {
        data         : [],
        filteredData : [],
        authorName   : ''
      }
    },
    watch : {
      authorName(newValue) {
        console.log('newValue ', newValue);
        if (newValue === '') {
          this.filteredData = this.data;
        }
      }
    },
    computed: {
      ...mapGettersPosts(['posts']),
      ...mapGettersUsers(['users']),
    },
    mounted: async function () {
      this.getAll();
    },
    methods: {
      ...mapActionsPosts(['getAllPosts']),
      ...mapActionsUsers(['getAllUsers']),

      async getAll(){
        await this.getAllPosts();
        await this.getAllUsers();
        this.mapData();

        this.filteredData = this.data;
        console.log('--filteredData--', this.filteredData);
      },

      mapData: function(){
        this.data = this.posts.map(p => {
          p['username'] = '';

          this.users.forEach(u => {
            if (p.userId === u.id) {
              p.username = u.username;
            }
          });
          return p;
        });
      },

      filter : function() {
        if (this.authorName !== '') {
          this.filteredData = this.data.filter(item => new RegExp(this.authorName.toLowerCase()).test(item.username.toLowerCase()));
        } else {
          this.filteredData = this.data;
        }
      }
    }
  }
</script>

<style scoped lang="scss" >

  @import '@/assets/styles/variables.scss';

  .digest {
    width: 100%;
    margin: auto;
    overflow: auto;
    box-sizing: border-box;
    background: #ECF1F6;
    box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.02), 0px 32px 64px rgba(44, 39, 56, 0.04);
    border-radius: 24px;

    @media only screen and (min-width: 490px) { padding: 10px; }
    @media only screen and (min-width: 768px) { padding: 30px; }

    .digest__title {
      text-align: center;
      @media only screen and (min-width: 490px) {
        margin-bottom: 0px;
        font-size: $fs-l;
      }
      @media only screen and (min-width: 768px) {
        margin-bottom: 20px;
        font-size: $fs-xxl;
      }
    }
  }

  .cards {
    float: left;
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;

    .cards__item {
      min-height: 50px;
      float: left;
      padding: 5px;
      display: flex;
      box-sizing: border-box;

      @media only screen and (min-width: 490px) { width: 50%; }
      @media only screen and (min-width: 768px) { width: 33.33%; }
      @media only screen and (min-width: 1440px) { width: 25%; }

      .cards__item__content {
        float: left;
        background-color: #FFFFFF;
        border-radius: $br;
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: stretch;

        @media only screen and (min-width: 490px) {
          font-size: $fs-xs;
          padding: 8px;
        }
        @media only screen and (min-width: 768px) {
          font-size: $fs-s;
          padding: 10px;
        }
        @media only screen and (min-width: 1440px) {
          font-size: $fs;
          padding: 12px;
        }

        .cards__item__content__title {
          color: #3B88E2;
          font-weight: bold;
          line-height: 30px;

          @media only screen and (min-width: 490px) { font-size: $fs-s; }
          @media only screen and (min-width: 768px) { font-size: $fs; }
          @media only screen and (min-width: 1440px) { font-size: $fs-m; }
        }

        .cards__item__content__sub {
          color: #CBCFD2;

          @media only screen and (min-width: 490px) {
            font-size: $fs-xxs;
            margin-top: 0px;
          }
          @media only screen and (min-width: 768px) {
            font-size: $fs-xs;
            margin-top: 8px;
          }
          @media only screen and (min-width: 1440px) { font-size: $fs-s; }
        }
      }
    }
  }

  .filter {
    float: left;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;

    .filter__searchBtn {
      width: 15%;
      float: left;
      border-radius: $br 0px 0px $br;

      @media only screen and (min-width: 490px) { height: 32px; }
      @media only screen and (min-width: 768px) { height: 52px; }

      .filter__searchBtn__icon {
        background-repeat: no-repeat;
        @media only screen and (min-width: 490px) {
          padding-top: 2px;
          width: 25px;
        }
        @media only screen and (min-width: 768px) {
          padding-top: 0px;
          width: 35px;
        }
      }
    }

    .filter__inputBlock {
      width: 85%;
      float: left;

      .filter__inputBlock__input {
        border-radius: 0px $br $br 0px ;
      }
    }
  }

</style>
