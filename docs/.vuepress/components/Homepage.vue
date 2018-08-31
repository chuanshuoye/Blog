<template>
  <div class="home">
    <div class="wrapper">
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
        </div>
        <div class="interests">
          <span>
            {{data.interests}}
          </span>
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

