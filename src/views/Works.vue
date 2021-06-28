<template>
  <div class="flex-col min-h-screen">
    <Header class="top-0 w-full"
            :small_text="'lets go'" :big_text_above="'HIGHER'" :big_text_below="'WORKS'"/>
    <div class="justify-content-center flex-grow m-16">
      <h3 class="m-auto text-3xl text-white">Create Or Choose An Album</h3>
      <div class="w-64">
        <input
          class="my-6 text-grey-700 appearance-none border-2 border-white-200
          rounded w-full py-2 px-4 text-grey-700 leading-tight
          focus:outline-none focus:bg-white focus:border-purple-500"
          placeholder="Album Name..."
          type="text"
          v-model="albumName"
        />
        <button class="text-white btn-orange mb-6" @click="createAlbum()">Create Album</button>
      </div>
      <div class="text-red-500">{{ error }}</div>
      <hr />
      <h5 class="text-white mt-4 text-2xl">List Of Albums</h5>
      <div class="flex flex-col w-full m-auto justify-center">
        <div v-for="(album, idx) in albums"
          :key="idx"
          class="text-white cursor-pointer mt-16 ml-4 w-3/12
           h-24 shadow-sm flex items-center justify-center"
          @click="openAlbumDetail(album)"
        >
          <div class="text-white text-2xl">{{ album.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Works',
  async mounted() {
    this.$store.dispatch('albumInfo/getAlbumsData');
  },
  data: () => ({ albumName: '', error: '' }),
  components: {
    Header,
  },
  methods: {
    openAlbumDetail(album) {
      this.$router.push(`/works/${album.id}`);
    },
    async createAlbum() {
      this.error = '';
      if (!this.albumName) {
        this.error = 'Please enter an album name';
        return;
      }
      const newAlbum = {
        name: this.albumName,
        owner: this.user.username,
        ownerId: this.user.id,
      };
      this.$store.dispatch('albumInfo/createAlbum', newAlbum);
    },
  },
  computed: {
    ...mapGetters({
      user: 'auth/user',
      albums: 'albumInfo/albums',
    }),
  },
};
</script>

<style scoped>

</style>
