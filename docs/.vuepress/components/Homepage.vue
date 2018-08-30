<template>
  <div class="home">
    <div class="wrapper">
      <div class="avatar">
        <img :src="$withBase(data.avatar)" alt="">
      </div>
      <div class="card">
        <div class="bio">
          <div class="head">
            <span>
              {{data.head}}
            </span>
          </div>
          <div class="info">
            <span>
              {{data.info}}
            </span>
          </div>
          <div class="description">
            <Content/>
          </div>
        </div>
        <div class="interests">
          <span>
            {{data.interests}}
          </span>
        </div>
        <div class="socials">
          <div v-for="item in data.socials">
            <a :href="item.link" target="_blank">
              <img :src="'/icons/'+item.title+'.svg'" :alt="item.title"
              :title="item.title" />
            </a>
          </div>
        </div>
        <div class="actions">
          <div v-for="item in data.actions">
            <a :href="item.link" class="button"
                :target="item.link.startsWith('/')?'':'_blank'">
              {{item.text}}
            </a>
          </div>
        </div>
      </div>

      <div class="footer" v-if="data.footer">
        {{ data.footer }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    data() {
      return this.$page.frontmatter;
    }
  }
};
</script>

