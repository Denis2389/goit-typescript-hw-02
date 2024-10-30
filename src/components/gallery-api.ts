import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';

const ACCESS_KEY = 'C0lTgKjB-7GINIbSEyKXS3lHt6amTGWaNQ38-D8EAV0';

interface Photo {
  id: string;
  alt_description: string | null;
  urls: {
    small: string;
    regular: string;
  };
}

interface FetchGalleryResponse {
  results: Photo[];
  total: number;
  total_pages: number;
}

export const fetchGallery = async (searchQuery: string, page: number = 1): Promise<FetchGalleryResponse> => {
  const response = await axios.get<FetchGalleryResponse>(
    `/search/photos?client_id=${ACCESS_KEY}`,
    {
      params: {
        query: searchQuery,
        per_page: 18,
        page,
      },
    }
  );

  return response.data;
};
