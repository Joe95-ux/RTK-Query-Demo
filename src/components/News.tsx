import Head from "next/head";
import { useGetAllNewsQuery } from "@/store/apiSlice/newsApi";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { changeCurrIndex } from "@/store/slice/newsSlice";

export default function News() {
  const { data, error, isLoading, isError } = useGetAllNewsQuery({
    q:'apple',
    from:'2023-05-30',
    to:'2023-05-30',
    sortBy:'popularity',
    apiKey:''
  });
  const currIndex = useAppSelector((state) => state.news.currentIndex);
  const dispatch = useAppDispatch();

  return (
    <>
      <>
        {isLoading ? (
          <>Loading...</>
        ) : isError ? (
          <>Error</>
        ) : (
          <main className="bg-gray-100 dark:bg-gray-900 py-10 px-12">
            <div className="grid grid-flow-row gap-3 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {data?.articles?.map((item: any, id: any) => {
                return (
                  <>
                    <div className="max-w-lg mx-auto">
                      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5" key={id}>
                          <a href={item.url}>
                            <img className="rounded-t-lg" src={item.urlToImage} alt="" />
                          </a>
                          <div className="p-5">
                              <a href={item.url}>
                                  <h5 className="text-gray-800 font-bold text-xl tracking-tight line-clamp-2 mb-2">{item.title}</h5>
                              </a>
                              <p className="font-normal text-gray-700 line-clamp-3 mb-3">{item.description}</p>
                              <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href={item.url}>
                                  Read more
                              </a>
                          </div>
                      </div>
                      
                    </div>
                  </>
                );
              })}
            </div>
          </main>
        )}
      </>
    </>
  );
}