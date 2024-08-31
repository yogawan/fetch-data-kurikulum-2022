import axios from 'axios';

// const API_KEY = 'NN1HcXOTDHlV9FwAzsizei-T2xKxLvenwvTGOAICki2OkmDqn4lNISYNx9TZLzouv7g5-JjAQ-lBcDQImZ-XPqgy1egm_H2_m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnCSSOADruDFkSTvedWYBKgpum1MDp9p7NFo60u2JlBqoddbYi5jy5hxI_wGaUfW9-1mSo88Ym0ET3ojHbvRYnidHZSzg_Me2f9z9Jw9Md8uu&lib=M210bAo23dVDqBovQm6pzNCvTTABYAXY9';

const fetchData = async () => {
  try {
    const response = await axios.get("https://script.googleusercontent.com/macros/echo?user_content_key=vgtxxJO8bEzd4_TM7-27PsARkHquSlG_iERw1YPmA0XTLsC1fBe3gvyhX2YgERq1iGezYb5EAtNNu_MdnpQVdYekfSwk9LFjm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnOget-tMuXty18SMLn4-EfsOTNu5VHMw7w2L3JN94-ilFa3vn0LEzBcl3Wzy-LfQp5Efa4zoHd2KitN7x6yEVfQSjIquWpC_gA&lib=MqNx2kPZps7ScnRum9tPFQLn_u9v4y-7z");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default fetchData;