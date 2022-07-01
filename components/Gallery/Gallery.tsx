import Image from "next/image";
import { useEffect, useState } from "react";
import { Container } from "./Gallery.styles";
import type { ImageType, StateType } from "./Gallery.types";

const Gallery: React.FC = () => {
  const [data, setData] = useState<StateType>({
    data: [],
    status: null,
    error: false,
    loading: false,
  });

  useEffect(() => {
    (async function GetPhotos() {
      setData({ data: [], status: null, error: false, loading: true });
      try {
        const res = await fetch("/api/photos", { method: "GET" });
        const dt: { message: string; data: ImageType[] } = await res.json();

        setData({
          data: dt.data,
          status: res.status,
          error: false,
          loading: false,
        });
      } catch (err) {
        setData({
          data: [],
          status: null,
          error: `We have an error ${JSON.stringify(err)}`,
          loading: false,
        });
      }
    })();
  }, []);

  return (
    <Container>
      <h1 role="title">Gallery</h1>
      {!data.loading && data.data.length === 0 && (
        <h1 role="no-items">No Items</h1>
      )}
      {data.loading && <h1 role="loading">Loading...</h1>}
      {data.data.map((item) => (
        <div role="image-list" key={item.id}>
          <h1>{item.name}</h1>
          <Image
            alt="image"
            src={item.src || ""}
            width="200px"
            height="200px"
          />
        </div>
      ))}
    </Container>
  );
};
export default Gallery;
