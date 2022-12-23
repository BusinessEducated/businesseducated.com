/* eslint-disable no-param-reassign */
import create from 'zustand';
import produce from 'immer';
import { navigate } from 'gatsby-link';


// ========================================================================== //
// App Global Shared State
// ========================================================================== //
const saveStore = (storeSnapshot) => {
  localStorage.setItem('store', JSON.stringify(storeSnapshot));
};
const loadStore = () => JSON.parse(localStorage.getItem('store'));

// add on top of this for a more robust store
const useStore = create((set, get) => ({

  // temp holder for forms that have not been assigned their own store space
  bookingForm: {
    form: {
      text: '',
      number: '',
      file: '',
      date: '',
      message: '',
      consultant: {name: 'Aiden Faulconer', rate: 150},
      duration: 1,
    },
    methods: {
      changeFormData: (newContext) => {
        set(produce((state) => {
          state.bookingForm = {
            ...state.bookingForm,
            ...newContext,
          };
        }));
      },
      clear: () => {
        set(produce((state) => {
          state.bookingForm = {
            ...Object(
              Object.keys(state.bookingForm).map((key) => ({ [key]: '' })),
            ),
          };
        }));
      },
    },
  },

  contactForm: {
    name: 'aiden',
    email: 'aidenf09@yahoo.com',
    message: 'Hello world',
    phone: false,
    service: false,
    methods: {
      changeFormData: (newContext) => {
        set(produce((state) => {
          state.bookingForm = {
            ...state.bookingForm,
            ...newContext,
          };
        }));
      },
      clear: () => {
        set(produce((state) => {
          state.bookingForm = {
            ...Object(
              Object.keys(state.bookingForm).map((key) => ({ [key]: '' })),
            ),
          };
        }));
      },
    },
  },

  podcastForm: {
    name: 'aiden',
    email: 'aidenf09@yahoo.com',
    message: 'Hello world',
    phone: false,
    service: false,
    methods: {
      changeFormData: (newContext) => {
        set(produce((state) => {
          state.bookingForm = {
            ...state.bookingForm,
            ...newContext,
          };
        }));
      },
      clear: () => {
        set(produce((state) => {
          state.bookingForm = {
            ...Object(
              Object.keys(state.bookingForm).map((key) => ({ [key]: '' })),
            ),
          };
        }));
      },
    },
  },
}));

export {
  useStore, saveStore, loadStore
};
// 60668172
