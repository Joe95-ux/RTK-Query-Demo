import Head from "next/head";
import { useState } from "react";
import {useLocation} from "react-router";
import { useRouter } from 'next/router';
import { useGetAllNewsQuery } from "@/store/apiSlice/newsApi";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { changeCurrIndex } from "@/store/slice/newsSlice";


interface NewsDetailsProps {
  data: any;
  title: string | string[] | undefined;
  location: string;
}

const NewsDetails: React.FC<NewsDetailsProps> = ({ data, title }) => {
  return (
    <div>Data: {data.title}</div>
  )
}

export default function News() {
    const [article, setArticle] = useState({});
    const router = useRouter();
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const { newsTitle } = router.query;
    const { data, error, isLoading, isError } = useGetAllNewsQuery({
      q:'apple',
      from:'2023-05-30',
      to:'2023-05-30',
      sortBy:'popularity',
      apiKey:'609f72c39cd44859b980aa17a4d35933'
    });

    const story:object = data?.articles.filter((art: { title: string | string[] | undefined; })=>art.title === newsTitle);
    
    const currIndex = useAppSelector((state) => state.news.currentIndex);
    const dispatch = useAppDispatch();

  
  return (
    <>
      <Head>
        <title>Create News App</title>
        <meta name="description" content="News app created with nextjs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <NewsDetails data = {story} title = {newsTitle} location= {path}/>
    </>
  );
}