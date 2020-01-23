<template>
  <div>
    <ul>
      <li v-for="page in $pagination.pages" :key="page.key">
        <time :datetime="page.frontmatter.date">{{ page.frontmatter.date }}</time>
        <router-link :to="page.path">{{ page.title }}</router-link>
        <p>
          <ul>
            <li v-for="tag in page.frontmatter.tag">
              <router-link :to="`/tag/${tag}/`">
                {{ tag }}
              </router-link>
            </li>
          </ul>
        </p>
      </li>
    </ul>
    <div>
      <router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink">Prev</router-link>
      <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink">Next</router-link>
    </div>
  </div>
</template>
