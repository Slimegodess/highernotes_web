import { API, graphqlOperation, Storage } from 'aws-amplify';
import { createAlbum as createAlbumMutation, createPhoto as createPhotoMutation } from '@/graphql/mutations';
import { getAlbum as getAlbumQuery, listAlbums as listAlbumsQuery } from '@/graphql/queries';
// eslint-disable-next-line no-unused-vars
import { uuid } from 'uuidv4';
import awsconfig from '@/aws-exports';

// eslint-disable-next-line import/prefer-default-export
export const albumInfo = {
  namespaced: true,
  state: {
    albums: null,
    photo: null,
  },
  mutations: {
    setAlbums(state, payload) {
      state.albums = payload;
    },
  },
  actions: {
    async createAlbum({ dispatch }, newAlbum) {
      try {
        await API.graphql(graphqlOperation(createAlbumMutation, { input: newAlbum }));
        dispatch('getAlbumsData');
      } catch (error) {
        console.error('createAlbum', error);
      }
    },
    async getAlbum(_, albumId) {
      return API.graphql(graphqlOperation(getAlbumQuery, { id: albumId }));
    },
    async getAlbumsData({ commit }) {
      const albumsData = await API.graphql(graphqlOperation(listAlbumsQuery));
      commit('setAlbums', albumsData.data.listAlbums.items);
    },
    async createPhoto(_, data) {
      const {
        aws_user_files_s3_bucket_region: region,
        aws_user_files_s3_bucket: bucket,
      } = awsconfig;
      const { file, type: mimeType, id } = data;
      const extension = file.name.substr(file.name.lastIndexOf('.') + 1);
      const photoId = uuid();
      const key = `works/${photoId}.${extension}`;
      const inputData = {
        id: photoId,
        photoAlbumId: id,
        contentType: mimeType,
        fullsize: {
          key,
          region,
          bucket,
        },
      };
      // s3 bucket storage file to it
      try {
        await Storage.put(key, file, {
          level: 'protected',
          contentType: mimeType,
          // eslint-disable-next-line no-undef
          metaData: { albumId: id, photoId },
        });
        await API.graphql(
          graphqlOperation(createPhotoMutation, { input: inputData }),
        );
        return Promise.resolve('success');
      } catch (error) {
        console.log('createPhoto error', error);
        return Promise.reject(error);
      }
    },
  },
  getters: {
    albums: (state) => state.albums,
    photo: (state) => state.photo,
  },
};
