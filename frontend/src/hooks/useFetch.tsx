import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

export const useHttpGet = (url: string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      setData(response.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, refetch: fetchData };
};

// Hook personalizado para requisições HTTP POST
export const useHttpPost = () => {
  const [loading, setLoading] = useState(false);

  const postData = useCallback(async (url: string, body: unknown, onSuccess?: () => void) => {
    try {
      setLoading(true);
      await axios.post(url, body);
      setLoading(false);

      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      setLoading(false);
    }
  }, []);

  return { postData, loading };
};