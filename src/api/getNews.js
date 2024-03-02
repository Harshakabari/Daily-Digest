export const getNews = async (country, category, page, pageSize) => {
  try {
    const url_key = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=5b4b4dd3f4f84bc3b1d259f6c1d123b5&page=${page}&pageSize=${pageSize}`;
    let data = await fetch(url_key);
    let finalData = await data.json();
    // console.log(finalData);
    return {
      articles: finalData?.articles,
      totalResults: finalData?.totalResults,
    };
  } catch (error) {
    console.log(error);
  }
};
