/* eslint-disable no-param-reassign */
import { createTheme } from '@mui/material';
import create from 'zustand';
import React from 'react'; 
import produce from 'immer';
// ========================================================================== //
// Handle theming
// ========================================================================== //
import { navigate } from 'gatsby-link';

import {
  DARK_THEME, LIGHT_THEME, OVERRIDES, CUSTOM_THEME_PROPS,
} from './theme';
  
// ========================================================================== //
// App Global Shared State
// ========================================================================== //
const saveStore = (storeSnapshot) => {
  localStorage.setItem('store', JSON.stringify(storeSnapshot));
};
const loadStore = () => JSON.parse(localStorage.getItem('store'));

// add on top of this for a more robust store
const useStore = create((set, get) => ({
  appContext: {
    type: 'light',
    location: {},
    methods: {
      // ⚠️ setCurrent **is injected here via threeDCarousel** this allows you to set the carousel globally
      setAppContext: (newAppContext) => {
        set(produce((state) => {
          state.appContext = {
            ...state.appContext,
            newAppContext,
          };
        }));
      },
      toggleTheme: () => {
        set(produce((state) => {
          state.appContext.type = state.appContext.type === 'light' ? 'dark' : 'light';
        }));
      },
    },
  },

  // temp holder for forms that have not been assigned their own store space
  testForm: {
    text: '',
    number: '',
    file: '',
    date: '',
    message: '',
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

}));

export {
  createTheme, lt, dt, useStore, saveStore,
};
// 60668172
