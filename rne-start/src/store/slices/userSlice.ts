import { createSlice } from '@reduxjs/toolkit';
import { User } from '../types';
import { faker } from '@faker-js/faker';
import { SettingProfileType } from '../../types';

const initialState: User = {
  id: '001',
  isAuth: true,
  firstName: 'Геннадий',
  secondName: 'Бабушкин',
  age: '9',
  avatar: faker.image.avatar(),
  phone: '',
  location: 'Беларусь',
  countOfFollowers: '45',
  countOfFollows: '32',
  countOfPosts: '18',
};

const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    updateProfileSettings(state, { payload }: { payload: SettingProfileType }) {
      state.firstName = payload.firstName;
      state.secondName = payload.secondName;
      state.age = payload.age;
      state.phone = payload.phone;
      state.location = payload.location;
      console.log(payload);
    },
  },
});

export const {
  reducer: userReducer,
  actions: { updateProfileSettings },
} = userSlice;
