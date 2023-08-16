<template>
  <div>
    <nuxt-link to="/">Go to Home</nuxt-link>

    <ul>
      <li v-for="post in posts" :key="post._id">
        <img :src="urlFor(post.cardImage)" alt="Post Image" class="w-1/4" />
        <span class="test">{{ post.age }}</span>
        <DownArrowIcon />
      </li>
    </ul>
  </div>
</template>

<script>
import { client, getPosts } from '../sanity-client/sanity';
import imageUrlBuilder from '@sanity/image-url';
import DownArrowIcon from '/assets/icons/DownArrowIcon';

const builder = imageUrlBuilder(client);

export default {
  components: {
    DownArrowIcon,
  },
  async asyncData() {
    const posts = await getPosts();
    return { posts };
  },
  methods: {
    urlFor(source) {
      return builder.image(source)
    }
  },
};
</script>

