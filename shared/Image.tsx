export const getImageUrl = ({ src, width }: Pick<Props, "src" | "width">) => {
  const url = new URL(src);

  return `https://i.guim.co.uk/img/media${url.pathname}?width=${width}&dpr=2&s=none`;
};

type Props = {
  src: `https://media.guim.co.uk/${string}`;
  alt: string;
  width: number;
  height: number;
};

export const Image = ({ src, alt, width, height }: Props) => (
  <img
    style={{aspectRatio: `${width} / ${height}`, width: '100%'}}
    src={getImageUrl({ src, width })}
    alt={alt}
  />
);
