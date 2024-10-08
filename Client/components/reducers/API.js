import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const req = axios.create({
  baseURL: 'http://192.168.1.51:3001/api/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});

export const loadPhonebooks = createAsyncThunk(
  'contacts/loadPhonebooks',
  async ({ keyword, sort }) => {
    const { data } = await req.get('phonebooks', { params: { keyword, sort } });
    return data;
  }
);

export const loadPage = createAsyncThunk(
  'contacts/loadPage',
  async ({ page, keyword, sort }) => {
    const { data } = await req.get('phonebooks', { params: { page, keyword, sort } });
    return data;
  }
);

export const addPhonebooks = createAsyncThunk(
  'contacts/addPhonebooks',
  async (contact) => {
    const { data } = await req.post('phonebooks', contact);
    return data;
  }
);

export const deletePhonebooks = createAsyncThunk(
  'contacts/deletePhonebooks',
  async ({ id }) => {
    const { data } = await req.delete(`phonebooks/${id}`);
    return data;
  }
);

export const updateData = createAsyncThunk(
  'contacts/updateData',
  async ({ id, contact }) => {
    const { data } = await req.put(`phonebooks/${id}`, contact);
    return data;
  }
);

export const updateAvatar = createAsyncThunk(
  'contacts/updateAvatar',
  async ({ id, formData }) => {
    const { data } = await req.put(`phonebooks/${id}/avatar`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return data;
  }
);
