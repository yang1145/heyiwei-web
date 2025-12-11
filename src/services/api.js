import axios from 'axios';

// 创建Axios实例
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// API方法
export const entriesApi = {
  // 获取所有词条
  getEntries: async () => {
    try {
      const response = await apiClient.get('/entries');
      return response.data;
    } catch (error) {
      console.error('获取所有词条失败:', error);
      throw error;
    }
  },

  // 根据ID获取词条
  getEntryById: async (id) => {
    try {
      const response = await apiClient.get(`/entries/${id}`);
      return response.data;
    } catch (error) {
      console.error(`获取ID为${id}的词条失败:`, error);
      throw error;
    }
  },

  // 创建新词条
  createEntry: async (entry) => {
    try {
      const response = await apiClient.post('/entries', entry);
      return response.data;
    } catch (error) {
      console.error('创建词条失败:', error);
      throw error;
    }
  },

  // 更新词条
  updateEntry: async (id, entry) => {
    try {
      const response = await apiClient.put(`/entries/${id}`, entry);
      return response.data;
    } catch (error) {
      console.error(`更新ID为${id}的词条失败:`, error);
      throw error;
    }
  },

  // 删除词条
  deleteEntry: async (id) => {
    try {
      const response = await apiClient.delete(`/entries/${id}`);
      return response.data;
    } catch (error) {
      console.error(`删除ID为${id}的词条失败:`, error);
      throw error;
    }
  },

  // 搜索词条
  searchEntries: async (query) => {
    try {
      const response = await apiClient.get('/entries/search', {
        params: { q: query }
      });
      return response.data;
    } catch (error) {
      console.error(`搜索词条失败:`, error);
      throw error;
    }
  }
};

export default entriesApi;
