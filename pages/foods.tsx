import { useState } from "react";
import Head from "next/head";
import useCustomSwr from "../lib/swr";
import { Container } from "styles/Foods";
import type { GeneralResponse } from "types";
import type { NextPage } from "next";

const Foods: NextPage = () => {
  const [lang, setLang] = useState<string | null>(null);
  const { data, error, isLoading } = useCustomSwr<GeneralResponse<string[]>>({
    key: `food-${lang || ""}`,
    noFetch: lang ? false : true,
    config: { url: `api/foods?type=${lang ? lang : ""}`, method: "GET" },
    options: { refreshInterval: 0 },
  });

  const handleLang = (lang: string) => setLang(lang);

  return (
    <Container>
      <Head>
        <title>USE SWR TESTS</title>
      </Head>
      <h1 className="title" role="title">
        USE SWR TESTS
      </h1>
      {error && (
        <h3 className="error" role="error">
          Error
        </h3>
      )}
      <div className="languages">
        <button
          onClick={() => handleLang("persian")}
          className="btn"
          role="persianBtn"
        >
          Persian
        </button>
        <button
          onClick={() => handleLang("american")}
          className="btn"
          role="americanBtn"
        >
          American
        </button>
        <button
          onClick={() => handleLang("german")}
          className="btn"
          role="germanBtn"
        >
          German
        </button>
      </div>
      {lang && isLoading && (
        <h3 className="loading" role="loading">
          loading
        </h3>
      )}
      {data && (
        <ul role="food-list">
          {data.data?.map((d) => (
            <li role="food-list-item" key={d}>
              {d}
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
};

export default Foods;
